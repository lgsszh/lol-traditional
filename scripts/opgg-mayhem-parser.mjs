const activeSkillKeys = new Set(["Q", "W", "E"]);
const allSkillKeys = new Set(["Q", "W", "E", "R"]);

function skillKey(value) {
  const key = String(value ?? "").trim();
  return allSkillKeys.has(key) ? key : null;
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

  const openingSequence = levelSequence.slice(0, 3);
  const skillCounts = Object.fromEntries(
    [...allSkillKeys].map((key) => [key, levelSequence.filter((entry) => entry === key).length]),
  );
  const expectedUltimateLevels = [6, 11, 16].filter((level) => level <= levelSequence.length);
  const actualUltimateLevels = levelSequence.flatMap((key, index) => key === "R" ? [index + 1] : []);
  if (
    new Set(openingSequence).size !== 3
    || openingSequence.some((key) => !activeSkillKeys.has(key))
    || ["Q", "W", "E"].some((key) => skillCounts[key] < 1 || skillCounts[key] > 5)
    || actualUltimateLevels.join(",") !== expectedUltimateLevels.join(",")
  ) {
    throw new Error(`${championName}: invalid OP.GG level sequence ${levelSequence.join("")}`);
  }

  return { priority, levelSequence };
}
