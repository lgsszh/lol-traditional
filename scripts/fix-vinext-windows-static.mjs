import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

if (process.platform !== "win32") process.exit(0);

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vinextCacheFile = path.join(
  projectRoot,
  "node_modules",
  "vinext",
  "dist",
  "server",
  "static-file-cache.js",
);

const brokenSource = "relativePath: path.relative(base, batch[j]),";
const fixedSource =
  'relativePath: path.relative(base, batch[j]).split(path.sep).join("/"),';

let source;
try {
  source = await readFile(vinextCacheFile, "utf8");
} catch (error) {
  console.error("[RIFT//LAB] 未找到 vinext，请先执行 npm install。");
  throw error;
}

if (source.includes(fixedSource)) process.exit(0);

if (!source.includes(brokenSource)) {
  console.log("[RIFT//LAB] 当前 vinext 不需要 Windows 静态资源兼容补丁。");
  process.exit(0);
}

await writeFile(vinextCacheFile, source.replace(brokenSource, fixedSource), "utf8");
console.log("[RIFT//LAB] 已修复 vinext 在 Windows 上的 CSS/JS 静态资源路径。");
