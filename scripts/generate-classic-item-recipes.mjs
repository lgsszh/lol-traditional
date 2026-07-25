import { classicItems } from "../app/classic-items.generated.ts";
import { fetchJson, writeOrCheck } from "./classic-generator-utils.mjs";

const outputPath = new URL("../app/classic-item-recipes.generated.ts", import.meta.url);
const versions = [
  "3.7.9", "3.8.5", "3.9.7", "3.10.6", "3.11.4", "3.12.2",
  "3.13.6", "3.14.41", "3.15.5", "4.1.2", "4.21.5", "5.1.2",
  "5.24.2", "6.24.1", "7.24.2",
];

const normalize = (value) =>
  value.replace(/<[^>]+>/g, "").normalize("NFKC").replace(/[\s·]/g, "").toLowerCase();

const itemById = new Map(classicItems.map((item) => [item.id, item]));
const currentCandidates = (item) => [
  item.id,
  item.id.startsWith("77") ? item.id.slice(2) : null,
].filter(Boolean);

const catalogs = await Promise.all(versions.map(async (version) => {
  const payload = await fetchJson(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/zh_CN/item.json`,
    `Riot Data Dragon items ${version}`,
  );
  return { version, data: payload.data };
}));

function currentItemForHistorical(historicalId, historicalItem) {
  const exact = classicItems.filter((item) => currentCandidates(item).includes(historicalId));
  const sameName = classicItems.filter((item) => normalize(item.name) === normalize(historicalItem.name));
  const candidates = [...new Set([...exact, ...sameName])];
  return candidates.sort((left, right) => {
    const leftScore = (left.price === historicalItem.gold?.total ? 10 : 0)
      + (normalize(left.name) === normalize(historicalItem.name) ? 5 : 0);
    const rightScore = (right.price === historicalItem.gold?.total ? 10 : 0)
      + (normalize(right.name) === normalize(historicalItem.name) ? 5 : 0);
    return rightScore - leftScore;
  })[0];
}

function bestHistoricalRecipe(item) {
  const matches = [];
  for (const catalog of catalogs) {
    for (const [historicalId, historicalItem] of Object.entries(catalog.data)) {
      const idMatches = currentCandidates(item).includes(historicalId);
      const nameMatches = normalize(item.name) === normalize(historicalItem.name);
      if (!idMatches && !nameMatches) continue;
      const componentIds = historicalItem.from || [];
      const components = componentIds.map((id) =>
        currentItemForHistorical(id, catalog.data[id])).filter(Boolean);
      const allComponentsMapped = componentIds.length === components.length;
      const componentTotal = components.reduce((sum, component) => sum + component.price, 0);
      const combineCost = item.price - componentTotal;
      const score = (historicalItem.gold?.total === item.price ? 100 : 0)
        + (nameMatches ? 40 : 0)
        + (idMatches ? 20 : 0)
        + (componentIds.length ? 10 : 0)
        + (allComponentsMapped ? 5 : 0)
        + (combineCost >= 0 ? 3 : 0);
      matches.push({
        score,
        version: catalog.version,
        from: components.map((component) => component.id),
        combineCost,
        sourcePrice: historicalItem.gold?.total ?? null,
        allComponentsMapped,
      });
    }
  }
  return matches
    .filter((match) => match.allComponentsMapped && match.combineCost >= 0)
    .sort((left, right) => right.score - left.score)[0];
}

const manualRecipesByName = {
  英勇纹章: ["布甲", "治疗宝珠"],
  灵魂法衣: ["燃烧宝石", "贤者之石"],
  自然之力: ["负极斗篷", "治疗宝珠", "治疗宝珠"],
  麦瑞德裂血手套: ["反曲之弓", "十字镐", "麦瑞德之爪"],
  黄金之心: ["红水晶"],
  利维坦之甲: ["红水晶"],
  离子火花: ["反曲之弓", "红水晶"],
  "海克斯核心mk-1型": ["海克斯核心原型"],
  "海克斯核心mk-2型": ["海克斯核心mk-1型"],
  完美海克斯核心: ["海克斯核心mk-2型"],
};
const nonCraftableCategories = new Set(["基础装备", "出门装备", "消耗品"]);

const idsByName = new Map();
for (const item of classicItems) {
  const current = idsByName.get(item.name) || [];
  current.push(item.id);
  idsByName.set(item.name, current);
}

const recipes = Object.fromEntries(classicItems.map((item) => {
  const historical = bestHistoricalRecipe(item);
  let from = historical?.from || [];
  let source = historical ? `Riot Data Dragon ${historical.version}` : "OP.GG Classic 16.15";
  let note = historical && historical.sourcePrice !== item.price
    ? `配方来自同名历史版本；总价以 OP.GG Classic 16.15 的 ${item.price} 金币为准。`
    : "";

  const manualNames = manualRecipesByName[item.name];
  if (nonCraftableCategories.has(item.category) && !manualNames) {
    from = [];
    source = "OP.GG Classic 16.15";
    note = "";
  }
  if (manualNames) {
    from = manualNames.map((name) => idsByName.get(name)?.[0]).filter(Boolean);
    source = "经典版本补录";
    note = item.name.includes("海克斯核心")
      ? "专属装备按 750 金币逐级升级。"
      : "该装备早于可用 Data Dragon 配方目录，按经典版本组件补录。";
  }

  const componentTotal = from.reduce((sum, id) => sum + (itemById.get(id)?.price || 0), 0);
  return [item.id, {
    from,
    into: [],
    componentTotal,
    combineCost: Math.max(0, item.price - componentTotal),
    source,
    note,
  }];
}));

for (const [targetId, recipe] of Object.entries(recipes)) {
  for (const componentId of recipe.from) {
    const component = recipes[componentId];
    if (component && !component.into.includes(targetId)) component.into.push(targetId);
  }
}

const output = `// Generated from Riot Data Dragon historical catalogs and OP.GG Classic 16.15.
export type ClassicItemRecipe = {
  from: string[];
  into: string[];
  componentTotal: number;
  combineCost: number;
  source: string;
  note: string;
};

export const classicItemRecipes: Record<string, ClassicItemRecipe> = ${JSON.stringify(recipes, null, 2)};
`;

await writeOrCheck(outputPath, output, "经典装备合成配方");
const craftable = Object.values(recipes).filter((recipe) => recipe.from.length).length;
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} ${classicItems.length} item recipe records (${craftable} craftable).`);
