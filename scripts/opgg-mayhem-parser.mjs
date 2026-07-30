const activeSkillKeys = new Set(["Q", "W", "E"]);
const allSkillKeys = new Set(["Q", "W", "E", "R"]);

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
