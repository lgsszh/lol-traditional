export const CLASSIC_PATCH = "16.15";
export const CLASSIC_ASSET_BASE = `https://opgg-static.akamaized.net/meta/images/lol/${CLASSIC_PATCH}/classic`;

export type ChampionArchetype = "mage" | "fighter" | "jungler" | "marksman" | "tank" | "support";

export type ClassicChampion = {
  classicId: string;
  key: string;
  name: string;
  title: string;
  aliases: string[];
  lane: "上路" | "打野" | "中路" | "下路" | "辅助";
  role: string;
  archetype: ChampionArchetype;
  accent: string;
  spellOrder: ["Q" | "W" | "E", "Q" | "W" | "E", "Q" | "W" | "E"];
};

export const championAliases: Record<string, string[]> = {
  Ahri: ["狐狸"],
  Jax: ["武器", "灯男"],
  LeeSin: ["瞎子", "盲僧"],
  Ashe: ["寒冰"],
  Janna: ["风女"],
  Vayne: ["VN"],
  Taric: ["宝石"],
  Anivia: ["冰鸟", "凤凰"],
  Katarina: ["卡特"],
  Heimerdinger: ["大头"],
  JarvanIV: ["皇子", "嘉文"],
  Garen: ["德玛", "大宝剑", "草丛伦"],
  Morgana: [],
  Shaco: ["小丑"],
  Brand: ["火男"],
  Evelynn: ["寡妇"],
  Lux: ["光辉"],
  Gangplank: ["船长"],
  Annie: ["火女"],
  Gragas: ["酒桶"],
  TwistedFate: ["卡牌", "TF"],
  Nidalee: ["豹女"],
  Olaf: [],
  Singed: ["炼金"],
  Ryze: ["光头", "流浪"],
  Tristana: ["小炮", "炮娘"],
  Tryndamere: ["蛮王", "蛮子"],
  Fiddlesticks: ["稻草人", "末日"],
  Alistar: ["牛头"],
  Rammus: ["龙龟", "乌龟"],
  MonkeyKing: ["猴子"],
  Sona: ["琴女"],
  Malphite: ["石头人"],
  Nasus: ["狗头"],
  Amumu: ["木木"],
  MissFortune: ["女枪", "MF", "好运姐", "赏金"],
  KogMaw: ["大嘴"],
  Kayle: ["天使"],
  Zilean: ["时光老头", "时光"],
  Warwick: ["狼人"],
  Leona: ["日女"],
  Skarner: ["蝎子"],
  Karthus: ["死歌"],
  Ezreal: ["EZ", "小黄毛"],
  Sion: ["塞恩"],
  Twitch: ["老鼠"],
  MasterYi: ["剑圣", "易大师"],
  Lulu: ["露露"],
  Veigar: ["小法"],
  Chogath: ["大虫子"],
  Malzahar: ["蚂蚱"],
  Kassadin: [],
  Nunu: ["雪人"],
  Teemo: ["提百万", "蘑菇"],
  Corki: ["飞机"],
  Sivir: ["轮子妈"],
  Pantheon: ["斯巴达"],
  Blitzcrank: ["机器人"],
  Soraka: ["奶妈", "星妈"],
  DrMundo: ["蒙多"],
};

export type ClassicRune = {
  id: string;
  name: string;
  short: string;
  stat: string;
  value: string;
  per: number;
  icon: string;
};

export type ClassicRuneGroup = {
  id: "mark" | "seal" | "glyph" | "quint";
  name: string;
  cap: number;
  color: string;
  runes: ClassicRune[];
};

export type ClassicMastery = {
  id: string;
  name: string;
  tree: "进攻" | "防御" | "通用";
  tier: number;
  column: number;
  max: number;
  description: string;
  icon: string;
};

export type ClassicSpell = {
  id: string;
  name: string;
  cooldown: number;
  icon: string;
  description: string;
};

const champion = (
  classicId: string,
  key: string,
  name: string,
  title: string,
  lane: ClassicChampion["lane"],
  role: string,
  archetype: ChampionArchetype,
  accent: string,
  spellOrder: ClassicChampion["spellOrder"],
): ClassicChampion => ({
  classicId,
  key,
  name,
  title,
  aliases: championAliases[key] || [],
  lane,
  role,
  archetype,
  accent,
  spellOrder,
});

export const classicChampions: ClassicChampion[] = [
  champion("60103", "Ahri", "阿狸", "九尾妖狐", "中路", "法师", "mage", "#ec7872", ["Q", "W", "E"]),
  champion("60024", "Jax", "贾克斯", "武器大师", "上路", "战士", "fighter", "#d2a04d", ["W", "Q", "E"]),
  champion("60064", "LeeSin", "李青", "盲僧", "打野", "战士", "jungler", "#d86d4d", ["Q", "W", "E"]),
  champion("60022", "Ashe", "艾希", "寒冰射手", "下路", "射手", "marksman", "#72b7d5", ["W", "Q", "E"]),
  champion("60040", "Janna", "迦娜", "风暴之怒", "辅助", "辅助", "support", "#80d3c9", ["E", "W", "Q"]),
  champion("60067", "Vayne", "薇恩", "暗夜猎手", "下路", "射手", "marksman", "#a274c8", ["W", "Q", "E"]),
  champion("60044", "Taric", "塔里克", "宝石骑士", "辅助", "辅助", "support", "#9c82e0", ["E", "Q", "W"]),
  champion("60034", "Anivia", "艾尼维亚", "冰晶凤凰", "中路", "法师", "mage", "#75cce5", ["E", "Q", "W"]),
  champion("60055", "Katarina", "卡特琳娜", "不祥之刃", "中路", "刺客", "mage", "#c84f55", ["Q", "E", "W"]),
  champion("60074", "Heimerdinger", "黑默丁格", "大发明家", "中路", "法师", "mage", "#e6bd54", ["Q", "W", "E"]),
  champion("60059", "JarvanIV", "嘉文四世", "德玛西亚皇子", "打野", "战士", "jungler", "#d8b55a", ["Q", "E", "W"]),
  champion("60086", "Garen", "盖伦", "德玛西亚之力", "上路", "战士", "fighter", "#87a9d2", ["E", "Q", "W"]),
  champion("60025", "Morgana", "莫甘娜", "堕落天使", "辅助", "法师", "support", "#9a71d0", ["Q", "W", "E"]),
  champion("60035", "Shaco", "萨科", "恶魔小丑", "打野", "刺客", "jungler", "#b15ac8", ["E", "W", "Q"]),
  champion("60063", "Brand", "布兰德", "复仇焰魂", "中路", "法师", "mage", "#e16642", ["W", "Q", "E"]),
  champion("60028", "Evelynn", "伊芙琳", "寡妇制造者", "打野", "刺客", "jungler", "#b15eaa", ["Q", "E", "W"]),
  champion("60099", "Lux", "拉克丝", "光辉女郎", "中路", "法师", "mage", "#e6ca74", ["E", "Q", "W"]),
  champion("60041", "Gangplank", "普朗克", "海洋之灾", "上路", "战士", "fighter", "#b7804c", ["Q", "E", "W"]),
  champion("60001", "Annie", "安妮", "黑暗之女", "中路", "法师", "mage", "#df654c", ["Q", "W", "E"]),
  champion("60079", "Gragas", "古拉加斯", "酒桶", "打野", "战士", "jungler", "#c88a62", ["Q", "E", "W"]),
  champion("60004", "TwistedFate", "崔斯特", "卡牌大师", "中路", "法师", "mage", "#d0a247", ["Q", "W", "E"]),
  champion("60076", "Nidalee", "奈德丽", "狂野女猎手", "打野", "刺客", "jungler", "#b78955", ["Q", "E", "W"]),
  champion("60002", "Olaf", "奥拉夫", "狂战士", "上路", "战士", "fighter", "#8eb7cb", ["Q", "E", "W"]),
  champion("60027", "Singed", "辛吉德", "炼金术士", "上路", "坦克", "tank", "#75aa72", ["Q", "E", "W"]),
  champion("60013", "Ryze", "瑞兹", "流浪法师", "中路", "法师", "mage", "#6e8fcc", ["Q", "W", "E"]),
  champion("60018", "Tristana", "崔丝塔娜", "麦林炮手", "下路", "射手", "marksman", "#7fa5d8", ["E", "Q", "W"]),
  champion("60023", "Tryndamere", "泰达米尔", "蛮族之王", "上路", "战士", "fighter", "#cc7251", ["Q", "E", "W"]),
  champion("60009", "Fiddlesticks", "费德提克", "末日使者", "打野", "法师", "jungler", "#b45f62", ["W", "E", "Q"]),
  champion("60012", "Alistar", "阿利斯塔", "牛头酋长", "辅助", "坦克", "support", "#8b73ba", ["Q", "W", "E"]),
  champion("60033", "Rammus", "拉莫斯", "披甲龙龟", "打野", "坦克", "tank", "#c8a153", ["Q", "W", "E"]),
  champion("60062", "MonkeyKing", "悟空", "齐天大圣", "上路", "战士", "fighter", "#d39853", ["E", "Q", "W"]),
  champion("60037", "Sona", "娑娜", "琴瑟仙女", "辅助", "辅助", "support", "#6aa8d6", ["Q", "W", "E"]),
  champion("60054", "Malphite", "墨菲特", "熔岩巨兽", "上路", "坦克", "tank", "#b79b77", ["Q", "E", "W"]),
  champion("60075", "Nasus", "内瑟斯", "沙漠死神", "上路", "战士", "fighter", "#b08d54", ["Q", "E", "W"]),
  champion("60032", "Amumu", "阿木木", "殇之木乃伊", "打野", "坦克", "tank", "#8fc783", ["E", "Q", "W"]),
  champion("60021", "MissFortune", "厄运小姐", "赏金猎人", "下路", "射手", "marksman", "#d65c54", ["Q", "W", "E"]),
  champion("60096", "KogMaw", "克格莫", "深渊巨口", "下路", "射手", "marksman", "#9ec26d", ["W", "Q", "E"]),
  champion("60010", "Kayle", "凯尔", "审判天使", "上路", "战士", "fighter", "#e0c46e", ["E", "Q", "W"]),
  champion("60026", "Zilean", "基兰", "时光守护者", "辅助", "法师", "support", "#7db9ce", ["Q", "W", "E"]),
  champion("60019", "Warwick", "沃里克", "嗜血猎手", "打野", "战士", "jungler", "#9f5e55", ["Q", "W", "E"]),
  champion("60089", "Leona", "蕾欧娜", "曙光女神", "辅助", "坦克", "support", "#d6aa4f", ["W", "E", "Q"]),
  champion("60072", "Skarner", "斯卡纳", "水晶先锋", "打野", "战士", "jungler", "#a77bd3", ["Q", "W", "E"]),
  champion("60030", "Karthus", "卡尔萨斯", "死亡颂唱者", "中路", "法师", "mage", "#7587c3", ["Q", "E", "W"]),
  champion("60081", "Ezreal", "伊泽瑞尔", "探险家", "下路", "射手", "marksman", "#d5a85b", ["Q", "E", "W"]),
  champion("60014", "Sion", "赛恩", "亡灵勇士", "上路", "坦克", "tank", "#a8534b", ["Q", "W", "E"]),
  champion("60029", "Twitch", "图奇", "瘟疫之源", "下路", "射手", "marksman", "#88b370", ["E", "Q", "W"]),
  champion("60011", "MasterYi", "易", "无极剑圣", "打野", "战士", "jungler", "#d9bc61", ["Q", "E", "W"]),
  champion("60117", "Lulu", "璐璐", "仙灵女巫", "辅助", "辅助", "support", "#c67fd6", ["E", "W", "Q"]),
  champion("60045", "Veigar", "维迦", "邪恶小法师", "中路", "法师", "mage", "#816fd0", ["Q", "W", "E"]),
  champion("60031", "Chogath", "科加斯", "虚空恐惧", "上路", "坦克", "tank", "#9d6cc0", ["E", "Q", "W"]),
  champion("60090", "Malzahar", "玛尔扎哈", "虚空先知", "中路", "法师", "mage", "#9e67cb", ["E", "Q", "W"]),
  champion("60038", "Kassadin", "卡萨丁", "虚空行者", "中路", "刺客", "mage", "#806ec4", ["Q", "E", "W"]),
  champion("60020", "Nunu", "努努", "雪人骑士", "打野", "坦克", "tank", "#79b7d1", ["Q", "E", "W"]),
  champion("60017", "Teemo", "提莫", "迅捷斥候", "上路", "射手", "marksman", "#8db269", ["E", "Q", "W"]),
  champion("60042", "Corki", "库奇", "英勇投弹手", "下路", "射手", "marksman", "#c28c55", ["Q", "E", "W"]),
  champion("60015", "Sivir", "希维尔", "战争女神", "下路", "射手", "marksman", "#c49857", ["Q", "W", "E"]),
  champion("60080", "Pantheon", "潘森", "战争之王", "上路", "战士", "fighter", "#af6d4d", ["Q", "E", "W"]),
  champion("60053", "Blitzcrank", "布里茨", "蒸汽机器人", "辅助", "坦克", "support", "#c1a754", ["Q", "E", "W"]),
  champion("60016", "Soraka", "索拉卡", "众星之子", "辅助", "辅助", "support", "#9b75cb", ["W", "Q", "E"]),
  champion("60036", "DrMundo", "蒙多医生", "祖安狂人", "上路", "坦克", "tank", "#8aaf75", ["Q", "E", "W"]),
];

export const championIcon = (champion: ClassicChampion) =>
  `${CLASSIC_ASSET_BASE}/v1/champion-icons/${champion.classicId}.png`;

export const championSplash = (champion: ClassicChampion) =>
  `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_0.jpg`;

const runeIcon = (asset: string) => `${CLASSIC_ASSET_BASE}/assets/loadouts/jaderunes/${asset}.project_jade.png`;
const masteryIcon = (id: string) => `${CLASSIC_ASSET_BASE}/assets/loadouts/jademasteries/${id}_on.png`;
const spellIcon = (asset: string) => `${CLASSIC_ASSET_BASE}/assets/ux/jade/s3icons/samesized/${asset}.project_jade.png`;

const rune = (
  id: string,
  name: string,
  short: string,
  stat: string,
  value: string,
  per: number,
  asset: string,
): ClassicRune => ({ id, name, short, stat, value, per, icon: runeIcon(asset) });

export const classicRuneGroups: ClassicRuneGroup[] = [
  {
    id: "mark",
    name: "印记",
    cap: 9,
    color: "#d85f52",
    runes: [
      rune("mark-crit", "暴击几率印记", "暴", "暴击几率", "+1%暴击几率", 1, "r_3_3"),
      rune("mark-crit-damage", "暴击伤害印记", "爆", "暴击伤害", "+2%暴击伤害", 2, "r_1_3"),
      rune("mark-ad-scaling", "成长攻击力印记", "成", "18级攻击力", "每级+0.15攻击力（18级+2.7）", 2.7, "r_2_3"),
      rune("mark-armor-pen", "穿甲印记", "穿", "穿甲", "+1.25穿甲", 1.25, "r_1_3"),
      rune("mark-armor-lesser", "次级护甲印记", "甲", "护甲", "+0.8护甲", 0.8, "r_1_2"),
      rune("mark-cdr-lesser", "次级冷却缩减印记", "冷", "冷却缩减", "+0.3%冷却缩减", 0.3, "r_1_2"),
      rune("mark-health-lesser", "次级生命值印记", "生", "生命值", "+3生命值", 3, "r_3_2"),
      rune("mark-magic-pen", "法术穿透印记", "法", "法术穿透", "+1法术穿透", 1, "r_1_3"),
      rune("mark-attack", "攻击力印记", "攻", "攻击力", "+1攻击力", 1, "r_1_3"),
      rune("mark-as", "攻击速度印记", "速", "攻击速度", "+1.7%攻击速度", 1.7, "r_3_3"),
      rune("mark-blank", "次级攻击速度印记", "速", "攻击速度", "+1.1%攻击速度", 1.1, "r_3_3"),
    ],
  },
  {
    id: "seal",
    name: "符印",
    cap: 9,
    color: "#d3a13f",
    runes: [
      rune("seal-armor-scaling", "成长护甲符印", "成", "18级护甲", "每级+0.15护甲（18级+2.7）", 2.7, "y_2_3"),
      rune("seal-health-scaling", "成长生命值符印", "成", "18级生命值", "每级+1.3生命值（18级+23.4）", 23.4, "y_2_3"),
      rune("seal-crit-lesser", "次级暴击几率符印", "暴", "暴击几率", "+0.45%暴击几率", 0.45, "y_3_2"),
      rune("seal-crit-damage-lesser", "次级暴击伤害符印", "爆", "暴击伤害", "+0.7%暴击伤害", 0.7, "y_2_2"),
      rune("seal-as-lesser", "次级攻击速度符印", "速", "攻击速度", "+0.8%攻击速度", 0.8, "y_3_2"),
      rune("seal-mr-lesser", "次级魔法抗性符印", "抗", "魔法抗性", "+0.75魔法抗性", 0.75, "y_3_2"),
      rune("seal-mana-regen", "法力回复符印", "蓝", "法力回复/5秒", "+0.4法力回复/5秒", 0.4, "y_3_3"),
      rune("seal-armor", "护甲符印", "甲", "护甲", "+1护甲", 1, "y_1_3"),
      rune("seal-gold", "金币符印", "金", "金币/10秒", "+0.25金币/10秒", 0.25, "y_3_3"),
      rune("seal-blank", "次级护甲符印", "甲", "护甲", "+0.65护甲", 0.65, "y_1_3"),
      rune("seal-health-regen", "生命回复符印", "回", "生命回复/5秒", "+0.5生命回复/5秒", 0.5, "y_1_3"),
      rune("seal-health", "生命值符印", "生", "生命值", "+8生命值", 8, "y_3_3"),
    ],
  },
  {
    id: "glyph",
    name: "雕纹",
    cap: 9,
    color: "#59a4d1",
    runes: [
      rune("glyph-ap-scaling", "成长法术强度雕纹", "成", "18级法术强度", "每级+0.2法术强度（18级+3.6）", 3.6, "b_4_3"),
      rune("glyph-cdr-scaling", "成长冷却缩减雕纹", "成", "18级冷却缩减", "每级+0.1%冷却缩减（18级+1.8%）", 1.8, "b_1_3"),
      rune("glyph-mr-scaling", "成长魔法抗性雕纹", "成", "18级魔法抗性", "每级+0.2魔法抗性（18级+3.6）", 3.6, "b_4_3"),
      rune("glyph-crit-damage-lesser", "次级暴击伤害雕纹", "爆", "暴击伤害", "+0.7%暴击伤害", 0.7, "b_2_3"),
      rune("glyph-as-lesser", "次级攻击速度雕纹", "速", "攻击速度", "+0.8%攻击速度", 0.8, "b_3_2"),
      rune("glyph-armor-lesser", "次级护甲雕纹", "甲", "护甲", "+0.8护甲", 0.8, "b_1_2"),
      rune("glyph-health-lesser", "次级生命值雕纹", "生", "生命值", "+3生命值", 3, "b_4_3"),
      rune("glyph-mana", "法力值雕纹", "蓝", "法力值", "+12法力值", 12, "b_1_3"),
      rune("glyph-ap", "法术强度雕纹", "法", "法术强度", "+1.2法术强度", 1.2, "b_3_3"),
      rune("glyph-blank", "次级冷却缩减雕纹", "冷", "冷却缩减", "+0.5%冷却缩减", 0.5, "b_1_3"),
      rune("glyph-cdr", "冷却缩减雕纹", "冷", "冷却缩减", "+0.8%冷却缩减", 0.8, "b_1_3"),
      rune("glyph-mr", "魔法抗性雕纹", "抗", "魔法抗性", "+1.4魔法抗性", 1.4, "b_3_3"),
    ],
  },
  {
    id: "quint",
    name: "精华",
    cap: 3,
    color: "#9b6ddb",
    runes: [
      rune("quint-health-percent", "百分比生命值精华", "生", "百分比生命值", "+1.5%百分比生命值", 1.5, "bl_3_3"),
      rune("quint-crit-damage", "暴击伤害精华", "爆", "暴击伤害", "+4.5%暴击伤害", 4.5, "bl_1_3"),
      rune("quint-ap", "法术强度精华", "法", "法术强度", "+5法术强度", 5, "bl_3_3"),
      rune("quint-spell-vamp", "法术吸血精华", "吸", "法术吸血", "+2%法术吸血", 2, "bl_4_3"),
      rune("quint-attack", "攻击力精华", "攻", "攻击力", "+2.25攻击力", 2.25, "bl_1_3"),
      rune("quint-as", "攻击速度精华", "速", "攻击速度", "+4.5%攻击速度", 4.5, "bl_3_3"),
      rune("quint-armor", "护甲精华", "甲", "护甲", "+4.3护甲", 4.3, "bl_1_3"),
      rune("quint-gold", "金币精华", "金", "金币/10秒", "+1金币/10秒", 1, "bl_4_3"),
      rune("quint-xp", "经验值精华", "经", "经验获取", "+2%经验获取", 2, "bl_2_3"),
      rune("quint-blank-as", "次级攻击速度精华", "速", "攻击速度", "+3%攻击速度", 3, "bl_3_3"),
      rune("quint-blank-armor", "次级护甲精华", "甲", "护甲", "+2.8护甲", 2.8, "bl_1_3"),
      rune("quint-blank-cdr", "次级冷却缩减精华", "冷", "冷却缩减", "+1.7%冷却缩减", 1.7, "bl_3_3"),
      rune("quint-life-steal", "生命偷取精华", "吸", "生命偷取", "+1.5%生命偷取", 1.5, "bl_1_3"),
      rune("quint-health", "生命值精华", "生", "生命值", "+26生命值", 26, "bl_3_3"),
      rune("quint-move", "移动速度精华", "移", "移动速度", "+1.5%移动速度", 1.5, "bl_3_3"),
    ],
  },
];

const mastery = (
  id: string,
  name: string,
  tree: ClassicMastery["tree"],
  max: number,
  description: string,
): ClassicMastery => ({
  id,
  name,
  tree,
  tier: Number(id[1]),
  column: Number(id[2]),
  max,
  description,
  icon: masteryIcon(id),
});

export const classicMasteries: ClassicMastery[] = [
  mastery("511", "召唤师的愤怒", "进攻", 1, "强化虚弱、引燃、幽灵疾步、战意激增、战争图腾和晋升。"),
  mastery("512", "狂怒", "进攻", 4, "每级获得 +1% 攻击速度。"),
  mastery("513", "巫术", "进攻", 4, "每级获得 +1% 冷却缩减。"),
  mastery("514", "屠夫", "进攻", 2, "普通攻击对小兵和野怪造成 2/4 额外伤害。"),
  mastery("522", "致命", "进攻", 4, "每级获得 +0.166/0.333/0.498/0.664 攻击力。"),
  mastery("523", "爆裂", "进攻", 4, "每级获得 +0.25/0.5/0.75/1 法术强度。"),
  mastery("524", "摧毁", "进攻", 1, "对防御塔造成的伤害提高 5%。"),
  mastery("531", "浩劫", "进攻", 3, "造成的伤害提高 0.67%/1.33%/2%。"),
  mastery("532", "武器专家", "进攻", 1, "+8% 护甲穿透。"),
  mastery("533", "奥术知识", "进攻", 1, "+8% 法术穿透。"),
  mastery("541", "致命", "进攻", 2, "+2.5%/5% 暴击伤害（近战翻倍）。"),
  mastery("542", "蛮横之力", "进攻", 2, "+1.5/3 攻击力。"),
  mastery("543", "思想之力", "进攻", 3, "+2/4/6 法术强度。"),
  mastery("544", "咒剑", "进攻", 1, "普通攻击造成相当于 5% 法术强度的魔法伤害。"),
  mastery("551", "狂暴", "进攻", 1, "暴击后获得持续 2 秒的 10% 攻击速度。"),
  mastery("552", "切割", "进攻", 3, "+2/4/6 穿甲。"),
  mastery("553", "高阶法师", "进攻", 4, "法术强度提升 1.25%/2.5%/3.75%/5%。"),
  mastery("562", "死神", "进攻", 1, "对生命值低于 50% 的目标造成伤害提高 5%。"),
  mastery("611", "召唤师的决断", "防御", 1, "强化净化、治疗术、惩戒、屏障和强化要塞。"),
  mastery("612", "坚韧", "防御", 3, "根据已损失生命值，获得最多 +2/4/6 生命回复/5秒。"),
  mastery("613", "耐久", "防御", 4, "每级获得 +1.5/3/4.5/6 生命值。"),
  mastery("614", "韧化皮肤", "防御", 2, "受到的野怪伤害减少 1/2。"),
  mastery("621", "坚硬", "防御", 3, "+2/4/6 护甲。"),
  mastery("622", "抵抗", "防御", 3, "+2/4/6 魔法抗性。"),
  mastery("624", "刃甲", "防御", 1, "对攻击你的敌方野怪造成 6 伤害。"),
  mastery("631", "不屈", "防御", 2, "受到敌方英雄的伤害减少 1/2。"),
  mastery("632", "无情", "防御", 2, "受到的减速效果降低 7.5%/15%。"),
  mastery("633", "老兵伤痕", "防御", 1, "+30 生命值。"),
  mastery("634", "护卫", "防御", 1, "受到防御塔的伤害降低 5%。"),
  mastery("641", "格挡", "防御", 1, "受到英雄普通攻击的伤害减少 3。"),
  mastery("642", "顽强", "防御", 3, "控制效果持续时间减少 5%/10%/15%。"),
  mastery("643", "主宰", "防御", 3, "最大生命值提升 1.5%/2.75%/4%。"),
  mastery("651", "卫士", "防御", 1, "附近每有一名敌方英雄，获得 +1 护甲和魔法抗性。"),
  mastery("652", "传奇装甲", "防御", 3, "额外护甲和魔法抗性提升 2%/4%/6%。"),
  mastery("653", "精心照料", "防御", 1, "阵亡时间缩短 10%。"),
  mastery("654", "坚固装甲", "防御", 1, "受到的暴击伤害降低 10%。"),
  mastery("662", "荣誉守卫", "防御", 1, "受到所有来源的伤害降低 3%。"),
  mastery("711", "召唤师的感悟", "通用", 1, "强化传送、闪现、清晰术、重生和洞察。"),
  mastery("712", "漫游", "通用", 3, "非战斗状态获得 +0.66%/1.33%/2% 移动速度。"),
  mastery("713", "冥想", "通用", 3, "+1/2/3 法力回复/5秒。"),
  mastery("714", "改良回城", "通用", 1, "回城的施放时间缩短 1 秒。"),
  mastery("721", "斥候", "通用", 1, "守卫放置后 3 秒内获得 25% 额外视野距离。"),
  mastery("722", "智囊", "通用", 3, "召唤师技能冷却时间缩短 4%/7%/10%。"),
  mastery("723", "精神扩张", "通用", 3, "每级获得 +4/7/10 法力值。"),
  mastery("724", "巧匠", "通用", 2, "主动装备冷却时间缩短 7.5%/15%。"),
  mastery("731", "贪婪", "通用", 4, "每 10 秒额外获得 +0.5/1/1.5/2 金币。"),
  mastery("732", "符能亲和", "通用", 1, "中立野怪增益持续时间延长 20%。"),
  mastery("733", "吸血习性", "通用", 3, "+1%/2%/3% 生命偷取和法术吸血。"),
  mastery("734", "饼干师傅", "通用", 1, "开局获得一块回复饼干。"),
  mastery("741", "财富", "通用", 2, "初始金币提升 35/75。"),
  mastery("742", "觉悟", "通用", 4, "获得的经验值提升 1.25%/2.5%/3.75%/5%。"),
  mastery("743", "精魄之力", "通用", 3, "每拥有 400 法力值，获得 +1/2/3 生命回复/5秒。"),
  mastery("744", "探索者", "通用", 1, "开局获得一个探索者守卫。"),
  mastery("751", "探云手", "通用", 1, "普通攻击命中敌方英雄可获得金币，冷却 5 秒。"),
  mastery("752", "智谋", "通用", 3, "+2%/4%/6% 冷却缩减。"),
  mastery("762", "灵敏", "通用", 1, "移动速度提升 3%。"),
];

const spell = (
  id: string,
  name: string,
  cooldown: number,
  asset: string,
  description: string,
): ClassicSpell => ({ id, name, cooldown, icon: spellIcon(asset), description });

export const classicSpells: ClassicSpell[] = [
  spell("74", "闪现", 300, "s3_summoner_flash", "朝指针位置瞬间传送一小段距离。召唤师的感悟可缩短 15 秒冷却。"),
  spell("714", "引燃", 210, "s3_summonerignite", "持续造成真实伤害并降低治疗效果；强化后冷却期间获得 5 攻击力和法术强度。"),
  spell("712", "传送", 300, "s3_summoner_teleport", "引导后传送至友方小兵、防御塔或守卫；强化后缩短引导时间。"),
  spell("711", "惩戒", 70, "s3_summoner_smite", "对目标敌方小兵或宠物造成真实伤害；强化后每次施放获得 10 金币。"),
  spell("76", "幽灵疾步", 240, "s3_summoner_haste", "获得移动速度并无视单位碰撞体积；强化后额外提高移动速度。"),
  spell("73", "虚弱", 210, "s3_summoner_exhaust", "使目标英雄减速，并降低其攻击速度和造成的伤害；强化后额外降低 10 双抗。"),
  spell("71", "净化", 210, "s3_summoner_boost", "移除限制效果和召唤师技能减益，并短时缩短后续限制效果。"),
  spell("75", "洞察", 60, "s3_summoner_clairvoyance", "短时间显形地图任意区域；强化后被发现的单位持续可见 5 秒。"),
  spell("77", "治疗术", 300, "s3_summoner_heal", "为英雄和附近友军回复生命值；强化后每级增加 5 点治疗量。"),
  spell("721", "屏障", 210, "s3_summonerbarrier", "获得一个短时护盾；召唤师的决断会提高护盾效果。"),
  spell("713", "清晰术", 135, "s3_summonermana", "为附近所有友方英雄回复法力值；强化后多回复 25%。"),
  spell("705", "强化要塞", 180, "s3_summoner_fortify", "使友方防御塔免疫伤害并提高 100% 攻速，持续 6 秒。"),
  spell("709", "战争图腾", 270, "s3_summoner_rally", "召唤临时信标，提高范围内友军攻击力；强化后额外提供法术强度。"),
  spell("716", "战意激增", 180, "s3_summoner_battlecry", "暂时提高攻击速度和法术强度；强化后额外提高 5% 攻速与 10% 法强。"),
  spell("720", "晋升", 270, "38", "强化一名小兵并共享其击杀金币；强化后攻击力光环也会影响英雄。"),
  spell("777", "重生", 510, "s3_summoner_revive", "立即在泉水复活并临时提高移动速度；强化后临时提供 220–560 生命值。"),
];

export const initialMasteryRanks: Record<string, number> = {
  "511": 1,
  "512": 4,
  "513": 4,
  "514": 2,
  "522": 4,
  "523": 4,
  "524": 1,
  "531": 1,
  "611": 1,
  "612": 3,
  "613": 4,
  "614": 1,
};

export const masteryPresets: Record<string, Record<string, number>> = {
  "攻击 21 / 防御 9": initialMasteryRanks,
  "攻击 21 / 通用 9": {
    "511": 1, "512": 4, "513": 4, "514": 2, "522": 4, "523": 4, "524": 1, "531": 1,
    "711": 1, "712": 3, "713": 3, "714": 1, "721": 1,
  },
  "防御 21 / 通用 9": {
    "611": 1, "612": 3, "613": 4, "614": 2, "621": 3, "622": 3, "624": 1, "631": 2, "633": 1, "641": 1,
    "711": 1, "712": 3, "713": 3, "714": 1, "721": 1,
  },
};

export const runePresetIds: Record<ChampionArchetype, Record<ClassicRuneGroup["id"], string>> = {
  mage: { mark: "mark-magic-pen", seal: "seal-armor", glyph: "glyph-mr", quint: "quint-ap" },
  fighter: { mark: "mark-attack", seal: "seal-armor", glyph: "glyph-mr", quint: "quint-attack" },
  jungler: { mark: "mark-attack", seal: "seal-armor", glyph: "glyph-mr", quint: "quint-attack" },
  marksman: { mark: "mark-attack", seal: "seal-armor", glyph: "glyph-mr", quint: "quint-attack" },
  tank: { mark: "mark-armor-pen", seal: "seal-armor", glyph: "glyph-mr", quint: "quint-health" },
  support: { mark: "mark-magic-pen", seal: "seal-armor", glyph: "glyph-mr", quint: "quint-ap" },
};

export const classicBuildPresets: Record<ChampionArchetype, string[]> = {
  mage: ["771056", "773020", "773165", "773089", "773135", "773157"],
  fighter: ["771055", "773078", "773047", "773153", "773124", "773065"],
  jungler: ["771039", "773209", "773071", "773047", "773156", "773065"],
  marksman: ["771055", "773006", "773031", "773085", "773046", "773035"],
  tank: ["771054", "773047", "773068", "773143", "773065", "773026"],
  support: ["772049", "773117", "773069", "773190", "773222", "773107"],
};

export const defaultSpellsFor = (champion: ClassicChampion): [string, string] => {
  if (champion.lane === "打野") return ["74", "711"];
  if (champion.lane === "上路") return ["74", "712"];
  if (champion.lane === "辅助") return ["74", "73"];
  if (champion.lane === "下路") return ["74", "77"];
  return ["74", "714"];
};

export const skillPlanFor = (order: ClassicChampion["spellOrder"]) => {
  const template = ["Q", "W", "E", "Q", "Q", "R", "Q", "W", "Q", "W", "R", "W", "W", "E", "E", "R", "E", "E"];
  const mapping = { Q: order[0], W: order[1], E: order[2], R: "R" } as const;
  return template.map((skill) => mapping[skill as keyof typeof mapping]);
};

export const classicItemCategories = ["全部", "出门装备", "消耗品", "基础装备", "鞋子", "史诗装备", "传说装备"] as const;

export const masteryBackgrounds: Record<ClassicMastery["tree"], string> = {
  进攻: "https://c-lol-web.op.gg/app-router/assets/images/classic-builds/masteries/mastery_offense_bg.jpg",
  防御: "https://c-lol-web.op.gg/app-router/assets/images/classic-builds/masteries/mastery_defense_bg.jpg",
  通用: "https://c-lol-web.op.gg/app-router/assets/images/classic-builds/masteries/mastery_util_bg.jpg",
};

export const runeBoardBackground =
  "https://c-lol-web.op.gg/app-router/assets/images/classic-builds/runes/rune_panel.png";
