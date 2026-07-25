import { writeFile } from "node:fs/promises";
import { classicChampions } from "../app/classic-data.ts";

const outputPath = new URL("../app/classic-skills.generated.ts", import.meta.url);
const specialSlugs = { MonkeyKing: "wukong" };

function championSlug(key) {
  return specialSlugs[key] || key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function decodeNextPayload(html) {
  return [...html.matchAll(/self\.__next_f\.push\((\[.*?\])\)<\/script>/gs)]
    .map((match) => {
      try {
        return JSON.parse(match[1])[1] || "";
      } catch {
        return "";
      }
    })
    .join("");
}

function extractBalancedObject(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`Missing marker: ${marker}`);
  const start = source.indexOf("{", markerIndex + marker.length);
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === "{") depth += 1;
    else if (character === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`Unclosed object after marker: ${marker}`);
}

async function fetchChampion(champion) {
  const slug = championSlug(champion.key);
  const sourceUrl = `https://op.gg/zh-cn/lol/classic/champions/${slug}`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(sourceUrl, {
        headers: { "user-agent": "RIFT-LAB-Classic-Data-Generator/1.0" },
        signal: AbortSignal.timeout(20_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = decodeNextPayload(await response.text());
      const detail = JSON.parse(extractBalancedObject(payload, '"championDetail":'));
      if (detail.identifier !== champion.classicId) {
        throw new Error(`Expected ${champion.classicId}, received ${detail.identifier}`);
      }
      if (!Array.isArray(detail.abilities) || detail.abilities.length !== 5) {
        throw new Error(`Expected 5 abilities, received ${detail.abilities?.length ?? 0}`);
      }
      return {
        championId: champion.classicId,
        championName: champion.name,
        sourceUrl,
        abilities: detail.abilities.map((ability) => ({
          key: ability.key,
          name: ability.name,
          description: ability.description,
          icon: ability.imageUrl,
          cooldown: ability.cooldown,
          cost: ability.cost,
          range: ability.range,
        })),
      };
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    }
  }
  throw new Error(`${champion.key}: ${lastError?.message || lastError}`);
}

const records = [];
const queue = [...classicChampions];
const workers = Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const champion = queue.shift();
    const record = await fetchChampion(champion);
    records.push(record);
    process.stdout.write(`Fetched ${records.length}/${classicChampions.length}: ${champion.key}\n`);
  }
});
await Promise.all(workers);
records.sort((left, right) =>
  classicChampions.findIndex((champion) => champion.classicId === left.championId)
  - classicChampions.findIndex((champion) => champion.classicId === right.championId));

const output = `// Generated from OP.GG Classic 16.15 champion pages. Do not edit manually.
export type ClassicAbilityKey = "P" | "Q" | "W" | "E" | "R";

export type ClassicAbility = {
  key: ClassicAbilityKey;
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
};

export type ClassicChampionSkillSet = {
  championId: string;
  championName: string;
  sourceUrl: string;
  abilities: ClassicAbility[];
};

export const classicChampionSkills: ClassicChampionSkillSet[] = ${JSON.stringify(records, null, 2)};

export const classicSkillsByChampion = new Map(
  classicChampionSkills.map((entry) => [entry.championId, entry]),
);
`;

await writeFile(outputPath, output, "utf8");
console.log(`Generated ${records.length} champion skill sets at ${outputPath.pathname}`);
