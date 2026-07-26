// 校验 OP.GG Classic 的英雄名单是否与本站 classic-data.ts 一致。
// 英雄新增、移除或 ID 变化都无法自动改写手工维护的定位/外号/玩法数据，
// 因此本脚本在检测到漂移时以非零码退出，由同步工作流自动开 Issue 提醒维护。
import { classicChampions } from "../app/classic-data.ts";
import { decodeNextPayload, fetchText } from "./classic-generator-utils.mjs";

const INDEX_URL = "https://op.gg/zh-cn/lol/classic/champions";
const specialSlugs = { MonkeyKing: "wukong" };
const championSlug = (key) => specialSlugs[key] || key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const html = await fetchText(INDEX_URL, "classic-champions-index");
const payload = decodeNextPayload(html) + html;

// 信号一：页面负载中的英雄 identifier（60xxx）。
const remoteIds = new Set([...payload.matchAll(/"identifier"\s*:\s*"(60\d{2,4})"/g)].map((match) => match[1]));
// 信号二：指向英雄详情页的 slug。
const remoteSlugs = new Set(
  [...payload.matchAll(/\/classic\/champions\/([a-z0-9-]+)/g)]
    .map((match) => match[1])
    .filter((slug) => !["build", "runes", "items", "skills", "counters"].includes(slug)),
);

if (remoteIds.size === 0 && remoteSlugs.size === 0) {
  console.error("[roster] 无法从 OP.GG Classic 首页提取英雄名单，页面结构可能已变化，需要人工检查。");
  process.exit(2);
}

const localIds = new Set(classicChampions.map((champion) => champion.classicId));
const localSlugs = new Set(classicChampions.map((champion) => championSlug(champion.key)));

const problems = [];
if (remoteIds.size > 0) {
  const added = [...remoteIds].filter((id) => !localIds.has(id));
  const removed = [...localIds].filter((id) => !remoteIds.has(id));
  if (added.length) problems.push(`OP.GG 出现了本站没有的英雄 ID：${added.join(", ")}（疑似新增英雄）`);
  if (removed.length) problems.push(`本站存在 OP.GG 已不再列出的英雄 ID：${removed.join(", ")}（疑似移除或改 ID）`);
  console.log(`[roster] identifier 对比：远端 ${remoteIds.size} / 本地 ${localIds.size}`);
}
if (remoteSlugs.size > 0) {
  const added = [...remoteSlugs].filter((slug) => !localSlugs.has(slug));
  const removed = [...localSlugs].filter((slug) => !remoteSlugs.has(slug));
  if (added.length) problems.push(`OP.GG 出现了本站没有的英雄页面：${added.join(", ")}`);
  if (removed.length) problems.push(`本站英雄在 OP.GG 找不到详情页：${removed.join(", ")}`);
  console.log(`[roster] slug 对比：远端 ${remoteSlugs.size} / 本地 ${localSlugs.size}`);
}

if (problems.length) {
  console.error("[roster] 英雄名单漂移：");
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error("[roster] 请人工更新 classic-data.ts（定位/外号）与 classic-researched-guides.ts（玩法）后重跑同步。");
  process.exit(1);
}
console.log(`[roster] 名单一致：${classicChampions.length} 位英雄与 OP.GG Classic 完全对应。`);
