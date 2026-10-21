import assert from "node:assert/strict";
import test from "node:test";
import { load } from "cheerio";
import {
  parseOpggAugmentGroups,
  parseOpggMetric,
  parseOpggRootPatch,
  parseOpggSkillBuild,
  parseUnavailableRunes,
  validateOpggChampionPageIdentity,
} from "../scripts/opgg-mayhem-parser.mjs";

test("统计 16.21 与元数据确认的 16.20.1 图标可独立演进", () => {
  const html = '<title>经典模式版 16.21 版本梯队名单</title><img src="/meta/images/lol/16.20.1/champion/Ahri.png">';
  const payload = '"query":{"region":"global","tier":"all","patch":"16.21"},"metaLatestVersion":"16.20"';
  assert.deepEqual(parseOpggRootPatch(html, payload, "16.21.1", "16.21"), {
    patch: "16.21", assetPatch: "16.20.1",
  });
});

function patchPage({ patch = "16.21", assets = ["16.20.1"], metadata = ["16.20"], titlePatch = patch } = {}) {
  return {
    html: `<title>经典模式版 ${titlePatch} 版本梯队名单</title>`
      + assets.map((version) => `<img src="/meta/images/lol/${version}/champion/Ahri.png">`).join(""),
    payload: `"query":${JSON.stringify({ region: "global", tier: "all", patch })},`
      + metadata.map((version) => `"metaLatestVersion":${JSON.stringify(version)}`).join(","),
  };
}

test("资源版本规则对未来补丁通用，同补丁无元数据仍兼容", () => {
  for (const options of [
    { assets: ["16.21.1"], metadata: [] },
    { assets: ["16.21.2"], metadata: ["16.21", "16.21"] },
    { patch: "17.10", assets: ["17.9.3"], metadata: ["17.9"] },
    { patch: "17.1", assets: ["16.24.1"], metadata: ["16.24"] },
  ]) {
    const { html, payload } = patchPage(options);
    const patch = options.patch || "16.21";
    assert.deepEqual(parseOpggRootPatch(html, payload, `${patch}.1`, patch), {
      patch, assetPatch: options.assets[0],
    });
  }
});

test("旧资源缺少确认、元数据矛盾、超前或混杂资源、未知版本均拒绝", () => {
  for (const options of [
    { metadata: [] },
    { metadata: ["16.21"] },
    { metadata: ["16.20", "16.21"] },
    { metadata: [null] },
    { metadata: ["unknown"] },
    { assets: ["16.22.1"], metadata: ["16.22"] },
    { assets: ["17.1.1"], metadata: ["17.1"] },
    { assets: ["16.20.1", "16.21.1"] },
    { assets: ["16.20.1", "16.20.2"] },
    { assets: ["latest", "16.20.1"] },
    { assets: ["unknown"] },
    { assets: [] },
    { titlePatch: "16.20" },
    { patch: "unknown" },
  ]) {
    const { html, payload } = patchPage(options);
    assert.throws(() => parseOpggRootPatch(html, payload, "16.21.1", "16.21"), undefined, JSON.stringify(options));
  }
  const { html, payload } = patchPage();
  assert.throws(() => parseOpggRootPatch(html, payload + ',"query":{"region":"global","tier":"all","patch":"16.20"}', "16.21.1", "16.21"), /statistics patch/);
});

test("统计补丁不可以超过任一数值源，不能拿资源版本当数值门禁", () => {
  const { html, payload } = patchPage();
  for (const [live, community] of [
    ["16.20.1", "16.21"], ["16.21.1", "16.20"],
    ["17.1.1", "16.21"], ["16.21.1", "unknown"],
  ]) {
    assert.throws(() => parseOpggRootPatch(html, payload, live, community), /Cross-source patch mismatch/);
  }
});

test("英雄详情统计证据独立于图标，并继续校验模式、英雄和 canonical", () => {
  const modeUrl = "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic";
  const ranking = { key: "ahri", name: "九尾妖狐" };
  const query = (patch, extra = {}) => `<script>self.__next_f.push(${JSON.stringify([1, `"query":${JSON.stringify({ patch, region: "global", tier: "all", ...extra })}`])})</script>`;
  for (const tab of ["build", "augments", "skills"]) {
    const page = ({ evidence = query("16.21"), asset = "16.20.1", canonical = `${modeUrl}/ahri/${tab}`, name = ranking.name, mode = "海克斯大乱斗 经典模式版" } = {}) =>
      load(`<html><head><title>${name} ${mode} 16.21</title><link rel="canonical" href="${canonical}"></head><body><img src="/meta/images/lol/${asset}/champion/Ahri.png">${evidence}</body></html>`);
    for (const evidence of [query("16.21"), query("16.21", { extra: {} }), "<span>Ver: 16.21</span>", '<script>self.__next_f.push([1,\'"query":"$ref"\'])</script><span>Ver: 16.21</span>']) {
      assert.doesNotThrow(() => validateOpggChampionPageIdentity(page({ evidence }), ranking, "16.21", tab, modeUrl));
    }
    for (const options of [
      { evidence: "", asset: "16.21.1" },
      { evidence: query("16.20"), asset: "16.21.1" },
      { evidence: query("16.20") + "<span>Ver: 16.21</span>" },
      { evidence: query("16.20", { extra: {} }) + "<span>Ver: 16.21</span>" },
      { evidence: query("16.21") + query("16.20") },
      ...["script", "style", "noscript", "template"].map((tag) => ({ evidence: `<${tag}>const unrelated = 'Ver: 16.21';</${tag}>` })),
      { evidence: "<span>Ver: 16.2</span>" },
      { canonical: `${modeUrl}/annie/${tab}` },
      { name: "黑暗之女" },
      { mode: "排位" },
    ]) {
      assert.throws(() => validateOpggChampionPageIdentity(page(options), ranking, "16.21", tab, modeUrl), /identity/);
    }
  }
});

test("符文空状态兼容新版文案，但不能吞掉真实表格或未知内容", () => {
  for (const message of ["数据未找到", "暂无数据。", "暂无数据"]) {
    const $ = load(`<section><p class="new-style">${message}</p></section>`);
    assert.equal(parseUnavailableRunes($, $("section"), "阿狸"), message);
  }
  for (const content of ["<p>加载失败</p>", "<p>暂无数据。</p><table></table>", "<p>暂无数据。</p><p>暂无数据。</p>", ""]) {
    const $ = load(`<section>${content}</section>`);
    assert.throws(() => parseUnavailableRunes($, $("section"), "阿狸"), /parser review/);
  }
});

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

test("推荐行统计完整时解析，OP.GG 完全隐藏统计时保留空值", () => {
  const complete = load(`
    <table><tbody><tr><td>推荐内容</td><td>12.34% 1,234场</td><td>56.78%</td></tr></tbody></table>
  `);
  assert.deepEqual(parseOpggMetric(complete("tr"), "完整行"), {
    pickRate: 12.34,
    games: 1234,
    winRate: 56.78,
  });

  const hidden = load("<table><tbody><tr><td><img alt='闪现'><img alt='标记'></td></tr></tbody></table>");
  assert.equal(parseOpggMetric(hidden("tr"), "无统计行"), null);
});

test("推荐行只公开部分统计时仍拒绝发布", () => {
  const partial = load("<table><tbody><tr><td>推荐内容</td><td>12.34%</td><td></td></tr></tbody></table>");
  assert.throws(() => parseOpggMetric(partial("tr"), "残缺行"), /cannot parse metric row/);
});
