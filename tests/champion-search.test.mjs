import test from "node:test";
import assert from "node:assert/strict";
import { championMatchesFilters } from "../app/champion-search.ts";
import { classicChampions } from "../app/classic-data.ts";

const champion = {
  classicId: "60011",
  key: "MasterYi",
  name: "易",
  title: "无极剑圣",
  aliases: ["剑圣", "易大师"],
  lane: "打野",
  role: "战士",
  archetype: "jungler",
  accent: "#fff",
  spellOrder: ["Q", "E", "W"],
};

test("野位置筛选能匹配数据中的打野英雄", () => {
  assert.equal(championMatchesFilters(champion, "野", ""), true);
  assert.equal(championMatchesFilters(champion, "上", ""), false);
});

test("英雄搜索覆盖中文名、称号、英文名、职业与位置", () => {
  for (const query of ["易", "无极剑圣", "剑圣", "易大师", "master yi", "战士", "打野", "野区", "jungle"]) {
    assert.equal(championMatchesFilters(champion, "全部", query), true, `应能搜索：${query}`);
  }
});

test("位置筛选与搜索词需要同时满足", () => {
  assert.equal(championMatchesFilters(champion, "野", "剑圣"), true);
  assert.equal(championMatchesFilters(champion, "中", "剑圣"), false);
  assert.equal(championMatchesFilters(champion, "全部", "阿狸"), false);
});

test("常用外号采用玩家称呼且允许没有独立外号的英雄留空", () => {
  const aliases = Object.fromEntries(classicChampions.map((entry) => [entry.key, entry.aliases]));
  assert.deepEqual(aliases.Vayne, ["VN"]);
  assert.deepEqual(aliases.Garen, ["德玛", "大宝剑", "草丛伦"]);
  assert.deepEqual(aliases.Jax, ["武器"]);
  assert.deepEqual(aliases.Anivia, ["冰鸟", "凤凰"]);
  assert.deepEqual(aliases.MissFortune, ["女枪", "MF", "好运姐", "赏金"]);
  assert.deepEqual(aliases.Teemo, ["提百万", "提莫队长"]);
  assert.deepEqual(aliases.Olaf, []);
  assert.deepEqual(aliases.Kassadin, []);
  assert.deepEqual(aliases.Morgana, ["堕天使"]);
});
