import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { classicChampions } from "../app/classic-data.ts";
import { classicAssetManifest } from "../app/classic-assets.generated.ts";
import {
  CLASSIC_MAYHEM_MODE,
  CLASSIC_MAYHEM_PATCH,
  LIVE_DATA_PATCH,
  classicExclusiveAugments,
  classicMayhemAugments,
  liveClassicChampions,
  regularMayhemAugments,
} from "../app/classic-mayhem.generated.ts";

test("怀旧海斗使用同一批 60 位英雄，但技能是当前正式服快照", () => {
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
    assert.ok(champion.stats.attackRange > 0);
    for (const ability of champion.abilities) {
      assert.ok(ability.name.trim(), `${champion.name} ${ability.key} 缺少名称`);
      assert.ok(ability.description.trim(), `${champion.name} ${ability.key} 缺少说明`);
      assert.ok(ability.icon.startsWith("https://ddragon.leagueoflegends.com/"));
      assert.ok(classicAssetManifest[ability.icon], `${champion.name} ${ability.key} 缺少本地镜像`);
    }
    assert.ok(classicAssetManifest[champion.portrait], `${champion.name}现代头像缺少本地镜像`);
  }
});

test("KIWI 与 KIWI_JADE 模式池保持分离并包含经典专属强化", () => {
  assert.ok(regularMayhemAugments.length >= 200);
  assert.ok(classicMayhemAugments.length >= 180);
  assert.ok(classicExclusiveAugments.length >= 20);
  assert.equal(new Set(classicMayhemAugments.map((augment) => augment.id)).size, classicMayhemAugments.length);

  const regularApiNames = new Set(regularMayhemAugments.map((augment) => augment.apiName.replace(/^ARAM_/, "")));
  for (const augment of classicExclusiveAugments) {
    assert.equal(regularApiNames.has(augment.apiName.replace(/^ARAM_/, "")), false, `${augment.name} 不应出现在 KIWI`);
  }

  const exclusiveNames = new Set(classicExclusiveAugments.map((augment) => augment.apiName));
  for (const required of [
    "DontStopCleavin",
    "Upgrade_ZzRotPortal",
    "Upgrade_DeathFireGrasp",
    "Upgrade_InnervatingLocket",
    "DoransBiggestFan",
    "HexCore",
    "ARAM_PoroKing",
    "SnowballRoulette",
    "SummonersSafari",
  ]) {
    assert.ok(exclusiveNames.has(required), `缺少经典专属强化 ${required}`);
  }

  for (const augment of classicMayhemAugments) {
    assert.ok(augment.name.trim(), `${augment.apiName} 缺少中文名`);
    assert.ok(augment.description.trim(), `${augment.name} 缺少说明或公开状态提示`);
    assert.match(augment.icon, new RegExp(`^https://raw\\.communitydragon\\.org/${CLASSIC_MAYHEM_PATCH.replace(".", "\\.")}/game/`));
    assert.ok(classicAssetManifest[augment.icon], `${augment.name}强化图标缺少本地镜像`);
    assert.ok(["silver", "gold", "prismatic"].includes(augment.rarity));
    assert.ok(augment.tags.length > 0);
  }
});

test("怀旧海斗页面明确区分现代技能、经典装备与可复验数据口径", async () => {
  const [pageSource, componentSource, generatorSource, workflowSource] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ClassicMayhemGuide.tsx", import.meta.url), "utf8"),
    readFile(new URL("../scripts/generate-classic-mayhem-data.mjs", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/sync-classic-data.yml", import.meta.url), "utf8"),
  ]);
  assert.match(pageSource, /怀旧海斗/);
  assert.match(pageSource, /ClassicMayhemGuide/);
  assert.match(componentSource, /正式服现代英雄技能/);
  assert.match(componentSource, /经典嚎哭深渊地图/);
  assert.match(componentSource, /怀旧装备/);
  assert.match(componentSource, /不把不可稳定复验的瞬时胜率写死/);
  assert.match(componentSource, /aram-mayhem-classic/);
  assert.match(componentSource, /aram-mayhem/);
  assert.match(generatorSource, /KIWI_JADE/);
  assert.match(generatorSource, /KIWI/);
  assert.match(generatorSource, /Data Dragon/);
  assert.match(generatorSource, /CommunityDragon/);
  assert.match(workflowSource, /app\/classic-mayhem\.generated\.ts/);
});
