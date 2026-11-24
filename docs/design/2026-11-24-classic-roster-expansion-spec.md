# 恢复 88 位 Classic 英雄目录的每日同步

11 月 23 日的 GitHub Actions 45198201693 因 OP.GG Classic 名单从 84 增至 88 位停止。直接读取 OP.GG 目录确认新增 60006 厄加特（首领之傲）、60077 乌迪尔（野兽之灵）、60091 泰隆（刀锋之影）、60101 泽拉斯（远古巫灵）。未发现上次平衡数值测试或 CommunityDragon 522 复发。

按官方历史技能和 OP.GG 当前身份补齐四位目录，每人至少三套合法方案，其中至少一套基于可核验 S3 原始攻略，站内适配明确说明。[Riot 26.23 Classic 更新公告](https://www.leagueoflegends.com/en-gb/news/game-updates/league-of-legends-patch-26-23-notes/#classic)确认四位均为经典形态；乌迪尔四姿态各五阶，没有 6／11／16 级的大招门槛，18 点均为主动加点。经典加点须在默认、应用、分享、保存与面板中统一验证，现代海斗不混用经典规则。其它 84 位英雄与历史攻略、名单保护、未确认来源标识及所有数据门禁保持。只生成真实海斗排名中存在的英雄统计。

验收：名单 88/88，四位英雄的身份、历史形态、出处与方案成立；全量生成、本地测试／类型／资源及运行时检查通过，独立审查无阻断。按仓库流程发版后实际重跑 GitHub 同步与关联 Pages，核验线上 HTTP 和资源，最后关闭 Issue #16。保留用户交接文件及之前未跟踪的历史诊断规格。

## 数据核对

- 两个名单信号（英雄 ID、详情 slug）均为 88/88。OP.GG Classic 16.23 生成 88 套经典技能与 154 件装备。四位新增英雄分别核对 Riot Data Dragon 3.15.5 的四个技能 ID、技能阶数和 OP.GG 的五张技能图标；距离、冷却或消耗与历史阶数冲突时保留原值，明确不确认等级对应。
- 历史原始攻略：[厄加特](https://www.mobafire.com/league-of-legends/build/unstoppable-urgot-quick-guide-to-urgot-329263)、[乌迪尔](https://www.mobafire.com/league-of-legends/build/s3-udyr-flight-of-the-phoenix-jungle-208007)、[泰隆](https://www.mobafire.com/league-of-legends/build/pubstomping-with-talon-updated-for-s3-266143)、[泽拉斯](https://www.mobafire.com/league-of-legends/build/enigmatic-annihilation-a-comprehensive-xerath-guide-199469)。每位三套，计 326 套完整构筑、141 条原始考据方案。
- Riot 16.23.1 与 CommunityDragon 16.23 生成 88 位现代技能资料；OP.GG 16.23 怀旧海斗仍只有 60 位有排行的英雄，不为未上榜英雄生成构筑。保持 188 个经典模式强化词条、明确公开数值状态。

## 回归验证

- 独立对比原有 84 位英雄、137 条考据和 314 套组装方案，内容保持；检查 326 套加点及四姿态的 24 种优先序，全部合法。
- 本地页面实测经典乌迪尔：默认 1 级点 R，允许在 1 级切换 Q/R，拒绝在 2 级重复升 R；一键应用、保存重开和分享链接均保留合法加点。
- 现代技能按实际资料校验重做后的形态和完整阶数，不把某个平衡补丁的伤害定值设成同步门禁。
