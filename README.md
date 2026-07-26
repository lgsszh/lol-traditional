# RIFT//LAB 怀旧服构筑工作台

[![Deploy](https://github.com/lgsszh/lol-traditional/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/lgsszh/lol-traditional/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

面向英雄联盟怀旧服（Classic）的网页构筑工具：60 位经典英雄、
245 套按 S3（2012–2013）社区攻略考据的完整玩法方案、152 件经典
装备、50 枚符文、56 点天赋和 16 个召唤师技能。无需登录，打开公开
网址即可使用。

**在线使用：<https://lgsszh.github.io/lol-traditional/>**

普通用户不需要安装 Node.js，也不需要命令行。首次进入网站会显示
新手指引；之后可点击右上角“使用帮助”重新查看。

## 功能特性

- **245 套完整玩法方案**：每位英雄至少 4 套（主流派、S3 考据研究
  流派、特色流派与稳健路线）。每套方案包含出门装（≤475 金校验）、
  按金币分档的回城购买路线、六格成装与备选、召唤师技能、逐格符文
  页、30 点天赋预设、18 级技能加点和前中后期打法说明，并标注原始
  攻略来源链接。
- **数据全同步**：「一键应用完整方案」与 AI 助手写入的符文、天赋、
  召唤师技能、加点、出装与界面文字说明逐格一致，杜绝“文字一套、
  面板另一套”。
- **AI 构筑助手**：用自然语言描述需求（如“韩式薇恩”“冥火秒C”
  “代理断线”），从已核验方案中匹配并写入完整构筑。
- **英雄资料库**：经典原画与技能图标、被动与 Q/W/E/R 逐级伤害
  公式、冷却、消耗、施法距离；按位置、中文名、称号、英文名、职业
  与常用外号搜索。
- **装备商店与合成树**：按 6 个等级分类、14 种属性和关键词筛选，
  查看价格拆分与游戏式合成路径。
- **本地存档与分享**：构筑保存在浏览器本地，可生成免登录分享链接。

## 本地开发

需要 Node.js `>=22.18.0`。

```bash
npm install
npm run dev
```

| 命令 | 说明 |
| --- | --- |
| `npm test` | 数据与搜索测试 → Vinext 构建 → 服务端渲染测试 |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm run build` | Vinext 生产构建 |
| `npm run build:pages` | GitHub Pages 静态导出（CI 设置环境变量） |
| `npm run data:update` | 重新抓取 OP.GG Classic 与 Riot 历史数据并更新快照 |
| `npm run data:check` | 在线重新生成并确认仓库快照没有漂移 |

开发服务器只应在开发期间运行，请勿设置为开机启动或定时重启。

## 数据来源与校验

- 英雄、装备、符文、天赋、召唤师技能目录与图像：OP.GG Classic
  16.15 快照；完整技能公式：Riot Data Dragon 3.15.5。
- 玩法方案：Mobafire / MetaSRC Classic 等 2012–2013 攻略逐英雄
  考据（见每套方案内的来源链接），装备名称与价格按当前目录校正。
- 所有图片均镜像到 `public/classic-cache/` 并做哈希审计；测试校验
  装备 ID、召唤师技能 ID、符文预设逐格有效性、天赋 30 点、出门装
  预算与方案完整性。
- GitHub Actions 每日自动重新读取数据源，校验与测试全部通过才会
  提交更新；部署工作流在 `npm test` 通过后构建并发布 Pages。

## 目录结构

```text
app/                        页面、组件与数据模块
  classic-data.ts           英雄／符文／天赋／召唤师技能目录
  classic-build-guides.ts   玩法方案组装与校验逻辑
  classic-researched-guides.ts  116 套 S3 考据玩法数据（带来源）
  *.generated.ts            OP.GG / Data Dragon 同步生成的数据快照
scripts/                    数据同步、资产镜像与本地启动脚本
tests/                      数据完整性、搜索与渲染测试
.github/workflows/          Pages 部署与每日数据同步
public/classic-cache/       图像资产本地镜像（哈希命名）
```

## 清理旧版后台任务

早期本地版本曾安装 `RIFT-LAB Local Server` 与
`RIFT-LAB Local Server Watchdog` 两个 Windows 计划任务。如仍受
影响，以管理员身份运行 `.\uninstall-background.cmd` 清理，之后
直接使用公开网址。

## 许可证与免责声明

代码以 [MIT 许可证](LICENSE) 发布；`public/classic-cache/` 中镜像
的原画、技能与装备图标等图像资产版权归 Riot Games 所有，不在 MIT
授权范围内（详见 LICENSE 附加说明）。

RIFT//LAB 是非官方粉丝工具，与 Riot Games、OP.GG 无隶属或授权
关系；怀旧服上线后的最终数值以正式客户端与官方公告为准。
