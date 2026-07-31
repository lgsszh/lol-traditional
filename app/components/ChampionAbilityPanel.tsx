"use client";

import { useId } from "react";
import type { ClassicAbilityKey } from "../classic-skills.generated";
import { localAssetUrl } from "../classic-assets";

export type AbilityPanelSkillSet = {
  championName: string;
  sourceUrl: string;
  sourceLabel?: string;
  numericSourceLabel?: string;
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
};

const valueLabel = (value: string | null, fallback: string) => value || fallback;

function highlightedNumbers(value: string) {
  return value.split(/((?:\d+(?:\.\d+)?)(?:\s*\/\s*\d+(?:\.\d+)?)*%?)/g).map((part, index) =>
    /^\d/.test(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part);
}

export default function ChampionAbilityPanel({ skillSet, activeKey, onSelect }: Props) {
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
      </article>
    </div>
  );
}
