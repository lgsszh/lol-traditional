import { spawnSync } from "node:child_process";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { EnvHttpProxyAgent } from "undici";

const DEFAULT_ATTEMPTS = 5;
const DEFAULT_BASE_DELAY_MS = 800;
const DEFAULT_PAGE_URL = "https://lgsszh.github.io/lol-traditional/";
const DEFAULT_BASE_PATH = "/lol-traditional";

const transientCodes = new Set([
  "ABORT_ERR",
  "ECONNABORTED",
  "ECONNREFUSED",
  "ECONNRESET",
  "EHOSTUNREACH",
  "ENETDOWN",
  "ENETRESET",
  "ENETUNREACH",
  "EPIPE",
  "ETIMEDOUT",
  "UND_ERR_CONNECT_TIMEOUT",
  "UND_ERR_HEADERS_TIMEOUT",
  "UND_ERR_SOCKET",
]);

const transientPatterns = [
  /\bschannel\b/i,
  /\bECONNRESET\b/i,
  /\bETIMEDOUT\b/i,
  /SSL\/TLS connection failed/i,
  /TLS handshake/i,
  /failed to receive handshake/i,
  /connection (?:was )?reset/i,
  /failed to connect/i,
  /could not connect/i,
  /couldn't connect/i,
  /connection timed out/i,
  /operation timed out/i,
  /recv failure/i,
  /remote end hung up unexpectedly/i,
  /proxy connect aborted/i,
];

function errorChain(error) {
  const chain = [];
  const seen = new Set();
  let current = error;
  while (current && typeof current === "object" && !seen.has(current)) {
    seen.add(current);
    chain.push(current);
    current = current.cause;
  }
  return chain;
}

export function isTransientNetworkFailure(error) {
  if (error?.retryable === true) return true;
  const chain = errorChain(error);
  if (chain.some((entry) => transientCodes.has(String(entry.code ?? "").toUpperCase()))) {
    return true;
  }
  const text = chain
    .map((entry) => `${entry.name ?? ""} ${entry.code ?? ""} ${entry.message ?? ""}`)
    .join("\n");
  return transientPatterns.some((pattern) => pattern.test(text));
}

export async function retryNetworkOperation(
  label,
  operation,
  {
    attempts = DEFAULT_ATTEMPTS,
    baseDelayMs = DEFAULT_BASE_DELAY_MS,
    sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)),
    onRetry = ({ attempt, attempts: total, delay, error }) => {
      console.warn(`${label}: retry ${attempt + 1}/${total} in ${delay}ms (${error.message})`);
    },
  } = {},
) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation(attempt);
    } catch (error) {
      lastError = error;
      if (!isTransientNetworkFailure(error) || attempt === attempts) throw error;
      const delay = Math.min(baseDelayMs * (2 ** (attempt - 1)), 8_000);
      onRetry({ attempt, attempts, delay, error });
      await sleep(delay);
    }
  }
  throw lastError;
}

export function buildGitPushArgs(remote, refspec) {
  if (!remote || !refspec) {
    throw new Error("用法：npm run network:git-push -- <remote> <branch-or-tag>");
  }
  return [
    "-c",
    "http.sslBackend=openssl",
    "-c",
    "http.version=HTTP/1.1",
    "push",
    remote,
    refspec,
  ];
}

function commandError(result) {
  const stderr = String(result.stderr ?? "").trim();
  const stdout = String(result.stdout ?? "").trim();
  const error = result.error ?? new Error(stderr || stdout || `git exited with ${result.status}`);
  if (!error.message.includes(stderr) && stderr) {
    error.message = `${error.message}\n${stderr}`;
  }
  return error;
}

export async function pushGitRef(remote, refspec, options = {}) {
  const args = buildGitPushArgs(remote, refspec);
  return retryNetworkOperation("GitHub push", () => {
    const result = spawnSync("git", args, {
      cwd: options.cwd ?? process.cwd(),
      encoding: "utf8",
      timeout: options.timeoutMs ?? 120_000,
      windowsHide: true,
    });
    if (result.status !== 0 || result.error) throw commandError(result);
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    return result;
  }, options);
}

export function validatePagesHtml(html, {
  title = "英雄联盟怀旧服攻略介绍",
  basePath = DEFAULT_BASE_PATH,
} = {}) {
  const required = [
    { label: "站点标题", value: title },
    { label: "Next.js basePath 资源", value: `${basePath}/_next/` },
    { label: "本地图片镜像", value: `${basePath}/classic-cache/` },
  ];
  const missing = required.filter((entry) => !html.includes(entry.value));
  if (missing.length > 0) {
    const error = new Error(`Pages 页面契约缺失：${missing.map((entry) => entry.label).join("、")}`);
    error.code = "PAGES_CONTRACT_MISMATCH";
    throw error;
  }
  return {
    title: true,
    nextAssets: true,
    classicCache: true,
    bytes: Buffer.byteLength(html),
  };
}

export function createPagesDispatcher() {
  return new EnvHttpProxyAgent();
}

function retryableHttpError(status) {
  const error = new Error(`GitHub Pages returned HTTP ${status}`);
  error.status = status;
  error.retryable = status === 408 || status === 425 || status === 429 || status >= 500;
  return error;
}

export async function verifyPagesOnline(pageUrl = DEFAULT_PAGE_URL, options = {}) {
  const attempts = options.attempts ?? DEFAULT_ATTEMPTS;
  const ownedDispatcher = options.dispatcher ? null : createPagesDispatcher();
  const dispatcher = options.dispatcher ?? ownedDispatcher;
  try {
    return await retryNetworkOperation("GitHub Pages verify", async (attempt) => {
      const url = new URL(pageUrl);
      url.searchParams.set("network_guard", `${Date.now()}-${attempt}`);
      const response = await fetch(url, {
        cache: "no-store",
        dispatcher,
        redirect: "follow",
        headers: {
          "cache-control": "no-cache",
          pragma: "no-cache",
          "user-agent": "lol-traditional-network-guard/1.0",
        },
        signal: AbortSignal.timeout(options.timeoutMs ?? 20_000),
      });
      if (!response.ok) throw retryableHttpError(response.status);
      const html = await response.text();
      return {
        attempt,
        status: response.status,
        url: response.url,
        ...validatePagesHtml(html, options),
      };
    }, { ...options, attempts });
  } finally {
    await ownedDispatcher?.close();
  }
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (command === "git-push") {
    await pushGitRef(args[0], args[1]);
    return;
  }
  if (command === "pages-verify") {
    const result = await verifyPagesOnline(args[0] || DEFAULT_PAGE_URL);
    console.log(JSON.stringify(result));
    return;
  }
  throw new Error(
    "用法：node scripts/network-guard.mjs <git-push remote ref|pages-verify [url]>",
  );
}

const isMain = process.argv[1]
  && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
