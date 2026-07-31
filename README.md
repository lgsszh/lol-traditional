# 英雄联盟怀旧服攻略介绍

[![Deploy](https://github.com/lgsszh/lol-traditional/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/lgsszh/lol-traditional/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

面向英雄联盟怀旧服（Classic）的玩法攻略与构筑工作台：60 位经典
英雄、242 套按 S3（2012–2013）社区攻略考据的完整玩法方案、152 件
经典装备、50 枚符文、56 点天赋和 16 个召唤师技能；并提供使用
现代英雄技能、经典地图与装备的「海克斯大乱斗 · 经典模式版」攻略。
无需登录，打开公开网址即可使用。

**在线使用：<https://lgsszh.github.io/lol-traditional/>**

普通用户不需要安装 Node.js，也不需要命令行。首次进入网站会显示
新手指引；之后可点击右上角“使用帮助”重新查看。

## 功能特性

- **海克斯大乱斗 · 经典模式版**：同一批 60 位经典英雄使用
  Riot 16.15.1 / CommunityDragon 16.15 现代技能、可公开数值与基础／
  成长属性；客户端未能静态展开的公式明确标为“部分”，不补猜数值。
  模式搭配经典装备，独立按 1400 金出门预算校验，不包含
  峡谷分路、打野或惩戒；
  完整收录客户端 `KIWI_JADE` 的 188 个强化符文，并与新版海斗
  `KIWI` 交叉验证、标出 25 个经典专属词条。60 位英雄的排名、
  胜率、选用率、每个品质前 15 个强化、前 5 套技能加点、召唤师
  技能、出门装、鞋子和核心装备均来自 OP.GG Classic-ish 每日快照；
  OP.GG 未提供的普通符文区不会显示，也不会用峡谷符文或人工方案替代。
- **242 套完整玩法方案**：每位英雄至少 3 套（主流派、S3 考据研究
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
| `npm run data:update` | 重新抓取 OP.GG Classic、现代技能与海斗模式池并更新快照 |
| `npm run data:check` | 在线重新生成并确认仓库快照没有漂移 |
| `npm run classic:catalog:update` | 更新 OP.GG 的 50 符文／56 天赋／16 召唤师技能目录 |
| `npm run classic:catalog:check` | 在线校验 OP.GG 经典目录快照 |
| `npm run mayhem:update` | 更新现代技能、两套强化池与 60 英雄 OP.GG 统计 |
| `npm run mayhem:check` | 在线重新生成并校验全部怀旧海斗快照 |
| `npm run roster:check` | 校验 OP.GG Classic 英雄名单是否与本站一致 |

开发服务器只应在开发期间运行，请勿设置为开机启动或定时重启。

## 数据来源与校验

- 英雄、装备、符文、天赋、召唤师技能目录与图像：OP.GG Classic
  16.15 每日快照；经典完整技能公式：Riot Data Dragon 3.15.5。
- 怀旧海斗现代技能、基础与成长属性、公开公式：Riot Data Dragon
  16.15.1 与 CommunityDragon 16.15 同补丁客户端数据；新版海斗 `KIWI`、
  怀旧海斗 `KIWI_JADE` 模式池及强化名称／品质／图标／公开效果：
  CommunityDragon 16.15 客户端导出。
- 怀旧海斗逐英雄排名、胜率、选用率、强化顺序、召唤师技能、技能
  加点、出门装、鞋子和核心装备：OP.GG Classic-ish 16.15。同步
  保留页面显示值和场次，不自行推算或修正 OP.GG 的统计。
- 玩法方案：Mobafire / MetaSRC Classic 等 2012–2013 攻略逐英雄
  考据（见每套方案内的来源链接），装备名称与价格按当前目录校正。
- 所有图片均镜像到 `public/classic-cache/` 并做哈希审计；测试校验
  装备 ID、召唤师技能 ID、符文预设逐格有效性、天赋 30 点、出门装
  预算与方案完整性。
- GitHub Actions 每日自动重新读取数据源：数值、技能与装备变化在
  校验与测试通过后自动提交，并显式调度 `deploy-pages.yml` 上线；
  英雄名单增减、ID 变化或页面结构
  变化会让同步失败并**自动开 Issue** 提醒人工处理（手工维护的定位、
  外号与玩法数据无法自动改写）。每日运行都会调度并等待 Pages
  部署结果，即使前一次部署失败、次日没有新数据，也会自动补偿重试。

Windows 本地发布统一使用 `npm run network:git-push -- origin <分支或标签>`；
脚本固定采用 Git 内置 OpenSSL + HTTP/1.1，并只对 TLS 握手、连接复位与超时
进行最多 5 次指数退避。部署后使用 `npm run network:pages-verify` 做无缓存
在线核验；HTTP 404 或页面缺少标题、basePath、镜像资源时会立即失败，不会
被网络重试掩盖。

## 目录结构

```text
app/                        页面、组件与数据模块
  classic-data.ts           英雄／符文／天赋／召唤师技能目录
  classic-build-guides.ts   玩法方案组装与校验逻辑
  classic-researched-guides.ts  113 套 S3 考据玩法数据（带来源）
  classic-catalog-opgg.generated.ts  经典符文／天赋／召唤师技能快照
  classic-mayhem.generated.ts   现代技能与两套海斗强化快照
  classic-mayhem-opgg.generated.ts  60 英雄 OP.GG 怀旧海斗统计
  classic-mayhem-runtime.ts     按当前英雄异步加载怀旧海斗数据
  components/ClassicMayhemGuide.tsx  怀旧海斗攻略与图鉴
  *.generated.ts            OP.GG / Data Dragon 同步生成的数据快照
scripts/                    数据同步、资产镜像与本地启动脚本
tests/                      数据完整性、搜索与渲染测试
.github/workflows/          Pages 部署与每日数据同步
public/classic-cache/       图像资产本地镜像（哈希命名）
public/classic-data/mayhem/  60 份逐英雄运行时 JSON 与强化图鉴
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

「英雄联盟怀旧服攻略介绍」是非官方粉丝工具，与 Riot Games、OP.GG
无隶属或授权关系；怀旧服的最终数值以正式客户端与官方公告为准。
