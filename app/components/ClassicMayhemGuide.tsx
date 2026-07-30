"use client";

import { useMemo, useState } from "react";
import type { ClassicChampion } from "../classic-data";
import { classicBuildGuides } from "../classic-build-guides";
import { localAssetUrl } from "../classic-assets";
import { classicItems } from "../classic-items.generated";
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

type AugmentFilter = "recommended" | "exclusive" | "shared" | "all";
type RarityFilter = "all" | MayhemAugment["rarity"];

const rarityLabels = {
  silver: "银",
  gold: "黄金",
  prismatic: "棱镜",
} as const;

const rarityOrder: Record<MayhemAugment["rarity"], number> = {
  prismatic: 3,
  gold: 2,
  silver: 1,
};

const preferredTags: Record<ClassicChampion["archetype"], string[]> = {
  mage: ["spell", "utility"],
  fighter: ["attack", "tank"],
  jungler: ["attack", "utility"],
  marksman: ["attack", "spell"],
  tank: ["tank", "utility"],
  support: ["utility", "tank", "spell"],
};

const tagLabels: Record<string, string> = {
  attack: "普攻／暴击",
  spell: "技能／法强",
  tank: "生存／前排",
  utility: "功能／机动",
  adaptive: "通用",
};

const verifiedChampionPriority: Partial<Record<ClassicChampion["key"], string[]>> = {
  // OP.GG 16.15 Classic-ish 凯尔详情页与用户提供的页面截图均显示这三项为高频选项。
  Kayle: ["ARAM_ScopierWeapons", "ARAM_Marksmage", "ARAM_Deft"],
};

function augmentScore(augment: MayhemAugment, champion: ClassicChampion) {
  const preferences = preferredTags[champion.archetype];
  const tagScore = augment.tags.reduce(
    (score, tag) => score + (preferences.includes(tag) ? 8 - preferences.indexOf(tag) * 2 : 0),
    0,
  );
  return tagScore
    + rarityOrder[augment.rarity]
    + (augment.hasPublicDescription ? 2 : 0)
    + (augment.classicExclusive ? 1 : 0);
}

function itemById(id: string) {
  return classicItems.find((item) => item.id === id);
}

export default function ClassicMayhemGuide({ champion }: { champion: ClassicChampion }) {
  const liveChampion = liveClassicChampions.find((entry) => entry.classicId === champion.classicId);
  const guide = classicBuildGuides[champion.classicId][0];
  const [activeAbility, setActiveAbility] = useState<"P" | "Q" | "W" | "E" | "R">("Q");
  const [augmentFilter, setAugmentFilter] = useState<AugmentFilter>("recommended");
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>("all");
  const [augmentSearch, setAugmentSearch] = useState("");

  const recommendations = useMemo(() => {
    const verified = verifiedChampionPriority[champion.key] || [];
    return [...classicMayhemAugments]
      .filter((augment) => augment.name !== "？？？")
      .sort((left, right) => {
        const leftVerified = verified.indexOf(left.apiName);
        const rightVerified = verified.indexOf(right.apiName);
        if (leftVerified >= 0 || rightVerified >= 0) {
          if (leftVerified < 0) return 1;
          if (rightVerified < 0) return -1;
          return leftVerified - rightVerified;
        }
        return augmentScore(right, champion) - augmentScore(left, champion);
      })
      .slice(0, 9);
  }, [champion]);

  const visibleAugments = useMemo(() => {
    const recommendedIds = new Set(recommendations.map((augment) => augment.id));
    const query = augmentSearch.trim().toLocaleLowerCase("zh-CN");
    return classicMayhemAugments.filter((augment) => {
      if (augmentFilter === "recommended" && !recommendedIds.has(augment.id)) return false;
      if (augmentFilter === "exclusive" && !augment.classicExclusive) return false;
      if (augmentFilter === "shared" && augment.classicExclusive) return false;
      if (rarityFilter !== "all" && augment.rarity !== rarityFilter) return false;
      if (query && !`${augment.name} ${augment.apiName} ${augment.description}`.toLocaleLowerCase("zh-CN").includes(query)) return false;
      return true;
    });
  }, [augmentFilter, augmentSearch, rarityFilter, recommendations]);

  if (!liveChampion) {
    return <section className="mayhem-page"><p>现代英雄数据暂未生成，请运行 npm run mayhem:update。</p></section>;
  }

  const ability = liveChampion.abilities.find((entry) => entry.key === activeAbility) || liveChampion.abilities[1];
  const coreItems = guide.coreItems.map(itemById).filter(Boolean);
  const startingItems = guide.startingItems.map((entry) => ({
    ...entry,
    item: itemById(entry.itemId),
  })).filter((entry) => entry.item);

  return (
    <section className="mayhem-page" aria-label="海克斯大乱斗经典模式版攻略">
      <section className="mayhem-intro">
        <div>
          <span className="eyebrow">ARAM: MAYHEM CLASSIC-ISH · {CLASSIC_MAYHEM_MODE}</span>
          <h2>海克斯大乱斗 · 经典模式版</h2>
          <p>经典嚎哭深渊地图与怀旧装备，搭配正式服现代英雄技能；强化符文池按客户端 16.15 的独立模式清单审核。</p>
        </div>
        <div className="mayhem-source-actions">
          <a href="https://op.gg/zh-cn/lol/modes/aram-mayhem" target="_blank" rel="noreferrer">对照新版海斗</a>
          <a
            className="primary"
            href={`https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/${champion.key.toLowerCase()}/build`}
            target="_blank"
            rel="noreferrer"
          >
            查看 OP.GG 此英雄
          </a>
        </div>
      </section>

      <div className="mayhem-audit-grid">
        <article><b>60</b><span>怀旧服英雄池</span><small>与 League Classic 名单一致</small></article>
        <article><b>{LIVE_DATA_PATCH}</b><span>现代技能快照</span><small>Riot Data Dragon · zh_CN</small></article>
        <article><b>{classicMayhemAugments.length}</b><span>怀旧海斗强化</span><small>客户端 {CLASSIC_MAYHEM_MODE} 清单</small></article>
        <article><b>{classicExclusiveAugments.length}</b><span>经典专属强化</span><small>与新版海斗交叉差集</small></article>
      </div>

      <div className="mayhem-guide-grid">
        <article className="mayhem-champion-card">
          <div className="mayhem-champion-heading">
            <img src={localAssetUrl(liveChampion.portrait)} alt="" />
            <div>
              <span>现代技能 · 经典战场</span>
              <h3>{liveChampion.name}<small>{liveChampion.title}</small></h3>
              <p>主加 {guide.skillOrder.join(" → ")} · {guide.style}</p>
            </div>
          </div>
          <div className="mayhem-stats" aria-label={`${liveChampion.name}基础属性`}>
            <span><b>{liveChampion.stats.hp}</b>生命</span>
            <span><b>{liveChampion.stats.attackDamage}</b>攻击</span>
            <span><b>{liveChampion.stats.attackRange}</b>射程</span>
            <span><b>{liveChampion.stats.moveSpeed}</b>移速</span>
          </div>
          <div className="mayhem-ability-tabs" role="tablist" aria-label="现代技能">
            {liveChampion.abilities.map((entry) => (
              <button
                key={entry.key}
                className={activeAbility === entry.key ? "active" : ""}
                onClick={() => setActiveAbility(entry.key)}
                role="tab"
                aria-selected={activeAbility === entry.key}
              >
                <img src={localAssetUrl(entry.icon)} alt="" /><b>{entry.key}</b>
              </button>
            ))}
          </div>
          <div className="mayhem-ability-detail" role="tabpanel">
            <div><span>{ability.key}</span><h4>{ability.name}</h4></div>
            <p>{ability.description}</p>
            {ability.key !== "P" && (
              <dl>
                <div><dt>冷却</dt><dd>{ability.cooldown || "—"}</dd></div>
                <div><dt>消耗</dt><dd>{ability.cost || "—"}</dd></div>
                <div><dt>范围</dt><dd>{ability.range || "—"}</dd></div>
              </dl>
            )}
          </div>
        </article>

        <article className="mayhem-build-card">
          <header><span>经典装备路线</span><h3>{guide.name}</h3><p>使用怀旧装备目录，不混入新版商店装备。</p></header>
          <div className="mayhem-starting-items">
            <strong>出门装</strong>
            <div>
              {startingItems.map(({ item, quantity }) => (
                <span key={item!.id}><img src={item!.icon} alt="" /><small>{item!.name}{quantity > 1 ? ` ×${quantity}` : ""}</small></span>
              ))}
            </div>
          </div>
          <div className="mayhem-core-items">
            <strong>六格成装</strong>
            <div>
              {coreItems.map((item, index) => (
                <span key={item!.id}><em>{index + 1}</em><img src={item!.icon} alt="" /><small>{item!.name}</small></span>
              ))}
            </div>
          </div>
          <div className="mayhem-playbook">
            <strong>怀旧海斗打法</strong>
            <ol>
              <li>前期优先保持血量和兵线推进，雪球开团前先确认经典装备的小件成型点。</li>
              <li>强化符文先匹配英雄的{preferredTags[champion.archetype].map((tag) => tagLabels[tag]).join("、")}方向，再看队伍缺口。</li>
              <li>地图与装备是怀旧规则，但技能按 {LIVE_DATA_PATCH}；不要套用 S3 技能伤害与冷却记忆。</li>
            </ol>
          </div>
        </article>
      </div>

      <section className="mayhem-augment-section">
        <div className="mayhem-section-heading">
          <div><span>强化符文攻略</span><h3>{champion.name} 的协同选择</h3><p>推荐按英雄机制与客户端词条匹配，不把不可稳定复验的瞬时胜率写死。</p></div>
          {champion.key === "Kayle" && <mark>凯尔前三项已与 OP.GG 16.15 页面交叉核对</mark>}
        </div>
        <div className="mayhem-recommendations">
          {recommendations.map((augment, index) => (
            <article key={augment.id} className={`augment-card rarity-${augment.rarity}`}>
              <span className="augment-rank">{index + 1}</span>
              <img src={localAssetUrl(augment.icon)} alt="" loading="lazy" />
              <div>
                <h4>{augment.name}{augment.classicExclusive && <em>经典专属</em>}</h4>
                <p>{augment.description}</p>
                <small>{rarityLabels[augment.rarity]} · {augment.tags.map((tag) => tagLabels[tag]).join(" / ")}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mayhem-catalog">
        <div className="mayhem-section-heading">
          <div>
            <span>完整图鉴</span>
            <h3>怀旧海斗强化符文池</h3>
            <p>新版海斗 {regularMayhemAugments.length} 个；怀旧海斗 {classicMayhemAugments.length} 个；两者交叉后有 {classicExclusiveAugments.length} 个经典专属。</p>
          </div>
        </div>
        <div className="mayhem-filters">
          <div>
            {([
              ["recommended", "本英雄推荐"],
              ["exclusive", `经典专属 ${classicExclusiveAugments.length}`],
              ["shared", "两模式共享"],
              ["all", `全部 ${classicMayhemAugments.length}`],
            ] as const).map(([id, label]) => (
              <button key={id} className={augmentFilter === id ? "active" : ""} onClick={() => setAugmentFilter(id)}>{label}</button>
            ))}
          </div>
          <div>
            {(["all", "silver", "gold", "prismatic"] as const).map((id) => (
              <button key={id} className={rarityFilter === id ? "active" : ""} onClick={() => setRarityFilter(id)}>
                {id === "all" ? "全部品质" : rarityLabels[id]}
              </button>
            ))}
          </div>
          <input value={augmentSearch} onChange={(event) => setAugmentSearch(event.target.value)} placeholder="搜索强化名称、效果或内部 ID" />
        </div>
        <div className="mayhem-augment-list">
          {visibleAugments.map((augment) => (
            <article key={augment.id} className={`augment-card rarity-${augment.rarity}`}>
              <img src={localAssetUrl(augment.icon)} alt="" loading="lazy" />
              <div>
                <h4>{augment.name}{augment.classicExclusive && <em>经典专属</em>}</h4>
                <p>{augment.description}</p>
                <small>{rarityLabels[augment.rarity]} · {augment.tags.map((tag) => tagLabels[tag]).join(" / ")}</small>
              </div>
            </article>
          ))}
          {visibleAugments.length === 0 && <p className="mayhem-empty">没有符合当前筛选的强化符文。</p>}
        </div>
      </section>

      <div className="mayhem-methodology">
        <strong>审核口径</strong>
        <p>英雄技能与基础属性来自 Riot Data Dragon {LIVE_DATA_PATCH}；模式池、名称、品质和图标来自 CommunityDragon {CLASSIC_MAYHEM_PATCH} 客户端导出；新版与怀旧海斗入口和可见词条再与 OP.GG 中文页交叉核对。客户端未公开完整效果文本的经典新词条会明确标注，不补写猜测数值。</p>
      </div>
    </section>
  );
}
