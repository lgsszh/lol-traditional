import { readFile } from "node:fs/promises";
import { fetchJson, writeOrCheck } from "./classic-generator-utils.mjs";

const outputPath = new URL("../app/classic-mayhem.generated.ts", import.meta.url);
const classicDataPath = new URL("../app/classic-data.ts", import.meta.url);
const versionsUrl = "https://ddragon.leagueoflegends.com/api/versions.json";

const htmlEntities = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

const keywordLabels = new Map([
  ["item_keyword_onhit", "攻击特效"],
  ["item_keyword_proc", "触发效果"],
  ["item_keyword_criticalstrike", "暴击"],
  ["item_keyword_lifesteal", "生命偷取"],
  ["item_keyword_omnivamp", "全能吸血"],
  ["spellname", "所选技能"],
  ["spellnameonly", "所选技能"],
  ["abilityname", "所选技能"],
]);

function cleanText(value = "") {
  return String(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(?:li|p|div)>/gi, "；")
    .replace(/<[^>]+>/g, "")
    .replace(/%i:[^%]+%/gi, "")
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (entity) => htmlEntities[entity] || entity)
    .replace(/&#(\d+);/g, (_, codePoint) => String.fromCodePoint(Number(codePoint)))
    .replace(/\s*；\s*；+/g, "；")
    .replace(/\s+/g, " ")
    .replace(/^；|；$/g, "")
    .trim();
}

function roundNumber(value) {
  const rounded = Math.round(Number(value) * 10_000) / 10_000;
  return Object.is(rounded, -0) ? 0 : rounded;
}

function finiteNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function formatNumber(value) {
  const numeric = finiteNumber(value);
  return numeric === null ? null : String(roundNumber(numeric));
}

function readRoster(source) {
  return [...source.matchAll(/champion\("(\d+)",\s*"([^"]+)"/g)].map((match) => ({
    classicId: match[1],
    key: match[2],
  }));
}

function rarityName(value) {
  return value === "kPrismatic" ? "prismatic" : value === "kGold" ? "gold" : "silver";
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

function baseValue(value) {
  if (value === null || value === undefined) return null;
  const candidate = value?.baseValue ?? value;
  return finiteNumber(candidate);
}

function primaryResource(record) {
  const resource = record?.primaryAbilityResource;
  return Array.isArray(resource) ? resource[0] : resource;
}

function chooseValidatedStat(ddragonValue, characterValue, field, validation, scale = 1) {
  const hasDataDragonInput = ddragonValue !== null && ddragonValue !== undefined && ddragonValue !== "";
  const hasCharacterInput = characterValue !== null && characterValue !== undefined && characterValue !== "";
  const dataDragon = hasDataDragonInput ? Number(ddragonValue) : Number.NaN;
  const characterRecord = hasCharacterInput ? Number(characterValue) * scale : Number.NaN;
  const hasDataDragon = hasDataDragonInput && Number.isFinite(dataDragon);
  const hasCharacterRecord = hasCharacterInput && Number.isFinite(characterRecord);

  if (hasDataDragon && dataDragon !== 0) return roundNumber(dataDragon);
  if (hasCharacterRecord && characterRecord !== 0) {
    validation.fallback.push(field);
    return roundNumber(characterRecord);
  }
  if (hasDataDragon && dataDragon === 0) {
    if (hasCharacterRecord && characterRecord === 0) validation.confirmedZero.push(field);
    return 0;
  }
  if (hasCharacterRecord) {
    validation.fallback.push(field);
    return roundNumber(characterRecord);
  }
  throw new Error(`No same-patch value for champion stat ${field}`);
}

function rankValues(values, maxRank = 1) {
  if (!Array.isArray(values)) return [];
  const numeric = values.map(finiteNumber).filter((value) => value !== null);
  if (numeric.length === 0) return [];
  const rankCount = Math.max(1, Number(maxRank) || 1);
  let selected = numeric;
  if (numeric.length >= rankCount + 1) selected = numeric.slice(1, rankCount + 1);
  else if (numeric.length > rankCount) selected = numeric.slice(0, rankCount);
  const rounded = selected.map(roundNumber);
  return rounded.every((value) => value === rounded[0]) ? [rounded[0]] : rounded;
}

function formatValueSeries(values, multiplier = 1) {
  const scaled = values.map((value) => roundNumber(value * multiplier));
  return scaled.map(formatNumber).filter(Boolean).join("/");
}

function collectSpellContext(resources, maxRank = 1) {
  const dataValues = new Map();
  const calculations = new Map();

  for (const resource of resources.filter(Boolean)) {
    const spell = resource.mSpell ?? resource;
    for (const entry of spell.DataValues ?? spell.mDataValues ?? []) {
      if (!entry?.name || dataValues.has(entry.name.toLowerCase())) continue;
      const values = rankValues(entry.values, maxRank);
      if (values.length > 0) {
        dataValues.set(entry.name.toLowerCase(), {
          name: entry.name,
          values,
        });
      }
    }
    for (const [name, calculation] of Object.entries(spell.mSpellCalculations ?? {})) {
      if (!calculations.has(name.toLowerCase())) {
        calculations.set(name.toLowerCase(), { name, calculation });
      }
    }
  }

  return { dataValues, calculations, maxRank };
}

function statLabel(part, fieldName = "", issues = null) {
  const source = `${fieldName} ${part?.mStatFormula ?? ""}`.toLowerCase();
  if (source.includes("bonusad")) return "额外攻击力";
  if (source.includes("totalad") || source.includes("attackdamage")) return "总攻击力";
  if (source.includes("apratio") || source.includes("abilitypower")) return "法术强度";
  if (source.includes("maxhp") || source.includes("maximumhealth")) return "最大生命值";
  if (source.includes("bonushealth")) return "额外生命值";
  if (source.includes("armor")) return "护甲";
  if (source.includes("magicresist") || source.includes("spellblock")) return "魔法抗性";
  if (part?.mStat === undefined && part?.mStatFormula === undefined) return "法术强度";

  const statCode = part?.mStat ?? part?.mStatFormula;
  const baseLabels = new Map([
    [1, "护甲"],
    [2, "攻击力"],
    [6, "魔法抗性"],
    [12, "最大生命值"],
    [18, "生命偷取"],
  ]);
  const baseLabel = baseLabels.get(Number(statCode));
  if (baseLabel) {
    const isBonus = Number(part?.mStatFormula) === 2 && part?.mStat !== undefined;
    return isBonus ? `额外${baseLabel}` : baseLabel;
  }

  const issue = `未命名属性枚举 ${statCode}`;
  issues?.add(issue);
  return null;
}

function formatFormulaPart(part, context, issues, seen) {
  if (!part || typeof part !== "object") return null;
  const type = part.__type ?? "unknown";

  if (type === "NamedDataValueCalculationPart") {
    const entry = context.dataValues.get(String(part.mDataValue).toLowerCase());
    if (entry) return formatValueSeries(entry.values);
  }
  if (type === "StatByNamedDataValueCalculationPart") {
    const entry = context.dataValues.get(String(part.mDataValue).toLowerCase());
    if (entry) {
      const label = statLabel(part, entry.name, issues);
      if (label) return `${formatValueSeries(entry.values)} × ${label}`;
    }
  }
  if (type === "StatByCoefficientCalculationPart") {
    const coefficient = formatNumber(part.mCoefficient);
    const label = statLabel(part, "", issues);
    if (coefficient && label) return `${coefficient} × ${label}`;
  }
  if (type === "NumberCalculationPart") return formatNumber(part.mNumber);
  if (type === "EffectValueCalculationPart") {
    const effectIndex = Number(part.mEffectIndex);
    const entry = context.dataValues.get(`effect${effectIndex}amount`);
    if (entry) return formatValueSeries(entry.values);
  }
  if (type === "ByCharLevelInterpolationCalculationPart") {
    const start = formatNumber(part.mStartValue);
    const end = formatNumber(part.mEndValue);
    if (start && end) return `${start}–${end}（1–18级）`;
  }
  if (type === "ByCharLevelBreakpointsCalculationPart") {
    const levelOne = formatNumber(part.mLevel1Value);
    const perLevel = formatNumber(part.mInitialBonusPerLevel);
    if (levelOne) {
      return `${levelOne}${perLevel ? `（初始每级 +${perLevel}，按客户端断点变化）` : "（按英雄等级变化）"}`;
    }
  }
  if (type === "AbilityResourceByCoefficientCalculationPart") {
    const coefficient = formatNumber(part.mCoefficient);
    if (coefficient) return `${coefficient} × 当前资源`;
  }
  if (type === "BuffCounterByCoefficientCalculationPart") {
    const coefficient = formatNumber(part.mCoefficient);
    if (coefficient) return `${coefficient} × 状态层数`;
  }
  if (type === "BuffCounterByNamedDataValueCalculationPart") {
    const entry = context.dataValues.get(String(part.mDataValue).toLowerCase());
    if (entry) return `${formatValueSeries(entry.values)} × 状态层数`;
  }
  if (type === "SumOfSubPartsCalculationPart") {
    const sourceParts = part.mSubparts ?? [];
    const subparts = sourceParts.map((subpart) => formatFormulaPart(subpart, context, issues, seen));
    if (subparts.some((subpart) => !subpart)) {
      issues.add(`公式部件 ${type} 未完整展开`);
      return null;
    }
    if (subparts.length > 0) return `(${subparts.join(" + ")})`;
  }
  if (type === "ProductOfSubPartsCalculationPart") {
    const sourceParts = part.mSubparts ?? [];
    const subparts = sourceParts.map((subpart) => formatFormulaPart(subpart, context, issues, seen));
    if (subparts.some((subpart) => !subpart)) {
      issues.add(`公式部件 ${type} 未完整展开`);
      return null;
    }
    if (subparts.length > 0) return `(${subparts.join(" × ")})`;
  }
  if (type === "StatBySubPartCalculationPart") {
    const subpart = formatFormulaPart(part.mSubpart, context, issues, seen);
    const label = statLabel(part, "", issues);
    if (subpart && label) return `${subpart} × ${label}`;
  }
  if (type === "{f3cbe7b2}" && part.mSpellCalculationKey) {
    return formatCalculation(part.mSpellCalculationKey, context, issues, seen);
  }

  issues.add(`公式部件 ${type}`);
  return null;
}

function formatCalculation(name, context, issues, seen = new Set()) {
  const key = String(name).replace(/^calc_/i, "").toLowerCase();
  const entry = context.calculations.get(key);
  if (!entry) return null;
  if (seen.has(key)) {
    issues.add(`循环公式 ${entry.name}`);
    return null;
  }
  const nextSeen = new Set(seen).add(key);
  const calculation = entry.calculation;

  if (calculation.__type === "GameCalculationModified") {
    const base = formatCalculation(calculation.mModifiedGameCalculation, context, issues, nextSeen);
    if (!base) {
      issues.add(`公式 ${entry.name} 的基础公式未完整展开`);
      return null;
    }
    const multiplier = formatFormulaPart(calculation.mMultiplier, context, issues, nextSeen);
    if (!multiplier) {
      issues.add(`公式 ${entry.name} 的倍率未完整展开`);
      return null;
    }
    return `(${base}) × ${multiplier}`;
  }

  const sourceParts = calculation.mFormulaParts ?? [];
  const parts = sourceParts.map((part) => formatFormulaPart(part, context, issues, nextSeen));
  if (parts.some((part) => !part)) {
    issues.add(`公式 ${entry.name} 未完整展开`);
    return null;
  }
  let result = parts.join(" + ");
  const multiplier = formatFormulaPart(calculation.mMultiplier, context, issues, nextSeen);
  if (multiplier) result = result ? `(${result}) × ${multiplier}` : multiplier;
  if (!result) {
    issues.add(`公式 ${entry.name}`);
    return null;
  }
  return result;
}

function sanitizeNumericText(value = "") {
  return cleanText(value)
    .replace(/\[(?:[A-Za-z_][A-Za-z0-9_.:-]*)\]\s*/g, "")
    .replace(/【客户端(?:未提供静态值|词条未解析|字段未命名)：[^】]*】/g, "")
    .replace(/@[^@\r\n]+@|\{\{[^{}]+\}\}|\{[0-9a-f]{8}\}/gi, "")
    .replace(/\beffect\d+amount\b/gi, "")
    .replace(/\b[A-Za-z_][A-Za-z0-9_]*CalculationPart\b/g, "")
    .replace(/\?{2,}/g, "")
    .replace(/\(\s*\)|（\s*）/g, "")
    .replace(/[：:=]\s*(?=[，。；,.!?]|$)/g, "")
    .replace(/\s+([，。；,.!?])/g, "$1")
    .replace(/([，。；])(?:\s*[，。；])+/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveDataToken(token, context, issues) {
  const trimmed = token.trim();
  const multiplierMatch = trimmed.match(/^(.*?)(?:\*(-?[\d.]+))?$/);
  const rawKey = multiplierMatch?.[1] ?? trimmed;
  const multiplier = multiplierMatch?.[2] ? Number(multiplierMatch[2]) : 1;
  const normalized = rawKey.replace(/^calc_/i, "").toLowerCase();

  if (/^spellmodifierdescriptionappend$/i.test(rawKey)) return "";
  const keyword = keywordLabels.get(normalized);
  if (keyword) return keyword;

  const aliases = [
    normalized,
    normalized.replace(/\.\d+$/, ""),
    /^e\d+$/i.test(normalized) ? `effect${normalized.slice(1)}amount` : null,
    normalized.includes(":") ? normalized.split(":").at(-1) : null,
  ].filter(Boolean);
  const dataValue = aliases.map((key) => context.dataValues.get(key)).find(Boolean);
  if (dataValue) return formatValueSeries(dataValue.values, multiplier);

  const calculation = aliases
    .map((key) => formatCalculation(key, context, issues))
    .find(Boolean);
  if (calculation) {
    return multiplier === 1 ? calculation : `(${calculation}) × ${formatNumber(multiplier)}`;
  }
  if (/^f\d+(?:\.\d+)?$/i.test(rawKey) || /^(?:stack|count|current|total)\w*$/i.test(rawKey)) {
    issues.add(`对局实时字段 ${rawKey}`);
    return null;
  }
  issues.add(`未解析字段 ${rawKey}`);
  return null;
}

function resolvePublicText(value, context) {
  const issues = new Set();
  const unresolvedTokens = new Set();
  let text = String(value ?? "");
  text = text.replace(/@([^@\r\n]+)@/g, (_, token) => {
    const resolved = resolveDataToken(token, context, issues);
    if (resolved === null) unresolvedTokens.add(token.trim());
    return resolved ?? "";
  });
  text = text.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (_, token) => {
    const normalized = token.trim().toLowerCase();
    const keyword = keywordLabels.get(normalized);
    if (keyword) return keyword;
    const resolved = resolveDataToken(token, context, issues);
    if (resolved === null) unresolvedTokens.add(token.trim());
    return resolved ?? "";
  });
  text = cleanText(text);

  const remainingTokens = [
    ...(text.match(/@[^@\r\n]+@/g) ?? []),
    ...(text.match(/\{\{[^{}]+\}\}/g) ?? []),
    ...(text.match(/\{[0-9a-f]{8}\}/gi) ?? []),
  ];
  for (const token of remainingTokens) unresolvedTokens.add(token);
  if (text.includes("???")) unresolvedTokens.add("???");
  text = sanitizeNumericText(text);

  const hasIssue = unresolvedTokens.size > 0 || issues.size > 0;
  const status = !text ? "unavailable" : hasIssue ? "partial" : "available";
  return {
    text,
    status,
    issues: [...issues],
    unresolvedTokens: [...unresolvedTokens],
  };
}

function dataDragonContext(spell, baseContext) {
  const dataValues = new Map(baseContext.dataValues);
  for (const [index, values] of (spell.effectBurn ?? []).entries()) {
    if (!values) continue;
    const parsed = String(values)
      .split("/")
      .map(Number)
      .filter(Number.isFinite);
    if (parsed.length > 0) {
      dataValues.set(`effect${index}amount`, {
        name: `effect${index}amount`,
        values: parsed.map(roundNumber),
      });
    }
  }
  for (const variable of spell.vars ?? []) {
    if (!variable?.key) continue;
    const coefficients = (variable.coeff ?? []).map(Number).filter(Number.isFinite);
    if (coefficients.length > 0) {
      dataValues.set(variable.key.toLowerCase(), {
        name: variable.key,
        values: coefficients.map(roundNumber),
      });
    }
  }
  return { ...baseContext, dataValues };
}

function findCharacterRecord(bin, championKey) {
  const normalizedKey = String(championKey).replace(/[^a-z0-9]/gi, "").toLowerCase();
  const matches = Object.entries(bin).filter(([path, entry]) => {
    if (entry?.__type !== "CharacterRecord") return false;
    const normalizedPath = path.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const normalizedName = String(entry.mCharacterName ?? "").replace(/[^a-z0-9]/gi, "").toLowerCase();
    return normalizedName === normalizedKey
      || normalizedPath === `characters${normalizedKey}characterrecordsroot`;
  });
  return matches.length === 1 ? matches[0][1] : null;
}

function findSpellObject(bin, reference, spell) {
  if (reference && bin[reference]?.mSpell) return bin[reference];
  const wanted = [spell?.id]
    .filter(Boolean)
    .map((value) => String(value).replace(/[^a-z0-9]/gi, "").toLowerCase())
    .filter((value) => value.length >= 3);
  if (wanted.length === 0) return null;
  const matches = Object.values(bin).filter((entry) => {
    if (!entry?.mSpell) return false;
    const names = [entry.ObjectName, entry.mScriptName]
      .filter(Boolean)
      .map((value) => String(value).replace(/[^a-z0-9]/gi, "").toLowerCase())
      .filter((value) => value.length >= 3);
    return wanted.some((candidate) =>
      names.some((name) => name === candidate || name.endsWith(candidate) || candidate.endsWith(name)));
  });
  return matches.length === 1 ? matches[0] : null;
}

function buildAbility({
  key,
  payload,
  spell,
  spellObject,
  binUrl,
  livePatch,
  communityPatch,
  passive = false,
}) {
  const maxRank = passive ? 1 : Math.max(1, Number(spell.maxrank) || 1);
  const binContext = collectSpellContext([spellObject], maxRank);
  const context = passive ? binContext : dataDragonContext(spell, binContext);
  const textCandidates = [
    passive ? payload.passive.description : spell.tooltip,
    passive ? "" : spell.description,
  ].filter(Boolean).map((text) => resolvePublicText(text, context));
  const statusWeight = { available: 3, partial: 2, unavailable: 1 };
  const numericTokenCount = (value) =>
    value.match(/\d+(?:\.\d+)?(?:\s*\/\s*\d+(?:\.\d+)?)*/g)?.length ?? 0;
  textCandidates.sort((left, right) =>
    numericTokenCount(right.text) - numericTokenCount(left.text)
    || statusWeight[right.status] - statusWeight[left.status]
    || right.text.length - left.text.length);
  const resolved = textCandidates[0] ?? {
    text: "",
    status: "unavailable",
    issues: ["技能文本缺失"],
    unresolvedTokens: [],
  };
  const coreRows = passive ? [] : [
    spell.cooldownBurn ? `冷却=${spell.cooldownBurn}` : "",
    spell.costBurn ? `消耗=${spell.costBurn}` : "",
    spell.rangeBurn ? `范围=${spell.rangeBurn}` : "",
  ].filter(Boolean);
  const numericParts = [
    resolved.text ? `技能文本：${resolved.text}` : "",
    coreRows.length > 0 ? `基础参数：${coreRows.join("；")}` : "",
  ].filter(Boolean);
  const allIssues = [...new Set(resolved.issues)];
  if (!spellObject) allIssues.push(`CommunityDragon ${key} 技能对象未唯一匹配`);
  const numericStatus = numericParts.length === 0
    ? "unavailable"
    : resolved.status === "available" && allIssues.length === 0
      ? "available"
      : "partial";

  return {
    key,
    name: passive ? payload.passive.name : spell.name,
    description: cleanText(passive ? payload.passive.description : spell.description),
    icon: passive
      ? `https://ddragon.leagueoflegends.com/cdn/${livePatch}/img/passive/${payload.passive.image.full}`
      : `https://ddragon.leagueoflegends.com/cdn/${livePatch}/img/spell/${spell.image.full}`,
    cooldown: passive ? null : (spell.cooldownBurn || null),
    cost: passive ? null : (spell.costBurn || null),
    range: passive ? null : (spell.rangeBurn || null),
    numericDetail: numericParts.join("\n"),
    numericVersion: `Riot Data Dragon ${livePatch} / CommunityDragon ${communityPatch}`,
    sourceUrl: binUrl,
    dataDragonSourceUrl: `https://ddragon.leagueoflegends.com/cdn/${livePatch}/data/zh_CN/champion/${payload.id}.json`,
    numericStatus,
    unresolvedTokens: [...new Set([...resolved.unresolvedTokens, ...allIssues])],
  };
}

function collectBinReferences(value, bin, result = new Set(), visited = new Set()) {
  if (typeof value === "string") {
    if (bin[value] && !visited.has(value)) {
      visited.add(value);
      result.add(bin[value]);
      collectBinReferences(bin[value], bin, result, visited);
    }
    return result;
  }
  if (!value || typeof value !== "object") return result;
  for (const child of Object.values(value)) collectBinReferences(child, bin, result, visited);
  return result;
}

function augmentDataMap(bin) {
  return new Map(Object.values(bin)
    .filter((entry) => entry?.__type === "AugmentData" && entry.AugmentNameId)
    .map((entry) => [entry.AugmentNameId, entry]));
}

function augmentTags(apiName, name, description) {
  const source = `${apiName} ${name} ${description}`.toLowerCase();
  const rules = [
    ["attack", /攻击|攻速|暴击|射程|普攻|斩杀|穿甲|双刃|瞄准|deft|marks|scope|critical|strike|stab/],
    ["spell", /技能|法术|法强|魔法|冷却|急速|飞弹|巫师|冰火|spell|magic|haste|missile|fire|hexcore/],
    ["tank", /生命|护甲|魔抗|护盾|治疗|回复|减伤|韧性|钢|坦克|防御|heart|defen|heal|shield|eternity/],
    ["utility", /移动|召唤|雪球|魄罗|传送|视野|控制|辅助|队友|snowball|poro|summon|portal|safari|dodge/],
  ];
  const tags = rules.filter(([, pattern]) => pattern.test(source)).map(([tag]) => tag);
  return tags.length > 0 ? tags : ["adaptive"];
}

function localizationValue(stringTable, key) {
  if (!key) return "";
  return stringTable.entries?.[String(key).toLowerCase()] ?? "";
}

function arenaDescriptionContext(entry) {
  const dataValues = new Map();
  for (const [name, rawValues] of Object.entries(entry?.dataValues ?? {})) {
    const values = rankValues(Array.isArray(rawValues) ? rawValues : [rawValues], 1);
    if (values.length > 0) dataValues.set(name.toLowerCase(), { name, values });
  }
  return { dataValues, calculations: new Map(), maxRank: 1 };
}

function confirmedAugmentDescription(apiName, context) {
  if (apiName !== "ARAM_Erosion") return null;

  const firstValue = (key) => context.dataValues.get(key.toLowerCase())?.values?.[0];
  const shred = firstValue("Shred");
  const duration = firstValue("ShredDuration");
  const maxStacks = firstValue("MaxStacks");
  if (![shred, duration, maxStacks].every(Number.isFinite)) return null;

  return `对敌人造成伤害时会施加一层持续${formatNumber(duration)}秒、每层`
    + `${formatNumber(shred * 100)}%的护甲和魔法抗性击碎效果，最多叠加`
    + `${formatNumber(maxStacks)}层。`;
}

function normalizeAugment({
  path,
  metadata,
  arenaDescriptions,
  bin,
  modeData,
  stringTable,
  classicExclusive,
  modeSourceUrl,
  arenaSourceUrl,
  communityPatch,
}) {
  const apiName = path.split("/").at(-1);
  const meta = metadata.find((entry) => entry.augmentNameId === apiName);
  if (!meta) throw new Error(`Missing augment metadata: ${apiName}`);
  const data = modeData.get(apiName);
  if (!data) throw new Error(`Missing same-patch AugmentData in ${modeSourceUrl}: ${apiName}`);

  const resourceSet = collectBinReferences(data, bin);
  const canonicalApiName = apiName.replace(/^ARAM_/, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
  for (const [objectPath, entry] of Object.entries(bin)) {
    if (!entry?.mSpell) continue;
    const identity = `${objectPath} ${entry.ObjectName ?? ""} ${entry.mScriptName ?? ""}`
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase();
    if (canonicalApiName && identity.includes(canonicalApiName)) resourceSet.add(entry);
  }
  const resources = [...resourceSet];
  const context = collectSpellContext(resources, 1);
  const arenaEntry = arenaDescriptions.find((entry) =>
    entry.apiName === apiName || entry.apiName === apiName.replace(/^ARAM_/, ""));
  const candidates = [
    {
      kind: "client-tooltip",
      raw: localizationValue(stringTable, data.AugmentTooltipTra),
      context,
      sourceUrl: modeSourceUrl,
    },
    {
      kind: "client-description",
      raw: localizationValue(stringTable, data.DescriptionTra),
      context,
      sourceUrl: modeSourceUrl,
    },
    {
      kind: "cdragon-convenience",
      raw: arenaEntry?.desc || arenaEntry?.tooltip || "",
      context: arenaDescriptionContext(arenaEntry),
      sourceUrl: arenaSourceUrl,
    },
  ].filter((candidate) => candidate.raw && candidate.raw !== "???")
    .map((candidate) => ({ ...candidate, resolved: resolvePublicText(candidate.raw, candidate.context) }));

  const statusWeight = { available: 3, partial: 2, unavailable: 1 };
  candidates.sort((left, right) =>
    statusWeight[right.resolved.status] - statusWeight[left.resolved.status]
    || right.resolved.text.length - left.resolved.text.length);
  const selected = candidates[0] ?? null;
  const confirmedDescription = confirmedAugmentDescription(apiName, context);
  const descriptionStatus = confirmedDescription ? "available" : selected?.resolved.status ?? "unavailable";
  const unresolvedTokens = confirmedDescription ? [] : selected?.resolved.unresolvedTokens ?? [];
  const unavailableReason = descriptionStatus === "unavailable"
    ? (unresolvedTokens.length > 0
      ? `客户端公开文本仍含未解析变量：${unresolvedTokens.join(", ")}`
      : "同版本客户端公开数据未提供可稳定展示的说明文本")
    : null;
  const description = confirmedDescription
    || selected?.resolved.text
    || `数据状态：unavailable（${unavailableReason}）。`;
  const clientName = cleanText(localizationValue(stringTable, data.NameTra));
  const metadataName = cleanText(meta.nameTRA);
  const name = clientName && clientName !== "???" ? clientName
    : metadataName && metadataName !== "???" ? metadataName
      : apiName;

  return {
    id: meta.id,
    apiName,
    name,
    rarity: rarityName(meta.rarity),
    icon: `https://raw.communitydragon.org/${communityPatch}/game/${meta.augmentSmallIconPath
      .replace(/^\/lol-game-data\/assets\//, "")
      .toLowerCase()}`,
    description,
    tags: augmentTags(apiName, name, description),
    classicExclusive: classicExclusive.has(apiName.replace(/^ARAM_/, "")),
    hasPublicDescription: descriptionStatus !== "unavailable",
    descriptionStatus,
    unavailableReason,
    unresolvedTokens,
    descriptionSourceUrl: confirmedDescription ? arenaSourceUrl : selected?.sourceUrl ?? modeSourceUrl,
  };
}

const versions = await fetchJson(versionsUrl, "Data Dragon versions");
const livePatch = versions[0];
if (!/^\d+\.\d+\.\d+$/.test(livePatch)) throw new Error(`Unexpected Data Dragon patch: ${livePatch}`);
const communityPatch = livePatch.split(".").slice(0, 2).join(".");
const communityBase = `https://raw.communitydragon.org/${communityPatch}`;
const regularBinUrl = `${communityBase}/game/maps/modespecificdata/kiwi.bin.json`;
const classicBinUrl = `${communityBase}/game/maps/modespecificdata/kiwi_jade.bin.json`;
const stringTableUrl = `${communityBase}/game/zh_cn/data/menu/en_us/lol.stringtable.json`;
const arenaSourceUrl = `${communityBase}/cdragon/arena/zh_cn.json`;

const classicSource = await readFile(classicDataPath, "utf8");
const roster = readRoster(classicSource);
if (roster.length !== 60) throw new Error(`Expected 60 Classic champions, received ${roster.length}`);

const [
  augmentLists,
  augmentMetadata,
  arenaData,
  regularBin,
  classicBin,
  stringTable,
] = await Promise.all([
  fetchJson(
    `${communityBase}/plugins/rcp-be-lol-game-data/global/zh_cn/v1/augment-lists.json`,
    `CommunityDragon ${communityPatch} augment lists`,
  ),
  fetchJson(
    `${communityBase}/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json`,
    `CommunityDragon ${communityPatch} augment metadata`,
  ),
  fetchJson(arenaSourceUrl, `CommunityDragon ${communityPatch} augment descriptions`),
  fetchJson(regularBinUrl, `CommunityDragon ${communityPatch} KIWI bin`),
  fetchJson(classicBinUrl, `CommunityDragon ${communityPatch} KIWI_JADE bin`),
  fetchJson(stringTableUrl, `CommunityDragon ${communityPatch} zh_CN string table`),
]);

const championSources = await mapWithConcurrency(roster, 8, async ({ key }) => {
  const dataDragonUrl =
    `https://ddragon.leagueoflegends.com/cdn/${livePatch}/data/zh_CN/champion/${key}.json`;
  const characterKey = key.toLowerCase();
  const binUrl = `${communityBase}/game/data/characters/${characterKey}/${characterKey}.bin.json`;
  const [dataDragon, bin] = await Promise.all([
    fetchJson(dataDragonUrl, `Data Dragon ${livePatch} ${key}`),
    fetchJson(binUrl, `CommunityDragon ${communityPatch} ${key} CharacterRecord`),
  ]);
  return { dataDragon, bin, binUrl };
});

const regularList = augmentLists.find((entry) => entry.modeName === "KIWI");
const classicList = augmentLists.find((entry) => entry.modeName === "KIWI_JADE");
if (!regularList || !classicList) throw new Error("KIWI or KIWI_JADE augment list is missing");

const regularNames = new Set(regularList.augmentList.map((path) => path.split("/").at(-1).replace(/^ARAM_/, "")));
const classicNames = new Set(classicList.augmentList.map((path) => path.split("/").at(-1).replace(/^ARAM_/, "")));
const classicExclusive = new Set([...classicNames].filter((name) => !regularNames.has(name)));
const regularModeData = augmentDataMap(regularBin);
const classicModeData = augmentDataMap(classicBin);

const champions = roster.map((rosterEntry, index) => {
  const { dataDragon, bin, binUrl } = championSources[index];
  const payload = dataDragon?.data?.[rosterEntry.key];
  if (!payload) throw new Error(`Missing Data Dragon champion: ${rosterEntry.key}`);
  const record = findCharacterRecord(bin, rosterEntry.key);
  if (!record) throw new Error(`Missing CharacterRecord in ${binUrl}`);
  const resource = primaryResource(record);
  const validation = { fallback: [], confirmedZero: [] };
  const stat = (ddragonValue, characterValue, field, scale = 1) =>
    chooseValidatedStat(ddragonValue, characterValue, field, validation, scale);
  const spellReferences = Array.isArray(record.spells) ? record.spells : [];
  const activeKeys = ["Q", "W", "E", "R"];
  const activeAbilities = payload.spells.map((spell, spellIndex) => buildAbility({
    key: activeKeys[spellIndex],
    payload,
    spell,
    spellObject: findSpellObject(bin, spellReferences[spellIndex], spell),
    binUrl,
    livePatch,
    communityPatch,
  }));
  if (activeAbilities.length !== 4) {
    throw new Error(`Expected four active abilities for ${payload.id}, received ${activeAbilities.length}`);
  }

  return {
    classicId: rosterEntry.classicId,
    key: payload.id,
    name: payload.name,
    title: payload.title,
    portrait: `https://ddragon.leagueoflegends.com/cdn/${livePatch}/img/champion/${payload.image.full}`,
    splash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${payload.id}_0.jpg`,
    tags: payload.tags,
    resourceName: payload.partype,
    statsSourceUrl: binUrl,
    statsFallbackFields: validation.fallback,
    statsConfirmedZeroFields: validation.confirmedZero,
    stats: {
      hp: stat(payload.stats.hp, baseValue(record.baseHPModifiable), "hp"),
      hpPerLevel: stat(payload.stats.hpperlevel, baseValue(record.hpPerLevelModifiable), "hpPerLevel"),
      hpRegen: stat(payload.stats.hpregen, baseValue(record.baseStaticHPRegenModifiable), "hpRegen", 5),
      hpRegenPerLevel: stat(
        payload.stats.hpregenperlevel,
        baseValue(record.hpRegenPerLevelModifiable),
        "hpRegenPerLevel",
        5,
      ),
      resource: stat(payload.stats.mp, baseValue(resource?.["{726ee5cd}"]), "resource"),
      resourcePerLevel: stat(payload.stats.mpperlevel, baseValue(resource?.["{6216bf7b}"]), "resourcePerLevel"),
      resourceRegen: stat(payload.stats.mpregen, baseValue(resource?.["{c4ab3550}"]), "resourceRegen", 5),
      resourceRegenPerLevel: stat(
        payload.stats.mpregenperlevel,
        baseValue(resource?.["{3a509002}"]),
        "resourceRegenPerLevel",
        5,
      ),
      attackDamage: stat(payload.stats.attackdamage, baseValue(record.baseDamageModifiable), "attackDamage"),
      attackDamagePerLevel: stat(
        payload.stats.attackdamageperlevel,
        baseValue(record.damagePerLevelModifiable),
        "attackDamagePerLevel",
      ),
      attackSpeed: stat(payload.stats.attackspeed, baseValue(record.attackSpeedModifiable), "attackSpeed"),
      attackSpeedPerLevel: stat(
        payload.stats.attackspeedperlevel,
        baseValue(record.attackSpeedPerLevelModifiable),
        "attackSpeedPerLevel",
      ),
      armor: stat(payload.stats.armor, baseValue(record.baseArmorModifiable), "armor"),
      armorPerLevel: stat(payload.stats.armorperlevel, baseValue(record.armorPerLevelModifiable), "armorPerLevel"),
      magicResist: stat(payload.stats.spellblock, baseValue(record.baseMR), "magicResist"),
      magicResistPerLevel: stat(
        payload.stats.spellblockperlevel,
        baseValue(record["{01262a25}"]),
        "magicResistPerLevel",
      ),
      moveSpeed: stat(payload.stats.movespeed, baseValue(record.baseMoveSpeedModifiable), "moveSpeed"),
      attackRange: stat(payload.stats.attackrange, baseValue(record.attackRangeModifiable), "attackRange"),
      crit: roundNumber(payload.stats.crit),
      critPerLevel: roundNumber(payload.stats.critperlevel),
    },
    abilities: [
      buildAbility({
        key: "P",
        payload,
        spell: payload.passive,
        spellObject: findSpellObject(bin, record.mCharacterPassiveSpell, payload.passive),
        binUrl,
        livePatch,
        communityPatch,
        passive: true,
      }),
      ...activeAbilities,
    ],
  };
});

const normalizeForMode = (path, bin, modeData, modeSourceUrl) => normalizeAugment({
  path,
  metadata: augmentMetadata,
  arenaDescriptions: arenaData.augments,
  bin,
  modeData,
  stringTable,
  classicExclusive,
  modeSourceUrl,
  arenaSourceUrl,
  communityPatch,
});
const regularAugments = regularList.augmentList.map((path) =>
  normalizeForMode(path, regularBin, regularModeData, regularBinUrl));
const classicAugments = classicList.augmentList.map((path) =>
  normalizeForMode(path, classicBin, classicModeData, classicBinUrl));

const output = `// Generated from Riot Data Dragon ${livePatch} and CommunityDragon ${communityPatch}. Do not edit manually.
export const CLASSIC_MAYHEM_PATCH = ${JSON.stringify(communityPatch)};
export const LIVE_DATA_PATCH = ${JSON.stringify(livePatch)};
export const CLASSIC_MAYHEM_MODE = "KIWI_JADE" as const;
export const REGULAR_MAYHEM_MODE = "KIWI" as const;

export type PublicDataStatus = "available" | "partial" | "unavailable";

export type MayhemAbility = {
  key: "P" | "Q" | "W" | "E" | "R";
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
  numericDetail: string;
  numericVersion: string;
  sourceUrl: string;
  dataDragonSourceUrl: string;
  numericStatus: PublicDataStatus;
  unresolvedTokens: string[];
};

export type LiveClassicChampion = {
  classicId: string;
  key: string;
  name: string;
  title: string;
  portrait: string;
  splash: string;
  tags: string[];
  resourceName: string;
  statsSourceUrl: string;
  statsFallbackFields: string[];
  statsConfirmedZeroFields: string[];
  stats: {
    hp: number;
    hpPerLevel: number;
    hpRegen: number;
    hpRegenPerLevel: number;
    resource: number;
    resourcePerLevel: number;
    resourceRegen: number;
    resourceRegenPerLevel: number;
    attackDamage: number;
    attackDamagePerLevel: number;
    attackSpeed: number;
    attackSpeedPerLevel: number;
    armor: number;
    armorPerLevel: number;
    magicResist: number;
    magicResistPerLevel: number;
    moveSpeed: number;
    attackRange: number;
    crit: number;
    critPerLevel: number;
  };
  abilities: MayhemAbility[];
};

export type MayhemAugment = {
  id: number;
  apiName: string;
  name: string;
  rarity: "silver" | "gold" | "prismatic";
  icon: string;
  description: string;
  tags: string[];
  classicExclusive: boolean;
  hasPublicDescription: boolean;
  descriptionStatus: PublicDataStatus;
  unavailableReason: string | null;
  unresolvedTokens: string[];
  descriptionSourceUrl: string;
};

export const liveClassicChampions: LiveClassicChampion[] = ${JSON.stringify(champions, null, 2)};

export const regularMayhemAugments: MayhemAugment[] = ${JSON.stringify(regularAugments, null, 2)};

export const classicMayhemAugments: MayhemAugment[] = ${JSON.stringify(classicAugments, null, 2)};

export const classicExclusiveAugments = classicMayhemAugments.filter((augment) => augment.classicExclusive);
`;

await writeOrCheck(
  outputPath,
  output,
  `Classic Mayhem ${livePatch}/${communityPatch} generated snapshot`,
);

const abilities = champions.flatMap((champion) => champion.abilities);
const abilityCoverage = Object.fromEntries(["available", "partial", "unavailable"]
  .map((status) => [status, abilities.filter((ability) => ability.numericStatus === status).length]));
const augmentCoverage = Object.fromEntries(["available", "partial", "unavailable"]
  .map((status) => [status, classicAugments.filter((augment) => augment.descriptionStatus === status).length]));
const fallbackFields = champions.flatMap((champion) =>
  champion.statsFallbackFields.map((field) => `${champion.key}.${field}`));

console.log(
  `Classic Mayhem snapshot: ${champions.length} champions, ${classicAugments.length} KIWI_JADE augments, `
  + `${classicExclusive.size} Classic-exclusive augments (${livePatch}).`,
);
console.log(
  `Coverage: stats ${champions.length}/60 complete (${fallbackFields.length} CharacterRecord fallbacks); `
  + `abilities ${abilities.length}/300 `
  + `(available ${abilityCoverage.available}, partial ${abilityCoverage.partial}, unavailable ${abilityCoverage.unavailable}); `
  + `KIWI_JADE augments ${classicAugments.length}/188 `
  + `(available ${augmentCoverage.available}, partial ${augmentCoverage.partial}, unavailable ${augmentCoverage.unavailable}).`,
);
if (fallbackFields.length > 0) console.log(`CharacterRecord fallbacks: ${fallbackFields.join(", ")}`);
