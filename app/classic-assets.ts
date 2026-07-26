import { classicAssetManifest } from "./classic-assets.generated";

const missingAsset = "/classic-cache/missing.svg";

/**
 * Runtime pages never request OP.GG/Riot image CDNs directly. Data sync records
 * the authoritative remote URL, while this resolver serves the verified local
 * mirror produced by `npm run assets:update`.
 */
export function localAssetUrl(source: string | null | undefined) {
  if (!source) return missingAsset;
  if (source.startsWith("/")) return source;
  return classicAssetManifest[source as keyof typeof classicAssetManifest] || missingAsset;
}

