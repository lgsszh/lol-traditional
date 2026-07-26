import { classicAssetManifest } from "./classic-assets.generated.ts";

// NEXT_PUBLIC_BASE_PATH is inlined by the bundler at build time, so the
// GitHub Pages deployment under /<repo>/ resolves the mirrored files
// correctly. The try/catch keeps the module safe in any runtime that does
// not define `process` (local dev serves from the site root either way).
const basePath = (() => {
  try {
    return process.env.NEXT_PUBLIC_BASE_PATH || "";
  } catch {
    return "";
  }
})();

const missingAsset = "/classic-cache/missing.svg";

function withBasePath(path: string) {
  if (!basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

/**
 * Runtime pages never request OP.GG/Riot image CDNs directly. Data sync records
 * the authoritative remote URL, while this resolver serves the verified local
 * mirror produced by `npm run assets:update`.
 */
export function localAssetUrl(source: string | null | undefined) {
  if (!source) return withBasePath(missingAsset);
  if (source.startsWith("/")) return withBasePath(source);
  return withBasePath(
    classicAssetManifest[source as keyof typeof classicAssetManifest] || missingAsset,
  );
}
