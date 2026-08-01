import assert from "node:assert/strict";
import test from "node:test";
import {
  buildGithubCodeSearchArgs,
  buildGitPushArgs,
  createPagesDispatcher,
  isTransientNetworkFailure,
  retryNetworkOperation,
  validatePagesHtml,
} from "../scripts/network-guard.mjs";

test("GitHub 代码检索固定走有界 gh 结构化查询", () => {
  assert.deepEqual(buildGithubCodeSearchArgs("Vayne Night Hunter", 12), [
    "search",
    "code",
    "Vayne Night Hunter",
    "--limit",
    "12",
    "--json",
    "repository,path,url,textMatches",
  ]);
  assert.equal(buildGithubCodeSearchArgs("test", 999)[4], "100");
  assert.throws(() => buildGithubCodeSearchArgs(""), /用法/);
});

test("Git 推送固定绕开 Schannel 并使用 HTTP/1.1", () => {
  assert.deepEqual(buildGitPushArgs("origin", "main"), [
    "-c",
    "http.sslBackend=openssl",
    "-c",
    "http.version=HTTP/1.1",
    "push",
    "origin",
    "main",
  ]);
  assert.throws(() => buildGitPushArgs("origin", ""), /用法/);
});

test("只对 TLS、连接复位、超时和明确可重试 HTTP 状态重试", () => {
  const reset = new TypeError("fetch failed", {
    cause: Object.assign(new Error("read ECONNRESET"), { code: "ECONNRESET" }),
  });
  assert.equal(isTransientNetworkFailure(reset), true);
  assert.equal(isTransientNetworkFailure(new Error("schannel: failed to receive handshake")), true);
  assert.equal(isTransientNetworkFailure(Object.assign(new Error("HTTP 429"), { retryable: true })), true);
  assert.equal(isTransientNetworkFailure(new Error("Pages 页面契约缺失")), false);
  assert.equal(isTransientNetworkFailure(new Error("remote rejected: non-fast-forward")), false);
});

test("瞬时错误自动退避后成功，结构错误不会盲目重试", async () => {
  let transientCalls = 0;
  const retries = [];
  const result = await retryNetworkOperation("test", async () => {
    transientCalls += 1;
    if (transientCalls < 3) {
      throw Object.assign(new Error("socket reset"), { code: "ECONNRESET" });
    }
    return "ok";
  }, {
    attempts: 5,
    baseDelayMs: 1,
    sleep: async () => {},
    onRetry: ({ attempt }) => retries.push(attempt),
  });
  assert.equal(result, "ok");
  assert.equal(transientCalls, 3);
  assert.deepEqual(retries, [1, 2]);

  let structuralCalls = 0;
  await assert.rejects(
    retryNetworkOperation("test", async () => {
      structuralCalls += 1;
      throw new Error("Pages 页面契约缺失");
    }, {
      attempts: 5,
      sleep: async () => {},
    }),
    /页面契约缺失/,
  );
  assert.equal(structuralCalls, 1);
});

test("Pages 在线核验同时要求标题、basePath 与本地镜像", () => {
  const html = [
    "英雄联盟怀旧服攻略介绍",
    "/lol-traditional/_next/static/app.js",
    "/lol-traditional/classic-cache/example.png",
  ].join("\n");
  assert.deepEqual(validatePagesHtml(html), {
    title: true,
    nextAssets: true,
    classicCache: true,
    bytes: Buffer.byteLength(html),
  });
  assert.throws(
    () => validatePagesHtml("英雄联盟怀旧服攻略介绍"),
    /Next\.js basePath 资源、本地图片镜像/,
  );
});

test("Pages 在线核验显式使用环境代理调度器", async () => {
  const dispatcher = createPagesDispatcher();
  assert.equal(dispatcher.constructor.name, "EnvHttpProxyAgent");
  await dispatcher.close();
});
