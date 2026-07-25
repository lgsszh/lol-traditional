export type GuideView = "runes" | "masteries" | "build" | "ai";

export type GuideStep = {
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  target?: string;
  view: GuideView;
};

export const guideSteps: GuideStep[] = [
  {
    eyebrow: "欢迎使用",
    title: "1 分钟完成第一套怀旧服构筑",
    description: "从选择英雄开始，依次检查符文、天赋、技能、召唤师技能与六格出装。",
    detail: "所有修改都会自动保存在当前浏览器，无需登录。完成后可复制一个包含整套方案的网址。",
    view: "runes",
  },
  {
    eyebrow: "第 1 步",
    title: "先选择你的英雄",
    description: "在英雄池中搜索名称、称号或定位，也可以按上、野、中、下、辅快速筛选。",
    detail: "切换英雄会载入对应的推荐方案，并重置当前正在编辑的内容。",
    target: '[data-guide="champion-picker"]',
    view: "runes",
  },
  {
    eyebrow: "第 2 步",
    title: "配置 30 枚经典符文",
    description: "点击符文名称可填满当前类别，使用 − / + 可以进行混搭。",
    detail: "9 印记、9 符印、9 雕纹、3 精华；属性总计与符文汇总会实时计算。",
    target: '[data-guide="rune-editor"]',
    view: "runes",
  },
  {
    eyebrow: "第 3 步",
    title: "分配 30 点经典天赋",
    description: "每在同一系前排投入 4 点，便会解锁下一排；最多投入 30 点。",
    detail: "撤回前排点数前，需要先撤回受它影响的后排天赋。",
    target: '[data-guide="mastery-editor"]',
    view: "masteries",
  },
  {
    eyebrow: "第 4 步",
    title: "检查技能、召唤师技能与出装",
    description: "点击被动或 Q/W/E/R 查看说明、逐级伤害公式、冷却、消耗和距离，再调整 1–18 级加点并选择 2 个召唤师技能。",
    detail: "装备商店可按 6 个等级分类、14 种属性和关键词组合筛选；点击合成树上的任意组件可继续查看它的完整信息。",
    target: '[data-guide="build-editor"]',
    view: "build",
  },
  {
    eyebrow: "第 5 步",
    title: "生成草案，检查后分享",
    description: "可让 AI 助手按本地 Classic 数据先生成草案，再回到各模块手动微调。",
    detail: "点击“分享”会把整套构筑写入网址；收到公开链接的人无需登录即可查看和继续编辑。",
    target: '[data-guide="ai-assistant"]',
    view: "ai",
  },
];

export const helpSections = [
  {
    title: "快速上手",
    body: "选择英雄 → 手动配置或生成草案 → 检查 30 枚符文、30 点天赋、18 级技能、2 个召唤师技能和 6 件装备 → 复制方案链接。",
  },
  {
    title: "符文模拟器",
    body: "每页共 30 个槽位：9 印记、9 符印、9 雕纹、3 精华。点击符文名称可填满当前类别，使用 − / + 可混搭；属性总计按数量实时计算。",
  },
  {
    title: "天赋模拟器",
    body: "总计最多 30 点。每在同一系前排投入 4 点，可解锁下一排；撤回前排点数前，需要先撤回受它影响的后排天赋。",
  },
  {
    title: "技能与出装",
    body: "每位英雄均使用经典图标与经典原画，可查看被动与 Q/W/E/R 的完整说明、逐级伤害/护盾/治疗公式、冷却、消耗和施法距离。装备商店显示全部 152 件装备及出门、消耗、基础、鞋子、史诗、传说分类数量，并支持 14 种属性、名称和说明搜索；合成树上的每件组件都可继续点击查询。",
  },
  {
    title: "数据来源与自动更新",
    body: "英雄经典原画、技能图标、说明、冷却、消耗、距离以及装备目录来自 OP.GG Classic；完整技能公式来自 Riot Data Dragon 3.15.5 历史数据。项目每天自动重新读取 OP.GG，只有在数据生成、完整性测试和网站构建全部通过后才会提交更新。",
  },
  {
    title: "AI 助手",
    body: "当前版本依据已载入的 Classic 数据和本地规则生成草案，并非实时联网胜率统计。生成后仍可回到各模拟器继续修改。",
  },
  {
    title: "保存与分享",
    body: "构筑自动保存在当前浏览器。清除浏览器数据或更换设备后不会自动同步；复制方案链接可跨设备分享完整配置。",
  },
];

export const shortcuts = [
  ["?", "打开使用帮助"],
  ["/", "聚焦英雄搜索"],
  ["Alt + 1", "打开符文模拟器"],
  ["Alt + 2", "打开天赋模拟器"],
  ["Alt + 3", "打开技能与出装"],
  ["Alt + 4", "打开 AI 助手"],
  ["Esc", "关闭教程或帮助"],
];
