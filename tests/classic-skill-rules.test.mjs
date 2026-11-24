import assert from "node:assert/strict";
import test from "node:test";
import { classicChampions, skillPlanFor, isValidSkillPlan } from "../app/classic-data.ts";
import { classicNumericVersion, validateHistoricalForm, classicSourceBoundary } from "../scripts/classic-skill-source.mjs";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";
import { spellBaseCostValues } from "../scripts/spell-resource-values.mjs";
import { readFile } from "node:fs/promises";
import ts from "typescript";

test("客户端消耗从一阶开始解析并保留满级零消耗", () => {
  assert.deepEqual(spellBaseCostValues({ mana: [50, 25, 0, 0, 0, 0] }, 3), [50, 25, 0]);
  assert.deepEqual(spellBaseCostValues({ manaValues: { values: [50, 25, 0] } }, 3), [50, 25, 0]);
  assert.equal(spellBaseCostValues({ mana: [50] }, 3), null);
  assert.equal(spellBaseCostValues({ mana: [50, "25", 0] }, 3), null);
  assert.equal(spellBaseCostValues({}, 3), null);
});

test("旧乌迪尔四普通姿态支持虎凤优先，R一级可学且每姿态最多五点", () => {
  const udyr = { skillRules: { basicMaxRank: 5, ultimate: "stance" } };
  for (const order of [["R", "W", "E", "Q"], ["Q", "E", "W", "R"]]) {
    const plan = skillPlanFor(order, udyr);
    assert.equal(plan.length, 18);
    assert.equal(plan[0], order[0]);
    assert.equal(isValidSkillPlan(plan, udyr), true);
    assert.equal(plan.filter(key => key === order[0]).length, 5);
    assert.deepEqual(plan.slice(0, 3), order.slice(0, 3));
    assert.equal(isValidSkillPlan(plan), false, "普通英雄不得沿用姿态R规则");
  }
  const phoenix = skillPlanFor(["R", "W", "E", "Q"], udyr);
  assert.equal(phoenix.filter(skill => skill === "R").length, 5);
  const rankTooEarly = [...phoenix]; rankTooEarly[1] = "R";
  assert.equal(isValidSkillPlan(rankTooEarly, udyr), false);
  const sixRanks = [...phoenix]; sixRanks[17] = "R";
  assert.equal(isValidSkillPlan(sixRanks, udyr), false);
  assert.equal(isValidSkillPlan(phoenix.slice(0, 17), udyr), false);
  assert.throws(() => skillPlanFor(["R", "W", "E"], udyr), /技能优先级/);
  assert.throws(() => skillPlanFor(["R", "W", "E", "R"], udyr), /技能优先级/);
  assert.throws(() => skillPlanFor(["R", "W", "E", "Q"]), /技能优先级/);
});

test("四姿态加点通过实际保存及分享编解码保留，所有页面入口仍使用共享规则", async () => {
  const udyr = classicChampions.find(champion => champion.key === "Udyr");
  const plan = skillPlanFor(["R", "W", "E", "Q"], udyr);
  const state = { championId: udyr.classicId, skillPlan: plan };
  const persisted = JSON.parse(JSON.stringify(state));
  assert.deepEqual(persisted.skillPlan, plan);
  assert.equal(isValidSkillPlan(persisted.skillPlan, udyr), true);
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const codecs = page.slice(page.indexOf("function encodeBuildState("), page.indexOf("function asRecord("));
  const script = ts.transpileModule(codecs, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  const { encode, decode } = new Function(`${script}\nreturn { encode: encodeBuildState, decode: decodeBuildState };`)();
  const shared = decode(encode(state));
  assert.deepEqual(shared, state);
  assert.equal(isValidSkillPlan(shared.skillPlan, udyr), true);
  assert.match(page, /skillPlanFor\(linkedGuide\.skillOrder, linkedChampion\)/);
  assert.match(page, /isValidSkillPlan\(record\.skillPlan, champion\)/);
  assert.match(page, /skillPlanFor\(targetGuide\.skillOrder, champion\)/);
  assert.match(page, /skillPlanFor\(guide\.skillOrder, selectedChampion\)/);
  assert.match(page, /isValidSkillPlan\(next, selectedChampion\)/);
  assert.match(page, /skill === "R" && rules\.ultimate === "standard" && !\[6, 11, 16\]/);
  assert.match(page, /selectedGuide\.skillOrder\.join\(" → "\)/);
  assert.match(page, /经典乌迪尔：Q\/W\/E\/R 都是普通姿态/);
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
    } else if (champion.key !== "Udyr") {
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

test("16.22/16.23 新英雄逐项校验旧版技能 ID、阶数和全部图标", () => {
  for (const [key, spellIds, maxRanks, iconStems] of [
    ["Swain", ["SwainDecrepify", "SwainShadowGrasp", "SwainTorment", "SwainMetamorphism"], [5, 5, 5, 3], ["swaincarrionrenewal.project_jade", "swaindecrepify.project_jade", "swainnevermove.project_jade", "swaintorment.project_jade", "swainravenousflock.project_jade"]],
    ["Elise", ["EliseHumanQ", "EliseHumanW", "EliseHumanE", "EliseR"], [5, 5, 5, 4], ["jade_elisepassive.project_jade", "jade_elisehumanq.project_jade", "jade_elisehumanw.project_jade", "jade_elisehumane.project_jade", "jade_eliser.project_jade"]],
    ["Volibear", ["VolibearQ", "VolibearW", "VolibearE", "VolibearR"], [5, 5, 5, 3], ["volibearpassive.project_jade", "volibearq.project_jade", "volibearw.project_jade", "volibeare.project_jade", "volibearr.project_jade"]],
    ["Urgot", ["UrgotHeatseekingMissile", "UrgotTerrorCapacitorActive2", "UrgotPlasmaGrenade", "UrgotSwap2"], [5, 5, 5, 3], ["urgot_passive.project_jade", "urgotacidhunter.project_jade", "urgotterrorcapacitor.project_jade", "urgotcorrosivecharge.project_jade", "urgotpositionreverser.project_jade"]],
    ["Udyr", ["UdyrTigerStance", "UdyrTurtleStance", "UdyrBearStance", "UdyrPhoenixStance"], [5, 5, 5, 5], ["jade_udyr_p.project_jade", "jade_udyr_q.project_jade", "jade_udyr_w.project_jade", "jade_udyr_e.project_jade", "jade_udyr_r.project_jade"]],
    ["Talon", ["TalonNoxianDiplomacy", "TalonRake", "TalonCutthroat", "TalonShadowAssault"], [5, 5, 5, 3], ["jade_talonp.project_jade", "jade_talonq.project_jade", "jade_talonw.project_jade", "jade_talone.project_jade", "jade_talonr.project_jade"]],
    ["Xerath", ["XerathArcanopulse", "XerathLocusOfPower", "XerathMageChains", "XerathArcaneBarrageWrapper"], [5, 5, 5, 3], ["xerath_ascendedform.project_jade", "xerath_arcanopulse.project_jade", "xerath_locusofpower.project_jade", "xerath_magechains.project_jade", "xerath_arcanebarrage.project_jade"]],
  ]) {
    assert.equal(classicNumericVersion(key), "3.15.5");
    const detail = { abilities: iconStems.map((stem, index) => ({ key: ["P", "Q", "W", "E", "R"][index], imageUrl: `/${stem}.png` })) };
    const historical = { spells: spellIds.map((id, index) => ({ id, maxrank: maxRanks[index] })) };
    assert.doesNotThrow(() => validateHistoricalForm(key, detail, historical));
    for (let index = 0; index < 4; index += 1) {
      const modern = structuredClone(historical);
      modern.spells[index].id = "ModernRework";
      assert.throws(() => validateHistoricalForm(key, detail, modern), /historical form differs/, `${key} 技能 ${index} 的 ID 必须被校验`);
      const wrongRank = structuredClone(historical);
      wrongRank.spells[index].maxrank += 1;
      assert.throws(() => validateHistoricalForm(key, detail, wrongRank), /historical form differs/, `${key} 技能 ${index} 的阶数必须被校验`);
    }
    for (let index = 0; index < 5; index += 1) {
      const wrongIcon = structuredClone(detail);
      wrongIcon.abilities[index].imageUrl = "/modern.png";
      assert.throws(() => validateHistoricalForm(key, wrongIcon, historical), /historical form differs/, `${key} 技能 ${index} 的图标必须被校验`);
      const missing = structuredClone(detail);
      missing.abilities.splice(index, 1);
      assert.throws(() => validateHistoricalForm(key, missing, historical), /historical form differs/);
    }
  }
});

test("伊莉丝四阶形态的初始等级不占18次花点，R仅在6/11/16升级", () => {
  const elise = classicChampions.find(champion => champion.key === "Elise");
  assert.ok(elise);
  const plan = skillPlanFor(elise.spellOrder, elise);
  assert.equal(plan.length, 18);
  assert.equal(isValidSkillPlan(plan, elise), true);
  assert.deepEqual(["Q", "W", "E", "R"].map(key => plan.filter(skill => skill === key).length), [5, 5, 5, 3]);
  assert.deepEqual(plan.flatMap((key, index) => key === "R" ? [index + 1] : []), [6, 11, 16]);
  const firstLevelR = [...plan]; firstLevelR[0] = "R";
  assert.equal(isValidSkillPlan(firstLevelR, elise), false);
  assert.equal(isValidSkillPlan(["R", ...plan], elise), false);
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
  const urgotRange = classicSourceBoundary("Urgot", { key: "R", range: "550/700/850/550" }, { maxrank: 3, rangeBurn: "550/700/850" });
  assert.equal(urgotRange.rankValuesUnconfirmed, true);
  assert.match(urgotRange.notes.join("\n"), /原始距离含4项，等级对应未确认.*公开3阶距离为550\/700\/850/);
  assert.equal(classicSourceBoundary("Urgot", { key: "R", range: "550/700/850" }, { maxrank: 3, rangeBurn: "550/700/850" }).rankValuesUnconfirmed, false);
  assert.equal(classicSourceBoundary("Udyr", { key: "R", cost: "47/44/41/38/35/32" }, { maxrank: 5, costBurn: "47/44/41/38/35" }).rankValuesUnconfirmed, true);
  const udyrMatched = classicSourceBoundary("Udyr", { key: "R", cost: "47/44/41/38/35" }, { maxrank: 5, costBurn: "47/44/41/38/35" });
  assert.equal(udyrMatched.rankValuesUnconfirmed, false);
  assert.doesNotMatch(udyrMatched.notes.join("\n"), /原始六项|含6项/);
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

test("16.22 三英雄的经典技能保留历史机制、四阶形态和未确认来源边界", () => {
  const get = id => classicChampionSkills.find(champion => champion.championId === id);
  const swain = get("60050");
  assert.deepEqual(swain?.abilities.slice(1).map(ability => ability.name), ["恶鸦来袭", "鸦爪之缚", "苦难折磨", "狂食鸦群"]);
  assert.match(swain.abilities[4].numericDetail, /维持邪鸦附体的法力消耗每秒增加/);
  assert.equal(swain.abilities[1].rankValuesUnconfirmed, true);
  const elise = get("60060");
  assert.deepEqual(elise?.abilities.slice(1).map(ability => ability.name), ["神经毒素 / 剧毒之蜇", "自爆蜘蛛 / 掠行狂暴", "结茧 / 盘丝", "蜘蛛形态"]);
  assert.match(elise.abilities[4].numericDetail, /最多可存在2\/3\/4\/5只小蜘蛛/);
  assert.match(elise.abilities[4].numericDetail, /公开4阶数值.*开局即拥有.*只记录18次技能点投入.*6\/11\/16级.*不把初始获得的一阶计作额外花点/);
  assert.equal(elise.abilities[1].rankValuesUnconfirmed, true);
  const volibear = get("60106");
  assert.match(volibear?.abilities[1].numericDetail || "", /将目标摔到沃利贝尔的身后/);
  assert.match(volibear?.abilities[4].numericDetail || "", /连锁伤害/);
  assert.equal(volibear.abilities[4].rankValuesUnconfirmed, true);
  for (const entry of [swain, elise, volibear]) {
    assert.ok(entry.abilities.every(ability => ability.numericVersion === "3.15.5"));
    assert.ok(entry.abilities.filter(ability => ability.rankValuesUnconfirmed).every(ability => /来源边界：.*等级对应未确认/.test(ability.numericDetail)));
  }
});

test("16.23 四英雄保留旧机制、乌迪尔五阶依据与真实源差异", () => {
  const get = id => classicChampionSkills.find(champion => champion.championId === id);
  const urgot = get("60006");
  assert.match(urgot.abilities[1].numericDetail, /导弹锁定/);
  assert.match(urgot.abilities[4].numericDetail, /调换位置.*压制/);
  const urgotRangeMismatch = urgot.abilities[4].range?.includes("/") && urgot.abilities[4].range.split("/").length !== 3;
  const urgotMismatch = ["cooldown", "cost", "range"].some(field => urgot.abilities[4][field]?.includes("/") && urgot.abilities[4][field].split("/").length !== 3);
  assert.equal(Boolean(urgot.abilities[4].rankValuesUnconfirmed), urgotMismatch);
  if (urgotRangeMismatch) assert.match(urgot.abilities[4].numericDetail, /原始距离含\d+项，等级对应未确认.*公开3阶距离为550\/700\/850/);
  const udyr = get("60077");
  assert.deepEqual(udyr.abilities.map(ability => ability.name), ["灵猴敏捷", "猛虎姿态", "灵龟姿态", "巨熊姿态", "火凤姿态"]);
  for (const ability of udyr.abilities.slice(1)) {
    assert.equal(ability.numericVersion, "3.15.5");
    const mismatch = ["cooldown", "cost", "range"].some(field => ability[field]?.includes("/") && ability[field].split("/").length !== 5);
    assert.equal(Boolean(ability.rankValuesUnconfirmed), mismatch);
    if (mismatch) assert.match(ability.numericDetail, /来源边界：.*等级对应未确认/);
    assert.match(ability.numericDetail, /均公开5阶数值.*18次加点.*R不是6\/11\/16级终极技能/);
    assert.match(ability.numericDetail, /只采用上述已审核的历史五阶规则/);
  }
  assert.match(get("60091").abilities[3].numericDetail, /沉默目标1秒/);
  const xerath = get("60101");
  assert.match(xerath.abilities[2].numericDetail, /移动指令可结束能量之座/);
  assert.match(xerath.abilities[2].numericDetail, /历史正文仅写持续至手动取消/);
  assert.match(xerath.abilities[4].numericDetail, /最多被施放3次/);
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
