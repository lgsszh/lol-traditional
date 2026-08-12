import assert from "node:assert/strict";
import test from "node:test";
import { fetchJson, isRetryableHttpStatus } from "../scripts/classic-generator-utils.mjs";

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
