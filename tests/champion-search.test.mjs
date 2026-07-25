import test from "node:test";
import assert from "node:assert/strict";
import { championMatchesFilters } from "../app/champion-search.ts";

const champion = {
  classicId: "60011",
  key: "MasterYi",
  name: "易",
  title: "无极剑圣",
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
  for (const query of ["易", "无极剑圣", "master yi", "战士", "打野", "野区", "jungle"]) {
    assert.equal(championMatchesFilters(champion, "全部", query), true, `应能搜索：${query}`);
  }
});

test("位置筛选与搜索词需要同时满足", () => {
  assert.equal(championMatchesFilters(champion, "野", "剑圣"), true);
  assert.equal(championMatchesFilters(champion, "中", "剑圣"), false);
  assert.equal(championMatchesFilters(champion, "全部", "阿狸"), false);
});
