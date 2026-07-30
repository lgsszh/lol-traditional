import { readFile } from "node:fs/promises";
import { fetchJson, writeOrCheck } from "./classic-generator-utils.mjs";

const outputPath = new URL("../app/classic-mayhem.generated.ts", import.meta.url);
const classicDataPath = new URL("../app/classic-data.ts", import.meta.url);
const versionsUrl = "https://ddragon.leagueoflegends.com/api/versions.json";

const htmlEntities = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

function cleanText(value = "") {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/%i:[^%]+%/gi, "")
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (entity) => htmlEntities[entity] || entity)
    .replace(/@\w+(?:\*\d+(?:\.\d+)?)?@/g, "动态数值")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveDataValues(value, dataValues = {}) {
  return value.replace(/@(\w+)(?:\*([\d.]+))?@/g, (token, key, multiplierValue) => {
    const values = dataValues[key];
    const rawValue = Array.isArray(values) ? values[0] : values;
    if (!Number.isFinite(rawValue)) return token;
    const multiplier = multiplierValue ? Number(multiplierValue) : 1;
    return String(Math.round(rawValue * multiplier * 1000) / 1000);
  });
}

function readRoster(source) {
  return [...source.matchAll(/champion\("(\d+)",\s*"([^"]+)"/g)].map((match) => ({
    classicId: match[1],
    key: match[2],
  }));
}

function rarityName(value) {
  return value === "kPrismatic" ? "prismatic" : value === "kGold" ? "gold" : "silver";
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

function augmentTags(apiName, name, description) {
  const source = `${apiName} ${name} ${description}`.toLowerCase();
  const rules = [
    ["attack", /攻击|攻速|暴击|射程|普攻|斩杀|穿甲|双刀|瞄准镜|deft|marks|scope|critical|strike|stab/],
    ["spell", /技能|法术|法强|魔法|冷却|急速|飞弹|巫师|冥火|spell|magic|haste|missile|fire|hexcore/],
    ["tank", /生命|护甲|魔抗|护盾|治疗|回复|减伤|韧性|钢|坦克|防御|heart|defen|heal|shield|eternity/],
    ["utility", /移动|召唤|雪球|魄罗|传送|视野|控制|辅助|队友|snowball|poro|summon|portal|safari|dodge/],
  ];
  const tags = rules.filter(([, pattern]) => pattern.test(source)).map(([tag]) => tag);
  return tags.length > 0 ? tags : ["adaptive"];
}

function normalizeAugment(path, metadata, descriptions, classicExclusive) {
  const apiName = path.split("/").at(-1);
  const meta = metadata.find((entry) => entry.augmentNameId === apiName);
  if (!meta) throw new Error(`Missing augment metadata: ${apiName}`);
  const descriptionEntry = descriptions.find((entry) =>
    entry.apiName === apiName || entry.apiName === apiName.replace(/^ARAM_/, ""));
  const description = descriptionEntry
    ? cleanText(resolveDataValues(descriptionEntry.desc || descriptionEntry.tooltip, descriptionEntry.dataValues))
    : "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。";
  return {
    id: meta.id,
    apiName,
    name: meta.nameTRA,
    rarity: rarityName(meta.rarity),
    icon: `https://raw.communitydragon.org/${communityPatch}/game/${meta.augmentSmallIconPath
      .replace(/^\/lol-game-data\/assets\//, "")
      .toLowerCase()}`,
    description,
    tags: augmentTags(apiName, meta.nameTRA, description),
    classicExclusive: classicExclusive.has(apiName.replace(/^ARAM_/, "")),
    hasPublicDescription: Boolean(descriptionEntry),
  };
}

const versions = await fetchJson(versionsUrl, "Data Dragon versions");
const livePatch = versions[0];
if (!/^\d+\.\d+\.\d+$/.test(livePatch)) throw new Error(`Unexpected Data Dragon patch: ${livePatch}`);
const communityPatch = livePatch.split(".").slice(0, 2).join(".");
const communityBase = `https://raw.communitydragon.org/${communityPatch}`;

const classicSource = await readFile(classicDataPath, "utf8");
const roster = readRoster(classicSource);
if (roster.length !== 60) throw new Error(`Expected 60 Classic champions, received ${roster.length}`);

const [augmentLists, augmentMetadata, arenaData] = await Promise.all([
  fetchJson(
    `${communityBase}/plugins/rcp-be-lol-game-data/global/zh_cn/v1/augment-lists.json`,
    `CommunityDragon ${communityPatch} augment lists`,
  ),
  fetchJson(
    `${communityBase}/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json`,
    `CommunityDragon ${communityPatch} augment metadata`,
  ),
  fetchJson(`${communityBase}/cdragon/arena/zh_cn.json`, `CommunityDragon ${communityPatch} augment descriptions`),
]);
const championPayloads = await mapWithConcurrency(roster, 8, ({ key }) =>
  fetchJson(
    `https://ddragon.leagueoflegends.com/cdn/${livePatch}/data/zh_CN/champion/${key}.json`,
    `Data Dragon ${livePatch} ${key}`,
  ));

const regularList = augmentLists.find((entry) => entry.modeName === "KIWI");
const classicList = augmentLists.find((entry) => entry.modeName === "KIWI_JADE");
if (!regularList || !classicList) throw new Error("KIWI or KIWI_JADE augment list is missing");

const regularNames = new Set(regularList.augmentList.map((path) => path.split("/").at(-1).replace(/^ARAM_/, "")));
const classicNames = new Set(classicList.augmentList.map((path) => path.split("/").at(-1).replace(/^ARAM_/, "")));
const classicExclusive = new Set([...classicNames].filter((name) => !regularNames.has(name)));

const champions = roster.map((rosterEntry, index) => {
  const payload = championPayloads[index]?.data?.[rosterEntry.key];
  if (!payload) throw new Error(`Missing Data Dragon champion: ${rosterEntry.key}`);
  return {
    classicId: rosterEntry.classicId,
    key: payload.id,
    name: payload.name,
    title: payload.title,
    portrait: `https://ddragon.leagueoflegends.com/cdn/${livePatch}/img/champion/${payload.image.full}`,
    splash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${payload.id}_0.jpg`,
    tags: payload.tags,
    stats: {
      hp: payload.stats.hp,
      hpPerLevel: payload.stats.hpperlevel,
      attackDamage: payload.stats.attackdamage,
      attackDamagePerLevel: payload.stats.attackdamageperlevel,
      attackSpeed: payload.stats.attackspeed,
      armor: payload.stats.armor,
      magicResist: payload.stats.spellblock,
      moveSpeed: payload.stats.movespeed,
      attackRange: payload.stats.attackrange,
    },
    abilities: [
      {
        key: "P",
        name: payload.passive.name,
        description: cleanText(payload.passive.description),
        icon: `https://ddragon.leagueoflegends.com/cdn/${livePatch}/img/passive/${payload.passive.image.full}`,
        cooldown: null,
        cost: null,
        range: null,
      },
      ...payload.spells.map((spell, spellIndex) => ({
        key: ["Q", "W", "E", "R"][spellIndex],
        name: spell.name,
        description: cleanText(spell.description),
        icon: `https://ddragon.leagueoflegends.com/cdn/${livePatch}/img/spell/${spell.image.full}`,
        cooldown: spell.cooldownBurn || null,
        cost: spell.costBurn || null,
        range: spell.rangeBurn || null,
      })),
    ],
  };
});

const regularAugments = regularList.augmentList.map((path) =>
  normalizeAugment(path, augmentMetadata, arenaData.augments, classicExclusive));
const classicAugments = classicList.augmentList.map((path) =>
  normalizeAugment(path, augmentMetadata, arenaData.augments, classicExclusive));

const output = `// Generated from Riot Data Dragon ${livePatch} and CommunityDragon ${communityPatch}. Do not edit manually.
export const CLASSIC_MAYHEM_PATCH = ${JSON.stringify(communityPatch)};
export const LIVE_DATA_PATCH = ${JSON.stringify(livePatch)};
export const CLASSIC_MAYHEM_MODE = "KIWI_JADE" as const;
export const REGULAR_MAYHEM_MODE = "KIWI" as const;

export type MayhemAbility = {
  key: "P" | "Q" | "W" | "E" | "R";
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
};

export type LiveClassicChampion = {
  classicId: string;
  key: string;
  name: string;
  title: string;
  portrait: string;
  splash: string;
  tags: string[];
  stats: {
    hp: number;
    hpPerLevel: number;
    attackDamage: number;
    attackDamagePerLevel: number;
    attackSpeed: number;
    armor: number;
    magicResist: number;
    moveSpeed: number;
    attackRange: number;
  };
  abilities: MayhemAbility[];
};

export type MayhemAugment = {
  id: number;
  apiName: string;
  name: string;
  rarity: "silver" | "gold" | "prismatic";
  icon: string;
  description: string;
  tags: string[];
  classicExclusive: boolean;
  hasPublicDescription: boolean;
};

export const liveClassicChampions: LiveClassicChampion[] = ${JSON.stringify(champions, null, 2)};

export const regularMayhemAugments: MayhemAugment[] = ${JSON.stringify(regularAugments, null, 2)};

export const classicMayhemAugments: MayhemAugment[] = ${JSON.stringify(classicAugments, null, 2)};

export const classicExclusiveAugments = classicMayhemAugments.filter((augment) => augment.classicExclusive);
`;

await writeOrCheck(
  outputPath,
  output,
  `Classic Mayhem ${livePatch}/${communityPatch} generated snapshot`,
);

console.log(
  `Classic Mayhem snapshot: ${champions.length} champions, ${classicAugments.length} KIWI_JADE augments, `
  + `${classicExclusive.size} Classic-exclusive augments (${livePatch}).`,
);
