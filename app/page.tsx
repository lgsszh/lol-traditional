"use client";

import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChampionAbilityPanel from "./components/ChampionAbilityPanel";
import ItemDetailPanel from "./components/ItemDetailPanel";

// 帮助抽屉与新手指引只在打开时才需要，懒加载让它们不占首屏体积。
const HelpDrawer = lazy(() => import("./components/HelpDrawer"));
const OnboardingGuide = lazy(() => import("./components/OnboardingGuide"));
import {
  championMatchesFilters,
  laneFilterOptions,
  type LaneFilterId,
} from "./champion-search";
import {
  CLASSIC_PATCH,
  championIcon,
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
import { classicItemRecipes } from "./classic-item-recipes.generated";
import { localAssetUrl } from "./classic-assets";
import {
  classicBuildGuides,
  classicGuideSources,
  type ClassicBuildVariant,
} from "./classic-build-guides";
import {
  classicSkillsByChampion,
  type ClassicAbilityKey,
  type ClassicChampionSkillSet,
} from "./classic-skills.generated";

type WorkbenchView = "runes" | "masteries" | "build" | "ai";
type RuneCounts = Record<string, number>;
type MasteryRanks = Record<string, number>;
type AiProfileId = "balanced" | "aggressive" | "defensive" | "teamfight";
type AiRecommendation = {
  profile: AiProfileId;
  guideId: string;
  title: string;
  rationale: string;
  runeSummary: string;
  masteryPreset: string;
  spellIds: [string, string];
  skillOrder: ClassicChampion["spellOrder"];
  startingItems: ClassicBuildVariant["startingItems"];
  recallPlan: ClassicBuildVariant["recallPlan"];
  coreItems: string[];
  alternatives: string[];
};

const GUIDE_STORAGE_KEY = "rift-lab-classic-onboarding-v1";

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
const mainItemPool = classicItems;
const craftableItemCount = Object.values(classicItemRecipes).filter((recipe) => recipe.from.length > 0).length;
const selectableItemIds = new Set(mainItemPool.map((item) => item.id));
const spellIds = new Set(classicSpells.map((spell) => spell.id));
const itemStatFilters = [
  ["all", "全部属性"],
  ["damage", "攻击力"],
  ["critical-strike", "暴击"],
  ["attack-speed", "攻击速度"],
  ["on-hit", "攻击特效"],
  ["armor-penetration", "护甲穿透"],
  ["spell-damage", "法术强度"],
  ["mana", "法力"],
  ["magic-penetration", "法术穿透"],
  ["health", "生命值"],
  ["armor", "护甲"],
  ["magic-resistance", "魔法抗性"],
  ["cooldown-reduction", "冷却缩减"],
  ["movement", "移动速度"],
  ["life-steal", "生命偷取"],
] as const;
type ItemStatFilterId = (typeof itemStatFilters)[number][0];
const itemCategoryCounts = Object.fromEntries([
  ["全部", mainItemPool.length],
  ...classicItemCategories.filter((category) => category !== "全部")
    .map((category) => [category, mainItemPool.filter((item) => item.category === category).length]),
]);
const itemStatCounts = Object.fromEntries(itemStatFilters.map(([id]) => [
  id,
  id === "all" ? mainItemPool.length : mainItemPool.filter((item) => item.tags.includes(id)).length,
]));
const aiProfiles: ReadonlyArray<{ id: AiProfileId; label: string; detail: string }> = [
  { id: "balanced", label: "主流完整方案", detail: "优先英雄经典主定位和稳定成型路线" },
  { id: "aggressive", label: "雪球／爆发", detail: "匹配暴击、穿甲、AP 爆发等进攻流派" },
  { id: "defensive", label: "续航／抗压", detail: "匹配水晶瓶、回复、抗性与容错路线" },
  { id: "teamfight", label: "团战／功能", detail: "匹配控制、保护、开团与团队装备路线" },
];
const archetypeItemTags: Record<ClassicChampion["archetype"], string[]> = {
  mage: ["spell-damage", "magic-penetration", "mana"],
  fighter: ["damage", "health", "life-steal"],
  jungler: ["damage", "attack-speed", "health"],
  marksman: ["damage", "critical-strike", "attack-speed"],
  tank: ["health", "armor", "magic-resistance"],
  support: ["cooldown-reduction", "mana", "health"],
};

function championSkillSet(champion: ClassicChampion) {
  return classicSkillsByChampion.get(champion.classicId);
}

function championPortrait(champion: ClassicChampion) {
  return localAssetUrl(championSkillSet(champion)?.portrait || championIcon(champion));
}

function championHeroArt(champion: ClassicChampion, artworkId?: string) {
  const skillSet = championSkillSet(champion);
  const artwork = skillSet?.artworks.find((entry) => entry.id === artworkId) || skillSet?.artworks[0];
  return localAssetUrl(artwork?.imageUrl || skillSet?.classicSplash || championPortrait(champion));
}

const championAssetCache = new Map<string, Promise<void>>();

function preloadImage(src: string) {
  if (typeof window === "undefined") return Promise.resolve();
  src = localAssetUrl(src);
  const cached = championAssetCache.get(src);
  if (cached) return cached;
  const pending = new Promise<void>((resolve) => {
    const image = new window.Image();
    image.decoding = "async";
    image.onload = () => resolve();
    image.onerror = () => {
      championAssetCache.delete(src);
      resolve();
    };
    image.src = src;
  });
  championAssetCache.set(src, pending);
  return pending;
}

function preloadChampionAssets(champion: ClassicChampion) {
  const skillSet = championSkillSet(champion);
  const skillIcons = skillSet?.abilities.map((ability) => ability.icon) || [];
  const artworkSources = skillSet?.artworks.map((artwork) => artwork.imageUrl) || [];
  return Promise.all([
    preloadImage(championPortrait(champion)),
    ...artworkSources.map(preloadImage),
    ...skillIcons.map(preloadImage),
  ]);
}

function preloadWorkbenchAssets(view: WorkbenchView) {
  const sources = view === "runes"
    ? [runeBoardBackground, ...classicRuneGroups.flatMap((group) => group.runes.map((rune) => rune.icon))]
    : view === "masteries"
      ? [...Object.values(masteryBackgrounds), ...classicMasteries.map((mastery) => mastery.icon)]
      : view === "build"
        ? [...classicSpells.map((spell) => spell.icon), ...mainItemPool.map((item) => item.icon)]
        : [];
  return Promise.all([...new Set(sources)].map(preloadImage));
}

function ChampionHeroImage({
  champion,
  artwork,
}: {
  champion: ClassicChampion;
  artwork: ClassicChampionSkillSet["artworks"][number] | undefined;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const source = championHeroArt(champion, artwork?.id);
  const recognizeCachedImage = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete && image.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={`hero-media ${loaded ? "loaded" : "loading"} ${failed ? "failed" : ""}`}>
      <img
        className="hero-preview"
        src={championPortrait(champion)}
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero-splash"
        ref={recognizeCachedImage}
        src={failed ? championPortrait(champion) : source}
        alt={`${champion.name}${artwork?.name || "经典"}原画`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!failed) {
            setFailed(true);
            setLoaded(false);
          }
        }}
      />
      {!loaded && <span className="hero-image-status" role="status">正在载入 {champion.name} 原画</span>}
    </div>
  );
}

const normalizeGuideQuery = (value: string) =>
  value.normalize("NFKC").toLocaleLowerCase().replace(/[\s·\-_/／]+/g, "");

// 搜索词命中某英雄的玩法名／流派／标签时返回该玩法（如“韩式”→薇恩韩式破败）。
function guideMatchFor(champion: ClassicChampion, rawQuery: string) {
  const query = normalizeGuideQuery(rawQuery.trim());
  if (query.length < 2) return undefined;
  return classicBuildGuides[champion.classicId].find((guide) =>
    normalizeGuideQuery(`${guide.name} ${guide.style} ${guide.tags.join(" ")}`).includes(query));
}

function runeCountsFromIds(preset: Record<ClassicRuneGroup["id"], string>): RuneCounts {
  const counts: RuneCounts = {};
  classicRuneGroups.forEach((group) => {
    group.runes.forEach((rune) => { counts[rune.id] = 0; });
    counts[preset[group.id]] = group.cap;
  });
  return counts;
}

function createRunePreset(champion: ClassicChampion): RuneCounts {
  return runeCountsFromIds(runePresetIds[champion.archetype]);
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
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
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
  const [selectedArtworkId, setSelectedArtworkId] = useState(
    classicSkillsByChampion.get(classicChampions[0].classicId)?.artworks[0]?.id || "",
  );
  const [selectedGuideId, setSelectedGuideId] = useState(
    classicBuildGuides[classicChampions[0].classicId][0].id,
  );
  const [guideLaneFilter, setGuideLaneFilter] = useState<"全部" | ClassicChampion["lane"]>("全部");
  const [search, setSearch] = useState("");
  const [laneFilter, setLaneFilter] = useState<LaneFilterId>("全部");
  const [runeCounts, setRuneCounts] = useState<RuneCounts>(() => createRunePreset(classicChampions[0]));
  const [activeRuneGroup, setActiveRuneGroup] = useState<ClassicRuneGroup["id"]>("mark");
  const [masteryRanks, setMasteryRanks] = useState<MasteryRanks>({ ...initialMasteryRanks });
  const [selectedSpells, setSelectedSpells] = useState<string[]>(defaultSpellsFor(classicChampions[0]));
  const [items, setItems] = useState<string[]>(classicBuildPresets[classicChampions[0].archetype]);
  const [activeItemSlot, setActiveItemSlot] = useState(0);
  const [itemCategory, setItemCategory] = useState<(typeof classicItemCategories)[number]>("全部");
  const [itemStatFilter, setItemStatFilter] = useState<ItemStatFilterId>("all");
  const [itemSearch, setItemSearch] = useState("");
  const [inspectedItem, setInspectedItem] = useState(classicBuildPresets[classicChampions[0].archetype][0]);
  const [inspectedAbility, setInspectedAbility] = useState<ClassicAbilityKey>("Q");
  const [skillPlan, setSkillPlan] = useState<string[]>(skillPlanFor(classicChampions[0].spellOrder));
  const [prompt, setPrompt] = useState("对线稳定，使用完整经典符文与 30 点天赋；给出两件备选装备。");
  const [aiState, setAiState] = useState<"idle" | "working" | "ready">("idle");
  const [aiProfile, setAiProfile] = useState<AiProfileId>("balanced");
  const [aiRecommendation, setAiRecommendation] = useState<AiRecommendation | null>(null);
  const [toast, setToast] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [guideStep, setGuideStep] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [sharedBuildLoaded, setSharedBuildLoaded] = useState(false);
  const championSearchRef = useRef<HTMLInputElement>(null);
  const aiRequestId = useRef(0);
  const toastTimer = useRef(0);
  const changeView = useCallback((nextView: WorkbenchView) => {
    void preloadWorkbenchAssets(nextView);
    setView(nextView);
  }, []);

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

  const filteredChampions = useMemo(
    () => classicChampions.filter((champion) =>
      championMatchesFilters(champion, laneFilter, search) || Boolean(guideMatchFor(champion, search))),
    [laneFilter, search],
  );

  const displayedItems = useMemo(() => mainItemPool.filter((item) => {
    const query = itemSearch.trim();
    const categoryMatches = itemCategory === "全部" || item.category === itemCategory;
    const statMatches = itemStatFilter === "all" || item.tags.includes(itemStatFilter);
    return categoryMatches && statMatches
      && (!query || `${item.name}${item.description}${item.tags.join("")}`.toLowerCase().includes(query.toLowerCase()));
  }), [itemCategory, itemSearch, itemStatFilter]);

  const selectedRuneGroup = classicRuneGroups.find((group) => group.id === activeRuneGroup) || classicRuneGroups[0];
  const inspectedItemData = itemById.get(inspectedItem);
  const selectedSkillSet = classicSkillsByChampion.get(selectedChampion.classicId);
  const selectedArtworks = selectedSkillSet?.artworks || [];
  const selectedArtwork = selectedArtworks.find((artwork) => artwork.id === selectedArtworkId)
    || selectedArtworks[0];
  const selectedGuides = classicBuildGuides[selectedChampion.classicId];
  const selectedGuide = selectedGuides.find((guide) => guide.id === selectedGuideId) || selectedGuides[0];
  const guideLanes: Array<"全部" | ClassicChampion["lane"]> = ["全部", ...new Set(selectedGuides.map((guide) => guide.lane))];
  const visibleGuides = guideLaneFilter === "全部"
    ? selectedGuides
    : selectedGuides.filter((guide) => guide.lane === guideLaneFilter);

  const showToast = (message: string) => {
    window.clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = window.setTimeout(() => setToast(""), 2600);
  };

  useEffect(() => {
    try {
      const hash = window.location.hash.match(/build=([^&]+)/)?.[1];
      const hasSharedBuild = Boolean(hash);
      const championHash = window.location.hash.match(/champion=([a-z0-9-]+)/i)?.[1]?.toLowerCase();
      const linkedChampion = !hash && championHash
        ? classicChampions.find((entry) => entry.key.toLowerCase() === championHash || entry.classicId === championHash)
        : undefined;
      if (linkedChampion) {
        // 英雄直达链接：#champion=ezreal 直接打开该英雄的技能与出装页。
        const recommendedItems = classicBuildPresets[linkedChampion.archetype];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedChampion(linkedChampion);
        setSelectedArtworkId(classicSkillsByChampion.get(linkedChampion.classicId)?.artworks[0]?.id || "");
        setSelectedGuideId(classicBuildGuides[linkedChampion.classicId][0].id);
        setRuneCounts(createRunePreset(linkedChampion));
        setMasteryRanks({ ...initialMasteryRanks });
        setSelectedSpells(defaultSpellsFor(linkedChampion));
        setItems(recommendedItems);
        setInspectedItem(recommendedItems[0]);
        setSkillPlan(skillPlanFor(linkedChampion.spellOrder));
        setView("build");
      }
      const saved = linkedChampion ? null
        : hash ? decodeBuildState(hash) : JSON.parse(localStorage.getItem("rift-lab-classic-build") || "null");
      if (saved) {
        const record = asRecord(saved);
        const champion = classicChampions.find((entry) => entry.classicId === record.championId) || classicChampions[0];
        const fallbackItems = classicBuildPresets[champion.archetype];
        const safeItems = Array.isArray(record.items)
          ? record.items.filter((id): id is string => typeof id === "string" && selectableItemIds.has(id)).slice(0, 6)
          : [];
        while (safeItems.length < 6) safeItems.push(fallbackItems[safeItems.length]);

        // Restoring browser-persisted state is intentionally performed after hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedChampion(champion);
        setSelectedArtworkId(classicSkillsByChampion.get(champion.classicId)?.artworks[0]?.id || "");
        setSelectedGuideId(classicBuildGuides[champion.classicId][0].id);
        setRuneCounts(record.runeCounts ? sanitizeRuneCounts(record.runeCounts) : createRunePreset(champion));
        setMasteryRanks(record.masteryRanks ? sanitizeMasteryRanks(record.masteryRanks) : { ...initialMasteryRanks });
        setSelectedSpells(Array.isArray(record.spells)
          ? [...new Set(record.spells.filter((id): id is string => typeof id === "string" && spellIds.has(id)))].slice(0, 2)
          : defaultSpellsFor(champion));
        setItems(safeItems);
        setInspectedItem(safeItems[0]);
        setSkillPlan(isValidSkillPlan(record.skillPlan) ? record.skillPlan : skillPlanFor(champion.spellOrder));
      }
      setSharedBuildLoaded(hasSharedBuild);
      if (!hasSharedBuild && !linkedChampion && !localStorage.getItem(GUIDE_STORAGE_KEY)) setGuideOpen(true);
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

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditing = target?.matches("input, textarea, select, [contenteditable='true']");
      if (isEditing) return;

      if (event.key === "?") {
        event.preventDefault();
        setHelpOpen(true);
        return;
      }
      if (event.key === "/") {
        event.preventDefault();
        championSearchRef.current?.focus();
        return;
      }
      if (event.altKey && ["1", "2", "3", "4"].includes(event.key)) {
        event.preventDefault();
        const views: WorkbenchView[] = ["runes", "masteries", "build", "ai"];
        changeView(views[Number(event.key) - 1]);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [changeView]);

  const saveGuideState = useCallback((completed: boolean) => {
    try {
      localStorage.setItem(GUIDE_STORAGE_KEY, JSON.stringify({
        version: 1,
        completed,
        dismissed: !completed,
        lastStep: guideStep,
        updatedAt: new Date().toISOString(),
      }));
    } catch {
      // Private browsing may block localStorage; the guide still remains usable.
    }
  }, [guideStep]);

  const dismissGuide = useCallback(() => {
    saveGuideState(false);
    setGuideOpen(false);
  }, [saveGuideState]);

  const completeGuide = useCallback(() => {
    saveGuideState(true);
    setGuideOpen(false);
    setGuideStep(0);
    changeView("runes");
  }, [changeView, saveGuideState]);

  const replayGuide = useCallback(() => {
    setHelpOpen(false);
    setGuideStep(0);
    setGuideOpen(true);
  }, []);

  const chooseChampion = (champion: ClassicChampion) => {
    if (champion.classicId === selectedChampion.classicId) return;
    aiRequestId.current += 1;
    void preloadChampionAssets(champion);

    // React batches this complete selection into one commit, so the hero name,
    // ability icons and build state can never represent different champions.
    const recommendedItems = classicBuildPresets[champion.archetype];
    const matchedGuide = guideMatchFor(champion, search);
    setSelectedChampion(champion);
    setSelectedArtworkId(classicSkillsByChampion.get(champion.classicId)?.artworks[0]?.id || "");
    setSelectedGuideId((matchedGuide || classicBuildGuides[champion.classicId][0]).id);
    setGuideLaneFilter("全部");
    window.history.replaceState(null, "", `#champion=${champion.key.toLowerCase()}`);
    setRuneCounts(createRunePreset(champion));
    setMasteryRanks({ ...initialMasteryRanks });
    setSelectedSpells(defaultSpellsFor(champion));
    setItems(recommendedItems);
    setInspectedItem(recommendedItems[0]);
    setInspectedAbility("Q");
    setSkillPlan(skillPlanFor(champion.spellOrder));
    setAiState("idle");
    setAiRecommendation(null);
  };

  useEffect(() => {
    let cancelled = false;
    let timer = 0;
    let cursor = 0;
    const queue = classicChampions;
    const preloadNextPair = async () => {
      if (cancelled || cursor >= queue.length) return;
      const batch = queue.slice(cursor, cursor + 2);
      cursor += batch.length;
      await Promise.all(batch.map((entry) => preloadImage(championPortrait(entry))));
      if (!cancelled) timer = window.setTimeout(preloadNextPair, 120);
    };
    timer = window.setTimeout(preloadNextPair, 700);
    const workbenchTimer = window.setTimeout(() => {
      void preloadWorkbenchAssets("runes");
      void preloadWorkbenchAssets("masteries");
      void preloadWorkbenchAssets("build");
    }, 900);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.clearTimeout(workbenchTimer);
    };
  }, []);

  const restoreRecommended = () => {
    const recommendedItems = classicBuildPresets[selectedChampion.archetype];
    setRuneCounts(createRunePreset(selectedChampion));
    setMasteryRanks({ ...initialMasteryRanks });
    setSelectedSpells(defaultSpellsFor(selectedChampion));
    setItems(recommendedItems);
    setInspectedItem(recommendedItems[0]);
    setInspectedAbility("Q");
    setSkillPlan(skillPlanFor(selectedChampion.spellOrder));
    setActiveItemSlot(0);
    setAiState("idle");
    setAiRecommendation(null);
    showToast("已恢复当前英雄的完整推荐方案");
  };

  const applyClassicGuide = (guide: ClassicBuildVariant) => {
    setSelectedGuideId(guide.id);
    setRuneCounts(runeCountsFromIds(guide.runePreset));
    setMasteryRanks({ ...masteryPresets[guide.masteryPreset] });
    setSelectedSpells([...guide.spellIds]);
    setItems([...guide.coreItems]);
    setInspectedItem(guide.coreItems[0]);
    setInspectedAbility("Q");
    setSkillPlan(skillPlanFor(guide.skillOrder));
    setActiveItemSlot(0);
    setAiState("idle");
    setAiRecommendation(null);
    showToast(`已应用「${guide.name}」：符文、天赋、召唤师技能、加点与出装已同步`);
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
    setInspectedAbility(skill as ClassicAbilityKey);
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

  const equipInspectedItem = (itemId: string) => {
    setItems((current) => current.map((entry, index) => index === activeItemSlot ? itemId : entry));
    setInspectedItem(itemId);
    showToast(`${itemById.get(itemId)?.name || "装备"}已放入第 ${activeItemSlot + 1} 格`);
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
    try {
      if (!navigator.clipboard) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(url);
      showToast("无需登录的构筑链接已复制");
    } catch {
      showToast("链接已写入地址栏，请手动复制");
    }
  };

  const generateBuild = () => {
    const requestId = ++aiRequestId.current;
    const champion = selectedChampion;
    setAiState("working");
    window.setTimeout(() => {
      if (requestId !== aiRequestId.current) return;
      const championGuides = classicBuildGuides[champion.classicId];
      const normalizedPrompt = `${prompt} ${aiProfiles.find((entry) => entry.id === aiProfile)?.detail || ""}`.toLowerCase();
      const profileKeywords: Record<AiProfileId, string[]> = {
        balanced: ["标准", "主流", champion.lane, champion.role],
        aggressive: ["爆发", "暴击", "穿甲", "压制", "收割", "ap", "ad"],
        defensive: ["续航", "抗压", "稳健", "水晶瓶", "防御", "新手"],
        teamfight: ["团战", "控制", "保护", "开团", "功能", "辅助"],
      };
      const keywordAliases: Array<[RegExp, string[]]> = [
        [/暴击|无尽|电刃|红叉/, ["暴击", "无尽", "电刃", "幻影之舞"]],
        [/攻速|特效|破败/, ["攻速", "特效", "破败"]],
        [/蓝\s*ez|blue\s*ez|冰拳|冰脉|魔宗/, ["蓝ez", "blue ezreal", "冰脉护手", "魔宗", "q消耗"]],
        [/韩式|破败薇恩|主\s*w/, ["韩式薇恩", "破败", "主w", "攻速"]],
        [/传统薇恩|饮血薇恩|主\s*q/, ["传统薇恩", "饮血剑", "主q", "高攻击"]],
        [/ad\s*豹女|上单豹女|三相豹女/, ["ad豹女", "上单豹女", "三相", "分带"]],
        [/攻速提莫|特效提莫|on.?hit/, ["攻速提莫", "特效提莫", "腐蚀之刃", "智慧末刃"]],
        [/代理|断线|proxy/, ["代理炼金", "断线", "proxy", "疾跑", "传送"]],
        [/法强|法师|ap/, ["ap", "法强", "爆发"]],
        [/水晶瓶|蓝药|续航|抗压/, ["水晶瓶", "蓝药", "续航", "抗压"]],
        [/打野|刷野|惩戒/, ["打野", "刷野"]],
        [/上单|上路/, ["上路", "上单"]],
        [/中单|中路/, ["中路", "中单"]],
        [/下路|adc|射手|双人路/, ["下路", "射手", "标准"]],
        [/辅助|保护|团队|保排|peel/, ["辅助", "保护", "团队", "保排"]],
        [/冥火|dfg|秒\s*c|点名/, ["冥火", "爆发", "秒C"]],
        [/魔像|golem/, ["魔像", "半肉", "打野"]],
        [/瑞格|麦瑞德|剃刀|wriggle/, ["瑞格之灯", "打野", "半肉"]],
        [/舒瑞娅|shurelya/, ["舒瑞娅", "游走", "视野"]],
        [/工资|gp10|金币/, ["工资", "金币", "视野"]],
        [/眼石|插眼|视野/, ["眼石", "视野"]],
        [/时光|roa|催化/, ["时光", "坦度", "续航"]],
        [/魔切|魔宗|大天使|女神泪|蓝量/, ["魔宗", "大天使", "女神泪", "蓝量"]],
        [/电刃|静电|shiv/, ["电刃", "暴击", "清线"]],
        [/分推|分带|单带|单挑|split/, ["分推", "分带", "单挑"]],
        [/三相|trinity/, ["三相"]],
        [/黑切|破甲|轻语/, ["黑切", "破甲", "轻语"]],
        [/巫妖|lich|混伤/, ["巫妖", "混合", "特效"]],
        [/半肉|出肉|坦克|坦度/, ["半肉", "坦克", "抗压"]],
        [/风筝|poke|消耗/, ["消耗", "风筝", "poke"]],
        [/开团|先手|engage/, ["开团", "先手", "控制"]],
        [/蘑菇|种菇/, ["蘑菇", "控图"]],
        [/炮台|守塔|守线/, ["炮台", "守线", "推进"]],
        [/光环|aura/, ["光环", "团队"]],
        [/双蓝|回蓝|耗蓝/, ["双蓝", "续航", "回蓝"]],
        [/收割|重置|reset/, ["收割", "重置"]],
        [/一波|推进|抱团/, ["推进", "抱团", "一波流"]],
      ];
      const expandedKeywords = [
        ...profileKeywords[aiProfile],
        ...keywordAliases.filter(([pattern]) => pattern.test(normalizedPrompt)).flatMap(([, keywords]) => keywords),
      ];
      const guide = championGuides
        .map((entry, index) => {
          const haystack = `${entry.name} ${entry.lane} ${entry.style} ${entry.summary} ${entry.tags.join(" ")}`.toLowerCase();
          const directPromptScore = entry.tags.reduce((score, tag) =>
            score + (normalizedPrompt.includes(tag.toLowerCase()) ? 8 : 0), 0);
          const keywordScore = expandedKeywords.reduce((score, keyword) =>
            score + (haystack.includes(keyword.toLowerCase()) ? 3 : 0), 0);
          return { entry, score: directPromptScore + keywordScore - index * 0.01 };
        })
        .sort((left, right) => right.score - left.score)[0]?.entry || championGuides[0];
      const masteryPreset = masteryPresets[guide.masteryPreset];
      setSelectedGuideId(guide.id);
      setRuneCounts(runeCountsFromIds(guide.runePreset));
      setMasteryRanks({ ...masteryPreset });
      setSelectedSpells([...guide.spellIds]);
      const generatedItems = [...guide.coreItems];
      setItems(generatedItems);
      setInspectedItem(generatedItems[0]);
      setSkillPlan(skillPlanFor(guide.skillOrder));
      const preferredTags = aiProfile === "defensive"
        ? ["health", "armor", "magic-resistance"]
        : aiProfile === "teamfight"
          ? ["cooldown-reduction", "health", "mana"]
          : archetypeItemTags[guide.runeArchetype];
      const generatedAlternatives = [
        ...guide.situationalItems,
        ...mainItemPool
        .filter((item) => item.category === "传说装备"
          && !generatedItems.includes(item.id)
          && preferredTags.some((tag) => item.tags.includes(tag)))
        .sort((left, right) => right.price - left.price)
        .map((item) => item.id),
      ];
      const alternatives = [...new Set(generatedAlternatives)].filter((id) => !generatedItems.includes(id)).slice(0, 3);
      const profile = aiProfiles.find((entry) => entry.id === aiProfile) || aiProfiles[0];
      setAiRecommendation({
        profile: aiProfile,
        guideId: guide.id,
        title: `${champion.name} · ${guide.name} · ${profile.label}方案`,
        rationale: `已从 ${championGuides.length} 套已核验路线中匹配「${guide.name}」。它对应 ${guide.lane}／${guide.style}，并按你的要求“${prompt}”同步写入出门装、符文、30 点天赋、召唤师技能、18 级加点、分档回城与六格出装。`,
        runeSummary: guide.runeSummary,
        masteryPreset: guide.masteryPreset,
        spellIds: [...guide.spellIds],
        skillOrder: [...guide.skillOrder],
        startingItems: guide.startingItems,
        recallPlan: guide.recallPlan,
        coreItems: generatedItems,
        alternatives,
      });
      setAiState("ready");
      showToast(`${champion.name} 的 Classic 智能方案已写入`);
    }, 360);
  };

  return (
    <main className="app-shell" style={{ "--champion-accent": selectedChampion.accent } as React.CSSProperties}>
      <a className="skip-link" href="#builder-content">跳到构筑内容</a>
      <header className="topbar">
        <button className="brand" onClick={() => changeView("runes")} aria-label="返回符文模拟器">
          <span className="brand-mark">怀</span>
          <span><strong>英雄联盟怀旧服攻略介绍</strong><small>S3 考据 · 全同步工作台</small></span>
        </button>
        <nav className="main-nav" aria-label="构筑功能" data-guide="module-nav">
          {([
            ["runes", "符文模拟器", "50"],
            ["masteries", "天赋模拟器", "56"],
            ["build", "技能与出装", "152"],
            ["ai", "AI 助手", "✦"],
          ] as const).map(([id, label, badge]) => (
            <button
              key={id}
              className={view === id ? "active" : ""}
              onClick={() => changeView(id)}
              onPointerEnter={() => preloadWorkbenchAssets(id)}
              onFocus={() => preloadWorkbenchAssets(id)}
              aria-current={view === id ? "page" : undefined}
            >
              {label}<span>{badge}</span>
            </button>
          ))}
        </nav>
        <div className="sync-status">
          <span className="live-dot" />
          <span><strong>Classic {CLASSIC_PATCH}</strong><small>OP.GG · 每日自动校验</small></span>
          <button className="help-trigger" onClick={() => setHelpOpen(true)} aria-label="打开使用帮助">
            <span aria-hidden="true">?</span><span className="help-label">使用帮助</span>
          </button>
          <button onClick={shareBuild} data-guide="share">分享</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="champion-rail" data-guide="champion-picker">
          <div className="rail-heading"><span>经典英雄</span><b>{classicChampions.length} / 60</b></div>
          <label className="champion-search">
            <span aria-hidden="true">⌕</span>
            <input ref={championSearchRef} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索英雄、称号、外号或定位" />
          </label>
          <div className="role-filters" aria-label="位置筛选">
            {laneFilterOptions.map(({ id }) => (
              <button key={id} className={laneFilter === id ? "active" : ""} onClick={() => setLaneFilter(id)} aria-pressed={laneFilter === id}>{id}</button>
            ))}
          </div>
          <div className="champion-list">
            {filteredChampions.map((champion) => (
              <button
                key={champion.classicId}
                className={champion.classicId === selectedChampion.classicId ? "champion-row active" : "champion-row"}
                onClick={() => chooseChampion(champion)}
                onPointerEnter={() => preloadChampionAssets(champion)}
                onPointerDown={() => preloadChampionAssets(champion)}
                onFocus={() => preloadChampionAssets(champion)}
              >
                <img src={championPortrait(champion)} alt="" loading="lazy" />
                <span>
                  <strong>{champion.name}</strong>
                  <small>{champion.title} · {champion.lane}</small>
                  {champion.aliases.length > 0 && <em>{champion.aliases.join(" / ")}</em>}
                </span>
                <i>{champion.classicId === selectedChampion.classicId ? "●" : "›"}</i>
              </button>
            ))}
            {filteredChampions.length === 0 && (
              <div className="champion-empty" role="status">
                <strong>没有找到符合条件的英雄</strong>
                <small>可尝试英雄名、外号、称号、英文名或“打野／中路”等定位。</small>
                <button onClick={() => { setSearch(""); setLaneFilter("全部"); }}>清除筛选</button>
              </div>
            )}
          </div>
          <div className="rail-footnote"><span>目录覆盖</span><strong>60 英雄 · 16 技能</strong><small>OP.GG Classic 目录每日自动检测；异常数据不会发布。</small></div>
        </aside>

        <section className="builder" id="builder-content" tabIndex={-1}>
          {sharedBuildLoaded && (
            <div className="shared-build-notice" role="status">
              <span aria-hidden="true">✓</span>
              <p><strong>已载入分享方案</strong><small>你可以继续修改；需要帮助时请打开右上角“使用帮助”。</small></p>
              <button onClick={() => setHelpOpen(true)}>查看使用方法</button>
            </div>
          )}
          <section className="champion-hero">
            <ChampionHeroImage
              key={`${selectedChampion.classicId}-${selectedArtwork?.id || "fallback"}`}
              champion={selectedChampion}
              artwork={selectedArtwork}
            />
            <div className="hero-shade" />
            <div className="hero-content">
              <span className="eyebrow">CLASSIC · {selectedChampion.lane} · {selectedChampion.role}</span>
              <h1>{selectedChampion.name}<small>{selectedChampion.title}</small></h1>
              {selectedChampion.aliases.length > 0 && (
                <div className="hero-aliases"><span>玩家常用称呼</span>{selectedChampion.aliases.map((alias) => <b key={alias}>{alias}</b>)}</div>
              )}
              {selectedArtworks.length > 0 && (
                <div className="hero-art-switcher" aria-label={`${selectedChampion.name}原画选择`}>
                  <span>OP.GG 原画</span>
                  {selectedArtworks.map((artwork) => (
                    <button
                      key={artwork.id}
                      className={selectedArtwork?.id === artwork.id ? "active" : ""}
                      onClick={() => {
                        void preloadImage(artwork.imageUrl);
                        setSelectedArtworkId(artwork.id);
                      }}
                      aria-pressed={selectedArtwork?.id === artwork.id}
                    >
                      {artwork.kind === "classic" ? "经典" : "默认"} · {artwork.name}
                    </button>
                  ))}
                </div>
              )}
              <p>完整经典目录已载入：符文 50 · 天赋 56 · 召唤师技能 16 · 装备 152</p>
            </div>
            <div className="hero-actions">
              <button onClick={restoreRecommended}>恢复推荐</button>
              <button className="primary" onClick={shareBuild}>复制方案链接</button>
            </div>
          </section>

          <div className="mobile-view-tabs" data-guide="module-nav">
            {([
              ["runes", "符文"],
              ["masteries", "天赋"],
              ["build", "构筑"],
              ["ai", "AI"],
            ] as const).map(([id, label]) => (
              <button
                key={id}
                className={view === id ? "active" : ""}
                onClick={() => changeView(id)}
                onPointerDown={() => preloadWorkbenchAssets(id)}
              >
                {label}
              </button>
            ))}
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

              <div className="rune-workspace" data-guide="rune-editor">
                <div className="rune-board-wrap">
                  <div className="rune-board" style={{ backgroundImage: `url(${localAssetUrl(runeBoardBackground)})` }}>
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
                          {rune ? <img src={localAssetUrl(rune.icon)} alt="" /> : <span>＋</span>}
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
                            <img src={localAssetUrl(rune.icon)} alt="" />
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
                    <span key={rune.id} style={{ "--recap-color": group.color } as React.CSSProperties}><img src={localAssetUrl(rune.icon)} alt="" />{rune.name}<b>×{runeCounts[rune.id]}</b></span>
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

              <div className="mastery-workspace" data-guide="mastery-editor">
                {(["进攻", "防御", "通用"] as const).map((tree) => (
                  <section className={`mastery-tree mastery-${tree}`} key={tree}>
                    <header><span>{tree}</span><b>{treeTotal(masteryRanks, tree)} 点</b></header>
                    <div className="mastery-canvas" style={{ backgroundImage: `linear-gradient(rgba(5,8,12,.18), rgba(5,8,12,.5)), url(${localAssetUrl(masteryBackgrounds[tree])})` }}>
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
                              <img src={localAssetUrl(mastery.icon.replace("_on.png", rank ? "_on.png" : "_off.png"))} alt="" />
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
            <section className="simulator-page build-page" data-guide="build-editor">
              <div className="simulator-heading">
                <div><span>03</span><div><h2>技能、召唤师技能与经典出装</h2><p>完整 18 级技能表、16 个召唤师技能和 152 件 Classic 装备。</p></div></div>
                <div className="simulator-actions"><b>{selectedChampion.name} · 主 {selectedChampion.spellOrder[0]} 副 {selectedChampion.spellOrder[1]}</b></div>
              </div>

              <section className="build-section strategy-section">
                <div className="subsection-title">
                  <div>
                    <h3>经典玩法攻略</h3>
                    <p>按分路与流派切换；每套方案包含出门装、分档回城、符文、30 点天赋、召唤师技能、加点和完整成装路线。</p>
                  </div>
                  <span>{selectedGuides.length} 套可切换</span>
                </div>
                {guideLanes.length > 2 && (
                  <div className="strategy-lane-filter" role="group" aria-label="按分路筛选玩法">
                    {guideLanes.map((lane) => {
                      const count = lane === "全部"
                        ? selectedGuides.length
                        : selectedGuides.filter((guide) => guide.lane === lane).length;
                      return (
                        <button
                          key={lane}
                          className={guideLaneFilter === lane ? "active" : ""}
                          onClick={() => {
                            setGuideLaneFilter(lane);
                            const pool = lane === "全部" ? selectedGuides : selectedGuides.filter((guide) => guide.lane === lane);
                            if (!pool.some((guide) => guide.id === selectedGuide.id) && pool[0]) {
                              setSelectedGuideId(pool[0].id);
                            }
                          }}
                          aria-pressed={guideLaneFilter === lane}
                        >
                          {lane}<b>{count}</b>
                        </button>
                      );
                    })}
                  </div>
                )}
                <div className="strategy-tabs" role="tablist" aria-label={`${selectedChampion.name}经典玩法`}>
                  {visibleGuides.map((guide) => (
                    <button
                      key={guide.id}
                      className={selectedGuide.id === guide.id ? "active" : ""}
                      onClick={() => setSelectedGuideId(guide.id)}
                      role="tab"
                      aria-selected={selectedGuide.id === guide.id}
                    >
                      <span>{guide.lane}</span>
                      <strong>{guide.name}</strong>
                      <small>{guide.style}</small>
                    </button>
                  ))}
                </div>
                <div className="strategy-detail">
                  <div className="strategy-summary">
                    <span>当前方案</span>
                    <h4>{selectedGuide.name}<small>{selectedGuide.lane} · {selectedGuide.style}</small></h4>
                    <p>{selectedGuide.summary}</p>
                    <div className="strategy-tags" aria-label="玩法标签">
                      {selectedGuide.tags
                        .filter((tag) => tag !== selectedGuide.lane && tag !== selectedGuide.style && !/^[a-z]+$/.test(tag))
                        .slice(0, 8)
                        .map((tag) => <i key={tag}>{tag}</i>)}
                    </div>
                    <div className="strategy-config">
                      <span><b>符文</b>{selectedGuide.runeSummary}</span>
                      <span><b>天赋</b>{selectedGuide.masteryPreset}</span>
                      <span><b>召唤师技能</b>{selectedGuide.spellIds.map((id) => classicSpells.find((spell) => spell.id === id)?.name).join(" + ")}</span>
                      <span><b>加点</b>{selectedGuide.skillOrder[0]} → {selectedGuide.skillOrder[1]} → {selectedGuide.skillOrder[2]}（R 优先）</span>
                    </div>
                  </div>
                  <div className="opening-groups">
                    {([
                      ["出门装", selectedGuide.startingItems],
                      ["首次回城／早期补购", selectedGuide.earlyPurchases],
                    ] as const).map(([label, guideItems]) => (
                      <section key={label}>
                        <header>
                          <h5>{label}</h5>
                          {label === "出门装" && (
                            <b>{guideItems.reduce((sum, entry) => sum + (itemById.get(entry.itemId)?.price || 0) * entry.quantity, 0)} 金币</b>
                          )}
                        </header>
                        <div className="opening-items">
                          {guideItems.map((entry) => {
                            const guideItem = itemById.get(entry.itemId);
                            if (!guideItem) return null;
                            return (
                              <button
                                key={`${label}-${entry.itemId}`}
                                onClick={() => {
                                  setInspectedItem(entry.itemId);
                                  setItemCategory("全部");
                                }}
                                title={entry.note || guideItem.description}
                              >
                                <span><img src={localAssetUrl(guideItem.icon)} alt="" />{entry.quantity > 1 && <b>×{entry.quantity}</b>}</span>
                                <strong>{guideItem.name}</strong>
                                <small>{guideItem.price * entry.quantity} 金币</small>
                                {entry.note && <em>{entry.note}</em>}
                              </button>
                            );
                          })}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
                <div className="recall-route">
                  <header>
                    <div><span>回城购买路线</span><h4>按你回城时的实际金币选择，不必死等大件</h4></div>
                    <b>{selectedGuide.recallPlan.length} 个金币档位</b>
                  </header>
                  <div className="recall-grid">
                    {selectedGuide.recallPlan.map((step) => (
                      <article key={`${selectedGuide.id}-${step.gold}`}>
                        <div className="recall-budget"><strong>{step.gold}</strong><span>金币</span></div>
                        <div className="recall-copy">
                          <h5>{step.title}</h5>
                          <div>
                            {step.items.map((entry) => {
                              const recallItem = itemById.get(entry.itemId);
                              return recallItem ? (
                                <button key={`${step.gold}-${entry.itemId}`} onClick={() => setInspectedItem(entry.itemId)} title={recallItem.description}>
                                  <img src={localAssetUrl(recallItem.icon)} alt="" />
                                  <span>{recallItem.name}{entry.quantity > 1 ? ` ×${entry.quantity}` : ""}</span>
                                </button>
                              ) : null;
                            })}
                          </div>
                          <p>{step.purpose}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="build-route">
                  <header>
                    <div><span>完整出装路线</span><h4>前期组件 → 中期强势点 → 后期六格</h4></div>
                    <b>备选 {selectedGuide.situationalItems.length} 件</b>
                  </header>
                  <div className="build-phase-grid">
                    {selectedGuide.buildPhases.map((phase, phaseIndex) => (
                      <article key={phase.title}>
                        <span>{String(phaseIndex + 1).padStart(2, "0")}</span>
                        <h5>{phase.title}</h5>
                        <div>
                          {phase.items.map((id) => {
                            const phaseItem = itemById.get(id);
                            return phaseItem ? (
                              <button key={`${phase.title}-${id}`} onClick={() => setInspectedItem(id)} title={`${phaseItem.name} · ${phaseItem.price} 金币`}>
                                <img src={localAssetUrl(phaseItem.icon)} alt="" />
                                <small>{phaseItem.name}</small>
                              </button>
                            ) : null;
                          })}
                        </div>
                        <p>{phase.note}</p>
                      </article>
                    ))}
                  </div>
                  <div className="situational-items">
                    <span>局势替换</span>
                    {selectedGuide.situationalItems.map((id) => {
                      const situationalItem = itemById.get(id);
                      return situationalItem ? (
                        <button key={id} onClick={() => setInspectedItem(id)}>
                          <img src={localAssetUrl(situationalItem.icon)} alt="" />
                          <span><strong>{situationalItem.name}</strong><small>{situationalItem.price} 金币</small></span>
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
                <div className="guide-gameplan">
                  {selectedGuide.gamePlan.map((paragraph, index) => (
                    <article key={paragraph}><span>{["前期", "中期", "后期"][index]}</span><p>{paragraph}</p></article>
                  ))}
                </div>
                <div className="strategy-footer">
                  <p>
                    {selectedGuide.sourceNote} 出门预算按 475 金币校验；多兰叠出只会显示在回城路线。
                    <span>
                      {[...classicGuideSources, ...selectedGuide.sourceUrls.map((url) => ({ label: "当前路线原始资料", url }))]
                        .filter((source, index, all) => all.findIndex((entry) => entry.url === source.url) === index)
                        .map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}</a>)}
                    </span>
                  </p>
                  <button onClick={() => applyClassicGuide(selectedGuide)}>一键应用完整方案</button>
                </div>
              </section>

              <section className="build-section skill-section">
                <div className="subsection-title"><div><h3>英雄技能与加点</h3><p>点击被动或 Q/W/E/R 查看逐级伤害公式、冷却、消耗和施法距离；加点仍会校验等级上限。</p></div><span>5 技能 · 18 级</span></div>
                {selectedSkillSet ? (
                  <ChampionAbilityPanel
                    key={selectedSkillSet.championId}
                    skillSet={selectedSkillSet}
                    activeKey={inspectedAbility}
                    onSelect={setInspectedAbility}
                  />
                ) : (
                  <div className="ability-missing" role="status">该英雄的技能资料暂未载入。</div>
                )}
                <div className="skill-table">
                  <div className="level-row"><b>等级</b>{Array.from({ length: 18 }, (_, index) => <span key={index}>{index + 1}</span>)}</div>
                  {(["Q", "W", "E", "R"] as const).map((skill) => (
                    <div className={`skill-row skill-${skill.toLowerCase()}`} key={skill}>
                      <button className="skill-key" onClick={() => setInspectedAbility(skill)} aria-label={`查看${skill}技能详情`}>{skill}</button>
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
                      <img src={localAssetUrl(spell.icon)} alt="" loading="lazy" />
                      <span><strong>{spell.name}</strong><small>冷却 {spell.cooldown} 秒</small><em>{spell.description}</em></span>
                      {selectedSpells.includes(spell.id) && <i>✓</i>}
                    </button>
                  ))}
                </div>
              </section>

              <section className="build-section item-section">
                <div className="subsection-title"><div><h3>经典装备商店与合成树</h3><p>按装备等级、属性和关键词筛选；点击任意装备查看完整游戏式合成路径。</p></div><span>{mainItemPool.length} 件 · {craftableItemCount} 条合成路线</span></div>
                <div className="active-guide-note" role="status">
                  <span>当前方案</span>
                  <strong>{selectedGuide.name}</strong>
                  <em>{selectedGuide.lane} · {selectedGuide.style}</em>
                  {items.length === selectedGuide.coreItems.length
                    && selectedGuide.coreItems.every((id, index) => items[index] === id)
                    ? <b className="synced">六格与方案一致</b>
                    : (
                      <>
                        <b className="custom">六格已自定义</b>
                        <button
                          onClick={() => {
                            setItems([...selectedGuide.coreItems]);
                            setInspectedItem(selectedGuide.coreItems[0]);
                            setActiveItemSlot(0);
                            showToast(`已按「${selectedGuide.name}」重置六格出装`);
                          }}
                        >
                          按方案重置六格
                        </button>
                      </>
                    )}
                </div>
                <div className="build-slots">
                  {items.map((id, index) => {
                    const item = itemById.get(id);
                    return (
                      <button className={activeItemSlot === index ? "item-slot active" : "item-slot"} key={`${id}-${index}`} onClick={() => { setActiveItemSlot(index); setInspectedItem(id); }}>
                        <span>{index + 1}</span>
                        {item ? <img src={localAssetUrl(item.icon)} alt="" /> : <div className="empty-item">＋</div>}
                        <strong>{item?.name || "空装备槽"}</strong>
                        <small>{item ? `${item.price} 金币` : "点击后选择装备"}</small>
                      </button>
                    );
                  })}
                </div>
                <div className="item-browser">
                  <div className="item-toolbar">
                    <div className="item-categories">
                      {classicItemCategories.map((category) => (
                        <button key={category} className={itemCategory === category ? "active" : ""} onClick={() => setItemCategory(category)}>
                          <span>{category}</span><b>{itemCategoryCounts[category]}</b>
                        </button>
                      ))}
                    </div>
                    <div className="item-filter-row">
                      <label className="item-stat-filter">
                        <span>属性筛选</span>
                        <select value={itemStatFilter} onChange={(event) => setItemStatFilter(event.target.value as ItemStatFilterId)}>
                          {itemStatFilters.map(([id, label]) => <option key={id} value={id}>{label}（{itemStatCounts[id]}）</option>)}
                        </select>
                      </label>
                      <label className="item-search">
                        <span>⌕</span>
                        <input value={itemSearch} onChange={(event) => setItemSearch(event.target.value)} placeholder="搜索装备、属性或被动" />
                      </label>
                      <div className="item-result-count" role="status"><b>{displayedItems.length}</b><span>件符合条件</span></div>
                    </div>
                  </div>
                  <div className="item-grid">
                    {displayedItems.map((item) => (
                      <button
                        key={item.id}
                        className={`${items.includes(item.id) ? "item-card equipped" : "item-card"} ${inspectedItem === item.id ? "inspected" : ""}`}
                        onFocus={() => setInspectedItem(item.id)}
                        onClick={() => setInspectedItem(item.id)}
                        aria-pressed={inspectedItem === item.id}
                      >
                        <img src={localAssetUrl(item.icon)} alt="" />
                        <span><strong>{item.name}</strong><small>{item.price} 金币</small><em>点击查看详情</em></span>
                        {items.includes(item.id) && <i>已装备</i>}
                      </button>
                    ))}
                    {displayedItems.length === 0 && (
                      <div className="item-empty-result">
                        <strong>没有符合条件的装备</strong>
                        <button onClick={() => { setItemCategory("全部"); setItemStatFilter("all"); setItemSearch(""); }}>清除装备筛选</button>
                      </div>
                    )}
                  </div>
                  <ItemDetailPanel
                    itemId={inspectedItemData?.id || ""}
                    activeSlot={activeItemSlot}
                    onInspect={setInspectedItem}
                    onEquip={equipInspectedItem}
                  />
                </div>
              </section>
            </section>
          )}

          {view === "ai" && (
            <section className="simulator-page ai-page" data-guide="ai-assistant">
              <div className="simulator-heading">
                <div><span>04</span><div><h2>Classic 智能构筑助手</h2><p>依据当前 OP.GG Classic 数据快照、英雄定位和你的作战偏好生成可继续编辑的完整方案。</p></div></div>
                <div className="simulator-actions"><b className="honesty-badge">规则透明 · 不混入正式服数据</b></div>
              </div>
              <div className="ai-composer">
                <div className="ai-orb">✦</div>
                <div className="ai-copy">
                  <span>AI 构筑助手</span>
                  <h3>为 {selectedChampion.name}{selectedChampion.aliases.length > 0 ? `（${selectedChampion.aliases.join("／")}）` : ""}生成经典方案</h3>
                  <p>AI 会先在当前英雄的已核验流派中匹配，再统一写入出门装、符文、30 点天赋、召唤师技能、18 级加点、回城路线、六格出装与备选装备。</p>
                  <div className="ai-profile-grid" aria-label="方案策略">
                    {aiProfiles.map((profile) => (
                      <button
                        key={profile.id}
                        className={aiProfile === profile.id ? "active" : ""}
                        onClick={() => {
                          setAiProfile(profile.id);
                          setAiState("idle");
                          setAiRecommendation(null);
                          setPrompt(`${profile.label}；${profile.detail}；只使用 OP.GG Classic ${CLASSIC_PATCH} 目录。`);
                        }}
                        aria-pressed={aiProfile === profile.id}
                      >
                        <strong>{profile.label}</strong><small>{profile.detail}</small>
                      </button>
                    ))}
                  </div>
                  <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} aria-label="AI 构筑偏好" />
                  <div className="ai-route-chips" aria-label={`${selectedChampion.name}可用流派`}>
                    <span>直接指定流派</span>
                    {selectedGuides.map((guide) => (
                      <button
                        key={guide.id}
                        onClick={() => {
                          setPrompt(`${guide.name}；${guide.lane}；${guide.style}；需要完整出门、回城金币节点、符文、天赋、召唤师技能、加点和六格出装。`);
                          setAiState("idle");
                          setAiRecommendation(null);
                        }}
                      >
                        {guide.name}
                      </button>
                    ))}
                  </div>
                  <div className="prompt-chips">
                    {["水晶瓶续航", "暴击流", "攻速特效", "AP 爆发", "对线压制", "团战优先", "新手友好"].map((chip) => <button key={chip} onClick={() => setPrompt((current) => `${current.replace(/[；。]\s*$/, "")}；${chip}。`)}>＋ {chip}</button>)}
                  </div>
                  <button className="generate-button" onClick={generateBuild} disabled={aiState === "working"}>{aiState === "working" ? "正在组合经典数据…" : aiState === "ready" ? "重新生成方案" : "生成完整方案"}<span>→</span></button>
                </div>
                <aside className={`ai-status ${aiState}`}>
                  <h4>数据校验清单</h4>
                  {["英雄与位置", "50 个符文目录", "56 节点天赋树", "16 个召唤师技能", "152 件经典装备"].map((label, index) => <div key={label}><i>{aiState === "ready" || (aiState === "working" && index < 3) ? "✓" : "○"}</i><span>{label}</span></div>)}
                  <p>{aiState === "ready" ? "方案已写入，可到各模拟器继续手动微调。" : "生成过程只读取本站已校验的 Classic 数据快照，不会要求登录。"}</p>
                </aside>
              </div>
              {aiRecommendation && (
                <section className="ai-result" aria-live="polite">
                  <header>
                    <div><span>已生成</span><h3>{aiRecommendation.title}</h3></div>
                    <button onClick={() => changeView("build")}>查看并微调构筑 →</button>
                  </header>
                  <p>{aiRecommendation.rationale}</p>
                  <div className="ai-result-grid">
                    <div><span>符文方向</span><strong>{aiRecommendation.runeSummary}</strong></div>
                    <div><span>天赋与加点</span><strong>{aiRecommendation.masteryPreset} · 主 {aiRecommendation.skillOrder[0]} 副 {aiRecommendation.skillOrder[1]}</strong></div>
                    <div><span>召唤师技能</span><strong>{aiRecommendation.spellIds.map((id) => classicSpells.find((spell) => spell.id === id)?.name).filter(Boolean).join(" + ")}</strong></div>
                  </div>
                  <div className="ai-purchase-plan">
                    <section>
                      <h4>出门装</h4>
                      <div>
                        {aiRecommendation.startingItems.map((entry) => {
                          const startItem = itemById.get(entry.itemId);
                          return startItem ? (
                            <button key={entry.itemId} onClick={() => { setInspectedItem(entry.itemId); changeView("build"); }}>
                              <img src={localAssetUrl(startItem.icon)} alt="" />
                              <span><strong>{startItem.name}{entry.quantity > 1 ? ` ×${entry.quantity}` : ""}</strong><small>{startItem.price * entry.quantity} 金币</small></span>
                            </button>
                          ) : null;
                        })}
                      </div>
                    </section>
                    <section>
                      <h4>回城金币路线</h4>
                      <div className="ai-recall-list">
                        {aiRecommendation.recallPlan.map((step) => (
                          <button key={step.gold} onClick={() => changeView("build")}>
                            <strong>{step.gold} 金币</strong><span>{step.title}</span><small>{step.purpose}</small>
                          </button>
                        ))}
                      </div>
                    </section>
                    <section>
                      <h4>六格成装</h4>
                      <div>
                        {aiRecommendation.coreItems.map((id) => {
                          const coreItem = itemById.get(id);
                          return coreItem ? (
                            <button key={id} onClick={() => { setInspectedItem(id); changeView("build"); }}>
                              <img src={localAssetUrl(coreItem.icon)} alt="" />
                              <span><strong>{coreItem.name}</strong><small>{coreItem.price} 金币</small></span>
                            </button>
                          ) : null;
                        })}
                      </div>
                    </section>
                  </div>
                  <div className="ai-alternatives">
                    <span>备选传说装备</span>
                    {aiRecommendation.alternatives.length ? aiRecommendation.alternatives.map((id) => {
                      const item = itemById.get(id);
                      return item ? <button key={id} onClick={() => { setInspectedItem(id); changeView("build"); }}><img src={localAssetUrl(item.icon)} alt="" /><span><strong>{item.name}</strong><small>{item.price} 金币 · 点击查看合成树</small></span></button> : null;
                    }) : <small>当前策略暂无额外备选。</small>}
                  </div>
                  <footer>来源：OP.GG Classic {CLASSIC_PATCH} 本地校验快照 · 方案引擎：位置、职业、装备属性标签与用户偏好规则</footer>
                </section>
              )}
              <div className="source-strip">
                <a href="https://op.gg/zh-cn/lol/classic/runes" target="_blank" rel="noreferrer"><b>OP</b><span>经典符文模拟器<small>50 个符文 · 9/9/9/3</small></span></a>
                <a href="https://op.gg/zh-cn/lol/classic/masteries" target="_blank" rel="noreferrer"><b>OP</b><span>经典天赋模拟器<small>56 个节点 · 30 点</small></span></a>
                <a href="https://op.gg/zh-cn/lol/classic/items" target="_blank" rel="noreferrer"><b>OP</b><span>经典装备目录<small>152 件 · 6 个分类</small></span></a>
              </div>
            </section>
          )}

          <footer className="site-footer">
            <span>「英雄联盟怀旧服攻略介绍」是非官方玩家工具，与 Riot Games 或 OP.GG 无隶属关系。</span>
            <span>数据源：OP.GG Classic {CLASSIC_PATCH} · 每日自动校验 · 无需账号即可使用与保存</span>
          </footer>
        </section>
      </div>
      {guideOpen && (
        <Suspense fallback={null}>
          <OnboardingGuide
            open={guideOpen}
            step={guideStep}
            onStepChange={setGuideStep}
            onViewChange={changeView}
            onDismiss={dismissGuide}
            onComplete={completeGuide}
          />
        </Suspense>
      )}
      {helpOpen && (
        <Suspense fallback={null}>
          <HelpDrawer
            open={helpOpen}
            onClose={() => setHelpOpen(false)}
            onReplay={replayGuide}
          />
        </Suspense>
      )}
      {toast && <div className="toast" role="status" aria-live="polite"><span>✓</span>{toast}</div>}
    </main>
  );
}
