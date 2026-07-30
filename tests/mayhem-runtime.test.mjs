import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";

const runtimeDirectory = new URL("../public/classic-data/mayhem/", import.meta.url);

async function readJson(name) {
  return JSON.parse(await readFile(new URL(name, runtimeDirectory), "utf8"));
}

test("怀旧海斗运行时数据按英雄拆分并保持 OP.GG 完整结构", async () => {
  const files = (await readdir(runtimeDirectory)).filter((name) => /^\d+\.json$/.test(name));
  assert.equal(files.length, 60);

  let recommendationCount = 0;
  for (const name of files) {
    const path = new URL(name, runtimeDirectory);
    const payload = await readJson(name);
    const fileStat = await stat(path);
    assert.ok(fileStat.size < 180_000, `${name} 运行时快照过大：${fileStat.size}`);
    assert.equal(payload.meta.schemaVersion, 1);
    assert.equal(payload.meta.mode, "KIWI_JADE");
    assert.equal(payload.meta.startingGold, 1400);
    assert.equal(payload.meta.hasJungleRole, false);
    assert.equal(payload.champion.classicId, name.replace(".json", ""));
    assert.equal(payload.build.classicId, payload.champion.classicId);
    assert.deepEqual(
      payload.champion.abilities.map((ability) => ability.key),
      ["P", "Q", "W", "E", "R"],
      `${payload.build.name} 技能结构不完整`,
    );
    for (const ability of payload.champion.abilities) {
      assert.ok(ability.name.trim(), `${payload.build.name} ${ability.key} 缺少技能名称`);
      assert.ok(ability.description.trim(), `${payload.build.name} ${ability.key} 缺少技能说明`);
      assert.ok(ability.numericDetail.trim(), `${payload.build.name} ${ability.key} 缺少完整技能数值结构`);
      assert.match(ability.numericDetail, /\d/, `${payload.build.name} ${ability.key} 技能数值没有数字`);
      assert.notEqual(ability.numericStatus, "unavailable", `${payload.build.name} ${ability.key} 数值不可用`);
    }
    assert.equal(payload.build.skillBuilds.length, 5, `${payload.build.name} 技能方案不完整`);
    assert.equal(payload.augmentRecommendations.length, 45, `${payload.build.name} 强化推荐不完整`);
    for (const rarity of ["silver", "gold", "prismatic"]) {
      assert.equal(
        payload.augmentRecommendations.filter((entry) => entry.augment.rarity === rarity).length,
        15,
        `${payload.build.name} ${rarity} 推荐不完整`,
      );
    }
    for (const ability of payload.champion.abilities) {
      assert.doesNotMatch(
        ability.numericDetail,
        /客户端字段|客户端公式|effect\d+amount|\[[A-Za-z]\w*\]|CalculationPart|客户端未提供静态值/i,
        `${payload.build.name} ${ability.key} 泄漏客户端内部字段`,
      );
    }
    recommendationCount += payload.augmentRecommendations.length;
  }
  assert.equal(recommendationCount, 2700);
});

test("完整强化池只在进入图鉴后按需加载", async () => {
  const catalog = await readJson("catalog.json");
  assert.equal(catalog.meta.schemaVersion, 1);
  assert.equal(catalog.counts.classic, 188);
  assert.equal(catalog.augments.length, 188);
  assert.deepEqual(catalog.counts.byRarity, {
    silver: 51,
    gold: 76,
    prismatic: 61,
  });

  const componentSource = await readFile(
    new URL("../app/components/ClassicMayhemGuide.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(componentSource, /from "\.\.\/classic-mayhem(?:-opgg)?\.generated"/);
  assert.match(componentSource, /classic-data\/mayhem/);
  assert.match(componentSource, /build\.skillBuilds\.map/);
  assert.doesNotMatch(componentSource, /mayhem-rune-status|数据未找到/);
});

test("运行时快照保留已核对的技能数值，防止每日同步退化", async () => {
  const vayne = await readJson("60067.json");
  const vayneW = vayne.champion.abilities.find((ability) => ability.key === "W");
  assert.match(vayneW.numericDetail, /6\/7\/8\/9\/10%最大生命值/);
  assert.match(vayneW.numericDetail, /50\/65\/80\/95\/110/);
  assert.match(vayneW.numericDetail, /140\/155\/170\/185\/200/);

  const teemo = await readJson("60017.json");
  const teemoR = teemo.champion.abilities.find((ability) => ability.key === "R");
  assert.match(teemoR.numericDetail, /3\/4\/5层充能/);
  assert.match(teemoR.numericDetail, /35\/30\/25秒充能时间/);

  const annie = await readJson("60001.json");
  const annieR = annie.champion.abilities.find((ability) => ability.key === "R");
  assert.match(annieR.numericDetail, /提伯斯拥有/);
  assert.match(annieR.numericDetail, /1150/);
  assert.match(annieR.numericDetail, /30\/45\/60/);

  const lulu = await readJson("60117.json");
  const luluW = lulu.champion.abilities.find((ability) => ability.key === "W");
  assert.match(luluW.numericDetail, /20\/22\.5\/25\/27\.5\/30%攻击速度/);
  assert.doesNotMatch(luluW.numericDetail, /2000%|3000%/);
});
