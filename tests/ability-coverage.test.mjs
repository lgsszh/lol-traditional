import assert from "node:assert/strict";
import test from "node:test";
import { classicChampionSkills } from "../app/classic-skills.generated.ts";
import { liveClassicChampions } from "../app/classic-mayhem.generated.ts";

const abilityKeys = ["P", "Q", "W", "E", "R"];
const unresolvedPattern = /{{|}}|@[a-z0-9_.]+|数据状态：?unavailable|客户端内部变量/i;

function assertAbilitySet(label, champions, { requireStatus = false } = {}) {
  assert.equal(champions.length, 60, `${label} 必须覆盖 60 位英雄`);
  const abilities = [];
  for (const champion of champions) {
    assert.ok(champion.stats, `${label} ${champion.championName || champion.name} 缺少等级面板基础属性`);
    for (const field of ["hp", "attackDamage", "attackSpeed", "armor", "magicResist", "moveSpeed", "attackRange"]) {
      assert.equal(
        Number.isFinite(champion.stats[field]),
        true,
        `${label} ${champion.championName || champion.name} 的 ${field} 不可计算`,
      );
    }
    assert.deepEqual(
      champion.abilities.map((ability) => ability.key),
      abilityKeys,
      `${label} ${champion.championName || champion.name} 技能键不完整`,
    );
    for (const ability of champion.abilities) {
      const identity = `${label} ${champion.championName || champion.name} ${ability.key}`;
      assert.ok(ability.name.trim(), `${identity} 缺少名称`);
      assert.ok(ability.description.trim(), `${identity} 缺少说明`);
      assert.ok(ability.numericDetail?.trim(), `${identity} 缺少独立数值明细`);
      assert.doesNotMatch(`${ability.description}\n${ability.numericDetail}`, unresolvedPattern, `${identity} 含未解析占位符`);
      assert.ok(ability.numericVersion?.trim(), `${identity} 缺少数值版本`);
      if (requireStatus) {
        assert.notEqual(ability.numericStatus, "unavailable", `${identity} 数值不可用`);
        assert.deepEqual(ability.unresolvedTokens, [], `${identity} 仍有未解析客户端字段`);
      }
      abilities.push(ability);
    }
  }
  assert.equal(abilities.length, 300, `${label} 必须正好覆盖 300 个技能`);
}

test("03 与 04 共 600 个技能均有来源、说明和独立数值明细", () => {
  assertAbilitySet("03", classicChampionSkills);
  assertAbilitySet("04", liveClassicChampions, { requireStatus: true });
});

test("关键被动的隐藏冷却与作用范围不得在生成时丢失", () => {
  const vayne = liveClassicChampions.find((champion) => champion.key === "Vayne");
  const mundo = liveClassicChampions.find((champion) => champion.key === "DrMundo");
  const vaynePassive = vayne?.abilities.find((ability) => ability.key === "P");
  const mundoPassive = mundo?.abilities.find((ability) => ability.key === "P");
  assert.equal(vaynePassive?.range, "2000");
  assert.match(vaynePassive?.numericDetail || "", /30.*移动速度/);
  assert.match(mundoPassive?.cooldown || "", /60.*51.*42.*33.*24.*15/);
  assert.match(mundoPassive?.numericDetail || "", /0\.4.*2\.3%/);
});

test("03 与 04 共用可切换等级和装备的技能面板", async () => {
  const source = await import("node:fs/promises").then(({ readFile }) =>
    readFile(new URL("../app/components/ChampionAbilityPanel.tsx", import.meta.url), "utf8"));
  assert.match(source, /growthMultiplier/);
  assert.match(source, /min="1"/);
  assert.match(source, /max="18"/);
  assert.match(source, /equippedItems/);
  assert.match(source, /仅合计商店说明中的固定面板属性/);
});
