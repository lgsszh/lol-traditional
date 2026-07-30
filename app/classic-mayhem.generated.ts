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
        "description": "在击杀9个小兵或野怪后，阿狸会治疗自身。 在参与击杀一名敌方英雄后，阿狸会以一个更高的治疗效果来治疗自身。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ahri_SoulEater2.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在击杀9个小兵或野怪后，阿狸会治疗自身。 在参与击杀一名敌方英雄后，阿狸会以一个更高的治疗效果来治疗自身。。客户端字段：TakedownWindow=3；MaxStacks=9。客户端公式：ChampionHeal=75–165（1–18级） + 0.3 × 法术强度；MinionHeal=35–95（1–18级） + 0.2 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "欺诈宝珠",
        "description": "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriQ.png",
        "cooldown": "7",
        "cost": "55/65/75/85/95",
        "range": "970",
        "numericDetail": "技能文本：阿狸投出然后收回她的宝珠，在放出时会沿途对敌人造成[BaseDamage] 35/60/85/110/135 + 0.5 × 法术强度魔法伤害，在收回时则会沿途对敌人造成[BaseDamage] 35/60/85/110/135 + 0.5 × 法术强度真实伤害。。基础参数：冷却=7；消耗=55/65/75/85/95；范围=970。客户端字段：BaseDamage=35/60/85/110/135；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 35/60/85/110/135 + 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "妖异狐火",
        "description": "阿狸获得短暂的爆发性移动速度加成，并放出三团狐火，锁定附近的敌人进行攻击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriW.png",
        "cooldown": "9/8/7/6/5",
        "cost": "30",
        "range": "700",
        "numericDetail": "技能文本：阿狸释放出3团狐火来追踪附近的敌人们并造成[BaseDamage] 40/60/80/100/120 + [APRatio] 0.4 × 法术强度魔法伤害，第一团之后的狐火降低至([BaseDamage] 40/60/80/100/120 + [APRatio] 0.4 × 法术强度) × [RepeatDamageMod] 0.4伤害。她还会获得在2秒里持续衰减的40%移动速度。。基础参数：冷却=9/8/7/6/5；消耗=30；范围=700。客户端字段：MovementSpeed=0.4；MovementSpeedDuration=2；MinionBonusDamageMultiplier=2；MinionBonusDamageThreshold=0.2；BaseDamage=40/60/80/100/120；RepeatDamageMod=0.4；AcquisitionRange=550；BonusAcquisitionRange=725；InitialDelay=0.25；SecondaryDelay=0.4；FlameDuration=2.5；OrbitRadius=150；APRatio=0.4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：SingleFireDamage=[BaseDamage] 40/60/80/100/120 + [APRatio] 0.4 × 法术强度；MultiFireDamage=([BaseDamage] 40/60/80/100/120 + [APRatio] 0.4 × 法术强度) × [RepeatDamageMod] 0.4",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "魅惑妖术",
        "description": "阿狸献出红唇热吻，对命中的第一个敌人造成伤害并将目标魅惑，并且立刻终止目标的移动技能并使目标无恶意地走向她。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriE.png",
        "cooldown": "12",
        "cost": "60",
        "range": "975",
        "numericDetail": "技能文本：阿狸献出红唇热吻，魅惑命中的首个敌人1.2/1.35/1.5/1.65/1.8秒并造成[BaseDamage] 80/120/160/200/240 + [APRatio] 0.85 × 法术强度魔法伤害。。基础参数：冷却=12；消耗=60；范围=975。客户端字段：BaseDamage=80/120/160/200/240；SlowPercent=-0.65；CharmDuration=1.2/1.35/1.5/1.65/1.8；APRatio=0.85；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/120/160/200/240 + [APRatio] 0.85 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ahri/ahri.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ahri.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "灵魄突袭",
        "description": "阿狸向前猛冲，并放出元气弹，对周围的数个敌人造成伤害。灵魄突袭在进入冷却阶段以前最多可被施放三次，并在参与击杀敌方英雄后获得额外的再次施放次数。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriR.png",
        "cooldown": "140/120/100",
        "cost": "100",
        "range": "450",
        "numericDetail": "技能文本：阿狸像妖魅一般冲刺，并对附近的敌人们发射3颗灵魄弹，优先选择英雄。这些灵魄弹每颗造成[RBaseDamage] 75/125/175 + [RAPCoefficient] 0.35 × 法术强度魔法伤害。灵魄突袭可以在15秒内再次施放至多2次。 在此期间，用摄魂夺魄吞噬一名英雄的魂魄时，会使再次施放的窗口期至多延长至10秒并为灵魄突袭提供一次额外的再次施放(至多可储存至3次)。。基础参数：冷却=140/120/100；消耗=100；范围=450。客户端字段：RBaseDamage=75/125/175；RMaxTargetsPerCast=3；RMaxCasts=3；RDashDistance=500；RBaseDashSpeed=1200；RRecastWindow=15；RAcquisitionRange=600；RDashCooldown=1；RAPCoefficient=0.35；RResetCasts=1；PDurationExtension=10；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：RCalculatedDamage=[RBaseDamage] 75/125/175 + [RAPCoefficient] 0.35 × 法术强度",
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
        "description": "贾克斯连续的普通攻击，会持续地提高他的攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Armsmaster_MasterOfArms.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：贾克斯连续的普通攻击，会持续地提高他的攻击速度。。客户端字段：BuffDuration=2.5；MaxStacks=8；FallOffRate=0.35；BelvethVsJaxQuestRewardStacks=5。客户端公式：AttackSpeedPerStack=0.05（按英雄等级变化）；MaxBonusAttackSpeed=(0.05（按英雄等级变化）) × [MaxStacks] 8；BelvethVsJaxQuestRewardAttackSpeedPerStack=0.0028（初始每级 +0.0006，按客户端断点变化）；BelvethVsJaxQuestRewardAttackSpeed=(0.0028（初始每级 +0.0006，按客户端断点变化）) × 1 × {a8a3dd7a}层数",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "跳斩",
        "description": "贾克斯跳向一个单位。如果目标是敌人，贾克斯会用他的武器狠狠地抽打敌人的脸，造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "50",
        "range": "700",
        "numericDetail": "技能文本：贾克斯跳向一个友方或敌方单位或守卫，如果目标是敌人则会造成[Damage] 65/105/145/185/225 + 1 × 额外攻击力物理伤害。。基础参数：冷却=8/7.5/7/6.5/6；消耗=50；范围=700。客户端字段：Damage=65/105/145/185/225；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 65/105/145/185/225 + 1 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "蓄力一击",
        "description": "贾克斯为武器充能，使他的下次攻击能造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxW.png",
        "cooldown": "7/6/5/4/3",
        "cost": "30",
        "range": "300",
        "numericDetail": "技能文本：贾克斯给他的武器充能，使他的下次攻击或跳斩造成额外的[Damage] 50/85/120/155/190 + 0.6 × 法术强度魔法伤害。。基础参数：冷却=7/6/5/4/3；消耗=30；范围=300。客户端字段：Damage=50/85/120/155/190；StructureMod=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 50/85/120/155/190 + 0.6 × 法术强度；FinalDamage=[FinalDamage：客户端未公开可展开公式]",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式 FinalDamage"
        ]
      },
      {
        "key": "E",
        "name": "反击风暴",
        "description": "贾克斯的武艺让他能够在短时间里躲闪掉所有即将到来的普通攻击，随后对所有周围的敌人快速发起反击，并将他们击晕。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxE.png",
        "cooldown": "17/15/13/11/9",
        "cost": "50/60/70/80/90",
        "range": "300",
        "numericDetail": "技能文本：贾克斯进入一个最多持续2秒的防御姿态，能够躲闪掉一切即将到来的攻击，并且减少25%来自群体技能的伤害。在2秒后，或再次施放后，贾克斯会造成[BaseDamage] 40/70/100/130/160 + [APRatio] 0.7 × 法术强度 + 4%最大生命值的魔法伤害并使附近的敌人晕眩1秒。 贾克斯每躲掉一次攻击，这个伤害值就会提升20%，最多可提升至最大值([BaseDamage] 40/70/100/130/160 + [APRatio] 0.7 × 法术强度) × 2 + ([PercentHealthDamage] 4) × 2%最大生命值。。基础参数：冷却=17/15/13/11/9；消耗=50/60/70/80/90；范围=300。客户端字段：BaseDamage=40/70/100/130/160；StunDuration=1；PercentIncreasedPerDodge=0.2；MaxDodgesForDamageIncrease=5；PercentHealthDamage=4；DodgeDuration=2；AoEDamageReduction=25；APRatio=0.7；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 40/70/100/130/160 + [APRatio] 0.7 × 法术强度；MaxDamage=([BaseDamage] 40/70/100/130/160 + [APRatio] 0.7 × 法术强度) × 2；MaxPercentHealthDamage=([PercentHealthDamage] 4) × 2；MonsterDamageCap=9000–9000（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "武器大师",
        "description": "每连续攻击2次，第3次攻击就会造成额外的魔法伤害。另外，贾克斯可以激活这个技能来在他周围造成伤害并增强他的决心，从而暂时性地提升他的护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxR.png",
        "cooldown": "110/100/90",
        "cost": "100",
        "range": "260",
        "numericDetail": "技能文本：被动：2.5秒内的每第三次攻击造成额外的[PassiveBaseDamage] 75/130/185 + 0.6 × 法术强度魔法伤害。 主动：贾克斯将他的灯柱砸落，对附近的敌人们造成[SwingDamageBase] 100/175/250 + 1 × 攻击力魔法伤害。如果他命中了一名英雄，那么他会获得[BaseResists] 45/60/75 + 0.4 × 额外攻击力护甲和([BaseResists] 45/60/75 + 0.4 × 额外攻击力) × [MRMult] 0.6魔法抗性，并且每额外命中一个英雄就会获得额外的[ResistsPerExtraTarget] 20/25/30 + 0.1 × 额外攻击力护甲和([ResistsPerExtraTarget] 20/25/30 + 0.1 × 额外攻击力) × [MRMult] 0.6魔法抗性，持续8秒。在此期间，他每第二次攻击（而非每第三次攻击）造成额外的魔法伤害。。基础参数：冷却=110/100/90；消耗=100；范围=260。客户端字段：Duration=8；PassiveBaseDamage=75/130/185；PassiveFallOffTime=2.5；BaseResists=45/60/75；ResistsPerExtraTarget=20/25/30；MRMult=0.6；SwingDamageBase=100/175/250；AoESize=375；StructureMod=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：OnHitDamage=[PassiveBaseDamage] 75/130/185 + 0.6 × 法术强度；BaseArmor=[BaseResists] 45/60/75 + 0.4 × 额外攻击力；BonusArmor=[ResistsPerExtraTarget] 20/25/30 + 0.1 × 额外攻击力；SwingDamageTotal=[SwingDamageBase] 100/175/250 + 1 × 攻击力；BaseMR=([BaseResists] 45/60/75 + 0.4 × 额外攻击力) × [MRMult] 0.6；BonusMR=([ResistsPerExtraTarget] 20/25/30 + 0.1 × 额外攻击力) × [MRMult] 0.6；FinalDamage=[FinalDamage：客户端未公开可展开公式]",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jax/jax.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Jax.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式 FinalDamage"
        ]
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
        "description": "在李青使用一次技能后，他的下两次攻击会获得攻速加成，且回复能量。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LeeSinPassive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在李青使用一次技能后，他的下两次攻击会获得攻速加成，且回复能量。。客户端字段：PassiveAS=40；FirstHitEnergyMult=2。客户端公式：EnergyReturn=10（按英雄等级变化）；TTFirstHitEnergy=(10（按英雄等级变化）) × [FirstHitEnergyMult] 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "天音波/回音击",
        "description": "天音波：李青发出刺耳的声波定位敌人，对首个敌人造成物理伤害。如果天音波击中敌人，李青在接下来3秒可施放回音击。 回音击：李青冲向被天音波击中的敌人，造成基于该目标已损失生命值的物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinQOne.png",
        "cooldown": "10/9/8/7/6",
        "cost": "50",
        "range": "1100",
        "numericDetail": "技能文本：李青发出刺耳的声波定位敌人，对命中的首个敌人造成[Q1BaseDamage] 60/90/120/150/180 + [Q1ADRatio] 0.9 × 额外攻击力物理伤害，提供目标的真实视野，并使李青可以在接下来的3秒内再次施放。 再次施放：李青突进向被声波击中的敌人，造成[Q2BaseDamage] 60/90/120/150/180 + [Q2ADRatio] 0.9 × 额外攻击力到([Q2BaseDamage] 60/90/120/150/180 + [Q2ADRatio] 0.9 × 额外攻击力) × 2物理伤害（基于目标已损失的生命值）。。基础参数：冷却=10/9/8/7/6；消耗=50；范围=1100。客户端字段：Q1BaseDamage=60/90/120/150/180；Q2BaseDamage=60/90/120/150/180；Q1ADRatio=0.9；Q2ADRatio=0.9；Q2MaxMissingHealthMod=1；ReactivateTime=3；CherryBonusHaste=30；DashSpeed=1350；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：InitialDamage=[Q1BaseDamage] 60/90/120/150/180 + [Q1ADRatio] 0.9 × 额外攻击力；RecastDamage=[Q2BaseDamage] 60/90/120/150/180 + [Q2ADRatio] 0.9 × 额外攻击力；EmpoweredDamage=([Q2BaseDamage] 60/90/120/150/180 + [Q2ADRatio] 0.9 × 额外攻击力) × 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "金钟罩/铁布衫",
        "description": "金钟罩：李青冲向目标友军，为他自身提供护盾值。如果该友军是一名英雄，则也会获得护盾值。在使用【金钟罩】后，李青可以施放【铁布衫】。 铁布衫：李青艰苦卓绝的训练让他能在战斗中激发潜能。李青获得全能吸血。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinWOne.png",
        "cooldown": "7",
        "cost": "50",
        "range": "700",
        "numericDetail": "技能文本：李青冲刺至一名友军或守卫处。如果目标友军是一名英雄，李青会为自己和目标友军提供持续2秒的[ShieldValue] 60/105/150/195/240 + 0.8 × 法术强度护盾值。李青可以在接下来的3秒内再次施放此技能。 再次施放：李青获得持续4秒的10/14/18/22/26%全能吸血。。基础参数：冷却=7；消耗=50；范围=700。客户端字段：LifestealAndSpellVamp=10/14/18/22/26；ShieldValue=60/105/150/195/240；ShieldDuration=2；DashSpeed=1350；W1ReactivateTime=3；W1CooldownRecovered=0.5；LifestealAndSpellVampTime=4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ShieldAmount=[ShieldValue] 60/105/150/195/240 + 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "天雷破/摧筋断骨",
        "description": "天雷破：李青猛击地面，施放冲击波，造成魔法伤害并使命中的敌方单位显形。如果天雷破命中了一名敌人，那么李青可以施放【摧筋断骨】。 摧筋断骨：李青致残被天雷破给伤害到的敌人，减少其移动速度。持续期间受影响单位的移动速度会逐渐恢复正常。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinEOne.png",
        "cooldown": "8",
        "cost": "50",
        "range": "450",
        "numericDetail": "技能文本：李青猛击地面，施放冲击波，造成[E1Damage] 35/60/85/110/135 + 0.9 × 攻击力魔法伤害并使命中的敌方单位显形4秒。如果这个技能命中了一名敌人，那么李青可以在接下来的3秒内再次施放此技能。 再次施放：李青使被冲击波击中的敌人造成在4秒里持续衰减的35/45/55/65/75%减速。。基础参数：冷却=8；消耗=50；范围=450。客户端字段：SlowAmount=35/45/55/65/75；E1Damage=35/60/85/110/135；ReactivateTime=3；SlowDuration=4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：InitialDamage=[E1Damage] 35/60/85/110/135 + 0.9 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leesin/leesin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/LeeSin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "猛龙摆尾",
        "description": "李青用强力的回旋踢击退敌方英雄，对目标以及被目标撞到的任何敌人造成物理伤害。 被目标撞到的敌人会被短暂击飞。这项技艺是春哥教他的，不过李青不能将玩家的英雄踢到地图外面去。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinR.png",
        "cooldown": "110/85/60",
        "cost": "0",
        "range": "375",
        "numericDetail": "技能文本：李青用一记强力的回旋踢击退一名敌方英雄，并造成[BaseDamage] 175/400/625 + 2 × 额外攻击力物理伤害。 被目标撞到的敌方英雄会被短暂击飞并受到物理伤害，伤害值相当于[BaseDamage] 175/400/625 + 2 × 额外攻击力加上初始目标12/15/18%的额外生命值。。基础参数：冷却=110/85/60；消耗=0；范围=375。客户端字段：BaseDamage=175/400/625；PercentHPCarryThrough=12/15/18；KickDistance=800；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 175/400/625 + 2 × 额外攻击力",
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
        "description": "艾希的攻击会让目标减速，并使艾希对这些目标造成更高伤害。 艾希的暴击不会造成额外伤害，但会对目标施加一个强化版减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ashe_P.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：艾希的攻击会让目标减速，并使艾希对这些目标造成更高伤害。 艾希的暴击不会造成额外伤害，但会对目标施加一个强化版减速效果。。客户端字段：SlowDuration=2。客户端公式：SlowAmount=0.2–0.3（1–18级）；EmpoweredSlowAmount=0.4–0.6（1–18级）；DamageBonus=1 + (1 + 1 × 客户端未命名属性（枚举 9）) × 客户端未命名属性（枚举 8）；{da9201cc}=(1 + (1 + 1 × 客户端未命名属性（枚举 9）) × 客户端未命名属性（枚举 8）) × 1 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 9",
          "未命名属性枚举 8"
        ]
      },
      {
        "key": "Q",
        "name": "射手的专注",
        "description": "艾希会在攻击时聚集【全神贯注】效果。在【全神贯注】到达最大值时，艾希就能施放【射手的专注】来消耗掉所有【全神贯注】效果，以临时提升她的攻击速度，并在持续期间将她的普攻转变为一阵强力的飓风箭阵。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AsheQ.png",
        "cooldown": "0",
        "cost": "30",
        "range": "400",
        "numericDetail": "技能文本：被动：艾希的攻击提供一层持续4秒的效果。在4层时，她就可以激活这个技能。 主动：艾希获得20/30/40/50/60%攻击速度并且她的攻击转而造成[DamagePerStrike] 1.1/1.15/1.2/1.25/1.3 × 攻击力伤害，持续6秒。。基础参数：冷却=0；消耗=30；范围=400。客户端字段：DamagePerStrike=1.1/1.15/1.2/1.25/1.3；ShotsPerStrike=5；StackDuration=4；MaxStacks=4；BuffDuration=6；BonusAS=20/30/40/50/60；TimerDuration=1；StackFalloffDuration=1；effect1amount=4；effect2amount=4；effect3amount=6；effect4amount=20/30/40/50/60；effect5amount=0；effect6amount=0；effect7amount=1；effect8amount=1；effect9amount=1；effect10amount=0。客户端公式：EmpoweredDamage=[DamagePerStrike] 1.1/1.15/1.2/1.25/1.3 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "万箭齐发",
        "description": "艾希向前方的锥形范围射出多支箭，对敌人造成额外伤害。也会触发冰霜射击的效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Volley.png",
        "cooldown": "18/14.5/11/7.5/4",
        "cost": "75/70/65/60/55",
        "range": "1200",
        "numericDetail": "技能文本：艾希射出一排共7/8/9/10/11支箭矢，每支箭矢造成[BaseDamage] 60/95/130/165/200 + [ADRatio] 1 × 额外攻击力物理伤害。敌方单位可以一次性格挡多支箭矢，但只会受到一次伤害。。基础参数：冷却=18/14.5/11/7.5/4；消耗=75/70/65/60/55；范围=1200。客户端字段：BaseDamage=60/95/130/165/200；NumberOfArrowsTooltip=7/8/9/10/11；ADRatio=1；effect1amount=5/7/9/11/13；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 60/95/130/165/200 + [ADRatio] 1 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "鹰击长空",
        "description": "艾希将她的猎鹰之灵派去执行侦查任务，可派往地图上的任意地点。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AsheSpiritOfTheHawk.png",
        "cooldown": "5",
        "cost": "0",
        "range": "25000",
        "numericDetail": "技能文本：艾希将她的猎鹰之灵派去执行侦查任务，可派往地图上的任意地点。。基础参数：冷却=5；消耗=0；范围=25000。客户端字段：BaseCooldown=90/80/70/60/50；VisionDuration=5；effect1amount=3；effect2amount=50/90/130/170/210；effect3amount=25000；effect4amount=5；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ChargeCooldown=客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ashe/ashe.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ashe.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "R",
        "name": "魔法水晶箭",
        "description": "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，那么它会对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离。此外，该英雄附近的敌方单位会受到伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EnchantedCrystalArrow.png",
        "cooldown": "100/80/60",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：艾希射出魔法水晶箭，晕眩命中的第一个敌方英雄，并造成[RBaseDamage] 200/400/600 + [APRatio] 1.2 × 法术强度魔法伤害。晕眩时长取决于飞行距离，至多3.5秒。目标周围的敌人会受到冰霜射击的减速效果。。基础参数：冷却=100/80/60；消耗=100；范围=25000。客户端字段：RBaseDamage=200/400/600；MinStunDuration=1；MaxStunDuration=3.5；SlowRadius=400；AoECoefficient=1；APRatio=1.2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：RMainDamage=[RBaseDamage] 200/400/600 + [APRatio] 1.2 × 法术强度；{6b932875}=([RBaseDamage] 200/400/600 + [APRatio] 1.2 × 法术强度) × [AoECoefficient] 1",
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
        "description": "迦娜的友军在朝她移动时获得移动速度。 迦娜的普攻和【和风守护】会附带一部分额外移动速度的额外魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/JannaP.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：迦娜的友军在朝她移动时获得移动速度。 迦娜的普攻和【和风守护】会附带一部分额外移动速度的额外魔法伤害。。客户端字段：MSPercentAlly=0.06；MSBonusMagicDamage=0.3。客户端公式：MSToOnHitConversionRate=[MSBonusMagicDamage] 0.3；BonusDamage=[MSBonusMagicDamage] 0.3 × 客户端未命名属性（枚举 7）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 7"
        ]
      },
      {
        "key": "Q",
        "name": "飓风呼啸",
        "description": "迦娜改变气压和温度，在目标区域召唤小型风暴，风暴体积随时间增大。她可以再次施放该技能来释放风暴。风暴会朝向施放方向飞行，对沿途的所有单位造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HowlingGale.png",
        "cooldown": "14",
        "cost": "90/95/100/105/110",
        "range": "1075",
        "numericDetail": "技能文本：迦娜改变气压和温度，在目标区域召唤小型风暴，风暴体积随时间增大。她可以再次施放该技能来释放风暴。风暴会朝向施放方向飞行，对沿途的所有单位造成伤害和击飞效果。。基础参数：冷却=14；消耗=90/95/100/105/110；范围=1075。客户端字段：MissileTravelTime=1.25；MinionMod=1；BaseRange=1100；MinDamage=55/90/125/160/195；MinimumRatio=0.5；BonusDamage=10/15/20/25/30；BonusRatio=0.1；ChargeDistancePercent=20；BaseKnockup=0.5；ChargeKnockup=0.25；MaxDuration=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MinimumDamage=[MinDamage] 55/90/125/160/195 + [MinimumRatio] 0.5 × 法术强度；ExtraDamagePerSecondCharged=[BonusDamage] 10/15/20/25/30 + [BonusRatio] 0.1 × 法术强度；MaxDamage=[MinDamage] 55/90/125/160/195 + [MinimumRatio] 0.5 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart；MaxKnockup=[BaseKnockup] 0.5 + 客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "和风守护",
        "description": "迦娜召唤出一个空气元素灵体，来被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，来对一个敌人造成伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SowTheWind.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "50/55/60/65/70",
        "range": "4294967295",
        "numericDetail": "技能文本：迦娜召唤出一个空气元素灵体，来被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，来对一个敌人造成伤害和减速效果。。基础参数：冷却=8/7.5/7/6.5/6；消耗=50/55/60/65/70；范围=4294967295。客户端字段：MSPercent=0.06/0.07/0.08/0.09/0.1；BaseDamage=55/85/115/145/175；APRatio=0.5；SlowDuration=2；SlowPercent=20/24/28/32/36；MSAPRatio=0.0002；SlowAPRatio=0.06；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalMS=[MSPercent] 0.06/0.07/0.08/0.09/0.1 + [MSAPRatio] 0.0002 × 法术强度；TotalDamage=[BaseDamage] 55/85/115/145/175 + [APRatio] 0.5 × 法术强度；TotalSlow=([SlowPercent] 20/24/28/32/36 + [SlowAPRatio] 0.06 × 法术强度) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "风暴之眼",
        "description": "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EyeOfTheStorm.png",
        "cooldown": "16/15/14/13/12",
        "cost": "70/75/80/85/90",
        "range": "800",
        "numericDetail": "技能文本：迦娜为一个友军或防御塔提供持续4秒的[BaseShield] 80/120/160/200/240 + [ShieldAPRatio] 0.55 × 法术强度护盾值。在护盾存在时，该友军目标获得[BonusAD] 10/15/20/25/30 + [ADAPRatio] 0.1 × 法术强度攻击力。 迦娜在每次用一个技能使一名敌方英雄的移动速度受损时，会使这个冷却时间缩短20%。。基础参数：冷却=16/15/14/13/12；消耗=70/75/80/85/90；范围=800。客户端字段：ECDRefundforCC=0.2；EmpowerDuration=5；DecayGracePeriod=4；BaseShield=80/120/160/200/240；ShieldAPRatio=0.55；BonusAD=10/15/20/25/30；ADAPRatio=0.1；ShieldDuration=4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShield=[BaseShield] 80/120/160/200/240 + [ShieldAPRatio] 0.55 × 法术强度；TotalAD=[BonusAD] 10/15/20/25/30 + [ADAPRatio] 0.1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/janna/janna.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Janna.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "复苏季风",
        "description": "迦娜召唤魔法风暴围绕自己，将敌人击退。在风暴平息后，当技能仍处在激活状态时，和风将治疗附近的友军。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ReapTheWhirlwind.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "725",
        "numericDetail": "技能文本：迦娜召唤一阵魔法季风，击退附近的敌人们然后在3秒里持续治疗附近的友军共([HealBasePerSecond] 100/150/200 + 0.5 × 法术强度) × [effect3amount] 3生命值。移动或使用技能都会提前结束这阵季风。。基础参数：冷却=130/115/100；消耗=100；范围=725。客户端字段：HealBasePerSecond=100/150/200；effect1amount=0；effect2amount=300/450/600；effect3amount=3；effect4amount=700；effect5amount=875；effect6amount=875；effect7amount=1200；effect8amount=10；effect9amount=0.5；effect10amount=0。客户端公式：HealPerSecond=[HealBasePerSecond] 100/150/200 + 0.5 × 法术强度；TotalHeal=([HealBasePerSecond] 100/150/200 + 0.5 × 法术强度) × [effect3amount] 3",
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
        "description": "薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Vayne_NightHunter.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得移动速度。。客户端字段：MovementSpeed=30；Range=2000",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "闪避突袭",
        "description": "薇恩进行翻滚，并小心地填充她的下一发射击。她的下次攻击造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneTumble.png",
        "cooldown": "6/5/4/3/2",
        "cost": "30",
        "range": "300",
        "numericDetail": "技能文本：薇恩翻滚一小段距离，并且她的下次普通攻击造成额外的[TotalADRatio] 0.75/0.85/0.95/1.05/1.15 × 总攻击力 + [APRatio] 0.5 × 法术强度物理伤害。 这个技能会在造成伤害时触发技能特效。。基础参数：冷却=6/5/4/3/2；消耗=30；范围=300。客户端字段：TotalADRatio=0.75/0.85/0.95/1.05/1.15；Duration=3；APRatio=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ADRatioBonus=[TotalADRatio] 0.75/0.85/0.95/1.05/1.15 × 总攻击力 + [APRatio] 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "圣银弩箭",
        "description": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对同一目标的第3次攻击或技能施放会对其造成额外真实伤害，数值相当于目标最大生命值的一定百分比。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneSilveredBolts.png",
        "cooldown": "0",
        "cost": "0",
        "range": "750",
        "numericDetail": "技能文本：被动：对一名敌人的每第三次连续的攻击或技能造成额外的[MaxHealthRatio] 0.06/0.07/0.08/0.09/0.1最大生命值的真实伤害。。基础参数：冷却=0；消耗=0；范围=750。客户端字段：MaxHealthRatio=0.06/0.07/0.08/0.09/0.1；DamageFloor=50/65/80/95/110；DamageVsMonsters=140/155/170/185/200；DebuffDuration=3.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[MaxHealthRatio] 0.06/0.07/0.08/0.09/0.1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "恶魔审判",
        "description": "薇恩从背部展开一张重弩，并且朝她的目标发射一根巨型弩箭，将目标击退并造成伤害。如果目标与地形产生碰撞，那么目标会被贯穿，对其造成额外伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneCondemn.png",
        "cooldown": "20/18/16/14/12",
        "cost": "90",
        "range": "550",
        "numericDetail": "技能文本：薇恩发射一根弩箭来击退一个目标并造成[Damage] 50/85/120/155/190 + 0.5 × 额外攻击力物理伤害。如果目标与地形产生碰撞，那么会受到([Damage] 50/85/120/155/190 + 0.5 × 额外攻击力) × [StunDamage] 1.5额外物理伤害，并且会被晕眩1.5秒。。基础参数：冷却=20/18/16/14/12；消耗=90；范围=550。客户端字段：Damage=50/85/120/155/190；StunDamage=1.5；StunDuration=1.5；KnockbackDistance=475；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 50/85/120/155/190 + 0.5 × 额外攻击力；EmpoweredDamageTT=([Damage] 50/85/120/155/190 + 0.5 × 额外攻击力) × [StunDamage] 1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/vayne/vayne.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Vayne.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "终极时刻",
        "description": "薇恩准备进行史诗般的对决，她的攻击力得到提高，能在闪避突袭期间进入隐形状态，闪避突袭的冷却时间缩短，并且暗夜猎手（被动）提供更多移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneInquisition.png",
        "cooldown": "100/85/70",
        "cost": "80",
        "range": "1",
        "numericDetail": "技能文本：薇恩获得35/50/65攻击力，持续8/10/12秒，并且如果一个被薇恩所伤害的敌方英雄在3秒内死亡，那么持续时间会延长4秒。此外，在这段持续时间里：暗夜猎手会转而提供90移动速度。闪避突袭的冷却时间缩短30/40/50%，并提供持续1秒的隐形。。基础参数：冷却=100/85/70；消耗=80；范围=1。客户端字段：BonusAttackDamage=35/50/65；BaseDuration=8/10/12；TumbleStealthDuration=1；MovementSpeed=90；DurationToAdd=4；DamagedMarkerDuration=3；TumbleCDReduction=30/40/50；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "每次施放技能会强化塔里克的下2次普攻，以造成额外魔法伤害，使他的基础技能的冷却时间减少，并且可以快速地连续攻击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Taric_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：每次施放技能会强化塔里克的下2次普攻，以造成额外魔法伤害，使他的基础技能的冷却时间减少，并且可以快速地连续攻击。。客户端字段：Duration=5；BaseDamageMultiplierForModesBalance=1；ArmorDamageValue=0.15。客户端公式：TotalDamage=客户端公式 ProductOfSubPartsCalculationPart + [ArmorDamageValue] 0.15 × 护甲；CDR=(1 + (1 + 客户端公式 ProductOfSubPartsCalculationPart))",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "星光之触",
        "description": "基于已储存的充能来治疗附近的友方英雄。【正气凌人】的强化普攻会为这个技能提供一层充能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricQ.png",
        "cooldown": "3",
        "cost": "60",
        "range": "325",
        "numericDetail": "技能文本：被动：每[Recharge] 15秒和打出一次正气凌人攻击时获得一层效果(最多1/2/3/4/5层)。 主动：消耗所有层数来为附近的友方英雄们回复[HealingPerStackBase] 25 + [HealingAPRatio] 0.15 × 法术强度 + [HealingHPRatio] 0.01 × 最大生命值x层数的生命值(在1/2/3/4/5层时回复([HealingPerStackBase] 25 + [HealingAPRatio] 0.15 × 法术强度 + [HealingHPRatio] 0.01 × 最大生命值) × [effect6amount] 1/2/3/4/5生命值)。。基础参数：冷却=3；消耗=60；范围=325。客户端字段：Recharge=15；HealingPerStackBase=25；HealingAPRatio=0.15；HealingHPRatio=0.01；effect1amount=25；effect2amount=1；effect3amount=0.15/0.3/0.45/0.6/0.75；effect4amount=0.75/1.5/2.25/3/3.75；effect5amount=25/50/75/100/125；effect6amount=1/2/3/4/5；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：StackCooldown=[Recharge] 15；HealingPerStack=[HealingPerStackBase] 25 + [HealingAPRatio] 0.15 × 法术强度 + [HealingHPRatio] 0.01 × 最大生命值；MaxStackHealing=([HealingPerStackBase] 25 + [HealingAPRatio] 0.15 × 法术强度 + [HealingHPRatio] 0.01 × 最大生命值) × [effect6amount] 1/2/3/4/5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "坚毅壁垒",
        "description": "被动提升塔里克和带有【坚毅壁垒】效果的友方英雄的护甲。 主动施放会为一名友方英雄提供护盾和【坚毅壁垒】效果，只要该英雄呆在塔里克身边，【坚毅壁垒】效果会一直持续。塔里克的技能也会从带有【坚毅壁垒】效果的友方英雄身上施放。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricW.png",
        "cooldown": "15",
        "cost": "60",
        "range": "800",
        "numericDetail": "技能文本：被动：塔里克获得[ArmorBonusPercentage] 0.06/0.07/0.08/0.09/0.1 × 护甲护甲并在他和被此技能绑定过的友方英雄之间形成一条灵链。只要他们在彼此附近，该友方英雄就会获得[ArmorBonusPercentage] 0.06/0.07/0.08/0.09/0.1 × 护甲护甲并且塔里克的各个技能也会从他自己和该友方英雄处施放。 主动：塔里克与一名友方英雄进行绑定，提供持续2.5秒的7/8/9/10/11%最大生命值的护盾值。。基础参数：冷却=15；消耗=60；范围=800。客户端字段：ArmorBonusPercentage=0.06/0.07/0.08/0.09/0.1；effect1amount=0；effect2amount=7/8/9/10/11；effect3amount=2.5；effect4amount=1000；effect5amount=1300；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BonusArmor=[ArmorBonusPercentage] 0.06/0.07/0.08/0.09/0.1 × 护甲",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "炫光",
        "description": "塔里克准备施放一束星光，在短暂的延迟后，会对敌人造成魔法伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricE.png",
        "cooldown": "16/15/14/13/12",
        "cost": "40",
        "range": "610",
        "numericDetail": "技能文本：塔里克投射一束星光，在1秒后爆裂，以造成[effect1amount] 90/130/170/210/250 + 0.5 × 法术强度 + 0.5 × 额外护甲魔法伤害并使敌人们晕眩1.5秒。。基础参数：冷却=16/15/14/13/12；消耗=40；范围=610。客户端字段：effect1amount=90/130/170/210/250；effect2amount=1.5；effect3amount=1；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[effect1amount] 90/130/170/210/250 + 0.5 × 法术强度 + 0.5 × 额外护甲",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/taric/taric.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Taric.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "宇宙之辉",
        "description": "在短暂的延迟后，放射一道宇宙能量到附近的友方英雄身上，让他们免疫伤害一段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricR.png",
        "cooldown": "180/150/120",
        "cost": "100",
        "range": "400",
        "numericDetail": "技能文本：塔里克召唤来自天堂的保护。在2.5秒后，附近的所有友方英雄都会免疫伤害2.5秒。。基础参数：冷却=180/150/120；消耗=100；范围=400。客户端字段：InitialDelay=2.5；InvulnDuration=2.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "在受到致命伤害后，艾尼维亚将化身为凤凰蛋，然后满血复活。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Anivia_P.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在受到致命伤害后，艾尼维亚将化身为凤凰蛋，然后满血复活。。客户端字段：Cooldown=240。客户端公式：BonusResists=-40（按英雄等级变化）；BonusResistsTooltip=(-40（按英雄等级变化）) × -1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "寒冰闪耀",
        "description": "艾尼维亚挥动翅膀聚集空气，制造一枚冰晶向目标区域施放，冰冻并伤害路径上的所有敌人。当冰晶爆裂时，它会晕眩并伤害一定范围内的所有敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FlashFrost.png",
        "cooldown": "11/10/9/8/7",
        "cost": "80/85/90/95/100",
        "range": "1075",
        "numericDetail": "技能文本：艾尼维亚挥动翅膀聚集空气，制造一枚冰晶向目标区域施放，冰冻并伤害路径上的所有敌人。当冰晶爆裂时，它会晕眩并伤害一定范围内的所有敌人。。基础参数：冷却=11/10/9/8/7；消耗=80/85/90/95/100；范围=1075。客户端字段：PassthroughBaseDamage=50/70/90/110/130；ExplosionBaseDamage=60/95/130/165/200；StunDuration=1.1/1.2/1.3/1.4/1.5；SlowDuration=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalPassthroughDamage=[PassthroughBaseDamage] 50/70/90/110/130 + 0.25 × 法术强度；TotalExplosionDamage=[ExplosionBaseDamage] 60/95/130/165/200 + 0.45 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "寒冰屏障",
        "description": "艾尼维亚利用空气中的湿气，召唤出一道不可穿越的冰之墙来阻挡所有移动。该墙持续很短一段时间后就会融化。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Crystallize.png",
        "cooldown": "17",
        "cost": "70",
        "range": "1000",
        "numericDetail": "技能文本：艾尼维亚召唤出一道宽400/500/600/700/800码的无法通过的冰墙。冰墙会在融化前持续5秒。。基础参数：冷却=17；消耗=70；范围=1000。客户端字段：WallDuration=5；WallWidth=400/500/600/700/800；WallChunks=4/5/6/7/8；ChampPushDistance=120；NonChampPushDistance=250；effect1amount=5；effect2amount=400/500/600/700/800；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "霜寒刺骨",
        "description": "艾尼维亚扇动双翅，朝她的目标喷射出一股刺骨的强风，造成伤害。如果目标近期已被【Q寒冰闪耀】所命中或被一个完全形成的【R冰川风暴】所伤害，那么将会受到该技能双倍的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Frostbite.png",
        "cooldown": "4",
        "cost": "50",
        "range": "650",
        "numericDetail": "技能文本：艾尼维亚用一阵刺骨的寒风冲击一名敌人，造成[BaseDamage] 55/80/105/130/155 + 0.55 × 法术强度魔法伤害。如果目标身上带有冰冻效果，则艾尼维亚会转而造成([BaseDamage] 55/80/105/130/155 + 0.55 × 法术强度) × 2魔法伤害。。基础参数：冷却=4；消耗=50；范围=650。客户端字段：BaseDamage=55/80/105/130/155；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 55/80/105/130/155 + 0.55 × 法术强度；EmpoweredDamage=([BaseDamage] 55/80/105/130/155 + 0.55 × 法术强度) × 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/anivia/anivia.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Anivia.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "冰川风暴",
        "description": "艾尼维亚召唤出一朵夹杂着冰块和冰雹的雨云，对敌人造成伤害，并使其减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GlacialStorm.png",
        "cooldown": "4/3/2",
        "cost": "60",
        "range": "750",
        "numericDetail": "技能文本：激活：艾尼维亚在目标区域召唤出一阵夹杂着冰与雹的强雨，来使敌人减速20/30/40%并每秒造成[DamagePerSecond] 30/45/60 + 0.125 × 法术强度魔法伤害。风暴会在1.5秒里持续提升规模。 当风暴完全形成后，它会施加冰冻效果，使敌人减速30/45/60%，并且每秒造成([DamagePerSecond] 30/45/60 + 0.125 × 法术强度) × 3魔法伤害。。基础参数：冷却=4/3/2；消耗=60；范围=750。客户端字段：DamagePerSecond=30/45/60；BonusMultiplier=300；ManaCostPerSecond=35/45/55；TickRate=0.5；SlowAmount=20/30/40；ChillDuration=1；GrowthTime=1.5；AdditionalSlowPercentAtMax=0.5；SlowDurationAtMaxMultiplier=1.5；LeashWarning=1000；LeashBreak=1000；SlowPercentEmpoweredTT=30/45/60；MinCooldown=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamagePerSecond=[DamagePerSecond] 30/45/60 + 0.125 × 法术强度；EnhancedSlow=([SlowAmount] 20/30/40) × (([AdditionalSlowPercentAtMax] 0.5 + 1))；EmpoweredDamagePerSecondTooltipOnly=([DamagePerSecond] 30/45/60 + 0.125 × 法术强度) × 3",
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
        "description": "每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会显著减少。 如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人以造成魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Katarina_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会显著减少。 如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人以造成魔法伤害。。客户端字段：ResetWindow=3；ResetCDR=15；DaggerRadius=340；DaggerDuration=4；BonusADRatio=0.6。客户端公式：TotalDamage=客户端公式 ByCharLevelFormulaCalculationPart + [BonusADRatio] 0.6 × 额外攻击力 + 0.7（按英雄等级变化） × 法术强度；{e1ba6b0f}=0.78（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ByCharLevelFormulaCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "弹射之刃",
        "description": "卡特琳娜朝敌人扔出一把匕首，匕首会弹射到附近敌人身上，然后落到地面上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaQ.png",
        "cooldown": "11/10/9/8/7",
        "cost": "0",
        "range": "625",
        "numericDetail": "技能文本：卡特琳娜投掷一把匕首，造成[BaseDamage] 80/115/150/185/220 + [QAPRatio] 0.4 × 法术强度魔法伤害给目标及附近的2个敌人。匕首随后会弹落到主要目标身后的地面上。。基础参数：冷却=11/10/9/8/7；消耗=0；范围=625。客户端字段：BaseDamage=80/115/150/185/220；BounceOffset=350；BounceRadius=450；MaxBounces=2；QAPRatio=0.4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=2；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/115/150/185/220 + [QAPRatio] 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "伺机待发",
        "description": "卡特琳娜获得爆发性的移动速度加成，同时投掷一把匕首到她正上方的空中。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "0",
        "range": "25000",
        "numericDetail": "技能文本：卡特琳娜扔出一把匕首至空中并获得在1.25秒里持续衰减的50/60/70/80/90%移动速度。。基础参数：冷却=15/14/13/12/11；消耗=0；范围=25000。客户端字段：effect1amount=0；effect2amount=1.25；effect3amount=0；effect4amount=50/60/70/80/90；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "瞬步",
        "description": "卡特琳娜立刻闪烁到目标处，如果目标是敌人，则她会对目标造成伤害，否则会对距她最近的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaEWrapper.png",
        "cooldown": "12/11/10/9/8",
        "cost": "0",
        "range": "725",
        "numericDetail": "技能文本：卡特琳娜立刻闪烁到目标处，如果目标是敌人，则她会对目标造成伤害，否则会对距她最近的敌人造成伤害。。基础参数：冷却=12/11/10/9/8；消耗=0；范围=725。客户端字段：BaseDamage=20/30/40/50/60；DataCooldown=12/11/10/9/8；EADRatio=0.4；EAPRatio=0.25；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 20/30/40/50/60 + [EAPRatio] 0.25 × 法术强度 + [EADRatio] 0.4 × 攻击力；DaggerCooldownReduction=(0.78（按英雄等级变化）) × 客户端公式 ProductOfSubPartsCalculationPart；{016cd4b3}=0.78（按英雄等级变化）；TooltipDaggerReduction=0.78（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "R",
        "name": "死亡莲华",
        "description": "卡特琳娜化身为一道剑刃飓风，以无与伦比的速度对周围最多三个敌方英雄造成巨量魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaR.png",
        "cooldown": "75/60/45",
        "cost": "0",
        "range": "550",
        "numericDetail": "技能文本：卡特琳娜化身为一道剑刃飓风，以无与伦比的速度对周围最多三个敌方英雄造成巨量魔法伤害。。基础参数：冷却=75/60/45；消耗=0；范围=550。客户端字段：DamagePerTick=25/37.5/50；TicksPerSecond=6；Duration=2.5；GrievousDuration=3；GrievousAmount=0.4；OnHitRatio=0.25/0.3/0.35；RAPRatio=0.19；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=[DamagePerTick] 25/37.5/50 + [RAPRatio] 0.19 × 法术强度；TotalDamageCalc=([DamagePerTick] 25/37.5/50 + [RAPRatio] 0.19 × 法术强度) × 客户端公式 ProductOfSubPartsCalculationPart；ADDamageCalc=(客户端公式 ProductOfSubPartsCalculationPart) × 额外攻击力；TotalADDamageCalc=((客户端公式 ProductOfSubPartsCalculationPart) × 额外攻击力) × 客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/katarina/katarina.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Katarina.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
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
        "description": "在友方防御塔和由黑默丁格部署的炮台附近时，获得移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Heimerdinger_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在友方防御塔和由黑默丁格部署的炮台附近时，获得移动速度加成。。客户端字段：MovementSpeed=0.2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "H-28 G 进化炮台",
        "description": "黑默丁格放置一座快速开火的加农炮台，它还配有一个次级穿透光束发射器（炮台对防御塔造成一半伤害）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerQ.png",
        "cooldown": "1",
        "cost": "20",
        "range": "350",
        "numericDetail": "技能文本：黑默丁格构建一座炮台来攻击附近的敌人们。黑默丁格同一时间可以拥有3座已激活的炮台。炮台会缓慢地积攒能量。在满层能量时，它们会发射一次更强的攻击。 如果黑默丁格过于远离，那么炮台将在8秒后解除激活状态。 这个技能拥有3层充能。。基础参数：冷却=1；消耗=20；范围=350。客户端字段：MaxTurrets=3；MaxKits=3；KitCost=1；DistanceToHeimer=900；BaseDamage=7/11/15/19/23；BaseDamageBeam=40/60/80/100/120；TurretAPRatio=0.35；BeamAPRatio=0.55；TurretHealthMod=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=900；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TurretHealth=(130–640（1–18级） + 0.05（初始每级 +0.005，按客户端断点变化） × 法术强度) × [TurretHealthMod] 1；{f0517331}=客户端公式 ByCharLevelBreakpointsCalculationPart；{8109ae7b}=客户端公式 ByCharLevelBreakpointsCalculationPart；KitCooldown=(20) × 客户端公式 CooldownMultiplierCalculationPart；BeamCooldown=(90) × 客户端公式 CooldownMultiplierCalculationPart；Damage=[BaseDamage] 7/11/15/19/23 + [TurretAPRatio] 0.35 × 法术强度；DamageBeam=[BaseDamageBeam] 40/60/80/100/120 + [BeamAPRatio] 0.55 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ByCharLevelBreakpointsCalculationPart",
          "公式部件 CooldownMultiplierCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "海克斯科技微型导弹",
        "description": "黑默丁格以鼠标悬停处为焦点，发射数枚长程导弹。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerW.png",
        "cooldown": "11/10/9/8/7",
        "cost": "50/60/70/80/90",
        "range": "1325",
        "numericDetail": "技能文本：黑默丁格释放一道5颗导弹组成的弹幕，对第一个命中的敌人造成[BaseDamage] 50/75/100/125/150 + [InitialDamageAPRatio] 0.55 × 法术强度魔法伤害。额外的导弹命中会造成较少伤害。 最大伤害值：[TotalBaseDamage] 90/135/180/225/270 + 1.03 × 法术强度魔法伤害。 每有一颗导弹命中英雄，附近的炮台就会获得20%能量。。基础参数：冷却=11/10/9/8/7；消耗=50/60/70/80/90；范围=1325。客户端字段：Rockets=5；BaseDamage=50/75/100/125/150；ExtraHitBaseDamage=10/15/20/25/30；TotalBaseDamage=90/135/180/225/270；InitialDamageAPRatio=0.55；effect1amount=60/90/120/150/180；effect2amount=12/18/24/30/36；effect3amount=25；effect4amount=20；effect5amount=30；effect6amount=108/162/216/270/324；effect7amount=5；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 50/75/100/125/150 + [InitialDamageAPRatio] 0.55 × 法术强度；ExtraHitDamage=[ExtraHitBaseDamage] 10/15/20/25/30 + 0.12 × 法术强度；TotalDamage=[TotalBaseDamage] 90/135/180/225/270 + 1.03 × 法术强度；ExtraHitDamageMinions=([ExtraHitBaseDamage] 10/15/20/25/30 + 0.12 × 法术强度) × 3",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "CH-2电子风暴手雷",
        "description": "黑默丁格朝一个位置掷出一颗手雷，来对敌方单位造成伤害，并对被它直接命中的敌人造成晕眩效果，且对附近单位造成减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerE.png",
        "cooldown": "11",
        "cost": "85",
        "range": "970",
        "numericDetail": "技能文本：黑默丁格扔出一颗手雷，在一个区域内造成[BaseDamage] 60/100/140/180/220 + 0.6 × 法术强度魔法伤害和持续2秒的35%减速。区域中心的敌人们还会被晕眩1.5秒。 命中一名英雄将使附近的炮台得到完全充能。。基础参数：冷却=11；消耗=85；范围=970。客户端字段：BaseDamage=60/100/140/180/220；SlowDuration=2；SlowPercent=0.35；StunDuration=1.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 60/100/140/180/220 + 0.6 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/heimerdinger/heimerdinger.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Heimerdinger.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "升级！！！",
        "description": "黑默丁格通过发明进行一次技术升级，使他的下一个技能拥有强化效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerR.png",
        "cooldown": "100/85/70",
        "cost": "100",
        "range": "1",
        "numericDetail": "技能文本：黑默丁格使他的下一个非终极技能变为升级版。 H-28Q尖端炮台：放置一个持续8秒的升级版炮台且不算入黑默丁格的最大炮台上限，每次射击造成[QUltBaseDamage] 80/100/120 + 0.35 × 法术强度魔法伤害且每次满能量射击造成[QUltBaseDamageBeam] 100/140/180 + 0.7 × 法术强度魔法伤害。它的攻击会在一个范围内造成伤害，持续2秒的25%减速并且免疫控制效果。 海克斯导弹集群：发射4波导弹，每波造成[WUltBaseDamage] 135/180/225 + 0.45 × 法术强度魔法伤害。被额外的导弹命中的英雄和野怪会受到较少伤害，小兵会受到提升过的伤害。最大伤害值：[WUltTotalBaseDamage] 503/697.5/892 + 1.83 × 法术强度魔法伤害。 CH-3X闪电手雷：扔出一颗弹跳手雷，该手雷会放电3次，造成[EUltBaseDamage] 100/200/300 + 0.6 × 法术强度魔法伤害。晕眩和减速区域会更大。 再次施放：取消这个技能。。基础参数：冷却=100/85/70；消耗=100；范围=1。客户端字段：QUltBaseDamage=80/100/120；QUltBaseDamageBeam=100/140/180；WUltBaseDamage=135/180/225；WUltExtraHitBaseDamage=32/45/58；WUltTotalBaseDamage=503/697.5/892；EUltBaseDamage=100/200/300；effect1amount=100/140/180；effect2amount=80；effect3amount=1.5；effect4amount=0.12；effect5amount=500/690/865；effect6amount=0.45；effect7amount=80/100/120；effect8amount=135/180/225；effect9amount=28/39/49；effect10amount=150/250/350。客户端公式：QUltTurretHealth=725（按英雄等级变化） + 0.5 × 法术强度；QUltDamage=[QUltBaseDamage] 80/100/120 + 0.35 × 法术强度；QUltDamageBeam=[QUltBaseDamageBeam] 100/140/180 + 0.7 × 法术强度；WUltDamage=[WUltBaseDamage] 135/180/225 + 0.45 × 法术强度；{a8af07ef}=[WUltExtraHitBaseDamage] 32/45/58 + 0.12 × 法术强度；{f058914b}=([WUltExtraHitBaseDamage] 32/45/58 + 0.12 × 法术强度) × 0.5；WUltTotalDamage=[WUltTotalBaseDamage] 503/697.5/892 + 1.83 × 法术强度；EUltDamage=[EUltBaseDamage] 100/200/300 + 0.6 × 法术强度；{0df0e2e2}=([WUltTotalBaseDamage] 503/697.5/892 + 1.83 × 法术强度) × 20；RQTurretResists=30（按英雄等级变化）",
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
        "description": "嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/JarvanIVP.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。。客户端字段：MaximumCadenceDamage=400；MinimumCadenceDamage=20；TooltipCurrentHealthDamage=0.08。客户端公式：TooltipCooldown=6（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "巨龙撞击",
        "description": "嘉文四世的长矛穿透敌人，对沿途的敌人造成物理伤害和护甲击碎效果。如果嘉文四世该技能指向德邦军旗，那么他将会被导向军旗，并击飞沿途所有敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVDragonStrike.png",
        "cooldown": "10/9/8/7/6",
        "cost": "45/50/55/60/65",
        "range": "770",
        "numericDetail": "技能文本：嘉文延伸他的长枪，造成[BaseDamage] 90/130/170/210/250 + 1.45 × 额外攻击力物理伤害并移除10/14/18/22/26%护甲，持续3秒。 如果长枪与德邦军旗连接，那么嘉文会将自己拉向它，将沿途的敌人击飞0.75秒。。基础参数：冷却=10/9/8/7/6；消耗=45/50/55/60/65；范围=770。客户端字段：BaseDamage=90/130/170/210/250；BaseARShred=0.1/0.14/0.18/0.22/0.26；effect1amount=80/120/160/200/240；effect2amount=0；effect3amount=3；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 90/130/170/210/250 + 1.45 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "黄金圣盾",
        "description": "嘉文四世召唤古德玛西亚国王保护自己，护盾吸收伤害并减速附近敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVGoldenAegis.png",
        "cooldown": "9",
        "cost": "30",
        "range": "625",
        "numericDetail": "技能文本：嘉文召唤一个圣盾，对附近的敌人造成持续2秒的15/20/25/30/35%减速并为他提供[effect1amount] 60/80/100/120/140 + 0.7 × 额外攻击力护盾值，每命中一个敌方英雄会提升0.013 × 最大生命值护盾值。。基础参数：冷却=9；消耗=30；范围=625。客户端字段：BaseSlowAmount=0.15/0.2/0.25/0.3/0.35；effect1amount=60/80/100/120/140；effect2amount=0；effect3amount=10/20/30/40/50；effect4amount=4；effect5amount=2；effect6amount=0.01；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShield=[effect1amount] 60/80/100/120/140 + 0.7 × 额外攻击力；BonusShield=0.013 × 最大生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "德邦军旗",
        "description": "嘉文四世携带着德玛西亚的骄傲，能被动地给予他额外的攻击速度。激活德邦军旗会使嘉文四世放置一面德玛西亚军旗，在军旗的着陆点造成魔法伤害，并强化军旗附近的队友们的攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVDemacianStandard.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "55",
        "range": "860",
        "numericDetail": "技能文本：被动：嘉文获得20/22.5/25/27.5/30%攻击速度。 主动：嘉文将一面军旗投掷到地上，造成[effect2amount] 80/120/160/200/240 + [APRatio] 0.8 × 法术强度魔法伤害并为附近的友军们提供持续8秒的20/22.5/25/27.5/30%攻击速度。。基础参数：冷却=12/11.5/11/10.5/10；消耗=55；范围=860。客户端字段：EDashSpeed=1400；EBehindJarvanCheck=400；EKnockUpAoE=180；PermanentAttackSpeed=0.2/0.225/0.25/0.275/0.3；APRatio=0.8；BaseAuraAS=0.2/0.225/0.25/0.275/0.3；effect1amount=10/13/16/19/22；effect2amount=80/120/160/200/240；effect3amount=0；effect4amount=8；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[effect2amount] 80/120/160/200/240 + [APRatio] 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/jarvaniv/jarvaniv.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/JarvanIV.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "天崩地裂",
        "description": "嘉文四世勇猛地跃向目标敌方英雄，对其造成物理伤害，并在敌人周围形成环形障碍，持续数秒。在嘉文四世着陆时，目标附近的敌人也会受到伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVCataclysm.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "650",
        "numericDetail": "技能文本：嘉文勇猛地跃向一名敌方英雄，对目标及周围的敌人造成[BaseDamage] 200/325/450 + 1.8 × 额外攻击力物理伤害，并在目标周围生成一个由不可通过地形构成的竞技场，持续3.5秒。 嘉文可以再次施放来使该地形倒塌。。基础参数：冷却=120/105/90；消耗=100；范围=650。客户端字段：BaseDamage=200/325/450；WallDuration=3.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=[BaseDamage] 200/325/450 + 1.8 × 额外攻击力",
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
        "description": "如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Garen_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。。客户端字段：DamageTimer=8。客户端公式：RegenCalc=(1.5（初始每级 +0.2，按客户端断点变化）) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "致命打击",
        "description": "盖伦的移动速度获得爆发性提升，同时移除身上的所有减速效果。他的下次攻击将打击敌人的要害部位，造成额外伤害并将目标沉默。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenQ.png",
        "cooldown": "8",
        "cost": "0",
        "range": "300",
        "numericDetail": "技能文本：盖伦移除身上的所有减速效果并获得35%移动速度，持续1.4/1.95/2.5/3.05/3.6秒。 他的下次攻击会使目标沉默1.5秒并造成[BaseDamage] 30/60/90/120/150 + [tADRatio] 1.5 × 攻击力物理伤害。。基础参数：冷却=8；消耗=0；范围=300。客户端字段：BaseDamage=30/60/90/120/150；SilenceDuration=1.5；MovementSpeedDuration=1.4/1.95/2.5/3.05/3.6；MovementSpeedAmount=0.35；AttackWindow=4.5；tADRatio=1.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 30/60/90/120/150 + [tADRatio] 1.5 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "勇气",
        "description": "盖伦被动地通过击杀敌人来提升护甲和魔法抗性。他也可以激活这个技能来暂时获得一层护盾和韧性，并在接下来的较长持续时间里获得较弱的伤害减免效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenW.png",
        "cooldown": "22/19.5/17/14.5/12",
        "cost": "0",
        "range": "0",
        "numericDetail": "技能文本：盖伦被动地通过击杀敌人来提升护甲和魔法抗性。他也可以激活这个技能来暂时获得一层护盾和韧性，并在接下来的较长持续时间里获得较弱的伤害减免效果。。基础参数：冷却=22/19.5/17/14.5/12；消耗=0；范围=0。客户端字段：BuffCounterPerKill=1；ResistGainOnKill=0.2；ResistGainOnKillTooltip=0.2；ResistMax=30；DRPercent=0.25/0.29/0.33/0.37/0.41；DRDuration=4；UpfrontTenacity=0.6；UpfrontDuration=0.75；LargeMonsterStacks=1；EpicMonsterStacks=1；ShieldHealthRatio=0.18；BaseShield=65/85/105/125/145；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShield=[BaseShield] 65/85/105/125/145 + [ShieldHealthRatio] 0.18 × 额外最大生命值；ResistsForTooltip=[ResistGainOnKill] 0.2 × {9e10ce18}层数",
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
        "numericDetail": "技能文本：盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。。基础参数：冷却=9/8.25/7.5/6.75/6；消耗=0；范围=325。客户端字段：NumTicks=7；ASPerTick=0.25；BaseDamagePerTick=4/7/10/13/16；ADRatioPerTick=0.4/0.43/0.46/0.49/0.52；ShredDuration=6；StacksToShred=6；Duration=3；ShredAmount=0.25；NearestEnemyBonus=0.25；CritMod=0.3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamagePerTick] 4/7/10/13/16 + [ADRatioPerTick] 0.4/0.43/0.46/0.49/0.52 × 攻击力；CriticalDamage=([BaseDamagePerTick] 4/7/10/13/16 + [ADRatioPerTick] 0.4/0.43/0.46/0.49/0.52 × 攻击力) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)；NumberOfStrikes=[NumTicks] 7",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/garen/garen.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Garen.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "R",
        "name": "德玛西亚正义",
        "description": "盖伦召唤德玛西亚之力，试图处决一名敌方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenR.png",
        "cooldown": "120/100/80",
        "cost": "0",
        "range": "400",
        "numericDetail": "技能文本：盖伦召唤德玛西亚之力来击杀他的敌人，造成125/200/275外加25/30/35%已损失生命值的真实伤害。。基础参数：冷却=120/100/80；消耗=0；范围=400。客户端字段：BaseDamage=125/200/275；ExecuteDamage=0.25/0.3/0.35；RevealDuration=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "莫甘娜从她的敌人身上吸取灵魂，在对英雄、大型小兵、中型野怪和大型野怪造成技能伤害时获得治疗效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/FallenAngel_Empathize.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：莫甘娜从她的敌人身上吸取灵魂，在对英雄、大型小兵、中型野怪和大型野怪造成技能伤害时获得治疗效果。。客户端字段：HealPercent=18",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "暗之禁锢",
        "description": "莫甘娜用黑暗魔法将一名敌人禁锢在原地，迫使其感受自己造成的痛苦并对其造成魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaQ.png",
        "cooldown": "10",
        "cost": "50/55/60/65/70",
        "range": "1250",
        "numericDetail": "技能文本：莫甘娜掷出一团星火来禁锢命中的第一个敌人2/2.25/2.5/2.75/3秒，并造成[Damage] 80/135/190/245/300 + 0.9 × 法术强度魔法伤害。。基础参数：冷却=10；消耗=50/55/60/65/70；范围=1250。客户端字段：Damage=80/135/190/245/300；RootDuration=2/2.25/2.5/2.75/3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 80/135/190/245/300 + 0.9 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "折磨之影",
        "description": "莫甘娜在一个区域施放一团诅咒之影，对胆敢站在她黑色环形之中的敌人造成伤害。敌人会持续受到魔法伤害，并且生命值越低受到伤害越高。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaW.png",
        "cooldown": "12",
        "cost": "70/80/90/100/110",
        "range": "900",
        "numericDetail": "技能文本：莫甘娜点燃一个区域5秒，每秒对区域内的敌人造成[BaseDamage] 18/31/44/57/70 + [BaseAPRatio] 0.2 × 法术强度魔法伤害，基于目标的已损失生命值，伤害可最多提升([BaseDamage] 18/31/44/57/70 + [BaseAPRatio] 0.2 × 法术强度) × (1 + [MissingHealthAmpPercent] 1)。 每当莫甘娜被灵魂吸取治疗时，这个技能的冷却时间就会减少5%。。基础参数：冷却=12；消耗=70/80/90/100/110；范围=900。客户端字段：BaseDamage=18/31/44/57/70；BaseAPRatio=0.2；TickRate=0.5；MissingHealthAmpPercent=1；WDuration=5；CDRefundPercent=0.05；MonsterMod=170；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalMinDamage=[BaseDamage] 18/31/44/57/70 + [BaseAPRatio] 0.2 × 法术强度；TotalMaxDamage=([BaseDamage] 18/31/44/57/70 + [BaseAPRatio] 0.2 × 法术强度) × (1 + [MissingHealthAmpPercent] 1)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "黑暗之盾",
        "description": "莫甘娜为一名友方英雄涂上一层保护性的星火屏障，在被打破之前吸收魔法伤害和限制效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaE.png",
        "cooldown": "26/23.5/21/18.5/16",
        "cost": "80",
        "range": "800",
        "numericDetail": "技能文本：莫甘娜为一名友方英雄提供[ShieldStrength] 100/155/210/265/320 + 0.7 × 法术强度魔法护盾，持续5秒。护盾会阻挡限制和定身效果，直至被打破为止。。基础参数：冷却=26/23.5/21/18.5/16；消耗=80；范围=800。客户端字段：ShieldStrength=100/155/210/265/320；ShieldDuration=5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShieldStrength=[ShieldStrength] 100/155/210/265/320 + 0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/morgana/morgana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Morgana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "灵魂镣铐",
        "description": "莫甘娜全力释放她的星界能量，与此同时，她的羽翼会解除束缚并且会悬浮在地面上。她将黑暗痛苦组成的锁链抽击到附近的敌方英雄身上，获得移动速度。锁链会减速并造成初段伤害，并在一段延迟后，晕眩那些未能挣脱的敌方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaR.png",
        "cooldown": "120/110/100",
        "cost": "100",
        "range": "625",
        "numericDetail": "技能文本：莫甘娜将她自己与附近的敌方英雄用锁链铐在一起，造成[Damage] 200/275/350 + 0.8 × 法术强度魔法伤害和20%减速效果。在3秒后，仍未挣断锁链的敌人会受到[Damage] 200/275/350 + 0.8 × 法术强度魔法伤害并被晕眩1.5/1.75/2秒。 在施放这个技能时，莫甘娜会获得20/40/60%移动速度。。基础参数：冷却=120/110/100；消耗=100；范围=625。客户端字段：Damage=200/275/350；ChainDuration=3；StunDuration=1.5/1.75/2；SlowPercent=20；HastePercent=20/40/60；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 200/275/350 + 0.8 × 法术强度",
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
        "description": "在目标的背后时，萨科的普攻和【E双面毒刃】会造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Jester_CarefulStrikes.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在目标的背后时，萨科的普攻和【E双面毒刃】会造成额外伤害。。客户端字段：PerUnitCD=3；MonsterCritMod=2；APRatio=0.4；CloneMult=0.75；ShivSlowAmount=-0.4；ShredDuration=4；ShivExecuteDamagePercent=1.5；AttackBonusADRatio=0.2。客户端公式：MonsterDamageTooltip=([MonsterCritMod] 2 + 1 × 客户端未命名属性（枚举 9）) × 攻击力 + [APRatio] 0.4 × 法术强度；BasicAttackDamage=20–35（1–18级） + [AttackBonusADRatio] 0.2 × 额外攻击力；ShivDamage=15–50（1–18级） + 0.1 × 法术强度；ShivDamageExecute=(15–50（1–18级） + 0.1 × 法术强度) × [ShivExecuteDamagePercent] 1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 9"
        ]
      },
      {
        "key": "Q",
        "name": "欺诈魔术",
        "description": "萨科进入隐形状态并传送到目标位置。 他在隐形状态下的第一次普攻将获得增强，造成额外伤害并在目标背后攻击时必定会暴击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Deceive.png",
        "cooldown": "13/12.5/12/11.5/11",
        "cost": "40",
        "range": "400",
        "numericDetail": "技能文本：萨科进入隐形状态并传送到目标位置。 他在隐形状态下的第一次普攻将获得增强，造成额外伤害并在目标背后攻击时必定会暴击。。基础参数：冷却=13/12.5/12/11.5/11；消耗=40；范围=400。客户端字段：BaseDamage=25/35/45/55/65；StealthDuration=2.5/2.75/3/3.25/3.5；CDRefund=2.5；ExtraAATime=0.25；PseudoCastTime=0.125；BonusADRatio=0.6；NonCritBackstabMod=0.6；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 25/35/45/55/65 + [BonusADRatio] 0.6 × 额外攻击力；QCritDamageMod=(1 + 客户端公式 ProductOfSubPartsCalculationPart)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "惊吓魔盒",
        "description": "萨科丢出一个隐形且会动的惊吓魔盒。在触发时，盒子会恐惧附近的敌人，然后对其进行攻击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JackInTheBox.png",
        "cooldown": "15",
        "cost": "70/65/60/55/50",
        "range": "500",
        "numericDetail": "技能文本：萨科生成一个会在2秒后潜行的陷阱，它持续[BoxDuration] 40 + 0.1 × 法术强度秒。它会在有敌人靠近或显形时触发，恐惧附近的敌方英雄们0.5/0.75/1/1.25/1.5秒，或小兵和野怪2秒。 一旦激活，陷阱就会在5秒里持续攻击所有附近的敌人们，造成[AoEBaseDamage] 10/15/20/25/30 + [WAoEAPRatio] 0.12 × 法术强度魔法伤害，如果只攻击一个敌人则为[STBaseDamage] 25/40/55/70/85 + [WSingleTargetAPRatio] 0.18 × 法术强度伤害。 惊吓魔盒的攻击对野怪造成额外的20/35/50/65/80伤害。。基础参数：冷却=15；消耗=70/65/60/55/50；范围=500。客户端字段：AoEBaseDamage=10/15/20/25/30；STBaseDamage=25/40/55/70/85；MinionFearDuration=2；MonsterBonusDamage=20/35/50/65/80；MaxTraps=25000；FearDuration=0.5/0.75/1/1.25/1.5；WAoEAPRatio=0.12；WSingleTargetAPRatio=0.18；BoxDuration=40；ArmTime=2；effect1amount=35/50/65/80/95；effect2amount=200/300/400/500/600；effect3amount=0.5/0.75/1/1.25/1.5；effect4amount=40；effect5amount=2；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：AoEDamage=[AoEBaseDamage] 10/15/20/25/30 + [WAoEAPRatio] 0.12 × 法术强度；STDamage=[STBaseDamage] 25/40/55/70/85 + [WSingleTargetAPRatio] 0.18 × 法术强度；TrapDuration=[BoxDuration] 40 + 0.1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "双面毒刃",
        "description": "萨科的毒刃在命中时会被动地使目标中毒，减少目标的移动速度。他可以将毒刃扔向目标，造成伤害和中毒效果。扔出的毒刃会对生命值低于30%的目标造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwoShivPoison.png",
        "cooldown": "8",
        "cost": "75",
        "range": "625",
        "numericDetail": "技能文本：被动：当这个技能未进入冷却阶段时，萨科的攻击会对目标造成持续2秒的20/22.5/25/27.5/30%减速。 主动：萨科扔出一把毒刃，造成[BaseDamage] 70/95/120/145/170 + [BonusADRatio] 0.8 × 额外攻击力 + [APRatio] 0.6 × 法术强度魔法伤害和持续3秒的20/22.5/25/27.5/30%减速。如果目标低于30%生命值，毒刃会转而造成([BaseDamage] 70/95/120/145/170 + [BonusADRatio] 0.8 × 额外攻击力 + [APRatio] 0.6 × 法术强度) × [ExecuteDamagePercent] 1.5伤害。。基础参数：冷却=8；消耗=75；范围=625。客户端字段：BaseDamage=70/95/120/145/170；ExecuteDamagePercent=1.5；ExecuteHealthThreshold=0.3；SlowAmount=-0.2/-0.225/-0.25/-0.275/-0.3；SlowDurationPassive=2；SlowDurationActive=3；APRatio=0.6；BonusADRatio=0.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/95/120/145/170 + [BonusADRatio] 0.8 × 额外攻击力 + [APRatio] 0.6 × 法术强度；TotalExecuteDamage=([BaseDamage] 70/95/120/145/170 + [BonusADRatio] 0.8 × 额外攻击力 + [APRatio] 0.6 × 法术强度) × [ExecuteDamagePercent] 1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/shaco/shaco.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Shaco.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "幻像",
        "description": "萨科在身边制造一个自己的幻像，幻像能够攻击周围的敌人（对防御塔造成较少伤害）。在死亡时爆炸，它会爆炸，生成三个小型惊吓魔盒并对附近的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HallucinateFull.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "200",
        "numericDetail": "技能文本：萨科暂时消失，然后重新出现并制造一个持续18秒的幻像，幻像会在死亡时爆炸，对附近的敌人造成[ExplosionBaseDamage] 150/225/300 + 0.7 × 法术强度魔法伤害并生成三个立即触发的小型惊吓魔盒。幻像造成萨科60%的伤害并承受50%额外伤害。 小型惊吓魔盒造成[AoEBaseDamage] 10/20/30 + 0.1 × 法术强度魔法伤害，如果只攻击一个敌人则为[STBaseDamage] 25/50/75 + 0.15 × 法术强度魔法伤害，并让敌人恐惧1秒。。基础参数：冷却=100/90/80；消耗=100；范围=200。客户端字段：TeleportRange=150；STBaseDamage=25/50/75；AoEBaseDamage=10/20/30；CloneAADamagePercent=0.6；CloneIncomingDamagePercent=0.5；BoxFearDuration=1；ExplosionBaseDamage=150/225/300；BoxArmTime=2；BoxLifetime=6；CloneLifetime=18；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=6；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：STDamage=[STBaseDamage] 25/50/75 + 0.15 × 法术强度；AoEDamage=[AoEBaseDamage] 10/20/30 + 0.1 × 法术强度；ExplosionTotalDamage=[ExplosionBaseDamage] 150/225/300 + 0.7 × 法术强度",
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
        "description": "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/BrandP.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。。客户端字段：MonsterMod=270；PercentHealthDamage=2；EpicMonsterDPSCap=80；JungleMonsterDPSCap=50。客户端公式：ManaRestore=20（按英雄等级变化）；ExplosionDamage=(6–12（1–18级） + 0.02 × 法术强度) × 0.01；{4124b2bf}=客户端公式 ProductOfSubPartsCalculationPart；{afbf404a}=客户端公式 ProductOfSubPartsCalculationPart；JungleMonsterExplosionFlatCap=270（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "火焰烙印",
        "description": "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有【烈焰焚身】效果，那么【Q火焰烙印】将使目标晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "70",
        "range": "1050",
        "numericDetail": "技能文本：布兰德放出一团火球，对命中的第一个敌人造成[SpellBaseDamage] 70/100/130/160/190 + 0.65 × 法术强度魔法伤害。 如果目标被烈焰焚身，那么还会被晕眩1.75秒。。基础参数：冷却=8/7.5/7/6.5/6；消耗=70；范围=1050。客户端字段：StunDuration=1.75；SpellBaseDamage=70/100/130/160/190；effect1amount=70/100/130/160/190；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[SpellBaseDamage] 70/100/130/160/190 + 0.65 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "烈焰之柱",
        "description": "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，来对范围内的敌方单位造成魔法伤害。带有【烈焰焚身】效果的单位会额外受到25%伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandW.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/70/80/90/100",
        "range": "900",
        "numericDetail": "技能文本：布兰德生成一团纯火之柱，造成[BaseDamage] 75/120/165/210/255 + [APRatio] 0.7 × 法术强度魔法伤害。 被烈焰焚身的单位们会转而受到([BaseDamage] 75/120/165/210/255 + [APRatio] 0.7 × 法术强度) × 1.25伤害。。基础参数：冷却=10/9.5/9/8.5/8；消耗=60/70/80/90/100；范围=900。客户端字段：APRatio=0.7；BaseDamage=75/120/165/210/255；effect1amount=0；effect2amount=20/40/60/80/100；effect3amount=0.25；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 75/120/165/210/255 + [APRatio] 0.7 × 法术强度；EmpoweredDamage=([BaseDamage] 75/120/165/210/255 + [APRatio] 0.7 × 法术强度) × 1.25",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "烈火燃烧",
        "description": "布兰德在目标身上引发一阵强力的爆裂至附近的敌人处，造成魔法伤害。如果目标带有【烈焰焚身】效果，那么【E烈火燃烧】的扩散距离翻倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandE.png",
        "cooldown": "13/12/11/10/9",
        "cost": "90",
        "range": "625",
        "numericDetail": "技能文本：布兰德在目标身上引发一阵强力的爆裂，对附近的单位们造成[BaseDamage] 55/80/105/130/155 + [APRatio] 0.6 × 法术强度魔法伤害。 如果目标带有烈焰焚身，那么扩散距离翻倍。。基础参数：冷却=13/12/11/10/9；消耗=90；范围=625。客户端字段：BaseDamage=55/80/105/130/155；APRatio=0.6；effect1amount=0；effect2amount=375；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：EDamageCalc=[BaseDamage] 55/80/105/130/155 + [APRatio] 0.6 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/brand/brand.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Brand.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "烈焰风暴",
        "description": "布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德和附近敌人之间弹跳至多5次，每次弹跳时对敌人造成魔法伤害。弹跳会优先以带有即将满层的【炽热之焰】效果的英雄为目标。如果目标带有【烈焰焚身】效果，那么【R烈焰风暴】将使目标短暂减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandR.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "750",
        "numericDetail": "技能文本：布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德或另一名敌人之间弹跳至多5次，每次弹跳时对敌人造成[BaseDamage] 100/175/250 + [APRatio] 0.3 × 法术强度魔法伤害。弹跳会优先以带有即将满层的炽热之焰效果的英雄为目标。 如果目标带有烈焰焚身，则会被暂时减速30/45/60%。。基础参数：冷却=100/90/80；消耗=100；范围=750。客户端字段：BaseDamage=100/175/250；SlowAmount=30/45/60；SlowDuration=0.25；APRatio=0.3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 100/175/250 + [APRatio] 0.3 × 法术强度",
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
        "description": "在非战斗状态下，伊芙琳进入【恶魔魅影】。【恶魔魅影】会在伊芙琳生命值较低时治疗她，并在6级后为她提供【伪装】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Evelynn_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在非战斗状态下，伊芙琳进入【恶魔魅影】。【恶魔魅影】会在伊芙琳生命值较低时治疗她，并在6级后为她提供【伪装】。。客户端字段：DemonShadeTimer=4；StealthDropTimer=1.5。客户端公式：HealingThresholdTOOLTIP=250（初始每级 +20，按客户端断点变化） + 2.5 × 法术强度；HealPerSecondTOOLTIP=15–150（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "憎恨之刺",
        "description": "伊芙琳用鞭子进行抽击，对命中的第一个敌方单位造成伤害。随后，伊芙琳可以朝附近的敌人发出一列尖刺，可发射若干次。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnQ.png",
        "cooldown": "4",
        "cost": "40/45/50/55/60",
        "range": "800",
        "numericDetail": "技能文本：伊芙琳用她的鞭子进行打击，对命中的第一个敌人造成[HateSpikeBaseDamage] 25/30/35/40/45 + [HateSpikeAPRatio] 0.25 × 法术强度魔法伤害并使伊芙琳对该敌人发起的下3次攻击或技能造成额外的[BonusDamageBase] 15/25/35/45/55 + [BonusDamageAPRatio] 0.25 × 法术强度魔法伤害。伊芙琳可以再次施放这个技能至多3次。 再次施放：伊芙琳发射尖刺穿过相距最近的敌人，并对命中的所有敌人造成[HateSpikeBaseDamage] 25/30/35/40/45 + [HateSpikeAPRatio] 0.25 × 法术强度魔法伤害。。基础参数：冷却=4；消耗=40/45/50/55/60；范围=800。客户端字段：MissileBaseDamage=30/35/40/45/50；BonusDamageBase=15/25/35/45/55；CooldownRefund=0.5；HateSpikeBaseDamage=25/30/35/40/45；BonusDamageAPRatio=0.25；HateSpikeAPRatio=0.25；QStackCount=3；effect1amount=0；effect2amount=30；effect3amount=60；effect4amount=15/25/35/45/55；effect5amount=25/30/35/40/45；effect6amount=6；effect7amount=30；effect8amount=50；effect9amount=4；effect10amount=-0.25。客户端公式：MissileDamage=[HateSpikeBaseDamage] 25/30/35/40/45 + [HateSpikeAPRatio] 0.25 × 法术强度；TotalBonusDamage=[BonusDamageBase] 15/25/35/45/55 + [BonusDamageAPRatio] 0.25 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "引诱",
        "description": "伊芙琳诅咒她的目标，并使她在一段延时后的下次攻击或技能对目标施加魅惑和魔抗击碎效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "60/70/80/90/100",
        "range": "1200/1300/1400/1500/1600",
        "numericDetail": "技能文本：伊芙琳标记一名英雄或野怪5秒。如果伊芙琳用一次攻击或技能命中了该目标，那么她将抹除该印记，返还它的法力消耗，并使目标减速45%，持续0.75秒。 如果标记持续了至少2.5秒，那么将它抹除还会有额外效果：对抗英雄时：将其魅惑1.25/1.5/1.75/2/2.25秒并削减35/37.5/40/42.5/45%魔法抗性，持续4秒。对抗野怪时：将其魅惑3/3.25/3.5/3.75/4秒并造成[MonsterDamage] 250/300/350/400/450 + 0.6 × 法术强度魔法伤害。。基础参数：冷却=15/14/13/12/11；消耗=60/70/80/90/100；范围=1200/1300/1400/1500/1600。客户端字段：CharmDuration=1.25/1.5/1.75/2/2.25；MonsterCharm=3/3.25/3.5/3.75/4；MRShred=0.35/0.375/0.4/0.425/0.45；ShredDuration=4；MonsterDamage=250/300/350/400/450；SlowAmount=0.45；SlowDuration=0.75；effect1amount=2；effect2amount=1.25/1.5/1.75/2/2.25；effect3amount=-0.45；effect4amount=15/14/13/12/11；effect5amount=5；effect6amount=1.5；effect7amount=250/300/350/400/450；effect8amount=0.75；effect9amount=0.35/0.375/0.4/0.425/0.45；effect10amount=4。客户端公式：MonsterDamageTotalTOOLTIP=[MonsterDamage] 250/300/350/400/450 + 0.6 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "鞭笞",
        "description": "伊芙琳鞭笞她的目标，并造成伤害。她随后会获得短暂持续的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnE.png",
        "cooldown": "8",
        "cost": "40/45/50/55/60",
        "range": "210",
        "numericDetail": "技能文本：伊芙琳鞭打一名敌人，造成60/90/120/150/180加上([BasePercentHealth] 3 + 0.015 × 法术强度) × 0.01最大生命值的魔法伤害。伊芙琳获得30/35/40/45/50%移动速度，持续2秒。 进入恶魔魅影会刷新这个技能的冷却时间并使其获得强化。当这个技能获得强化后，伊芙琳会冲刺向目标并对她的目标和沿途的所有敌人造成80/120/160/200/240加上([EmpoweredPercentHealth] 4 + 0.025 × 法术强度) × 0.01最大生命值的魔法伤害。。基础参数：冷却=8；消耗=40/45/50/55/60；范围=210。客户端字段：BaseDamage=60/90/120/150/180；EmpoweredDamage=80/120/160/200/240；BasePercentHealth=3；EmpoweredPercentHealth=4；MonsterCap=450；SpeedAmount=0.3/0.35/0.4/0.45/0.5；SpeedDuration=2；effect1amount=0；effect2amount=0；effect3amount=0.3/0.35/0.4/0.45/0.5；effect4amount=2；effect5amount=3；effect6amount=4；effect7amount=450；effect8amount=0.8/0.85/0.9/0.95/1；effect9amount=2；effect10amount=1.3/1.35/1.4/1.45/1.5。客户端公式：PercentHealthBaseTOOLTIP=([BasePercentHealth] 3 + 0.015 × 法术强度) × 0.01；PercentHealthEmpoweredTOOLTIP=([EmpoweredPercentHealth] 4 + 0.025 × 法术强度) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/evelynn/evelynn.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Evelynn.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "最终抚慰",
        "description": "伊芙琳短暂进入不可被选取状态并大肆残杀她面前区域内的敌人，然后向后位移一大段距离。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：伊芙琳释放她的恶魔能量，造成大量伤害、变为不可被选取状态并向后传送。她造成[effect1amount] 125/250/375 + 0.75 × 法术强度魔法伤害，如果敌人低于30%生命值，则此伤害提升至([effect1amount] 125/250/375 + 0.75 × 法术强度) × [CritMultiplier] 2.4。在施放的同时，给【恶魔魅影】设置一个为期1.25秒的冷却时间。。基础参数：冷却=120/100/80；消耗=100；范围=25000。客户端字段：CritMultiplier=2.4；PassiveReset=1.25；effect1amount=125/250/375；effect2amount=1.4；effect3amount=2.5；effect4amount=150/225/300；effect5amount=3；effect6amount=5/4/3；effect7amount=0.3；effect8amount=700；effect9amount=30/45/60；effect10amount=0。客户端公式：Damage=[effect1amount] 125/250/375 + 0.75 × 法术强度；CritDamage=([effect1amount] 125/250/375 + 0.75 × 法术强度) × [CritMultiplier] 2.4",
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
        "description": "拉克丝的伤害类技能会对敌人施加【启明】效果，持续若干秒。拉克丝的下一次攻击将会消耗【启明】效果，来对目标造成额外魔法伤害（基于拉克丝等级）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LuxIlluminatingFraulein.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：拉克丝的伤害类技能会对敌人施加【启明】效果，持续若干秒。拉克丝的下一次攻击将会消耗【启明】效果，来对目标造成额外魔法伤害（基于拉克丝等级）。。客户端字段：DebuffDuration=6；APRatio=0.35。客户端公式：TotalDamage=客户端公式 ByCharLevelFormulaCalculationPart + [APRatio] 0.35 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ByCharLevelFormulaCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "光之束缚",
        "description": "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxLightBinding.png",
        "cooldown": "10",
        "cost": "50",
        "range": "1175",
        "numericDetail": "技能文本：拉克丝朝目标地点发射一团光球，束缚前2名敌人2秒并对每个敌人造[BaseDamage] 80/120/160/200/240 + [APRatio] 0.75 × 法术强度魔法伤害。。基础参数：冷却=10；消耗=50；范围=1175。客户端字段：BaseDamage=80/120/160/200/240；APRatio=0.75；RootDuration=2；effect1amount=0；effect2amount=0；effect3amount=2；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTT=[BaseDamage] 80/120/160/200/240 + [APRatio] 0.75 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "曲光屏障",
        "description": "拉克丝掷出她的魔杖，魔杖所触及的友方单位会有光环环绕，保护他们免受敌方伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxPrismaticWave.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "60/65/70/75/80",
        "range": "1150",
        "numericDetail": "技能文本：拉克丝扔出她的魔杖，为它途经的友军提供持续2.5秒的[BaseShieldAmount] 40/55/70/85/100 + [APRatio] 0.4 × 法术强度护盾。随后它会折返，为它途经的友军提供等额的护盾。。基础参数：冷却=12/11.5/11/10.5/10；消耗=60/65/70/75/80；范围=1150。客户端字段：BaseShieldAmount=40/55/70/85/100；APRatio=0.4；ShieldDuration=2.5；effect1amount=2/4/6/8/10；effect2amount=0；effect3amount=2.5；effect4amount=100；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShieldTT=[BaseShieldAmount] 40/55/70/85/100 + [APRatio] 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "透光奇点",
        "description": "朝一个区域发射一个不规则的扭曲之光，减速附近敌人。拉克丝可以引爆它，对敌人造成区域性伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxLightStrikeKugel.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "70/80/90/100/110",
        "range": "1100",
        "numericDetail": "技能文本：拉克丝创造一个光明地带，显形该区域并使区域中的敌人减速25/30/35/40/45%。在5秒后或再次施放这个技能后，它会爆炸，造成[BaseDamage] 65/115/165/215/265 + 0.8 × 法术强度魔法伤害并减速额外的1秒。。基础参数：冷却=10/9.5/9/8.5/8；消耗=70/80/90/100/110；范围=1100。客户端字段：VisionRadius=650；SlowLingerDuration=1；SlowPercent=25/30/35/40/45；SlowZoneDuration=5；BaseDamage=65/115/165/215/265；effect1amount=25/30/35/40/45；effect2amount=65/115/165/215/265；effect3amount=5；effect4amount=310；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTT=[BaseDamage] 65/115/165/215/265 + 0.8 × 法术强度；{ee9714e4}=([SlowPercent] 25/30/35/40/45) × -0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lux/lux.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lux.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "终极闪光",
        "description": "在积蓄能量之后，拉克丝发射一束光波，对该区域所有目标造成伤害。此外，该技能触发拉克丝的被动技能并刷新光芒四射减益的持续时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxR.png",
        "cooldown": "60/50/40",
        "cost": "100",
        "range": "3340",
        "numericDetail": "技能文本：拉克丝发射一束耀目的光能射线，对一条直线上的所有敌人造成[Damage] 300/400/500 + 1.2 × 法术强度魔法伤害。。基础参数：冷却=60/50/40；消耗=100；范围=3340。客户端字段：Damage=300/400/500；ResetPercent=0.3/0.4/0.5；ResetAssistWindow=1.75；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 300/400/500 + 1.2 × 法术强度",
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
        "description": "每过几秒，普朗克的近战攻击就会让他的对手着火。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Gangplank_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：每过几秒，普朗克的近战攻击就会让他的对手着火。。客户端字段：Cooldown=15；MoveSpeedDuration=2；DoTDuration=2.5；TurretDamageMult=0.5；ADRatio=1。客户端公式：TotalDamage=50–250（1–18级） + [ADRatio] 1 × 额外攻击力；MoveSpeed=0.15–0.3（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "枪火谈判",
        "description": "攻击目标，每击杀一个敌方单位时都会掠夺金币。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankQWrapper.png",
        "cooldown": "4.5",
        "cost": "50/45/40/35/30",
        "range": "625",
        "numericDetail": "技能文本：攻击目标，每击杀一个敌方单位时都会掠夺金币。。基础参数：冷却=4.5；消耗=50/45/40/35/30；范围=625。客户端字段：SpellDamage=10/40/70/100/130；ADRatio=1；CherryRatio=0.07；GameModeInteger=1；CritDamageMod=1；GoldProc=3/4/5/6/7；SSProc=4/5/6/7/8；PlunderThreshold=500；effect1amount=10/40/70/100/130；effect2amount=3/4/5/6/7；effect3amount=0；effect4amount=500；effect5amount=4/5/6/7/8；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ShotDamage=[SpellDamage] 10/40/70/100/130 + [ADRatio] 1 × 攻击力；ShotCrit=([SpellDamage] 10/40/70/100/130 + [ADRatio] 1 × 攻击力) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "坏血病疗法",
        "description": "吃掉柑橘类水果，来移除控制效果并回复生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankW.png",
        "cooldown": "22/20/18/16/14",
        "cost": "60/70/80/90/100",
        "range": "400",
        "numericDetail": "技能文本：普朗克吃掉大量柑橘类水果，来移除所有限制效果并回复[BaseHeal] 45/70/95/120/145 + 0.9 × 法术强度外加13%已损失生命值。。基础参数：冷却=22/20/18/16/14；消耗=60/70/80/90/100；范围=400。客户端字段：BaseHeal=45/70/95/120/145；PercentHeal=13；BuffDuration_unused=0.25；HasteAmount=200；SteroidAmount_unused=30/40/50/60/70；effect1amount=45/70/95/120/145；effect2amount=13；effect3amount=0.25；effect4amount=200；effect5amount=30/40/50/60/70；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BaseHealth=[BaseHeal] 45/70/95/120/145 + 0.9 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "火药桶",
        "description": "普朗克在目标区域为一个火药桶开盖。如果他攻击火药桶，那么火药桶会爆炸，将这次攻击的伤害传播到范围内的敌人身上，并将他们减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankE.png",
        "cooldown": "0",
        "cost": "0",
        "range": "1000",
        "numericDetail": "技能文本：普朗克放置一个可被普朗克和敌方英雄攻击的火药桶，该火药桶持续25秒。当一名敌人将火药桶摧毁时，该火药桶会哑火。当普朗克将火药桶摧毁时，该火药桶会爆炸，造成持续2秒的[BarrelSlow] 40/50/60/70/80%减速和相当于攻击力的伤害，并无视40%护甲。英雄会受到额外的75/95/115/135/155物理伤害。 火药桶的生命值会每2（按英雄等级变化）秒衰减一次。火药桶会引爆其它爆炸区域与它有重叠的火药桶，但不会重复对相同目标造成伤害。火药桶的爆炸可通过枪火谈判来触发并在击杀目标们时提供额外金币。。基础参数：冷却=0；消耗=0；范围=1000。客户端字段：BarrelSlow=40/50/60/70/80；MaxBarrels=3/3/4/4/5；DebuffDuration=2；BonusDamageToChampions=75/95/115/135/155；BarrelDuration=25；BarrelBaseDecay=2；BarrelEnemyGoldBounty=10；MinionDamagePercentage=100；CooldownBetweenBarrels=0.5；BarrelArmorPenetration=40；effect1amount=3/3/4/4/5；effect2amount=2；effect3amount=75/95/115/135/155；effect4amount=40/50/60/70/80；effect5amount=25；effect6amount=2；effect7amount=10；effect8amount=100；effect9amount=0.5；effect10amount=40。客户端公式：FinalSlowAmount=[BarrelSlow] 40/50/60/70/80；BarrelDecayTime=2（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gangplank/gangplank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gangplank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "加农炮幕",
        "description": "普朗克给他的船发信号，来轰炸一个区域，伤害并减速敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankR.png",
        "cooldown": "160/140/120",
        "cost": "100",
        "range": "30000",
        "numericDetail": "技能文本：普朗克给他的舰船发射信号弹，让它在8秒里朝着目标区域持续发射共12波加农炮弹。每波炮弹造成持续0.5秒的30%减速，并造成[DamagePerWave] 40/70/100 + 0.1 × 法术强度魔法伤害。最大伤害：([DamagePerWave] 40/70/100 + 0.1 × 法术强度) × [TotalWavesTooltip] 12 这个技能可在商店中用枪火谈判来升级。 随意开火：发射6波额外的加农炮弹。 死亡之女：发射一颗巨型加农炮弹，造成[DeathsDaughterBaseDamage] 120/210/300 + 0.3 × 法术强度真实伤害和持续1秒的75%减速。 鼓舞士气：【加农炮幕】内的友军会获得持续2秒的40%移动速度。。基础参数：冷却=160/140/120；消耗=100；范围=30000。客户端字段：DamagePerWave=40/70/100；DeathsDaughterBaseDamage=120/210/300；RaiseMoraleHaste=40；ZoneDuration=8；CannonDelay=0.5；CannonInterval=2；SlowPercent=30；SlowDuration=0.5；DeathsDaughterSlow=75；DeathsDaughterSlowDuration=1；RaiseMoraleHasteDuration=2；TotalWavesTooltip=12；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=1.5/0.5/0.5；effect6amount=0；effect7amount=300；effect8amount=75；effect9amount=1；effect10amount=40。客户端公式：OneWaveDamage=[DamagePerWave] 40/70/100 + 0.1 × 法术强度；DeathsDaughterDamage=[DeathsDaughterBaseDamage] 120/210/300 + 0.3 × 法术强度；TotalDamageTooltip=([DamagePerWave] 40/70/100 + 0.1 × 法术强度) × [TotalWavesTooltip] 12",
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
        "description": "在施放4个技能后，安妮的下一次伤害类技能就会对目标造成短暂的晕眩效果。 安妮在游戏开始时和重生时，会带着满层的【嗜火】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Annie_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在施放4个技能后，安妮的下一次伤害类技能就会对目标造成短暂的晕眩效果。 安妮在游戏开始时和重生时，会带着满层的【嗜火】。。客户端字段：MaxStacks=4；StunBaseDuration=1.25；StunDurationPerTier=0.25。客户端公式：StunDuration=1.25（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "碎裂之火",
        "description": "安妮向目标投出注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮，且碎裂之火的冷却时间减半。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieQ.png",
        "cooldown": "4",
        "cost": "60/65/70/75/80",
        "range": "625",
        "numericDetail": "技能文本：安妮投出一团火球，造成[BaseDamage] 80/125/170/215/260 + [APRatio] 0.8 × 法术强度魔法伤害。如果目标阵亡，那么安妮会返还法力值并缩短50%冷却时间。。基础参数：冷却=4；消耗=60/65/70/75/80；范围=625。客户端字段：BaseDamage=80/125/170/215/260；APRatio=0.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/125/170/215/260 + [APRatio] 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "焚烧",
        "description": "安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieW.png",
        "cooldown": "7",
        "cost": "70/75/80/85/90",
        "range": "600",
        "numericDetail": "技能文本：安妮投射出一阵火焰波，造成[BaseDamage] 70/110/150/190/230 + [APRatio] 0.8 × 法术强度魔法伤害。。基础参数：冷却=7；消耗=70/75/80/85/90；范围=600。客户端字段：BaseDamage=70/110/150/190/230；APRatio=0.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/110/150/190/230 + [APRatio] 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "熔岩护盾",
        "description": "为安妮或一名友军提供一层护盾、一个爆发性的移动速度加成并且对任何用攻击或技能袭击她的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieE.png",
        "cooldown": "10",
        "cost": "60/65/70/75/80",
        "range": "800",
        "numericDetail": "技能文本：安妮为一名友方英雄提供持续3秒的[ShieldAmount] 60/95/130/165/200 + 0.4 × 法术强度护盾值，以及在1.5秒里持续衰减的0.2–0.5（1–18级）移动速度。当护盾处于激活状态时，敌人用攻击或技能对护盾造成伤害时会受到[DamageReflection] 25/35/45/55/65 + 0.4 × 法术强度魔法伤害，每个护盾受到一次伤害。 提伯斯在被召唤出来时总会获得熔岩护盾的效果。。基础参数：冷却=10；消耗=60/65/70/75/80；范围=800。客户端字段：ShieldDuration=3；DamageReduction=13/17/21/25/29；DamageReflection=25/35/45/55/65；MovementSpeed=0.15/0.2/0.25/0.3/0.35；MovementSpeedDuration=1.5；ShieldAmount=60/95/130/165/200；CastRangeGenerosity=225；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageReturn=[DamageReflection] 25/35/45/55/65 + 0.4 × 法术强度；MoveSpeedCalc=0.2–0.5（1–18级）；ShieldBlockTotal=[ShieldAmount] 60/95/130/165/200 + 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "提伯斯之怒",
        "description": "安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieR.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "600",
        "numericDetail": "技能文本：被动：安妮获得10/15/20%法术穿透。 安妮召唤提伯斯，造成[InitialDamage] 150/275/400 + 0.75 × 法术强度魔法伤害。在接下来的45秒里，提伯斯会灼烧附近的敌人，每秒造成[AuraDamage] 8/12/16 + 0.04 × 法术强度魔法伤害。 提伯斯在以下情况下会变得暴怒：在被召唤出来时、在安妮晕眩一名敌方英雄时、以及在安妮阵亡时。在暴怒状态下，提伯斯获得275%攻击速度和在3秒里持续衰减的100%移动速度。 再次施放：手动给提伯斯下达指令。。基础参数：冷却=130/115/100；消耗=100；范围=600。客户端字段：InitialDamage=150/275/400；AuraDamage=8/12/16；TibbersAttackDamage=30/45/60；TibbersAttackSpeedDecay=-0.1；TibbersAttackAPRatio=0.1；MovespeedBurst=1；EnrageDuration=3；AvengerEnrageDuration=10；TibbersLifetime=45；TibbersBonusMS=0/25/50；TibbersModeSpecificHPMod=1；RPercentPenBuff=0.1/0.15/0.2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：InitialBurstDamage=[InitialDamage] 150/275/400 + 0.75 × 法术强度；TibbersAuraDamage=[AuraDamage] 8/12/16 + 0.04 × 法术强度；TibbersAADamage=[TibbersAttackDamage] 30/45/60 + [TibbersAttackAPRatio] 0.1 × 法术强度；TibbersTotalHP=客户端公式 ProductOfSubPartsCalculationPart + 0.5 × 法术强度；TibbersTotalResists=30（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/annie/annie.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Annie.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
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
        "description": "古拉加斯可周期性地使用一个技能来治疗自身。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/GragasPassiveHeal.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：古拉加斯可周期性地使用一个技能来治疗自身。。客户端字段：ArenaCooldownMod=0.5；HealRatio=0.055。客户端公式：HealAmount=[HealRatio] 0.055 × 最大生命值；HealCooldown=12（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "滚动酒桶",
        "description": "古拉加斯将酒桶滚到目标地点，酒桶可以被主动引爆或在到达目标地点4秒后自行爆炸。爆炸的威力会随时间持续提升。被酒桶炸到的敌人，移动速度会被降低。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasQ.png",
        "cooldown": "10/9/8/7/6",
        "cost": "80",
        "range": "850",
        "numericDetail": "技能文本：古拉加斯滚动出一个酒桶，该酒桶会在4秒后爆炸， 造成[BaseDamage] 80/120/160/200/240 + 0.8 × 法术强度魔法伤害到([BaseDamage] 80/120/160/200/240 + 0.8 × 法术强度) × 1.5魔法伤害和持续2秒的40/45/50/55/60到60/67.5/75/82.5/90%减速。伤害和减速会基于该酒桶在爆炸前的时长来提升。 古拉加斯可以再次施放这个技能来提前引爆该酒桶。。基础参数：冷却=10/9/8/7/6；消耗=80；范围=850。客户端字段：BaseDamage=80/120/160/200/240；SlowPercent=40/45/50/55/60；SlowDuration=2；BarrelMaxDuration=4；BarrelCookMaxTime=2；BarrelCookMaxAmp=150；MinionDamageMod=70；effect1amount=80/120/160/200/240；effect2amount=40/45/50/55/60；effect3amount=2；effect4amount=4；effect5amount=2；effect6amount=150；effect7amount=70；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MinDamage=[BaseDamage] 80/120/160/200/240 + 0.8 × 法术强度；MaxDamage=([BaseDamage] 80/120/160/200/240 + 0.8 × 法术强度) × 1.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "醉酒狂暴",
        "description": "古拉加斯品尝他的最新佳酿，持续1秒。在喝完之后，他会变得喧闹且好斗，下次普通攻击会对附近的所有目标造成更多伤害，并且自身所受的伤害会降低。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasW.png",
        "cooldown": "5",
        "cost": "30",
        "range": "20",
        "numericDetail": "技能文本：古拉加斯品尝他的最新佳酿，使即将到来的伤害降低([BaseDamageReduction] 10/14/18/22/26 + [DamageReductionAP] 0.04 × 法术强度) × 0.01，持续2.5秒，此外，他的下次攻击获得强化，对目标及目标身边的敌人们造成额外的[BaseDamage] 20/50/80/110/140 + [BaseDamageAP] 0.7 × 法术强度外加7%最大生命值的魔法伤害。。基础参数：冷却=5；消耗=30；范围=20。客户端字段：AttackRangeBuff=50；MaxHPPercentDamage=7；BaseDamageReduction=10/14/18/22/26；DamageReductionAP=0.04；BaseDamage=20/50/80/110/140；BaseDamageAP=0.7；MonsterDamageCap=300；DefenseDuration=2.5；AttackDuration=5；TurretDamageMod=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageReduction=([BaseDamageReduction] 10/14/18/22/26 + [DamageReductionAP] 0.04 × 法术强度) × 0.01；TotalDamage=[BaseDamage] 20/50/80/110/140 + [BaseDamageAP] 0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "肉弹冲击",
        "description": "古拉加斯向目标区域冲锋，在撞上第一个敌人后，对附近的所有敌方单位造成伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasE.png",
        "cooldown": "14/13.5/13/12.5/12",
        "cost": "50",
        "range": "600",
        "numericDetail": "技能文本：古拉加斯向前冲锋，撞击命中的第一名敌人，使附近的敌人击飞1秒并对其造成[BaseDamage] 80/125/170/215/260 + [APRatio] 0.6 × 法术强度魔法伤害。 当古拉加斯撞到一个敌人时，这个技能的冷却时间会缩短40%。。基础参数：冷却=14/13.5/13/12.5/12；消耗=50；范围=600。客户端字段：BaseDamage=80/125/170/215/260；APRatio=0.6；CooldownRefund=0.4；StunDuration=1；DashSpeed=900；HitboxArea=180；ForwardHitbox=40；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/125/170/215/260 + [APRatio] 0.6 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/gragas/gragas.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Gragas.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "爆破酒桶",
        "description": "古拉加斯向目标区域投掷他的酒桶，对爆炸范围内的所有敌人造成伤害和击退效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasR.png",
        "cooldown": "100/85/70",
        "cost": "100",
        "range": "1000",
        "numericDetail": "技能文本：古拉加斯猛抛他的酒桶，造成[BaseDamage] 200/300/400 + [APRatio] 0.8 × 法术强度魔法伤害并将敌人们从爆炸中心击退。。基础参数：冷却=100/85/70；消耗=100；范围=1000。客户端字段：BaseDamage=200/300/400；APRatio=0.8；KnockbackDistance=900；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageDone=[BaseDamage] 200/300/400 + [APRatio] 0.8 × 法术强度",
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
        "range": null,
        "numericDetail": "技能文本：在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，随机获得1到6的额外赏金。。客户端字段：GoldRatioMinCherry=0.02；GoldRatioMaxCherry=0.08；GameModeInteger=1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "万能牌",
        "description": "崔斯特扔出三张卡牌，卡牌会对沿途的每个敌方单位造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WildCards.png",
        "cooldown": "6/5.75/5.5/5.25/5",
        "cost": "60/70/80/90/100",
        "range": "10000",
        "numericDetail": "技能文本：崔斯特掷出三张牌，各造成[BaseDamage] 60/105/150/195/240 + [BonusADRatio] 0.5 × 额外攻击力 + [APRatio] 0.85 × 法术强度魔法伤害。。基础参数：冷却=6/5.75/5.5/5.25/5；消耗=60/70/80/90/100；范围=10000。客户端字段：BaseDamage=60/105/150/195/240；APRatio=0.85；BonusADRatio=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 60/105/150/195/240 + [BonusADRatio] 0.5 × 额外攻击力 + [APRatio] 0.85 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "选牌",
        "description": "崔斯特挑选魔法卡牌，用于下次攻击，并附加额外效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PickACard.png",
        "cooldown": "6",
        "cost": "50/55/60/65/70",
        "range": "200",
        "numericDetail": "技能文本：崔斯特挑选魔法卡牌，用于下次攻击，并附加额外效果。。基础参数：冷却=6；消耗=50/55/60/65/70；范围=200。客户端字段：BlueBase=40/60/80/100/120；RedBase=30/45/60/75/90；GoldBase=15/22.5/30/37.5/45；BlueCritMultiplier=0.575；RedCritMultiplier=0.35；GoldCritMultiplier=0.25；ttBlueAP=1；ttRedAP=0.7；ttGoldAP=0.5；ttAD=1；effect1amount=40/60/80/100/120；effect2amount=30/35/40/45/50；effect3amount=1/1.25/1.5/1.75/2；effect4amount=30/45/60/75/90；effect5amount=15/22.5/30/37.5/45；effect6amount=70/90/110/130/150；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BlueDamage=[BlueBase] 40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart × 客户端未命名属性（枚举 8）；RedDamage=[RedBase] 30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart × 客户端未命名属性（枚举 8）；GoldDamage=[GoldBase] 15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart × 客户端未命名属性（枚举 8）；ttBlueDamage=([BlueBase] 40/60/80/100/120 + 1 × 攻击力 + 1 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart × 客户端未命名属性（枚举 8）) × 1；ttRedDamage=([RedBase] 30/45/60/75/90 + 1 × 攻击力 + 0.7 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart × 客户端未命名属性（枚举 8）) × 1；ttGoldDamage=([GoldBase] 15/22.5/30/37.5/45 + 1 × 攻击力 + 0.5 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart × 客户端未命名属性（枚举 8）) × 1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart",
          "未命名属性枚举 8"
        ]
      },
      {
        "key": "E",
        "name": "卡牌骗术",
        "description": "崔斯特每四次攻击附加一次额外伤害。另外，崔斯特的攻击速度得到被动提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CardmasterStack.png",
        "cooldown": "0",
        "cost": "0",
        "range": "0",
        "numericDetail": "技能文本：被动：崔斯特获得15/25/35/45/55%攻击速度并且每第4次攻击造成额外的[Damage] 65/90/115/140/165 + [BonusADRatio] 0.2 × 额外攻击力 + [APRatio] 0.4 × 法术强度魔法伤害。。基础参数：冷却=0；消耗=0；范围=0。客户端字段：AttackSpeedBonus=15/25/35/45/55；Damage=65/90/115/140/165；APRatio=0.4；BonusADRatio=0.2；TowerEffectiveness=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=4；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BonusDamage=[Damage] 65/90/115/140/165 + [BonusADRatio] 0.2 × 额外攻击力 + [APRatio] 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twistedfate/twistedfate.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/TwistedFate.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "命运",
        "description": "崔斯特为他的敌人算卜命运，短时间内显示所有敌方英雄的位置，并可使用传送，让他在引导1.5秒后传送至目标位置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Destiny.png",
        "cooldown": "170/140/110",
        "cost": "100",
        "range": "5500",
        "numericDetail": "技能文本：崔斯特专注于他的卡牌，提供地图上所有敌方英雄的真实视野，持续6/8/10秒，并允许他再次施放。 再次施放：崔斯特传送到5500码以内的任何地方。。基础参数：冷却=170/140/110；消耗=100；范围=5500。客户端字段：RecastDuration=6/8/10；effect1amount=6/8/10；effect2amount=0；effect3amount=0；effect4amount=5500；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "range": null,
        "numericDetail": "技能文本：在穿越草丛进行移动时，奈德丽的移动速度会提升10%，持续2秒，并在朝着1400码内的出现在己方视野内的敌方英雄进行移动时，移动速度加成会提升至30%。 在【Q标枪投掷】或【W丛林伏击】对敌方英雄或野怪造成伤害后，奈德丽会开始捕猎目标英雄，提供其真实视野，持续4秒。在此期间，奈德丽获得10%移动速度加成（在她朝着被捕猎的目标移动时，这个加成会提升至30%）并且她的【Q推倒】和【W猛扑】会对这些目标造成强化伤害。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "标枪投掷 / 推倒",
        "description": "人类形态下，奈德丽向她的目标投掷标枪，飞行中击中目标造成伤害。美洲狮形态下，她的下一次攻击会试图对目标造成致命伤害，目标的生命值越低，造成的伤害越大。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JavelinToss.png",
        "cooldown": "6",
        "cost": "50/55/60/65/70",
        "range": "1500",
        "numericDetail": "技能文本：人类形态：奈德丽投掷她的标枪，造成[SpearMinimumDamage] 70/90/110/130/150 + [SpearMinimumAPRatio] 0.5 × 法术强度魔法伤害，基于标枪飞行距离至多提升至([SpearMinimumDamage] 70/90/110/130/150 + [SpearMinimumAPRatio] 0.5 × 法术强度) × [DamageMulti] 3.25魔法伤害。。基础参数：冷却=6；消耗=50/55/60/65/70；范围=1500。客户端字段：TooltipCougarMinimumDamage=5/30/55/80/105；SpearMinimumAPRatio=0.5；SpearMinimumDamage=70/90/110/130/150；SpearMaximumDamage=227.5/292.5/357.5/422.5/487.5；DamageMulti=3.25；effect1amount=70/90/110/130/150；effect2amount=227.5/292.5/357.5/422.5/487.5；effect3amount=0；effect4amount=0；effect5amount=0.4；effect6amount=1.2；effect7amount=525；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：HumanMinimumDamage=[SpearMinimumDamage] 70/90/110/130/150 + [SpearMinimumAPRatio] 0.5 × 法术强度；HumanMaximumDamage=([SpearMinimumDamage] 70/90/110/130/150 + [SpearMinimumAPRatio] 0.5 × 法术强度) × [DamageMulti] 3.25；{38f95809}=[TooltipCougarMinimumDamage] 5/30/55/80/105",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "丛林伏击 / 猛扑",
        "description": "人类形态下， 奈德丽会对指定位置放置一个陷阱，踩中陷阱的单位的视野将会被暴露给奈德丽，并持续受到伤害。美洲狮形态下，她会猛扑向目标，落地时造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Bushwhack.png",
        "cooldown": "13/12/11/10/9",
        "cost": "30/35/40/45/50",
        "range": "900",
        "numericDetail": "技能文本：人类形态下， 奈德丽会对指定位置放置一个陷阱，踩中陷阱的单位的视野将会被暴露给奈德丽，并持续受到伤害。美洲狮形态下，她会猛扑向目标，落地时造成伤害。。基础参数：冷却=13/12/11/10/9；消耗=30/35/40/45/50；范围=900。客户端字段：effect1amount=0；effect2amount=0；effect3amount=4；effect4amount=13/12/11/10/9；effect5amount=10/20/30/40/50；effect6amount=120；effect7amount=40/80/120/160/200；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MaxTraps=4（按英雄等级变化） + 客户端公式 NamedDataValueCalculationPart；DamagePerSecond=[effect5amount] 10/20/30/40/50 + 0.05 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 NamedDataValueCalculationPart"
        ]
      },
      {
        "key": "E",
        "name": "野性奔腾 / 挥击",
        "description": "人类形态下，奈德丽引导美洲狮的灵魂以治疗友方单位，并且短暂提升他们的攻击速度。美洲狮形态下，她迅速的挥爪攻击她面前的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PrimalSurge.png",
        "cooldown": "12",
        "cost": "50/55/60/65/70",
        "range": "900",
        "numericDetail": "技能文本：人类形态：奈德丽为目标回复[BaseHeal] 50/75/100/125/150 + 0.35 × 法术强度生命值，这个数额基于已损失生命值至多提升至([BaseHeal] 50/75/100/125/150 + 0.35 × 法术强度) × (1 + [MaxHealMult] 1)，并为目标提供持续7秒的30/40/50/60/70%攻击速度。。基础参数：冷却=12；消耗=50/55/60/65/70；范围=900。客户端字段：BaseHeal=50/75/100/125/150；MaxHealMult=1；MaxHealThreshold=0.05；BonusAS=0.3/0.4/0.5/0.6/0.7；ASDuration=7；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHealing=[BaseHeal] 50/75/100/125/150 + 0.35 × 法术强度；MaxHealing=([BaseHeal] 50/75/100/125/150 + 0.35 × 法术强度) × (1 + [MaxHealMult] 1)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nidalee/nidalee.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nidalee.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "美洲狮形态",
        "description": "奈德丽转变成美洲狮形态，获得全新技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AspectOfTheCougar.png",
        "cooldown": "3",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：被动：在人类形态下，施加捕猎效果会刷新这个技能的冷却时间。 人类形态：奈德丽变形为美洲狮形态，获得近战攻击并替换她的主动技能。 美洲狮形态：奈德丽变形为人类形态，获得远程攻击并替换她的主动技能。。基础参数：冷却=3；消耗=0；范围=20。客户端字段：PassivePercentMS=10；TakedownBaseDamage=5/30/55/80；TakedownADRatio=0.75；TakedownAPRatio=0.4；TakedownDamageAmp=1/1.25/1.5/1.75；PounceCooldown=3/2.5/2/1.5；PounceDamage=55/100/145/190；PounceADRatio=0.5；PounceAPRatio=0.3；SwipeDamage=70/130/190/250；SwipeADRatio=0.7；SwipeAPRatio=0.55；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=6；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalPounceDamage=[PounceDamage] 55/100/145/190 + [PounceADRatio] 0.5 × 额外攻击力 + [PounceAPRatio] 0.3 × 法术强度；TotalSwipeDamage=[SwipeDamage] 70/130/190/250 + [SwipeADRatio] 0.7 × 额外攻击力 + [SwipeAPRatio] 0.55 × 法术强度；TotalTakedownDamage=[TakedownBaseDamage] 5/30/55/80 + [TakedownADRatio] 0.75 × 攻击力 + [TakedownAPRatio] 0.4 × 法术强度",
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
        "description": "奥拉夫基于已损失生命值获得攻击速度和生命偷取。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Olaf_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：奥拉夫基于已损失生命值获得攻击速度和生命偷取。。客户端字段：AttackSpeedPerMissingHPPerc=0.009；MaxStatsThreshold=0.3。客户端公式：MaxAttackSpeed=0.5–1（1–18级）；MaxLifeSteal=0.08–0.25（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "逆流投掷",
        "description": "奥拉夫将战斧投至目标区域，对所有被战斧穿过的敌人造成伤害并削减他们的护甲和移动速度。如果奥拉夫捡起斧头，那么该技能冷却时间就会重置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafAxeThrowCast.png",
        "cooldown": "9",
        "cost": "50/55/60/65/70",
        "range": "1000",
        "numericDetail": "技能文本：奥拉夫将战斧投至目标区域，对所有被战斧穿过的敌人造成伤害并削减他们的护甲和移动速度。如果奥拉夫捡起斧头，那么该技能冷却时间就会重置。。基础参数：冷却=9；消耗=50/55/60/65/70；范围=1000。客户端字段：MinimumRange=425；SlowAmount=0.3/0.35/0.4/0.45/0.5；ShredAmount=0.2；DebuffDuration=4；MinimumCooldown=2.5；BaseDamage=70/120/170/220/270；MonsterDamage=20/45/70/95/120；MaxSlowDuration=3；MinSlowDuration=1；MaxSlowDistance=800；MinSlowDistance=400；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/120/170/220/270 + 1 × 额外攻击力；TooltipCDRefund=([MinimumCooldown] 2.5) × 客户端公式 CooldownMultiplierCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 CooldownMultiplierCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "挺过去",
        "description": "奥拉夫的攻击速度得到提升，并获得一层护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafFrenziedStrikes.png",
        "cooldown": "16/15/14/13/12",
        "cost": "50",
        "range": "700",
        "numericDetail": "技能文本：奥拉夫的攻击速度得到提升，并获得一层护盾。。基础参数：冷却=16/15/14/13/12；消耗=50；范围=700。客户端字段：Attackspeed=0.4/0.5/0.6/0.7/0.8；Duration=5；ShieldPercMissingHP=0.175；ShieldDuration=2.5；BaseShield=10/40/70/100/130；ThresholdForMax=0.3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ShieldCalc=[BaseShield] 10/40/70/100/130 + [ShieldPercMissingHP] 0.175 × 最大生命值 × 客户端未命名属性（枚举 16）；MaxShieldCalc=[BaseShield] 10/40/70/100/130 + 客户端公式 ProductOfSubPartsCalculationPart × 最大生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 16",
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "E",
        "name": "鲁莽挥击",
        "description": "奥拉夫以破釜沉舟之势发动进攻，对目标造成真实伤害（不受护甲与魔抗减免），同时，自身也会根据敌方所受的伤害而受到真实伤害的反噬。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafRecklessStrike.png",
        "cooldown": "11/10/9/8/7",
        "cost": "0",
        "range": "325",
        "numericDetail": "技能文本：奥拉夫狂野地挥舞他的双斧，造成[BaseDamage] 70/115/160/205/250 + 0.5 × 攻击力真实伤害。如果该敌人阵亡，那么会返还此技能的消耗。 攻击会使这个技能的冷却时间缩短1秒，在攻击野怪时，缩短值提升至2秒。。基础参数：冷却=11/10/9/8/7；消耗=0；范围=325。客户端字段：Cast_Time_Base=0.25；Cast_Time_Min=0.175；Cast_Time_Attack_Speed_Cap=125；ADRatio=0.5；BaseHealthCost=28/46/64/82/100；HealthCostADRatio=0.2；BaseDamage=70/115/160/205/250；HealthCostPercent=0.4；MonsterRefresh=2；ChampionRefresh=1；effect1amount=70/115/160/205/250；effect2amount=40；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/115/160/205/250 + 0.5 × 攻击力；{fcf1daee}=[BaseHealthCost] 28/46/64/82/100 + [HealthCostADRatio] 0.2 × 攻击力；HealthCostCalc=([BaseDamage] 70/115/160/205/250 + 0.5 × 攻击力) × [HealthCostPercent] 0.4",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/olaf/olaf.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Olaf.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "诸神黄昏",
        "description": "奥拉夫被动获得护甲和魔法抗性提升。他可以激活这个技能来变得免疫控制效果，并且会在他保持攻击时一直持续。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafRagnarok.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "400",
        "numericDetail": "技能文本：被动：奥拉夫获得10/15/20护甲和10/15/20魔法抗性。 主动：奥拉夫净化掉他身上的所有定身和限制效果并且在接下来的3秒内免疫这些效果。在激活时，奥拉夫获得[FlatAD] 10/20/30 + [PercentTotalADAmp] 0.25 × 总攻击力攻击力。用一次攻击或鲁莽挥击命中一名英雄时，会使持续时间延长2.5秒。 此外，奥拉夫会在朝着敌方英雄时获得20/45/70%移动速度，持续1秒。。基础参数：冷却=100/90/80；消耗=100；范围=400。客户端字段：Resists=10/15/20；Duration=3；FlatAD=10/20/30；PercentTotalADAmp=0.25；HasteDuration=1；Haste=0.2/0.45/0.7；DurationExtension=2.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：AD=[FlatAD] 10/20/30 + [PercentTotalADAmp] 0.25 × 总攻击力",
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
        "description": "辛吉德借助附近英雄进行漂移，在经过他们时获得爆发性的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Singed_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：辛吉德借助附近英雄进行漂移，在经过他们时获得爆发性的移动速度加成。。客户端字段：MSPercent=0.25；MSDuration=2；PerTargetCD=8；TriggerArea=225",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "剧毒踪迹",
        "description": "辛吉德在身后留下剧毒踪迹，对经过上面的敌人造成持续伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PoisonTrail.png",
        "cooldown": "0",
        "cost": "13",
        "range": "20",
        "numericDetail": "技能文本：激活：辛吉德在身后留下一条剧毒踪迹，对经过它的敌人造成每秒[BaseDamagePerSecond] 20/30/40/50/60 + [APRatioPerSecond] 0.425 × 法术强度魔法伤害。。基础参数：冷却=0；消耗=13；范围=20。客户端字段：BaseDamagePerSecond=20/30/40/50/60；APRatioPerSecond=0.425；ToggleCooldown=1；CloudDuration=3.25；PoisonDuration=2；TicksPerSecond=4；MaxLingerTicks=8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamagePerSecond=[BaseDamagePerSecond] 20/30/40/50/60 + [APRatioPerSecond] 0.425 × 法术强度；ApproximateTotalDamageTooltip=([BaseDamagePerSecond] 20/30/40/50/60 + [APRatioPerSecond] 0.425 × 法术强度) × 4.75",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "强力粘胶",
        "description": "扔出一瓶强力粘合剂在地上，其中的敌人会被减速和缚地。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MegaAdhesive.png",
        "cooldown": "17/16/15/14/13",
        "cost": "60/70/80/90/100",
        "range": "1000",
        "numericDetail": "技能文本：辛吉德猛掷出一个装满粘性液体的桶，对区域内的敌人造成缚地和50/55/60/65/70%减速，持续3秒。。基础参数：冷却=17/16/15/14/13；消耗=60/70/80/90/100；范围=1000。客户端字段：SlowPercent=50/55/60/65/70；WDuration=3；WRadius=265；DelayExecute=0.375；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "过肩摔",
        "description": "伤害目标敌方单位，并将他们投掷到辛吉德身后。如果辛吉德将目标扔到强力粘胶上，目标还会被禁锢。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Fling.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/70/80/90/100",
        "range": "125",
        "numericDetail": "技能文本：辛吉德对一名敌人进行过肩摔，造成[BaseDamageValue] 50/60/70/80/90 + 0.55 × 法术强度外加6/6.5/7/7.5/8%最大生命值的魔法伤害。 如果辛吉德将一名目标摔到他的强力粘胶上，那么该目标还会被禁锢1/1.25/1.5/1.75/2秒。。基础参数：冷却=10/9.5/9/8.5/8；消耗=60/70/80/90/100；范围=125。客户端字段：BaseDamageValue=50/60/70/80/90；RootDuration=1/1.25/1.5/1.75/2；MaxHPDamage=6/6.5/7/7.5/8；FlingDistance=420；NonChampionDamageCap=300；effect1amount=50/60/70/80/90；effect2amount=1/1.25/1.5/1.75/2；effect3amount=6/6.5/7/7.5/8；effect4amount=420；effect5amount=300；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BaseDamage=[BaseDamageValue] 50/60/70/80/90 + 0.55 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/singed/singed.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Singed.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "疯狂药剂",
        "description": "辛吉德喝下精心炮制的化学药剂，大幅提高战斗属性，并使他的【剧毒踪迹】可以施加重伤效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/InsanityPotion.png",
        "cooldown": "100",
        "cost": "100",
        "range": "20",
        "numericDetail": "技能文本：辛吉德喝下化学药剂，自身获得25/55/85法术强度、护甲、魔法抗性、移动速度、生命回复和法力回复，持续25秒。在这个效果期间，辛吉德的剧毒踪迹还会施加持续1秒的40%重伤。。基础参数：冷却=100；消耗=100；范围=20。客户端字段：StatAmount=25/55/85；Duration=25；GrievousAmount=0.4；GrievousDuration=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "瑞兹的技能会造成基于他法力值加成的额外伤害，并且他的最大法力值会基于他的法术强度来获得百分比的提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ryze_P.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：瑞兹的技能会造成基于他法力值加成的额外伤害，并且他的最大法力值会基于他的法术强度来获得百分比的提升。。客户端字段：PercentManaIncrease=10；APAmount=100。客户端公式：{92bc0080}=0.05 × 法术强度；PassiveManaCalcTooltip=([PercentManaIncrease] 10 × 法术强度) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "超负荷",
        "description": "被动部分：瑞兹的其它基础技能会重置【超负荷】的冷却时间并且充能一层符文。当瑞兹带着2层符文施放【超负荷】时，他会获得短暂的爆发性移动速度加成。 施放时，瑞兹会沿直线扔出一团纯粹能量，来对命中的第一个敌人造成伤害。如果目标身上有【涌动】效果，那么【超负荷】会造成额外伤害并弹射至附近带有【涌动】效果的敌人身上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeQWrapper.png",
        "cooldown": "5",
        "cost": "40/38/36/34/32",
        "range": "1000",
        "numericDetail": "技能文本：被动部分：瑞兹的其它基础技能会重置【超负荷】的冷却时间并且充能一层符文。当瑞兹带着2层符文施放【超负荷】时，他会获得短暂的爆发性移动速度加成。 施放时，瑞兹会沿直线扔出一团纯粹能量，来对命中的第一个敌人造成伤害。如果目标身上有【涌动】效果，那么【超负荷】会造成额外伤害并弹射至附近带有【涌动】效果的敌人身上。。基础参数：冷却=5；消耗=40/38/36/34/32；范围=1000。客户端字段：BaseDamage=75/95/115/135/155；DamageAmp=40/50/60/70/80；MovementSpeedAmount=28/32/36/40/44；MovementSpeedDuration=2；MaximumRunes=2；RuneDuration=4；effect1amount=70/110/150/190/230；effect2amount=25/40/55/70/85；effect3amount=50/75/100/125/150；effect4amount=25/28/31/24/37；effect5amount=2；effect6amount=2；effect7amount=3；effect8amount=0.01；effect9amount=2；effect10amount=0。客户端公式：QDamageCalc=[BaseDamage] 75/95/115/135/155 + 0.55 × 法术强度 + 0.02 × 当前资源",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "符文禁锢",
        "description": "瑞兹将一个目标陷入一个符文牢笼中，来对其造成伤害和减速效果。如果目标身上带有【涌动】效果，那么减速效果会替换为禁锢效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeW.png",
        "cooldown": "11/10.5/10/9.5/9",
        "cost": "50/60/70/80/90",
        "range": "615",
        "numericDetail": "技能文本：瑞兹造成[BaseDamage] 60/90/120/150/180 + 0.6 × 法术强度 + 0.03 × 当前资源魔法伤害和持续1.5秒的50%减速。如果目标带有涌动，则它会将其消耗，使这个技能造成禁锢而非减速。。基础参数：冷却=11/10.5/10/9.5/9；消耗=50/60/70/80/90；范围=615。客户端字段：SlowAmount=0.5；BaseDamage=60/90/120/150/180；CCDuration=1.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：WDamageCalc=[BaseDamage] 60/90/120/150/180 + 0.6 × 法术强度 + 0.03 × 当前资源",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "法术涌动",
        "description": "瑞兹放出一颗纯净魔法能量球，对一名敌人造成伤害并对附近的敌人造成减益效果。瑞兹的技能可以对带有该减益的敌人造成额外效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeE.png",
        "cooldown": "3.5/3.25/3/2.75/2.5",
        "cost": "35/45/55/65/75",
        "range": "615",
        "numericDetail": "技能文本：瑞兹发射一颗法球，造成[BaseDamage] 60/90/120/150/180 + 0.5 × 法术强度 + 0.02 × 当前资源魔法伤害并施加持续4秒的涌动给目标和附近的敌人们。已被涌动影响的敌人们将使其进一步扩散。。基础参数：冷却=3.5/3.25/3/2.75/2.5；消耗=35/45/55/65/75；范围=615。客户端字段：BaseDamage=60/90/120/150/180；DebuffDuration=4；BounceRadius=350；DamageAmp=10/20/30/40/50；BounceRadiusLargeUnit=400；BounceRadiusQSmallUnit=350；BounceRadiusQLargeUnit=500；effect1amount=80/90/100/110/120；effect2amount=40/50/60/70/80；effect3amount=100；effect4amount=0.1；effect5amount=1.5；effect6amount=1.5；effect7amount=4；effect8amount=1；effect9amount=0；effect10amount=0。客户端公式：EDamageCalc=[BaseDamage] 60/90/120/150/180 + 0.5 × 法术强度 + 0.02 × 当前资源",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ryze/ryze.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ryze.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "曲境折跃",
        "description": "被动部分：【超负荷】对带有【涌动】效果的目标造成更多伤害。 施放时，瑞兹会创造一个传送门来通向一个附近的位置。在若干秒后，站在传送门附近的友军会被传送至目标位置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeR.png",
        "cooldown": "180/160/140",
        "cost": "100",
        "range": "3000",
        "numericDetail": "技能文本：被动： 超负荷对带有涌动的目标的伤害加成提升至50/75/100%。 主动：瑞兹开启一个前往另一个位置的传送门。在2秒后，传送门附近的所有友军都会被传送到该位置。。基础参数：冷却=180/160/140；消耗=100；范围=3000。客户端字段：ChargeTime=2.1；TeleportTime=0.65；AllyIndicatorBuffDuration=0.75；ChargeTimeTooltip=2；OverloadDamageBonus=50/75/100；OverloadHealPercent=20/25/30；HealPercentMinionMod=0.33；MinimumCastRange=1000；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=6；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "崔丝塔娜的射程随等级提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Tristana_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：崔丝塔娜的射程随等级提升。。客户端公式：BonusPassiveRange=客户端公式 ByCharLevelInterpolationCalculationPart（mEndValue=150）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ByCharLevelInterpolationCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "急速射击",
        "description": "崔丝塔娜急速射击，短时间内提升攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaQ.png",
        "cooldown": "20/19/18/17/16",
        "cost": "15/20/25/30/35",
        "range": "20",
        "numericDetail": "技能文本：崔丝塔娜开始全自动射击，获得持续7秒的60/75/90/105/120%攻击速度。。基础参数：冷却=20/19/18/17/16；消耗=15/20/25/30/35；范围=20。客户端字段：AttackSpeedMod=0.6/0.75/0.9/1.05/1.2；BuffDuration=7；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "火箭跳跃",
        "description": "崔丝塔娜朝地面开火，跳跃至目标区域，落地造成伤害并减速附近敌人一小段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaW.png",
        "cooldown": "22/20/18/16/14",
        "cost": "30/35/40/45/50",
        "range": "900",
        "numericDetail": "技能文本：崔丝塔娜将自己推送出去，在着陆时造成[BaseDamage] 70/105/140/175/210 + [ADRatio] 1 × 额外攻击力 + [APRatio] 0.5 × 法术强度魔法伤害和持续2秒的40%减速。 参与击杀后，或者满层爆炸火花爆炸后，会重置这个技能的冷却时间。。基础参数：冷却=22/20/18/16/14；消耗=30/35/40/45/50；范围=900。客户端字段：BaseDamage=70/105/140/175/210；SlowDuration=2；SlowMod=-0.4；DamageRadius=350；ADRatio=1；APRatio=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：LandingDamage=[BaseDamage] 70/105/140/175/210 + [ADRatio] 1 × 额外攻击力 + [APRatio] 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "爆炸火花",
        "description": "当崔丝塔娜杀死一个单位，加农炮弹会炸裂伤害周围的敌人。可通过主动施放这个技能来将一颗炸弹放置在目标身上，炸弹会在短时间内或被崔丝塔娜攻击数次后爆炸，爆炸时对目标及其附近的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaE.png",
        "cooldown": "16/15.5/15/14.5/14",
        "cost": "50/55/60/65/70",
        "range": "550",
        "numericDetail": "技能文本：当崔丝塔娜杀死一个单位，加农炮弹会炸裂伤害周围的敌人。可通过主动施放这个技能来将一颗炸弹放置在目标身上，炸弹会在短时间内或被崔丝塔娜攻击数次后爆炸，爆炸时对目标及其附近的敌人造成伤害。。基础参数：冷却=16/15.5/15/14.5/14；消耗=50/55/60/65/70；范围=550。客户端字段：PassiveBaseDamage=45/60/75/90/105；PassiveRadius=300；ActiveBaseDamage=60/85/110/135/160；ActiveBADRatio=0.8；ActiveRadius=300；ActiveTowerRadius=600；ActiveMaxStacks=4；ActiveDuration=4；ActivePerStackAmp=0.25；CritChanceModifier=0.4；APRatio=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：PassiveDamage=[PassiveBaseDamage] 45/60/75/90/105 + 0.25 × 法术强度；ActiveDamage=([ActiveBaseDamage] 60/85/110/135/160 + [ActiveBADRatio] 0.8 × 额外攻击力 + [APRatio] 0.5 × 法术强度) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)；ActiveMaxDamage=(([ActiveBaseDamage] 60/85/110/135/160 + [ActiveBADRatio] 0.8 × 额外攻击力 + [APRatio] 0.5 × 法术强度) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tristana/tristana.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tristana.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "R",
        "name": "毁灭射击",
        "description": "崔丝塔娜装填巨型加农炮弹攻击目标单位，造成巨大伤害并击退目标。如果目标携带着【爆炸火花】的炸弹，那么该炸弹的爆炸半径翻倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaR.png",
        "cooldown": "100",
        "cost": "100",
        "range": "550",
        "numericDetail": "技能文本：崔丝塔娜发射一颗大型加农炮弹，对目标造成[BaseDamage] 225/275/325 + 0.7 × 额外攻击力 + [APRatio] 1 × 法术强度魔法伤害，并对其与周围敌人们施加击退和0.4/0.55/0.7秒晕眩。。基础参数：冷却=100；消耗=100；范围=550。客户端字段：BaseDamage=225/275/325；KnockbackDistance=600/800/1000；KnockbackArea=200；StunDuration=0.4/0.55/0.7；APRatio=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=[BaseDamage] 225/275/325 + 0.7 × 额外攻击力 + [APRatio] 1 × 法术强度",
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
        "description": "泰达米尔每次攻击、暴击或击杀都能获得怒气。怒气被动地增加他的暴击几率，且可以通过释放嗜血杀戮来消耗。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Tryndamere_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：泰达米尔每次攻击、暴击或击杀都能获得怒气。怒气被动地增加他的暴击几率，且可以通过释放嗜血杀戮来消耗。。客户端字段：CherryFuryModifier=1.5。客户端公式：PassiveCritConversionTooltip=0.5；{dc63b617}=(0.05（按英雄等级变化）) × 0.1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "嗜血杀戮",
        "description": "泰达米尔对战斗极度饥渴，他受伤程度越高，攻击力越强。他能通过释放【Q嗜血杀戮】消耗怒气并治疗自己。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereQ.png",
        "cooldown": "12",
        "cost": "0",
        "range": "400",
        "numericDetail": "技能文本：泰达米尔对战斗极度饥渴，他受伤程度越高，攻击力越强。他能通过释放【Q嗜血杀戮】消耗怒气并治疗自己。。基础参数：冷却=12；消耗=0；范围=400。客户端字段：BaseHealing=30/40/50/60/70；BonusHealPerFury=0.5/0.95/1.4/1.85/2.3；APRatio=0.3；APRatioPerFury=0.012；MaximumBonusAD=20/35/50/65/80；RemainingHealthThreshold=0.1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BaseHeal=[BaseHealing] 30/40/50/60/70 + [APRatio] 0.3 × 法术强度；HealPerFury=[BonusHealPerFury] 0.5/0.95/1.4/1.85/2.3 + [APRatioPerFury] 0.012 × 法术强度；MaximumHeal=[BaseHealing] 30/40/50/60/70 + [APRatio] 0.3 × 法术强度 + 客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "蔑视",
        "description": "泰达米尔嘲笑敌人，减少身边敌方英雄的攻击力。背对泰达米尔的敌人还会被减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereW.png",
        "cooldown": "14",
        "cost": "0",
        "range": "850",
        "numericDetail": "技能文本：泰达米尔抛出羞辱之语，使英雄们降低20/35/50/65/80攻击力，持续4秒，并且对逃离泰达米尔的敌人造成30/35/40/45/50%减速，持续3.25秒。。基础参数：冷却=14；消耗=0；范围=850。客户端字段：ADReduction=-20/-35/-50/-65/-80；SlowPotency=-0.3/-0.35/-0.4/-0.45/-0.5；ReductionDuration=4；SlowDuration=3.25；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "旋风斩",
        "description": "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereE.png",
        "cooldown": "12/11/10/9/8",
        "cost": "0",
        "range": "650",
        "numericDetail": "技能文本：泰达米尔旋转并穿过他的敌人，造成[Damage] 80/120/160/200/240 + [ADRatio] 1 × 额外攻击力 + [APRatio] 0.8 × 法术强度物理伤害并且每命中一个敌人就会生成2怒气，在命中敌方英雄时提升至5怒气。 这个技能的冷却时间会在泰达米尔暴击时缩短0.75秒，并在对英雄暴击时缩短1.5秒。。基础参数：冷却=12/11/10/9/8；消耗=0；范围=650。客户端字段：Damage=80/120/160/200/240；ADRatio=1；APRatio=0.8；NonChampCDRefund=0.75；ChampCDRefund=1.5；NonChampFuryGain=2；ChampFuryGain=5；DamageAoE=225；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 80/120/160/200/240 + [ADRatio] 1 × 额外攻击力 + [APRatio] 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/tryndamere/tryndamere.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Tryndamere.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "无尽怒火",
        "description": "泰达米尔是如此渴望战斗，以至于承受再多的伤害也不会死亡。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/UndyingRage.png",
        "cooldown": "120/100/80",
        "cost": "0",
        "range": "400",
        "numericDetail": "技能文本：泰达米尔变得对死亡完全免疫，持续5秒，拒绝将生命值降至30/50/70以下，并瞬间获得50/75/100怒气。。基础参数：冷却=120/100/80；消耗=0；范围=400。客户端字段：TryndRFuryGain=50/75/100；TryndRMinHealth=30/50/70；TryndRDuration=5；effect1amount=50/75/100；effect2amount=30/50/70；effect3amount=5；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "费德提克的饰品会被替换为【草间人】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/FiddlesticksP.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：费德提克的饰品会被替换为【草间人】。",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "恐惧",
        "description": "费德提克在非战斗状态且未被敌人看见时，如果用技能对敌人造成了伤害，或者对一名敌人使用了【Q恐惧】的主动效果，都会使目标因害怕而逃跑一段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksQ.png",
        "cooldown": "15/14.5/14/13.5/13",
        "cost": "65",
        "range": "575",
        "numericDetail": "技能文本：被动：在非战斗状态且未被敌人看见，或冒充成一个草间人时，如果用一个技能对敌人造成了伤害，那么会使该敌人恐惧1.2/1.4/1.6/1.8/2秒。 主动：恐惧一个目标1.2/1.4/1.6/1.8/2秒并造成[MaxHealthDamage] 0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度当前生命值的魔法伤害。如果目标近期被费德提克恐惧过，那么则会转而造成([MaxHealthDamage] 0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度) × 2当前生命值的魔法伤害。。基础参数：冷却=15/14.5/14/13.5/13；消耗=65；范围=575。客户端字段：MaxHealthDamage=0.04/0.045/0.05/0.055/0.06；FearDuration=1.2/1.4/1.6/1.8/2；MinimumDamage=40/60/80/100/120；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalPercentHealthDamage=[MaxHealthDamage] 0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度；TotalPercentHealthDamageFeared=([MaxHealthDamage] 0.04/0.045/0.05/0.055/0.06 + 0.0003 × 法术强度) × 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "五骨丰登",
        "description": "费德提克从附近敌人们身上吸取生命值，在持续结束时造成额外的处决伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksW.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "650",
        "numericDetail": "技能文本：费德提克引导并吸取附近敌人们的灵魂，每秒造成[DamagePerSecond] 60/90/120/150/180 + 0.45 × 法术强度魔法伤害，持续2秒，外加在结束时造成12/14.5/17/19.5/22%已损失生命值的伤害。费德提克回复相当于25/32.5/40/47.5/55%伤害值的生命值。 如果费德提克在未被打断地结束引导，那么剩余冷却时间缩短60%。。基础参数：冷却=10/9.5/9/8.5/8；消耗=60/65/70/75/80；范围=650。客户端字段：DamagePerSecond=60/90/120/150/180；TicksPerSecond=4；VampPercentage=25/32.5/40/47.5/55；DrainDuration=2；DrainLeashRange=725；PercentMultiplier=0.12/0.145/0.17/0.195/0.22；PercentForTooltip=12/14.5/17/19.5/22；MonsterDamageMod=1.35；MonsterHealingMod=0.45；MinionDamageMod=0.5；MinionHealingMod=15；MonsterMaxDamage=400；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DrainDamageCalc=[DamagePerSecond] 60/90/120/150/180 + 0.45 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "夜割",
        "description": "费德提克用它的镰刀斩击一个区域，使命中的所有敌人减速，并使斩击区域中心的敌人沉默。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksE.png",
        "cooldown": "10/9/8/7/6",
        "cost": "40/45/50/55/60",
        "range": "850",
        "numericDetail": "技能文本：费德提克释放黑暗魔法，造成[BaseDamage] 70/105/140/175/210 + 0.5 × 法术强度魔法伤害并使敌人减速30/35/40/45/50%，持续1.25秒。处于区域正中的敌人还会受到沉默效果。。基础参数：冷却=10/9/8/7/6；消耗=40/45/50/55/60；范围=850。客户端字段：BaseDamage=70/105/140/175/210；SlowAmount=-0.3/-0.35/-0.4/-0.45/-0.5；EmpoweredSlowAmount=-0.5/-0.55/-0.6/-0.65/-0.7；CastRange=850；SilenceDuration=1.25；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 70/105/140/175/210 + 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/fiddlesticks/fiddlesticks.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Fiddlesticks.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "群鸦风暴",
        "description": "一群杀人鸦盘旋于费德提克身边，每秒对范围内的所有敌方单位造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksR.png",
        "cooldown": "140/110/80",
        "cost": "100",
        "range": "800",
        "numericDetail": "技能文本：费德提克引导1.5秒，随后传送并释放杀人鸦群，在5秒里持续造成共([DamagePerSecond] 150/250/350 + [APRatio] 0.5 × 法术强度) × [Duration] 5魔法伤害。。基础参数：冷却=140/110/80；消耗=100；范围=800。客户端字段：DamagePerSecond=150/250/350；APRatio=0.5；Duration=5；ChannelTime=1.5；effect1amount=125/225/325；effect2amount=5；effect3amount=1.5；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageDone=([DamagePerSecond] 150/250/350 + [APRatio] 0.5 × 法术强度) × 0.25；TotalDamage=([DamagePerSecond] 150/250/350 + [APRatio] 0.5 × 法术强度) × [Duration] 5；APRatioFullDuration=([APRatio] 0.5 × 法术强度) × [Duration] 5；APRatioTick=[APRatio] 0.5 × 法术强度；{d0d3db7f}=[DamagePerSecond] 150/250/350 + [APRatio] 0.5 × 法术强度",
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
        "description": "阿利斯塔在对敌方英雄造成晕眩或强制位移时，或附近有敌人阵亡时，会积攒他的怒吼层数。在层数攒满后，他会治疗他自己和所有附近的友方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Alistar_E.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：阿利斯塔在对敌方英雄造成晕眩或强制位移时，或附近有敌人阵亡时，会积攒他的怒吼层数。在层数攒满后，他会治疗他自己和所有附近的友方英雄。。客户端字段：AlistarPassiveHealRatio=0.05；AlistarPassiveAllyHealRatio=1.4；PassiveCooldown=3；PassiveMaxStacks=7；PassiveStacksChampionKill=7；PassiveAllyNumHeal=15。客户端公式：BaseHeal=[AlistarPassiveHealRatio] 0.05 × 最大生命值；AllyHeal=([AlistarPassiveHealRatio] 0.05 × 最大生命值) × [AlistarPassiveAllyHealRatio] 1.4",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "大地粉碎",
        "description": "阿利斯塔锤击地面，对附近的敌人造成魔法伤害并使他们浮空。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Pulverize.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "365",
        "numericDetail": "技能文本：阿利斯塔使大地破裂，击飞敌人1秒并造成[BaseDamage] 60/100/140/180/220 + [APRatio] 0.8 × 法术强度魔法伤害。。基础参数：冷却=14/13/12/11/10；消耗=50/55/60/65/70；范围=365。客户端字段：BaseDamage=60/100/140/180/220；APRatio=0.8；AoERadius=375；KnockupDuration=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 60/100/140/180/220 + [APRatio] 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "野蛮冲撞",
        "description": "阿利斯塔冲撞目标，对其造成伤害并击退目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Headbutt.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "650",
        "numericDetail": "技能文本：阿利斯塔顶向一名敌人，将其击退并造成[Damage] 55/110/165/220/275 + [APRatio] 1 × 法术强度魔法伤害。。基础参数：冷却=14/13/12/11/10；消耗=50/55/60/65/70；范围=650。客户端字段：KnockBackDistance=700；Damage=55/110/165/220/275；StunDuration=0.75；KnockUpDuration=0.75；APRatio=1；effect1amount=0；effect2amount=0；effect3amount=700；effect4amount=0.75；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 55/110/165/220/275 + [APRatio] 1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "践踏",
        "description": "阿利斯塔践踏附近的敌方单位，无视单位的碰撞体积并在他伤害到一名敌方英雄时获得一层充能。在满层充能时，阿利斯塔的下次对敌方英雄发起的普攻将造成额外魔法伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AlistarE.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "50/55/60/65/70",
        "range": "350",
        "numericDetail": "技能文本：阿利斯塔践踏地面，变为幽灵状态并在5秒里持续对附近的敌人造成[TrampleDamage] 80/110/140/170/200 + [APRatio] 0.7 × 法术强度魔法伤害。每段践踏在至少伤害到一名敌方英雄时会为阿利斯塔提供一层效果。 在5层效果时，阿利斯塔的下一个对英雄打出的攻击会晕眩目标1秒并造成额外的20（初始每级 +15，按客户端断点变化）魔法伤害。。基础参数：冷却=12/11.5/11/10.5/10；消耗=50/55/60/65/70；范围=350。客户端字段：APRatio=0.7；TrampleDamage=80/110/140/170/200；BonusAARange=50；Duration=5；Radius=350；MaxStacks=5；StunDuration=1；ProcDamageBase=20；ProcDamageScale=15；FullChargeDuration=5；effect1amount=80/110/140/170/200；effect2amount=50；effect3amount=5；effect4amount=350；effect5amount=5；effect6amount=1；effect7amount=5；effect8amount=20；effect9amount=15；effect10amount=0。客户端公式：TotalDamage=[TrampleDamage] 80/110/140/170/200 + [APRatio] 0.7 × 法术强度；AttackBonusDamage=20（初始每级 +15，按客户端断点变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/alistar/alistar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Alistar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "坚定意志",
        "description": "阿利斯塔发出野性的咆哮，移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FerociousHowl.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "1",
        "numericDetail": "技能文本：阿利斯塔发出野性的咆哮，移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。。基础参数：冷却=120/100/80；消耗=100；范围=1。客户端字段：RDuration=7；RDamageReduction=55/65/75；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "拉莫斯获得额外攻击力，受益于他的护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Armordillo_ScavengeArmor.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：拉莫斯获得额外攻击力，受益于他的护甲和魔法抗性。。客户端字段：ArmorRatio=0.15；MagicResistRatio=0.15；BaseDamage=10。客户端公式：TotalDamage=[ArmorRatio] 0.15 × 护甲 + [MagicResistRatio] 0.15 × 魔法抗性",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "动力冲刺",
        "description": "拉莫斯缩成球状冲击目标，造成魔法伤害并减速目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PowerBall.png",
        "cooldown": "12/10.5/9/7.5/6",
        "cost": "60",
        "range": "300",
        "numericDetail": "技能文本：拉莫斯蜷缩为球状，获得(0.25–0.391（1–18级）) × [MSMultiplier] 1移动速度，并在6秒里持续加速至((0.25–0.391（1–18级）) × [MSMultiplier] 1) × [RollDuration] 6移动速度。拉莫斯会在与一名敌人碰撞后停下，对附近的敌人们造成[QBaseDamage] 80/120/160/200/240 + [APRatio] 1 × 法术强度魔法伤害、击退、和持续1秒的40/50/60/70/80%减速。 再次施放：拉莫斯提前结束这个技能。。基础参数：冷却=12/10.5/9/7.5/6；消耗=60；范围=300。客户端字段：QBaseDamage=80/120/160/200/240；MSMultiplier=1；APRatio=1；RollDuration=6；StunDuration=0.35；KnockbackDistance=125；HeightVariable=25；SelfStunTiming=0.25；SlowPercent=40/50/60/70/80；SlowDuration=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=1000。客户端公式：PowerBallDamage=[QBaseDamage] 80/120/160/200/240 + [APRatio] 1 × 法术强度；MinimumMoveSpeed=(0.25–0.391（1–18级）) × [MSMultiplier] 1；MaximumMoveSpeed=((0.25–0.391（1–18级）) × [MSMultiplier] 1) × [RollDuration] 6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "尖刺防御",
        "description": "拉莫斯进入防御状态，极大提高护甲值和魔法抗性，并回敬伤害给那些攻击他的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DefensiveBallCurl.png",
        "cooldown": "7",
        "cost": "40",
        "range": "300",
        "numericDetail": "技能文本：拉莫斯进入防御状态，极大提高护甲值和魔法抗性，并回敬伤害给那些攻击他的敌人。。基础参数：冷却=7；消耗=40；范围=300。客户端字段：BonusArmorPercent=0.3/0.375/0.45/0.525/0.6；BonusMRPercent=0.3/0.375/0.45/0.525/0.6；FlatBonusArmor=27/32/37/42/47；FlatBonusMR=20/25/30/35/40；BuffDuration=7；DamageArmorRatio=0.1；DamageMRRatio=0.1；FlatDamageReturn=15；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ReturnDamageCalc=[FlatDamageReturn] 15 + [DamageArmorRatio] 0.1 × 护甲 + [DamageMRRatio] 0.1 × 魔法抗性；BonusArmorTooltip=客户端公式 ProductOfSubPartsCalculationPart + [BonusArmorPercent] 0.3/0.375/0.45/0.525/0.6 × 护甲；BonusMRTooltip=客户端公式 ProductOfSubPartsCalculationPart + [BonusMRPercent] 0.3/0.375/0.45/0.525/0.6 × 魔法抗性；RecastDamageTooltip=[FlatDamageReturn] 15 + [DamageArmorRatio] 0.1 × 护甲 + [DamageMRRatio] 0.1 × 魔法抗性",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "E",
        "name": "狂乱嘲讽",
        "description": "拉莫斯嘲讽一个敌方英雄或野怪，强制目标鲁莽地攻击自己。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PuncturingTaunt.png",
        "cooldown": "12",
        "cost": "50",
        "range": "325",
        "numericDetail": "技能文本：拉莫斯嘲讽一个敌方英雄或野怪，强制目标鲁莽地攻击自己1.2/1.4/1.6/1.8/2秒。会对野怪造成[MonsterDamage] 80/100/120/140/160 + [APRatio] 0.7 × 法术强度魔法伤害。。基础参数：冷却=12；消耗=50；范围=325。客户端字段：Duration=1.2/1.4/1.6/1.8/2；MonsterDamage=80/100/120/140/160；APRatio=0.7；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MonsterDamageCalc=[MonsterDamage] 80/100/120/140/160 + [APRatio] 0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "冲天猛撞",
        "description": "拉莫斯跃到空中然后朝着目标位置猛撞，对敌人造成魔法伤害和减速效果。如果拉莫斯在【动力冲刺】状态下施放，那么拉莫斯还会击飞区域中心的敌人们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Tremors2.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：拉莫斯跃到空中然后朝着目标位置猛撞，对敌人造成魔法伤害和减速效果。如果拉莫斯在【动力冲刺】状态下施放，那么拉莫斯还会击飞区域中心的敌人们。。基础参数：冷却=120/105/90；消耗=100；范围=25000。客户端字段：SlowDuration=1.5；SlowAmount=0.3/0.4/0.5；TurretDamageModifier=2；InitialDamage=150/250/350；NumberOfPulses=3；BuffDuration=3.5；BaseCastRange=800；TremorsAoERange=400；TremorsKnockupRange=200；KnockupDuration=0.75；DashRangeGrowth=1.5；MaxRangeForDmgGrowth=1700；DashSpeedGrowth=1.1；MinDashSpeed=900；MaxDashSpeed=2000；APRatio=0.6；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：InitialDamageCalc=[InitialDamage] 150/250/350 + [APRatio] 0.6 × 法术强度；PulseDamageCalc=客户端公式 NamedDataValueCalculationPart + 0.1 × 法术强度；TooltipMaxDamageCalc=([InitialDamage] 150/250/350 + 0.6 × 法术强度) × (客户端公式 NamedDataValueCalculationPart + 1)；MaxSlow=(客户端公式 ProductOfSubPartsCalculationPart) × [NumberOfPulses] 3",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/rammus/rammus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Rammus.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 NamedDataValueCalculationPart",
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
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
        "description": "孙悟空在与英雄或野怪战斗时，会获得可叠加的护甲和最大生命值回复。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MonkeyKingStoneSkin.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：孙悟空在与英雄或野怪战斗时，会获得可叠加的护甲和最大生命值回复。。客户端字段：CombatDuration=3；StackDuration=5；MaxStacks=5；StackMultiplier=1；HealthPercentPer5=0.0035；TooltipMult=6；TooltipMaxHealthPercentPer5=2.1；FallOffRate=1。客户端公式：BonusArmor=6–10（1–18级）；TooltipMaxArmor=(6–10（1–18级）) × [TooltipMult] 6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "粉碎打击",
        "description": "孙悟空的下次攻击获得额外距离，造成额外伤害，并暂时减少敌人的护甲。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingDoubleAttack.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "20",
        "range": "250/275/300/325/350",
        "numericDetail": "技能文本：孙悟空和他的分身的下次攻击提升135/145/155/165/175距离，造成[BaseDamage] 20/45/70/95/120 + [ADRatio] 0.5 × 额外攻击力额外物理伤害，并移除目标10/15/20/25/30%护甲，持续3秒。 每当孙悟空或他的分身用一次攻击或技能命中一名敌人时，这个技能的冷却时间就会缩短0.5秒。 这个技能会在造成伤害时触发技能特效。。基础参数：冷却=8/7.5/7/6.5/6；消耗=20；范围=250/275/300/325/350。客户端字段：BaseDamage=20/45/70/95/120；ADRatio=0.5；ArmorShredPercent=0.1/0.15/0.2/0.25/0.3；ShredDuration=3；BuffDuration=6；AttackRangeBonus=135/145/155/165/175；CooldownDecrease=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 20/45/70/95/120 + [ADRatio] 0.5 × 额外攻击力；BonusDamageTT=[BaseDamage] 20/45/70/95/120 + [ADRatio] 0.5 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "真假猴王",
        "description": "孙悟空变为隐形状态并朝着一个方向突进，同时留下一个会攻击附近敌人的分身。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingDecoy.png",
        "cooldown": "22/21/20/19/18",
        "cost": "60/55/50/45/40",
        "range": "275",
        "numericDetail": "技能文本：孙悟空突进并变为隐形状态，持续1秒，同时留下一个持续4秒的不能移动的分身。 分身会攻击附近的近期被孙悟空造成过伤害的敌人并会模拟他的终极技能，造成40/45/50/55/60%的常规伤害。。基础参数：冷却=22/21/20/19/18；消耗=60/55/50/45/40；范围=275。客户端字段：CloneDamageMod=0.4/0.45/0.5/0.55/0.6；StealthDuration=1；CloneDuration=4；DashSpeed=900；RangeClamp=300；MinRange=100；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "腾云突击",
        "description": "孙悟空突进至一名目标敌人处，并放出幻象来攻击他目标附近的敌人，同时对每个被击中的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingNimbus.png",
        "cooldown": "10/9.25/8.5/7.75/7",
        "cost": "30/35/40/45/50",
        "range": "650",
        "numericDetail": "技能文本：孙悟空突进至目标敌人处，并放出多个分身来对附近的至多2个额外敌人进行模拟突进。每个被击中的敌人会受到[BaseDamage] 80/120/160/200/240 + 1 × 法术强度魔法伤害。他和他的分身获得持续5秒的40/45/50/55/60%攻击速度。。基础参数：冷却=10/9.25/8.5/7.75/7；消耗=30/35/40/45/50；范围=650。客户端字段：BaseDamage=80/120/160/200/240；AttackSpeed=0.4/0.45/0.5/0.55/0.6；AttackSpeedDuration=5；DashSpeed=1050；EndPointOffsetDistance=75；ExtraTargets=2；ExtraTargetRange=700；MonsterDamageRatio=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/120/160/200/240 + 1 × 法术强度；TotalDamageMonsters=([BaseDamage] 80/120/160/200/240 + 1 × 法术强度) × [MonsterDamageRatio] 1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/monkeyking/monkeyking.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MonkeyKing.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "大闹天宫",
        "description": "孙悟空伸展金箍棒不断旋转，并获得移动速度。 击中敌人时会造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingSpinToWin.png",
        "cooldown": "130/110/90",
        "cost": "100",
        "range": "315",
        "numericDetail": "技能文本：孙悟空获得20%移动速度并旋转他的金箍棒，击飞 附近的敌人0.6秒并在2秒里持续造成共([ADRatioPerSecond] 1.375 × 攻击力) × [SpinDuration] 2加上 ([BasePercentMaxHPDmgPerSec] 0.04/0.06/0.08) × [SpinDuration] 2最大生命值的物理伤害。 这个技能可以在8秒里再施放一次，随后会进入冷却阶段。。基础参数：冷却=130/110/90；消耗=100；范围=315。客户端字段：KnockupDuration=0.6；SpinDuration=2；MoveSpeed=0.2；BasePercentMaxHPDmgPerSec=0.04/0.06/0.08；SecondsPerTick=0.25；RecastWindow=8；LockoutTimeBetweenCasts=1；ADRatioPerSecond=1.375；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamagePerSecondTotal=[ADRatioPerSecond] 1.375 × 攻击力；{26c20668}=[BasePercentMaxHPDmgPerSec] 0.04/0.06/0.08；MonsterCap=200（按英雄等级变化）；TotalDamageTT=([ADRatioPerSecond] 1.375 × 攻击力) × [SpinDuration] 2；PercentHPDamageTT=([BasePercentMaxHPDmgPerSec] 0.04/0.06/0.08) × [SpinDuration] 2；MonsterCapTT=(200（按英雄等级变化）) × [SpinDuration] 2",
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
        "description": "渐入佳音：娑娜在出色地使用她的技能时，会获得非终极技能的技能急速，直到达到上限为止。在达到上限之后，后续的成功使用将转而缩短她终极技能的冷却时间。 能量和弦：每施放若干次技能，娑娜的下次攻击将造成额外魔法伤害并基于最新激活的基础技能施加一个额外效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sona_Passive_Charged.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：渐入佳音：娑娜在出色地使用她的技能时，会获得非终极技能的技能急速，直到达到上限为止。在达到上限之后，后续的成功使用将转而缩短她终极技能的冷却时间。 能量和弦：每施放若干次技能，娑娜的下次攻击将造成额外魔法伤害并基于最新激活的基础技能施加一个额外效果。。客户端字段：TempoDuration=2；PowerChordPassiveCountMax=3；AccelerandoAHPerStack=0.5；AccelerandoCap=60；AccelerandoUltCDR=1.5。客户端公式：PowerChordDamage=20（初始每级 +10，按客户端断点变化） + 0.2 × 法术强度；AccelerandoAHCurrent=[AccelerandoAHPerStack] 0.5 × {1705b20f}层数",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "英勇赞美诗",
        "description": "娑娜弹奏英勇赞美诗，弹出音波，对附近的两名敌人造成魔法伤害，优先选取英雄和野怪为目标。娑娜会暂时获得一个光环，为附近友军的下一次攻击提供额外魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaQ.png",
        "cooldown": "8",
        "cost": "50/55/60/65/70",
        "range": "825",
        "numericDetail": "技能文本：娑娜对相距最近的2名敌人造成[BaseDamage] 50/85/120/155/190 + 0.4 × 法术强度魔法伤害，优先以英雄为目标。她随后会开始一段新的旋律。这个技能每对一名敌方英雄造成伤害就会获得1层渐入佳音。 旋律：娑娜获得一个持续3秒的光环，来使其中的友方英雄在5秒内的下一次攻击附带[BaseOnHitDamage] 10/15/20/25/30 + [OnHitRatio] 0.1 × 法术强度魔法伤害 。 能量和弦—断奏：【能量和弦】造成额外伤害 (30（初始每级 +15，按客户端断点变化） + 0.3 × 法术强度总魔法伤害)。。基础参数：冷却=8；消耗=50/55/60/65/70；范围=825。客户端字段：BaseDamage=50/85/120/155/190；BaseOnHitDamage=10/15/20/25/30；AuraRange=400；OnHitDuration=5；EnemiesToHit=2；AuraDuration=3；BaseGlobalCD=0.5；OnHitProcs=1；OnHitRatio=0.1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 50/85/120/155/190 + 0.4 × 法术强度；TotalOnHitDamage=[BaseOnHitDamage] 10/15/20/25/30 + [OnHitRatio] 0.1 × 法术强度；TotalStaccatoDamage=30（初始每级 +15，按客户端断点变化） + 0.3 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "坚毅咏叹调",
        "description": "娑娜弹奏坚毅咏叹调，弹出保护性的旋律，治疗娑娜和附近的一个受伤的友军。娑娜会暂时获得一个光环，为附近的友军提供一层护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaW.png",
        "cooldown": "10",
        "cost": "80/85/90/95/100",
        "range": "1000",
        "numericDetail": "技能文本：主动：娑娜为她自己和一名附近的友方英雄回复[BaseHeal] 30/45/60/75/90 + [HealRatio] 0.3 × 法术强度生命值，优先以伤势最重的英雄为目标。她随后会开始一段新的旋律。 旋律：娑娜获得一个持续3秒的光环，来为其中的友方英雄提供持续1.5秒的[BaseShield] 25/45/65/85/105 + [ShieldRatio] 0.25 × 法术强度护盾值。 每当你治疗了一名受伤的友方英雄，或用这个护盾为一名友方英雄格挡了至少25/45/65/85/105伤害时，都会获得一层渐入佳音。 能量和弦—渐弱：【能量和弦】也会使目标造成的物理和魔法伤害降低0.25 + 0.0004 × 法术强度，持续3秒。。基础参数：冷却=10；消耗=80/85/90/95/100；范围=1000。客户端字段：BaseHeal=30/45/60/75/90；BaseShield=25/45/65/85/105；AuraDuration=3；AuraRange=400；BaseGlobalCD=0.5；DiminuendoDuration=3；HealRange=1000；ShieldDuration=1.5；AccelerandoShieldBreakpoint=25/45/65/85/105；HealRatio=0.3；ShieldRatio=0.25；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHeal=[BaseHeal] 30/45/60/75/90 + [HealRatio] 0.3 × 法术强度；TotalShield=[BaseShield] 25/45/65/85/105 + [ShieldRatio] 0.25 × 法术强度；TotalDiminuendoWeakenPercent=0.25 + 0.0004 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "迅捷奏鸣曲",
        "description": "娑娜弹奏迅捷奏鸣曲，为她自己提供移动速度加成。娑娜会暂时获得一个光环，为进入区域的友方英雄提供移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaE.png",
        "cooldown": "14",
        "cost": "65",
        "range": "430",
        "numericDetail": "技能文本：主动：她开始一段新的旋律并为自身提供[SelfBaseMovementSpeed] 0.2 + 0.0002 × 法术强度移动速度，持续3秒，如果她未受到伤害则延长至最多7秒。 旋律：娑娜获得一个持续3秒的光环，来为其中的友方英雄提供[AllyBaseMovementSpeed] 0.1/0.12/0.14/0.16/0.18 + 0.0002 × 法术强度移动速度，持续3秒。 能量和弦—节奏：【能量和弦】还会对目标造成持续2秒的0.5 + 0.0004 × 法术强度的减速。。基础参数：冷却=14；消耗=65；范围=430。客户端字段：SelfBaseMovementSpeed=0.2；AllyBaseMovementSpeed=0.1/0.12/0.14/0.16/0.18；SelfMovementSpeedDurationMin=3；SelfMovementSpeedDurationMax=7；AllyMovementSpeedDuration=3；AuraRange=400；AuraDuration=3；BaseGlobalCD=0.5；TempoDuration=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalSelfMovementSpeed=[SelfBaseMovementSpeed] 0.2 + 0.0002 × 法术强度；TotalAllyMovementSpeed=[AllyBaseMovementSpeed] 0.1/0.12/0.14/0.16/0.18 + 0.0002 × 法术强度；TotalTempoMoveSpeedSlow=0.5 + 0.0004 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sona/sona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "狂舞终乐章",
        "description": "娑娜弹奏她的终极和弦，对敌方英雄造成魔法伤害，并晕眩他们，强制他们开始跳舞。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaR.png",
        "cooldown": "140/120/100",
        "cost": "100",
        "range": "900",
        "numericDetail": "技能文本：娑娜弹出一段不可抗拒的音符，对敌人造成1.5秒晕眩和[BaseDamage] 150/250/350 + 0.5 × 法术强度魔法伤害。。基础参数：冷却=140/120/100；消耗=100；范围=900。客户端字段：BaseDamage=150/250/350；StunDuration=1.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 150/250/350 + 0.5 × 法术强度",
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
        "description": "墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害，若数秒内墨菲特未受到攻击，护盾将重置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Malphite_GraniteShield.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害，若数秒内墨菲特未受到攻击，护盾将重置。。客户端公式：PassiveCooldown=8（按英雄等级变化）；TotalShield=0.1 × 最大生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "地震碎片",
        "description": "墨菲特发出一块大地碎片穿过他敌人处的地面，在碰撞时造成伤害并且偷取移动速度3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SeismicShard.png",
        "cooldown": "8",
        "cost": "70/75/80/85/90",
        "range": "625",
        "numericDetail": "技能文本：墨菲特朝一名敌人发出一块大地碎片，造成[BaseDamage] 70/120/170/220/270 + 0.6 × 法术强度魔法伤害和持续3秒的20/25/30/35/40%减速。墨菲特还会窃取该被减速的数额，从而将它作为持续3秒的移动速度。。基础参数：冷却=8；消耗=70/75/80/85/90；范围=625。客户端字段：SpeedSteal=20/25/30/35/40；SlowDuration=3；BaseDamage=70/120/170/220/270；effect1amount=70/120/170/220/270；effect2amount=20/25/30/35/40；effect3amount=3；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：QDamageCalc=[BaseDamage] 70/120/170/220/270 + 0.6 × 法术强度",
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
        "numericDetail": "技能文本：墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。。基础参数：冷却=10/9.5/9/8.5/8；消耗=30/35/40/45/50；范围=400。客户端字段：ThunderclapBuffDuration=5；ThunderclapBaseDamage=30/40/50/60/70；ThunderclapSlowDamage=2；ThunderclapSplashAP=0.3；ThunderclapSplashArmor=0.15；ThunderclapBaseDamageAPRatio=0.2；ThunderclapBaseDamageArmorRatio=0.15；ThunderclapSplashDamage=15/25/35/45/55；BonusArmorPassive=0.1/0.15/0.2/0.25/0.3；BonusArmorPassiveMultiplier=3；ThunderClapSplashRange=400；MonsterDamageMod=1.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalBonusDamage=[ThunderclapBaseDamage] 30/40/50/60/70 + [ThunderclapBaseDamageAPRatio] 0.2 × 法术强度 + [ThunderclapBaseDamageArmorRatio] 0.15 × 护甲；{185669f9}=([ThunderclapBaseDamage] 30/40/50/60/70 + [ThunderclapBaseDamageAPRatio] 0.2 × 法术强度 + [ThunderclapBaseDamageArmorRatio] 0.15 × 护甲) × [ThunderclapSlowDamage] 2；ThunderclapSplash=[ThunderclapSplashDamage] 15/25/35/45/55 + [ThunderclapSplashAP] 0.3 × 法术强度 + [ThunderclapSplashArmor] 0.15 × 护甲；{71941255}=客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "E",
        "name": "大地震颤",
        "description": "墨菲特锤击地面，放射出冲击波对目标造成基于他护甲值的魔法伤害，同时暂时降低目标攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Landslide.png",
        "cooldown": "7",
        "cost": "50/55/60/65/70",
        "range": "400",
        "numericDetail": "技能文本：墨菲特锤击地面，对周围敌人造成[BaseDamage] 60/95/130/165/200 + 0.4 × 护甲 + 0.6 × 法术强度魔法伤害并减少他们30/35/40/45/50%攻击速度，持续3秒。。基础参数：冷却=7；消耗=50/55/60/65/70；范围=400。客户端字段：BaseDamage=60/95/130/165/200；ASReduction=30/35/40/45/50；Duration=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：EDamageCalc=[BaseDamage] 60/95/130/165/200 + 0.4 × 护甲 + 0.6 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malphite/malphite.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malphite.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "势不可挡",
        "description": "墨菲特自身高速冲向一个区域，对区域内的敌人们造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/UFSlash.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "1000",
        "numericDetail": "技能文本：墨菲特携着山崩之力冲锋，进行不可阻挡的突进。在突进结束时，墨菲特会击飞1.5秒并造成[BaseDamage] 200/300/400 + 0.9 × 法术强度魔法伤害。。基础参数：冷却=130/115/100；消耗=100；范围=1000。客户端字段：BaseDamage=200/300/400；KnockupDuration=1.5；effect1amount=1.5/1.75/2；effect2amount=200/300/400；effect3amount=1.5；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 200/300/400 + 0.9 × 法术强度",
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
        "description": "内瑟斯吸取敌人的生命能量，从而获得生命偷取加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Nasus_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：内瑟斯吸取敌人的生命能量，从而获得生命偷取加成。。客户端公式：LifestealTooltip=12（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "汲魂痛击",
        "description": "内瑟斯对敌人施放汲魂痛击造成伤害，如果敌人死于汲魂痛击，则永久增加下次汲魂痛击的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusQ.png",
        "cooldown": "7.5/6.5/5.5/4.5/3.5",
        "cost": "20",
        "range": "255",
        "numericDetail": "技能文本：内瑟斯对敌人施放汲魂痛击造成伤害，如果敌人死于汲魂痛击，则永久增加下次汲魂痛击的伤害。。基础参数：冷却=7.5/6.5/5.5/4.5/3.5；消耗=20；范围=255。客户端字段：BonusRange=50；BonusDamage=40/60/80/100/120；BasicStacks=3；BigStacks=12；BuffDuration=10；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BonusDamage] 40/60/80/100/120 + 1 × 攻击力 + 1 × {1b1d7345}层数；CritDamage=客户端公式 ProductOfSubPartsCalculationPart + 1 × {1b1d7345}层数",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "枯萎",
        "description": "内瑟斯使一名敌方英雄衰老，持续减少其移动速度和攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "80",
        "range": "700",
        "numericDetail": "技能文本：内瑟斯使一名英雄衰老，使其减速35%，并在5秒内持续提升至47/59/71/83/95%。目标的攻击速度也会降低，相当于该减速幅度的75%。。基础参数：冷却=15/14/13/12/11；消耗=80；范围=700。客户端字段：SlowBase=35；SlowPerTick=3/6/9/12/15；MaxSlowTooltipOnly=47/59/71/83/95；AttackSpeedSlowMult=0.75；Duration=5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "灵魂烈焰",
        "description": "内瑟斯在目标区域施放灵魂烈焰，伤害并削弱敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusE.png",
        "cooldown": "12",
        "cost": "60/70/80/90/100",
        "range": "650",
        "numericDetail": "技能文本：内瑟斯引发一团灵魂烈焰，造成[InitialHitDamage] 50/80/110/140/170 + 0.6 × 法术强度魔法伤害。区域内的敌人们会失去30/35/40/45/50%护甲并在5秒里持续受到共([DamagePerTick] 10/16/22/28/34 + 0.12 × 法术强度) × [Duration] 5魔法伤害。。基础参数：冷却=12；消耗=60/70/80/90/100；范围=650。客户端字段：DamagePerTick=10/16/22/28/34；ArmorShredPercent=-0.3/-0.35/-0.4/-0.45/-0.5；Duration=5；InitialHitDamage=50/80/110/140/170；effect1amount=10/16/22/28/34；effect2amount=-0.3/-0.35/-0.4/-0.45/-0.5；effect3amount=5；effect4amount=50/80/110/140/170；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDotDamage=([DamagePerTick] 10/16/22/28/34 + 0.12 × 法术强度) × [Duration] 5；InitialDamage=[InitialHitDamage] 50/80/110/140/170 + 0.6 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nasus/nasus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nasus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "死神降临",
        "description": "内瑟斯释放一个具有强大魔力的沙漠风暴来侵袭身边的敌人。当风暴肆虐期间，他会获得额外生命值、额外攻击距离，伤害附近的敌人，汲魂痛击会拥有较短冷却时间，并获得额外的护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "400",
        "numericDetail": "技能文本：沙漠风暴赐予内瑟斯力量，使他在15秒的持续时间内获得300/450/600最大生命值，以及40/55/70护甲与魔法抗性。 在风暴肆虐时，他每秒对周围目标造成[AOEDamagePercent] 0.03/0.04/0.05 + 0.0001 × 法术强度最大生命值的魔法伤害，并且汲魂痛击的冷却时间缩短50%。。基础参数：冷却=120/100/80；消耗=100；范围=400。客户端字段：BonusHealth=300/450/600；AttackRangeIncrease=50；AOEDamagePercent=0.03/0.04/0.05；TickRate=0.5；InitialResistGain=40/55/70；MaxDamageCap=240；Duration=15；QCDR=0.5；SizeIncreasePercent=0.3/0.35/0.4；BaseAoERadius=376；MinAoERadius=400；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=[AOEDamagePercent] 0.03/0.04/0.05 + 0.0001 × 法术强度",
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
        "description": "阿木木的普通攻击会诅咒他的敌人，使敌人会从即将到来的魔法伤害中承受额外真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Amumu_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：阿木木的普通攻击会诅咒他的敌人，使敌人会从即将到来的魔法伤害中承受额外真实伤害。。客户端字段：DebuffDuration=3；DamageAmp=0.1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "绷带牵引",
        "description": "阿木木向目标投掷粘稠的绷带，将自己拉向目标，并对目标造成伤害和眩晕效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BandageToss.png",
        "cooldown": "3",
        "cost": "50",
        "range": "1100",
        "numericDetail": "技能文本：阿木木掷出一条绷带，然后将他拉向命中的第一个敌人，使其晕眩1秒，并造成[BaseDamage] 70/95/120/145/170 + 0.85 × 法术强度魔法伤害。 这个技能有2层充能。。基础参数：冷却=3；消耗=50；范围=1100。客户端字段：BaseDamage=70/95/120/145/170；StunDuration=1；DashSpeed=1800；effect1amount=70/95/120/145/170；effect2amount=1；effect3amount=1800；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/95/120/145/170 + 0.85 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "绝望光环",
        "description": "附近的敌人陷入绝望，每秒损失一定百分比的最大生命值并刷新身上的诅咒效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AuraofDespair.png",
        "cooldown": "1",
        "cost": "8",
        "range": "300",
        "numericDetail": "技能文本：开启：阿木木开始哭泣，每秒对附近的敌人们造成10外加[HealthDamage] 1/1.25/1.5/1.75/2 + [APRatio] 0.005 × 法术强度%最大生命值的魔法伤害并刷新诅咒。。基础参数：冷却=1；消耗=8；范围=300。客户端字段：BaseDamage=10；HealthDamage=1/1.25/1.5/1.75/2；APRatio=0.005；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：{c8e45bc3}=([BaseDamage] 10) × 0.5；TotalHealthDamage=[HealthDamage] 1/1.25/1.5/1.75/2 + [APRatio] 0.005 × 法术强度；{8a96509c}=([HealthDamage] 1/1.25/1.5/1.75/2 + [APRatio] 0.005 × 法术强度) × 0.005",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "阿木木的愤怒",
        "description": "永久减少阿木木所受的物理伤害。主动施放时，阿木木可以发泄他的怒火，对周围的敌人造成伤害。阿木木每被攻击一次，该技能的冷却时间就会缩短。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Tantrum.png",
        "cooldown": "9/8/7/6/5",
        "cost": "35",
        "range": "350",
        "numericDetail": "技能文本：被动：阿木木受到的物理伤害降低[BaseDamageReduction] 5/7/9/11/13 + 0.03 × 额外护甲 + 0.03 × 额外魔法抗性。此外，当阿木木被一次攻击命中时，这个技能的冷却时间会缩短0.75秒。 主动：阿木木大发脾气，对附近的敌人们造成[BaseDamage] 65/95/125/155/185 + 0.5 × 法术强度魔法伤害。。基础参数：冷却=9/8/7/6/5；消耗=35；范围=350。客户端字段：FlatDamageReductionMax=0.5；BaseDamage=65/95/125/155/185；BaseDamageReduction=5/7/9/11/13；CDROnHit=0.75；PassiveScaling=0.03；effect1amount=5/7/9/11/13；effect2amount=65/95/125/155/185；effect3amount=0.75；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0.03；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageReduction=[BaseDamageReduction] 5/7/9/11/13 + 0.03 × 额外护甲 + 0.03 × 额外魔法抗性；TantrumDamage=[BaseDamage] 65/95/125/155/185 + 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/amumu/amumu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Amumu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "木乃伊之咒",
        "description": "阿木木用绷带将附近敌方单位通通缠住，对他们施加诅咒效果，并造成伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CurseoftheSadMummy.png",
        "cooldown": "150/125/100",
        "cost": "100/150/200",
        "range": "550",
        "numericDetail": "技能文本：阿木木用绷带将周围敌方单位通通缠住，将其晕眩1.5秒，造成[RDamage] 200/300/400 + [RCoefficient] 0.8 × 法术强度魔法伤害并施加诅咒效果。。基础参数：冷却=150/125/100；消耗=100/150/200；范围=550。客户端字段：RDamage=200/300/400；RDuration=1.5；RCoefficient=0.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：RCalculatedDamage=[RDamage] 200/300/400 + [RCoefficient] 0.8 × 法术强度",
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
        "description": "在对一个新目标进行普攻时，厄运小姐会造成额外物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MissFortune_W.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在对一个新目标进行普攻时，厄运小姐会造成额外物理伤害。。客户端公式：TotalDamage=0.5（按英雄等级变化） × 攻击力；MinionDamage=(0.5（按英雄等级变化） × 攻击力) × 0.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "一箭双雕",
        "description": "厄运小姐向敌人发射子弹，伤害他们以及他们后面的目标。两次攻击都可以施加【厄运的眷顾】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneRicochetShot.png",
        "cooldown": "7/6/5/4/3",
        "cost": "40",
        "range": "650",
        "numericDetail": "技能文本：厄运小姐向敌人发射子弹，伤害他们以及他们后面的目标。两次攻击都可以施加【厄运的眷顾】。。基础参数：冷却=7/6/5/4/3；消耗=40；范围=650。客户端字段：BaseDamage=20/45/70/95/120；ADRatio=1；APRatio=0.35；BounceCriticalMod=0.5；effect1amount=0；effect2amount=20/45/70/95/120；effect3amount=0；effect4amount=0；effect5amount=40；effect6amount=20；effect7amount=40；effect8amount=110；effect9amount=160；effect10amount=0。客户端公式：TotalDamageTooltip=[BaseDamage] 20/45/70/95/120 + [ADRatio] 1 × 攻击力 + [APRatio] 0.35 × 法术强度；TotalDamageCrit=([BaseDamage] 20/45/70/95/120 + [ADRatio] 1 × 攻击力 + [APRatio] 0.35 × 法术强度) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)；{5a1fd353}=1 × 客户端未命名属性（枚举 9）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart",
          "未命名属性枚举 9"
        ]
      },
      {
        "key": "W",
        "name": "大步流星",
        "description": "厄运小姐在不被攻击时会被动获得移动速度加成。可以主动施放这个技能来获得短时间的攻击速度加成。在【大步流星】尚未冷却完毕时，【厄运的眷顾】可减少【大步流星】的剩余持续时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneViciousStrikes.png",
        "cooldown": "12",
        "cost": "45",
        "range": "600",
        "numericDetail": "技能文本：厄运小姐在不被攻击时会被动获得移动速度加成。可以主动施放这个技能来获得短时间的攻击速度加成。在【大步流星】尚未冷却完毕时，【厄运的眷顾】可减少【大步流星】的剩余持续时间。。基础参数：冷却=12；消耗=45；范围=600。客户端字段：PassiveBaseMS=30/35/40/45/50；PassiveMaxMS=60/70/80/90/100；LoveTapBaseRefund=2；ActiveAS=0.4/0.55/0.7/0.85/1；ActiveDuration=4；PassiveBaseMSOOC=4；PassiveMaxMSExtraOOC=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：LoveTapRefund=([LoveTapBaseRefund] 2) × 客户端公式 CooldownMultiplierCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 CooldownMultiplierCalculationPart"
        ]
      },
      {
        "key": "E",
        "name": "枪林弹雨",
        "description": "厄运小姐发射一阵弹雨来获得目标区域的视野，对敌人造成几波伤害，并减缓他们的移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneScattershot.png",
        "cooldown": "18/17/16/15/14",
        "cost": "80",
        "range": "1000",
        "numericDetail": "技能文本：厄运小姐发射一阵弹雨，来显形一个区域，造成[BaseSlowAmount] 0.4 + [SlowPer100AP] 0.0006 × 法术强度减速和每秒[BaseDamagePerSecond] 35/50/65/80/95 + [APRatioPerSecond] 0.6 × 法术强度魔法伤害，持续2秒(总共([BaseDamagePerSecond] 35/50/65/80/95 + [APRatioPerSecond] 0.6 × 法术强度) × [BaseDuration] 2魔法伤害)。。基础参数：冷却=18/17/16/15/14；消耗=80；范围=1000。客户端字段：BaseDamagePerSecond=35/50/65/80/95；BaseDuration=2；BaseSlowAmount=0.4；APRatioPerSecond=0.6；TicksPerSecond=4；CastDelay=0.25；SlowPer100AP=0.0006；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamagePerSecond=[BaseDamagePerSecond] 35/50/65/80/95 + [APRatioPerSecond] 0.6 × 法术强度；TotalSlowAmount=[BaseSlowAmount] 0.4 + [SlowPer100AP] 0.0006 × 法术强度；TotalDamage=([BaseDamagePerSecond] 35/50/65/80/95 + [APRatioPerSecond] 0.6 × 法术强度) × [BaseDuration] 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "弹幕时间",
        "description": "厄运小姐向她面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。这个技能的每波子弹都可以暴击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneBulletTime.png",
        "cooldown": "120/110/100",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：厄运小姐向她面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。这个技能的每波子弹都可以暴击。。基础参数：冷却=120/110/100；消耗=100；范围=25000。客户端字段：BaseWaves=14/16/18；BaseDamage=20/30/40；tADRatio=0.6；APRatio=0.25；CritDamageMultiplier=0.3；BaseChannelDuration=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：PhysicalDamagePerWave=[BaseDamage] 20/30/40 + [tADRatio] 0.6 × 攻击力 + [APRatio] 0.25 × 法术强度；CritDamagePerWave=([BaseDamage] 20/30/40 + [tADRatio] 0.6 × 攻击力 + [APRatio] 0.25 × 法术强度) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)；TotalPhysicalDamage=([BaseDamage] 20/30/40 + [tADRatio] 0.6 × 攻击力 + [APRatio] 0.25 × 法术强度) × [BaseWaves] 14/16/18",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/missfortune/missfortune.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MissFortune.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
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
        "description": "在死后4秒，克格莫会爆炸，对周围的敌人造成真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/KogMaw_IcathianSurprise.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在死后4秒，克格莫会爆炸，对周围的敌人造成真实伤害。。客户端字段：TooltipPassiveMS=0.5；TooltipPassiveDuration=4。客户端公式：PassiveDamage=140–650（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "腐蚀唾液",
        "description": "克格莫发射一团腐蚀性物质，对目标造成魔法伤害，并暂时腐蚀目标的护甲和魔法抗性。克格莫还会获得额外攻速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawQ.png",
        "cooldown": "7",
        "cost": "40",
        "range": "1175",
        "numericDetail": "技能文本：被动：克格莫获得5/10/15/20/25%攻击速度。 主动：克格莫抛射出一团腐蚀性的唾沫，对命中的第一个敌人造成[BaseDamage] 80/125/170/215/260 + [APRatio] 0.9 × 法术强度魔法伤害，以及持续4秒的16/20/24/28/32%护甲和魔法抗性击碎。。基础参数：冷却=7；消耗=40；范围=1175。客户端字段：AttackSpeed=0.05/0.1/0.15/0.2/0.25；BaseDamage=80/125/170/215/260；APRatio=0.9；ShredAmount=16/20/24/28/32；ShredDuration=4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=1；effect6amount=1；effect7amount=100；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/125/170/215/260 + [APRatio] 0.9 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "生化弹幕",
        "description": "克格莫的攻击获得额外距离，并且能够对目标造成额外的魔法伤害，伤害值基于目标的最大生命值 攻击特效。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawBioArcaneBarrage.png",
        "cooldown": "17",
        "cost": "40",
        "range": "530",
        "numericDetail": "技能文本：克格莫获得130/150/170/190/210攻击距离，并且他的攻击附带额外的([MaxHealthDamage] 3/3.75/4.5/5.25/6 + [APRatio] 0.015 × 法术强度) × 0.01最大生命值的魔法伤害 攻击特效，持续8秒。。基础参数：冷却=17；消耗=40；范围=530。客户端字段：MaxHealthDamage=3/3.75/4.5/5.25/6；APRatio=0.015；Range=130/150/170/190/210；Duration=8；MonsterDamageCap=100；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHealthDamage=([MaxHealthDamage] 3/3.75/4.5/5.25/6 + [APRatio] 0.015 × 法术强度) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "虚空淤泥",
        "description": "克格莫抛射出一团特殊的分泌物，对经过或停留在分泌物上的敌人造成伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawVoidOoze.png",
        "cooldown": "12",
        "cost": "40/55/70/85/100",
        "range": "1200",
        "numericDetail": "技能文本：克格莫呕出胆汁，造成[BaseDamage] 70/110/150/190/230 + [APRatio] 0.65 × 法术强度魔法伤害并留下一条持续3秒的软泥路径。软泥中的敌人们会被减速40/45/50/55/60%。。基础参数：冷却=12；消耗=40/55/70/85/100；范围=1200。客户端字段：BaseDamage=70/110/150/190/230；APRatio=0.65；SlowAmount=40/45/50/55/60；TrailDuration=3；SlowDuration=0.25；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/110/150/190/230 + [APRatio] 0.65 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kogmaw/kogmaw.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/KogMaw.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "活体大炮",
        "description": "克格莫发射一枚射程极远的活体炮弹，让被命中的敌人暴露在己方视野中，并对目标造成魔法伤害（对低血量目标的伤害会显著提升）。 在短时间内连续使用活体大炮，将消耗额外的法力值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawLivingArtillery.png",
        "cooldown": "2/1.5/1",
        "cost": "40",
        "range": "1300/1550/1800",
        "numericDetail": "技能文本：克格莫朝一个区域发射一团酸液，造成[Damage] 100/140/180 + [APRatio] 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力外加0.8333%每1%已损失生命值的魔法伤害并使命中的敌人显形2秒。低于40%生命值的敌人们会转而受到([Damage] 100/140/180 + [APRatio] 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力) × [FinalDamageMult] 2魔法伤害。 8秒内的后续发射会消耗额外的40法力(最大值：400法力)。。基础参数：冷却=2/1.5/1；消耗=40；范围=1300/1550/1800。客户端字段：Damage=100/140/180；ManaCostDuration=8；Range=130/155/180；BaseCost=40；ManaCostCap=400；VisionDebuffDuration=2；FinalDamageMult=2；MaxExtraCost=360；VisionRadius=400；MidDamageMult=1.5；TooltipMissingHealthDamageAmp=0.8333；APRatio=0.35/0.4/0.45；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BaseDamageCalc=[Damage] 100/140/180 + [APRatio] 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力；MidDamageCalc=([Damage] 100/140/180 + [APRatio] 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力) × [MidDamageMult] 1.5；MaxDamageCalc=([Damage] 100/140/180 + [APRatio] 0.35/0.4/0.45 × 法术强度 + 0.75 × 额外攻击力) × [FinalDamageMult] 2",
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
        "description": "凯尔的攻击会随着她提升等级和分配技能点而获得增强。她的羽翼将燃起圣焰，逐步提供攻击速度，移动速度，攻击距离，以及攻击附带焰浪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Kayle_P.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：凯尔的攻击会随着她提升等级和分配技能点而获得增强。她的羽翼将燃起圣焰，逐步提供攻击速度，移动速度，攻击距离，以及攻击附带焰浪。。客户端字段：LevelForPassiveRank0=1；LevelForPassiveRank1=6；LevelForPassiveRank2=11；LevelForPassiveRank3=16；UpgradedAttackRange=525；FinalAttackRange=625；MSTowardsEnemy=0.1；MSTowardsEnemyRadius=2000；EnrageMaxStacks=5；EnrageDuration=5；EnrageASPerStack=6；PassiveWaveAPRatio=0.25；PassiveWaveBonusADRatio=0.1。客户端公式：EnrageTotalASPerStack=[EnrageASPerStack] 6；PassiveWaveDamage=20（按英雄等级变化） + [PassiveWaveAPRatio] 0.25 × 法术强度 + [PassiveWaveBonusADRatio] 0.1 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "耀焰冲击",
        "description": "凯尔召出一个传送门，召唤出一把星界之剑来刺穿敌人，对命中的所有敌人造成减速、伤害和防御属性击碎效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleQ.png",
        "cooldown": "12/11/10/9/8",
        "cost": "60/70/80/90/100",
        "range": "900",
        "numericDetail": "技能文本：凯尔发射一把星界之剑，它会停留在命中的第一个敌人身上，造成[Damage] 60/90/120/150/180 + 0.5 × 法术强度 + 0.6 × 额外攻击力魔法伤害，持续2秒的25/30/35/40/45%减速，并移除目标及其后方敌人们的15%护甲和魔法抗性，持续4秒。。基础参数：冷却=12/11/10/9/8；消耗=60/70/80/90/100；范围=900。客户端字段：ManaRefundPercent=0.5；CastDelay=0.25；Damage=60/90/120/150/180；SlowPercent=25/30/35/40/45；SlowDuration=2；ShredPercent=15；ShredDuration=4；ExplosionLeftRightDist=150；ExplosionLeftRightWidth=125；ExplosionForwardDist=400；ExplosionBackwardDist=100；ExplosionForwardBackWidth=90；ExplosionCenterAoERadius=100；ExplosionForwardOffset=100；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 60/90/120/150/180 + 0.5 × 法术强度 + 0.6 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "星界恩典",
        "description": "通过神圣的赐福，凯尔为自己和距她最近的友方英雄提供治疗和移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleW.png",
        "cooldown": "15",
        "cost": "70/75/80/85/90",
        "range": "900",
        "numericDetail": "技能文本：凯尔为她自身和一名友方英雄灌注圣光，回复[Heal] 55/80/105/130/155 + 0.25 × 法术强度生命值并提供持续2秒的[Haste] 0.24/0.28/0.32/0.36/0.4 + 0.0008 × 法术强度移动速度。。基础参数：冷却=15；消耗=70/75/80/85/90；范围=900。客户端字段：Heal=55/80/105/130/155；Haste=0.24/0.28/0.32/0.36/0.4；HasteDuration=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHeal=[Heal] 55/80/105/130/155 + 0.25 × 法术强度；TotalHaste=[Haste] 0.24/0.28/0.32/0.36/0.4 + 0.0008 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "星火符刃",
        "description": "被动：凯尔的星界之剑，“美德”，会对她在攻击的敌人造成额外伤害。 主动：凯尔的下次攻击将用星火重击她的目标，基于敌人的已损失生命值造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleE.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "0",
        "range": "550",
        "numericDetail": "技能文本：被动：凯尔的星界之剑，“美德”，会对她在攻击的敌人造成额外伤害。 主动：凯尔的下次攻击将用星火重击她的目标，基于敌人的已损失生命值造成额外伤害。。基础参数：冷却=8/7.5/7/6.5/6；消耗=0；范围=550。客户端字段：PassiveDamage=15/20/25/30/35；ActiveExecutePercent=8/8.5/9/9.5/10；MaxExecuteVsMonsters=400；ExplosionRadius=350；BuffDuration=5；PassiveAPRatio=0.2；PassiveBonusADRatio=0.1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：{266027bf}=1 × 攻击力；EPassiveTotalDamage=[PassiveDamage] 15/20/25/30/35 + [PassiveAPRatio] 0.2 × 法术强度 + [PassiveBonusADRatio] 0.1 × 额外攻击力；ActiveTotalExecuteDamage=([ActiveExecutePercent] 8/8.5/9/9.5/10 + 0.015 × 法术强度) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kayle/kayle.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kayle.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "圣裁之刻",
        "description": "凯尔让一名友方英雄免疫伤害，并号召曾经的正义星灵们用一阵神圣剑雨来纯化她目标附近的区域。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleR.png",
        "cooldown": "160/120/80",
        "cost": "100/50/0",
        "range": "900",
        "numericDetail": "技能文本：凯尔令一名友方英雄免疫伤害2.5秒，随后会净化该英雄身边的区域并造成[Damage] 200/300/400 + 0.7 × 法术强度 + 1 × 额外攻击力魔法伤害给附近的敌人们。。基础参数：冷却=160/120/80；消耗=100/50/0；范围=900。客户端字段：Damage=200/300/400；InvulnDuration=2.5；AoERadius=675/675/775；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[Damage] 200/300/400 + 0.7 × 法术强度 + 1 × 额外攻击力",
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
        "range": null,
        "numericDetail": "技能文本：基兰将时光储存为经验值并能将其提供给他的友军。当他拥有足够的经验值来使一名友方英雄升级时，他就能通过右键点击来传授经验值。基兰自身也会获得等值的经验值。。客户端字段：PassiveCooldown=120；GamemodeInteger=1。客户端公式：{e359ec0d}=0.8（按英雄等级变化）；TotalXP=1 × {79ba1a32}层数；XPPer5=(0.8（按英雄等级变化）) × 2.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "定时炸弹",
        "description": "将一颗炸弹扔向目标区域，炸弹会附着在靠近它的单位身上（英雄优先）。炸弹会在3秒后爆炸，造成范围魔法伤害。如果炸弹被另一颗定时炸弹给提前引爆，那么还会使敌人晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ZileanQ.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "900",
        "numericDetail": "技能文本：基兰在目标地点上投掷一个定时炸弹。炸弹会附着在第一个靠近它周围小范围内的单位身上。3秒后炸弹会爆炸，造成[BombBaseDamage] 75/115/165/230/300 + [APRatio] 0.9 × 法术强度 魔法伤害。 对已被附着了一颗炸弹的单位放置第二颗炸弹时，就会立刻引爆第一个炸弹，并使爆炸范围内的所有敌人晕眩1.1/1.2/1.3/1.4/1.5秒。。基础参数：冷却=10/9.5/9/8.5/8；消耗=60/65/70/75/80；范围=900。客户端字段：BombBaseDamage=75/115/165/230/300；APRatio=0.9；StunDuration=1.1/1.2/1.3/1.4/1.5；FuseDuration=3；effect1amount=75/115/165/230/300；effect2amount=3；effect3amount=7；effect4amount=1.1/1.2/1.3/1.4/1.5；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BombBaseDamage] 75/115/165/230/300 + [APRatio] 0.9 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "穿梭未来",
        "description": "基兰为未来的对抗做准备，减少他所有其它基础技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ZileanW.png",
        "cooldown": "14/12/10/8/6",
        "cost": "35",
        "range": "600",
        "numericDetail": "技能文本：基兰为未来的对抗做准备，减少他所有其它基础技能的冷却时间。。基础参数：冷却=14/12/10/8/6；消耗=35；范围=600。客户端字段：CooldownReduction=10；ManaCost=35；effect1amount=20/30/40/50/60；effect2amount=0；effect3amount=35；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "时光发条",
        "description": "基兰扭曲任意单位的时光，短时间内提升友方单位移动速度或减少敌方单位移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TimeWarp.png",
        "cooldown": "15",
        "cost": "50",
        "range": "550",
        "numericDetail": "技能文本：基兰使一名敌方英雄减速40/55/70/85/99%或为一名友方英雄提供40/55/70/85/99%移动速度，持续2.5秒。。基础参数：冷却=15；消耗=50；范围=550。客户端字段：Duration=2.5；SpeedAmount=40/55/70/85/99；effect1amount=2.5；effect2amount=40/55/70/85/99；effect3amount=1.5；effect4amount=8；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/zilean/zilean.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Zilean.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "时光倒流",
        "description": "基兰对友方英雄施放时光结界，若目标死亡，则时光倒流，救活目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ChronoShift.png",
        "cooldown": "120/90/60",
        "cost": "125/150/175",
        "range": "900",
        "numericDetail": "技能文本：基兰提供一个保护性的时间符文给一名友方英雄，持续5秒。如果该目标将要阵亡，那么符文会回溯其时间线，使其凝滞3秒，然后将其复活并回复[RBaseHeal] 600/850/1100 + [APRatio] 2 × 法术强度生命值。。基础参数：冷却=120/90/60；消耗=125/150/175；范围=900。客户端字段：RBaseHeal=600/850/1100；RDuration=5；APRatio=2；ReviveStateDuration=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：RTotalHeal=[RBaseHeal] 600/850/1100 + [APRatio] 2 × 法术强度",
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
        "description": "沃里克的普攻造成额外魔法伤害。如果沃里克的生命值低于50%，那么他会获得等额的治疗效果。如果他的生命值低于25%，则治疗效果提升至三倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/WarwickP.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：沃里克的普攻造成额外魔法伤害。如果沃里克的生命值低于50%，那么他会获得等额的治疗效果。如果他的生命值低于25%，则治疗效果提升至三倍。。客户端字段：HealingThreshold=0.5；EmpoweredHealingThreshold=0.25；HealingRatio=1；EmpoweredHealingRatio=2.5；HealthRestoreSlushTime=1.55；ADRatio=0.15；APRatio=0.1。客户端公式：OnHitDamage=6–55（1–18级） + [ADRatio] 0.15 × 额外攻击力 + [APRatio] 0.1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "野兽之口",
        "description": "沃里克向前猛扑并撕咬他的目标，造成基于目标最大生命值的伤害，并造成基于实际伤害值的治疗效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "80/85/90/95/100",
        "range": "365",
        "numericDetail": "技能文本：秒放：沃里克向前猛扑并撕咬，造成[ADRatio] 1.2 × 攻击力 + 1 × 法术强度外加6/7/8/9/10%最大生命值的魔法伤害和25/37.5/50/62.5/75%实际伤害值的治疗效果。 蓄力：沃里克猛扑并用它的狼嘴紧咬目标，并跃到目标身后。在紧咬目标时，沃里克会跟随目标的所有移动。在释放他的蓄力后，他会造成等额伤害和治疗效果。。基础参数：冷却=8/7.5/7/6.5/6；消耗=80/85/90/95/100；范围=365。客户端字段：TargetPercentHPDamage=6/7/8/9/10；ADRatio=1.2；BiteZoneLength=450；HPDamageCap=150/165/180/195/210；APRatio=1；LifestealPercent=25/37.5/50/62.5/75；CheatLength=200；CheatLengthMoveBlock=300；QCastRangeOverride=425；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BaseBiteDamage=[ADRatio] 1.2 × 攻击力 + 1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "鲜血追猎",
        "description": "沃里克感知生命值在50%以下的敌人，在朝着这些敌人移动时会获得移动速度加成，并在攻击这些敌人时会获得攻速加成。当这些敌人的生命值在25%以下时，他会狂暴并让这些加成提升至三倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickW.png",
        "cooldown": "80/70/60/50/40",
        "cost": "55",
        "range": "4000",
        "numericDetail": "技能文本：被动：沃里克可以感知生命值低于50%的英雄，朝着其移动时获得35/42.5/50/57.5/65%移动速度。对生命值低于50%的敌人施放技能和攻击可获得70/80/90/100/110%攻击速度。这些加成在对抗低于25%生命值的敌人们时会提升200%。 主动：沃里克可以暂时感知到所有敌人，并在对抗相距最近的那个英雄时获得这个技能的被动效果，持续8秒，无论该目标有多少生命值。如果没有感知到任何英雄，该技能的冷却时间缩短30%。。基础参数：冷却=80/70/60/50/40；消耗=55；范围=4000。客户端字段：PassiveASBonus=70/80/90/100/110；Duration=8；MoveSpeedBonus=15/20/25/30/35；PassiveMSBonus=35/42.5/50/57.5/65；NoTargetCDReduction=0.7；PassiveASDuration=1.25；FirstHPThreshold=0.5；SecondHPThreshold=0.25；MSBonus=35/42.5/50/57.5/65；ASBonus=70/80/90/100/110；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "远祖嗥叫",
        "description": "沃里克获得持续2.5秒的伤害减免效果。在效果结束时，或者重新激活技能时，沃里克会嗥叫，使附近的敌人因恐惧而逃跑1秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickE.png",
        "cooldown": "15/14/13/12/11",
        "cost": "40",
        "range": "375",
        "numericDetail": "技能文本：沃里克获得35/40/45/50/55%伤害减免，持续2.75秒。在它结束后，沃里克会发出嗥叫，恐惧附近的敌人1秒。沃里克可以再次施放来提前结束这个技能。。基础参数：冷却=15/14/13/12/11；消耗=40；范围=375。客户端字段：DRAmount=35/40/45/50/55；DRDuration=2.75；RecastDelay=1；FearDuration=1；DRDurationTooltipOnly=2.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/warwick/warwick.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Warwick.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "无尽束缚",
        "description": "沃里克朝一个方向跳跃（跳跃距离可从他的移动速度加成中获益），将他所碰撞到的第一个敌方英雄压制1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickR.png",
        "cooldown": "110/90/70",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：沃里克跳跃一大段距离(随他的移动速度增长)，并压制碰撞到的第一个敌方英雄1.5秒并且自身处在引导状态。在此期间他持续攻击该英雄3次，造成[RBaseDamage] 175/350/525 + 1.67 × 额外攻击力魔法伤害。沃里克在引导期间会获得100%实际伤害值的治疗效果。。基础参数：冷却=110/90/70；消耗=100；范围=25000。客户端字段：RDuration=1.5；RBaseDamage=175/350/525；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCumulative=[RBaseDamage] 175/350/525 + 1.67 × 额外攻击力",
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
        "description": "技能会在敌人身上施加【日光】效果，持续1.5秒。在此期间，蕾欧娜友军对这些目标造成伤害时，会触发【日光】，使目标受到额外的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LeonaSunlight.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：技能会在敌人身上施加【日光】效果，持续1.5秒。在此期间，蕾欧娜友军对这些目标造成伤害时，会触发【日光】，使目标受到额外的魔法伤害。。客户端字段：MarkDuration=2.5。客户端公式：TotalDamage=客户端公式 ByCharLevelFormulaCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ByCharLevelFormulaCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "破晓之盾",
        "description": "蕾欧娜用盾进行下次普通攻击，造成额外魔法伤害并晕眩目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaShieldOfDaybreak.png",
        "cooldown": "5",
        "cost": "30/35/40/45/50",
        "range": "100",
        "numericDetail": "技能文本：蕾欧娜的下次攻击会晕眩目标1秒，并造成额外的[BaseDamage] 10/35/60/85/110 + 0.3 × 法术强度魔法伤害。。基础参数：冷却=5；消耗=30/35/40/45/50；范围=100。客户端字段：StunDuration=1；BaseDamage=10/35/60/85/110；effect1amount=1；effect2amount=10/35/60/85/110；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTooltip=[BaseDamage] 10/35/60/85/110 + 0.3 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "日蚀",
        "description": "蕾欧娜举起盾牌，提供伤害减免、护甲和魔法抗性。当持续时间首次结束时，如果附近有敌人，那么她会对其造成魔法伤害并延长效果的持续时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaSolarBarrier.png",
        "cooldown": "14/13/12/11/10",
        "cost": "60",
        "range": "450",
        "numericDetail": "技能文本：蕾欧娜举起她的盾牌，使即将到来的伤害降低8/12/16/20/24并获得[ArmorBaseBonus] 20/27.5/35/42.5/50 + 0.2 × 额外护甲护甲和[ArmorBaseBonus] 20/27.5/35/42.5/50 + 0.2 × 额外魔法抗性魔法抗性，持续3秒。之后，她的盾牌会爆炸，对附近的敌人造成[ExplosionBaseDamage] 55/85/115/145/175 + [APRatio] 0.4 × 法术强度魔法伤害。如果她命中了至少一名敌人，那么她会将该护甲和魔法抗性加成延续额外的3秒。。基础参数：冷却=14/13/12/11/10；消耗=60；范围=450。客户端字段：FlatDamageReduction=8/12/16/20/24；FlatDamageReductionMax=0.5；APRatio=0.4；ExplosionBaseDamage=55/85/115/145/175；MRBaseBonus=20/27.5/35/42.5/50；ArmorBaseBonus=20/27.5/35/42.5/50；ArmorMRDuration=3；effect1amount=55/85/115/145/175；effect2amount=20/27.5/35/42.5/50；effect3amount=3；effect4amount=20/27.5/35/42.5/50；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BonusArmorTooltip=[ArmorBaseBonus] 20/27.5/35/42.5/50 + 0.2 × 额外护甲；BonusMRTooltip=[ArmorBaseBonus] 20/27.5/35/42.5/50 + 0.2 × 额外魔法抗性；TotalDamageTooltip=[ExplosionBaseDamage] 55/85/115/145/175 + [APRatio] 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "天顶之刃",
        "description": "蕾欧娜投掷一束日光，对直线上的所有敌人造成魔法伤害。当效果消失时，蕾欧娜会冲向最后一个被击中的敌人并使其无法移动。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaZenithBlade.png",
        "cooldown": "12/10.5/9/7.5/6",
        "cost": "40/45/50/55/60",
        "range": "875",
        "numericDetail": "技能文本：蕾欧娜用光明之剑进行猛刺，造成[BaseDamage] 50/90/130/170/210 + 0.4 × 法术强度魔法伤害。最后一个被命中的英雄将会被禁锢0.5秒，并且蕾欧娜将会冲向该英雄。。基础参数：冷却=12/10.5/9/7.5/6；消耗=40/45/50/55/60；范围=875。客户端字段：BaseDamage=50/90/130/170/210；RootDuration=0.5；effect1amount=50/90/130/170/210；effect2amount=0.5；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTooltip=[BaseDamage] 50/90/130/170/210 + 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/leona/leona.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Leona.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "日炎耀斑",
        "description": "蕾欧娜召唤一道太阳光束，对区域内的敌人造成伤害。区域中心的敌人会被晕眩，并且外围的敌人会被减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaSolarFlare.png",
        "cooldown": "90/75/60",
        "cost": "100",
        "range": "1200",
        "numericDetail": "技能文本：蕾欧娜召唤一道太阳光束，造成[ExplosionBaseDamage] 150/225/300 + [ExplosionAPRatio] 0.8 × 法术强度魔法伤害并使敌人减速80%，持续1.75秒。处于区域正中的敌人会受到晕眩效果而非减速效果。。基础参数：冷却=90/75/60；消耗=100；范围=1200。客户端字段：OnHitBaseDamage=30/40/50；OnHitStacks=3/4/5；OnHitDuration=5；AttackRangeIncrease=100；OnHitAPRatio=0.15；ExplosionBaseDamage=150/225/300；ExplosionAPRatio=0.8；SlowPercent=80；CCDuration=1.75；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=100；effect5amount=3；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：{f4c90e5c}=[OnHitBaseDamage] 30/40/50 + [OnHitAPRatio] 0.15 × 法术强度；ExplosionCalculatedDamage=[ExplosionBaseDamage] 150/225/300 + [ExplosionAPRatio] 0.8 × 法术强度",
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
        "description": "斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加战栗效果。在满层战栗时，敌人们会在其持续期间内受到最大生命值魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Skarner_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加战栗效果。在满层战栗时，敌人们会在其持续期间内受到最大生命值魔法伤害。。客户端字段：StacksToTriggerPassive=3；Duration=4；TickFrequency=0.5。客户端公式：PercentHealthDamage=(5–9（1–18级）) × 0.01；DamageMonsterCap=100–300（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "撼地 / 擎天",
        "description": "斯卡纳从地面掘出一块巨石来强化他的普攻，这块巨石可作为飞弹投掷。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerQ.png",
        "cooldown": "8/6.75/5.5/4.25/3",
        "cost": "30",
        "range": "400",
        "numericDetail": "技能文本：斯卡纳从地面掘出一块巨石，使他的下三次攻击拥有20/25/30/35/40%攻击速度并且对附近敌人们造成[BaseDamage] 10/20/30/40/50 + [ADRatio] 0.9 × 额外攻击力 + [BonusHealthRatio] 0.03 × 额外生命值物理伤害。 他的最后一次攻击将对被影响的敌人们造成额外的11%最大生命值物理伤害和持续1秒的40%减速。 再次施放：斯卡纳结束这个技能并扔出他的巨石，对命中的第一个敌人——及其周围的其它敌人们——造成[BaseDamage] 10/20/30/40/50 + [ADRatio] 0.9 × 额外攻击力 + [BonusHealthRatio] 0.03 × 额外生命值 + 11%最大生命值物理伤害和持续1秒的40%减速。。基础参数：冷却=8/6.75/5.5/4.25/3；消耗=30；范围=400。客户端字段：RockHoldDuration=5；AttackRadius=300；BaseDamage=10/20/30/40/50；MaxHPPercent=0.11；SlowDuration=1；SlowPercent=0.4；MonsterDamageCap=150/200/250/300/350；AttackRange=25；AttackSpeed=0.2/0.25/0.3/0.35/0.4；BonusHealthRatio=0.03；ADRatio=0.9；TurretDamageMod=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：AbilityDamage=[BaseDamage] 10/20/30/40/50 + [ADRatio] 0.9 × 额外攻击力 + [BonusHealthRatio] 0.03 × 额外生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "震地壁垒",
        "description": "斯卡纳获得一个护盾并生成一阵地震，地震的冲击波会伤害并减速敌人们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerW.png",
        "cooldown": "10/9/8/7/6",
        "cost": "60/65/70/75/80",
        "range": "700",
        "numericDetail": "技能文本：斯卡纳获得持续2.5秒的[InitialShieldRatio] 0.08 × 最大生命值护盾值并引发一阵地震，来对附近的敌人们造成[BaseDamage] 50/70/90/110/130 + [DamageAPRatio] 0.8 × 法术强度魔法伤害和持续1秒的20%减速。。基础参数：冷却=10/9/8/7/6；消耗=60/65/70/75/80；范围=700。客户端字段：BaseDamage=50/70/90/110/130；DamageAPRatio=0.8；InitialShieldRatio=0.08；ShieldDuration=2.5；SlowEffect=-0.2；SlowDuration=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：InitialShield=[InitialShieldRatio] 0.08 × 最大生命值；Damage=[BaseDamage] 50/70/90/110/130 + [DamageAPRatio] 0.8 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "以绪塔尔冲击",
        "description": "斯卡纳向前冲锋并穿过地形。如果他撞击到一个英雄或大型野怪，则可将其猛推到他命中的下一个墙体上，造成伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerE.png",
        "cooldown": "22/21/20/19/18",
        "cost": "50/55/60/65/70",
        "range": "1700",
        "numericDetail": "技能文本：斯卡纳向前冲锋，朝着所选方向行驶并无视地形。如果斯卡纳碰上了一个英雄或大型野怪，那么他会在冲锋的剩余期间对其进行拖拽。 拖着一个敌人碰撞到一个墙体时，会对该敌人造成[PinBaseDamage] 30/60/90/120/150 + [ADRatio] 1.2 × 额外攻击力 + [PinDamageRatio] 0.06 × 最大生命值物理伤害和1.1秒晕眩。 斯卡纳可以再次释放这个技能来提前结束他的冲锋。。基础参数：冷却=22/21/20/19/18；消耗=50/55/60/65/70；范围=1700。客户端字段：ChargeDuration=2.75；InitialSpeed=150；Acceleration=100；MaximumSpeed=950；GrabHitboxRadius=160；GrabHitboxOffset=90；WallRevealRadius=650；WallWarningRadius=1750；GrabbedMoveSpeedBonus=200；MinGrabbedSpeed=650；DistancePostGrab=675；StunDuration=1.1；PinBaseDamage=30/60/90/120/150；ADRatio=1.2；PinDamageRatio=0.06；VictimOffsetIncrease=200；RefundPercent=0.65；MinimumQRenew=1.5；InitialHitboxRadius=160；InitialHitboxOffset=90；SecondHitboxDelay=0.3；SecondHitboxRadius=100；SecondHitboxOffset=150；FinalHitboxDelay=0.4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：PinDamage=[PinBaseDamage] 30/60/90/120/150 + [ADRatio] 1.2 × 额外攻击力 + [PinDamageRatio] 0.06 × 最大生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/skarner/skarner.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Skarner.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "毒刺贯体",
        "description": "斯卡纳向前甩出他的尾巴，以压制敌方英雄们。一旦被压制，猎物们就会在斯卡纳移动时被拖行。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerR.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "625",
        "numericDetail": "技能文本：斯卡纳向前甩出他的尾巴，对最先命中的3个英雄造成[BaseDamage] 150/250/350 + 1 × 法术强度魔法伤害和1.5秒压制。那些被命中的英雄会在这个技能的持续期间被斯卡纳拖行。 如果斯卡纳至少命中了一个英雄，那么他会获得持续1.5秒的40%移动速度。 如果撼地处于激活状态，那么斯卡纳将先施放擎天。。基础参数：冷却=120/105/90；消耗=100；范围=625。客户端字段：BackwardOffset=50；HitboxStartHalfWidth=175；HitboxEndHalfWidth=100；BaseDamage=150/250/350；Duration=1.5；HoldDistance=300；SpeedBoostAmount=0.4；SpeedBoostDuration=1.5；DropDistance=200；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 150/250/350 + 1 × 法术强度",
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
        "description": "在死亡时，卡尔萨斯会化为一个灵体，能够继续施放技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Karthus_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在死亡时，卡尔萨斯会化为一个灵体，能够继续施放技能。。客户端字段：PassiveDuration=7",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "荒芜",
        "description": "卡尔萨斯在目标区域释放一次有延迟的爆炸魔法，对区域内的所有敌人造成伤害。对孤立无援的敌人造成提升过的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusLayWasteA1.png",
        "cooldown": "0",
        "cost": "20/25/30/35/40",
        "range": "875",
        "numericDetail": "技能文本：卡尔萨斯生成一道魔法爆裂，造成[BaseDamage] 40/59/78/97/116 + [APRatio] 0.35 × 法术强度魔法伤害。如果爆裂仅命中了一名敌人，它会转而造成([BaseDamage] 40/59/78/97/116 + [APRatio] 0.35 × 法术强度) × 2魔法伤害。。基础参数：冷却=0；消耗=20/25/30/35/40；范围=875。客户端字段：MonsterMod=1；BaseDamage=40/59/78/97/116；APRatio=0.35；effect1amount=45/65/85/105/125；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：QDamage=[BaseDamage] 40/59/78/97/116 + [APRatio] 0.35 × 法术强度；QSingleTargetDamage=([BaseDamage] 40/59/78/97/116 + [APRatio] 0.35 × 法术强度) × 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "痛苦之墙",
        "description": "卡尔萨斯创造一道可通过的魔能之墙。所有穿过墙体的敌方单位都会被暂时降低移动速度和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusWallOfPain.png",
        "cooldown": "15",
        "cost": "70",
        "range": "1000",
        "numericDetail": "技能文本：卡尔萨斯生成一个持续5秒的墙体。穿过它的敌人们会受到持续5秒的25%魔法抗性削减，以及在此期间持续衰减的40/50/60/70/80%减速。。基础参数：冷却=15；消耗=70；范围=1000。客户端字段：MagicResistShred=25；TT_WallWidth=800/900/1000/1100/1200；SlowPercent=40/50/60/70/80；WallDuration=5；DebuffDuration=5；effect1amount=25；effect2amount=800/900/1000/1100/1200；effect3amount=40/50/60/70/80；effect4amount=5；effect5amount=5；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "亵渎",
        "description": "卡尔萨斯被动地从他的猎物那里窃取法力，每杀死一个敌人就会获得法力。卡尔萨斯也可以转化这种力量，用猎物的灵魂环绕自身，对附近的敌人造成伤害，但会急速消耗他自己的法力。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusDefile.png",
        "cooldown": "0.5",
        "cost": "30/42/54/66/78",
        "range": "550",
        "numericDetail": "技能文本：被动：卡尔萨斯击杀一个单位时，回复10/20/30/40/50法力值。 激活：卡尔萨斯生成一个死灵光环，每秒对附近敌人造成[DamagePerSecond] 30/50/70/90/110 + [APRatioPerSecond] 0.2 × 法术强度魔法伤害。。基础参数：冷却=0.5；消耗=30/42/54/66/78；范围=550。客户端字段：DamagePerSecond=30/50/70/90/110；APRatioPerSecond=0.2；ManaRestoreOnKill=10/20/30/40/50；effect1amount=30/50/70/90/110；effect2amount=10/20/30/40/50；effect3amount=0.5；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDPS=[DamagePerSecond] 30/50/70/90/110 + [APRatioPerSecond] 0.2 × 法术强度；{57456bbc}=([DamagePerSecond] 30/50/70/90/110 + [APRatioPerSecond] 0.2 × 法术强度) × 0.25",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/karthus/karthus.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Karthus.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "安魂曲",
        "description": "在引导3秒后，卡尔萨斯就会对所有敌方英雄造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusFallenOne.png",
        "cooldown": "200/180/160",
        "cost": "100",
        "range": "10000",
        "numericDetail": "技能文本：卡尔萨斯引导3秒，然后对敌方英雄们造成[BaseDamage] 200/350/500 + [APRatio] 0.7 × 法术强度魔法伤害，无视距离。。基础参数：冷却=200/180/160；消耗=100；范围=10000。客户端字段：BaseDamage=200/350/500；APRatio=0.7；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 200/350/500 + [APRatio] 0.7 × 法术强度",
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
        "description": "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ezreal_RisingSpellForce.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。。客户端字段：AttackSpeedPerStack=0.1；StackDuration=6；MaxStacks=5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "秘术射击",
        "description": "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealQ.png",
        "cooldown": "5.5/5.25/5/4.75/4.5",
        "cost": "28/31/34/37/40",
        "range": "1150",
        "numericDetail": "技能文本：伊泽瑞尔发射一支能量箭，对命中的第一个敌人造成[BaseDamage] 20/45/70/95/120 + [BaseDamageADRatio] 1.3 × 攻击力 + [BaseDamageAPRatio] 0.4 × 法术强度物理伤害并使他各个技能的冷却时间缩短1.5秒。。基础参数：冷却=5.5/5.25/5/4.75/4.5；消耗=28/31/34/37/40；范围=1150。客户端字段：BaseDamage=20/45/70/95/120；CDRefund=1.5；BaseDamageADRatio=1.3；BaseDamageAPRatio=0.4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 20/45/70/95/120 + [BaseDamageADRatio] 1.3 × 攻击力 + [BaseDamageAPRatio] 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "精华跃动",
        "description": "伊泽瑞尔发射一个法球，法球会附着在命中的第一个敌方英雄或战略点上。如果伊泽瑞尔用技能或攻击命中一个法球时，会将它引爆来造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealW.png",
        "cooldown": "8",
        "cost": "50",
        "range": "1150",
        "numericDetail": "技能文本：伊泽瑞尔发射一团魔法球体，魔法球体会附着在命中的第一个敌方英雄、建筑物或史诗级野怪上，持续4秒。如果伊泽瑞尔用技能或攻击命中该目标，就会将球体引爆，造成[BaseDamage] 80/135/190/245/300 + 1 × 额外攻击力 + [APRatio] 0.9 × 法术强度魔法伤害。用技能引爆时会返还该技能的法力消耗外加60法力。。基础参数：冷却=8；消耗=50；范围=1150。客户端字段：BaseDamage=80/135/190/245/300；ManaReturn=60；DetonationTimeout=4；APRatio=0.9；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 80/135/190/245/300 + 1 × 额外攻击力 + [APRatio] 0.9 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "奥术跃迁",
        "description": "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。优先选择被【精华跃动】击中的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealE.png",
        "cooldown": "26/23/20/17/14",
        "cost": "70",
        "range": "475",
        "numericDetail": "技能文本：伊泽瑞尔传送然后向最近的敌人发射一支魔法箭，造成[BaseDamage] 80/130/180/230/280 + 0.6 × 额外攻击力 + [EAPRatio] 0.75 × 法术强度魔法伤害。魔法箭会优先选择受精华跃动影响的目标。。基础参数：冷却=26/23/20/17/14；消耗=70；范围=475。客户端字段：BaseDamage=80/130/180/230/280；MissileRange=750；CherryBonusHaste=15；EAPRatio=0.75；effect1amount=80/130/180/230/280；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 80/130/180/230/280 + 0.6 × 额外攻击力 + [EAPRatio] 0.75 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/ezreal/ezreal.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Ezreal.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "精准弹幕",
        "description": "伊泽瑞尔蓄力然后向目标区域释放长程能量波，对穿过的敌人造成高额伤害（对小兵和非史诗级野怪的伤害会减少）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealR.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：伊泽瑞尔发射一道大型能量圆弧，造成[BaseDamage] 350/550/750 + 1 × 额外攻击力 + [RAPRatio] 1.1 × 法术强度魔法伤害。对小兵和非史诗级野怪降低至[BaseDamageMinionMonster] 150/225/300 + 1 × 额外攻击力 + 1.1 × 法术强度魔法伤害。。基础参数：冷却=120/105/90；消耗=100；范围=25000。客户端字段：BaseDamage=350/550/750；DamageReductionPerHit=0.1；MinimumDamagePercent=0.3；RAPRatio=1.1；BaseDamageMinionMonster=150/225/300；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：Damage=[BaseDamage] 350/550/750 + 1 × 额外攻击力 + [RAPRatio] 1.1 × 法术强度；DamageMinionMonster=[BaseDamageMinionMonster] 150/225/300 + 1 × 额外攻击力 + 1.1 × 法术强度",
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
        "description": "在被击杀后，赛恩会回光返照一段时间并且生命值会快速衰减。在此期间，他的攻击会变得超快，获得生命偷取，并且每次攻击会额外造成基于目标最大生命值的额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sion_Passive1.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在被击杀后，赛恩会回光返照一段时间并且生命值会快速衰减。在此期间，他的攻击会变得超快，获得生命偷取，并且每次攻击会额外造成基于目标最大生命值的额外伤害。。客户端字段：Lifesteal=1；PercentMaxHP=0.1；NonChampCap=75；StructureMod=0.4",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "残虐猛击",
        "description": "赛恩开始蓄力，并在释放时对他前方的一个区域进行一次强劲的猛击，对区域内的敌人造成伤害。如果他蓄力时间足够久，那么被命中的敌人还会受到击飞和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionQ.png",
        "cooldown": "10/9/8/7/6",
        "cost": "45",
        "range": "10000",
        "numericDetail": "技能文本：开始蓄力：赛恩开始为一次重型猛击蓄力，最多2秒。 释放：赛恩将斧头重重砸下，暂时减速并基于蓄力时间造成[LowDamage] 30/45/60/75/90 + [ADRatioMin] 0.4/0.5/0.6/0.7/0.8 × 攻击力到[HighDamage] 90/155/220/285/350 + [ADRatioMax] 1.2/1.5/1.8/2.1/2.4 × 攻击力物理伤害。如果赛恩蓄力了至少1秒，那么敌人还会被击飞，并基于蓄力时间被晕眩1.25到2.25秒。。基础参数：冷却=10/9/8/7/6；消耗=45；范围=10000。客户端字段：ADRatioMin=0.4/0.5/0.6/0.7/0.8；ADRatioMax=1.2/1.5/1.8/2.1/2.4；LowDamage=30/45/60/75/90；HighDamage=90/155/220/285/350；MinionRatio=60；MonsterRatio=165；BaseStunTime=1.25；SlowAmount=-0.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=2.5；effect6amount=0；effect7amount=7.5；effect8amount=60；effect9amount=150；effect10amount=-0.8。客户端公式：MinDamageTotal=[LowDamage] 30/45/60/75/90 + [ADRatioMin] 0.4/0.5/0.6/0.7/0.8 × 攻击力；MaxDamageTotal=[HighDamage] 90/155/220/285/350 + [ADRatioMax] 1.2/1.5/1.8/2.1/2.4 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "灵魂熔炉",
        "description": "赛恩为自己套上护盾，并能在3秒后再次激活这个技能来对身边的敌人造成魔法伤害。在赛恩击杀敌人时，他会被动获得最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "75/80/85/90/95",
        "range": "500",
        "numericDetail": "技能文本：被动：赛恩每击杀一个单位就会获得4最大生命值，或在参与击杀英雄、击杀大型小兵或大型野怪后获得15最大生命值。 主动：赛恩获得[BaseShield] 60/75/90/105/120 + [ShieldAPRatio] 0.4 × 法术强度 + [ShieldPercentHealthTooltip] 0.08/0.1/0.12/0.14/0.16 × 最大生命值护盾值，持续6秒。在3秒后，如果护盾仍然存在，那么赛恩就能再次施放来引爆护盾，造成[BaseDamage] 40/65/90/115/140 + [DamageAPRatio] 0.4 × 法术强度外加14%最大生命值的魔法伤害。。基础参数：冷却=15/14/13/12/11；消耗=75/80/85/90/95；范围=500。客户端字段：ShieldPercentHealthTooltip=0.08/0.1/0.12/0.14/0.16；DamagePercentHealthTooltip=0.1/0.11/0.12/0.13/0.14；HPPerChampKill=15；HPPerKill=4；HPPerLargeKill=15；ShieldAPRatio=0.4；DamageAPRatio=0.4；BaseShield=60/75/90/105/120；BaseDamage=40/65/90/115/140；MaxHPDamageRatio=14；DetonateRecastCooldown=3；ShieldDuration=6；effect1amount=60/75/90/105/120；effect2amount=40/65/90/115/140；effect3amount=8/10/12/14/16；effect4amount=14；effect5amount=4；effect6amount=15；effect7amount=3；effect8amount=15；effect9amount=6；effect10amount=0。客户端公式：TotalShield=[BaseShield] 60/75/90/105/120 + [ShieldAPRatio] 0.4 × 法术强度 + [ShieldPercentHealthTooltip] 0.08/0.1/0.12/0.14/0.16 × 最大生命值；TotalDamage=[BaseDamage] 40/65/90/115/140 + [DamageAPRatio] 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "杀手怒吼",
        "description": "赛恩发射一个短程冲击波，来对命中的第一个敌人造成伤害、减速效果和破甲效果。如果冲击波命中的是小兵或者野怪，那么目标敌方单位还会被击退，对沿途的所有敌方单位造成伤害、减速和护甲击碎效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionE.png",
        "cooldown": "12/11/10/9/8",
        "cost": "35/40/45/50/55",
        "range": "800",
        "numericDetail": "技能文本：赛恩发射一道冲击波，造成[BaseDamage] 65/100/135/170/205 + [APRatio] 0.55 × 法术强度魔法伤害和持续2.5秒的40/45/50/55/60%减速，并移除25%护甲，持续4秒。被命中的非英雄单位会被击退。被击退的单位会在击中其他敌人时造成等额伤害和效果。。基础参数：冷却=12/11/10/9/8；消耗=35/40/45/50/55；范围=800。客户端字段：BaseDamage=65/100/135/170/205；SlowAmount=40/45/50/55/60；ArmorShred=25；SlowDuration=2.5；ArmorShredDuration=4；APRatio=0.55；effect1amount=65/100/135/170/205；effect2amount=40/45/50/55/60；effect3amount=5；effect4amount=40/45/50/55/60；effect5amount=25；effect6amount=30；effect7amount=4；effect8amount=2.5；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 65/100/135/170/205 + [APRatio] 0.55 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sion/sion.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sion.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "蛮横冲撞",
        "description": "赛恩朝着一个方向冲锋，持续提升移动速度。他可以朝着鼠标悬停处进行微小的转向。当他与一名敌人产生碰撞时，他会基于敌人们与碰撞点之间的距离造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionR.png",
        "cooldown": "140/100/60",
        "cost": "100",
        "range": "7500",
        "numericDetail": "技能文本：赛恩朝着一个方向不可阻挡地冲锋8秒，可用鼠标指针来调整方向。赛恩会在碰撞到一名敌方英雄或墙体后、或是再次施放此技能后停下。 在冲锋结束时，赛恩基于行进距离造成[MinDamage] 150/300/450 + 0.6 × 额外攻击力到[MaxDamage] 400/800/1200 + 1.2 × 额外攻击力物理伤害。紧靠着赛恩的敌人们会基于赛恩的行进距离被晕眩0.75到1.75秒。更大范围内的敌人们会被减速40/45/50%，持续3秒。。基础参数：冷却=140/100/60；消耗=100；范围=7500。客户端字段：MinDamage=150/300/450；MaxDamage=400/800/1200；SlowAmount=40/45/50；MinionDamagePercent=500；MinStunDuration=0.75；MaxStunDuration=1.75；MoveSpeedCap=950；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MinDamageTotal=[MinDamage] 150/300/450 + 0.6 × 额外攻击力；MaxDamageTotal=[MaxDamage] 400/800/1200 + 1.2 × 额外攻击力",
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
        "description": "图奇的攻击会使目标感染死亡毒液 攻击特效，每秒造成真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Twitch_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：图奇的攻击会使目标感染死亡毒液 攻击特效，每秒造成真实伤害。。客户端字段：Duration=6；MaxStacks=6；APRatio=0.03。客户端公式：DamagePerSecond=1（按英雄等级变化） + [APRatio] 0.03 × 法术强度；DamagePerSecondMax=(1（按英雄等级变化） + [APRatio] 0.03 × 法术强度) × [MaxStacks] 6；DamageMaxTotal=(1（按英雄等级变化） + [APRatio] 0.03 × 法术强度) × 客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "Q",
        "name": "埋伏",
        "description": "图奇进入伪装状态，持续一段短暂的时间并且移动速度得到提升。当离开伪装状态后，图奇会暂时获得攻击速度加成。 当一名身上带有【死亡毒液】的敌方英雄死亡时，此技能的冷却时间会重置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchHideInShadows.png",
        "cooldown": "16",
        "cost": "40",
        "range": "20",
        "numericDetail": "技能文本：图奇伪装并获得10%移动速度，持续10/11/12/13/14秒。当附近有一名无法看见他的敌方英雄时，移动速度提升至30%。在离开伪装后，图奇获得40/45/50/55/60%攻击速度，持续6秒。 当一名带有毒液的敌方英雄阵亡时，这个技能的冷却时间就会刷新。。基础参数：冷却=16；消耗=40；范围=20。客户端字段：AttackSpeedMod=0.4/0.45/0.5/0.55/0.6；AttackSpeedDuration=6；StealthDuration=10/11/12/13/14；MaxFadeTime=1；StealthDetectionRange=500；MoveSpeedMod=10；HiddenSpeed=30；MoveBonusRange=1000；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=3；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "剧毒之桶",
        "description": "图奇扔出一个毒性之桶来引爆一个区域，对区域内的敌人造成减速效果，并对他们施加死亡毒液效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchVenomCask.png",
        "cooldown": "13/12/11/10/9",
        "cost": "70",
        "range": "950",
        "numericDetail": "技能文本：图奇扔出一个毒性之桶来添加一层死亡毒液给所有被桶砸中的敌人，并留下一团毒雾，存留3秒。 一直呆在毒雾中的敌人会被减速[BaseSlowAmount] 30/35/40/45/50 + [SlowAPRatio] 0.06 × 法术强度%并且会每秒受到额外的一层死亡毒液。。基础参数：冷却=13/12/11/10/9；消耗=70；范围=950。客户端字段：BaseSlowAmount=30/35/40/45/50；Duration=3；AoERadius=300；SlowAPRatio=0.06；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalSlowAmount=[BaseSlowAmount] 30/35/40/45/50 + [SlowAPRatio] 0.06 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "毒性爆发",
        "description": "图奇引爆他那卑劣的毒素，对已中毒的敌人进行更为深远的蹂躏。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchExpunge.png",
        "cooldown": "12/11/10/9/8",
        "cost": "50/60/70/80/90",
        "range": "1200",
        "numericDetail": "技能文本：图奇引爆他那卑劣的毒素，对已中毒的敌人进行更为深远的蹂躏。。基础参数：冷却=12/11/10/9/8；消耗=50/60/70/80/90；范围=1200。客户端字段：BaseDamage=20/30/40/50/60；BasePhysicalDamagePerStack=15/20/25/30/35；bADRatioPerStack=0.35；APRatioPerStack=0.35；MaxStacks=6；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：PhysicalDamagePerStack=[BasePhysicalDamagePerStack] 15/20/25/30/35 + [bADRatioPerStack] 0.35 × 额外攻击力；MagicDamagePerStack=[APRatioPerStack] 0.35 × 法术强度；MaxPhysicalDamage=[BaseDamage] 20/30/40/50/60 + 客户端公式 ProductOfSubPartsCalculationPart + 客户端公式 ProductOfSubPartsCalculationPart × 额外攻击力；MaxMagicDamage=([APRatioPerStack] 0.35 × 法术强度) × [MaxStacks] 6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/twitch/twitch.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Twitch.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "R",
        "name": "火力全开",
        "description": "图奇让十字弩火力全开，快速地朝他面前射出强力且射程极远的穿刺箭头，穿透沿途的所有敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchFullAutomatic.png",
        "cooldown": "90",
        "cost": "100",
        "range": "1200",
        "numericDetail": "技能文本：图奇解开他的十字弩的封印，获得300攻击距离和30/45/60攻击力，并使他的攻击变为穿刺弩箭，持续6秒。这些弩箭会攻击它们沿途的所有敌人，但对每个后续目标造成的伤害减少10%，最低降至60%伤害。。基础参数：冷却=90；消耗=100；范围=1200。客户端字段：BonusRange=300；FallOffDamage=0.1；MinimumFallOffDamage=0.6；BonusAD=30/45/60；Duration=6；OvershootMult=0.3；OvershootMin=250；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "易大师每攻击数次，就会同时对目标进行2次打击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MasterYi_Passive1.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：易大师每攻击数次，就会同时对目标进行2次打击。。客户端字段：StackDuration=4；AttackCount=4。客户端公式：TotalDamage=0.5 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "阿尔法突袭",
        "description": "易以肉眼难以发觉的速度穿梭于战场，对多个敌人造成物理伤害，同时处于不可被选取的状态下。阿尔法突袭可以暴击，并对野怪造成额外物理伤害。普通攻击可以减少阿尔法突袭的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AlphaStrike.png",
        "cooldown": "20/19.5/19/18.5/18",
        "cost": "50/55/60/65/70",
        "range": "600",
        "numericDetail": "技能文本：易以肉眼难以发觉的速度穿梭于战场，对多个敌人造成物理伤害，同时处于不可被选取的状态下。阿尔法突袭可以暴击，并对野怪造成额外物理伤害。普通攻击可以减少阿尔法突袭的冷却时间。。基础参数：冷却=20/19.5/19/18.5/18；消耗=50/55/60/65/70；范围=600。客户端字段：SubsequentHitMultiplier=0.25；BaseDamage=20/40/60/80/100；BonusMonsterDamage=60/85/110/135/160；AttackDamageRatio=0.7；BonusCritDamageRatio=1；BaseBasicAttackCDR=1；AlphaStrikeBounces=4；BaseOnHitMultiplier=0.75；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 20/40/60/80/100 + [AttackDamageRatio] 0.7 × 总攻击力；SubesquentDamage=(([BaseDamage] 20/40/60/80/100 + [AttackDamageRatio] 0.7 × 总攻击力)) × [SubsequentHitMultiplier] 0.25；CritBonus=([BaseDamage] 20/40/60/80/100 + [AttackDamageRatio] 0.7 × 总攻击力) × 客户端公式 ProductOfSubPartsCalculationPart；{b0f66055}=((([BaseDamage] 20/40/60/80/100 + [AttackDamageRatio] 0.7 × 总攻击力)) × [SubsequentHitMultiplier] 0.25) × 客户端公式 ProductOfSubPartsCalculationPart；BasicAttackCDR=客户端公式 ProductOfSubPartsCalculationPart；SingleTotalDamage=([BaseDamage] 20/40/60/80/100 + [AttackDamageRatio] 0.7 × 总攻击力) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)；SingleCritTotalDamage=(客户端公式 ProductOfSubPartsCalculationPart) × 客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "冥想",
        "description": "易通过集中念力来活化他的身体，从而回复生命值，并暂时减少所受的伤害。此外，易还会为双重打击充能，并暂停无极剑道和高原血统的持续时长。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Meditate.png",
        "cooldown": "10",
        "cost": "40",
        "range": "20",
        "numericDetail": "技能文本：易开始引导，并在4秒里持续回复共[BaseHeal] 120/200/280/360/440 + 1 × 法术强度生命值。这个治疗效果可基于易大师的已损失生命值而提升，最多可提升至100%。 在引导时和随后的0.5秒里，他还会获得([DamageReduction] 0.45/0.475/0.5/0.525/0.55 + [InitialExtraDR] 0.25/0.225/0.2/0.175/0.15)伤害减免，这个效果会在最初的0.5秒后降低至45/47.5/50/52.5/55%。。基础参数：冷却=10；消耗=40；范围=20。客户端字段：BaseHeal=120/200/280/360/440；HealDuration=4；MaxMissingHealthPercent=1；TickFrequency=0.5；DamageReduction=0.45/0.475/0.5/0.525/0.55；DamageReductionTowerMod=0.5；BaseManaCost=40；PercentManaCostPerSecond=0.06；InitialExtraDR=0.25/0.225/0.2/0.175/0.15；InitialExtraDRDuration=0.5；DRLinger=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHeal=[BaseHeal] 120/200/280/360/440 + 1 × 法术强度；InitialDR=([DamageReduction] 0.45/0.475/0.5/0.525/0.55 + [InitialExtraDR] 0.25/0.225/0.2/0.175/0.15)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "无极剑道",
        "description": "提供额外真实伤害至普攻",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WujuStyle.png",
        "cooldown": "14",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：易的攻击造成额外的[BaseDamage] 20/25/30/35/40 + [ADRatio] 0.35 × 额外攻击力真实伤害，持续5秒。。基础参数：冷却=14；消耗=0；范围=20。客户端字段：BaseDamage=20/25/30/35/40；ADRatio=0.35；Duration=5；LegacySwordVFXDuration=3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 20/25/30/35/40 + [ADRatio] 0.35 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/masteryi/masteryi.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/MasterYi.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "高原血统",
        "description": "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。该技能激活期间，易在参与击杀一名敌方英雄的同时，会延长该技能的持续时间。在击杀和助攻后，也会被动地减少易其它技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Highlander.png",
        "cooldown": "85",
        "cost": "100",
        "range": "1",
        "numericDetail": "技能文本：被动：在参与击杀后，易大师的普通技能的剩余冷却时间会减少70%。 主动：获得35/45/55%移动速度，25/45/65%攻击速度，并且免疫减速效果，持续7秒。每次参与击杀后都会使此技能的持续时间延长7秒。。基础参数：冷却=85；消耗=100；范围=1。客户端字段：RDuration=7；RASBonus=25/45/65；RMSBonus=35/45/55；RKillAssistExtension=7；RCooldownRefund=0.7；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Lulu_PixFaerieCompanion.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。。客户端字段：NumberOfBolts=3；APRatioPerHit=0.05。客户端公式：TotalDamage=5–39（1–18级） + [APRatioPerHit] 0.05 × 法术强度；CombinedDamage=(5–39（1–18级） + [APRatioPerHit] 0.05 × 法术强度) × [NumberOfBolts] 3",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "闪耀长枪",
        "description": "璐璐和皮克斯各自发射一个穿刺飞弹，对命中的所有敌人造成伤害和重度减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluQ.png",
        "cooldown": "7",
        "cost": "50/55/60/65/70",
        "range": "925",
        "numericDetail": "技能文本：璐璐和皮克斯各发射一束贯穿魔弹，造成[BaseDamage] 60/95/130/165/200 + [APRatio] 0.5 × 法术强度魔法伤害和在2秒里持续衰减的80%减速。 如果两束魔弹都命中了相同的一名敌人，那么会对其造成额外的([BaseDamage] 60/95/130/165/200 + [APRatio] 0.5 × 法术强度) × [DoubleHitBonus] 0.5魔法伤害。。基础参数：冷却=7；消耗=50/55/60/65/70；范围=925。客户端字段：MinionMod=0.7；DoubleHitBonus=0.5；APRatio=0.5；BaseDamage=60/95/130/165/200；SlowAmount=-0.8；SlowDuration=2；SlowDecayTicks=8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 60/95/130/165/200 + [APRatio] 0.5 × 法术强度；BonusMissileDamage=([BaseDamage] 60/95/130/165/200 + [APRatio] 0.5 × 法术强度) × [DoubleHitBonus] 0.5",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "奇思妙想",
        "description": "如果对友军施放，会暂时增加目标友军的攻击速度和移动速度。如果对敌人施放，会将一名敌方英雄变成可爱的动物，使其无法攻击或施法。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluW.png",
        "cooldown": "18",
        "cost": "65",
        "range": "650",
        "numericDetail": "技能文本：当用在一名友方身上时，璐璐提供[effect1amount] 0.25 + 0.0005 × 法术强度移动速度和20/22.5/25/27.5/30%攻击速度，持续3/3.25/3.5/3.75/4秒。 当用在一名敌人身上时，璐璐会将其变形1.2/1.4/1.6/1.8/2秒。。基础参数：冷却=18；消耗=65；范围=650。客户端字段：effect1amount=0.25；effect2amount=0；effect3amount=1.2/1.4/1.6/1.8/2；effect4amount=-60；effect5amount=3/3.25/3.5/3.75/4；effect6amount=0.01；effect7amount=20/22.5/25/27.5/30；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalMS=[effect1amount] 0.25 + 0.0005 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "帮忙，皮克斯！",
        "description": "如果对友军施放，会命令皮克斯跳到一名友军身上进行保护，之后会跟随并协助目标（而不是璐璐）进行攻击。如果对敌人施放，皮克斯会跳到敌人身上造成伤害，之后会跟随并提供目标的视野。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluE.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "650",
        "numericDetail": "技能文本：在对一名友方施放时，皮克斯会跳到该友方处并提供皮克斯，仙灵伙伴，持续6秒。如果该友方是一名英雄，那么皮克斯还会提供[BaseShield] 70/110/150/190/230 + [ShieldAPRatio] 0.5 × 法术强度护盾值，持续2.5秒。 在对一名敌方英雄使用时，皮克斯会妨碍该英雄，造成[BaseDamage] 70/110/150/190/230 + [DamageAPRatio] 0.5 × 法术强度魔法伤害并提供其真实视野，持续4秒。。基础参数：冷却=10/9.5/9/8.5/8；消耗=60/65/70/75/80；范围=650。客户端字段：BaseDamage=70/110/150/190/230；DamageAPRatio=0.5；BaseShield=70/110/150/190/230；ShieldAPRatio=0.5；ShieldDuration=2.5；effect1amount=6；effect2amount=0；effect3amount=50；effect4amount=0；effect5amount=25；effect6amount=4；effect7amount=2.5；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/110/150/190/230 + [DamageAPRatio] 0.5 × 法术强度；TotalShield=[BaseShield] 70/110/150/190/230 + [ShieldAPRatio] 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/lulu/lulu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Lulu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "狂野生长",
        "description": "璐璐让她的友军变大，击飞目标附近的敌人，同时为她的友军提供大量生命值加成。接下来的数秒内，该友军会获得一个减少附近敌人速度的光环。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "900",
        "numericDetail": "技能文本：璐璐使一名友方英雄巨大化，并击飞周围的敌人1秒。巨大化的友方英雄会获得[BonusHealth] 275/425/575 + 0.55 × 法术强度最大生命值并使周围的敌人们减速30/45/60%，持续7秒。。基础参数：冷却=120/100/80；消耗=100；范围=900。客户端字段：BonusHealth=275/425/575；SlowPercent=30/45/60；BuffDuration=7；AoERadius=400；KnockbackDuration=1；KnockbackDistance=275；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalBonusHealth=[BonusHealth] 275/425/575 + 0.55 × 法术强度",
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
        "description": "维迦是最强大的恶魔，甚至能对符文之地之心发起攻击——并且他只会越来越强大！用技能攻击一名敌人、击杀单位或拆毁防御塔都会为维迦永久提升法术强度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/VeigarEntropy.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：维迦是最强大的恶魔，甚至能对符文之地之心发起攻击——并且他只会越来越强大！用技能攻击一名敌人、击杀单位或拆毁防御塔都会为维迦永久提升法术强度加成。。客户端字段：dQKillStacks=1；dAbilityStacks=1；dTakedownStacks=5；dQKillStacksLarge=3；PStacksPerDarkMatterCDR=50；DarkMatterCDRIncrement=0.1。客户端公式：APPerStack=1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "黑暗祭祀",
        "description": "维迦释放一束黑暗能量，对最先被命中的两个敌人造成魔法伤害。被这个能量束所击杀的单位，会永久地为维迦提供一些法术强度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarBalefulStrike.png",
        "cooldown": "6/5.5/5/4.5/4",
        "cost": "30/35/40/45/50",
        "range": "1000",
        "numericDetail": "技能文本：维迦释放一束黑暗能量，对最先被命中的两个敌人造成魔法伤害。被这个能量束所击杀的单位，会永久地为维迦提供一些法术强度。。基础参数：冷却=6/5.5/5/4.5/4；消耗=30/35/40/45/50；范围=1000。客户端字段：APRatio=0.5/0.55/0.6/0.65/0.7；BaseDamage=80/120/160/200/240；effect1amount=0；effect2amount=1；effect3amount=2；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/120/160/200/240 + [APRatio] 0.5/0.55/0.6/0.65/0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "黑暗物质",
        "description": "维迦召唤一大团黑暗物质轰击目标区域，落地造成魔法伤害。【超凡邪力】的层数会缩短这个技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarDarkMatter.png",
        "cooldown": "0",
        "cost": "60/65/70/75/80",
        "range": "950",
        "numericDetail": "技能文本：维迦召唤一大团黑暗物质轰击目标区域，落地造成魔法伤害。【超凡邪力】的层数会缩短这个技能的冷却时间。。基础参数：冷却=0；消耗=60/65/70/75/80；范围=950。客户端字段：APRatio=0.7/0.8/0.9/1/1.1；BaseDamage=85/140/195/250/305；ImpactDelay=1.2；BaseCooldown=8；effect1amount=0；effect2amount=1.2；effect3amount=8；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 85/140/195/250/305 + [APRatio] 0.7/0.8/0.9/1/1.1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "扭曲空间",
        "description": "维迦扭曲空间的边缘，创造一个牢笼来使途径的敌人晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarEventHorizon.png",
        "cooldown": "20/18.5/17/15.5/14",
        "cost": "70/75/80/85/90",
        "range": "725",
        "numericDetail": "技能文本：维迦扭曲空间的边缘，创造一个牢笼来使途经的敌人晕眩1.5/1.75/2/2.25/2.5秒。牢笼持续3秒。。基础参数：冷却=20/18.5/17/15.5/14；消耗=70/75/80/85/90；范围=725。客户端字段：StunDuration=1.5/1.75/2/2.25/2.5；CageDelay=0.5；effect1amount=1.5/1.75/2/2.25/2.5；effect2amount=0.5；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/veigar/veigar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Veigar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "能量爆裂",
        "description": "引爆目标敌方英雄，造成大量魔法伤害，并基于目标已损失生命值提升伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarR.png",
        "cooldown": "120/90/60",
        "cost": "100",
        "range": "650",
        "numericDetail": "技能文本：维迦用源力魔法引爆目标一名敌方英雄，造成[BaseDamage] 175/250/325 + [APRatio] 0.65/0.7/0.75 × 法术强度到([BaseDamage] 175/250/325 + [APRatio] 0.65/0.7/0.75 × 法术强度) × 2魔法伤害，伤害提升幅度基于目标的已损失生命值。目标生命值在33%以下即可造成最大伤害。。基础参数：冷却=120/90/60；消耗=100；范围=650。客户端字段：APRatio=0.65/0.7/0.75；BaseDamage=175/250/325；MaxExecuteMult=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MinDamage=[BaseDamage] 175/250/325 + [APRatio] 0.65/0.7/0.75 × 法术强度；MaxDamage=([BaseDamage] 175/250/325 + [APRatio] 0.65/0.7/0.75 × 法术强度) × 2",
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
        "description": "当科加斯杀死一个单位时，他会回复生命值和法力值。回复的数值会随着科加斯的等级而提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/GreenTerror_TailSpike.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：当科加斯杀死一个单位时，他会回复生命值和法力值。回复的数值会随着科加斯的等级而提升。。客户端公式：ChogathCarnivoreHeal=18（初始每级 +2，按客户端断点变化）；ChogathCarnivoreMana=4.72（初始每级 +0.28，按客户端断点变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "破裂",
        "description": "使目标地面破裂，将敌人抛向空中，造成伤害并减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Rupture.png",
        "cooldown": "6",
        "cost": "50",
        "range": "950",
        "numericDetail": "技能文本：科加斯使大地破裂，击飞敌人1秒，造成[BaseDamage] 80/135/190/245/300 + 1 × 法术强度魔法伤害，并使敌人减速60%，持续1.5秒。。基础参数：冷却=6；消耗=50；范围=950。客户端字段：BaseDamage=80/135/190/245/300；SlowAmountPercentage=60；effect1amount=0；effect2amount=60；effect3amount=1.5；effect4amount=0.63；effect5amount=1；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTooltip=[BaseDamage] 80/135/190/245/300 + 1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "野性尖叫",
        "description": "科加斯向面前锥形区域施放恐怖声波，造成魔法伤害并沉默数秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FeralScream.png",
        "cooldown": "11/10.5/10/9.5/9",
        "cost": "70/75/80/85/90",
        "range": "300",
        "numericDetail": "技能文本：科加斯进行咆哮，沉默敌人1.6/1.7/1.8/1.9/2秒并造成[effect1amount] 80/130/180/230/280 + 0.7 × 法术强度魔法伤害。。基础参数：冷却=11/10.5/10/9.5/9；消耗=70/75/80/85/90；范围=300。客户端字段：effect1amount=80/130/180/230/280；effect2amount=1.6/1.7/1.8/1.9/2；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTooltip=[effect1amount] 80/130/180/230/280 + 0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "恐惧之刺",
        "description": "科加斯的攻击会释放致命的尖刺，伤害并减速面前所有的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VorpalSpikes.png",
        "cooldown": "8/7/6/5/4",
        "cost": "30",
        "range": "40",
        "numericDetail": "技能文本：科加斯的攻击会释放致命的尖刺，伤害并减速面前所有的敌人。。基础参数：冷却=8/7/6/5/4；消耗=30；范围=40。客户端字段：BaseDamage=20/40/60/80/100；APRatio=0.3；PercentHealthDamage=2.5/2.85/3.2/3.55/3.9；FeastStackMultiplier=0.5；MonsterDamageCap=200；SlowAmountPercentage=30/35/40/45/50；SlowDuration=1.5；AttackRangeIncrease=50；MaximumAttacks=3；BuffDuration=6；ModifiedMonsterCap=80/110/140/170/200；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：FlatDamageCalc=[BaseDamage] 20/40/60/80/100 + [APRatio] 0.3 × 法术强度；MaxHealthPercentCalc=([PercentHealthDamage] 2.5/2.85/3.2/3.55/3.9 + [FeastStackMultiplier] 0.5 × {8682fc00}层数) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/chogath/chogath.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Chogath.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "盛宴",
        "description": "吞噬一个敌方单位，造成高额真实伤害。若目标被吞噬致死，科加斯就会长大，提高最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Feast.png",
        "cooldown": "80/70/60",
        "cost": "100",
        "range": "175",
        "numericDetail": "技能文本：科加斯贪婪地吞吃一名敌人，对英雄造成[RBaseDamage] 300/475/650 + 0.5 × 法术强度 + 0.1 × 额外最大生命值真实伤害或对野怪和小兵造成[RBaseMonsterDamage] 1200 + 0.5 × 法术强度 + 0.1 × 额外最大生命值真实伤害。如果这个技能击杀了敌方单位，那么科加斯会获得一层可叠加的效果，使他的体型变大且提供80/120/160最大生命值。通过吞吃小兵和非史诗级野怪的方式只能获得共6层效果。。基础参数：冷却=80/70/60；消耗=100；范围=175。客户端字段：RBaseMonsterDamage=1200；RBaseDamage=300/475/650；RHealthPerStack=80/120/160；RMinionMaxStacks=6；RStoneplateRatio=1；CastRangePerStack=2.5；MaxBonusCastRange=25；AttackRangePerStack=4.7/6.2/7.7；MaxBonusAttackRange=75；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：RMonsterDamage=[RBaseMonsterDamage] 1200 + 0.5 × 法术强度 + 0.1 × 额外最大生命值；RDamage=[RBaseDamage] 300/475/650 + 0.5 × 法术强度 + 0.1 × 额外最大生命值；BonusAttackRange=[AttackRangePerStack] 4.7/6.2/7.7 × {8682fc00}层数；{9f798bd0}=[CastRangePerStack] 2.5 × {8682fc00}层数",
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
        "description": "玛尔扎哈如果近期没有受到伤害或控制效果，就会获得巨幅伤害减免和免疫控制的效果，并且这个效果在受到伤害后还会残留一小段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Malzahar_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：玛尔扎哈如果近期没有受到伤害或控制效果，就会获得巨幅伤害减免和免疫控制的效果，并且这个效果在受到伤害后还会残留一小段时间。。客户端字段：DRPercent=90；LingerDuration=0.25。客户端公式：ShieldCooldown=30（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "虚空召唤",
        "description": "玛尔扎哈开启两扇通向虚空的传送门。在短暂的延迟后，两扇门之间会有虚空能量对流而过，造成魔法伤害并沉默敌方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharQ.png",
        "cooldown": "6",
        "cost": "60/65/70/75/80",
        "range": "900",
        "numericDetail": "技能文本：玛尔扎哈开启两扇通往虚空的传送门，在短暂的延迟后，能量就会从虚空之中喷发，并且在两道传送门之间对流，对击中的敌人造成[BaseDamage] 70/105/140/175/210 + 0.55 × 法术强度魔法伤害并使其沉默1/1.25/1.5/1.75/2秒。。基础参数：冷却=6；消耗=60/65/70/75/80；范围=900。客户端字段：BaseDamage=70/105/140/175/210；SilenceDuration=1/1.25/1.5/1.75/2；DelayPostCast=0.4；effect1amount=70/105/140/175/210；effect2amount=1/1.25/1.5/1.75/2；effect3amount=0.4；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamageTooltip=[BaseDamage] 70/105/140/175/210 + 0.55 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "虚空虫群",
        "description": "玛尔扎哈召唤虚灵去攻击附近的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharW.png",
        "cooldown": "8",
        "cost": "40/45/50/55/60",
        "range": "150",
        "numericDetail": "技能文本：被动：玛尔扎哈的其它技能在施放时会为他提供一层效果(最多可叠到2层)。 主动：玛尔扎哈召唤一个虚灵，并且每层效果会额外召唤一个虚灵。虚灵持续8/8/9/9/10秒并且每次命中造成[VoidlingBaseDamage] 12/14/16/18/20 + 5–64.5（1–18级） + [ADRatio] 0.4 × 额外攻击力 + [APRatio] 0.2 × 法术强度魔法伤害。。基础参数：冷却=8；消耗=40/45/50/55/60；范围=150。客户端字段：VoidlingDuration=8/8/9/9/10；VoidlingBaseDamage=12/14/16/18/20；LaneMinionMod=3；EpicMonsterMod=0.5；StackCap=2；ADRatio=0.4；SummonDelay=0.5；APRatio=0.2；StackDuration=25000；MaxStacks=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=25000；effect6amount=2；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：{c2505620}=5–64.5（1–18级）；VoidlingBonusDamageTooltip=[VoidlingBaseDamage] 12/14/16/18/20 + 5–64.5（1–18级） + [ADRatio] 0.4 × 额外攻击力 + [APRatio] 0.2 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "煞星幻象",
        "description": "玛尔扎哈将目标的惨死幻象侵入目标的意识中，造成持续伤害。玛尔扎哈对目标使用其它技能时会刷新幻象的持续时间。 如果目标在感染幻象期间死亡，那么幻象会传到附近的一个敌人身上，并且玛尔扎哈会回复法力值。玛尔扎哈的虚灵会优先攻击感染了幻象的单位。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharE.png",
        "cooldown": "11/10/9/8/7",
        "cost": "60/70/80/90/100",
        "range": "650",
        "numericDetail": "技能文本：玛尔扎哈给目标造成可怕的幻象，在4秒里对一名敌人持续造成共[BaseDamage] 80/115/150/185/220 + 0.8 × 法术强度魔法伤害。在此期间，对目标使用虚空召唤或冥府之握会刷新幻象的持续时间。 如果目标被击杀，玛尔扎哈会获得0.02 × 当前资源法力并且幻象会传播给相距最近的敌人。 煞星幻象会处决低于10（初始每级 +2，按客户端断点变化）生命值的小兵。。基础参数：冷却=11/10/9/8/7；消耗=60/70/80/90/100；范围=650。客户端字段：BaseDamage=80/115/150/185/220；SecondsPerTick=0.25；Duration=4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=8；effect5amount=2；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/115/150/185/220 + 0.8 × 法术强度；ManaRestore=0.02 × 当前资源；MinionExecuteThreshold=10（初始每级 +2，按客户端断点变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/malzahar/malzahar.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Malzahar.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "冥府之握",
        "description": "玛尔扎哈引导虚空的精萃来把一名敌方英雄压制在一个充满伤害的负能量地带上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharR.png",
        "cooldown": "140/110/80",
        "cost": "100",
        "range": "700",
        "numericDetail": "技能文本：玛尔扎哈压制一名敌方英雄并在2.5秒里持续造成共[BeamDamage] 125/200/275 + [BeamAPRatio] 0.8 × 法术强度魔法伤害。一个负能量地带会在他目标周围生成，在5秒里持续造成共([MaxHealthDamage] 2/3/4 + [MaxHealthRatio] 0.005 × 法术强度) × 0.05最大生命值的魔法伤害。。基础参数：冷却=140/110/80；消耗=100；范围=700。客户端字段：BeamDamage=125/200/275；BeamAPRatio=0.8；BeamDamageTicks=10；SuppressDuration=2.5；NeutralMonsterDamageCap=120；ZoneDuration=5；MaxHealthDamage=2/3/4；MaxHealthRatio=0.005；BeamTetherRange=1250；PoolDuration=5；CCDuration=2.5；effect1amount=0；effect2amount=0；effect3amount=5；effect4amount=2.5；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ZoneDamageTooltip=([MaxHealthDamage] 2/3/4 + [MaxHealthRatio] 0.005 × 法术强度) × 0.05；TotalDamageTooltip=[BeamDamage] 125/200/275 + [BeamAPRatio] 0.8 × 法术强度",
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
        "description": "卡萨丁所受的魔法伤害减少，并无视单位的碰撞体积。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Kassadin_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：卡萨丁所受的魔法伤害减少，并无视单位的碰撞体积。。客户端字段：DamageReductionPercent=0.1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "虚无法球",
        "description": "卡萨丁向目标发射虚空能量法球，造成伤害并打断目标的技能引导。满溢的能量会在他身边环绕，提供一个可吸收魔法伤害的临时护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NullLance.png",
        "cooldown": "9/8.5/8/7.5/7",
        "cost": "60/65/70/75/80",
        "range": "650",
        "numericDetail": "技能文本：卡萨丁发射一颗虚无能量法球，造成[BaseDamage] 65/95/125/155/185 + 0.7 × 法术强度魔法伤害并打断引导技能。卡萨丁还会获得[ShieldAmount] 80/110/140/170/200 + 0.3 × 法术强度魔法护盾，持续1.5秒。。基础参数：冷却=9/8.5/8/7.5/7；消耗=60/65/70/75/80；范围=650。客户端字段：BaseDamage=65/95/125/155/185；ShieldAmount=80/110/140/170/200；ShieldDuration=1.5；effect1amount=65/95/125/155/185；effect2amount=0；effect3amount=80/110/140/170/200；effect4amount=1.5；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShield=[ShieldAmount] 80/110/140/170/200 + 0.3 × 法术强度；TotalDamage=[BaseDamage] 65/95/125/155/185 + 0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "虚空之刃",
        "description": "被动：卡萨丁的普通攻击会造成额外魔法伤害。主动：卡萨丁的下次普通攻击会造成显著的额外魔法伤害并回复法力值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NetherBlade.png",
        "cooldown": "7",
        "cost": "1",
        "range": "1",
        "numericDetail": "技能文本：被动：卡萨丁的攻击造成额外的[PassiveBaseDamage] 25 + 0.1 × 法术强度魔法伤害。 主动：卡萨丁给他的剑刃充能，使他的下次攻击造成[ActiveBaseDamage] 50/75/100/125/150 + 0.8 × 法术强度魔法伤害并回复4/4.5/5/5.5/6%已损失法力值，对抗英雄时提升至20/22.5/25/27.5/30%。。基础参数：冷却=7；消耗=1；范围=1。客户端字段：ActiveBaseDamage=50/75/100/125/150；PassiveBaseDamage=25；MissingManaRatio=4/4.5/5/5.5/6；ChampionMissingManaRatio=20/22.5/25/27.5/30；effect1amount=4/4.5/5/5.5/6；effect2amount=25；effect3amount=50/75/100/125/150；effect4amount=20/22.5/25/27.5/30；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ActiveDamage=[ActiveBaseDamage] 50/75/100/125/150 + 0.8 × 法术强度；OnHitDamage=[PassiveBaseDamage] 25 + 0.1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "能量脉冲",
        "description": "附近有单位施放法术技能时，卡萨丁将吸收能量，当充能完毕后，吸收的能量可转化为脉冲，对面前锥形区域内敌人造成伤害并减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ForcePulse.png",
        "cooldown": "21/20/19/18/17",
        "cost": "60/65/70/75/80",
        "range": "400",
        "numericDetail": "技能文本：被动：卡萨丁附近每有任一个技能施放，能量脉冲的冷却时间就会缩短0.75秒。 主动：卡萨丁释放一道虚空脉冲，造成[BaseDamage] 70/100/130/160/190 + [APRatio] 0.7 × 法术强度魔法伤害和持续1秒的50/55/60/65/70%减速。。基础参数：冷却=21/20/19/18/17；消耗=60/65/70/75/80；范围=400。客户端字段：ReductionPerSpellCast=0.75；BaseDamage=70/100/130/160/190；APRatio=0.7；SlowAmount=50/55/60/65/70；SlowDuration=1；effect1amount=0；effect2amount=50/55/60/65/70；effect3amount=1；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/100/130/160/190 + [APRatio] 0.7 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/kassadin/kassadin.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Kassadin.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "虚空行走",
        "description": "卡萨丁传送到附近区域，对区域内的敌方单位造成伤害。 在一段时间内连续施放虚空行走技能会消耗更多的法力值，但也会造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RiftWalk.png",
        "cooldown": "5/3.5/2",
        "cost": "40",
        "range": "500",
        "numericDetail": "技能文本：卡萨丁传送到附近的目标区域，着陆时对身边的所有敌方单位造成[RBaseDamage] 70/90/110 + [APRatio] 0.5 × 法术强度 + 0.02 × 当前资源魔法伤害。 每在15秒内连续施放一次虚空行走，法力消耗就会翻倍，并造成额外的[StackDamage] 35/45/55 + [APStackRatio] 0.07 × 法术强度 + 0.01 × 当前资源魔法伤害。消耗和伤害提升最多可叠加4次。。基础参数：冷却=5/3.5/2；消耗=40；范围=500。客户端字段：BaseCD=5/3.5/2；RBaseCost=40；RBaseDamage=70/90/110；StackDamage=35/45/55；APRatio=0.5；APStackRatio=0.07；RStackDuration=15；MaxStacks=4；RManaRatio=2；RStackManaRatio=1；RiftWalkBaseDamage=70/90/110；CastRange=500；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BaseDamage=[RBaseDamage] 70/90/110 + [APRatio] 0.5 × 法术强度 + 0.02 × 当前资源；BonusDamage=[StackDamage] 35/45/55 + [APStackRatio] 0.07 × 法术强度 + 0.01 × 当前资源",
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
        "description": "努努提升威朗普和一名附近友军的攻击速度和移动速度，并使威朗普的普攻可以伤害目标周围的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/NunuPassive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：努努提升威朗普和一名附近友军的攻击速度和移动速度，并使威朗普的普攻可以伤害目标周围的敌人。。客户端字段：MonsterRadius=700；LargeRadius=1000；BloodBoilBaseDuration=4；ADRatioForAOE=0.3；ASIncrease=0.2；MSIncrease=0.1。客户端公式：CleaveDamage=[ADRatioForAOE] 0.3 × 攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "吞噬",
        "description": "威朗普撕咬一个小兵、野怪或敌方英雄，造成巨大伤害并回复自己的生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuQ.png",
        "cooldown": "13/12/11/10/9",
        "cost": "60",
        "range": "125",
        "numericDetail": "技能文本：努努请求威朗普撕咬一名敌人，造成400/600/800/1000/1200真实伤害并在用来对抗小兵和野怪时回复[BaseHealing] 65/95/125/155/185 + [PercentageOfBonusHP] 0.1 × 额外最大生命值 + [MonsterHealingAPRatio] 0.9 × 法术强度生命值。在对抗英雄时，它会转而造成[ChampionDamage] 60/100/140/180/220 + [BonusMaxHPDamage] 0.05 × 最大生命值 + [ChampDamageAPRatio] 0.65 × 法术强度魔法伤害并回复([BaseHealing] 65/95/125/155/185 + [PercentageOfBonusHP] 0.1 × 额外最大生命值 + [MonsterHealingAPRatio] 0.9 × 法术强度) × [ChampionHealingScalar] 0.6生命值。 治疗效果会在努努和威朗普低于50%生命值时提升50%。。基础参数：冷却=13/12/11/10/9；消耗=60；范围=125。客户端字段：MonsterMinionDamage=400/600/800/1000/1200；BaseHealing=65/95/125/155/185；ChampionDamage=60/100/140/180/220；PercentageOfBonusHP=0.1；ChampionHealingScalar=0.6；LowHealthThreshhold=0.5；LowHealthHealingScalar=0.5；BonusMaxHPDamage=0.05；ChampDamageAPRatio=0.65；MonsterHealingAPRatio=0.9；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MonsterHealing=[BaseHealing] 65/95/125/155/185 + [PercentageOfBonusHP] 0.1 × 额外最大生命值 + [MonsterHealingAPRatio] 0.9 × 法术强度；TotalChampionDamage=[ChampionDamage] 60/100/140/180/220 + [BonusMaxHPDamage] 0.05 × 最大生命值 + [ChampDamageAPRatio] 0.65 × 法术强度；ChampionHealing=([BaseHealing] 65/95/125/155/185 + [PercentageOfBonusHP] 0.1 × 额外最大生命值 + [MonsterHealingAPRatio] 0.9 × 法术强度) × [ChampionHealingScalar] 0.6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "史上最大雪球！",
        "description": "威朗普滚起一个雪球，它的尺寸和速度将随着滚动时间而增长。雪球会伤害并击飞敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuW.png",
        "cooldown": "14",
        "cost": "50/55/60/65/70",
        "range": "7500",
        "numericDetail": "技能文本：努努和威朗普生成一团雪球，雪球会随着他们的滚动而获得体型与速度的增长。在滚雪球时，他们的转向会变慢，但可通过持续转向来提升转向速度。 雪球造成([BaseDamage] 180/225/270/315/360 + [MaximumAPRatio] 1.5 × 法术强度) × [NoImpactDamageScalar] 0.333至[BaseDamage] 180/225/270/315/360 + [MaximumAPRatio] 1.5 × 法术强度魔法伤害，并在碰撞英雄、大型野怪或墙体后造成0.5到[BaseKnockupDuration] 0.5 + [AdditionalStunDurationOverTime] 0.75秒的击飞。这些数值受益于已滚动的距离。 努努和威朗普可以再次施放来提前放走雪球。。基础参数：冷却=14；消耗=50/55/60/65/70；范围=7500。客户端字段：MonsterCollisionRadiusScalar=1.25；MonsterImpactRadiusScalar=1.75；InitialCastRadiusScalar=2.5；WalkDistanceAfterThrow=350；TurnRateMultiplier1=1.75；TurnRateMultiplier2=2.5；TurnRateMultiplier3=3.25；TurnRateMultTime1=1；TurnRateMultTime2=2；TurnRateMultTime3=3；BaseDamage=180/225/270/315/360；MaxDamageTime=5；MaxDamageScalar=1；MaxDuration=10；BaseKnockupDuration=0.5；AdditionalKnockupOverTime=0.25；AdditionalStunDurationOverTime=0.75；NoImpactDamageScalar=0.333；MaximumSnowballRollDistance=1750；MinimumSnowballRollDistance=750；SlowAmount=-0.5；SlowDuration=1；MinimumSnowballRadius=75；MaximumSnowballRadius=200；AdditionalStartingSpeed=75；AdditionalSpeedPerLevel=10；AdditionalSpeedCapPerLevel=10；MinimumSnowballMissileSpeed=350；LargeSnowballTime=5；MediumSnowballTime=2.5；LargeSnowballMissileWidth=200；MediumSnowballMissileWidth=137.5；SmallSnowballMissileWidth=75；MaximumAPRatio=1.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MaximumSnowballDamage=[BaseDamage] 180/225/270/315/360 + [MaximumAPRatio] 1.5 × 法术强度；NoImpactSnowballDamage=([BaseDamage] 180/225/270/315/360 + [MaximumAPRatio] 1.5 × 法术强度) × [NoImpactDamageScalar] 0.333；MaximumStunDuration=[BaseKnockupDuration] 0.5 + [AdditionalStunDurationOverTime] 0.75",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "雪球飞射",
        "description": "努努掷出多个雪球以伤害敌人。当他完成后，威朗普就会禁锢被雪球命中过的任何英雄或大型野怪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuE.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "625",
        "numericDetail": "技能文本：努努投掷3团雪球，每团雪球造成[BaseDamage] 15/22.5/30/37.5/45 + 0.12 × 法术强度魔法伤害，并使被3团雪球都命中的敌人们遭受持续1秒的30/35/40/45/50%减速。努努可以再次施放这个技能至多2次。 在3秒后，努努会使附近所有已被雪球减速的敌人们禁锢0.5–1.5（1–18级）秒并造成额外的[RootDamage] 20/30/40/50/60 + 0.8 × 法术强度魔法伤害。。基础参数：冷却=14/13/12/11/10；消耗=50/55/60/65/70；范围=625。客户端字段：BaseDamage=15/22.5/30/37.5/45；SlowAmount=-0.3/-0.35/-0.4/-0.45/-0.5；SlowDuration=1；RootDamage=20/30/40/50/60；TotalSpellDuration=3；DelayBetweenSnowballs=0.15；SplashConeLength=225；SplashConeAngle=22.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalSnowballDamage=[BaseDamage] 15/22.5/30/37.5/45 + 0.12 × 法术强度；TotalRootDamage=[RootDamage] 20/30/40/50/60 + 0.8 × 法术强度；RootDuration=0.5–1.5（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/nunu/nunu.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Nunu.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "绝对零度",
        "description": "努努和威朗普在一个区域内创造一阵强大的暴风雪，来减速敌人并在结束时造成巨额伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuR.png",
        "cooldown": "110/100/90",
        "cost": "100",
        "range": "650",
        "numericDetail": "技能文本：努努和威朗普引导一阵强力的暴风雪，至多引导3秒。其中的敌人们会被减速50%，在持续期间不断提升至95%。努努和威朗普在引导期间也会获得[BaseShieldAmount] 65/75/85 + [ShieldBonusHealthPercent] 0.3/0.4/0.5 × 额外生命值 + 1.5 × 法术强度护盾值，在之后的3秒里持续衰减。 当暴风雪结束时，它会爆炸，基于引导时间造成至多[BaseDamage] 625/925/1275 + 3 × 法术强度魔法伤害。 努努和威朗普可以再次施放来使暴风雪提前结束。。基础参数：冷却=110/100/90；消耗=100；范围=650。客户端字段：BaseDamage=625/925/1275；SlowStartAmount=-0.5；MaxSlowAmount=-0.95；ChannelDuration=3；SlowDuration=3；MaxShieldDuration=6；ShieldDecayDuration=3；BaseShieldAmount=65/75/85；ShieldBonusHealthPercent=0.3/0.4/0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalShieldAmount=[BaseShieldAmount] 65/75/85 + [ShieldBonusHealthPercent] 0.3/0.4/0.5 × 额外生命值 + 1.5 × 法术强度；MaximumDamage=[BaseDamage] 625/925/1275 + 3 × 法术强度；MinDamage=([BaseDamage] 625/925/1275 + 3 × 法术强度) × 0.5",
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
        "description": "如果提莫在短时间内静止站立且不受任何伤害，就会进入无定期的隐形状态。如果提莫在草丛中，他就能在移动的同时进入并保持隐形状态。离开隐形状态后，提莫会获得“出奇制胜”的增益效果，提升攻击速度，持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/TeemoPassive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：如果提莫在短时间内静止站立且不受任何伤害，就会进入无定期的隐形状态。如果提莫在草丛中，他就能在移动的同时进入并保持隐形状态。离开隐形状态后，提莫会获得“出奇制胜”的增益效果，提升攻击速度，持续3秒。。客户端字段：AttackSpeedDuration=5；StealthCooldownDuration=1.5。客户端公式：BonusAttackSpeed=0.2（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "致盲吹箭",
        "description": "用一团强力的毒液来侵蚀一名敌人的视野，对目标单位造成伤害并使目标致盲一段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoQ.png",
        "cooldown": "7",
        "cost": "70/75/80/85/90",
        "range": "680",
        "numericDetail": "技能文本：提莫发射一根吹箭，对目标造成2/2.25/2.5/2.75/3秒致盲和[BaseDamage] 80/125/170/215/260 + [APRatio] 0.7 × 法术强度魔法伤害。。基础参数：冷却=7；消耗=70/75/80/85/90；范围=680。客户端字段：BaseDamage=80/125/170/215/260；APRatio=0.7；BlindDuration=2/2.25/2.5/2.75/3；MissChance=1；MinionMonsterDurationMod=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：CalculatedDamage=[BaseDamage] 80/125/170/215/260 + [APRatio] 0.7 × 法术强度；{0f87e4ba}=([BlindDuration] 2/2.25/2.5/2.75/3) × [MinionMonsterDurationMod] 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "小莫快跑",
        "description": "提莫动如脱兔，提升移动速度，直到被敌方英雄或防御塔击中为止。提莫可以通过冲刺来获得额外移动速度，且短时间内不会因被击中而使加速效果中止。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoW.png",
        "cooldown": "14",
        "cost": "40",
        "range": "20",
        "numericDetail": "技能文本：被动：提莫获得12/16/20/24/28%移动速度，前提是在最近5秒内未受到来自敌方英雄或防御塔的伤害。 主动：提莫急速奔跑，获得持续3秒的24/32/40/48/56%移动速度，在被攻击时也不会移除。。基础参数：冷却=14；消耗=40；范围=20。客户端字段：PassiveMoveSpeedBonus=0.12/0.16/0.2/0.24/0.28；ActiveMoveSpeedBuffDuration=3；ActiveMoveSpeedBonus=0.24/0.32/0.4/0.48/0.56；PassiveCooldownOnDamageTaken=5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "毒性射击",
        "description": "提莫每次攻击附带毒液伤害 攻击特效，造成持续性伤害，持续4秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoE.png",
        "cooldown": "0",
        "cost": "0",
        "range": "680",
        "numericDetail": "技能文本：被动：提莫的攻击会施加剧毒 攻击特效，造成额外的[ImpactBaseDamage] 9/23/37/51/65 + [ImpactAPRatio] 0.3 × 法术强度 + [ImpactBonusADRatio] 0.05 × 额外攻击力魔法伤害外加在4秒里持续造成共([TickBaseDamage] 6/12/18/24/30 + [TickAPRatio] 0.1 × 法术强度 + [TickBonusADRatio] 0.025 × 额外攻击力) × [PoisonDuration] 4魔法伤害。。基础参数：冷却=0；消耗=0；范围=680。客户端字段：TickBaseDamage=6/12/18/24/30；TickAPRatio=0.1；ImpactBaseDamage=9/23/37/51/65；ImpactAPRatio=0.3；PoisonDuration=4；TickFrequency=1；MonsterMod=1.6；TickBonusADRatio=0.025；ImpactBonusADRatio=0.05；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TickCalculatedDamage=[TickBaseDamage] 6/12/18/24/30 + [TickAPRatio] 0.1 × 法术强度 + [TickBonusADRatio] 0.025 × 额外攻击力；ImpactCalculatedDamage=[ImpactBaseDamage] 9/23/37/51/65 + [ImpactAPRatio] 0.3 × 法术强度 + [ImpactBonusADRatio] 0.05 × 额外攻击力；TotalDotDamage=([TickBaseDamage] 6/12/18/24/30 + [TickAPRatio] 0.1 × 法术强度 + [TickBonusADRatio] 0.025 × 额外攻击力) × [PoisonDuration] 4；{8b70cfd6}=([ImpactBaseDamage] 9/23/37/51/65 + [ImpactAPRatio] 0.3 × 法术强度 + [ImpactBonusADRatio] 0.05 × 额外攻击力) × [MonsterMod] 1.6；{938cba49}=([TickBaseDamage] 6/12/18/24/30 + [TickAPRatio] 0.1 × 法术强度 + [TickBonusADRatio] 0.025 × 额外攻击力) × [MonsterMod] 1.6",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/teemo/teemo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Teemo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "种蘑菇",
        "description": "提莫投掷一个可爆炸的毒性陷阱，需要消耗提莫背包里的一个蘑菇。陷阱会在被敌方踩中时爆炸，释放出一团毒云，对附近的敌人造成减速效果和持续伤害。如果提莫把一个蘑菇扔到另一个蘑菇上，那么这个蘑菇会进行弹跳，获得额外的距离。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoR.png",
        "cooldown": "0.25",
        "cost": "75/55/35",
        "range": "600/750/900",
        "numericDetail": "技能文本：提莫投掷一个可爆炸的毒性陷阱，需要消耗提莫背包里的一个蘑菇。陷阱会在被敌方踩中时爆炸，释放出一团毒云，对附近的敌人造成减速效果和持续伤害。如果提莫把一个蘑菇扔到另一个蘑菇上，那么这个蘑菇会进行弹跳，获得额外的距离。。基础参数：冷却=0.25；消耗=75/55/35；范围=600/750/900。客户端字段：TriggerRadius=160；MaxAmmo=3/4/5；MaxBounceDistance=360/440/550；ArmTime=1；MushroomDuration=5；BaseDamage=200/325/450；SlowAmount=30/40/50；DebuffDuration=4；APRatioPerTick=0.5；ExplosionRadius=450；MaxTraps=25000；MinTossDistanceBounceThreshold=220/500/500；VisionRadius=210；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 200/325/450 + [APRatioPerTick] 0.5 × 法术强度",
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
        "description": "库奇普通攻击的一部分伤害会转化为真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Corki_RapidReload.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：库奇普通攻击的一部分伤害会转化为真实伤害。。客户端字段：AttackConversion=0.2；InitialCD=10；PackageDuration=45；BonusMS=0.4；SubsequentCD=5。客户端公式：BasicAttackTOOLTIP=[AttackConversion] 0.2 × 攻击力；CriticalStrikeTOOLTIP=([AttackConversion] 0.2 × 攻击力) × 1 × 客户端未命名属性（枚举 9）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 9"
        ]
      },
      {
        "key": "Q",
        "name": "磷光炸弹",
        "description": "库奇向目标区域发射一枚闪光弹，对范围内的敌人造成魔法伤害。这个技能还会暂时让目标区域附近的非隐形的单位和英雄现形。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PhosphorusBomb.png",
        "cooldown": "9/8.5/8/7.5/7",
        "cost": "60/65/70/75/80",
        "range": "825",
        "numericDetail": "技能文本：库奇抛射一颗炸弹，造成[BaseDamage] 60/105/150/195/240 + [ADRatio] 1.25 × 额外攻击力 + [APRatio] 1 × 法术强度魔法伤害。该区域及命中的敌方英雄会被显形6秒。。基础参数：冷却=9/8.5/8/7.5/7；消耗=60/65/70/75/80；范围=825。客户端字段：BaseDamage=60/105/150/195/240；RevealDuration=6；ADRatio=1.25；APRatio=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 60/105/150/195/240 + [ADRatio] 1.25 × 额外攻击力 + [APRatio] 1 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "瓦尔基里俯冲",
        "description": "库奇飞行一小段距离，同时投下炸弹。炸弹会制造出一条毁灭与死亡的路径，对留在路径中的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CarpetBomb.png",
        "cooldown": "20/18/16/14/12",
        "cost": "80/85/90/95/100",
        "range": "600",
        "numericDetail": "技能文本：库奇飞越并烧焦一条路径，使其灼烧2.5秒。火焰中的敌人们在此期间至多受到[BaseDamage] 150/225/300/375/450 + [APRatio] 1.5 × 法术强度 + [ADRatio] 2 × 额外攻击力魔法伤害。。基础参数：冷却=20/18/16/14/12；消耗=80/85/90/95/100；范围=600。客户端字段：BaseDamage=150/225/300/375/450；APRatio=1.5；TrailDuration=2.5；TicksPerSecond=2；MaximumTicks=5；DamageRadius=200；DashSpeedBase=650；DashSpeedRatio=1；MinimumRange=300；MaximumRange=600；ADRatio=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：MaximumDamage=[BaseDamage] 150/225/300/375/450 + [APRatio] 1.5 × 法术强度 + [ADRatio] 2 × 额外攻击力；DashSpeed=[DashSpeedBase] 650 + [DashSpeedRatio] 1 × 客户端未命名属性（枚举 7）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 7"
        ]
      },
      {
        "key": "E",
        "name": "格林机枪",
        "description": "库奇使用格林机枪扫射他面前锥形范围内的敌人，造成伤害并降低敌人护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GGun.png",
        "cooldown": "12",
        "cost": "50/55/60/65/70",
        "range": "600",
        "numericDetail": "技能文本：库奇朝他的前方发射加特林机枪，在4秒里持续造成共[BaseDamage] 80/130/180/230/280 + [ADRatio] 2.4 × 额外攻击力物理伤害并至多击碎12/14/16/18/20护甲和魔法抗性。。基础参数：冷却=12；消耗=50/55/60/65/70；范围=600。客户端字段：BaseDamage=80/130/180/230/280；ADRatio=2.4；SprayDuration=4；TicksPerSecond=4；ShredMax=-12/-14/-16/-18/-20；ShredCap=4；ShredDuration=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 80/130/180/230/280 + [ADRatio] 2.4 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "火箭轰击",
        "description": "库奇朝着他的目标地点发射一枚导弹。导弹会在命中第一个敌人后爆炸，并对目标周围单位造成伤害。库奇每隔一段时间就会挂载一枚导弹，最多挂载7枚。每发射2枚导弹后，下一次就会发射超级导弹，造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissileBarrage.png",
        "cooldown": "2",
        "cost": "35",
        "range": "1225",
        "numericDetail": "技能文本：库奇朝着他的目标地点发射一枚导弹。导弹会在命中第一个敌人后爆炸，并对目标周围单位造成伤害。库奇每隔一段时间就会挂载一枚导弹，最多挂载7枚。每发射2枚导弹后，下一次就会发射超级导弹，造成额外伤害。。基础参数：冷却=2；消耗=35；范围=1225。客户端字段：BaseDamage=90/170/250；ADRatio=0.85；RBaseMissileRadius=200；RBigOneMissileRadius=300；RBigOneMultiplier=2；CDReductionOnHit=2；MaxAmmoTOOLTIP=4；AmmoWhenLearned=2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：RSmallMissileDamage=[BaseDamage] 90/170/250 + [ADRatio] 0.85 × 额外攻击力；RBigMissileDamage=([BaseDamage] 90/170/250 + [ADRatio] 0.85 × 额外攻击力) × [RBigOneMultiplier] 2；AttackRefund=(1 + 2 × 客户端未命名属性（枚举 8）) × [CDReductionOnHit] 2",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/corki/corki.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Corki.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "未命名属性枚举 8"
        ]
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
        "description": "希维尔在攻击一名敌方英雄时，会短暂地获得移动速度提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sivir_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：希维尔在攻击一名敌方英雄时，会短暂地获得移动速度提升。。客户端字段：HasteDuration=1.5。客户端公式：FlatMS=55（按英雄等级变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "回旋之刃",
        "description": "希维尔像挥舞回力标一样挥出她的十字刃，并在往返时造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirQ.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "55/60/65/70/75",
        "range": "1200",
        "numericDetail": "技能文本：希维尔像挥舞回力标一样挥出她的十字刃，并在往返时造成伤害。。基础参数：冷却=10/9.5/9/8.5/8；消耗=55/60/65/70/75；范围=1200。客户端字段：BaseDamage=60/85/110/135/160；ADRatio=0.7；FallOffRatio=0.15；FallOffMinimum=0.4；QAttackSpeedCastReductionPercent=0.5；QBaseCastTime=0.25；QAttackSpeedCastReductionMax=0.6；CritRatio=0.4；APRatio=0.6；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=([BaseDamage] 60/85/110/135/160 + [ADRatio] 0.7 × 额外攻击力 + [APRatio] 0.6 × 法术强度) × (1 + 客户端公式 ProductOfSubPartsCalculationPart)；PreCritDamage=[BaseDamage] 60/85/110/135/160 + [ADRatio] 0.7 × 额外攻击力 + 0.6 × 法术强度；CritScaling=[CritRatio] 0.4 × 客户端未命名属性（枚举 8）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart",
          "未命名属性枚举 8"
        ]
      },
      {
        "key": "W",
        "name": "弹射",
        "description": "希维尔的下几次普通攻击将获得额外攻击速度并弹射到周围的目标上，在弹射时造成削减过的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirW.png",
        "cooldown": "12",
        "cost": "60",
        "range": "20",
        "numericDetail": "技能文本：在接下来的4秒里，希维尔获得20/25/30/35/40%攻击速度并且她的普攻会获得强化，弹射到附近的其它敌人上，每次弹射造成[BounceADRatio] 0.4/0.425/0.45/0.475/0.5 × 攻击力物理伤害，至多弹射8次。 如果生成弹射的那次攻击造成了暴击，那么该次普攻的所有弹射都会暴击。。基础参数：冷却=12；消耗=60；范围=20。客户端字段：BounceADRatio=0.4/0.425/0.45/0.475/0.5；BounceAttacks=3；BuffDuration=4；MaxBounces=8；RicochetAttackSpeed=0.2/0.25/0.3/0.35/0.4；MinionDamageMod=0.65；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：BounceDamage=[BounceADRatio] 0.4/0.425/0.45/0.475/0.5 × 攻击力；FirstTargetDamage=1 × 攻击力；TotalMaxDamage=(1 × 攻击力 + 客户端公式 ProductOfSubPartsCalculationPart)",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "E",
        "name": "法术护盾",
        "description": "制造一层法术屏障，来格挡一次对着希维尔施放的敌方单体技能。如果希维尔成功格挡了一次技能，那么就会回复生命值并获得爆发性的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirE.png",
        "cooldown": "24/22.5/21/19.5/18",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：希维尔制造一层持续1.5秒的法术屏障，来格挡一次即将到来的敌方技能。如果希维尔成功格挡了一次技能，那么就会回复[HealRatio] 0.6/0.65/0.7/0.75/0.8 × 攻击力 + [HealAPRatio] 0.5 × 法术强度生命值并触发【敏锐疾行】。。基础参数：冷却=24/22.5/21/19.5/18；消耗=0；范围=20。客户端字段：HealRatio=0.6/0.65/0.7/0.75/0.8；SpellShieldDuration=1.5；HealAPRatio=0.5；effect1amount=1.5；effect2amount=55；effect3amount=60；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHeal=[HealRatio] 0.6/0.65/0.7/0.75/0.8 × 攻击力 + [HealAPRatio] 0.5 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/sivir/sivir.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Sivir.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "狩猎",
        "description": "希维尔在战斗中引领她的友军，为他们提供持续一段时间的爆发性移动速度加成。此外，希维尔的攻击会缩短她的技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "1000",
        "numericDetail": "技能文本：希维尔在战斗中引领附近的友军，为他们提供持续8/10/12秒的20/25/30%移动速度。 在【狩猎】激活期间，希维尔对英雄进行的攻击会使她的基础技能的冷却时间缩短0.5秒。 参与击杀近期造成过伤害的敌人会刷新【狩猎】的持续时长。。基础参数：冷却=120/100/80；消耗=100；范围=1000。客户端字段：HuntAttackSpeed=0.05/0.06/0.07；MaxMS=0.2/0.25/0.3；MinMS=0.3/0.35/0.4；MaxMSDuration=2/3/4；UltDuration=8/10/12；AuraRange=1000；BuffExtension=8/10/12；DamagedMarkerDuration=3；AttackCooldownRefund=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
        "description": "在数次技能或攻击后，潘森的下一个技能会得到强化。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Pantheon_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：在数次技能或攻击后，潘森的下一个技能会得到强化。。客户端字段：ActionsToEmpower=5；PhalanxDuration=3；QDamageAmp=0.4；QDamageAmpMelee=0.7；OutOfCombatTimer=15；QExtraAttacks=1；CritThreshold=-1",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "贯星长枪",
        "description": "潘森朝着选定方向刺出或投掷他的长枪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonQ.png",
        "cooldown": "11/10.25/9.5/8.75/8",
        "cost": "25",
        "range": "575",
        "numericDetail": "技能文本：秒放：潘森刺出他的长枪，对命中的敌人们造成[TapDamage] 70/100/130/160/190 + 1.15 × 额外攻击力物理伤害。返还这个技能60%的冷却时间。 蓄力：潘森挥出他的长枪，对命中的首个敌人造成[HoldDamage] 70/100/130/160/190 + 1.15 × 额外攻击力 + 0.5 × 法术强度物理伤害并对后续目标造成的伤害减少50%。 这个技能在对抗低于20%生命值的敌人时会获得强化，造成([HoldDamage] 70/100/130/160/190 + [HoldExecuteDamage] 85/130/175/220/265) + 2.3 × 额外攻击力物理伤害作为替代。 矢志不退加成：造成额外的20–240（1–18级） + 1.15 × 额外攻击力物理伤害。。基础参数：冷却=11/10.25/9.5/8.75/8；消耗=25；范围=575。客户端字段：HoldDamage=70/100/130/160/190；TapDamage=70/100/130/160/190；CritHealthThreshold=0.2；HoldRange=1200；DamageFalloff=0.5；TapCooldownRefund=0.6；HoldExecuteDamage=85/130/175/220/265；SelfSlow=0.1；MinTimeHoldCast=0.35；MinionDamageMod=0.7；ExecuteBaseDamage=155/230/305/380/455；MonsterDamageMod=0.8；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：HoldDamageCalc=[HoldDamage] 70/100/130/160/190 + 1.15 × 额外攻击力 + 0.5 × 法术强度；TapDamageCalc=[TapDamage] 70/100/130/160/190 + 1.15 × 额外攻击力；EmpoweredDamageCalc=20–240（1–18级） + 1.15 × 额外攻击力；{6fc04dc0}=[HoldExecuteDamage] 85/130/175/220/265 + 1.15 × 额外攻击力；ExecuteDamageCalcModified=([HoldDamage] 70/100/130/160/190 + [HoldExecuteDamage] 85/130/175/220/265) + 2.3 × 额外攻击力",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "斗盾跃击",
        "description": "潘森跃向一个目标，对其造成伤害和晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonW.png",
        "cooldown": "13/12/11/10/9",
        "cost": "55",
        "range": "600",
        "numericDetail": "技能文本：潘森跃向他的目标，晕眩1秒并造成[MaxHealthDamage] 0.06/0.065/0.07/0.075/0.08 + 0 × 额外最大生命值 + [MaxHealthPer100AP] 0.0002 × 法术强度最大生命值物理伤害。 矢志不退加成：潘森的下一次攻击会打击3次，总共造成(0.4–0.55（1–18级） × 攻击力) × 3物理伤害。。基础参数：冷却=13/12/11/10/9；消耗=55；范围=600。客户端字段：BaseDamage=0；StunDuration=1；BuffDuration=4；EmpoweredNumHits=3；EmpoweredDamageMult=0.6；MaxHealthDamage=0.06/0.065/0.07/0.075/0.08；MonsterDamageCap=150；MonsterDamageMin=60；MaxHealthPer100AP=0.0002；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=[BaseDamage] 0 + 1 × 法术强度；{1b016817}=0.4–0.55（1–18级） × 攻击力；EmpoweredDamageMultCalcModified=(0.4–0.55（1–18级） × 攻击力) × 3；MaxHealthDamageCalc=[MaxHealthDamage] 0.06/0.065/0.07/0.075/0.08 + 0 × 额外最大生命值 + [MaxHealthPer100AP] 0.0002 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "神佑枪阵",
        "description": "潘森架起他的圣盾，变得免疫来自前方的伤害，并快速地用他的长枪戳刺。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonE.png",
        "cooldown": "22/21/20/19/18",
        "cost": "80",
        "range": "400",
        "numericDetail": "技能文本：潘森架起他的圣盾并与选定方向上的敌人交战1.5秒，变得免疫来自所选方向的伤害(防御塔除外)并在持续期间造成1 × 攻击力物理伤害。在引导之后，潘森会用他的圣盾进行猛击，造成[ShieldBaseDamage] 55/105/155/205/255 + 1.5 × 额外攻击力物理伤害。 矢志不退加成：当潘森猛击他的圣盾时，获得持续4秒的5–30（1–18级） + 0.025 × 额外最大生命值护甲和5–30（1–18级） + 0.025 × 额外最大生命值魔法抗性，以及持续1.5秒的60%移动速度。。基础参数：冷却=22/21/20/19/18；消耗=80；范围=400。客户端字段：ShieldDuration=1.5；AttacksPerSecond=4；ShieldBaseDamage=55/105/155/205/255；SpearStrikesRadius=525；ShieldSwipeRadius=375；MinionDamageReduction=0.5；RecastLockout=0.3；SpeedDuration=1.5；SpeedAmount=0.6；ResistsDuration=4；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=1 × 攻击力；ShieldDamageCalc=[ShieldBaseDamage] 55/105/155/205/255 + 1.5 × 额外攻击力；{e62bc5e9}=(1 × 攻击力) × 0.167；EmpoweredDamageCalc=(1 × 攻击力) × 1.67；HealCalc=40（初始每级 +5，按客户端断点变化） + 1.5 × 额外攻击力；ResistsCalc=5–30（1–18级） + 0.025 × 额外最大生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/pantheon/pantheon.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Pantheon.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "大荒星陨",
        "description": "潘森屏气凝神然后跃至空中， 随后如流星一般落到选定的位置上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonR.png",
        "cooldown": "180/165/150",
        "cost": "100",
        "range": "5500",
        "numericDetail": "技能文本：潘森屏气凝神然后跃至空中， 随后如流星一般落到选定的位置上。。基础参数：冷却=180/165/150；消耗=100；范围=5500。客户端字段：BaseDamage=300/500/700；EdgeDamageReduction=0.5；Radius=450；SweetSpotRadius=125；CancelCooldown=30；SpearSlow=0.5；SpearSlowDuration=2；ArmorPenetration=0.1/0.2/0.3；APRatio=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：DamageCalc=[BaseDamage] 300/500/700 + [APRatio] 1 × 法术强度；MinDamage=([BaseDamage] 300/500/700 + [APRatio] 1 × 法术强度) × [EdgeDamageReduction] 0.5",
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
        "description": "布里茨在血量过低时会获得一层基于它法力值的护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Blitzcrank_ManaBarrier.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：布里茨在血量过低时会获得一层基于它法力值的护盾。。客户端字段：HealthThreshold=0.3；ManaPercent=0.35；ShieldDuration=10；Cooldown=90；ManaRatio=1。客户端公式：ShieldAmount=0.35 × 当前资源",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "机械飞爪",
        "description": "布里茨发射它的右手，来抓取碰到的第一个敌人，在对敌人造成伤害的同时，还会将这名敌人拉到它的面前。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RocketGrab.png",
        "cooldown": "20/19/18/17/16",
        "cost": "100",
        "range": "1079",
        "numericDetail": "技能文本：布里茨射出它的右拳，将命中的第一个敌人拉拽向它并造成[BaseDamage] 110/160/210/260/310 + [APRatio] 1.2 × 法术强度魔法伤害。。基础参数：冷却=20/19/18/17/16；消耗=100；范围=1079。客户端字段：BaseDamage=110/160/210/260/310；LolipopLength=70；APRatio=1.2；effect1amount=90/140/190/240/290；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 110/160/210/260/310 + [APRatio] 1.2 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "过载运转",
        "description": "布里茨对自己进行了超级充电，它的攻击速度和移动速度得到了显著提升。它会在效果结束后暂时减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Overdrive.png",
        "cooldown": "15",
        "cost": "75",
        "range": "1",
        "numericDetail": "技能文本：布里茨进行超级充能，获得持续衰减的60/65/70/75/80%移动速度和30/40/50/60/70%攻击速度，持续5秒。 持续期间过后，布里茨会减速30%，持续1.5秒。。基础参数：冷却=15；消耗=75；范围=1。客户端字段：MoveSpeedMod=0.6/0.65/0.7/0.75/0.8；AttackSpeedMod=0.3/0.4/0.5/0.6/0.7；Duration=5；MoveSpeedModReduction=0.3；SlowDuration=1.5；MoveSpeedModMin=0.1；MoveSpeedModMinTime=2.5；PercentHealthDamage=0.01；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：{c01903c1}=60（初始每级 +20，按客户端断点变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "能量铁拳",
        "description": "布里茨为机械手臂充能，下次攻击造成双倍伤害并击飞目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PowerFist.png",
        "cooldown": "7/6.5/6/5.5/5",
        "cost": "25",
        "range": "300",
        "numericDetail": "技能文本：布里茨给它的拳头充能，使它的下次攻击可以击飞1秒并造成2 × 攻击力 + 0.25 × 法术强度物理伤害。。基础参数：冷却=7/6.5/6/5.5/5；消耗=25；范围=300。客户端字段：CCDuration=1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=2 × 攻击力 + 0.25 × 法术强度；{a9d6b924}=1.75 × 攻击力 + 1.25 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/blitzcrank/blitzcrank.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Blitzcrank.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "静电力场",
        "description": "被布里茨攻击过的敌人会被标记并在1秒后受到闪电伤害。此外，布里茨可以主动激活这个技能来移除附近敌人们的护盾、对他们造成伤害并暂时沉默他们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/StaticField.png",
        "cooldown": "60/40/20",
        "cost": "100",
        "range": "600",
        "numericDetail": "技能文本：被动：在这个技能可以使用时，闪电会充盈着布里茨的双拳，标记它攻击的敌人。在1秒后，被标记的敌人会被震击，受到[PassiveBaseDamage] 50/100/150 + [PassiveAPRatio] 0.3/0.4/0.5 × 法术强度 + 0.02 × 当前资源魔法伤害。 主动：布里茨进行过度充能，对附近的敌人造成[ActiveBaseDamage] 275/400/525 + [ActiveAPRatio] 1 × 法术强度魔法伤害和0.5秒沉默效果。敌人的护盾也会被摧毁。。基础参数：冷却=60/40/20；消耗=100；范围=600。客户端字段：PassiveBaseDamage=50/100/150；ZapCountdown=1；ActiveRange=600；ActiveBaseDamage=275/400/525；SilenceDuration=0.5；PassiveAPRatio=0.3/0.4/0.5；ActiveAPRatio=1；PassiveManaRatio=0.05；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：ActiveDamage=[ActiveBaseDamage] 275/400/525 + [ActiveAPRatio] 1 × 法术强度；PassiveDamage=[PassiveBaseDamage] 50/100/150 + [PassiveAPRatio] 0.3/0.4/0.5 × 法术强度 + 0.02 × 当前资源",
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
        "description": "索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Soraka_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。。客户端字段：MovementSpeed=0.9；HealthThreshold=0.4",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "流星坠落",
        "description": "一颗流星从天而降，落在目标地点，造成魔法伤害，并对区域中心的敌人造成减速效果。如果一名敌人被此技能命中，那么索拉卡就会回复生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaQ.png",
        "cooldown": "8/7/6/5/4",
        "cost": "45/50/55/60/65",
        "range": "810",
        "numericDetail": "技能文本：索拉卡召唤下一颗星星，造成[BaseDamage] 85/120/155/190/225 + 0.35 × 法术强度魔法伤害和持续1.5秒的30%减速效果。 命中一个敌方英雄时会为索拉卡提供活力焕发，在2.5秒里持续回复共[BaseHoT] 60/75/90/105/120 + [HealAPRatio] 0.3 × 法术强度生命值并提供在此期间持续衰减的20/22.5/25/27.5/30%移动速度。。基础参数：冷却=8/7/6/5/4；消耗=45/50/55/60/65；范围=810。客户端字段：BaseDamage=85/120/155/190/225；BaseHoT=60/75/90/105/120；HotDuration=2.5；MoveSpeedSlow=0.3；SlowDuration=1.5；MoveSpeedHaste=0.2/0.225/0.25/0.275/0.3；MoveSpeedDuration=2.5；HealAPRatio=0.3；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 85/120/155/190/225 + 0.35 × 法术强度；TotalHot=[BaseHoT] 60/75/90/105/120 + [HealAPRatio] 0.3 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "W",
        "name": "星之灌注",
        "description": "索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaW.png",
        "cooldown": "6/5/4/3/2",
        "cost": "40/45/50/55/60",
        "range": "550",
        "numericDetail": "技能文本：索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。。基础参数：冷却=6/5/4/3/2；消耗=40/45/50/55/60；范围=550。客户端字段：BaseHeal=90/110/130/150/170；PercentHealthCost=0.1；MinimumPercentHealth=0.05；PercentHealthCostRefund=0.8/0.85/0.9/0.95/1；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalHeal=[BaseHeal] 90/110/130/150/170 + 0.5 × 法术强度；MinimumHealth=[MinimumPercentHealth] 0.05 × 最大生命值",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "星体结界",
        "description": "在目标区域创造一个结界，沉默结界中的所有敌人。当结界消散时，仍在结界内的敌人会被禁锢。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaE.png",
        "cooldown": "20/19/18/17/16",
        "cost": "70/75/80/85/90",
        "range": "925",
        "numericDetail": "技能文本：索拉卡创造一个星之领域，对英雄造成[BaseDamage] 70/95/120/145/170 + 0.4 × 法术强度魔法伤害。领域会存留1.5秒，沉默其中的敌人们。当领域消失后，领域中的英雄们会被禁锢1/1.25/1.5/1.75/2秒并受到[BaseDamage] 70/95/120/145/170 + 0.4 × 法术强度魔法伤害。。基础参数：冷却=20/19/18/17/16；消耗=70/75/80/85/90；范围=925。客户端字段：BaseDamage=70/95/120/145/170；RootDuration=1/1.25/1.5/1.75/2；RootDelay=1.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[BaseDamage] 70/95/120/145/170 + 0.4 × 法术强度",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/soraka/soraka.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/Soraka.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "祈愿",
        "description": "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaR.png",
        "cooldown": "150/135/120",
        "cost": "100",
        "range": "25000",
        "numericDetail": "技能文本：索拉卡召唤神圣的能量，来为所有友方英雄回复[BaseHeal] 150/250/350 + 0.5 × 法术强度生命值，无论相距多远。对生命值低于40%的友方英雄的回复效果提升至([BaseHeal] 150/250/350 + 0.5 × 法术强度) × (1 + [HealingAmpForLowHealthAllies] 0.5)。。基础参数：冷却=150/135/120；消耗=100；范围=25000。客户端字段：BaseHeal=150/250/350；HealingAmpForLowHealthAllies=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：HealingCalc=[BaseHeal] 150/250/350 + 0.5 × 法术强度；AmpedHealing=([BaseHeal] 150/250/350 + 0.5 × 法术强度) × (1 + [HealingAmpForLowHealthAllies] 0.5)",
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
        "description": "蒙多医生抵抗他受到的第一个定身效果，但会失去生命值并在附近掉落一罐化学药剂。蒙多医生可移动到化学药剂上来拾取它，从而回复生命值并缩短这个技能的冷却时间。 蒙多医生也会显著提升生命回复。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/DrMundo_P.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": "技能文本：蒙多医生抵抗他受到的第一个定身效果，但会失去生命值并在附近掉落一罐化学药剂。蒙多医生可移动到化学药剂上来拾取它，从而回复生命值并缩短这个技能的冷却时间。 蒙多医生也会显著提升生命回复。。客户端字段：CannisterGroundDuration=7；CannisterPickupRadius=115；CannisterDistanceAway=525；CannisterMaxAngle=70；VFXLineIndicatorRange=1000；PassiveCooldownRefund=15；CurrentHealthLoss=0.04；MaxHealthGain=0.04。客户端公式：PassiveCooldown=60（按英雄等级变化）；MaxHealthRegen=0.004（初始每级 +0.0005，按客户端断点变化）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "Q",
        "name": "病毒屠刀",
        "description": "蒙多医生掷出一把沾染病菌的骨锯，对命中的第一个敌人造成基于其当前生命值的魔法伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoQ.png",
        "cooldown": "4",
        "cost": "0",
        "range": "975",
        "numericDetail": "技能文本：蒙多医生掷出一把沾染病菌的骨锯，对命中的第一个敌人造成基于其当前生命值的魔法伤害和减速效果。。基础参数：冷却=4；消耗=0；范围=975。客户端字段：SlowDuration=2；SlowAmount=0.4；CurrentHealthDamage=0.2/0.225/0.25/0.275/0.3；MinimumDamage=80/130/180/230/280；MaximumMonsterDamage=250/325/400/475/550；HealthCost=50/60/70/80/90；HealthRefundOnHitChampionMonsterPercent=1；HealthRefundOnHitMinionPercent=0.5；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：HealthRestoreOnHitChampionMonster=客户端公式 ProductOfSubPartsCalculationPart；HealthRestoreOnHitMinion=客户端公式 ProductOfSubPartsCalculationPart",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "partial",
        "unresolvedTokens": [
          "公式部件 ProductOfSubPartsCalculationPart"
        ]
      },
      {
        "key": "W",
        "name": "电击疗法",
        "description": "蒙多医生电击他自己，对附近的敌人们造成持续伤害并储存他受到的一部分伤害。在持续时间结束时或再次施放时，蒙多医生会对附近的敌人们造成一次爆发伤害。如果这个效果命中了一名敌人，那么蒙多医生会回复一部分已储存的伤害值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoW.png",
        "cooldown": "17/16.5/16/15.5/15",
        "cost": "0",
        "range": "325",
        "numericDetail": "技能文本：蒙多医生为一台除颤器充电，每秒对附近的敌人们造成20/35/50/65/80魔法伤害，至多持续3秒。此外，他会将在最初0.75秒里受到的0.8–0.95（1–18级）伤害值和在剩余时长里受到的25%伤害值储存为灰色生命值，并能再次施放这个技能。 再次施放：引爆除颤器，对附近的敌人们造成[RecastBaseDamage] 20/35/50/65/80 + 0.07 × 额外最大生命值魔法伤害。如果这个效果命中了至少一名敌方英雄，那么蒙多医生会回复100%的灰色生命值，否则蒙多医生会转而回复50%的灰色生命值。。基础参数：冷却=17/16.5/16/15.5/15；消耗=0；范围=325。客户端字段：Duration=3；CurrentHealthCost=0.08；GrayHealthStorage=0.25；GrayHealthInitialDuration=0.75；GrayHealthBigMod=1；GrayHealthSmallMod=0.5；SecondCastRange=325；SecondCastLockout=0.5；DamagePerTick=5/8.75/12.5/16.25/20；RecastBaseDamage=20/35/50/65/80；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：TotalDamage=[RecastBaseDamage] 20/35/50/65/80 + 0.07 × 额外最大生命值；GrayHealthStorageInitial=0.8–0.95（1–18级）",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "E",
        "name": "大力行医",
        "description": "被动 - 蒙多医生获得额外攻击力，数额会基于他的最大生命值而提升。 主动 - 蒙多医生用他的“医用”手提包猛砸一个敌人，造成基于他已损失生命值的额外伤害。如果这个敌人被击杀，那么还会被拍飞，对途经的所有敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoE.png",
        "cooldown": "9/8.25/7.5/6.75/6",
        "cost": "0",
        "range": "0",
        "numericDetail": "技能文本：被动：蒙多医生获得([HealthToADRatio] 2/2.3/2.6/2.9/3.2 × 最大生命值) × 0.01攻击力。 主动：蒙多医生粗暴地挥舞他的“医用”手提包，使他的下次攻击造成额外的[BaseDamage] 5/15/25/35/45 + [BonusHealthRatio] 0.05 × 额外生命值物理伤害，基于他的已损失生命值至多提升至[MaxDamageAmp] 1.4 + -1。如果击杀了目标敌人，蒙多还会将其拍飞，对其途经的所有敌人造成[BaseDamage] 5/15/25/35/45 + [BonusHealthRatio] 0.05 × 额外生命值物理伤害。。基础参数：冷却=9/8.25/7.5/6.75/6；消耗=0；范围=0。客户端字段：AttackOverrideDuration=4；FlatHealthCost=10/25/40/55/70；BaseDamage=5/15/25/35/45；BonusHealthRatio=0.05；MaxMissingHealthThreshold=0.7；MaxDamageAmp=1.4；MinionMod=1.4；MissileDistance=800；MonsterMod=1.4；HealthToADRatio=2/2.3/2.6/2.9/3.2；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0。客户端公式：AdditionalDamage=[BaseDamage] 5/15/25/35/45 + [BonusHealthRatio] 0.05 × 额外生命值；MaxDamageAmpTooltip=[MaxDamageAmp] 1.4 + -1；PassiveBonusAD=([HealthToADRatio] 2/2.3/2.6/2.9/3.2 × 最大生命值) × 0.01",
        "numericVersion": "Riot Data Dragon 16.15.1 / CommunityDragon 16.15",
        "sourceUrl": "https://raw.communitydragon.org/16.15/game/data/characters/drmundo/drmundo.bin.json",
        "dataDragonSourceUrl": "https://ddragon.leagueoflegends.com/cdn/16.15.1/data/zh_CN/champion/DrMundo.json",
        "numericStatus": "available",
        "unresolvedTokens": []
      },
      {
        "key": "R",
        "name": "极限剂量",
        "description": "蒙多医生给自己注入化学药剂，立刻治疗他的一部分已损失生命值。随后他会获得移动速度并在一段长周期内持续回复自身一部分最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoR.png",
        "cooldown": "120",
        "cost": "0",
        "range": "20",
        "numericDetail": "技能文本：蒙多将化学药剂注入体内，获得相当于他15/20/25%已损失生命值的最大生命值、15/25/35%移动速度、并在10秒里持续回复共20/40/60%最大生命值。 在3级时，附近的每个敌方英雄都会使这两种治疗效果提升额外的5%。。基础参数：冷却=120；消耗=0；范围=20。客户端字段：Duration=10；SpeedBoostAmount=0.15/0.25/0.35；MissingHealthHeal=0.15/0.2/0.25；MaxHealthHoT=0.2/0.4/0.6；TakedownDurationExtension=2；BonusPerNearbyChampion=0.05；effect1amount=0；effect2amount=0；effect3amount=0；effect4amount=0；effect5amount=0；effect6amount=0；effect7amount=0；effect8amount=0；effect9amount=0；effect10amount=0",
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
    "description": "获得[APRatio] 3 × 法术强度护盾值。阵亡时或耗尽后70秒重置。",
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
    "description": "定身或缚地一个敌方英雄后获得150–450（1–18级） + [HealthScalar] 0.04 × 最大生命值护盾值。",
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
    "description": "获得[APToHasteConversion] 0.3 × 法术强度技能急速。",
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
    "description": "你的攻击造成额外[HealthPercent] 0.035 × 最大生命值物理伤害。",
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
    "description": "你的技能可以造成暴击。 获得 [CritChance] 0.25 + [CritConverRatio] 0.0004 × 法术强度暴击几率。",
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
    "description": "在使用一次冲刺、闪烁或传送之后，你获得12护甲和魔法抗性，这个效果至多可叠加至5层。",
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
    "description": "你的法力值消耗翻倍。你的技能的治疗效果、护盾效果和伤害的效能提升([InitialAmpPercent] 10 + 0.005 × 当前资源) × 0.01。",
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
    "description": "获得[InitialHS] 25 + [ConversionRate] 0.35 × 额外护甲 + [ConversionRate] 0.35 × 额外魔法抗性%治疗和护盾强度，基于额外护甲和魔抗。",
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
    "description": "你的攻击会为你提供8移动速度 攻击特效。 获得等同于你移动速度10%的攻击速度。",
    "tags": [
      "attack",
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
    "description": "【璀璨回响】和【日炎圣盾】每当有目标受到【献祭】效果影响时，提供12 金币 。获得250金币。",
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
    "description": "对敌人造成伤害时会施加一层持续4秒的1.5%护甲和魔法抗性击碎效果，至多在20层时击碎[Shred] 0.015 + [MaxStacks] 20 + 10%。",
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
    "description": "在降至35%生命值时，获得巨量[ShieldRatio] 0.65 × 最大生命值持续衰减的护盾、持续衰减的150%移动速度和持续衰减的缩小效果。(75秒冷却时间)",
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
    "description": "减少30%最大生命值。造成[TrueDamagePerc] 0.25额外真实伤害。",
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
    "description": "你的雪球获得50技能急速。 击中时会产生一片区域，使其中的敌人受到[BaseSlowAmount] 0.5 + [SlowPer100AP] 0.0006 × 法术强度减速效果，以及在2秒的持续时间里每秒造成[BaseDamagePerSecond] 100 + [APRatioPerSecond] 0.6 × 法术强度 + [BonusADRatio] 1 × 额外攻击力魔法伤害(总计([BaseDamagePerSecond] 100 + [APRatioPerSecond] 0.6 × 法术强度 + [BonusADRatio] 1 × 额外攻击力) × [BaseDuration] 2魔法伤害)。",
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
    "description": "你的雪球获得100技能急速。 你的雪球现在变得非常大，并且可以穿过小兵。它会对敌人造成持续2秒的20%减速， 将他们击飞0.75秒，并造成额外200–350（1–18级） + [APRatio] 0.6 × 法术强度 + [bADRatio] 1 × 额外攻击力伤害。 如果你没有雪球，则获得一个雪球。",
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
    "description": "获得15%治疗和护盾强度。获得至高天诺言作为一个召唤师技能。 警惕 传送至你的友军并在着陆时提供持续3秒的100–250（1–18级） + [ShieldRatioAP] 1 × 法术强度 + [ShieldRatioBHealth] 0.1 × 额外最大生命值护盾值。",
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
    "description": "在冲刺或闪烁后，获得持续2秒的65–290（1–18级） + [APPercent] 0.26 × 法术强度 + [ADPercent] 0.65 × 额外攻击力护盾值。 (5秒冷却时间)",
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
    "description": "即刻：获得1个【斑比的熔渣】。 任务：持有日炎圣盾和 璀璨回响。 奖励：将【日炎圣盾】 和【璀璨回响】 合成为【虚空献祭】 。",
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
    "description": "获得60技能急速，外加每次参与击杀3技能急速。",
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
    "description": "定身一个敌方英雄时会提供20最大生命值。",
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
    "description": "获得生机迸发作为一个召唤师技能。 生机迸发会猛然提升你的体型，击飞附近的敌人们1秒并提供持续7秒的[BonusHealth] 300 + 0.2 × 最大生命值最大生命值。",
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
    "description": "在使用你的终极技能后，获得持续2秒的0.5伤害减免，然后你嘲讽其中的敌人们2秒。 获得30终极技能急速。",
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
    "description": "造成技能伤害时，发射1+[AdditionalMisDivision] 3 × 客户端未命名属性（枚举 8）个飞弹，每个造成10–30（1–18级） + [ADRatio] 0.07 × 额外攻击力 + [APRatio] 0.07 × 法术强度魔法伤害。 此外，获得25%暴击几率。",
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
    "description": "当你暴击时，发射飞弹造成魔法伤害。 获得 25%暴击几率。",
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
    "description": "获得【客户端未提供静态值：Calc_Crit_Chance】暴击几率和【客户端未提供静态值：Calc_AS】攻击速度（随法术强度变化）。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Crit_Chance, Calc_AS",
    "unresolvedTokens": [
      "Calc_Crit_Chance",
      "Calc_AS"
    ],
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
    "description": "你的暴击施加一次额外的攻击特效。 获得 【客户端未提供静态值：Calc_Crit_Chance】暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Crit_Chance",
    "unresolvedTokens": [
      "Calc_Crit_Chance"
    ],
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
    "description": "攻击特效消耗【客户端未提供静态值：Calc_Mana_Cost】法力值以造成【客户端未提供静态值：Calc_Damage】魔法伤害，这个伤害可以暴击。 已造成的伤害：对局内实时值 已消耗的法力值：对局内实时值",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Mana_Cost, Calc_Damage",
    "unresolvedTokens": [
      "Calc_Mana_Cost",
      "Calc_Damage"
    ],
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
    "description": "站在草丛中时，每秒回复0.006–0.021（1–18级）最大生命值。",
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
    "description": "【魄罗佳肴】会每25–15（1–18级）秒出现在你周围。投喂魄罗会给你魄罗之爱层数。在5层时，解锁魄罗冲锋召唤师技能。投喂更多魄罗会提升你发动攻势的波次。 魄罗冲锋：发动若干波次的魄罗攻势，对敌方英雄们造成100–200（1–18级） + 20 × 【客户端字段未命名：515f1819】层数物理伤害。 你当前可发动对局内实时值波魄罗攻势。 魄罗们仅能命中单个敌人，并且仅有第一波攻势会击飞敌人们。 “噢吼！它们可真萌啊！”——魄罗驯养人",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：{515f1819}",
    "unresolvedTokens": [
      "{515f1819}"
    ],
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
    "description": "任务：用【所选技能】技能命中敌方英雄【客户端未提供静态值：QuestRequirement】次。 奖励：发射数量基于任务等级的额外飞弹。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "获得召唤师技能当黑暗到来。 当黑暗到来：发射一道灿烂之光到一个位置。它着陆时，区域内的所有活着的单位都将在接下来的8秒期间被送到一个不同的领域。 在你处于这个领域时，你获得： 300–1500（1–18级）生命值 35–150（1–18级）法术强度 35–150（1–18级）攻击力 0.35体型 所有单位在该领域中都能自由地移动和行动，但不能以战略点(诸如防御塔或召唤水晶)为目标。 “跟随你的光明……”——一个迷失的灵魂",
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
    "description": "当【所选技能】技能对敌方英雄造成伤害时，获得1（按英雄等级变化）护甲和魔法抗性。",
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
    "description": "在你的【所选技能】技能持续期间获得150攻击距离和0.75攻击速度。",
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
    "description": "任务：用【所选技能】技能命中敌方英雄【客户端未提供静态值：QuestRequirement】次 奖励：【所选技能】技能获得技能急速，基于任务等级，至多至(2) × [AbilityHasteReward] 80。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "任务：用技能狙击【客户端未提供静态值：QuestRequirement】个敌方英雄 奖励：一颗流星会飞向被狙击的敌方英雄，在其周围的一个区域内造成魔法伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "任务：用【所选技能】技能命中敌人【客户端未提供静态值：QuestRequirement】次。 奖励：永久提升【所选技能】技能伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "你的装备和强化符文伤害提升【客户端未提供静态值：Calc_Damage_Amp】。 额外伤害：对局内实时值",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Damage_Amp",
    "unresolvedTokens": [
      "Calc_Damage_Amp"
    ],
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
    "description": "获得【客户端未提供静态值：Calc_Vamp】全能吸血。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Vamp",
    "unresolvedTokens": [
      "Calc_Vamp"
    ],
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
    "description": "用【所选技能】技能打击一个敌方英雄时，为你提供持续6秒的【客户端未提供静态值：Calc_Resists】护甲或魔法抗性，基于该技能的伤害类型。这个效果可以叠加。 最大防护等级：对局内实时值",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Resists",
    "unresolvedTokens": [
      "Calc_Resists"
    ],
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
    "description": "任务：治疗友方英雄【客户端未提供静态值：QuestRequirement】生命值。 奖励：你提供的任何治疗效果现在还会在3秒里提供相当于25%初始治疗量的持续治疗效果。 已造成的治疗：【客户端未提供静态值：QuestProgress】 / 【客户端未提供静态值：QuestRequirement】\\n",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement, QuestProgress",
    "unresolvedTokens": [
      "QuestRequirement",
      "QuestProgress"
    ],
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
    "description": "获得[APRatio] 3 × 法术强度护盾值。阵亡时或耗尽后70秒重置。",
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
    "description": "获得召唤师技能欺诈魔术。 欺诈魔术：你传送并变为隐形。你在隐形状态下的下一次攻击造成额外物理伤害。在你阵亡时，生成一个爆炸盒子来对附近的敌人们造成大量魔法伤害和恐惧。",
    "tags": [
      "attack",
      "spell",
      "utility"
    ],
    "classicExclusive": true,
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
    "description": "定身或缚地一个敌方英雄后获得150–450（1–18级） + [HealthScalar] 0.04 × 最大生命值护盾值。",
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
    "description": "你的攻击造成额外[HealthPercent] 0.035 × 最大生命值物理伤害。",
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
    "description": "你的技能可以造成暴击。 获得 [CritChance] 0.25 + [CritConverRatio] 0.0004 × 法术强度暴击几率。",
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
    "description": "在使用一次冲刺、闪烁或传送之后，你获得12护甲和魔法抗性，这个效果至多可叠加至5层。",
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
    "description": "你的法力值消耗翻倍。你的技能的治疗效果、护盾效果和伤害的效能提升([InitialAmpPercent] 10 + 0.005 × 当前资源) × 0.01。",
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
    "description": "获得[InitialHS] 25 + [ConversionRate] 0.35 × 额外护甲 + [ConversionRate] 0.35 × 额外魔法抗性%治疗和护盾强度，基于额外护甲和魔抗。",
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
    "description": "你的攻击会为你提供8移动速度 攻击特效。 获得等同于你移动速度10%的攻击速度。",
    "tags": [
      "attack",
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
    "description": "对敌人造成伤害时会施加一层持续4秒的1.5%护甲和魔法抗性击碎效果，至多在20层时击碎[Shred] 0.015 + [MaxStacks] 20 + 10%。",
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
    "description": "在降至35%生命值时，获得巨量[ShieldRatio] 0.65 × 最大生命值持续衰减的护盾、持续衰减的150%移动速度和持续衰减的缩小效果。(75秒冷却时间)",
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
    "description": "减少30%最大生命值。造成[TrueDamagePerc] 0.25额外真实伤害。",
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
    "description": "你的雪球获得50技能急速。 击中时会产生一片区域，使其中的敌人受到[BaseSlowAmount] 0.5 + [SlowPer100AP] 0.0006 × 法术强度减速效果，以及在2秒的持续时间里每秒造成[BaseDamagePerSecond] 100 + [APRatioPerSecond] 0.6 × 法术强度 + [BonusADRatio] 1 × 额外攻击力魔法伤害(总计([BaseDamagePerSecond] 100 + [APRatioPerSecond] 0.6 × 法术强度 + [BonusADRatio] 1 × 额外攻击力) × [BaseDuration] 2魔法伤害)。",
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
    "description": "你的雪球获得100技能急速。 你的雪球现在变得非常大，并且可以穿过小兵。它会对敌人造成持续2秒的20%减速， 将他们击飞0.75秒，并造成额外200–350（1–18级） + [APRatio] 0.6 × 法术强度 + [bADRatio] 1 × 额外攻击力伤害。 如果你没有雪球，则获得一个雪球。",
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
    "description": "获得15%治疗和护盾强度。获得至高天诺言作为一个召唤师技能。 警惕 传送至你的友军并在着陆时提供持续3秒的100–250（1–18级） + [ShieldRatioAP] 1 × 法术强度 + [ShieldRatioBHealth] 0.1 × 额外最大生命值护盾值。",
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
    "description": "在冲刺或闪烁后，获得持续2秒的65–290（1–18级） + [APPercent] 0.26 × 法术强度 + [ADPercent] 0.65 × 额外攻击力护盾值。 (5秒冷却时间)",
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
    "description": "定身一个敌方英雄时会提供20最大生命值。",
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
    "description": "获得生机迸发作为一个召唤师技能。 生机迸发会猛然提升你的体型，击飞附近的敌人们1秒并提供持续7秒的[BonusHealth] 300 + 0.2 × 最大生命值最大生命值。",
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
    "description": "造成技能伤害时，发射1+[AdditionalMisDivision] 3 × 客户端未命名属性（枚举 8）个飞弹，每个造成10–30（1–18级） + [ADRatio] 0.07 × 额外攻击力 + [APRatio] 0.07 × 法术强度魔法伤害。 此外，获得25%暴击几率。",
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
    "description": "当你暴击时，发射飞弹造成魔法伤害。 获得 25%暴击几率。",
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
    "description": "获得【客户端未提供静态值：Calc_Crit_Chance】暴击几率和【客户端未提供静态值：Calc_AS】攻击速度（随法术强度变化）。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Crit_Chance, Calc_AS",
    "unresolvedTokens": [
      "Calc_Crit_Chance",
      "Calc_AS"
    ],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2010,
    "apiName": "ARAM_DoubleTap",
    "name": "双发快射",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/doubletap_small.png",
    "description": "你的暴击施加一次额外的攻击特效。 获得 【客户端未提供静态值：Calc_Crit_Chance】暴击几率。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Crit_Chance",
    "unresolvedTokens": [
      "Calc_Crit_Chance"
    ],
    "descriptionSourceUrl": "https://raw.communitydragon.org/16.15/game/maps/modespecificdata/kiwi_jade.bin.json"
  },
  {
    "id": 2016,
    "apiName": "ARAM_Juiced",
    "name": "注魔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/juiced_small.png",
    "description": "攻击特效消耗【客户端未提供静态值：Calc_Mana_Cost】法力值以造成【客户端未提供静态值：Calc_Damage】魔法伤害，这个伤害可以暴击。 已造成的伤害：对局内实时值 已消耗的法力值：对局内实时值",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Mana_Cost, Calc_Damage",
    "unresolvedTokens": [
      "Calc_Mana_Cost",
      "Calc_Damage"
    ],
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
    "description": "站在草丛中时，每秒回复0.006–0.021（1–18级）最大生命值。",
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
    "description": "任务：用【所选技能】技能命中敌方英雄【客户端未提供静态值：QuestRequirement】次。 奖励：发射数量基于任务等级的额外飞弹。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "获得召唤师技能当黑暗到来。 当黑暗到来：发射一道灿烂之光到一个位置。它着陆时，区域内的所有活着的单位都将在接下来的8秒期间被送到一个不同的领域。 在你处于这个领域时，你获得： 300–1500（1–18级）生命值 35–150（1–18级）法术强度 35–150（1–18级）攻击力 0.35体型 所有单位在该领域中都能自由地移动和行动，但不能以战略点(诸如防御塔或召唤水晶)为目标。 “跟随你的光明……”——一个迷失的灵魂",
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
    "description": "当【所选技能】技能对敌方英雄造成伤害时，获得1（按英雄等级变化）护甲和魔法抗性。",
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
    "description": "在你的【所选技能】技能持续期间获得150攻击距离和0.75攻击速度。",
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
    "description": "任务：用技能狙击【客户端未提供静态值：QuestRequirement】个敌方英雄 奖励：一颗流星会飞向被狙击的敌方英雄，在其周围的一个区域内造成魔法伤害",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "任务：用【所选技能】技能命中敌人【客户端未提供静态值：QuestRequirement】次。 奖励：永久提升【所选技能】技能伤害。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：QuestRequirement",
    "unresolvedTokens": [
      "QuestRequirement"
    ],
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
    "description": "获得【客户端未提供静态值：Calc_Vamp】全能吸血。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Vamp",
    "unresolvedTokens": [
      "Calc_Vamp"
    ],
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
    "description": "用【所选技能】技能打击一个敌方英雄时，为你提供持续6秒的【客户端未提供静态值：Calc_Resists】护甲或魔法抗性，基于该技能的伤害类型。这个效果可以叠加。 最大防护等级：对局内实时值",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false,
    "descriptionStatus": "unavailable",
    "unavailableReason": "客户端公开文本仍含未解析变量：Calc_Resists",
    "unresolvedTokens": [
      "Calc_Resists"
    ],
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
    "description": "普攻和技能在命中敌人时会对其施加一个灼烧，这个效果会在附近掉落一滩辣椒油。辣椒油会回复生命值并灼烧敌人们。 你施加的每个灼烧都会使辣椒油效果变得更强。",
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
    "description": "站在一个友军的附近并将其标记为你的妈妈。 当朝着妈妈移动时，获得37.5%移动速度。当靠近你的妈妈时，获得75%移动速度、0.15–0.5（1–18级）治疗和护盾强度。",
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
