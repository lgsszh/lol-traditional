import { classicChampions } from "../app/classic-data.ts";
import {
  decodeNextPayload,
  extractBalancedObject,
  fetchJson,
  fetchText,
  sleep,
  writeOrCheck,
} from "./classic-generator-utils.mjs";

const outputPath = new URL("../app/classic-skills.generated.ts", import.meta.url);
const specialSlugs = { MonkeyKing: "wukong" };
const numericVersion = "3.15.5";
const statLabels = {
  attackdamage: "总攻击力",
  bonusattackdamage: "额外攻击力",
  spelldamage: "法术强度",
  bonushealth: "额外生命值",
  armor: "护甲",
  bonusarmor: "额外护甲",
  mana: "法力值",
  bonusmana: "额外法力值",
};

function championSlug(key) {
  return specialSlugs[key] || key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function stripMarkup(value) {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function scalingLabel(variable) {
  const coefficients = Array.isArray(variable.coeff) ? variable.coeff : [variable.coeff];
  const values = coefficients.map((value) => {
    const percentage = Number(value) * 100;
    return `${Number.isInteger(percentage) ? percentage : percentage.toFixed(1)}%`;
  }).join(" / ");
  return `${values}${statLabels[variable.link] || variable.link || "属性加成"}`;
}

function normalizedLegacySequence(value) {
  return value
    .split(/\s*\/\s*/)
    .map((entry) => {
      const numeric = Number(entry.replace("%", ""));
      const normalized = numeric / 100;
      return Number.isInteger(normalized) ? String(normalized) : normalized.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
    })
    .join("/");
}

function cleanLegacyTokens(value) {
  return value
    // Old Data Dragon tooltips encode ordinary rank values as percentages
    // followed by a rendering hint. Convert them back to readable values.
    .replace(
      /((?:\d+(?:\.\d+)?%\s*\/\s*)*\d+(?:\.\d+)?%)@(cooldownchampion|text|stacks)\b/gi,
      (match, sequence) => normalizedLegacySequence(sequence),
    )
    .replace(
      /((?:\d+(?:\.\d+)?%\s*\/\s*)*\d+(?:\.\d+)?%)@dynamic\.attackdamage\b/gi,
      "$1总攻击力",
    )
    .replace(/(\d+(?:\.\d+)?%)abilitypower\b/gi, "$1法术强度")
    .replace(/(\d+(?:\.\d+)?)%@special\.[a-z0-9_.]+\b/gi, "$1点")
    .replace(/@[a-z0-9_.]+\b/gi, "")
    .replace(/{{\s*[^}]+\s*}}/g, "（数值未在旧版接口公开）")
    .replace(/\(\+\s*—\s*\)/g, "")
    .replace(/—(?=[，。；）\s])/g, "数值未在旧版接口公开");
}

function numericDetail(spell) {
  let tooltip = spell.tooltip || spell.description || "";
  for (let index = 1; index < (spell.effectBurn?.length || 0); index += 1) {
    const value = spell.effectBurn[index];
    if (value == null) continue;
    const patterns = [
      new RegExp(`{{\\s*e${index}\\s*}}`, "gi"),
      new RegExp(`{{\\s*effect${index}amount\\s*}}`, "gi"),
    ];
    patterns.forEach((pattern) => { tooltip = tooltip.replace(pattern, value); });
  }
  for (const variable of spell.vars || []) {
    tooltip = tooltip.replace(
      new RegExp(`{{\\s*${variable.key}\\s*}}`, "gi"),
      scalingLabel(variable),
    );
  }
  return stripMarkup(cleanLegacyTokens(tooltip));
}

async function fetchChampion(champion) {
  const slug = championSlug(champion.key);
  const sourceUrl = `https://op.gg/zh-cn/lol/classic/champions/${slug}`;
  const [html, historical] = await Promise.all([
    fetchText(sourceUrl, `OP.GG ${champion.key}`),
    fetchJson(
      `https://ddragon.leagueoflegends.com/cdn/${numericVersion}/data/zh_CN/champion/${champion.key}.json`,
      `Riot Data Dragon ${champion.key}`,
    ),
  ]);
  const payload = decodeNextPayload(html);
  const detail = JSON.parse(extractBalancedObject(payload, '"championDetail":'));
  if (detail.identifier !== champion.classicId) {
    throw new Error(`${champion.key}: expected ${champion.classicId}, received ${detail.identifier}`);
  }
  if (!Array.isArray(detail.abilities) || detail.abilities.length !== 5) {
    throw new Error(`${champion.key}: expected 5 abilities`);
  }
  const historicalChampion = Object.values(historical.data || {})[0];
  if (!historicalChampion || historicalChampion.spells?.length !== 4) {
    throw new Error(`${champion.key}: missing ${numericVersion} numeric data`);
  }
  // OP.GG exposes two distinct historical concepts:
  // - a skin whose localized name contains "经典";
  // - exactly one card marked "默认" (`isBase: true`).
  // Prefer the named Classic art, but retain the default art when it differs so
  // the workbench can show both without making a runtime network request.
  const skins = detail.skins || [];
  const defaultSkins = skins.filter((skin) => skin.isBase === true);
  if (defaultSkins.length !== 1) {
    throw new Error(`${champion.key}: expected exactly one OP.GG default skin, received ${defaultSkins.length}`);
  }
  const defaultSkin = defaultSkins[0];
  const namedClassicSkin = skins.find((skin) => skin.name?.includes("经典")) || null;
  if (!defaultSkin.imageUrl?.includes("/classic/assets/characters/")
    || !defaultSkin.imageUrl.includes("/skins/base/")) {
    throw new Error(`${champion.key}: OP.GG default skin is not a Classic base splash`);
  }
  if (namedClassicSkin && !namedClassicSkin.imageUrl?.includes("/classic/assets/characters/")) {
    throw new Error(`${champion.key}: named Classic skin is not a Classic splash`);
  }
  const primarySkin = namedClassicSkin || defaultSkin;
  const artworks = [
    {
      id: primarySkin.id,
      name: primarySkin.name,
      imageUrl: primarySkin.imageUrl,
      kind: namedClassicSkin ? "classic" : "default",
      isDefault: primarySkin.isBase === true,
    },
  ];
  if (namedClassicSkin && namedClassicSkin.id !== defaultSkin.id) {
    artworks.push({
      id: defaultSkin.id,
      name: defaultSkin.name,
      imageUrl: defaultSkin.imageUrl,
      kind: "default",
      isDefault: true,
    });
  }

  return {
    championId: champion.classicId,
    championName: champion.name,
    sourceUrl,
    portrait: detail.imageUrl,
    classicSplash: primarySkin.imageUrl,
    classicSplashName: primarySkin.name,
    classicSplashId: primarySkin.id,
    classicSplashIsDefault: primarySkin.isBase === true,
    artworks,
    availableSkinCount: skins.length,
    stats: {
      hp: historicalChampion.stats.hp,
      hpPerLevel: historicalChampion.stats.hpperlevel,
      resource: historicalChampion.stats.mp,
      resourcePerLevel: historicalChampion.stats.mpperlevel,
      attackDamage: historicalChampion.stats.attackdamage,
      attackDamagePerLevel: historicalChampion.stats.attackdamageperlevel,
      attackSpeed: Number((0.625 / (1 + (historicalChampion.stats.attackspeedoffset || 0))).toFixed(5)),
      attackSpeedPerLevel: historicalChampion.stats.attackspeedperlevel,
      armor: historicalChampion.stats.armor,
      armorPerLevel: historicalChampion.stats.armorperlevel,
      magicResist: historicalChampion.stats.spellblock,
      magicResistPerLevel: historicalChampion.stats.spellblockperlevel,
      moveSpeed: historicalChampion.stats.movespeed,
      attackRange: historicalChampion.stats.attackrange,
    },
    abilities: detail.abilities.map((ability, index) => {
      if (!ability.imageUrl?.includes("/classic/")) {
        throw new Error(`${champion.key} ${ability.key}: non-classic icon`);
      }
      const historicalSpell = index === 0 ? null : historicalChampion.spells[index - 1];
      // Data Dragon 3.15.5 does not expose a separate passive tooltip object,
      // but OP.GG's Classic ability card is still authoritative public data.
      // Preserve it in the same detail channel instead of leaving every one of
      // the 60 passives blank.
      let detailText = historicalSpell
        ? numericDetail(historicalSpell)
        : `技能文本：${ability.description}`;
      if (!/\d/.test(detailText)) {
        detailText += "\n数值说明：OP.GG Classic 与 Riot 3.15.5 公开字段未提供独立固定数值；不使用其他版本或人工估值补写。";
      }
      if (detailText && /{{|}}|@[a-z0-9_.]+/i.test(detailText)) {
        throw new Error(`${champion.key} ${ability.key}: unresolved numeric placeholder`);
      }
      return {
        key: ability.key,
        name: ability.name,
        description: ability.description,
        icon: ability.imageUrl,
        cooldown: ability.cooldown,
        cost: ability.cost,
        range: ability.range,
        numericDetail: detailText,
        numericVersion,
      };
    }),
  };
}

const records = [];
const queue = [...classicChampions];
const workers = Array.from({ length: 2 }, async () => {
  while (queue.length) {
    const champion = queue.shift();
    const record = await fetchChampion(champion);
    records.push(record);
    process.stdout.write(`Fetched ${records.length}/${classicChampions.length}: ${champion.key}\n`);
    await sleep(180 + Math.floor(Math.random() * 120));
  }
});
await Promise.all(workers);
records.sort((left, right) =>
  classicChampions.findIndex((champion) => champion.classicId === left.championId)
  - classicChampions.findIndex((champion) => champion.classicId === right.championId));

const output = `// Generated from OP.GG Classic 16.15 and Riot Data Dragon ${numericVersion}. Do not edit manually.
export type ClassicAbilityKey = "P" | "Q" | "W" | "E" | "R";

export type ClassicAbility = {
  key: ClassicAbilityKey;
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
  numericDetail: string | null;
  numericVersion: string | null;
};

export type ClassicChampionSkillSet = {
  championId: string;
  championName: string;
  sourceUrl: string;
  portrait: string;
  classicSplash: string;
  classicSplashName: string;
  classicSplashId: string;
  classicSplashIsDefault: boolean;
  artworks: Array<{
    id: string;
    name: string;
    imageUrl: string;
    kind: "classic" | "default";
    isDefault: boolean;
  }>;
  availableSkinCount: number;
  stats: {
    hp: number;
    hpPerLevel: number;
    resource: number;
    resourcePerLevel: number;
    attackDamage: number;
    attackDamagePerLevel: number;
    attackSpeed: number;
    attackSpeedPerLevel: number;
    armor: number;
    armorPerLevel: number;
    magicResist: number;
    magicResistPerLevel: number;
    moveSpeed: number;
    attackRange: number;
  };
  abilities: ClassicAbility[];
};

export const classicChampionSkills: ClassicChampionSkillSet[] = ${JSON.stringify(records, null, 2)};

export const classicSkillsByChampion = new Map(
  classicChampionSkills.map((entry) => [entry.championId, entry]),
);
`;

await writeOrCheck(outputPath, output, "OP.GG Classic 英雄技能");
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} ${records.length} champion skill sets.`);
