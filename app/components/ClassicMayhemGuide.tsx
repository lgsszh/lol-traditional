"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ClassicChampion } from "../classic-data";
import { localAssetUrl } from "../classic-assets";
import { classicItems } from "../classic-items.generated";
import type {
  MayhemAugment,
  MayhemCatalogRuntime,
  MayhemChampionRuntime,
  MayhemRarity,
  OpggItemRecommendation,
  OpggMetric,
} from "../classic-mayhem-runtime";
import ChampionAbilityPanel, { type AbilityPanelSkillSet } from "./ChampionAbilityPanel";

type MayhemSection = "overview" | "augments" | "skills" | "items" | "catalog";
type CatalogFilter = "recommended" | "exclusive" | "shared" | "all";
type AbilityKey = "P" | "Q" | "W" | "E" | "R";

const rarityLabels: Record<MayhemRarity, string> = {
  silver: "白银阶",
  gold: "黄金阶",
  prismatic: "棱彩阶",
};

const sectionLabels: Array<{
  id: MayhemSection;
  label: string;
  description: string;
}> = [
  { id: "overview", label: "英雄与技能", description: "现代技能数值" },
  { id: "augments", label: "强化符文", description: "OP.GG 三品质" },
  { id: "skills", label: "技能加点", description: "5 套完整序列" },
  { id: "items", label: "装备路线", description: "1400 金出门" },
  { id: "catalog", label: "完整强化池", description: "模式全量图鉴" },
];

const numberFormatter = new Intl.NumberFormat("zh-CN");
const percentFormatter = new Intl.NumberFormat("zh-CN", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const championPayloadCache = new Map<string, Promise<MayhemChampionRuntime>>();
let catalogPayloadCache: Promise<MayhemCatalogRuntime> | null = null;

function runtimeUrl(path: string) {
  return localAssetUrl(`/classic-data/mayhem/${path}`);
}

async function fetchRuntime<T>(path: string): Promise<T> {
  const response = await fetch(runtimeUrl(path), { cache: "force-cache" });
  if (!response.ok) throw new Error(`数据快照请求失败（HTTP ${response.status}）`);
  return response.json() as Promise<T>;
}

function championPayload(classicId: string) {
  let request = championPayloadCache.get(classicId);
  if (!request) {
    request = fetchRuntime<MayhemChampionRuntime>(`${classicId}.json`);
    championPayloadCache.set(classicId, request);
  }
  return request;
}

function catalogPayload() {
  if (!catalogPayloadCache) {
    catalogPayloadCache = fetchRuntime<MayhemCatalogRuntime>("catalog.json");
  }
  return catalogPayloadCache;
}

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
  startingGold,
}: {
  recommendation: OpggItemRecommendation;
  showPrice?: boolean;
  startingGold: number;
}) {
  return (
    <div className="opgg-item-row">
      <div className="opgg-item-icons">
        {groupedItems(recommendation.itemIds).map(({ item, quantity }) => (
          <span key={item!.id}>
            <img src={localAssetUrl(item!.icon)} alt={item!.name} loading="lazy" decoding="async" />
            {quantity > 1 && <b>×{quantity}</b>}
            <small>{item!.name}</small>
          </span>
        ))}
      </div>
      {showPrice && (
        <span className="opgg-price">
          {recommendation.totalPrice} / {startingGold} 金
        </span>
      )}
      <MetricLine metric={recommendation.metric} />
    </div>
  );
}

function statGrowth(base: number, growth?: number) {
  return growth && growth > 0 ? `${base}（+${growth}）` : String(base);
}

function hasUsefulDescription(augment: MayhemAugment) {
  return augment.descriptionStatus !== "unavailable"
    && Boolean(augment.description.trim())
    && !/客户端未提供|公开数值不可用|数据状态：?unavailable/i.test(augment.description);
}

function MayhemSkeleton() {
  return (
    <section className="mayhem-page mayhem-skeleton" aria-label="正在载入怀旧海斗数据" aria-busy="true">
      <div className="skeleton-block skeleton-intro" />
      <div className="skeleton-audits">
        {Array.from({ length: 4 }, (_, index) => <span key={index} />)}
      </div>
      <div className="skeleton-workbench">
        <aside>{Array.from({ length: 5 }, (_, index) => <span key={index} />)}</aside>
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
      <p role="status">正在载入当前英雄的 OP.GG 数据快照…</p>
    </section>
  );
}

export default function ClassicMayhemGuide({ champion }: { champion: ClassicChampion }) {
  const [runtimeState, setRuntimeState] = useState<{
    classicId: ClassicChampion["classicId"];
    payload: MayhemChampionRuntime;
  } | null>(null);
  const [catalog, setCatalog] = useState<MayhemCatalogRuntime | null>(null);
  const [loadFailure, setLoadFailure] = useState<{
    classicId: ClassicChampion["classicId"];
    message: string;
  } | null>(null);
  const [retryKey, setRetryKey] = useState(0);
  const [activeSection, setActiveSection] = useState<MayhemSection>("overview");
  const [activeAbility, setActiveAbility] = useState<AbilityKey>("Q");
  const [activeRarity, setActiveRarity] = useState<MayhemRarity>("silver");
  const [catalogFilter, setCatalogFilter] = useState<CatalogFilter>("all");
  const [catalogRarity, setCatalogRarity] = useState<"all" | MayhemRarity>("all");
  const [catalogSearch, setCatalogSearch] = useState("");
  const pageRef = useRef<HTMLElement>(null);
  const runtime = runtimeState?.classicId === champion.classicId ? runtimeState.payload : null;
  const loadError = loadFailure?.classicId === champion.classicId ? loadFailure.message : null;

  const selectSection = (section: MayhemSection) => {
    setActiveSection(section);
    window.requestAnimationFrame(() => {
      pageRef.current?.scrollIntoView({ block: "start", behavior: "auto" });
    });
  };

  useEffect(() => {
    let current = true;
    championPayload(champion.classicId)
      .then((payload) => {
        if (current) setRuntimeState({ classicId: champion.classicId, payload });
      })
      .catch((error: unknown) => {
        if (current) {
          championPayloadCache.delete(champion.classicId);
          setLoadFailure({
            classicId: champion.classicId,
            message: error instanceof Error ? error.message : "数据快照载入失败",
          });
        }
      });
    return () => {
      current = false;
    };
  }, [champion.classicId, retryKey]);

  useEffect(() => {
    if (activeSection !== "catalog" || catalog) return;
    let current = true;
    catalogPayload()
      .then((payload) => {
        if (current) setCatalog(payload);
      })
      .catch(() => {
        catalogPayloadCache = null;
      });
    return () => {
      current = false;
    };
  }, [activeSection, catalog]);

  const visibleCatalogAugments = useMemo(() => {
    if (!runtime || !catalog) return [];
    const query = catalogSearch.trim().toLocaleLowerCase("zh-CN");
    const source = catalogFilter === "recommended"
      ? runtime.augmentRecommendations.map((entry) => entry.augment)
      : catalog.augments;
    return source.filter((augment) => {
      if (catalogFilter === "exclusive" && !augment.classicExclusive) return false;
      if (catalogFilter === "shared" && augment.classicExclusive) return false;
      if (catalogRarity !== "all" && augment.rarity !== catalogRarity) return false;
      return !query
        || `${augment.name} ${augment.apiName} ${augment.description}`
          .toLocaleLowerCase("zh-CN")
          .includes(query);
    });
  }, [catalog, catalogFilter, catalogRarity, catalogSearch, runtime]);

  if (loadError) {
    return (
      <section className="mayhem-page mayhem-load-error" role="alert">
        <strong>当前英雄的数据快照暂时无法载入</strong>
        <p>{loadError}</p>
        <button
          onClick={() => {
            setLoadFailure(null);
            setRetryKey((value) => value + 1);
          }}
        >
          重新载入
        </button>
      </section>
    );
  }

  if (!runtime) return <MayhemSkeleton />;

  const { build, champion: liveChampion, meta } = runtime;
  const abilitySkillSet: AbilityPanelSkillSet = {
    championName: liveChampion.name,
    sourceUrl: liveChampion.statsSourceUrl,
    sourceLabel: `Riot 当前技能 ${meta.livePatch}`,
    numericSourceLabel: `Riot ${meta.livePatch} / CommunityDragon ${meta.communityPatch}`,
    abilities: liveChampion.abilities,
  };
  const stats = liveChampion.stats;
  const recommendationsForRarity = runtime.augmentRecommendations.filter(
    (entry) => entry.augment.rarity === activeRarity,
  );
  const metricByAugmentId = new Map(
    runtime.augmentRecommendations.map((entry) => [entry.augment.id, entry.metric]),
  );
  const abilityByKey = new Map(liveChampion.abilities.map((ability) => [ability.key, ability]));
  const sectionBadges: Record<MayhemSection, string> = {
    overview: "5 技能",
    augments: `${runtime.augmentRecommendations.length} 条`,
    skills: `${build.skillBuilds.length} 套`,
    items: "3 类",
    catalog: catalog ? `${catalog.counts.classic} 个` : "188 个",
  };

  return (
    <section ref={pageRef} className="mayhem-page" aria-label="海克斯大乱斗经典模式版攻略">
      <section className="mayhem-intro">
        <div>
          <span className="eyebrow">ARAM: MAYHEM CLASSIC-ISH · {meta.mode}</span>
          <h2>海克斯大乱斗 · 经典模式版</h2>
          <p>
            现代英雄技能搭配经典地图与经典装备。英雄排名、强化符文、召唤师技能、
            技能加点和装备组合均按 OP.GG {meta.opggPatch} 原始数据展示。
          </p>
        </div>
        <div className="mayhem-source-actions">
          <a href="https://op.gg/zh-cn/lol/modes/aram-mayhem" target="_blank" rel="noreferrer">
            对照新版海斗
          </a>
          <a className="primary" href={build.sourceUrl} target="_blank" rel="noreferrer">
            查看 OP.GG 此英雄
          </a>
        </div>
      </section>

      <div className="mayhem-audit-grid">
        <article><b>#{build.rank}</b><span>OP.GG 英雄排名</span><small>第 {build.tier} 段位</small></article>
        <article>
          <b>{formatPercent(build.championMetrics.winRate)}</b>
          <span>英雄胜率</span>
          <small>选用率 {formatPercent(build.championMetrics.pickRate)}</small>
        </article>
        <article><b>{build.startingGold}</b><span>初始金币</span><small>出门组合按预算校验</small></article>
        <article><b>{meta.hasJungleRole ? "有" : "无"}</b><span>打野位置</span><small>海斗不提供惩戒或峡谷分路</small></article>
      </div>

      <div className="mayhem-detail-workbench">
        <nav
          className="mayhem-detail-nav"
          aria-label="怀旧海斗功能"
          aria-orientation="horizontal"
          role="tablist"
        >
          {sectionLabels.map((section, index) => (
            <button
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => selectSection(section.id)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                const lastIndex = sectionLabels.length - 1;
                const nextIndex = event.key === "Home"
                  ? 0
                  : event.key === "End"
                    ? lastIndex
                    : event.key === "ArrowRight"
                      ? (index + 1) % sectionLabels.length
                      : (index - 1 + sectionLabels.length) % sectionLabels.length;
                selectSection(sectionLabels[nextIndex].id);
                event.currentTarget.parentElement
                  ?.querySelectorAll<HTMLButtonElement>("[role='tab']")
                  .item(nextIndex)
                  .focus();
              }}
              role="tab"
              id={`mayhem-tab-${section.id}`}
              aria-selected={activeSection === section.id}
              aria-controls="mayhem-detail-panel"
              tabIndex={activeSection === section.id ? 0 : -1}
            >
              <i>{String(index + 1).padStart(2, "0")}</i>
              <span><b>{section.label}</b><small>{section.description}</small></span>
              <em>{sectionBadges[section.id]}</em>
            </button>
          ))}
        </nav>

        <div
          className="mayhem-detail-panel"
          id="mayhem-detail-panel"
          role="tabpanel"
          aria-labelledby={`mayhem-tab-${activeSection}`}
        >
          {activeSection === "overview" && (
            <article className="mayhem-champion-card">
              <div className="mayhem-champion-heading">
                <img src={localAssetUrl(liveChampion.portrait)} alt="" decoding="async" />
                <div>
                  <span>现代技能 · 经典战场</span>
                  <h3>{liveChampion.name}<small>{liveChampion.title}</small></h3>
                  <p>
                    OP.GG 主流加点 {build.skillBuilds[0].priority.join(" → ")}
                    {" · "}第 {build.tier} 段位 · 排名 #{build.rank}
                  </p>
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
                <span><b>{meta.livePatch}</b>Riot 数值版本</span>
              </div>
              <div className="mayhem-ability-shell">
                <ChampionAbilityPanel
                  skillSet={abilitySkillSet}
                  activeKey={activeAbility}
                  onSelect={setActiveAbility}
                />
              </div>
            </article>
          )}

          {activeSection === "augments" && (
            <section className="mayhem-panel-card mayhem-augment-panel">
              <div className="mayhem-section-heading">
                <div>
                  <span>OP.GG 强化符文推荐</span>
                  <h3>{build.name} · 每个品质完整前 15 条</h3>
                  <p>保留 OP.GG 原始顺序、选用率、场次和胜率；模式总池与英雄推荐分开统计。</p>
                </div>
                <mark>本英雄 {runtime.augmentRecommendations.length} 条</mark>
              </div>
              <div className="mayhem-quality-tabs" role="tablist" aria-label="强化符文品质">
                {(["silver", "gold", "prismatic"] as const).map((rarity) => {
                  const count = runtime.augmentRecommendations.filter(
                    (entry) => entry.augment.rarity === rarity,
                  ).length;
                  return (
                    <button
                      key={rarity}
                      className={activeRarity === rarity ? "active" : ""}
                      onClick={() => setActiveRarity(rarity)}
                      role="tab"
                      aria-selected={activeRarity === rarity}
                    >
                      {rarityLabels[rarity]}<b>{count}</b>
                    </button>
                  );
                })}
              </div>
              <div className="mayhem-augment-table">
                {recommendationsForRarity.map(({ augment, metric }, index) => (
                  <article key={augment.id} className={`rarity-${augment.rarity}`}>
                    <span className="augment-order">{index + 1}</span>
                    <img src={localAssetUrl(augment.icon)} alt="" loading="lazy" decoding="async" />
                    <div>
                      <h4>
                        {augment.name}
                        {augment.classicExclusive && <em>经典专属</em>}
                      </h4>
                      {hasUsefulDescription(augment) && <p>{augment.description}</p>}
                    </div>
                    <MetricLine metric={metric} />
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeSection === "skills" && (
            <section className="mayhem-panel-card mayhem-skills-panel">
              <div className="mayhem-section-heading">
                <div>
                  <span>OP.GG SKILLS · {meta.opggPatch}</span>
                  <h3>召唤师技能与技能加点</h3>
                  <p>展示技能专页全部方案；不补写 OP.GG 未公开的等级，也不套用峡谷默认加点。</p>
                </div>
                <mark>{build.skillBuilds.length} 套加点</mark>
              </div>
              <div className="mayhem-summoner-block">
                <strong>召唤师技能推荐</strong>
                {build.summonerSets.map((set) => (
                  <div className="opgg-spell-row" key={set.spells.map((spell) => spell.key).join("-")}>
                    <span>
                      {set.spells.map((spell) => (
                        <span key={spell.key}>
                          <img src={localAssetUrl(spell.icon)} alt={spell.name} decoding="async" />
                          <small>{spell.name}</small>
                        </span>
                      ))}
                    </span>
                    <MetricLine metric={set.metric} />
                  </div>
                ))}
              </div>
              <div className="mayhem-skill-table">
                {build.skillBuilds.map((skillBuild, buildIndex) => (
                  <article key={`${skillBuild.priority.join("-")}-${buildIndex}`}>
                    <div className="skill-priority">
                      <span>方案 {buildIndex + 1}</span>
                      {skillBuild.priority.map((key, index) => {
                        const ability = abilityByKey.get(key);
                        return (
                          <span key={`${key}-${index}`}>
                            {ability && <img src={localAssetUrl(ability.icon)} alt="" loading="lazy" decoding="async" />}
                            <b>{key}</b>
                            {index < skillBuild.priority.length - 1 && <i>›</i>}
                          </span>
                        );
                      })}
                    </div>
                    <div className="skill-level-sequence">
                      {skillBuild.levelSequence.map((key, index) => (
                        <span key={`${key}-${index}`} className={key === "R" ? "ultimate" : ""}>
                          <small>{index + 1}</small><b>{key}</b>
                        </span>
                      ))}
                    </div>
                    <MetricLine metric={skillBuild.metric} />
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeSection === "items" && (
            <section className="mayhem-panel-card mayhem-items-section">
              <div className="mayhem-section-heading">
                <div>
                  <span>OP.GG 装备路线</span>
                  <h3>{build.name} · 出门装、鞋子与核心装备</h3>
                  <p>出门装按 {meta.startingGold} 金模式预算校验；数量和顺序均来自 OP.GG。</p>
                </div>
                <mark>{meta.startingGold} 金上限</mark>
              </div>
              <div className="opgg-item-groups">
                <article>
                  <h4>出门装<small>{meta.startingGold} 金上限</small></h4>
                  {build.items.starting.map((recommendation, index) => (
                    <ItemRecommendationRow
                      key={`start-${index}`}
                      recommendation={recommendation}
                      startingGold={meta.startingGold}
                      showPrice
                    />
                  ))}
                </article>
                <article>
                  <h4>鞋子</h4>
                  {build.items.boots.map((recommendation, index) => (
                    <ItemRecommendationRow
                      key={`boots-${index}`}
                      recommendation={recommendation}
                      startingGold={meta.startingGold}
                    />
                  ))}
                </article>
                <article>
                  <h4>核心装备顺序</h4>
                  {build.items.core.map((recommendation, index) => (
                    <ItemRecommendationRow
                      key={`core-${index}`}
                      recommendation={recommendation}
                      startingGold={meta.startingGold}
                    />
                  ))}
                </article>
              </div>
            </section>
          )}

          {activeSection === "catalog" && (
            <section className="mayhem-panel-card mayhem-catalog">
              <div className="mayhem-section-heading">
                <div>
                  <span>完整图鉴</span>
                  <h3>怀旧海斗强化符文池</h3>
                  <p>
                    {catalog
                      ? `新版海斗 ${catalog.counts.regular} 个；怀旧海斗 ${catalog.counts.classic} 个；经典专属 ${catalog.counts.exclusive} 个。`
                      : "正在按需载入模式完整强化池…"}
                  </p>
                </div>
              </div>
              {catalog ? (
                <>
                  <div className="mayhem-filters">
                    <div>
                      {([
                        ["all", `全部 ${catalog.counts.classic}`],
                        ["recommended", `本英雄 ${runtime.augmentRecommendations.length}`],
                        ["exclusive", `经典专属 ${catalog.counts.exclusive}`],
                        ["shared", "两模式共享"],
                      ] as const).map(([id, label]) => (
                        <button
                          key={id}
                          className={catalogFilter === id ? "active" : ""}
                          onClick={() => setCatalogFilter(id)}
                          aria-pressed={catalogFilter === id}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    <div>
                      {(["all", "silver", "gold", "prismatic"] as const).map((id) => (
                        <button
                          key={id}
                          className={catalogRarity === id ? "active" : ""}
                          onClick={() => setCatalogRarity(id)}
                          aria-pressed={catalogRarity === id}
                        >
                          {id === "all" ? "全部品质" : `${rarityLabels[id]} ${catalog.counts.byRarity[id]}`}
                        </button>
                      ))}
                    </div>
                    <input
                      value={catalogSearch}
                      onChange={(event) => setCatalogSearch(event.target.value)}
                      aria-label="搜索怀旧海斗强化符文"
                      placeholder="搜索强化名称、效果或内部 ID"
                    />
                  </div>
                  <div className="mayhem-augment-list">
                    {visibleCatalogAugments.map((augment) => {
                      const metric = metricByAugmentId.get(augment.id);
                      return (
                        <article key={augment.id} className={`augment-card rarity-${augment.rarity}`}>
                          <img src={localAssetUrl(augment.icon)} alt="" loading="lazy" decoding="async" />
                          <div>
                            <h4>
                              {augment.name}
                              <small className="augment-rarity-label">{rarityLabels[augment.rarity]}</small>
                              {augment.classicExclusive && <em>经典专属</em>}
                            </h4>
                            {hasUsefulDescription(augment) && <p>{augment.description}</p>}
                            {metric && <MetricLine metric={metric} />}
                          </div>
                        </article>
                      );
                    })}
                    {visibleCatalogAugments.length === 0 && (
                      <p className="mayhem-empty">没有符合当前筛选的强化符文。</p>
                    )}
                  </div>
                </>
              ) : (
                <div className="mayhem-catalog-loading" role="status">正在载入 188 项强化图鉴…</div>
              )}
            </section>
          )}
        </div>
      </div>

      <div className="mayhem-methodology">
        <strong>字段来源</strong>
        <p>
          英雄排名、胜率、选用率、场次、召唤师技能、加点与装备组合来自 OP.GG {meta.opggPatch}；
          现代技能与基础属性来自 Riot {meta.livePatch} / CommunityDragon {meta.communityPatch}；
          强化池与公开效果来自 CommunityDragon。OP.GG 未提供普通符文时，前台不显示空白符文模块。
        </p>
      </div>
    </section>
  );
}
