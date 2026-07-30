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
import { parseOpggSkillBuild } from "./opgg-mayhem-parser.mjs";

const outputPath = new URL("../app/classic-mayhem-opgg.generated.ts", import.meta.url);
const rankingOutputPath = new URL("../app/classic-mayhem-ranking.generated.ts", import.meta.url);
const classicDataPath = new URL("../app/classic-data.ts", import.meta.url);
const classicItemsPath = new URL("../app/classic-items.generated.ts", import.meta.url);
const modePath = "/zh-cn/lol/modes/aram-mayhem-classic";
const modeUrl = `https://op.gg${modePath}`;
const startingGold = 1400;
const requestSpacingMs = 300;
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
  const metric = {
    pickRate: Number(pickMatch[1]),
    games: Number(gamesMatch[1].replace(/,/g, "")),
    winRate: Number(winMatch[1]),
  };
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

function parseItemsTable($, caption, expectedRows, itemMap, championName) {
  const rows = tableByCaption($, caption).find("tbody tr").toArray();
  if (rows.length !== expectedRows) {
    throw new Error(`${championName}: ${caption} expected ${expectedRows} rows, received ${rows.length}`);
  }
  return rows.map((element, rowIndex) => {
    const row = $(element);
    const itemIds = row.find("td").first().find("img").toArray().flatMap((image) => {
      const itemId = imageKey($(image).attr("src"), "item");
      const quantityText = $(image).closest("div.relative").children("div.absolute").last().text().trim();
      const quantity = quantityText ? Number(quantityText) : 1;
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        throw new Error(`${championName}: invalid ${itemId} quantity ${quantityText}`);
      }
      return Array.from({ length: quantity }, () => itemId);
    });
    if (itemIds.length === 0) throw new Error(`${championName}: ${caption} row ${rowIndex + 1} has no items`);
    for (const itemId of itemIds) {
      if (!itemMap.has(itemId)) throw new Error(`${championName}: OP.GG item ${itemId} is absent from Classic catalog`);
    }
    return {
      itemIds,
      totalPrice: itemIds.reduce((sum, itemId) => sum + itemMap.get(itemId).price, 0),
      metric: parseMetric(row, `${championName} ${caption} row ${rowIndex + 1}`),
    };
  });
}

function parseChampionPage(html, rosterEntry, ranking, patch, itemMap) {
  const $ = load(html);
  const sourceUrl = `${modeUrl}/${ranking.key}/build?region=global&tier=all&patch=${patch}`;
  const expectedCanonical = `${modeUrl}/${ranking.key}/build`;
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
      `${ranking.name}: unexpected detail identity `
      + `(canonical=${canonical || "missing"}, title=${title || "missing"}, patch=${selectedPatch.length})`,
    );
  }

  const augmentRows = tableByCaption($, "增幅装置").find("tbody tr").toArray();
  if (augmentRows.length !== 10) {
    throw new Error(`${ranking.name}: expected 10 augment rows, received ${augmentRows.length}`);
  }
  const augments = augmentRows.map((element, rowIndex) => {
    const row = $(element);
    const image = row.find("img").first();
    const name = image.attr("alt")?.trim();
    const remoteKey = imageKey(image.attr("src"), "augment").replace(/_small$/i, "");
    const nameMatches = classicMayhemAugments.filter((entry) => entry.name === name);
    const keyMatches = classicMayhemAugments.filter(
      (entry) => normalizeKey(entry.apiName) === normalizeKey(remoteKey),
    );
    if (nameMatches.length > 1 || (!nameMatches.length && keyMatches.length !== 1)) {
      throw new Error(
        `${ranking.name}: ambiguous OP.GG augment ${name || remoteKey} `
        + `(name matches ${nameMatches.length}, icon matches ${keyMatches.length})`,
      );
    }
    const augment = nameMatches[0] ?? keyMatches[0];
    if (!name || !augment) {
      throw new Error(`${ranking.name}: cannot map OP.GG augment ${name || remoteKey} to KIWI_JADE catalog`);
    }
    return {
      augmentId: augment.id,
      apiName: augment.apiName,
      name,
      metric: parseMetric(row, `${ranking.name} augment row ${rowIndex + 1}`),
    };
  });

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

  const skillRow = tableByCaption($, "SkillOrder Table").find("tbody tr").first();
  const { priority, levelSequence } = parseOpggSkillBuild($, skillRow, ranking.name);
  const skillBuilds = [{
    priority,
    levelSequence,
    metric: parseMetric(skillRow, `${ranking.name} skill build`),
  }];

  const starting = parseItemsTable($, "Items Table", 2, itemMap, ranking.name);
  const boots = parseItemsTable($, "Boots Table", 2, itemMap, ranking.name);
  const core = parseItemsTable($, "Builds Table", 5, itemMap, ranking.name);
  for (const recommendation of starting) {
    if (recommendation.totalPrice > startingGold) {
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
    augments,
    summonerSets,
    runes: {
      status: "unavailable",
      reason: "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。",
    },
    skillBuilds,
    items: { starting, boots, core },
  };
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
  const sourceUrl = `${modeUrl}/${ranking.key}/build?region=global&tier=all&patch=${patch}`;
  const result = await fetchValidated(
    sourceUrl,
    `OP.GG ${ranking.name} Classic-ish build`,
    (html) => parseChampionPage(html, entry, ranking, patch, itemMap),
  );
  if ((index + 1) % 10 === 0 || index === roster.length - 1) {
    console.log(`Parsed ${index + 1}/${roster.length} OP.GG Classic-ish champion builds`);
  }
  return result;
});
builds.sort((left, right) => left.rank - right.rank);

const snapshotHash = createHash("sha256")
  .update(JSON.stringify({ patch, assetPatch, builds }))
  .digest("hex");
const output = `// Generated from OP.GG ARAM Mayhem Classic-ish ${patch}. Do not edit manually.
export const OP_GG_MAYHEM_PATCH = ${JSON.stringify(patch)};
export const OP_GG_MAYHEM_ASSET_PATCH = ${JSON.stringify(assetPatch)};
export const OP_GG_MAYHEM_SOURCE_URL = ${JSON.stringify(modeUrl)};
export const OP_GG_MAYHEM_SNAPSHOT_HASH = ${JSON.stringify(snapshotHash)};
export const MAYHEM_STARTING_GOLD = ${startingGold};
export const MAYHEM_HAS_JUNGLE_ROLE = false;

export type OpggMetric = {
  pickRate: number;
  games: number;
  winRate: number;
};

export type OpggItemRecommendation = {
  itemIds: string[];
  totalPrice: number;
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
