import type { ClassicChampion } from "./classic-data";

export type LaneFilterId = "全部" | "上" | "野" | "中" | "下" | "辅";

export const laneFilterOptions: ReadonlyArray<{ id: LaneFilterId; lane?: ClassicChampion["lane"] }> = [
  { id: "全部" },
  { id: "上", lane: "上路" },
  { id: "野", lane: "打野" },
  { id: "中", lane: "中路" },
  { id: "下", lane: "下路" },
  { id: "辅", lane: "辅助" },
];

const laneAliases: Record<ClassicChampion["lane"], string> = {
  上路: "上 单 top toplane",
  打野: "野 野区 jungle jungler",
  中路: "中 单 mid middle",
  下路: "下 adc bottom bot carry",
  辅助: "辅 support sup",
};

const normalizeSearch = (value: string) =>
  value.normalize("NFKC").toLocaleLowerCase().replace(/[\s·\-_/]+/g, "");

export function championMatchesFilters(
  champion: ClassicChampion,
  laneFilter: LaneFilterId,
  search: string,
) {
  const selectedLane = laneFilterOptions.find((option) => option.id === laneFilter)?.lane;
  if (selectedLane && champion.lane !== selectedLane) return false;

  const query = normalizeSearch(search.trim());
  if (!query) return true;

  const searchIndex = normalizeSearch([
    champion.name,
    champion.title,
    ...champion.aliases,
    champion.key,
    champion.role,
    champion.lane,
    champion.archetype,
    laneAliases[champion.lane],
  ].join(" "));

  return searchIndex.includes(query);
}
