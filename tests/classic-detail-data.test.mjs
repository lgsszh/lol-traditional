import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { classicChampions } from "../app/classic-data.ts";
import { classicItems } from "../app/classic-items.generated.ts";
import { classicItemRecipes } from "../app/classic-item-recipes.generated.ts";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";

test("60 位经典英雄均包含被动与 Q/W/E/R 详情", () => {
  assert.equal(classicChampionSkills.length, classicChampions.length);
  assert.equal(new Set(classicChampionSkills.map((entry) => entry.championId)).size, classicChampions.length);

  for (const champion of classicChampions) {
    const skillSet = classicChampionSkills.find((entry) => entry.championId === champion.classicId);
    assert.ok(skillSet, `${champion.name}缺少技能资料`);
    assert.match(skillSet.portrait, /\/classic\//);
    assert.match(skillSet.classicSplash, /\/classic\//);
    assert.ok(skillSet.classicSplashName.trim(), `${champion.name}缺少经典原画名称`);
    assert.deepEqual(skillSet.abilities.map((ability) => ability.key), ["P", "Q", "W", "E", "R"]);
    for (const ability of skillSet.abilities) {
      assert.ok(ability.name.trim(), `${champion.name} ${ability.key} 缺少名称`);
      assert.ok(ability.description.trim(), `${champion.name} ${ability.key} 缺少说明`);
      assert.match(ability.icon, /^https:\/\/opgg-static\.akamaized\.net\/.*\/classic\//);
      if (ability.key !== "P") {
        assert.ok(ability.numericDetail?.trim(), `${champion.name} ${ability.key} 缺少完整技能数值`);
        assert.equal(ability.numericVersion, "3.15.5");
        assert.doesNotMatch(ability.numericDetail, /{{|}}|@[a-z0-9_.]+/i);
      }
    }
  }
});

test("经典装备分类与 OP.GG 目录数量一致", () => {
  const expectedCounts = {
    出门装备: 5,
    消耗品: 14,
    基础装备: 21,
    鞋子: 8,
    史诗装备: 33,
    传说装备: 71,
  };
  assert.equal(classicItems.length, 152);
  for (const [category, expected] of Object.entries(expectedCounts)) {
    assert.equal(
      classicItems.filter((item) => item.category === category).length,
      expected,
      `${category}数量应与 OP.GG 一致`,
    );
  }
});

test("经典装备属性筛选数量与同步快照一致", () => {
  const expectedCounts = {
    damage: 41,
    "critical-strike": 13,
    "attack-speed": 21,
    "on-hit": 23,
    "armor-penetration": 4,
    "spell-damage": 42,
    mana: 36,
    "magic-penetration": 5,
    health: 51,
    armor: 23,
    "magic-resistance": 21,
    "cooldown-reduction": 25,
    movement: 21,
    "life-steal": 14,
  };
  for (const [tag, expected] of Object.entries(expectedCounts)) {
    assert.equal(
      classicItems.filter((item) => item.tags.includes(tag)).length,
      expected,
      `${tag}筛选数量应与同步快照一致`,
    );
  }
});

test("152 件装备均有合法且双向一致的合成关系", () => {
  const itemIds = new Set(classicItems.map((item) => item.id));
  assert.equal(Object.keys(classicItemRecipes).length, classicItems.length);

  for (const item of classicItems) {
    const recipe = classicItemRecipes[item.id];
    assert.ok(recipe, `${item.name}缺少配方记录`);
    assert.ok(recipe.combineCost >= 0, `${item.name}合成费用不能为负数`);
    assert.equal(recipe.componentTotal + recipe.combineCost, item.price, `${item.name}价格拆分不一致`);

    for (const componentId of recipe.from) {
      assert.ok(itemIds.has(componentId), `${item.name}引用未知组件 ${componentId}`);
      assert.ok(classicItemRecipes[componentId].into.includes(item.id), `${item.name}与组件的反向关系不一致`);
    }
    for (const upgradeId of recipe.into) {
      assert.ok(itemIds.has(upgradeId), `${item.name}引用未知升级 ${upgradeId}`);
      assert.ok(classicItemRecipes[upgradeId].from.includes(item.id), `${item.name}与升级的正向关系不一致`);
    }
  }
});

test("经典目录提供大量可浏览合成路线", () => {
  const recipes = Object.values(classicItemRecipes);
  assert.ok(recipes.filter((recipe) => recipe.from.length > 0).length >= 100);
  assert.ok(recipes.reduce((sum, recipe) => sum + recipe.from.length, 0) >= 200);
});

test("技能与出装页面接入详情面板和显式装备操作", async () => {
  const [page, abilityPanel, itemPanel] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ChampionAbilityPanel.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ItemDetailPanel.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<ChampionAbilityPanel/);
  assert.match(page, /<ItemDetailPanel/);
  assert.match(page, /itemStatFilter/);
  assert.match(page, /itemCategoryCounts/);
  assert.match(abilityPanel, /查看 OP\.GG 源页/);
  assert.match(abilityPanel, /完整技能数值/);
  assert.match(itemPanel, /游戏式合成路径/);
  assert.match(itemPanel, /装备到第/);
});
