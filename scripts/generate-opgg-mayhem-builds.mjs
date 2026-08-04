import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import {
  decodeNextPayload,
  extractBalancedArray,
  fetchText,
  sleep,
  writeOrCheck,
} from "./classic-generator-utils.mjs";
import {
  CLASSIC_MAYHEM_PATCH,
  LIVE_DATA_PATCH,
  classicMayhemAugments,
} from "../app/classic-mayhem.generated.ts";
import { parseOpggAugmentGroups, parseOpggSkillBuild } from "./opgg-mayhem-parser.mjs";

const outputPath = new URL("../app/classic-mayhem-opgg.generated.ts", import.meta.url);
const rankingOutputPath = new URL("../app/classic-mayhem-ranking.generated.ts", import.meta.url);
const classicDataPath = new URL("../app/classic-data.ts", import.meta.url);
const classicItemsPath = new URL("../app/classic-items.generated.ts", import.meta.url);
const modePath = "/zh-cn/lol/modes/aram-mayhem-classic";
const modeUrl = `https://op.gg${modePath}`;
const startingGold = 1400;
const requestSpacingMs = 300;
const augmentRarityGroups = [
  { key: "1", rareity: 1, rarity: "silver" },
  { key: "4", rareity: 4, rarity: "gold" },
  { key: "8", rareity: 8, rarity: "prismatic" },
];
const augmentById = new Map(classicMayhemAugments.map((augment) => [augment.id, augment]));
let requestGate = Promise.resolve();
let nextRequestAt = 0;

function readRoster(source) {
  return [...source.matchAll(/champion\("(\d+)",\s*"([^"]+)"/g)].map((match) => ({
    classicId: match[1],
    key: match[2],
    riotId: Number(match[1]) - 60000,
  }));
}

function normalizeKey(value = "") {
  return value.replace(/^ARAM_/i, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function round(value, precision = 6) {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}

function validateMetric(metric, label) {
  if (
    !Number.isFinite(metric.pickRate)
    || !Number.isInteger(metric.games)
    || !Number.isFinite(metric.winRate)
    || metric.games <= 0
    || metric.pickRate < 0
    || metric.pickRate > 100
    || metric.winRate < 0
    || metric.winRate > 100
  ) {
    throw new Error(`${label}: invalid metric ${JSON.stringify(metric)}`);
  }
  return metric;
}

function parseMetric(row, label) {
  const cells = row.find("td");
  const pickText = cells.eq(-2).text().replace(/\s+/g, "");
  const winText = cells.eq(-1).text().replace(/\s+/g, "");
  const pickMatch = pickText.match(/(\d+(?:\.\d+)?)%/);
  const gamesMatch = pickText.match(/([\d,]+)场/);
  const winMatch = winText.match(/(\d+(?:\.\d+)?)%/);
  if (!pickMatch || !gamesMatch || !winMatch) {
    const compact = row.text().replace(/\s+/g, "");
    throw new Error(`${label}: cannot parse metric row "${compact.slice(0, 160)}"`);
  }
  return validateMetric({
    pickRate: Number(pickMatch[1]),
    games: Number(gamesMatch[1].replace(/,/g, "")),
    winRate: Number(winMatch[1]),
  }, label);
}

function parsePayloadMetric(entry, label) {
  return validateMetric({
    pickRate: Number(entry.pick_rate),
    games: Number(String(entry.play).replace(/,/g, "")),
    winRate: Number(entry.win_rate),
  }, label);
}

function imageKey(source, folder) {
  const match = source?.match(new RegExp(`/${folder}/([^/?]+)\\.png`, "i"));
  if (!match) throw new Error(`Cannot read ${folder} identifier from ${source}`);
  return decodeURIComponent(match[1]);
}

function canonicalImage(source) {
  if (!source) throw new Error("Missing image URL");
  return source.split("?")[0];
}

function tableByCaption($, caption) {
  const table = $("table").filter((_, element) => $(element).find("caption").text().trim() === caption).first();
  if (table.length === 0) throw new Error(`Missing table: ${caption}`);
  return table;
}

function validateChampionPageIdentity($, ranking, patch, tab) {
  const expectedCanonical = `${modeUrl}/${ranking.key}/${tab}`;
  const canonical = $("link[rel='canonical']").attr("href");
  const title = $("title").text().trim();
  const selectedPatch = $("label.select-label span.whitespace-nowrap")
    .filter((_, element) => $(element).text().trim() === `Ver: ${patch}`);
  if (
    canonical !== expectedCanonical
    || !title.includes(ranking.name)
    || !title.includes("ARAM: Mayhem Classic-ish")
    || selectedPatch.length < 1
  ) {
    throw new Error(
      `${ranking.name}: unexpected ${tab} identity `
      + `(canonical=${canonical || "missing"}, title=${title || "missing"}, patch=${selectedPatch.length})`,
    );
  }
}

function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  });
  return Promise.all(workers).then(() => results);
}

async function waitForRequestSlot() {
  let release;
  const previous = requestGate;
  requestGate = new Promise((resolve) => {
    release = resolve;
  });
  await previous;
  try {
    const delay = Math.max(0, nextRequestAt - Date.now());
    if (delay > 0) await sleep(delay);
    nextRequestAt = Date.now() + requestSpacingMs;
  } finally {
    release();
  }
}

async function fetchValidated(url, label, validate, attempts = 5) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await waitForRequestSlot();
      const html = await fetchText(url, label, 1);
      if (
        html.length < 1_000
        || /(?:cf-chl-|Just a moment|Attention Required|cf-error-code)/i.test(html)
      ) {
        const error = new Error("OP.GG returned a retryable challenge or incomplete HTML response");
        error.retryable = true;
        throw error;
      }
      return validate(html);
    } catch (error) {
      lastError = error;
      if (!error.retryable) throw error;
      if (attempt < attempts) {
        const backoff = Math.min(8_000, 750 * (2 ** (attempt - 1)));
        const delay = Math.max(
          error.retryAfter || 0,
          backoff + Math.floor(Math.random() * 350),
        );
        console.warn(`${label}: validation retry ${attempt + 1}/${attempts} in ${delay}ms (${error.message})`);
        await sleep(delay);
      }
    }
  }
  const finalError = new Error(`${label}: ${lastError?.message || lastError}`);
  finalError.retryable = true;
  throw finalError;
}

function parseItemsTable($, caption, expectedRows, itemMap, modeItemMap, championName) {
  const rows = tableByCaption($, caption).find("tbody tr").toArray();
  if (rows.length !== expectedRows) {
    throw new Error(`${championName}: ${caption} expected ${expectedRows} rows, received ${rows.length}`);
  }
  return rows.map((element, rowIndex) => {
    const row = $(element);
    const itemIds = row.find("td").first().find("img").toArray().flatMap((image) => {
      const source = canonicalImage($(image).attr("src"));
      const itemId = imageKey(source, "item");
      if (!itemMap.has(itemId)) {
        const name = $(image).attr("alt")?.trim() || itemId;
        const previous = modeItemMap.get(itemId);
        if (previous && (previous.name !== name || previous.icon !== source)) {
          throw new Error(`${championName}: OP.GG mode item ${itemId} metadata changed during snapshot`);
        }
        modeItemMap.set(itemId, previous || {
          id: itemId,
          name,
          icon: source,
          price: null,
          tags: [],
        });
      }
      const quantityText = $(image).closest("div.relative").children("div.absolute").last().text().trim();
      const quantity = quantityText ? Number(quantityText) : 1;
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        throw new Error(`${championName}: invalid ${itemId} quantity ${quantityText}`);
      }
      return Array.from({ length: quantity }, () => itemId);
    });
    if (itemIds.length === 0) throw new Error(`${championName}: ${caption} row ${rowIndex + 1} has no items`);
    const prices = itemIds.map((itemId) => itemMap.get(itemId)?.price ?? modeItemMap.get(itemId)?.price);
    return {
      itemIds,
      totalPrice: prices.every((price) => Number.isFinite(price))
        ? prices.reduce((sum, price) => sum + price, 0)
        : null,
      metric: parseMetric(row, `${championName} ${caption} row ${rowIndex + 1}`),
    };
  });
}

function parseBuildPage(html, rosterEntry, ranking, patch, itemMap, modeItemMap) {
  const $ = load(html);
  const sourceUrl = `${modeUrl}/${ranking.key}/build?region=global&tier=all&patch=${patch}`;
  validateChampionPageIdentity($, ranking, patch, "build");

  const summonerTables = $("table").filter(
    (_, element) => $(element).find("caption").text().trim() === "SummonerSpells Table",
  ).toArray();
  if (summonerTables.length === 0) throw new Error(`${ranking.name}: summoner spell table is empty`);
  const summonerSets = summonerTables.flatMap((table, tableIndex) =>
    $(table).find("tbody tr").toArray().map((element, rowIndex) => {
      const row = $(element);
      const spells = row.find("img").map((_, image) => {
        const source = $(image).attr("src");
        return {
          key: imageKey(source, "spell"),
          name: $(image).attr("alt")?.trim() || imageKey(source, "spell"),
          icon: canonicalImage(source),
        };
      }).get();
      if (spells.length !== 2) throw new Error(`${ranking.name}: summoner set must contain exactly 2 spells`);
      if (spells.some((spell) => /smite|惩戒/i.test(`${spell.key} ${spell.name}`))) {
        throw new Error(`${ranking.name}: Smite is not legal in ARAM Mayhem Classic-ish`);
      }
      return {
        spells,
        metric: parseMetric(row, `${ranking.name} summoner table ${tableIndex + 1} row ${rowIndex + 1}`),
      };
    }));
  if (summonerSets.length !== 2) {
    throw new Error(`${ranking.name}: expected 2 summoner spell rows, received ${summonerSets.length}`);
  }

  const starting = parseItemsTable($, "Items Table", 2, itemMap, modeItemMap, ranking.name);
  const boots = parseItemsTable($, "Boots Table", 2, itemMap, modeItemMap, ranking.name);
  const core = parseItemsTable($, "Builds Table", 5, itemMap, modeItemMap, ranking.name);
  for (const recommendation of starting) {
    if (recommendation.totalPrice !== null && recommendation.totalPrice > startingGold) {
      throw new Error(
        `${ranking.name}: starting recommendation costs ${recommendation.totalPrice}, above ${startingGold} gold`,
      );
    }
  }
  const runeSections = $("section").filter((_, element) =>
    $(element).find(`a[href*='${modePath}/${ranking.key}/runes']`).length > 0);
  if (runeSections.length !== 1) {
    throw new Error(`${ranking.name}: expected one rune section, received ${runeSections.length}`);
  }
  const unavailableRuneMessages = runeSections.find("p.text-sm.text-gray-400")
    .filter((_, element) => $(element).text().trim() === "数据未找到");
  if (unavailableRuneMessages.length !== 1 || runeSections.find("table").length !== 0) {
    throw new Error(`${ranking.name}: OP.GG rune availability changed; parser review is required`);
  }

  return {
    classicId: rosterEntry.classicId,
    key: ranking.key,
    name: ranking.name,
    sourceUrl,
    patch,
    rank: ranking.rank,
    tier: ranking.tier,
    championMetrics: {
      pickRate: round(Number(ranking.pick_rate) * 100),
      winRate: round(Number(ranking.win_rate) * 100),
    },
    startingGold,
    summonerSets,
    runes: {
      status: "unavailable",
      reason: "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。",
    },
    items: { starting, boots, core },
  };
}

function parseAugmentsPage(html, ranking, patch) {
  const $ = load(html);
  validateChampionPageIdentity($, ranking, patch, "augments");
  const payload = decodeNextPayload(html);
  const data = parseOpggAugmentGroups(payload, ranking.name);
  const keys = Object.keys(data).sort((left, right) => Number(left) - Number(right));
  if (keys.join(",") !== augmentRarityGroups.map((group) => group.key).join(",")) {
    throw new Error(`${ranking.name}: unexpected OP.GG augment rarity keys ${keys.join(",") || "(none)"}`);
  }

  const seenIds = new Set();
  const recommendations = augmentRarityGroups.flatMap((group) => {
    const entries = data[group.key];
    if (!Array.isArray(entries) || entries.length !== 15) {
      throw new Error(
        `${ranking.name}: expected 15 ${group.rarity} augment rows, received ${entries?.length ?? "invalid"}`,
      );
    }
    return entries.map((entry, rowIndex) => {
      if (
        !Number.isInteger(entry.id)
        || typeof entry.name !== "string"
        || !entry.name.trim()
        || Number(entry.rareity) !== group.rareity
      ) {
        throw new Error(
          `${ranking.name}: invalid ${group.rarity} augment payload row ${rowIndex + 1}`,
        );
      }
      if (seenIds.has(entry.id)) {
        throw new Error(`${ranking.name}: duplicate OP.GG augment id ${entry.id}`);
      }
      seenIds.add(entry.id);

      const augment = augmentById.get(entry.id);
      if (!augment) {
        throw new Error(`${ranking.name}: OP.GG augment id ${entry.id} is absent from KIWI_JADE catalog`);
      }
      if (augment.name !== entry.name.trim() || augment.rarity !== group.rarity) {
        throw new Error(
          `${ranking.name}: OP.GG augment ${entry.id} mismatch `
          + `(remote=${entry.name}/${group.rarity}, local=${augment.name}/${augment.rarity})`,
        );
      }
      return {
        augmentId: augment.id,
        apiName: augment.apiName,
        name: augment.name,
        rarity: group.rarity,
        metric: parsePayloadMetric(
          entry,
          `${ranking.name} ${group.rarity} augment row ${rowIndex + 1}`,
        ),
      };
    });
  });
  if (recommendations.length !== 45 || seenIds.size !== 45) {
    throw new Error(
      `${ranking.name}: expected 45 distinct OP.GG augment recommendations, `
      + `received ${recommendations.length}/${seenIds.size}`,
    );
  }
  return recommendations;
}

function parseSkillsPage(html, ranking, patch) {
  const $ = load(html);
  validateChampionPageIdentity($, ranking, patch, "skills");
  const skillRows = tableByCaption($, "Skill table").find("tbody tr").toArray();
  if (skillRows.length !== 5) {
    throw new Error(`${ranking.name}: expected 5 skill build rows, received ${skillRows.length}`);
  }
  return skillRows.map((element, rowIndex) => {
    const row = $(element);
    const { priority, levelSequence } = parseOpggSkillBuild($, row, ranking.name);
    return {
      priority,
      levelSequence,
      metric: parseMetric(row, `${ranking.name} skill build row ${rowIndex + 1}`),
    };
  });
}

function parseRootPage(html) {
  const rootPayload = decodeNextPayload(html);
  const rootChampions = JSON.parse(extractBalancedArray(rootPayload, '"champions":'));
  const rankings = rootChampions.filter((champion) =>
    Number.isInteger(champion.rank)
    && Number.isInteger(champion.tier)
    && Number.isFinite(champion.win_rate)
    && Number.isFinite(champion.pick_rate));
  if (rankings.length !== 60) {
    throw new Error(`OP.GG must expose exactly 60 ranked Classic-ish champions; received ${rankings.length}`);
  }
  const patch = rootPayload.match(/"query":\{"region":"global","tier":"all","patch":"(\d+\.\d+)"/)?.[1]
    || rootPayload.match(/"patch":"(\d+\.\d+)"/)?.[1];
  if (!patch) throw new Error("Cannot determine OP.GG ARAM Mayhem Classic-ish patch");
  const assetPatch = html.match(/\/meta\/images\/lol\/(\d+\.\d+\.\d+)\/champion\//)?.[1];
  if (!assetPatch || !assetPatch.startsWith(`${patch}.`)) {
    throw new Error(`Unexpected OP.GG asset patch ${assetPatch || "(missing)"} for statistics patch ${patch}`);
  }
  if (patch !== CLASSIC_MAYHEM_PATCH || !LIVE_DATA_PATCH.startsWith(`${patch}.`)) {
    throw new Error(
      `Cross-source patch mismatch: OP.GG ${patch}/${assetPatch}, `
      + `CommunityDragon ${CLASSIC_MAYHEM_PATCH}, Data Dragon ${LIVE_DATA_PATCH}`,
    );
  }
  return { rankings, patch, assetPatch };
}

const [classicSource, itemSource] = await Promise.all([
  readFile(classicDataPath, "utf8"),
  readFile(classicItemsPath, "utf8"),
]);
const roster = readRoster(classicSource);
if (roster.length !== 60) throw new Error(`Expected 60 local Classic champions, received ${roster.length}`);
const classicItems = JSON.parse(
  extractBalancedArray(itemSource, "export const classicItems: ClassicItem[] ="),
);
const itemMap = new Map(classicItems.map((item) => [item.id, item]));
const modeItemMap = new Map();

const { rankings, patch, assetPatch } = await fetchValidated(
  modeUrl,
  "OP.GG ARAM Mayhem Classic-ish ranking",
  parseRootPage,
);

const rankingById = new Map(rankings.map((champion) => [champion.id, champion]));
for (const entry of roster) {
  const ranking = rankingById.get(entry.riotId);
  if (!ranking) throw new Error(`${entry.key}: missing from OP.GG ranked Classic-ish roster`);
  if (normalizeKey(ranking.key) !== normalizeKey(entry.key)) {
    throw new Error(`${entry.key}: OP.GG slug changed to ${ranking.key}`);
  }
}

const builds = await mapWithConcurrency(roster, 3, async (entry, index) => {
  const ranking = rankingById.get(entry.riotId);
  const query = `region=global&tier=all&patch=${patch}`;
  const buildUrl = `${modeUrl}/${ranking.key}/build?${query}`;
  const augmentsUrl = `${modeUrl}/${ranking.key}/augments?${query}`;
  const skillsUrl = `${modeUrl}/${ranking.key}/skills?${query}`;
  const [build, augments, skillBuilds] = await Promise.all([
    fetchValidated(
      buildUrl,
      `OP.GG ${ranking.name} Classic-ish build`,
      (html) => parseBuildPage(html, entry, ranking, patch, itemMap, modeItemMap),
    ),
    fetchValidated(
      augmentsUrl,
      `OP.GG ${ranking.name} Classic-ish augments`,
      (html) => parseAugmentsPage(html, ranking, patch),
    ),
    fetchValidated(
      skillsUrl,
      `OP.GG ${ranking.name} Classic-ish skills`,
      (html) => parseSkillsPage(html, ranking, patch),
    ),
  ]);
  const result = { ...build, augments, skillBuilds };
  if ((index + 1) % 10 === 0 || index === roster.length - 1) {
    console.log(`Parsed ${index + 1}/${roster.length} OP.GG Classic-ish champion builds`);
  }
  return result;
});
builds.sort((left, right) => left.rank - right.rank);
const modeItems = [...modeItemMap.values()].sort((left, right) => left.id.localeCompare(right.id));

const snapshotHash = createHash("sha256")
  .update(JSON.stringify({ patch, assetPatch, builds, modeItems }))
  .digest("hex");
const output = `// Generated from OP.GG ARAM Mayhem Classic-ish ${patch}. Do not edit manually.
export const OP_GG_MAYHEM_PATCH = ${JSON.stringify(patch)};
export const OP_GG_MAYHEM_ASSET_PATCH = ${JSON.stringify(assetPatch)};
export const OP_GG_MAYHEM_SOURCE_URL = ${JSON.stringify(modeUrl)};
export const OP_GG_MAYHEM_SNAPSHOT_HASH = ${JSON.stringify(snapshotHash)};
export const MAYHEM_STARTING_GOLD = ${startingGold};
export const MAYHEM_HAS_JUNGLE_ROLE = false;

export type OpggMayhemItem = {
  id: string;
  name: string;
  icon: string;
  price: number | null;
  tags: string[];
};

export const opggMayhemItems: OpggMayhemItem[] = ${JSON.stringify(modeItems, null, 2)};

export type OpggMetric = {
  pickRate: number;
  games: number;
  winRate: number;
};

export type OpggItemRecommendation = {
  itemIds: string[];
  totalPrice: number | null;
  metric: OpggMetric;
};

export type OpggMayhemChampionBuild = {
  classicId: string;
  key: string;
  name: string;
  sourceUrl: string;
  patch: string;
  rank: number;
  tier: number;
  championMetrics: { pickRate: number; winRate: number };
  startingGold: number;
  augments: Array<{
    augmentId: number;
    apiName: string;
    name: string;
    rarity: "silver" | "gold" | "prismatic";
    metric: OpggMetric;
  }>;
  summonerSets: Array<{
    spells: Array<{ key: string; name: string; icon: string }>;
    metric: OpggMetric;
  }>;
  runes: { status: "unavailable"; reason: string };
  skillBuilds: Array<{
    priority: Array<"Q" | "W" | "E">;
    levelSequence: Array<"Q" | "W" | "E" | "R">;
    metric: OpggMetric;
  }>;
  items: {
    starting: OpggItemRecommendation[];
    boots: OpggItemRecommendation[];
    core: OpggItemRecommendation[];
  };
};

export const opggMayhemChampionBuilds: OpggMayhemChampionBuild[] = ${JSON.stringify(builds, null, 2)};
`;

const rankingOutput = `// Generated from the OP.GG ARAM Mayhem Classic-ish ${patch} snapshot. Do not edit manually.
export type OpggMayhemRankingSummary = {
  classicId: string;
  rank: number;
  tier: number;
  championMetrics: { pickRate: number; winRate: number };
  sourceUrl: string;
};

export const opggMayhemRankingSummary: OpggMayhemRankingSummary[] = ${JSON.stringify(
  builds.map((build) => ({
    classicId: build.classicId,
    rank: build.rank,
    tier: build.tier,
    championMetrics: build.championMetrics,
    sourceUrl: build.sourceUrl,
  })),
  null,
  2,
)};
`;

await Promise.all([
  writeOrCheck(outputPath, output, `OP.GG ARAM Mayhem Classic-ish ${patch} snapshot`),
  writeOrCheck(rankingOutputPath, rankingOutput, `OP.GG ARAM Mayhem Classic-ish ${patch} ranking summary`),
]);
console.log(
  `OP.GG Classic-ish snapshot: ${builds.length} champions, patch ${patch}, `
  + `sha256 ${snapshotHash.slice(0, 12)}.`,
);
