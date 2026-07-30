import assert from "node:assert/strict";
import test from "node:test";
import { load } from "cheerio";
import {
  parseOpggAugmentGroups,
  parseOpggSkillBuild,
} from "../scripts/opgg-mayhem-parser.mjs";

function skillRow(priority, levelSequence) {
  const priorityHtml = priority.map((key) =>
    `<div><img alt="${key} skill"><strong translate="no">${key}</strong></div>`).join("");
  const levelHtml = levelSequence.map((key) =>
    `<span><strong translate="no">${key}</strong></span>`).join("");
  const $ = load(`<table><tbody><tr><td>${priorityHtml}${levelHtml}</td></tr></tbody></table>`);
  return { $, row: $("tr").first() };
}

test("强化数据精确提取 data 外层对象，不会误取第一条强化对象", () => {
  const decoy = '"data":{"1":[],"4":[],"8":[]}';
  const expected = {
    1: [{ id: 1, nested: { note: "字符串中的 } 不结束对象" } }],
    4: [{ id: 4 }],
    8: [{ id: 8 }],
  };
  const payload = `prefix ${decoy} target "data":${JSON.stringify(expected)} suffix`;
  assert.deepEqual(parseOpggAugmentGroups(payload, "测试英雄"), expected);
});

test("技能表按优先级图标与逐级 DOM 分区解析，不按整行固定字母串切片", () => {
  const sequence = [..."QWEEEREQEQRQQWW"];
  const { $, row } = skillRow(["E", "Q", "W"], sequence);
  assert.deepEqual(parseOpggSkillBuild($, row, "正义天使"), {
    priority: ["E", "Q", "W"],
    levelSequence: sequence,
  });
});

test("OP.GG 若公开到 18 级会直接保留新增格子，无需修改固定长度", () => {
  const sequence = [..."QWEEEREQEQRQQWWRWW"];
  const { $, row } = skillRow(["E", "Q", "W"], sequence);
  assert.deepEqual(parseOpggSkillBuild($, row, "正义天使").levelSequence, sequence);
});

test("真实方案可跳过或延后大招，初始三点也可重复基础技能", () => {
  const delayedUltimate = [..."QWEQQRQWQWWRWEE"];
  const repeatedOpening = [..."QQEWQRQEQEREEWW"];
  const twistedFate = skillRow(["Q", "W", "E"], delayedUltimate);
  const nidalee = skillRow(["Q", "E", "W"], repeatedOpening);

  assert.deepEqual(
    parseOpggSkillBuild(twistedFate.$, twistedFate.row, "卡牌大师").levelSequence,
    delayedUltimate,
  );
  assert.deepEqual(
    parseOpggSkillBuild(nidalee.$, nidalee.row, "狂野女猎手").levelSequence,
    repeatedOpening,
  );
});

test("只有拼接文本、缺少语义格子或技能点数越界时拒绝发布", () => {
  const $ = load("<table><tbody><tr><td>EQWQWEEEREQEQRQQWW</td></tr></tbody></table>");
  assert.throws(() => parseOpggSkillBuild($, $("tr"), "正义天使"), /priority DOM/);

  const invalid = skillRow(["E", "Q", "W"], [..."QQQQQQWEEERRRRW"]);
  assert.throws(() => parseOpggSkillBuild(invalid.$, invalid.row, "正义天使"), /level sequence/);
});
