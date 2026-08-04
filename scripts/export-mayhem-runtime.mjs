import { mkdir } from "node:fs/promises";
import {
  CLASSIC_MAYHEM_MODE,
  CLASSIC_MAYHEM_PATCH,
  LIVE_DATA_PATCH,
  classicExclusiveAugments,
  classicMayhemAugments,
  liveClassicChampions,
  regularMayhemAugments,
} from "../app/classic-mayhem.generated.ts";
import {
  MAYHEM_HAS_JUNGLE_ROLE,
  MAYHEM_STARTING_GOLD,
  OP_GG_MAYHEM_PATCH,
  OP_GG_MAYHEM_SNAPSHOT_HASH,
  opggMayhemItems,
  opggMayhemChampionBuilds,
} from "../app/classic-mayhem-opgg.generated.ts";
import {
  isCheckMode,
  writeOrCheck,
} from "./classic-generator-utils.mjs";

const outputDirectory = new URL("../public/classic-data/mayhem/", import.meta.url);
if (!isCheckMode) await mkdir(outputDirectory, { recursive: true });

const meta = {
  schemaVersion: 1,
  mode: CLASSIC_MAYHEM_MODE,
  communityPatch: CLASSIC_MAYHEM_PATCH,
  livePatch: LIVE_DATA_PATCH,
  opggPatch: OP_GG_MAYHEM_PATCH,
  snapshotHash: OP_GG_MAYHEM_SNAPSHOT_HASH,
  startingGold: MAYHEM_STARTING_GOLD,
  hasJungleRole: MAYHEM_HAS_JUNGLE_ROLE,
};

const augmentById = new Map(classicMayhemAugments.map((augment) => [augment.id, augment]));
const buildByClassicId = new Map(
  opggMayhemChampionBuilds.map((build) => [build.classicId, build]),
);

const outputs = liveClassicChampions.map((champion) => {
  const build = buildByClassicId.get(champion.classicId);
  if (!build) throw new Error(`${champion.name}: missing OP.GG Mayhem runtime build`);
  const augmentRecommendations = build.augments.map((recommendation) => {
    const augment = augmentById.get(recommendation.augmentId);
    if (!augment) {
      throw new Error(
        `${champion.name}: OP.GG augment ${recommendation.augmentId} is absent from the mode catalog`,
      );
    }
    return {
      augment,
      metric: recommendation.metric,
    };
  });
  const payload = {
    meta,
    champion,
    build,
    items: opggMayhemItems,
    augmentRecommendations,
  };
  return writeOrCheck(
    new URL(`${champion.classicId}.json`, outputDirectory),
    `${JSON.stringify(payload)}\n`,
    `${champion.name} Mayhem runtime payload`,
  );
});

const catalog = {
  meta,
  counts: {
    regular: regularMayhemAugments.length,
    classic: classicMayhemAugments.length,
    exclusive: classicExclusiveAugments.length,
    byRarity: {
      silver: classicMayhemAugments.filter((augment) => augment.rarity === "silver").length,
      gold: classicMayhemAugments.filter((augment) => augment.rarity === "gold").length,
      prismatic: classicMayhemAugments.filter((augment) => augment.rarity === "prismatic").length,
    },
  },
  augments: classicMayhemAugments,
};

outputs.push(writeOrCheck(
  new URL("catalog.json", outputDirectory),
  `${JSON.stringify(catalog)}\n`,
  "Mayhem augment runtime catalog",
));

await Promise.all(outputs);
console.log(
  `Mayhem runtime export: ${liveClassicChampions.length} champion payloads + `
  + `${classicMayhemAugments.length}-augment catalog (${OP_GG_MAYHEM_SNAPSHOT_HASH.slice(0, 12)}).`,
);
