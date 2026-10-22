import assert from "node:assert/strict";
import test from "node:test";
import { classicChampions, skillPlanFor, isValidSkillPlan } from "../app/classic-data.ts";
import { classicNumericVersion, validateHistoricalForm, classicSourceBoundary } from "../scripts/classic-skill-source.mjs";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";
import { spellBaseCostValues } from "../scripts/spell-resource-values.mjs";

test("客户端消耗从一阶开始解析并保留满级零消耗", () => {
  assert.deepEqual(spellBaseCostValues({ mana: [50, 25, 0, 0, 0, 0] }, 3), [50, 25, 0]);
  assert.deepEqual(spellBaseCostValues({ manaValues: { values: [50, 25, 0] } }, 3), [50, 25, 0]);
  assert.equal(spellBaseCostValues({ mana: [50] }, 3), null);
  assert.equal(spellBaseCostValues({ mana: [50, "25", 0] }, 3), null);
  assert.equal(spellBaseCostValues({}, 3), null);
});

test("重做前卡尔玛的官方数值来源与六级技能形态必须匹配", () => {
  assert.equal(classicNumericVersion("Karma"), "0.154.3");
  assert.equal(classicNumericVersion("Irelia"), "3.15.5");
  const detail = { abilities: [{ key: "Q", imageUrl: "/karmaheavenlywave_jade34.project_jade.png" }] };
  const historical = { spells: ["KarmaHeavenlyWave", "KarmaSpiritBond", "KarmaSoulShield", "KarmaChakra"].map((id, index) => ({ id, maxrank: index === 3 ? 1 : 6 })) };
  assert.doesNotThrow(() => validateHistoricalForm("Karma", detail, historical));
  assert.throws(() => validateHistoricalForm("Karma", detail, { spells: [{ id: "KarmaQ", maxrank: 5 }] }), /historical form differs/);
  assert.throws(() => validateHistoricalForm("Karma", { abilities: [{ key: "Q", imageUrl: "/KarmaQ.png" }] }, historical), /historical form differs/);
});

test("全部英雄默认加点合法，卡尔玛六级 Q/W/E 且 R 不消耗技能点", () => {
  for (const champion of classicChampions) {
    const plan = skillPlanFor(champion.spellOrder, champion);
    assert.ok(isValidSkillPlan(plan, champion), `${champion.key} 默认加点非法`);
    if (champion.key === "Karma") {
      for (const key of ["Q", "W", "E"]) assert.equal(plan.filter(skill => skill === key).length, 6);
      assert.equal(plan.includes("R"), false);
      assert.equal(isValidSkillPlan(skillPlanFor(champion.spellOrder), champion), false);
      const illegal = [...plan]; illegal[0] = "R";
      assert.equal(isValidSkillPlan(illegal, champion), false);
    } else {
      assert.deepEqual(plan.flatMap((key, index) => key === "R" ? [index + 1] : []), [6, 11, 16]);
    }
  }
  assert.deepEqual(skillPlanFor(["Q", "W", "E"]), ["Q", "W", "E", "Q", "Q", "R", "Q", "W", "Q", "W", "R", "W", "W", "E", "E", "R", "E", "E"]);
  assert.equal(isValidSkillPlan(Array(18).fill("Q")), false);
  assert.equal(isValidSkillPlan([]), false);
});

test("16.21 新英雄的旧版技能身份不得被现代重做技能替代", () => {
  for (const [key, spellIds, iconStem] of [
    ["Mordekaiser", ["MordekaiserMaceOfSpades", "MordekaiserCreepingDeathCast", "MordekaiserSyphonOfDestruction", "MordekaiserChildrenOfTheGrave"], "mordekaisermaceofspades.project_jade"],
    ["Yorick", ["YorickSpectral", "YorickDecayed", "YorickRavenous", "YorickReviveAlly"], "yorickomenofwar.project_jade"],
    ["Hecarim", ["HecarimRapidSlash", "HecarimW", "HecarimRamp", "HecarimUlt"], "jade_hecarim_rampage.project_jade"],
    ["Lucian", ["LucianQ", "LucianW", "LucianE", "LucianR"], "jade_lucian_q.project_jade"],
  ]) {
    assert.equal(classicNumericVersion(key), "3.15.5");
    const detail = { abilities: [{ key: "Q", imageUrl: `/${iconStem}.png` }] };
    const historical = { spells: spellIds.map((id, index) => ({ id, maxrank: index === 3 ? 3 : 5 })) };
    assert.doesNotThrow(() => validateHistoricalForm(key, detail, historical));
    assert.throws(() => validateHistoricalForm(key, detail, { spells: historical.spells.map(spell => ({ ...spell, id: "ModernRework" })) }), /historical form differs/);
    assert.throws(() => validateHistoricalForm(key, { abilities: [{ key: "Q", imageUrl: "/modern-q.png" }] }, historical), /historical form differs/);
  }
});

test("OP.GG 未确认等级与巨龙概述不伪装成旧版英雄逐级数值", () => {
  const boundary = classicSourceBoundary("Mordekaiser", { key: "R", cooldown: "120 / 105 / 90 / 80 / 8", cost: "0" }, { maxrank: 3, cooldownBurn: "120/105/90", costBurn: "0" });
  assert.equal(boundary.rankValuesUnconfirmed, true);
  assert.match(boundary.notes.join("\n"), /含5项，等级对应未确认.*公开3阶冷却为120\/105\/90/);
  assert.match(boundary.notes.join("\n"), /巨龙的具体效果和数值未在该历史数值源公开，不从英雄数值推算/);
  const hp = classicSourceBoundary("Mordekaiser", { key: "W", cooldown: "20 / 18 / 16 / 14 / 12 / 10", cost: "0" }, { maxrank: 5, cooldownBurn: "20/18/16/14/12", costBurn: "0" }, "消耗26/32/38/44/50生命值");
  assert.match(hp.notes.join("\n"), /不能将0解释为不消耗生命/);
  assert.equal(classicSourceBoundary("Lucian", { key: "Q", cooldown: "9/8/7/6/5", cost: "60" }, { maxrank: 5 }).rankValuesUnconfirmed, false);
  assert.equal(classicSourceBoundary("Ahri", { key: "Q", cooldown: "7/6/5/4/3/2", cost: "60" }, { maxrank: 5, cooldownBurn: "7/7/7/7/7" }).rankValuesUnconfirmed, true);
  assert.match(classicSourceBoundary("Lucian", { key: "Q" }, { tooltip: "额外攻击力的60%", vars: [{ link: "attackdamage" }] }).notes.join("\n"), /源内属性口径不一致，映射未确认/);
});

test("新增经典英雄保留旧形态与可见来源边界", () => {
  const get = id => classicChampionSkills.find(champion => champion.championId === id);
  const morde = get("60082");
  assert.deepEqual(morde?.abilities.slice(1).map(ability => ability.name), ["铲击之锤", "死亡蔓延", "毁灭虹吸", "死亡之子"]);
  assert.match(morde.abilities[1].numericDetail, /附近3个额外目标/);
  assert.match(morde.abilities[4].description, /巨龙/);
  assert.match(morde.abilities[4].numericDetail, /巨龙的具体效果和数值未在该历史数值源公开/);
  assert.equal(morde.abilities[4].rankValuesUnconfirmed, true);
  assert.deepEqual(get("60083")?.abilities.slice(1).map(ability => ability.name), ["战争预兆", "瘟疫预兆", "饥荒预兆", "死亡预兆"]);
  assert.match(get("60120")?.abilities[2].numericDetail || "", /任何伤害的20%/);
  assert.match(get("60236")?.abilities[3].numericDetail || "", /移除所有减速效果/);
  assert.doesNotMatch(get("60236")?.abilities[4].numericDetail || "", /0%属性加成/);
  assert.match(get("60236")?.abilities[1].numericDetail || "", /攻击力（口径未确认）/);
  assert.match(get("60236")?.abilities[1].numericDetail || "", /源内属性口径不一致，映射未确认/);
  assert.doesNotMatch(get("60236")?.abilities[1].numericDetail || "", /总攻击力（额外攻击力/);
});

test("新增经典技能保持历史形态，未知动态消耗不伪装为零", () => {
  const karma = classicChampionSkills.find(champion => champion.championId === "60043");
  assert.equal(karma?.stats.attackRange, 425);
  assert.equal(karma?.abilities[1].name, "天国之刃");
  assert.ok(karma?.abilities.every(ability => ability.numericVersion === "0.154.3"));
  assert.doesNotMatch(karma?.abilities[0].numericDetail || "", /3\.15\.5/);
  assert.match(karma?.abilities[1].numericDetail || "", /70\/110\/150\/190\/230\/270/);
  assert.match(karma?.abilities[1].numericDetail || "", /每100法术强度增加2个百分点/);
  assert.match(karma?.abilities[4].numericDetail || "", /最多充能2次/);
  const aatrox = classicChampionSkills.find(champion => champion.championId === "60266");
  assert.match(aatrox?.abilities[2].numericDetail || "", /动态数值未在旧版接口公开/);
  assert.doesNotMatch(aatrox?.abilities[2].numericDetail || "", /0%属性加成/);
  const quinn = classicChampionSkills.find(champion => champion.championId === "60133");
  assert.match(quinn?.abilities[4].description || "", /近战/);
});
