export type PublicDataStatus = "available" | "partial" | "unavailable";
export type MayhemRarity = "silver" | "gold" | "prismatic";
export type MayhemAbilityKey = "P" | "Q" | "W" | "E" | "R";

export type MayhemAbility = {
  key: MayhemAbilityKey;
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
  rarity: MayhemRarity;
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

export type OpggMetric = {
  pickRate: number;
  games: number;
  winRate: number;
};

export type OpggItemRecommendation = {
  itemIds: string[];
  totalPrice: number;
  metric: OpggMetric;
};

export type OpggAugmentRecommendation = {
  augmentId: number;
  apiName: string;
  name: string;
  rarity: MayhemRarity;
  metric: OpggMetric;
};

export type OpggMayhemChampionBuild = {
  classicId: string;
  key: string;
  name: string;
  sourceUrl: string;
  patch: string;
  rank: number;
  tier: number;
  championMetrics: { pickRate: number; winRate: number };
  startingGold: number;
  augments: OpggAugmentRecommendation[];
  summonerSets: Array<{
    spells: Array<{ key: string; name: string; icon: string }>;
    metric: OpggMetric;
  }>;
  runes: { status: "unavailable"; reason: string };
  skillBuilds: Array<{
    priority: Array<"Q" | "W" | "E">;
    levelSequence: Array<"Q" | "W" | "E" | "R">;
    metric: OpggMetric;
  }>;
  items: {
    starting: OpggItemRecommendation[];
    boots: OpggItemRecommendation[];
    core: OpggItemRecommendation[];
  };
};

export type MayhemRuntimeMeta = {
  schemaVersion: 1;
  mode: "KIWI_JADE";
  communityPatch: string;
  livePatch: string;
  opggPatch: string;
  snapshotHash: string;
  startingGold: number;
  hasJungleRole: false;
};

export type MayhemChampionRuntime = {
  meta: MayhemRuntimeMeta;
  champion: LiveClassicChampion;
  build: OpggMayhemChampionBuild;
  augmentRecommendations: Array<{
    augment: MayhemAugment;
    metric: OpggMetric;
  }>;
};

export type MayhemCatalogRuntime = {
  meta: MayhemRuntimeMeta;
  counts: {
    regular: number;
    classic: number;
    exclusive: number;
    byRarity: Record<MayhemRarity, number>;
  };
  augments: MayhemAugment[];
};
