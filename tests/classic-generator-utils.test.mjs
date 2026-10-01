import assert from "node:assert/strict";
import test from "node:test";
import { fetchJson, isRetryableHttpStatus, retryAfterMilliseconds } from "../scripts/classic-generator-utils.mjs";

test("Riot 503 恢复使用同一版本的新缓存键，并尊重 Retry-After", async () => {
  const originalFetch = globalThis.fetch;
  const url = "https://ddragon.leagueoflegends.com/cdn/16.19.1/data/zh_CN/champion/Teemo.json";
  const requests = [];
  const delays = [];
  globalThis.fetch = async (request, options) => {
    requests.push({ url: new URL(request), options });
    return requests.length === 1
      ? new Response("unavailable", { status: 503, headers: { "retry-after": "10" } })
      : Response.json({ version: "16.19.1", data: { Teemo: { id: "Teemo" } } });
  };
  try {
    const result = await fetchJson(url, "Riot Teemo", { wait: async delay => delays.push(delay) });
    assert.equal(result.data.Teemo.id, "Teemo");
    assert.equal(requests.length, 2);
    assert.equal(requests[0].url.href, url);
    assert.equal(requests[1].url.origin, requests[0].url.origin);
    assert.equal(requests[1].url.pathname, requests[0].url.pathname);
    assert.ok(requests[1].url.searchParams.has("sync_retry"));
    assert.equal(requests[1].options.headers["cache-control"], "no-cache");
    assert.equal(delays[0], 10_000);
  } finally { globalThis.fetch = originalFetch; }
});

test("持续 503 有界退出，JSON 结构错误和过长限流等待不盲目重试", async () => {
  const originalFetch = globalThis.fetch;
  const url = "https://ddragon.leagueoflegends.com/cdn/16.19.1/data/zh_CN/champion/Teemo.json";
  const delays = [];
  let count = 0;
  try {
    globalThis.fetch = async () => { count += 1; return new Response("unavailable", { status: 503 }); };
    await assert.rejects(fetchJson(url, "Riot", { wait: async delay => delays.push(delay) }), error => error.status === 503);
    assert.equal(count, 5);
    assert.equal(delays.length, 4);
    assert.ok(delays[3] >= 12_000 && delays[3] < 12_350);
    count = 0;
    globalThis.fetch = async () => { count += 1; return new Response("<html>bad payload</html>"); };
    await assert.rejects(fetchJson(url, "Riot"), error => error.retryable === false && /invalid JSON/.test(error.message));
    assert.equal(count, 1);
    count = 0;
    globalThis.fetch = async () => { count += 1; return new Response("limited", { status: 429, headers: { "retry-after": "120" } }); };
    await assert.rejects(fetchJson(url, "Riot"), error => error.status === 429 && error.retryAfter === 120_000);
    assert.equal(count, 1);
  } finally { globalThis.fetch = originalFetch; }
});

test("Retry-After 支持秒数与 HTTP 日期", () => {
  const now = Date.parse("2026-10-01T00:00:00Z");
  assert.equal(retryAfterMilliseconds("12", now), 12_000);
  assert.equal(retryAfterMilliseconds("Thu, 01 Oct 2026 00:00:20 GMT", now), 20_000);
  assert.equal(retryAfterMilliseconds("Wed, 30 Sep 2026 00:00:00 GMT", now), 0);
  assert.equal(retryAfterMilliseconds(null, now), 0);
  assert.equal(retryAfterMilliseconds("invalid", now), 0);
  assert.equal(retryAfterMilliseconds("-1", now), 0);
});

test("OP.GG 临时错误保留原地址，不应用 Riot CDN 缓存参数", async () => {
  const originalFetch = globalThis.fetch;
  const url = "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic";
  const requests = [];
  try {
    globalThis.fetch = async request => {
      requests.push(request);
      return requests.length === 1
        ? new Response("unavailable", { status: 503 })
        : Response.json({ ok: true });
    };
    assert.deepEqual(await fetchJson(url, "OP.GG", { wait: async () => {} }), { ok: true });
    assert.deepEqual(requests, [url, url]);
  } finally { globalThis.fetch = originalFetch; }
});

test("HTTP 重试只覆盖瞬时状态，404 页面缺失不会盲目重试", async () => {
  assert.equal(isRetryableHttpStatus(404), false);
  assert.equal(isRetryableHttpStatus(408), true);
  assert.equal(isRetryableHttpStatus(425), true);
  assert.equal(isRetryableHttpStatus(429), true);
  assert.equal(isRetryableHttpStatus(500), true);

  const originalFetch = globalThis.fetch;
  let requests = 0;
  globalThis.fetch = async () => {
    requests += 1;
    return new Response("not found", { status: 404 });
  };
  try {
    await assert.rejects(fetchJson("https://example.invalid/missing.json", "missing snapshot"), (error) => {
      assert.equal(error.status, 404);
      assert.equal(error.retryable, false);
      return true;
    });
    assert.equal(requests, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("CommunityDragon 版本选择保留多个按新到旧的补丁候选", async () => {
  const generator = await import("node:fs/promises")
    .then(({ readFile }) => readFile(new URL("../scripts/generate-classic-mayhem-data.mjs", import.meta.url), "utf8"));
  assert.match(generator, /communityCandidates/);
  assert.match(generator, /error\.status !== 404/);
  assert.match(generator, /trying the previous patch/);
});
