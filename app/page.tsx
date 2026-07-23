"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CLASSIC_PATCH,
  championIcon,
  championSplash,
  classicBuildPresets,
  classicChampions,
  classicItemCategories,
  classicMasteries,
  classicRuneGroups,
  classicSpells,
  defaultSpellsFor,
  initialMasteryRanks,
  masteryBackgrounds,
  masteryPresets,
  runeBoardBackground,
  runePresetIds,
  skillPlanFor,
  type ClassicChampion,
  type ClassicMastery,
  type ClassicRuneGroup,
} from "./classic-data";
import { classicItems } from "./classic-items.generated";

type WorkbenchView = "runes" | "masteries" | "build" | "ai";
type RuneCounts = Record<string, number>;
type MasteryRanks = Record<string, number>;

const runeSlotPositions = [
  [29, 408, 52, 52], [102, 408, 52, 52], [175, 408, 52, 52],
  [149, 344, 52, 52], [123, 282, 52, 52], [41, 273, 52, 52],
  [93, 230, 52, 52], [139, 186, 52, 52], [50, 186, 52, 52],
  [93, 142, 52, 52], [155, 122, 52, 52], [186, 73, 52, 52],
  [236, 44, 52, 52], [290, 21, 52, 52], [648, 42, 52, 52],
  [537, 42, 52, 52], [459, 70, 52, 52], [524, 99, 52, 52],
  [387, 70, 52, 52], [602, 90, 52, 52], [591, 13, 52, 52],
  [485, 13, 52, 52], [420, 13, 52, 52], [355, 12, 52, 52],
  [635, 148, 52, 52], [15, 344, 52, 52], [80, 344, 52, 52],
  [207, 244, 100, 100], [446, 182, 100, 100], [36, 42, 100, 100],
] as const;

const percentStats = new Set([
  "暴击几率", "暴击伤害", "攻击速度", "冷却缩减", "18级冷却缩减",
  "百分比生命值", "法术吸血", "经验获取", "生命偷取", "移动速度",
]);

const itemById = new Map(classicItems.map((item) => [item.id, item]));
// OP.GG exposes two internal rune-replacement records in its item payload.
// Keep them in the 152-entry source snapshot, but hide them from the equipment picker.
const mainItemPool = classicItems.filter((item) => !["772139", "772140"].includes(item.id));
const selectableItemIds = new Set(mainItemPool.map((item) => item.id));
const spellIds = new Set(classicSpells.map((spell) => spell.id));

function createRunePreset(champion: ClassicChampion): RuneCounts {
  const counts: RuneCounts = {};
  classicRuneGroups.forEach((group) => {
    group.runes.forEach((rune) => { counts[rune.id] = 0; });
    counts[runePresetIds[champion.archetype][group.id]] = group.cap;
  });
  return counts;
}

function groupUsed(counts: RuneCounts, group: ClassicRuneGroup) {
  return group.runes.reduce((sum, rune) => sum + (counts[rune.id] || 0), 0);
}

function treeTotal(ranks: MasteryRanks, tree: ClassicMastery["tree"]) {
  return classicMasteries
    .filter((mastery) => mastery.tree === tree)
    .reduce((sum, mastery) => sum + (ranks[mastery.id] || 0), 0);
}

function earlierTreePoints(ranks: MasteryRanks, mastery: ClassicMastery) {
  return classicMasteries
    .filter((node) => node.tree === mastery.tree && node.tier < mastery.tier)
    .reduce((sum, node) => sum + (ranks[node.id] || 0), 0);
}

function masteryUnlocked(ranks: MasteryRanks, mastery: ClassicMastery) {
  return earlierTreePoints(ranks, mastery) >= (mastery.tier - 1) * 4;
}

function normalizeNumber(value: number) {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(rounded * 10 % 1 === 0 ? 1 : 2);
}

function encodeBuildState(value: unknown) {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function decodeBuildState(value: string) {
  if (value.length > 50_000) throw new Error("Build payload is too large");
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
}

function sanitizeRuneCounts(value: unknown): RuneCounts {
  const source = asRecord(value);
  const next: RuneCounts = {};
  classicRuneGroups.forEach((group) => {
    let remaining = group.cap;
    group.runes.forEach((rune) => {
      const requested = Math.max(0, Math.floor(Number(source[rune.id]) || 0));
      next[rune.id] = Math.min(requested, remaining);
      remaining -= next[rune.id];
    });
  });
  return next;
}

function sanitizeMasteryRanks(value: unknown): MasteryRanks {
  const source = asRecord(value);
  const next: MasteryRanks = {};
  let remaining = 30;
  classicMasteries.forEach((mastery) => {
    const requested = Math.max(0, Math.floor(Number(source[mastery.id]) || 0));
    const allowed = masteryUnlocked(next, mastery) ? Math.min(requested, mastery.max, remaining) : 0;
    next[mastery.id] = allowed;
    remaining -= allowed;
  });
  return next;
}

function isValidSkillPlan(value: unknown): value is string[] {
  if (!Array.isArray(value) || value.length !== 18 || value.some((skill) => !["Q", "W", "E", "R"].includes(skill))) return false;
  const counts: Record<string, number> = { Q: 0, W: 0, E: 0, R: 0 };
  return value.every((skill, index) => {
    counts[skill] += 1;
    if (skill === "R") return [6, 11, 16].includes(index + 1) && counts.R <= 3;
    return counts[skill] <= 5 && counts[skill] <= Math.ceil((index + 1) / 2);
  });
}

export default function Home() {
  const [view, setView] = useState<WorkbenchView>("runes");
  const [selectedChampion, setSelectedChampion] = useState(classicChampions[0]);
  const [search, setSearch] = useState("");
  const [laneFilter, setLaneFilter] = useState("全部");
  const [runeCounts, setRuneCounts] = useState<RuneCounts>(() => createRunePreset(classicChampions[0]));
  const [activeRuneGroup, setActiveRuneGroup] = useState<ClassicRuneGroup["id"]>("mark");
  const [masteryRanks, setMasteryRanks] = useState<MasteryRanks>({ ...initialMasteryRanks });
  const [selectedSpells, setSelectedSpells] = useState<string[]>(defaultSpellsFor(classicChampions[0]));
  const [items, setItems] = useState<string[]>(classicBuildPresets[classicChampions[0].archetype]);
  const [activeItemSlot, setActiveItemSlot] = useState(0);
  const [itemCategory, setItemCategory] = useState<(typeof classicItemCategories)[number]>("核心推荐");
  const [itemSearch, setItemSearch] = useState("");
  const [inspectedItem, setInspectedItem] = useState(classicBuildPresets[classicChampions[0].archetype][0]);
  const [skillPlan, setSkillPlan] = useState<string[]>(skillPlanFor(classicChampions[0].spellOrder));
  const [prompt, setPrompt] = useState("对线稳定，使用完整经典符文与 30 点天赋；给出两件备选装备。");
  const [aiState, setAiState] = useState<"idle" | "working" | "ready">("idle");
  const [toast, setToast] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const totalMasteries = useMemo(
    () => Object.values(masteryRanks).reduce((sum, points) => sum + points, 0),
    [masteryRanks],
  );

  const runeTotals = useMemo(() => {
    const totals: Record<string, number> = {};
    classicRuneGroups.forEach((group) => group.runes.forEach((rune) => {
      const count = runeCounts[rune.id] || 0;
      if (count) totals[rune.stat] = (totals[rune.stat] || 0) + rune.per * count;
    }));
    return totals;
  }, [runeCounts]);

  const runeAssignments = useMemo(() => {
    const assignments: Array<{ runeId: string; groupId: ClassicRuneGroup["id"] } | null> = [];
    classicRuneGroups.forEach((group) => {
      const groupSlots: Array<{ runeId: string; groupId: ClassicRuneGroup["id"] }> = [];
      group.runes.forEach((rune) => {
        for (let index = 0; index < (runeCounts[rune.id] || 0); index += 1) {
          groupSlots.push({ runeId: rune.id, groupId: group.id });
        }
      });
      while (groupSlots.length < group.cap) groupSlots.push({ runeId: "", groupId: group.id });
      assignments.push(...groupSlots.slice(0, group.cap).map((slot) => slot.runeId ? slot : null));
    });
    return assignments;
  }, [runeCounts]);

  const filteredChampions = useMemo(() => classicChampions.filter((champion) => {
    const laneMatches = laneFilter === "全部" || champion.lane.startsWith(laneFilter);
    const query = search.trim().toLowerCase();
    return laneMatches && (!query || `${champion.name}${champion.title}${champion.key}${champion.role}`.toLowerCase().includes(query));
  }), [laneFilter, search]);

  const displayedItems = useMemo(() => mainItemPool.filter((item) => {
    const query = itemSearch.trim();
    const categoryMatches = itemCategory === "核心推荐"
      ? item.category === "鞋子" || item.category === "传说装备"
      : item.category === itemCategory;
    return categoryMatches && (!query || `${item.name}${item.description}${item.tags.join("")}`.includes(query));
  }), [itemCategory, itemSearch]);

  const selectedRuneGroup = classicRuneGroups.find((group) => group.id === activeRuneGroup) || classicRuneGroups[0];
  const inspectedItemData = itemById.get(inspectedItem);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  useEffect(() => {
    try {
      const hash = window.location.hash.match(/build=([^&]+)/)?.[1];
      const saved = hash ? decodeBuildState(hash) : JSON.parse(localStorage.getItem("rift-lab-classic-build") || "null");
      if (saved) {
        const record = asRecord(saved);
        const champion = classicChampions.find((entry) => entry.classicId === record.championId) || classicChampions[0];
        const fallbackItems = classicBuildPresets[champion.archetype];
        const safeItems = Array.isArray(record.items)
          ? record.items.filter((id): id is string => typeof id === "string" && selectableItemIds.has(id)).slice(0, 6)
          : [];
        while (safeItems.length < 6) safeItems.push(fallbackItems[safeItems.length]);

        setSelectedChampion(champion);
        setRuneCounts(record.runeCounts ? sanitizeRuneCounts(record.runeCounts) : createRunePreset(champion));
        setMasteryRanks(record.masteryRanks ? sanitizeMasteryRanks(record.masteryRanks) : { ...initialMasteryRanks });
        setSelectedSpells(Array.isArray(record.spells)
          ? [...new Set(record.spells.filter((id): id is string => typeof id === "string" && spellIds.has(id)))].slice(0, 2)
          : defaultSpellsFor(champion));
        setItems(safeItems);
        setInspectedItem(safeItems[0]);
        setSkillPlan(isValidSkillPlan(record.skillPlan) ? record.skillPlan : skillPlanFor(champion.spellOrder));
      }
    } catch {
      // Invalid local/share data is ignored so the simulator always remains usable.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("rift-lab-classic-build", JSON.stringify({
      championId: selectedChampion.classicId,
      runeCounts,
      masteryRanks,
      spells: selectedSpells,
      items,
      skillPlan,
    }));
  }, [hydrated, items, masteryRanks, runeCounts, selectedChampion.classicId, selectedSpells, skillPlan]);

  const chooseChampion = (champion: ClassicChampion) => {
    setSelectedChampion(champion);
    setRuneCounts(createRunePreset(champion));
    setMasteryRanks({ ...initialMasteryRanks });
    setSelectedSpells(defaultSpellsFor(champion));
    setItems(classicBuildPresets[champion.archetype]);
    setInspectedItem(classicBuildPresets[champion.archetype][0]);
    setSkillPlan(skillPlanFor(champion.spellOrder));
    setAiState("idle");
    showToast(`已切换为 ${champion.name} 的经典构筑`);
  };

  const restoreRecommended = () => {
    const recommendedItems = classicBuildPresets[selectedChampion.archetype];
    setRuneCounts(createRunePreset(selectedChampion));
    setMasteryRanks({ ...initialMasteryRanks });
    setSelectedSpells(defaultSpellsFor(selectedChampion));
    setItems(recommendedItems);
    setInspectedItem(recommendedItems[0]);
    setSkillPlan(skillPlanFor(selectedChampion.spellOrder));
    setActiveItemSlot(0);
    setAiState("idle");
    showToast("已恢复当前英雄的完整推荐方案");
  };

  const adjustRune = (group: ClassicRuneGroup, runeId: string, delta: number) => {
    setRuneCounts((current) => {
      const used = groupUsed(current, group);
      const value = current[runeId] || 0;
      if (delta > 0 && used >= group.cap) return current;
      return { ...current, [runeId]: Math.max(0, Math.min(group.cap, value + delta)) };
    });
  };

  const fillRune = (group: ClassicRuneGroup, runeId: string) => {
    setRuneCounts((current) => {
      const next = { ...current };
      group.runes.forEach((rune) => { next[rune.id] = 0; });
      next[runeId] = group.cap;
      return next;
    });
  };

  const applyRunePreset = (kind: "ad" | "ap") => {
    const archetype = kind === "ap" ? "mage" : "marksman";
    const pseudoChampion = { ...selectedChampion, archetype } as ClassicChampion;
    setRuneCounts(createRunePreset(pseudoChampion));
    showToast(`已应用 OP.GG Classic ${kind.toUpperCase()} 预设`);
  };

  const adjustMastery = (mastery: ClassicMastery, delta: number) => {
    setMasteryRanks((current) => {
      const currentRank = current[mastery.id] || 0;
      if (delta > 0) {
        if (totalMasteries >= 30 || currentRank >= mastery.max || !masteryUnlocked(current, mastery)) {
          showToast(!masteryUnlocked(current, mastery) ? `本行需要先在 ${mastery.tree} 前排投入 ${(mastery.tier - 1) * 4} 点` : "已达到点数或等级上限");
          return current;
        }
        return { ...current, [mastery.id]: currentRank + 1 };
      }
      if (!currentRank) return current;
      const next = { ...current, [mastery.id]: currentRank - 1 };
      const invalid = classicMasteries.some((node) => (next[node.id] || 0) > 0 && !masteryUnlocked(next, node));
      if (invalid) {
        showToast("请先撤回后排天赋，再移除前排点数");
        return current;
      }
      return next;
    });
  };

  const toggleSpell = (spellId: string) => {
    setSelectedSpells((current) => {
      if (current.includes(spellId)) return current.filter((id) => id !== spellId);
      if (current.length < 2) return [...current, spellId];
      return [current[1], spellId];
    });
  };

  const changeSkill = (levelIndex: number, skill: string) => {
    const level = levelIndex + 1;
    if (skill === "R" && ![6, 11, 16].includes(level)) {
      showToast("经典规则：终极技能只能在 6、11、16 级学习");
      return;
    }
    setSkillPlan((current) => {
      const next = current.map((entry, index) => index === levelIndex ? skill : entry);
      const counts = { Q: 0, W: 0, E: 0, R: 0 };
      for (let index = 0; index < next.length; index += 1) {
        const selected = next[index] as keyof typeof counts;
        counts[selected] += 1;
        if (selected === "R" && ![6, 11, 16].includes(index + 1)) return current;
        if (selected !== "R" && counts[selected] > Math.ceil((index + 1) / 2)) {
          showToast(`${index + 1} 级时不能学习该技能的下一等级`);
          return current;
        }
        if (counts[selected] > (selected === "R" ? 3 : 5)) return current;
      }
      return next;
    });
  };

  const shareBuild = async () => {
    const payload = encodeBuildState({
      championId: selectedChampion.classicId,
      runeCounts,
      masteryRanks,
      spells: selectedSpells,
      items,
      skillPlan,
    });
    const url = `${window.location.origin}${window.location.pathname}#build=${payload}`;
    window.history.replaceState(null, "", url);
    await navigator.clipboard?.writeText(url);
    showToast("无需登录的构筑链接已复制");
  };

  const generateBuild = () => {
    setAiState("working");
    window.setTimeout(() => {
      const defensive = prompt.includes("稳") || prompt.includes("防御") || prompt.includes("新手");
      setRuneCounts(createRunePreset({
        ...selectedChampion,
        archetype: defensive ? "tank" : selectedChampion.archetype,
      }));
      setMasteryRanks({ ...(defensive ? masteryPresets["防御 21 / 通用 9"] : initialMasteryRanks) });
      setSelectedSpells(defaultSpellsFor(selectedChampion));
      const generatedItems = classicBuildPresets[defensive ? "tank" : selectedChampion.archetype];
      setItems(generatedItems);
      setInspectedItem(generatedItems[0]);
      setSkillPlan(skillPlanFor(selectedChampion.spellOrder));
      setAiState("ready");
      showToast("经典数据构筑草案已写入当前方案");
    }, 1100);
  };

  return (
    <main className="app-shell" style={{ "--champion-accent": selectedChampion.accent } as React.CSSProperties}>
      <header className="topbar">
        <button className="brand" onClick={() => setView("runes")} aria-label="返回符文模拟器">
          <span className="brand-mark">R</span>
          <span><strong>RIFT<span>//</span>LAB</strong><small>怀旧服构筑工作台</small></span>
        </button>
        <nav className="main-nav" aria-label="构筑功能">
          {([
            ["runes", "符文模拟器", "50"],
            ["masteries", "天赋模拟器", "56"],
            ["build", "技能与出装", "152"],
            ["ai", "AI 助手", "✦"],
          ] as const).map(([id, label, badge]) => (
            <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id)} aria-current={view === id ? "page" : undefined}>
              {label}<span>{badge}</span>
            </button>
          ))}
        </nav>
        <div className="sync-status">
          <span className="live-dot" />
          <span><strong>Classic {CLASSIC_PATCH}</strong><small>OP.GG · 2026.07.24 快照</small></span>
          <button onClick={shareBuild}>分享</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="champion-rail">
          <div className="rail-heading"><span>经典英雄</span><b>{classicChampions.length} / 60</b></div>
          <label className="champion-search">
            <span aria-hidden="true">⌕</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索英雄、称号或定位" />
          </label>
          <div className="role-filters" aria-label="位置筛选">
            {["全部", "上", "野", "中", "下", "辅"].map((lane) => (
              <button key={lane} className={laneFilter === lane ? "active" : ""} onClick={() => setLaneFilter(lane)} aria-pressed={laneFilter === lane}>{lane}</button>
            ))}
          </div>
          <div className="champion-list">
            {filteredChampions.map((champion) => (
              <button key={champion.classicId} className={champion.classicId === selectedChampion.classicId ? "champion-row active" : "champion-row"} onClick={() => chooseChampion(champion)}>
                <img src={championIcon(champion)} alt="" />
                <span><strong>{champion.name}</strong><small>{champion.title} · {champion.lane}</small></span>
                <i>{champion.classicId === selectedChampion.classicId ? "●" : "›"}</i>
              </button>
            ))}
          </div>
          <div className="rail-footnote"><span>目录覆盖</span><strong>60 英雄 · 16 技能</strong><small>所有选择项统一来自 OP.GG Classic 16.15。</small></div>
        </aside>

        <section className="builder">
          <section className="champion-hero">
            <img src={championSplash(selectedChampion)} alt={`${selectedChampion.name}原画`} />
            <div className="hero-shade" />
            <div className="hero-content">
              <span className="eyebrow">CLASSIC · {selectedChampion.lane} · {selectedChampion.role}</span>
              <h1>{selectedChampion.name}<small>{selectedChampion.title}</small></h1>
              <p>完整经典目录已载入：符文 50 · 天赋 56 · 召唤师技能 16 · 装备 152</p>
            </div>
            <div className="hero-actions">
              <button onClick={restoreRecommended}>恢复推荐</button>
              <button className="primary" onClick={shareBuild}>复制方案链接</button>
            </div>
          </section>

          <div className="mobile-view-tabs">
            {([
              ["runes", "符文"],
              ["masteries", "天赋"],
              ["build", "构筑"],
              ["ai", "AI"],
            ] as const).map(([id, label]) => <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id)}>{label}</button>)}
          </div>

          {view === "runes" && (
            <section className="simulator-page">
              <div className="simulator-heading">
                <div><span>01</span><div><h2>经典符文模拟器</h2><p>9 印记 + 9 符印 + 9 雕纹 + 3 精华；名称、数值与属性汇总实时计算。</p></div></div>
                <div className="simulator-actions">
                  <button onClick={() => applyRunePreset("ad")}>AD 预设</button>
                  <button onClick={() => applyRunePreset("ap")}>AP 预设</button>
                  <button onClick={() => setRuneCounts(Object.fromEntries(Object.keys(runeCounts).map((id) => [id, 0])))}>重置</button>
                  <b>{Object.values(runeCounts).reduce((sum, count) => sum + count, 0)} / 30</b>
                </div>
              </div>

              <div className="rune-workspace">
                <div className="rune-board-wrap">
                  <div className="rune-board" style={{ backgroundImage: `url(${runeBoardBackground})` }}>
                    {runeSlotPositions.map(([left, top, width, height], index) => {
                      const assignment = runeAssignments[index];
                      const rune = assignment
                        ? classicRuneGroups.flatMap((group) => group.runes).find((entry) => entry.id === assignment.runeId)
                        : null;
                      const group = index < 9 ? classicRuneGroups[0] : index < 18 ? classicRuneGroups[1] : index < 27 ? classicRuneGroups[2] : classicRuneGroups[3];
                      return (
                        <button
                          key={index}
                          className={`rune-slot ${rune ? "filled" : ""}`}
                          style={{
                            left: `${left / 716 * 100}%`,
                            top: `${top / 475.878 * 100}%`,
                            width: `${width / 716 * 100}%`,
                            height: `${height / 475.878 * 100}%`,
                            "--slot-color": group.color,
                          } as React.CSSProperties}
                          onClick={() => setActiveRuneGroup(group.id)}
                          aria-label={`${index + 1}号${group.name}槽位${rune ? `：${rune.name}` : "：空"}`}
                        >
                          {rune ? <img src={rune.icon} alt="" /> : <span>＋</span>}
                        </button>
                      );
                    })}
                  </div>
                  <div className="rune-board-legend">
                    {classicRuneGroups.map((group) => <button key={group.id} className={activeRuneGroup === group.id ? "active" : ""} onClick={() => setActiveRuneGroup(group.id)} style={{ "--group-color": group.color } as React.CSSProperties}><i />{group.name}<b>{groupUsed(runeCounts, group)}/{group.cap}</b></button>)}
                  </div>
                </div>

                <div className="rune-selector">
                  <div className="selector-tabs">
                    {classicRuneGroups.map((group) => <button key={group.id} className={activeRuneGroup === group.id ? "active" : ""} onClick={() => setActiveRuneGroup(group.id)}>{group.name}<b>{group.runes.length}</b></button>)}
                  </div>
                  <div className="rune-catalog">
                    {selectedRuneGroup.runes.map((rune) => {
                      const count = runeCounts[rune.id] || 0;
                      const used = groupUsed(runeCounts, selectedRuneGroup);
                      return (
                        <article className={count ? "rune-card active" : "rune-card"} key={rune.id}>
                          <button className="rune-main" onClick={() => fillRune(selectedRuneGroup, rune.id)}>
                            <img src={rune.icon} alt="" />
                            <span><strong>{rune.name}</strong><small>{rune.value}</small></span>
                          </button>
                          <div className="rune-stepper">
                            <button onClick={() => adjustRune(selectedRuneGroup, rune.id, -1)} disabled={!count}>−</button>
                            <b>{count}</b>
                            <button onClick={() => adjustRune(selectedRuneGroup, rune.id, 1)} disabled={used >= selectedRuneGroup.cap}>＋</button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  <p className="selector-hint">点击符文名称可填满当前类别；也可用 ＋/− 混搭。成长属性按 18 级汇总。</p>
                </div>
              </div>

              <div className="summary-panel">
                <div className="summary-title"><h3>属性总计</h3><span>{Object.keys(runeTotals).length} 项属性 · 18 级口径</span></div>
                <div className="stat-grid">
                  {Object.entries(runeTotals).length ? Object.entries(runeTotals).map(([stat, value]) => (
                    <div key={stat}><span>{stat}</span><strong>+{normalizeNumber(value)}{percentStats.has(stat) ? "%" : ""}</strong></div>
                  )) : <p className="empty-message">尚未放入符文。</p>}
                </div>
                <div className="rune-recap">
                  {classicRuneGroups.flatMap((group) => group.runes.filter((rune) => runeCounts[rune.id]).map((rune) => (
                    <span key={rune.id} style={{ "--recap-color": group.color } as React.CSSProperties}><img src={rune.icon} alt="" />{rune.name}<b>×{runeCounts[rune.id]}</b></span>
                  )))}
                </div>
              </div>
            </section>
          )}

          {view === "masteries" && (
            <section className="simulator-page">
              <div className="simulator-heading">
                <div><span>02</span><div><h2>经典天赋模拟器</h2><p>三棵完整天赋树；每投入 4 点解锁下一行，总计最多 30 点。</p></div></div>
                <div className="simulator-actions mastery-presets">
                  {Object.keys(masteryPresets).map((preset) => <button key={preset} onClick={() => setMasteryRanks({ ...masteryPresets[preset] })}>{preset}</button>)}
                  <button onClick={() => setMasteryRanks({})}>重置</button>
                  <b>{totalMasteries} / 30</b>
                </div>
              </div>

              <div className="mastery-workspace">
                {(["进攻", "防御", "通用"] as const).map((tree) => (
                  <section className={`mastery-tree mastery-${tree}`} key={tree}>
                    <header><span>{tree}</span><b>{treeTotal(masteryRanks, tree)} 点</b></header>
                    <div className="mastery-canvas" style={{ backgroundImage: `linear-gradient(rgba(5,8,12,.18), rgba(5,8,12,.5)), url(${masteryBackgrounds[tree]})` }}>
                      {[1, 2, 3, 4, 5, 6].map((tier) => <span className="tier-rule" key={tier} style={{ gridRow: tier }}>{tier === 1 ? "起始" : `${(tier - 1) * 4}点`}</span>)}
                      {classicMasteries.filter((mastery) => mastery.tree === tree).map((mastery) => {
                        const rank = masteryRanks[mastery.id] || 0;
                        const unlocked = masteryUnlocked(masteryRanks, mastery);
                        return (
                          <article
                            className={`mastery-node tier-${mastery.tier} column-${mastery.column} ${rank ? "active" : ""} ${unlocked ? "" : "locked"}`}
                            key={mastery.id}
                            style={{ gridColumn: mastery.column + 1, gridRow: mastery.tier }}
                            title={`${mastery.name}：${mastery.description}`}
                          >
                            <button className="mastery-icon" onClick={() => adjustMastery(mastery, 1)} disabled={!unlocked && !rank}>
                              <img src={mastery.icon.replace("_on.png", rank ? "_on.png" : "_off.png")} alt="" />
                              <b>{rank}/{mastery.max}</b>
                            </button>
                            <div className="mastery-controls">
                              <button onClick={() => adjustMastery(mastery, -1)} disabled={!rank}>−</button>
                              <button onClick={() => adjustMastery(mastery, 1)} disabled={!unlocked || rank >= mastery.max || totalMasteries >= 30}>＋</button>
                            </div>
                            <span className="mastery-tooltip"><strong>{mastery.name}</strong><small>{mastery.description}</small></span>
                          </article>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
              <div className="mastery-summary">
                <div><span>进攻</span><strong>{treeTotal(masteryRanks, "进攻")}</strong></div>
                <div><span>防御</span><strong>{treeTotal(masteryRanks, "防御")}</strong></div>
                <div><span>通用</span><strong>{treeTotal(masteryRanks, "通用")}</strong></div>
                <p>{totalMasteries === 30 ? "天赋页已完成，可复制链接分享。" : `还可分配 ${30 - totalMasteries} 点。`}</p>
              </div>
            </section>
          )}

          {view === "build" && (
            <section className="simulator-page build-page">
              <div className="simulator-heading">
                <div><span>03</span><div><h2>技能、召唤师技能与经典出装</h2><p>完整 18 级技能表、16 个召唤师技能和 152 件 Classic 装备。</p></div></div>
                <div className="simulator-actions"><b>{selectedChampion.name} · 主 {selectedChampion.spellOrder[0]} 副 {selectedChampion.spellOrder[1]}</b></div>
              </div>

              <section className="build-section skill-section">
                <div className="subsection-title"><div><h3>技能加点</h3><p>系统会校验终极技能等级和普通技能等级上限。</p></div><span>18 / 18 级</span></div>
                <div className="skill-table">
                  <div className="level-row"><b>等级</b>{Array.from({ length: 18 }, (_, index) => <span key={index}>{index + 1}</span>)}</div>
                  {(["Q", "W", "E", "R"] as const).map((skill) => (
                    <div className={`skill-row skill-${skill.toLowerCase()}`} key={skill}>
                      <b>{skill}</b>
                      {skillPlan.map((selected, index) => <button key={index} className={selected === skill ? "selected" : ""} onClick={() => changeSkill(index, skill)} aria-label={`${index + 1}级选择${skill}`}>{selected === skill ? "●" : ""}</button>)}
                    </div>
                  ))}
                </div>
              </section>

              <section className="build-section">
                <div className="subsection-title"><div><h3>召唤师技能</h3><p>OP.GG Classic 完整目录；点击选择两个技能。</p></div><span>{selectedSpells.length} / 2</span></div>
                <div className="spell-grid">
                  {classicSpells.map((spell) => (
                    <button className={selectedSpells.includes(spell.id) ? "spell-card active" : "spell-card"} key={spell.id} onClick={() => toggleSpell(spell.id)} aria-pressed={selectedSpells.includes(spell.id)}>
                      <img src={spell.icon} alt="" />
                      <span><strong>{spell.name}</strong><small>冷却 {spell.cooldown} 秒</small><em>{spell.description}</em></span>
                      {selectedSpells.includes(spell.id) && <i>✓</i>}
                    </button>
                  ))}
                </div>
              </section>

              <section className="build-section item-section">
                <div className="subsection-title"><div><h3>核心出装</h3><p>先选择上方槽位，再从 Classic 目录替换；152 条源目录记录中已隐藏 2 个内部符文占位项。</p></div><span>150 件可选</span></div>
                <div className="build-slots">
                  {items.map((id, index) => {
                    const item = itemById.get(id);
                    return (
                      <button className={activeItemSlot === index ? "item-slot active" : "item-slot"} key={`${id}-${index}`} onClick={() => { setActiveItemSlot(index); setInspectedItem(id); }}>
                        <span>{index + 1}</span>
                        {item ? <img src={item.icon} alt="" /> : <div className="empty-item">＋</div>}
                        <strong>{item?.name || "空装备槽"}</strong>
                        <small>{item ? `${item.price} 金币` : "点击后选择装备"}</small>
                      </button>
                    );
                  })}
                </div>
                <div className="item-browser">
                  <div className="item-toolbar">
                    <div className="item-categories">
                      {classicItemCategories.map((category) => <button key={category} className={itemCategory === category ? "active" : ""} onClick={() => setItemCategory(category)}>{category}</button>)}
                    </div>
                    <label><span>⌕</span><input value={itemSearch} onChange={(event) => setItemSearch(event.target.value)} placeholder="搜索装备、属性或被动" /></label>
                  </div>
                  <div className="item-grid">
                    {displayedItems.map((item) => (
                      <button key={item.id} className={items.includes(item.id) ? "item-card equipped" : "item-card"} onMouseEnter={() => setInspectedItem(item.id)} onFocus={() => setInspectedItem(item.id)} onClick={() => {
                        setItems((current) => current.map((entry, index) => index === activeItemSlot ? item.id : entry));
                        setInspectedItem(item.id);
                      }}>
                        <img src={item.icon} alt="" />
                        <span><strong>{item.name}</strong><small>{item.price} 金币</small></span>
                        {items.includes(item.id) && <i>已装备</i>}
                      </button>
                    ))}
                  </div>
                  <aside className="item-detail">
                    {inspectedItemData ? <>
                      <img src={inspectedItemData.icon} alt="" />
                      <div><span>{inspectedItemData.category}</span><h4>{inspectedItemData.name}</h4><b>{inspectedItemData.price} 金币</b><p>{inspectedItemData.description}</p></div>
                    </> : <p>将鼠标移到装备上查看完整属性。</p>}
                  </aside>
                </div>
              </section>
            </section>
          )}

          {view === "ai" && (
            <section className="simulator-page ai-page">
              <div className="simulator-heading">
                <div><span>04</span><div><h2>AI 构筑助手</h2><p>当前检查版使用已核验的 Classic 目录与本地规则生成草案；联网检索后端将在下一阶段接入。</p></div></div>
                <div className="simulator-actions"><b className="honesty-badge">数据目录已核验 · 建议逻辑为演示</b></div>
              </div>
              <div className="ai-composer">
                <div className="ai-orb">✦</div>
                <div className="ai-copy">
                  <span>RIFT INTELLIGENCE</span>
                  <h3>为 {selectedChampion.name} 生成经典构筑草案</h3>
                  <p>会统一写入符文、30 点天赋、召唤师技能、18 级加点和六格 Classic 出装，不会混入正式服装备。</p>
                  <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} aria-label="AI 构筑偏好" />
                  <div className="prompt-chips">
                    {["对线压制", "稳健防御", "团战优先", "新手友好"].map((chip) => <button key={chip} onClick={() => setPrompt(`${chip}；只使用 OP.GG Classic 16.15 目录。`)}>＋ {chip}</button>)}
                  </div>
                  <button className="generate-button" onClick={generateBuild} disabled={aiState === "working"}>{aiState === "working" ? "正在组合经典数据…" : aiState === "ready" ? "重新生成方案" : "生成完整方案"}<span>→</span></button>
                </div>
                <aside className={`ai-status ${aiState}`}>
                  <h4>生成清单</h4>
                  {["英雄与位置", "50 个符文目录", "56 节点天赋树", "16 个召唤师技能", "152 件经典装备"].map((label, index) => <div key={label}><i>{aiState === "ready" || (aiState === "working" && index < 3) ? "✓" : "○"}</i><span>{label}</span></div>)}
                  <p>{aiState === "ready" ? "草案已写入，可到各模拟器继续手动微调。" : "生成过程只使用已载入的 Classic 数据快照。"}</p>
                </aside>
              </div>
              <div className="source-strip">
                <a href="https://op.gg/zh-cn/lol/classic/runes" target="_blank" rel="noreferrer"><b>OP</b><span>经典符文模拟器<small>50 个符文 · 9/9/9/3</small></span></a>
                <a href="https://op.gg/zh-cn/lol/classic/masteries" target="_blank" rel="noreferrer"><b>OP</b><span>经典天赋模拟器<small>56 个节点 · 30 点</small></span></a>
                <a href="https://op.gg/zh-cn/lol/classic/items" target="_blank" rel="noreferrer"><b>OP</b><span>经典装备目录<small>152 件 · 6 个分类</small></span></a>
              </div>
            </section>
          )}

          <footer className="site-footer">
            <span>RIFT//LAB 是非官方玩家工具，与 Riot Games 或 OP.GG 无隶属关系。</span>
            <span>数据快照：OP.GG Classic {CLASSIC_PATCH} · 无需账号即可使用与保存</span>
          </footer>
        </section>
      </div>
      {toast && <div className="toast" role="status" aria-live="polite"><span>✓</span>{toast}</div>}
    </main>
  );
}
