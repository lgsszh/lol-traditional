import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lgsszh.github.io/lol-traditional/";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase,
  title: "英雄联盟怀旧服攻略介绍 — 60 英雄玩法·出装·符文·天赋",
  description: "无需登录：60 位经典英雄、242 套 S3 考据玩法方案、50 个符文、56 个天赋、16 个召唤师技能与 152 件经典装备。",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "英雄联盟怀旧服攻略介绍",
    description: "242 套 S3 考据玩法：出门装、分档回城、符文、天赋、召唤师技能与六格出装全同步。",
    type: "website",
    images: [{ url: "og-public.jpg", width: 1200, height: 630, alt: "英雄联盟怀旧服攻略介绍" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "英雄联盟怀旧服攻略介绍",
    description: "无需登录 · 玩法 · 出装 · 符文 · 天赋 · AI 方案",
    images: ["og-public.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
