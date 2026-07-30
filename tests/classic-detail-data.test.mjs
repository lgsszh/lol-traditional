import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { classicChampions, classicRuneGroups, masteryPresets } from "../app/classic-data.ts";
import { classicItems } from "../app/classic-items.generated.ts";
import { classicItemRecipes } from "../app/classic-item-recipes.generated.ts";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";
import { classicBuildGuides } from "../app/classic-build-guides.ts";
import { classicAssetAudit, classicAssetManifest } from "../app/classic-assets.generated.ts";

test("60 位经典英雄均包含被动与 Q/W/E/R 详情", () => {
  assert.equal(classicChampionSkills.length, classicChampions.length);
  assert.equal(new Set(classicChampionSkills.map((entry) => entry.championId)).size, classicChampions.length);

  for (const champion of classicChampions) {
    const skillSet = classicChampionSkills.find((entry) => entry.championId === champion.classicId);
    assert.ok(skillSet, `${champion.name}缺少技能资料`);
    assert.ok(Array.isArray(champion.aliases), `${champion.name}常用外号字段无效`);
    assert.match(skillSet.portrait, new RegExp(`/classic/v1/champion-icons/${champion.classicId}\\.png$`));
    assert.match(skillSet.classicSplash, /\/classic\/assets\/characters\/[^/]+\/skins\/(?:base|skin\d+)\/images\//);
    assert.ok(skillSet.classicSplashName.trim(), `${champion.name}缺少经典原画名称`);
    assert.deepEqual(skillSet.abilities.map((ability) => ability.key), ["P", "Q", "W", "E", "R"]);
    for (const ability of skillSet.abilities) {
      assert.ok(ability.name.trim(), `${champion.name} ${ability.key} 缺少名称`);
      assert.ok(ability.description.trim(), `${champion.name} ${ability.key} 缺少说明`);
      assert.match(
        ability.icon,
        /^https:\/\/opgg-static\.akamaized\.net\/.*\/classic\/assets\/(?:ux\/jade\/s3icons|characters\/[^/]+\/hud\/icons2d)\//,
      );
      if (ability.key !== "P") {
        assert.ok(ability.numericDetail?.trim(), `${champion.name} ${ability.key} 缺少完整技能数值`);
        assert.equal(ability.numericVersion, "3.15.5");
        assert.doesNotMatch(ability.numericDetail, /{{|}}|@[a-z0-9_.]+/i);
      }
    }
  }
});

test("60 位英雄优先使用名称含经典的皮肤，并保留 OP.GG 默认原画", () => {
  const ahri = classicChampionSkills.find((entry) => entry.championId === "60103");
  const jax = classicChampionSkills.find((entry) => entry.championId === "60024");
  const janna = classicChampionSkills.find((entry) => entry.championId === "60040");
  const vayne = classicChampionSkills.find((entry) => entry.championId === "60067");
  const mundo = classicChampionSkills.find((entry) => entry.championId === "60036");
  for (const skillSet of classicChampionSkills) {
    assert.ok(skillSet.artworks.length === 1 || skillSet.artworks.length === 2);
    assert.equal(skillSet.artworks.filter((artwork) => artwork.isDefault).length, 1, `${skillSet.championName}默认原画数量错误`);
    const namedClassic = skillSet.artworks.find((artwork) => artwork.kind === "classic");
    if (namedClassic) {
      assert.match(namedClassic.name, /经典/);
      assert.equal(skillSet.artworks[0], namedClassic, `${skillSet.championName}未优先展示经典原画`);
      assert.equal(skillSet.artworks.length, 2, `${skillSet.championName}应同时保留默认原画`);
    } else {
      assert.equal(skillSet.artworks.length, 1);
      assert.equal(skillSet.artworks[0].kind, "default");
      assert.equal(skillSet.artworks[0].isDefault, true);
    }
    assert.ok(skillSet.availableSkinCount >= 1, `${skillSet.championName}皮肤列表为空`);
  }
  assert.equal(classicChampionSkills.filter((entry) => entry.artworks.length === 2).length, 33);
  assert.equal(ahri.artworks[0].name, "经典阿狸");
  assert.deepEqual(jax.artworks.map((artwork) => artwork.name), ["经典 贾克斯", "武器大师"]);
  assert.equal(janna.classicSplashName, "风暴之怒");
  assert.equal(vayne.classicSplashName, "暗夜猎手");
  assert.deepEqual(mundo.artworks.map((artwork) => artwork.name), ["经典蒙多", "祖安狂人"]);
});

test("全部 Classic 图片均有经过哈希校验的本地镜像", () => {
  const sources = new Set();
  for (const skillSet of classicChampionSkills) {
    sources.add(skillSet.portrait);
    skillSet.artworks.forEach((artwork) => sources.add(artwork.imageUrl));
    skillSet.abilities.forEach((ability) => sources.add(ability.icon));
  }
  for (const source of sources) {
    assert.match(classicAssetManifest[source], /^\/classic-cache\/[a-f0-9]{24}\.(?:png|jpg|webp|gif)$/);
    assert.ok(classicAssetAudit[source].bytes > 64, `${source}本地文件为空`);
    assert.match(classicAssetAudit[source].sha256, /^[a-f0-9]{64}$/);
  }
});

test("60 位英雄均提供至少三套完整经典玩法、回城路线和合法出门预算", () => {
  const itemIds = new Set(classicItems.map((item) => item.id));
  const spellIds = new Set(["74", "714", "712", "711", "76", "73", "71", "75", "77", "721", "713", "705", "709", "716", "720", "777"]);
  let variantCount = 0;
  for (const champion of classicChampions) {
    const guides = classicBuildGuides[champion.classicId];
    assert.ok(guides?.length >= 3, `${champion.name}至少需要三套经典玩法`);
    variantCount += guides.length;
    for (const guide of guides) {
      assert.ok(guide.summary.trim(), `${champion.name} ${guide.name}缺少说明`);
      assert.equal(guide.coreItems.length, 6, `${champion.name} ${guide.name}六格出装不完整`);
      assert.ok(guide.startingItems.length > 0, `${champion.name} ${guide.name}缺少出门装`);
      assert.ok(guide.earlyPurchases.length > 0, `${champion.name} ${guide.name}缺少早期补购`);
      assert.ok(guide.recallPlan.length >= 4, `${champion.name} ${guide.name}缺少分档回城路线`);
      assert.equal(guide.buildPhases.length, 3, `${champion.name} ${guide.name}缺少前中后期出装阶段`);
      assert.equal(guide.gamePlan.length, 3, `${champion.name} ${guide.name}缺少前中后期玩法说明`);
      assert.ok(guide.runeSummary.trim(), `${champion.name} ${guide.name}缺少具体符文说明`);
      const masteryRanks = masteryPresets[guide.masteryPreset];
      assert.ok(masteryRanks, `${champion.name} ${guide.name}引用未知天赋预设 ${guide.masteryPreset}`);
      assert.equal(
        Object.values(masteryRanks).reduce((sum, rank) => sum + rank, 0),
        30,
        `${champion.name} ${guide.name}天赋预设点数不是 30`,
      );
      for (const group of classicRuneGroups) {
        const rune = group.runes.find((entry) => entry.id === guide.runePreset[group.id]);
        assert.ok(rune, `${champion.name} ${guide.name}的${group.name}符文预设无效`);
        assert.ok(
          guide.runeSummary.includes(`${rune.name}×${group.cap}`),
          `${champion.name} ${guide.name}符文文字与符文预设不同步（${group.name}）`,
        );
      }
      assert.ok(guide.spellIds.every((id) => spellIds.has(id)), `${champion.name} ${guide.name}包含未知召唤师技能`);
      for (const entry of [
        ...guide.startingItems,
        ...guide.earlyPurchases,
        ...guide.recallPlan.flatMap((step) => step.items),
      ]) {
        assert.ok(itemIds.has(entry.itemId), `${champion.name} ${guide.name}包含未知装备 ${entry.itemId}`);
        assert.ok(Number.isInteger(entry.quantity) && entry.quantity >= 1);
      }
      assert.ok(guide.coreItems.every((id) => itemIds.has(id)), `${champion.name} ${guide.name}核心装备无效`);
      assert.ok(guide.situationalItems.every((id) => itemIds.has(id)), `${champion.name} ${guide.name}备选装备无效`);
      const startingGold = guide.startingItems.reduce((sum, entry) => {
        const current = classicItems.find((item) => item.id === entry.itemId);
        return sum + current.price * entry.quantity;
      }, 0);
      assert.ok(startingGold <= 475, `${champion.name} ${guide.name}出门装超过 475 金币：${startingGold}`);
    }
  }
  assert.ok(variantCount >= 240, `研究型玩法合入后应有至少 240 套方案，当前 ${variantCount}`);
  for (const champion of classicChampions) {
    const researched = classicBuildGuides[champion.classicId].filter((guide) =>
      guide.sourceUrls.some((url) => !url.includes("op.gg")));
    assert.ok(researched.length >= 1, `${champion.name}缺少标注原始攻略来源的研究型玩法`);
  }
  const pantheon = classicBuildGuides["60080"];
  const masterYi = classicBuildGuides["60011"];
  const ezreal = classicBuildGuides["60081"];
  const vayne = classicBuildGuides["60067"];
  const nidalee = classicBuildGuides["60076"];
  const teemo = classicBuildGuides["60017"];
  const singed = classicBuildGuides["60027"];
  assert.ok(pantheon.some((guide) => guide.startingItems.some((entry) => entry.itemId === "772041")
    && guide.startingItems.some((entry) => entry.itemId === "772004" && entry.quantity === 2)));
  assert.ok(masterYi.some((guide) => guide.tags.includes("暴击")));
  assert.ok(masterYi.some((guide) => guide.tags.includes("攻速")));
  assert.ok(masterYi.some((guide) => guide.style.includes("AP")));
  assert.ok(ezreal.some((guide) => guide.tags.includes("蓝EZ")
    && guide.coreItems.includes("773004")
    && guide.coreItems.includes("773025")));
  assert.ok(vayne.some((guide) => guide.tags.includes("韩式薇恩")
    && guide.skillOrder[0] === "W"
    && guide.coreItems[1] === "773153"));
  assert.ok(vayne.some((guide) => guide.tags.includes("传统薇恩")
    && guide.skillOrder[0] === "Q"
    && guide.coreItems[1] === "773072"));
  assert.ok(nidalee.some((guide) => guide.tags.includes("AD豹女")
    && guide.skillOrder[0] === "E"
    && guide.coreItems.includes("773078")));
  assert.ok(teemo.some((guide) => guide.tags.includes("攻速提莫")
    && guide.coreItems.includes("773114")
    && guide.coreItems.includes("773091")));
  assert.ok(singed.some((guide) => guide.tags.includes("代理炼金")
    && guide.spellIds.includes("76")
    && guide.spellIds.includes("712")));

  const mageChampions = classicChampions.filter((champion) => champion.archetype === "mage");
  for (const champion of mageChampions) {
    const sustainGuide = classicBuildGuides[champion.classicId].find((guide) => guide.id.endsWith("-sustain"));
    assert.equal(sustainGuide?.runeArchetype, "mage", `${champion.name}续航路线不应误用坦克符文与天赋`);
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
  assert.match(page, /key=\{selectedSkillSet\.championId\}/);
  assert.match(page, /preloadWorkbenchAssets/);
  assert.match(page, /localAssetUrl/);
  assert.match(page, /<ItemDetailPanel/);
  assert.match(page, /itemStatFilter/);
  assert.match(page, /itemCategoryCounts/);
  assert.match(page, /经典玩法攻略/);
  assert.match(page, /一键应用完整方案/);
  assert.match(page, /applyClassicGuide/);
  assert.match(page, /selectedArtworkId/);
  assert.match(page, /hero-art-switcher/);
  assert.match(abilityPanel, /查看 OP\.GG 源页/);
  assert.match(abilityPanel, /完整技能数值/);
  assert.match(abilityPanel, /key=\{entry\.icon\}/);
  assert.match(abilityPanel, /localAssetUrl\(entry\.icon\)/);
  assert.match(itemPanel, /游戏式合成路径/);
  assert.match(itemPanel, /装备到第/);
});

test("五项主功能横向排列，切换后回到页面顶部", async () => {
  const [page, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="main-nav module-tabs"/);
  assert.match(page, /aria-keyshortcuts=\{`Alt\+\$\{index \+ 1\}`\}/);
  assert.match(page, /window\.scrollTo\(\{ top: 0, left: 0, behavior: "auto" \}\)/);
  assert.match(
    page,
    /window\.scrollTo\(\{ top: 0, left: 0, behavior: "auto" \}\);[\s\S]*window\.requestAnimationFrame[\s\S]*setView\(nextView\)/,
  );
  assert.doesNotMatch(page, /className="module-rail"/);
  assert.match(
    styles,
    /\.main-nav\s*\{[\s\S]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/,
  );
  assert.match(styles, /\.workspace\s*\{[\s\S]*grid-template-columns:\s*284px\s+minmax\(0,\s*1fr\)/);
  assert.ok((styles.match(/@media \(max-width: 1099px\)/g) ?? []).length >= 2);
});

test("OP.GG 同步使用低并发与指数退避，避免单个英雄拖垮整批数据", async () => {
  const [generator, utilities] = await Promise.all([
    readFile(new URL("../scripts/generate-classic-skills.mjs", import.meta.url), "utf8"),
    readFile(new URL("../scripts/classic-generator-utils.mjs", import.meta.url), "utf8"),
  ]);
  assert.match(generator, /Array\.from\(\{ length: 2 \}/);
  assert.match(utilities, /attempts = 4/);
  assert.match(utilities, /2 \*\* \(attempt - 1\)/);
  assert.match(utilities, /retry-after/);
});
