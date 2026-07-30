import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { classicChampions } from "../app/classic-data.ts";
import { classicAssetManifest } from "../app/classic-assets.generated.ts";
import { classicItems } from "../app/classic-items.generated.ts";
import {
  CLASSIC_MAYHEM_MODE,
  CLASSIC_MAYHEM_PATCH,
  LIVE_DATA_PATCH,
  classicExclusiveAugments,
  classicMayhemAugments,
  liveClassicChampions,
  regularMayhemAugments,
} from "../app/classic-mayhem.generated.ts";
import {
  MAYHEM_HAS_JUNGLE_ROLE,
  MAYHEM_STARTING_GOLD,
  OP_GG_MAYHEM_PATCH,
  OP_GG_MAYHEM_SNAPSHOT_HASH,
  opggMayhemChampionBuilds,
} from "../app/classic-mayhem-opgg.generated.ts";
import { opggMayhemRankingSummary } from "../app/classic-mayhem-ranking.generated.ts";

const itemById = new Map(classicItems.map((item) => [item.id, item]));

function assertMetric(metric, context) {
  assert.ok(Number.isFinite(metric.pickRate) && metric.pickRate >= 0 && metric.pickRate <= 100, `${context}选用率无效`);
  assert.ok(Number.isInteger(metric.games) && metric.games > 0, `${context}场次无效`);
  assert.ok(Number.isFinite(metric.winRate) && metric.winRate >= 0 && metric.winRate <= 100, `${context}胜率无效`);
}

test("怀旧海斗使用同一批 60 位经典英雄，但技能与属性来自当前客户端快照", () => {
  assert.equal(CLASSIC_MAYHEM_MODE, "KIWI_JADE");
  assert.match(CLASSIC_MAYHEM_PATCH, /^\d+\.\d+$/);
  assert.match(LIVE_DATA_PATCH, new RegExp(`^${CLASSIC_MAYHEM_PATCH.replace(".", "\\.")}\\.\\d+$`));
  assert.equal(liveClassicChampions.length, 60);
  assert.deepEqual(
    new Set(liveClassicChampions.map((champion) => champion.classicId)),
    new Set(classicChampions.map((champion) => champion.classicId)),
  );

  for (const champion of liveClassicChampions) {
    assert.deepEqual(champion.abilities.map((ability) => ability.key), ["P", "Q", "W", "E", "R"]);
    assert.ok(champion.portrait.includes(`/cdn/${LIVE_DATA_PATCH}/img/champion/`));
    assert.ok(champion.splash.includes("/cdn/img/champion/splash/"));
    assert.ok(champion.stats.hp > 0);
    assert.ok(champion.stats.hpPerLevel > 0);
    assert.ok(champion.stats.attackDamage > 0);
    assert.ok(champion.stats.attackDamagePerLevel > 0, `${champion.name}攻击力成长不应为 0`);
    assert.ok(champion.stats.armor > 0);
    assert.ok(champion.stats.armorPerLevel > 0);
    assert.ok(champion.stats.magicResist > 0);
    assert.ok(champion.stats.magicResistPerLevel > 0);
    assert.ok(champion.stats.attackRange > 0);
    for (const ability of champion.abilities) {
      assert.ok(ability.name.trim(), `${champion.name} ${ability.key} 缺少名称`);
      assert.ok(ability.description.trim(), `${champion.name} ${ability.key} 缺少说明`);
      assert.ok(ability.icon.startsWith("https://ddragon.leagueoflegends.com/"));
      assert.ok(classicAssetManifest[ability.icon], `${champion.name} ${ability.key} 缺少本地镜像`);
      if (ability.key !== "P") {
        assert.ok(ability.numericDetail?.trim(), `${champion.name} ${ability.key} 缺少公开技能数值`);
        assert.match(ability.numericDetail, /\d/, `${champion.name} ${ability.key} 技能数值没有数字`);
        assert.doesNotMatch(ability.numericDetail, /\{\{|@|动态数值|\?{2,}/, `${champion.name} ${ability.key} 存在未解析数值`);
      }
      assert.doesNotMatch(ability.numericDetail, /属性枚举|对应属性/, `${champion.name} ${ability.key} 存在伪解析属性`);
      if (ability.numericStatus === "available") {
        assert.doesNotMatch(
          ability.numericDetail,
          /客户端未命名属性|CalculationPart/,
          `${champion.name} ${ability.key} 不应把未展开公式标为完整`,
        );
      } else {
        assert.ok(ability.unresolvedTokens.length > 0, `${champion.name} ${ability.key} 部分数值应说明原因`);
      }
    }
    assert.ok(classicAssetManifest[champion.portrait], `${champion.name}现代头像缺少本地镜像`);
  }
});

test("KIWI 与 KIWI_JADE 模式池分离，强化说明不保留模板占位符", () => {
  assert.ok(regularMayhemAugments.length >= 200);
  assert.ok(classicMayhemAugments.length >= 180);
  assert.ok(classicExclusiveAugments.length >= 20);
  assert.equal(new Set(classicMayhemAugments.map((augment) => augment.id)).size, classicMayhemAugments.length);

  const regularApiNames = new Set(regularMayhemAugments.map((augment) => augment.apiName.replace(/^ARAM_/, "")));
  for (const augment of classicExclusiveAugments) {
    assert.equal(regularApiNames.has(augment.apiName.replace(/^ARAM_/, "")), false, `${augment.name}不应出现在 KIWI`);
  }

  for (const augment of classicMayhemAugments) {
    assert.ok(augment.name.trim(), `${augment.apiName} 缺少中文名`);
    assert.ok(augment.description.trim(), `${augment.name} 缺少说明或公开状态提示`);
    assert.doesNotMatch(augment.description, /\{\{|@\w+@|动态数值/, `${augment.name}含有未解析占位符`);
    assert.match(
      augment.icon,
      new RegExp(`^https://raw\\.communitydragon\\.org/${CLASSIC_MAYHEM_PATCH.replace(".", "\\.")}/game/`),
    );
    assert.ok(classicAssetManifest[augment.icon], `${augment.name}强化图标缺少本地镜像`);
    assert.ok(["silver", "gold", "prismatic"].includes(augment.rarity));
  }
});

test("OP.GG 怀旧海斗快照覆盖 60 位英雄并保留页面原始统计", () => {
  assert.match(OP_GG_MAYHEM_PATCH, /^\d+\.\d+$/);
  assert.match(OP_GG_MAYHEM_SNAPSHOT_HASH, /^[a-f0-9]{64}$/);
  assert.equal(MAYHEM_STARTING_GOLD, 1400);
  assert.equal(MAYHEM_HAS_JUNGLE_ROLE, false);
  assert.equal(opggMayhemChampionBuilds.length, 60);
  assert.equal(opggMayhemRankingSummary.length, 60);
  assert.deepEqual(
    new Set(opggMayhemChampionBuilds.map((build) => build.classicId)),
    new Set(classicChampions.map((champion) => champion.classicId)),
  );
  assert.deepEqual(
    opggMayhemRankingSummary,
    opggMayhemChampionBuilds.map((build) => ({
      classicId: build.classicId,
      rank: build.rank,
      tier: build.tier,
      championMetrics: build.championMetrics,
      sourceUrl: build.sourceUrl,
    })),
  );
  assert.deepEqual(
    [...opggMayhemChampionBuilds.map((build) => build.rank)].sort((a, b) => a - b),
    Array.from({ length: 60 }, (_, index) => index + 1),
  );

  for (const build of opggMayhemChampionBuilds) {
    assert.equal(build.patch, OP_GG_MAYHEM_PATCH);
    assert.equal(build.startingGold, 1400);
    assert.match(build.sourceUrl, /op\.gg\/zh-cn\/lol\/modes\/aram-mayhem-classic\/.+\/build/);
    assert.ok(build.tier >= 1 && build.tier <= 5);
    assert.ok(build.championMetrics.pickRate > 0 && build.championMetrics.pickRate <= 100);
    assert.ok(build.championMetrics.winRate > 0 && build.championMetrics.winRate <= 100);

    assert.equal(build.augments.length, 10, `${build.name}应保留 OP.GG 前 10 个强化`);
    for (const recommendation of build.augments) {
      const catalogAugment = classicMayhemAugments.find((augment) => augment.id === recommendation.augmentId);
      assert.ok(catalogAugment);
      assert.equal(recommendation.name, catalogAugment.name, `${build.name}强化名称与目录 ID 不一致`);
      assert.equal(recommendation.apiName, catalogAugment.apiName, `${build.name}强化 API 名与目录 ID 不一致`);
      assertMetric(recommendation.metric, `${build.name} ${recommendation.name}`);
    }

    assert.equal(build.summonerSets.length, 2);
    for (const set of build.summonerSets) {
      assert.equal(set.spells.length, 2);
      assert.equal(set.spells.some((spell) => /smite|惩戒/i.test(`${spell.key}${spell.name}`)), false);
      for (const spell of set.spells) {
        assert.ok(classicAssetManifest[spell.icon], `${build.name} ${spell.name}缺少本地镜像`);
      }
      assertMetric(set.metric, `${build.name}召唤师技能`);
    }

    assert.equal(build.runes.status, "unavailable");
    assert.match(build.runes.reason, /OP\.GG|数据未找到/);
    assert.equal(build.skillBuilds.length, 1);
    const skillBuild = build.skillBuilds[0];
    assert.equal(skillBuild.priority.length, 3);
    assert.deepEqual(new Set(skillBuild.priority), new Set(["Q", "W", "E"]));
    assert.ok(skillBuild.levelSequence.length >= 15 && skillBuild.levelSequence.length <= 18);
    assert.ok(skillBuild.levelSequence.every((key) => ["Q", "W", "E", "R"].includes(key)));
    assert.deepEqual(new Set(skillBuild.levelSequence.slice(0, 3)), new Set(["Q", "W", "E"]));
    const expectedUltimateLevels = [6, 11, 16].filter((level) => level <= skillBuild.levelSequence.length);
    const actualUltimateLevels = skillBuild.levelSequence.flatMap((key, index) => key === "R" ? [index + 1] : []);
    assert.deepEqual(actualUltimateLevels, expectedUltimateLevels);
    assertMetric(skillBuild.metric, `${build.name}技能加点`);

    assert.equal(build.items.starting.length, 2);
    assert.equal(build.items.boots.length, 2);
    assert.equal(build.items.core.length, 5);
    for (const recommendation of [...build.items.starting, ...build.items.boots, ...build.items.core]) {
      assert.ok(recommendation.itemIds.length >= 1);
      const recalculated = recommendation.itemIds.reduce((sum, itemId) => {
        const item = itemById.get(itemId);
        assert.ok(item, `${build.name}引用未知装备 ${itemId}`);
        return sum + item.price;
      }, 0);
      assert.equal(recommendation.totalPrice, recalculated);
      assertMetric(recommendation.metric, `${build.name}装备路线`);
    }
    assert.ok(build.items.starting.every((recommendation) => recommendation.totalPrice <= 1400));
  }
});

test("怀旧海斗页面不再复用峡谷方案或启发式推荐，并纳入每日同步", async () => {
  const [pageSource, componentSource, generatorSource, workflowSource, packageSource] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ClassicMayhemGuide.tsx", import.meta.url), "utf8"),
    readFile(new URL("../scripts/generate-opgg-mayhem-builds.mjs", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/sync-classic-data.yml", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(pageSource, /怀旧海斗/);
  assert.match(pageSource, /view !== "mayhem"/);
  assert.match(pageSource, /怀旧海斗排名/);
  assert.match(pageSource, /classic-mayhem-ranking\.generated/);
  assert.doesNotMatch(pageSource, /from "\.\/classic-mayhem-opgg\.generated"/);
  assert.match(componentSource, /opggMayhemChampionBuilds/);
  assert.match(componentSource, /ChampionAbilityPanel/);
  assert.match(componentSource, /MAYHEM_STARTING_GOLD/);
  assert.match(componentSource, /数据未找到/);
  assert.match(componentSource, /白银阶/);
  assert.match(componentSource, /黄金阶/);
  assert.match(componentSource, /棱彩阶/);
  assert.match(componentSource, /公开数值不可用/);
  assert.doesNotMatch(componentSource, /prismatic: "棱镜"/);
  assert.doesNotMatch(componentSource, /classicBuildGuides|augmentScore|preferredTags/);
  assert.match(generatorSource, /增幅装置/);
  assert.match(generatorSource, /SkillOrder Table/);
  assert.match(generatorSource, /startingGold = 1400/);
  assert.match(generatorSource, /Smite is not legal/);
  assert.match(generatorSource, /rankings\.length !== 60/);
  assert.match(workflowSource, /app\/classic-mayhem-opgg\.generated\.ts/);
  assert.match(workflowSource, /app\/classic-mayhem-ranking\.generated\.ts/);
  assert.match(workflowSource, /actions:\s*write/);
  assert.match(workflowSource, /gh workflow run deploy-pages\.yml --ref main/);
  assert.match(workflowSource, /gh run watch "\$run_id" --exit-status/);
  assert.match(packageSource, /generate-opgg-mayhem-builds\.mjs/);
});
