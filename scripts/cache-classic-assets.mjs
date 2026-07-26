import { createHash } from "node:crypto";
import { mkdir, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import { classicChampions, classicMasteries, classicRuneGroups, classicSpells, masteryBackgrounds, runeBoardBackground } from "../app/classic-data.ts";
import { classicItems } from "../app/classic-items.generated.ts";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";

const publicDirectory = new URL("../public/classic-cache/", import.meta.url);
const manifestPath = new URL("../app/classic-assets.generated.ts", import.meta.url);
const checkOnly = process.argv.includes("--check");
const expected = new Map();

function add(source, label) {
  if (!source?.startsWith("http")) return;
  if (!expected.has(source)) expected.set(source, new Set());
  expected.get(source).add(label);
}

for (const champion of classicChampions) {
  const skillSet = classicChampionSkills.find((entry) => entry.championId === champion.classicId);
  if (!skillSet) throw new Error(`${champion.name}: missing skill set`);
  add(skillSet.portrait, `${champion.name}头像`);
  for (const artwork of skillSet.artworks || [{ imageUrl: skillSet.classicSplash, name: skillSet.classicSplashName }]) {
    add(artwork.imageUrl, `${champion.name}${artwork.name}原画`);
  }
  for (const ability of skillSet.abilities) add(ability.icon, `${champion.name}${ability.key}`);
}
for (const group of classicRuneGroups) {
  for (const rune of group.runes) add(rune.icon, rune.name);
}
for (const mastery of classicMasteries) {
  add(mastery.icon, mastery.name);
  add(mastery.icon.replace("_on.png", "_off.png"), `${mastery.name}未点亮`);
}
for (const spell of classicSpells) add(spell.icon, spell.name);
for (const item of classicItems) add(item.icon, item.name);
for (const [tree, source] of Object.entries(masteryBackgrounds)) add(source, `${tree}天赋背景`);
add(runeBoardBackground, "符文面板");

function extensionFor(url) {
  const path = new URL(url).pathname.toLowerCase();
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return ".jpg";
  if (path.endsWith(".webp")) return ".webp";
  if (path.endsWith(".gif")) return ".gif";
  return ".png";
}

function targetFor(url) {
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 24);
  const filename = `${hash}${extensionFor(url)}`;
  return {
    filename,
    fileUrl: new URL(filename, publicDirectory),
    publicUrl: `/classic-cache/${filename}`,
  };
}

function validImage(bytes, extension) {
  if (bytes.length < 64) return false;
  if (extension === ".jpg") return bytes[0] === 0xff && bytes[1] === 0xd8;
  if (extension === ".webp") return bytes.subarray(0, 4).toString("ascii") === "RIFF";
  if (extension === ".gif") return bytes.subarray(0, 3).toString("ascii") === "GIF";
  return bytes.subarray(1, 4).toString("ascii") === "PNG";
}

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function download(url, labels) {
  const target = targetFor(url);
  const existing = await readFile(target.fileUrl).catch(() => null);
  if (existing && validImage(existing, extensionFor(url))) {
    return { ...target, bytes: existing.length, sha256: createHash("sha256").update(existing).digest("hex") };
  }
  if (checkOnly) throw new Error(`missing local asset: ${[...labels].join(" / ")}`);

  let lastError;
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: "image/avif,image/webp,image/png,image/jpeg,*/*;q=0.8",
          "user-agent": "RIFT-LAB-Classic-Asset-Mirror/1.0",
        },
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (!validImage(bytes, extensionFor(url))) throw new Error("invalid image payload");
      const temporary = new URL(`${target.filename}.part`, publicDirectory);
      await writeFile(temporary, bytes);
      await rename(temporary, target.fileUrl);
      return { ...target, bytes: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex") };
    } catch (error) {
      lastError = error;
      if (attempt < 5) await sleep(Math.min(8_000, 500 * (2 ** (attempt - 1))));
    }
  }
  await unlink(new URL(`${target.filename}.part`, publicDirectory)).catch(() => {});
  throw new Error(`${[...labels].join(" / ")}: ${lastError?.message || lastError}`);
}

await mkdir(publicDirectory, { recursive: true });
const entries = [...expected.entries()];
const manifest = {};
const audit = {};
let cursor = 0;
const workers = Array.from({ length: 4 }, async () => {
  while (cursor < entries.length) {
    const index = cursor;
    cursor += 1;
    const [url, labels] = entries[index];
    const result = await download(url, labels);
    manifest[url] = result.publicUrl;
    audit[url] = {
      path: result.publicUrl,
      bytes: result.bytes,
      sha256: result.sha256,
      labels: [...labels],
    };
    if (!checkOnly && (index + 1) % 50 === 0) {
      console.log(`Cached ${index + 1}/${entries.length} Classic images`);
    }
  }
});
await Promise.all(workers);

const sortedManifest = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
const sortedAudit = Object.fromEntries(Object.entries(audit).sort(([a], [b]) => a.localeCompare(b)));
const output = `// Generated by scripts/cache-classic-assets.mjs. Do not edit manually.\n`
  + `export const classicAssetManifest = ${JSON.stringify(sortedManifest, null, 2)} as const;\n\n`
  + `export const classicAssetAudit = ${JSON.stringify(sortedAudit, null, 2)} as const;\n`;

if (checkOnly) {
  const current = await readFile(manifestPath, "utf8").catch(() => "");
  if (current !== output) throw new Error("Classic asset manifest is out of date; run npm run assets:update");
} else {
  await writeFile(manifestPath, output, "utf8");
}

const totalBytes = (await Promise.all([...new Set(Object.values(manifest))].map(async (path) => {
  const info = await stat(new URL(`../public${path}`, import.meta.url));
  return info.size;
}))).reduce((sum, size) => sum + size, 0);
console.log(`Classic asset mirror verified: ${entries.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
