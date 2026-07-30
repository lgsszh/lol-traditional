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

export async function fetchText(url, label, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.7",
          "user-agent": "lol-traditional-data-sync/0.6 (+https://github.com/lgsszh/lol-traditional)",
        },
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}`);
        const retryAfter = Number(response.headers.get("retry-after"));
        error.retryAfter = Number.isFinite(retryAfter) ? retryAfter * 1000 : 0;
        throw error;
      }
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        const backoff = Math.min(8_000, 750 * (2 ** (attempt - 1)));
        const delay = Math.max(error.retryAfter || 0, backoff + Math.floor(Math.random() * 350));
        console.warn(`${label}: retry ${attempt + 1}/${attempts} in ${delay}ms (${error.message})`);
        await sleep(delay);
      }
    }
  }
  const finalError = new Error(`${label}: ${lastError?.message || lastError}`);
  finalError.retryAfter = lastError?.retryAfter || 0;
  finalError.retryable = true;
  throw finalError;
}

export async function fetchJson(url, label) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      return JSON.parse(await fetchText(url, label, 1));
    } catch (error) {
      lastError = error;
      if (attempt < 4) {
        const delay = Math.min(8_000, 750 * (2 ** (attempt - 1)));
        console.warn(`${label}: JSON retry ${attempt + 1}/4 in ${delay}ms (${error.message})`);
        await sleep(delay);
      }
    }
  }
  const finalError = new Error(`${label}: ${lastError?.message || lastError}`);
  finalError.retryAfter = lastError?.retryAfter || 0;
  throw finalError;
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
