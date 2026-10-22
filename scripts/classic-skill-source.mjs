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
};

export function classicNumericVersion(key) {
  return historicalForms[key]?.version || "3.15.5";
}

export function validateHistoricalForm(key, detail, historicalChampion) {
  const form = historicalForms[key];
  if (!form) return;
  if (!detail.abilities?.find(ability => ability.key === "Q")?.imageUrl?.includes(form.iconStem)
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
  for (const [field, label] of [["cooldown", "冷却"], ["cost", "消耗"]]) {
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
  if (ability.cost === "0" && /生命/.test(resourceText)) {
    notes.push(`来源边界：OP.GG Classic 原始消耗为0；Riot Data Dragon ${version} 的历史资源说明为“${resourceText}”。两者来源不同，不能将0解释为不消耗生命，也不将历史消耗视为已验证的当前 Classic 消耗。`);
  }
  if (/额外攻击力/.test(spell.tooltip || "") && spell.vars?.some(variable => variable.link === "attackdamage")) {
    notes.push(`来源边界：Riot Data Dragon ${version} 的参数字段标为 attackdamage，但同一技能提示正文写为额外攻击力；源内属性口径不一致，映射未确认，不据此断言当前 Classic 使用总攻击力或额外攻击力。`);
  }
  return { notes, rankValuesUnconfirmed };
}
