// Generated from Riot Data Dragon 16.15.1 and CommunityDragon 16.15. Do not edit manually.
export const CLASSIC_MAYHEM_PATCH = "16.15";
export const LIVE_DATA_PATCH = "16.15.1";
export const CLASSIC_MAYHEM_MODE = "KIWI_JADE" as const;
export const REGULAR_MAYHEM_MODE = "KIWI" as const;

export type PublicDataStatus = "available" | "partial" | "unavailable";

export type MayhemAbility = {
  key: "P" | "Q" | "W" | "E" | "R";
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
  numericDetail: string;
  numericVersion: string;
  sourceUrl: string;
  dataDragonSourceUrl: string;
  numericStatus: PublicDataStatus;
  unresolvedTokens: string[];
};

export type LiveClassicChampion = {
  classicId: string;
  key: string;
  name: string;
  title: string;
  portrait: string;
  splash: string;
  tags: string[];
  resourceName: string;
  statsSourceUrl: string;
  statsFallbackFields: string[];
  statsConfirmedZeroFields: string[];
  stats: {
    hp: number;
    hpPerLevel: number;
    hpRegen: number;
    hpRegenPerLevel: number;
    resource: number;
    resourcePerLevel: number;
    resourceRegen: number;
    resourceRegenPerLevel: number;
    attackDamage: number;
    attackDamagePerLevel: number;
    attackSpeed: number;
    attackSpeedPerLevel: number;
    armor: number;
    armorPerLevel: number;
    magicResist: number;
    magicResistPerLevel: number;
    moveSpeed: number;
    attackRange: number;
    crit: number;
    critPerLevel: number;
  };
  abilities: MayhemAbility[];
};

export type MayhemAugment = {
  id: number;
  apiName: string;
  name: string;
  rarity: "silver" | "gold" | "prismatic";
  icon: string;
  description: string;
  tags: string[];
  classicExclusive: boolean;
  hasPublicDescription: boolean;
  descriptionStatus: PublicDataStatus;
  unavailableReason: string | null;
  unresolvedTokens: string[];
  descriptionSourceUrl: string;
};

export const liveClassicChampions: LiveClassicChampion[] = [
  {
    "classicId": "60103",
    "key": "Ahri",
    "name": "九尾妖狐",
    "title": "阿狸",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Ahri.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    "tags": [
      "Mage",
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 590,
      "hpPerLevel": 104,
      "hpRegen": 2.5,
      "hpRegenPerLevel": 0.6,
      "resource": 418,
      "resourcePerLevel": 25,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 53,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.668,
      "attackSpeedPerLevel": 2.2,
      "armor": 21,
      "armorPerLevel": 4.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "摄魂夺魄",
        "description": "击杀小兵或野怪会为阿狸提供一层【魂魄碎片】。在拥有9个碎片后，阿狸会消耗掉它们来回复35–95（1–18级） + 0.2 × 法术强度生命值。 当阿狸参与击杀一名她在3秒内造成过伤害的敌方英雄后，她会享用其魂魄，来回复75–165（1–18级） + 0.3 × 法术强度生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ahri_SoulEater2.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：击杀小兵或野怪会为阿狸提供一层【魂魄碎片】。在拥有9个碎片后，阿狸会消耗掉它们来回复35–95（1–18级） + 0.2 × 法术强度生命值。 当阿狸参与击杀一名她在3秒内造成过伤害的敌方英雄后，她会享用其魂魄，来回复75–165（1–18级） + 0.3 × 法术强度生命值。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "欺诈宝珠",
        "description": "阿狸投出然后收回她的宝珠，在放出时会沿途对敌人造成35/60/85/110/135 + 0.5 × 法术强度魔法伤害，在收回时则会沿途对敌人造成35/60/85/110/135 + 0.5 × 法术强度真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriQ.png",
        "cooldown": "7",
        "cost": "55/65/75/85/95",
        "range": "970",
        "numericDetail": "技能文本：阿狸投出然后收回她的宝珠，在放出时会沿途对敌人造成35/60/85/110/135 + 0.5 × 法术强度魔法伤害，在收回时则会沿途对敌人造成35/60/85/110/135 + 0.5 × 法术强度真实伤害。\n等级成长：伤害=35/60/85/110/135",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "妖异狐火",
        "description": "阿狸释放出3团狐火来追踪附近的敌人们并造成40/60/80/100/120 + 0.4 × 法术强度魔法伤害，第一团之后的狐火降低至(40/60/80/100/120 + 0.4 × 法术强度) × 0.4伤害。她还会获得在2秒里持续衰减的40%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriW.png",
        "cooldown": "9/8/7/6/5",
        "cost": "30",
        "range": "700",
        "numericDetail": "技能文本：阿狸释放出3团狐火来追踪附近的敌人们并造成40/60/80/100/120 + 0.4 × 法术强度魔法伤害，第一团之后的狐火降低至(40/60/80/100/120 + 0.4 × 法术强度) × 0.4伤害。她还会获得在2秒里持续衰减的40%移动速度。\n补充数值：狐火的优先度顺序为：被魅惑妖术命中的英雄、被阿狸攻击过的敌人、然后是其他英雄。20%生命值以下的小兵会受到200%伤害。\n等级成长：伤害=40/60/80/100/120",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "魅惑妖术",
        "description": "阿狸献出红唇热吻，魅惑命中的首个敌人1.2/1.35/1.5/1.65/1.8秒并造成80/120/160/200/240 + 0.85 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriE.png",
        "cooldown": "12",
        "cost": "60",
        "range": "975",
        "numericDetail": "技能文本：阿狸献出红唇热吻，魅惑命中的首个敌人1.2/1.35/1.5/1.65/1.8秒并造成80/120/160/200/240 + 0.85 × 法术强度魔法伤害。\n补充数值：这个技能会使敌人中断位移。\n等级成长：伤害=80/120/160/200/240；持续时间=1.2/1.35/1.5/1.65/1.8",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "灵魄突袭",
        "description": "阿狸像妖魅一般冲刺，并对附近的敌人们发射3颗灵魄弹，优先选择英雄。这些灵魄弹每颗造成75/125/175 + 0.35 × 法术强度魔法伤害。灵魄突袭可以在15秒内再次施放至多2次。 在此期间，用摄魂夺魄吞噬一名英雄的魂魄时，会使再次施放的窗口期至多延长至10秒并为灵魄突袭提供一次额外的再次施放(至多可储存至3次)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriR.png",
        "cooldown": "140/120/100",
        "cost": "100",
        "range": "450",
        "numericDetail": "技能文本：阿狸像妖魅一般冲刺，并对附近的敌人们发射3颗灵魄弹，优先选择英雄。这些灵魄弹每颗造成75/125/175 + 0.35 × 法术强度魔法伤害。灵魄突袭可以在15秒内再次施放至多2次。 在此期间，用摄魂夺魄吞噬一名英雄的魂魄时，会使再次施放的窗口期至多延长至10秒并为灵魄突袭提供一次额外的再次施放(至多可储存至3次)。\n等级成长：伤害=75/125/175",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60024",
    "key": "Jax",
    "name": "武器大师",
    "title": "贾克斯",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Jax.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
    "tags": [
      "Fighter"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 650,
      "hpPerLevel": 103,
      "hpRegen": 8.5,
      "hpRegenPerLevel": 0.55,
      "resource": 339,
      "resourcePerLevel": 52,
      "resourceRegen": 8.2,
      "resourceRegenPerLevel": 0.7,
      "attackDamage": 68,
      "attackDamagePerLevel": 4.25,
      "attackSpeed": 0.638,
      "attackSpeedPerLevel": 3.4,
      "armor": 36,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 350,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "无情连打",
        "description": "贾克斯的攻击会提供一层持续2.5秒的效果，来提供给他5/6.5/8/9.5/11/12.5%（英雄等级1/4/7/10/13/16）攻击速度 (最大值为(5/6.5/8/9.5/11/12.5%（英雄等级1/4/7/10/13/16）) × 8攻击速度)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Armsmaster_MasterOfArms.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：贾克斯的攻击会提供一层持续2.5秒的效果，来提供给他5/6.5/8/9.5/11/12.5%（英雄等级1/4/7/10/13/16）攻击速度 (最大值为(5/6.5/8/9.5/11/12.5%（英雄等级1/4/7/10/13/16）) × 8攻击速度)。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "跳斩",
        "description": "贾克斯跳向一个友方或敌方单位或守卫，如果目标是敌人则会造成65/105/145/185/225 + 1 × 额外攻击力物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "50",
        "range": "700",
        "numericDetail": "技能文本：贾克斯跳向一个友方或敌方单位或守卫，如果目标是敌人则会造成65/105/145/185/225 + 1 × 额外攻击力物理伤害。\n等级成长：伤害=65/105/145/185/225",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "蓄力一击",
        "description": "贾克斯给他的武器充能，使他的下次攻击或跳斩造成额外的50/85/120/155/190 + 0.6 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxW.png",
        "cooldown": "7/6/5/4/3",
        "cost": "30",
        "range": "300",
        "numericDetail": "技能文本：贾克斯给他的武器充能，使他的下次攻击或跳斩造成额外的50/85/120/155/190 + 0.6 × 法术强度魔法伤害。\n补充数值：这个技能会在造成伤害时触发技能特效。 对建筑物造成50%伤害。\n等级成长：伤害=50/85/120/155/190",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "反击风暴",
        "description": "贾克斯进入一个最多持续2秒的防御姿态，能够躲闪掉一切即将到来的攻击，并且减少25%来自群体技能的伤害。在2秒后，或再次施放后，贾克斯会造成40/70/100/130/160 + 0.7 × 法术强度 + 4%最大生命值的魔法伤害并使附近的敌人晕眩1秒。 贾克斯每躲掉一次攻击，这个伤害值就会提升20%，最多可提升至最大值(40/70/100/130/160 + 0.7 × 法术强度) × 2 + (4) × 2%最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxE.png",
        "cooldown": "17/15/13/11/9",
        "cost": "50/60/70/80/90",
        "range": "300",
        "numericDetail": "技能文本：贾克斯进入一个最多持续2秒的防御姿态，能够躲闪掉一切即将到来的攻击，并且减少25%来自群体技能的伤害。在2秒后，或再次施放后，贾克斯会造成40/70/100/130/160 + 0.7 × 法术强度 + 4%最大生命值的魔法伤害并使附近的敌人晕眩1秒。 贾克斯每躲掉一次攻击，这个伤害值就会提升20%，最多可提升至最大值(40/70/100/130/160 + 0.7 × 法术强度) × 2 + (4) × 2%最大生命值。\n等级成长：伤害=40/70/100/130/160",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "武器大师",
        "description": "被动：2.5秒内的每第三次攻击造成额外的75/130/185 + 0.6 × 法术强度魔法伤害。 主动：贾克斯将他的灯柱砸落，对附近的敌人们造成100/175/250 + 1 × 攻击力魔法伤害。如果他命中了一名英雄，那么他会获得45/60/75 + 0.4 × 额外攻击力护甲和(45/60/75 + 0.4 × 额外攻击力) × 0.6魔法抗性，并且每额外命中一个英雄就会获得额外的20/25/30 + 0.1 × 额外攻击力护甲和(20/25/30 + 0.1 × 额外攻击力) × 0.6魔法抗性，持续8秒。在此期间，他每第二次攻击（而非每第三次攻击）造成额外的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxR.png",
        "cooldown": "110/100/90",
        "cost": "100",
        "range": "260",
        "numericDetail": "技能文本：被动：2.5秒内的每第三次攻击造成额外的75/130/185 + 0.6 × 法术强度魔法伤害。 主动：贾克斯将他的灯柱砸落，对附近的敌人们造成100/175/250 + 1 × 攻击力魔法伤害。如果他命中了一名英雄，那么他会获得45/60/75 + 0.4 × 额外攻击力护甲和(45/60/75 + 0.4 × 额外攻击力) × 0.6魔法抗性，并且每额外命中一个英雄就会获得额外的20/25/30 + 0.1 × 额外攻击力护甲和(20/25/30 + 0.1 × 额外攻击力) × 0.6魔法抗性，持续8秒。在此期间，他每第二次攻击（而非每第三次攻击）造成额外的魔法伤害。\n补充数值：对建筑物造成50%伤害。\n等级成长：被动伤害=75/130/185；主动伤害=100/175/250；基础护甲=45/60/75；基础魔法抗性=27/36/45；每个额外英雄的护甲=20/25/30；每个额外英雄的魔法抗性=12/15/18",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60064",
    "key": "LeeSin",
    "name": "盲僧",
    "title": "李青",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/LeeSin.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resourceName": "能量",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 645,
      "hpPerLevel": 108,
      "hpRegen": 7.5,
      "hpRegenPerLevel": 0.7,
      "resource": 200,
      "resourcePerLevel": 0,
      "resourceRegen": 50,
      "resourceRegenPerLevel": 0,
      "attackDamage": 66,
      "attackDamagePerLevel": 3.4,
      "attackSpeed": 0.651,
      "attackSpeedPerLevel": 3,
      "armor": 36,
      "armorPerLevel": 4.5,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "疾风骤雨",
        "description": "李青的技能会为他的下两次攻击提供40%攻击速度。第一次攻击回复(10/15/20（英雄等级1/7/13）) × 2能量，第二次攻击回复10/15/20（英雄等级1/7/13）能量。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LeeSinPassive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：李青的技能会为他的下两次攻击提供40%攻击速度。第一次攻击回复(10/15/20（英雄等级1/7/13）) × 2能量，第二次攻击回复10/15/20（英雄等级1/7/13）能量。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "天音波/回音击",
        "description": "李青发出刺耳的声波定位敌人，对命中的首个敌人造成60/90/120/150/180 + 0.9 × 额外攻击力物理伤害，提供目标的真实视野，并使李青可以在接下来的3秒内再次施放。 再次施放：李青突进向被声波击中的敌人，造成60/90/120/150/180 + 0.9 × 额外攻击力到(60/90/120/150/180 + 0.9 × 额外攻击力) × 2物理伤害（基于目标已损失的生命值）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinQOne.png",
        "cooldown": "10/9/8/7/6",
        "cost": "50",
        "range": "1100",
        "numericDetail": "技能文本：李青发出刺耳的声波定位敌人，对命中的首个敌人造成60/90/120/150/180 + 0.9 × 额外攻击力物理伤害，提供目标的真实视野，并使李青可以在接下来的3秒内再次施放。 再次施放：李青突进向被声波击中的敌人，造成60/90/120/150/180 + 0.9 × 额外攻击力到(60/90/120/150/180 + 0.9 × 额外攻击力) × 2物理伤害（基于目标已损失的生命值）。\n等级成长：天音波伤害=60/90/120/150/180；回音击 最小伤害=60/90/120/150/180；回音击 最大伤害=120/180/240/300/360",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "金钟罩/铁布衫",
        "description": "李青冲刺至一名友军或守卫处。如果目标友军是一名英雄，李青会为自己和目标友军提供持续2秒的60/105/150/195/240 + 0.8 × 法术强度护盾值。李青可以在接下来的3秒内再次施放此技能。 再次施放：李青获得持续4秒的10/14/18/22/26%全能吸血。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinWOne.png",
        "cooldown": "7",
        "cost": "50",
        "range": "700",
        "numericDetail": "技能文本：李青冲刺至一名友军或守卫处。如果目标友军是一名英雄，李青会为自己和目标友军提供持续2秒的60/105/150/195/240 + 0.8 × 法术强度护盾值。李青可以在接下来的3秒内再次施放此技能。 再次施放：李青获得持续4秒的10/14/18/22/26%全能吸血。\n等级成长：金钟罩伤害吸收=60/105/150/195/240；铁布衫 全能吸血百分比=10/14/18/22/26%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "天雷破/摧筋断骨",
        "description": "李青猛击地面，施放冲击波，造成35/60/85/110/135 + 0.9 × 攻击力魔法伤害并使命中的敌方单位显形4秒。如果这个技能命中了一名敌人，那么李青可以在接下来的3秒内再次施放此技能。 再次施放：李青使被冲击波击中的敌人造成在4秒里持续衰减的35/45/55/65/75%减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinEOne.png",
        "cooldown": "8",
        "cost": "50",
        "range": "450",
        "numericDetail": "技能文本：李青猛击地面，施放冲击波，造成35/60/85/110/135 + 0.9 × 攻击力魔法伤害并使命中的敌方单位显形4秒。如果这个技能命中了一名敌人，那么李青可以在接下来的3秒内再次施放此技能。 再次施放：李青使被冲击波击中的敌人造成在4秒里持续衰减的35/45/55/65/75%减速。\n等级成长：天雷破伤害=35/60/85/110/135；摧筋断骨减速=35/45/55/65/75%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "猛龙摆尾",
        "description": "李青用一记强力的回旋踢击退一名敌方英雄，并造成175/400/625 + 2 × 额外攻击力物理伤害。 被目标撞到的敌方英雄会被短暂击飞并受到物理伤害，伤害值相当于175/400/625 + 2 × 额外攻击力加上初始目标12/15/18%的额外生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinR.png",
        "cooldown": "110/85/60",
        "cost": "0",
        "range": "375",
        "numericDetail": "技能文本：李青用一记强力的回旋踢击退一名敌方英雄，并造成175/400/625 + 2 × 额外攻击力物理伤害。 被目标撞到的敌方英雄会被短暂击飞并受到物理伤害，伤害值相当于175/400/625 + 2 × 额外攻击力加上初始目标12/15/18%的额外生命值。\n补充数值：目标在施法时间内会被 禁锢。\n等级成长：伤害=175/400/625；来自额外生命值的伤害=12/15/18%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60022",
    "key": "Ashe",
    "name": "寒冰射手",
    "title": "艾希",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Ashe.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    "tags": [
      "Marksman",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 610,
      "hpPerLevel": 101,
      "hpRegen": 3.5,
      "hpRegenPerLevel": 0.55,
      "resource": 280,
      "resourcePerLevel": 35,
      "resourceRegen": 7,
      "resourceRegenPerLevel": 0.65,
      "attackDamage": 59,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 3,
      "armor": 26,
      "armorPerLevel": 4.6,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 600,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "冰霜射击",
        "description": "艾希的攻击和技能会施加持续2秒的(0.2–0.3（1–18级）) × 100%减速。攻击造成(1 + (1 + 1 × 额外暴击伤害) × 暴击率) × 100%伤害。 艾希的暴击不会造成额外伤害，但会将【冰霜射击】的减速提升至(0.4–0.6（1–18级）) × 100%，在持续时间内不断衰减。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ashe_P.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：艾希的攻击和技能会施加持续2秒的(0.2–0.3（1–18级）) × 100%减速。攻击造成(1 + (1 + 1 × 额外暴击伤害) × 暴击率) × 100%伤害。 艾希的暴击不会造成额外伤害，但会将【冰霜射击】的减速提升至(0.4–0.6（1–18级）) × 100%，在持续时间内不断衰减。\n补充数值：艾希的攻击和技能会施加持续2秒的(0.2–0.3（1–18级）) × 100%减速。攻击造成(1 + (1 + 1 × 额外暴击伤害) × 暴击率) × 100%伤害。 艾希的暴击不会造成额外伤害，但会将【冰霜射击】的减速提升至(0.4–0.6（1–18级）) × 100%，在持续时间内不断衰减。 额外伤害受益于暴击几率和暴击伤害加成。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "射手的专注",
        "description": "被动：艾希的攻击提供一层持续4秒的效果。在4层时，她就可以激活这个技能。 主动：艾希获得20/30/40/50/60%攻击速度并且她的攻击转而造成1.1/1.15/1.2/1.25/1.3 × 攻击力伤害，持续6秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AsheQ.png",
        "cooldown": "0",
        "cost": "30",
        "range": "400",
        "numericDetail": "技能文本：被动：艾希的攻击提供一层持续4秒的效果。在4层时，她就可以激活这个技能。 主动：艾希获得20/30/40/50/60%攻击速度并且她的攻击转而造成1.1/1.15/1.2/1.25/1.3 × 攻击力伤害，持续6秒。\n补充数值：每次强化版攻击由5次小型打击组成。每次攻击只会施加1次攻击特效。\n等级成长：攻击速度=20/30/40/50/60%；飓风箭阵的攻击力收益系数=110/115/120/125/130%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "万箭齐发",
        "description": "艾希射出一排共7/8/9/10/11支箭矢，每支箭矢造成60/95/130/165/200 + 1 × 额外攻击力物理伤害。敌方单位可以一次性格挡多支箭矢，但只会受到一次伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Volley.png",
        "cooldown": "18/14.5/11/7.5/4",
        "cost": "75/70/65/60/55",
        "range": "1200",
        "numericDetail": "技能文本：艾希射出一排共7/8/9/10/11支箭矢，每支箭矢造成60/95/130/165/200 + 1 × 额外攻击力物理伤害。敌方单位可以一次性格挡多支箭矢，但只会受到一次伤害。\n补充数值：由于冰霜射击的存在，在命中敌方英雄时会视为暴击。\n等级成长：已发射的箭矢数=7/8/9/10/11；伤害=60/95/130/165/200",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "鹰击长空",
        "description": "艾希派出一只鹰，在地图上的任一位置提供5秒的视野。它还会在飞行时显形附近的区域。 这个技能可持有2层充能（(技能冷却修正系数 × 90/80/70/60/50)秒充能时间）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AsheSpiritOfTheHawk.png",
        "cooldown": "5",
        "cost": "0",
        "range": "25000",
        "numericDetail": "技能文本：艾希派出一只鹰，在地图上的任一位置提供5秒的视野。它还会在飞行时显形附近的区域。 这个技能可持有2层充能（(技能冷却修正系数 × 90/80/70/60/50)秒充能时间）。\n等级成长：充能时间=90/80/70/60/50",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "魔法水晶箭",
        "description": "艾希射出魔法水晶箭，晕眩命中的第一个敌方英雄，并造成200/400/600 + 1.2 × 法术强度魔法伤害。晕眩时长取决于飞行距离，至多3.5秒。目标周围的敌人会受到冰霜射击的减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EnchantedCrystalArrow.png",
        "cooldown": "100/80/60",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：艾希射出魔法水晶箭，晕眩命中的第一个敌方英雄，并造成200/400/600 + 1.2 × 法术强度魔法伤害。晕眩时长取决于飞行距离，至多3.5秒。目标周围的敌人会受到冰霜射击的减速效果。\n补充数值：最小晕眩时长为1秒。\n等级成长：伤害=200/400/600",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60040",
    "key": "Janna",
    "name": "风暴之怒",
    "title": "迦娜",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Janna.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
    "tags": [
      "Support",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 570,
      "hpPerLevel": 90,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 360,
      "resourcePerLevel": 50,
      "resourceRegen": 11.5,
      "resourceRegenPerLevel": 0.4,
      "attackDamage": 47,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 3,
      "armor": 28,
      "armorPerLevel": 4.5,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "顺风而行",
        "description": "迦娜的友军在朝她移动时获得6%移动速度。 迦娜的普攻和和风守护会附带10额外魔法伤害 攻击特效。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/JannaP.png",
        "cooldown": null,
        "cost": null,
        "range": "1200",
        "numericDetail": "技能文本：迦娜的友军在朝她移动时获得6%移动速度。 迦娜的普攻和和风守护会附带10额外魔法伤害 攻击特效。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "飓风呼啸",
        "description": "迦娜召唤一道在3秒里持续聚集的飓风，随后沿路猛刮出去。飓风对目标造成55/90/125/160/195 + 0.5 × 法术强度 - 55/90/125/160/195 + 0.5 × 法术强度 + (3 × (10/15/20/25/30 + 0.1 × 法术强度))魔法伤害和0.5 - 0.5 + (3 × 0.25)秒击飞。移动距离、伤害和击飞时长都基于飓风聚集的时长。迦娜可以再次施放来提前将飓风刮出去。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HowlingGale.png",
        "cooldown": "14",
        "cost": "90/95/100/105/110",
        "range": "1075",
        "numericDetail": "技能文本：迦娜召唤一道在3秒里持续聚集的飓风，随后沿路猛刮出去。飓风对目标造成55/90/125/160/195 + 0.5 × 法术强度 - 55/90/125/160/195 + 0.5 × 法术强度 + (3 × (10/15/20/25/30 + 0.1 × 法术强度))魔法伤害和0.5 - 0.5 + (3 × 0.25)秒击飞。移动距离、伤害和击飞时长都基于飓风聚集的时长。迦娜可以再次施放来提前将飓风刮出去。\n补充数值：飓风每聚集1秒，就会造成额外的10/15/20/25/30 + 0.1 × 法术强度魔法伤害、额外0.25秒击飞和20%移动距离，并且飓风总会在1.25秒时到达它的终点。\n等级成长：伤害=55/90/125/160/195；每秒蓄力伤害=10/15/20/25/30",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "和风守护",
        "description": "被动：迦娜获得(0.06/0.07/0.08/0.09/0.1 + 0.0002 × 法术强度) × 100%移动速度并处在幽灵状态。 主动：迦娜的风灵打击一名敌人，对其造成持续2秒的((20/24/28/32/36 + 0.06 × 法术强度) × 0.01) × 100%减速和55/85/115/145/175 + 0.5 × 法术强度 + 10/15/20/25/30魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SowTheWind.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "50/55/60/65/70",
        "range": "550",
        "numericDetail": "技能文本：被动：迦娜获得(0.06/0.07/0.08/0.09/0.1 + 0.0002 × 法术强度) × 100%移动速度并处在幽灵状态。 主动：迦娜的风灵打击一名敌人，对其造成持续2秒的((20/24/28/32/36 + 0.06 × 法术强度) × 0.01) × 100%减速和55/85/115/145/175 + 0.5 × 法术强度 + 10/15/20/25/30魔法伤害。\n补充数值：幽灵状态的单位无视其它单位的碰撞体积。\n等级成长：伤害=55/85/115/145/175；减速=20/24/28/32/36%；被动移动速度=6/7/8/9/10%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "风暴之眼",
        "description": "迦娜为一个友军或防御塔提供持续4秒的80/120/160/200/240 + 0.55 × 法术强度护盾值。在护盾存在时，该友军目标获得10/15/20/25/30 + 0.1 × 法术强度攻击力。 迦娜在每次用一个技能使一名敌方英雄的移动速度受损时，会使这个冷却时间缩短20%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EyeOfTheStorm.png",
        "cooldown": "16/15/14/13/12",
        "cost": "70/75/80/85/90",
        "range": "800",
        "numericDetail": "技能文本：迦娜为一个友军或防御塔提供持续4秒的80/120/160/200/240 + 0.55 × 法术强度护盾值。在护盾存在时，该友军目标获得10/15/20/25/30 + 0.1 × 法术强度攻击力。 迦娜在每次用一个技能使一名敌方英雄的移动速度受损时，会使这个冷却时间缩短20%。\n等级成长：护盾值=80/120/160/200/240；攻击力=10/15/20/25/30",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "复苏季风",
        "description": "迦娜召唤一阵魔法季风，击退附近的敌人们然后在3秒里持续治疗附近的友军共(100/150/200 + 0.5 × 法术强度) × 3生命值。移动或使用技能都会提前结束这阵季风。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ReapTheWhirlwind.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "725",
        "numericDetail": "技能文本：迦娜召唤一阵魔法季风，击退附近的敌人们然后在3秒里持续治疗附近的友军共(100/150/200 + 0.5 × 法术强度) × 3生命值。移动或使用技能都会提前结束这阵季风。\n补充数值：击退无法将敌人推过墙体。\n等级成长：每秒治疗=100/150/200",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60067",
    "key": "Vayne",
    "name": "暗夜猎手",
    "title": "薇恩",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Vayne.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 550,
      "hpPerLevel": 103,
      "hpRegen": 3.5,
      "hpRegenPerLevel": 0.55,
      "resource": 232,
      "resourcePerLevel": 35,
      "resourceRegen": 7,
      "resourceRegenPerLevel": 0.4,
      "attackDamage": 60,
      "attackDamagePerLevel": 2.35,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 3.3,
      "armor": 23,
      "armorPerLevel": 4.6,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "暗夜猎手",
        "description": "薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得30移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Vayne_NightHunter.png",
        "cooldown": null,
        "cost": null,
        "range": "2000",
        "numericDetail": "技能文本：薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得30移动速度。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "闪避突袭",
        "description": "薇恩翻滚一小段距离，并且她的下次普通攻击造成额外的0.75/0.85/0.95/1.05/1.15 × 总攻击力 + 0.5 × 法术强度物理伤害。 这个技能会在造成伤害时触发技能特效。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneTumble.png",
        "cooldown": "6/5/4/3/2",
        "cost": "30",
        "range": "300",
        "numericDetail": "技能文本：薇恩翻滚一小段距离，并且她的下次普通攻击造成额外的0.75/0.85/0.95/1.05/1.15 × 总攻击力 + 0.5 × 法术强度物理伤害。 这个技能会在造成伤害时触发技能特效。\n等级成长：攻击力收益率=75/85/95/105/115%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "圣银弩箭",
        "description": "被动：对一名敌人的每第三次连续的攻击或技能造成额外的6/7/8/9/10%最大生命值的真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneSilveredBolts.png",
        "cooldown": "0",
        "cost": "0",
        "range": "750",
        "numericDetail": "技能文本：被动：对一名敌人的每第三次连续的攻击或技能造成额外的6/7/8/9/10%最大生命值的真实伤害。\n补充数值：最少造成50/65/80/95/110伤害。 对抗野怪时造成140/155/170/185/200伤害。\n等级成长：真实伤害百分比=6/7/8/9/10%；最小伤害=50/65/80/95/110；野怪伤害=140/155/170/185/200",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "恶魔审判",
        "description": "薇恩发射一根弩箭来击退一个目标并造成50/85/120/155/190 + 0.5 × 额外攻击力物理伤害。如果目标与地形产生碰撞，那么会受到(50/85/120/155/190 + 0.5 × 额外攻击力) × 1.5额外物理伤害，并且会被晕眩1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneCondemn.png",
        "cooldown": "20/18/16/14/12",
        "cost": "90",
        "range": "550",
        "numericDetail": "技能文本：薇恩发射一根弩箭来击退一个目标并造成50/85/120/155/190 + 0.5 × 额外攻击力物理伤害。如果目标与地形产生碰撞，那么会受到(50/85/120/155/190 + 0.5 × 额外攻击力) × 1.5额外物理伤害，并且会被晕眩1.5秒。\n等级成长：伤害=50/85/120/155/190",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "终极时刻",
        "description": "薇恩获得35/50/65攻击力，持续8/10/12秒，并且如果一个被薇恩所伤害的敌方英雄在3秒内死亡，那么持续时间会延长4秒。此外，在这段持续时间里：暗夜猎手会转而提供90移动速度。闪避突袭的冷却时间缩短30/40/50%，并提供持续1秒的隐形。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneInquisition.png",
        "cooldown": "100/85/70",
        "cost": "80",
        "range": "1",
        "numericDetail": "技能文本：薇恩获得35/50/65攻击力，持续8/10/12秒，并且如果一个被薇恩所伤害的敌方英雄在3秒内死亡，那么持续时间会延长4秒。此外，在这段持续时间里：暗夜猎手会转而提供90移动速度。闪避突袭的冷却时间缩短30/40/50%，并提供持续1秒的隐形。\n补充数值：隐形单位只会被【防御塔】或真实视野显形。 这个技能的持续时间无法被提升至超过它的最大持续时间。\n等级成长：持续时长=8/10/12；额外攻击力=35/50/65；闪避突袭冷却缩减=30/40/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60044",
    "key": "Taric",
    "name": "瓦洛兰之盾",
    "title": "塔里克",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Taric.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
    "tags": [
      "Support",
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 645,
      "hpPerLevel": 99,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.5,
      "resource": 300,
      "resourcePerLevel": 60,
      "resourceRegen": 8.5,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 55,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2,
      "armor": 40,
      "armorPerLevel": 4.3,
      "magicResist": 28,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 340,
      "attackRange": 150,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "正气凌人",
        "description": "在使用一次技能后，塔里克在5秒内的下2次攻击获得100%攻击速度，造成额外的(25–93（1–18级） × 1) + 0.15 × 护甲魔法伤害，并使他的基础技能的冷却时间缩短(1 + (1 + (技能冷却修正系数 × -1)))秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Taric_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在使用一次技能后，塔里克在5秒内的下2次攻击获得100%攻击速度，造成额外的(25–93（1–18级） × 1) + 0.15 × 护甲魔法伤害，并使他的基础技能的冷却时间缩短(1 + (1 + (技能冷却修正系数 × -1)))秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "星光之触",
        "description": "被动：每15秒和打出一次正气凌人攻击时获得一层效果(最多1/2/3/4/5层)。 主动：消耗所有层数来为附近的友方英雄们回复25 + 0.15 × 法术强度 + 0.01 × 最大生命值x层数的生命值(在1/2/3/4/5层时回复(25 + 0.15 × 法术强度 + 0.01 × 最大生命值) × 1/2/3/4/5生命值)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricQ.png",
        "cooldown": "3",
        "cost": "60",
        "range": "325",
        "numericDetail": "技能文本：被动：每15秒和打出一次正气凌人攻击时获得一层效果(最多1/2/3/4/5层)。 主动：消耗所有层数来为附近的友方英雄们回复25 + 0.15 × 法术强度 + 0.01 × 最大生命值x层数的生命值(在1/2/3/4/5层时回复(25 + 0.15 × 法术强度 + 0.01 × 最大生命值) × 1/2/3/4/5生命值)。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "坚毅壁垒",
        "description": "被动：塔里克获得0.06/0.07/0.08/0.09/0.1 × 护甲护甲并在他和被此技能绑定过的友方英雄之间形成一条灵链。只要他们在彼此附近，该友方英雄就会获得0.06/0.07/0.08/0.09/0.1 × 护甲护甲并且塔里克的各个技能也会从他自己和该友方英雄处施放。 主动：塔里克与一名友方英雄进行绑定，提供持续2.5秒的7/8/9/10/11%最大生命值的护盾值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricW.png",
        "cooldown": "15",
        "cost": "60",
        "range": "800",
        "numericDetail": "技能文本：被动：塔里克获得0.06/0.07/0.08/0.09/0.1 × 护甲护甲并在他和被此技能绑定过的友方英雄之间形成一条灵链。只要他们在彼此附近，该友方英雄就会获得0.06/0.07/0.08/0.09/0.1 × 护甲护甲并且塔里克的各个技能也会从他自己和该友方英雄处施放。 主动：塔里克与一名友方英雄进行绑定，提供持续2.5秒的7/8/9/10/11%最大生命值的护盾值。\n补充数值：模仿的技能效果不会叠加。 同一时间仅能绑定一名友方英雄。\n等级成长：被动护甲=6/7/8/9/10%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "炫光",
        "description": "塔里克投射一束星光，在1秒后爆裂，以造成90/130/170/210/250 + 0.5 × 法术强度 + 0.5 × 额外护甲魔法伤害并使敌人们晕眩1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricE.png",
        "cooldown": "16/15/14/13/12",
        "cost": "40",
        "range": "610",
        "numericDetail": "技能文本：塔里克投射一束星光，在1秒后爆裂，以造成90/130/170/210/250 + 0.5 × 法术强度 + 0.5 × 额外护甲魔法伤害并使敌人们晕眩1.5秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "宇宙之辉",
        "description": "塔里克召唤来自天堂的保护。在2.5秒后，附近的所有友方英雄都会免疫伤害2.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricR.png",
        "cooldown": "180/150/120",
        "cost": "100",
        "range": "400",
        "numericDetail": "技能文本：塔里克召唤来自天堂的保护。在2.5秒后，附近的所有友方英雄都会免疫伤害2.5秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60034",
    "key": "Anivia",
    "name": "冰晶凤凰",
    "title": "艾尼维亚",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Anivia.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
    "tags": [
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 550,
      "hpPerLevel": 92,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 495,
      "resourcePerLevel": 45,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 51,
      "attackDamagePerLevel": 3.2,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 1.68,
      "armor": 19,
      "armorPerLevel": 4.1,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 600,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "寒霜涅槃",
        "description": "艾尼维亚受到致命伤害后化身为凤凰蛋，回复满血并获得-40/-25/-10/5/20（英雄等级1/5/8/12/15）护甲和魔法抗性。如果她能存活6秒，则获得重生。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Anivia_P.png",
        "cooldown": "240秒",
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：艾尼维亚受到致命伤害后化身为凤凰蛋，回复满血并获得-40/-25/-10/5/20（英雄等级1/5/8/12/15）护甲和魔法抗性。如果她能存活6秒，则获得重生。\n被动冷却：240秒",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "寒冰闪耀",
        "description": "艾尼维亚发射出一个巨型冰块，造成50/70/90/110/130 + 0.25 × 法术强度魔法伤害并冰冻敌人3秒，使其减速20/30/40/50/60%。在到达距离终点时，冰块会爆炸，晕眩敌人1.1/1.2/1.3/1.4/1.5秒并造成60/95/130/165/200 + 0.45 × 法术强度魔法伤害。 艾尼维亚可以在冰块飞行途中再次施放这个技能来将其提前引爆。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FlashFrost.png",
        "cooldown": "11/10/9/8/7",
        "cost": "80/85/90/95/100",
        "range": "1075",
        "numericDetail": "技能文本：艾尼维亚发射出一个巨型冰块，造成50/70/90/110/130 + 0.25 × 法术强度魔法伤害并冰冻敌人3秒，使其减速20/30/40/50/60%。在到达距离终点时，冰块会爆炸，晕眩敌人1.1/1.2/1.3/1.4/1.5秒并造成60/95/130/165/200 + 0.45 × 法术强度魔法伤害。 艾尼维亚可以在冰块飞行途中再次施放这个技能来将其提前引爆。\n等级成长：伤害=50/70/90/110/130；爆炸伤害=60/95/130/165/200；晕眩时长：=1.1/1.2/1.3/1.4/1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "寒冰屏障",
        "description": "艾尼维亚召唤出一道宽400/500/600/700/800码的无法通过的冰墙。冰墙会在融化前持续5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Crystallize.png",
        "cooldown": "17",
        "cost": "70",
        "range": "1000",
        "numericDetail": "技能文本：艾尼维亚召唤出一道宽400/500/600/700/800码的无法通过的冰墙。冰墙会在融化前持续5秒。\n等级成长：宽度=400/500/600/700/800",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "霜寒刺骨",
        "description": "艾尼维亚用一阵刺骨的寒风冲击一名敌人，造成55/80/105/130/155 + 0.55 × 法术强度魔法伤害。如果目标身上带有冰冻效果，则艾尼维亚会转而造成(55/80/105/130/155 + 0.55 × 法术强度) × 2魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Frostbite.png",
        "cooldown": "4",
        "cost": "50",
        "range": "650",
        "numericDetail": "技能文本：艾尼维亚用一阵刺骨的寒风冲击一名敌人，造成55/80/105/130/155 + 0.55 × 法术强度魔法伤害。如果目标身上带有冰冻效果，则艾尼维亚会转而造成(55/80/105/130/155 + 0.55 × 法术强度) × 2魔法伤害。\n等级成长：伤害=55/80/105/130/155",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "冰川风暴",
        "description": "激活：艾尼维亚在目标区域召唤出一阵夹杂着冰与雹的强雨，来使敌人减速20/30/40%并每秒造成30/45/60 + 0.125 × 法术强度魔法伤害。风暴会在1.5秒里持续提升规模。 当风暴完全形成后，它会施加冰冻效果，使敌人减速30/45/60%，并且每秒造成(30/45/60 + 0.125 × 法术强度) × 3魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GlacialStorm.png",
        "cooldown": "4/3/2",
        "cost": "60",
        "range": "750",
        "numericDetail": "技能文本：激活：艾尼维亚在目标区域召唤出一阵夹杂着冰与雹的强雨，来使敌人减速20/30/40%并每秒造成30/45/60 + 0.125 × 法术强度魔法伤害。风暴会在1.5秒里持续提升规模。 当风暴完全形成后，它会施加冰冻效果，使敌人减速30/45/60%，并且每秒造成(30/45/60 + 0.125 × 法术强度) × 3魔法伤害。\n补充数值：如果艾尼维亚过于远离风暴，那么风暴会结束。\n等级成长：每秒伤害=30/45/60；减速=20/30/40%；冰冻减速数额=30/45/60%；每秒法力消耗=35/45/55",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60055",
    "key": "Katarina",
    "name": "不祥之刃",
    "title": "卡特琳娜",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Katarina.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resourceName": "无",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [
      "resource",
      "resourceRegen"
    ],
    "stats": {
      "hp": 672,
      "hpPerLevel": 108,
      "hpRegen": 7.5,
      "hpRegenPerLevel": 0.7,
      "resource": 0,
      "resourcePerLevel": 0,
      "resourceRegen": 0,
      "resourceRegenPerLevel": 0,
      "attackDamage": 58,
      "attackDamagePerLevel": 3.2,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 2.74,
      "armor": 32,
      "armorPerLevel": 4.7,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "贪婪",
        "description": "每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会减少15秒。 如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人来造成68/72/77/82/89/96/103/112/121/131/142/154/166/180/194/208/224/240（英雄等级1–18） + 0.6 × 额外攻击力 + 0.7/0.8/0.9/1（英雄等级1/6/11/16） × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Katarina_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "340",
        "numericDetail": "技能文本：每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会减少15秒。 如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人来造成68/72/77/82/89/96/103/112/121/131/142/154/166/180/194/208/224/240（英雄等级1–18） + 0.6 × 额外攻击力 + 0.7/0.8/0.9/1（英雄等级1/6/11/16） × 法术强度魔法伤害。\n补充数值：每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会减少15秒。 如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人来造成68/72/77/82/89/96/103/112/121/131/142/154/166/180/194/208/224/240（英雄等级1–18） + 0.6 × 额外攻击力 + 0.7/0.8/0.9/1（英雄等级1/6/11/16） × 法术强度魔法伤害。 匕首的斩击会对英雄们施加攻击特效。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "弹射之刃",
        "description": "卡特琳娜投掷一把匕首，造成80/115/150/185/220 + 0.4 × 法术强度魔法伤害给目标及附近的2个敌人。匕首随后会弹落到主要目标身后的地面上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaQ.png",
        "cooldown": "11/10/9/8/7",
        "cost": "0",
        "range": "625",
        "numericDetail": "技能文本：卡特琳娜投掷一把匕首，造成80/115/150/185/220 + 0.4 × 法术强度魔法伤害给目标及附近的2个敌人。匕首随后会弹落到主要目标身后的地面上。\n等级成长：基础伤害=80/115/150/185/220",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "伺机待发",
        "description": "卡特琳娜扔出一把匕首至空中并获得在1.25秒里持续衰减的50/60/70/80/90%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "0",
        "range": "25000",
        "numericDetail": "技能文本：卡特琳娜扔出一把匕首至空中并获得在1.25秒里持续衰减的50/60/70/80/90%移动速度。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "瞬步",
        "description": "卡特琳娜在眨眼间闪烁到目标友军、敌人、或匕首处。如果目标是敌人，那么卡特琳娜会造成20/30/40/50/60 + 0.25 × 法术强度 + 0.4 × 攻击力魔法伤害——如果是其它情况，那么她会对范围内距她最近的敌人造成伤害。 拾取一把匕首将使这个技能的冷却时间缩短(0.78/0.84/0.9/0.96（英雄等级1/6/11/16）) × (技能冷却修正系数 × 12/11/10/9/8)秒(78/84/90/96%（英雄等级1/6/11/16）)。卡特琳娜可以闪烁到目标附近的任一位置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaEWrapper.png",
        "cooldown": "12/11/10/9/8",
        "cost": "0",
        "range": "725",
        "numericDetail": "技能文本：卡特琳娜在眨眼间闪烁到目标友军、敌人、或匕首处。如果目标是敌人，那么卡特琳娜会造成20/30/40/50/60 + 0.25 × 法术强度 + 0.4 × 攻击力魔法伤害——如果是其它情况，那么她会对范围内距她最近的敌人造成伤害。 拾取一把匕首将使这个技能的冷却时间缩短(0.78/0.84/0.9/0.96（英雄等级1/6/11/16）) × (技能冷却修正系数 × 12/11/10/9/8)秒(78/84/90/96%（英雄等级1/6/11/16）)。卡特琳娜可以闪烁到目标附近的任一位置。\n补充数值：这次打击会施加攻击特效。\n等级成长：伤害=20/30/40/50/60",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "死亡莲华",
        "description": "卡特琳娜化身为一道剑刃飓风，快速用一连串匕首攻击相距最近的3名敌方英雄。每把匕首造成25/37.5/50 + 0.19 × 法术强度魔法伤害和(0.16 × (1 + 3.125 × 额外攻击速度)) × 额外攻击力物理伤害，并施加持续3秒的40%重伤效果。 在2.5秒里持续对每个敌方英雄造成的总伤害：(25/37.5/50 + 0.19 × 法术强度) × (6 × 2.5)魔法伤害和((0.16 × (1 + 3.125 × 额外攻击速度)) × 额外攻击力) × (6 × 2.5)物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaR.png",
        "cooldown": "75/60/45",
        "cost": "0",
        "range": "550",
        "numericDetail": "技能文本：卡特琳娜化身为一道剑刃飓风，快速用一连串匕首攻击相距最近的3名敌方英雄。每把匕首造成25/37.5/50 + 0.19 × 法术强度魔法伤害和(0.16 × (1 + 3.125 × 额外攻击速度)) × 额外攻击力物理伤害，并施加持续3秒的40%重伤效果。 在2.5秒里持续对每个敌方英雄造成的总伤害：(25/37.5/50 + 0.19 × 法术强度) × (6 × 2.5)魔法伤害和((0.16 × (1 + 3.125 × 额外攻击速度)) × 额外攻击力) × (6 × 2.5)物理伤害。\n补充数值：这个技能施加25/30/35%伤害的攻击特效和攻击附伤，并且不会暴击或施加任何生命偷取。 这个技能的物理伤害可通过攻击速度来额外提升。\n等级成长：每把匕首的伤害=25/37.5/50；攻击特效伤害修正=25/30/35%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60074",
    "key": "Heimerdinger",
    "name": "大发明家",
    "title": "黑默丁格",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Heimerdinger.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
    "tags": [
      "Mage",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 558,
      "hpPerLevel": 105,
      "hpRegen": 7,
      "hpRegenPerLevel": 0.55,
      "resource": 385,
      "resourcePerLevel": 20,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 56,
      "attackDamagePerLevel": 2.7,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 1.36,
      "armor": 19,
      "armorPerLevel": 4.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 340,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "海克斯科技亲和",
        "description": "黑默丁格在他的炮台和友方防御塔附近时会获得20%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Heimerdinger_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：黑默丁格在他的炮台和友方防御塔附近时会获得20%移动速度。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "H-28 G 进化炮台",
        "description": "黑默丁格构建一座炮台来攻击附近的敌人们。黑默丁格同一时间可以拥有3座已激活的炮台。炮台会缓慢地积攒能量。在满层能量时，它们会发射一次更强的攻击。 如果黑默丁格过于远离，那么炮台将在8秒后解除激活状态。 这个技能拥有3层充能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerQ.png",
        "cooldown": "1",
        "cost": "20",
        "range": "350",
        "numericDetail": "技能文本：黑默丁格构建一座炮台来攻击附近的敌人们。黑默丁格同一时间可以拥有3座已激活的炮台。炮台会缓慢地积攒能量。在满层能量时，它们会发射一次更强的攻击。 如果黑默丁格过于远离，那么炮台将在8秒后解除激活状态。 这个技能拥有3层充能。\n补充数值：炮台会优先攻击黑默丁格近期造成过伤害的敌人们和正在攻击黑默丁格的敌人们。 炮台属性： (130–640（1–18级） + 0.05/0.055/0.06/0.065/0.07/0.075/0.08/0.085/0.09/0.13/0.17/0.21/0.25/0.29/0.33/0.37/0.41/0.45（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） × 法术强度) × 1生命值 每次常规射击7/11/15/19/23 + 0.35 × 法术强度魔法伤害 每次满能量射击40/60/80/100/120 + 0.55 × 法术强度魔法伤害\n等级成长：加农炮伤害=7/11/15/19/23；光束伤害=40/60/80/100/120",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "海克斯科技微型导弹",
        "description": "黑默丁格释放一道5颗导弹组成的弹幕，对第一个命中的敌人造成50/75/100/125/150 + 0.55 × 法术强度魔法伤害。额外的导弹命中会造成较少伤害。 最大伤害值：90/135/180/225/270 + 1.03 × 法术强度魔法伤害。 每有一颗导弹命中英雄，附近的炮台就会获得20%能量。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerW.png",
        "cooldown": "11/10/9/8/7",
        "cost": "50/60/70/80/90",
        "range": "1325",
        "numericDetail": "技能文本：黑默丁格释放一道5颗导弹组成的弹幕，对第一个命中的敌人造成50/75/100/125/150 + 0.55 × 法术强度魔法伤害。额外的导弹命中会造成较少伤害。 最大伤害值：90/135/180/225/270 + 1.03 × 法术强度魔法伤害。 每有一颗导弹命中英雄，附近的炮台就会获得20%能量。\n补充数值：第一颗之后的导弹会对敌人造成10/15/20/25/30 + 0.12 × 法术强度魔法伤害。第一颗之后的导弹会对小兵转而造成(10/15/20/25/30 + 0.12 × 法术强度) × 3魔法伤害。\n等级成长：伤害=50/75/100/125/150",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "CH-2电子风暴手雷",
        "description": "黑默丁格扔出一颗手雷，在一个区域内造成60/100/140/180/220 + 0.6 × 法术强度魔法伤害和持续2秒的35%减速。区域中心的敌人们还会被晕眩1.5秒。 命中一名英雄将使附近的炮台得到完全充能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerE.png",
        "cooldown": "11",
        "cost": "85",
        "range": "970",
        "numericDetail": "技能文本：黑默丁格扔出一颗手雷，在一个区域内造成60/100/140/180/220 + 0.6 × 法术强度魔法伤害和持续2秒的35%减速。区域中心的敌人们还会被晕眩1.5秒。 命中一名英雄将使附近的炮台得到完全充能。\n等级成长：伤害=60/100/140/180/220",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "升级！！！",
        "description": "黑默丁格使他的下一个非终极技能变为升级版。 H-28Q尖端炮台：放置一个持续8秒的升级版炮台且不算入黑默丁格的最大炮台上限，每次射击造成80/100/120 + 0.35 × 法术强度魔法伤害且每次满能量射击造成100/140/180 + 0.7 × 法术强度魔法伤害。它的攻击会在一个范围内造成伤害，持续2秒的25%减速并且免疫控制效果。 海克斯导弹集群：发射4波导弹，每波造成135/180/225 + 0.45 × 法术强度魔法伤害。被额外的导弹命中的英雄和野怪会受到较少伤害，小兵会受到提升过的伤害。最大伤害值：503/697.5/892 + 1.83 × 法术强度魔法伤害。 CH-3X闪电手雷：扔出一颗弹跳手雷，该手雷会放电3次，造成100/200/300 + 0.6 × 法术强度魔法伤害。晕眩和减速区域会更大。 再次施放：取消这个技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerR.png",
        "cooldown": "100/85/70",
        "cost": "100",
        "range": "1",
        "numericDetail": "技能文本：黑默丁格使他的下一个非终极技能变为升级版。 H-28Q尖端炮台：放置一个持续8秒的升级版炮台且不算入黑默丁格的最大炮台上限，每次射击造成80/100/120 + 0.35 × 法术强度魔法伤害且每次满能量射击造成100/140/180 + 0.7 × 法术强度魔法伤害。它的攻击会在一个范围内造成伤害，持续2秒的25%减速并且免疫控制效果。 海克斯导弹集群：发射4波导弹，每波造成135/180/225 + 0.45 × 法术强度魔法伤害。被额外的导弹命中的英雄和野怪会受到较少伤害，小兵会受到提升过的伤害。最大伤害值：503/697.5/892 + 1.83 × 法术强度魔法伤害。 CH-3X闪电手雷：扔出一颗弹跳手雷，该手雷会放电3次，造成100/200/300 + 0.6 × 法术强度魔法伤害。晕眩和减速区域会更大。 再次施放：取消这个技能。\n补充数值：升级版技能没有消耗。 升级版导弹对小兵造成2000%伤害。 尖端炮台属性： 725/750/775/800/825/875/925/975/1025/1075/1225/1375/1525（英雄等级1/7/8/9/10/11/12/13/14/15/16/17/18） + 0.5 × 法术强度生命值 30/35/40/45/50/55/60/65/70/75/80/85/90（英雄等级1/7/8/9/10/11/12/13/14/15/16/17/18）护甲 30/35/40/45/50/55/60/65/70/75/80/85/90（英雄等级1/7/8/9/10/11/12/13/14/15/16/17/18）魔法抗性 每次常规射击80/100/120 + 0.35 × 法术强度魔法伤害 每次满能量射击100/140/180 + 0.7 × 法术强度魔法伤害\n等级成长：尖端炮台加农炮伤害=80/100/120；炮台光束伤害=100/140/180；导弹群集伤害=135/180/225；导弹群集最大伤害=503/697.5/892；闪电手雷伤害=100/200/300",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60059",
    "key": "JarvanIV",
    "name": "德玛西亚皇子",
    "title": "嘉文四世",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/JarvanIV.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 640,
      "hpPerLevel": 104,
      "hpRegen": 8,
      "hpRegenPerLevel": 0.7,
      "resource": 300,
      "resourcePerLevel": 55,
      "resourceRegen": 6.5,
      "resourceRegenPerLevel": 0.45,
      "attackDamage": 64,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 2.5,
      "armor": 36,
      "armorPerLevel": 4.6,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 340,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "战争律动",
        "description": "嘉文的攻击造成额外的8%当前生命值的物理伤害。这个效果对每个单位有6/5/4/3（英雄等级1/6/11/16）秒冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/JarvanIVP.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：嘉文的攻击造成额外的8%当前生命值的物理伤害。这个效果对每个单位有6/5/4/3（英雄等级1/6/11/16）秒冷却时间。\n补充数值：嘉文的攻击造成额外的8%当前生命值的物理伤害。这个效果对每个单位有6/5/4/3（英雄等级1/6/11/16）秒冷却时间。 对非英雄单位的最小伤害为20，最大伤害为400。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "巨龙撞击",
        "description": "嘉文延伸他的长枪，造成90/130/170/210/250 + 1.45 × 额外攻击力物理伤害并移除10/14/18/22/26%护甲，持续3秒。 如果长枪与德邦军旗连接，那么嘉文会将自己拉向它，将沿途的敌人击飞0.75秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVDragonStrike.png",
        "cooldown": "10/9/8/7/6",
        "cost": "45/50/55/60/65",
        "range": "770",
        "numericDetail": "技能文本：嘉文延伸他的长枪，造成90/130/170/210/250 + 1.45 × 额外攻击力物理伤害并移除10/14/18/22/26%护甲，持续3秒。 如果长枪与德邦军旗连接，那么嘉文会将自己拉向它，将沿途的敌人击飞0.75秒。\n补充数值：嘉文即使在被定身时也可以将自己拉向军旗。\n等级成长：伤害=90/130/170/210/250；护甲削减=10/14/18/22/26%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "黄金圣盾",
        "description": "嘉文召唤一个圣盾，对附近的敌人造成持续2秒的15/20/25/30/35%减速并为他提供60/80/100/120/140 + 0.7 × 额外攻击力护盾值，每命中一个敌方英雄会提升0.013 × 最大生命值护盾值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVGoldenAegis.png",
        "cooldown": "9",
        "cost": "30",
        "range": "625",
        "numericDetail": "技能文本：嘉文召唤一个圣盾，对附近的敌人造成持续2秒的15/20/25/30/35%减速并为他提供60/80/100/120/140 + 0.7 × 额外攻击力护盾值，每命中一个敌方英雄会提升0.013 × 最大生命值护盾值。\n等级成长：减速=15/20/25/30/35%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "德邦军旗",
        "description": "被动：嘉文获得20/22.5/25/27.5/30%攻击速度。 主动：嘉文将一面军旗投掷到地上，造成80/120/160/200/240 + 0.8 × 法术强度魔法伤害并为附近的友军们提供持续8秒的20/22.5/25/27.5/30%攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVDemacianStandard.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "55",
        "range": "860",
        "numericDetail": "技能文本：被动：嘉文获得20/22.5/25/27.5/30%攻击速度。 主动：嘉文将一面军旗投掷到地上，造成80/120/160/200/240 + 0.8 × 法术强度魔法伤害并为附近的友军们提供持续8秒的20/22.5/25/27.5/30%攻击速度。\n等级成长：被动攻击速度=20/22.5/25/27.5/30%；主动攻击速度=20/22.5/25/27.5/30%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "天崩地裂",
        "description": "嘉文勇猛地跃向一名敌方英雄，对目标及周围的敌人造成200/325/450 + 1.8 × 额外攻击力物理伤害，并在目标周围生成一个由不可通过地形构成的竞技场，持续3.5秒。 嘉文可以再次施放来使该地形倒塌。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVCataclysm.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "650",
        "numericDetail": "技能文本：嘉文勇猛地跃向一名敌方英雄，对目标及周围的敌人造成200/325/450 + 1.8 × 额外攻击力物理伤害，并在目标周围生成一个由不可通过地形构成的竞技场，持续3.5秒。 嘉文可以再次施放来使该地形倒塌。\n等级成长：伤害=200/325/450",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60086",
    "key": "Garen",
    "name": "德玛西亚之力",
    "title": "盖伦",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Garen.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resourceName": "无",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [
      "resource",
      "resourceRegen"
    ],
    "stats": {
      "hp": 690,
      "hpPerLevel": 98,
      "hpRegen": 8,
      "hpRegenPerLevel": 0.5,
      "resource": 0,
      "resourcePerLevel": 0,
      "resourceRegen": 0,
      "resourceRegenPerLevel": 0,
      "attackDamage": 69,
      "attackDamagePerLevel": 4.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 3.65,
      "armor": 38,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 1.55,
      "moveSpeed": 340,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "坚韧",
        "description": "盖伦每5秒回复1.5/1.7/1.9/2.1/2.3/2.5/3.3/4.1/4.9/5.7/6.5/7.3/8.1/8.5/8.9/9.3/9.7/10.1%（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）最大生命值，前提是他在之前的8秒内未受到伤害或被敌方技能命中。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Garen_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：盖伦每5秒回复1.5/1.7/1.9/2.1/2.3/2.5/3.3/4.1/4.9/5.7/6.5/7.3/8.1/8.5/8.9/9.3/9.7/10.1%（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）最大生命值，前提是他在之前的8秒内未受到伤害或被敌方技能命中。\n补充数值：盖伦每5秒回复1.5/1.7/1.9/2.1/2.3/2.5/3.3/4.1/4.9/5.7/6.5/7.3/8.1/8.5/8.9/9.3/9.7/10.1%（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）最大生命值，前提是他在之前的8秒内未受到伤害或被敌方技能命中。 小兵和非史诗级野怪的伤害不会中断这个回复。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "致命打击",
        "description": "盖伦移除身上的所有减速效果并获得35%移动速度，持续1.4/1.95/2.5/3.05/3.6秒。 他的下次攻击会使目标沉默1.5秒并造成30/60/90/120/150 + 1.5 × 攻击力物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenQ.png",
        "cooldown": "8",
        "cost": "0",
        "range": "300",
        "numericDetail": "技能文本：盖伦移除身上的所有减速效果并获得35%移动速度，持续1.4/1.95/2.5/3.05/3.6秒。 他的下次攻击会使目标沉默1.5秒并造成30/60/90/120/150 + 1.5 × 攻击力物理伤害。\n补充数值：强化攻击会在4.5秒后消散。 这个技能会在造成伤害时触发技能特效。\n等级成长：伤害=30/60/90/120/150；移动速度时长=1.4/1.95/2.5/3.05/3.6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "勇气",
        "description": "被动：盖伦获得0.2 × 状态层数额外护甲和0.2 × 状态层数额外魔法抗性。击杀单位时会永久提供0.2双抗，至多至最大值30。 主动：盖伦加固他的勇气4秒，使即将到来的伤害降低25/29/33/37/41%。他还会获得持续0.75秒的65/85/105/125/145 + 0.18 × 额外最大生命值护盾值和60%韧性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenW.png",
        "cooldown": "22/19.5/17/14.5/12",
        "cost": "0",
        "range": "0",
        "numericDetail": "技能文本：被动：盖伦获得0.2 × 状态层数额外护甲和0.2 × 状态层数额外魔法抗性。击杀单位时会永久提供0.2双抗，至多至最大值30。 主动：盖伦加固他的勇气4秒，使即将到来的伤害降低25/29/33/37/41%。他还会获得持续0.75秒的65/85/105/125/145 + 0.18 × 额外最大生命值护盾值和60%韧性。\n等级成长：护盾值=65/85/105/125/145；伤害减免=25/29/33/37/41%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "审判",
        "description": "盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenE.png",
        "cooldown": "9/8.25/7.5/6.75/6",
        "cost": "0",
        "range": "325",
        "numericDetail": "技能文本：盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。\n补充数值：来自装备和等级的每25%攻击速度获得额外的一圈旋转。 能够暴击以造成(4/7/10/13/16 + 0.4/0.43/0.46/0.49/0.52 × 攻击力) × (1 + (0.3 × (1 × 暴击伤害 - 1)))物理伤害。\n等级成长：每圈旋转的基础伤害=4/7/10/13/16；每一圈的攻击力收益=40/43/46/49/52%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "德玛西亚正义",
        "description": "盖伦召唤德玛西亚之力来击杀他的敌人，造成125/200/275外加25/30/35%已损失生命值的真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenR.png",
        "cooldown": "120/100/80",
        "cost": "0",
        "range": "400",
        "numericDetail": "技能文本：盖伦召唤德玛西亚之力来击杀他的敌人，造成125/200/275外加25/30/35%已损失生命值的真实伤害。\n等级成长：伤害=125/200/275；百分比已损失生命值伤害=25/30/35%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60025",
    "key": "Morgana",
    "name": "堕落天使",
    "title": "莫甘娜",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Morgana.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
    "tags": [
      "Support",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 630,
      "hpPerLevel": 104,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.4,
      "resource": 340,
      "resourcePerLevel": 60,
      "resourceRegen": 11,
      "resourceRegenPerLevel": 0.4,
      "attackDamage": 56,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 1.53,
      "armor": 25,
      "armorPerLevel": 4.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 450,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "灵魂吸取",
        "description": "莫甘娜的技能会治疗自身，数额相当于这些技能对英雄、大型小兵、中型野怪和大型野怪造成的实际伤害的18%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/FallenAngel_Empathize.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：莫甘娜的技能会治疗自身，数额相当于这些技能对英雄、大型小兵、中型野怪和大型野怪造成的实际伤害的18%。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "暗之禁锢",
        "description": "莫甘娜掷出一团星火来禁锢命中的第一个敌人2/2.25/2.5/2.75/3秒，并造成80/135/190/245/300 + 0.9 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaQ.png",
        "cooldown": "10",
        "cost": "50/55/60/65/70",
        "range": "1250",
        "numericDetail": "技能文本：莫甘娜掷出一团星火来禁锢命中的第一个敌人2/2.25/2.5/2.75/3秒，并造成80/135/190/245/300 + 0.9 × 法术强度魔法伤害。\n等级成长：伤害=80/135/190/245/300；禁锢时长=2/2.25/2.5/2.75/3",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "折磨之影",
        "description": "莫甘娜点燃一个区域5秒，每秒对区域内的敌人造成18/31/44/57/70 + 0.2 × 法术强度魔法伤害，基于目标的已损失生命值，伤害可最多提升(18/31/44/57/70 + 0.2 × 法术强度) × (1 + 1)。 每当莫甘娜被灵魂吸取治疗时，这个技能的冷却时间就会减少5%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaW.png",
        "cooldown": "12",
        "cost": "70/80/90/100/110",
        "range": "900",
        "numericDetail": "技能文本：莫甘娜点燃一个区域5秒，每秒对区域内的敌人造成18/31/44/57/70 + 0.2 × 法术强度魔法伤害，基于目标的已损失生命值，伤害可最多提升(18/31/44/57/70 + 0.2 × 法术强度) × (1 + 1)。 每当莫甘娜被灵魂吸取治疗时，这个技能的冷却时间就会减少5%。\n补充数值：这个技能对野怪造成170%伤害。\n等级成长：每秒伤害=18/31/44/57/70",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "黑暗之盾",
        "description": "莫甘娜为一名友方英雄提供100/155/210/265/320 + 0.7 × 法术强度魔法护盾，持续5秒。护盾会阻挡限制和定身效果，直至被打破为止。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaE.png",
        "cooldown": "26/23.5/21/18.5/16",
        "cost": "80",
        "range": "800",
        "numericDetail": "技能文本：莫甘娜为一名友方英雄提供100/155/210/265/320 + 0.7 × 法术强度魔法护盾，持续5秒。护盾会阻挡限制和定身效果，直至被打破为止。\n等级成长：护盾值=100/155/210/265/320",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "灵魂镣铐",
        "description": "莫甘娜将她自己与附近的敌方英雄用锁链铐在一起，造成200/275/350 + 0.8 × 法术强度魔法伤害和20%减速效果。在3秒后，仍未挣断锁链的敌人会受到200/275/350 + 0.8 × 法术强度魔法伤害并被晕眩1.5/1.75/2秒。 在施放这个技能时，莫甘娜会获得20/40/60%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaR.png",
        "cooldown": "120/110/100",
        "cost": "100",
        "range": "625",
        "numericDetail": "技能文本：莫甘娜将她自己与附近的敌方英雄用锁链铐在一起，造成200/275/350 + 0.8 × 法术强度魔法伤害和20%减速效果。在3秒后，仍未挣断锁链的敌人会受到200/275/350 + 0.8 × 法术强度魔法伤害并被晕眩1.5/1.75/2秒。 在施放这个技能时，莫甘娜会获得20/40/60%移动速度。\n补充数值：莫甘娜会获得所有受到这个技能影响的敌人们的真实视野。\n等级成长：伤害=200/275/350；移动速度=20/40/60%；晕眩时长：=1.5/1.75/2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60035",
    "key": "Shaco",
    "name": "恶魔小丑",
    "title": "萨科",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Shaco.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
    "tags": [
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 630,
      "hpPerLevel": 99,
      "hpRegen": 8.5,
      "hpRegenPerLevel": 0.55,
      "resource": 297,
      "resourcePerLevel": 40,
      "resourceRegen": 6,
      "resourceRegenPerLevel": 0.35,
      "attackDamage": 63,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.694,
      "attackSpeedPerLevel": 3,
      "armor": 30,
      "armorPerLevel": 4,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "背刺",
        "description": "在命中一名没有面朝萨科的敌人时：萨科的攻击造成额外的20–35（1–18级） + 0.2 × 额外攻击力物理伤害且这个伤害可以暴击。并且双面毒刃造成额外的15–50（1–18级） + 0.1 × 法术强度魔法伤害，并会在目标低于30%生命值时提升至(15–50（1–18级） + 0.1 × 法术强度) × 1.5魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Jester_CarefulStrikes.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在命中一名没有面朝萨科的敌人时：萨科的攻击造成额外的20–35（1–18级） + 0.2 × 额外攻击力物理伤害且这个伤害可以暴击。并且双面毒刃造成额外的15–50（1–18级） + 0.1 × 法术强度魔法伤害，并会在目标低于30%生命值时提升至(15–50（1–18级） + 0.1 × 法术强度) × 1.5魔法伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "欺诈魔术",
        "description": "萨科传送并变为隐形，持续2.5/2.75/3/3.25/3.5秒。使用惊吓魔盒或幻像不会打破隐形。 萨科在隐形时的下次攻击造成额外的25/35/45/55/65 + 0.6 × 额外攻击力物理伤害。如果从背后进行打击，那么这个攻击会暴击，造成((1 + (0.6 × (1 × 暴击伤害 - 1)))) × 100%伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Deceive.png",
        "cooldown": "13/12.5/12/11.5/11",
        "cost": "40",
        "range": "400",
        "numericDetail": "技能文本：萨科传送并变为隐形，持续2.5/2.75/3/3.25/3.5秒。使用惊吓魔盒或幻像不会打破隐形。 萨科在隐形时的下次攻击造成额外的25/35/45/55/65 + 0.6 × 额外攻击力物理伤害。如果从背后进行打击，那么这个攻击会暴击，造成((1 + (0.6 × (1 × 暴击伤害 - 1)))) × 100%伤害。\n补充数值：攻击附带的额外伤害可以暴击。 隐形单位只会被【防御塔】或真实视野显形。\n等级成长：伤害=25/35/45/55/65；潜行时长=2.5/2.75/3/3.25/3.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "惊吓魔盒",
        "description": "萨科生成一个会在2秒后潜行的陷阱，它持续40 + 0.1 × 法术强度秒。它会在有敌人靠近或显形时触发，恐惧附近的敌方英雄们0.5/0.75/1/1.25/1.5秒，或小兵和野怪2秒。 一旦激活，陷阱就会在5秒里持续攻击所有附近的敌人们，造成10/15/20/25/30 + 0.12 × 法术强度魔法伤害，如果只攻击一个敌人则为25/40/55/70/85 + 0.18 × 法术强度伤害。 惊吓魔盒的攻击对野怪造成额外的20/35/50/65/80伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JackInTheBox.png",
        "cooldown": "15",
        "cost": "70/65/60/55/50",
        "range": "500",
        "numericDetail": "技能文本：萨科生成一个会在2秒后潜行的陷阱，它持续40 + 0.1 × 法术强度秒。它会在有敌人靠近或显形时触发，恐惧附近的敌方英雄们0.5/0.75/1/1.25/1.5秒，或小兵和野怪2秒。 一旦激活，陷阱就会在5秒里持续攻击所有附近的敌人们，造成10/15/20/25/30 + 0.12 × 法术强度魔法伤害，如果只攻击一个敌人则为25/40/55/70/85 + 0.18 × 法术强度伤害。 惊吓魔盒的攻击对野怪造成额外的20/35/50/65/80伤害。\n等级成长：伤害=25/40/55/70/85；恐惧时长=0.5/0.75/1/1.25/1.5；额外野怪伤害=20/35/50/65/80",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "双面毒刃",
        "description": "被动：当这个技能未进入冷却阶段时，萨科的攻击会对目标造成持续2秒的20/22.5/25/27.5/30%减速。 主动：萨科扔出一把毒刃，造成70/95/120/145/170 + 0.8 × 额外攻击力 + 0.6 × 法术强度魔法伤害和持续3秒的20/22.5/25/27.5/30%减速。如果目标低于30%生命值，毒刃会转而造成(70/95/120/145/170 + 0.8 × 额外攻击力 + 0.6 × 法术强度) × 1.5伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwoShivPoison.png",
        "cooldown": "8",
        "cost": "75",
        "range": "625",
        "numericDetail": "技能文本：被动：当这个技能未进入冷却阶段时，萨科的攻击会对目标造成持续2秒的20/22.5/25/27.5/30%减速。 主动：萨科扔出一把毒刃，造成70/95/120/145/170 + 0.8 × 额外攻击力 + 0.6 × 法术强度魔法伤害和持续3秒的20/22.5/25/27.5/30%减速。如果目标低于30%生命值，毒刃会转而造成(70/95/120/145/170 + 0.8 × 额外攻击力 + 0.6 × 法术强度) × 1.5伤害。\n等级成长：伤害=70/95/120/145/170；减速=20/22.5/25/27.5/30%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "幻像",
        "description": "萨科暂时消失，然后重新出现并制造一个持续18秒的幻像，幻像会在死亡时爆炸，对附近的敌人造成150/225/300 + 0.7 × 法术强度魔法伤害并生成三个立即触发的小型惊吓魔盒。幻像造成萨科60%的伤害并承受50%额外伤害。 小型惊吓魔盒造成10/20/30 + 0.1 × 法术强度魔法伤害，如果只攻击一个敌人则为25/50/75 + 0.15 × 法术强度魔法伤害，并让敌人恐惧1秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HallucinateFull.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "200",
        "numericDetail": "技能文本：萨科暂时消失，然后重新出现并制造一个持续18秒的幻像，幻像会在死亡时爆炸，对附近的敌人造成150/225/300 + 0.7 × 法术强度魔法伤害并生成三个立即触发的小型惊吓魔盒。幻像造成萨科60%的伤害并承受50%额外伤害。 小型惊吓魔盒造成10/20/30 + 0.1 × 法术强度魔法伤害，如果只攻击一个敌人则为25/50/75 + 0.15 × 法术强度魔法伤害，并让敌人恐惧1秒。\n补充数值：可以通过按住alt键的同时使用鼠标右键或再次施放此技能来控制幻像。\n等级成长：死亡时伤害=150/225/300；小型魔盒伤害=25/50/75",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60063",
    "key": "Brand",
    "name": "复仇焰魂",
    "title": "布兰德",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Brand.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
    "tags": [
      "Mage",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 570,
      "hpPerLevel": 105,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 469,
      "resourcePerLevel": 21,
      "resourceRegen": 11,
      "resourceRegenPerLevel": 0.6,
      "attackDamage": 57,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.681,
      "attackSpeedPerLevel": 2,
      "armor": 24,
      "armorPerLevel": 4.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 340,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "炽热之焰",
        "description": "布兰德的技能会给目标施加烈焰焚身，在4秒里持续造成共2%最大生命值的魔法伤害。如果布兰德击杀了一个烈焰焚身的敌人，他会回复20/23.33/26.66/29.99/33.32/36.653/39.983（英雄等级1/3/6/9/12/15/18）法力。炽热之焰可以至多叠加3次。 当一个英雄或大型野怪达到3层时，炽热之焰就会在2秒后爆炸，对周围的敌人们造成((6–12（1–18级） + 0.02 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/BrandP.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：布兰德的技能会给目标施加烈焰焚身，在4秒里持续造成共2%最大生命值的魔法伤害。如果布兰德击杀了一个烈焰焚身的敌人，他会回复20/23.33/26.66/29.99/33.32/36.653/39.983（英雄等级1/3/6/9/12/15/18）法力。炽热之焰可以至多叠加3次。 当一个英雄或大型野怪达到3层时，炽热之焰就会在2秒后爆炸，对周围的敌人们造成((6–12（1–18级） + 0.02 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。\n补充数值：布兰德的技能会给目标施加烈焰焚身，在4秒里持续造成共2%最大生命值的魔法伤害。如果布兰德击杀了一个烈焰焚身的敌人，他会回复20/23.33/26.66/29.99/33.32/36.653/39.983（英雄等级1/3/6/9/12/15/18）法力。炽热之焰可以至多叠加3次。 当一个英雄或大型野怪达到3层时，炽热之焰就会在2秒后爆炸，对周围的敌人们造成((6–12（1–18级） + 0.02 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。 这个技能对野怪造成额外伤害，至多至每秒50伤害，对史诗级野怪提升至80。 由第三层烈焰焚身引发的爆炸对野怪的伤害封顶值为270/355/440/525（英雄等级1/6/11/16）。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "火焰烙印",
        "description": "布兰德放出一团火球，对命中的第一个敌人造成70/100/130/160/190 + 0.65 × 法术强度魔法伤害。 如果目标被烈焰焚身，那么还会被晕眩1.75秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "70",
        "range": "1050",
        "numericDetail": "技能文本：布兰德放出一团火球，对命中的第一个敌人造成70/100/130/160/190 + 0.65 × 法术强度魔法伤害。 如果目标被烈焰焚身，那么还会被晕眩1.75秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "烈焰之柱",
        "description": "布兰德生成一团纯火之柱，造成75/120/165/210/255 + 0.7 × 法术强度魔法伤害。 被烈焰焚身的单位们会转而受到(75/120/165/210/255 + 0.7 × 法术强度) × 1.25伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandW.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/70/80/90/100",
        "range": "900",
        "numericDetail": "技能文本：布兰德生成一团纯火之柱，造成75/120/165/210/255 + 0.7 × 法术强度魔法伤害。 被烈焰焚身的单位们会转而受到(75/120/165/210/255 + 0.7 × 法术强度) × 1.25伤害。\n等级成长：伤害=75/120/165/210/255",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "烈火燃烧",
        "description": "布兰德在目标身上引发一阵强力的爆裂，对附近的单位们造成55/80/105/130/155 + 0.6 × 法术强度魔法伤害。 如果目标带有烈焰焚身，那么扩散距离翻倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandE.png",
        "cooldown": "13/12/11/10/9",
        "cost": "90",
        "range": "625",
        "numericDetail": "技能文本：布兰德在目标身上引发一阵强力的爆裂，对附近的单位们造成55/80/105/130/155 + 0.6 × 法术强度魔法伤害。 如果目标带有烈焰焚身，那么扩散距离翻倍。\n等级成长：伤害=55/80/105/130/155",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "烈焰风暴",
        "description": "布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德或另一名敌人之间弹跳至多5次，每次弹跳时对敌人造成100/175/250 + 0.3 × 法术强度魔法伤害。弹跳会优先以带有即将满层的炽热之焰效果的英雄为目标。 如果目标带有烈焰焚身，则会被暂时减速30/45/60%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandR.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "750",
        "numericDetail": "技能文本：布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德或另一名敌人之间弹跳至多5次，每次弹跳时对敌人造成100/175/250 + 0.3 × 法术强度魔法伤害。弹跳会优先以带有即将满层的炽热之焰效果的英雄为目标。 如果目标带有烈焰焚身，则会被暂时减速30/45/60%。\n等级成长：每次弹跳的伤害=100/175/250；减速=30/45/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60028",
    "key": "Evelynn",
    "name": "痛苦之拥",
    "title": "伊芙琳",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Evelynn.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 642,
      "hpPerLevel": 98,
      "hpRegen": 8.5,
      "hpRegenPerLevel": 0.75,
      "resource": 315,
      "resourcePerLevel": 42,
      "resourceRegen": 8.11,
      "resourceRegenPerLevel": 0.6,
      "attackDamage": 61,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.667,
      "attackSpeedPerLevel": 2.1,
      "armor": 37,
      "armorPerLevel": 4.7,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "恶魔魅影",
        "description": "在不攻击或使用技能4秒后，伊芙琳将自身笼罩在恶魔魅影中。当低于250/270/290/310/330/350/370/390/410/430/450/470/490/510/530/550/570/590（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 2.5 × 法术强度生命值时，恶魔魅影每秒回复15–150（1–18级）生命值。从6级开始，它还会提供伪装。 受到来自英雄或防御塔的伤害，会使恶魔魅影被移除1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Evelynn_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在不攻击或使用技能4秒后，伊芙琳将自身笼罩在恶魔魅影中。当低于250/270/290/310/330/350/370/390/410/430/450/470/490/510/530/550/570/590（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 2.5 × 法术强度生命值时，恶魔魅影每秒回复15–150（1–18级）生命值。从6级开始，它还会提供伪装。 受到来自英雄或防御塔的伤害，会使恶魔魅影被移除1.5秒。\n补充数值：在不攻击或使用技能4秒后，伊芙琳将自身笼罩在恶魔魅影中。当低于250/270/290/310/330/350/370/390/410/430/450/470/490/510/530/550/570/590（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 2.5 × 法术强度生命值时，恶魔魅影每秒回复15–150（1–18级）生命值。从6级开始，它还会提供伪装。 受到来自英雄或防御塔的伤害，会使恶魔魅影被移除1.5秒。 伪装状态下的单位不会被敌方看见，除非有一名敌方英雄在其侦测半径内。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "憎恨之刺",
        "description": "伊芙琳用她的鞭子进行打击，对命中的第一个敌人造成25/30/35/40/45 + 0.25 × 法术强度魔法伤害并使伊芙琳对该敌人发起的下3次攻击或技能造成额外的15/25/35/45/55 + 0.25 × 法术强度魔法伤害。伊芙琳可以再次施放这个技能至多3次。 再次施放：伊芙琳发射尖刺穿过相距最近的敌人，并对命中的所有敌人造成25/30/35/40/45 + 0.25 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnQ.png",
        "cooldown": "4",
        "cost": "40/45/50/55/60",
        "range": "800",
        "numericDetail": "技能文本：伊芙琳用她的鞭子进行打击，对命中的第一个敌人造成25/30/35/40/45 + 0.25 × 法术强度魔法伤害并使伊芙琳对该敌人发起的下3次攻击或技能造成额外的15/25/35/45/55 + 0.25 × 法术强度魔法伤害。伊芙琳可以再次施放这个技能至多3次。 再次施放：伊芙琳发射尖刺穿过相距最近的敌人，并对命中的所有敌人造成25/30/35/40/45 + 0.25 × 法术强度魔法伤害。\n补充数值：尖刺会优先选取伊芙琳正在攻击的目标。\n等级成长：鞭笞和尖刺伤害=25/30/35/40/45；额外伤害=15/25/35/45/55",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "引诱",
        "description": "伊芙琳标记一名英雄或野怪5秒。如果伊芙琳用一次攻击或技能命中了该目标，那么她将抹除该印记，返还它的法力消耗，并使目标减速45%，持续0.75秒。 如果标记持续了至少2.5秒，那么将它抹除还会有额外效果：对抗英雄时：将其魅惑1.25/1.5/1.75/2/2.25秒并削减35/37.5/40/42.5/45%魔法抗性，持续4秒。对抗野怪时：将其魅惑3/3.25/3.5/3.75/4秒并造成250/300/350/400/450 + 0.6 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "60/70/80/90/100",
        "range": "1200/1300/1400/1500/1600",
        "numericDetail": "技能文本：伊芙琳标记一名英雄或野怪5秒。如果伊芙琳用一次攻击或技能命中了该目标，那么她将抹除该印记，返还它的法力消耗，并使目标减速45%，持续0.75秒。 如果标记持续了至少2.5秒，那么将它抹除还会有额外效果：对抗英雄时：将其魅惑1.25/1.5/1.75/2/2.25秒并削减35/37.5/40/42.5/45%魔法抗性，持续4秒。对抗野怪时：将其魅惑3/3.25/3.5/3.75/4秒并造成250/300/350/400/450 + 0.6 × 法术强度魔法伤害。\n补充数值：使用这个技能不会使伊芙琳离开恶魔魅影状态。\n等级成长：野怪魅惑时长=3/3.25/3.5/3.75/4",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "鞭笞",
        "description": "伊芙琳鞭打一名敌人，造成60/90/120/150/180加上((3 + 0.015 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。伊芙琳获得30/35/40/45/50%移动速度，持续2秒。 进入恶魔魅影会刷新这个技能的冷却时间并使其获得强化。当这个技能获得强化后，伊芙琳会冲刺向目标并对她的目标和沿途的所有敌人造成80/120/160/200/240加上((4 + 0.025 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnE.png",
        "cooldown": "8",
        "cost": "40/45/50/55/60",
        "range": "210",
        "numericDetail": "技能文本：伊芙琳鞭打一名敌人，造成60/90/120/150/180加上((3 + 0.015 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。伊芙琳获得30/35/40/45/50%移动速度，持续2秒。 进入恶魔魅影会刷新这个技能的冷却时间并使其获得强化。当这个技能获得强化后，伊芙琳会冲刺向目标并对她的目标和沿途的所有敌人造成80/120/160/200/240加上((4 + 0.025 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害。\n补充数值：这个技能会对目标敌人施加攻击特效。\n等级成长：伤害=60/90/120/150/180；强化版伤害=80/120/160/200/240；移动速度=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "最终抚慰",
        "description": "伊芙琳释放她的恶魔能量，造成大量伤害、变为不可被选取状态并向后传送。她造成125/250/375 + 0.75 × 法术强度魔法伤害，如果敌人低于30%生命值，则此伤害提升至(125/250/375 + 0.75 × 法术强度) × 2.4。在施放的同时，给【恶魔魅影】设置一个为期1.25秒的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：伊芙琳释放她的恶魔能量，造成大量伤害、变为不可被选取状态并向后传送。她造成125/250/375 + 0.75 × 法术强度魔法伤害，如果敌人低于30%生命值，则此伤害提升至(125/250/375 + 0.75 × 法术强度) × 2.4。在施放的同时，给【恶魔魅影】设置一个为期1.25秒的冷却时间。\n补充数值：不可被选取的单位不会受到敌人的攻击或技能的影响，除非在进入此状态前已被它们影响。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60099",
    "key": "Lux",
    "name": "光辉女郎",
    "title": "拉克丝",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Lux.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
    "tags": [
      "Mage",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 580,
      "hpPerLevel": 99,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 440,
      "resourcePerLevel": 23.5,
      "resourceRegen": 9,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 54,
      "attackDamagePerLevel": 3.3,
      "attackSpeed": 0.669,
      "attackSpeedPerLevel": 3,
      "armor": 21,
      "armorPerLevel": 5.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "光芒四射",
        "description": "拉克丝的伤害型技能会标记目标6秒。拉克丝的攻击会消耗该标记，以造成30/40/50/60/70/80/90/100/110/120/130/140/150/160/170/180/190/200（英雄等级1–18） + 0.35 × 法术强度魔法伤害。 终极闪光在命中敌人时将先消耗标记然后刷新标记。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LuxIlluminatingFraulein.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：拉克丝的伤害型技能会标记目标6秒。拉克丝的攻击会消耗该标记，以造成30/40/50/60/70/80/90/100/110/120/130/140/150/160/170/180/190/200（英雄等级1–18） + 0.35 × 法术强度魔法伤害。 终极闪光在命中敌人时将先消耗标记然后刷新标记。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "光之束缚",
        "description": "拉克丝朝目标地点发射一团光球，束缚前2名敌人2秒并对每个敌人造80/120/160/200/240 + 0.75 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxLightBinding.png",
        "cooldown": "10",
        "cost": "50",
        "range": "1175",
        "numericDetail": "技能文本：拉克丝朝目标地点发射一团光球，束缚前2名敌人2秒并对每个敌人造80/120/160/200/240 + 0.75 × 法术强度魔法伤害。\n等级成长：伤害=80/120/160/200/240",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "曲光屏障",
        "description": "拉克丝扔出她的魔杖，为它途经的友军提供持续2.5秒的40/55/70/85/100 + 0.4 × 法术强度护盾。随后它会折返，为它途经的友军提供等额的护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxPrismaticWave.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "60/65/70/75/80",
        "range": "1150",
        "numericDetail": "技能文本：拉克丝扔出她的魔杖，为它途经的友军提供持续2.5秒的40/55/70/85/100 + 0.4 × 法术强度护盾。随后它会折返，为它途经的友军提供等额的护盾。\n补充数值：两段护盾可以叠加。\n等级成长：护盾值=40/55/70/85/100",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "透光奇点",
        "description": "拉克丝创造一个光明地带，显形该区域并使区域中的敌人减速25/30/35/40/45%。在5秒后或再次施放这个技能后，它会爆炸，造成65/115/165/215/265 + 0.8 × 法术强度魔法伤害并减速额外的1秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxLightStrikeKugel.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "70/80/90/100/110",
        "range": "1100",
        "numericDetail": "技能文本：拉克丝创造一个光明地带，显形该区域并使区域中的敌人减速25/30/35/40/45%。在5秒后或再次施放这个技能后，它会爆炸，造成65/115/165/215/265 + 0.8 × 法术强度魔法伤害并减速额外的1秒。\n等级成长：伤害=65/115/165/215/265；移动减速=25/30/35/40/45%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "终极闪光",
        "description": "拉克丝发射一束耀目的光能射线，对一条直线上的所有敌人造成300/400/500 + 1.2 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxR.png",
        "cooldown": "60/50/40",
        "cost": "100",
        "range": "3340",
        "numericDetail": "技能文本：拉克丝发射一束耀目的光能射线，对一条直线上的所有敌人造成300/400/500 + 1.2 × 法术强度魔法伤害。\n等级成长：伤害=300/400/500",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60041",
    "key": "Gangplank",
    "name": "海洋之灾",
    "title": "普朗克",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Gangplank.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
    "tags": [
      "Fighter"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 630,
      "hpPerLevel": 114,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.6,
      "resource": 280,
      "resourcePerLevel": 60,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.7,
      "attackDamage": 64,
      "attackDamagePerLevel": 4.2,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 3.2,
      "armor": 31,
      "armorPerLevel": 4.7,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "烈火审讯",
        "description": "普朗克的近战攻击会点燃目标，在2.5秒里持续造成额外的共50–250（1–18级） + 1 × 额外攻击力真实伤害，并为普朗克提供(0.15–0.3（1–18级）) × 100%移动速度，持续2秒。 摧毁一个火药桶时会刷新这个技能的冷却时间并为普朗克提供相同的移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Gangplank_Passive.png",
        "cooldown": "15秒",
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：普朗克的近战攻击会点燃目标，在2.5秒里持续造成额外的共50–250（1–18级） + 1 × 额外攻击力真实伤害，并为普朗克提供(0.15–0.3（1–18级）) × 100%移动速度，持续2秒。 摧毁一个火药桶时会刷新这个技能的冷却时间并为普朗克提供相同的移动速度。\n被动冷却：15秒\n补充数值：普朗克的近战攻击会点燃目标，在2.5秒里持续造成额外的共50–250（1–18级） + 1 × 额外攻击力真实伤害，并为普朗克提供(0.15–0.3（1–18级）) × 100%移动速度，持续2秒。 摧毁一个火药桶时会刷新这个技能的冷却时间并为普朗克提供相同的移动速度。 对防御塔造成50%伤害。 枪火谈判不适用于这个技能。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "枪火谈判",
        "description": "普朗克发射一颗子弹，造成10/40/70/100/130 + 1 × 攻击力物理伤害。如果这颗子弹击杀了目标，那么普朗克获得额外的3/4/5/6/7金币和4/5/6/7/8银蛇币。 普朗克可以在商店中花费银蛇币来升级加农炮幕。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankQWrapper.png",
        "cooldown": "4.5",
        "cost": "50/45/40/35/30",
        "range": "625",
        "numericDetail": "技能文本：普朗克发射一颗子弹，造成10/40/70/100/130 + 1 × 攻击力物理伤害。如果这颗子弹击杀了目标，那么普朗克获得额外的3/4/5/6/7金币和4/5/6/7/8银蛇币。 普朗克可以在商店中花费银蛇币来升级加农炮幕。\n补充数值：这颗子弹可以附带攻击特效(烈火审讯除外)并且可以暴击以造成(10/40/70/100/130 + 1 × 攻击力) × (1 + (1 × (1 × 暴击伤害 - 1)))物理伤害。\n等级成长：伤害=10/40/70/100/130；掠夺 金币=3/4/5/6/7；掠夺 银蛇币=4/5/6/7/8",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "坏血病疗法",
        "description": "普朗克吃掉大量柑橘类水果，来移除所有限制效果并回复45/70/95/120/145 + 0.9 × 法术强度外加13%已损失生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankW.png",
        "cooldown": "22/20/18/16/14",
        "cost": "60/70/80/90/100",
        "range": "400",
        "numericDetail": "技能文本：普朗克吃掉大量柑橘类水果，来移除所有限制效果并回复45/70/95/120/145 + 0.9 × 法术强度外加13%已损失生命值。\n等级成长：治疗效果=45/70/95/120/145",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "火药桶",
        "description": "普朗克放置一个可被普朗克和敌方英雄攻击的火药桶，该火药桶持续25秒。当一名敌人将火药桶摧毁时，该火药桶会哑火。当普朗克将火药桶摧毁时，该火药桶会爆炸，造成持续2秒的40/50/60/70/80%减速和相当于攻击力的伤害，并无视40%护甲。英雄会受到额外的75/95/115/135/155物理伤害。 火药桶的生命值会每2/1/0.5（英雄等级1/7/13）秒衰减一次。火药桶会引爆其它爆炸区域与它有重叠的火药桶，但不会重复对相同目标造成伤害。火药桶的爆炸可通过枪火谈判来触发并在击杀目标们时提供额外金币。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankE.png",
        "cooldown": "0",
        "cost": "0",
        "range": "1000",
        "numericDetail": "技能文本：普朗克放置一个可被普朗克和敌方英雄攻击的火药桶，该火药桶持续25秒。当一名敌人将火药桶摧毁时，该火药桶会哑火。当普朗克将火药桶摧毁时，该火药桶会爆炸，造成持续2秒的40/50/60/70/80%减速和相当于攻击力的伤害，并无视40%护甲。英雄会受到额外的75/95/115/135/155物理伤害。 火药桶的生命值会每2/1/0.5（英雄等级1/7/13）秒衰减一次。火药桶会引爆其它爆炸区域与它有重叠的火药桶，但不会重复对相同目标造成伤害。火药桶的爆炸可通过枪火谈判来触发并在击杀目标们时提供额外金币。\n补充数值：火药桶生命值的衰减速率会在7级和13级时提升。\n等级成长：对英雄的额外伤害=75/95/115/135/155；最大充能=3/3/4/4/5；减速=40/50/60/70/80%；充能时间=17/16/15/14/13",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "加农炮幕",
        "description": "普朗克给他的舰船发射信号弹，让它在8秒里朝着目标区域持续发射共12波加农炮弹。每波炮弹造成持续0.5秒的30%减速，并造成40/70/100 + 0.1 × 法术强度魔法伤害。最大伤害：(40/70/100 + 0.1 × 法术强度) × 12 这个技能可在商店中用枪火谈判来升级。 随意开火：发射6波额外的加农炮弹。 死亡之女：发射一颗巨型加农炮弹，造成120/210/300 + 0.3 × 法术强度真实伤害和持续1秒的75%减速。 鼓舞士气：【加农炮幕】内的友军会获得持续2秒的40%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankR.png",
        "cooldown": "160/140/120",
        "cost": "100",
        "range": "30000",
        "numericDetail": "技能文本：普朗克给他的舰船发射信号弹，让它在8秒里朝着目标区域持续发射共12波加农炮弹。每波炮弹造成持续0.5秒的30%减速，并造成40/70/100 + 0.1 × 法术强度魔法伤害。最大伤害：(40/70/100 + 0.1 × 法术强度) × 12 这个技能可在商店中用枪火谈判来升级。 随意开火：发射6波额外的加农炮弹。 死亡之女：发射一颗巨型加农炮弹，造成120/210/300 + 0.3 × 法术强度真实伤害和持续1秒的75%减速。 鼓舞士气：【加农炮幕】内的友军会获得持续2秒的40%移动速度。\n等级成长：每波伤害=40/70/100",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60001",
    "key": "Annie",
    "name": "黑暗之女",
    "title": "安妮",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Annie.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
    "tags": [
      "Mage",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 560,
      "hpPerLevel": 96,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 418,
      "resourcePerLevel": 25,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 50,
      "attackDamagePerLevel": 2.65,
      "attackSpeed": 0.61,
      "attackSpeedPerLevel": 1.36,
      "armor": 23,
      "armorPerLevel": 4,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 625,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "嗜火",
        "description": "在使用4次技能后，安妮的下一个伤害技能会造成1.25/1.5/1.75（英雄等级1/6/11）秒晕眩。 安妮在游戏开始时和重生时，会带着满层的嗜火。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Annie_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在使用4次技能后，安妮的下一个伤害技能会造成1.25/1.5/1.75（英雄等级1/6/11）秒晕眩。 安妮在游戏开始时和重生时，会带着满层的嗜火。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "碎裂之火",
        "description": "安妮投出一团火球，造成80/125/170/215/260 + 0.8 × 法术强度魔法伤害。如果目标阵亡，那么安妮会返还法力值并缩短50%冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieQ.png",
        "cooldown": "4",
        "cost": "60/65/70/75/80",
        "range": "625",
        "numericDetail": "技能文本：安妮投出一团火球，造成80/125/170/215/260 + 0.8 × 法术强度魔法伤害。如果目标阵亡，那么安妮会返还法力值并缩短50%冷却时间。\n等级成长：伤害=80/125/170/215/260",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "焚烧",
        "description": "安妮投射出一阵火焰波，造成70/110/150/190/230 + 0.8 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieW.png",
        "cooldown": "7",
        "cost": "70/75/80/85/90",
        "range": "600",
        "numericDetail": "技能文本：安妮投射出一阵火焰波，造成70/110/150/190/230 + 0.8 × 法术强度魔法伤害。\n等级成长：伤害=70/110/150/190/230",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "熔岩护盾",
        "description": "安妮为一名友方英雄提供持续3秒的60/95/130/165/200 + 0.4 × 法术强度护盾值，以及在1.5秒里持续衰减的(0.2–0.5（1–18级）) × 100%移动速度。当护盾处于激活状态时，敌人用攻击或技能对护盾造成伤害时会受到25/35/45/55/65 + 0.4 × 法术强度魔法伤害，每个护盾受到一次伤害。 提伯斯在被召唤出来时总会获得熔岩护盾的效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieE.png",
        "cooldown": "10",
        "cost": "60/65/70/75/80",
        "range": "800",
        "numericDetail": "技能文本：安妮为一名友方英雄提供持续3秒的60/95/130/165/200 + 0.4 × 法术强度护盾值，以及在1.5秒里持续衰减的(0.2–0.5（1–18级）) × 100%移动速度。当护盾处于激活状态时，敌人用攻击或技能对护盾造成伤害时会受到25/35/45/55/65 + 0.4 × 法术强度魔法伤害，每个护盾受到一次伤害。 提伯斯在被召唤出来时总会获得熔岩护盾的效果。\n等级成长：护盾值=60/95/130/165/200；伤害回敬=25/35/45/55/65",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "提伯斯之怒",
        "description": "被动：安妮获得10/15/20%法术穿透。 安妮召唤提伯斯，造成150/275/400 + 0.75 × 法术强度魔法伤害。在接下来的45秒里，提伯斯会灼烧附近的敌人，每秒造成8/12/16 + 0.04 × 法术强度魔法伤害。 提伯斯在以下情况下会变得暴怒：在被召唤出来时、在安妮晕眩一名敌方英雄时、以及在安妮阵亡时。在暴怒状态下，提伯斯获得275%攻击速度和在3秒里持续衰减的100%移动速度。 再次施放：手动给提伯斯下达指令。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieR.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "600",
        "numericDetail": "技能文本：被动：安妮获得10/15/20%法术穿透。 安妮召唤提伯斯，造成150/275/400 + 0.75 × 法术强度魔法伤害。在接下来的45秒里，提伯斯会灼烧附近的敌人，每秒造成8/12/16 + 0.04 × 法术强度魔法伤害。 提伯斯在以下情况下会变得暴怒：在被召唤出来时、在安妮晕眩一名敌方英雄时、以及在安妮阵亡时。在暴怒状态下，提伯斯获得275%攻击速度和在3秒里持续衰减的100%移动速度。 再次施放：手动给提伯斯下达指令。\n补充数值：提伯斯拥有： (1150/1200/1250/1300/1350/1600/1850/2100/2350/2600/2900/3200/3500（英雄等级1/7/8/9/10/11/12/13/14/15/16/17/18） × 1) + 0.5 × 法术强度生命值 30/35/40/45/50/55/60/65/70/75/80/85/90（英雄等级1/7/8/9/10/11/12/13/14/15/16/17/18）护甲 30/35/40/45/50/55/60/65/70/75/80/85/90（英雄等级1/7/8/9/10/11/12/13/14/15/16/17/18）魔法抗性 30/45/60 + 0.1 × 法术强度攻击力\n等级成长：初始伤害=150/275/400；光环伤害=8/12/16；攻击力=30/45/60；额外移动速度=0/25/50；法术穿透=10/15/20%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60079",
    "key": "Gragas",
    "name": "酒桶",
    "title": "古拉加斯",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Gragas.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
    "tags": [
      "Fighter",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 640,
      "hpPerLevel": 115,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.5,
      "resource": 400,
      "resourcePerLevel": 47,
      "resourceRegen": 6,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 64,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.675,
      "attackSpeedPerLevel": 2.05,
      "armor": 38,
      "armorPerLevel": 5,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 330,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "欢乐时光",
        "description": "古拉加斯每次使用技能后都会喝一小杯，立即恢复0.055 × 最大生命值生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/GragasPassiveHeal.png",
        "cooldown": "12/10/8/6（英雄等级1/6/11/16）秒",
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：古拉加斯每次使用技能后都会喝一小杯，立即恢复0.055 × 最大生命值生命值。\n被动冷却：12/10/8/6（英雄等级1/6/11/16）秒",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "滚动酒桶",
        "description": "古拉加斯滚动出一个酒桶，该酒桶会在4秒后爆炸， 造成80/120/160/200/240 + 0.8 × 法术强度魔法伤害到(80/120/160/200/240 + 0.8 × 法术强度) × 1.5魔法伤害和持续2秒的40/45/50/55/60到60/67.5/75/82.5/90%减速。伤害和减速会基于该酒桶在爆炸前的时长来提升。 古拉加斯可以再次施放这个技能来提前引爆该酒桶。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasQ.png",
        "cooldown": "10/9/8/7/6",
        "cost": "80",
        "range": "850",
        "numericDetail": "技能文本：古拉加斯滚动出一个酒桶，该酒桶会在4秒后爆炸， 造成80/120/160/200/240 + 0.8 × 法术强度魔法伤害到(80/120/160/200/240 + 0.8 × 法术强度) × 1.5魔法伤害和持续2秒的40/45/50/55/60到60/67.5/75/82.5/90%减速。伤害和减速会基于该酒桶在爆炸前的时长来提升。 古拉加斯可以再次施放这个技能来提前引爆该酒桶。\n补充数值：对小兵造成70%伤害。\n等级成长：伤害=80/120/160/200/240；减速=40/45/50/55/60",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "醉酒狂暴",
        "description": "古拉加斯品尝他的最新佳酿，使即将到来的伤害降低((10/14/18/22/26 + 0.04 × 法术强度) × 0.01) × 100%，持续2.5秒，此外，他的下次攻击获得强化，对目标及目标身边的敌人们造成额外的20/50/80/110/140 + 0.7 × 法术强度外加7%最大生命值的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasW.png",
        "cooldown": "5",
        "cost": "30",
        "range": "20",
        "numericDetail": "技能文本：古拉加斯品尝他的最新佳酿，使即将到来的伤害降低((10/14/18/22/26 + 0.04 × 法术强度) × 0.01) × 100%，持续2.5秒，此外，他的下次攻击获得强化，对目标及目标身边的敌人们造成额外的20/50/80/110/140 + 0.7 × 法术强度外加7%最大生命值的魔法伤害。\n补充数值：对野怪的最大生命值伤害的上限为300。 对建筑物造成50%伤害。\n等级成长：伤害减免=10/14/18/22/26%；伤害=20/50/80/110/140",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "肉弹冲击",
        "description": "古拉加斯向前冲锋，撞击命中的第一名敌人，使附近的敌人击飞1秒并对其造成80/125/170/215/260 + 0.6 × 法术强度魔法伤害。 当古拉加斯撞到一个敌人时，这个技能的冷却时间会缩短40%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasE.png",
        "cooldown": "14/13.5/13/12.5/12",
        "cost": "50",
        "range": "600",
        "numericDetail": "技能文本：古拉加斯向前冲锋，撞击命中的第一名敌人，使附近的敌人击飞1秒并对其造成80/125/170/215/260 + 0.6 × 法术强度魔法伤害。 当古拉加斯撞到一个敌人时，这个技能的冷却时间会缩短40%。\n等级成长：伤害=80/125/170/215/260",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "爆破酒桶",
        "description": "古拉加斯猛抛他的酒桶，造成200/300/400 + 0.8 × 法术强度魔法伤害并将敌人们从爆炸中心击退。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasR.png",
        "cooldown": "100/85/70",
        "cost": "100",
        "range": "1000",
        "numericDetail": "技能文本：古拉加斯猛抛他的酒桶，造成200/300/400 + 0.8 × 法术强度魔法伤害并将敌人们从爆炸中心击退。\n补充数值：敌人不可以被这个技能击退得越过墙体。\n等级成长：伤害=200/300/400",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60004",
    "key": "TwistedFate",
    "name": "卡牌大师",
    "title": "崔斯特",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/TwistedFate.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",
    "tags": [
      "Mage",
      "Marksman"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 604,
      "hpPerLevel": 108,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.6,
      "resource": 333,
      "resourcePerLevel": 39,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 52,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.5,
      "armor": 24,
      "armorPerLevel": 4.35,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 525,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "灌铅骰子",
        "description": "在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，随机获得1到6的额外赏金。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Cardmaster_SealFate.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，随机获得1到6的额外赏金。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "万能牌",
        "description": "崔斯特掷出三张牌，各造成60/105/150/195/240 + 0.5 × 额外攻击力 + 0.85 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WildCards.png",
        "cooldown": "6/5.75/5.5/5.25/5",
        "cost": "60/70/80/90/100",
        "range": "10000",
        "numericDetail": "技能文本：崔斯特掷出三张牌，各造成60/105/150/195/240 + 0.5 × 额外攻击力 + 0.85 × 法术强度魔法伤害。\n补充数值：敌人仅会受到其中一张牌的伤害。\n等级成长：伤害=60/105/150/195/240",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "选牌",
        "description": "崔斯特开始洗牌，允许他再次施放来从3张牌中锁定一张，并且强化他的下次攻击。 蓝牌造成40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度 + (0.575 × (40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度)) × 暴击率魔法伤害并回复70/90/110/130/150法力。红牌对附近的敌人造成30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度 + (0.35 × (30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度)) × 暴击率魔法伤害和持续2.5秒的30/35/40/45/50%减速。金牌造成15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度 + (0.25 × (15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度)) × 暴击率魔法伤害和1/1.25/1.5/1.75/2秒晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PickACard.png",
        "cooldown": "6",
        "cost": "50/55/60/65/70",
        "range": "200",
        "numericDetail": "技能文本：崔斯特开始洗牌，允许他再次施放来从3张牌中锁定一张，并且强化他的下次攻击。 蓝牌造成40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度 + (0.575 × (40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度)) × 暴击率魔法伤害并回复70/90/110/130/150法力。红牌对附近的敌人造成30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度 + (0.35 × (30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度)) × 暴击率魔法伤害和持续2.5秒的30/35/40/45/50%减速。金牌造成15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度 + (0.25 × (15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度)) × 暴击率魔法伤害和1/1.25/1.5/1.75/2秒晕眩。\n补充数值：崔斯特开始洗牌，允许他再次施放来从3张牌中锁定一张，并且强化他的下次攻击。 蓝牌造成(40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度 + (0.575 × (40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度)) × 暴击率) × 1 = (40/60/80/100/120 +100% +100%)(可通过至多提升至57.5%)魔法伤害并回复70/90/110/130/150法力。红牌对附近的敌人造成(30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度 + (0.35 × (30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度)) × 暴击率) × 1 = (30/45/60/75/90 +100% +70%)(可通过至多提升至35%)魔法伤害和持续2.5秒的30/35/40/45/50%减速。金牌造成(15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度 + (0.25 × (15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度)) × 暴击率) × 1 = (15/22.5/30/37.5/45 +100% +50%)(可通过至多提升至25%)魔法伤害和1/1.25/1.5/1.75/2秒晕眩。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "卡牌骗术",
        "description": "被动：崔斯特获得15/25/35/45/55%攻击速度并且每第4次攻击造成额外的65/90/115/140/165 + 0.2 × 额外攻击力 + 0.4 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CardmasterStack.png",
        "cooldown": "0",
        "cost": "0",
        "range": "0",
        "numericDetail": "技能文本：被动：崔斯特获得15/25/35/45/55%攻击速度并且每第4次攻击造成额外的65/90/115/140/165 + 0.2 × 额外攻击力 + 0.4 × 法术强度魔法伤害。\n补充数值：对建筑物的效能为50%。\n等级成长：额外伤害=65/90/115/140/165；攻击速度=15/25/35/45/55%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "命运",
        "description": "崔斯特专注于他的卡牌，提供地图上所有敌方英雄的真实视野，持续6/8/10秒，并允许他再次施放。 再次施放：崔斯特传送到5500码以内的任何地方。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Destiny.png",
        "cooldown": "170/140/110",
        "cost": "100",
        "range": "5500",
        "numericDetail": "技能文本：崔斯特专注于他的卡牌，提供地图上所有敌方英雄的真实视野，持续6/8/10秒，并允许他再次施放。 再次施放：崔斯特传送到5500码以内的任何地方。\n补充数值：限制效果将打断该次传送。\n等级成长：持续时间=6/8/10",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60076",
    "key": "Nidalee",
    "name": "狂野女猎手",
    "title": "奈德丽",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Nidalee.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 610,
      "hpPerLevel": 109,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.6,
      "resource": 295,
      "resourcePerLevel": 45,
      "resourceRegen": 6,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 58,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.638,
      "attackSpeedPerLevel": 3.22,
      "armor": 32,
      "armorPerLevel": 5,
      "magicResist": 30,
      "magicResistPerLevel": 1.45,
      "moveSpeed": 335,
      "attackRange": 525,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "寻觅",
        "description": "在穿越草丛进行移动时，奈德丽的移动速度会提升10%，持续2秒，并在朝着1400码内的出现在己方视野内的敌方英雄进行移动时，移动速度加成会提升至30%。 在【Q标枪投掷】或【W丛林伏击】对敌方英雄或野怪造成伤害后，奈德丽会开始捕猎目标英雄，提供其真实视野，持续4秒。在此期间，奈德丽获得10%移动速度加成（在她朝着被捕猎的目标移动时，这个加成会提升至30%）并且她的【Q推倒】和【W猛扑】会对这些目标造成强化伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Nidalee_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "1400",
        "numericDetail": "技能文本：在穿越草丛进行移动时，奈德丽的移动速度会提升10%，持续2秒，并在朝着1400码内的出现在己方视野内的敌方英雄进行移动时，移动速度加成会提升至30%。 在【Q标枪投掷】或【W丛林伏击】对敌方英雄或野怪造成伤害后，奈德丽会开始捕猎目标英雄，提供其真实视野，持续4秒。在此期间，奈德丽获得10%移动速度加成（在她朝着被捕猎的目标移动时，这个加成会提升至30%）并且她的【Q推倒】和【W猛扑】会对这些目标造成强化伤害。\n补充数值：奈德丽自带1级美洲狮形态。 奈德丽在进入草丛时会获得持续2秒的10%移动速度，在朝着敌方英雄移动时会提升至30%移动速度。 用标枪投掷或丛林伏击命中英雄或野怪时，会将其标记为被捕猎状态，持续4秒。在一名敌人被捕猎时，其会被真实视野给显形并且奈德丽获得10%移动速度，在朝着被捕猎的敌人移动时会提升至30%移动速度。 移动速度可以叠加但无法超过30%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "标枪投掷 / 推倒",
        "description": "人类形态：奈德丽投掷她的标枪，造成70/90/110/130/150 + 0.5 × 法术强度魔法伤害，基于标枪飞行距离至多提升至(70/90/110/130/150 + 0.5 × 法术强度) × 3.25魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JavelinToss.png",
        "cooldown": "6",
        "cost": "50/55/60/65/70",
        "range": "1500",
        "numericDetail": "技能文本：人类形态：奈德丽投掷她的标枪，造成70/90/110/130/150 + 0.5 × 法术强度魔法伤害，基于标枪飞行距离至多提升至(70/90/110/130/150 + 0.5 × 法术强度) × 3.25魔法伤害。\n补充数值：人类形态：奈德丽投掷她的标枪，造成70/90/110/130/150 + 0.5 × 法术强度魔法伤害，基于标枪飞行距离至多提升至(70/90/110/130/150 + 0.5 × 法术强度) × 3.25魔法伤害。 美洲狮形态：奈德丽的下次攻击造成5/30/55/80/105 + 0.75 × 攻击力 + 0.4 × 法术强度外加1/1.25/1.5/1.75/2%每1%已损失生命值的魔法伤害。 如果该敌人处于被捕猎状态，还会造成30%提升伤害。\n等级成长：标枪伤害最小值=70/90/110/130/150；标枪伤害最大值=227.5/292.5/357.5/422.5/487.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "丛林伏击 / 猛扑",
        "description": "人类形态：奈德丽放置一个持续2分钟的隐形陷阱。当有一个敌人走到它上面时，该敌人会每秒受到10/20/30/40/50 + 0.05 × 法术强度魔法伤害，持续4秒。 最多可以有4/6/8/10（英雄等级1/6/11/16） + 0个陷阱同时存在。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Bushwhack.png",
        "cooldown": "13/12/11/10/9",
        "cost": "30/35/40/45/50",
        "range": "900",
        "numericDetail": "技能文本：人类形态：奈德丽放置一个持续2分钟的隐形陷阱。当有一个敌人走到它上面时，该敌人会每秒受到10/20/30/40/50 + 0.05 × 法术强度魔法伤害，持续4秒。 最多可以有4/6/8/10（英雄等级1/6/11/16） + 0个陷阱同时存在。\n补充数值：人类形态：奈德丽放置一个持续2分钟的隐形陷阱。当有一个敌人走到它上面时，该敌人会每秒受到10/20/30/40/50 + 0.05 × 法术强度魔法伤害，持续4秒。 最多可以有4/6/8/10（英雄等级1/6/11/16） + 0个陷阱同时存在。 美洲狮形态：奈德丽进行扑击，对着陆区域附近的敌人们造成55/100/145/190/235 + 0.5 × 额外攻击力 + 0.3 × 法术强度魔法伤害。在美洲狮形态下击杀一个单位，会使这个技能的冷却时间缩短至3/2.5/2/1.5/1.5秒。 可从更远处对被捕猎的敌人进行扑击，并且这么做会使这个技能的冷却时间缩短至3/2.5/2/1.5/1.5秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "野性奔腾 / 挥击",
        "description": "人类形态：奈德丽为目标回复50/75/100/125/150 + 0.35 × 法术强度生命值，这个数额基于已损失生命值至多提升至(50/75/100/125/150 + 0.35 × 法术强度) × (1 + 1)，并为目标提供持续7秒的30/40/50/60/70%攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PrimalSurge.png",
        "cooldown": "12",
        "cost": "50/55/60/65/70",
        "range": "900",
        "numericDetail": "技能文本：人类形态：奈德丽为目标回复50/75/100/125/150 + 0.35 × 法术强度生命值，这个数额基于已损失生命值至多提升至(50/75/100/125/150 + 0.35 × 法术强度) × (1 + 1)，并为目标提供持续7秒的30/40/50/60/70%攻击速度。\n补充数值：人类形态：奈德丽为目标回复50/75/100/125/150 + 0.35 × 法术强度生命值，这个数额基于已损失生命值至多提升至(50/75/100/125/150 + 0.35 × 法术强度) × (1 + 1)，并为目标提供持续7秒的30/40/50/60/70%攻击速度。 美洲狮形态：奈德丽朝她前方的敌人们挥爪，造成70/130/190/250/310 + 0.7 × 额外攻击力 + 0.55 × 法术强度魔法伤害。\n等级成长：野性奔腾 治疗效果=50/75/100/125/150；野性奔腾 攻速加成=30/40/50/60/70%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "美洲狮形态",
        "description": "被动：在人类形态下，施加捕猎效果会刷新这个技能的冷却时间。 人类形态：奈德丽变形为美洲狮形态，获得近战攻击并替换她的主动技能。 美洲狮形态：奈德丽变形为人类形态，获得远程攻击并替换她的主动技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AspectOfTheCougar.png",
        "cooldown": "3",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：被动：在人类形态下，施加捕猎效果会刷新这个技能的冷却时间。 人类形态：奈德丽变形为美洲狮形态，获得近战攻击并替换她的主动技能。 美洲狮形态：奈德丽变形为人类形态，获得远程攻击并替换她的主动技能。\n等级成长：推倒 伤害=5/30/55/80；推倒 伤害增幅=100/125/150/175%；猛扑 伤害=55/100/145/190；挥击 伤害=70/130/190/250；强化版猛扑 冷却时间=3/2.5/2/1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60002",
    "key": "Olaf",
    "name": "狂战士",
    "title": "奥拉夫",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Olaf.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 645,
      "hpPerLevel": 119,
      "hpRegen": 6.5,
      "hpRegenPerLevel": 0.6,
      "resource": 316,
      "resourcePerLevel": 50,
      "resourceRegen": 7.5,
      "resourceRegenPerLevel": 0.6,
      "attackDamage": 68,
      "attackDamagePerLevel": 4.7,
      "attackSpeed": 0.72,
      "attackSpeedPerLevel": 2.7,
      "armor": 35,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 350,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "狂战之怒",
        "description": "奥拉夫获得至多(0.5–1（1–18级）) × 100%攻击速度和(0.08–0.25（1–18级）) × 100%生命偷取，基于他的已损失生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Olaf_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：奥拉夫获得至多(0.5–1（1–18级）) × 100%攻击速度和(0.08–0.25（1–18级）) × 100%生命偷取，基于他的已损失生命值。\n补充数值：奥拉夫获得至多(0.5–1（1–18级）) × 100%攻击速度和(0.08–0.25（1–18级）) × 100%生命偷取，基于他的已损失生命值。 在30%生命值时达到最大值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "逆流投掷",
        "description": "奥拉夫扔出一把斧头，造成70/120/170/220/270 + 1 × 额外攻击力物理伤害和至多持续3秒(基于斧头移动距离)的30/35/40/45/50%减速。被斧头命中的英雄还会损失20%护甲，持续4秒。 如果奥拉夫拾起了斧头，那么这个技能的冷却时间会缩短至(2.5) × 技能冷却修正系数秒，或在度过(2.5) × 技能冷却修正系数秒之后完全返还。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafAxeThrowCast.png",
        "cooldown": "9",
        "cost": "50/55/60/65/70",
        "range": "1000",
        "numericDetail": "技能文本：奥拉夫扔出一把斧头，造成70/120/170/220/270 + 1 × 额外攻击力物理伤害和至多持续3秒(基于斧头移动距离)的30/35/40/45/50%减速。被斧头命中的英雄还会损失20%护甲，持续4秒。 如果奥拉夫拾起了斧头，那么这个技能的冷却时间会缩短至(2.5) × 技能冷却修正系数秒，或在度过(2.5) × 技能冷却修正系数秒之后完全返还。\n补充数值：对野怪造成20/45/70/95/120额外伤害。\n等级成长：伤害=70/120/170/220/270；减速=30/35/40/45/50%；野怪伤害=20/45/70/95/120",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "挺过去",
        "description": "奥拉夫获得持续5秒的40/50/60/70/80%攻击速度，以及持续2.5秒的10/40/70/100/130外加17.5%已损失生命值的护盾值(最大值为10/40/70/100/130 + (0.175 × (1 + (-1 × 0.3))) × 最大生命值护盾值，在低于30%时提供)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafFrenziedStrikes.png",
        "cooldown": "16/15/14/13/12",
        "cost": "50",
        "range": "700",
        "numericDetail": "技能文本：奥拉夫获得持续5秒的40/50/60/70/80%攻击速度，以及持续2.5秒的10/40/70/100/130外加17.5%已损失生命值的护盾值(最大值为10/40/70/100/130 + (0.175 × (1 + (-1 × 0.3))) × 最大生命值护盾值，在低于30%时提供)。\n等级成长：攻击速度=40/50/60/70/80%；基础护盾=10/40/70/100/130",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "鲁莽挥击",
        "description": "奥拉夫狂野地挥舞他的双斧，造成70/115/160/205/250 + 0.5 × 攻击力真实伤害。如果该敌人阵亡，那么会返还此技能的消耗。 攻击会使这个技能的冷却时间缩短1秒，在攻击野怪时，缩短值提升至2秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafRecklessStrike.png",
        "cooldown": "11/10/9/8/7",
        "cost": "0",
        "range": "325",
        "numericDetail": "技能文本：奥拉夫狂野地挥舞他的双斧，造成70/115/160/205/250 + 0.5 × 攻击力真实伤害。如果该敌人阵亡，那么会返还此技能的消耗。 攻击会使这个技能的冷却时间缩短1秒，在攻击野怪时，缩短值提升至2秒。\n补充数值：施放时间受益于额外攻速",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "诸神黄昏",
        "description": "被动：奥拉夫获得10/15/20护甲和10/15/20魔法抗性。 主动：奥拉夫净化掉他身上的所有定身和限制效果并且在接下来的3秒内免疫这些效果。在激活时，奥拉夫获得10/20/30 + 0.25 × 总攻击力攻击力。用一次攻击或鲁莽挥击命中一名英雄时，会使持续时间延长2.5秒。 此外，奥拉夫会在朝着敌方英雄时获得20/45/70%移动速度，持续1秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafRagnarok.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "400",
        "numericDetail": "技能文本：被动：奥拉夫获得10/15/20护甲和10/15/20魔法抗性。 主动：奥拉夫净化掉他身上的所有定身和限制效果并且在接下来的3秒内免疫这些效果。在激活时，奥拉夫获得10/20/30 + 0.25 × 总攻击力攻击力。用一次攻击或鲁莽挥击命中一名英雄时，会使持续时间延长2.5秒。 此外，奥拉夫会在朝着敌方英雄时获得20/45/70%移动速度，持续1秒。\n等级成长：护甲和魔法抗性=10/15/20；攻击力=10/20/30；移动速度=20/45/70%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60027",
    "key": "Singed",
    "name": "炼金术士",
    "title": "辛吉德",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Singed.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",
    "tags": [
      "Tank",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 650,
      "hpPerLevel": 96,
      "hpRegen": 9.5,
      "hpRegenPerLevel": 0.55,
      "resource": 330,
      "resourcePerLevel": 45,
      "resourceRegen": 7.5,
      "resourceRegenPerLevel": 0.55,
      "attackDamage": 63,
      "attackDamagePerLevel": 3.4,
      "attackSpeed": 0.7,
      "attackSpeedPerLevel": 1.9,
      "armor": 34,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "剧毒冲流",
        "description": "辛吉德将借助附近英雄的冲流，来获得持续2秒的25%移动速度。这个效果在每个英雄身上拥有8秒冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Singed_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "225",
        "numericDetail": "技能文本：辛吉德将借助附近英雄的冲流，来获得持续2秒的25%移动速度。这个效果在每个英雄身上拥有8秒冷却时间。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "剧毒踪迹",
        "description": "激活：辛吉德在身后留下一条剧毒踪迹，对经过它的敌人造成每秒20/30/40/50/60 + 0.425 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PoisonTrail.png",
        "cooldown": "0",
        "cost": "13",
        "range": "20",
        "numericDetail": "技能文本：激活：辛吉德在身后留下一条剧毒踪迹，对经过它的敌人造成每秒20/30/40/50/60 + 0.425 × 法术强度魔法伤害。\n补充数值：踪迹持续时长：3.25秒。 剧毒持续时长：2秒。 大概的总伤害：(20/30/40/50/60 + 0.425 × 法术强度) × 4.75魔法伤害。 如果一个处于【剧毒踪迹】状态下的小兵即将死于小兵伤害，则辛吉德会转而获得该小兵的击杀金币。\n等级成长：伤害=20/30/40/50/60",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "强力粘胶",
        "description": "辛吉德猛掷出一个装满粘性液体的桶，对区域内的敌人造成缚地和50/55/60/65/70%减速，持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MegaAdhesive.png",
        "cooldown": "17/16/15/14/13",
        "cost": "60/70/80/90/100",
        "range": "1000",
        "numericDetail": "技能文本：辛吉德猛掷出一个装满粘性液体的桶，对区域内的敌人造成缚地和50/55/60/65/70%减速，持续3秒。\n等级成长：减速=50/55/60/65/70%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "过肩摔",
        "description": "辛吉德对一名敌人进行过肩摔，造成50/60/70/80/90 + 0.55 × 法术强度外加6/6.5/7/7.5/8%最大生命值的魔法伤害。 如果辛吉德将一名目标摔到他的强力粘胶上，那么该目标还会被禁锢1/1.25/1.5/1.75/2秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Fling.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/70/80/90/100",
        "range": "125",
        "numericDetail": "技能文本：辛吉德对一名敌人进行过肩摔，造成50/60/70/80/90 + 0.55 × 法术强度外加6/6.5/7/7.5/8%最大生命值的魔法伤害。 如果辛吉德将一名目标摔到他的强力粘胶上，那么该目标还会被禁锢1/1.25/1.5/1.75/2秒。\n补充数值：对小兵和野怪的最大生命值伤害的上限为300。\n等级成长：伤害=50/60/70/80/90；最大生命值伤害=6/6.5/7/7.5/8%；禁锢时长=1/1.25/1.5/1.75/2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "疯狂药剂",
        "description": "辛吉德喝下化学药剂，自身获得25/55/85法术强度、护甲、魔法抗性、移动速度、生命回复和法力回复，持续25秒。在这个效果期间，辛吉德的剧毒踪迹还会施加持续1秒的40%重伤。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/InsanityPotion.png",
        "cooldown": "100",
        "cost": "100",
        "range": "20",
        "numericDetail": "技能文本：辛吉德喝下化学药剂，自身获得25/55/85法术强度、护甲、魔法抗性、移动速度、生命回复和法力回复，持续25秒。在这个效果期间，辛吉德的剧毒踪迹还会施加持续1秒的40%重伤。\n等级成长：额外属性=25/55/85",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60013",
    "key": "Ryze",
    "name": "符文法师",
    "title": "瑞兹",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Ryze.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
    "tags": [
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 620,
      "hpPerLevel": 124,
      "hpRegen": 8,
      "hpRegenPerLevel": 0.8,
      "resource": 300,
      "resourcePerLevel": 70,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 1,
      "attackDamage": 55,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 2.11,
      "armor": 22,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 340,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "奥术专精",
        "description": "瑞兹获得(10 × 法术强度) × 0.01%最大法力值。他的技能会基于他的额外法力值造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ryze_P.png",
        "cooldown": null,
        "cost": null,
        "range": "625",
        "numericDetail": "技能文本：瑞兹获得(10 × 法术强度) × 0.01%最大法力值。他的技能会基于他的额外法力值造成额外伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "超负荷",
        "description": "被动：符文禁锢和法术涌动会刷新这个技能的冷却时间并充能一枚符文，持续4秒(最多2枚符文)。 主动：瑞兹释放一次魔爆，对命中的第一个敌人造成75/95/115/135/155 + 0.55 × 法术强度 + 0.02 × 当前资源魔法伤害。如果目标带有涌动，则它会将其消耗，使这个技能造成50/75/100/125/150%伤害提升并弹射至附近带有涌动的敌人们。 如果2枚符文已被充能，瑞兹就会释放所有符文的能量，来为瑞兹提供持续2秒的28/32/36/40/44%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeQWrapper.png",
        "cooldown": "5",
        "cost": "40/38/36/34/32",
        "range": "1000",
        "numericDetail": "技能文本：被动：符文禁锢和法术涌动会刷新这个技能的冷却时间并充能一枚符文，持续4秒(最多2枚符文)。 主动：瑞兹释放一次魔爆，对命中的第一个敌人造成75/95/115/135/155 + 0.55 × 法术强度 + 0.02 × 当前资源魔法伤害。如果目标带有涌动，则它会将其消耗，使这个技能造成50/75/100/125/150%伤害提升并弹射至附近带有涌动的敌人们。 如果2枚符文已被充能，瑞兹就会释放所有符文的能量，来为瑞兹提供持续2秒的28/32/36/40/44%移动速度。\n等级成长：伤害=75/95/115/135/155；移动速度=28/32/36/40/44%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "符文禁锢",
        "description": "瑞兹造成60/90/120/150/180 + 0.6 × 法术强度 + 0.03 × 当前资源魔法伤害和持续1.5秒的50%减速。如果目标带有涌动，则它会将其消耗，使这个技能造成禁锢而非减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeW.png",
        "cooldown": "11/10.5/10/9.5/9",
        "cost": "50/60/70/80/90",
        "range": "615",
        "numericDetail": "技能文本：瑞兹造成60/90/120/150/180 + 0.6 × 法术强度 + 0.03 × 当前资源魔法伤害和持续1.5秒的50%减速。如果目标带有涌动，则它会将其消耗，使这个技能造成禁锢而非减速。\n等级成长：伤害=60/90/120/150/180",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "法术涌动",
        "description": "瑞兹发射一颗法球，造成60/90/120/150/180 + 0.5 × 法术强度 + 0.02 × 当前资源魔法伤害并施加持续4秒的涌动给目标和附近的敌人们。已被涌动影响的敌人们将使其进一步扩散。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeE.png",
        "cooldown": "3.5/3.25/3/2.75/2.5",
        "cost": "35/45/55/65/75",
        "range": "615",
        "numericDetail": "技能文本：瑞兹发射一颗法球，造成60/90/120/150/180 + 0.5 × 法术强度 + 0.02 × 当前资源魔法伤害并施加持续4秒的涌动给目标和附近的敌人们。已被涌动影响的敌人们将使其进一步扩散。\n等级成长：伤害=60/90/120/150/180",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "曲境折跃",
        "description": "被动： 超负荷对带有涌动的目标的伤害加成提升至50/75/100%。 主动：瑞兹开启一个前往另一个位置的传送门。在2秒后，传送门附近的所有友军都会被传送到该位置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeR.png",
        "cooldown": "180/160/140",
        "cost": "100",
        "range": "3000",
        "numericDetail": "技能文本：被动： 超负荷对带有涌动的目标的伤害加成提升至50/75/100%。 主动：瑞兹开启一个前往另一个位置的传送门。在2秒后，传送门附近的所有友军都会被传送到该位置。\n补充数值：如果瑞兹被定身或限制，那么传送门就会被取消。\n等级成长：超负荷伤害提升=50/75/100%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60018",
    "key": "Tristana",
    "name": "麦林炮手",
    "title": "崔丝塔娜",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Tristana.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 640,
      "hpPerLevel": 102,
      "hpRegen": 4,
      "hpRegenPerLevel": 0.5,
      "resource": 300,
      "resourcePerLevel": 32,
      "resourceRegen": 7.2,
      "resourceRegenPerLevel": 0.45,
      "attackDamage": 60,
      "attackDamagePerLevel": 3.4,
      "attackSpeed": 0.656,
      "attackSpeedPerLevel": 1.5,
      "armor": 30,
      "armorPerLevel": 4,
      "magicResist": 28,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "瞄准",
        "description": "崔丝塔娜的攻击距离和爆炸火花及毁灭射击的施放距离提升0–150（1–18级）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Tristana_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：崔丝塔娜的攻击距离和爆炸火花及毁灭射击的施放距离提升0–150（1–18级）。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "急速射击",
        "description": "崔丝塔娜开始全自动射击，获得持续7秒的60/75/90/105/120%攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaQ.png",
        "cooldown": "20/19/18/17/16",
        "cost": "15/20/25/30/35",
        "range": "20",
        "numericDetail": "技能文本：崔丝塔娜开始全自动射击，获得持续7秒的60/75/90/105/120%攻击速度。\n等级成长：攻击速度=60/75/90/105/120%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "火箭跳跃",
        "description": "崔丝塔娜将自己推送出去，在着陆时造成70/105/140/175/210 + 1 × 额外攻击力 + 0.5 × 法术强度魔法伤害和持续2秒的40%减速。 参与击杀后，或者满层爆炸火花爆炸后，会重置这个技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaW.png",
        "cooldown": "22/20/18/16/14",
        "cost": "30/35/40/45/50",
        "range": "900",
        "numericDetail": "技能文本：崔丝塔娜将自己推送出去，在着陆时造成70/105/140/175/210 + 1 × 额外攻击力 + 0.5 × 法术强度魔法伤害和持续2秒的40%减速。 参与击杀后，或者满层爆炸火花爆炸后，会重置这个技能的冷却时间。\n等级成长：伤害=70/105/140/175/210",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "爆炸火花",
        "description": "被动：崔丝塔娜的攻击在击杀敌人时会对周围敌人造成45/60/75/90/105 + 0.25 × 法术强度魔法伤害。 主动：崔丝塔娜将一颗炸弹附着在一名敌人或防御塔上，来在4秒后对周围敌人造成(60/85/110/135/160 + 0.8 × 额外攻击力 + 0.5 × 法术强度) × (1 + (0.4 × 暴击率 × (1 × 暴击伤害 - 1)))物理伤害。崔丝塔娜对带着炸弹的目标进行的每次攻击和技能都会使这个伤害提升25%(最多4层)。 在4层时，这个炸弹会立刻爆炸(最大值为((60/85/110/135/160 + 0.8 × 额外攻击力 + 0.5 × 法术强度) × (1 + (0.4 × 暴击率 × (1 × 暴击伤害 - 1)))) × (1 + (0.25 × 4))物理伤害)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaE.png",
        "cooldown": "16/15.5/15/14.5/14",
        "cost": "50/55/60/65/70",
        "range": "550",
        "numericDetail": "技能文本：被动：崔丝塔娜的攻击在击杀敌人时会对周围敌人造成45/60/75/90/105 + 0.25 × 法术强度魔法伤害。 主动：崔丝塔娜将一颗炸弹附着在一名敌人或防御塔上，来在4秒后对周围敌人造成(60/85/110/135/160 + 0.8 × 额外攻击力 + 0.5 × 法术强度) × (1 + (0.4 × 暴击率 × (1 × 暴击伤害 - 1)))物理伤害。崔丝塔娜对带着炸弹的目标进行的每次攻击和技能都会使这个伤害提升25%(最多4层)。 在4层时，这个炸弹会立刻爆炸(最大值为((60/85/110/135/160 + 0.8 × 额外攻击力 + 0.5 × 法术强度) × (1 + (0.4 × 暴击率 × (1 × 暴击伤害 - 1)))) × (1 + (0.25 × 4))物理伤害)。\n补充数值：主动部分的伤害可通过暴击几率和暴击伤害，效能为40%。 如果用在防御塔上，则爆炸半径翻倍。\n等级成长：被动爆炸伤害=45/60/75/90/105；基础火花伤害=60/85/110/135/160",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "毁灭射击",
        "description": "崔丝塔娜发射一颗大型加农炮弹，对目标造成225/275/325 + 0.7 × 额外攻击力 + 1 × 法术强度魔法伤害，并对其与周围敌人们施加击退和0.4/0.55/0.7秒晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaR.png",
        "cooldown": "100",
        "cost": "100",
        "range": "550",
        "numericDetail": "技能文本：崔丝塔娜发射一颗大型加农炮弹，对目标造成225/275/325 + 0.7 × 额外攻击力 + 1 × 法术强度魔法伤害，并对其与周围敌人们施加击退和0.4/0.55/0.7秒晕眩。\n补充数值：如果这个目标施加了最后一层爆炸火花，那么它会在该单位被击退之后爆炸。\n等级成长：伤害=225/275/325；击退距离=600/800/1000；晕眩时长：=0.4/0.55/0.7",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60023",
    "key": "Tryndamere",
    "name": "蛮族之王",
    "title": "泰达米尔",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Tryndamere.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resourceName": "怒气",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [
      "resourceRegen"
    ],
    "stats": {
      "hp": 696,
      "hpPerLevel": 108,
      "hpRegen": 8.5,
      "hpRegenPerLevel": 0.9,
      "resource": 100,
      "resourcePerLevel": 0,
      "resourceRegen": 0,
      "resourceRegenPerLevel": 0,
      "attackDamage": 66,
      "attackDamagePerLevel": 4.5,
      "attackSpeed": 0.67,
      "attackSpeedPerLevel": 3.4,
      "armor": 33,
      "armorPerLevel": 4.8,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "战斗狂怒",
        "description": "泰达米尔的攻击会为他提供5怒气或在暴击时提供10怒气，并在击杀一个单位后提供10怒气。在脱离战斗状态8秒后，泰达米尔会每秒损失5怒气。 每点怒气提供0.5%暴击几率。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Tryndamere_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：泰达米尔的攻击会为他提供5怒气或在暴击时提供10怒气，并在击杀一个单位后提供10怒气。在脱离战斗状态8秒后，泰达米尔会每秒损失5怒气。 每点怒气提供0.5%暴击几率。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "嗜血杀戮",
        "description": "被动：泰达米尔嗜血成性，获得至多20/35/50/65/80攻击力，基于他的已损失生命值。 主动：泰达米尔消耗他的怒气，回复30/40/50/60/70 + 0.3 × 法术强度外加0.5/0.95/1.4/1.85/2.3 + 0.012 × 法术强度x怒气的生命值(最大值：30/40/50/60/70 + 0.3 × 法术强度 + (1 × 当前资源 × (0.5/0.95/1.4/1.85/2.3 + 0.012 × 法术强度)))。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereQ.png",
        "cooldown": "12",
        "cost": "0",
        "range": "400",
        "numericDetail": "技能文本：被动：泰达米尔嗜血成性，获得至多20/35/50/65/80攻击力，基于他的已损失生命值。 主动：泰达米尔消耗他的怒气，回复30/40/50/60/70 + 0.3 × 法术强度外加0.5/0.95/1.4/1.85/2.3 + 0.012 × 法术强度x怒气的生命值(最大值：30/40/50/60/70 + 0.3 × 法术强度 + (1 × 当前资源 × (0.5/0.95/1.4/1.85/2.3 + 0.012 × 法术强度)))。\n补充数值：在10%剩余生命值时即可获取最大攻击力。\n等级成长：最大伤害=20/35/50/65/80；治疗效果=30/40/50/60/70；每点怒气的治疗量=0.5/0.95/1.4/1.85/2.3",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "蔑视",
        "description": "泰达米尔抛出羞辱之语，使英雄们降低20/35/50/65/80攻击力，持续4秒，并且对逃离泰达米尔的敌人造成30/35/40/45/50%减速，持续3.25秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereW.png",
        "cooldown": "14",
        "cost": "0",
        "range": "850",
        "numericDetail": "技能文本：泰达米尔抛出羞辱之语，使英雄们降低20/35/50/65/80攻击力，持续4秒，并且对逃离泰达米尔的敌人造成30/35/40/45/50%减速，持续3.25秒。\n等级成长：物理伤害削减=20/35/50/65/80；减速=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "旋风斩",
        "description": "泰达米尔旋转并穿过他的敌人，造成80/120/160/200/240 + 1 × 额外攻击力 + 0.8 × 法术强度物理伤害并且每命中一个敌人就会生成2怒气，在命中敌方英雄时提升至5怒气。 这个技能的冷却时间会在泰达米尔暴击时缩短0.75秒，并在对英雄暴击时缩短1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereE.png",
        "cooldown": "12/11/10/9/8",
        "cost": "0",
        "range": "650",
        "numericDetail": "技能文本：泰达米尔旋转并穿过他的敌人，造成80/120/160/200/240 + 1 × 额外攻击力 + 0.8 × 法术强度物理伤害并且每命中一个敌人就会生成2怒气，在命中敌方英雄时提升至5怒气。 这个技能的冷却时间会在泰达米尔暴击时缩短0.75秒，并在对英雄暴击时缩短1.5秒。\n等级成长：伤害=80/120/160/200/240",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "无尽怒火",
        "description": "泰达米尔变得对死亡完全免疫，持续5秒，拒绝将生命值降至30/50/70以下，并瞬间获得50/75/100怒气。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/UndyingRage.png",
        "cooldown": "120/100/80",
        "cost": "0",
        "range": "400",
        "numericDetail": "技能文本：泰达米尔变得对死亡完全免疫，持续5秒，拒绝将生命值降至30/50/70以下，并瞬间获得50/75/100怒气。\n补充数值：这个技能可以在被限制时施放。\n等级成长：最小生命值=30/50/70；怒气获取=50/75/100",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60009",
    "key": "Fiddlesticks",
    "name": "远古恐惧",
    "title": "费德提克",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Fiddlesticks.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
    "tags": [
      "Mage",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 650,
      "hpPerLevel": 106,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.6,
      "resource": 500,
      "resourcePerLevel": 28,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 55,
      "attackDamagePerLevel": 2.65,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.11,
      "armor": 34,
      "armorPerLevel": 4.7,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 480,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "巫骇草人",
        "description": "费德提克的饰品会被替换为草间人。当被敌人发现时，草间人会暂时冒充费德提克。如果费德提克在2秒内没有移动，那么他将冒充成草间人。在6级后，草间人可以显形附近的守卫，持续6秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/FiddlesticksP.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：费德提克的饰品会被替换为草间人。当被敌人发现时，草间人会暂时冒充费德提克。如果费德提克在2秒内没有移动，那么他将冒充成草间人。在6级后，草间人可以显形附近的守卫，持续6秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "恐惧",
        "description": "被动：在非战斗状态且未被敌人看见，或冒充成一个草间人时，如果用一个技能对敌人造成了伤害，那么会使该敌人恐惧1.2/1.4/1.6/1.8/2秒。 主动：恐惧一个目标1.2/1.4/1.6/1.8/2秒并造成(0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度) × 100%当前生命值的魔法伤害。如果目标近期被费德提克恐惧过，那么则会转而造成((0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度) × 100%) × 2当前生命值的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksQ.png",
        "cooldown": "15/14.5/14/13.5/13",
        "cost": "65",
        "range": "575",
        "numericDetail": "技能文本：被动：在非战斗状态且未被敌人看见，或冒充成一个草间人时，如果用一个技能对敌人造成了伤害，那么会使该敌人恐惧1.2/1.4/1.6/1.8/2秒。 主动：恐惧一个目标1.2/1.4/1.6/1.8/2秒并造成(0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度) × 100%当前生命值的魔法伤害。如果目标近期被费德提克恐惧过，那么则会转而造成((0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度) × 100%) × 2当前生命值的魔法伤害。\n补充数值：最小造成40/60/80/100/120魔法伤害，或对近期被费德提克恐惧的目标最小造成80/120/160/200/240魔法伤害。 对小兵和野怪的最大伤害值为400魔法伤害。\n等级成长：持续时间=1.2/1.4/1.6/1.8/2；当前生命值百分比=4/4.5/5/5.5/6%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "五骨丰登",
        "description": "费德提克引导并吸取附近敌人们的灵魂，每秒造成60/90/120/150/180 + 0.45 × 法术强度魔法伤害，持续2秒，外加在结束时造成12/14.5/17/19.5/22%已损失生命值的伤害。费德提克回复相当于25/32.5/40/47.5/55%伤害值的生命值。 如果费德提克在未被打断地结束引导，那么剩余冷却时间缩短60%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksW.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "650",
        "numericDetail": "技能文本：费德提克引导并吸取附近敌人们的灵魂，每秒造成60/90/120/150/180 + 0.45 × 法术强度魔法伤害，持续2秒，外加在结束时造成12/14.5/17/19.5/22%已损失生命值的伤害。费德提克回复相当于25/32.5/40/47.5/55%伤害值的生命值。 如果费德提克在未被打断地结束引导，那么剩余冷却时间缩短60%。\n补充数值：治疗效果基于折前伤害。 对抗野怪时，这个技能造成135%伤害并回复45%实际伤害值的生命值。 对抗小兵时，这个技能造成50%伤害并回复15%实际伤害值的生命值。\n等级成长：每秒伤害=60/90/120/150/180；已损失的生命值伤害=12/14.5/17/19.5/22%；百分比治疗=25/32.5/40/47.5/55%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "夜割",
        "description": "费德提克释放黑暗魔法，造成70/105/140/175/210 + 0.5 × 法术强度魔法伤害并使敌人减速30/35/40/45/50%，持续1.25秒。处于区域正中的敌人还会受到沉默效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksE.png",
        "cooldown": "10/9/8/7/6",
        "cost": "40/45/50/55/60",
        "range": "850",
        "numericDetail": "技能文本：费德提克释放黑暗魔法，造成70/105/140/175/210 + 0.5 × 法术强度魔法伤害并使敌人减速30/35/40/45/50%，持续1.25秒。处于区域正中的敌人还会受到沉默效果。\n等级成长：伤害=70/105/140/175/210；减速=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "群鸦风暴",
        "description": "费德提克引导1.5秒，随后传送并释放杀人鸦群，在5秒里持续造成共(150/250/350 + 0.5 × 法术强度) × 5魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksR.png",
        "cooldown": "140/110/80",
        "cost": "100",
        "range": "800",
        "numericDetail": "技能文本：费德提克引导1.5秒，随后传送并释放杀人鸦群，在5秒里持续造成共(150/250/350 + 0.5 × 法术强度) × 5魔法伤害。\n等级成长：每秒伤害=150/250/350",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60012",
    "key": "Alistar",
    "name": "牛头酋长",
    "title": "阿利斯塔",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Alistar.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    "tags": [
      "Tank",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 685,
      "hpPerLevel": 120,
      "hpRegen": 8.5,
      "hpRegenPerLevel": 0.85,
      "resource": 350,
      "resourcePerLevel": 40,
      "resourceRegen": 8.5,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 62,
      "attackDamagePerLevel": 3.75,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.125,
      "armor": 40,
      "armorPerLevel": 4.7,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "凯旋怒吼",
        "description": "阿利斯塔在对一个敌方英雄造成晕眩或震移时，或附近有一名敌人阵亡时，会获得一层效果。在7层时，他会发出怒吼，治疗自身0.05 × 最大生命值生命值并治疗所有附近的友方英雄(0.05 × 最大生命值) × 1.4生命值。 敌方英雄和史诗级野怪的阵亡会完全充能这个技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Alistar_E.png",
        "cooldown": null,
        "cost": null,
        "range": "950",
        "numericDetail": "技能文本：阿利斯塔在对一个敌方英雄造成晕眩或震移时，或附近有一名敌人阵亡时，会获得一层效果。在7层时，他会发出怒吼，治疗自身0.05 × 最大生命值生命值并治疗所有附近的友方英雄(0.05 × 最大生命值) × 1.4生命值。 敌方英雄和史诗级野怪的阵亡会完全充能这个技能。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "大地粉碎",
        "description": "阿利斯塔使大地破裂，击飞敌人1秒并造成60/100/140/180/220 + 0.8 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Pulverize.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "365",
        "numericDetail": "技能文本：阿利斯塔使大地破裂，击飞敌人1秒并造成60/100/140/180/220 + 0.8 × 法术强度魔法伤害。\n等级成长：伤害=60/100/140/180/220",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "野蛮冲撞",
        "description": "阿利斯塔顶向一名敌人，将其击退并造成55/110/165/220/275 + 1 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Headbutt.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "650",
        "numericDetail": "技能文本：阿利斯塔顶向一名敌人，将其击退并造成55/110/165/220/275 + 1 × 法术强度魔法伤害。\n等级成长：伤害=55/110/165/220/275",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "践踏",
        "description": "阿利斯塔践踏地面，变为幽灵状态并在5秒里持续对附近的敌人造成80/110/140/170/200 + 0.7 × 法术强度魔法伤害。每段践踏在至少伤害到一名敌方英雄时会为阿利斯塔提供一层效果。 在5层效果时，阿利斯塔的下一个对英雄打出的攻击会晕眩目标1秒并造成额外的20/35/50/65/80/95/110/125/140/155/170/185/200/215/230/245/260/275（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AlistarE.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "50/55/60/65/70",
        "range": "350",
        "numericDetail": "技能文本：阿利斯塔践踏地面，变为幽灵状态并在5秒里持续对附近的敌人造成80/110/140/170/200 + 0.7 × 法术强度魔法伤害。每段践踏在至少伤害到一名敌方英雄时会为阿利斯塔提供一层效果。 在5层效果时，阿利斯塔的下一个对英雄打出的攻击会晕眩目标1秒并造成额外的20/35/50/65/80/95/110/125/140/155/170/185/200/215/230/245/260/275（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）魔法伤害。\n补充数值：幽灵状态的单位无视其它单位的碰撞体积。\n等级成长：伤害=80/110/140/170/200",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "坚定意志",
        "description": "阿利斯塔立刻净化掉所有限制效果并获得55/65/75%伤害减免，持续7秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FerociousHowl.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "1",
        "numericDetail": "技能文本：阿利斯塔立刻净化掉所有限制效果并获得55/65/75%伤害减免，持续7秒。\n等级成长：伤害减免=55/65/75%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60033",
    "key": "Rammus",
    "name": "披甲龙龟",
    "title": "拉莫斯",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Rammus.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
    "tags": [
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 645,
      "hpPerLevel": 100,
      "hpRegen": 8,
      "hpRegenPerLevel": 0.55,
      "resource": 310,
      "resourcePerLevel": 33,
      "resourceRegen": 7.85,
      "resourceRegenPerLevel": 0.5,
      "attackDamage": 65,
      "attackDamagePerLevel": 2.75,
      "attackSpeed": 0.7,
      "attackSpeedPerLevel": 2.215,
      "armor": 35,
      "armorPerLevel": 4.5,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "锥刺甲壳",
        "description": "拉莫斯获得0.15 × 护甲 + 0.15 × 魔法抗性攻击力。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Armordillo_ScavengeArmor.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：拉莫斯获得0.15 × 护甲 + 0.15 × 魔法抗性攻击力。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "动力冲刺",
        "description": "拉莫斯蜷缩为球状，获得((0.25–0.391（1–18级）) × 1) × 100%移动速度，并在6秒里持续加速至(((0.25–0.391（1–18级）) × 1) × 100%) × 6移动速度。拉莫斯会在与一名敌人碰撞后停下，对附近的敌人们造成80/120/160/200/240 + 1 × 法术强度魔法伤害、击退、和持续1秒的40/50/60/70/80%减速。 再次施放：拉莫斯提前结束这个技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PowerBall.png",
        "cooldown": "12/10.5/9/7.5/6",
        "cost": "60",
        "range": "300",
        "numericDetail": "技能文本：拉莫斯蜷缩为球状，获得((0.25–0.391（1–18级）) × 1) × 100%移动速度，并在6秒里持续加速至(((0.25–0.391（1–18级）) × 1) × 100%) × 6移动速度。拉莫斯会在与一名敌人碰撞后停下，对附近的敌人们造成80/120/160/200/240 + 1 × 法术强度魔法伤害、击退、和持续1秒的40/50/60/70/80%减速。 再次施放：拉莫斯提前结束这个技能。\n等级成长：伤害=80/120/160/200/240；减速=40/50/60/70/80%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "尖刺防御",
        "description": "拉莫斯进入持续7秒的防御姿态，获得(27/32/37/42/47 × (1 + 0.3/0.375/0.45/0.525/0.6)) + 0.3/0.375/0.45/0.525/0.6 × 护甲护甲和(20/25/30/35/40 × (1 + 0.3/0.375/0.45/0.525/0.6)) + 0.3/0.375/0.45/0.525/0.6 × 魔法抗性魔法抗性并对攻击他的敌人们造成15 + 0.1 × 护甲 + 0.1 × 魔法抗性魔法伤害。 再次施放：拉莫斯提前结束这个技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DefensiveBallCurl.png",
        "cooldown": "7",
        "cost": "40",
        "range": "300",
        "numericDetail": "技能文本：拉莫斯进入持续7秒的防御姿态，获得(27/32/37/42/47 × (1 + 0.3/0.375/0.45/0.525/0.6)) + 0.3/0.375/0.45/0.525/0.6 × 护甲护甲和(20/25/30/35/40 × (1 + 0.3/0.375/0.45/0.525/0.6)) + 0.3/0.375/0.45/0.525/0.6 × 魔法抗性魔法抗性并对攻击他的敌人们造成15 + 0.1 × 护甲 + 0.1 × 魔法抗性魔法伤害。 再次施放：拉莫斯提前结束这个技能。\n等级成长：护甲加成=27/32/37/42/47；魔法抗性加成=20/25/30/35/40；百分比护甲加成=30/37.5/45/52.5/60%；百分比魔法抗性加成=30/37.5/45/52.5/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "狂乱嘲讽",
        "description": "拉莫斯嘲讽一个敌方英雄或野怪，强制目标鲁莽地攻击自己1.2/1.4/1.6/1.8/2秒。会对野怪造成80/100/120/140/160 + 0.7 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PuncturingTaunt.png",
        "cooldown": "12",
        "cost": "50",
        "range": "325",
        "numericDetail": "技能文本：拉莫斯嘲讽一个敌方英雄或野怪，强制目标鲁莽地攻击自己1.2/1.4/1.6/1.8/2秒。会对野怪造成80/100/120/140/160 + 0.7 × 法术强度魔法伤害。\n等级成长：持续时间=1.2/1.4/1.6/1.8/2；野怪伤害=80/100/120/140/160",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "冲天猛撞",
        "description": "拉莫斯跃到空中然后猛撞进一个区域，造成150/250/350 + 0.6 × 法术强度魔法伤害和持续1.5秒的30/40/50%减速。如果在动力冲刺状态下施放，那么还会对区域中心的敌人们造成额外的80/120/160 + 0.6 × 法术强度魔法伤害和0.75秒击飞。 拉莫斯随后在3.5秒里持续在区域内引发共3道余震，重复减速效果。 这个技能的距离会从拉莫斯的移动速度中获得提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Tremors2.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：拉莫斯跃到空中然后猛撞进一个区域，造成150/250/350 + 0.6 × 法术强度魔法伤害和持续1.5秒的30/40/50%减速。如果在动力冲刺状态下施放，那么还会对区域中心的敌人们造成额外的80/120/160 + 0.6 × 法术强度魔法伤害和0.75秒击飞。 拉莫斯随后在3.5秒里持续在区域内引发共3道余震，重复减速效果。 这个技能的距离会从拉莫斯的移动速度中获得提升。\n补充数值：这个技能对防御塔造成200%伤害。\n等级成长：伤害=150/250/350；减速=30/40/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60062",
    "key": "MonkeyKing",
    "name": "齐天大圣",
    "title": "孙悟空",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/MonkeyKing.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 610,
      "hpPerLevel": 99,
      "hpRegen": 3.5,
      "hpRegenPerLevel": 0.65,
      "resource": 330,
      "resourcePerLevel": 65,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 66,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.69,
      "attackSpeedPerLevel": 3,
      "armor": 31,
      "armorPerLevel": 4.7,
      "magicResist": 28,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 340,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "金刚不坏",
        "description": "孙悟空获得6–10（1–18级）护甲并且每5秒回复他0.35%的最大生命值。每当他或他的分身用一次攻击或技能击中一名敌方英雄或野怪后，这些加成就会提升100%，持续5秒，最多可叠加5层。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MonkeyKingStoneSkin.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：孙悟空获得6–10（1–18级）护甲并且每5秒回复他0.35%的最大生命值。每当他或他的分身用一次攻击或技能击中一名敌方英雄或野怪后，这些加成就会提升100%，持续5秒，最多可叠加5层。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "粉碎打击",
        "description": "孙悟空和他的分身的下次攻击提升135/145/155/165/175距离，造成20/45/70/95/120 + 0.5 × 额外攻击力额外物理伤害，并移除目标10/15/20/25/30%护甲，持续3秒。 每当孙悟空或他的分身用一次攻击或技能命中一名敌人时，这个技能的冷却时间就会缩短0.5秒。 这个技能会在造成伤害时触发技能特效。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingDoubleAttack.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "20",
        "range": "250/275/300/325/350",
        "numericDetail": "技能文本：孙悟空和他的分身的下次攻击提升135/145/155/165/175距离，造成20/45/70/95/120 + 0.5 × 额外攻击力额外物理伤害，并移除目标10/15/20/25/30%护甲，持续3秒。 每当孙悟空或他的分身用一次攻击或技能命中一名敌人时，这个技能的冷却时间就会缩短0.5秒。 这个技能会在造成伤害时触发技能特效。\n等级成长：伤害=20/45/70/95/120；减少护甲百分比=10/15/20/25/30%；距离=135/145/155/165/175",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "真假猴王",
        "description": "孙悟空突进并变为隐形状态，持续1秒，同时留下一个持续4秒的不能移动的分身。 分身会攻击附近的近期被孙悟空造成过伤害的敌人并会模拟他的终极技能，造成40/45/50/55/60%的常规伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingDecoy.png",
        "cooldown": "22/21/20/19/18",
        "cost": "60/55/50/45/40",
        "range": "275",
        "numericDetail": "技能文本：孙悟空突进并变为隐形状态，持续1秒，同时留下一个持续4秒的不能移动的分身。 分身会攻击附近的近期被孙悟空造成过伤害的敌人并会模拟他的终极技能，造成40/45/50/55/60%的常规伤害。\n补充数值：隐形单位只会被【防御塔】或【真实视野】显形。\n等级成长：伤害百分比=40/45/50/55/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "腾云突击",
        "description": "孙悟空突进至目标敌人处，并放出多个分身来对附近的至多2个额外敌人进行模拟突进。每个被击中的敌人会受到80/120/160/200/240 + 1 × 法术强度魔法伤害。他和他的分身获得持续5秒的40/45/50/55/60%攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingNimbus.png",
        "cooldown": "10/9.25/8.5/7.75/7",
        "cost": "30/35/40/45/50",
        "range": "650",
        "numericDetail": "技能文本：孙悟空突进至目标敌人处，并放出多个分身来对附近的至多2个额外敌人进行模拟突进。每个被击中的敌人会受到80/120/160/200/240 + 1 × 法术强度魔法伤害。他和他的分身获得持续5秒的40/45/50/55/60%攻击速度。\n等级成长：伤害=80/120/160/200/240；攻击速度=40/45/50/55/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "大闹天宫",
        "description": "孙悟空获得20%移动速度并旋转他的金箍棒，击飞 附近的敌人0.6秒并在2秒里持续造成共(1.375 × 攻击力) × 2加上 (4/6/8%) × 2最大生命值的物理伤害。 这个技能可以在8秒里再施放一次，随后会进入冷却阶段。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingSpinToWin.png",
        "cooldown": "130/110/90",
        "cost": "100",
        "range": "315",
        "numericDetail": "技能文本：孙悟空获得20%移动速度并旋转他的金箍棒，击飞 附近的敌人0.6秒并在2秒里持续造成共(1.375 × 攻击力) × 2加上 (4/6/8%) × 2最大生命值的物理伤害。 这个技能可以在8秒里再施放一次，随后会进入冷却阶段。\n补充数值：对野怪的伤害上限为2秒里共(200/400/600（英雄等级1/11/16）) × 2伤害。\n等级成长：最大生命值伤害=8/12/16%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60037",
    "key": "Sona",
    "name": "琴瑟仙女",
    "title": "娑娜",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Sona.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
    "tags": [
      "Support",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 550,
      "hpPerLevel": 91,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 340,
      "resourcePerLevel": 45,
      "resourceRegen": 11.5,
      "resourceRegenPerLevel": 0.4,
      "attackDamage": 49,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.644,
      "attackSpeedPerLevel": 2.3,
      "armor": 26,
      "armorPerLevel": 4.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "能量和弦",
        "description": "渐入佳音：娑娜可通过出色地使用她的基础技能来获得【渐入佳音】层数。每层会为她永久提供+0.5基础技能急速，至多提供 60基础技能急速。当她达到 60基础技能急速时，将不再进一步获得层数，转而使她当前的终极技能冷却时间缩短1.5秒。 能量和弦：在使用3次基础技能后，娑娜的下次攻击将造成额外的20/30/40/50/60/70/80/90/105/120/135/150/165/180/195/210/225/240（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 0.2 × 法术强度魔法伤害并会基于娑娜最新激活的乐曲来施加一个额外效果。 英勇赞美诗：该次攻击转而造成30/45/60/75/90/105/120/135/157.5/180/202.5/225/247.5/270/292.5/315/337.5/360（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 0.3 × 法术强度魔法伤害。坚毅咏叹调：使目标造成的伤害降低(0.25 + 0.0004 × 法术强度) × 100%，持续3秒。迅捷奏鸣曲：对目标施加持续2秒的(0.5 + 0.0004 × 法术强度) × 100%减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sona_Passive_Charged.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：渐入佳音：娑娜可通过出色地使用她的基础技能来获得【渐入佳音】层数。每层会为她永久提供+0.5基础技能急速，至多提供 60基础技能急速。当她达到 60基础技能急速时，将不再进一步获得层数，转而使她当前的终极技能冷却时间缩短1.5秒。 能量和弦：在使用3次基础技能后，娑娜的下次攻击将造成额外的20/30/40/50/60/70/80/90/105/120/135/150/165/180/195/210/225/240（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 0.2 × 法术强度魔法伤害并会基于娑娜最新激活的乐曲来施加一个额外效果。 英勇赞美诗：该次攻击转而造成30/45/60/75/90/105/120/135/157.5/180/202.5/225/247.5/270/292.5/315/337.5/360（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 0.3 × 法术强度魔法伤害。坚毅咏叹调：使目标造成的伤害降低(0.25 + 0.0004 × 法术强度) × 100%，持续3秒。迅捷奏鸣曲：对目标施加持续2秒的(0.5 + 0.0004 × 法术强度) × 100%减速。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "英勇赞美诗",
        "description": "娑娜对相距最近的2名敌人造成50/85/120/155/190 + 0.4 × 法术强度魔法伤害，优先以英雄为目标。她随后会开始一段新的旋律。这个技能每对一名敌方英雄造成伤害就会获得1层渐入佳音。 旋律：娑娜获得一个持续3秒的光环，来使其中的友方英雄在5秒内的下一次攻击附带10/15/20/25/30 + 0.1 × 法术强度魔法伤害。 能量和弦—断奏：【能量和弦】造成额外伤害 (30/45/60/75/90/105/120/135/157.5/180/202.5/225/247.5/270/292.5/315/337.5/360（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 0.3 × 法术强度总魔法伤害)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaQ.png",
        "cooldown": "8",
        "cost": "50/55/60/65/70",
        "range": "825",
        "numericDetail": "技能文本：娑娜对相距最近的2名敌人造成50/85/120/155/190 + 0.4 × 法术强度魔法伤害，优先以英雄为目标。她随后会开始一段新的旋律。这个技能每对一名敌方英雄造成伤害就会获得1层渐入佳音。 旋律：娑娜获得一个持续3秒的光环，来使其中的友方英雄在5秒内的下一次攻击附带10/15/20/25/30 + 0.1 × 法术强度魔法伤害。 能量和弦—断奏：【能量和弦】造成额外伤害 (30/45/60/75/90/105/120/135/157.5/180/202.5/225/247.5/270/292.5/315/337.5/360（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18） + 0.3 × 法术强度总魔法伤害)。\n等级成长：伤害(主动)=50/85/120/155/190；伤害(旋律)=10/15/20/25/30",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "坚毅咏叹调",
        "description": "主动：娑娜为她自己和一名附近的友方英雄回复30/45/60/75/90 + 0.3 × 法术强度生命值，优先以伤势最重的英雄为目标。她随后会开始一段新的旋律。 旋律：娑娜获得一个持续3秒的光环，来为其中的友方英雄提供持续1.5秒的25/45/65/85/105 + 0.25 × 法术强度护盾值。 每当你治疗了一名受伤的友方英雄，或用这个护盾为一名友方英雄格挡了至少25/45/65/85/105伤害时，都会获得一层渐入佳音。 能量和弦—渐弱：【能量和弦】也会使目标造成的物理和魔法伤害降低(0.25 + 0.0004 × 法术强度) × 100%，持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaW.png",
        "cooldown": "10",
        "cost": "80/85/90/95/100",
        "range": "1000",
        "numericDetail": "技能文本：主动：娑娜为她自己和一名附近的友方英雄回复30/45/60/75/90 + 0.3 × 法术强度生命值，优先以伤势最重的英雄为目标。她随后会开始一段新的旋律。 旋律：娑娜获得一个持续3秒的光环，来为其中的友方英雄提供持续1.5秒的25/45/65/85/105 + 0.25 × 法术强度护盾值。 每当你治疗了一名受伤的友方英雄，或用这个护盾为一名友方英雄格挡了至少25/45/65/85/105伤害时，都会获得一层渐入佳音。 能量和弦—渐弱：【能量和弦】也会使目标造成的物理和魔法伤害降低(0.25 + 0.0004 × 法术强度) × 100%，持续3秒。\n等级成长：治疗效果(主动)=30/45/60/75/90；护盾(旋律)=25/45/65/85/105",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "迅捷奏鸣曲",
        "description": "主动：她开始一段新的旋律并为自身提供(0.2 + 0.0002 × 法术强度) × 100%移动速度，持续3秒，如果她未受到伤害则延长至最多7秒。 旋律：娑娜获得一个持续3秒的光环，来为其中的友方英雄提供(0.1/0.12/0.14/0.16/0.18 + 0.0002 × 法术强度) × 100%移动速度，持续3秒。 能量和弦—节奏：【能量和弦】还会对目标造成持续2秒的(0.5 + 0.0004 × 法术强度) × 100%的减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaE.png",
        "cooldown": "14",
        "cost": "65",
        "range": "430",
        "numericDetail": "技能文本：主动：她开始一段新的旋律并为自身提供(0.2 + 0.0002 × 法术强度) × 100%移动速度，持续3秒，如果她未受到伤害则延长至最多7秒。 旋律：娑娜获得一个持续3秒的光环，来为其中的友方英雄提供(0.1/0.12/0.14/0.16/0.18 + 0.0002 × 法术强度) × 100%移动速度，持续3秒。 能量和弦—节奏：【能量和弦】还会对目标造成持续2秒的(0.5 + 0.0004 × 法术强度) × 100%的减速。\n等级成长：移动速度=10/12/14/16/18%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "狂舞终乐章",
        "description": "娑娜弹出一段不可抗拒的音符，对敌人造成1.5秒晕眩和150/250/350 + 0.5 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaR.png",
        "cooldown": "140/120/100",
        "cost": "100",
        "range": "900",
        "numericDetail": "技能文本：娑娜弹出一段不可抗拒的音符，对敌人造成1.5秒晕眩和150/250/350 + 0.5 × 法术强度魔法伤害。\n补充数值：那些知道如何跳舞的敌人，在晕眩期间将会跳舞。\n等级成长：伤害=150/250/350",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60054",
    "key": "Malphite",
    "name": "熔岩巨兽",
    "title": "墨菲特",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Malphite.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
    "tags": [
      "Tank",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 665,
      "hpPerLevel": 104,
      "hpRegen": 7,
      "hpRegenPerLevel": 0.55,
      "resource": 280,
      "resourcePerLevel": 60,
      "resourceRegen": 7.3,
      "resourceRegenPerLevel": 0.55,
      "attackDamage": 62,
      "attackDamagePerLevel": 4,
      "attackSpeed": 0.736,
      "attackSpeedPerLevel": 3.4,
      "armor": 40,
      "armorPerLevel": 4.95,
      "magicResist": 28,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "花岗岩护盾",
        "description": "在未受到伤害8/7/6（英雄等级1/7/13）秒后，墨菲特为自身提供0.1 × 最大生命值护盾值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Malphite_GraniteShield.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在未受到伤害8/7/6（英雄等级1/7/13）秒后，墨菲特为自身提供0.1 × 最大生命值护盾值。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "地震碎片",
        "description": "墨菲特朝一名敌人发出一块大地碎片，造成70/120/170/220/270 + 0.6 × 法术强度魔法伤害和持续3秒的20/25/30/35/40%减速。墨菲特还会窃取该被减速的数额，从而将它作为持续3秒的移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SeismicShard.png",
        "cooldown": "8",
        "cost": "70/75/80/85/90",
        "range": "625",
        "numericDetail": "技能文本：墨菲特朝一名敌人发出一块大地碎片，造成70/120/170/220/270 + 0.6 × 法术强度魔法伤害和持续3秒的20/25/30/35/40%减速。墨菲特还会窃取该被减速的数额，从而将它作为持续3秒的移动速度。\n等级成长：伤害=70/120/170/220/270；减速=20/25/30/35/40%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "雷霆拍击",
        "description": "墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Obduracy.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "30/35/40/45/50",
        "range": "400",
        "numericDetail": "技能文本：墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。\n补充数值：对野怪造成180%伤害。\n等级成长：护甲=10/15/20/25/30%；伤害=30/40/50/60/70；余波溅射伤害=15/25/35/45/55",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "大地震颤",
        "description": "墨菲特锤击地面，对周围敌人造成60/95/130/165/200 + 0.4 × 护甲 + 0.6 × 法术强度魔法伤害并减少他们30/35/40/45/50%攻击速度，持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Landslide.png",
        "cooldown": "7",
        "cost": "50/55/60/65/70",
        "range": "400",
        "numericDetail": "技能文本：墨菲特锤击地面，对周围敌人造成60/95/130/165/200 + 0.4 × 护甲 + 0.6 × 法术强度魔法伤害并减少他们30/35/40/45/50%攻击速度，持续3秒。\n等级成长：伤害=60/95/130/165/200；攻击速度减少=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "势不可挡",
        "description": "墨菲特携着山崩之力冲锋，进行不可阻挡的突进。在突进结束时，墨菲特会击飞1.5秒并造成200/300/400 + 0.9 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/UFSlash.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "1000",
        "numericDetail": "技能文本：墨菲特携着山崩之力冲锋，进行不可阻挡的突进。在突进结束时，墨菲特会击飞1.5秒并造成200/300/400 + 0.9 × 法术强度魔法伤害。\n等级成长：伤害=200/300/400",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60075",
    "key": "Nasus",
    "name": "沙漠死神",
    "title": "内瑟斯",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Nasus.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 650,
      "hpPerLevel": 104,
      "hpRegen": 9,
      "hpRegenPerLevel": 0.9,
      "resource": 326,
      "resourcePerLevel": 62,
      "resourceRegen": 7.45,
      "resourceRegenPerLevel": 0.5,
      "attackDamage": 67,
      "attackDamagePerLevel": 4,
      "attackSpeed": 0.638,
      "attackSpeedPerLevel": 3.48,
      "armor": 34,
      "armorPerLevel": 4.7,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 350,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "吞噬灵魂",
        "description": "内瑟斯拥有额外的12/18/24（英雄等级1/7/13）%生命偷取。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Nasus_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：内瑟斯拥有额外的12/18/24（英雄等级1/7/13）%生命偷取。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "汲魂痛击",
        "description": "内瑟斯的下次攻击造成40/60/80/100/120 + 1 × 攻击力 + 1 × 状态层数物理伤害。用这个攻击击杀一名敌人后，会使其伤害永久提升3，击杀英雄、大型小兵和大型野怪的伤害提升为12。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusQ.png",
        "cooldown": "7.5/6.5/5.5/4.5/3.5",
        "cost": "20",
        "range": "255",
        "numericDetail": "技能文本：内瑟斯的下次攻击造成40/60/80/100/120 + 1 × 攻击力 + 1 × 状态层数物理伤害。用这个攻击击杀一名敌人后，会使其伤害永久提升3，击杀英雄、大型小兵和大型野怪的伤害提升为12。\n补充数值：这个技能会在造成伤害时触发技能特效。 这个技能可以暴击，造成(1 × 暴击伤害 × (40/60/80/100/120 + 1 × 攻击力)) + 1 × 状态层数物理伤害。\n等级成长：基础伤害=40/60/80/100/120",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "枯萎",
        "description": "内瑟斯使一名英雄衰老，使其减速35%，并在5秒内持续提升至47/59/71/83/95%。目标的攻击速度也会降低，相当于该减速幅度的75%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "80",
        "range": "700",
        "numericDetail": "技能文本：内瑟斯使一名英雄衰老，使其减速35%，并在5秒内持续提升至47/59/71/83/95%。目标的攻击速度也会降低，相当于该减速幅度的75%。\n等级成长：最大减速效果=47/59/71/83/95%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "灵魂烈焰",
        "description": "内瑟斯引发一团灵魂烈焰，造成50/80/110/140/170 + 0.6 × 法术强度魔法伤害。区域内的敌人们会失去30/35/40/45/50%护甲并在5秒里持续受到共(10/16/22/28/34 + 0.12 × 法术强度) × 5魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusE.png",
        "cooldown": "12",
        "cost": "60/70/80/90/100",
        "range": "650",
        "numericDetail": "技能文本：内瑟斯引发一团灵魂烈焰，造成50/80/110/140/170 + 0.6 × 法术强度魔法伤害。区域内的敌人们会失去30/35/40/45/50%护甲并在5秒里持续受到共(10/16/22/28/34 + 0.12 × 法术强度) × 5魔法伤害。\n等级成长：初始伤害=50/80/110/140/170；每秒伤害=10/16/22/28/34；减少护甲百分比=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "死神降临",
        "description": "沙漠风暴赐予内瑟斯力量，使他在15秒的持续时间内获得300/450/600最大生命值，以及40/55/70护甲与魔法抗性。 在风暴肆虐时，他每秒对周围目标造成(0.03/0.04/0.05 + 0.0001 × 法术强度) × 100%最大生命值的魔法伤害，并且汲魂痛击的冷却时间缩短50%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "400",
        "numericDetail": "技能文本：沙漠风暴赐予内瑟斯力量，使他在15秒的持续时间内获得300/450/600最大生命值，以及40/55/70护甲与魔法抗性。 在风暴肆虐时，他每秒对周围目标造成(0.03/0.04/0.05 + 0.0001 × 法术强度) × 100%最大生命值的魔法伤害，并且汲魂痛击的冷却时间缩短50%。\n补充数值：风暴每秒伤害的最大值为240。\n等级成长：额外生命值=300/450/600；最大生命值百分比=3/4/5%；额外护甲和魔法抗性=40/55/70",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60032",
    "key": "Amumu",
    "name": "殇之木乃伊",
    "title": "阿木木",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Amumu.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
    "tags": [
      "Tank",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 685,
      "hpPerLevel": 94,
      "hpRegen": 9,
      "hpRegenPerLevel": 0.85,
      "resource": 285,
      "resourcePerLevel": 40,
      "resourceRegen": 7.4,
      "resourceRegenPerLevel": 0.55,
      "attackDamage": 57,
      "attackDamagePerLevel": 3.8,
      "attackSpeed": 0.736,
      "attackSpeedPerLevel": 2.18,
      "armor": 33,
      "armorPerLevel": 4,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "诅咒之触",
        "description": "阿木木的攻击会诅咒他的敌人3秒，使其从所有来源的魔法伤害中多承受额外的10%真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Amumu_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：阿木木的攻击会诅咒他的敌人3秒，使其从所有来源的魔法伤害中多承受额外的10%真实伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "绷带牵引",
        "description": "阿木木掷出一条绷带，然后将他拉向命中的第一个敌人，使其晕眩1秒，并造成70/95/120/145/170 + 0.85 × 法术强度魔法伤害。 这个技能有2层充能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BandageToss.png",
        "cooldown": "3",
        "cost": "50",
        "range": "1100",
        "numericDetail": "技能文本：阿木木掷出一条绷带，然后将他拉向命中的第一个敌人，使其晕眩1秒，并造成70/95/120/145/170 + 0.85 × 法术强度魔法伤害。 这个技能有2层充能。\n等级成长：伤害=70/95/120/145/170；充能时间=16/15/14/13/12",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "绝望光环",
        "description": "开启：阿木木开始哭泣，每秒对附近的敌人们造成10外加1/1.25/1.5/1.75/2 + 0.005 × 法术强度%最大生命值的魔法伤害并刷新诅咒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AuraofDespair.png",
        "cooldown": "1",
        "cost": "8",
        "range": "300",
        "numericDetail": "技能文本：开启：阿木木开始哭泣，每秒对附近的敌人们造成10外加1/1.25/1.5/1.75/2 + 0.005 × 法术强度%最大生命值的魔法伤害并刷新诅咒。\n等级成长：%生命值伤害=1/1.25/1.5/1.75/2%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "阿木木的愤怒",
        "description": "被动：阿木木受到的物理伤害降低5/7/9/11/13 + 0.03 × 额外护甲 + 0.03 × 额外魔法抗性。此外，当阿木木被一次攻击命中时，这个技能的冷却时间会缩短0.75秒。 主动：阿木木大发脾气，对附近的敌人们造成65/95/125/155/185 + 0.5 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Tantrum.png",
        "cooldown": "9/8/7/6/5",
        "cost": "35",
        "range": "350",
        "numericDetail": "技能文本：被动：阿木木受到的物理伤害降低5/7/9/11/13 + 0.03 × 额外护甲 + 0.03 × 额外魔法抗性。此外，当阿木木被一次攻击命中时，这个技能的冷却时间会缩短0.75秒。 主动：阿木木大发脾气，对附近的敌人们造成65/95/125/155/185 + 0.5 × 法术强度魔法伤害。\n补充数值：伤害降低效果无法将伤害降至50%以下。\n等级成长：伤害减免=5/7/9/11/13；伤害=65/95/125/155/185",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "木乃伊之咒",
        "description": "阿木木用绷带将周围敌方单位通通缠住，将其晕眩1.5秒，造成200/300/400 + 0.8 × 法术强度魔法伤害并施加诅咒效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CurseoftheSadMummy.png",
        "cooldown": "150/125/100",
        "cost": "100/150/200",
        "range": "550",
        "numericDetail": "技能文本：阿木木用绷带将周围敌方单位通通缠住，将其晕眩1.5秒，造成200/300/400 + 0.8 × 法术强度魔法伤害并施加诅咒效果。\n补充数值：这个技能会使敌人中断位移。\n等级成长：伤害=200/300/400",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60021",
    "key": "MissFortune",
    "name": "赏金猎人",
    "title": "厄运小姐",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/MissFortune.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 625,
      "hpPerLevel": 100,
      "hpRegen": 3.75,
      "hpRegenPerLevel": 0.65,
      "resource": 300,
      "resourcePerLevel": 40,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 55,
      "attackDamagePerLevel": 2.4,
      "attackSpeed": 0.656,
      "attackSpeedPerLevel": 3,
      "armor": 25,
      "armorPerLevel": 4,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "厄运的眷顾",
        "description": "在攻击一个新目标时，厄运小姐的攻击会造成额外的0.5/0.6/0.7/0.8/0.9/1（英雄等级1/4/7/9/11/13） × 攻击力物理伤害。 触发厄运的眷顾时会使大步流星的冷却时间缩短(2) × 技能冷却修正系数秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MissFortune_W.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在攻击一个新目标时，厄运小姐的攻击会造成额外的0.5/0.6/0.7/0.8/0.9/1（英雄等级1/4/7/9/11/13） × 攻击力物理伤害。 触发厄运的眷顾时会使大步流星的冷却时间缩短(2) × 技能冷却修正系数秒。\n补充数值：在攻击一个新目标时，厄运小姐的攻击会造成额外的0.5/0.6/0.7/0.8/0.9/1（英雄等级1/4/7/9/11/13） × 攻击力物理伤害。 触发厄运的眷顾时会使大步流星的冷却时间缩短(2) × 技能冷却修正系数秒。 对小兵造成(0.5/0.6/0.7/0.8/0.9/1（英雄等级1/4/7/9/11/13） × 攻击力) × 0.5伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "一箭双雕",
        "description": "厄运小姐发射一次弹跳射击，对一个敌人及其身后的另一个敌人造成20/45/70/95/120 + 1 × 攻击力 + 0.35 × 法术强度物理伤害。 第二段射击可以暴击以造成(20/45/70/95/120 + 1 × 攻击力 + 0.35 × 法术强度) × (1 + (0.5 × (1 × 暴击伤害 - 1)))物理伤害。如果第一段射击击杀了目标，则第二段射击必定暴击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneRicochetShot.png",
        "cooldown": "7/6/5/4/3",
        "cost": "40",
        "range": "650",
        "numericDetail": "技能文本：厄运小姐发射一次弹跳射击，对一个敌人及其身后的另一个敌人造成20/45/70/95/120 + 1 × 攻击力 + 0.35 × 法术强度物理伤害。 第二段射击可以暴击以造成(20/45/70/95/120 + 1 × 攻击力 + 0.35 × 法术强度) × (1 + (0.5 × (1 × 暴击伤害 - 1)))物理伤害。如果第一段射击击杀了目标，则第二段射击必定暴击。\n补充数值：两段射击都可以施加攻击特效。\n等级成长：伤害=20/45/70/95/120",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "大步流星",
        "description": "被动：如果4秒内没有受到伤害，厄运小姐就会获得30/35/40/45/50移动速度。再过3秒后，这个加成会提升至60/70/80/90/100。 主动：获得被动效果的全额移动速度加成并提供40/55/70/85/100%攻击速度，持续4 秒。 厄运的眷顾会使这个技能的冷却时间缩短(2) × 技能冷却修正系数秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneViciousStrikes.png",
        "cooldown": "12",
        "cost": "45",
        "range": "600",
        "numericDetail": "技能文本：被动：如果4秒内没有受到伤害，厄运小姐就会获得30/35/40/45/50移动速度。再过3秒后，这个加成会提升至60/70/80/90/100。 主动：获得被动效果的全额移动速度加成并提供40/55/70/85/100%攻击速度，持续4 秒。 厄运的眷顾会使这个技能的冷却时间缩短(2) × 技能冷却修正系数秒。\n等级成长：攻击速度=40/55/70/85/100%；移动速度=30/35/40/45/50；最大移动速度=60/70/80/90/100",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "枪林弹雨",
        "description": "厄运小姐发射一阵弹雨，来显形一个区域，造成(0.4 + 0.0006 × 法术强度) × 100%减速和每秒35/50/65/80/95 + 0.6 × 法术强度魔法伤害，持续2秒(总共(35/50/65/80/95 + 0.6 × 法术强度) × 2魔法伤害)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneScattershot.png",
        "cooldown": "18/17/16/15/14",
        "cost": "80",
        "range": "1000",
        "numericDetail": "技能文本：厄运小姐发射一阵弹雨，来显形一个区域，造成(0.4 + 0.0006 × 法术强度) × 100%减速和每秒35/50/65/80/95 + 0.6 × 法术强度魔法伤害，持续2秒(总共(35/50/65/80/95 + 0.6 × 法术强度) × 2魔法伤害)。\n等级成长：每秒伤害=35/50/65/80/95",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "弹幕时间",
        "description": "厄运小姐向前方锥形地带引导一阵弹幕，3秒内持续发射共14/16/18波子弹，每波弹幕造成20/30/40 + 0.6 × 攻击力 + 0.25 × 法术强度物理伤害(总共(20/30/40 + 0.6 × 攻击力 + 0.25 × 法术强度) × 14/16/18物理伤害)。 每一波均可触发暴击，造成(20/30/40 + 0.6 × 攻击力 + 0.25 × 法术强度) × (1 + (0.3 × (1 × 暴击伤害 - 1)))物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneBulletTime.png",
        "cooldown": "120/110/100",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：厄运小姐向前方锥形地带引导一阵弹幕，3秒内持续发射共14/16/18波子弹，每波弹幕造成20/30/40 + 0.6 × 攻击力 + 0.25 × 法术强度物理伤害(总共(20/30/40 + 0.6 × 攻击力 + 0.25 × 法术强度) × 14/16/18物理伤害)。 每一波均可触发暴击，造成(20/30/40 + 0.6 × 攻击力 + 0.25 × 法术强度) × (1 + (0.3 × (1 × 暴击伤害 - 1)))物理伤害。\n等级成长：弹织成幕=14/16/18",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60096",
    "key": "KogMaw",
    "name": "深渊巨口",
    "title": "克格莫",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/KogMaw.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 635,
      "hpPerLevel": 99,
      "hpRegen": 3.75,
      "hpRegenPerLevel": 0.55,
      "resource": 325,
      "resourcePerLevel": 40,
      "resourceRegen": 8.75,
      "resourceRegenPerLevel": 0.7,
      "attackDamage": 61,
      "attackDamagePerLevel": 3.1,
      "attackSpeed": 0.665,
      "attackSpeedPerLevel": 2.65,
      "armor": 24,
      "armorPerLevel": 4.45,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 500,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "来自艾卡西亚的惊喜",
        "description": "在阵亡后的4秒里，克格莫能够继续移动，能够无视单位碰撞体积，并且获得10%移动速度，在此期间持续提升至50%移动速度。持续时间结束时，他会爆炸并对附近敌人造成140–650（1–18级）真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/KogMaw_IcathianSurprise.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在阵亡后的4秒里，克格莫能够继续移动，能够无视单位碰撞体积，并且获得10%移动速度，在此期间持续提升至50%移动速度。持续时间结束时，他会爆炸并对附近敌人造成140–650（1–18级）真实伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "腐蚀唾液",
        "description": "被动：克格莫获得5/10/15/20/25%攻击速度。 主动：克格莫抛射出一团腐蚀性的唾沫，对命中的第一个敌人造成80/125/170/215/260 + 0.9 × 法术强度魔法伤害，以及持续4秒的16/20/24/28/32%护甲和魔法抗性击碎。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawQ.png",
        "cooldown": "7",
        "cost": "40",
        "range": "1175",
        "numericDetail": "技能文本：被动：克格莫获得5/10/15/20/25%攻击速度。 主动：克格莫抛射出一团腐蚀性的唾沫，对命中的第一个敌人造成80/125/170/215/260 + 0.9 × 法术强度魔法伤害，以及持续4秒的16/20/24/28/32%护甲和魔法抗性击碎。\n等级成长：攻击速度=5/10/15/20/25%；伤害=80/125/170/215/260；护甲和魔法抗性击碎=16/20/24/28/32%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "生化弹幕",
        "description": "克格莫获得130/150/170/190/210攻击距离，并且他的攻击附带额外的((3/3.75/4.5/5.25/6 + 0.015 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害 攻击特效，持续8秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawBioArcaneBarrage.png",
        "cooldown": "17",
        "cost": "40",
        "range": "530",
        "numericDetail": "技能文本：克格莫获得130/150/170/190/210攻击距离，并且他的攻击附带额外的((3/3.75/4.5/5.25/6 + 0.015 × 法术强度) × 0.01) × 100%最大生命值的魔法伤害 攻击特效，持续8秒。\n补充数值：至多对野怪造成100魔法伤害。\n等级成长：距离=130/150/170/190/210；最大生命值伤害=3/3.75/4.5/5.25/6%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "虚空淤泥",
        "description": "克格莫呕出胆汁，造成70/110/150/190/230 + 0.65 × 法术强度魔法伤害并留下一条持续3秒的软泥路径。软泥中的敌人们会被减速40/45/50/55/60%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawVoidOoze.png",
        "cooldown": "12",
        "cost": "40/55/70/85/100",
        "range": "1200",
        "numericDetail": "技能文本：克格莫呕出胆汁，造成70/110/150/190/230 + 0.65 × 法术强度魔法伤害并留下一条持续3秒的软泥路径。软泥中的敌人们会被减速40/45/50/55/60%。\n等级成长：伤害=70/110/150/190/230；减速=40/45/50/55/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "活体大炮",
        "description": "克格莫朝一个区域发射一团酸液，造成100/140/180 + 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力外加0.8333%每1%已损失生命值的魔法伤害并使命中的敌人显形2秒。低于40%生命值的敌人们会转而受到(100/140/180 + 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力) × 2魔法伤害。 8秒内的后续发射会消耗额外的40法力(最大值：400法力)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawLivingArtillery.png",
        "cooldown": "2/1.5/1",
        "cost": "40",
        "range": "1300/1550/1800",
        "numericDetail": "技能文本：克格莫朝一个区域发射一团酸液，造成100/140/180 + 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力外加0.8333%每1%已损失生命值的魔法伤害并使命中的敌人显形2秒。低于40%生命值的敌人们会转而受到(100/140/180 + 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力) × 2魔法伤害。 8秒内的后续发射会消耗额外的40法力(最大值：400法力)。\n等级成长：伤害=100/140/180；总法强收益=35/40/45%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60010",
    "key": "Kayle",
    "name": "正义天使",
    "title": "凯尔",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Kayle.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
    "tags": [
      "Mage",
      "Marksman"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 670,
      "hpPerLevel": 92,
      "hpRegen": 5,
      "hpRegenPerLevel": 0.5,
      "resource": 330,
      "resourcePerLevel": 50,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 50,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 1.5,
      "armor": 26,
      "armorPerLevel": 4.2,
      "magicResist": 22,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "登神长阶",
        "description": "凯尔的攻击会随着她提升等级和分配技能点而进阶。 等级1 - 狂热：攻击提供6%攻击速度，持续5秒(最大5层)。在满层时，凯尔变成昂扬状态，获得10% 移动速度。等级6 - 升腾：攻击距离提升至525。等级11 - 炽诚：昂扬攻击会激起焰浪，造成20/23/26/29/32/35/38/41（英雄等级1/12/13/14/15/16/17/18） + 0.25 × 法术强度 + 0.1 × 额外攻击力魔法伤害。等级16 - 超然：永久处于昂扬状态。攻击距离提升至625。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Kayle_P.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：凯尔的攻击会随着她提升等级和分配技能点而进阶。 等级1 - 狂热：攻击提供6%攻击速度，持续5秒(最大5层)。在满层时，凯尔变成昂扬状态，获得10% 移动速度。等级6 - 升腾：攻击距离提升至525。等级11 - 炽诚：昂扬攻击会激起焰浪，造成20/23/26/29/32/35/38/41（英雄等级1/12/13/14/15/16/17/18） + 0.25 × 法术强度 + 0.1 × 额外攻击力魔法伤害。等级16 - 超然：永久处于昂扬状态。攻击距离提升至625。\n补充数值：凯尔的攻击会随着她提升等级和分配技能点而进阶。 等级1 - 狂热：攻击提供6%攻击速度，持续5秒(最大5层)。在满层时，凯尔变成昂扬状态，获得10% 移动速度。等级6 - 升腾：攻击距离提升至525。等级11 - 炽诚：昂扬攻击会激起焰浪，造成20/23/26/29/32/35/38/41（英雄等级1/12/13/14/15/16/17/18） + 0.25 × 法术强度 + 0.1 × 额外攻击力魔法伤害。等级16 - 超然：永久处于昂扬状态。攻击距离提升至625。 焰浪附带法术特效并且能够暴击。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "耀焰冲击",
        "description": "凯尔发射一把星界之剑，它会停留在命中的第一个敌人身上，造成60/90/120/150/180 + 0.5 × 法术强度 + 0.6 × 额外攻击力魔法伤害，持续2秒的25/30/35/40/45%减速，并移除目标及其后方敌人们的15%护甲和魔法抗性，持续4秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleQ.png",
        "cooldown": "12/11/10/9/8",
        "cost": "60/70/80/90/100",
        "range": "900",
        "numericDetail": "技能文本：凯尔发射一把星界之剑，它会停留在命中的第一个敌人身上，造成60/90/120/150/180 + 0.5 × 法术强度 + 0.6 × 额外攻击力魔法伤害，持续2秒的25/30/35/40/45%减速，并移除目标及其后方敌人们的15%护甲和魔法抗性，持续4秒。\n等级成长：伤害=60/90/120/150/180；减速=25/30/35/40/45%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "星界恩典",
        "description": "凯尔为她自身和一名友方英雄灌注圣光，回复55/80/105/130/155 + 0.25 × 法术强度生命值并提供持续2秒的(0.24/0.28/0.32/0.36/0.4 + 0.0008 × 法术强度) × 100%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleW.png",
        "cooldown": "15",
        "cost": "70/75/80/85/90",
        "range": "900",
        "numericDetail": "技能文本：凯尔为她自身和一名友方英雄灌注圣光，回复55/80/105/130/155 + 0.25 × 法术强度生命值并提供持续2秒的(0.24/0.28/0.32/0.36/0.4 + 0.0008 × 法术强度) × 100%移动速度。\n补充数值：如果进行无目标施放，那么这个技能将治愈距离内伤势最重的友方英雄。\n等级成长：治疗效果=55/80/105/130/155；移动速度=24/28/32/36/40%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "星火符刃",
        "description": "被动：攻击造成额外的15/20/25/30/35 + 0.2 × 法术强度 + 0.1 × 额外攻击力魔法伤害。 主动：凯尔的下次攻击变为远程并造成额外的((8/8.5/9/9.5/10 + 0.015 × 法术强度) × 0.01) × 100%已损失生命值的魔法伤害。这个攻击会在凯尔到达11级时升级，使它可以在命中目标时爆炸，对附近敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleE.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "0",
        "range": "550",
        "numericDetail": "技能文本：被动：攻击造成额外的15/20/25/30/35 + 0.2 × 法术强度 + 0.1 × 额外攻击力魔法伤害。 主动：凯尔的下次攻击变为远程并造成额外的((8/8.5/9/9.5/10 + 0.015 × 法术强度) × 0.01) × 100%已损失生命值的魔法伤害。这个攻击会在凯尔到达11级时升级，使它可以在命中目标时爆炸，对附近敌人造成伤害。\n补充数值：这个技能会施加攻击特效和法术特效。对野怪最多造成400额外伤害。\n等级成长：被动伤害=15/20/25/30/35；已损失的生命值伤害=8/8.5/9/9.5/10%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "圣裁之刻",
        "description": "凯尔令一名友方英雄免疫伤害2.5秒，随后会净化该英雄身边的区域并造成200/300/400 + 0.7 × 法术强度 + 1 × 额外攻击力魔法伤害给附近的敌人们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleR.png",
        "cooldown": "160/120/80",
        "cost": "100/50/0",
        "range": "900",
        "numericDetail": "技能文本：凯尔令一名友方英雄免疫伤害2.5秒，随后会净化该英雄身边的区域并造成200/300/400 + 0.7 × 法术强度 + 1 × 额外攻击力魔法伤害给附近的敌人们。\n等级成长：伤害=200/300/400；区域规模=675/675/775",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60026",
    "key": "Zilean",
    "name": "时光守护者",
    "title": "基兰",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Zilean.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
    "tags": [
      "Support",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 574,
      "hpPerLevel": 96,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.5,
      "resource": 452,
      "resourcePerLevel": 50,
      "resourceRegen": 11.35,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 52,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 2.13,
      "armor": 24,
      "armorPerLevel": 5,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "瓶中时光",
        "description": "基兰将时光储存为经验值并能将其提供给他的友军。当他拥有足够的经验值来使一名友方英雄升级时，他就能通过右键点击来传授经验值。基兰自身也会获得等值的经验值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Zilean_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "825",
        "numericDetail": "技能文本：基兰将时光储存为经验值并能将其提供给他的友军。当他拥有足够的经验值来使一名友方英雄升级时，他就能通过右键点击来传授经验值。基兰自身也会获得等值的经验值。\n数值说明：同版本 Riot 客户端公开字段未提供独立固定数值；不以人工估值替代。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "定时炸弹",
        "description": "基兰在目标地点上投掷一个定时炸弹。炸弹会附着在第一个靠近它周围小范围内的单位身上。3秒后炸弹会爆炸，造成75/115/165/230/300 + 0.9 × 法术强度 魔法伤害。 对已被附着了一颗炸弹的单位放置第二颗炸弹时，就会立刻引爆第一个炸弹，并使爆炸范围内的所有敌人晕眩1.1/1.2/1.3/1.4/1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ZileanQ.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "900",
        "numericDetail": "技能文本：基兰在目标地点上投掷一个定时炸弹。炸弹会附着在第一个靠近它周围小范围内的单位身上。3秒后炸弹会爆炸，造成75/115/165/230/300 + 0.9 × 法术强度 魔法伤害。 对已被附着了一颗炸弹的单位放置第二颗炸弹时，就会立刻引爆第一个炸弹，并使爆炸范围内的所有敌人晕眩1.1/1.2/1.3/1.4/1.5秒。\n补充数值：炸弹会优先附着英雄和已被附着了一颗炸弹的敌人。\n等级成长：伤害=75/115/165/230/300；晕眩时长：=1.1/1.2/1.3/1.4/1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "穿梭未来",
        "description": "基兰倒转时间，使他其它基础技能的冷却时间缩短10秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ZileanW.png",
        "cooldown": "14/12/10/8/6",
        "cost": "35",
        "range": "600",
        "numericDetail": "技能文本：基兰倒转时间，使他其它基础技能的冷却时间缩短10秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "时光发条",
        "description": "基兰使一名敌方英雄减速40/55/70/85/99%或为一名友方英雄提供40/55/70/85/99%移动速度，持续2.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TimeWarp.png",
        "cooldown": "15",
        "cost": "50",
        "range": "550",
        "numericDetail": "技能文本：基兰使一名敌方英雄减速40/55/70/85/99%或为一名友方英雄提供40/55/70/85/99%移动速度，持续2.5秒。\n等级成长：减速=40/55/70/85/99%；移动速度=40/55/70/85/99%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "时光倒流",
        "description": "基兰提供一个保护性的时间符文给一名友方英雄，持续5秒。如果该目标将要阵亡，那么符文会回溯其时间线，使其凝滞3秒，然后将其复活并回复600/850/1100 + 2 × 法术强度生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ChronoShift.png",
        "cooldown": "120/90/60",
        "cost": "125/150/175",
        "range": "900",
        "numericDetail": "技能文本：基兰提供一个保护性的时间符文给一名友方英雄，持续5秒。如果该目标将要阵亡，那么符文会回溯其时间线，使其凝滞3秒，然后将其复活并回复600/850/1100 + 2 × 法术强度生命值。\n补充数值：凝滞状态中的单位无法移动或行动，并且免疫伤害和不可被选取。\n等级成长：治疗效果=600/850/1100",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60019",
    "key": "Warwick",
    "name": "祖安怒兽",
    "title": "沃里克",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Warwick.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 620,
      "hpPerLevel": 99,
      "hpRegen": 4,
      "hpRegenPerLevel": 0.75,
      "resource": 280,
      "resourcePerLevel": 35,
      "resourceRegen": 7.45,
      "resourceRegenPerLevel": 0.6,
      "attackDamage": 65,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.638,
      "attackSpeedPerLevel": 2,
      "armor": 33,
      "armorPerLevel": 4.4,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "血之饥渴",
        "description": "沃里克的攻击在命中时附带额外的6–55（1–18级） + 0.15 × 额外攻击力 + 0.1 × 法术强度魔法伤害。 如果沃里克的生命值低于50%，那么还会回复血之饥渴100%实际伤害值的生命值。如果沃里克的生命值低于25%，那么治疗效果提升至250%实际伤害值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/WarwickP.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：沃里克的攻击在命中时附带额外的6–55（1–18级） + 0.15 × 额外攻击力 + 0.1 × 法术强度魔法伤害。 如果沃里克的生命值低于50%，那么还会回复血之饥渴100%实际伤害值的生命值。如果沃里克的生命值低于25%，那么治疗效果提升至250%实际伤害值。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "野兽之口",
        "description": "秒放：沃里克向前猛扑并撕咬，造成1.2 × 攻击力 + 1 × 法术强度外加6/7/8/9/10%最大生命值的魔法伤害和25/37.5/50/62.5/75%实际伤害值的治疗效果。 蓄力：沃里克猛扑并用它的狼嘴紧咬目标，并跃到目标身后。在紧咬目标时，沃里克会跟随目标的所有移动。在释放他的蓄力后，他会造成等额伤害和治疗效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "80/85/90/95/100",
        "range": "365",
        "numericDetail": "技能文本：秒放：沃里克向前猛扑并撕咬，造成1.2 × 攻击力 + 1 × 法术强度外加6/7/8/9/10%最大生命值的魔法伤害和25/37.5/50/62.5/75%实际伤害值的治疗效果。 蓄力：沃里克猛扑并用它的狼嘴紧咬目标，并跃到目标身后。在紧咬目标时，沃里克会跟随目标的所有移动。在释放他的蓄力后，他会造成等额伤害和治疗效果。\n补充数值：这个技能施加攻击特效和攻击附伤，并且不会暴击。 在紧咬目标时，沃里克免疫强制位移效果。\n等级成长：治疗效果=25/37.5/50/62.5/75%；%生命值伤害=6/7/8/9/10%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "鲜血追猎",
        "description": "被动：沃里克可以感知生命值低于50%的英雄，朝着其移动时获得35/42.5/50/57.5/65%移动速度。对生命值低于50%的敌人施放技能和攻击可获得70/80/90/100/110%攻击速度。这些加成在对抗低于25%生命值的敌人们时会提升200%。 主动：沃里克可以暂时感知到所有敌人，并在对抗相距最近的那个英雄时获得这个技能的被动效果，持续8秒，无论该目标有多少生命值。如果没有感知到任何英雄，该技能的冷却时间缩短30%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickW.png",
        "cooldown": "80/70/60/50/40",
        "cost": "55",
        "range": "4000",
        "numericDetail": "技能文本：被动：沃里克可以感知生命值低于50%的英雄，朝着其移动时获得35/42.5/50/57.5/65%移动速度。对生命值低于50%的敌人施放技能和攻击可获得70/80/90/100/110%攻击速度。这些加成在对抗低于25%生命值的敌人们时会提升200%。 主动：沃里克可以暂时感知到所有敌人，并在对抗相距最近的那个英雄时获得这个技能的被动效果，持续8秒，无论该目标有多少生命值。如果没有感知到任何英雄，该技能的冷却时间缩短30%。\n补充数值：沃里克只能被动感知到被友军攻击到生命值降至50%以下的敌人。\n等级成长：移动速度=35/42.5/50/57.5/65%；攻击速度=70/80/90/100/110%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "远祖嗥叫",
        "description": "沃里克获得35/40/45/50/55%伤害减免，持续2.75秒。在它结束后，沃里克会发出嗥叫，恐惧附近的敌人1秒。沃里克可以再次施放来提前结束这个技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickE.png",
        "cooldown": "15/14/13/12/11",
        "cost": "40",
        "range": "375",
        "numericDetail": "技能文本：沃里克获得35/40/45/50/55%伤害减免，持续2.75秒。在它结束后，沃里克会发出嗥叫，恐惧附近的敌人1秒。沃里克可以再次施放来提前结束这个技能。\n等级成长：伤害减免=35/40/45/50/55%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "无尽束缚",
        "description": "沃里克跳跃一大段距离(随他的移动速度增长)，并压制碰撞到的第一个敌方英雄1.5秒并且自身处在引导状态。在此期间他持续攻击该英雄3次，造成175/350/525 + 1.67 × 额外攻击力魔法伤害。沃里克在引导期间会获得100%实际伤害值的治疗效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickR.png",
        "cooldown": "110/90/70",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：沃里克跳跃一大段距离(随他的移动速度增长)，并压制碰撞到的第一个敌方英雄1.5秒并且自身处在引导状态。在此期间他持续攻击该英雄3次，造成175/350/525 + 1.67 × 额外攻击力魔法伤害。沃里克在引导期间会获得100%实际伤害值的治疗效果。\n补充数值：这个技能在持续期间分别施加3次攻击特效和攻击附伤，并且不会暴击。 这个技能会使敌人中断位移。\n等级成长：伤害=175/350/525",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60089",
    "key": "Leona",
    "name": "曙光女神",
    "title": "蕾欧娜",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Leona.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
    "tags": [
      "Tank",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 646,
      "hpPerLevel": 101,
      "hpRegen": 8.5,
      "hpRegenPerLevel": 0.85,
      "resource": 302,
      "resourcePerLevel": 40,
      "resourceRegen": 6,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 60,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.9,
      "armor": 43,
      "armorPerLevel": 4.8,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "日光",
        "description": "蕾欧娜的各个技能会标记敌人2.5秒，其他友方英雄在对被标记的敌人造成伤害时，会消耗该印记以造成额外的32/39/46/53/60/67/74/81/88/95/102/109/116/123/130/137/144/151（英雄等级1–18）魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LeonaSunlight.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：蕾欧娜的各个技能会标记敌人2.5秒，其他友方英雄在对被标记的敌人造成伤害时，会消耗该印记以造成额外的32/39/46/53/60/67/74/81/88/95/102/109/116/123/130/137/144/151（英雄等级1–18）魔法伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "破晓之盾",
        "description": "蕾欧娜的下次攻击会晕眩目标1秒，并造成额外的10/35/60/85/110 + 0.3 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaShieldOfDaybreak.png",
        "cooldown": "5",
        "cost": "30/35/40/45/50",
        "range": "100",
        "numericDetail": "技能文本：蕾欧娜的下次攻击会晕眩目标1秒，并造成额外的10/35/60/85/110 + 0.3 × 法术强度魔法伤害。\n补充数值：必须在6秒内打出这次攻击，否则它就会消退。\n等级成长：伤害=10/35/60/85/110",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "日蚀",
        "description": "蕾欧娜举起她的盾牌，使即将到来的伤害降低8/12/16/20/24并获得20/27.5/35/42.5/50 + 0.2 × 额外护甲护甲和20/27.5/35/42.5/50 + 0.2 × 额外魔法抗性魔法抗性，持续3秒。之后，她的盾牌会爆炸，对附近的敌人造成55/85/115/145/175 + 0.4 × 法术强度魔法伤害。如果她命中了至少一名敌人，那么她会将该护甲和魔法抗性加成延续额外的3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaSolarBarrier.png",
        "cooldown": "14/13/12/11/10",
        "cost": "60",
        "range": "450",
        "numericDetail": "技能文本：蕾欧娜举起她的盾牌，使即将到来的伤害降低8/12/16/20/24并获得20/27.5/35/42.5/50 + 0.2 × 额外护甲护甲和20/27.5/35/42.5/50 + 0.2 × 额外魔法抗性魔法抗性，持续3秒。之后，她的盾牌会爆炸，对附近的敌人造成55/85/115/145/175 + 0.4 × 法术强度魔法伤害。如果她命中了至少一名敌人，那么她会将该护甲和魔法抗性加成延续额外的3秒。\n补充数值：伤害降低效果无法将伤害降至50%以下。\n等级成长：伤害=55/85/115/145/175；护甲和魔法抗性=20/27.5/35/42.5/50；伤害减免=8/12/16/20/24",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "天顶之刃",
        "description": "蕾欧娜用光明之剑进行猛刺，造成50/90/130/170/210 + 0.4 × 法术强度魔法伤害。最后一个被命中的英雄将会被禁锢0.5秒，并且蕾欧娜将会冲向该英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaZenithBlade.png",
        "cooldown": "12/10.5/9/7.5/6",
        "cost": "40/45/50/55/60",
        "range": "875",
        "numericDetail": "技能文本：蕾欧娜用光明之剑进行猛刺，造成50/90/130/170/210 + 0.4 × 法术强度魔法伤害。最后一个被命中的英雄将会被禁锢0.5秒，并且蕾欧娜将会冲向该英雄。\n等级成长：伤害=50/90/130/170/210",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "日炎耀斑",
        "description": "蕾欧娜召唤一道太阳光束，造成150/225/300 + 0.8 × 法术强度魔法伤害并使敌人减速80%，持续1.75秒。处于区域正中的敌人会受到晕眩效果而非减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaSolarFlare.png",
        "cooldown": "90/75/60",
        "cost": "100",
        "range": "1200",
        "numericDetail": "技能文本：蕾欧娜召唤一道太阳光束，造成150/225/300 + 0.8 × 法术强度魔法伤害并使敌人减速80%，持续1.75秒。处于区域正中的敌人会受到晕眩效果而非减速效果。\n等级成长：伤害=150/225/300",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60072",
    "key": "Skarner",
    "name": "上古领主",
    "title": "斯卡纳",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Skarner.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 630,
      "hpPerLevel": 110,
      "hpRegen": 7.5,
      "hpRegenPerLevel": 0.75,
      "resource": 320,
      "resourcePerLevel": 40,
      "resourceRegen": 7.2,
      "resourceRegenPerLevel": 0.75,
      "attackDamage": 63,
      "attackDamagePerLevel": 5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2,
      "armor": 33,
      "armorPerLevel": 4.5,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 335,
      "attackRange": 150,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "战栗",
        "description": "斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加持续4秒的战栗效果。在3层战栗时，敌人们会在其持续期间内受到((5–9（1–18级）) × 0.01) × 100%最大生命值魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Skarner_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加持续4秒的战栗效果。在3层战栗时，敌人们会在其持续期间内受到((5–9（1–18级）) × 0.01) × 100%最大生命值魔法伤害。\n补充数值：斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加持续4秒的战栗效果。在3层战栗时，敌人们会在其持续期间内受到((5–9（1–18级）) × 0.01) × 100%最大生命值魔法伤害。 对野怪的总伤害上限为100–300（1–18级）。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "撼地 / 擎天",
        "description": "斯卡纳从地面掘出一块巨石，使他的下三次攻击拥有20/25/30/35/40%攻击速度并且对附近敌人们造成10/20/30/40/50 + 0.9 × 额外攻击力 + 0.03 × 额外生命值物理伤害。 他的最后一次攻击将对被影响的敌人们造成额外的11%最大生命值物理伤害和持续1秒的40%减速。 再次施放：斯卡纳结束这个技能并扔出他的巨石，对命中的第一个敌人——及其周围的其它敌人们——造成10/20/30/40/50 + 0.9 × 额外攻击力 + 0.03 × 额外生命值 + 11%最大生命值物理伤害和持续1秒的40%减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerQ.png",
        "cooldown": "8/6.75/5.5/4.25/3",
        "cost": "30",
        "range": "400",
        "numericDetail": "技能文本：斯卡纳从地面掘出一块巨石，使他的下三次攻击拥有20/25/30/35/40%攻击速度并且对附近敌人们造成10/20/30/40/50 + 0.9 × 额外攻击力 + 0.03 × 额外生命值物理伤害。 他的最后一次攻击将对被影响的敌人们造成额外的11%最大生命值物理伤害和持续1秒的40%减速。 再次施放：斯卡纳结束这个技能并扔出他的巨石，对命中的第一个敌人——及其周围的其它敌人们——造成10/20/30/40/50 + 0.9 × 额外攻击力 + 0.03 × 额外生命值 + 11%最大生命值物理伤害和持续1秒的40%减速。\n补充数值：对野怪的百分比生命值伤害上限为150/200/250/300/350。 这个技能对建筑物造成100%伤害。\n等级成长：伤害=10/20/30/40/50；攻击速度=20/25/30/35/40%；对野怪的伤害封顶值=150/200/250/300/350",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "震地壁垒",
        "description": "斯卡纳获得持续2.5秒的0.08 × 最大生命值护盾值并引发一阵地震，来对附近的敌人们造成50/70/90/110/130 + 0.8 × 法术强度魔法伤害和持续1秒的20%减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerW.png",
        "cooldown": "10/9/8/7/6",
        "cost": "60/65/70/75/80",
        "range": "700",
        "numericDetail": "技能文本：斯卡纳获得持续2.5秒的0.08 × 最大生命值护盾值并引发一阵地震，来对附近的敌人们造成50/70/90/110/130 + 0.8 × 法术强度魔法伤害和持续1秒的20%减速。\n等级成长：伤害=50/70/90/110/130",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "以绪塔尔冲击",
        "description": "斯卡纳向前冲锋，朝着所选方向行驶并无视地形。如果斯卡纳碰上了一个英雄或大型野怪，那么他会在冲锋的剩余期间对其进行拖拽。 拖着一个敌人碰撞到一个墙体时，会对该敌人造成30/60/90/120/150 + 1.2 × 额外攻击力 + 0.06 × 最大生命值物理伤害和1.1秒晕眩。 斯卡纳可以再次释放这个技能来提前结束他的冲锋。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerE.png",
        "cooldown": "22/21/20/19/18",
        "cost": "50/55/60/65/70",
        "range": "1700",
        "numericDetail": "技能文本：斯卡纳向前冲锋，朝着所选方向行驶并无视地形。如果斯卡纳碰上了一个英雄或大型野怪，那么他会在冲锋的剩余期间对其进行拖拽。 拖着一个敌人碰撞到一个墙体时，会对该敌人造成30/60/90/120/150 + 1.2 × 额外攻击力 + 0.06 × 最大生命值物理伤害和1.1秒晕眩。 斯卡纳可以再次释放这个技能来提前结束他的冲锋。\n补充数值：成功碰撞墙体会使这个技能的冷却时间降至65%。\n等级成长：伤害=30/60/90/120/150",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "毒刺贯体",
        "description": "斯卡纳向前甩出他的尾巴，对最先命中的3个英雄造成150/250/350 + 1 × 法术强度魔法伤害和1.5秒压制。那些被命中的英雄会在这个技能的持续期间被斯卡纳拖行。 如果斯卡纳至少命中了一个英雄，那么他会获得持续1.5秒的40%移动速度。 如果撼地处于激活状态，那么斯卡纳将先施放擎天。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerR.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "625",
        "numericDetail": "技能文本：斯卡纳向前甩出他的尾巴，对最先命中的3个英雄造成150/250/350 + 1 × 法术强度魔法伤害和1.5秒压制。那些被命中的英雄会在这个技能的持续期间被斯卡纳拖行。 如果斯卡纳至少命中了一个英雄，那么他会获得持续1.5秒的40%移动速度。 如果撼地处于激活状态，那么斯卡纳将先施放擎天。\n等级成长：伤害=150/250/350",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60030",
    "key": "Karthus",
    "name": "死亡颂唱者",
    "title": "卡尔萨斯",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Karthus.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
    "tags": [
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 620,
      "hpPerLevel": 110,
      "hpRegen": 6.5,
      "hpRegenPerLevel": 0.55,
      "resource": 467,
      "resourcePerLevel": 31,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 46,
      "attackDamagePerLevel": 3.25,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.11,
      "armor": 21,
      "armorPerLevel": 4.7,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 450,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "死亡契约",
        "description": "当卡尔萨斯阵亡时，他能够无消耗地使用技能，持续7秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Karthus_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：当卡尔萨斯阵亡时，他能够无消耗地使用技能，持续7秒。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "荒芜",
        "description": "卡尔萨斯生成一道魔法爆裂，造成40/59/78/97/116 + 0.35 × 法术强度魔法伤害。如果爆裂仅命中了一名敌人，它会转而造成(40/59/78/97/116 + 0.35 × 法术强度) × 2魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusLayWasteA1.png",
        "cooldown": "0",
        "cost": "20/25/30/35/40",
        "range": "875",
        "numericDetail": "技能文本：卡尔萨斯生成一道魔法爆裂，造成40/59/78/97/116 + 0.35 × 法术强度魔法伤害。如果爆裂仅命中了一名敌人，它会转而造成(40/59/78/97/116 + 0.35 × 法术强度) × 2魔法伤害。\n等级成长：伤害=40/59/78/97/116",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "痛苦之墙",
        "description": "卡尔萨斯生成一个持续5秒的墙体。穿过它的敌人们会受到持续5秒的25%魔法抗性削减，以及在此期间持续衰减的40/50/60/70/80%减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusWallOfPain.png",
        "cooldown": "15",
        "cost": "70",
        "range": "1000",
        "numericDetail": "技能文本：卡尔萨斯生成一个持续5秒的墙体。穿过它的敌人们会受到持续5秒的25%魔法抗性削减，以及在此期间持续衰减的40/50/60/70/80%减速。\n等级成长：墙体宽度=800/900/1000/1100/1200；移动减速=40/50/60/70/80%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "亵渎",
        "description": "被动：卡尔萨斯击杀一个单位时，回复10/20/30/40/50法力值。 激活：卡尔萨斯生成一个死灵光环，每秒对附近敌人造成30/50/70/90/110 + 0.2 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusDefile.png",
        "cooldown": "0.5",
        "cost": "30/42/54/66/78",
        "range": "550",
        "numericDetail": "技能文本：被动：卡尔萨斯击杀一个单位时，回复10/20/30/40/50法力值。 激活：卡尔萨斯生成一个死灵光环，每秒对附近敌人造成30/50/70/90/110 + 0.2 × 法术强度魔法伤害。\n等级成长：每秒伤害=30/50/70/90/110；法力回复=10/20/30/40/50",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "安魂曲",
        "description": "卡尔萨斯引导3秒，然后对敌方英雄们造成200/350/500 + 0.7 × 法术强度魔法伤害，无视距离。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusFallenOne.png",
        "cooldown": "200/180/160",
        "cost": "100",
        "range": "10000",
        "numericDetail": "技能文本：卡尔萨斯引导3秒，然后对敌方英雄们造成200/350/500 + 0.7 × 法术强度魔法伤害，无视距离。\n等级成长：伤害=200/350/500",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60081",
    "key": "Ezreal",
    "name": "探险家",
    "title": "伊泽瑞尔",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Ezreal.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 600,
      "hpPerLevel": 102,
      "hpRegen": 4,
      "hpRegenPerLevel": 0.65,
      "resource": 375,
      "resourcePerLevel": 70,
      "resourceRegen": 8.5,
      "resourceRegenPerLevel": 1,
      "attackDamage": 60,
      "attackDamagePerLevel": 3.75,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.5,
      "armor": 24,
      "armorPerLevel": 4.2,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "咒能高涨",
        "description": "伊泽瑞尔的技能在命中时会为他提供10%攻击速度，持续6秒，至多可叠加5层。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ezreal_RisingSpellForce.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：伊泽瑞尔的技能在命中时会为他提供10%攻击速度，持续6秒，至多可叠加5层。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "秘术射击",
        "description": "伊泽瑞尔发射一支能量箭，对命中的第一个敌人造成20/45/70/95/120 + 1.3 × 攻击力 + 0.4 × 法术强度物理伤害并使他各个技能的冷却时间缩短1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealQ.png",
        "cooldown": "5.5/5.25/5/4.75/4.5",
        "cost": "28/31/34/37/40",
        "range": "1150",
        "numericDetail": "技能文本：伊泽瑞尔发射一支能量箭，对命中的第一个敌人造成20/45/70/95/120 + 1.3 × 攻击力 + 0.4 × 法术强度物理伤害并使他各个技能的冷却时间缩短1.5秒。\n补充数值：这个技能施加攻击特效效果。\n等级成长：伤害=20/45/70/95/120",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "精华跃动",
        "description": "伊泽瑞尔发射一团魔法球体，魔法球体会附着在命中的第一个敌方英雄、建筑物或史诗级野怪上，持续4秒。如果伊泽瑞尔用技能或攻击命中该目标，就会将球体引爆，造成80/135/190/245/300 + 1 × 额外攻击力 + 0.9 × 法术强度魔法伤害。用技能引爆时会返还该技能的法力消耗外加60法力。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealW.png",
        "cooldown": "8",
        "cost": "50",
        "range": "1150",
        "numericDetail": "技能文本：伊泽瑞尔发射一团魔法球体，魔法球体会附着在命中的第一个敌方英雄、建筑物或史诗级野怪上，持续4秒。如果伊泽瑞尔用技能或攻击命中该目标，就会将球体引爆，造成80/135/190/245/300 + 1 × 额外攻击力 + 0.9 × 法术强度魔法伤害。用技能引爆时会返还该技能的法力消耗外加60法力。\n等级成长：伤害=80/135/190/245/300",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "奥术跃迁",
        "description": "伊泽瑞尔传送然后向最近的敌人发射一支魔法箭，造成80/130/180/230/280 + 0.6 × 额外攻击力 + 0.75 × 法术强度魔法伤害。魔法箭会优先选择受精华跃动影响的目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealE.png",
        "cooldown": "26/23/20/17/14",
        "cost": "70",
        "range": "475",
        "numericDetail": "技能文本：伊泽瑞尔传送然后向最近的敌人发射一支魔法箭，造成80/130/180/230/280 + 0.6 × 额外攻击力 + 0.75 × 法术强度魔法伤害。魔法箭会优先选择受精华跃动影响的目标。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "精准弹幕",
        "description": "伊泽瑞尔发射一道大型能量圆弧，造成350/550/750 + 1 × 额外攻击力 + 1.1 × 法术强度魔法伤害。对小兵和非史诗级野怪降低至150/225/300 + 1 × 额外攻击力 + 1.1 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealR.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：伊泽瑞尔发射一道大型能量圆弧，造成350/550/750 + 1 × 额外攻击力 + 1.1 × 法术强度魔法伤害。对小兵和非史诗级野怪降低至150/225/300 + 1 × 额外攻击力 + 1.1 × 法术强度魔法伤害。\n等级成长：伤害=350/550/750；非英雄伤害=150/225/300",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60014",
    "key": "Sion",
    "name": "亡灵战神",
    "title": "赛恩",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Sion.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 655,
      "hpPerLevel": 87,
      "hpRegen": 9,
      "hpRegenPerLevel": 0.8,
      "resource": 400,
      "resourcePerLevel": 52,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.6,
      "attackDamage": 68,
      "attackDamagePerLevel": 4,
      "attackSpeed": 0.679,
      "attackSpeedPerLevel": 1.3,
      "armor": 36,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "死亡荣耀",
        "description": "在被击杀后，赛恩会回光返照一段时间，可以移动并攻击，但在回光返照时，他的生命值会急速衰减。他还会获得100%生命偷取，攻击得超快，并且每次攻击会额外造成相当于目标10%最大生命值的物理伤害。 他的所有技能都会被替换为【死亡冲动】，能为他提供爆发性的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sion_Passive1.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：在被击杀后，赛恩会回光返照一段时间，可以移动并攻击，但在回光返照时，他的生命值会急速衰减。他还会获得100%生命偷取，攻击得超快，并且每次攻击会额外造成相当于目标10%最大生命值的物理伤害。 他的所有技能都会被替换为【死亡冲动】，能为他提供爆发性的移动速度加成。\n补充数值：在被击杀后，赛恩会回光返照一段时间，可以移动并攻击，但在回光返照时，他的生命值会急速衰减。他还会获得100%生命偷取，攻击得超快，并且每次攻击会额外造成相当于目标10%最大生命值的物理伤害。 他的所有技能都会被替换为【死亡冲动】，能为他提供爆发性的移动速度加成。 对非英雄单位最多造成75额外伤害。 赛恩在这个形态下对建筑物造成40%伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "残虐猛击",
        "description": "开始蓄力：赛恩开始为一次重型猛击蓄力，最多2秒。 释放：赛恩将斧头重重砸下，暂时减速并基于蓄力时间造成30/45/60/75/90 + 0.4/0.5/0.6/0.7/0.8 × 攻击力到90/155/220/285/350 + 1.2/1.5/1.8/2.1/2.4 × 攻击力物理伤害。如果赛恩蓄力了至少1秒，那么敌人还会被击飞，并基于蓄力时间被晕眩1.25到2.25秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionQ.png",
        "cooldown": "10/9/8/7/6",
        "cost": "45",
        "range": "10000",
        "numericDetail": "技能文本：开始蓄力：赛恩开始为一次重型猛击蓄力，最多2秒。 释放：赛恩将斧头重重砸下，暂时减速并基于蓄力时间造成30/45/60/75/90 + 0.4/0.5/0.6/0.7/0.8 × 攻击力到90/155/220/285/350 + 1.2/1.5/1.8/2.1/2.4 × 攻击力物理伤害。如果赛恩蓄力了至少1秒，那么敌人还会被击飞，并基于蓄力时间被晕眩1.25到2.25秒。\n补充数值：对野怪造成165%伤害并对小兵造成60%伤害。\n等级成长：最小伤害=30/45/60/75/90；最大伤害=90/155/220/285/350；攻击力收益=40/50/60/70/80%；攻击力收益=120/150/180/210/240%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "灵魂熔炉",
        "description": "被动：赛恩每击杀一个单位就会获得4最大生命值，或在参与击杀英雄、击杀大型小兵或大型野怪后获得15最大生命值。 主动：赛恩获得60/75/90/105/120 + 0.4 × 法术强度 + 0.08/0.1/0.12/0.14/0.16 × 最大生命值护盾值，持续6秒。在3秒后，如果护盾仍然存在，那么赛恩就能再次施放来引爆护盾，造成40/65/90/115/140 + 0.4 × 法术强度外加14%最大生命值的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "75/80/85/90/95",
        "range": "500",
        "numericDetail": "技能文本：被动：赛恩每击杀一个单位就会获得4最大生命值，或在参与击杀英雄、击杀大型小兵或大型野怪后获得15最大生命值。 主动：赛恩获得60/75/90/105/120 + 0.4 × 法术强度 + 0.08/0.1/0.12/0.14/0.16 × 最大生命值护盾值，持续6秒。在3秒后，如果护盾仍然存在，那么赛恩就能再次施放来引爆护盾，造成40/65/90/115/140 + 0.4 × 法术强度外加14%最大生命值的魔法伤害。\n补充数值：对小兵和野怪最多造成400额外伤害。\n等级成长：护盾值=60/75/90/105/120；伤害=40/65/90/115/140；最大生命值收益系数=8/10/12/14/16%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "杀手怒吼",
        "description": "赛恩发射一道冲击波，造成65/100/135/170/205 + 0.55 × 法术强度魔法伤害和持续2.5秒的40/45/50/55/60%减速，并移除25%护甲，持续4秒。被命中的非英雄单位会被击退。被击退的单位会在击中其他敌人时造成等额伤害和效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionE.png",
        "cooldown": "12/11/10/9/8",
        "cost": "35/40/45/50/55",
        "range": "800",
        "numericDetail": "技能文本：赛恩发射一道冲击波，造成65/100/135/170/205 + 0.55 × 法术强度魔法伤害和持续2.5秒的40/45/50/55/60%减速，并移除25%护甲，持续4秒。被命中的非英雄单位会被击退。被击退的单位会在击中其他敌人时造成等额伤害和效果。\n等级成长：伤害=65/100/135/170/205；减速=40/45/50/55/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "蛮横冲撞",
        "description": "赛恩朝着一个方向不可阻挡地冲锋8秒，可用鼠标指针来调整方向。赛恩会在碰撞到一名敌方英雄或墙体后、或是再次施放此技能后停下。 在冲锋结束时，赛恩基于行进距离造成150/300/450 + 0.6 × 额外攻击力到400/800/1200 + 1.2 × 额外攻击力物理伤害。紧靠着赛恩的敌人们会基于赛恩的行进距离被晕眩0.75到1.75秒。更大范围内的敌人们会被减速40/45/50%，持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionR.png",
        "cooldown": "140/100/60",
        "cost": "100",
        "range": "7500",
        "numericDetail": "技能文本：赛恩朝着一个方向不可阻挡地冲锋8秒，可用鼠标指针来调整方向。赛恩会在碰撞到一名敌方英雄或墙体后、或是再次施放此技能后停下。 在冲锋结束时，赛恩基于行进距离造成150/300/450 + 0.6 × 额外攻击力到400/800/1200 + 1.2 × 额外攻击力物理伤害。紧靠着赛恩的敌人们会基于赛恩的行进距离被晕眩0.75到1.75秒。更大范围内的敌人们会被减速40/45/50%，持续3秒。\n等级成长：最小伤害=150/300/450；最大伤害=400/800/1200；减速=40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60029",
    "key": "Twitch",
    "name": "瘟疫之源",
    "title": "图奇",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Twitch.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 630,
      "hpPerLevel": 98,
      "hpRegen": 3.75,
      "hpRegenPerLevel": 0.6,
      "resource": 300,
      "resourcePerLevel": 40,
      "resourceRegen": 7.25,
      "resourceRegenPerLevel": 0.7,
      "attackDamage": 59,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.679,
      "attackSpeedPerLevel": 3,
      "armor": 27,
      "armorPerLevel": 4,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "死亡毒液",
        "description": "图奇的攻击会使目标感染毒液 攻击特效，每秒造成1/2/3/4/5（英雄等级1/5/9/13/17） + 0.03 × 法术强度真实伤害，持续6秒，最多可叠加6层。 每秒最大伤害：(1/2/3/4/5（英雄等级1/5/9/13/17） + 0.03 × 法术强度) × 6",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Twitch_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：图奇的攻击会使目标感染毒液 攻击特效，每秒造成1/2/3/4/5（英雄等级1/5/9/13/17） + 0.03 × 法术强度真实伤害，持续6秒，最多可叠加6层。 每秒最大伤害：(1/2/3/4/5（英雄等级1/5/9/13/17） + 0.03 × 法术强度) × 6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "埋伏",
        "description": "图奇伪装并获得10%移动速度，持续10/11/12/13/14秒。当附近有一名无法看见他的敌方英雄时，移动速度提升至30%。在离开伪装后，图奇获得40/45/50/55/60%攻击速度，持续6秒。 当一名带有毒液的敌方英雄阵亡时，这个技能的冷却时间就会刷新。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchHideInShadows.png",
        "cooldown": "16",
        "cost": "40",
        "range": "20",
        "numericDetail": "技能文本：图奇伪装并获得10%移动速度，持续10/11/12/13/14秒。当附近有一名无法看见他的敌方英雄时，移动速度提升至30%。在离开伪装后，图奇获得40/45/50/55/60%攻击速度，持续6秒。 当一名带有毒液的敌方英雄阵亡时，这个技能的冷却时间就会刷新。\n补充数值：伪装的单位不会被敌人看见，除非有一名敌方英雄在其侦测半径中。\n等级成长：伪装时长=10/11/12/13/14；攻击速度=40/45/50/55/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "剧毒之桶",
        "description": "图奇扔出一个毒性之桶来添加一层死亡毒液给所有被桶砸中的敌人，并留下一团毒雾，存留3秒。 一直呆在毒雾中的敌人会被减速30/35/40/45/50 + 0.06 × 法术强度%并且会每秒受到额外的一层死亡毒液。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchVenomCask.png",
        "cooldown": "13/12/11/10/9",
        "cost": "70",
        "range": "950",
        "numericDetail": "技能文本：图奇扔出一个毒性之桶来添加一层死亡毒液给所有被桶砸中的敌人，并留下一团毒雾，存留3秒。 一直呆在毒雾中的敌人会被减速30/35/40/45/50 + 0.06 × 法术强度%并且会每秒受到额外的一层死亡毒液。\n等级成长：移动减速=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "毒性爆发",
        "description": "对附近感染了死亡毒液的所有敌人造成20/30/40/50/60物理伤害，此外，每层死亡毒液额外造成15/20/25/30/35 + 0.35 × 额外攻击力物理伤害和0.35 × 法术强度魔法伤害。 最大伤害：20/30/40/50/60 + (6 × 15/20/25/30/35) + (0.35 × 6) × 额外攻击力物理伤害和(0.35 × 法术强度) × 6魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchExpunge.png",
        "cooldown": "12/11/10/9/8",
        "cost": "50/60/70/80/90",
        "range": "1200",
        "numericDetail": "技能文本：对附近感染了死亡毒液的所有敌人造成20/30/40/50/60物理伤害，此外，每层死亡毒液额外造成15/20/25/30/35 + 0.35 × 额外攻击力物理伤害和0.35 × 法术强度魔法伤害。 最大伤害：20/30/40/50/60 + (6 × 15/20/25/30/35) + (0.35 × 6) × 额外攻击力物理伤害和(0.35 × 法术强度) × 6魔法伤害。\n等级成长：伤害=20/30/40/50/60；每层伤害=15/20/25/30/35",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "火力全开",
        "description": "图奇解开他的十字弩的封印，获得300攻击距离和30/45/60攻击力，并使他的攻击变为穿刺弩箭，持续6秒。这些弩箭会攻击它们沿途的所有敌人，但对每个后续目标造成的伤害减少10%，最低降至60%伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchFullAutomatic.png",
        "cooldown": "90",
        "cost": "100",
        "range": "1200",
        "numericDetail": "技能文本：图奇解开他的十字弩的封印，获得300攻击距离和30/45/60攻击力，并使他的攻击变为穿刺弩箭，持续6秒。这些弩箭会攻击它们沿途的所有敌人，但对每个后续目标造成的伤害减少10%，最低降至60%伤害。\n补充数值：使用这个技能不会打破伪装，但攻击仍然会。\n等级成长：攻击力=30/45/60",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60011",
    "key": "MasterYi",
    "name": "无极剑圣",
    "title": "易",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/MasterYi.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 640,
      "hpPerLevel": 105,
      "hpRegen": 7.5,
      "hpRegenPerLevel": 0.65,
      "resource": 251,
      "resourcePerLevel": 42,
      "resourceRegen": 7.25,
      "resourceRegenPerLevel": 0.45,
      "attackDamage": 65,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.679,
      "attackSpeedPerLevel": 2.5,
      "armor": 33,
      "armorPerLevel": 4.5,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 355,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "双重打击",
        "description": "易大师每第4次攻击将进行双重打击。第二段攻击将造成0.5 × 攻击力物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MasterYi_Passive1.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：易大师每第4次攻击将进行双重打击。第二段攻击将造成0.5 × 攻击力物理伤害。\n补充数值：易大师每第4次攻击将进行双重打击。第二段攻击将造成0.5 × 攻击力物理伤害。 第二段攻击算是一次常规攻击；它能够暴击并施加攻击特效。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "阿尔法突袭",
        "description": "易变得【不可被选取】并对他目标附近的敌人发起快速打击，对命中的所有敌人造成20/40/60/80/100 + 0.7 × 总攻击力物理伤害，至多命中4名敌人。 如果没有其他目标，那么这个技能可以重复打击相同敌人，每次后续打击造成25%物理伤害(((20/40/60/80/100 + 0.7 × 总攻击力)) × 0.25)，对单个目标的最大伤害值为(20/40/60/80/100 + 0.7 × 总攻击力) × (1 + (0.25 × (-1 + 4)))物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AlphaStrike.png",
        "cooldown": "20/19.5/19/18.5/18",
        "cost": "50/55/60/65/70",
        "range": "600",
        "numericDetail": "技能文本：易变得【不可被选取】并对他目标附近的敌人发起快速打击，对命中的所有敌人造成20/40/60/80/100 + 0.7 × 总攻击力物理伤害，至多命中4名敌人。 如果没有其他目标，那么这个技能可以重复打击相同敌人，每次后续打击造成25%物理伤害(((20/40/60/80/100 + 0.7 × 总攻击力)) × 0.25)，对单个目标的最大伤害值为(20/40/60/80/100 + 0.7 × 总攻击力) × (1 + (0.25 × (-1 + 4)))物理伤害。\n补充数值：施加75%伤害的 攻击附伤。后续命中的伤害降低至这个伤害的25%。 可以暴击，造成额外的(20/40/60/80/100 + 0.7 × 总攻击力) × (1 × (1 × 暴击伤害 - 1))物理伤害。后续命中的伤害降低至这个伤害的25%，对单个目标的最大总暴击伤害为(((20/40/60/80/100 + 0.7 × 总攻击力) × (1 + (0.25 × (-1 + 4))))) × (1 × 1 × 暴击伤害)。 每次打击会对野怪造成60/85/110/135/160额外伤害。 攻击可使这个技能的冷却时间缩短(技能冷却修正系数 × 1)秒。 阿尔法突袭不会缩短它自己的冷却时间或叠加双重打击的 攻击附伤层数。 易将出现在初始目标旁边。\n等级成长：伤害=20/40/60/80/100；额外野怪伤害=60/85/110/135/160",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "冥想",
        "description": "易开始引导，并在4秒里持续回复共120/200/280/360/440 + 1 × 法术强度生命值。这个治疗效果可基于易大师的已损失生命值而提升，最多可提升至100%。 在引导时和随后的0.5秒里，他还会获得((0.45/0.475/0.5/0.525/0.55 + 0.25/0.225/0.2/0.175/0.15)) × 100%伤害减免，这个效果会在最初的0.5秒后降低至45/47.5/50/52.5/55%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Meditate.png",
        "cooldown": "10",
        "cost": "40",
        "range": "20",
        "numericDetail": "技能文本：易开始引导，并在4秒里持续回复共120/200/280/360/440 + 1 × 法术强度生命值。这个治疗效果可基于易大师的已损失生命值而提升，最多可提升至100%。 在引导时和随后的0.5秒里，他还会获得((0.45/0.475/0.5/0.525/0.55 + 0.25/0.225/0.2/0.175/0.15)) × 100%伤害减免，这个效果会在最初的0.5秒后降低至45/47.5/50/52.5/55%。\n补充数值：易在引导时将获得双重打击的层数。 伤害减免效果在作用于来自防御塔的伤害时会减半。\n等级成长：生命值已回复=120/200/280/360/440；伤害减免=45/47.5/50/52.5/55%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "无极剑道",
        "description": "易的攻击造成额外的20/25/30/35/40 + 0.35 × 额外攻击力真实伤害，持续5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WujuStyle.png",
        "cooldown": "14",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：易的攻击造成额外的20/25/30/35/40 + 0.35 × 额外攻击力真实伤害，持续5秒。\n补充数值：无极剑道的持续时间会在阿尔法突袭和冥想期间暂停\n等级成长：伤害=20/25/30/35/40",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "高原血统",
        "description": "被动：在参与击杀后，易大师的普通技能的剩余冷却时间会减少70%。 主动：获得35/45/55%移动速度，25/45/65%攻击速度，并且免疫减速效果，持续7秒。每次参与击杀后都会使此技能的持续时间延长7秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Highlander.png",
        "cooldown": "85",
        "cost": "100",
        "range": "1",
        "numericDetail": "技能文本：被动：在参与击杀后，易大师的普通技能的剩余冷却时间会减少70%。 主动：获得35/45/55%移动速度，25/45/65%攻击速度，并且免疫减速效果，持续7秒。每次参与击杀后都会使此技能的持续时间延长7秒。\n补充数值：高原血统的持续时间会在阿尔法突袭和冥想期间暂停\n等级成长：攻击速度=25/45/65%；移动速度=35/45/55%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60117",
    "key": "Lulu",
    "name": "仙灵女巫",
    "title": "璐璐",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Lulu.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
    "tags": [
      "Support",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 565,
      "hpPerLevel": 92,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.6,
      "resource": 350,
      "resourcePerLevel": 55,
      "resourceRegen": 11,
      "resourceRegenPerLevel": 0.6,
      "attackDamage": 47,
      "attackDamagePerLevel": 2.6,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.25,
      "armor": 26,
      "armorPerLevel": 4.6,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "皮克斯，仙灵伙伴",
        "description": "璐璐会受到仙灵皮克斯的协助。当璐璐攻击时，皮克斯会朝她的目标发射3颗飞弹，对第一个命中的敌人造成(5–39（1–18级） + 0.05 × 法术强度) × 3魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Lulu_PixFaerieCompanion.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：璐璐会受到仙灵皮克斯的协助。当璐璐攻击时，皮克斯会朝她的目标发射3颗飞弹，对第一个命中的敌人造成(5–39（1–18级） + 0.05 × 法术强度) × 3魔法伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "闪耀长枪",
        "description": "璐璐和皮克斯各发射一束贯穿魔弹，造成60/95/130/165/200 + 0.5 × 法术强度魔法伤害和在2秒里持续衰减的80%减速。 如果两束魔弹都命中了相同的一名敌人，那么会对其造成额外的(60/95/130/165/200 + 0.5 × 法术强度) × 0.5魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluQ.png",
        "cooldown": "7",
        "cost": "50/55/60/65/70",
        "range": "925",
        "numericDetail": "技能文本：璐璐和皮克斯各发射一束贯穿魔弹，造成60/95/130/165/200 + 0.5 × 法术强度魔法伤害和在2秒里持续衰减的80%减速。 如果两束魔弹都命中了相同的一名敌人，那么会对其造成额外的(60/95/130/165/200 + 0.5 × 法术强度) × 0.5魔法伤害。\n补充数值：对小兵造成70%伤害。\n等级成长：伤害=60/95/130/165/200",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "奇思妙想",
        "description": "当用在一名友方身上时，璐璐提供(0.25 + 0.0005 × 法术强度) × 100%移动速度和20/22.5/25/27.5/30%攻击速度，持续3/3.25/3.5/3.75/4秒。 当用在一名敌人身上时，璐璐会将其变形1.2/1.4/1.6/1.8/2秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluW.png",
        "cooldown": "18",
        "cost": "65",
        "range": "650",
        "numericDetail": "技能文本：当用在一名友方身上时，璐璐提供(0.25 + 0.0005 × 法术强度) × 100%移动速度和20/22.5/25/27.5/30%攻击速度，持续3/3.25/3.5/3.75/4秒。 当用在一名敌人身上时，璐璐会将其变形1.2/1.4/1.6/1.8/2秒。\n补充数值：被变形的目标会被沉默、缴械、并被减速60。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "帮忙，皮克斯！",
        "description": "在对一名友方施放时，皮克斯会跳到该友方处并提供皮克斯，仙灵伙伴，持续6秒。如果该友方是一名英雄，那么皮克斯还会提供70/110/150/190/230 + 0.5 × 法术强度护盾值，持续2.5秒。 在对一名敌方英雄使用时，皮克斯会妨碍该英雄，造成70/110/150/190/230 + 0.5 × 法术强度魔法伤害并提供其真实视野，持续4秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluE.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "650",
        "numericDetail": "技能文本：在对一名友方施放时，皮克斯会跳到该友方处并提供皮克斯，仙灵伙伴，持续6秒。如果该友方是一名英雄，那么皮克斯还会提供70/110/150/190/230 + 0.5 × 法术强度护盾值，持续2.5秒。 在对一名敌方英雄使用时，皮克斯会妨碍该英雄，造成70/110/150/190/230 + 0.5 × 法术强度魔法伤害并提供其真实视野，持续4秒。\n等级成长：护盾值=70/110/150/190/230；伤害=70/110/150/190/230",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "狂野生长",
        "description": "璐璐使一名友方英雄巨大化，并击飞周围的敌人1秒。巨大化的友方英雄会获得275/425/575 + 0.55 × 法术强度最大生命值并使周围的敌人们减速30/45/60%，持续7秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "900",
        "numericDetail": "技能文本：璐璐使一名友方英雄巨大化，并击飞周围的敌人1秒。巨大化的友方英雄会获得275/425/575 + 0.55 × 法术强度最大生命值并使周围的敌人们减速30/45/60%，持续7秒。\n等级成长：额外生命值=275/425/575；减速=30/45/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60045",
    "key": "Veigar",
    "name": "邪恶小法师",
    "title": "维迦",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Veigar.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",
    "tags": [
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 580,
      "hpPerLevel": 108,
      "hpRegen": 6.5,
      "hpRegenPerLevel": 0.6,
      "resource": 490,
      "resourcePerLevel": 26,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 52,
      "attackDamagePerLevel": 2.7,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.24,
      "armor": 18,
      "armorPerLevel": 5.2,
      "magicResist": 32,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 340,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "超凡邪力",
        "description": "维迦的技能会在命中敌方英雄时为他提供1层超凡邪力。参与击杀英雄后会提供额外的5层。 每层超凡邪力会为维迦提供1法术强度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/VeigarEntropy.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：维迦的技能会在命中敌方英雄时为他提供1层超凡邪力。参与击杀英雄后会提供额外的5层。 每层超凡邪力会为维迦提供1法术强度。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "黑暗祭祀",
        "description": "维迦释放一束黑暗能量，对命中的头2个敌人造成80/120/160/200/240 + 0.5/0.55/0.6/0.65/0.7 × 法术强度魔法伤害。 用此技能击杀一个单位，还会为维迦提供1层超凡邪恶效果。大型小兵和大型野怪会提供3层作为替代。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarBalefulStrike.png",
        "cooldown": "6/5.5/5/4.5/4",
        "cost": "30/35/40/45/50",
        "range": "1000",
        "numericDetail": "技能文本：维迦释放一束黑暗能量，对命中的头2个敌人造成80/120/160/200/240 + 0.5/0.55/0.6/0.65/0.7 × 法术强度魔法伤害。 用此技能击杀一个单位，还会为维迦提供1层超凡邪恶效果。大型小兵和大型野怪会提供3层作为替代。\n等级成长：伤害=80/120/160/200/240；总法强收益=50/55/60/65/70%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "黑暗物质",
        "description": "维迦召唤黑暗物质将从天而降，造成85/140/195/250/305 + 0.7/0.8/0.9/1/1.1 × 法术强度魔法伤害。 每50层超凡邪力会使这个技能的冷却时间减少10%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarDarkMatter.png",
        "cooldown": "0",
        "cost": "60/65/70/75/80",
        "range": "950",
        "numericDetail": "技能文本：维迦召唤黑暗物质将从天而降，造成85/140/195/250/305 + 0.7/0.8/0.9/1/1.1 × 法术强度魔法伤害。 每50层超凡邪力会使这个技能的冷却时间减少10%。\n等级成长：伤害=85/140/195/250/305；总法强收益=70/80/90/100/110%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "扭曲空间",
        "description": "维迦扭曲空间的边缘，创造一个牢笼来使途经的敌人晕眩1.5/1.75/2/2.25/2.5秒。牢笼持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarEventHorizon.png",
        "cooldown": "20/18.5/17/15.5/14",
        "cost": "70/75/80/85/90",
        "range": "725",
        "numericDetail": "技能文本：维迦扭曲空间的边缘，创造一个牢笼来使途经的敌人晕眩1.5/1.75/2/2.25/2.5秒。牢笼持续3秒。\n补充数值：这个技能会使敌人中断位移。\n等级成长：晕眩时长：=1.5/1.75/2/2.25/2.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "能量爆裂",
        "description": "维迦用源力魔法引爆目标一名敌方英雄，造成175/250/325 + 0.65/0.7/0.75 × 法术强度到(175/250/325 + 0.65/0.7/0.75 × 法术强度) × 2魔法伤害，伤害提升幅度基于目标的已损失生命值。目标生命值在33%以下即可造成最大伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarR.png",
        "cooldown": "120/90/60",
        "cost": "100",
        "range": "650",
        "numericDetail": "技能文本：维迦用源力魔法引爆目标一名敌方英雄，造成175/250/325 + 0.65/0.7/0.75 × 法术强度到(175/250/325 + 0.65/0.7/0.75 × 法术强度) × 2魔法伤害，伤害提升幅度基于目标的已损失生命值。目标生命值在33%以下即可造成最大伤害。\n等级成长：伤害=175/250/325；总法强收益=65/70/75%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60031",
    "key": "Chogath",
    "name": "虚空恐惧",
    "title": "科加斯",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Chogath.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    "tags": [
      "Tank",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 644,
      "hpPerLevel": 94,
      "hpRegen": 9,
      "hpRegenPerLevel": 0.85,
      "resource": 270,
      "resourcePerLevel": 60,
      "resourceRegen": 7.2,
      "resourceRegenPerLevel": 0.45,
      "attackDamage": 69,
      "attackDamagePerLevel": 4.2,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 1.44,
      "armor": 38,
      "armorPerLevel": 4.5,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "肉食者",
        "description": "击杀一名敌人会回复18/20/22/24/26/28/30/32/34/36/38/40/42/44/46/48/50/52（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）生命值和4.72/5/5.28/5.56/5.84/6.12/6.4/6.68/6.96/7.24/7.52/7.8/8.08/8.36/8.64/8.92/9.2/9.48（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）法力值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/GreenTerror_TailSpike.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：击杀一名敌人会回复18/20/22/24/26/28/30/32/34/36/38/40/42/44/46/48/50/52（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）生命值和4.72/5/5.28/5.56/5.84/6.12/6.4/6.68/6.96/7.24/7.52/7.8/8.08/8.36/8.64/8.92/9.2/9.48（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）法力值。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "破裂",
        "description": "科加斯使大地破裂，击飞敌人1秒，造成80/135/190/245/300 + 1 × 法术强度魔法伤害，并使敌人减速60%，持续1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Rupture.png",
        "cooldown": "6",
        "cost": "50",
        "range": "950",
        "numericDetail": "技能文本：科加斯使大地破裂，击飞敌人1秒，造成80/135/190/245/300 + 1 × 法术强度魔法伤害，并使敌人减速60%，持续1.5秒。\n等级成长：伤害=80/135/190/245/300",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "野性尖叫",
        "description": "科加斯进行咆哮，沉默敌人1.6/1.7/1.8/1.9/2秒并造成80/130/180/230/280 + 0.7 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FeralScream.png",
        "cooldown": "11/10.5/10/9.5/9",
        "cost": "70/75/80/85/90",
        "range": "300",
        "numericDetail": "技能文本：科加斯进行咆哮，沉默敌人1.6/1.7/1.8/1.9/2秒并造成80/130/180/230/280 + 0.7 × 法术强度魔法伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "恐惧之刺",
        "description": "科加斯的下三次攻击会发射尖刺，造成20/40/60/80/100 + 0.3 × 法术强度加上目标((2.5/2.85/3.2/3.55/3.9 + 0.5 × 状态层数) × 0.01) × 100%最大生命值的魔法伤害并使敌人减速30/35/40/45/50%，减速效果会在1.5秒里持续衰减。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VorpalSpikes.png",
        "cooldown": "8/7/6/5/4",
        "cost": "30",
        "range": "40",
        "numericDetail": "技能文本：科加斯的下三次攻击会发射尖刺，造成20/40/60/80/100 + 0.3 × 法术强度加上目标((2.5/2.85/3.2/3.55/3.9 + 0.5 × 状态层数) × 0.01) × 100%最大生命值的魔法伤害并使敌人减速30/35/40/45/50%，减速效果会在1.5秒里持续衰减。\n补充数值：盛宴层数会提升尖刺的宽度。每层盛宴也会造成额外的目标0.5%最大生命值的魔法伤害。 对野怪的百分比生命值伤害被替换为80/110/140/170/200。\n等级成长：伤害=20/40/60/80/100；最大生命值伤害=2.5/2.85/3.2/3.55/3.9%；野怪伤害=80/110/140/170/200；减速=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "盛宴",
        "description": "科加斯贪婪地吞吃一名敌人，对英雄造成300/475/650 + 0.5 × 法术强度 + 0.1 × 额外最大生命值真实伤害或对野怪和小兵造成1200 + 0.5 × 法术强度 + 0.1 × 额外最大生命值真实伤害。如果这个技能击杀了敌方单位，那么科加斯会获得一层可叠加的效果，使他的体型变大且提供80/120/160最大生命值。通过吞吃小兵和非史诗级野怪的方式只能获得共6层效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Feast.png",
        "cooldown": "80/70/60",
        "cost": "100",
        "range": "175",
        "numericDetail": "技能文本：科加斯贪婪地吞吃一名敌人，对英雄造成300/475/650 + 0.5 × 法术强度 + 0.1 × 额外最大生命值真实伤害或对野怪和小兵造成1200 + 0.5 × 法术强度 + 0.1 × 额外最大生命值真实伤害。如果这个技能击杀了敌方单位，那么科加斯会获得一层可叠加的效果，使他的体型变大且提供80/120/160最大生命值。通过吞吃小兵和非史诗级野怪的方式只能获得共6层效果。\n等级成长：英雄伤害=300/475/650；每层生命值=80/120/160；攻击距离每层=4.7/6.2/7.7",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60090",
    "key": "Malzahar",
    "name": "虚空先知",
    "title": "玛尔扎哈",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Malzahar.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
    "tags": [
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 580,
      "hpPerLevel": 101,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.6,
      "resource": 375,
      "resourcePerLevel": 28,
      "resourceRegen": 8,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 55,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 1.5,
      "armor": 18,
      "armorPerLevel": 4.7,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 500,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "虚空穿越",
        "description": "玛尔扎哈获得90%伤害减免并免疫限制和定身效果，并且在受到或格挡了一次那些效果后，会存留0.25秒。这个效果有30/24/18/12（英雄等级1/6/11/16）秒的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Malzahar_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：玛尔扎哈获得90%伤害减免并免疫限制和定身效果，并且在受到或格挡了一次那些效果后，会存留0.25秒。这个效果有30/24/18/12（英雄等级1/6/11/16）秒的冷却时间。\n补充数值：玛尔扎哈获得90%伤害减免并免疫限制和定身效果，并且在受到或格挡了一次那些效果后，会存留0.25秒。这个效果有30/24/18/12（英雄等级1/6/11/16）秒的冷却时间。 承受伤害将重启冷却时间。 来自小兵的伤害不会被减免，但不会触发或重启冷却时间。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "虚空召唤",
        "description": "玛尔扎哈开启两扇通往虚空的传送门，在短暂的延迟后，能量就会从虚空之中喷发，并且在两道传送门之间对流，对击中的敌人造成70/105/140/175/210 + 0.55 × 法术强度魔法伤害并使其沉默1/1.25/1.5/1.75/2秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharQ.png",
        "cooldown": "6",
        "cost": "60/65/70/75/80",
        "range": "900",
        "numericDetail": "技能文本：玛尔扎哈开启两扇通往虚空的传送门，在短暂的延迟后，能量就会从虚空之中喷发，并且在两道传送门之间对流，对击中的敌人造成70/105/140/175/210 + 0.55 × 法术强度魔法伤害并使其沉默1/1.25/1.5/1.75/2秒。\n等级成长：伤害=70/105/140/175/210；沉默时长=1/1.25/1.5/1.75/2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "虚空虫群",
        "description": "被动：玛尔扎哈的其它技能在施放时会为他提供一层效果(最多可叠到2层)。 主动：玛尔扎哈召唤一个虚灵，并且每层效果会额外召唤一个虚灵。虚灵持续8/8/9/9/10秒并且每次命中造成12/14/16/18/20 + 5–64.5（1–18级） + 0.4 × 额外攻击力 + 0.2 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharW.png",
        "cooldown": "8",
        "cost": "40/45/50/55/60",
        "range": "150",
        "numericDetail": "技能文本：被动：玛尔扎哈的其它技能在施放时会为他提供一层效果(最多可叠到2层)。 主动：玛尔扎哈召唤一个虚灵，并且每层效果会额外召唤一个虚灵。虚灵持续8/8/9/9/10秒并且每次命中造成12/14/16/18/20 + 5–64.5（1–18级） + 0.4 × 额外攻击力 + 0.2 × 法术强度魔法伤害。\n补充数值：虚灵对中了煞星幻象的线上小兵造成300%伤害。 虚灵对史诗级野怪造成50%伤害。\n等级成长：虚灵 伤害=12/14/16/18/20；虚灵 持续时长=8/8/9/9/10",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "煞星幻象",
        "description": "玛尔扎哈给目标造成可怕的幻象，在4秒里对一名敌人持续造成共80/115/150/185/220 + 0.8 × 法术强度魔法伤害。在此期间，对目标使用虚空召唤或冥府之握会刷新幻象的持续时间。 如果目标被击杀，玛尔扎哈会获得0.02 × 当前资源法力并且幻象会传播给相距最近的敌人。 煞星幻象会处决低于10/12/14/16/18/20/22/24/26/28/30（英雄等级1/2/3/4/5/6/7/8/9/10/11）生命值的小兵。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharE.png",
        "cooldown": "11/10/9/8/7",
        "cost": "60/70/80/90/100",
        "range": "650",
        "numericDetail": "技能文本：玛尔扎哈给目标造成可怕的幻象，在4秒里对一名敌人持续造成共80/115/150/185/220 + 0.8 × 法术强度魔法伤害。在此期间，对目标使用虚空召唤或冥府之握会刷新幻象的持续时间。 如果目标被击杀，玛尔扎哈会获得0.02 × 当前资源法力并且幻象会传播给相距最近的敌人。 煞星幻象会处决低于10/12/14/16/18/20/22/24/26/28/30（英雄等级1/2/3/4/5/6/7/8/9/10/11）生命值的小兵。\n等级成长：伤害=80/115/150/185/220",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "冥府之握",
        "description": "玛尔扎哈压制一名敌方英雄并在2.5秒里持续造成共125/200/275 + 0.8 × 法术强度魔法伤害。一个负能量地带会在他目标周围生成，在5秒里持续造成共((2/3/4 + 0.005 × 法术强度) × 0.05) × 100%最大生命值的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharR.png",
        "cooldown": "140/110/80",
        "cost": "100",
        "range": "700",
        "numericDetail": "技能文本：玛尔扎哈压制一名敌方英雄并在2.5秒里持续造成共125/200/275 + 0.8 × 法术强度魔法伤害。一个负能量地带会在他目标周围生成，在5秒里持续造成共((2/3/4 + 0.005 × 法术强度) × 0.05) × 100%最大生命值的魔法伤害。\n补充数值：这个技能会使敌人中断位移。\n等级成长：冥府之握 伤害=125/200/275；虚无地带每秒伤害=2/3/4%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60038",
    "key": "Kassadin",
    "name": "虚空行者",
    "title": "卡萨丁",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Kassadin.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 646,
      "hpPerLevel": 113,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.5,
      "resource": 400,
      "resourcePerLevel": 87,
      "resourceRegen": 6,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 59,
      "attackDamagePerLevel": 3.9,
      "attackSpeed": 0.64,
      "attackSpeedPerLevel": 3.7,
      "armor": 21,
      "armorPerLevel": 4,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 150,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "虚空之石",
        "description": "卡萨丁所受的魔法伤害减少10%，并处于幽灵状态。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Kassadin_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：卡萨丁所受的魔法伤害减少10%，并处于幽灵状态。\n补充数值：卡萨丁所受的魔法伤害减少10%，并处于幽灵状态。 【幽灵】状态的单位能够无视其它单位的碰撞体积。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "虚无法球",
        "description": "卡萨丁发射一颗虚无能量法球，造成65/95/125/155/185 + 0.7 × 法术强度魔法伤害并打断引导技能。卡萨丁还会获得80/110/140/170/200 + 0.3 × 法术强度魔法护盾，持续1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NullLance.png",
        "cooldown": "9/8.5/8/7.5/7",
        "cost": "60/65/70/75/80",
        "range": "650",
        "numericDetail": "技能文本：卡萨丁发射一颗虚无能量法球，造成65/95/125/155/185 + 0.7 × 法术强度魔法伤害并打断引导技能。卡萨丁还会获得80/110/140/170/200 + 0.3 × 法术强度魔法护盾，持续1.5秒。\n等级成长：伤害=65/95/125/155/185；护盾值=80/110/140/170/200",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "虚空之刃",
        "description": "被动：卡萨丁的攻击造成额外的25 + 0.1 × 法术强度魔法伤害。 主动：卡萨丁给他的剑刃充能，使他的下次攻击造成50/75/100/125/150 + 0.8 × 法术强度魔法伤害并回复4/4.5/5/5.5/6%已损失法力值，对抗英雄时提升至20/22.5/25/27.5/30%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NetherBlade.png",
        "cooldown": "7",
        "cost": "1",
        "range": "1",
        "numericDetail": "技能文本：被动：卡萨丁的攻击造成额外的25 + 0.1 × 法术强度魔法伤害。 主动：卡萨丁给他的剑刃充能，使他的下次攻击造成50/75/100/125/150 + 0.8 × 法术强度魔法伤害并回复4/4.5/5/5.5/6%已损失法力值，对抗英雄时提升至20/22.5/25/27.5/30%。\n等级成长：主动伤害=50/75/100/125/150；基础法力回复=4/4.5/5/5.5/6%；英雄法力回复=20/22.5/25/27.5/30%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "能量脉冲",
        "description": "被动：卡萨丁附近每有任一个技能施放，能量脉冲的冷却时间就会缩短0.75秒。 主动：卡萨丁释放一道虚空脉冲，造成70/100/130/160/190 + 0.7 × 法术强度魔法伤害和持续1秒的50/55/60/65/70%减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ForcePulse.png",
        "cooldown": "21/20/19/18/17",
        "cost": "60/65/70/75/80",
        "range": "400",
        "numericDetail": "技能文本：被动：卡萨丁附近每有任一个技能施放，能量脉冲的冷却时间就会缩短0.75秒。 主动：卡萨丁释放一道虚空脉冲，造成70/100/130/160/190 + 0.7 × 法术强度魔法伤害和持续1秒的50/55/60/65/70%减速。\n等级成长：伤害=70/100/130/160/190；减速=50/55/60/65/70%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "虚空行走",
        "description": "卡萨丁传送到附近的目标区域，着陆时对身边的所有敌方单位造成70/100/130魔法伤害。 每在15秒内连续施放一次虚空行走，法力消耗就会翻倍，并造成额外的35/45/55 + 0.07 × 法术强度 + 0.01 × 当前资源魔法伤害。消耗和伤害提升最多可叠加4次。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RiftWalk.png",
        "cooldown": "5/3.5/2",
        "cost": "40",
        "range": "500",
        "numericDetail": "技能文本：卡萨丁传送到附近的目标区域，着陆时对身边的所有敌方单位造成70/100/130魔法伤害。 每在15秒内连续施放一次虚空行走，法力消耗就会翻倍，并造成额外的35/45/55 + 0.07 × 法术强度 + 0.01 × 当前资源魔法伤害。消耗和伤害提升最多可叠加4次。\n等级成长：伤害=70/90/110；每层伤害=35/45/55",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60020",
    "key": "Nunu",
    "name": "雪原双子",
    "title": "努努和威朗普",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Nunu.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
    "tags": [
      "Tank",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 610,
      "hpPerLevel": 90,
      "hpRegen": 5,
      "hpRegenPerLevel": 0.8,
      "resource": 280,
      "resourcePerLevel": 42,
      "resourceRegen": 7,
      "resourceRegenPerLevel": 0.5,
      "attackDamage": 61,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.25,
      "armor": 29,
      "armorPerLevel": 4.2,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "弗雷尔卓德的召唤",
        "description": "当努努和威朗普对英雄、野怪或建筑物造成伤害时，他们和一名附近的友方英雄会获得20%攻击速度和10%移动速度，持续4秒。 当威朗普有这个增益时，威朗普的攻击会对附近的其他敌人造成额外的0.3 × 攻击力物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/NunuPassive.png",
        "cooldown": null,
        "cost": null,
        "range": "20",
        "numericDetail": "技能文本：当努努和威朗普对英雄、野怪或建筑物造成伤害时，他们和一名附近的友方英雄会获得20%攻击速度和10%移动速度，持续4秒。 当威朗普有这个增益时，威朗普的攻击会对附近的其他敌人造成额外的0.3 × 攻击力物理伤害。\n补充数值：当努努和威朗普对英雄、野怪或建筑物造成伤害时，他们和一名附近的友方英雄会获得20%攻击速度和10%移动速度，持续4秒。 当威朗普有这个增益时，威朗普的攻击会对附近的其他敌人造成额外的0.3 × 攻击力物理伤害。 增益距离在对抗英雄和建筑物时会获得提升。 持续时间可叠加，但该效果每10秒内只会在每个目标上触发一次。 增益会尝试以最能利用它的英雄为目标。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "吞噬",
        "description": "努努请求威朗普撕咬一名敌人，造成400/600/800/1000/1200真实伤害并在用来对抗小兵和野怪时回复65/95/125/155/185 + 0.1 × 额外最大生命值 + 0.9 × 法术强度生命值。在对抗英雄时，它会转而造成60/100/140/180/220 + 0.05 × 最大生命值 + 0.65 × 法术强度魔法伤害并回复(65/95/125/155/185 + 0.1 × 额外最大生命值 + 0.9 × 法术强度) × 0.6生命值。 治疗效果会在努努和威朗普低于50%生命值时提升50%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuQ.png",
        "cooldown": "13/12/11/10/9",
        "cost": "60",
        "range": "125",
        "numericDetail": "技能文本：努努请求威朗普撕咬一名敌人，造成400/600/800/1000/1200真实伤害并在用来对抗小兵和野怪时回复65/95/125/155/185 + 0.1 × 额外最大生命值 + 0.9 × 法术强度生命值。在对抗英雄时，它会转而造成60/100/140/180/220 + 0.05 × 最大生命值 + 0.65 × 法术强度魔法伤害并回复(65/95/125/155/185 + 0.1 × 额外最大生命值 + 0.9 × 法术强度) × 0.6生命值。 治疗效果会在努努和威朗普低于50%生命值时提升50%。\n等级成长：野怪伤害=400/600/800/1000/1200；英雄伤害=60/100/140/180/220；治疗术=65/95/125/155/185",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "史上最大雪球！",
        "description": "努努和威朗普生成一团雪球，雪球会随着他们的滚动而获得体型与速度的增长。在滚雪球时，他们的转向会变慢，但可通过持续转向来提升转向速度。 雪球造成(180/225/270/315/360 + 1.5 × 法术强度) × 0.333至180/225/270/315/360 + 1.5 × 法术强度魔法伤害，并在碰撞英雄、大型野怪或墙体后造成0.5到0.5 + 0.75秒的击飞。这些数值受益于已滚动的距离。 努努和威朗普可以再次施放来提前放走雪球。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuW.png",
        "cooldown": "14",
        "cost": "50/55/60/65/70",
        "range": "7500",
        "numericDetail": "技能文本：努努和威朗普生成一团雪球，雪球会随着他们的滚动而获得体型与速度的增长。在滚雪球时，他们的转向会变慢，但可通过持续转向来提升转向速度。 雪球造成(180/225/270/315/360 + 1.5 × 法术强度) × 0.333至180/225/270/315/360 + 1.5 × 法术强度魔法伤害，并在碰撞英雄、大型野怪或墙体后造成0.5到0.5 + 0.75秒的击飞。这些数值受益于已滚动的距离。 努努和威朗普可以再次施放来提前放走雪球。\n等级成长：基础伤害=180/225/270/315/360",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "雪球飞射",
        "description": "努努投掷3团雪球，每团雪球造成15/22.5/30/37.5/45 + 0.12 × 法术强度魔法伤害，并使被3团雪球都命中的敌人们遭受持续1秒的30/35/40/45/50%减速。努努可以再次施放这个技能至多2次。 在3秒后，努努会使附近所有已被雪球减速的敌人们禁锢0.5–1.5（1–18级）秒并造成额外的20/30/40/50/60 + 0.8 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuE.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "625",
        "numericDetail": "技能文本：努努投掷3团雪球，每团雪球造成15/22.5/30/37.5/45 + 0.12 × 法术强度魔法伤害，并使被3团雪球都命中的敌人们遭受持续1秒的30/35/40/45/50%减速。努努可以再次施放这个技能至多2次。 在3秒后，努努会使附近所有已被雪球减速的敌人们禁锢0.5–1.5（1–18级）秒并造成额外的20/30/40/50/60 + 0.8 × 法术强度魔法伤害。\n补充数值：努努只能用这个技能使每个敌人减速一次。\n等级成长：伤害=15/22.5/30/37.5/45；移动减速=30/35/40/45/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "绝对零度",
        "description": "努努和威朗普引导一阵强力的暴风雪，至多引导3秒。其中的敌人们会被减速50%，在持续期间不断提升至95%。努努和威朗普在引导期间也会获得65/75/85 + 0.3/0.4/0.5 × 额外生命值 + 1.5 × 法术强度护盾值，在之后的3秒里持续衰减。 当暴风雪结束时，它会爆炸，基于引导时间造成至多625/925/1275 + 3 × 法术强度魔法伤害。 努努和威朗普可以再次施放来使暴风雪提前结束。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuR.png",
        "cooldown": "110/100/90",
        "cost": "100",
        "range": "650",
        "numericDetail": "技能文本：努努和威朗普引导一阵强力的暴风雪，至多引导3秒。其中的敌人们会被减速50%，在持续期间不断提升至95%。努努和威朗普在引导期间也会获得65/75/85 + 0.3/0.4/0.5 × 额外生命值 + 1.5 × 法术强度护盾值，在之后的3秒里持续衰减。 当暴风雪结束时，它会爆炸，基于引导时间造成至多625/925/1275 + 3 × 法术强度魔法伤害。 努努和威朗普可以再次施放来使暴风雪提前结束。\n等级成长：伤害=625/925/1275；护盾值=65/75/85",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60017",
    "key": "Teemo",
    "name": "迅捷斥候",
    "title": "提莫",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Teemo.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 615,
      "hpPerLevel": 104,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.65,
      "resource": 334,
      "resourcePerLevel": 25,
      "resourceRegen": 9.6,
      "resourceRegenPerLevel": 0.45,
      "attackDamage": 54,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.69,
      "attackSpeedPerLevel": 3.38,
      "armor": 24,
      "armorPerLevel": 4.5,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 330,
      "attackRange": 500,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "游击队军备",
        "description": "如果提莫在1.5秒内静止站立且没有受到伤害，就会进入隐形，直到他移动为止。在草丛中时，他可以在移动时保持隐形。 在离开隐形后，提莫会获得持续5秒的20/40/60/80%（英雄等级1/5/10/15）攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/TeemoPassive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：如果提莫在1.5秒内静止站立且没有受到伤害，就会进入隐形，直到他移动为止。在草丛中时，他可以在移动时保持隐形。 在离开隐形后，提莫会获得持续5秒的20/40/60/80%（英雄等级1/5/10/15）攻击速度。\n补充数值：如果提莫在1.5秒内静止站立且没有受到伤害，就会进入隐形，直到他移动为止。在草丛中时，他可以在移动时保持隐形。 在离开隐形后，提莫会获得持续5秒的20/40/60/80%（英雄等级1/5/10/15）攻击速度。 隐形单位只会被【防御塔】或真实视野显形。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "致盲吹箭",
        "description": "提莫发射一根吹箭，对目标造成2/2.25/2.5/2.75/3秒致盲和80/125/170/215/260 + 0.7 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoQ.png",
        "cooldown": "7",
        "cost": "70/75/80/85/90",
        "range": "680",
        "numericDetail": "技能文本：提莫发射一根吹箭，对目标造成2/2.25/2.5/2.75/3秒致盲和80/125/170/215/260 + 0.7 × 法术强度魔法伤害。\n补充数值：小兵和野怪的致盲时长延长200%。\n等级成长：持续时间=2/2.25/2.5/2.75/3；伤害=80/125/170/215/260",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "小莫快跑",
        "description": "被动：提莫获得12/16/20/24/28%移动速度，前提是在最近5秒内未受到来自敌方英雄或防御塔的伤害。 主动：提莫急速奔跑，获得持续3秒的24/32/40/48/56%移动速度，在被攻击时也不会移除。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoW.png",
        "cooldown": "14",
        "cost": "40",
        "range": "20",
        "numericDetail": "技能文本：被动：提莫获得12/16/20/24/28%移动速度，前提是在最近5秒内未受到来自敌方英雄或防御塔的伤害。 主动：提莫急速奔跑，获得持续3秒的24/32/40/48/56%移动速度，在被攻击时也不会移除。\n等级成长：被动移动速度=12/16/20/24/28%；主动移动速度=24/32/40/48/56%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "毒性射击",
        "description": "被动：提莫的攻击会施加剧毒 攻击特效，造成额外的9/23/37/51/65 + 0.3 × 法术强度 + 0.05 × 额外攻击力魔法伤害外加在4秒里持续造成共(6/12/18/24/30 + 0.1 × 法术强度 + 0.025 × 额外攻击力) × 4魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoE.png",
        "cooldown": "0",
        "cost": "0",
        "range": "680",
        "numericDetail": "技能文本：被动：提莫的攻击会施加剧毒 攻击特效，造成额外的9/23/37/51/65 + 0.3 × 法术强度 + 0.05 × 额外攻击力魔法伤害外加在4秒里持续造成共(6/12/18/24/30 + 0.1 × 法术强度 + 0.025 × 额外攻击力) × 4魔法伤害。\n补充数值：这个剧毒效果可对野怪造成160%伤害。\n等级成长：立即伤害=9/23/37/51/65；每秒伤害=6/12/18/24/30",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "种蘑菇",
        "description": "提莫投掷一个蘑菇陷阱，它会在被敌方踩中时爆炸。陷阱造成持续4秒的30/40/50%减速并在此期间持续造成共200/325/450 + 0.5 × 法术强度魔法伤害。敌人会被显形相同的时长。 陷阱持续5分钟并且处于潜行状态。一个蘑菇在被扔到另一个蘑菇上时，会先弹跳然后着陆到它的位置。这个技能有3/4/5层充能(35/30/25秒充能时间)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoR.png",
        "cooldown": "0.25",
        "cost": "75/55/35",
        "range": "600/750/900",
        "numericDetail": "技能文本：提莫投掷一个蘑菇陷阱，它会在被敌方踩中时爆炸。陷阱造成持续4秒的30/40/50%减速并在此期间持续造成共200/325/450 + 0.5 × 法术强度魔法伤害。敌人会被显形相同的时长。 陷阱持续5分钟并且处于潜行状态。一个蘑菇在被扔到另一个蘑菇上时，会先弹跳然后着陆到它的位置。这个技能有3/4/5层充能(35/30/25秒充能时间)。\n等级成长：伤害=200/325/450；减速=30/40/50%；最大弹跳距离=360/440/550；最大陷阱数=3/4/5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60042",
    "key": "Corki",
    "name": "英勇投弹手",
    "title": "库奇",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Corki.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 610,
      "hpPerLevel": 100,
      "hpRegen": 5.5,
      "hpRegenPerLevel": 0.55,
      "resource": 350,
      "resourcePerLevel": 40,
      "resourceRegen": 7.4,
      "resourceRegenPerLevel": 0.7,
      "attackDamage": 52,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.644,
      "attackSpeedPerLevel": 2.8,
      "armor": 27,
      "armorPerLevel": 4.5,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "海克斯科技军备",
        "description": "库奇的攻击和咒刃造成20%额外真实伤害。 攻击次数：0.2 × 攻击力。 暴击次数：(0.2 × 攻击力) × 1 × 暴击伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Corki_RapidReload.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：库奇的攻击和咒刃造成20%额外真实伤害。 攻击次数：0.2 × 攻击力。 暴击次数：(0.2 × 攻击力) × 1 × 暴击伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "磷光炸弹",
        "description": "库奇抛射一颗炸弹，造成60/105/150/195/240 + 1.25 × 额外攻击力 + 1 × 法术强度魔法伤害。该区域及命中的敌方英雄会被显形6秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PhosphorusBomb.png",
        "cooldown": "9/8.5/8/7.5/7",
        "cost": "60/65/70/75/80",
        "range": "825",
        "numericDetail": "技能文本：库奇抛射一颗炸弹，造成60/105/150/195/240 + 1.25 × 额外攻击力 + 1 × 法术强度魔法伤害。该区域及命中的敌方英雄会被显形6秒。\n等级成长：伤害=60/105/150/195/240",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "瓦尔基里俯冲",
        "description": "库奇飞越并烧焦一条路径，使其灼烧2.5秒。火焰中的敌人们在此期间至多受到150/225/300/375/450 + 1.5 × 法术强度 + 2 × 额外攻击力魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CarpetBomb.png",
        "cooldown": "20/18/16/14/12",
        "cost": "80/85/90/95/100",
        "range": "600",
        "numericDetail": "技能文本：库奇飞越并烧焦一条路径，使其灼烧2.5秒。火焰中的敌人们在此期间至多受到150/225/300/375/450 + 1.5 × 法术强度 + 2 × 额外攻击力魔法伤害。\n等级成长：持续伤害=150/225/300/375/450",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "格林机枪",
        "description": "库奇朝他的前方发射加特林机枪，在4秒里持续造成共80/130/180/230/280 + 2.4 × 额外攻击力物理伤害并至多击碎12/14/16/18/20护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GGun.png",
        "cooldown": "12",
        "cost": "50/55/60/65/70",
        "range": "600",
        "numericDetail": "技能文本：库奇朝他的前方发射加特林机枪，在4秒里持续造成共80/130/180/230/280 + 2.4 × 额外攻击力物理伤害并至多击碎12/14/16/18/20护甲和魔法抗性。\n补充数值：击碎效果会在命中后存留2秒。\n等级成长：伤害=80/130/180/230/280；防御削减=12/14/16/18/20",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "火箭轰击",
        "description": "库奇发射一颗导弹，导弹会在命中第一个敌人时爆炸，对周围的敌人们造成90/170/250 + 0.85 × 额外攻击力物理伤害。每第三颗导弹会转而造成(90/170/250 + 0.85 × 额外攻击力) × 2物理伤害。 这个技能至多有4层充能。每次对英雄的普攻在命中时会使充能时间缩短(1 + 2 × 暴击率) × 2秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissileBarrage.png",
        "cooldown": "2",
        "cost": "35",
        "range": "1225",
        "numericDetail": "技能文本：库奇发射一颗导弹，导弹会在命中第一个敌人时爆炸，对周围的敌人们造成90/170/250 + 0.85 × 额外攻击力物理伤害。每第三颗导弹会转而造成(90/170/250 + 0.85 × 额外攻击力) × 2物理伤害。 这个技能至多有4层充能。每次对英雄的普攻在命中时会使充能时间缩短(1 + 2 × 暴击率) × 2秒。\n等级成长：伤害=90/170/250",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60015",
    "key": "Sivir",
    "name": "战争女神",
    "title": "希维尔",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Sivir.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",
    "tags": [
      "Marksman"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 600,
      "hpPerLevel": 104,
      "hpRegen": 3.25,
      "hpRegenPerLevel": 0.55,
      "resource": 340,
      "resourcePerLevel": 45,
      "resourceRegen": 6,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 60,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 1.6,
      "armor": 30,
      "armorPerLevel": 4,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 335,
      "attackRange": 500,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "敏锐疾行",
        "description": "希维尔在用攻击或技能对一名敌方英雄造成伤害时，会获得在1.5秒55/60/65/70/75（英雄等级1/6/11/16/18）持续衰减的移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sivir_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：希维尔在用攻击或技能对一名敌方英雄造成伤害时，会获得在1.5秒55/60/65/70/75（英雄等级1/6/11/16/18）持续衰减的移动速度。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "回旋之刃",
        "description": "希维尔像挥舞回力标一样挥出她的十字刃，对命中的所有敌人造成(60/85/110/135/160 + 0.7 × 额外攻击力 + 0.6 × 法术强度) × (1 + (0.4 × 暴击率 × (1 × 暴击伤害 - 1)))。命中非英雄单位时，会使对每个后续目标的伤害减少，减到40%为止。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirQ.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "55/60/65/70/75",
        "range": "1200",
        "numericDetail": "技能文本：希维尔像挥舞回力标一样挥出她的十字刃，对命中的所有敌人造成(60/85/110/135/160 + 0.7 × 额外攻击力 + 0.6 × 法术强度) × (1 + (0.4 × 暴击率 × (1 × 暴击伤害 - 1)))。命中非英雄单位时，会使对每个后续目标的伤害减少，减到40%为止。\n补充数值：伤害衰减会在折返开始时重置。 伤害受益于暴击几率和暴击伤害，效能为40%。 施放时间随着额外攻击速度的提升而缩短。\n等级成长：伤害=60/85/110/135/160",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "弹射",
        "description": "在接下来的4秒里，希维尔获得20/25/30/35/40%攻击速度并且她的普攻会获得强化，弹射到附近的其它敌人上，每次弹射造成0.4/0.425/0.45/0.475/0.5 × 攻击力物理伤害，至多弹射8次。 如果生成弹射的那次攻击造成了暴击，那么该次普攻的所有弹射都会暴击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirW.png",
        "cooldown": "12",
        "cost": "60",
        "range": "20",
        "numericDetail": "技能文本：在接下来的4秒里，希维尔获得20/25/30/35/40%攻击速度并且她的普攻会获得强化，弹射到附近的其它敌人上，每次弹射造成0.4/0.425/0.45/0.475/0.5 × 攻击力物理伤害，至多弹射8次。 如果生成弹射的那次攻击造成了暴击，那么该次普攻的所有弹射都会暴击。\n补充数值：弹射将优先选择新的目标，如果没有，则折返到它们已经命中过的目标身上。每个目标至多仅会被命中2次弹射。 弹射对小兵造成65%伤害。 这个技能会处决低生命值的小兵。\n等级成长：攻击速度=20/25/30/35/40%；总攻击力收益=40/42.5/45/47.5/50%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "法术护盾",
        "description": "希维尔制造一层持续1.5秒的法术屏障，来格挡一次即将到来的敌方技能。如果希维尔成功格挡了一次技能，那么就会回复0.6/0.65/0.7/0.75/0.8 × 攻击力 + 0.5 × 法术强度生命值并触发【敏锐疾行】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirE.png",
        "cooldown": "24/22.5/21/19.5/18",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：希维尔制造一层持续1.5秒的法术屏障，来格挡一次即将到来的敌方技能。如果希维尔成功格挡了一次技能，那么就会回复0.6/0.65/0.7/0.75/0.8 × 攻击力 + 0.5 × 法术强度生命值并触发【敏锐疾行】。\n补充数值：这个护盾可以格挡英雄技能和装备技能。\n等级成长：总攻击力收益=60/65/70/75/80%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "狩猎",
        "description": "希维尔在战斗中引领附近的友军，为他们提供持续8/10/12秒的20/25/30%移动速度。 在【狩猎】激活期间，希维尔对英雄进行的攻击会使她的基础技能的冷却时间缩短0.5秒。 参与击杀近期造成过伤害的敌人会刷新【狩猎】的持续时长。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "1000",
        "numericDetail": "技能文本：希维尔在战斗中引领附近的友军，为他们提供持续8/10/12秒的20/25/30%移动速度。 在【狩猎】激活期间，希维尔对英雄进行的攻击会使她的基础技能的冷却时间缩短0.5秒。 参与击杀近期造成过伤害的敌人会刷新【狩猎】的持续时长。\n等级成长：最大移动速度=20/25/30%；持续时间=8/10/12",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60080",
    "key": "Pantheon",
    "name": "不屈之枪",
    "title": "潘森",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Pantheon.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 650,
      "hpPerLevel": 109,
      "hpRegen": 6,
      "hpRegenPerLevel": 0.65,
      "resource": 317,
      "resourcePerLevel": 31,
      "resourceRegen": 7.35,
      "resourceRegenPerLevel": 0.45,
      "attackDamage": 64,
      "attackDamagePerLevel": 3.3,
      "attackSpeed": 0.658,
      "attackSpeedPerLevel": 2.95,
      "armor": 40,
      "armorPerLevel": 4.95,
      "magicResist": 28,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 345,
      "attackRange": 175,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "矢志不退",
        "description": "在使用5次技能或攻击后，潘森会强化他的下一个基础技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Pantheon_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在使用5次技能或攻击后，潘森会强化他的下一个基础技能。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "贯星长枪",
        "description": "秒放：潘森刺出他的长枪，对命中的敌人们造成70/100/130/160/190 + 1.15 × 额外攻击力物理伤害。返还这个技能60%的冷却时间。 蓄力：潘森挥出他的长枪，对命中的首个敌人造成70/100/130/160/190 + 1.15 × 额外攻击力 + 0.5 × 法术强度物理伤害并对后续目标造成的伤害减少50%。 这个技能在对抗低于20%生命值的敌人时会获得强化，造成(70/100/130/160/190 + 85/130/175/220/265) + 2.3 × 额外攻击力物理伤害作为替代。 矢志不退加成：造成额外的20–240（1–18级） + 1.15 × 额外攻击力物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonQ.png",
        "cooldown": "11/10.25/9.5/8.75/8",
        "cost": "25",
        "range": "575",
        "numericDetail": "技能文本：秒放：潘森刺出他的长枪，对命中的敌人们造成70/100/130/160/190 + 1.15 × 额外攻击力物理伤害。返还这个技能60%的冷却时间。 蓄力：潘森挥出他的长枪，对命中的首个敌人造成70/100/130/160/190 + 1.15 × 额外攻击力 + 0.5 × 法术强度物理伤害并对后续目标造成的伤害减少50%。 这个技能在对抗低于20%生命值的敌人时会获得强化，造成(70/100/130/160/190 + 85/130/175/220/265) + 2.3 × 额外攻击力物理伤害作为替代。 矢志不退加成：造成额外的20–240（1–18级） + 1.15 × 额外攻击力物理伤害。\n补充数值：对野怪造成80%伤害。 对小兵造成70%伤害。\n等级成长：基础伤害=70/100/130/160/190；处决基础伤害=155/230/305/380/455",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "斗盾跃击",
        "description": "潘森跃向他的目标，晕眩1秒并造成(0.06/0.065/0.07/0.075/0.08 + 0 × 额外最大生命值 + 0.0002 × 法术强度) × 100%最大生命值物理伤害。 矢志不退加成：潘森的下一次攻击会打击3次，总共造成(0.4–0.55（1–18级） × 攻击力) × 3物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonW.png",
        "cooldown": "13/12/11/10/9",
        "cost": "55",
        "range": "600",
        "numericDetail": "技能文本：潘森跃向他的目标，晕眩1秒并造成(0.06/0.065/0.07/0.075/0.08 + 0 × 额外最大生命值 + 0.0002 × 法术强度) × 100%最大生命值物理伤害。 矢志不退加成：潘森的下一次攻击会打击3次，总共造成(0.4–0.55（1–18级） × 攻击力) × 3物理伤害。\n补充数值：对小兵和野怪的最小伤害为60，最大伤害为150。\n等级成长：最大生命值=6/6.5/7/7.5/8%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "神佑枪阵",
        "description": "潘森架起他的圣盾并与选定方向上的敌人交战1.5秒，变得免疫来自所选方向的伤害(防御塔除外)并在持续期间造成1 × 攻击力物理伤害。在引导之后，潘森会用他的圣盾进行猛击，造成55/105/155/205/255 + 1.5 × 额外攻击力物理伤害。 矢志不退加成：当潘森猛击他的圣盾时，获得持续4秒的5–30（1–18级） + 0.025 × 额外最大生命值护甲和5–30（1–18级） + 0.025 × 额外最大生命值魔法抗性，以及持续1.5秒的60%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonE.png",
        "cooldown": "22/21/20/19/18",
        "cost": "80",
        "range": "400",
        "numericDetail": "技能文本：潘森架起他的圣盾并与选定方向上的敌人交战1.5秒，变得免疫来自所选方向的伤害(防御塔除外)并在持续期间造成1 × 攻击力物理伤害。在引导之后，潘森会用他的圣盾进行猛击，造成55/105/155/205/255 + 1.5 × 额外攻击力物理伤害。 矢志不退加成：当潘森猛击他的圣盾时，获得持续4秒的5–30（1–18级） + 0.025 × 额外最大生命值护甲和5–30（1–18级） + 0.025 × 额外最大生命值魔法抗性，以及持续1.5秒的60%移动速度。\n补充数值：再次施放以提前结束(潘森仍然会用他的圣盾猛击来作为最后一击)。 对小兵的伤害降低50%。\n等级成长：圣盾猛击伤害=55/105/155/205/255",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "大荒星陨",
        "description": "被动：潘森获得10/20/30%护甲穿透。 主动：潘森聚集他的力量以跃至空中。他会从天上掷出他的长枪，在小范围内造成70/100/130 + 1.15 × 额外攻击力 + 0.5 × 法术强度物理伤害和持续2秒的50%减速。 潘森随后会如陨石一般落向目标区域。对一条直线上的敌人最多造成300/500/700 + 1 × 法术强度魔法伤害(最多降低至50%伤害，极小值出现于区域的边缘)。 这个技能会立刻使矢志不退准备就绪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonR.png",
        "cooldown": "180/165/150",
        "cost": "100",
        "range": "5500",
        "numericDetail": "技能文本：被动：潘森获得10/20/30%护甲穿透。 主动：潘森聚集他的力量以跃至空中。他会从天上掷出他的长枪，在小范围内造成70/100/130 + 1.15 × 额外攻击力 + 0.5 × 法术强度物理伤害和持续2秒的50%减速。 潘森随后会如陨石一般落向目标区域。对一条直线上的敌人最多造成300/500/700 + 1 × 法术强度魔法伤害(最多降低至50%伤害，极小值出现于区域的边缘)。 这个技能会立刻使矢志不退准备就绪。\n等级成长：伤害=300/500/700；护甲穿透=10/20/30%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60053",
    "key": "Blitzcrank",
    "name": "蒸汽机器人",
    "title": "布里茨",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Blitzcrank.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    "tags": [
      "Tank",
      "Support"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 600,
      "hpPerLevel": 109,
      "hpRegen": 7.5,
      "hpRegenPerLevel": 0.75,
      "resource": 267,
      "resourcePerLevel": 40,
      "resourceRegen": 8.5,
      "resourceRegenPerLevel": 0.8,
      "attackDamage": 62,
      "attackDamagePerLevel": 3.5,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 1.13,
      "armor": 37,
      "armorPerLevel": 4.7,
      "magicResist": 32,
      "magicResistPerLevel": 2.05,
      "moveSpeed": 325,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "法力屏障",
        "description": "当布里茨跌到30%生命值以下时，它会获得持续10秒的0.35 × 当前资源护盾值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Blitzcrank_ManaBarrier.png",
        "cooldown": "90秒",
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：当布里茨跌到30%生命值以下时，它会获得持续10秒的0.35 × 当前资源护盾值。\n被动冷却：90秒",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "机械飞爪",
        "description": "布里茨射出它的右拳，将命中的第一个敌人拉拽向它并造成110/160/210/260/310 + 1.2 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RocketGrab.png",
        "cooldown": "20/19/18/17/16",
        "cost": "100",
        "range": "1079",
        "numericDetail": "技能文本：布里茨射出它的右拳，将命中的第一个敌人拉拽向它并造成110/160/210/260/310 + 1.2 × 法术强度魔法伤害。\n等级成长：伤害=110/160/210/260/310",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "过载运转",
        "description": "布里茨进行超级充能，获得持续衰减的60/65/70/75/80%移动速度和30/40/50/60/70%攻击速度，持续5秒。 持续期间过后，布里茨会减速30%，持续1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Overdrive.png",
        "cooldown": "15",
        "cost": "75",
        "range": "1",
        "numericDetail": "技能文本：布里茨进行超级充能，获得持续衰减的60/65/70/75/80%移动速度和30/40/50/60/70%攻击速度，持续5秒。 持续期间过后，布里茨会减速30%，持续1.5秒。\n补充数值：移动速度会在2.5秒里持续衰减至10%\n等级成长：移动速度=60/65/70/75/80%；攻击速度=30/40/50/60/70%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "能量铁拳",
        "description": "布里茨给它的拳头充能，使它的下次攻击可以击飞1秒并造成2 × 攻击力 + 0.25 × 法术强度物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PowerFist.png",
        "cooldown": "7/6.5/6/5.5/5",
        "cost": "25",
        "range": "300",
        "numericDetail": "技能文本：布里茨给它的拳头充能，使它的下次攻击可以击飞1秒并造成2 × 攻击力 + 0.25 × 法术强度物理伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "静电力场",
        "description": "被动：在这个技能可以使用时，闪电会充盈着布里茨的双拳，标记它攻击的敌人。在1秒后，被标记的敌人会被震击，受到50/100/150 + 0.3/0.4/0.5 × 法术强度 + 0.02 × 当前资源魔法伤害。 主动：布里茨进行过度充能，对附近的敌人造成275/400/525 + 1 × 法术强度魔法伤害和0.5秒沉默效果。敌人的护盾也会被摧毁。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/StaticField.png",
        "cooldown": "60/40/20",
        "cost": "100",
        "range": "600",
        "numericDetail": "技能文本：被动：在这个技能可以使用时，闪电会充盈着布里茨的双拳，标记它攻击的敌人。在1秒后，被标记的敌人会被震击，受到50/100/150 + 0.3/0.4/0.5 × 法术强度 + 0.02 × 当前资源魔法伤害。 主动：布里茨进行过度充能，对附近的敌人造成275/400/525 + 1 × 法术强度魔法伤害和0.5秒沉默效果。敌人的护盾也会被摧毁。\n补充数值：不会打破野怪身上的护盾。\n等级成长：被动效果基础伤害=50/100/150；被动部分的法术强度收益=30/40/50%；主动效果基础伤害=275/400/525",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60016",
    "key": "Soraka",
    "name": "众星之子",
    "title": "索拉卡",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/Soraka.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",
    "tags": [
      "Support",
      "Mage"
    ],
    "resourceName": "法力",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [],
    "stats": {
      "hp": 605,
      "hpPerLevel": 88,
      "hpRegen": 2.5,
      "hpRegenPerLevel": 0.5,
      "resource": 425,
      "resourcePerLevel": 40,
      "resourceRegen": 11.5,
      "resourceRegenPerLevel": 0.4,
      "attackDamage": 50,
      "attackDamagePerLevel": 3,
      "attackSpeed": 0.625,
      "attackSpeedPerLevel": 2.14,
      "armor": 32,
      "armorPerLevel": 5,
      "magicResist": 30,
      "magicResistPerLevel": 1.3,
      "moveSpeed": 325,
      "attackRange": 550,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "拯救",
        "description": "索拉卡在朝着生命值低于40%的友军移动时会获得90%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Soraka_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": "2500",
        "numericDetail": "技能文本：索拉卡在朝着生命值低于40%的友军移动时会获得90%移动速度。\n补充数值：索拉卡在朝着生命值低于40%的友军移动时会获得90%移动速度。 该友方英雄必须在2500码以内。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "流星坠落",
        "description": "索拉卡召唤下一颗星星，造成85/120/155/190/225 + 0.35 × 法术强度魔法伤害和持续1.5秒的30%减速效果。 命中一个敌方英雄时会为索拉卡提供活力焕发，在2.5秒里持续回复共60/75/90/105/120 + 0.3 × 法术强度生命值并提供在此期间持续衰减的20/22.5/25/27.5/30%移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaQ.png",
        "cooldown": "8/7/6/5/4",
        "cost": "45/50/55/60/65",
        "range": "810",
        "numericDetail": "技能文本：索拉卡召唤下一颗星星，造成85/120/155/190/225 + 0.35 × 法术强度魔法伤害和持续1.5秒的30%减速效果。 命中一个敌方英雄时会为索拉卡提供活力焕发，在2.5秒里持续回复共60/75/90/105/120 + 0.3 × 法术强度生命值并提供在此期间持续衰减的20/22.5/25/27.5/30%移动速度。\n等级成长：伤害=85/120/155/190/225；生命回复(活力焕发)=60/75/90/105/120；移动速度=20/22.5/25/27.5/30%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "星之灌注",
        "description": "索拉卡给一名友方英雄回复90/110/130/150/170 + 0.5 × 法术强度生命值。 如果索拉卡带有活力焕发，那么生命值消耗会降低80/85/90/95/100%，并且目标也会获得活力焕发，持续2.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaW.png",
        "cooldown": "6/5/4/3/2",
        "cost": "40/45/50/55/60",
        "range": "550",
        "numericDetail": "技能文本：索拉卡给一名友方英雄回复90/110/130/150/170 + 0.5 × 法术强度生命值。 如果索拉卡带有活力焕发，那么生命值消耗会降低80/85/90/95/100%，并且目标也会获得活力焕发，持续2.5秒。\n补充数值：这个技能在索拉卡低于0.05 × 最大生命值生命值时无法使用。\n等级成长：治疗效果=90/110/130/150/170；生命值消耗缩减=80/85/90/95/100%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "星体结界",
        "description": "索拉卡创造一个星之领域，对英雄造成70/95/120/145/170 + 0.4 × 法术强度魔法伤害。领域会存留1.5秒，沉默其中的敌人们。当领域消失后，领域中的英雄们会被禁锢1/1.25/1.5/1.75/2秒并受到70/95/120/145/170 + 0.4 × 法术强度魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaE.png",
        "cooldown": "20/19/18/17/16",
        "cost": "70/75/80/85/90",
        "range": "925",
        "numericDetail": "技能文本：索拉卡创造一个星之领域，对英雄造成70/95/120/145/170 + 0.4 × 法术强度魔法伤害。领域会存留1.5秒，沉默其中的敌人们。当领域消失后，领域中的英雄们会被禁锢1/1.25/1.5/1.75/2秒并受到70/95/120/145/170 + 0.4 × 法术强度魔法伤害。\n等级成长：伤害=70/95/120/145/170；禁锢时长=1/1.25/1.5/1.75/2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "祈愿",
        "description": "索拉卡召唤神圣的能量，来为所有友方英雄回复150/250/350 + 0.5 × 法术强度生命值，无论相距多远。对生命值低于40%的友方英雄的回复效果提升至(150/250/350 + 0.5 × 法术强度) × (1 + 0.5)。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaR.png",
        "cooldown": "150/135/120",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：索拉卡召唤神圣的能量，来为所有友方英雄回复150/250/350 + 0.5 × 法术强度生命值，无论相距多远。对生命值低于40%的友方英雄的回复效果提升至(150/250/350 + 0.5 × 法术强度) × (1 + 0.5)。\n等级成长：治疗效果=150/250/350",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  },
  {
    "classicId": "60036",
    "key": "DrMundo",
    "name": "祖安狂人",
    "title": "蒙多医生",
    "portrait": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/champion/DrMundo.png",
    "splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "resourceName": "无",
    "statsSourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
    "statsFallbackFields": [
      "attackDamagePerLevel"
    ],
    "statsConfirmedZeroFields": [
      "resource",
      "resourceRegen"
    ],
    "stats": {
      "hp": 640,
      "hpPerLevel": 103,
      "hpRegen": 7,
      "hpRegenPerLevel": 0.5,
      "resource": 0,
      "resourcePerLevel": 0,
      "resourceRegen": 0,
      "resourceRegenPerLevel": 0,
      "attackDamage": 61,
      "attackDamagePerLevel": 2.5,
      "attackSpeed": 0.67,
      "attackSpeedPerLevel": 3.3,
      "armor": 32,
      "armorPerLevel": 4.5,
      "magicResist": 29,
      "magicResistPerLevel": 2.3,
      "moveSpeed": 345,
      "attackRange": 125,
      "crit": 0,
      "critPerLevel": 0
    },
    "abilities": [
      {
        "key": "P",
        "name": "想去哪就去哪",
        "description": "蒙多医生抵抗他受到的第一个定身效果，但会失去4%当前生命值并在附近掉落一罐持续7秒的化学药剂。移动到化学药剂上可使这个技能的冷却时间缩短15秒并回复4%最大生命值。敌方英雄在移动到化学药剂上后会将其摧毁。 蒙多医生每5秒回复0.4/0.45/0.5/0.55/0.6/0.65/0.75/0.85/0.95/1.05/1.15/1.25/1.4/1.55/1.7/1.9/2.1/2.3%（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/DrMundo_P.png",
        "cooldown": "60/51/42/33/24/15（英雄等级1/3/6/9/12/15）秒",
        "cost": null,
        "range": "0",
        "numericDetail": "技能文本：蒙多医生抵抗他受到的第一个定身效果，但会失去4%当前生命值并在附近掉落一罐持续7秒的化学药剂。移动到化学药剂上可使这个技能的冷却时间缩短15秒并回复4%最大生命值。敌方英雄在移动到化学药剂上后会将其摧毁。 蒙多医生每5秒回复0.4/0.45/0.5/0.55/0.6/0.65/0.75/0.85/0.95/1.05/1.15/1.25/1.4/1.55/1.7/1.9/2.1/2.3%（英雄等级1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18）最大生命值。\n被动冷却：60/51/42/33/24/15（英雄等级1/3/6/9/12/15）秒",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "病毒屠刀",
        "description": "蒙多医生掷出一把沾染病菌的骨锯，对命中的第一个敌人造成20/22.5/25/27.5/30%当前生命值的魔法伤害，并对其造成持续2秒的40%减速。 如果骨锯命中了一名英雄或野怪，蒙多医生会回复(1 × 50/60/70/80/90)生命值。如果骨锯命中了一个非英雄非野怪的单位，蒙多医生则会回复(0.5 × 50/60/70/80/90)生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoQ.png",
        "cooldown": "4",
        "cost": "0",
        "range": "975",
        "numericDetail": "技能文本：蒙多医生掷出一把沾染病菌的骨锯，对命中的第一个敌人造成20/22.5/25/27.5/30%当前生命值的魔法伤害，并对其造成持续2秒的40%减速。 如果骨锯命中了一名英雄或野怪，蒙多医生会回复(1 × 50/60/70/80/90)生命值。如果骨锯命中了一个非英雄非野怪的单位，蒙多医生则会回复(0.5 × 50/60/70/80/90)生命值。\n补充数值：至少造成80/130/180/230/280魔法伤害，并且对野怪至多造成250/325/400/475/550魔法伤害。\n等级成长：当前生命值伤害=20/22.5/25/27.5/30%；最小伤害=80/130/180/230/280；野怪伤害上限=250/325/400/475/550；生命值消耗=50/60/70/80/90",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "电击疗法",
        "description": "蒙多医生为一台除颤器充电，每秒对附近的敌人们造成20/35/50/65/80魔法伤害，至多持续3秒。此外，他会将在最初0.75秒里受到的(0.8–0.95（1–18级）) × 100%伤害值和在剩余时长里受到的25%伤害值储存为灰色生命值，并能再次施放这个技能。 再次施放：引爆除颤器，对附近的敌人们造成20/35/50/65/80 + 0.07 × 额外最大生命值魔法伤害。如果这个效果命中了至少一名敌方英雄，那么蒙多医生会回复100%的灰色生命值，否则蒙多医生会转而回复50%的灰色生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoW.png",
        "cooldown": "17/16.5/16/15.5/15",
        "cost": "0",
        "range": "325",
        "numericDetail": "技能文本：蒙多医生为一台除颤器充电，每秒对附近的敌人们造成20/35/50/65/80魔法伤害，至多持续3秒。此外，他会将在最初0.75秒里受到的(0.8–0.95（1–18级）) × 100%伤害值和在剩余时长里受到的25%伤害值储存为灰色生命值，并能再次施放这个技能。 再次施放：引爆除颤器，对附近的敌人们造成20/35/50/65/80 + 0.07 × 额外最大生命值魔法伤害。如果这个效果命中了至少一名敌方英雄，那么蒙多医生会回复100%的灰色生命值，否则蒙多医生会转而回复50%的灰色生命值。\n等级成长：每段伤害=5/8.75/12.5/16.25/20；再次施放 伤害=20/35/50/65/80",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "大力行医",
        "description": "被动：蒙多医生获得(2/2.3/2.6/2.9/3.2 × 最大生命值) × 0.01攻击力。 主动：蒙多医生粗暴地挥舞他的“医用”手提包，使他的下次攻击造成额外的5/15/25/35/45 + 0.05 × 额外生命值物理伤害，基于他的已损失生命值至多提升至(1.4 − 1) × 100%。如果击杀了目标敌人，蒙多还会将其拍飞，对其途经的所有敌人造成5/15/25/35/45 + 0.05 × 额外生命值物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoE.png",
        "cooldown": "9/8.25/7.5/6.75/6",
        "cost": "0",
        "range": "0",
        "numericDetail": "技能文本：被动：蒙多医生获得(2/2.3/2.6/2.9/3.2 × 最大生命值) × 0.01攻击力。 主动：蒙多医生粗暴地挥舞他的“医用”手提包，使他的下次攻击造成额外的5/15/25/35/45 + 0.05 × 额外生命值物理伤害，基于他的已损失生命值至多提升至(1.4 − 1) × 100%。如果击杀了目标敌人，蒙多还会将其拍飞，对其途经的所有敌人造成5/15/25/35/45 + 0.05 × 额外生命值物理伤害。\n补充数值：来自被动部分的加成会在70%已损失生命值时达到最大值。 对小兵造成140%伤害。对野怪造成140%伤害。\n等级成长：基础伤害=5/15/25/35/45；生命值消耗=10/25/40/55/70；生命值转攻击力=2/2.3/2.6/2.9/3.2%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "极限剂量",
        "description": "蒙多将化学药剂注入体内，获得相当于他15/20/25%已损失生命值的最大生命值、15/25/35%移动速度、并在10秒里持续回复共20/40/60%最大生命值。 在3级时，附近的每个敌方英雄都会使这两种治疗效果提升额外的5%。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoR.png",
        "cooldown": "120",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：蒙多将化学药剂注入体内，获得相当于他15/20/25%已损失生命值的最大生命值、15/25/35%移动速度、并在10秒里持续回复共20/40/60%最大生命值。 在3级时，附近的每个敌方英雄都会使这两种治疗效果提升额外的5%。\n等级成长：额外生命值=15/20/25%；移动速度=15/25/35%；最大生命值百分比=20/40/60%",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      }
    ]
  }
];

export const regularMayhemAugments: MayhemAugment[] = [
  {
    "id": 1180,
    "apiName": "ARAM_BigBrain",
    "name": "超强大脑",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bigbrain_small.png",
    "description": "每拥有1法术强度就会获得3护盾值。阵亡时或耗尽后70秒重置。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1141,
    "apiName": "ARAM_AllForYou",
    "name": "全心为你",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/allforyou_small.png",
    "description": "你的治疗和护盾在用在一个友军身上时会变强30%。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1002,
    "apiName": "ARAM_ApexInventor",
    "name": "尖端发明家",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/apexinventor_small.png",
    "description": "获得100装备急速(相当于50%装备冷却缩减)。 装备急速可缩减所有装备技能的冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1004,
    "apiName": "ARAM_BacktoBasics",
    "name": "回归基本功",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/backtobasics_small.png",
    "description": "获得提升过的技能伤害、治疗效果、护盾和技能急速，但你不能使用你的终极技能。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1007,
    "apiName": "ARAM_BluntForce",
    "name": "大力",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bluntforce_small.png",
    "description": "获得20%攻击力。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1103,
    "apiName": "ARAM_BreadAndButter",
    "name": "面包和黄油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "你的【所选技能】技能获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1151,
    "apiName": "ARAM_BreadAndCheese",
    "name": "面包和奶酪",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "你的【所选技能】技能获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1150,
    "apiName": "ARAM_BreadAndJam",
    "name": "面包和果酱",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "你的【所选技能】技能获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1011,
    "apiName": "ARAM_CantTouchThis",
    "name": "你摸不到",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/canttouchthis_small.png",
    "description": "施放你的终极技能会使你进入持续2秒的的免疫伤害状态(8秒冷却时间)。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1013,
    "apiName": "ARAM_CelestialBody",
    "name": "星界躯体",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/celestialbody_small.png",
    "description": "获得1500生命值，但你造成的伤害降低10%。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1015,
    "apiName": "ARAM_CircleofDeath",
    "name": "死亡之环",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/circleofdeath_small.png",
    "description": "你造成的治疗效果和生命回复效果会对相距最近的那个敌方英雄造成一部分治疗数额的魔法伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1018,
    "apiName": "ARAM_CourageoftheColossus",
    "name": "巨像的勇气",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/courageofthecolossus_small.png",
    "description": "定身或缚地一个敌方英雄后获得150–450（1–18级） + 0.04 × 最大生命值护盾值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1118,
    "apiName": "ARAM_CriticalHealing",
    "name": "会心治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/criticalhealing_small.png",
    "description": "你的治疗和护盾可以暴击，造成40%额外数额的效果。获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1019,
    "apiName": "ARAM_Dashing",
    "name": "全凭身法",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dashing_small.png",
    "description": "你的冲刺、跳跃、闪烁或传送类技能获得175技能急速。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1020,
    "apiName": "ARAM_DawnbringersResolve",
    "name": "黎明使者的坚决",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dawnbringersresolve_small.png",
    "description": "在跌到50%生命值以下时，在3秒里持续回复共30%最大生命值。 阵亡时或每45秒重置。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1022,
    "apiName": "ARAM_Deft",
    "name": "灵巧",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/deft_small.png",
    "description": "获得 60%攻击速度。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1025,
    "apiName": "ARAM_DiveBomber",
    "name": "俯冲轰炸",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/divebomber_small.png",
    "description": "你的队伍在每回合的第一次阵亡会爆炸，造成巨额真实伤害。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1026,
    "apiName": "ARAM_DontBlink",
    "name": "唯快不破",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dontblink_small.png",
    "description": "你每比目标多10移动速度，则对其多造成1%额外伤害。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1029,
    "apiName": "ARAM_EtherealWeapon",
    "name": "虚幻武器",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/etherealweapon_small.png",
    "description": "你的技能可施加攻击特效。每个目标有1秒冷却时间。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1030,
    "apiName": "ARAM_Eureka",
    "name": "尤里卡",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/eureka_small.png",
    "description": "获得相当于30%法术强度的技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1036,
    "apiName": "ARAM_Firebrand",
    "name": "火上浇油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firebrand_small.png",
    "description": "你的攻击会施加一个可无限叠加的灼烧攻击特效，持续造成伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1037,
    "apiName": "ARAM_FirstAidKit",
    "name": "急救用具",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firstaidkit_small.png",
    "description": "获得20%治疗和护盾强度。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1116,
    "apiName": "ARAM_Flashy",
    "name": "闪现向前",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashy_small.png",
    "description": "你的闪现有3层充能。在120秒后，再次获得所有充能。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1322,
    "apiName": "ARAM_GetExcited",
    "name": "罪恶快感",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/getexcited_small.png",
    "description": "参与击杀后，获得持续4秒的100%移动速度和15%攻击速度。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1041,
    "apiName": "ARAM_Goliath",
    "name": "歌利亚巨人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/goliath_small.png",
    "description": "体型变大，获得35%生命值和15%适应之力。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1138,
    "apiName": "ARAM_Goredrink",
    "name": "渴血",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/goredrink_small.png",
    "description": "获得15%全能吸血。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1181,
    "apiName": "ARAM_HeavyHitter",
    "name": "重量级打击手",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/heavyhitter_small.png",
    "description": "你的攻击造成相当于你3.5%最大生命值的额外物理伤害。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1044,
    "apiName": "ARAM_IceCold",
    "name": "冰寒",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/icecold_small.png",
    "description": "你的减速效果可使移动速度降低额外的75。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1045,
    "apiName": "ARAM_InfernalConduit",
    "name": "炼狱导管",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/infernalconduit_small.png",
    "description": "你的技能会施加一层可无限叠加的灼烧，持续造成魔法伤害。 你的灼烧效果会降低你各基础技能的冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1046,
    "apiName": "ARAM_InfernalSoul",
    "name": "炼狱龙魂",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/infernalsoul_small.png",
    "description": "你获得炼狱龙魂，使用技能或攻击命中敌人时造成额外伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1047,
    "apiName": "ARAM_ItsCritical",
    "name": "关键暴击",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/itscritical_small.png",
    "description": "获得50%暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1048,
    "apiName": "ARAM_JeweledGauntlet",
    "name": "珠光护手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/jeweledgauntlet_small.png",
    "description": "你的技能可以造成暴击。 获得 (0.25 + 0.0004 × 法术强度) × 100%暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1305,
    "apiName": "ARAM_LegDay",
    "name": "练腿日",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/legday_small.png",
    "description": "获得50移动速度和40%减速抗性。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1053,
    "apiName": "ARAM_MadScientist",
    "name": "科学狂人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/madscientist_small.png",
    "description": "每次重生时，你的体型要么变大(获得30%适应之力和20%生命值)，要么变小(获得70技能急速和40%移动速度)。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1129,
    "apiName": "ARAM_Marksmage",
    "name": "神射法师",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/marksmage_small.png",
    "description": "你的攻击造成相当于你75%法术强度的额外物理伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1054,
    "apiName": "ARAM_MasterofDuality",
    "name": "物法皆修",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/masterofduality_small.png",
    "description": "你的每次攻击为你提供可叠加的6–18（1–18级）法术强度，并且你的每次技能在伤害敌人时为你提供可叠加的3–9（1–18级）攻击力， 这个增益可无限叠加并刷新，但有5秒的持续时间。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1056,
    "apiName": "ARAM_MindtoMatter",
    "name": "由心及物",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mindtomatter_small.png",
    "description": "使你的最大生命值提升，数额相当于你一半的法力值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1104,
    "apiName": "ARAM_Minionmancer",
    "name": "仆从大师",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/minionmancer_small.png",
    "description": "你的召唤物获得40%体型提升、生命值和伤害。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1057,
    "apiName": "ARAM_MountainSoul",
    "name": "山脉龙魂",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mountainsoul_small.png",
    "description": "你获得山脉龙魂，在脱离战斗之后获得一个持续一小段时间的护盾。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1058,
    "apiName": "ARAM_MysticPunch",
    "name": "秘术冲拳",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mysticpunch_small.png",
    "description": "攻击特效使你的各个技能的冷却时间缩减1.25秒。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1060,
    "apiName": "ARAM_OceanSoul",
    "name": "海洋龙魂",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/oceansoul_small.png",
    "description": "获得【海洋龙魂】，在对敌方英雄造成伤害后提供高额的生命和法力回复。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1062,
    "apiName": "ARAM_OmniSoul",
    "name": "全能龙魂",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/omnisoul_small.png",
    "description": "获得3个随机龙魂。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1063,
    "apiName": "ARAM_OutlawsGrit",
    "name": "狂徒豪气",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/outlawsgrit_small.png",
    "description": "在使用一次冲刺、闪烁或传送之后，你获得12护甲和魔法抗性，这个效果至多可在5层时叠加至(12 × 5)。 每15秒重置。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1311,
    "apiName": "ARAM_Overflow",
    "name": "溢流",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/overflow_small.png",
    "description": "你的法力值消耗翻倍。你的技能的治疗效果、护盾效果和伤害的效能提升((10 + 0.005 × 当前资源) × 0.01) × 100%。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1064,
    "apiName": "ARAM_Perseverance",
    "name": "坚韧",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/perseverance_small.png",
    "description": "获得巨幅提升的生命回复，这个数额会在低生命值时进一步提升。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1324,
    "apiName": "ARAM_ProteinShake",
    "name": "蛋白粉奶昔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/proteinshake_small.png",
    "description": "获得25 + 0.35 × 额外护甲 + 0.35 × 额外魔法抗性%治疗和护盾强度，基于额外护甲和魔抗。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1154,
    "apiName": "ARAM_Quest_UrfsChampion",
    "name": "海牛阿福的勇士",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/quest_urfschampion_small.png",
    "description": "需求：参与击杀10次。 奖励：金铲铲",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1156,
    "apiName": "ARAM_Quest_WoogletsWitchcap",
    "name": "沃格勒特的巫师帽",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/quest_woogletswitchcap_small.png",
    "description": "立刻获得一个无用大棒。 任务：持有灭世者的死亡之帽和中娅沙漏。 奖励：获得沃格勒特的巫师帽。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1067,
    "apiName": "ARAM_RabbleRousing",
    "name": "活力焕发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/rabblerousing_small.png",
    "description": "使用【所选技能】技能时回复生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1068,
    "apiName": "ARAM_Recursion",
    "name": "循环往复",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/recursion_small.png",
    "description": "获得60技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1170,
    "apiName": "ARAM_ScopedWeapons",
    "name": "万用瞄准镜",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopedweapons_small.png",
    "description": "获得75攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1071,
    "apiName": "ARAM_ScopierWeapons",
    "name": "更万用的瞄准镜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopierweapons_small.png",
    "description": "获得150攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1115,
    "apiName": "ARAM_ScopiestWeapons",
    "name": "最万用的瞄准镜",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopiestweapons_small.png",
    "description": "获得250攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1113,
    "apiName": "ARAM_SkilledSniper",
    "name": "老练狙神",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/skilledsniper_small.png",
    "description": "用一个非终极技能狙击一个敌人时，返还该技能80%冷却时间(周期性技能返还65%)。 狙击 - 从700码外对敌人造成伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1136,
    "apiName": "ARAM_SlapAround",
    "name": "扇巴掌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/slaparound_small.png",
    "description": "每当你定身或缚地一个敌人时，获得一层可叠加的10适应之力。阵亡时损失50%层数。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1076,
    "apiName": "ARAM_SonicBoom",
    "name": "天音爆",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/sonicboom_small.png",
    "description": "在为你的友军提供增益效果、治疗效果或护盾效果时，会对其附近的敌人们造成伤害和减速。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1077,
    "apiName": "ARAM_SoulSiphon",
    "name": "灵魂虹吸",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/soulsiphon_small.png",
    "description": "暴击造成伤害的12%会等额治疗你自身。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1214,
    "apiName": "ARAM_SpinToWin",
    "name": "旋转至胜",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/spintowin_small.png",
    "description": "你的旋转类技能获得30技能急速并且多造成30%伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1353,
    "apiName": "ARAM_TankEngine",
    "name": "坦克引擎",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tank_engine_small.png",
    "description": "参与击杀时，获得一个层数，使你的体型增大并提升最大生命值。阵亡时损失层数。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1080,
    "apiName": "ARAM_TankItOrLeaveIt",
    "name": "会心防御",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tankitorleaveit_small.png",
    "description": "你可以使用你的暴击几率(最大50%几率)来进行会心防御，使你有一定几率来使所受伤害降低。 获得25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1081,
    "apiName": "ARAM_TapDancer",
    "name": "踢踏舞",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tapdancer_small.png",
    "description": "你的攻击会为你提供10移动速度。获得(0.001 × 移动速度) × 100%攻击速度。 这个增益可无限叠加并刷新，但有5秒的持续时间。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1084,
    "apiName": "ARAM_ThreadtheNeedle",
    "name": "穿针引线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/threadtheneedle_small.png",
    "description": "获得18%护甲穿透和法术穿透。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1320,
    "apiName": "ARAM_Upgrade_Collector",
    "name": "升级：收集者",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradecollector_small.png",
    "description": "使用【收集者】的被动处决敌人时的处决阈值提升0.5%，并且提供额外50金币。 获得250金币。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1336,
    "apiName": "ARAM_Upgrade_IE",
    "name": "升级：无尽之刃",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradeie_small.png",
    "description": "获得25% 暴击几率和500金币。 装备无尽之刃后，可使你的暴击几率在每次攻击都会提供随机的暴击伤害。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1319,
    "apiName": "ARAM_Upgrade_Immolate",
    "name": "升级：献祭",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradeimmolate_small.png",
    "description": "【璀璨回响】和【日炎圣盾】每当有目标受到【献祭】效果影响时，提供12 金币。获得250金币。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1318,
    "apiName": "ARAM_Upgrade_ZH",
    "name": "升级：中娅",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradezh_small.png",
    "description": "【中娅沙漏】的冷却时间降低至45秒。你现在可以在【中娅沙漏】、【探索者的护臂】或【沃格勒特的巫师帽】凝滞状态持续期间移动并获得移动速度。 获得250金币。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1092,
    "apiName": "ARAM_Vulnerability",
    "name": "易损",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/vulnerability_small.png",
    "description": "你的装备效果和持续伤害效果可以暴击。 获得 25%暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1097,
    "apiName": "ARAM_WitchfulThinking",
    "name": "巫师式思考",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/witchfulthinking_small.png",
    "description": "获得20–80（1–18级）法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1098,
    "apiName": "ARAM_WithHaste",
    "name": "急急小子",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/withhaste_small.png",
    "description": "获得移动速度，相当于你的120%技能急速。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1326,
    "apiName": "Nightstalking",
    "name": "夜狩",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/nightstalking_small.png",
    "description": "在对敌人造成伤害的3秒内参与击杀该敌人会使你进入1.5秒的隐身状态。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1028,
    "apiName": "ARAM_Erosion",
    "name": "侵蚀",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/erosion_small.png",
    "description": "对敌人造成伤害时会施加一层持续4秒、每层1.5%的护甲和魔法抗性击碎效果，最多叠加20层。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1034,
    "apiName": "VeilOfWarding",
    "name": "防护面纱",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "每30秒获得一层法术护盾来格挡下一个敌方技能。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1211,
    "apiName": "ARAM_ItsKillingTime",
    "name": "杀戮时间到了",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/itskillingtime_small.png",
    "description": "在施放你的终极技能后，将所有敌人打上死亡标记。 对带标记的敌人造成伤害时，会将一部分已造成伤害储存起来，然后在标记结束时将已储存的伤害引爆。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1105,
    "apiName": "ARAM_Homeguard",
    "name": "家园卫士",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/homeguard_small.png",
    "description": "获得100%移动速度，在受到伤害后失效6秒。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1051,
    "apiName": "ARAM_LightemUp",
    "name": "点亮他们！",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightemup_small.png",
    "description": "每第4次攻击发射4个飞弹以造成魔法伤害攻击特效。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1072,
    "apiName": "ARAM_SearingDawn",
    "name": "炽烈黎明",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/searingdawn_small.png",
    "description": "你的技能会标记敌人，使其在被你的友军的下一个攻击或技能命中时会受到额外魔法伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1073,
    "apiName": "ARAM_ShadowRunner",
    "name": "暗影疾奔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shadowrunner_small.png",
    "description": "在使用一个冲刺、跳跃、闪烁或传送类技能或离开潜行状态之后，获得持续2秒的200移动速度。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1327,
    "apiName": "Adamant",
    "name": "坚若磐石",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "每当你定身或缚地一个敌人时，获得持续10秒的2–10（1–18级）护甲和魔抗(至多至10层)。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1087,
    "apiName": "ARAM_Typhoon",
    "name": "台风",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/typhoon_small.png",
    "description": "你的攻击会对一个额外目标发射一根弩箭，这个弩箭会造成削减过的伤害并施加攻击特效。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1095,
    "apiName": "ARAM_WindspeakersBlessing",
    "name": "风语者的祝福",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/windspeakersblessing_small.png",
    "description": "你的治疗效果和护盾效果还会提升目标30–60（1–18级）护甲和魔法抗性，这些加成持续3秒。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1112,
    "apiName": "ARAM_UltimateUnstoppable",
    "name": "终极不可阻挡",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimateunstoppable_small.png",
    "description": "在你使用你的终极技能后，你获得持续3秒的控制免疫。 (8秒冷却时间)。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1301,
    "apiName": "ARAM_DivineIntervention",
    "name": "神圣干预",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/slowactingpainkillers_small.png",
    "description": "战斗开始后的短时间内，召唤一颗护体星星。在它着陆时，你和附近的友军们进入持续若干秒的免疫伤害状态。 随后每25秒自动施放这个效果。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1134,
    "apiName": "ARAM_DrawYourSword",
    "name": "亮出你的剑",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drawyoursword_small.png",
    "description": "你现在是近战状态。获得24%攻击力、24%生命值、20%攻击速度、20%生命偷取和20%移动速度 (每个属性都已基于攻击距离的损失而进一步提升)。",
    "tags": [
      "attack",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1225,
    "apiName": "ARAM_DualWield",
    "name": "双刀流",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dualwield_small.png",
    "description": "在你攻击时，发射一个弩箭，它造成40%伤害并以40%效能施加你的攻击特效。 获得10% 总攻击速度。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1194,
    "apiName": "ARAM_FeyMagic",
    "name": "精怪魔法",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/feymagic_small.png",
    "description": "你的终极技能的伤害会对敌人造成2秒变形效果(15秒冷却时间)。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1187,
    "apiName": "ARAM_Flashbang",
    "name": "闪光弹",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashbang_small.png",
    "description": "你的【闪现】会引发一次爆炸，造成伤害和减速（阵亡时重置）。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1088,
    "apiName": "ARAM_UltimateRevolution",
    "name": "终极刷新",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimaterevolution_small.png",
    "description": "在施放终极技能后刷新你的终极技能(75秒冷却时间或阵亡时重置)。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1133,
    "apiName": "ARAM_MagicMissile",
    "name": "魔法飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/maps/particles/kiwi/magicmissile_small.png",
    "description": "造成技能伤害会对其发射3个飞弹，每个造成基于飞行距离的百分比最大生命值的真实伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1061,
    "apiName": "ARAM_OkBoomerang",
    "name": "回力OK镖",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/okboomerang_small.png",
    "description": "每7秒朝着一个附近的敌人自动施放投掷一个回力镖。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1066,
    "apiName": "ARAM_QuantumComputing",
    "name": "量子计算",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/quantumcomputing_small.png",
    "description": "周期性地在你周围自动施放一次巨型斩击，造成物理伤害。 被外沿命中的敌人会被减速、受到额外伤害、并治疗你。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1038,
    "apiName": "ARAM_FromBeginningToEnd",
    "name": "有始有终",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/frombeginningtoend_small.png",
    "description": "获得先攻和黑暗收割基石符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1149,
    "apiName": "ARAM_Impassable",
    "name": "不动如山",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/impassable_small.png",
    "description": "获得余震和冰川增幅基石符文。 余震：在你定身一个敌方英雄后提供防御属性，稍后会在你的周围造成爆发性的魔法伤害。冰川增幅：定身一名敌方英雄时会生成3道冰川射线来减速附近的敌人们并降低他们对你的队友们的伤害。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1079,
    "apiName": "ARAM_SymphonyofWar",
    "name": "战争交响乐",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/symphonyofwar_small.png",
    "description": "获得致命节奏和征服者基石符文。 致命节奏 - 攻击英雄提供攻击速度，至多叠加6层。在6层时，你的攻击发射造成额外伤害的一个弩箭。 征服者：攻击敌方英雄时提供适应之力层数。在达到12层后，将你的一部分伤害转化为等额的治疗效果。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1332,
    "apiName": "OminousPact",
    "name": "不祥契约",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/wisdomofages_small.png",
    "description": "基于已损失生命值，获得75–150（1–18级）法术强度，50%移动速度和20%全能吸血。施放技能会消耗你的5%当前生命值。 在30%生命值时获得最大增益。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1328,
    "apiName": "CriticalRhythm",
    "name": "暴击律动",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalrhythm_small.png",
    "description": "你的普攻在暴击时获得可叠加的6%攻击速度，至多至10层。 获得 25%暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1333,
    "apiName": "EscapePlan",
    "name": "逃跑计划",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/escapeplan_small.png",
    "description": "在降至35%生命值时，获得巨量0.65 × 最大生命值持续衰减的护盾、持续衰减的150%移动速度和持续衰减的缩小效果。(75秒冷却时间)",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1325,
    "apiName": "GlassCannon",
    "name": "玻璃大炮",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "减少30%最大生命值。造成25%额外真实伤害。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1152,
    "apiName": "ARAM_Quest_SteelYourHeart",
    "name": "钢化你心",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/quest_steelyourheart_small.png",
    "description": "需求：持有【心之钢】且层数在400层或以上。 奖励：将你的心之钢层数乘以3。使你的生命回复提升12.5%x你的【心之钢】层数。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1334,
    "apiName": "SnowballUpgrade",
    "name": "升级：雪球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowballupgrade_small.png",
    "description": "你的雪球获得50技能急速。 击中时会产生一片区域，使其中的敌人受到(0.5 + 0.0006 × 法术强度) × 100%减速效果，以及在2秒的持续时间里每秒造成100 + 0.6 × 法术强度 + 1 × 额外攻击力魔法伤害(总计(100 + 0.6 × 法术强度 + 1 × 额外攻击力) × 2魔法伤害)。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1329,
    "apiName": "BiggestSnowballEver",
    "name": "史上最大雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/biggestsnowballever_small.png",
    "description": "你的雪球获得100技能急速。 你的雪球现在变得非常大，并且可以穿过小兵。它会对敌人造成持续2秒的20%减速， 将他们击飞0.75秒，并造成额外200–350（1–18级） + 0.6 × 法术强度 + 1 × 额外攻击力伤害。 如果你没有雪球，则获得一个雪球。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1337,
    "apiName": "KingMe",
    "name": "尊我为王",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/kingme_small.png",
    "description": "当你第一次携带一件传说级装备并乘坐敌人的传送门时，你会加冕为王，升级你的装备并获得一个随机棱彩阶强化符文。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1335,
    "apiName": "Goldrend",
    "name": "夺金",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldrend_small.png",
    "description": "用攻击或技能对一个英雄造成伤害时会造成额外魔法伤害，并为你提供金币和 移动速度。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1205,
    "apiName": "ARAM_ADAPt",
    "name": "物理转魔法",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/adapt_small.png",
    "description": "将额外攻击力转化为法术强度。获得15%法术强度。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1206,
    "apiName": "ARAM_escAPADe",
    "name": "魔法转物理",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/escapade_small.png",
    "description": "将法术强度转化为额外攻击力。获得15%攻击力。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1331,
    "apiName": "EmpyreanPromise",
    "name": "至高天诺言",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/empyreampromise_small.png",
    "description": "获得15%治疗和护盾强度。获得至高天诺言作为一个召唤师技能。 警惕 传送至你的友军并在着陆时提供持续3秒的100–250（1–18级） + 1 × 法术强度 + 0.1 × 额外最大生命值护盾值。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1195,
    "apiName": "ARAM_GiantSlayer",
    "name": "巨人杀手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/giantslayer_small.png",
    "description": "体型变小，获得移动速度，并基于敌方英雄体型大于你的程度获得额外伤害。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1323,
    "apiName": "ARAM_Cruelty",
    "name": "残忍",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/cruelty_small.png",
    "description": "定身或缚地一个英雄时，召唤一颗会在短暂延迟后着陆的彗星，对附近的敌人们造成魔法伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1345,
    "apiName": "ARAM_SpiritualPurification",
    "name": "心灵净化",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritualpurification_small.png",
    "description": "参与击杀时，产生一次爆炸，对附近敌人们造成相当于他们15%当前生命值的伤害并留下一个减速区域。区域内的敌人们会受到持续1.5秒的60%减速。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1343,
    "apiName": "Quest_Sneakerhead",
    "name": "王中王，靴中靴",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sneakerhead_small.png",
    "description": "即刻：随机获得一双升级后的靴子。 需求：完成其任务，以更换为另一双。 奖励：嘉文一世之靴",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1238,
    "apiName": "ARAM_TransmutePrismatic",
    "name": "质变：棱彩阶",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/transmuteprismatic_small.png",
    "description": "获得1个随机棱彩阶强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1243,
    "apiName": "ARAM_TransmuteChaos",
    "name": "质变：混沌",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/transmutechaos_small.png",
    "description": "获得2个随机强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1344,
    "apiName": "FinalForm",
    "name": "最终形态",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/finalform_small.png",
    "description": "在施放你的终极技能时，获得持续10秒的50%最大生命值护盾、20%全能吸血和30%额外移动速度。(20秒冷却时间)。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1347,
    "apiName": "Poltergeist",
    "name": "吵闹鬼",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "获得【吵闹鬼】作为一个召唤师技能。 吵闹鬼会同时施放召唤师技能【屏障】和【幽灵疾步】。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1348,
    "apiName": "Flash2",
    "name": "闪闪现现",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/flash2_small.png",
    "description": "获得第二个【闪现】召唤师技能和70召唤师技能急速。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1996,
    "apiName": "ARAM_Upgrade_Sheen",
    "name": "升级：耀光",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradesheen_small.png",
    "description": "你的咒刃效果造成额外伤害并治疗你自身，治疗量相当于目标生命值的一定百分比。此外，获得250金币。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1349,
    "apiName": "UltimateAwakening",
    "name": "终极唤醒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/zerohour_small.png",
    "description": "获得30终极技能急速。 在施放你的终极技能后，刷新你的所有基础技能并获得持续15秒的300基础技能急速。(20秒冷却时间)",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1314,
    "apiName": "MightyShield",
    "name": "强力护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/mightyshield_small.png",
    "description": "当你获得护盾时，获得40–100（1–18级）适应之力，持续3秒。(5秒冷却时间)",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1315,
    "apiName": "SwiftAndSafe",
    "name": "快中求稳",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/swiftandsafe_small.png",
    "description": "在冲刺或闪烁后，获得持续2秒的65–290（1–18级） + 0.26 × 法术强度 + 0.65 × 额外攻击力护盾值。 (5秒冷却时间)",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1346,
    "apiName": "Vampirism",
    "name": "吸血习性",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/vampired_small.png",
    "description": "你不再能够被友军治疗或获得生命回复。获得25%全能吸血。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1027,
    "apiName": "ARAM_Earthwake",
    "name": "大地苏醒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/earthwake_small.png",
    "description": "你的冲刺、闪烁或传送类技能会留下一条在0.75秒后爆炸的轨迹。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1074,
    "apiName": "ARAM_ShrinkRay",
    "name": "缩小射线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shrinkray_small.png",
    "description": "你的攻击会将目标的伤害与体型削减15%攻击特效。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1402,
    "apiName": "ARAM_StatsOnStatsOnStats",
    "name": "属性叠属性叠属性！",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/statsonstatsonstats_small.png",
    "description": "获得4个【属性锻造器】，有更高几率出现黄金阶和棱彩阶锻造器！ 在你的下一次强化符文选取时，每个栏位获得一次额外的刷新。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 12317,
    "apiName": "ARAM_PandorasBox",
    "name": "潘朵拉的盒子",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/pandoras_box_small.png",
    "description": "将你的所有强化符文变为随机的棱彩阶强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1358,
    "apiName": "PinballSnowball",
    "name": "弹球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pinballsnowball_small.png",
    "description": "你的雪球获得技能急速并且造成额外的真实伤害。 当雪球从墙体上反弹时，它的体型和伤害获得提升，并缩短它的冷却时间。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1361,
    "apiName": "ARAM_Quest_VoidImmolation",
    "name": "艾卡西亚的陷落",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/quest_voidimmolation_small.png",
    "description": "即刻：获得1个【斑比的熔渣】。 任务：持有日炎圣盾和 璀璨回响。 奖励：将【日炎圣盾】 和【璀璨回响】 合成为【虚空献祭】。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1403,
    "apiName": "ARAM_StatsOnStats",
    "name": "属性叠属性！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/statsonstats_small.png",
    "description": "获得3个【属性锻造器】，有更高几率出现黄金阶和棱彩阶锻造器！",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1388,
    "apiName": "InfiniteRecursion",
    "name": "无限循环往复",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/infiniterecursion_small.png",
    "description": "获得60技能急速，外加每次参与击杀3技能急速。 当前技能急速：3 × 状态层数 + 60",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1404,
    "apiName": "ARAM_Stats",
    "name": "属性！",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/stats_small.png",
    "description": "获得2个【属性锻造器】！",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1384,
    "apiName": "Donation",
    "name": "捐赠",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/donation_small.png",
    "description": "收到1750金币。谢了！ :)",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1373,
    "apiName": "ShrinkEngine",
    "name": "缩小引擎",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/shrinkengine_small.png",
    "description": "参与击杀后会让你变小并且获得技能急速和移动速度。 阵亡时损失65%层数。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1006,
    "apiName": "ARAM_BladeWaltz",
    "name": "利刃华尔兹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bladewaltz_small.png",
    "description": "让你进入不可被选取状态，在此期间对敌人进行突进并造成30–150（1–18级） + 0.1 × 额外攻击力 + 0.06 × 法术强度伤害8次(造成50%附带伤害)。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1386,
    "apiName": "YouSpinMeRightRound",
    "name": "转得我眩晕了",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/youspinmerightround_small.png",
    "description": "将一个召唤师技能替换为骄行荡寇。 骄行荡寇发射一根钩爪，吸附在地形上，在此之后，你可以再次施放来绕着它摆荡。在摆荡状态下，自动攻击相距最近的那个敌人。在与一个敌方英雄碰撞或再次施放时结束摆荡。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1375,
    "apiName": "SoulEater",
    "name": "吞噬灵魂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/souleater_small.png",
    "description": "定身一个敌方英雄时会提供20最大生命值。 已获得生命值的总和：20 × 状态层数",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1401,
    "apiName": "GrowthSpurt",
    "name": "生机迸发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/growthspurt_small.png",
    "description": "获得生机迸发作为一个召唤师技能。 生机迸发会猛然提升你的体型，击飞附近的敌人们1秒并提供持续7秒的300 + 0.2 × 最大生命值最大生命值。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1390,
    "apiName": "ARAM_PhenomenalEvil",
    "name": "超凡邪恶",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/aram_phenomenalevil_small.png",
    "description": "在你用技能对敌人造成伤害时永久获得1法术强度。 如果是作为你的第二个强化符文，则自带40法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1392,
    "apiName": "GoldenSnowball",
    "name": "神圣雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldensnowball_small.png",
    "description": "雪球获得100技能急速。 你在用【雪球】冲刺后会免疫伤害1.5秒。 如果你没有雪球，获得一个雪球。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1413,
    "apiName": "ARAM_StuckInHereWithMe",
    "name": "和我一起困在这里",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stuckinherewithme_small.png",
    "description": "在使用你的终极技能后，获得持续2秒的(0.5) × 100%伤害减免，然后你嘲讽其中的敌人们2秒。 获得30终极技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2004,
    "apiName": "ARAM_EmpoweredByTheFaithful",
    "name": "信念者的强化",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/empoweredbythefaithful_small.png",
    "description": "为友军提供治疗或护盾会赐福他们，使其伤害填充你的虔诚。 当你拥有足够的虔诚时，释放一道冲击波来造成魔法伤害并处决低生命值的敌人们。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1415,
    "apiName": "Twinfire",
    "name": "双生火焰",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/twinfire_small.png",
    "description": "造成技能伤害时，发射1+3 × 暴击率个飞弹，每个造成10–30（1–18级） + 0.07 × 额外攻击力 + 0.07 × 法术强度魔法伤害。 此外，获得25%暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1416,
    "apiName": "HextechSoul",
    "name": "海克斯科技龙魂",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/infernalsoul_small.png",
    "description": "周期性地使你的下一个伤害型技能或攻击触发一道闪电爆裂，连锁穿过敌人以造成伤害和减速。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2005,
    "apiName": "ARAM_InfernoTriggered",
    "name": "扳机炼狱",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/madscientist_small.png",
    "description": "获得悍勇本色。在你达到S评价等级时，自动使用炼狱扳机。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2006,
    "apiName": "ARAM_Dropkick",
    "name": "飞身踢",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dropkick_small.png",
    "description": "你的攻击和技能会处决低生命值的敌方英雄，从而击退并引发一次爆炸，同时治疗你自身。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1237,
    "apiName": "ARAM_TransmuteGold",
    "name": "质变：黄金阶",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/transmutegold_small.png",
    "description": "获得1个随机黄金阶强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1389,
    "apiName": "HandOfBaron",
    "name": "男爵之手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/handofbaron_small.png",
    "description": "获得25%适应之力。附近友方小兵都获得极大增强。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1356,
    "apiName": "CriticalMissile",
    "name": "暴击飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalmissile_small.png",
    "description": "当你暴击时，发射1+3 × 暴击率个飞弹，每个造成15–85（1–18级）魔法伤害。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1420,
    "apiName": "Sonata",
    "name": "咏叹奏鸣",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sonata_small.png",
    "description": "每10秒，以一个不断交替的旋律来自动施放坚毅咏叹调和迅捷奏鸣曲。 坚毅咏叹调治疗附近友军并提供一个临时的护盾光环。 迅捷奏鸣曲提供一个临时光环来提供额外移动速度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1421,
    "apiName": "PromQueen",
    "name": "舞会女王",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/promqueen_small.png",
    "description": "每35秒，自动施放一道闪亮宝冠降临在你头上。当它着陆时，获得洛的终极技能，魅惑你碰到的敌人们。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2026,
    "apiName": "KillSecured",
    "name": "杀意翻涌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/killsecure_small.png",
    "description": "在朝着低于40%生命值的敌人时，获得60%移动速度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1308,
    "apiName": "ARAM_Firefox",
    "name": "火狐",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firfox_small.png",
    "description": "自动施放 获得移动速度并召唤3道烈焰环绕于你，瞄准距离内相距最近的那个可见英雄并造成魔法伤害。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2007,
    "apiName": "ARAM_LittleDevil",
    "name": "你肩上的恶魔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/littledevil_small.png",
    "description": "与【大魔王】本尊签订一个契约。 他持续汲取你的生命力，但回报给你力量，让你对英雄造成额外真实伤害并且创造治疗残片供你获取。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2009,
    "apiName": "ARAM_Zealot",
    "name": "狂热者",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/zealot_small.png",
    "description": "获得按对局状态实时计算暴击几率和按对局状态实时计算攻击速度（随法术强度变化）。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2018,
    "apiName": "ARAM_Purist_Caster",
    "name": "纯粹主义者 - 术师",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/puristcaster_small.png",
    "description": "获得百分比冷却缩减并将你的所有攻击速度转化为技能急速。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2010,
    "apiName": "ARAM_DoubleTap",
    "name": "双发快射",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/doubletap_small.png",
    "description": "你的暴击施加一次额外的攻击特效。 获得 按对局状态实时计算暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2024,
    "apiName": "CritNCast",
    "name": "由暴生急",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/critncast_small.png",
    "description": "获得相当于你40%暴击几率的技能急速。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2016,
    "apiName": "ARAM_Juiced",
    "name": "注魔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/juiced_small.png",
    "description": "攻击特效消耗按对局状态实时计算法力值以造成按对局状态实时计算魔法伤害，这个伤害可以暴击。 已造成的伤害：按对局实时属性计算 已消耗的法力值：按对局实时属性计算",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1379,
    "apiName": "Upgrade_SwordOfBlossom",
    "name": "升级：花晓之剑",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrademikaelsblessing_small.png",
    "description": "获得100%攻击速度。 你对英雄的攻击会使来自【花晓之剑】的治疗效果提升250%。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1220,
    "apiName": "ARAM_FanTheHammer",
    "name": "连拨击锤",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/fanthehammer_small.png",
    "description": "对敌方英雄的攻击会发射5个额外飞弹，造成随距离提升的额外伤害。每个方向的冷却时间独立计算。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2031,
    "apiName": "ARAM_DropBear",
    "name": "空投熊",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drop_bear_small.png",
    "description": "阵亡时，一个具有你所有强化符文的巨大提伯斯从天而降并伤害附近的敌人们。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2032,
    "apiName": "FishBait",
    "name": "鲨鱼诱饵",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/fishbait_small.png",
    "description": "在阵亡之后的若干秒，一头鲨鱼会啃噬所有附近的敌人们。你可以在阵亡后进行移动，以给鲨鱼攻击进行定位。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2034,
    "apiName": "SharkTempest",
    "name": "鲨鱼暴风",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sharktempest_small.png",
    "description": "鲨鱼们环绕着你的【雪球】，对它们途经的敌人们造成减速和50–100（1–18级）魔法伤害。如果你的【雪球】命中了一个英雄，鲨鱼们会吸附至其身上并生成一阵鲨鱼暴风，从而对所有附近的敌人们造成每秒25–75（1–18级） + 0.2 × 额外攻击力 + 0.12 × 法术强度魔法伤害和持续3秒的30%减速。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2042,
    "apiName": "BrushPower",
    "name": "藏身草丛",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/brushpower_small.png",
    "description": "在进入草丛后，多造成20%伤害，持续2秒。留在草丛中会刷新这个效果。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2043,
    "apiName": "NatureIsHealing",
    "name": "自然即是治愈",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/natureishealing_small.png",
    "description": "站在草丛中时，每秒回复(0.006–0.021（1–18级）) × 100%最大生命值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2046,
    "apiName": "PoroCharge_Active",
    "name": "魄罗蛮冲",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questporocharge_small.png",
    "description": "【魄罗佳肴】会每25–15（1–18级）秒出现在你周围。投喂魄罗会给你魄罗之爱层数。在5层时，解锁魄罗冲锋召唤师技能。投喂更多魄罗会提升你发动攻势的波次。 魄罗冲锋：发动若干波次的魄罗攻势，对敌方英雄们造成100–200（1–18级） + 20 × 状态层数物理伤害。 你当前可发动按对局实时属性计算波魄罗攻势。 魄罗们仅能命中单个敌人，并且仅有第一波攻势会击飞敌人们。 “噢吼！它们可真萌啊！”——魄罗驯养人",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2054,
    "apiName": "SpellVolley",
    "name": "三重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "你的【所选技能】技能会瞄准你前方2个额外的敌人。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2055,
    "apiName": "ARAM_Multishot",
    "name": "多重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "任务：用【所选技能】技能命中敌方英雄按对局状态实时计算次。 奖励：发射数量基于任务等级的额外飞弹。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2065,
    "apiName": "ARAM_Terror",
    "name": "惊惧",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/desecrator_large.png",
    "description": "每当你施放【所选技能】技能时，恐惧你周围的敌人们1.75秒。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2063,
    "apiName": "DimensionShift_Active",
    "name": "位面转移",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/whenthedarknesscomes_small.png",
    "description": "获得召唤师技能当黑暗到来。 当黑暗到来：发射一道灿烂之光到一个位置。它着陆时，区域内的所有活着的单位都将在接下来的8秒期间被送到一个不同的领域。 在你处于这个领域时，你获得： 300–1500（1–18级）生命值 35–150（1–18级）法术强度 35–150（1–18级）攻击力 (0.35) × 100%体型 所有单位在该领域中都能自由地移动和行动，但不能以战略点(诸如防御塔或召唤水晶)为目标。 “跟随你的光明……”——一个迷失的灵魂",
    "tags": [
      "attack",
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2064,
    "apiName": "ARAM_Quickstep",
    "name": "快步",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "当你使用【所选技能】技能时，朝你的鼠标指针进行冲刺。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2072,
    "apiName": "Missile_Split",
    "name": "咒语裂变",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "在命中时、最大距离时或再次施放时，你的【所选技能】技能的飞弹会分裂为两部分。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2073,
    "apiName": "ARAM_SustainingStrike",
    "name": "虹吸",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "治疗相当于用【所选技能】技能对敌方英雄的30%造成伤害的生命值。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2076,
    "apiName": "TitansPulse",
    "name": "保持坚定",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "当【所选技能】技能对敌方英雄造成伤害时，获得1/2/3（英雄等级1/7/11）护甲和魔法抗性。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2078,
    "apiName": "ChainReaction",
    "name": "连锁反应",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "如果一个被【所选技能】技能击退的目标命中了另一个英雄，则二者都会被击飞并受到伤害。在与地形产生碰撞时，该击飞时长会延长并且他们会受到额外伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2077,
    "apiName": "DarkWind",
    "name": "贪欲束缚",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradehubris_small.png",
    "description": "用你的【所选技能】技能定身或缚地敌方英雄时造成额外伤害并对你进行治疗。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2082,
    "apiName": "Equilibrium",
    "name": "我们的治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/equillibrium_small.png",
    "description": "每当你周围的某人进行治疗时，你获得相当于其15%治疗效果的治疗效果。从敌方治疗中获得双倍。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2083,
    "apiName": "BurstingTeeth",
    "name": "牙仙子",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questburstingteeth_small.png",
    "description": "爆裂敌人会掉落牙齿。拾取牙齿会提供给你永久的穿甲和法术穿透。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1001,
    "apiName": "ARAM_ImTheJuggernaut",
    "name": "泰坦的坚决",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/iamthejuggernaut_small.png",
    "description": "在承受或造成伤害时获得层数。每10层，获得适应之力、护甲、魔法抗性、体型和韧性。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2088,
    "apiName": "ARAM_Snowday",
    "name": "下雪天",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowday_small.png",
    "description": "你的【雪球】获得100技能急速。在命中一名敌人时造成额外魔法伤害。如果你没有【雪球】，则获得一个【雪球】。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2062,
    "apiName": "Ability_SelfAOE_DoubleCast",
    "name": "回响施放",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "施放你的【所选技能】技能时会朝你的鼠标位置派出一个复制体并且在0.25秒之后再次施放该技能。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2089,
    "apiName": "ARAM_YowchMyCoins",
    "name": "哎哟，我的硬币！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/youchmycoins_small.png",
    "description": "在参与击杀敌方英雄后，该英雄会在附近掉落多枚硬币，你和友军可以收集它们。每枚硬币价值15金币。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2091,
    "apiName": "EndlessDecimation",
    "name": "无尽大杀四方",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/endlessdecimate_small.png",
    "description": "在战斗中每8秒自动施放一次环形斧头挥舞来造成物理伤害。对被斧刃命中的敌人们造成提升伤害(100–400（1–18级） + 0.4 × 法术强度 + 0.6 × 攻击力)并治疗你18%已损失生命值。被斧刃命中的每个敌人，都会将这个技能的冷却时间缩短10%，最小值为3秒。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1005,
    "apiName": "ARAM_WeeWooWeeWoo",
    "name": "喂呜喂呜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/weewooweewoo_small.png",
    "description": "在朝着低生命值的友军移动时，获得移动速度。你的治疗和护盾获得提升，基于你目标的低生命值程度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2087,
    "apiName": "ARAM_Archmage",
    "name": "大法师",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/eureka_small.png",
    "description": "施放一个技能会返还另一个随机技能的花费，数额相当于30%原技能冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 1204,
    "apiName": "ARAM_StackosaurusRex",
    "name": "叠角龙",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/stackosaurusrex_small.png",
    "description": "在你获得一个技能的永久层数时，多获得100%！",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2096,
    "apiName": "LittleExtraHelp",
    "name": "小小的额外帮助",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "在你的【所选技能】技能持续期间获得150攻击距离和(0.75) × 100%攻击速度。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2095,
    "apiName": "ARAM_HighRoller",
    "name": "掷骰狂人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/highroller_small.png",
    "description": "附近敌人在阵亡时有几率掉落【属性锻造器】。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2097,
    "apiName": "VoidDash",
    "name": "虚空冲刺",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "用【所选技能】技能冲刺时会产生一片【虚空地带】来对敌方英雄们造成减速和魔法伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2100,
    "apiName": "ARAM_SpecializedRecursion",
    "name": "急速之追求",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "任务：用【所选技能】技能命中敌方英雄按对局状态实时计算次 奖励：【所选技能】技能获得技能急速，基于任务等级，至多至(2) × 80。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2099,
    "apiName": "ARAM_DivineDomain",
    "name": "飞升仪式",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "参与击杀敌方英雄后会留下其精华。攻击该精华会提供移动速度并重置基础技能冷却时间。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2103,
    "apiName": "ARAM_BangBang",
    "name": "狙神飞星",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questbangbang_small.png",
    "description": "任务：用技能狙击按对局状态实时计算个敌方英雄 奖励：一颗流星会飞向被狙击的敌方英雄，在其周围的一个区域内造成魔法伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2104,
    "apiName": "ARAM_SpiritBomb",
    "name": "灵魄炸弹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritbomb_small.png",
    "description": "为友方英雄提供治疗和护盾时会为你积攒一颗【灵魄炸弹】。在满层时，投掷该炸弹至生命值最低的那个友军，从而对其和附近友军们提供治疗和护盾。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2107,
    "apiName": "ARAM_Hellbent",
    "name": "濒死悟道",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/hellbent_small.png",
    "description": "用攻击或技能伤害敌方英雄时会提供层数。在满层时，你在阵亡时会进行强化复活。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2098,
    "apiName": "ARAM_EndlessHunt",
    "name": "吃过路兵",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dashing_small.png",
    "description": "周期性地识别出敌方英雄身上的破绽。 用攻击或技能命中它们时，会造成最大生命值真实伤害、回复生命值并提供移动速度。这些效果可以叠加。",
    "tags": [
      "attack",
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2080,
    "apiName": "Snowbomb",
    "name": "冰雪爆裂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowbomb_small.png",
    "description": "再次施放雪球会造成提升伤害、击飞该目标、并击退附近的敌人们。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2102,
    "apiName": "PressureCooker",
    "name": "高压锅",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questpressurecooker_small.png",
    "description": "每一秒，对附近的敌方英雄们施加一层可叠加的灼烧，这个效果受益于你的最大生命值。 任务：对敌方英雄造成灼烧伤害 奖励：提升【高压锅】的规模和伤害，基于任务等级。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2109,
    "apiName": "SnapBack",
    "name": "复位",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "再次施放【所选技能】技能时会产生爆炸，造成0.2 × 法术强度 + 0.2 × 攻击力 + 100–300（1–18级）魔法伤害，并回到你的原本位置。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2128,
    "apiName": "BloodMoneyBurn",
    "name": "炽燃利息",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bloodmoney2_small.png",
    "description": "英雄身上的灼烧和持续伤害会生成金币。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2116,
    "apiName": "SpecializedEmpowerment",
    "name": "威能之追求",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/marksmage_small.png",
    "description": "任务：用【所选技能】技能命中敌人按对局状态实时计算次。 奖励：永久提升【所选技能】技能伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2118,
    "apiName": "SkipTheBasics",
    "name": "大招工具人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/skipthebasic_small.png",
    "description": "你的技能急速仅作用于终极技能，但效果多50%。获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2119,
    "apiName": "Overextender",
    "name": "过量延伸者",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/overextender_small.png",
    "description": "回城并进入到你的加农炮发射器。它的距离、飞行速度和伤害已经得到显著提升。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2115,
    "apiName": "SquishySlappyGrab",
    "name": "软弹啪叽抓",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/squishyslappygrab_small.png",
    "description": "偶尔对所有附近的敌方英雄放出软弹啪叽的手，然后用灵链系住。你的下次攻击将拉拽所有被系住的敌人。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2111,
    "apiName": "Bonk",
    "name": "邦！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bonk_large.png",
    "description": "被【所选技能】技能强化的攻击或技能会对目标和附近的敌人们造成额外伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2123,
    "apiName": "Overloaded",
    "name": "超负荷",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "使用另一个技能会重置【所选技能】技能的冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2125,
    "apiName": "ItsGoTime",
    "name": "前进时间到",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "激活【所选技能】技能会在其持续期间为你提供移动速度。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2126,
    "apiName": "KeepGoing",
    "name": "装填",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightningstrikes_small.png",
    "description": "在【所选技能】技能期间的普攻攻击特效会降低其冷却时间。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2129,
    "apiName": "Terraind",
    "name": "地形专家",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightningstrikes_small.png",
    "description": "你的【所选技能】技能会在它周围的一个区域内造成伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2131,
    "apiName": "DontChangeTheChannel",
    "name": "别停止引导",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dontchangethechannel_small.png",
    "description": "你每引导一秒都会获得护盾值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2133,
    "apiName": "MercysStrike",
    "name": "仁慈打击",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "在使用【所选技能】技能为你的友军提供治疗或护盾之后，你的下一次普攻获得攻击距离、攻击速度并造成额外最大生命值魔法伤害。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2127,
    "apiName": "ForgedByTheMaster",
    "name": "大师铸就",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/forgedbythemaster_small.png",
    "description": "你的装备和强化符文伤害提升按对局状态实时计算。 额外伤害：按对局实时属性计算",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2134,
    "apiName": "SurgeField",
    "name": "电涌力场",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/surgefield_small.png",
    "description": "在施放终极技能时，在你周围生成一个地带来提供技能急速和移动速度。在其中时，它会发射飞弹，飞弹造成相当于你造成的20%伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2136,
    "apiName": "TrustyWeapon",
    "name": "可靠武器",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "用【所选技能】技能打击敌方英雄时会铸造一条友谊纽带。 【所选技能】技能基于你的友谊等级获得到临时提升伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2132,
    "apiName": "WarlockJuicebox",
    "name": "术士果汁盒",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/warlockjuicebox_small.png",
    "description": "获得按对局状态实时计算全能吸血。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2135,
    "apiName": "Overkill",
    "name": "针插垫",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/symphonyofwar_small.png",
    "description": "在【所选技能】技能期间进行攻击会对你的目标凿下大钉。大钉会积累伤害、处决、并在到期时提供移动速度。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2137,
    "apiName": "PatOnTheBack",
    "name": "轻拍背部",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/patontheback_small.png",
    "description": "友军会在你走过时鼓励你，为你提供护盾和移动速度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2139,
    "apiName": "PinCushion",
    "name": "豪猪",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pincushion_small.png",
    "description": "承受来自英雄的伤害会积攒一次尖针迸发，这些尖针会从你身上飞出，对附近的敌人们造成伤害和减速。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2144,
    "apiName": "DoubleDefense",
    "name": "加固护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "来自【所选技能】技能的护盾变得更强并且受益于目标的已损失生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2138,
    "apiName": "WardingWeapon",
    "name": "自适应防护",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "用【所选技能】技能打击一个敌方英雄时，为你提供持续6秒的按对局状态实时计算护甲或魔法抗性，基于该技能的伤害类型。这个效果可以叠加。 最大防护等级：按对局实时属性计算",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2148,
    "apiName": "DoubleStrike",
    "name": "双重打击",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "【所选技能】技能施加一次额外的攻击特效。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  },
  {
    "id": 2108,
    "apiName": "SupportMain",
    "name": "主玩辅助",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questsupportmain_small.png",
    "description": "任务：治疗友方英雄按对局状态实时计算生命值。 奖励：你提供的任何治疗效果现在还会在3秒里提供相当于25%初始治疗量的持续治疗效果。 已造成的治疗：按对局状态实时计算 / 按对局状态实时计算\\n",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi.bin.json"
  }
];

export const classicMayhemAugments: MayhemAugment[] = [
  {
    "id": 1180,
    "apiName": "ARAM_BigBrain",
    "name": "超强大脑",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bigbrain_small.png",
    "description": "每拥有1法术强度就会获得3护盾值。阵亡时或耗尽后70秒重置。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1141,
    "apiName": "ARAM_AllForYou",
    "name": "全心为你",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/allforyou_small.png",
    "description": "你的治疗和护盾在用在一个友军身上时会变强30%。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1007,
    "apiName": "ARAM_BluntForce",
    "name": "大力",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bluntforce_small.png",
    "description": "获得20%攻击力。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1011,
    "apiName": "ARAM_CantTouchThis",
    "name": "你摸不到",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/canttouchthis_small.png",
    "description": "施放你的终极技能会使你进入持续2秒的的免疫伤害状态(8秒冷却时间)。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1013,
    "apiName": "ARAM_CelestialBody",
    "name": "星界躯体",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/celestialbody_small.png",
    "description": "获得1500生命值，但你造成的伤害降低10%。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1015,
    "apiName": "ARAM_CircleofDeath",
    "name": "死亡之环",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/circleofdeath_small.png",
    "description": "你造成的治疗效果和生命回复效果会对相距最近的那个敌方英雄造成一部分治疗数额的魔法伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1310,
    "apiName": "ARAM_ClownCollege",
    "name": "小丑学院",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/clowncollege_small.png",
    "description": "背刺：你从背后袭击敌人时，会造成20–35（1–18级） + 0.35 × 法术强度 + 0.5 × 额外攻击力额外物理伤害。 欺诈魔术：你传送并变为隐形，持续3秒。你在隐形状态下的第一次攻击将造成额外的100 + 1.5 × 额外攻击力 + 0.55 × 法术强度物理伤害。如果从背后进行打击，那么这个攻击会暴击，造成((1.55 + 1 × 额外暴击伤害)) × 100%伤害。 幻像：阵亡：在阵亡时，在你周围造成25%最大生命值的魔法伤害以及1秒恐惧。",
    "tags": [
      "attack",
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1018,
    "apiName": "ARAM_CourageoftheColossus",
    "name": "巨像的勇气",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/courageofthecolossus_small.png",
    "description": "定身或缚地一个敌方英雄后获得150–450（1–18级） + 0.04 × 最大生命值护盾值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1118,
    "apiName": "ARAM_CriticalHealing",
    "name": "会心治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/criticalhealing_small.png",
    "description": "你的治疗和护盾可以暴击，造成40%额外数额的效果。获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1020,
    "apiName": "ARAM_DawnbringersResolve",
    "name": "黎明使者的坚决",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dawnbringersresolve_small.png",
    "description": "在跌到50%生命值以下时，在3秒里持续回复共30%最大生命值。 阵亡时或每45秒重置。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1022,
    "apiName": "ARAM_Deft",
    "name": "灵巧",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/deft_small.png",
    "description": "获得 60%攻击速度。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1025,
    "apiName": "ARAM_DiveBomber",
    "name": "俯冲轰炸",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/divebomber_small.png",
    "description": "你的队伍在每回合的第一次阵亡会爆炸，造成巨额真实伤害。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1026,
    "apiName": "ARAM_DontBlink",
    "name": "唯快不破",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dontblink_small.png",
    "description": "你每比目标多10移动速度，则对其多造成1%额外伤害。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1029,
    "apiName": "ARAM_EtherealWeapon",
    "name": "虚幻武器",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/etherealweapon_small.png",
    "description": "你的技能可施加攻击特效。每个目标有1秒冷却时间。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1036,
    "apiName": "ARAM_Firebrand",
    "name": "火上浇油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firebrand_small.png",
    "description": "你的攻击会施加一个可无限叠加的灼烧攻击特效，持续造成伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1037,
    "apiName": "ARAM_FirstAidKit",
    "name": "急救用具",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firstaidkit_small.png",
    "description": "获得20%治疗和护盾强度。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1116,
    "apiName": "ARAM_Flashy",
    "name": "闪现向前",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashy_small.png",
    "description": "你的闪现有3层充能。在120秒后，再次获得所有充能。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1322,
    "apiName": "ARAM_GetExcited",
    "name": "罪恶快感",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/getexcited_small.png",
    "description": "参与击杀后，获得持续4秒的100%移动速度和15%攻击速度。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1041,
    "apiName": "ARAM_Goliath",
    "name": "歌利亚巨人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/goliath_small.png",
    "description": "体型变大，获得35%生命值和15%适应之力。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1138,
    "apiName": "ARAM_Goredrink",
    "name": "渴血",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/goredrink_small.png",
    "description": "获得15%全能吸血。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1181,
    "apiName": "ARAM_HeavyHitter",
    "name": "重量级打击手",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/heavyhitter_small.png",
    "description": "你的攻击造成相当于你3.5%最大生命值的额外物理伤害。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1044,
    "apiName": "ARAM_IceCold",
    "name": "冰寒",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/icecold_small.png",
    "description": "你的减速效果可使移动速度降低额外的75。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1045,
    "apiName": "ARAM_InfernalConduit",
    "name": "炼狱导管",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/infernalconduit_small.png",
    "description": "你的技能会施加一层可无限叠加的灼烧，持续造成魔法伤害。 你的灼烧效果会降低你各基础技能的冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1047,
    "apiName": "ARAM_ItsCritical",
    "name": "关键暴击",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/itscritical_small.png",
    "description": "获得50%暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1048,
    "apiName": "ARAM_JeweledGauntlet",
    "name": "珠光护手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/jeweledgauntlet_small.png",
    "description": "你的技能可以造成暴击。 获得 (0.25 + 0.0004 × 法术强度) × 100%暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1305,
    "apiName": "ARAM_LegDay",
    "name": "练腿日",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/legday_small.png",
    "description": "获得50移动速度和40%减速抗性。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1129,
    "apiName": "ARAM_Marksmage",
    "name": "神射法师",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/marksmage_small.png",
    "description": "你的攻击造成相当于你75%法术强度的额外物理伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1054,
    "apiName": "ARAM_MasterofDuality",
    "name": "物法皆修",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/masterofduality_small.png",
    "description": "你的每次攻击为你提供可叠加的6–18（1–18级）法术强度，并且你的每次技能在伤害敌人时为你提供可叠加的3–9（1–18级）攻击力， 这个增益可无限叠加并刷新，但有5秒的持续时间。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1056,
    "apiName": "ARAM_MindtoMatter",
    "name": "由心及物",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mindtomatter_small.png",
    "description": "使你的最大生命值提升，数额相当于你一半的法力值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1104,
    "apiName": "ARAM_Minionmancer",
    "name": "仆从大师",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/minionmancer_small.png",
    "description": "你的召唤物获得40%体型提升、生命值和伤害。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1058,
    "apiName": "ARAM_MysticPunch",
    "name": "秘术冲拳",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mysticpunch_small.png",
    "description": "攻击特效使你的各个技能的冷却时间缩减1.25秒。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1063,
    "apiName": "ARAM_OutlawsGrit",
    "name": "狂徒豪气",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/outlawsgrit_small.png",
    "description": "在使用一次冲刺、闪烁或传送之后，你获得12护甲和魔法抗性，这个效果至多可在5层时叠加至(12 × 5)。 每15秒重置。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1311,
    "apiName": "ARAM_Overflow",
    "name": "溢流",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/overflow_small.png",
    "description": "你的法力值消耗翻倍。你的技能的治疗效果、护盾效果和伤害的效能提升((10 + 0.005 × 当前资源) × 0.01) × 100%。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1064,
    "apiName": "ARAM_Perseverance",
    "name": "坚韧",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/perseverance_small.png",
    "description": "获得巨幅提升的生命回复，这个数额会在低生命值时进一步提升。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1324,
    "apiName": "ARAM_ProteinShake",
    "name": "蛋白粉奶昔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/proteinshake_small.png",
    "description": "获得25 + 0.35 × 额外护甲 + 0.35 × 额外魔法抗性%治疗和护盾强度，基于额外护甲和魔抗。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1067,
    "apiName": "ARAM_RabbleRousing",
    "name": "活力焕发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/rabblerousing_small.png",
    "description": "使用【所选技能】技能时回复生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1170,
    "apiName": "ARAM_ScopedWeapons",
    "name": "万用瞄准镜",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopedweapons_small.png",
    "description": "获得75攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1071,
    "apiName": "ARAM_ScopierWeapons",
    "name": "更万用的瞄准镜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopierweapons_small.png",
    "description": "获得150攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1115,
    "apiName": "ARAM_ScopiestWeapons",
    "name": "最万用的瞄准镜",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopiestweapons_small.png",
    "description": "获得250攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1113,
    "apiName": "ARAM_SkilledSniper",
    "name": "老练狙神",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/skilledsniper_small.png",
    "description": "用一个非终极技能狙击一个敌人时，返还该技能80%冷却时间(周期性技能返还65%)。 狙击 - 从700码外对敌人造成伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1136,
    "apiName": "ARAM_SlapAround",
    "name": "扇巴掌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/slaparound_small.png",
    "description": "每当你定身或缚地一个敌人时，获得一层可叠加的10适应之力。阵亡时损失50%层数。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1076,
    "apiName": "ARAM_SonicBoom",
    "name": "天音爆",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/sonicboom_small.png",
    "description": "在为你的友军提供增益效果、治疗效果或护盾效果时，会对其附近的敌人们造成伤害和减速。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1077,
    "apiName": "ARAM_SoulSiphon",
    "name": "灵魂虹吸",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/soulsiphon_small.png",
    "description": "暴击造成伤害的12%会等额治疗你自身。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1353,
    "apiName": "ARAM_TankEngine",
    "name": "坦克引擎",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tank_engine_small.png",
    "description": "参与击杀时，获得一个层数，使你的体型增大并提升最大生命值。阵亡时损失层数。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1080,
    "apiName": "ARAM_TankItOrLeaveIt",
    "name": "会心防御",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tankitorleaveit_small.png",
    "description": "你可以使用你的暴击几率(最大50%几率)来进行会心防御，使你有一定几率来使所受伤害降低。 获得25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1081,
    "apiName": "ARAM_TapDancer",
    "name": "踢踏舞",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tapdancer_small.png",
    "description": "你的攻击会为你提供10移动速度。获得(0.001 × 移动速度) × 100%攻击速度。 这个增益可无限叠加并刷新，但有5秒的持续时间。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1084,
    "apiName": "ARAM_ThreadtheNeedle",
    "name": "穿针引线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/threadtheneedle_small.png",
    "description": "获得18%护甲穿透和法术穿透。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1092,
    "apiName": "ARAM_Vulnerability",
    "name": "易损",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/vulnerability_small.png",
    "description": "你的装备效果和持续伤害效果可以暴击。 获得 25%暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1097,
    "apiName": "ARAM_WitchfulThinking",
    "name": "巫师式思考",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/witchfulthinking_small.png",
    "description": "获得20–80（1–18级）法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1326,
    "apiName": "Nightstalking",
    "name": "夜狩",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/nightstalking_small.png",
    "description": "在对敌人造成伤害的3秒内参与击杀该敌人会使你进入1.5秒的隐身状态。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1028,
    "apiName": "ARAM_Erosion",
    "name": "侵蚀",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/erosion_small.png",
    "description": "对敌人造成伤害时会施加一层持续4秒、每层1.5%的护甲和魔法抗性击碎效果，最多叠加20层。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1034,
    "apiName": "VeilOfWarding",
    "name": "防护面纱",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "每30秒获得一层法术护盾来格挡下一个敌方技能。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1211,
    "apiName": "ARAM_ItsKillingTime",
    "name": "杀戮时间到了",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/itskillingtime_small.png",
    "description": "在施放你的终极技能后，将所有敌人打上死亡标记。 对带标记的敌人造成伤害时，会将一部分已造成伤害储存起来，然后在标记结束时将已储存的伤害引爆。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1051,
    "apiName": "ARAM_LightemUp",
    "name": "点亮他们！",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightemup_small.png",
    "description": "每第4次攻击发射4个飞弹以造成魔法伤害攻击特效。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1072,
    "apiName": "ARAM_SearingDawn",
    "name": "炽烈黎明",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/searingdawn_small.png",
    "description": "你的技能会标记敌人，使其在被你的友军的下一个攻击或技能命中时会受到额外魔法伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1073,
    "apiName": "ARAM_ShadowRunner",
    "name": "暗影疾奔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shadowrunner_small.png",
    "description": "在使用一个冲刺、跳跃、闪烁或传送类技能或离开潜行状态之后，获得持续2秒的200移动速度。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1327,
    "apiName": "Adamant",
    "name": "坚若磐石",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "每当你定身或缚地一个敌人时，获得持续10秒的2–10（1–18级）护甲和魔抗(至多至10层)。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1087,
    "apiName": "ARAM_Typhoon",
    "name": "台风",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/typhoon_small.png",
    "description": "你的攻击会对一个额外目标发射一根弩箭，这个弩箭会造成削减过的伤害并施加攻击特效。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1095,
    "apiName": "ARAM_WindspeakersBlessing",
    "name": "风语者的祝福",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/windspeakersblessing_small.png",
    "description": "你的治疗效果和护盾效果还会提升目标30–60（1–18级）护甲和魔法抗性，这些加成持续3秒。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1112,
    "apiName": "ARAM_UltimateUnstoppable",
    "name": "终极不可阻挡",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimateunstoppable_small.png",
    "description": "在你使用你的终极技能后，你获得持续3秒的控制免疫。 (8秒冷却时间)。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1301,
    "apiName": "ARAM_DivineIntervention",
    "name": "神圣干预",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/slowactingpainkillers_small.png",
    "description": "战斗开始后的短时间内，召唤一颗护体星星。在它着陆时，你和附近的友军们进入持续若干秒的免疫伤害状态。 随后每25秒自动施放这个效果。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1134,
    "apiName": "ARAM_DrawYourSword",
    "name": "亮出你的剑",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drawyoursword_small.png",
    "description": "你现在是近战状态。获得24%攻击力、24%生命值、20%攻击速度、20%生命偷取和20%移动速度 (每个属性都已基于攻击距离的损失而进一步提升)。",
    "tags": [
      "attack",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1225,
    "apiName": "ARAM_DualWield",
    "name": "双刀流",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dualwield_small.png",
    "description": "在你攻击时，发射一个弩箭，它造成40%伤害并以40%效能施加你的攻击特效。 获得10% 总攻击速度。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1194,
    "apiName": "ARAM_FeyMagic",
    "name": "精怪魔法",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/feymagic_small.png",
    "description": "你的终极技能的伤害会对敌人造成2秒变形效果(15秒冷却时间)。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1187,
    "apiName": "ARAM_Flashbang",
    "name": "闪光弹",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashbang_small.png",
    "description": "你的【闪现】会引发一次爆炸，造成伤害和减速（阵亡时重置）。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1088,
    "apiName": "ARAM_UltimateRevolution",
    "name": "终极刷新",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimaterevolution_small.png",
    "description": "在施放终极技能后刷新你的终极技能(75秒冷却时间或阵亡时重置)。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1133,
    "apiName": "ARAM_MagicMissile",
    "name": "魔法飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/maps/particles/kiwi/magicmissile_small.png",
    "description": "造成技能伤害会对其发射3个飞弹，每个造成基于飞行距离的百分比最大生命值的真实伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1061,
    "apiName": "ARAM_OkBoomerang",
    "name": "回力OK镖",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/okboomerang_small.png",
    "description": "每7秒朝着一个附近的敌人自动施放投掷一个回力镖。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1066,
    "apiName": "ARAM_QuantumComputing",
    "name": "量子计算",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/quantumcomputing_small.png",
    "description": "周期性地在你周围自动施放一次巨型斩击，造成物理伤害。 被外沿命中的敌人会被减速、受到额外伤害、并治疗你。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/cdragon/arena/zh_cn.json"
  },
  {
    "id": 1332,
    "apiName": "OminousPact",
    "name": "不祥契约",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/wisdomofages_small.png",
    "description": "基于已损失生命值，获得75–150（1–18级）法术强度，50%移动速度和20%全能吸血。施放技能会消耗你的5%当前生命值。 在30%生命值时获得最大增益。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1328,
    "apiName": "CriticalRhythm",
    "name": "暴击律动",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalrhythm_small.png",
    "description": "你的普攻在暴击时获得可叠加的6%攻击速度，至多至10层。 获得 25%暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1333,
    "apiName": "EscapePlan",
    "name": "逃跑计划",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/escapeplan_small.png",
    "description": "在降至35%生命值时，获得巨量0.65 × 最大生命值持续衰减的护盾、持续衰减的150%移动速度和持续衰减的缩小效果。(75秒冷却时间)",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1325,
    "apiName": "GlassCannon",
    "name": "玻璃大炮",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "减少30%最大生命值。造成25%额外真实伤害。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1334,
    "apiName": "SnowballUpgrade",
    "name": "升级：雪球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowballupgrade_small.png",
    "description": "你的雪球获得50技能急速。 击中时会产生一片区域，使其中的敌人受到(0.5 + 0.0006 × 法术强度) × 100%减速效果，以及在2秒的持续时间里每秒造成100 + 0.6 × 法术强度 + 1 × 额外攻击力魔法伤害(总计(100 + 0.6 × 法术强度 + 1 × 额外攻击力) × 2魔法伤害)。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1329,
    "apiName": "BiggestSnowballEver",
    "name": "史上最大雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/biggestsnowballever_small.png",
    "description": "你的雪球获得100技能急速。 你的雪球现在变得非常大，并且可以穿过小兵。它会对敌人造成持续2秒的20%减速， 将他们击飞0.75秒，并造成额外200–350（1–18级） + 0.6 × 法术强度 + 1 × 额外攻击力伤害。 如果你没有雪球，则获得一个雪球。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1335,
    "apiName": "Goldrend",
    "name": "夺金",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldrend_small.png",
    "description": "用攻击或技能对一个英雄造成伤害时会造成额外魔法伤害，并为你提供金币和 移动速度。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1205,
    "apiName": "ARAM_ADAPt",
    "name": "物理转魔法",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/adapt_small.png",
    "description": "将额外攻击力转化为法术强度。获得15%法术强度。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1206,
    "apiName": "ARAM_escAPADe",
    "name": "魔法转物理",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/escapade_small.png",
    "description": "将法术强度转化为额外攻击力。获得15%攻击力。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1331,
    "apiName": "EmpyreanPromise",
    "name": "至高天诺言",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/empyreampromise_small.png",
    "description": "获得15%治疗和护盾强度。获得至高天诺言作为一个召唤师技能。 警惕 传送至你的友军并在着陆时提供持续3秒的100–250（1–18级） + 1 × 法术强度 + 0.1 × 额外最大生命值护盾值。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1195,
    "apiName": "ARAM_GiantSlayer",
    "name": "巨人杀手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/giantslayer_small.png",
    "description": "体型变小，获得移动速度，并基于敌方英雄体型大于你的程度获得额外伤害。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1323,
    "apiName": "ARAM_Cruelty",
    "name": "残忍",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/cruelty_small.png",
    "description": "定身或缚地一个英雄时，召唤一颗会在短暂延迟后着陆的彗星，对附近的敌人们造成魔法伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1345,
    "apiName": "ARAM_SpiritualPurification",
    "name": "心灵净化",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritualpurification_small.png",
    "description": "参与击杀时，产生一次爆炸，对附近敌人们造成相当于他们15%当前生命值的伤害并留下一个减速区域。区域内的敌人们会受到持续1.5秒的60%减速。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1238,
    "apiName": "ARAM_TransmutePrismatic",
    "name": "质变：棱彩阶",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/transmuteprismatic_small.png",
    "description": "获得1个随机棱彩阶强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1243,
    "apiName": "ARAM_TransmuteChaos",
    "name": "质变：混沌",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/transmutechaos_small.png",
    "description": "获得2个随机强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1344,
    "apiName": "FinalForm",
    "name": "最终形态",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/finalform_small.png",
    "description": "在施放你的终极技能时，获得持续10秒的50%最大生命值护盾、20%全能吸血和30%额外移动速度。(20秒冷却时间)。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1347,
    "apiName": "Poltergeist",
    "name": "吵闹鬼",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "获得【吵闹鬼】作为一个召唤师技能。 吵闹鬼会同时施放召唤师技能【屏障】和【幽灵疾步】。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1348,
    "apiName": "Flash2",
    "name": "闪闪现现",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/flash2_small.png",
    "description": "获得第二个【闪现】召唤师技能和70召唤师技能急速。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1314,
    "apiName": "MightyShield",
    "name": "强力护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/mightyshield_small.png",
    "description": "当你获得护盾时，获得40–100（1–18级）适应之力，持续3秒。(5秒冷却时间)",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1315,
    "apiName": "SwiftAndSafe",
    "name": "快中求稳",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/swiftandsafe_small.png",
    "description": "在冲刺或闪烁后，获得持续2秒的65–290（1–18级） + 0.26 × 法术强度 + 0.65 × 额外攻击力护盾值。 (5秒冷却时间)",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1346,
    "apiName": "Vampirism",
    "name": "吸血习性",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/vampired_small.png",
    "description": "你不再能够被友军治疗或获得生命回复。获得25%全能吸血。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1027,
    "apiName": "ARAM_Earthwake",
    "name": "大地苏醒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/earthwake_small.png",
    "description": "你的冲刺、闪烁或传送类技能会留下一条在0.75秒后爆炸的轨迹。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1074,
    "apiName": "ARAM_ShrinkRay",
    "name": "缩小射线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shrinkray_small.png",
    "description": "你的攻击会将目标的伤害与体型削减15%攻击特效。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1358,
    "apiName": "PinballSnowball",
    "name": "弹球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pinballsnowball_small.png",
    "description": "你的雪球获得技能急速并且造成额外的真实伤害。 当雪球从墙体上反弹时，它的体型和伤害获得提升，并缩短它的冷却时间。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1384,
    "apiName": "Donation",
    "name": "捐赠",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/donation_small.png",
    "description": "收到1750金币。谢了！ :)",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1006,
    "apiName": "ARAM_BladeWaltz",
    "name": "利刃华尔兹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bladewaltz_small.png",
    "description": "让你进入不可被选取状态，在此期间对敌人进行突进并造成30–150（1–18级） + 0.1 × 额外攻击力 + 0.06 × 法术强度伤害8次(造成50%附带伤害)。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1375,
    "apiName": "SoulEater",
    "name": "吞噬灵魂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/souleater_small.png",
    "description": "定身一个敌方英雄时会提供20最大生命值。 已获得生命值的总和：20 × 状态层数",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1401,
    "apiName": "GrowthSpurt",
    "name": "生机迸发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/growthspurt_small.png",
    "description": "获得生机迸发作为一个召唤师技能。 生机迸发会猛然提升你的体型，击飞附近的敌人们1秒并提供持续7秒的300 + 0.2 × 最大生命值最大生命值。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1390,
    "apiName": "ARAM_PhenomenalEvil",
    "name": "超凡邪恶",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/aram_phenomenalevil_small.png",
    "description": "在你用技能对敌人造成伤害时永久获得1法术强度。 如果是作为你的第二个强化符文，则自带40法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1400,
    "apiName": "TrainOfTheDead",
    "name": "最终都市列车",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/nightstalking_small.png",
    "description": "在你阵亡时，朝击杀你的敌人发动一辆列车，对它命中的每个敌人造成150–750（1–18级） + 0.15 × 最大生命值 + 0.5 × 法术强度 + 0.65 × 额外攻击力物理伤害。这个列车不会停下。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1414,
    "apiName": "Dropybara_Active",
    "name": "卡皮巴拉空投",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/orbitallaser_small.png",
    "description": "获得卡皮巴拉空投作为一个召唤师技能。 在一阵延迟后，召唤一个卡皮巴拉落下，造成25%最大生命值的真实伤害。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1415,
    "apiName": "Twinfire",
    "name": "双生火焰",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/twinfire_small.png",
    "description": "造成技能伤害时，发射1+3 × 暴击率个飞弹，每个造成10–30（1–18级） + 0.07 × 额外攻击力 + 0.07 × 法术强度魔法伤害。 此外，获得25%暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2005,
    "apiName": "ARAM_InfernoTriggered",
    "name": "扳机炼狱",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/madscientist_small.png",
    "description": "获得悍勇本色。在你达到S评价等级时，自动使用炼狱扳机。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2006,
    "apiName": "ARAM_Dropkick",
    "name": "飞身踢",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dropkick_small.png",
    "description": "你的攻击和技能会处决低生命值的敌方英雄，从而击退并引发一次爆炸，同时治疗你自身。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1237,
    "apiName": "ARAM_TransmuteGold",
    "name": "质变：黄金阶",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/transmutegold_small.png",
    "description": "获得1个随机黄金阶强化符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1356,
    "apiName": "CriticalMissile",
    "name": "暴击飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalmissile_small.png",
    "description": "当你暴击时，发射1+3 × 暴击率个飞弹，每个造成15–85（1–18级）魔法伤害。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1420,
    "apiName": "Sonata",
    "name": "咏叹奏鸣",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sonata_small.png",
    "description": "每10秒，以一个不断交替的旋律来自动施放坚毅咏叹调和迅捷奏鸣曲。 坚毅咏叹调治疗附近友军并提供一个临时的护盾光环。 迅捷奏鸣曲提供一个临时光环来提供额外移动速度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1421,
    "apiName": "PromQueen",
    "name": "舞会女王",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/promqueen_small.png",
    "description": "每35秒，自动施放一道闪亮宝冠降临在你头上。当它着陆时，获得洛的终极技能，魅惑你碰到的敌人们。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2026,
    "apiName": "KillSecured",
    "name": "杀意翻涌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/killsecure_small.png",
    "description": "在朝着低于40%生命值的敌人时，获得60%移动速度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1308,
    "apiName": "ARAM_Firefox",
    "name": "火狐",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firfox_small.png",
    "description": "自动施放 获得移动速度并召唤3道烈焰环绕于你，瞄准距离内相距最近的那个可见英雄并造成魔法伤害。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2007,
    "apiName": "ARAM_LittleDevil",
    "name": "你肩上的恶魔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/littledevil_small.png",
    "description": "与【大魔王】本尊签订一个契约。 他持续汲取你的生命力，但回报给你力量，让你对英雄造成额外真实伤害并且创造治疗残片供你获取。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2009,
    "apiName": "ARAM_Zealot",
    "name": "狂热者",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/zealot_small.png",
    "description": "获得按对局状态实时计算暴击几率和按对局状态实时计算攻击速度（随法术强度变化）。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2010,
    "apiName": "ARAM_DoubleTap",
    "name": "双发快射",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/doubletap_small.png",
    "description": "你的暴击施加一次额外的攻击特效。 获得 按对局状态实时计算暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2016,
    "apiName": "ARAM_Juiced",
    "name": "注魔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/juiced_small.png",
    "description": "攻击特效消耗按对局状态实时计算法力值以造成按对局状态实时计算魔法伤害，这个伤害可以暴击。 已造成的伤害：按对局实时属性计算 已消耗的法力值：按对局实时属性计算",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1220,
    "apiName": "ARAM_FanTheHammer",
    "name": "连拨击锤",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/fanthehammer_small.png",
    "description": "对敌方英雄的攻击会发射5个额外飞弹，造成随距离提升的额外伤害。每个方向的冷却时间独立计算。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2031,
    "apiName": "ARAM_DropBear",
    "name": "空投熊",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drop_bear_small.png",
    "description": "阵亡时，一个具有你所有强化符文的巨大提伯斯从天而降并伤害附近的敌人们。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2032,
    "apiName": "FishBait",
    "name": "鲨鱼诱饵",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/fishbait_small.png",
    "description": "在阵亡之后的若干秒，一头鲨鱼会啃噬所有附近的敌人们。你可以在阵亡后进行移动，以给鲨鱼攻击进行定位。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2034,
    "apiName": "SharkTempest",
    "name": "鲨鱼暴风",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sharktempest_small.png",
    "description": "鲨鱼们环绕着你的【雪球】，对它们途经的敌人们造成减速和50–100（1–18级）魔法伤害。如果你的【雪球】命中了一个英雄，鲨鱼们会吸附至其身上并生成一阵鲨鱼暴风，从而对所有附近的敌人们造成每秒25–75（1–18级） + 0.2 × 额外攻击力 + 0.12 × 法术强度魔法伤害和持续3秒的30%减速。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2042,
    "apiName": "BrushPower",
    "name": "藏身草丛",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/brushpower_small.png",
    "description": "在进入草丛后，多造成20%伤害，持续2秒。留在草丛中会刷新这个效果。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2043,
    "apiName": "NatureIsHealing",
    "name": "自然即是治愈",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/natureishealing_small.png",
    "description": "站在草丛中时，每秒回复(0.006–0.021（1–18级）) × 100%最大生命值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2054,
    "apiName": "SpellVolley",
    "name": "三重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "你的【所选技能】技能会瞄准你前方2个额外的敌人。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2055,
    "apiName": "ARAM_Multishot",
    "name": "多重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "任务：用【所选技能】技能命中敌方英雄按对局状态实时计算次。 奖励：发射数量基于任务等级的额外飞弹。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2065,
    "apiName": "ARAM_Terror",
    "name": "惊惧",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/desecrator_large.png",
    "description": "每当你施放【所选技能】技能时，恐惧你周围的敌人们1.75秒。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2063,
    "apiName": "DimensionShift_Active",
    "name": "位面转移",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/whenthedarknesscomes_small.png",
    "description": "获得召唤师技能当黑暗到来。 当黑暗到来：发射一道灿烂之光到一个位置。它着陆时，区域内的所有活着的单位都将在接下来的8秒期间被送到一个不同的领域。 在你处于这个领域时，你获得： 300–1500（1–18级）生命值 35–150（1–18级）法术强度 35–150（1–18级）攻击力 (0.35) × 100%体型 所有单位在该领域中都能自由地移动和行动，但不能以战略点(诸如防御塔或召唤水晶)为目标。 “跟随你的光明……”——一个迷失的灵魂",
    "tags": [
      "attack",
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2064,
    "apiName": "ARAM_Quickstep",
    "name": "快步",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "当你使用【所选技能】技能时，朝你的鼠标指针进行冲刺。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2072,
    "apiName": "Missile_Split",
    "name": "咒语裂变",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "在命中时、最大距离时或再次施放时，你的【所选技能】技能的飞弹会分裂为两部分。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2073,
    "apiName": "ARAM_SustainingStrike",
    "name": "虹吸",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "治疗相当于用【所选技能】技能对敌方英雄的30%造成伤害的生命值。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2076,
    "apiName": "TitansPulse",
    "name": "保持坚定",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "当【所选技能】技能对敌方英雄造成伤害时，获得1/2/3（英雄等级1/7/11）护甲和魔法抗性。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2078,
    "apiName": "ChainReaction",
    "name": "连锁反应",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "如果一个被【所选技能】技能击退的目标命中了另一个英雄，则二者都会被击飞并受到伤害。在与地形产生碰撞时，该击飞时长会延长并且他们会受到额外伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2077,
    "apiName": "DarkWind",
    "name": "贪欲束缚",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradehubris_small.png",
    "description": "用你的【所选技能】技能定身或缚地敌方英雄时造成额外伤害并对你进行治疗。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2082,
    "apiName": "Equilibrium",
    "name": "我们的治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/equillibrium_small.png",
    "description": "每当你周围的某人进行治疗时，你获得相当于其15%治疗效果的治疗效果。从敌方治疗中获得双倍。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2083,
    "apiName": "BurstingTeeth",
    "name": "牙仙子",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questburstingteeth_small.png",
    "description": "爆裂敌人会掉落牙齿。拾取牙齿会提供给你永久的穿甲和法术穿透。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1001,
    "apiName": "ARAM_ImTheJuggernaut",
    "name": "泰坦的坚决",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/iamthejuggernaut_small.png",
    "description": "在承受或造成伤害时获得层数。每10层，获得适应之力、护甲、魔法抗性、体型和韧性。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2088,
    "apiName": "ARAM_Snowday",
    "name": "下雪天",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowday_small.png",
    "description": "你的【雪球】获得100技能急速。在命中一名敌人时造成额外魔法伤害。如果你没有【雪球】，则获得一个【雪球】。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2062,
    "apiName": "Ability_SelfAOE_DoubleCast",
    "name": "回响施放",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "施放你的【所选技能】技能时会朝你的鼠标位置派出一个复制体并且在0.25秒之后再次施放该技能。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2089,
    "apiName": "ARAM_YowchMyCoins",
    "name": "哎哟，我的硬币！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/youchmycoins_small.png",
    "description": "在参与击杀敌方英雄后，该英雄会在附近掉落多枚硬币，你和友军可以收集它们。每枚硬币价值15金币。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2091,
    "apiName": "EndlessDecimation",
    "name": "无尽大杀四方",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/endlessdecimate_small.png",
    "description": "在战斗中每8秒自动施放一次环形斧头挥舞来造成物理伤害。对被斧刃命中的敌人们造成提升伤害(100–400（1–18级） + 0.4 × 法术强度 + 0.6 × 攻击力)并治疗你18%已损失生命值。被斧刃命中的每个敌人，都会将这个技能的冷却时间缩短10%，最小值为3秒。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1005,
    "apiName": "ARAM_WeeWooWeeWoo",
    "name": "喂呜喂呜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/weewooweewoo_small.png",
    "description": "在朝着低生命值的友军移动时，获得移动速度。你的治疗和护盾获得提升，基于你目标的低生命值程度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2087,
    "apiName": "ARAM_Archmage",
    "name": "大法师",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/eureka_small.png",
    "description": "施放一个技能会返还另一个随机技能的花费，数额相当于30%原技能冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1204,
    "apiName": "ARAM_StackosaurusRex",
    "name": "叠角龙",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/stackosaurusrex_small.png",
    "description": "在你获得一个技能的永久层数时，多获得100%！",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2096,
    "apiName": "LittleExtraHelp",
    "name": "小小的额外帮助",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "在你的【所选技能】技能持续期间获得150攻击距离和(0.75) × 100%攻击速度。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2097,
    "apiName": "VoidDash",
    "name": "虚空冲刺",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "用【所选技能】技能冲刺时会产生一片【虚空地带】来对敌方英雄们造成减速和魔法伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2099,
    "apiName": "ARAM_DivineDomain",
    "name": "飞升仪式",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "参与击杀敌方英雄后会留下其精华。攻击该精华会提供移动速度并重置基础技能冷却时间。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2103,
    "apiName": "ARAM_BangBang",
    "name": "狙神飞星",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questbangbang_small.png",
    "description": "任务：用技能狙击按对局状态实时计算个敌方英雄 奖励：一颗流星会飞向被狙击的敌方英雄，在其周围的一个区域内造成魔法伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2104,
    "apiName": "ARAM_SpiritBomb",
    "name": "灵魄炸弹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritbomb_small.png",
    "description": "为友方英雄提供治疗和护盾时会为你积攒一颗【灵魄炸弹】。在满层时，投掷该炸弹至生命值最低的那个友军，从而对其和附近友军们提供治疗和护盾。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2107,
    "apiName": "ARAM_Hellbent",
    "name": "濒死悟道",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/hellbent_small.png",
    "description": "用攻击或技能伤害敌方英雄时会提供层数。在满层时，你在阵亡时会进行强化复活。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2098,
    "apiName": "ARAM_EndlessHunt",
    "name": "吃过路兵",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dashing_small.png",
    "description": "周期性地识别出敌方英雄身上的破绽。 用攻击或技能命中它们时，会造成最大生命值真实伤害、回复生命值并提供移动速度。这些效果可以叠加。",
    "tags": [
      "attack",
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2080,
    "apiName": "Snowbomb",
    "name": "冰雪爆裂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowbomb_small.png",
    "description": "再次施放雪球会造成提升伤害、击飞该目标、并击退附近的敌人们。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2102,
    "apiName": "PressureCooker",
    "name": "高压锅",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questpressurecooker_small.png",
    "description": "每一秒，对附近的敌方英雄们施加一层可叠加的灼烧，这个效果受益于你的最大生命值。 任务：对敌方英雄造成灼烧伤害 奖励：提升【高压锅】的规模和伤害，基于任务等级。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2109,
    "apiName": "SnapBack",
    "name": "复位",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "再次施放【所选技能】技能时会产生爆炸，造成0.2 × 法术强度 + 0.2 × 攻击力 + 100–300（1–18级）魔法伤害，并回到你的原本位置。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2128,
    "apiName": "BloodMoneyBurn",
    "name": "炽燃利息",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bloodmoney2_small.png",
    "description": "英雄身上的灼烧和持续伤害会生成金币。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2116,
    "apiName": "SpecializedEmpowerment",
    "name": "威能之追求",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/marksmage_small.png",
    "description": "任务：用【所选技能】技能命中敌人按对局状态实时计算次。 奖励：永久提升【所选技能】技能伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2115,
    "apiName": "SquishySlappyGrab",
    "name": "软弹啪叽抓",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/squishyslappygrab_small.png",
    "description": "偶尔对所有附近的敌方英雄放出软弹啪叽的手，然后用灵链系住。你的下次攻击将拉拽所有被系住的敌人。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2111,
    "apiName": "Bonk",
    "name": "邦！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bonk_large.png",
    "description": "被【所选技能】技能强化的攻击或技能会对目标和附近的敌人们造成额外伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2123,
    "apiName": "Overloaded",
    "name": "超负荷",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "使用另一个技能会重置【所选技能】技能的冷却时间。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2125,
    "apiName": "ItsGoTime",
    "name": "前进时间到",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "激活【所选技能】技能会在其持续期间为你提供移动速度。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2126,
    "apiName": "KeepGoing",
    "name": "装填",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightningstrikes_small.png",
    "description": "在【所选技能】技能期间的普攻攻击特效会降低其冷却时间。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2131,
    "apiName": "DontChangeTheChannel",
    "name": "别停止引导",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dontchangethechannel_small.png",
    "description": "你每引导一秒都会获得护盾值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2136,
    "apiName": "TrustyWeapon",
    "name": "可靠武器",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "用【所选技能】技能打击敌方英雄时会铸造一条友谊纽带。 【所选技能】技能基于你的友谊等级获得到临时提升伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2132,
    "apiName": "WarlockJuicebox",
    "name": "术士果汁盒",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/warlockjuicebox_small.png",
    "description": "获得按对局状态实时计算全能吸血。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2135,
    "apiName": "Overkill",
    "name": "针插垫",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/symphonyofwar_small.png",
    "description": "在【所选技能】技能期间进行攻击会对你的目标凿下大钉。大钉会积累伤害、处决、并在到期时提供移动速度。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2137,
    "apiName": "PatOnTheBack",
    "name": "轻拍背部",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/patontheback_small.png",
    "description": "友军会在你走过时鼓励你，为你提供护盾和移动速度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2139,
    "apiName": "PinCushion",
    "name": "豪猪",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pincushion_small.png",
    "description": "承受来自英雄的伤害会积攒一次尖针迸发，这些尖针会从你身上飞出，对附近的敌人们造成伤害和减速。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2144,
    "apiName": "DoubleDefense",
    "name": "加固护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "来自【所选技能】技能的护盾变得更强并且受益于目标的已损失生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2138,
    "apiName": "WardingWeapon",
    "name": "自适应防护",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "用【所选技能】技能打击一个敌方英雄时，为你提供持续6秒的按对局状态实时计算护甲或魔法抗性，基于该技能的伤害类型。这个效果可以叠加。 最大防护等级：按对局实时属性计算",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "partial",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2148,
    "apiName": "DoubleStrike",
    "name": "双重打击",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "【所选技能】技能施加一次额外的攻击特效。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1392,
    "apiName": "GoldenSnowball",
    "name": "神圣雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldensnowball_small.png",
    "description": "雪球获得100技能急速。 你在用【雪球】冲刺后会免疫伤害1.5秒。 如果你没有雪球，获得一个雪球。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7002,
    "apiName": "DontStopCleavin",
    "name": "黑切联盟",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dont_stop_cleaving_small.png",
    "description": "你可以购买不限量的黑色切割者。在购买时，提升新的黑色切割者的属性，数额相当于25%x你已拥有的数量。 即刻获得残暴之力。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7001,
    "apiName": "Upgrade_ZzRotPortal",
    "name": "升级：兹若特传送门",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrade_zzrotportal_small.png",
    "description": "兹若特传送门生成1个额外的仆从，并且你每拥有6级就会生成一个额外的仆从。 仆从们也会在传送门被摧毁时生成。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7003,
    "apiName": "DoOrDie",
    "name": "或杀或死",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/do_or_die_small.png",
    "description": "将梅贾的窃魂卷、利维坦之甲、神秘之剑的最大层数翻倍。 “不不不，嘉文，我说的是，杀，或者，死”",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7004,
    "apiName": "DrinkUp",
    "name": "一饮而尽",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/drink_up_small.png",
    "description": "你的队伍中的每个人即刻获得13瓶生命药水。 每参与击杀5次，就会获得5瓶生命药水。",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7010,
    "apiName": "FutureSightHeartsteel",
    "name": "时光发条：心之钢",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/fs_heart_steal_small.png",
    "description": "在获得750额外生命值之后，将手伸入未来然后获得一件心之钢。 【心之钢】不可售出。 横置10能量……",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7005,
    "apiName": "HasteMakesWaste",
    "name": "欲速则不达",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/haste_makes_waste_small.png",
    "description": "获得5% 冷却缩减。 将你的冷却缩减上限提升至20%。",
    "tags": [
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7006,
    "apiName": "StabbyStabby",
    "name": "又快又狠",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stabby_stabby_small.png",
    "description": "获得冷却缩减，基于穿甲。 将你的冷却缩减上限提升至5%。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7007,
    "apiName": "Upgrade_DeathFireGrasp",
    "name": "升级：冥火之拥",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrade_deathfire_small.png",
    "description": "将冥火之拥的伤害增幅提升至50%并将它的冷却时间缩短50%。 冥火之拥现在会将你的目标附近半径800之内的所有敌方英雄都选为目标。",
    "tags": [
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7009,
    "apiName": "Upgrade_InnervatingLocket",
    "name": "升级：激发之匣",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrade_innervating_small.png",
    "description": "将激发之匣的生命值和法力值回复量提升200%。 激发之匣会为你的目标附近的所有友方英雄回复生命值和法力值。 如果你以为乌迪尔以前难以被击杀……",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7008,
    "apiName": "DoransBiggestFan",
    "name": "多兰的最铁粉丝",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dorans_fan_small.png",
    "description": "在第一件多兰之刃、多兰之戒和多兰之盾之后的每次购买都会为原装备提供一个层数。 每层提供125%的该装备属性。 这些装备的被动效果不会提升。你的各个多兰系列装备都不再能被售出。 就像30件多兰的装备",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7011,
    "apiName": "TrueEternity",
    "name": "真正的永恒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/do_or_die_small.png",
    "description": "你可以购买不限量的时光之杖。你的时光之杖的叠层变得更快，并且它的层数没有上限。获得一个催化神石。 出门装备、核心出装、逆风希望",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7012,
    "apiName": "HexCore",
    "name": "海克斯核心",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dont_stop_cleaving_small.png",
    "description": "获得一个海克斯核心原型。花费金币以升级该海克斯核心并永久升级你的技能。",
    "tags": [
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7013,
    "apiName": "SpiritOfTheJungleMain",
    "name": "主玩打野之精魄",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritualpurification_small.png",
    "description": "你拥有的那些打野装的主要属性提升125%。 每种打野装仅有一件能够获得属性提升。 破碎幽灵之精魄、远古魔像之精魄、蜥蜴长老之精魄、麦瑞德裂血手套、瑞格之灯、以及烈焰之炬。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7014,
    "apiName": "DipDiveDodge",
    "name": "拱火诱饵",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stabby_stabby_small.png",
    "description": "获得10%闪避几率",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2003,
    "apiName": "ARAM_PoroKing",
    "name": "魄罗之王的弹跳",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poroking_small.png",
    "description": "获得魄罗之王的弹跳！ 魄罗之王的弹跳：变身为【魄罗之王】并反复弹跳，造成物理伤害并击退 附近的敌人们。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1406,
    "apiName": "GrandmasChiliOil",
    "name": "祖母的辣椒油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/grandmaschilioil_small.png",
    "description": "普攻和技能在命中敌人时会对其施加一个灼烧，这个效果会在3秒内持续造成共100–350（1–18级）魔法伤害。施加一个灼烧时，会在附近掉落一滩5秒的辣椒油。辣椒油每秒都会回复10–50（1–18级） + (25 × 状态层数 × 1)生命值并灼烧敌人们造成150 + (50 × 状态层数 × 1)魔法伤害。 你施加的每个灼烧都会使辣椒油效果变得更强。 灼烧伤害相当于150+50x灼烧来源数，至多至10个来源。",
    "tags": [
      "attack",
      "spell",
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1339,
    "apiName": "LaserHeal",
    "name": "激光治疗",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/laseheal_small.png",
    "description": "施放一个持续2.5秒的治疗激光，治疗友军，使敌人减速并对其造成魔法伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1342,
    "apiName": "SnowballRoulette",
    "name": "雪球扭蛋机",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowballupgrade_small.png",
    "description": "雪球获得100技能急速。命中敌人时，随机对你自身施放一个增益型的召唤师技能并对你的目标施放一个减益型的召唤师技能。接第二段时会为你再次施放该增益型召唤师技能。 如果你没有雪球，则获得一个雪球。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1409,
    "apiName": "ARAM_Poro_Blast",
    "name": "魄罗爆破手",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poroblast_small.png",
    "description": "你周期性地召集魄罗。伤害一个敌人时会对其发射所有魄罗，每个魄罗造成目标3%最大生命值真实伤害。如果你有5个魄罗，那么它们会进行一次击退。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1372,
    "apiName": "BabyKitty",
    "name": "小猫咪找妈妈",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/babykitty_small.png",
    "description": "站在一个友军的附近并将其标记为你的妈妈。 当朝着妈妈移动时，获得37.5%移动速度。当靠近你的妈妈时，获得75%移动速度、(0.15–0.5（1–18级）) × 100%治疗和护盾强度。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 1424,
    "apiName": "ARAM_MissingPingAugment",
    "name": "？？？",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/missingping_small.png",
    "description": "你的敌人消失信号将发射一个飞弹至被信号标记的位置，这个飞弹会对敌人造成100–400（1–18级） + 5%已损失生命值的魔法伤害并治疗友军50–200（1–18级） + 5%已损失生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": true,
    "descriptionStatus": "available",
    "unavailableReason": null,
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 7015,
    "apiName": "SummonersSafari",
    "name": "召唤师的游猎",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stabby_stabby_small.png",
    "description": "数据状态：unavailable（同版本客户端公开数据未提供可稳定展示的说明文本）。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "同版本客户端公开数据未提供可稳定展示的说明文本",
    "unresolvedTokens": [],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  }
];

export const classicExclusiveAugments = classicMayhemAugments.filter((augment) => augment.classicExclusive);
