import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rift-lab-classic.lgss03-0419.chatgpt.site/";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase,
  title: "RIFT//LAB — 英雄联盟怀旧服构筑工作台",
  description: "无需登录即可使用：60 位经典英雄、50 个符文、56 个天赋、16 个召唤师技能与 152 件经典装备。",
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "RIFT//LAB — 英雄联盟怀旧服构筑工作台",
    description: "完整 Classic 16.15 数据，一站式配置符文、天赋、技能、召唤师技能与出装。",
    type: "website",
    images: [{ url: "og-public.png", width: 1731, height: 909, alt: "RIFT//LAB 构筑工作台" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIFT//LAB — 英雄联盟怀旧服构筑工作台",
    description: "无需登录 · 符文 · 天赋 · 技能 · 出装 · AI 草案",
    images: ["og-public.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
