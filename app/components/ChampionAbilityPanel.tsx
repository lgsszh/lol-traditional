"use client";

import type {
  ClassicAbilityKey,
  ClassicChampionSkillSet,
} from "../classic-skills.generated";
import { localAssetUrl } from "../classic-assets";

type Props = {
  skillSet: ClassicChampionSkillSet;
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

  return (
    <div className="ability-explorer">
      <div className="ability-tabs" role="tablist" aria-label={`${skillSet.championName}技能详情`}>
        {skillSet.abilities.map((entry) => (
          <button
            key={entry.key}
            className={entry.key === ability.key ? "active" : ""}
            onClick={() => onSelect(entry.key)}
            role="tab"
            aria-selected={entry.key === ability.key}
          >
            <img key={entry.icon} src={localAssetUrl(entry.icon)} alt="" decoding="sync" />
            <span><b>{entry.key}</b><strong>{entry.name}</strong></span>
          </button>
        ))}
      </div>

      <article className="ability-detail" role="tabpanel">
        <div className="ability-heading">
          <img key={ability.icon} src={localAssetUrl(ability.icon)} alt="" decoding="sync" />
          <div>
            <span>{ability.key === "P" ? "被动技能" : `${ability.key} · 主动技能`}</span>
            <h4>{ability.name}</h4>
          </div>
          <a href={skillSet.sourceUrl} target="_blank" rel="noreferrer">查看 OP.GG 源页 ↗</a>
        </div>
        <p>{ability.description}</p>
        <dl className="ability-stats">
          <div><dt>冷却时间</dt><dd>{valueLabel(ability.cooldown, "无")} {ability.cooldown ? "秒" : ""}</dd></div>
          <div><dt>技能消耗</dt><dd>{valueLabel(ability.cost, "无消耗")}</dd></div>
          <div><dt>施法距离</dt><dd>{valueLabel(ability.range, "自身／被动")}</dd></div>
        </dl>
        {ability.numericDetail && (
          <section className="ability-numeric">
            <header>
              <div><span>完整技能数值</span><b>伤害 · 护盾 · 治疗 · 属性加成</b></div>
              <small>历史公式 {ability.numericVersion}</small>
            </header>
            {ability.numericDetail.split("\n").filter(Boolean).map((line, index) => (
              <p key={`${line}-${index}`}>{highlightedNumbers(line)}</p>
            ))}
          </section>
        )}
        {(ability.cooldown?.includes("/") || ability.cost?.includes("/")) && (
          <div className="ability-rank-note">
            <b>等级数值说明</b>
            <span>斜杠分隔的数值按技能等级由低到高排列；说明、冷却、消耗与距离保持 OP.GG Classic 16.15 原始顺序。</span>
          </div>
        )}
        <div className="ability-source-note">
          <span>说明、冷却、消耗、距离与图标：OP.GG Classic 16.15</span>
          {ability.numericVersion && <span>完整技能公式：Riot Data Dragon {ability.numericVersion}</span>}
        </div>
      </article>
    </div>
  );
}
