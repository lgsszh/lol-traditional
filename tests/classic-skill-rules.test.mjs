import assert from "node:assert/strict";
import test from "node:test";
import { classicChampions, skillPlanFor, isValidSkillPlan } from "../app/classic-data.ts";
import { classicNumericVersion, validateHistoricalForm } from "../scripts/classic-skill-source.mjs";
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
