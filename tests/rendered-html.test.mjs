import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server renders the complete Classic builder", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /英雄联盟怀旧服攻略介绍/);
  assert.match(html, /怀旧海斗/);
  assert.match(html, /全同步工作台/);
  assert.doesNotMatch(html, /RIFT\/\/LAB/);
  assert.match(html, /经典符文模拟器/);
  assert.match(html, /天赋模拟器/);
  assert.match(html, /60 英雄 · 16 技能/);
  assert.match(html, /符文 50 · 天赋 56 · 召唤师技能 16 · 装备 152/);
  assert.match(html, /OP\.GG 原画/);
  assert.match(html, /阵容方案/);
  assert.match(html, /使用帮助/);
  assert.match(html, /data-guide="champion-picker"/);
  assert.match(html, /data-guide="rune-editor"/);
  assert.match(html, /aria-label="打开使用帮助"/);
  assert.match(html, /无需账号即可使用与保存/);
  assert.doesNotMatch(html, /空白符文/);
  assert.doesNotMatch(html, /14\.24\.1/);
  assert.doesNotMatch(html, /codex-preview/);
});
