// OP.GG Classic preserves pre-rework kits; late-S3 Data Dragon is not
// interchangeable with every champion's historical form.
const historicalForms = {
  Karma: {
    version: "0.154.3",
    spellIds: ["KarmaHeavenlyWave", "KarmaSpiritBond", "KarmaSoulShield", "KarmaChakra"],
    maxRanks: [6, 6, 6, 1],
    iconStem: "karmaheavenlywave_jade34",
  },
  Mordekaiser: {
    version: "3.15.5",
    spellIds: ["MordekaiserMaceOfSpades", "MordekaiserCreepingDeathCast", "MordekaiserSyphonOfDestruction", "MordekaiserChildrenOfTheGrave"],
    maxRanks: [5, 5, 5, 3],
    iconStem: "mordekaisermaceofspades.project_jade",
  },
  Yorick: {
    version: "3.15.5",
    spellIds: ["YorickSpectral", "YorickDecayed", "YorickRavenous", "YorickReviveAlly"],
    maxRanks: [5, 5, 5, 3],
    iconStem: "yorickomenofwar.project_jade",
  },
  Hecarim: {
    version: "3.15.5",
    spellIds: ["HecarimRapidSlash", "HecarimW", "HecarimRamp", "HecarimUlt"],
    maxRanks: [5, 5, 5, 3],
    iconStem: "jade_hecarim_rampage.project_jade",
  },
  Lucian: {
    version: "3.15.5",
    spellIds: ["LucianQ", "LucianW", "LucianE", "LucianR"],
    maxRanks: [5, 5, 5, 3],
    iconStem: "jade_lucian_q.project_jade",
  },
  Swain: {
    version: "3.15.5",
    spellIds: ["SwainDecrepify", "SwainShadowGrasp", "SwainTorment", "SwainMetamorphism"],
    maxRanks: [5, 5, 5, 3],
    iconStems: ["swaincarrionrenewal.project_jade", "swaindecrepify.project_jade", "swainnevermove.project_jade", "swaintorment.project_jade", "swainravenousflock.project_jade"],
  },
  Elise: {
    version: "3.15.5",
    spellIds: ["EliseHumanQ", "EliseHumanW", "EliseHumanE", "EliseR"],
    // Spider Form starts with one innate rank; the plan spends points at 6/11/16.
    maxRanks: [5, 5, 5, 4],
    iconStems: ["jade_elisepassive.project_jade", "jade_elisehumanq.project_jade", "jade_elisehumanw.project_jade", "jade_elisehumane.project_jade", "jade_eliser.project_jade"],
  },
  Volibear: {
    version: "3.15.5",
    spellIds: ["VolibearQ", "VolibearW", "VolibearE", "VolibearR"],
    maxRanks: [5, 5, 5, 3],
    iconStems: ["volibearpassive.project_jade", "volibearq.project_jade", "volibearw.project_jade", "volibeare.project_jade", "volibearr.project_jade"],
  },
  Urgot: {
    version: "3.15.5",
    spellIds: ["UrgotHeatseekingMissile", "UrgotTerrorCapacitorActive2", "UrgotPlasmaGrenade", "UrgotSwap2"],
    maxRanks: [5, 5, 5, 3],
    iconStems: ["urgot_passive.project_jade", "urgotacidhunter.project_jade", "urgotterrorcapacitor.project_jade", "urgotcorrosivecharge.project_jade", "urgotpositionreverser.project_jade"],
  },
  Udyr: {
    version: "3.15.5",
    spellIds: ["UdyrTigerStance", "UdyrTurtleStance", "UdyrBearStance", "UdyrPhoenixStance"],
    maxRanks: [5, 5, 5, 5],
    iconStems: ["jade_udyr_p.project_jade", "jade_udyr_q.project_jade", "jade_udyr_w.project_jade", "jade_udyr_e.project_jade", "jade_udyr_r.project_jade"],
  },
  Talon: {
    version: "3.15.5",
    spellIds: ["TalonNoxianDiplomacy", "TalonRake", "TalonCutthroat", "TalonShadowAssault"],
    maxRanks: [5, 5, 5, 3],
    iconStems: ["jade_talonp.project_jade", "jade_talonq.project_jade", "jade_talonw.project_jade", "jade_talone.project_jade", "jade_talonr.project_jade"],
  },
  Xerath: {
    version: "3.15.5",
    spellIds: ["XerathArcanopulse", "XerathLocusOfPower", "XerathMageChains", "XerathArcaneBarrageWrapper"],
    maxRanks: [5, 5, 5, 3],
    iconStems: ["xerath_ascendedform.project_jade", "xerath_arcanopulse.project_jade", "xerath_locusofpower.project_jade", "xerath_magechains.project_jade", "xerath_arcanebarrage.project_jade"],
  },
};

export function classicNumericVersion(key) {
  return historicalForms[key]?.version || "3.15.5";
}

export function validateHistoricalForm(key, detail, historicalChampion) {
  const form = historicalForms[key];
  if (!form) return;
  const iconsMatch = form.iconStems
    ? detail.abilities?.length === 5 && form.iconStems.every((stem, index) =>
      detail.abilities[index]?.key === ["P", "Q", "W", "E", "R"][index]
      && detail.abilities[index]?.imageUrl?.includes(stem))
    : detail.abilities?.find(ability => ability.key === "Q")?.imageUrl?.includes(form.iconStem);
  if (!iconsMatch
    || historicalChampion.spells?.some((spell, index) => spell.id !== form.spellIds[index] || spell.maxrank !== form.maxRanks[index])
    || historicalChampion.spells?.length !== form.spellIds.length) {
    throw new Error(`${key}: Classic historical form differs from Riot ${form.version}; review source before publishing`);
  }
}

// Historical forms may expose extra OP.GG ranks whose semantics are
// not documented. Retain the upstream fields, but never label them as the
// corresponding Riot ranks or infer an undocumented mechanic from them.
export function classicSourceBoundary(key, ability, spell, resourceText = "") {
  const version = classicNumericVersion(key);
  const notes = [];
  let rankValuesUnconfirmed = false;
  if (!spell) return { notes, rankValuesUnconfirmed };
  for (const [field, label] of [["cooldown", "冷却"], ["cost", "消耗"], ["range", "距离"]]) {
    const raw = ability[field];
    if (typeof raw !== "string" || !raw.includes("/")) continue;
    const count = raw.split("/").length;
    if (count === spell.maxrank) continue;
    rankValuesUnconfirmed = true;
    notes.push(`来源边界：OP.GG Classic 原始${label}含${count}项，等级对应未确认；Riot Data Dragon ${version} 公开${spell.maxrank}阶${label}为${spell[`${field}Burn`]}。不将原始字段直接套用为旧版逐级数值。`);
  }
  if (key === "Mordekaiser" && ability.key === "R") {
    notes.push(`来源边界：OP.GG Classic 概述提及巨龙；Riot Data Dragon ${version} 的公开效果与数值仅针对目标英雄。巨龙的具体效果和数值未在该历史数值源公开，不从英雄数值推算。`);
  }
  if (key === "Elise" && ability.key === "R") {
    notes.push(`形态与加点说明：Riot Data Dragon ${version} 的蜘蛛形态公开4阶数值。S3 原始攻略说明开局即拥有该技能；本站18级加点表只记录18次技能点投入，R 在6/11/16级各投入1点，不把初始获得的一阶计作额外花点。历史说明来源：https://www.mobafire.com/league-of-legends/build/elise-ranked-jungle-hybrid-guide-276366 。`);
  }
  if (key === "Udyr") {
    notes.push(`形态与加点说明：Riot Data Dragon ${version} 的猛虎、灵龟、巨熊和火凤四姿态均公开5阶数值。本站按 S3 历史规则提供18次加点，四姿态都可从1级学习，R不是6/11/16级终极技能；本站只采用上述已审核的历史五阶规则，不从等级对应未确认的原始字段推算技能阶数。历史规则来源：https://www.mobafire.com/league-of-legends/build/s3-udyr-flight-of-the-phoenix-jungle-208007 。不将历史数值视为已验证的当前 Classic 实测数值。`);
  }
  if (key === "Xerath" && ability.key === "W") {
    notes.push(`来源边界：Riot 官方26.23 Classic说明移动指令可结束能量之座；Riot Data Dragon ${version} 的历史正文仅写持续至手动取消。上方保留历史来源公式，不把历史操作说明或数值冒充当前 Classic 实测结果。当前机制来源：https://www.leagueoflegends.com/en-gb/news/game-updates/league-of-legends-patch-26-23-notes/#classic 。`);
  }
  if (ability.cost === "0" && /生命/.test(resourceText)) {
    notes.push(`来源边界：OP.GG Classic 原始消耗为0；Riot Data Dragon ${version} 的历史资源说明为“${resourceText}”。两者来源不同，不能将0解释为不消耗生命，也不将历史消耗视为已验证的当前 Classic 消耗。`);
  }
  if (/额外攻击力/.test(spell.tooltip || "") && spell.vars?.some(variable => variable.link === "attackdamage")) {
    notes.push(`来源边界：Riot Data Dragon ${version} 的参数字段标为 attackdamage，但同一技能提示正文写为额外攻击力；源内属性口径不一致，映射未确认，不据此断言当前 Classic 使用总攻击力或额外攻击力。`);
  }
  return { notes, rankValuesUnconfirmed };
}
