import {
  classicBuildPresets,
  classicChampions,
  classicRuneGroups,
  runePresetIds,
  type ChampionArchetype,
  type ClassicChampion,
} from "./classic-data.ts";
import {
  researchedProfiles,
  type ResearchedMasteryPreset,
  type ResearchedRunePreset,
} from "./classic-researched-guides.ts";

export type ClassicGuideItem = {
  itemId: string;
  quantity: number;
  note?: string;
};

export type ClassicRecallStep = {
  gold: string;
  title: string;
  items: ClassicGuideItem[];
  purpose: string;
};

export type ClassicBuildPhase = {
  title: string;
  items: string[];
  note: string;
};

export type ClassicBuildVariant = {
  id: string;
  name: string;
  lane: ClassicChampion["lane"];
  style: string;
  summary: string;
  runeArchetype: ChampionArchetype;
  runeSummary: string;
  runePreset: ResearchedRunePreset;
  masteryPreset: ResearchedMasteryPreset;
  spellIds: [string, string];
  skillOrder: ClassicChampion["spellOrder"];
  startingItems: ClassicGuideItem[];
  earlyPurchases: ClassicGuideItem[];
  recallPlan: ClassicRecallStep[];
  buildPhases: ClassicBuildPhase[];
  coreItems: string[];
  situationalItems: string[];
  gamePlan: [string, string, string];
  tags: string[];
  sourceNote: string;
  sourceUrls: string[];
};

const item = (itemId: string, quantity = 1, note?: string): ClassicGuideItem => ({
  itemId,
  quantity,
  ...(note ? { note } : {}),
});

const laneSpells: Record<ClassicChampion["lane"], [string, string]> = {
  上路: ["74", "712"],
  打野: ["74", "711"],
  中路: ["74", "714"],
  下路: ["74", "77"],
  辅助: ["74", "73"],
};

// 文案与 classic-data.ts 的 runePresetIds 逐格对应（名称×数量），保证“说明文字”和
// “一键写入的符文页”完全同步；研究型玩法则携带自己的 runeSummary + runePreset。
const runeSummaries: Record<ChampionArchetype, string> = {
  mage: "法术穿透印记×9／护甲符印×9／魔法抗性雕纹×9／法术强度精华×3",
  fighter: "攻击力印记×9／护甲符印×9／魔法抗性雕纹×9／攻击力精华×3",
  jungler: "攻击力印记×9／护甲符印×9／魔法抗性雕纹×9／攻击力精华×3",
  marksman: "攻击力印记×9／护甲符印×9／魔法抗性雕纹×9／攻击力精华×3",
  tank: "穿甲印记×9／护甲符印×9／魔法抗性雕纹×9／生命值精华×3",
  support: "法术穿透印记×9／护甲符印×9／魔法抗性雕纹×9／法术强度精华×3",
};

const openingByArchetype: Record<ChampionArchetype, ClassicGuideItem[]> = {
  mage: [item("771056"), item("772003", 2, "补足对线续航")],
  fighter: [item("771055", 1, "一级换血与补刀回复")],
  jungler: [item("771039"), item("772003", 5, "标准清野续航")],
  marksman: [item("771055", 1, "普攻换血与补刀")],
  tank: [item("771054"), item("772003", 1, "抗压续航")],
  support: [item("771004"), item("772044", 3, "早期视野"), item("772003", 2)],
};

const pressureOpeningByArchetype: Record<ChampionArchetype, ClassicGuideItem[]> = {
  mage: [item("771052"), item("772003", 1, "高法强抢线")],
  fighter: [item("771036"), item("772003", 2, "更快合成攻击组件")],
  jungler: [item("771039"), item("772003", 5, "打野刀不可省略")],
  marksman: [item("771036"), item("772003", 2, "长剑快速转吸血或暴击组件")],
  tank: [item("772041"), item("772003", 3, "水晶瓶反复补给")],
  support: [item("771001"), item("772003", 4, "移速游走开局")],
};

const sustainOpeningByArchetype: Record<ChampionArchetype, ClassicGuideItem[]> = {
  mage: [item("772041"), item("772004", 2, "高频施法时补充蓝量"), item("772003")],
  fighter: [item("772041"), item("772004", 2, "技能消耗型战士补蓝"), item("772003")],
  jungler: openingByArchetype.jungler,
  marksman: [item("771055")],
  tank: [item("772041"), item("772003", 3, "反复换血的续航开局")],
  support: openingByArchetype.support,
};

const earlyByArchetype: Record<ChampionArchetype, ClassicGuideItem[]> = {
  mage: [item("771056", 1, "需要线权时补第二枚多兰戒"), item("771001"), item("771052")],
  fighter: [item("771036"), item("771001"), item("773134", 1, "对脆皮优先残暴之力")],
  jungler: [item("773106"), item("771001"), item("772044", 1, "河道与入侵视野")],
  marksman: [item("771053"), item("771001"), item("771038", 1, "经济足够时直接暴风之剑")],
  tank: [item("771028"), item("771029"), item("771001")],
  support: [item("772049"), item("771001"), item("772044", 2, "持续补充视野")],
};

const recallPlans: Record<ChampionArchetype, ClassicRecallStep[]> = {
  mage: [
    { gold: "400–699", title: "小回城", items: [item("771056")], purpose: "补多兰戒稳住血量与回蓝；已有多兰时换速度之靴。" },
    { gold: "700–1099", title: "基础组件", items: [item("771001"), item("771052")], purpose: "鞋子配增幅典籍，兼顾支援速度和法强。" },
    { gold: "1100–1599", title: "第一次强势点", items: [item("773108")], purpose: "恶魔法典提供法强和冷却；对线难受可先合成法师之靴。" },
    { gold: "1600+", title: "大件加速", items: [item("771058")], purpose: "优势时无用大棒直奔帽子；蓝量英雄按方案换催化神石或女神泪。" },
  ],
  fighter: [
    { gold: "400–699", title: "小回城", items: [item("771036")], purpose: "长剑补攻击力，并用余钱补生命／法力药水与眼。" },
    { gold: "700–1099", title: "机动组件", items: [item("771001"), item("771036")], purpose: "鞋子加长剑，方便追击、换线与躲关键技能。" },
    { gold: "1200–1499", title: "穿甲强势点", items: [item("773134")], purpose: "残暴之力同时提供攻击、穿甲和冷却，是技能型战士的关键节点。" },
    { gold: "1500+", title: "大剑或生存", items: [item("771038")], purpose: "滚雪球购买暴风之剑；承压时改锁子甲／负极斗篷。" },
  ],
  jungler: [
    { gold: "700–899", title: "第一次回城", items: [item("773106")], purpose: "麦瑞德之爪显著提高清野，并补眼保护第二轮增益。" },
    { gold: "900–1299", title: "清野＋机动", items: [item("773106"), item("771001")], purpose: "爪子和鞋子兼顾刷野、反野与到线速度。" },
    { gold: "1300–1799", title: "打野成型", items: [item("773154")], purpose: "瑞格之灯提供攻击、护甲、吸血和免费视野。" },
    { gold: "1800+", title: "进入英雄核心", items: [item("771043"), item("771053")], purpose: "根据英雄转攻速／破败，或转战士穿甲大件。" },
  ],
  marksman: [
    { gold: "475–799", title: "补线能力", items: [item("771055")], purpose: "被压回家时补第二把多兰之刃，稳定血量、补刀和回复。" },
    { gold: "800–1299", title: "吸血续航", items: [item("771053"), item("771001")], purpose: "吸血鬼节杖优先保证赖线，余钱补鞋和药水。" },
    { gold: "1300–1799", title: "大剑窗口", items: [item("771038")], purpose: "经济允许时直接暴风之剑，加速无尽或饮血剑。" },
    { gold: "1800+", title: "暴击／攻速组件", items: [item("773086"), item("771037")], purpose: "狂热加十字镐，按敌方护甲决定先攻速还是先大攻击。" },
  ],
  tank: [
    { gold: "400–699", title: "补生命", items: [item("771028")], purpose: "红水晶提升容错；余钱补眼和药水。" },
    { gold: "700–1099", title: "针对抗性", items: [item("771031")], purpose: "面对 AD 先锁子甲，面对 AP 则换负极斗篷。" },
    { gold: "1100–1499", title: "生命节点", items: [item("771011")], purpose: "巨人腰带让第一次团战更能承伤。" },
    { gold: "1500+", title: "完成首件防装", items: [item("773068")], purpose: "物理压力合日炎；回复英雄或魔法压力转振奋盔甲。" },
  ],
  support: [
    { gold: "400–699", title: "视野补给", items: [item("771001"), item("772044", 2)], purpose: "鞋子、假眼优先；永远为小龙和河道保留视野预算。" },
    { gold: "700–1099", title: "工资与回蓝", items: [item("772049"), item("771004")], purpose: "补工资装和回蓝组件，保持插眼与施法频率。" },
    { gold: "1100–1599", title: "团队组件", items: [item("773105")], purpose: "军团圣盾组件提高双抗，或按阵容转冷却与移速。" },
    { gold: "1600+", title: "团队主动装", items: [item("773190")], purpose: "钢铁烈阳之匣提供团队护盾；控制多时优先保命与视野。" },
  ],
};

const phaseNotes: Record<ChampionArchetype, [string, string, string]> = {
  mage: ["先完成鞋和第一件法强／蓝量装备。", "补帽子或法穿，围绕技能强势期控龙推塔。", "最后一格按敌方魔抗与刺客威胁选择虚空或沙漏。"],
  fighter: ["先拿鞋、残暴之力或续航组件。", "完成穿甲／黏人核心后主动接小规模团。", "补吸血、双抗或复活，避免只堆伤害进场即倒。"],
  jungler: ["首轮目标是清野装备和鞋。", "完成英雄核心后围绕先锋、小龙与边线人数差行动。", "后期补穿透和生存，惩戒始终留给关键资源。"],
  marksman: ["先保证吸血、鞋和补刀节奏。", "两件输出装是第一个稳定团战强势期。", "最后根据护甲、控制和刺客选择轻语、吸血或保命装。"],
  tank: ["用血量与针对抗性度过对线。", "首件防装成型后主动参团和争夺视野。", "后期补另一种抗性和团队光环，不固定照抄六神装。"],
  support: ["工资、鞋和视野优先于个人伤害。", "围绕团队主动装和关键冷却组织小龙团。", "持续买眼，最后装备按开团或保护职责选择。"],
};

type GuideProfile = {
  id?: string;
  name: string;
  lane: ClassicChampion["lane"];
  archetype: ChampionArchetype;
  style: string;
  summary: string;
  tags?: string[];
  masteryPreset?: ResearchedMasteryPreset;
  runeSummary?: string;
  runePreset?: ResearchedRunePreset;
  opening?: ClassicGuideItem[];
  early?: ClassicGuideItem[];
  spells?: [string, string];
  skillOrder?: ClassicChampion["spellOrder"];
  coreItems?: string[];
  situationalItems?: string[];
  recallPlan?: ClassicRecallStep[];
  gamePlan?: [string, string, string];
  sourceUrls?: string[];
  sourceNote?: string;
};

// 各英雄的替代玩法此前为占位式 alternateProfiles，现已由
// classic-researched-guides.ts 中按 S3 攻略逐英雄核实的研究方案取代。

const specialProfiles: Partial<Record<ClassicChampion["key"], GuideProfile[]>> = {
  Pantheon: [
    {
      id: "flask-sustain",
      name: "水晶瓶续航",
      lane: "上路",
      archetype: "fighter",
      style: "Q 消耗／抗压",
      summary: "水晶瓶配两瓶蓝药和一瓶红药共 450 金币，高频用 Q 换血；有击杀线时再切闪现＋点燃。",
      tags: ["水晶瓶", "蓝药", "续航", "上单", "消耗"],
      opening: [item("772041", 1, "三次可回城补充的双回复"), item("772004", 2, "额外两次投矛蓝量"), item("772003", 1, "防止换血后被反打")],
      spells: ["74", "714"],
      early: [item("771036"), item("771001"), item("773134")],
      coreItems: ["773111", "773071", "773035", "773072", "773156", "773026"],
      situationalItems: ["773143", "773065", "773022"],
      recallPlan: [
        { gold: "400–699", title: "补长剑", items: [item("771036")], purpose: "提高 Q 和普攻伤害；剩余金币优先补蓝药、红药和眼。" },
        { gold: "700–1199", title: "鞋＋攻击", items: [item("771001"), item("771036")], purpose: "提高追击和大招落点后的黏人能力。" },
        { gold: "1200–1499", title: "残暴强势点", items: [item("773134")], purpose: "穿甲、攻击和冷却同时强化投矛消耗与连招。" },
        { gold: "1500+", title: "大剑滚雪球", items: [item("771038")], purpose: "优势直奔高攻击；被控多则先做水银鞋组件。" },
      ],
      gamePlan: [
        "前期用被动盾挡关键普攻，Q 消耗但保留足够蓝量应对打野；水晶瓶每次回城都会补满。",
        "六级后先推线再大招支援，落地前确认队友控制和敌方位移，不盲跳无视野区域。",
        "中后期从侧翼先打脆皮；进场后留 W 打断或保护，敌方叠甲就提前做最后的轻语。",
      ],
      sourceUrls: ["https://www.mobafire.com/league-of-legends/build/the-complete-mid-lane-pantheon-s3-249276"],
      sourceNote: "S3 潘森长篇攻略明确采用水晶瓶开局；蓝药版本是按 16.15 目录 475 金币预算校正的高蓝耗变体。",
    },
  ],
  Ezreal: [
    {
      id: "blue-poke",
      name: "蓝 EZ 冷却消耗",
      lane: "下路",
      archetype: "marksman",
      style: "AD 技能／蓝装消耗",
      summary: "经典 Blue Ezreal：以女神泪、蜥蜴长老之精魄、冰脉护手和冷却鞋强化 Q 的远程消耗，不用普通暴击射手的站桩方式硬拼。",
      tags: ["蓝EZ", "Blue Ezreal", "冰拳", "冰脉护手", "魔宗", "女神泪", "Q消耗", "冷却"],
      opening: [item("771055", 1, "补刀回复与前期普攻换血")],
      spells: ["74", "77"],
      skillOrder: ["Q", "E", "W"],
      early: [item("773070", 1, "尽早开始叠加法力"), item("771001"), item("773057")],
      coreItems: ["773158", "773209", "773004", "773025", "773035", "773102"],
      situationalItems: ["773153", "773072", "773026"],
      recallPlan: [
        { gold: "400–699", title: "小件续线", items: [item("771001"), item("771036")], purpose: "鞋子方便 Q 拉扯；只有 400–475 金时可按对线状态在鞋、长剑和第二把多兰之间选择。" },
        { gold: "700–1099", title: "女神泪启动", items: [item("773070")], purpose: "第一次理想回城先拿女神泪，随后持续用技能叠层，不拖到中期才购买。" },
        { gold: "1100–1599", title: "耀光强势点", items: [item("773057")], purpose: "耀光显著提高 Q 命中后的伤害；逆风可先冰川护甲取得护甲与冷却。" },
        { gold: "1600+", title: "蓝装核心", items: [item("773024"), item("771036")], purpose: "冰川护甲加攻击组件，继续合成冰脉护手与蜥蜴长老之精魄。" },
      ],
      gamePlan: [
        "对线用 Q 补刀和消耗，但蓝 EZ 前期普攻对拼弱于传统暴击射手；女神泪成型前保留位移蓝量。",
        "中期依靠冰脉减速和接近满冷却不断 Q 拉扯，先压低血线再争塔或小龙，不从正面奥术跃迁开团。",
        "敌方开始堆甲后完成最后的轻语；被刺客威胁时第六格转女妖或复活甲，而不是固定追求最高面板伤害。",
      ],
      sourceUrls: [
        "https://www.mobafire.com/league-of-legends/build/ezreal-season-3-adc-amp-bluez-335151",
        "https://www.mobafire.com/league-of-legends/build/exploring-with-ezreal-guide-to-ad-ap-blue-ezreal-325195",
      ],
      sourceNote: "两份 2013 年 Season 3 Ezreal 攻略交叉核对；蓝 EZ 的冷却鞋、蜥蜴长老、魔宗、冰脉与轻语核心按 Classic 装备目录映射。",
    },
  ],
  Vayne: [
    {
      id: "korean-onhit",
      name: "韩式破败主 W",
      lane: "下路",
      archetype: "marksman",
      style: "攻速／百分比真伤",
      summary: "S3 韩式薇恩路线：先破败、后幻影之舞并主升 W，依靠攻速快速触发圣银弩箭；比传统饮血路线更早获得追击和打前排能力。",
      tags: ["韩式薇恩", "破败", "主W", "攻速", "幻影之舞", "百分比真伤"],
      opening: [item("771055")],
      spells: ["74", "77"],
      skillOrder: ["W", "Q", "E"],
      early: [item("771053"), item("771001"), item("773144")],
      coreItems: ["773006", "773153", "773046", "773035", "773026", "773031"],
      situationalItems: ["773072", "773140", "773102"],
      recallPlan: [
        { gold: "475–799", title: "被压小回城", items: [item("771055")], purpose: "补第二把多兰稳定血量和补刀；不要为了等大件带残血留线。" },
        { gold: "800–1299", title: "吸血续航", items: [item("771053"), item("771001")], purpose: "吸血鬼节杖是理想首回，余钱补鞋以便走位和追击。" },
        { gold: "1300–1799", title: "破败组件", items: [item("773144"), item("771001")], purpose: "比尔吉沃特弯刀提供吸血和主动减速，开始形成单挑强势点。" },
        { gold: "1800+", title: "完成破败", items: [item("773153")], purpose: "尽快完成破败；之后转攻速鞋和幻影之舞，而不是立刻堆第二件大攻击装。" },
      ],
      gamePlan: [
        "前期以补刀为先，利用 Q 调整角度而非无脑向前翻滚；主 W 需要连续命中同一目标三次。",
        "破败加攻速鞋后可找短墙 E 和单挑机会，幻影之舞完成后进入稳定两件套强势期。",
        "团战只攻击安全目标，R＋Q 隐身用来重置站位；对面控制多时先水银饰带，不能为了无尽牺牲生存。",
      ],
      sourceUrls: ["https://www.mobafire.com/league-of-legends/build/korean-vayne-s3-338937"],
      sourceNote: "2013 年韩式薇恩攻略明确记录多兰出门、首回吸血鬼节杖＋攻速鞋、破败接幻影之舞并主 W。",
    },
    {
      id: "traditional-bloodthirster",
      name: "传统饮血主 Q",
      lane: "下路",
      archetype: "marksman",
      style: "高攻击／暴击",
      summary: "传统 S3 薇恩先饮血剑并主升 Q，以高攻击、吸血和翻滚强化换血，再接幻影之舞、轻语和无尽。",
      tags: ["传统薇恩", "饮血剑", "主Q", "暴击", "高攻击"],
      opening: [item("771055")],
      spells: ["74", "77"],
      skillOrder: ["Q", "W", "E"],
      early: [item("771053"), item("771001"), item("771038")],
      coreItems: ["773006", "773072", "773046", "773035", "773026", "773031"],
      situationalItems: ["773153", "773140", "773102"],
      recallPlan: [
        { gold: "475–799", title: "多兰续线", items: [item("771055")], purpose: "经济不足时补多兰，不用空装等待暴风之剑。" },
        { gold: "800–1299", title: "吸血鬼节杖", items: [item("771053"), item("771001")], purpose: "先稳定赖线，再积累暴风之剑经济。" },
        { gold: "1300–1799", title: "暴风之剑", items: [item("771038")], purpose: "高攻击直接强化 Q 和普攻，开始进入饮血剑路线。" },
        { gold: "1800+", title: "饮血成型", items: [item("773072")], purpose: "完成饮血后再补攻速；敌方坦克提前成装时可把轻语提到第三件。" },
      ],
      gamePlan: [
        "主 Q 版本用短冷却翻滚强化单次换血，仍需把 E 留给脱离、打断或可靠的钉墙。",
        "饮血剑要靠补刀叠层，拿到后以续航和高攻击控线；幻影之舞补足攻速和暴击。",
        "后期轻语应早于纯暴击堆叠；复活甲、水银饰带或女妖按对面先手调整。",
      ],
      sourceUrls: ["https://www.mobafire.com/league-of-legends/build/korean-vayne-s3-338937"],
      sourceNote: "同一份 2013 年攻略同时区分传统饮血主 Q 与韩式破败主 W，两条路线不混用加点和首件。",
    },
  ],
  Nidalee: [
    {
      id: "ad-top-bruiser",
      name: "AD 上单豹女",
      lane: "上路",
      archetype: "fighter",
      style: "远程压制／分带",
      summary: "旧版 AD 豹女利用远程普攻、E 治疗攻速和豹形态机动性压制上路，残暴之力与三相提供中期分带强势点。",
      tags: ["AD豹女", "上单豹女", "三相", "残暴", "分带", "主E"],
      opening: [item("771001"), item("772003", 3, "远程换血后的基础续航")],
      spells: ["74", "714"],
      skillOrder: ["E", "Q", "W"],
      early: [item("773044"), item("773134"), item("772044")],
      coreItems: ["773111", "773078", "773083", "773005", "773142", "773026"],
      situationalItems: ["773047", "773022", "773035"],
      recallPlan: [
        { gold: "475–799", title: "长剑＋视野", items: [item("771036"), item("772044")], purpose: "提升普攻和豹形态伤害，同时用眼保护压线；低血量补药水。" },
        { gold: "800–1199", title: "净蚀组件", items: [item("771036"), item("771028")], purpose: "攻击与生命兼顾，为净蚀做准备，避免只堆输出被抓即死。" },
        { gold: "1200–1599", title: "净蚀／残暴", items: [item("773044")], purpose: "持续追击优先净蚀；对脆皮且优势明显可先残暴之力。" },
        { gold: "1600+", title: "三相推进", items: [item("773057"), item("773044")], purpose: "耀光加净蚀构成三相关键组件，强化形态切换后的技能接普攻。" },
      ],
      gamePlan: [
        "人形态利用射程和草丛移速换血，E 同时承担治疗与攻速增益；没有河道视野时不要持续越线压人。",
        "六级后用形态切换加速推线、消耗和撤退，三相成型后优先边线拉扯，不必强行正面五打五。",
        "后期根据威胁补狂徒、阿塔玛或复活甲；敌方高护甲时轻语优先于第二件纯防装。",
      ],
      sourceUrls: [
        "https://www.mobafire.com/league-of-legends/build/ad-nidalee-to-top-season-3-272756",
        "https://www.mobafire.com/league-of-legends/build/s3-tanky-bruiser-nidalee-286642",
      ],
      sourceNote: "Season 3 AD／半肉豹女攻略交叉核对：鞋三红开局、E 优先、净蚀／残暴过渡并以三相和分带为核心。",
    },
  ],
  Teemo: [
    {
      id: "onhit-badger",
      name: "攻速特效提莫",
      lane: "上路",
      archetype: "mage",
      style: "攻速／魔法特效",
      summary: "S3 On-hit Teemo 以毒性射击持续压线，攻速鞋后连接腐之刃、智慧末刃与破败；蘑菇仍负责视野、减速和控图。",
      tags: ["攻速提莫", "特效提莫", "腐蚀之刃", "智慧末刃", "破败", "主E"],
      opening: [item("771001"), item("772003", 3, "移速拉扯配三红续航")],
      spells: ["74", "714"],
      skillOrder: ["E", "Q", "W"],
      early: [item("773006"), item("771043"), item("773114")],
      coreItems: ["773006", "773114", "773091", "773116", "773153", "773026"],
      situationalItems: ["773020", "773135", "773157"],
      recallPlan: [
        { gold: "400–699", title: "攻速组件", items: [item("771043")], purpose: "短剑直接提高 E 特效触发频率；被压时补红药和眼，不贪合成。" },
        { gold: "700–1099", title: "鞋＋攻速", items: [item("771001"), item("771043")], purpose: "移速和攻速共同支撑远程拉扯，对突进上单尤其重要。" },
        { gold: "1100–1599", title: "攻速鞋", items: [item("773006")], purpose: "先完成攻速鞋建立压制；对面控制和魔法爆发很高则改水银鞋。" },
        { gold: "1600+", title: "腐蚀之刃", items: [item("773114")], purpose: "完成第一件特效装，随后按 AP 压力转智慧末刃或按黏人需求转冰杖。" },
      ],
      gamePlan: [
        "E 主升依靠普攻压血，Q 留给对方关键普攻或反打；压线前先在河道和三角草布置蘑菇与眼。",
        "攻速鞋加腐蚀之刃后持续边线施压，面对 AP 先智慧末刃，面对高血量前排再加破败。",
        "团战不要为了触发特效站桩，利用 W 和蘑菇拉扯；被突进针对时复活甲比第六件伤害装更可靠。",
      ],
      sourceUrls: ["https://www.mobafire.com/league-of-legends/build/s3-teemo-the-on-hit-badger-297909"],
      sourceNote: "2013 年 On-hit Teemo 攻略核对：鞋三红、攻速鞋、腐蚀之刃、智慧末刃、冰杖、破败与复活甲。",
    },
  ],
  Singed: [
    {
      id: "proxy-pressure",
      name: "代理断线炼金",
      lane: "上路",
      archetype: "tank",
      style: "断兵线／牵制",
      summary: "代理炼金以疾跑＋传送和水晶瓶续航在塔后处理兵线，目标是迫使多人回防并换取地图资源，不是无视敌方打野反复送死。",
      tags: ["代理炼金", "断线", "Proxy", "疾跑", "传送", "牵制"],
      opening: [item("772041"), item("772044"), item("772003")],
      spells: ["76", "712"],
      skillOrder: ["Q", "E", "W"],
      early: [item("771001"), item("771057"), item("771011")],
      coreItems: ["773009", "773027", "773116", "773151", "773026", "773068"],
      situationalItems: ["773065", "773143", "773111"],
      recallPlan: [
        { gold: "400–699", title: "鞋与补给", items: [item("771001"), item("772044")], purpose: "先保证逃生移速和下一轮路线视野；水晶瓶回城会自动补满。" },
        { gold: "700–1099", title: "催化组件", items: [item("771028"), item("771057")], purpose: "血量与蓝量组件支撑持续开毒，为时光之杖尽早计时。" },
        { gold: "1100–1599", title: "催化神石", items: [item("773010")], purpose: "升级回复和双资源，让清线后的撤退容错更高。" },
        { gold: "1600+", title: "时光计时", items: [item("773027")], purpose: "尽早完成时光之杖开始成长；对面多人追击频繁则先完成轻灵之靴。" },
      ],
      gamePlan: [
        "只有确认敌方打野位置、入口视野和撤退路线后才代理；风险过高就回到线上正常补刀，不能把玩法理解为固定送塔。",
        "清完一波立即判断下一步：撤退、进野区放眼或传送支援；两人来抓时拖延即可，三人以上必须尽快离场。",
        "中后期边线牵制后用疾跑切入后排，把关键目标背回队友方向；队伍无资源可换时不要远离正面战场。",
      ],
      sourceUrls: ["https://www.mobafire.com/league-of-legends/build/proxy-singed-513379"],
      sourceNote: "代理炼金资料用于玩法原则交叉核对；装备按 S3 Classic 目录还原为轻灵鞋、时光、冰杖和双抗续航。",
    },
  ],
  MasterYi: [
    {
      id: "crit-reset",
      name: "暴击收割",
      lane: "打野",
      archetype: "marksman",
      style: "AD 暴击／重置",
      summary: "以攻速鞋、电刃／幻影之舞建立暴击率，再补无尽放大暴击；优势局滚雪球极强，落后时应切回攻速持续输出。",
      tags: ["暴击", "无尽", "电刃", "幻影之舞", "打野", "收割"],
      opening: openingByArchetype.jungler,
      spells: ["74", "711"],
      early: [item("773106"), item("771001"), item("773086")],
      coreItems: ["773006", "773087", "773046", "773031", "773072", "773035"],
      situationalItems: ["773142", "773026", "773153"],
      recallPlan: [
        { gold: "700–899", title: "清野组件", items: [item("773106")], purpose: "先确保第二轮野区速度，不为暴击组件牺牲基本清野。" },
        { gold: "900–1299", title: "攻速鞋窗口", items: [item("773006")], purpose: "提高刷野、追击和普攻次数；经济不足先鞋＋短剑组件。" },
        { gold: "1300–1799", title: "狂热＋攻击", items: [item("773086"), item("771036")], purpose: "先有暴击率与攻速，再为无尽积累攻击力。" },
        { gold: "1800+", title: "大剑转无尽", items: [item("771038"), item("771018")], purpose: "优势直接进入无尽路线；落后或对面坦克多则先电刃／破败。" },
      ],
      gamePlan: [
        "六级前以刷野和反蹲为主，Q 不要只用来进场，应保留躲控制或追随位移。",
        "先做电刃／幻影之舞建立攻速和暴击，再做无尽；裸无尽会导致成型慢且攻速不足。",
        "团战等待第一轮控制交掉再进场，利用击杀重置连续 Q；逆风立即转破败、智慧末刃或复活甲。",
      ],
      sourceUrls: [
        "https://www.mobafire.com/league-of-legends/build/100-crit-adc-master-yi-s3-after-2013-rework-340433",
        "https://www.mobafire.com/league-of-legends/build/master-yi-jungle-guide-critking-367706",
      ],
      sourceNote: "Season 3 暴击剑圣攻略交叉整理：攻速／暴击组件先行，无尽作为暴击放大核心。",
    },
    {
      id: "onhit-jungle",
      name: "攻速特效",
      lane: "打野",
      archetype: "jungler",
      style: "攻速／吸血",
      summary: "瑞格之灯稳定发育，破败、智慧末刃和鬼索提供持续输出；比暴击路线更适合打前排与逆风局。",
      tags: ["攻速", "特效", "破败", "逆风", "打野"],
      opening: openingByArchetype.jungler,
      spells: ["74", "711"],
      coreItems: ["773006", "773154", "773153", "773091", "773124", "773026"],
      situationalItems: ["773035", "773065", "773143"],
      gamePlan: [
        "首轮稳定刷野，优先拿瑞格之灯和鞋，不强求低成功率的三级抓人。",
        "破败成型后以单挑、控龙和边线施压为主；对 AP 多时智慧末刃优先。",
        "后期等坦克开团再收割，Q 躲关键控制；被集火时复活甲优先于第六件纯输出。",
      ],
      sourceUrls: ["https://www.metasrc.com/lol/classic/champions/master-yi/build"],
      sourceNote: "Classic 3.13 大样本符文与召唤师技能方向，配合 OP.GG 16.15 装备目录整理。",
    },
  ],
};

function safeProfile(champion: ClassicChampion): GuideProfile {
  const archetype = champion.archetype;
  return {
    id: "sustain",
    name: champion.lane === "打野" ? "稳健发育" : "续航抗压",
    lane: champion.lane,
    archetype,
    style: champion.lane === "打野" ? "刷野／容错" : "续航／容错",
    summary: champion.lane === "打野"
      ? "保留标准打野开局，优先清野、视野与针对性防装，避免低成功率强抓。"
      : "水晶瓶或防御型出门装提高容错，根据对线伤害类型补充抗性。",
    tags: ["稳健", "新手", "抗压", "续航"],
    opening: sustainOpeningByArchetype[archetype],
  };
}

function finalBuild(archetype: ChampionArchetype) {
  const starts = new Set(["771054", "771055", "771056", "771039", "772049"]);
  const boots = new Set(["771001", "773006", "773020", "773047", "773111", "773158"]);
  const result = classicBuildPresets[archetype].filter((id) => !starts.has(id) && !boots.has(id));
  const preferredBoot = archetype === "mage" ? "773020"
    : archetype === "marksman" || archetype === "jungler" ? "773006"
      : archetype === "support" ? "773158"
        : "773111";
  return [...new Set([
    preferredBoot,
    ...result.filter((id) => id !== preferredBoot),
    ...defaultSituational(archetype),
  ])].slice(0, 6);
}

function defaultSituational(archetype: ChampionArchetype) {
  if (archetype === "mage") return ["773001", "773157", "773135"];
  if (archetype === "marksman") return ["773035", "773072", "773026"];
  if (archetype === "fighter" || archetype === "jungler") return ["773156", "773065", "773026"];
  if (archetype === "support") return ["773190", "773065", "773143"];
  return ["773065", "773143", "773026", "773156"];
}

function runeSummaryFromPreset(preset: ResearchedRunePreset) {
  return classicRuneGroups
    .map((group) => {
      const rune = group.runes.find((entry) => entry.id === preset[group.id]);
      return rune ? `${rune.name}×${group.cap}` : "";
    })
    .filter(Boolean)
    .join("／");
}

function createVariant(
  champion: ClassicChampion,
  profile: GuideProfile,
  index: number,
): ClassicBuildVariant {
  const masteryPreset = profile.masteryPreset || (
    profile.archetype === "tank" || profile.archetype === "support"
      ? "防御 21 / 通用 9"
      : profile.archetype === "mage"
        ? "攻击 21 / 通用 9"
        : "攻击 21 / 防御 9");
  const coreItems = profile.coreItems || finalBuild(profile.archetype);
  const standardPlan = phaseNotes[profile.archetype];
  const runePreset = profile.runePreset || runePresetIds[profile.archetype];
  return {
    id: `${champion.key.toLowerCase()}-${profile.id || (index === 0 ? "primary" : `variant-${index}`)}`,
    name: profile.name,
    lane: profile.lane,
    style: profile.style,
    summary: profile.summary,
    runeArchetype: profile.archetype,
    runeSummary: runeSummaryFromPreset(runePreset) || profile.runeSummary || runeSummaries[profile.archetype],
    runePreset,
    masteryPreset,
    spellIds: profile.spells || laneSpells[profile.lane],
    skillOrder: profile.skillOrder || champion.spellOrder,
    startingItems: profile.opening || (index === 0 ? openingByArchetype[profile.archetype] : pressureOpeningByArchetype[profile.archetype]),
    earlyPurchases: profile.early || earlyByArchetype[profile.archetype],
    recallPlan: profile.recallPlan || recallPlans[profile.archetype],
    buildPhases: [
      { title: "前期核心", items: coreItems.slice(0, 2), note: standardPlan[0] },
      { title: "中期成型", items: coreItems.slice(0, 4), note: standardPlan[1] },
      { title: "后期完整", items: coreItems, note: standardPlan[2] },
    ],
    coreItems,
    situationalItems: profile.situationalItems || defaultSituational(profile.archetype),
    gamePlan: profile.gamePlan || [
      `前期围绕${profile.lane}基本功发育，按金币档位购买，不为凑大件长期空装。`,
      `中期发挥“${profile.style}”职责，先处理兵线和视野，再争夺小龙与防御塔。`,
      "后期根据敌方护甲、魔抗、控制和爆发调整最后两格，六神装不是固定答案。",
    ],
    tags: [...new Set([profile.lane, profile.archetype, profile.style, ...(profile.tags || [])])],
    sourceNote: profile.sourceNote || "站内规则方案：使用 OP.GG Classic 目录约束合法 ID，并按 S3 位置与职业原则生成；OP.GG 未提供逐英雄出装统计，因此本方案不代表 OP.GG 推荐。",
    sourceUrls: profile.sourceUrls || ["https://op.gg/zh-cn/lol/classic"],
  };
}

const primaryOverrides: Partial<Record<ClassicChampion["key"], Partial<GuideProfile>>> = {
  Pantheon: {
    name: "上路穿甲",
    style: "AD 穿甲／支援",
    summary: "以投矛消耗和残暴之力强势期压线，六级后用大招把优势扩散到中下路。",
    tags: ["穿甲", "消耗", "支援"],
    opening: [item("771055", 1, "更高换血伤害与补刀回复")],
    spells: ["74", "714"],
    early: [item("771036"), item("771001"), item("773134")],
    coreItems: ["773111", "773071", "773035", "773072", "773156", "773026"],
    situationalItems: ["773143", "773065", "773022"],
  },
  MasterYi: {
    name: "打野攻速",
    style: "攻速／持续收割",
    summary: "标准打野刀开局，先保证清野与攻速，再按阵容转破败、暴击或防御装。",
    tags: ["打野", "攻速", "持续输出"],
    opening: openingByArchetype.jungler,
    spells: ["74", "711"],
    early: [item("773106"), item("771001"), item("773154")],
    coreItems: ["773006", "773154", "773071", "773124", "773156", "773026"],
    situationalItems: ["773031", "773046", "773035"],
  },
};

export const classicBuildGuides = Object.fromEntries(classicChampions.map((champion) => {
  const primary: GuideProfile = {
    name: `${champion.lane}${champion.role}`,
    lane: champion.lane,
    archetype: champion.archetype,
    style: champion.archetype === "mage" ? "AP 标准" : champion.archetype === "marksman" ? "AD 持续输出" : champion.role,
    summary: `沿用 ${champion.name} 的经典主定位、默认加点和完整六格推荐。`,
    tags: ["标准", champion.role],
    ...(primaryOverrides[champion.key] || {}),
  };
  const candidates = [
    primary,
    ...(researchedProfiles[champion.key] || []),
    ...(specialProfiles[champion.key] || []),
    safeProfile(champion),
  ];
  const unique = candidates.filter((profile, index, all) =>
    all.findIndex((entry) => `${entry.name}-${entry.lane}-${entry.style}` === `${profile.name}-${profile.lane}-${profile.style}`) === index,
  );
  return [champion.classicId, unique.map((profile, index) => createVariant(champion, profile, index))];
})) as Record<string, ClassicBuildVariant[]>;

export const classicGuideSources = [
  { label: "OP.GG Classic 数据目录", url: "https://op.gg/zh-cn/lol/classic" },
] as const;
