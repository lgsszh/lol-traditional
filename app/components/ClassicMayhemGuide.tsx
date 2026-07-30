"use client";

import { useMemo, useState } from "react";
import type { ClassicChampion } from "../classic-data";
import { localAssetUrl } from "../classic-assets";
import { classicItems } from "../classic-items.generated";
import ChampionAbilityPanel, { type AbilityPanelSkillSet } from "./ChampionAbilityPanel";
import {
  CLASSIC_MAYHEM_MODE,
  CLASSIC_MAYHEM_PATCH,
  LIVE_DATA_PATCH,
  classicExclusiveAugments,
  classicMayhemAugments,
  liveClassicChampions,
  regularMayhemAugments,
  type MayhemAugment,
} from "../classic-mayhem.generated";
import {
  MAYHEM_HAS_JUNGLE_ROLE,
  MAYHEM_STARTING_GOLD,
  OP_GG_MAYHEM_PATCH,
  OP_GG_MAYHEM_SNAPSHOT_HASH,
  opggMayhemChampionBuilds,
  type OpggItemRecommendation,
  type OpggMetric,
} from "../classic-mayhem-opgg.generated";

type AugmentFilter = "recommended" | "exclusive" | "shared" | "all";
type RarityFilter = "all" | MayhemAugment["rarity"];
type AbilityKey = "P" | "Q" | "W" | "E" | "R";

const rarityLabels = {
  silver: "白银阶",
  gold: "黄金阶",
  prismatic: "棱彩阶",
} as const;

const numberFormatter = new Intl.NumberFormat("zh-CN");
const percentFormatter = new Intl.NumberFormat("zh-CN", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function formatPercent(value: number) {
  return `${percentFormatter.format(value)}%`;
}

function MetricLine({ metric }: { metric: OpggMetric }) {
  return (
    <span className="opgg-metric-line">
      <b>选用 {formatPercent(metric.pickRate)}</b>
      <em>{numberFormatter.format(metric.games)} 场</em>
      <strong>胜率 {formatPercent(metric.winRate)}</strong>
    </span>
  );
}

function itemById(id: string) {
  return classicItems.find((item) => item.id === id);
}

function groupedItems(itemIds: string[]) {
  const counts = new Map<string, number>();
  for (const itemId of itemIds) counts.set(itemId, (counts.get(itemId) || 0) + 1);
  return [...counts].map(([itemId, quantity]) => ({
    item: itemById(itemId),
    quantity,
  })).filter((entry) => entry.item);
}

function ItemRecommendationRow({
  recommendation,
  showPrice = false,
}: {
  recommendation: OpggItemRecommendation;
  showPrice?: boolean;
}) {
  return (
    <div className="opgg-item-row">
      <div className="opgg-item-icons">
        {groupedItems(recommendation.itemIds).map(({ item, quantity }) => (
          <span key={item!.id}>
            <img src={localAssetUrl(item!.icon)} alt={item!.name} loading="lazy" />
            {quantity > 1 && <b>×{quantity}</b>}
            <small>{item!.name}</small>
          </span>
        ))}
      </div>
      {showPrice && <span className="opgg-price">{recommendation.totalPrice} / {MAYHEM_STARTING_GOLD} 金</span>}
      <MetricLine metric={recommendation.metric} />
    </div>
  );
}

function statGrowth(base: number, growth?: number) {
  return growth && growth > 0 ? `${base}（+${growth}）` : String(base);
}

export default function ClassicMayhemGuide({ champion }: { champion: ClassicChampion }) {
  const liveChampion = liveClassicChampions.find((entry) => entry.classicId === champion.classicId);
  const build = opggMayhemChampionBuilds.find((entry) => entry.classicId === champion.classicId);
  const [activeAbility, setActiveAbility] = useState<AbilityKey>("Q");
  const [augmentFilter, setAugmentFilter] = useState<AugmentFilter>("recommended");
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>("all");
  const [augmentSearch, setAugmentSearch] = useState("");

  const recommendedIds = useMemo(
    () => new Set(build?.augments.map((entry) => entry.augmentId) || []),
    [build],
  );
  const visibleAugments = useMemo(() => {
    const query = augmentSearch.trim().toLocaleLowerCase("zh-CN");
    return classicMayhemAugments.filter((augment) => {
      if (augmentFilter === "recommended" && !recommendedIds.has(augment.id)) return false;
      if (augmentFilter === "exclusive" && !augment.classicExclusive) return false;
      if (augmentFilter === "shared" && augment.classicExclusive) return false;
      if (rarityFilter !== "all" && augment.rarity !== rarityFilter) return false;
      if (
        query
        && !`${augment.name} ${augment.apiName} ${augment.description}`.toLocaleLowerCase("zh-CN").includes(query)
      ) return false;
      return true;
    });
  }, [augmentFilter, augmentSearch, rarityFilter, recommendedIds]);

  if (!liveChampion || !build) {
    return (
      <section className="mayhem-page">
        <p>当前英雄缺少已审核的 OP.GG 怀旧海斗快照；本页面拒绝用峡谷方案或猜测数据替代。</p>
      </section>
    );
  }

  const liveAbilities = liveChampion.abilities.map((ability) => {
    const enhanced = ability as typeof ability & {
      numericDetail?: string | null;
      numericVersion?: string | null;
    };
    return {
      ...ability,
      numericDetail: enhanced.numericDetail || null,
      numericVersion: enhanced.numericVersion || LIVE_DATA_PATCH,
    };
  });
  const abilitySkillSet: AbilityPanelSkillSet = {
    championName: liveChampion.name,
    sourceUrl: `https://ddragon.leagueoflegends.com/cdn/${LIVE_DATA_PATCH}/data/zh_CN/champion/${liveChampion.key}.json`,
    sourceLabel: `Riot 当前技能 ${LIVE_DATA_PATCH}`,
    numericSourceLabel: `Riot ${LIVE_DATA_PATCH} / CommunityDragon ${CLASSIC_MAYHEM_PATCH}`,
    abilities: liveAbilities,
  };
  const stats = liveChampion.stats as typeof liveChampion.stats & {
    armorPerLevel?: number;
    magicResistPerLevel?: number;
    attackSpeedPerLevel?: number;
  };
  const skillBuild = build.skillBuilds[0];

  return (
    <section className="mayhem-page" aria-label="海克斯大乱斗经典模式版攻略">
      <section className="mayhem-intro">
        <div>
          <span className="eyebrow">ARAM: MAYHEM CLASSIC-ISH · {CLASSIC_MAYHEM_MODE}</span>
          <h2>海克斯大乱斗 · 经典模式版</h2>
          <p>
            现代英雄技能搭配经典地图与经典装备。排名、强化、召唤师技能、技能加点和装备组合均按
            OP.GG {OP_GG_MAYHEM_PATCH} 页面原始顺序展示，不复用 5v5 峡谷方案。
          </p>
        </div>
        <div className="mayhem-source-actions">
          <a href="https://op.gg/zh-cn/lol/modes/aram-mayhem" target="_blank" rel="noreferrer">对照新版海斗</a>
          <a className="primary" href={build.sourceUrl} target="_blank" rel="noreferrer">查看 OP.GG 此英雄</a>
        </div>
      </section>

      <div className="mayhem-audit-grid">
        <article><b>#{build.rank}</b><span>OP.GG 英雄排名</span><small>第 {build.tier} 段位</small></article>
        <article>
          <b>{formatPercent(build.championMetrics.winRate)}</b>
          <span>英雄胜率</span>
          <small>选用率 {formatPercent(build.championMetrics.pickRate)}</small>
        </article>
        <article><b>{build.startingGold}</b><span>模式初始金币</span><small>出门组合逐项校验不超预算</small></article>
        <article>
          <b>{MAYHEM_HAS_JUNGLE_ROLE ? "有" : "无"}</b>
          <span>打野位置</span>
          <small>同步门禁禁止惩戒与峡谷分路方案</small>
        </article>
      </div>

      <div className="mayhem-guide-grid">
        <article className="mayhem-champion-card">
          <div className="mayhem-champion-heading">
            <img src={localAssetUrl(liveChampion.portrait)} alt="" />
            <div>
              <span>现代技能 · 经典战场</span>
              <h3>{liveChampion.name}<small>{liveChampion.title}</small></h3>
              <p>OP.GG 主加 {skillBuild.priority.join(" → ")} · 第 {build.tier} 段位 · 排名 #{build.rank}</p>
            </div>
          </div>
          <div className="mayhem-stats" aria-label={`${liveChampion.name}当前基础与成长属性`}>
            <span><b>{statGrowth(stats.hp, stats.hpPerLevel)}</b>生命（每级）</span>
            <span><b>{statGrowth(stats.attackDamage, stats.attackDamagePerLevel)}</b>攻击（每级）</span>
            <span><b>{statGrowth(stats.armor, stats.armorPerLevel)}</b>护甲（每级）</span>
            <span><b>{statGrowth(stats.magicResist, stats.magicResistPerLevel)}</b>魔抗（每级）</span>
            <span><b>{statGrowth(stats.attackSpeed, stats.attackSpeedPerLevel)}</b>攻速（每级%）</span>
            <span><b>{stats.attackRange}</b>攻击距离</span>
            <span><b>{stats.moveSpeed}</b>移动速度</span>
            <span><b>{LIVE_DATA_PATCH}</b>Riot 数值版本</span>
          </div>
          <div className="mayhem-ability-shell">
            <ChampionAbilityPanel
              skillSet={abilitySkillSet}
              activeKey={activeAbility}
              onSelect={setActiveAbility}
            />
          </div>
        </article>

        <article className="mayhem-build-card">
          <header>
            <span>OP.GG BUILD · {OP_GG_MAYHEM_PATCH}</span>
            <h3>召唤师技能与技能加点</h3>
            <p>海斗没有打野分路；本站不提供惩戒，也不套用经典峡谷的默认加点。</p>
          </header>
          <div className="mayhem-summoner-block">
            <strong>召唤师技能推荐</strong>
            {build.summonerSets.map((set) => (
              <div className="opgg-spell-row" key={set.spells.map((spell) => spell.key).join("-")}>
                <span>
                  {set.spells.map((spell) => (
                    <span key={spell.key}>
                      <img src={localAssetUrl(spell.icon)} alt={spell.name} />
                      <small>{spell.name}</small>
                    </span>
                  ))}
                </span>
                <MetricLine metric={set.metric} />
              </div>
            ))}
          </div>
          <div className="mayhem-skill-build">
            <strong>技能加点：{skillBuild.priority.join(" → ")}</strong>
            <div className="skill-level-sequence">
              {skillBuild.levelSequence.map((key, index) => (
                <span key={`${key}-${index}`} className={key === "R" ? "ultimate" : ""}>
                  <small>{index + 1}</small><b>{key}</b>
                </span>
              ))}
            </div>
            <MetricLine metric={skillBuild.metric} />
            <p>
              逐格复现 OP.GG 当前公开的 1–{skillBuild.levelSequence.length} 级技能表；
              未公开的等级不由本站补写。
            </p>
          </div>
          <div className="mayhem-rune-status">
            <strong>符文信息</strong>
            <span>数据未找到</span>
            <p>{build.runes.reason}</p>
          </div>
        </article>
      </div>

      <section className="mayhem-augment-section">
        <div className="mayhem-section-heading">
          <div>
            <span>OP.GG 强化符文推荐</span>
            <h3>{build.name} · 原始排序与统计</h3>
            <p>不再按职业标签推测；每一项都保留 OP.GG 的选用率、场次和胜率。</p>
          </div>
          <mark>快照 {OP_GG_MAYHEM_SNAPSHOT_HASH.slice(0, 12)}</mark>
        </div>
        <div className="mayhem-recommendations opgg-augment-recommendations">
          {build.augments.map((recommendation, index) => {
            const augment = classicMayhemAugments.find((entry) => entry.id === recommendation.augmentId);
            if (!augment) return null;
            return (
              <article key={augment.id} className={`augment-card rarity-${augment.rarity}`}>
                <span className="augment-rank">{index + 1}</span>
                <img src={localAssetUrl(augment.icon)} alt="" loading="lazy" />
                <div>
                  <h4>
                    {augment.name}
                    <small className="augment-rarity-label">{rarityLabels[augment.rarity]}</small>
                    {augment.classicExclusive && <em>经典专属</em>}
                    {augment.descriptionStatus !== "available" && <em>公开数值不可用</em>}
                  </h4>
                  <p>{augment.description}</p>
                  <MetricLine metric={recommendation.metric} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mayhem-items-section">
        <div className="mayhem-section-heading">
          <div>
            <span>OP.GG 装备路线</span>
            <h3>{build.name} · 出门装、鞋子与核心装备</h3>
            <p>出门装按 {MAYHEM_STARTING_GOLD} 金模式预算校验；数量角标与装备顺序均来自 OP.GG。</p>
          </div>
          <mark>禁止混入新版商店装备</mark>
        </div>
        <div className="opgg-item-groups">
          <article>
            <h4>出门装 <small>{MAYHEM_STARTING_GOLD} 金上限</small></h4>
            {build.items.starting.map((recommendation, index) => (
              <ItemRecommendationRow key={`start-${index}`} recommendation={recommendation} showPrice />
            ))}
          </article>
          <article>
            <h4>鞋子</h4>
            {build.items.boots.map((recommendation, index) => (
              <ItemRecommendationRow key={`boots-${index}`} recommendation={recommendation} />
            ))}
          </article>
          <article>
            <h4>核心装备顺序</h4>
            {build.items.core.map((recommendation, index) => (
              <ItemRecommendationRow key={`core-${index}`} recommendation={recommendation} />
            ))}
          </article>
        </div>
      </section>

      <section className="mayhem-catalog">
        <div className="mayhem-section-heading">
          <div>
            <span>完整图鉴</span>
            <h3>怀旧海斗强化符文池</h3>
            <p>
              新版海斗 {regularMayhemAugments.length} 个；怀旧海斗 {classicMayhemAugments.length} 个；
              两者交叉后有 {classicExclusiveAugments.length} 个经典专属。
            </p>
          </div>
        </div>
        <div className="mayhem-filters">
          <div>
            {([
              ["recommended", `本英雄 OP.GG ${build.augments.length}`],
              ["exclusive", `经典专属 ${classicExclusiveAugments.length}`],
              ["shared", "两模式共享"],
              ["all", `全部 ${classicMayhemAugments.length}`],
            ] as const).map(([id, label]) => (
              <button
                key={id}
                className={augmentFilter === id ? "active" : ""}
                onClick={() => setAugmentFilter(id)}
                aria-pressed={augmentFilter === id}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            {(["all", "silver", "gold", "prismatic"] as const).map((id) => (
              <button
                key={id}
                className={rarityFilter === id ? "active" : ""}
                onClick={() => setRarityFilter(id)}
                aria-pressed={rarityFilter === id}
              >
                {id === "all" ? "全部品质" : rarityLabels[id]}
              </button>
            ))}
          </div>
          <input
            value={augmentSearch}
            onChange={(event) => setAugmentSearch(event.target.value)}
            aria-label="搜索怀旧海斗强化符文"
            placeholder="搜索强化名称、效果或内部 ID"
          />
        </div>
        <div className="mayhem-augment-list">
          {visibleAugments.map((augment) => {
            const metric = build.augments.find((entry) => entry.augmentId === augment.id)?.metric;
            return (
              <article key={augment.id} className={`augment-card rarity-${augment.rarity}`}>
                <img src={localAssetUrl(augment.icon)} alt="" loading="lazy" />
                <div>
                  <h4>
                    {augment.name}
                    <small className="augment-rarity-label">{rarityLabels[augment.rarity]}</small>
                    {augment.classicExclusive && <em>经典专属</em>}
                    {augment.descriptionStatus !== "available" && <em>公开数值不可用</em>}
                  </h4>
                  <p>{augment.description}</p>
                  {metric
                    ? <MetricLine metric={metric} />
                    : <small>本英雄未进入 OP.GG 前十推荐</small>}
                </div>
              </article>
            );
          })}
          {visibleAugments.length === 0 && <p className="mayhem-empty">没有符合当前筛选的强化符文。</p>}
        </div>
      </section>

      <div className="mayhem-methodology">
        <strong>字段来源</strong>
        <p>
          英雄排名、胜率、选用率、场次、召唤师技能、加点与装备组合来自 OP.GG {OP_GG_MAYHEM_PATCH}；
          现代技能与基础属性来自 Riot {LIVE_DATA_PATCH} / CommunityDragon {CLASSIC_MAYHEM_PATCH}；经典装备目录来自 OP.GG
          Classic；强化池与公开效果来自 CommunityDragon {CLASSIC_MAYHEM_PATCH}。OP.GG 未提供符文时明确显示
          “数据未找到”，不补写猜测数据。每日同步要求 60/60 英雄完整通过后才允许发布。
        </p>
      </div>
    </section>
  );
}
