import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "RIFT//LAB — 英雄联盟怀旧服构筑工作台",
    description: "无需登录即可使用：60 位经典英雄、50 个符文、56 个天赋、16 个召唤师技能与 152 件经典装备。",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "RIFT//LAB — 英雄联盟怀旧服构筑工作台",
      description: "完整 Classic 16.15 数据，一站式配置符文、天赋、技能、召唤师技能与出装。",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1735, height: 909, alt: "RIFT//LAB 构筑工作台" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RIFT//LAB — 英雄联盟怀旧服构筑工作台",
      description: "无需登录 · 符文 · 天赋 · 技能 · 出装 · AI 草案",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
