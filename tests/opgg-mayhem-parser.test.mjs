import assert from "node:assert/strict";
import test from "node:test";
import { load } from "cheerio";
import { parseOpggSkillBuild } from "../scripts/opgg-mayhem-parser.mjs";

function skillRow(priority, levelSequence) {
  const priorityHtml = priority.map((key) =>
    `<div><img alt="${key} skill"><strong translate="no">${key}</strong></div>`).join("");
  const levelHtml = levelSequence.map((key) =>
    `<span><strong translate="no">${key}</strong></span>`).join("");
  const $ = load(`<table><tbody><tr><td>${priorityHtml}${levelHtml}</td></tr></tbody></table>`);
  return { $, row: $("tr").first() };
}

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

test("只有拼接文本、缺少语义格子或大招等级错误时拒绝发布", () => {
  const $ = load("<table><tbody><tr><td>EQWQWEEEREQEQRQQWW</td></tr></tbody></table>");
  assert.throws(() => parseOpggSkillBuild($, $("tr"), "正义天使"), /priority DOM/);

  const invalid = skillRow(["E", "Q", "W"], [..."QWEEREEQEQRQQWW"]);
  assert.throws(() => parseOpggSkillBuild(invalid.$, invalid.row, "正义天使"), /level sequence/);
});
