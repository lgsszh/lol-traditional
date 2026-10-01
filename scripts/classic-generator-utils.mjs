import { readFile, writeFile } from "node:fs/promises";

export const isCheckMode = process.argv.includes("--check");

export function decodeNextPayload(html) {
  return [...html.matchAll(/self\.__next_f\.push\((\[.*?\])\)<\/script>/gs)]
    .map((match) => {
      try {
        return JSON.parse(match[1])[1] || "";
      } catch {
        return "";
      }
    })
    .join("");
}

function extractBalanced(source, marker, opener, closer) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`Missing marker: ${marker}`);
  const start = source.indexOf(opener, markerIndex + marker.length);
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === opener) depth += 1;
    else if (character === closer) {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`Unclosed value after marker: ${marker}`);
}

export function extractBalancedObject(source, marker) {
  return extractBalanced(source, marker, "{", "}");
}

export function extractBalancedArray(source, marker) {
  return extractBalanced(source, marker, "[", "]");
}

export const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export function isRetryableHttpStatus(status) {
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

export function retryAfterMilliseconds(value, now = Date.now()) {
  if (!value?.trim()) return 0;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return seconds >= 0 ? seconds * 1000 : 0;
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.max(0, date - now) : 0;
}

function isDataDragonJson(url) {
  const parsed = new URL(url);
  return parsed.protocol === "https:"
    && parsed.hostname === "ddragon.leagueoflegends.com"
    && /^\/cdn\/\d+\.\d+\.\d+\/data\/[a-z]{2}_[A-Z]{2}\/.*\.json$/.test(parsed.pathname);
}

export async function fetchText(url, label, attempts = 4, { wait = sleep } = {}) {
  let lastError;
  const dataDragonJson = isDataDragonJson(url);
  let bypassErrorCache = false;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const requestUrl = new URL(url);
      if (bypassErrorCache) {
        requestUrl.searchParams.set("sync_retry", `${Date.now()}-${attempt}`);
      }
      const response = await fetch(requestUrl.href, {
        headers: {
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.7",
          "user-agent": "lol-traditional-data-sync/0.6 (+https://github.com/lgsszh/lol-traditional)",
          ...(bypassErrorCache ? { "cache-control": "no-cache" } : {}),
        },
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}`);
        error.status = response.status;
        error.retryable = isRetryableHttpStatus(response.status);
        error.retryAfter = retryAfterMilliseconds(response.headers.get("retry-after"));
        // Retry the exact patch/locale; only the CDN cache key may change.
        if (dataDragonJson && error.retryable) bypassErrorCache = true;
        throw error;
      }
      return await response.text();
    } catch (error) {
      lastError = error;
      if (error.retryable === false || error.retryAfter > 60_000) break;
      if (attempt < attempts) {
        const backoff = dataDragonJson
          ? Math.min(24_000, 1_500 * (2 ** (attempt - 1)))
          : Math.min(8_000, 750 * (2 ** (attempt - 1)));
        const delay = Math.max(error.retryAfter || 0, backoff + Math.floor(Math.random() * 350));
        console.warn(`${label}: retry ${attempt + 1}/${attempts} in ${delay}ms (${error.message})`);
        await wait(delay);
      }
    }
  }
  const finalError = new Error(`${label}: ${lastError?.message || lastError}`);
  finalError.status = lastError?.status;
  finalError.retryAfter = lastError?.retryAfter || 0;
  finalError.retryable = lastError?.retryable !== false;
  throw finalError;
}

export async function fetchJson(url, label, options = {}) {
  const body = await fetchText(url, label, isDataDragonJson(url) ? 5 : 4, options);
  try {
    return JSON.parse(body);
  } catch (cause) {
    const error = new Error(`${label}: invalid JSON response`, { cause });
    error.retryable = false;
    throw error;
  }
}

export async function writeOrCheck(outputPath, output, label) {
  if (!isCheckMode) {
    await writeFile(outputPath, output, "utf8");
    return;
  }
  const current = await readFile(outputPath, "utf8").catch(() => "");
  if (current.replace(/\r\n/g, "\n") !== output.replace(/\r\n/g, "\n")) {
    throw new Error(`${label} 与线上数据不一致；请运行 npm run data:update`);
  }
}
