import assert from "node:assert/strict";
import test from "node:test";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";
import { liveClassicChampions } from "../app/classic-mayhem.generated.ts";
import { classicChampions } from "../app/classic-data.ts";

const abilityKeys = ["P", "Q", "W", "E", "R"];
const unresolvedPattern = /{{|}}|@[a-z0-9_.]+|数据状态：?unavailable|客户端内部变量/i;

function assertAbilitySet(label, champions, { requireStatus = false } = {}) {
  assert.equal(champions.length, classicChampions.length, `${label} 必须覆盖当前完整英雄目录`);
  assert.deepEqual(new Set(champions.map(champion => champion.championId ?? champion.classicId)), new Set(classicChampions.map(champion => champion.classicId)), `${label} ID 必须与完整目录逐项一致`);
  if (requireStatus) assert.deepEqual(new Set(champions.map(champion => champion.key)), new Set(classicChampions.map(champion => champion.key)), `${label} key 必须与完整目录逐项一致`);
  const abilities = [];
  for (const champion of champions) {
    assert.ok(champion.stats, `${label} ${champion.championName || champion.name} 缺少等级面板基础属性`);
    for (const field of ["hp", "attackDamage", "attackSpeed", "armor", "magicResist", "moveSpeed", "attackRange"]) {
      assert.equal(
        Number.isFinite(champion.stats[field]),
        true,
        `${label} ${champion.championName || champion.name} 的 ${field} 不可计算`,
      );
    }
    assert.deepEqual(
      champion.abilities.map((ability) => ability.key),
      abilityKeys,
      `${label} ${champion.championName || champion.name} 技能键不完整`,
    );
    for (const ability of champion.abilities) {
      const identity = `${label} ${champion.championName || champion.name} ${ability.key}`;
      assert.ok(ability.name.trim(), `${identity} 缺少名称`);
      assert.ok(ability.description.trim(), `${identity} 缺少说明`);
      assert.ok(ability.numericDetail?.trim(), `${identity} 缺少独立数值明细`);
      assert.doesNotMatch(`${ability.description}\n${ability.numericDetail}`, unresolvedPattern, `${identity} 含未解析占位符`);
      assert.ok(ability.numericVersion?.trim(), `${identity} 缺少数值版本`);
      if (requireStatus) {
        assert.notEqual(ability.numericStatus, "unavailable", `${identity} 数值不可用`);
        assert.deepEqual(ability.unresolvedTokens, [], `${identity} 仍有未解析客户端字段`);
      }
      abilities.push(ability);
    }
  }
  assert.equal(abilities.length, champions.length * abilityKeys.length, `${label} 必须覆盖每位英雄的 5 个技能`);
}

test("03 与 04 的全部技能均有来源、说明和独立数值明细", () => {
  assert.equal(classicChampionSkills.flatMap(champion => champion.abilities).length, classicChampions.length * 5);
  assert.equal(liveClassicChampions.flatMap(champion => champion.abilities).length, classicChampions.length * 5);
  assert.ok(liveClassicChampions.every(champion => champion.abilities.every(ability => !ability.rankValuesUnconfirmed)), "经典历史来源边界不得污染现代技能数据");
  assertAbilitySet("03", classicChampionSkills);
  assertAbilitySet("04", liveClassicChampions, { requireStatus: true });
});

test("关键被动的隐藏冷却与作用范围不得在生成时丢失", () => {
  const vayne = liveClassicChampions.find((champion) => champion.key === "Vayne");
  const mundo = liveClassicChampions.find((champion) => champion.key === "DrMundo");
  const gragas = liveClassicChampions.find((champion) => champion.key === "Gragas");
  const vaynePassive = vayne?.abilities.find((ability) => ability.key === "P");
  const mundoPassive = mundo?.abilities.find((ability) => ability.key === "P");
  const gragasPassive = gragas?.abilities.find((ability) => ability.key === "P");
  assert.equal(vaynePassive?.range, "2000");
  assert.match(vaynePassive?.numericDetail || "", /30.*移动速度/);
  assert.match(mundoPassive?.cooldown || "", /60.*51.*42.*33.*24.*15/);
  assert.match(mundoPassive?.numericDetail || "", /0\.4.*2\.3%/);
  assert.match(gragasPassive?.cooldown || "", /12\/10\/8\/6（英雄等级1\/6\/11\/16）/);
});

test("新增四位的现代技能保留重做后形态，不混用经典五阶四姿态或旧技能", () => {
  const get = key => liveClassicChampions.find(champion => champion.key === key);
  assert.equal(get("Urgot").abilities[4].name, "超越死亡的恐惧");
  assert.equal(get("Talon").abilities[3].name, "刺客之道");
  assert.equal(get("Xerath").abilities[2].name, "毁灭之眼");
  const udyr = get("Udyr");
  assert.deepEqual(udyr.abilities.map(ability => ability.name), ["众灵纽带", "狂暴爪击", "坚铁甲胄", "踏火蛮冲", "极凌飓风"]);
  assert.match(udyr.abilities[0].numericDetail, /觉醒效果/);
  const modernRankParts = udyr.abilities[4].numericDetail.match(/每秒对附近的敌人造成([\d./]+)/)?.[1].split("/");
  assert.equal(modernRankParts?.length, 6, "现代飓风每秒伤害应保留完整六阶");
  assert.ok(modernRankParts.every(value => /^\d+(?:\.\d+)?$/.test(value) && Number.isFinite(Number(value)) && Number(value) >= 0));
  assert.match(udyr.abilities[4].numericDetail, /冰川风暴/);
  assert.ok(udyr.abilities.every(ability => ability.numericVersion !== "3.15.5"));
});

test("现代奎因 R 的实际三阶消耗完整解析且满级为零", () => {
  const ability = liveClassicChampions.find(champion => champion.key === "Quinn")?.abilities.find(ability => ability.key === "R");
  assert.equal(ability?.cost, "50/25/0");
  assert.match(ability?.numericDetail || "", /法力消耗=50\/25\/0/);
  assert.deepEqual(ability?.unresolvedTokens, []);
});

test("03 与 04 共用可切换等级和装备的技能面板", async () => {
  const source = await import("node:fs/promises").then(({ readFile }) =>
    readFile(new URL("../app/components/ChampionAbilityPanel.tsx", import.meta.url), "utf8"));
  assert.match(source, /growthMultiplier/);
  assert.match(source, /min="1"/);
  assert.match(source, /max="18"/);
  assert.match(source, /equippedItems/);
  assert.match(source, /仅合计商店说明中的固定面板属性/);
  assert.match(source, /ability\.rankValuesUnconfirmed/);
  assert.match(source, /OP.GG 原始字段，等级对应未确认/);
  assert.ok(source.indexOf("OP.GG 原始字段，等级对应未确认") < source.indexOf("{showNumericDetail &&"), "未确认提示应紧邻原始指标，不埋在公式之后");
  assert.match(source, /!ability\.rankValuesUnconfirmed && \(ability\.cooldown/);
  assert.match(source, /当前资源上限：/);
  assert.match(source, /资源类型以所选技能来源为准/);
  assert.doesNotMatch(source, /当前法力\/能量上限/);
});
