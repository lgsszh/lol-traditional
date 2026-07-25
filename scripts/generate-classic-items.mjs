import {
  decodeNextPayload,
  extractBalancedArray,
  fetchText,
  writeOrCheck,
} from "./classic-generator-utils.mjs";

const outputPath = new URL("../app/classic-items.generated.ts", import.meta.url);
const sourceUrl = "https://op.gg/zh-cn/lol/classic/items";
const groupLabels = {
  "items-starter": "出门装备",
  "items-consumables": "消耗品",
  "items-basic": "基础装备",
  "items-boots": "鞋子",
  "items-epic": "史诗装备",
  "items-legendary": "传说装备",
};

const html = await fetchText(sourceUrl, "OP.GG Classic 装备目录");
const payload = decodeNextPayload(html);
const entries = JSON.parse(extractBalancedArray(payload, '"entries":'));
if (!Array.isArray(entries) || entries.length !== 152) {
  throw new Error(`Expected 152 item entries, received ${entries?.length ?? 0}`);
}

const items = entries.map((entry) => {
  const category = groupLabels[entry.group?.key];
  if (!category) throw new Error(`${entry.title}: unknown item group ${entry.group?.key}`);
  const price = Number(entry.facts?.find((fact) => fact.kind === "price")?.value);
  if (!Number.isFinite(price)) throw new Error(`${entry.title}: invalid price`);
  if (!entry.imageUrl.includes("/classic/")) throw new Error(`${entry.title}: non-classic icon`);
  return {
    id: entry.identifier,
    name: entry.title,
    category,
    icon: entry.imageUrl,
    description: entry.description || "",
    price,
    tags: entry.filterKeys || [],
  };
});

const output = `export type ClassicItem = {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  price: number;
  tags: string[];
};

// Generated from the OP.GG Classic 16.15 catalog (${items.length} entries). Do not edit manually.
export const classicItems: ClassicItem[] = ${JSON.stringify(items, null, 2)};
`;

await writeOrCheck(outputPath, output, "OP.GG Classic 装备目录");
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} ${items.length} OP.GG Classic items.`);
