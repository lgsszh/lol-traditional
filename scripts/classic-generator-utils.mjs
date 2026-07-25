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

export async function fetchText(url, label, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "RIFT-LAB-Classic-Data-Sync/2.0" },
        signal: AbortSignal.timeout(25_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
    }
  }
  throw new Error(`${label}: ${lastError?.message || lastError}`);
}

export async function fetchJson(url, label) {
  return JSON.parse(await fetchText(url, label));
}

export async function writeOrCheck(outputPath, output, label) {
  if (!isCheckMode) {
    await writeFile(outputPath, output, "utf8");
    return;
  }
  const current = await readFile(outputPath, "utf8").catch(() => "");
  if (current !== output) {
    throw new Error(`${label} 与线上数据不一致；请运行 npm run data:update`);
  }
}
