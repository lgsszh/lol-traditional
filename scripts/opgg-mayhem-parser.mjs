import { decodeNextPayload } from "./classic-generator-utils.mjs";

const activeSkillKeys = new Set(["Q", "W", "E"]);
const allSkillKeys = new Set(["Q", "W", "E", "R"]);

function statisticsPatches(payload) {
  return [...payload.matchAll(/"query"\s*:\s*/g)]
    .map((match) => match.index + match[0].length)
    .filter((start) => payload[start] === "{")
    .map((start) => JSON.parse(extractBalancedObjectAt(payload, start, "OP.GG statistics query")))
    .filter((query) => query.region === "global" && query.tier === "all")
    .map((query) => query.patch);
}

export function parseOpggRootPatch(html, payload, livePatch, communityPatch) {
  const patches = [...new Set(statisticsPatches(payload))];
  const patch = patches[0];
  if (patches.length !== 1 || !/^\d+\.\d+$/.test(patch)) {
    throw new Error("Cannot determine an unambiguous OP.GG statistics patch");
  }
  const title = html.match(/<title[^>]*>(.*?)<\/title>/s)?.[1] || "";
  const titlePatches = [...title.matchAll(/\b\d+\.\d+\b/g)].map((match) => match[0]);
  if (titlePatches.length !== 1 || titlePatches[0] !== patch) {
    throw new Error(`OP.GG title statistics patch does not match query ${patch}`);
  }
  const assetPatches = [...new Set(
    [...html.matchAll(/\/meta\/images\/lol\/([^/]+)\/champion\//g)].map((match) => match[1]),
  )];
  const assetPatch = assetPatches[0];
  if (assetPatches.length !== 1 || !/^\d+\.\d+\.\d+$/.test(assetPatch)) {
    throw new Error(`Missing, unknown or mixed OP.GG champion asset versions: ${assetPatches.join(",")}`);
  }
  const metadataPatches = [...new Set(
    [...payload.matchAll(/"metaLatestVersion":([^,}\]]+)/g)].map((match) => JSON.parse(match[1])),
  )];
  const metadataPatch = metadataPatches[0];
  const assetMajorMinor = assetPatch.split(".").slice(0, 2).join(".");
  if (metadataPatches.length > 1
    || (metadataPatches.length === 1 && metadataPatch !== assetMajorMinor)
    || (assetMajorMinor !== patch && metadataPatch !== assetMajorMinor)) {
    throw new Error(`OP.GG asset metadata does not confirm ${assetPatch} for statistics patch ${patch}`);
  }
  const [opggMajor, opggMinor] = patch.split(".").map(Number);
  const [assetMajor, assetMinor] = assetMajorMinor.split(".").map(Number);
  if (assetMajor > opggMajor || (assetMajor === opggMajor && assetMinor > opggMinor)) {
    throw new Error(`Unexpected OP.GG asset patch ${assetPatch || "(missing)"} for statistics patch ${patch}`);
  }
  if (![livePatch, communityPatch].every((sourcePatch) => {
    if (!/^\d+\.\d+(?:\.\d+)?$/.test(sourcePatch)) return false;
    const [major, minor] = sourcePatch.split(".").map(Number);
    return opggMajor === major && opggMinor <= minor;
  })) {
    throw new Error(
      `Cross-source patch mismatch: OP.GG ${patch}/${assetPatch}, `
      + `CommunityDragon ${communityPatch}, Data Dragon ${livePatch}`,
    );
  }
  return { patch, assetPatch };
}

export function validateOpggChampionPageIdentity($, ranking, patch, tab, modeUrl) {
  const expectedCanonical = `${modeUrl}/${ranking.key}/${tab}`;
  const canonical = $("link[rel='canonical']").attr("href");
  const title = $("title").text().trim();
  const hasModeTitle = title.includes("ARAM: Mayhem Classic-ish")
    || title.includes("海克斯大乱斗 经典模式版");
  const html = $.html();
  const visibleBody = $("body").clone();
  visibleBody.find("script, style, noscript, template").remove();
  const patches = [
    ...statisticsPatches(decodeNextPayload(html)),
    ...[...visibleBody.text().matchAll(/Ver:\s*(\d+\.\d+)\b/g)].map((match) => match[1]),
  ];
  const hasPatchEvidence = patches.length > 0 && patches.every((entry) => entry === patch);
  if (canonical !== expectedCanonical || !title.includes(ranking.name) || !hasModeTitle || !hasPatchEvidence) {
    throw new Error(
      `${ranking.name}: unexpected ${tab} identity `
      + `(canonical=${canonical || "missing"}, title=${title || "missing"}, patch=${hasPatchEvidence})`,
    );
  }
}

export function parseUnavailableRunes($, section, championName) {
  const messages = section.find("p").filter((_, element) =>
    /^(?:数据未找到|暂无数据)[。.!！]?$/.test($(element).text().trim()));
  if (section.length !== 1 || messages.length !== 1 || section.find("table").length !== 0) {
    throw new Error(`${championName}: OP.GG rune availability changed; parser review is required`);
  }
  return messages.text().trim();
}

function validateMetric(metric, label) {
  if (
    !Number.isFinite(metric.pickRate)
    || !Number.isInteger(metric.games)
    || !Number.isFinite(metric.winRate)
    || metric.games <= 0
    || metric.pickRate < 0
    || metric.pickRate > 100
    || metric.winRate < 0
    || metric.winRate > 100
  ) {
    throw new Error(`${label}: invalid metric ${JSON.stringify(metric)}`);
  }
  return metric;
}

export function parseOpggMetric(row, label) {
  const cells = row.find("td");
  const pickText = cells.eq(-2).text().replace(/\s+/g, "");
  const winText = cells.eq(-1).text().replace(/\s+/g, "");
  const metricText = `${pickText}${winText}`;
  const pickMatch = pickText.match(/(\d+(?:\.\d+)?)%/);
  const gamesMatch = pickText.match(/([\d,]+)场/);
  const winMatch = winText.match(/(\d+(?:\.\d+)?)%/);

  // OP.GG 16.17 keeps the ordered recommendation rows but omits all three
  // statistics from their server-rendered HTML. Preserve the sourced order and
  // expose no metric rather than inventing values. A partially rendered metric
  // remains a contract failure because it may indicate a real DOM change.
  if (!/[\d,.]+%|[\d,]+场/.test(metricText)) return null;
  if (!pickMatch || !gamesMatch || !winMatch) {
    const compact = row.text().replace(/\s+/g, "");
    throw new Error(`${label}: cannot parse metric row "${compact.slice(0, 160)}"`);
  }
  return validateMetric({
    pickRate: Number(pickMatch[1]),
    games: Number(gamesMatch[1].replace(/,/g, "")),
    winRate: Number(winMatch[1]),
  }, label);
}

function skillKey(value) {
  const key = String(value ?? "").trim();
  return allSkillKeys.has(key) ? key : null;
}

function extractBalancedObjectAt(source, start, label) {
  if (source[start] !== "{") {
    throw new Error(`${label}: OP.GG object does not start at the expected position`);
  }
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === "\"") inString = false;
      continue;
    }
    if (character === "\"") inString = true;
    else if (character === "{") depth += 1;
    else if (character === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${label}: OP.GG object is incomplete`);
}

export function parseOpggAugmentGroups(payload, championName) {
  const marker = '"data":{"1":[';
  const markerIndex = payload.lastIndexOf(marker);
  if (markerIndex < 0) {
    throw new Error(`${championName}: OP.GG augment data object is missing`);
  }
  const objectStart = markerIndex + '"data":'.length;
  const source = extractBalancedObjectAt(payload, objectStart, championName);
  try {
    return JSON.parse(source);
  } catch (error) {
    throw new Error(`${championName}: OP.GG augment data is invalid JSON (${error.message})`);
  }
}

export function parseOpggSkillBuild($, skillRow, championName) {
  const skillCell = skillRow.find("td").first();
  if (skillCell.length !== 1) {
    throw new Error(`${championName}: OP.GG skill row has no primary cell`);
  }

  const priority = skillCell.find("img").toArray().map((image) =>
    skillKey($(image).parent().children("strong[translate='no']").first().text()));
  const levelSequence = skillCell.find("span > strong[translate='no']").toArray().map((element) =>
    skillKey($(element).text()));

  if (
    priority.length !== 3
    || priority.some((key) => !key || !activeSkillKeys.has(key))
    || new Set(priority).size !== 3
  ) {
    throw new Error(`${championName}: invalid OP.GG skill priority DOM`);
  }
  if (
    levelSequence.length < 15
    || levelSequence.length > 18
    || levelSequence.some((key) => !key)
  ) {
    throw new Error(
      `${championName}: expected 15–18 semantic OP.GG level cells, received ${levelSequence.length}`,
    );
  }

  const skillCounts = Object.fromEntries(
    [...allSkillKeys].map((key) => [key, levelSequence.filter((entry) => entry === key).length]),
  );
  if (
    ["Q", "W", "E"].some((key) => skillCounts[key] < 1 || skillCounts[key] > 5)
    || skillCounts.R < 0
    || skillCounts.R > 3
  ) {
    throw new Error(`${championName}: invalid OP.GG level sequence ${levelSequence.join("")}`);
  }

  return { priority, levelSequence };
}
