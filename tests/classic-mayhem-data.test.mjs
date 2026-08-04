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
  opggMayhemItems,
  opggMayhemChampionBuilds,
} from "../app/classic-mayhem-opgg.generated.ts";
import { opggMayhemRankingSummary } from "../app/classic-mayhem-ranking.generated.ts";

const itemById = new Map(classicItems.map((item) => [item.id, item]));
const modeItemById = new Map(opggMayhemItems.map((item) => [item.id, item]));

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
      const clientText = ability.numericDetail
        .split("\n")
        .find((line) => line.startsWith("技能文本："))
        ?.replace(/^技能文本：/, "");
      assert.equal(
        ability.description,
        clientText,
        `${champion.name} ${ability.key} 主说明没有使用同版本客户端完整技能文本`,
      );
      assert.ok(ability.icon.startsWith("https://ddragon.leagueoflegends.com/"));
      assert.ok(classicAssetManifest[ability.icon], `${champion.name} ${ability.key} 缺少本地镜像`);
      if (ability.key !== "P") {
        assert.ok(ability.numericDetail?.trim(), `${champion.name} ${ability.key} 缺少公开技能数值`);
        assert.match(ability.numericDetail, /\d/, `${champion.name} ${ability.key} 技能数值没有数字`);
        assert.doesNotMatch(ability.numericDetail, /\{\{|@|动态数值|\?{2,}/, `${champion.name} ${ability.key} 存在未解析数值`);
      }
      assert.doesNotMatch(ability.numericDetail, /属性枚举|对应属性/, `${champion.name} ${ability.key} 存在伪解析属性`);
      assert.doesNotMatch(
        ability.numericDetail,
        /AmmoRechargeTime=/,
        `${champion.name} ${ability.key} 向用户暴露了客户端内部等级字段`,
      );
      assert.doesNotMatch(
        ability.numericDetail,
        /基础参数：/,
        `${champion.name} ${ability.key} 重复展示了冷却、消耗或距离`,
      );
      assert.doesNotMatch(
        `${ability.description}\n${ability.numericDetail}`,
        /\+\s+-/,
        `${champion.name} ${ability.key} 暴露了未格式化的负数公式`,
      );
      assert.doesNotMatch(
        ability.numericDetail,
        /客户端字段|客户端公式|effect\d+amount|\[[A-Za-z_][A-Za-z0-9_.:-]*\]|CalculationPart|客户端未提供静态值|客户端词条未解析|客户端字段未命名|数据状态：unavailable/i,
        `${champion.name} ${ability.key} 不应向用户泄漏客户端内部字段或占位符`,
      );
      assert.doesNotMatch(
        ability.numericDetail,
        /持续\s*秒|缩短\s*秒|获得\s*%|有\s*层充能\s*\(\s*秒|按对局状态实时计算个/,
        `${champion.name} ${ability.key} 不应出现缺失公开数值后的空洞句子`,
      );
      for (const levelMatch of ability.numericDetail.matchAll(/英雄等级([0-9/]+)/g)) {
        const levels = levelMatch[1].split("/").map(Number);
        assert.ok(
          levels.every((level, index) => Number.isInteger(level)
            && level >= 1
            && level <= 18
            && (index === 0 || level > levels[index - 1])),
          `${champion.name} ${ability.key} 包含不可达或乱序的英雄等级断点：${levelMatch[1]}`,
        );
      }
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

  const vayne = liveClassicChampions.find((champion) => champion.key === "Vayne");
  const vayneP = vayne?.abilities.find((ability) => ability.key === "P");
  const vayneW = vayne?.abilities.find((ability) => ability.key === "W");
  assert.match(vayneP?.description ?? "", /获得30移动速度/);
  assert.equal(vayneW?.numericStatus, "available");
  assert.match(vayneW?.numericDetail ?? "", /6\/7\/8\/9\/10%最大生命值/);
  assert.match(vayneW?.numericDetail ?? "", /最低?造成50\/65\/80\/95\/110|最少造成50\/65\/80\/95\/110/);
  assert.match(vayneW?.numericDetail ?? "", /140\/155\/170\/185\/200/);

  const teemo = liveClassicChampions.find((champion) => champion.key === "Teemo");
  const teemoR = teemo?.abilities.find((ability) => ability.key === "R");
  assert.equal(teemoR?.numericStatus, "available");
  assert.match(teemoR?.numericDetail ?? "", /3\/4\/5层充能/);
  assert.match(teemoR?.numericDetail ?? "", /35\/30\/25秒充能时间/);

  const annie = liveClassicChampions.find((champion) => champion.key === "Annie");
  const annieR = annie?.abilities.find((ability) => ability.key === "R");
  assert.equal(annieR?.numericStatus, "available");
  assert.match(annieR?.numericDetail ?? "", /提伯斯拥有/);
  assert.match(annieR?.numericDetail ?? "", /1150/);
  assert.match(annieR?.numericDetail ?? "", /30\/45\/60/);

  const garen = liveClassicChampions.find((champion) => champion.key === "Garen");
  const garenP = garen?.abilities.find((ability) => ability.key === "P");
  assert.equal(garenP?.numericStatus, "available");
  assert.match(
    garenP?.numericDetail ?? "",
    /1\.5\/1\.7\/1\.9\/2\.1\/2\.3\/2\.5\/3\.3\/4\.1\/4\.9\/5\.7\/6\.5\/7\.3\/8\.1\/8\.5\/8\.9\/9\.3\/9\.7\/10\.1%（英雄等级1\/2\/3\/4\/5\/6\/7\/8\/9\/10\/11\/12\/13\/14\/15\/16\/17\/18）/,
  );
  assert.doesNotMatch(garenP?.numericDetail ?? "", /150%|1010%/);

  const jax = liveClassicChampions.find((champion) => champion.key === "Jax");
  const jaxP = jax?.abilities.find((ability) => ability.key === "P");
  assert.match(jaxP?.numericDetail ?? "", /英雄等级1\/4\/7\/10\/13\/16/);
  assert.doesNotMatch(jaxP?.numericDetail ?? "", /英雄等级[^）]*19/);

  const katarina = liveClassicChampions.find((champion) => champion.key === "Katarina");
  const katarinaE = katarina?.abilities.find((ability) => ability.key === "E");
  assert.match(katarinaE?.numericDetail ?? "", /英雄等级1\/6\/11\/16/);
  assert.doesNotMatch(katarinaE?.numericDetail ?? "", /英雄等级[^）]*21/);

  const lulu = liveClassicChampions.find((champion) => champion.key === "Lulu");
  const luluW = lulu?.abilities.find((ability) => ability.key === "W");
  assert.equal(luluW?.numericStatus, "available");
  assert.match(luluW?.numericDetail ?? "", /20\/22\.5\/25\/27\.5\/30%攻击速度/);
  assert.doesNotMatch(luluW?.numericDetail ?? "", /2000%|3000%/);

  const heimerdinger = liveClassicChampions.find((champion) => champion.key === "Heimerdinger");
  const heimerdingerR = heimerdinger?.abilities.find((ability) => ability.key === "R");
  assert.equal(heimerdingerR?.numericStatus, "available");
  assert.match(heimerdingerR?.numericDetail ?? "", /升级版导弹对小兵造成2000%伤害/);

  const janna = liveClassicChampions.find((champion) => champion.key === "Janna");
  const jannaW = janna?.abilities.find((ability) => ability.key === "W");
  assert.equal(jannaW?.range, "550");
  assert.doesNotMatch(jannaW?.numericDetail ?? "", /范围=550/);
  assert.doesNotMatch(jannaW?.numericDetail ?? "", /4294967295/);
});

test("技能数值面板异步解码图标，并隐藏不可用的空数值卡", async () => {
  const componentSource = await readFile(
    new URL("../app/components/ChampionAbilityPanel.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(componentSource, /decoding="sync"/);
  assert.ok((componentSource.match(/decoding="async"/g) ?? []).length >= 2);
  assert.match(componentSource, /numericStatus !== "unavailable"/);
  assert.match(componentSource, /\{showNumericDetail && \(/);
  assert.match(componentSource, /!line\.startsWith\("基础参数："\)/);
  assert.match(componentSource, /highlightedNumbers\(ability\.description\)/);
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

  const erosion = classicMayhemAugments.find((augment) => augment.apiName === "ARAM_Erosion");
  assert.ok(erosion, "怀旧海斗强化池应包含侵蚀");
  assert.match(erosion.description, /持续4秒/);
  assert.match(erosion.description, /每层1\.5%/);
  assert.match(erosion.description, /最多叠加20层/);
  assert.doesNotMatch(erosion.description, /\?|0\.015\s*\+|20\s*\+\s*10/);
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
  assert.equal(
    opggMayhemChampionBuilds.reduce((total, build) => total + build.augments.length, 0),
    2_700,
    "60 位英雄都应保留 45 条 OP.GG 分品质强化推荐",
  );

  for (const build of opggMayhemChampionBuilds) {
    assert.equal(build.patch, OP_GG_MAYHEM_PATCH);
    assert.equal(build.startingGold, 1400);
    assert.match(build.sourceUrl, /op\.gg\/zh-cn\/lol\/modes\/aram-mayhem-classic\/.+\/build/);
    assert.ok(build.tier >= 1 && build.tier <= 5);
    assert.ok(build.championMetrics.pickRate > 0 && build.championMetrics.pickRate <= 100);
    assert.ok(build.championMetrics.winRate > 0 && build.championMetrics.winRate <= 100);

    assert.equal(build.augments.length, 45, `${build.name}应保留 OP.GG 三个品质各 15 个强化`);
    assert.equal(
      new Set(build.augments.map((recommendation) => recommendation.augmentId)).size,
      45,
      `${build.name}强化推荐不应跨品质重复`,
    );
    for (const rarity of ["silver", "gold", "prismatic"]) {
      assert.equal(
        build.augments.filter((recommendation) => recommendation.rarity === rarity).length,
        15,
        `${build.name} ${rarity} 强化应保留 OP.GG 原始 15 行`,
      );
    }
    for (const recommendation of build.augments) {
      const catalogAugment = classicMayhemAugments.find((augment) => augment.id === recommendation.augmentId);
      assert.ok(catalogAugment);
      assert.equal(recommendation.name, catalogAugment.name, `${build.name}强化名称与目录 ID 不一致`);
      assert.equal(recommendation.apiName, catalogAugment.apiName, `${build.name}强化 API 名与目录 ID 不一致`);
      assert.equal(recommendation.rarity, catalogAugment.rarity, `${build.name}强化品质与目录 ID 不一致`);
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
    assert.equal(build.skillBuilds.length, 5);
    for (const skillBuild of build.skillBuilds) {
      assert.equal(skillBuild.priority.length, 3);
      assert.deepEqual(new Set(skillBuild.priority), new Set(["Q", "W", "E"]));
      assert.ok(skillBuild.levelSequence.length >= 15 && skillBuild.levelSequence.length <= 18);
      assert.ok(skillBuild.levelSequence.every((key) => ["Q", "W", "E", "R"].includes(key)));
      for (const key of ["Q", "W", "E"]) {
        const points = skillBuild.levelSequence.filter((entry) => entry === key).length;
        assert.ok(points >= 1 && points <= 5, `${build.name} ${key} 技能点数越界`);
      }
      const ultimatePoints = skillBuild.levelSequence.filter((entry) => entry === "R").length;
      assert.ok(ultimatePoints >= 0 && ultimatePoints <= 3, `${build.name} R 技能点数越界`);
      assertMetric(skillBuild.metric, `${build.name}技能加点`);
    }

    assert.equal(build.items.starting.length, 2);
    assert.equal(build.items.boots.length, 2);
    assert.equal(build.items.core.length, 5);
    for (const recommendation of [...build.items.starting, ...build.items.boots, ...build.items.core]) {
      assert.ok(recommendation.itemIds.length >= 1);
      const hasModeItem = recommendation.itemIds.some((itemId) => modeItemById.has(itemId));
      if (hasModeItem) {
        assert.equal(recommendation.totalPrice, null);
        for (const itemId of recommendation.itemIds) {
          assert.ok(itemById.has(itemId) || modeItemById.has(itemId), `${build.name} unknown item ${itemId}`);
        }
      } else {
        const recalculated = recommendation.itemIds.reduce((sum, itemId) => {
          const item = itemById.get(itemId);
          assert.ok(item, `${build.name} unknown item ${itemId}`);
          return sum + item.price;
        }, 0);
        assert.equal(recommendation.totalPrice, recalculated);
      }
      assertMetric(recommendation.metric, `${build.name}装备路线`);
    }
    assert.ok(build.items.starting.every((recommendation) => recommendation.totalPrice === null
      || recommendation.totalPrice <= 1400));
  }
});

test("怀旧海斗页面不再复用峡谷方案或启发式推荐，并纳入每日同步", async () => {
  const [pageSource, componentSource, styleSource, generatorSource, workflowSource, packageSource] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ClassicMayhemGuide.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../scripts/generate-opgg-mayhem-builds.mjs", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/sync-classic-data.yml", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(pageSource, /怀旧海斗/);
  assert.match(pageSource, /view !== "mayhem"/);
  assert.match(pageSource, /怀旧海斗排名/);
  assert.match(pageSource, /classic-mayhem-ranking\.generated/);
  assert.doesNotMatch(pageSource, /from "\.\/classic-mayhem-opgg\.generated"/);
  assert.match(componentSource, /classic-data\/mayhem/);
  assert.match(componentSource, /runtime\.augmentRecommendations/);
  assert.match(componentSource, /build\.skillBuilds\.map/);
  assert.match(componentSource, /ChampionAbilityPanel/);
  assert.match(componentSource, /cache:\s*"no-store"/);
  assert.match(componentSource, /fresh=\$\{Date\.now\(\)\}/);
  assert.doesNotMatch(componentSource, /cache:\s*"force-cache"/);
  assert.match(componentSource, /Array\.from\(\{ length: 6 \}/);
  assert.match(componentSource, /OP\.GG 样本不足六件时保留“数据未提供”空位/);
  assert.match(componentSource, /从 OP\.GG 其他高频路线替换/);
  assert.match(componentSource, /aria-orientation="horizontal"/);
  assert.match(componentSource, /selectSection/);
  assert.match(componentSource, /scrollIntoView\(\{ block: "start", behavior: "auto" \}\)/);
  assert.match(componentSource, /白银阶/);
  assert.match(componentSource, /黄金阶/);
  assert.match(componentSource, /棱彩阶/);
  assert.doesNotMatch(
    componentSource,
    /from\s+["']\.\.\/classic-mayhem(?:-opgg)?\.generated["']/,
  );
  assert.doesNotMatch(componentSource, /mayhem-rune-status|数据未找到/);
  assert.doesNotMatch(componentSource, /prismatic: "棱镜"/);
  assert.doesNotMatch(componentSource, /classicBuildGuides|augmentScore|preferredTags/);
  assert.match(
    styleSource,
    /\.mayhem-detail-nav\s*\{[\s\S]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/,
  );
  assert.match(generatorSource, /\/augments/);
  assert.match(generatorSource, /entry\.rareity/);
  assert.match(generatorSource, /Skill table/);
  assert.match(generatorSource, /\/skills/);
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
