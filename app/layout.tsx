import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lgsszh.github.io/lol-traditional/";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase,
  title: "英雄联盟怀旧服攻略介绍 — 5v5 与怀旧海斗攻略",
  description: "无需登录：60 位经典英雄、242 套 S3 考据玩法方案，以及现代技能搭配经典地图、装备与强化符文的怀旧海斗攻略。",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "英雄联盟怀旧服攻略介绍",
    description: "242 套 S3 考据玩法与怀旧海斗攻略：现代英雄技能、经典装备、KIWI_JADE 强化符文全覆盖。",
    type: "website",
    images: [{ url: "og-public.jpg", width: 1200, height: 630, alt: "英雄联盟怀旧服攻略介绍" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "英雄联盟怀旧服攻略介绍",
    description: "无需登录 · 5v5 怀旧服 · 海克斯大乱斗经典模式版 · AI 方案",
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
