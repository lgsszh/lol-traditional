"use client";

import { useId, useMemo, useState } from "react";
import type { ClassicAbilityKey } from "../classic-skills.generated";
import { localAssetUrl } from "../classic-assets";
import type { ClassicItem } from "../classic-items.generated";

type ChampionPanelStats = {
  hp: number;
  hpPerLevel: number;
  resource: number;
  resourcePerLevel: number;
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
};

export type AbilityPanelSkillSet = {
  championName: string;
  sourceUrl: string;
  sourceLabel?: string;
  numericSourceLabel?: string;
  stats?: ChampionPanelStats;
  abilities: Array<{
    key: ClassicAbilityKey;
    name: string;
    description: string;
    icon: string;
    cooldown: string | null;
    cost: string | null;
    range: string | null;
    numericDetail: string | null;
    numericVersion: string | null;
    numericStatus?: "available" | "partial" | "unavailable";
  }>;
};

type Props = {
  skillSet: AbilityPanelSkillSet;
  activeKey: ClassicAbilityKey;
  onSelect: (key: ClassicAbilityKey) => void;
  equippedItems?: ClassicItem[];
  growthModel?: "classic-linear" | "modern-curve";
};

const valueLabel = (value: string | null, fallback: string) => value || fallback;

function highlightedNumbers(value: string) {
  return value.split(/((?:\d+(?:\.\d+)?)(?:\s*\/\s*\d+(?:\.\d+)?)*%?)/g).map((part, index) =>
    /^\d/.test(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part);
}

type StaticItemBonuses = {
  hp: number;
  resource: number;
  attackDamage: number;
  abilityPower: number;
  armor: number;
  magicResist: number;
  attackSpeedPercent: number;
  moveSpeed: number;
  moveSpeedPercent: number;
};

const emptyBonuses = (): StaticItemBonuses => ({
  hp: 0,
  resource: 0,
  attackDamage: 0,
  abilityPower: 0,
  armor: 0,
  magicResist: 0,
  attackSpeedPercent: 0,
  moveSpeed: 0,
  moveSpeedPercent: 0,
});

function firstStaticValue(description: string, patterns: RegExp[]) {
  for (const pattern of patterns) {
    const match = description.match(pattern);
    if (match) return Number(match[1]);
  }
  return 0;
}

function itemBonuses(items: ClassicItem[]) {
  return items.reduce((total, item) => {
    // OP.GG puts unconditional shop stats before named passives/actives. Only
    // this prefix is used for panel math so stacks and conditional effects are
    // never presented as permanently active stats.
    const staticText = item.description.split(/(?:唯一)?(?:被动|主动|光环)\s*[-—：:]|敬畏\s*[-—：:]/)[0];
    total.hp += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*生命值/]);
    total.resource += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*法力(?:值)?/]);
    total.attackDamage += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*攻击力/]);
    total.abilityPower += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*法术强度/]);
    total.armor += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*护甲/]);
    total.magicResist += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*魔法抗性/]);
    total.attackSpeedPercent += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)%\s*攻击速度/]);
    total.moveSpeedPercent += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)%\s*移动速度/]);
    total.moveSpeed += firstStaticValue(staticText, [/(\d+(?:\.\d+)?)\s*移动速度/]);
    return total;
  }, emptyBonuses());
}

function growthMultiplier(level: number, model: Props["growthModel"]) {
  const gainedLevels = level - 1;
  return model === "modern-curve"
    ? gainedLevels * (0.7025 + 0.0175 * gainedLevels)
    : gainedLevels;
}

function growthValue(base: number, growth: number, level: number, model: Props["growthModel"]) {
  return base + growth * growthMultiplier(level, model);
}

function formattedStat(value: number, digits = 0) {
  return new Intl.NumberFormat("zh-CN", { maximumFractionDigits: digits }).format(value);
}

export default function ChampionAbilityPanel({
  skillSet,
  activeKey,
  onSelect,
  equippedItems = [],
  growthModel = "classic-linear",
}: Props) {
  const [championLevel, setChampionLevel] = useState(18);
  const [includeItems, setIncludeItems] = useState(false);
  const ability = skillSet.abilities.find((entry) => entry.key === activeKey) || skillSet.abilities[0];
  const numericDetail = ability.numericDetail?.trim() ?? "";
  const numericLines = numericDetail
    .split("\n")
    .map((line) => line.trim())
    // 冷却、消耗和距离已经在右上方的三格参数中展示，生成快照即使
    // 暂时滞后也不应再把“基础参数”重复渲染到完整技能数值卡。
    .filter((line) => line && !line.startsWith("基础参数："));
  const showNumericDetail = ability.numericStatus !== "unavailable" && numericLines.length > 0;
  const tabSetId = useId().replace(/:/g, "");
  const bonuses = useMemo(() => itemBonuses(includeItems ? equippedItems : []), [equippedItems, includeItems]);
  const panelStats = skillSet.stats ? {
    hp: growthValue(skillSet.stats.hp, skillSet.stats.hpPerLevel, championLevel, growthModel) + bonuses.hp,
    resource: growthValue(skillSet.stats.resource, skillSet.stats.resourcePerLevel, championLevel, growthModel) + bonuses.resource,
    attackDamage: growthValue(
      skillSet.stats.attackDamage,
      skillSet.stats.attackDamagePerLevel,
      championLevel,
      growthModel,
    ) + bonuses.attackDamage,
    abilityPower: bonuses.abilityPower,
    armor: growthValue(skillSet.stats.armor, skillSet.stats.armorPerLevel, championLevel, growthModel) + bonuses.armor,
    magicResist: growthValue(
      skillSet.stats.magicResist,
      skillSet.stats.magicResistPerLevel,
      championLevel,
      growthModel,
    ) + bonuses.magicResist,
    attackSpeed: skillSet.stats.attackSpeed * (1
      + (skillSet.stats.attackSpeedPerLevel * growthMultiplier(championLevel, growthModel)) / 100
      + bonuses.attackSpeedPercent / 100),
    moveSpeed: (skillSet.stats.moveSpeed + bonuses.moveSpeed) * (1 + bonuses.moveSpeedPercent / 100),
    attackRange: skillSet.stats.attackRange,
  } : null;

  return (
    <div className="ability-explorer">
      <div className="ability-tabs" role="tablist" aria-label={`${skillSet.championName}技能详情`}>
        {skillSet.abilities.map((entry, index) => (
          <button
            key={entry.key}
            id={`${tabSetId}-tab-${entry.key}`}
            className={entry.key === ability.key ? "active" : ""}
            onClick={() => onSelect(entry.key)}
            onKeyDown={(event) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const lastIndex = skillSet.abilities.length - 1;
              const nextIndex = event.key === "Home"
                ? 0
                : event.key === "End"
                  ? lastIndex
                  : event.key === "ArrowRight"
                    ? (index + 1) % skillSet.abilities.length
                    : (index - 1 + skillSet.abilities.length) % skillSet.abilities.length;
              onSelect(skillSet.abilities[nextIndex].key);
              event.currentTarget.parentElement
                ?.querySelectorAll<HTMLButtonElement>("[role='tab']")
                .item(nextIndex)
                .focus();
            }}
            role="tab"
            aria-selected={entry.key === ability.key}
            aria-controls={`${tabSetId}-panel`}
            tabIndex={entry.key === ability.key ? 0 : -1}
          >
            <img key={entry.icon} src={localAssetUrl(entry.icon)} alt="" decoding="async" />
            <span><b>{entry.key}</b><strong>{entry.name}</strong></span>
          </button>
        ))}
      </div>

      <article
        id={`${tabSetId}-panel`}
        className="ability-detail"
        role="tabpanel"
        aria-labelledby={`${tabSetId}-tab-${ability.key}`}
      >
        <div className="ability-heading">
          <img key={ability.icon} src={localAssetUrl(ability.icon)} alt="" decoding="async" />
          <div>
            <span>{ability.key === "P" ? "被动技能" : `${ability.key} · 主动技能`}</span>
            <h4>{ability.name}</h4>
          </div>
          <a href={skillSet.sourceUrl} target="_blank" rel="noreferrer">
            {skillSet.sourceLabel || "查看 OP.GG 源页"} →
          </a>
        </div>
        <p>{highlightedNumbers(ability.description)}</p>
        <dl className="ability-stats">
          <div><dt>冷却时间</dt><dd>{valueLabel(ability.cooldown, "无")} {ability.cooldown ? "秒" : ""}</dd></div>
          <div><dt>技能消耗</dt><dd>{valueLabel(ability.cost, "无消耗")}</dd></div>
          <div><dt>施法距离</dt><dd>{valueLabel(ability.range, "自身／被动")}</dd></div>
        </dl>
        {showNumericDetail && (
          <section className="ability-numeric">
            <header>
              <div>
                <span>{ability.numericStatus === "partial" ? "技能公开数值（部分）" : "完整技能数值"}</span>
                <b>伤害 · 护盾 · 治疗 · 属性加成</b>
              </div>
              <small>{skillSet.numericSourceLabel || `公开公式 ${ability.numericVersion}`}</small>
            </header>
            {ability.numericStatus === "partial" && (
              <p className="ability-disclosure">同版本客户端仍有部分公式无法静态展开；以下只展示公开字段，不推算缺失数值。</p>
            )}
            {numericLines.map((line, index) => (
              <p key={`${line}-${index}`}>{highlightedNumbers(line)}</p>
            ))}
          </section>
        )}
        {(ability.cooldown?.includes("/") || ability.cost?.includes("/")) && (
          <div className="ability-rank-note">
            <b>等级数值说明</b>
            <span>斜杠分隔的数值按技能等级由低到高排列。</span>
          </div>
        )}
        <div className="ability-source-note">
          <span>名称、说明、冷却、消耗、距离与图标：{skillSet.sourceLabel || "OP.GG Classic"}</span>
          {ability.numericVersion && (
            <span>
              {ability.numericStatus === "partial"
                ? "部分公开数值"
                : ability.numericStatus === "unavailable"
                  ? "公开数值不可用"
                  : "完整公开数值"}
              ：{skillSet.numericSourceLabel || `Riot Data Dragon ${ability.numericVersion}`}
            </span>
          )}
        </div>
        {panelStats && (
          <section className="ability-calculator" aria-label="等级与装备面板换算">
            <header>
              <div><b>等级与装备面板</b><small>用于代入上方技能公式</small></div>
              <label>
                英雄等级
                <input
                  type="range"
                  min="1"
                  max="18"
                  value={championLevel}
                  onChange={(event) => setChampionLevel(Number(event.target.value))}
                />
                <strong>{championLevel}</strong>
              </label>
              <button
                type="button"
                className={includeItems ? "active" : ""}
                disabled={equippedItems.length === 0}
                onClick={() => setIncludeItems((value) => !value)}
              >
                {includeItems ? `计入 ${equippedItems.length} 件装备` : "无装备面板"}
              </button>
            </header>
            <div>
              <span><small>生命值</small><b>{formattedStat(panelStats.hp)}</b></span>
              <span><small>攻击力</small><b>{formattedStat(panelStats.attackDamage, 1)}</b></span>
              <span><small>法术强度</small><b>{formattedStat(panelStats.abilityPower)}</b></span>
              <span><small>护甲</small><b>{formattedStat(panelStats.armor, 1)}</b></span>
              <span><small>魔抗</small><b>{formattedStat(panelStats.magicResist, 1)}</b></span>
              <span><small>攻速</small><b>{formattedStat(panelStats.attackSpeed, 3)}</b></span>
              <span><small>移速</small><b>{formattedStat(panelStats.moveSpeed)}</b></span>
              <span><small>攻击距离</small><b>{formattedStat(panelStats.attackRange)}</b></span>
            </div>
            <p>
              装备档仅合计商店说明中的固定面板属性；层数、光环、命中触发和敌方抗性等条件效果不冒充常驻数值。
              当前法力/能量上限：{formattedStat(panelStats.resource)}。
            </p>
          </section>
        )}
      </article>
    </div>
  );
}
