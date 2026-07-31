# Project Agent Instructions

These instructions apply to every task performed in this repository and to all
agents or sub-agents working anywhere under this project directory.

## Mandatory Task Status Updates

All user-visible progress updates must start with exactly one of the following
status labels:

- `🔴 网络异常／正在重连`
  - Use when a network request fails, times out, disconnects, or is being
    retried.
  - Always include the current retry count, for example `重试 2/5`.
  - Briefly identify the failed service or request and the next recovery step.
  - Only use this status for a required, in-scope request whose failure blocks
    or degrades the requested project work (for example, an OP.GG data sync).
  - Do not use this status for optional analytics or telemetry, browser-tool
    session cleanup, a stale tab, or a wrapper timeout after the target page has
    already loaded successfully. Report those as `🟡 正在工作` only when they
    materially affect the current validation; otherwise continue silently.
- `🟡 正在工作`
  - Use while analyzing, reading files, inspecting data, researching, or doing
    long-running reasoning.
  - State the current step and what is being determined.
- `🔵 正在执行`
  - Use while running commands, modifying files, building, testing, committing,
    deploying, or otherwise changing project state.
  - List the concrete tasks currently being processed.
- `🟢 已完成`
  - Use only when the requested work is genuinely complete and all required
    validation has finished.
  - Summarize the outcome, validation result, and any user action that remains.

## Progress Heartbeat

- Never leave the user without a visible progress update for more than
  60 seconds while work is ongoing.
- If no new result is available within 60 seconds, proactively report:
  - the current step;
  - what has already completed;
  - the exact point that is slow or blocked;
  - the next action or retry being attempted.
- Continue sending an updated heartbeat at intervals of no more than 60 seconds
  until the task completes, fails, or requires user input.

## Status Accuracy

- Do not use `🟢 已完成` for partial results, pending deployments, unverified
  changes, or blocked work.
- When switching between analysis and execution, update the status label to
  match the current activity.
- Keep progress messages concise and scannable, but include enough detail for
  the user to understand what is happening without reading command output.
- Final responses must remain self-contained even when progress updates were
  sent earlier.

## 项目现状与工程约定

### 二、项目现状（v0.6.3）

- 站点名：**英雄联盟怀旧服攻略介绍**（原 RIFT//LAB，已全量更名；代码/测试中不允许再出现 RIFT//LAB 字样，rendered-html 测试会拦截）。
- 线上地址：https://lgsszh.github.io/lol-traditional/ （GitHub Pages，项目页）。
- 内容规模：60 位英雄、242 套 S3（2012–2013）考据玩法方案、152 件装备、50 符文、56 天赋、16 召唤师技能；另有 60 英雄 OP.GG 怀旧海斗攻略、2700 条分品质强化推荐、300 套技能加点与 188 个 KIWI_JADE 强化符文。
- 版本：package.json `0.6.3`；已发布 Git 标签截至 v0.6.2，本次改动发布后应新增 v0.6.3。
- 界面：OP.GG 风格蓝色系（强调色 `#5383e8`），每个英雄保留专属主题色（`--champion-accent`，来自 classic-data 的 accent 字段，不要统一掉）。
- 英雄直达链接：`#champion=<key小写>`（如 `#champion=ezreal`）直接打开该英雄出装页；`#build=` 是完整构筑分享链接，两者互斥，别破坏。

### 三、部署与 CI（最重要，改坏了网站就挂）

`.github/workflows/` 有两个工作流：

**1. deploy-pages.yml —— 部署（push 到 main 即触发）**
流程：checkout → Node 22 + npm 缓存 → `npm ci` → **`npm test`（部署门禁，任何测试失败都不会发布）** → `npm run build:pages`（静态导出，env：`RIFT_STATIC_EXPORT=1`、`NEXT_PUBLIC_BASE_PATH=/lol-traditional`、`NEXT_PUBLIC_SITE_URL=https://lgsszh.github.io/lol-traditional/`）→ 冒烟检查（out/index.html 必须包含 `/lol-traditional/_next/` 和 `/lol-traditional/classic-cache/`）→ configure-pages（enablement:true）→ deploy-pages。

铁律：
- **basePath 必须等于仓库名**。若将来改仓库名，必须同步改：workflow 两个 env、README 全部链接、package.json homepage、layout.tsx 默认 siteUrl。
- `npm ci` 要求 package.json 与 package-lock.json 的**根版本号一致**。升版本时两处都要改（lock 前 12 行内有两处 `"version"`），否则 CI 直接 EUSAGE 失败。

**2. sync-classic-data.yml —— 每日数据同步（UTC 04:20）**
流程：`npm run roster:check`（比对 OP.GG Classic 英雄名单，英雄增减/ID 变化即失败）→ `npm run data:update`（重抓数据+镜像图片）→ `npm test` → 只提交 8 个 `*.generated.ts` + `public/classic-cache/` + `public/classic-data/mayhem/` → 显式调度并等待 `deploy-pages.yml`。即使当天数据无变化，也会重试并验证 Pages 部署，补偿前一天可能失败的发布。
**任何一步失败会自动创建带 `classic-sync` 标签的 GitHub Issue**。设计意图：数值/技能/装备变化自动上线；英雄名单变化必须人工处理（因为 classic-data.ts 的定位/外号、classic-researched-guides.ts 的玩法是手工考据，机器不能瞎编）。

### 四、数据架构（谁生成、谁手写、谁不能碰）

| 文件 | 性质 | 说明 |
| --- | --- | --- |
| app/classic-data.ts | 手写 | 60 英雄目录（classicId/key/分路/职业/原型/外号/主题色/默认加点）、符文/天赋/召唤师技能目录、**5 套天赋预设**（攻21防9、攻21通9、防21通9、防21攻9、通21防9，均为合法 30 点）、runePresetIds |
| app/classic-researched-guides.ts | 生成后手维护 | 113 套 S3 考据玩法（每套含逐格符文页 runePreset、天赋预设、召唤师技能、加点、≤475 金出门装、4 档回城路线、六格出装、前中后期打法、来源 URL）。**装备/符文/技能全部用 ID，不要手改 ID**；新增方案照现有结构写并跑测试验证 |
| app/classic-build-guides.ts | 手写 | 方案组装逻辑：primary（primaryOverrides）+ researched + specialProfiles（潘森水晶瓶、蓝EZ、韩式/传统薇恩、AD豹女、攻速提莫、代理炼金、剑圣暴击/攻速）+ safeProfile，按 name-lane-style 去重 → 242 套 |
| app/*.generated.ts（8 个）+ public/classic-cache/ | 机器生成 | **绝不手改**，由 `npm run data:update` / `assets:update` 再生；怀旧海斗完整构筑与轻量排行摘要必须同批生成 |
| app/classic-mayhem-runtime.ts + public/classic-data/mayhem/ | 加载器 + 机器生成 | 怀旧海斗按英雄拆分的运行时数据；当前英雄按需加载，完整 188 项强化池只在打开图鉴时加载。JSON 由 `scripts/export-mayhem-runtime.mjs` 生成，**绝不手改** |
| app/page.tsx | 手写 | 主页面（约 1600 行，拆分是已知的将来任务）；ChampionAbilityPanel / ItemDetailPanel / HelpDrawer / OnboardingGuide 已拆到 app/components/（后两个懒加载） |

关键不变量：**每套方案的 runeSummary 文字必须与 runePreset 逐格一致、masteryPreset 必须是 30 点合法预设**——「一键应用」和 AI 助手写入面板的就是这些字段，测试逐格校验，文字和面板不同步会直接测挂。

### 五、测试契约（改功能前先看会不会踩线）

`npm test` = assets:check → node --test（champion-search + classic-detail-data）→ vinext build → rendered-html 测试。

- tests/classic-detail-data.test.mjs：每英雄 ≥3 套方案、六格恰好 6 件、出门装 ≤475 金、回城 ≥4 档、总方案数 ≥240、符文预设逐格有效、天赋 30 点、文字与预设同步、每英雄至少 1 套非 op.gg 来源的方案；并钉死了招牌玩法（潘森水晶瓶+双蓝药、剑圣暴击/攻速/AP 三流派、蓝EZ 773004+773025、韩式薇恩主W/传统主Q、AD豹女、攻速提莫、代理炼金鬼步+传送）。**删改这些英雄的方案前先看测试**。
- tests/champion-search.test.mjs：钉死了部分外号（薇恩 VN、盖伦、贾克斯「武器」、提莫「提百万/提莫队长」、莫甘娜「堕天使」、奥拉夫/卡萨丁留空等）。外号已全量网络核对过，改动需有据。
- tests/classic-mayhem-data.test.mjs：钉死 60 英雄 OP.GG 快照、1400 金、无惩戒、每英雄三品质各 15 个强化、5 套技能加点、强化名称与 ID 一致、召唤师技能／装备表行数、公开数值状态以及每日部署闭环。
- tests/mayhem-runtime.test.mjs：钉死 60 份逐英雄 JSON、目录哈希、字段完整性与完整强化池按需加载，防止重新把 60 英雄大快照塞回首屏。
- tests/opgg-mayhem-parser.test.mjs：钉死 OP.GG 技能表按“主加图标区 + 逐级 DOM 格子”语义解析；当前 15 级和未来 18 级均可读取，禁止退回整行文本固定长度切片。
- tests/rendered-html.test.mjs：SSR 必须含「英雄联盟怀旧服攻略介绍」，**不得**含 RIFT//LAB。
- classic-detail-data 里还有对 page.tsx / components / scripts 的**源码正则断言**（如 preloadWorkbenchAssets、localAssetUrl、applyClassicGuide、经典玩法攻略、一键应用完整方案等标识符和文案）——重命名这些东西必须同步改测试。

### 六、本地环境陷阱（Windows，历史踩坑记录）

- npm 直连 registry.npmjs.org 常超时：用 `npm install --registry=https://registry.npmmirror.com`；改动依赖后如 CI 报 `npm ci` 缺 @emnapi/* → 删 node_modules + lock 完整重装（Windows 增量安装会剪掉跨平台可选依赖）。
- git 推拉 github.com 需借系统代理：`git config --global http.https://github.com.proxy <系统代理>` 已配置过。本机 Git 系统配置默认使用 Schannel，曾发生 TLS 握手失败；本仓库已改用 Git 内置 OpenSSL + HTTP/1.1。推送必须执行 `npm run network:git-push -- origin <分支或标签>`，由 `scripts/network-guard.mjs` 对握手失败、连接复位和超时做最多 5 次指数退避；非快进、权限、页面契约等真实错误不会重试。
- GitHub Pages 在线核验必须执行 `npm run network:pages-verify`，不要临时拼 Node `fetch` 或 `curl`。该命令会添加无缓存参数，并仅对 TLS、`ECONNRESET`、超时、HTTP 408/425/429/5xx 重试；HTTP 404 或缺少标题、basePath、镜像路径会立即失败。
- **先 commit 再 `git pull --rebase`**（CRLF 漂移会让工作区显示为脏，rebase 拒绝执行）。
- PowerShell 5.1 写文件默认带 BOM：改 package.json / package-lock.json 必须用无 BOM UTF-8（vitefu 直接 JSON.parse，带 BOM 就炸）。
- tsconfig 已开 allowImportingTsExtensions（源码里 `import x from "./y.ts"` 是刻意的，别"修"掉后缀）。
- Windows 本机的 `agent-reach doctor` 对 Jina Reader 可能只检查模块存在而误报可用：当前系统 `curl`/Schannel 会报 `SEC_E_NO_CREDENTIALS`，且匿名 Jina 请求可能因网络信誉返回 401。**本项目常规调研不得先探测或调用 `r.jina.ai`**；即使 agent-reach 报告 Jina 可用，OP.GG 页面也应直接使用项目内 Node `fetch` 或平台 Web 连接器。Jina 失败不得误报成 OP.GG 网络异常，也不得对同一结构错误连续重试 5 次。禁止用 `curl -k` 绕过 TLS 校验；只有用户明确要求且已配置正式 Jina API Key 时才可使用，并按 HTTP 状态区分鉴权、限流和真实网络故障。

### 七、不要动的东西

- `build/`、`worker/`、`.openai/`：看着像杂物，但 vite.config.ts 直接引用（worker/index.ts 是构建入口），删了构建就挂。
- `public/classic-cache/`：哈希命名的图片镜像，与 classic-assets.generated.ts 的审计一一对应。
- 已发布的 git 标签和 Release。
- `#build=` / `#champion=` 两种 hash 语义。

### 八、发版流程（照做即可）

1. 改代码 → 本地 `npm test` 全绿；
2. 升 package.json 版本 + 同步 package-lock 根版本（两处）+ CHANGELOG.md 加条目；
3. commit → `git pull --rebase origin main` → `npm run network:git-push -- origin main`（CI 自动测试并部署）；
4. Actions 跑绿后：`git tag -a vX.Y.Z -m "..."` → `npm run network:git-push -- origin vX.Y.Z` → GitHub 上从该标签发 Release（正文抄 CHANGELOG 对应段落）；
5. 执行 `npm run network:pages-verify` 验证线上标题、basePath 与镜像资源。

### 九、常用命令

```
npm run dev            # 本地开发（vinext）
npm test               # 完整测试（部署门禁同款）
npm run typecheck      # tsc --noEmit
npm run build:pages    # Pages 静态导出（CI 用）
npm run data:update    # 重抓 OP.GG/Riot 数据 + 更新图片镜像
npm run data:check     # 校验数据快照无漂移
npm run roster:check   # 校验英雄名单与 OP.GG 一致
npm run assets:update  # 仅更新图片镜像与审计清单
npm run network:git-push -- origin main   # 抗 TLS 瞬断推送分支或标签
npm run network:pages-verify              # 抗连接复位验证线上 Pages
```

### 十、OP.GG 怀旧海斗解析与状态口径

- `SkillOrder Table` 必须通过 `scripts/opgg-mayhem-parser.mjs` 读取：3 个主加优先级来自技能图标容器，逐级加点来自独立等级格子。**禁止**把整行 Q/W/E/R 文本按 18 或 21 个字符硬切片，也禁止把 1–15 级臆补成 4–18 级。
- 当前 OP.GG 公开 1–15 级时原样显示；若以后页面增加到 16–18 级，解析器会按实际 DOM 自动保留，并继续校验大招位于 6/11/16 级。页面没公开的等级不猜写。
- HTTP 失败、超时、429、Cloudflare challenge 才属于 `🔴 网络异常／正在重连` 并允许重试。HTTP 200 且 OP.GG 正常返回、但 DOM/表格契约变化属于**页面结构或数据门禁失败**，不得误报为网络异常，也不得连续重试相同结构错误。
- OP.GG 完整构筑快照、轻量排行摘要和测试必须同批更新；共享图标不能覆盖精确中文强化名称，名称／ID／apiName 任一不一致即拒绝发布。
