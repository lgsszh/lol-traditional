import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  classicMasteries,
  classicRuneGroups,
  classicSpells,
} from "../app/classic-data.ts";
import {
  classicOpggCatalogSnapshot,
  classicOpggMasteries,
  classicOpggRunes,
  classicOpggSpells,
} from "../app/classic-catalog-opgg.generated.ts";

test("经典目录使用 OP.GG 原始字段，并隐藏其内部空白符文标题", () => {
  assert.equal(classicOpggRunes.length, 50);
  assert.equal(classicOpggMasteries.length, 56);
  assert.equal(classicOpggSpells.length, 16);
  assert.equal(classicOpggCatalogSnapshot.runes.length, 50);
  assert.equal(classicOpggCatalogSnapshot.masteries.length, 56);
  assert.equal(classicOpggCatalogSnapshot.spells.length, 16);

  const localRunes = classicRuneGroups.flatMap((group) => group.runes);
  const runeById = new Map(localRunes.map((rune) => [rune.id, rune]));
  const expectedRuneGroupByLocalId = new Map([
    ["mark", "runes-marks"],
    ["seal", "runes-seals"],
    ["glyph", "runes-glyphs"],
    ["quint", "runes-quintessences"],
  ]);
  for (const remote of classicOpggRunes) {
    const local = runeById.get(remote.runeId);
    assert.ok(local, `缺少符文 ${remote.runeId}`);
    if (remote.title === "空白符文") {
      assert.notEqual(local.name, remote.title);
      assert.match(local.name, /^次级/);
    } else {
      assert.equal(local.name, remote.title);
    }
    assert.equal(local.value, remote.description);
    assert.equal(local.per, Number(remote.description.match(/\d+(?:\.\d+)?/)?.[0]));
    assert.equal(local.icon, remote.imageUrl);
    const localGroup = classicRuneGroups.find((group) => group.runes.some((rune) => rune.id === remote.runeId));
    assert.equal(remote.group?.key, expectedRuneGroupByLocalId.get(localGroup?.id));
  }

  const masteryById = new Map(classicMasteries.map((mastery) => [mastery.id, mastery]));
  for (const remote of classicOpggMasteries) {
    const local = masteryById.get(remote.identifier);
    assert.ok(local, `缺少天赋 ${remote.identifier}`);
    assert.equal(local.name, remote.title);
    assert.equal(local.description, remote.description);
    assert.equal(local.icon, remote.imageUrl);
  }

  const spellById = new Map(classicSpells.map((spell) => [spell.id, spell]));
  for (const remote of classicOpggSpells) {
    const local = spellById.get(remote.identifier);
    assert.ok(local, `缺少召唤师技能 ${remote.identifier}`);
    assert.equal(local.name, remote.title);
    assert.equal(local.description, remote.description);
    assert.equal(local.icon, remote.imageUrl);
    assert.equal(local.cooldown, remote.cooldown);
  }
});

test("OP.GG 经典目录快照已纳入每日生成与部署提交", async () => {
  const [packageSource, workflowSource, generatorSource] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/sync-classic-data.yml", import.meta.url), "utf8"),
    readFile(new URL("../scripts/check-classic-catalog-parity.mjs", import.meta.url), "utf8"),
  ]);
  assert.match(packageSource, /classic:catalog:update/);
  assert.match(packageSource, /classic:catalog:check/);
  assert.match(workflowSource, /app\/classic-catalog-opgg\.generated\.ts/);
  assert.match(generatorSource, /expectedCount:\s*50/);
  assert.match(generatorSource, /expectedCount:\s*56/);
  assert.match(generatorSource, /expectedCount:\s*16/);
  assert.match(generatorSource, /--check/);
});
