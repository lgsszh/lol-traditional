import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import {
  decodeNextPayload,
  extractBalancedArray,
  fetchText,
} from "./classic-generator-utils.mjs";
import {
  classicMasteries,
  classicRuneGroups,
  classicSpells,
} from "../app/classic-data.ts";

const SNAPSHOT_FILE = fileURLToPath(
  new URL("../app/classic-catalog-opgg.generated.ts", import.meta.url),
);

const CATALOGS = {
  runes: {
    kind: "runes",
    label: "符文",
    url: "https://op.gg/zh-cn/lol/classic/runes/catalog",
    expectedCount: 50,
  },
  masteries: {
    kind: "masteries",
    label: "天赋",
    url: "https://op.gg/zh-cn/lol/classic/masteries/catalog",
    expectedCount: 56,
  },
  spells: {
    kind: "spells",
    label: "召唤师技能",
    url: "https://op.gg/zh-cn/lol/classic/summoner-spells",
    expectedCount: 16,
  },
};

// classic-data.ts uses stable editorial IDs for runes. Keep the corresponding
// OP.GG identifiers explicit: a remote ID change must stop generation instead
// of silently binding an editorial rune ID to a different catalog entry.
const OP_GG_RUNE_IDS = {
  "mark-crit": "775251",
  "mark-crit-damage": "775249",
  "mark-ad-scaling": "775246",
  "mark-armor-pen": "775253",
  "mark-armor-lesser": "775257",
  "mark-cdr-lesser": "775265",
  "mark-health-lesser": "775255",
  "mark-magic-pen": "775273",
  "mark-attack": "775245",
  "mark-as": "775247",
  "mark-blank": "776247",
  "seal-armor-scaling": "775318",
  "seal-health-scaling": "775316",
  "seal-crit-lesser": "775311",
  "seal-crit-damage-lesser": "775309",
  "seal-as-lesser": "775307",
  "seal-mr-lesser": "775319",
  "seal-mana-regen": "775331",
  "seal-armor": "775317",
  "seal-gold": "775403",
  "seal-blank": "776317",
  "seal-health-regen": "775321",
  "seal-health": "775315",
  "glyph-ap-scaling": "775298",
  "glyph-cdr-scaling": "775296",
  "glyph-mr-scaling": "775290",
  "glyph-crit-damage-lesser": "775279",
  "glyph-as-lesser": "775277",
  "glyph-armor-lesser": "775287",
  "glyph-health-lesser": "775285",
  "glyph-mana": "775299",
  "glyph-ap": "775297",
  "glyph-blank": "776295",
  "glyph-cdr": "775295",
  "glyph-mr": "775289",
  "quint-health-percent": "775406",
  "quint-crit-damage": "775339",
  "quint-ap": "775357",
  "quint-spell-vamp": "775409",
  "quint-attack": "775335",
  "quint-as": "775337",
  "quint-armor": "775347",
  "quint-gold": "775367",
  "quint-xp": "775368",
  "quint-blank-as": "776337",
  "quint-blank-armor": "776347",
  "quint-blank-cdr": "776355",
  "quint-life-steal": "775412",
  "quint-health": "775345",
  "quint-move": "775365",
};

class SnapshotMismatchError extends Error {}

function requireString(entry, field, catalogLabel) {
  if (typeof entry[field] !== "string" || !entry[field].trim()) {
    throw new Error(
      `${catalogLabel}条目 ${entry.identifier || "(无 ID)"} 缺少 ${field}`,
    );
  }
}

function parseCooldown(entry, required) {
  const cooldownFacts = entry.facts.filter((fact) => fact.kind === "cooldown");
  if (cooldownFacts.length > 1 || (required && cooldownFacts.length !== 1)) {
    throw new Error(
      `条目 ${entry.identifier} 的 cooldown 字段数量异常：`
        + `${cooldownFacts.length}`,
    );
  }
  if (!cooldownFacts.length) return null;

  const cooldown = Number(cooldownFacts[0].value);
  if (!Number.isFinite(cooldown)) {
    throw new Error(`条目 ${entry.identifier} 的 cooldown 不是有效数字`);
  }
  return cooldown;
}

function validateRemoteEntries(entries, catalog) {
  if (!Array.isArray(entries)) {
    throw new Error(`${catalog.label}目录 entries 不是数组`);
  }
  if (entries.length !== catalog.expectedCount) {
    throw new Error(
      `${catalog.label}目录数量异常：预期 ${catalog.expectedCount}，`
        + `实际 ${entries.length}`,
    );
  }

  const identifiers = new Set();
  for (const entry of entries) {
    if (!entry || typeof entry !== "object") {
      throw new Error(`${catalog.label}目录包含非对象条目`);
    }
    requireString(entry, "identifier", catalog.label);
    requireString(entry, "title", catalog.label);
    requireString(entry, "description", catalog.label);
    requireString(entry, "imageUrl", catalog.label);

    if (!Array.isArray(entry.facts)) {
      throw new Error(
        `${catalog.label}条目 ${entry.identifier} 缺少 facts 数组`,
      );
    }
    for (const fact of entry.facts) {
      if (
        !fact
        || typeof fact !== "object"
        || typeof fact.kind !== "string"
        || typeof fact.value !== "string"
      ) {
        throw new Error(
          `${catalog.label}条目 ${entry.identifier} 包含无效 facts 字段`,
        );
      }
    }

    if (entry.group !== null) {
      if (
        !entry.group
        || typeof entry.group !== "object"
        || typeof entry.group.key !== "string"
        || !entry.group.key
        || (
          entry.group.label !== null
          && typeof entry.group.label !== "string"
        )
      ) {
        throw new Error(
          `${catalog.label}条目 ${entry.identifier} 包含无效 group 字段`,
        );
      }
    }
    if (
      (catalog.kind === "runes" || catalog.kind === "masteries")
      && entry.group === null
    ) {
      throw new Error(`${catalog.label}条目 ${entry.identifier} 缺少 group`);
    }

    parseCooldown(entry, catalog.kind === "spells");
    if (identifiers.has(entry.identifier)) {
      throw new Error(`${catalog.label}目录出现重复 ID：${entry.identifier}`);
    }
    identifiers.add(entry.identifier);
  }
}

async function fetchCatalog(catalog) {
  const html = await fetchText(catalog.url, `OP.GG Classic ${catalog.label}目录`);
  const payload = decodeNextPayload(html);
  if (!payload) {
    throw new Error(`${catalog.label}目录未找到 Next.js 数据载荷`);
  }
  const entries = JSON.parse(extractBalancedArray(payload, '"entries":'));
  validateRemoteEntries(entries, catalog);
  return entries;
}

function assertUniqueIds(label, ids) {
  if (new Set(ids).size !== ids.length) {
    throw new Error(`${label}包含重复 ID`);
  }
}

function assertExactIdSet(label, expectedIds, actualIds) {
  assertUniqueIds(`${label}预期集合`, expectedIds);
  assertUniqueIds(`${label}实际集合`, actualIds);

  const expected = new Set(expectedIds);
  const actual = new Set(actualIds);
  const missing = expectedIds.filter((id) => !actual.has(id));
  const added = actualIds.filter((id) => !expected.has(id));
  if (!missing.length && !added.length) return;

  const details = [];
  if (missing.length) details.push(`缺少 ${missing.join(", ")}`);
  if (added.length) details.push(`新增 ${added.join(", ")}`);
  throw new Error(`${label} ID 漂移：${details.join("；")}`);
}

function normalizeEntry(entry, catalog) {
  return {
    identifier: entry.identifier,
    title: entry.title,
    description: entry.description,
    imageUrl: entry.imageUrl,
    group: entry.group === null
      ? null
      : {
          key: entry.group.key,
          label: entry.group.label,
        },
    facts: entry.facts.map((fact) => ({
      kind: fact.kind,
      value: fact.value,
    })),
    cooldown: parseCooldown(entry, catalog.kind === "spells"),
  };
}

function buildSnapshot(remoteCatalogs) {
  const localRunes = classicRuneGroups.flatMap((group) =>
    group.runes.map((rune) => rune.id));
  const mappedRuneIds = Object.keys(OP_GG_RUNE_IDS);
  assertExactIdSet("本地符文映射", localRunes, mappedRuneIds);

  const expectedRemoteRuneIds = localRunes.map(
    (runeId) => OP_GG_RUNE_IDS[runeId],
  );
  assertUniqueIds("OP.GG 符文映射", expectedRemoteRuneIds);
  assertExactIdSet(
    "OP.GG 符文目录",
    expectedRemoteRuneIds,
    remoteCatalogs.runes.map((entry) => entry.identifier),
  );

  const localMasteryIds = classicMasteries.map((mastery) => mastery.id);
  assertExactIdSet(
    "OP.GG 天赋目录",
    localMasteryIds,
    remoteCatalogs.masteries.map((entry) => entry.identifier),
  );

  const localSpellIds = classicSpells.map((spell) => spell.id);
  assertExactIdSet(
    "OP.GG 召唤师技能目录",
    localSpellIds,
    remoteCatalogs.spells.map((entry) => entry.identifier),
  );

  const runeById = new Map(
    remoteCatalogs.runes.map((entry) => [entry.identifier, entry]),
  );
  const masteryById = new Map(
    remoteCatalogs.masteries.map((entry) => [entry.identifier, entry]),
  );
  const spellById = new Map(
    remoteCatalogs.spells.map((entry) => [entry.identifier, entry]),
  );

  return {
    runeIdMap: Object.fromEntries(
      localRunes.map((runeId) => [runeId, OP_GG_RUNE_IDS[runeId]]),
    ),
    runes: localRunes.map((runeId) => ({
      runeId,
      ...normalizeEntry(
        runeById.get(OP_GG_RUNE_IDS[runeId]),
        CATALOGS.runes,
      ),
    })),
    masteries: localMasteryIds.map((identifier) =>
      normalizeEntry(masteryById.get(identifier), CATALOGS.masteries)),
    spells: localSpellIds.map((identifier) =>
      normalizeEntry(spellById.get(identifier), CATALOGS.spells)),
  };
}

function serialize(value) {
  return JSON.stringify(value, null, 2)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function renderSnapshot(snapshot) {
  const sources = Object.fromEntries(
    Object.entries(CATALOGS).map(([kind, catalog]) => [kind, catalog.url]),
  );

  return `// Generated from OP.GG Classic catalogs. Do not edit manually.
// Run: node scripts/check-classic-catalog-parity.mjs

export type OpggClassicCatalogFact = {
  readonly kind: string;
  readonly value: string;
};

export type OpggClassicCatalogGroup = {
  readonly key: string;
  readonly label: string | null;
};

export type OpggClassicCatalogEntry = {
  readonly identifier: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly group: OpggClassicCatalogGroup | null;
  readonly facts: readonly OpggClassicCatalogFact[];
  readonly cooldown: number | null;
};

export type OpggClassicRuneCatalogEntry = OpggClassicCatalogEntry & {
  readonly runeId: string;
};

export const classicOpggCatalogSources = ${serialize(sources)} as const;

export const classicOpggRuneIdMap = ${serialize(snapshot.runeIdMap)} as const;

export const classicOpggRunes = ${serialize(snapshot.runes)} as const satisfies readonly OpggClassicRuneCatalogEntry[];

export const classicOpggMasteries = ${serialize(snapshot.masteries)} as const satisfies readonly OpggClassicCatalogEntry[];

export const classicOpggSpells = ${serialize(snapshot.spells)} as const satisfies readonly OpggClassicCatalogEntry[];

export const classicOpggCatalogSnapshot = {
  runes: classicOpggRunes,
  masteries: classicOpggMasteries,
  spells: classicOpggSpells,
} as const;
`;
}

function normalizeEol(value) {
  return value.replace(/\r\n?/g, "\n");
}

function firstDifference(expected, actual) {
  const expectedLines = expected.split("\n");
  const actualLines = actual.split("\n");
  const lineCount = Math.max(expectedLines.length, actualLines.length);
  for (let index = 0; index < lineCount; index += 1) {
    if (expectedLines[index] !== actualLines[index]) {
      return {
        line: index + 1,
        expected: expectedLines[index] ?? "(文件已结束)",
        actual: actualLines[index] ?? "(文件已结束)",
      };
    }
  }
  return null;
}

async function readCurrentSnapshot() {
  try {
    return await readFile(SNAPSHOT_FILE, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

async function writeSnapshot(rendered) {
  const current = await readCurrentSnapshot();
  if (current !== null && normalizeEol(current) === normalizeEol(rendered)) {
    return false;
  }
  await writeFile(SNAPSHOT_FILE, rendered, "utf8");
  return true;
}

async function checkSnapshot(rendered) {
  const current = await readCurrentSnapshot();
  if (current === null) {
    throw new SnapshotMismatchError(
      "快照文件不存在；请先运行默认生成命令",
    );
  }

  const expected = normalizeEol(rendered);
  const actual = normalizeEol(current);
  if (expected === actual) return;

  const difference = firstDifference(expected, actual);
  throw new SnapshotMismatchError(
    `快照与 OP.GG 不一致（第 ${difference.line} 行）\n`
      + `  OP.GG：${difference.expected}\n`
      + `  本地：${difference.actual}`,
  );
}

async function main() {
  const args = process.argv.slice(2);
  const checkMode = args.length === 1 && args[0] === "--check";
  if (args.length && !checkMode) {
    throw new Error(`未知参数：${args.join(" ")}`);
  }

  const [runes, masteries, spells] = await Promise.all([
    fetchCatalog(CATALOGS.runes),
    fetchCatalog(CATALOGS.masteries),
    fetchCatalog(CATALOGS.spells),
  ]);
  const snapshot = buildSnapshot({ runes, masteries, spells });
  const rendered = renderSnapshot(snapshot);

  if (checkMode) {
    await checkSnapshot(rendered);
    console.log(
      `[catalog-parity] 快照校验通过：符文 ${runes.length} / `
        + `天赋 ${masteries.length} / 召唤师技能 ${spells.length}。`,
    );
    return;
  }

  const changed = await writeSnapshot(rendered);
  console.log(
    `[catalog-parity] ${changed ? "已生成" : "无需更新"} OP.GG Classic 快照：`
      + `符文 ${runes.length} / 天赋 ${masteries.length} / `
      + `召唤师技能 ${spells.length}。`,
  );
}

main().catch((error) => {
  if (error instanceof SnapshotMismatchError) {
    console.error(`[catalog-parity] ${error.message}`);
    process.exitCode = 1;
    return;
  }
  console.error(`[catalog-parity] 页面结构、数量或 ID 校验失败：${error.message}`);
  process.exitCode = 2;
});
