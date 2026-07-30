// Generated from Riot Data Dragon 16.15.1 and CommunityDragon 16.15. Do not edit manually.
export const CLASSIC_MAYHEM_PATCH = "16.15";
export const LIVE_DATA_PATCH = "16.15.1";
export const CLASSIC_MAYHEM_MODE = "KIWI_JADE" as const;
export const REGULAR_MAYHEM_MODE = "KIWI" as const;

export type MayhemAbility = {
  key: "P" | "Q" | "W" | "E" | "R";
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
};

export type LiveClassicChampion = {
  classicId: string;
  key: string;
  name: string;
  title: string;
  portrait: string;
  splash: string;
  tags: string[];
  stats: {
    hp: number;
    hpPerLevel: number;
    attackDamage: number;
    attackDamagePerLevel: number;
    attackSpeed: number;
    armor: number;
    magicResist: number;
    moveSpeed: number;
    attackRange: number;
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
    "stats": {
      "hp": 590,
      "hpPerLevel": 104,
      "attackDamage": 53,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.668,
      "armor": 21,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "摄魂夺魄",
        "description": "在击杀9个小兵或野怪后，阿狸会治疗自身。 在参与击杀一名敌方英雄后，阿狸会以一个更高的治疗效果来治疗自身。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ahri_SoulEater2.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "欺诈宝珠",
        "description": "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriQ.png",
        "cooldown": "7",
        "cost": "55/65/75/85/95",
        "range": "970"
      },
      {
        "key": "W",
        "name": "妖异狐火",
        "description": "阿狸获得短暂的爆发性移动速度加成，并放出三团狐火，锁定附近的敌人进行攻击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriW.png",
        "cooldown": "9/8/7/6/5",
        "cost": "30",
        "range": "700"
      },
      {
        "key": "E",
        "name": "魅惑妖术",
        "description": "阿狸献出红唇热吻，对命中的第一个敌人造成伤害并将目标魅惑，并且立刻终止目标的移动技能并使目标无恶意地走向她。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriE.png",
        "cooldown": "12",
        "cost": "60",
        "range": "975"
      },
      {
        "key": "R",
        "name": "灵魄突袭",
        "description": "阿狸向前猛冲，并放出元气弹，对周围的数个敌人造成伤害。灵魄突袭在进入冷却阶段以前最多可被施放三次，并在参与击杀敌方英雄后获得额外的再次施放次数。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AhriR.png",
        "cooldown": "140/120/100",
        "cost": "100",
        "range": "450"
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
    "stats": {
      "hp": 650,
      "hpPerLevel": 103,
      "attackDamage": 68,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.638,
      "armor": 36,
      "magicResist": 32,
      "moveSpeed": 350,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "无情连打",
        "description": "贾克斯连续的普通攻击，会持续地提高他的攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Armsmaster_MasterOfArms.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "跳斩",
        "description": "贾克斯跳向一个单位。如果目标是敌人，贾克斯会用他的武器狠狠地抽打敌人的脸，造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "50",
        "range": "700"
      },
      {
        "key": "W",
        "name": "蓄力一击",
        "description": "贾克斯为武器充能，使他的下次攻击能造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxW.png",
        "cooldown": "7/6/5/4/3",
        "cost": "30",
        "range": "300"
      },
      {
        "key": "E",
        "name": "反击风暴",
        "description": "贾克斯的武艺让他能够在短时间里躲闪掉所有即将到来的普通攻击，随后对所有周围的敌人快速发起反击，并将他们击晕。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxE.png",
        "cooldown": "17/15/13/11/9",
        "cost": "50/60/70/80/90",
        "range": "300"
      },
      {
        "key": "R",
        "name": "武器大师",
        "description": "每连续攻击2次，第3次攻击就会造成额外的魔法伤害。另外，贾克斯可以激活这个技能来在他周围造成伤害并增强他的决心，从而暂时性地提升他的护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JaxR.png",
        "cooldown": "110/100/90",
        "cost": "100",
        "range": "260"
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
    "stats": {
      "hp": 645,
      "hpPerLevel": 108,
      "attackDamage": 66,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.651,
      "armor": 36,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "疾风骤雨",
        "description": "在李青使用一次技能后，他的下两次攻击会获得攻速加成，且回复能量。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LeeSinPassive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "天音波/回音击",
        "description": "天音波：李青发出刺耳的声波定位敌人，对首个敌人造成物理伤害。如果天音波击中敌人，李青在接下来3秒可施放回音击。 回音击：李青冲向被天音波击中的敌人，造成基于该目标已损失生命值的物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinQOne.png",
        "cooldown": "10/9/8/7/6",
        "cost": "50",
        "range": "1100"
      },
      {
        "key": "W",
        "name": "金钟罩/铁布衫",
        "description": "金钟罩：李青冲向目标友军，为他自身提供护盾值。如果该友军是一名英雄，则也会获得护盾值。在使用【金钟罩】后，李青可以施放【铁布衫】。 铁布衫：李青艰苦卓绝的训练让他能在战斗中激发潜能。李青获得全能吸血。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinWOne.png",
        "cooldown": "7",
        "cost": "50",
        "range": "700"
      },
      {
        "key": "E",
        "name": "天雷破/摧筋断骨",
        "description": "天雷破：李青猛击地面，施放冲击波，造成魔法伤害并使命中的敌方单位显形。如果天雷破命中了一名敌人，那么李青可以施放【摧筋断骨】。 摧筋断骨：李青致残被天雷破给伤害到的敌人，减少其移动速度。持续期间受影响单位的移动速度会逐渐恢复正常。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinEOne.png",
        "cooldown": "8",
        "cost": "50",
        "range": "450"
      },
      {
        "key": "R",
        "name": "猛龙摆尾",
        "description": "李青用强力的回旋踢击退敌方英雄，对目标以及被目标撞到的任何敌人造成物理伤害。 被目标撞到的敌人会被短暂击飞。这项技艺是春哥教他的，不过李青不能将玩家的英雄踢到地图外面去。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeeSinR.png",
        "cooldown": "110/85/60",
        "cost": "0",
        "range": "375"
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
    "stats": {
      "hp": 610,
      "hpPerLevel": 101,
      "attackDamage": 59,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 26,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 600
    },
    "abilities": [
      {
        "key": "P",
        "name": "冰霜射击",
        "description": "艾希的攻击会让目标减速，并使艾希对这些目标造成更高伤害。 艾希的暴击不会造成额外伤害，但会对目标施加一个强化版减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ashe_P.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "射手的专注",
        "description": "艾希会在攻击时聚集【全神贯注】效果。在【全神贯注】到达最大值时，艾希就能施放【射手的专注】来消耗掉所有【全神贯注】效果，以临时提升她的攻击速度，并在持续期间将她的普攻转变为一阵强力的飓风箭阵。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AsheQ.png",
        "cooldown": "0",
        "cost": "30",
        "range": "400"
      },
      {
        "key": "W",
        "name": "万箭齐发",
        "description": "艾希向前方的锥形范围射出多支箭，对敌人造成额外伤害。也会触发冰霜射击的效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Volley.png",
        "cooldown": "18/14.5/11/7.5/4",
        "cost": "75/70/65/60/55",
        "range": "1200"
      },
      {
        "key": "E",
        "name": "鹰击长空",
        "description": "艾希将她的猎鹰之灵派去执行侦查任务，可派往地图上的任意地点。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AsheSpiritOfTheHawk.png",
        "cooldown": "5",
        "cost": "0",
        "range": "25000"
      },
      {
        "key": "R",
        "name": "魔法水晶箭",
        "description": "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，那么它会对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离。此外，该英雄附近的敌方单位会受到伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EnchantedCrystalArrow.png",
        "cooldown": "100/80/60",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 570,
      "hpPerLevel": 90,
      "attackDamage": 47,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 28,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "顺风而行",
        "description": "迦娜的友军在朝她移动时获得移动速度。 迦娜的普攻和【和风守护】会附带一部分额外移动速度的额外魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/JannaP.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "飓风呼啸",
        "description": "迦娜改变气压和温度，在目标区域召唤小型风暴，风暴体积随时间增大。她可以再次施放该技能来释放风暴。风暴会朝向施放方向飞行，对沿途的所有单位造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HowlingGale.png",
        "cooldown": "14",
        "cost": "90/95/100/105/110",
        "range": "1075"
      },
      {
        "key": "W",
        "name": "和风守护",
        "description": "迦娜召唤出一个空气元素灵体，来被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，来对一个敌人造成伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SowTheWind.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "50/55/60/65/70",
        "range": "4294967295"
      },
      {
        "key": "E",
        "name": "风暴之眼",
        "description": "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EyeOfTheStorm.png",
        "cooldown": "16/15/14/13/12",
        "cost": "70/75/80/85/90",
        "range": "800"
      },
      {
        "key": "R",
        "name": "复苏季风",
        "description": "迦娜召唤魔法风暴围绕自己，将敌人击退。在风暴平息后，当技能仍处在激活状态时，和风将治疗附近的友军。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ReapTheWhirlwind.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "725"
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
    "stats": {
      "hp": 550,
      "hpPerLevel": 103,
      "attackDamage": 60,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 23,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "暗夜猎手",
        "description": "薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时会获得移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Vayne_NightHunter.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "闪避突袭",
        "description": "薇恩进行翻滚，并小心地填充她的下一发射击。她的下次攻击造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneTumble.png",
        "cooldown": "6/5/4/3/2",
        "cost": "30",
        "range": "300"
      },
      {
        "key": "W",
        "name": "圣银弩箭",
        "description": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对同一目标的第3次攻击或技能施放会对其造成额外真实伤害，数值相当于目标最大生命值的一定百分比。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneSilveredBolts.png",
        "cooldown": "0",
        "cost": "0",
        "range": "750"
      },
      {
        "key": "E",
        "name": "恶魔审判",
        "description": "薇恩从背部展开一张重弩，并且朝她的目标发射一根巨型弩箭，将目标击退并造成伤害。如果目标与地形产生碰撞，那么目标会被贯穿，对其造成额外伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneCondemn.png",
        "cooldown": "20/18/16/14/12",
        "cost": "90",
        "range": "550"
      },
      {
        "key": "R",
        "name": "终极时刻",
        "description": "薇恩准备进行史诗般的对决，她的攻击力得到提高，能在闪避突袭期间进入隐形状态，闪避突袭的冷却时间缩短，并且暗夜猎手（被动）提供更多移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VayneInquisition.png",
        "cooldown": "100/85/70",
        "cost": "80",
        "range": "1"
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
    "stats": {
      "hp": 645,
      "hpPerLevel": 99,
      "attackDamage": 55,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 40,
      "magicResist": 28,
      "moveSpeed": 340,
      "attackRange": 150
    },
    "abilities": [
      {
        "key": "P",
        "name": "正气凌人",
        "description": "每次施放技能会强化塔里克的下2次普攻，以造成额外魔法伤害，使他的基础技能的冷却时间减少，并且可以快速地连续攻击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Taric_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "星光之触",
        "description": "基于已储存的充能来治疗附近的友方英雄。【正气凌人】的强化普攻会为这个技能提供一层充能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricQ.png",
        "cooldown": "3",
        "cost": "60",
        "range": "325"
      },
      {
        "key": "W",
        "name": "坚毅壁垒",
        "description": "被动提升塔里克和带有【坚毅壁垒】效果的友方英雄的护甲。 主动施放会为一名友方英雄提供护盾和【坚毅壁垒】效果，只要该英雄呆在塔里克身边，【坚毅壁垒】效果会一直持续。塔里克的技能也会从带有【坚毅壁垒】效果的友方英雄身上施放。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricW.png",
        "cooldown": "15",
        "cost": "60",
        "range": "800"
      },
      {
        "key": "E",
        "name": "炫光",
        "description": "塔里克准备施放一束星光，在短暂的延迟后，会对敌人造成魔法伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricE.png",
        "cooldown": "16/15/14/13/12",
        "cost": "40",
        "range": "610"
      },
      {
        "key": "R",
        "name": "宇宙之辉",
        "description": "在短暂的延迟后，放射一道宇宙能量到附近的友方英雄身上，让他们免疫伤害一段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TaricR.png",
        "cooldown": "180/150/120",
        "cost": "100",
        "range": "400"
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
    "stats": {
      "hp": 550,
      "hpPerLevel": 92,
      "attackDamage": 51,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 19,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 600
    },
    "abilities": [
      {
        "key": "P",
        "name": "寒霜涅槃",
        "description": "在受到致命伤害后，艾尼维亚将化身为凤凰蛋，然后满血复活。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Anivia_P.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "寒冰闪耀",
        "description": "艾尼维亚挥动翅膀聚集空气，制造一枚冰晶向目标区域施放，冰冻并伤害路径上的所有敌人。当冰晶爆裂时，它会晕眩并伤害一定范围内的所有敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FlashFrost.png",
        "cooldown": "11/10/9/8/7",
        "cost": "80/85/90/95/100",
        "range": "1075"
      },
      {
        "key": "W",
        "name": "寒冰屏障",
        "description": "艾尼维亚利用空气中的湿气，召唤出一道不可穿越的冰之墙来阻挡所有移动。该墙持续很短一段时间后就会融化。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Crystallize.png",
        "cooldown": "17",
        "cost": "70",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "霜寒刺骨",
        "description": "艾尼维亚扇动双翅，朝她的目标喷射出一股刺骨的强风，造成伤害。如果目标近期已被【Q寒冰闪耀】所命中或被一个完全形成的【R冰川风暴】所伤害，那么将会受到该技能双倍的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Frostbite.png",
        "cooldown": "4",
        "cost": "50",
        "range": "650"
      },
      {
        "key": "R",
        "name": "冰川风暴",
        "description": "艾尼维亚召唤出一朵夹杂着冰块和冰雹的雨云，对敌人造成伤害，并使其减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GlacialStorm.png",
        "cooldown": "4/3/2",
        "cost": "60",
        "range": "750"
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
    "stats": {
      "hp": 672,
      "hpPerLevel": 108,
      "attackDamage": 58,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 32,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "贪婪",
        "description": "每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会显著减少。 如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人以造成魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Katarina_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "弹射之刃",
        "description": "卡特琳娜朝敌人扔出一把匕首，匕首会弹射到附近敌人身上，然后落到地面上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaQ.png",
        "cooldown": "11/10/9/8/7",
        "cost": "0",
        "range": "625"
      },
      {
        "key": "W",
        "name": "伺机待发",
        "description": "卡特琳娜获得爆发性的移动速度加成，同时投掷一把匕首到她正上方的空中。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "0",
        "range": "25000"
      },
      {
        "key": "E",
        "name": "瞬步",
        "description": "卡特琳娜立刻闪烁到目标处，如果目标是敌人，则她会对目标造成伤害，否则会对距她最近的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaEWrapper.png",
        "cooldown": "12/11/10/9/8",
        "cost": "0",
        "range": "725"
      },
      {
        "key": "R",
        "name": "死亡莲华",
        "description": "卡特琳娜化身为一道剑刃飓风，以无与伦比的速度对周围最多三个敌方英雄造成巨量魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KatarinaR.png",
        "cooldown": "75/60/45",
        "cost": "0",
        "range": "550"
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
    "stats": {
      "hp": 558,
      "hpPerLevel": 105,
      "attackDamage": 56,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 19,
      "magicResist": 30,
      "moveSpeed": 340,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "海克斯科技亲和",
        "description": "在友方防御塔和由黑默丁格部署的炮台附近时，获得移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Heimerdinger_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "H-28 G 进化炮台",
        "description": "黑默丁格放置一座快速开火的加农炮台，它还配有一个次级穿透光束发射器（炮台对防御塔造成一半伤害）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerQ.png",
        "cooldown": "1",
        "cost": "20",
        "range": "350"
      },
      {
        "key": "W",
        "name": "海克斯科技微型导弹",
        "description": "黑默丁格以鼠标悬停处为焦点，发射数枚长程导弹。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerW.png",
        "cooldown": "11/10/9/8/7",
        "cost": "50/60/70/80/90",
        "range": "1325"
      },
      {
        "key": "E",
        "name": "CH-2电子风暴手雷",
        "description": "黑默丁格朝一个位置掷出一颗手雷，来对敌方单位造成伤害，并对被它直接命中的敌人造成晕眩效果，且对附近单位造成减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerE.png",
        "cooldown": "11",
        "cost": "85",
        "range": "970"
      },
      {
        "key": "R",
        "name": "升级！！！",
        "description": "黑默丁格通过发明进行一次技术升级，使他的下一个技能拥有强化效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HeimerdingerR.png",
        "cooldown": "100/85/70",
        "cost": "100",
        "range": "1"
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
    "stats": {
      "hp": 640,
      "hpPerLevel": 104,
      "attackDamage": 64,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 36,
      "magicResist": 32,
      "moveSpeed": 340,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "战争律动",
        "description": "嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/JarvanIVP.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "巨龙撞击",
        "description": "嘉文四世的长矛穿透敌人，对沿途的敌人造成物理伤害和护甲击碎效果。如果嘉文四世该技能指向德邦军旗，那么他将会被导向军旗，并击飞沿途所有敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVDragonStrike.png",
        "cooldown": "10/9/8/7/6",
        "cost": "45/50/55/60/65",
        "range": "770"
      },
      {
        "key": "W",
        "name": "黄金圣盾",
        "description": "嘉文四世召唤古德玛西亚国王保护自己，护盾吸收伤害并减速附近敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVGoldenAegis.png",
        "cooldown": "9",
        "cost": "30",
        "range": "625"
      },
      {
        "key": "E",
        "name": "德邦军旗",
        "description": "嘉文四世携带着德玛西亚的骄傲，能被动地给予他额外的攻击速度。激活德邦军旗会使嘉文四世放置一面德玛西亚军旗，在军旗的着陆点造成魔法伤害，并强化军旗附近的队友们的攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVDemacianStandard.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "55",
        "range": "860"
      },
      {
        "key": "R",
        "name": "天崩地裂",
        "description": "嘉文四世勇猛地跃向目标敌方英雄，对其造成物理伤害，并在敌人周围形成环形障碍，持续数秒。在嘉文四世着陆时，目标附近的敌人也会受到伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JarvanIVCataclysm.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "650"
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
    "stats": {
      "hp": 690,
      "hpPerLevel": 98,
      "attackDamage": 69,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 38,
      "magicResist": 32,
      "moveSpeed": 340,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "坚韧",
        "description": "如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Garen_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "致命打击",
        "description": "盖伦的移动速度获得爆发性提升，同时移除身上的所有减速效果。他的下次攻击将打击敌人的要害部位，造成额外伤害并将目标沉默。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenQ.png",
        "cooldown": "8",
        "cost": "0",
        "range": "300"
      },
      {
        "key": "W",
        "name": "勇气",
        "description": "盖伦被动地通过击杀敌人来提升护甲和魔法抗性。他也可以激活这个技能来暂时获得一层护盾和韧性，并在接下来的较长持续时间里获得较弱的伤害减免效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenW.png",
        "cooldown": "22/19.5/17/14.5/12",
        "cost": "0",
        "range": "0"
      },
      {
        "key": "E",
        "name": "审判",
        "description": "盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenE.png",
        "cooldown": "9/8.25/7.5/6.75/6",
        "cost": "0",
        "range": "325"
      },
      {
        "key": "R",
        "name": "德玛西亚正义",
        "description": "盖伦召唤德玛西亚之力，试图处决一名敌方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GarenR.png",
        "cooldown": "120/100/80",
        "cost": "0",
        "range": "400"
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
    "stats": {
      "hp": 630,
      "hpPerLevel": 104,
      "attackDamage": 56,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 25,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 450
    },
    "abilities": [
      {
        "key": "P",
        "name": "灵魂吸取",
        "description": "莫甘娜从她的敌人身上吸取灵魂，在对英雄、大型小兵、中型野怪和大型野怪造成技能伤害时获得治疗效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/FallenAngel_Empathize.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "暗之禁锢",
        "description": "莫甘娜用黑暗魔法将一名敌人禁锢在原地，迫使其感受自己造成的痛苦并对其造成魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaQ.png",
        "cooldown": "10",
        "cost": "50/55/60/65/70",
        "range": "1250"
      },
      {
        "key": "W",
        "name": "折磨之影",
        "description": "莫甘娜在一个区域施放一团诅咒之影，对胆敢站在她黑色环形之中的敌人造成伤害。敌人会持续受到魔法伤害，并且生命值越低受到伤害越高。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaW.png",
        "cooldown": "12",
        "cost": "70/80/90/100/110",
        "range": "900"
      },
      {
        "key": "E",
        "name": "黑暗之盾",
        "description": "莫甘娜为一名友方英雄涂上一层保护性的星火屏障，在被打破之前吸收魔法伤害和限制效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaE.png",
        "cooldown": "26/23.5/21/18.5/16",
        "cost": "80",
        "range": "800"
      },
      {
        "key": "R",
        "name": "灵魂镣铐",
        "description": "莫甘娜全力释放她的星界能量，与此同时，她的羽翼会解除束缚并且会悬浮在地面上。她将黑暗痛苦组成的锁链抽击到附近的敌方英雄身上，获得移动速度。锁链会减速并造成初段伤害，并在一段延迟后，晕眩那些未能挣脱的敌方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MorganaR.png",
        "cooldown": "120/110/100",
        "cost": "100",
        "range": "625"
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
    "stats": {
      "hp": 630,
      "hpPerLevel": 99,
      "attackDamage": 63,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.694,
      "armor": 30,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "背刺",
        "description": "在目标的背后时，萨科的普攻和【E双面毒刃】会造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Jester_CarefulStrikes.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "欺诈魔术",
        "description": "萨科进入隐形状态并传送到目标位置。 他在隐形状态下的第一次普攻将获得增强，造成额外伤害并在目标背后攻击时必定会暴击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Deceive.png",
        "cooldown": "13/12.5/12/11.5/11",
        "cost": "40",
        "range": "400"
      },
      {
        "key": "W",
        "name": "惊吓魔盒",
        "description": "萨科丢出一个隐形且会动的惊吓魔盒。在触发时，盒子会恐惧附近的敌人，然后对其进行攻击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JackInTheBox.png",
        "cooldown": "15",
        "cost": "70/65/60/55/50",
        "range": "500"
      },
      {
        "key": "E",
        "name": "双面毒刃",
        "description": "萨科的毒刃在命中时会被动地使目标中毒，减少目标的移动速度。他可以将毒刃扔向目标，造成伤害和中毒效果。扔出的毒刃会对生命值低于30%的目标造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwoShivPoison.png",
        "cooldown": "8",
        "cost": "75",
        "range": "625"
      },
      {
        "key": "R",
        "name": "幻像",
        "description": "萨科在身边制造一个自己的幻像，幻像能够攻击周围的敌人（对防御塔造成较少伤害）。在死亡时爆炸，它会爆炸，生成三个小型惊吓魔盒并对附近的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/HallucinateFull.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "200"
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
    "stats": {
      "hp": 570,
      "hpPerLevel": 105,
      "attackDamage": 57,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.681,
      "armor": 24,
      "magicResist": 30,
      "moveSpeed": 340,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "炽热之焰",
        "description": "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/BrandP.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "火焰烙印",
        "description": "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有【烈焰焚身】效果，那么【Q火焰烙印】将使目标晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "70",
        "range": "1050"
      },
      {
        "key": "W",
        "name": "烈焰之柱",
        "description": "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，来对范围内的敌方单位造成魔法伤害。带有【烈焰焚身】效果的单位会额外受到25%伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandW.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/70/80/90/100",
        "range": "900"
      },
      {
        "key": "E",
        "name": "烈火燃烧",
        "description": "布兰德在目标身上引发一阵强力的爆裂至附近的敌人处，造成魔法伤害。如果目标带有【烈焰焚身】效果，那么【E烈火燃烧】的扩散距离翻倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandE.png",
        "cooldown": "13/12/11/10/9",
        "cost": "90",
        "range": "625"
      },
      {
        "key": "R",
        "name": "烈焰风暴",
        "description": "布兰德释放一颗破坏力极强的火焰之种，火焰之种会在布兰德和附近敌人之间弹跳至多5次，每次弹跳时对敌人造成魔法伤害。弹跳会优先以带有即将满层的【炽热之焰】效果的英雄为目标。如果目标带有【烈焰焚身】效果，那么【R烈焰风暴】将使目标短暂减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BrandR.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "750"
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
    "stats": {
      "hp": 642,
      "hpPerLevel": 98,
      "attackDamage": 61,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.667,
      "armor": 37,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "恶魔魅影",
        "description": "在非战斗状态下，伊芙琳进入【恶魔魅影】。【恶魔魅影】会在伊芙琳生命值较低时治疗她，并在6级后为她提供【伪装】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Evelynn_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "憎恨之刺",
        "description": "伊芙琳用鞭子进行抽击，对命中的第一个敌方单位造成伤害。随后，伊芙琳可以朝附近的敌人发出一列尖刺，可发射若干次。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnQ.png",
        "cooldown": "4",
        "cost": "40/45/50/55/60",
        "range": "800"
      },
      {
        "key": "W",
        "name": "引诱",
        "description": "伊芙琳诅咒她的目标，并使她在一段延时后的下次攻击或技能对目标施加魅惑和魔抗击碎效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "60/70/80/90/100",
        "range": "1200/1300/1400/1500/1600"
      },
      {
        "key": "E",
        "name": "鞭笞",
        "description": "伊芙琳鞭笞她的目标，并造成伤害。她随后会获得短暂持续的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnE.png",
        "cooldown": "8",
        "cost": "40/45/50/55/60",
        "range": "210"
      },
      {
        "key": "R",
        "name": "最终抚慰",
        "description": "伊芙琳短暂进入不可被选取状态并大肆残杀她面前区域内的敌人，然后向后位移一大段距离。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EvelynnR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 580,
      "hpPerLevel": 99,
      "attackDamage": 54,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.669,
      "armor": 21,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "光芒四射",
        "description": "拉克丝的伤害类技能会对敌人施加【启明】效果，持续若干秒。拉克丝的下一次攻击将会消耗【启明】效果，来对目标造成额外魔法伤害（基于拉克丝等级）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LuxIlluminatingFraulein.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "光之束缚",
        "description": "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxLightBinding.png",
        "cooldown": "10",
        "cost": "50",
        "range": "1175"
      },
      {
        "key": "W",
        "name": "曲光屏障",
        "description": "拉克丝掷出她的魔杖，魔杖所触及的友方单位会有光环环绕，保护他们免受敌方伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxPrismaticWave.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "60/65/70/75/80",
        "range": "1150"
      },
      {
        "key": "E",
        "name": "透光奇点",
        "description": "朝一个区域发射一个不规则的扭曲之光，减速附近敌人。拉克丝可以引爆它，对敌人造成区域性伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxLightStrikeKugel.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "70/80/90/100/110",
        "range": "1100"
      },
      {
        "key": "R",
        "name": "终极闪光",
        "description": "在积蓄能量之后，拉克丝发射一束光波，对该区域所有目标造成伤害。此外，该技能触发拉克丝的被动技能并刷新光芒四射减益的持续时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuxR.png",
        "cooldown": "60/50/40",
        "cost": "100",
        "range": "3340"
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
    "stats": {
      "hp": 630,
      "hpPerLevel": 114,
      "attackDamage": 64,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 31,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "烈火审讯",
        "description": "每过几秒，普朗克的近战攻击就会让他的对手着火。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Gangplank_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "枪火谈判",
        "description": "攻击目标，每击杀一个敌方单位时都会掠夺金币。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankQWrapper.png",
        "cooldown": "4.5",
        "cost": "50/45/40/35/30",
        "range": "625"
      },
      {
        "key": "W",
        "name": "坏血病疗法",
        "description": "吃掉柑橘类水果，来移除控制效果并回复生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankW.png",
        "cooldown": "22/20/18/16/14",
        "cost": "60/70/80/90/100",
        "range": "400"
      },
      {
        "key": "E",
        "name": "火药桶",
        "description": "普朗克在目标区域为一个火药桶开盖。如果他攻击火药桶，那么火药桶会爆炸，将这次攻击的伤害传播到范围内的敌人身上，并将他们减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankE.png",
        "cooldown": "0",
        "cost": "0",
        "range": "1000"
      },
      {
        "key": "R",
        "name": "加农炮幕",
        "description": "普朗克给他的船发信号，来轰炸一个区域，伤害并减速敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GangplankR.png",
        "cooldown": "160/140/120",
        "cost": "100",
        "range": "30000"
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
    "stats": {
      "hp": 560,
      "hpPerLevel": 96,
      "attackDamage": 50,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.61,
      "armor": 23,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 625
    },
    "abilities": [
      {
        "key": "P",
        "name": "嗜火",
        "description": "在施放4个技能后，安妮的下一次伤害类技能就会对目标造成短暂的晕眩效果。 安妮在游戏开始时和重生时，会带着满层的【嗜火】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Annie_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "碎裂之火",
        "description": "安妮向目标投出注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮，且碎裂之火的冷却时间减半。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieQ.png",
        "cooldown": "4",
        "cost": "60/65/70/75/80",
        "range": "625"
      },
      {
        "key": "W",
        "name": "焚烧",
        "description": "安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieW.png",
        "cooldown": "7",
        "cost": "70/75/80/85/90",
        "range": "600"
      },
      {
        "key": "E",
        "name": "熔岩护盾",
        "description": "为安妮或一名友军提供一层护盾、一个爆发性的移动速度加成并且对任何用攻击或技能袭击她的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieE.png",
        "cooldown": "10",
        "cost": "60/65/70/75/80",
        "range": "800"
      },
      {
        "key": "R",
        "name": "提伯斯之怒",
        "description": "安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AnnieR.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "600"
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
    "stats": {
      "hp": 640,
      "hpPerLevel": 115,
      "attackDamage": 64,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.675,
      "armor": 38,
      "magicResist": 32,
      "moveSpeed": 330,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "欢乐时光",
        "description": "古拉加斯可周期性地使用一个技能来治疗自身。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/GragasPassiveHeal.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "滚动酒桶",
        "description": "古拉加斯将酒桶滚到目标地点，酒桶可以被主动引爆或在到达目标地点4秒后自行爆炸。爆炸的威力会随时间持续提升。被酒桶炸到的敌人，移动速度会被降低。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasQ.png",
        "cooldown": "10/9/8/7/6",
        "cost": "80",
        "range": "850"
      },
      {
        "key": "W",
        "name": "醉酒狂暴",
        "description": "古拉加斯品尝他的最新佳酿，持续1秒。在喝完之后，他会变得喧闹且好斗，下次普通攻击会对附近的所有目标造成更多伤害，并且自身所受的伤害会降低。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasW.png",
        "cooldown": "5",
        "cost": "30",
        "range": "20"
      },
      {
        "key": "E",
        "name": "肉弹冲击",
        "description": "古拉加斯向目标区域冲锋，在撞上第一个敌人后，对附近的所有敌方单位造成伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasE.png",
        "cooldown": "14/13.5/13/12.5/12",
        "cost": "50",
        "range": "600"
      },
      {
        "key": "R",
        "name": "爆破酒桶",
        "description": "古拉加斯向目标区域投掷他的酒桶，对爆炸范围内的所有敌人造成伤害和击退效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GragasR.png",
        "cooldown": "100/85/70",
        "cost": "100",
        "range": "1000"
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
    "stats": {
      "hp": 604,
      "hpPerLevel": 108,
      "attackDamage": 52,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 24,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 525
    },
    "abilities": [
      {
        "key": "P",
        "name": "灌铅骰子",
        "description": "在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，随机获得1到6的额外赏金。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Cardmaster_SealFate.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "万能牌",
        "description": "崔斯特扔出三张卡牌，卡牌会对沿途的每个敌方单位造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WildCards.png",
        "cooldown": "6/5.75/5.5/5.25/5",
        "cost": "60/70/80/90/100",
        "range": "10000"
      },
      {
        "key": "W",
        "name": "选牌",
        "description": "崔斯特挑选魔法卡牌，用于下次攻击，并附加额外效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PickACard.png",
        "cooldown": "6",
        "cost": "50/55/60/65/70",
        "range": "200"
      },
      {
        "key": "E",
        "name": "卡牌骗术",
        "description": "崔斯特每四次攻击附加一次额外伤害。另外，崔斯特的攻击速度得到被动提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CardmasterStack.png",
        "cooldown": "0",
        "cost": "0",
        "range": "0"
      },
      {
        "key": "R",
        "name": "命运",
        "description": "崔斯特为他的敌人算卜命运，短时间内显示所有敌方英雄的位置，并可使用传送，让他在引导1.5秒后传送至目标位置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Destiny.png",
        "cooldown": "170/140/110",
        "cost": "100",
        "range": "5500"
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
    "stats": {
      "hp": 610,
      "hpPerLevel": 109,
      "attackDamage": 58,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.638,
      "armor": 32,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 525
    },
    "abilities": [
      {
        "key": "P",
        "name": "寻觅",
        "description": "在穿越草丛进行移动时，奈德丽的移动速度会提升10%，持续2秒，并在朝着1400码内的出现在己方视野内的敌方英雄进行移动时，移动速度加成会提升至30%。 在【Q标枪投掷】或【W丛林伏击】对敌方英雄或野怪造成伤害后，奈德丽会开始捕猎目标英雄，提供其真实视野，持续4秒。在此期间，奈德丽获得10%移动速度加成（在她朝着被捕猎的目标移动时，这个加成会提升至30%）并且她的【Q推倒】和【W猛扑】会对这些目标造成强化伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Nidalee_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "标枪投掷 / 推倒",
        "description": "人类形态下，奈德丽向她的目标投掷标枪，飞行中击中目标造成伤害。美洲狮形态下，她的下一次攻击会试图对目标造成致命伤害，目标的生命值越低，造成的伤害越大。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/JavelinToss.png",
        "cooldown": "6",
        "cost": "50/55/60/65/70",
        "range": "1500"
      },
      {
        "key": "W",
        "name": "丛林伏击 / 猛扑",
        "description": "人类形态下， 奈德丽会对指定位置放置一个陷阱，踩中陷阱的单位的视野将会被暴露给奈德丽，并持续受到伤害。美洲狮形态下，她会猛扑向目标，落地时造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Bushwhack.png",
        "cooldown": "13/12/11/10/9",
        "cost": "30/35/40/45/50",
        "range": "900"
      },
      {
        "key": "E",
        "name": "野性奔腾 / 挥击",
        "description": "人类形态下，奈德丽引导美洲狮的灵魂以治疗友方单位，并且短暂提升他们的攻击速度。美洲狮形态下，她迅速的挥爪攻击她面前的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PrimalSurge.png",
        "cooldown": "12",
        "cost": "50/55/60/65/70",
        "range": "900"
      },
      {
        "key": "R",
        "name": "美洲狮形态",
        "description": "奈德丽转变成美洲狮形态，获得全新技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AspectOfTheCougar.png",
        "cooldown": "3",
        "cost": "0",
        "range": "20"
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
    "stats": {
      "hp": 645,
      "hpPerLevel": 119,
      "attackDamage": 68,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.72,
      "armor": 35,
      "magicResist": 32,
      "moveSpeed": 350,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "狂战之怒",
        "description": "奥拉夫基于已损失生命值获得攻击速度和生命偷取。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Olaf_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "逆流投掷",
        "description": "奥拉夫将战斧投至目标区域，对所有被战斧穿过的敌人造成伤害并削减他们的护甲和移动速度。如果奥拉夫捡起斧头，那么该技能冷却时间就会重置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafAxeThrowCast.png",
        "cooldown": "9",
        "cost": "50/55/60/65/70",
        "range": "1000"
      },
      {
        "key": "W",
        "name": "挺过去",
        "description": "奥拉夫的攻击速度得到提升，并获得一层护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafFrenziedStrikes.png",
        "cooldown": "16/15/14/13/12",
        "cost": "50",
        "range": "700"
      },
      {
        "key": "E",
        "name": "鲁莽挥击",
        "description": "奥拉夫以破釜沉舟之势发动进攻，对目标造成真实伤害（不受护甲与魔抗减免），同时，自身也会根据敌方所受的伤害而受到真实伤害的反噬。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafRecklessStrike.png",
        "cooldown": "11/10/9/8/7",
        "cost": "0",
        "range": "325"
      },
      {
        "key": "R",
        "name": "诸神黄昏",
        "description": "奥拉夫被动获得护甲和魔法抗性提升。他可以激活这个技能来变得免疫控制效果，并且会在他保持攻击时一直持续。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/OlafRagnarok.png",
        "cooldown": "100/90/80",
        "cost": "100",
        "range": "400"
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
    "stats": {
      "hp": 650,
      "hpPerLevel": 96,
      "attackDamage": 63,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.7,
      "armor": 34,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "剧毒冲流",
        "description": "辛吉德借助附近英雄进行漂移，在经过他们时获得爆发性的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Singed_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "剧毒踪迹",
        "description": "辛吉德在身后留下剧毒踪迹，对经过上面的敌人造成持续伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PoisonTrail.png",
        "cooldown": "0",
        "cost": "13",
        "range": "20"
      },
      {
        "key": "W",
        "name": "强力粘胶",
        "description": "扔出一瓶强力粘合剂在地上，其中的敌人会被减速和缚地。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MegaAdhesive.png",
        "cooldown": "17/16/15/14/13",
        "cost": "60/70/80/90/100",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "过肩摔",
        "description": "伤害目标敌方单位，并将他们投掷到辛吉德身后。如果辛吉德将目标扔到强力粘胶上，目标还会被禁锢。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Fling.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/70/80/90/100",
        "range": "125"
      },
      {
        "key": "R",
        "name": "疯狂药剂",
        "description": "辛吉德喝下精心炮制的化学药剂，大幅提高战斗属性，并使他的【剧毒踪迹】可以施加重伤效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/InsanityPotion.png",
        "cooldown": "100",
        "cost": "100",
        "range": "20"
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
    "stats": {
      "hp": 620,
      "hpPerLevel": 124,
      "attackDamage": 55,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 22,
      "magicResist": 32,
      "moveSpeed": 340,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "奥术专精",
        "description": "瑞兹的技能会造成基于他法力值加成的额外伤害，并且他的最大法力值会基于他的法术强度来获得百分比的提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ryze_P.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "超负荷",
        "description": "被动部分：瑞兹的其它基础技能会重置【超负荷】的冷却时间并且充能一层符文。当瑞兹带着2层符文施放【超负荷】时，他会获得短暂的爆发性移动速度加成。 施放时，瑞兹会沿直线扔出一团纯粹能量，来对命中的第一个敌人造成伤害。如果目标身上有【涌动】效果，那么【超负荷】会造成额外伤害并弹射至附近带有【涌动】效果的敌人身上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeQWrapper.png",
        "cooldown": "5",
        "cost": "40/38/36/34/32",
        "range": "1000"
      },
      {
        "key": "W",
        "name": "符文禁锢",
        "description": "瑞兹将一个目标陷入一个符文牢笼中，来对其造成伤害和减速效果。如果目标身上带有【涌动】效果，那么减速效果会替换为禁锢效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeW.png",
        "cooldown": "11/10.5/10/9.5/9",
        "cost": "50/60/70/80/90",
        "range": "615"
      },
      {
        "key": "E",
        "name": "法术涌动",
        "description": "瑞兹放出一颗纯净魔法能量球，对一名敌人造成伤害并对附近的敌人造成减益效果。瑞兹的技能可以对带有该减益的敌人造成额外效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeE.png",
        "cooldown": "3.5/3.25/3/2.75/2.5",
        "cost": "35/45/55/65/75",
        "range": "615"
      },
      {
        "key": "R",
        "name": "曲境折跃",
        "description": "被动部分：【超负荷】对带有【涌动】效果的目标造成更多伤害。 施放时，瑞兹会创造一个传送门来通向一个附近的位置。在若干秒后，站在传送门附近的友军会被传送至目标位置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RyzeR.png",
        "cooldown": "180/160/140",
        "cost": "100",
        "range": "3000"
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
    "stats": {
      "hp": 640,
      "hpPerLevel": 102,
      "attackDamage": 60,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.656,
      "armor": 30,
      "magicResist": 28,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "瞄准",
        "description": "崔丝塔娜的射程随等级提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Tristana_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "急速射击",
        "description": "崔丝塔娜急速射击，短时间内提升攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaQ.png",
        "cooldown": "20/19/18/17/16",
        "cost": "15/20/25/30/35",
        "range": "20"
      },
      {
        "key": "W",
        "name": "火箭跳跃",
        "description": "崔丝塔娜朝地面开火，跳跃至目标区域，落地造成伤害并减速附近敌人一小段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaW.png",
        "cooldown": "22/20/18/16/14",
        "cost": "30/35/40/45/50",
        "range": "900"
      },
      {
        "key": "E",
        "name": "爆炸火花",
        "description": "当崔丝塔娜杀死一个单位，加农炮弹会炸裂伤害周围的敌人。可通过主动施放这个技能来将一颗炸弹放置在目标身上，炸弹会在短时间内或被崔丝塔娜攻击数次后爆炸，爆炸时对目标及其附近的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaE.png",
        "cooldown": "16/15.5/15/14.5/14",
        "cost": "50/55/60/65/70",
        "range": "550"
      },
      {
        "key": "R",
        "name": "毁灭射击",
        "description": "崔丝塔娜装填巨型加农炮弹攻击目标单位，造成巨大伤害并击退目标。如果目标携带着【爆炸火花】的炸弹，那么该炸弹的爆炸半径翻倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TristanaR.png",
        "cooldown": "100",
        "cost": "100",
        "range": "550"
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
    "stats": {
      "hp": 696,
      "hpPerLevel": 108,
      "attackDamage": 66,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.67,
      "armor": 33,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "战斗狂怒",
        "description": "泰达米尔每次攻击、暴击或击杀都能获得怒气。怒气被动地增加他的暴击几率，且可以通过释放嗜血杀戮来消耗。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Tryndamere_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "嗜血杀戮",
        "description": "泰达米尔对战斗极度饥渴，他受伤程度越高，攻击力越强。他能通过释放【Q嗜血杀戮】消耗怒气并治疗自己。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereQ.png",
        "cooldown": "12",
        "cost": "0",
        "range": "400"
      },
      {
        "key": "W",
        "name": "蔑视",
        "description": "泰达米尔嘲笑敌人，减少身边敌方英雄的攻击力。背对泰达米尔的敌人还会被减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereW.png",
        "cooldown": "14",
        "cost": "0",
        "range": "850"
      },
      {
        "key": "E",
        "name": "旋风斩",
        "description": "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TryndamereE.png",
        "cooldown": "12/11/10/9/8",
        "cost": "0",
        "range": "650"
      },
      {
        "key": "R",
        "name": "无尽怒火",
        "description": "泰达米尔是如此渴望战斗，以至于承受再多的伤害也不会死亡。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/UndyingRage.png",
        "cooldown": "120/100/80",
        "cost": "0",
        "range": "400"
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
    "stats": {
      "hp": 650,
      "hpPerLevel": 106,
      "attackDamage": 55,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 34,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 480
    },
    "abilities": [
      {
        "key": "P",
        "name": "巫骇草人",
        "description": "费德提克的饰品会被替换为【草间人】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/FiddlesticksP.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "恐惧",
        "description": "费德提克在非战斗状态且未被敌人看见时，如果用技能对敌人造成了伤害，或者对一名敌人使用了【Q恐惧】的主动效果，都会使目标因害怕而逃跑一段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksQ.png",
        "cooldown": "15/14.5/14/13.5/13",
        "cost": "65",
        "range": "575"
      },
      {
        "key": "W",
        "name": "五骨丰登",
        "description": "费德提克从附近敌人们身上吸取生命值，在持续结束时造成额外的处决伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksW.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "650"
      },
      {
        "key": "E",
        "name": "夜割",
        "description": "费德提克用它的镰刀斩击一个区域，使命中的所有敌人减速，并使斩击区域中心的敌人沉默。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksE.png",
        "cooldown": "10/9/8/7/6",
        "cost": "40/45/50/55/60",
        "range": "850"
      },
      {
        "key": "R",
        "name": "群鸦风暴",
        "description": "一群杀人鸦盘旋于费德提克身边，每秒对范围内的所有敌方单位造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FiddleSticksR.png",
        "cooldown": "140/110/80",
        "cost": "100",
        "range": "800"
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
    "stats": {
      "hp": 685,
      "hpPerLevel": 120,
      "attackDamage": 62,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 40,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "凯旋怒吼",
        "description": "阿利斯塔在对敌方英雄造成晕眩或强制位移时，或附近有敌人阵亡时，会积攒他的怒吼层数。在层数攒满后，他会治疗他自己和所有附近的友方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Alistar_E.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "大地粉碎",
        "description": "阿利斯塔锤击地面，对附近的敌人造成魔法伤害并使他们浮空。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Pulverize.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "365"
      },
      {
        "key": "W",
        "name": "野蛮冲撞",
        "description": "阿利斯塔冲撞目标，对其造成伤害并击退目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Headbutt.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "650"
      },
      {
        "key": "E",
        "name": "践踏",
        "description": "阿利斯塔践踏附近的敌方单位，无视单位的碰撞体积并在他伤害到一名敌方英雄时获得一层充能。在满层充能时，阿利斯塔的下次对敌方英雄发起的普攻将造成额外魔法伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AlistarE.png",
        "cooldown": "12/11.5/11/10.5/10",
        "cost": "50/55/60/65/70",
        "range": "350"
      },
      {
        "key": "R",
        "name": "坚定意志",
        "description": "阿利斯塔发出野性的咆哮，移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FerociousHowl.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "1"
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
    "stats": {
      "hp": 645,
      "hpPerLevel": 100,
      "attackDamage": 65,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.7,
      "armor": 35,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "锥刺甲壳",
        "description": "拉莫斯获得额外攻击力，受益于他的护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Armordillo_ScavengeArmor.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "动力冲刺",
        "description": "拉莫斯缩成球状冲击目标，造成魔法伤害并减速目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PowerBall.png",
        "cooldown": "12/10.5/9/7.5/6",
        "cost": "60",
        "range": "300"
      },
      {
        "key": "W",
        "name": "尖刺防御",
        "description": "拉莫斯进入防御状态，极大提高护甲值和魔法抗性，并回敬伤害给那些攻击他的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DefensiveBallCurl.png",
        "cooldown": "7",
        "cost": "40",
        "range": "300"
      },
      {
        "key": "E",
        "name": "狂乱嘲讽",
        "description": "拉莫斯嘲讽一个敌方英雄或野怪，强制目标鲁莽地攻击自己。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PuncturingTaunt.png",
        "cooldown": "12",
        "cost": "50",
        "range": "325"
      },
      {
        "key": "R",
        "name": "冲天猛撞",
        "description": "拉莫斯跃到空中然后朝着目标位置猛撞，对敌人造成魔法伤害和减速效果。如果拉莫斯在【动力冲刺】状态下施放，那么拉莫斯还会击飞区域中心的敌人们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Tremors2.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 610,
      "hpPerLevel": 99,
      "attackDamage": 66,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.69,
      "armor": 31,
      "magicResist": 28,
      "moveSpeed": 340,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "金刚不坏",
        "description": "孙悟空在与英雄或野怪战斗时，会获得可叠加的护甲和最大生命值回复。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MonkeyKingStoneSkin.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "粉碎打击",
        "description": "孙悟空的下次攻击获得额外距离，造成额外伤害，并暂时减少敌人的护甲。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingDoubleAttack.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "20",
        "range": "250/275/300/325/350"
      },
      {
        "key": "W",
        "name": "真假猴王",
        "description": "孙悟空变为隐形状态并朝着一个方向突进，同时留下一个会攻击附近敌人的分身。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingDecoy.png",
        "cooldown": "22/21/20/19/18",
        "cost": "60/55/50/45/40",
        "range": "275"
      },
      {
        "key": "E",
        "name": "腾云突击",
        "description": "孙悟空突进至一名目标敌人处，并放出幻象来攻击他目标附近的敌人，同时对每个被击中的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingNimbus.png",
        "cooldown": "10/9.25/8.5/7.75/7",
        "cost": "30/35/40/45/50",
        "range": "650"
      },
      {
        "key": "R",
        "name": "大闹天宫",
        "description": "孙悟空伸展金箍棒不断旋转，并获得移动速度。 击中敌人时会造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MonkeyKingSpinToWin.png",
        "cooldown": "130/110/90",
        "cost": "100",
        "range": "315"
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
    "stats": {
      "hp": 550,
      "hpPerLevel": 91,
      "attackDamage": 49,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.644,
      "armor": 26,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "能量和弦",
        "description": "渐入佳音：娑娜在出色地使用她的技能时，会获得非终极技能的技能急速，直到达到上限为止。在达到上限之后，后续的成功使用将转而缩短她终极技能的冷却时间。 能量和弦：每施放若干次技能，娑娜的下次攻击将造成额外魔法伤害并基于最新激活的基础技能施加一个额外效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sona_Passive_Charged.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "英勇赞美诗",
        "description": "娑娜弹奏英勇赞美诗，弹出音波，对附近的两名敌人造成魔法伤害，优先选取英雄和野怪为目标。娑娜会暂时获得一个光环，为附近友军的下一次攻击提供额外魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaQ.png",
        "cooldown": "8",
        "cost": "50/55/60/65/70",
        "range": "825"
      },
      {
        "key": "W",
        "name": "坚毅咏叹调",
        "description": "娑娜弹奏坚毅咏叹调，弹出保护性的旋律，治疗娑娜和附近的一个受伤的友军。娑娜会暂时获得一个光环，为附近的友军提供一层护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaW.png",
        "cooldown": "10",
        "cost": "80/85/90/95/100",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "迅捷奏鸣曲",
        "description": "娑娜弹奏迅捷奏鸣曲，为她自己提供移动速度加成。娑娜会暂时获得一个光环，为进入区域的友方英雄提供移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaE.png",
        "cooldown": "14",
        "cost": "65",
        "range": "430"
      },
      {
        "key": "R",
        "name": "狂舞终乐章",
        "description": "娑娜弹奏她的终极和弦，对敌方英雄造成魔法伤害，并晕眩他们，强制他们开始跳舞。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SonaR.png",
        "cooldown": "140/120/100",
        "cost": "100",
        "range": "900"
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
    "stats": {
      "hp": 665,
      "hpPerLevel": 104,
      "attackDamage": 62,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.736,
      "armor": 40,
      "magicResist": 28,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "花岗岩护盾",
        "description": "墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害，若数秒内墨菲特未受到攻击，护盾将重置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Malphite_GraniteShield.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "地震碎片",
        "description": "墨菲特发出一块大地碎片穿过他敌人处的地面，在碰撞时造成伤害并且偷取移动速度3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SeismicShard.png",
        "cooldown": "8",
        "cost": "70/75/80/85/90",
        "range": "625"
      },
      {
        "key": "W",
        "name": "雷霆拍击",
        "description": "墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Obduracy.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "30/35/40/45/50",
        "range": "400"
      },
      {
        "key": "E",
        "name": "大地震颤",
        "description": "墨菲特锤击地面，放射出冲击波对目标造成基于他护甲值的魔法伤害，同时暂时降低目标攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Landslide.png",
        "cooldown": "7",
        "cost": "50/55/60/65/70",
        "range": "400"
      },
      {
        "key": "R",
        "name": "势不可挡",
        "description": "墨菲特自身高速冲向一个区域，对区域内的敌人们造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/UFSlash.png",
        "cooldown": "130/115/100",
        "cost": "100",
        "range": "1000"
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
    "stats": {
      "hp": 650,
      "hpPerLevel": 104,
      "attackDamage": 67,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.638,
      "armor": 34,
      "magicResist": 32,
      "moveSpeed": 350,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "吞噬灵魂",
        "description": "内瑟斯吸取敌人的生命能量，从而获得生命偷取加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Nasus_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "汲魂痛击",
        "description": "内瑟斯对敌人施放汲魂痛击造成伤害，如果敌人死于汲魂痛击，则永久增加下次汲魂痛击的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusQ.png",
        "cooldown": "7.5/6.5/5.5/4.5/3.5",
        "cost": "20",
        "range": "255"
      },
      {
        "key": "W",
        "name": "枯萎",
        "description": "内瑟斯使一名敌方英雄衰老，持续减少其移动速度和攻击速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "80",
        "range": "700"
      },
      {
        "key": "E",
        "name": "灵魂烈焰",
        "description": "内瑟斯在目标区域施放灵魂烈焰，伤害并削弱敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusE.png",
        "cooldown": "12",
        "cost": "60/70/80/90/100",
        "range": "650"
      },
      {
        "key": "R",
        "name": "死神降临",
        "description": "内瑟斯释放一个具有强大魔力的沙漠风暴来侵袭身边的敌人。当风暴肆虐期间，他会获得额外生命值、额外攻击距离，伤害附近的敌人，汲魂痛击会拥有较短冷却时间，并获得额外的护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NasusR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "400"
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
    "stats": {
      "hp": 685,
      "hpPerLevel": 94,
      "attackDamage": 57,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.736,
      "armor": 33,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "诅咒之触",
        "description": "阿木木的普通攻击会诅咒他的敌人，使敌人会从即将到来的魔法伤害中承受额外真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Amumu_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "绷带牵引",
        "description": "阿木木向目标投掷粘稠的绷带，将自己拉向目标，并对目标造成伤害和眩晕效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/BandageToss.png",
        "cooldown": "3",
        "cost": "50",
        "range": "1100"
      },
      {
        "key": "W",
        "name": "绝望光环",
        "description": "附近的敌人陷入绝望，每秒损失一定百分比的最大生命值并刷新身上的诅咒效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AuraofDespair.png",
        "cooldown": "1",
        "cost": "8",
        "range": "300"
      },
      {
        "key": "E",
        "name": "阿木木的愤怒",
        "description": "永久减少阿木木所受的物理伤害。主动施放时，阿木木可以发泄他的怒火，对周围的敌人造成伤害。阿木木每被攻击一次，该技能的冷却时间就会缩短。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Tantrum.png",
        "cooldown": "9/8/7/6/5",
        "cost": "35",
        "range": "350"
      },
      {
        "key": "R",
        "name": "木乃伊之咒",
        "description": "阿木木用绷带将附近敌方单位通通缠住，对他们施加诅咒效果，并造成伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CurseoftheSadMummy.png",
        "cooldown": "150/125/100",
        "cost": "100/150/200",
        "range": "550"
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
    "stats": {
      "hp": 625,
      "hpPerLevel": 100,
      "attackDamage": 55,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.656,
      "armor": 25,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "厄运的眷顾",
        "description": "在对一个新目标进行普攻时，厄运小姐会造成额外物理伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MissFortune_W.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "一箭双雕",
        "description": "厄运小姐向敌人发射子弹，伤害他们以及他们后面的目标。两次攻击都可以施加【厄运的眷顾】。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneRicochetShot.png",
        "cooldown": "7/6/5/4/3",
        "cost": "40",
        "range": "650"
      },
      {
        "key": "W",
        "name": "大步流星",
        "description": "厄运小姐在不被攻击时会被动获得移动速度加成。可以主动施放这个技能来获得短时间的攻击速度加成。在【大步流星】尚未冷却完毕时，【厄运的眷顾】可减少【大步流星】的剩余持续时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneViciousStrikes.png",
        "cooldown": "12",
        "cost": "45",
        "range": "600"
      },
      {
        "key": "E",
        "name": "枪林弹雨",
        "description": "厄运小姐发射一阵弹雨来获得目标区域的视野，对敌人造成几波伤害，并减缓他们的移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneScattershot.png",
        "cooldown": "18/17/16/15/14",
        "cost": "80",
        "range": "1000"
      },
      {
        "key": "R",
        "name": "弹幕时间",
        "description": "厄运小姐向她面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。这个技能的每波子弹都可以暴击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissFortuneBulletTime.png",
        "cooldown": "120/110/100",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 635,
      "hpPerLevel": 99,
      "attackDamage": 61,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.665,
      "armor": 24,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 500
    },
    "abilities": [
      {
        "key": "P",
        "name": "来自艾卡西亚的惊喜",
        "description": "在死后4秒，克格莫会爆炸，对周围的敌人造成真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/KogMaw_IcathianSurprise.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "腐蚀唾液",
        "description": "克格莫发射一团腐蚀性物质，对目标造成魔法伤害，并暂时腐蚀目标的护甲和魔法抗性。克格莫还会获得额外攻速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawQ.png",
        "cooldown": "7",
        "cost": "40",
        "range": "1175"
      },
      {
        "key": "W",
        "name": "生化弹幕",
        "description": "克格莫的攻击获得额外距离，并且能够对目标造成额外的魔法伤害，伤害值基于目标的最大生命值 攻击特效。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawBioArcaneBarrage.png",
        "cooldown": "17",
        "cost": "40",
        "range": "530"
      },
      {
        "key": "E",
        "name": "虚空淤泥",
        "description": "克格莫抛射出一团特殊的分泌物，对经过或停留在分泌物上的敌人造成伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawVoidOoze.png",
        "cooldown": "12",
        "cost": "40/55/70/85/100",
        "range": "1200"
      },
      {
        "key": "R",
        "name": "活体大炮",
        "description": "克格莫发射一枚射程极远的活体炮弹，让被命中的敌人暴露在己方视野中，并对目标造成魔法伤害（对低血量目标的伤害会显著提升）。 在短时间内连续使用活体大炮，将消耗额外的法力值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KogMawLivingArtillery.png",
        "cooldown": "2/1.5/1",
        "cost": "40",
        "range": "1300/1550/1800"
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
    "stats": {
      "hp": 670,
      "hpPerLevel": 92,
      "attackDamage": 50,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 26,
      "magicResist": 22,
      "moveSpeed": 335,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "登神长阶",
        "description": "凯尔的攻击会随着她提升等级和分配技能点而获得增强。她的羽翼将燃起圣焰，逐步提供攻击速度，移动速度，攻击距离，以及攻击附带焰浪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Kayle_P.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "耀焰冲击",
        "description": "凯尔召出一个传送门，召唤出一把星界之剑来刺穿敌人，对命中的所有敌人造成减速、伤害和防御属性击碎效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleQ.png",
        "cooldown": "12/11/10/9/8",
        "cost": "60/70/80/90/100",
        "range": "900"
      },
      {
        "key": "W",
        "name": "星界恩典",
        "description": "通过神圣的赐福，凯尔为自己和距她最近的友方英雄提供治疗和移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleW.png",
        "cooldown": "15",
        "cost": "70/75/80/85/90",
        "range": "900"
      },
      {
        "key": "E",
        "name": "星火符刃",
        "description": "被动：凯尔的星界之剑，“美德”，会对她在攻击的敌人造成额外伤害。 主动：凯尔的下次攻击将用星火重击她的目标，基于敌人的已损失生命值造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleE.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "0",
        "range": "550"
      },
      {
        "key": "R",
        "name": "圣裁之刻",
        "description": "凯尔让一名友方英雄免疫伤害，并号召曾经的正义星灵们用一阵神圣剑雨来纯化她目标附近的区域。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KayleR.png",
        "cooldown": "160/120/80",
        "cost": "100/50/0",
        "range": "900"
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
    "stats": {
      "hp": 574,
      "hpPerLevel": 96,
      "attackDamage": 52,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 24,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "瓶中时光",
        "description": "基兰将时光储存为经验值并能将其提供给他的友军。当他拥有足够的经验值来使一名友方英雄升级时，他就能通过右键点击来传授经验值。基兰自身也会获得等值的经验值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Zilean_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "定时炸弹",
        "description": "将一颗炸弹扔向目标区域，炸弹会附着在靠近它的单位身上（英雄优先）。炸弹会在3秒后爆炸，造成范围魔法伤害。如果炸弹被另一颗定时炸弹给提前引爆，那么还会使敌人晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ZileanQ.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "900"
      },
      {
        "key": "W",
        "name": "穿梭未来",
        "description": "基兰为未来的对抗做准备，减少他所有其它基础技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ZileanW.png",
        "cooldown": "14/12/10/8/6",
        "cost": "35",
        "range": "600"
      },
      {
        "key": "E",
        "name": "时光发条",
        "description": "基兰扭曲任意单位的时光，短时间内提升友方单位移动速度或减少敌方单位移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TimeWarp.png",
        "cooldown": "15",
        "cost": "50",
        "range": "550"
      },
      {
        "key": "R",
        "name": "时光倒流",
        "description": "基兰对友方英雄施放时光结界，若目标死亡，则时光倒流，救活目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ChronoShift.png",
        "cooldown": "120/90/60",
        "cost": "125/150/175",
        "range": "900"
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
    "stats": {
      "hp": 620,
      "hpPerLevel": 99,
      "attackDamage": 65,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.638,
      "armor": 33,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "血之饥渴",
        "description": "沃里克的普攻造成额外魔法伤害。如果沃里克的生命值低于50%，那么他会获得等额的治疗效果。如果他的生命值低于25%，则治疗效果提升至三倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/WarwickP.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "野兽之口",
        "description": "沃里克向前猛扑并撕咬他的目标，造成基于目标最大生命值的伤害，并造成基于实际伤害值的治疗效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickQ.png",
        "cooldown": "8/7.5/7/6.5/6",
        "cost": "80/85/90/95/100",
        "range": "365"
      },
      {
        "key": "W",
        "name": "鲜血追猎",
        "description": "沃里克感知生命值在50%以下的敌人，在朝着这些敌人移动时会获得移动速度加成，并在攻击这些敌人时会获得攻速加成。当这些敌人的生命值在25%以下时，他会狂暴并让这些加成提升至三倍。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickW.png",
        "cooldown": "80/70/60/50/40",
        "cost": "55",
        "range": "4000"
      },
      {
        "key": "E",
        "name": "远祖嗥叫",
        "description": "沃里克获得持续2.5秒的伤害减免效果。在效果结束时，或者重新激活技能时，沃里克会嗥叫，使附近的敌人因恐惧而逃跑1秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickE.png",
        "cooldown": "15/14/13/12/11",
        "cost": "40",
        "range": "375"
      },
      {
        "key": "R",
        "name": "无尽束缚",
        "description": "沃里克朝一个方向跳跃（跳跃距离可从他的移动速度加成中获益），将他所碰撞到的第一个敌方英雄压制1.5秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WarwickR.png",
        "cooldown": "110/90/70",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 646,
      "hpPerLevel": 101,
      "attackDamage": 60,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 43,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "日光",
        "description": "技能会在敌人身上施加【日光】效果，持续1.5秒。在此期间，蕾欧娜友军对这些目标造成伤害时，会触发【日光】，使目标受到额外的魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/LeonaSunlight.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "破晓之盾",
        "description": "蕾欧娜用盾进行下次普通攻击，造成额外魔法伤害并晕眩目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaShieldOfDaybreak.png",
        "cooldown": "5",
        "cost": "30/35/40/45/50",
        "range": "100"
      },
      {
        "key": "W",
        "name": "日蚀",
        "description": "蕾欧娜举起盾牌，提供伤害减免、护甲和魔法抗性。当持续时间首次结束时，如果附近有敌人，那么她会对其造成魔法伤害并延长效果的持续时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaSolarBarrier.png",
        "cooldown": "14/13/12/11/10",
        "cost": "60",
        "range": "450"
      },
      {
        "key": "E",
        "name": "天顶之刃",
        "description": "蕾欧娜投掷一束日光，对直线上的所有敌人造成魔法伤害。当效果消失时，蕾欧娜会冲向最后一个被击中的敌人并使其无法移动。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaZenithBlade.png",
        "cooldown": "12/10.5/9/7.5/6",
        "cost": "40/45/50/55/60",
        "range": "875"
      },
      {
        "key": "R",
        "name": "日炎耀斑",
        "description": "蕾欧娜召唤一道太阳光束，对区域内的敌人造成伤害。区域中心的敌人会被晕眩，并且外围的敌人会被减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LeonaSolarFlare.png",
        "cooldown": "90/75/60",
        "cost": "100",
        "range": "1200"
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
    "stats": {
      "hp": 630,
      "hpPerLevel": 110,
      "attackDamage": 63,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 33,
      "magicResist": 32,
      "moveSpeed": 335,
      "attackRange": 150
    },
    "abilities": [
      {
        "key": "P",
        "name": "战栗",
        "description": "斯卡纳的普通攻击、撼地、擎天和毒刺贯体都会施加战栗效果。在满层战栗时，敌人们会在其持续期间内受到最大生命值魔法伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Skarner_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "撼地 / 擎天",
        "description": "斯卡纳从地面掘出一块巨石来强化他的普攻，这块巨石可作为飞弹投掷。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerQ.png",
        "cooldown": "8/6.75/5.5/4.25/3",
        "cost": "30",
        "range": "400"
      },
      {
        "key": "W",
        "name": "震地壁垒",
        "description": "斯卡纳获得一个护盾并生成一阵地震，地震的冲击波会伤害并减速敌人们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerW.png",
        "cooldown": "10/9/8/7/6",
        "cost": "60/65/70/75/80",
        "range": "700"
      },
      {
        "key": "E",
        "name": "以绪塔尔冲击",
        "description": "斯卡纳向前冲锋并穿过地形。如果他撞击到一个英雄或大型野怪，则可将其猛推到他命中的下一个墙体上，造成伤害和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerE.png",
        "cooldown": "22/21/20/19/18",
        "cost": "50/55/60/65/70",
        "range": "1700"
      },
      {
        "key": "R",
        "name": "毒刺贯体",
        "description": "斯卡纳向前甩出他的尾巴，以压制敌方英雄们。一旦被压制，猎物们就会在斯卡纳移动时被拖行。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SkarnerR.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "625"
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
    "stats": {
      "hp": 620,
      "hpPerLevel": 110,
      "attackDamage": 46,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 21,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 450
    },
    "abilities": [
      {
        "key": "P",
        "name": "死亡契约",
        "description": "在死亡时，卡尔萨斯会化为一个灵体，能够继续施放技能。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Karthus_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "荒芜",
        "description": "卡尔萨斯在目标区域释放一次有延迟的爆炸魔法，对区域内的所有敌人造成伤害。对孤立无援的敌人造成提升过的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusLayWasteA1.png",
        "cooldown": "0",
        "cost": "20/25/30/35/40",
        "range": "875"
      },
      {
        "key": "W",
        "name": "痛苦之墙",
        "description": "卡尔萨斯创造一道可通过的魔能之墙。所有穿过墙体的敌方单位都会被暂时降低移动速度和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusWallOfPain.png",
        "cooldown": "15",
        "cost": "70",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "亵渎",
        "description": "卡尔萨斯被动地从他的猎物那里窃取法力，每杀死一个敌人就会获得法力。卡尔萨斯也可以转化这种力量，用猎物的灵魂环绕自身，对附近的敌人造成伤害，但会急速消耗他自己的法力。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusDefile.png",
        "cooldown": "0.5",
        "cost": "30/42/54/66/78",
        "range": "550"
      },
      {
        "key": "R",
        "name": "安魂曲",
        "description": "在引导3秒后，卡尔萨斯就会对所有敌方英雄造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/KarthusFallenOne.png",
        "cooldown": "200/180/160",
        "cost": "100",
        "range": "10000"
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
    "stats": {
      "hp": 600,
      "hpPerLevel": 102,
      "attackDamage": 60,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 24,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "咒能高涨",
        "description": "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Ezreal_RisingSpellForce.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "秘术射击",
        "description": "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealQ.png",
        "cooldown": "5.5/5.25/5/4.75/4.5",
        "cost": "28/31/34/37/40",
        "range": "1150"
      },
      {
        "key": "W",
        "name": "精华跃动",
        "description": "伊泽瑞尔发射一个法球，法球会附着在命中的第一个敌方英雄或战略点上。如果伊泽瑞尔用技能或攻击命中一个法球时，会将它引爆来造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealW.png",
        "cooldown": "8",
        "cost": "50",
        "range": "1150"
      },
      {
        "key": "E",
        "name": "奥术跃迁",
        "description": "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。优先选择被【精华跃动】击中的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealE.png",
        "cooldown": "26/23/20/17/14",
        "cost": "70",
        "range": "475"
      },
      {
        "key": "R",
        "name": "精准弹幕",
        "description": "伊泽瑞尔蓄力然后向目标区域释放长程能量波，对穿过的敌人造成高额伤害（对小兵和非史诗级野怪的伤害会减少）。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/EzrealR.png",
        "cooldown": "120/105/90",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 655,
      "hpPerLevel": 87,
      "attackDamage": 68,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.679,
      "armor": 36,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "死亡荣耀",
        "description": "在被击杀后，赛恩会回光返照一段时间并且生命值会快速衰减。在此期间，他的攻击会变得超快，获得生命偷取，并且每次攻击会额外造成基于目标最大生命值的额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sion_Passive1.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "残虐猛击",
        "description": "赛恩开始蓄力，并在释放时对他前方的一个区域进行一次强劲的猛击，对区域内的敌人造成伤害。如果他蓄力时间足够久，那么被命中的敌人还会受到击飞和晕眩效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionQ.png",
        "cooldown": "10/9/8/7/6",
        "cost": "45",
        "range": "10000"
      },
      {
        "key": "W",
        "name": "灵魂熔炉",
        "description": "赛恩为自己套上护盾，并能在3秒后再次激活这个技能来对身边的敌人造成魔法伤害。在赛恩击杀敌人时，他会被动获得最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionW.png",
        "cooldown": "15/14/13/12/11",
        "cost": "75/80/85/90/95",
        "range": "500"
      },
      {
        "key": "E",
        "name": "杀手怒吼",
        "description": "赛恩发射一个短程冲击波，来对命中的第一个敌人造成伤害、减速效果和破甲效果。如果冲击波命中的是小兵或者野怪，那么目标敌方单位还会被击退，对沿途的所有敌方单位造成伤害、减速和护甲击碎效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionE.png",
        "cooldown": "12/11/10/9/8",
        "cost": "35/40/45/50/55",
        "range": "800"
      },
      {
        "key": "R",
        "name": "蛮横冲撞",
        "description": "赛恩朝着一个方向冲锋，持续提升移动速度。他可以朝着鼠标悬停处进行微小的转向。当他与一名敌人产生碰撞时，他会基于敌人们与碰撞点之间的距离造成伤害和击飞效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SionR.png",
        "cooldown": "140/100/60",
        "cost": "100",
        "range": "7500"
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
    "stats": {
      "hp": 630,
      "hpPerLevel": 98,
      "attackDamage": 59,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.679,
      "armor": 27,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "死亡毒液",
        "description": "图奇的攻击会使目标感染死亡毒液 攻击特效，每秒造成真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Twitch_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "埋伏",
        "description": "图奇进入伪装状态，持续一段短暂的时间并且移动速度得到提升。当离开伪装状态后，图奇会暂时获得攻击速度加成。 当一名身上带有【死亡毒液】的敌方英雄死亡时，此技能的冷却时间会重置。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchHideInShadows.png",
        "cooldown": "16",
        "cost": "40",
        "range": "20"
      },
      {
        "key": "W",
        "name": "剧毒之桶",
        "description": "图奇扔出一个毒性之桶来引爆一个区域，对区域内的敌人造成减速效果，并对他们施加死亡毒液效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchVenomCask.png",
        "cooldown": "13/12/11/10/9",
        "cost": "70",
        "range": "950"
      },
      {
        "key": "E",
        "name": "毒性爆发",
        "description": "图奇引爆他那卑劣的毒素，对已中毒的敌人进行更为深远的蹂躏。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchExpunge.png",
        "cooldown": "12/11/10/9/8",
        "cost": "50/60/70/80/90",
        "range": "1200"
      },
      {
        "key": "R",
        "name": "火力全开",
        "description": "图奇让十字弩火力全开，快速地朝他面前射出强力且射程极远的穿刺箭头，穿透沿途的所有敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TwitchFullAutomatic.png",
        "cooldown": "90",
        "cost": "100",
        "range": "1200"
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
    "stats": {
      "hp": 640,
      "hpPerLevel": 105,
      "attackDamage": 65,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.679,
      "armor": 33,
      "magicResist": 32,
      "moveSpeed": 355,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "双重打击",
        "description": "易大师每攻击数次，就会同时对目标进行2次打击。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/MasterYi_Passive1.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "阿尔法突袭",
        "description": "易以肉眼难以发觉的速度穿梭于战场，对多个敌人造成物理伤害，同时处于不可被选取的状态下。阿尔法突袭可以暴击，并对野怪造成额外物理伤害。普通攻击可以减少阿尔法突袭的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/AlphaStrike.png",
        "cooldown": "20/19.5/19/18.5/18",
        "cost": "50/55/60/65/70",
        "range": "600"
      },
      {
        "key": "W",
        "name": "冥想",
        "description": "易通过集中念力来活化他的身体，从而回复生命值，并暂时减少所受的伤害。此外，易还会为双重打击充能，并暂停无极剑道和高原血统的持续时长。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Meditate.png",
        "cooldown": "10",
        "cost": "40",
        "range": "20"
      },
      {
        "key": "E",
        "name": "无极剑道",
        "description": "提供额外真实伤害至普攻",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/WujuStyle.png",
        "cooldown": "14",
        "cost": "0",
        "range": "20"
      },
      {
        "key": "R",
        "name": "高原血统",
        "description": "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。该技能激活期间，易在参与击杀一名敌方英雄的同时，会延长该技能的持续时间。在击杀和助攻后，也会被动地减少易其它技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Highlander.png",
        "cooldown": "85",
        "cost": "100",
        "range": "1"
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
    "stats": {
      "hp": 565,
      "hpPerLevel": 92,
      "attackDamage": 47,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 26,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "皮克斯，仙灵伙伴",
        "description": "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Lulu_PixFaerieCompanion.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "闪耀长枪",
        "description": "璐璐和皮克斯各自发射一个穿刺飞弹，对命中的所有敌人造成伤害和重度减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluQ.png",
        "cooldown": "7",
        "cost": "50/55/60/65/70",
        "range": "925"
      },
      {
        "key": "W",
        "name": "奇思妙想",
        "description": "如果对友军施放，会暂时增加目标友军的攻击速度和移动速度。如果对敌人施放，会将一名敌方英雄变成可爱的动物，使其无法攻击或施法。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluW.png",
        "cooldown": "18",
        "cost": "65",
        "range": "650"
      },
      {
        "key": "E",
        "name": "帮忙，皮克斯！",
        "description": "如果对友军施放，会命令皮克斯跳到一名友军身上进行保护，之后会跟随并协助目标（而不是璐璐）进行攻击。如果对敌人施放，皮克斯会跳到敌人身上造成伤害，之后会跟随并提供目标的视野。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluE.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "60/65/70/75/80",
        "range": "650"
      },
      {
        "key": "R",
        "name": "狂野生长",
        "description": "璐璐让她的友军变大，击飞目标附近的敌人，同时为她的友军提供大量生命值加成。接下来的数秒内，该友军会获得一个减少附近敌人速度的光环。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/LuluR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "900"
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
    "stats": {
      "hp": 580,
      "hpPerLevel": 108,
      "attackDamage": 52,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 18,
      "magicResist": 32,
      "moveSpeed": 340,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "超凡邪力",
        "description": "维迦是最强大的恶魔，甚至能对符文之地之心发起攻击——并且他只会越来越强大！用技能攻击一名敌人、击杀单位或拆毁防御塔都会为维迦永久提升法术强度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/VeigarEntropy.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "黑暗祭祀",
        "description": "维迦释放一束黑暗能量，对最先被命中的两个敌人造成魔法伤害。被这个能量束所击杀的单位，会永久地为维迦提供一些法术强度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarBalefulStrike.png",
        "cooldown": "6/5.5/5/4.5/4",
        "cost": "30/35/40/45/50",
        "range": "1000"
      },
      {
        "key": "W",
        "name": "黑暗物质",
        "description": "维迦召唤一大团黑暗物质轰击目标区域，落地造成魔法伤害。【超凡邪力】的层数会缩短这个技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarDarkMatter.png",
        "cooldown": "0",
        "cost": "60/65/70/75/80",
        "range": "950"
      },
      {
        "key": "E",
        "name": "扭曲空间",
        "description": "维迦扭曲空间的边缘，创造一个牢笼来使途径的敌人晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarEventHorizon.png",
        "cooldown": "20/18.5/17/15.5/14",
        "cost": "70/75/80/85/90",
        "range": "725"
      },
      {
        "key": "R",
        "name": "能量爆裂",
        "description": "引爆目标敌方英雄，造成大量魔法伤害，并基于目标已损失生命值提升伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VeigarR.png",
        "cooldown": "120/90/60",
        "cost": "100",
        "range": "650"
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
    "stats": {
      "hp": 644,
      "hpPerLevel": 94,
      "attackDamage": 69,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 38,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "肉食者",
        "description": "当科加斯杀死一个单位时，他会回复生命值和法力值。回复的数值会随着科加斯的等级而提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/GreenTerror_TailSpike.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "破裂",
        "description": "使目标地面破裂，将敌人抛向空中，造成伤害并减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Rupture.png",
        "cooldown": "6",
        "cost": "50",
        "range": "950"
      },
      {
        "key": "W",
        "name": "野性尖叫",
        "description": "科加斯向面前锥形区域施放恐怖声波，造成魔法伤害并沉默数秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/FeralScream.png",
        "cooldown": "11/10.5/10/9.5/9",
        "cost": "70/75/80/85/90",
        "range": "300"
      },
      {
        "key": "E",
        "name": "恐惧之刺",
        "description": "科加斯的攻击会释放致命的尖刺，伤害并减速面前所有的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/VorpalSpikes.png",
        "cooldown": "8/7/6/5/4",
        "cost": "30",
        "range": "40"
      },
      {
        "key": "R",
        "name": "盛宴",
        "description": "吞噬一个敌方单位，造成高额真实伤害。若目标被吞噬致死，科加斯就会长大，提高最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Feast.png",
        "cooldown": "80/70/60",
        "cost": "100",
        "range": "175"
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
    "stats": {
      "hp": 580,
      "hpPerLevel": 101,
      "attackDamage": 55,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 18,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 500
    },
    "abilities": [
      {
        "key": "P",
        "name": "虚空穿越",
        "description": "玛尔扎哈如果近期没有受到伤害或控制效果，就会获得巨幅伤害减免和免疫控制的效果，并且这个效果在受到伤害后还会残留一小段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Malzahar_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "虚空召唤",
        "description": "玛尔扎哈开启两扇通向虚空的传送门。在短暂的延迟后，两扇门之间会有虚空能量对流而过，造成魔法伤害并沉默敌方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharQ.png",
        "cooldown": "6",
        "cost": "60/65/70/75/80",
        "range": "900"
      },
      {
        "key": "W",
        "name": "虚空虫群",
        "description": "玛尔扎哈召唤虚灵去攻击附近的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharW.png",
        "cooldown": "8",
        "cost": "40/45/50/55/60",
        "range": "150"
      },
      {
        "key": "E",
        "name": "煞星幻象",
        "description": "玛尔扎哈将目标的惨死幻象侵入目标的意识中，造成持续伤害。玛尔扎哈对目标使用其它技能时会刷新幻象的持续时间。 如果目标在感染幻象期间死亡，那么幻象会传到附近的一个敌人身上，并且玛尔扎哈会回复法力值。玛尔扎哈的虚灵会优先攻击感染了幻象的单位。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharE.png",
        "cooldown": "11/10/9/8/7",
        "cost": "60/70/80/90/100",
        "range": "650"
      },
      {
        "key": "R",
        "name": "冥府之握",
        "description": "玛尔扎哈引导虚空的精萃来把一名敌方英雄压制在一个充满伤害的负能量地带上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MalzaharR.png",
        "cooldown": "140/110/80",
        "cost": "100",
        "range": "700"
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
    "stats": {
      "hp": 646,
      "hpPerLevel": 113,
      "attackDamage": 59,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.64,
      "armor": 21,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 150
    },
    "abilities": [
      {
        "key": "P",
        "name": "虚空之石",
        "description": "卡萨丁所受的魔法伤害减少，并无视单位的碰撞体积。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Kassadin_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "虚无法球",
        "description": "卡萨丁向目标发射虚空能量法球，造成伤害并打断目标的技能引导。满溢的能量会在他身边环绕，提供一个可吸收魔法伤害的临时护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NullLance.png",
        "cooldown": "9/8.5/8/7.5/7",
        "cost": "60/65/70/75/80",
        "range": "650"
      },
      {
        "key": "W",
        "name": "虚空之刃",
        "description": "被动：卡萨丁的普通攻击会造成额外魔法伤害。主动：卡萨丁的下次普通攻击会造成显著的额外魔法伤害并回复法力值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NetherBlade.png",
        "cooldown": "7",
        "cost": "1",
        "range": "1"
      },
      {
        "key": "E",
        "name": "能量脉冲",
        "description": "附近有单位施放法术技能时，卡萨丁将吸收能量，当充能完毕后，吸收的能量可转化为脉冲，对面前锥形区域内敌人造成伤害并减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/ForcePulse.png",
        "cooldown": "21/20/19/18/17",
        "cost": "60/65/70/75/80",
        "range": "400"
      },
      {
        "key": "R",
        "name": "虚空行走",
        "description": "卡萨丁传送到附近区域，对区域内的敌方单位造成伤害。 在一段时间内连续施放虚空行走技能会消耗更多的法力值，但也会造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RiftWalk.png",
        "cooldown": "5/3.5/2",
        "cost": "40",
        "range": "500"
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
    "stats": {
      "hp": 610,
      "hpPerLevel": 90,
      "attackDamage": 61,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 29,
      "magicResist": 32,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "弗雷尔卓德的召唤",
        "description": "努努提升威朗普和一名附近友军的攻击速度和移动速度，并使威朗普的普攻可以伤害目标周围的敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/NunuPassive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "吞噬",
        "description": "威朗普撕咬一个小兵、野怪或敌方英雄，造成巨大伤害并回复自己的生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuQ.png",
        "cooldown": "13/12/11/10/9",
        "cost": "60",
        "range": "125"
      },
      {
        "key": "W",
        "name": "史上最大雪球！",
        "description": "威朗普滚起一个雪球，它的尺寸和速度将随着滚动时间而增长。雪球会伤害并击飞敌人。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuW.png",
        "cooldown": "14",
        "cost": "50/55/60/65/70",
        "range": "7500"
      },
      {
        "key": "E",
        "name": "雪球飞射",
        "description": "努努掷出多个雪球以伤害敌人。当他完成后，威朗普就会禁锢被雪球命中过的任何英雄或大型野怪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuE.png",
        "cooldown": "14/13/12/11/10",
        "cost": "50/55/60/65/70",
        "range": "625"
      },
      {
        "key": "R",
        "name": "绝对零度",
        "description": "努努和威朗普在一个区域内创造一阵强大的暴风雪，来减速敌人并在结束时造成巨额伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/NunuR.png",
        "cooldown": "110/100/90",
        "cost": "100",
        "range": "650"
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
    "stats": {
      "hp": 615,
      "hpPerLevel": 104,
      "attackDamage": 54,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.69,
      "armor": 24,
      "magicResist": 30,
      "moveSpeed": 330,
      "attackRange": 500
    },
    "abilities": [
      {
        "key": "P",
        "name": "游击队军备",
        "description": "如果提莫在短时间内静止站立且不受任何伤害，就会进入无定期的隐形状态。如果提莫在草丛中，他就能在移动的同时进入并保持隐形状态。离开隐形状态后，提莫会获得“出奇制胜”的增益效果，提升攻击速度，持续3秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/TeemoPassive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "致盲吹箭",
        "description": "用一团强力的毒液来侵蚀一名敌人的视野，对目标单位造成伤害并使目标致盲一段时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoQ.png",
        "cooldown": "7",
        "cost": "70/75/80/85/90",
        "range": "680"
      },
      {
        "key": "W",
        "name": "小莫快跑",
        "description": "提莫动如脱兔，提升移动速度，直到被敌方英雄或防御塔击中为止。提莫可以通过冲刺来获得额外移动速度，且短时间内不会因被击中而使加速效果中止。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoW.png",
        "cooldown": "14",
        "cost": "40",
        "range": "20"
      },
      {
        "key": "E",
        "name": "毒性射击",
        "description": "提莫每次攻击附带毒液伤害 攻击特效，造成持续性伤害，持续4秒。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoE.png",
        "cooldown": "0",
        "cost": "0",
        "range": "680"
      },
      {
        "key": "R",
        "name": "种蘑菇",
        "description": "提莫投掷一个可爆炸的毒性陷阱，需要消耗提莫背包里的一个蘑菇。陷阱会在被敌方踩中时爆炸，释放出一团毒云，对附近的敌人造成减速效果和持续伤害。如果提莫把一个蘑菇扔到另一个蘑菇上，那么这个蘑菇会进行弹跳，获得额外的距离。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/TeemoR.png",
        "cooldown": "0.25",
        "cost": "75/55/35",
        "range": "600/750/900"
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
    "stats": {
      "hp": 610,
      "hpPerLevel": 100,
      "attackDamage": 52,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.644,
      "armor": 27,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "海克斯科技军备",
        "description": "库奇普通攻击的一部分伤害会转化为真实伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Corki_RapidReload.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "磷光炸弹",
        "description": "库奇向目标区域发射一枚闪光弹，对范围内的敌人造成魔法伤害。这个技能还会暂时让目标区域附近的非隐形的单位和英雄现形。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PhosphorusBomb.png",
        "cooldown": "9/8.5/8/7.5/7",
        "cost": "60/65/70/75/80",
        "range": "825"
      },
      {
        "key": "W",
        "name": "瓦尔基里俯冲",
        "description": "库奇飞行一小段距离，同时投下炸弹。炸弹会制造出一条毁灭与死亡的路径，对留在路径中的敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/CarpetBomb.png",
        "cooldown": "20/18/16/14/12",
        "cost": "80/85/90/95/100",
        "range": "600"
      },
      {
        "key": "E",
        "name": "格林机枪",
        "description": "库奇使用格林机枪扫射他面前锥形范围内的敌人，造成伤害并降低敌人护甲和魔法抗性。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/GGun.png",
        "cooldown": "12",
        "cost": "50/55/60/65/70",
        "range": "600"
      },
      {
        "key": "R",
        "name": "火箭轰击",
        "description": "库奇朝着他的目标地点发射一枚导弹。导弹会在命中第一个敌人后爆炸，并对目标周围单位造成伤害。库奇每隔一段时间就会挂载一枚导弹，最多挂载7枚。每发射2枚导弹后，下一次就会发射超级导弹，造成额外伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/MissileBarrage.png",
        "cooldown": "2",
        "cost": "35",
        "range": "1225"
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
    "stats": {
      "hp": 600,
      "hpPerLevel": 104,
      "attackDamage": 60,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 30,
      "magicResist": 30,
      "moveSpeed": 335,
      "attackRange": 500
    },
    "abilities": [
      {
        "key": "P",
        "name": "敏锐疾行",
        "description": "希维尔在攻击一名敌方英雄时，会短暂地获得移动速度提升。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Sivir_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "回旋之刃",
        "description": "希维尔像挥舞回力标一样挥出她的十字刃，并在往返时造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirQ.png",
        "cooldown": "10/9.5/9/8.5/8",
        "cost": "55/60/65/70/75",
        "range": "1200"
      },
      {
        "key": "W",
        "name": "弹射",
        "description": "希维尔的下几次普通攻击将获得额外攻击速度并弹射到周围的目标上，在弹射时造成削减过的伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirW.png",
        "cooldown": "12",
        "cost": "60",
        "range": "20"
      },
      {
        "key": "E",
        "name": "法术护盾",
        "description": "制造一层法术屏障，来格挡一次对着希维尔施放的敌方单体技能。如果希维尔成功格挡了一次技能，那么就会回复生命值并获得爆发性的移动速度加成。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirE.png",
        "cooldown": "24/22.5/21/19.5/18",
        "cost": "0",
        "range": "20"
      },
      {
        "key": "R",
        "name": "狩猎",
        "description": "希维尔在战斗中引领她的友军，为他们提供持续一段时间的爆发性移动速度加成。此外，希维尔的攻击会缩短她的技能的冷却时间。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SivirR.png",
        "cooldown": "120/100/80",
        "cost": "100",
        "range": "1000"
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
    "stats": {
      "hp": 650,
      "hpPerLevel": 109,
      "attackDamage": 64,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.658,
      "armor": 40,
      "magicResist": 28,
      "moveSpeed": 345,
      "attackRange": 175
    },
    "abilities": [
      {
        "key": "P",
        "name": "矢志不退",
        "description": "在数次技能或攻击后，潘森的下一个技能会得到强化。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Pantheon_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "贯星长枪",
        "description": "潘森朝着选定方向刺出或投掷他的长枪。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonQ.png",
        "cooldown": "11/10.25/9.5/8.75/8",
        "cost": "25",
        "range": "575"
      },
      {
        "key": "W",
        "name": "斗盾跃击",
        "description": "潘森跃向一个目标，对其造成伤害和晕眩。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonW.png",
        "cooldown": "13/12/11/10/9",
        "cost": "55",
        "range": "600"
      },
      {
        "key": "E",
        "name": "神佑枪阵",
        "description": "潘森架起他的圣盾，变得免疫来自前方的伤害，并快速地用他的长枪戳刺。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonE.png",
        "cooldown": "22/21/20/19/18",
        "cost": "80",
        "range": "400"
      },
      {
        "key": "R",
        "name": "大荒星陨",
        "description": "潘森屏气凝神然后跃至空中， 随后如流星一般落到选定的位置上。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PantheonR.png",
        "cooldown": "180/165/150",
        "cost": "100",
        "range": "5500"
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
    "stats": {
      "hp": 600,
      "hpPerLevel": 109,
      "attackDamage": 62,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 37,
      "magicResist": 32,
      "moveSpeed": 325,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "法力屏障",
        "description": "布里茨在血量过低时会获得一层基于它法力值的护盾。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Blitzcrank_ManaBarrier.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "机械飞爪",
        "description": "布里茨发射它的右手，来抓取碰到的第一个敌人，在对敌人造成伤害的同时，还会将这名敌人拉到它的面前。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/RocketGrab.png",
        "cooldown": "20/19/18/17/16",
        "cost": "100",
        "range": "1079"
      },
      {
        "key": "W",
        "name": "过载运转",
        "description": "布里茨对自己进行了超级充电，它的攻击速度和移动速度得到了显著提升。它会在效果结束后暂时减速。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/Overdrive.png",
        "cooldown": "15",
        "cost": "75",
        "range": "1"
      },
      {
        "key": "E",
        "name": "能量铁拳",
        "description": "布里茨为机械手臂充能，下次攻击造成双倍伤害并击飞目标。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/PowerFist.png",
        "cooldown": "7/6.5/6/5.5/5",
        "cost": "25",
        "range": "300"
      },
      {
        "key": "R",
        "name": "静电力场",
        "description": "被布里茨攻击过的敌人会被标记并在1秒后受到闪电伤害。此外，布里茨可以主动激活这个技能来移除附近敌人们的护盾、对他们造成伤害并暂时沉默他们。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/StaticField.png",
        "cooldown": "60/40/20",
        "cost": "100",
        "range": "600"
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
    "stats": {
      "hp": 605,
      "hpPerLevel": 88,
      "attackDamage": 50,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.625,
      "armor": 32,
      "magicResist": 30,
      "moveSpeed": 325,
      "attackRange": 550
    },
    "abilities": [
      {
        "key": "P",
        "name": "拯救",
        "description": "索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/Soraka_Passive.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "流星坠落",
        "description": "一颗流星从天而降，落在目标地点，造成魔法伤害，并对区域中心的敌人造成减速效果。如果一名敌人被此技能命中，那么索拉卡就会回复生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaQ.png",
        "cooldown": "8/7/6/5/4",
        "cost": "45/50/55/60/65",
        "range": "810"
      },
      {
        "key": "W",
        "name": "星之灌注",
        "description": "索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaW.png",
        "cooldown": "6/5/4/3/2",
        "cost": "40/45/50/55/60",
        "range": "550"
      },
      {
        "key": "E",
        "name": "星体结界",
        "description": "在目标区域创造一个结界，沉默结界中的所有敌人。当结界消散时，仍在结界内的敌人会被禁锢。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaE.png",
        "cooldown": "20/19/18/17/16",
        "cost": "70/75/80/85/90",
        "range": "925"
      },
      {
        "key": "R",
        "name": "祈愿",
        "description": "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/SorakaR.png",
        "cooldown": "150/135/120",
        "cost": "100",
        "range": "25000"
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
    "stats": {
      "hp": 640,
      "hpPerLevel": 103,
      "attackDamage": 61,
      "attackDamagePerLevel": 0,
      "attackSpeed": 0.67,
      "armor": 32,
      "magicResist": 29,
      "moveSpeed": 345,
      "attackRange": 125
    },
    "abilities": [
      {
        "key": "P",
        "name": "想去哪就去哪",
        "description": "蒙多医生抵抗他受到的第一个定身效果，但会失去生命值并在附近掉落一罐化学药剂。蒙多医生可移动到化学药剂上来拾取它，从而回复生命值并缩短这个技能的冷却时间。 蒙多医生也会显著提升生命回复。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/passive/DrMundo_P.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "病毒屠刀",
        "description": "蒙多医生掷出一把沾染病菌的骨锯，对命中的第一个敌人造成基于其当前生命值的魔法伤害和减速效果。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoQ.png",
        "cooldown": "4",
        "cost": "0",
        "range": "975"
      },
      {
        "key": "W",
        "name": "电击疗法",
        "description": "蒙多医生电击他自己，对附近的敌人们造成持续伤害并储存他受到的一部分伤害。在持续时间结束时或再次施放时，蒙多医生会对附近的敌人们造成一次爆发伤害。如果这个效果命中了一名敌人，那么蒙多医生会回复一部分已储存的伤害值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoW.png",
        "cooldown": "17/16.5/16/15.5/15",
        "cost": "0",
        "range": "325"
      },
      {
        "key": "E",
        "name": "大力行医",
        "description": "被动 - 蒙多医生获得额外攻击力，数额会基于他的最大生命值而提升。 主动 - 蒙多医生用他的“医用”手提包猛砸一个敌人，造成基于他已损失生命值的额外伤害。如果这个敌人被击杀，那么还会被拍飞，对途经的所有敌人造成伤害。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoE.png",
        "cooldown": "9/8.25/7.5/6.75/6",
        "cost": "0",
        "range": "0"
      },
      {
        "key": "R",
        "name": "极限剂量",
        "description": "蒙多医生给自己注入化学药剂，立刻治疗他的一部分已损失生命值。随后他会获得移动速度并在一段长周期内持续回复自身一部分最大生命值。",
        "icon": "https://ddragon.leagueoflegends.com/cdn/16.15.1/img/spell/DrMundoR.png",
        "cooldown": "120",
        "cost": "0",
        "range": "20"
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
    "description": "在每个回合开始时，每拥有 1法术强度就会获得 1护盾值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1141,
    "apiName": "ARAM_AllForYou",
    "name": "全心为你",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/allforyou_small.png",
    "description": "你的治疗和护盾在用在一个友军身上时会变强。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1007,
    "apiName": "ARAM_BluntForce",
    "name": "大力",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bluntforce_small.png",
    "description": "获得10%攻击力。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1103,
    "apiName": "ARAM_BreadAndButter",
    "name": "面包和黄油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "你的动态数值获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1151,
    "apiName": "ARAM_BreadAndCheese",
    "name": "面包和奶酪",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "你的动态数值获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1150,
    "apiName": "ARAM_BreadAndJam",
    "name": "面包和果酱",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "你的动态数值获得100技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1011,
    "apiName": "ARAM_CantTouchThis",
    "name": "你摸不到",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/canttouchthis_small.png",
    "description": "施放你的终极技能会使你进入短时间的免疫伤害状态。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1013,
    "apiName": "ARAM_CelestialBody",
    "name": "星界躯体",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/celestialbody_small.png",
    "description": "获得1000生命值，但你造成的伤害降低10%。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1018,
    "apiName": "ARAM_CourageoftheColossus",
    "name": "巨像的勇气",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/courageofthecolossus_small.png",
    "description": "定身或缚地一个敌方英雄后获得动态数值护盾值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1118,
    "apiName": "ARAM_CriticalHealing",
    "name": "会心治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/criticalhealing_small.png",
    "description": "你的治疗和护盾可以暴击，造成额外的动态数值。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1019,
    "apiName": "ARAM_Dashing",
    "name": "全凭身法",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dashing_small.png",
    "description": "你的冲刺、跳跃、闪烁或传送类技能获得75技能急速。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1020,
    "apiName": "ARAM_DawnbringersResolve",
    "name": "黎明使者的坚决",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dawnbringersresolve_small.png",
    "description": "在跌到60%生命值以下时，在3秒内持续治疗动态数值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1029,
    "apiName": "ARAM_EtherealWeapon",
    "name": "虚幻武器",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/etherealweapon_small.png",
    "description": "你的技能可施加{{ Item_Keyword_OnHit }}。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1030,
    "apiName": "ARAM_Eureka",
    "name": "尤里卡",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/eureka_small.png",
    "description": "获得相当于20%法术强度的技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1036,
    "apiName": "ARAM_Firebrand",
    "name": "火上浇油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firebrand_small.png",
    "description": "你的攻击会施加一个可无限叠加的灼烧{{ Item_Keyword_OnHit }}，持续造成伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1116,
    "apiName": "ARAM_Flashy",
    "name": "闪现向前",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashy_small.png",
    "description": "你的闪现有1层充能，并且冷却时间为2秒。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1322,
    "apiName": "ARAM_GetExcited",
    "name": "罪恶快感",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/getexcited_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1041,
    "apiName": "ARAM_Goliath",
    "name": "歌利亚巨人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/goliath_small.png",
    "description": "体型变大，获得15%生命值和10%适应之力。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1044,
    "apiName": "ARAM_IceCold",
    "name": "冰寒",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/icecold_small.png",
    "description": "你的减速效果可使移动速度降低额外的0。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1048,
    "apiName": "ARAM_JeweledGauntlet",
    "name": "珠光护手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/jeweledgauntlet_small.png",
    "description": "你的技能可以造成暴击。 获得 动态数值暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1305,
    "apiName": "ARAM_LegDay",
    "name": "练腿日",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/legday_small.png",
    "description": "获得10移动速度和15%减速抗性。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1053,
    "apiName": "ARAM_MadScientist",
    "name": "科学狂人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/madscientist_small.png",
    "description": "每回合，你要么变大(适应之力和生命值)要么变小(技能急速和移动速度)。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1054,
    "apiName": "ARAM_MasterofDuality",
    "name": "物法皆修",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/masterofduality_small.png",
    "description": "你的每次攻击为你提供法术强度{{ Item_Keyword_OnHit }}，并且你的每次技能为你提供攻击力，持续到战斗结束。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1104,
    "apiName": "ARAM_Minionmancer",
    "name": "仆从大师",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/minionmancer_small.png",
    "description": "你的召唤物获得35%体型提升、生命值和伤害。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1058,
    "apiName": "ARAM_MysticPunch",
    "name": "秘术冲拳",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mysticpunch_small.png",
    "description": "{{ Item_Keyword_OnHit }}使你的各个技能的冷却时间缩减1.25秒。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1062,
    "apiName": "ARAM_OmniSoul",
    "name": "全能龙魂",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/omnisoul_small.png",
    "description": "获得2个随机龙魂。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1063,
    "apiName": "ARAM_OutlawsGrit",
    "name": "狂徒豪气",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/outlawsgrit_small.png",
    "description": "在使用一次冲刺、闪烁或传送之后，你获得护甲和魔法抗性。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1311,
    "apiName": "ARAM_Overflow",
    "name": "溢流",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/overflow_small.png",
    "description": "你的法力消耗翻倍。 你的技能的治疗效果、护盾效果和伤害获得提升，提升幅度基于你的最大法力值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1324,
    "apiName": "ARAM_ProteinShake",
    "name": "蛋白粉奶昔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/proteinshake_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1156,
    "apiName": "ARAM_Quest_WoogletsWitchcap",
    "name": "沃格勒特的巫师帽",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/quest_woogletswitchcap_small.png",
    "description": "立刻：获得无用大棒。 需求：持有灭世者的死亡之帽和中娅沙漏。 奖励:获得沃格勒特的巫师帽。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1067,
    "apiName": "ARAM_RabbleRousing",
    "name": "活力焕发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/rabblerousing_small.png",
    "description": "使用一个技能时会回复动态数值生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1068,
    "apiName": "ARAM_Recursion",
    "name": "循环往复",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/recursion_small.png",
    "description": "获得40技能急速。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1170,
    "apiName": "ARAM_ScopedWeapons",
    "name": "万用瞄准镜",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopedweapons_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1071,
    "apiName": "ARAM_ScopierWeapons",
    "name": "更万用的瞄准镜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopierweapons_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1115,
    "apiName": "ARAM_ScopiestWeapons",
    "name": "最万用的瞄准镜",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopiestweapons_small.png",
    "description": "获得动态数值攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1113,
    "apiName": "ARAM_SkilledSniper",
    "name": "老练狙神",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/skilledsniper_small.png",
    "description": "用一个非终极技能命中一个远处的敌人时，将这个技能的冷却时间巨幅缩短。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1136,
    "apiName": "ARAM_SlapAround",
    "name": "扇巴掌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/slaparound_small.png",
    "description": "每当你定身或缚地一个敌人时，获得持续到回合结束的15适应之力。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1077,
    "apiName": "ARAM_SoulSiphon",
    "name": "灵魂虹吸",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/soulsiphon_small.png",
    "description": "暴击造成伤害的10%会等额治疗你自身。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1214,
    "apiName": "ARAM_SpinToWin",
    "name": "旋转至胜",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/spintowin_small.png",
    "description": "你的旋转类技能获得15技能急速并且多造成15%伤害！",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1353,
    "apiName": "ARAM_TankEngine",
    "name": "坦克引擎",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tank_engine_small.png",
    "description": "在参与击杀时，获得体型提升和百分比额外生命值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1081,
    "apiName": "ARAM_TapDancer",
    "name": "踢踏舞",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tapdancer_small.png",
    "description": "你的攻击会为你提供6移动速度 {{ Item_Keyword_OnHit }}。 获得等同于你移动速度10%的攻击速度。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1084,
    "apiName": "ARAM_ThreadtheNeedle",
    "name": "穿针引线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/threadtheneedle_small.png",
    "description": "获得15%护甲穿透和法术穿透。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1320,
    "apiName": "ARAM_Upgrade_Collector",
    "name": "升级：收集者",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradecollector_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1336,
    "apiName": "ARAM_Upgrade_IE",
    "name": "升级：无尽之刃",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradeie_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1319,
    "apiName": "ARAM_Upgrade_Immolate",
    "name": "升级：献祭",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradeimmolate_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1318,
    "apiName": "ARAM_Upgrade_ZH",
    "name": "升级：中娅",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradezh_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1097,
    "apiName": "ARAM_WitchfulThinking",
    "name": "巫师式思考",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/witchfulthinking_small.png",
    "description": "获得60法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1326,
    "apiName": "Nightstalking",
    "name": "夜狩",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/nightstalking_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1028,
    "apiName": "ARAM_Erosion",
    "name": "侵蚀",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/erosion_small.png",
    "description": "对敌人造成伤害时会施加一层持续4秒且可叠加的护甲和魔法抗性击碎效果。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1034,
    "apiName": "VeilOfWarding",
    "name": "防护面纱",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1105,
    "apiName": "ARAM_Homeguard",
    "name": "家园卫士",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/homeguard_small.png",
    "description": "获得@spell.Augment_Homeguard:MovementSpeed*100@%移动速度，在受到伤害后失效@spell.Augment_Homeguard:DisableCooldown@秒。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1051,
    "apiName": "ARAM_LightemUp",
    "name": "点亮他们！",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightemup_small.png",
    "description": "每第4次攻击造成额外魔法伤害{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1073,
    "apiName": "ARAM_ShadowRunner",
    "name": "暗影疾奔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shadowrunner_small.png",
    "description": "在使用一个冲刺、跳跃、闪烁或传送类技能或离开潜行状态之后，获得持续@spell.Augment_ShadowRunner:BuffDuration@秒的@spell.Augment_ShadowRunner:MSAmount@移动速度。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1327,
    "apiName": "Adamant",
    "name": "坚若磐石",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1087,
    "apiName": "ARAM_Typhoon",
    "name": "台风",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/typhoon_small.png",
    "description": "你的攻击会对一个额外目标发射一根弩箭，这个弩箭会造成削减过的伤害并施加{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1095,
    "apiName": "ARAM_WindspeakersBlessing",
    "name": "风语者的祝福",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/windspeakersblessing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1112,
    "apiName": "ARAM_UltimateUnstoppable",
    "name": "终极不可阻挡",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimateunstoppable_small.png",
    "description": "在你使用你的终极技能后，你获得持续2秒的控制免疫。 (8秒冷却时间)。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1134,
    "apiName": "ARAM_DrawYourSword",
    "name": "亮出你的剑",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drawyoursword_small.png",
    "description": "你现在是近战。 获得攻击力、生命值、攻击速度、生命偷取和移动速度 (基于你舍弃的攻击距离)。",
    "tags": [
      "attack",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1225,
    "apiName": "ARAM_DualWield",
    "name": "双刀流",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dualwield_small.png",
    "description": "在你攻击时，发射一个弩箭，它造成40%伤害并以40%效能施加你的{{ Item_Keyword_OnHit }}。 获得15% 总攻击速度。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1194,
    "apiName": "ARAM_FeyMagic",
    "name": "精怪魔法",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/feymagic_small.png",
    "description": "你的终极技能的伤害会对敌人造成持续若干秒的变形效果。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1187,
    "apiName": "ARAM_Flashbang",
    "name": "闪光弹",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashbang_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1088,
    "apiName": "ARAM_UltimateRevolution",
    "name": "终极刷新",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimaterevolution_small.png",
    "description": "每回合一次，在你施放终极技能后将其刷新。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1133,
    "apiName": "ARAM_MagicMissile",
    "name": "魔法飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/maps/particles/kiwi/magicmissile_small.png",
    "description": "用一个技能造成伤害时，会发射3个魔法飞弹，每个造成百分比最大生命值的真实伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1149,
    "apiName": "ARAM_Impassable",
    "name": "不动如山",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/impassable_small.png",
    "description": "获余震和冰川增幅基石符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1079,
    "apiName": "ARAM_SymphonyofWar",
    "name": "战争交响乐",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/symphonyofwar_small.png",
    "description": "获得致命节奏和征服者基石符文。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1332,
    "apiName": "OminousPact",
    "name": "不祥契约",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/wisdomofages_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1328,
    "apiName": "CriticalRhythm",
    "name": "暴击律动",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalrhythm_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1333,
    "apiName": "EscapePlan",
    "name": "逃跑计划",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/escapeplan_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1325,
    "apiName": "GlassCannon",
    "name": "玻璃大炮",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1334,
    "apiName": "SnowballUpgrade",
    "name": "升级：雪球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowballupgrade_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1329,
    "apiName": "BiggestSnowballEver",
    "name": "史上最大雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/biggestsnowballever_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1337,
    "apiName": "KingMe",
    "name": "尊我为王",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/kingme_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1335,
    "apiName": "Goldrend",
    "name": "夺金",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldrend_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1331,
    "apiName": "EmpyreanPromise",
    "name": "至高天诺言",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/empyreampromise_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1195,
    "apiName": "ARAM_GiantSlayer",
    "name": "巨人杀手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/giantslayer_small.png",
    "description": "体型变小，获得移动速度，并基于敌方英雄体型大于你的程度造成额外伤害。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1323,
    "apiName": "ARAM_Cruelty",
    "name": "残忍",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/cruelty_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1345,
    "apiName": "ARAM_SpiritualPurification",
    "name": "心灵净化",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritualpurification_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1343,
    "apiName": "Quest_Sneakerhead",
    "name": "王中王，靴中靴",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sneakerhead_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1344,
    "apiName": "FinalForm",
    "name": "最终形态",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/finalform_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1347,
    "apiName": "Poltergeist",
    "name": "吵闹鬼",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1348,
    "apiName": "Flash2",
    "name": "闪闪现现",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/flash2_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1996,
    "apiName": "ARAM_Upgrade_Sheen",
    "name": "升级：耀光",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradesheen_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1349,
    "apiName": "UltimateAwakening",
    "name": "终极唤醒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/zerohour_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1314,
    "apiName": "MightyShield",
    "name": "强力护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/mightyshield_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1315,
    "apiName": "SwiftAndSafe",
    "name": "快中求稳",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/swiftandsafe_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1346,
    "apiName": "Vampirism",
    "name": "吸血习性",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/vampired_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1027,
    "apiName": "ARAM_Earthwake",
    "name": "大地苏醒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/earthwake_small.png",
    "description": "你的冲刺、闪烁或传送类技能会留下一条在1秒后爆炸的轨迹。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1074,
    "apiName": "ARAM_ShrinkRay",
    "name": "缩小射线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shrinkray_small.png",
    "description": "你的攻击会将目标的伤害与体型削减10%{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1402,
    "apiName": "ARAM_StatsOnStatsOnStats",
    "name": "属性叠属性叠属性！",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/statsonstatsonstats_small.png",
    "description": "获得4个【属性锻造器】！",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1358,
    "apiName": "PinballSnowball",
    "name": "弹球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pinballsnowball_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1361,
    "apiName": "ARAM_Quest_VoidImmolation",
    "name": "艾卡西亚的陷落",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/quest_voidimmolation_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1403,
    "apiName": "ARAM_StatsOnStats",
    "name": "属性叠属性！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/statsonstats_small.png",
    "description": "获得3个【属性锻造器】！",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1388,
    "apiName": "InfiniteRecursion",
    "name": "无限循环往复",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/infiniterecursion_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1384,
    "apiName": "Donation",
    "name": "捐赠",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/donation_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1373,
    "apiName": "ShrinkEngine",
    "name": "缩小引擎",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/shrinkengine_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1006,
    "apiName": "ARAM_BladeWaltz",
    "name": "利刃华尔兹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bladewaltz_small.png",
    "description": "获得召唤师技能利刃华尔兹。 利刃华尔兹会让你进入不可被选取状态，在此期间对敌人进行反复突进并造成6次伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1386,
    "apiName": "YouSpinMeRightRound",
    "name": "转得我眩晕了",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/youspinmerightround_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1375,
    "apiName": "SoulEater",
    "name": "吞噬灵魂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/souleater_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1401,
    "apiName": "GrowthSpurt",
    "name": "生机迸发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/growthspurt_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1390,
    "apiName": "ARAM_PhenomenalEvil",
    "name": "超凡邪恶",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/aram_phenomenalevil_small.png",
    "description": "在你用一个技能命中敌人时永久提供1法术强度。 如果在4回合之后拿取，则获得40法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1392,
    "apiName": "GoldenSnowball",
    "name": "神圣雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldensnowball_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1413,
    "apiName": "ARAM_StuckInHereWithMe",
    "name": "和我一起困在这里",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stuckinherewithme_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2004,
    "apiName": "ARAM_EmpoweredByTheFaithful",
    "name": "信念者的强化",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/empoweredbythefaithful_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1415,
    "apiName": "Twinfire",
    "name": "双生火焰",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/twinfire_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1416,
    "apiName": "HextechSoul",
    "name": "海克斯科技龙魂",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/infernalsoul_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2005,
    "apiName": "ARAM_InfernoTriggered",
    "name": "扳机炼狱",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/madscientist_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2006,
    "apiName": "ARAM_Dropkick",
    "name": "飞身踢",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dropkick_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1389,
    "apiName": "HandOfBaron",
    "name": "男爵之手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/handofbaron_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1356,
    "apiName": "CriticalMissile",
    "name": "暴击飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalmissile_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1420,
    "apiName": "Sonata",
    "name": "咏叹奏鸣",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sonata_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1421,
    "apiName": "PromQueen",
    "name": "舞会女王",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/promqueen_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2026,
    "apiName": "KillSecured",
    "name": "杀意翻涌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/killsecure_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1308,
    "apiName": "ARAM_Firefox",
    "name": "火狐",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firfox_small.png",
    "description": "自动施放 获得移动速度并召唤3道烈焰环绕于你，瞄准距离内相距最近的那个可见英雄并造成魔法伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 2007,
    "apiName": "ARAM_LittleDevil",
    "name": "你肩上的恶魔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/littledevil_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2009,
    "apiName": "ARAM_Zealot",
    "name": "狂热者",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/zealot_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2018,
    "apiName": "ARAM_Purist_Caster",
    "name": "纯粹主义者 - 术师",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/puristcaster_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2010,
    "apiName": "ARAM_DoubleTap",
    "name": "双发快射",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/doubletap_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2024,
    "apiName": "CritNCast",
    "name": "由暴生急",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/critncast_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2016,
    "apiName": "ARAM_Juiced",
    "name": "注魔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/juiced_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1379,
    "apiName": "Upgrade_SwordOfBlossom",
    "name": "升级：花晓之剑",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrademikaelsblessing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1220,
    "apiName": "ARAM_FanTheHammer",
    "name": "连拨击锤",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/fanthehammer_small.png",
    "description": "在你攻击时，发射5个箭矢，每个造成物理伤害并施加你的{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 2031,
    "apiName": "ARAM_DropBear",
    "name": "空投熊",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drop_bear_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2032,
    "apiName": "FishBait",
    "name": "鲨鱼诱饵",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/fishbait_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2034,
    "apiName": "SharkTempest",
    "name": "鲨鱼暴风",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sharktempest_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2042,
    "apiName": "BrushPower",
    "name": "藏身草丛",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/brushpower_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2043,
    "apiName": "NatureIsHealing",
    "name": "自然即是治愈",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/natureishealing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2046,
    "apiName": "PoroCharge_Active",
    "name": "魄罗蛮冲",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questporocharge_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2054,
    "apiName": "SpellVolley",
    "name": "三重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2055,
    "apiName": "ARAM_Multishot",
    "name": "多重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2065,
    "apiName": "ARAM_Terror",
    "name": "惊惧",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/desecrator_large.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2063,
    "apiName": "DimensionShift_Active",
    "name": "位面转移",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/whenthedarknesscomes_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2064,
    "apiName": "ARAM_Quickstep",
    "name": "快步",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2072,
    "apiName": "Missile_Split",
    "name": "咒语裂变",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2073,
    "apiName": "ARAM_SustainingStrike",
    "name": "虹吸",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2076,
    "apiName": "TitansPulse",
    "name": "保持坚定",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2078,
    "apiName": "ChainReaction",
    "name": "连锁反应",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2077,
    "apiName": "DarkWind",
    "name": "贪欲束缚",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradehubris_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2082,
    "apiName": "Equilibrium",
    "name": "我们的治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/equillibrium_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2083,
    "apiName": "BurstingTeeth",
    "name": "牙仙子",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questburstingteeth_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1001,
    "apiName": "ARAM_ImTheJuggernaut",
    "name": "泰坦的坚决",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/iamthejuggernaut_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2088,
    "apiName": "ARAM_Snowday",
    "name": "下雪天",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowday_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2062,
    "apiName": "Ability_SelfAOE_DoubleCast",
    "name": "回响施放",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2089,
    "apiName": "ARAM_YowchMyCoins",
    "name": "哎哟，我的硬币！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/youchmycoins_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2091,
    "apiName": "EndlessDecimation",
    "name": "无尽大杀四方",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/endlessdecimate_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1005,
    "apiName": "ARAM_WeeWooWeeWoo",
    "name": "喂呜喂呜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/weewooweewoo_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2087,
    "apiName": "ARAM_Archmage",
    "name": "大法师",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/eureka_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1204,
    "apiName": "ARAM_StackosaurusRex",
    "name": "叠角龙",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/stackosaurusrex_small.png",
    "description": "在你获得一个技能的永久层数时，多获得75%！",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 2096,
    "apiName": "LittleExtraHelp",
    "name": "小小的额外帮助",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2095,
    "apiName": "ARAM_HighRoller",
    "name": "掷骰狂人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/highroller_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2097,
    "apiName": "VoidDash",
    "name": "虚空冲刺",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2100,
    "apiName": "ARAM_SpecializedRecursion",
    "name": "急速之追求",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2099,
    "apiName": "ARAM_DivineDomain",
    "name": "飞升仪式",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2103,
    "apiName": "ARAM_BangBang",
    "name": "狙神飞星",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questbangbang_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2104,
    "apiName": "ARAM_SpiritBomb",
    "name": "灵魄炸弹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritbomb_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2107,
    "apiName": "ARAM_Hellbent",
    "name": "濒死悟道",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/hellbent_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2098,
    "apiName": "ARAM_EndlessHunt",
    "name": "吃过路兵",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dashing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2080,
    "apiName": "Snowbomb",
    "name": "冰雪爆裂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowbomb_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2102,
    "apiName": "PressureCooker",
    "name": "高压锅",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questpressurecooker_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2109,
    "apiName": "SnapBack",
    "name": "复位",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2128,
    "apiName": "BloodMoneyBurn",
    "name": "炽燃利息",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bloodmoney2_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2116,
    "apiName": "SpecializedEmpowerment",
    "name": "威能之追求",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/marksmage_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2118,
    "apiName": "SkipTheBasics",
    "name": "大招工具人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/skipthebasic_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2119,
    "apiName": "Overextender",
    "name": "过量延伸者",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/overextender_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2115,
    "apiName": "SquishySlappyGrab",
    "name": "软弹啪叽抓",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/squishyslappygrab_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2111,
    "apiName": "Bonk",
    "name": "邦！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bonk_large.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2123,
    "apiName": "Overloaded",
    "name": "超负荷",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2125,
    "apiName": "ItsGoTime",
    "name": "前进时间到",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2126,
    "apiName": "KeepGoing",
    "name": "装填",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightningstrikes_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2129,
    "apiName": "Terraind",
    "name": "地形专家",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightningstrikes_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2131,
    "apiName": "DontChangeTheChannel",
    "name": "别停止引导",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dontchangethechannel_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2133,
    "apiName": "MercysStrike",
    "name": "仁慈打击",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2127,
    "apiName": "ForgedByTheMaster",
    "name": "大师铸就",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/forgedbythemaster_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2134,
    "apiName": "SurgeField",
    "name": "电涌力场",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/surgefield_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2136,
    "apiName": "TrustyWeapon",
    "name": "可靠武器",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2132,
    "apiName": "WarlockJuicebox",
    "name": "术士果汁盒",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/warlockjuicebox_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2135,
    "apiName": "Overkill",
    "name": "针插垫",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/symphonyofwar_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2137,
    "apiName": "PatOnTheBack",
    "name": "轻拍背部",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/patontheback_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2139,
    "apiName": "PinCushion",
    "name": "豪猪",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pincushion_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2144,
    "apiName": "DoubleDefense",
    "name": "加固护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2138,
    "apiName": "WardingWeapon",
    "name": "自适应防护",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2148,
    "apiName": "DoubleStrike",
    "name": "双重打击",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2108,
    "apiName": "SupportMain",
    "name": "主玩辅助",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questsupportmain_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  }
];

export const classicMayhemAugments: MayhemAugment[] = [
  {
    "id": 1180,
    "apiName": "ARAM_BigBrain",
    "name": "超强大脑",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bigbrain_small.png",
    "description": "在每个回合开始时，每拥有 1法术强度就会获得 1护盾值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1141,
    "apiName": "ARAM_AllForYou",
    "name": "全心为你",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/allforyou_small.png",
    "description": "你的治疗和护盾在用在一个友军身上时会变强。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1007,
    "apiName": "ARAM_BluntForce",
    "name": "大力",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bluntforce_small.png",
    "description": "获得10%攻击力。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1011,
    "apiName": "ARAM_CantTouchThis",
    "name": "你摸不到",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/canttouchthis_small.png",
    "description": "施放你的终极技能会使你进入短时间的免疫伤害状态。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1013,
    "apiName": "ARAM_CelestialBody",
    "name": "星界躯体",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/celestialbody_small.png",
    "description": "获得1000生命值，但你造成的伤害降低10%。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1018,
    "apiName": "ARAM_CourageoftheColossus",
    "name": "巨像的勇气",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/courageofthecolossus_small.png",
    "description": "定身或缚地一个敌方英雄后获得动态数值护盾值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1118,
    "apiName": "ARAM_CriticalHealing",
    "name": "会心治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/criticalhealing_small.png",
    "description": "你的治疗和护盾可以暴击，造成额外的动态数值。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1020,
    "apiName": "ARAM_DawnbringersResolve",
    "name": "黎明使者的坚决",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dawnbringersresolve_small.png",
    "description": "在跌到60%生命值以下时，在3秒内持续治疗动态数值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1029,
    "apiName": "ARAM_EtherealWeapon",
    "name": "虚幻武器",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/etherealweapon_small.png",
    "description": "你的技能可施加{{ Item_Keyword_OnHit }}。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1036,
    "apiName": "ARAM_Firebrand",
    "name": "火上浇油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firebrand_small.png",
    "description": "你的攻击会施加一个可无限叠加的灼烧{{ Item_Keyword_OnHit }}，持续造成伤害。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1116,
    "apiName": "ARAM_Flashy",
    "name": "闪现向前",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashy_small.png",
    "description": "你的闪现有1层充能，并且冷却时间为2秒。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1322,
    "apiName": "ARAM_GetExcited",
    "name": "罪恶快感",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/getexcited_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1041,
    "apiName": "ARAM_Goliath",
    "name": "歌利亚巨人",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/goliath_small.png",
    "description": "体型变大，获得15%生命值和10%适应之力。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1044,
    "apiName": "ARAM_IceCold",
    "name": "冰寒",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/icecold_small.png",
    "description": "你的减速效果可使移动速度降低额外的0。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1048,
    "apiName": "ARAM_JeweledGauntlet",
    "name": "珠光护手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/jeweledgauntlet_small.png",
    "description": "你的技能可以造成暴击。 获得 动态数值暴击几率。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1305,
    "apiName": "ARAM_LegDay",
    "name": "练腿日",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/legday_small.png",
    "description": "获得10移动速度和15%减速抗性。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1054,
    "apiName": "ARAM_MasterofDuality",
    "name": "物法皆修",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/masterofduality_small.png",
    "description": "你的每次攻击为你提供法术强度{{ Item_Keyword_OnHit }}，并且你的每次技能为你提供攻击力，持续到战斗结束。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1104,
    "apiName": "ARAM_Minionmancer",
    "name": "仆从大师",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/minionmancer_small.png",
    "description": "你的召唤物获得35%体型提升、生命值和伤害。",
    "tags": [
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1058,
    "apiName": "ARAM_MysticPunch",
    "name": "秘术冲拳",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/mysticpunch_small.png",
    "description": "{{ Item_Keyword_OnHit }}使你的各个技能的冷却时间缩减1.25秒。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1063,
    "apiName": "ARAM_OutlawsGrit",
    "name": "狂徒豪气",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/outlawsgrit_small.png",
    "description": "在使用一次冲刺、闪烁或传送之后，你获得护甲和魔法抗性。",
    "tags": [
      "spell",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1311,
    "apiName": "ARAM_Overflow",
    "name": "溢流",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/overflow_small.png",
    "description": "你的法力消耗翻倍。 你的技能的治疗效果、护盾效果和伤害获得提升，提升幅度基于你的最大法力值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1324,
    "apiName": "ARAM_ProteinShake",
    "name": "蛋白粉奶昔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/proteinshake_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1067,
    "apiName": "ARAM_RabbleRousing",
    "name": "活力焕发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/rabblerousing_small.png",
    "description": "使用一个技能时会回复动态数值生命值。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1170,
    "apiName": "ARAM_ScopedWeapons",
    "name": "万用瞄准镜",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopedweapons_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1071,
    "apiName": "ARAM_ScopierWeapons",
    "name": "更万用的瞄准镜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopierweapons_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1115,
    "apiName": "ARAM_ScopiestWeapons",
    "name": "最万用的瞄准镜",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/scopiestweapons_small.png",
    "description": "获得动态数值攻击距离。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1113,
    "apiName": "ARAM_SkilledSniper",
    "name": "老练狙神",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/skilledsniper_small.png",
    "description": "用一个非终极技能命中一个远处的敌人时，将这个技能的冷却时间巨幅缩短。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1136,
    "apiName": "ARAM_SlapAround",
    "name": "扇巴掌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/slaparound_small.png",
    "description": "每当你定身或缚地一个敌人时，获得持续到回合结束的15适应之力。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1077,
    "apiName": "ARAM_SoulSiphon",
    "name": "灵魂虹吸",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/soulsiphon_small.png",
    "description": "暴击造成伤害的10%会等额治疗你自身。 获得 25%暴击几率。",
    "tags": [
      "attack",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1353,
    "apiName": "ARAM_TankEngine",
    "name": "坦克引擎",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tank_engine_small.png",
    "description": "在参与击杀时，获得体型提升和百分比额外生命值。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1081,
    "apiName": "ARAM_TapDancer",
    "name": "踢踏舞",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/tapdancer_small.png",
    "description": "你的攻击会为你提供6移动速度 {{ Item_Keyword_OnHit }}。 获得等同于你移动速度10%的攻击速度。",
    "tags": [
      "attack",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1084,
    "apiName": "ARAM_ThreadtheNeedle",
    "name": "穿针引线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/threadtheneedle_small.png",
    "description": "获得15%护甲穿透和法术穿透。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1097,
    "apiName": "ARAM_WitchfulThinking",
    "name": "巫师式思考",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/witchfulthinking_small.png",
    "description": "获得60法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1326,
    "apiName": "Nightstalking",
    "name": "夜狩",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/nightstalking_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1028,
    "apiName": "ARAM_Erosion",
    "name": "侵蚀",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/erosion_small.png",
    "description": "对敌人造成伤害时会施加一层持续4秒且可叠加的护甲和魔法抗性击碎效果。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1034,
    "apiName": "VeilOfWarding",
    "name": "防护面纱",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1051,
    "apiName": "ARAM_LightemUp",
    "name": "点亮他们！",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightemup_small.png",
    "description": "每第4次攻击造成额外魔法伤害{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1073,
    "apiName": "ARAM_ShadowRunner",
    "name": "暗影疾奔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shadowrunner_small.png",
    "description": "在使用一个冲刺、跳跃、闪烁或传送类技能或离开潜行状态之后，获得持续@spell.Augment_ShadowRunner:BuffDuration@秒的@spell.Augment_ShadowRunner:MSAmount@移动速度。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1327,
    "apiName": "Adamant",
    "name": "坚若磐石",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1087,
    "apiName": "ARAM_Typhoon",
    "name": "台风",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/typhoon_small.png",
    "description": "你的攻击会对一个额外目标发射一根弩箭，这个弩箭会造成削减过的伤害并施加{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1095,
    "apiName": "ARAM_WindspeakersBlessing",
    "name": "风语者的祝福",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/windspeakersblessing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1112,
    "apiName": "ARAM_UltimateUnstoppable",
    "name": "终极不可阻挡",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimateunstoppable_small.png",
    "description": "在你使用你的终极技能后，你获得持续2秒的控制免疫。 (8秒冷却时间)。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1134,
    "apiName": "ARAM_DrawYourSword",
    "name": "亮出你的剑",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drawyoursword_small.png",
    "description": "你现在是近战。 获得攻击力、生命值、攻击速度、生命偷取和移动速度 (基于你舍弃的攻击距离)。",
    "tags": [
      "attack",
      "tank",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1225,
    "apiName": "ARAM_DualWield",
    "name": "双刀流",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dualwield_small.png",
    "description": "在你攻击时，发射一个弩箭，它造成40%伤害并以40%效能施加你的{{ Item_Keyword_OnHit }}。 获得15% 总攻击速度。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1194,
    "apiName": "ARAM_FeyMagic",
    "name": "精怪魔法",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/feymagic_small.png",
    "description": "你的终极技能的伤害会对敌人造成持续若干秒的变形效果。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1187,
    "apiName": "ARAM_Flashbang",
    "name": "闪光弹",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/flashbang_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1088,
    "apiName": "ARAM_UltimateRevolution",
    "name": "终极刷新",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/ultimaterevolution_small.png",
    "description": "每回合一次，在你施放终极技能后将其刷新。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1133,
    "apiName": "ARAM_MagicMissile",
    "name": "魔法飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/maps/particles/kiwi/magicmissile_small.png",
    "description": "用一个技能造成伤害时，会发射3个魔法飞弹，每个造成百分比最大生命值的真实伤害。",
    "tags": [
      "spell",
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1332,
    "apiName": "OminousPact",
    "name": "不祥契约",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/wisdomofages_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1328,
    "apiName": "CriticalRhythm",
    "name": "暴击律动",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalrhythm_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1333,
    "apiName": "EscapePlan",
    "name": "逃跑计划",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/escapeplan_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1325,
    "apiName": "GlassCannon",
    "name": "玻璃大炮",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1334,
    "apiName": "SnowballUpgrade",
    "name": "升级：雪球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowballupgrade_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1329,
    "apiName": "BiggestSnowballEver",
    "name": "史上最大雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/biggestsnowballever_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1335,
    "apiName": "Goldrend",
    "name": "夺金",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldrend_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1331,
    "apiName": "EmpyreanPromise",
    "name": "至高天诺言",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/empyreampromise_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1195,
    "apiName": "ARAM_GiantSlayer",
    "name": "巨人杀手",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/giantslayer_small.png",
    "description": "体型变小，获得移动速度，并基于敌方英雄体型大于你的程度造成额外伤害。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1323,
    "apiName": "ARAM_Cruelty",
    "name": "残忍",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/cruelty_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1345,
    "apiName": "ARAM_SpiritualPurification",
    "name": "心灵净化",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritualpurification_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
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
    "hasPublicDescription": true
  },
  {
    "id": 1344,
    "apiName": "FinalForm",
    "name": "最终形态",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/finalform_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1347,
    "apiName": "Poltergeist",
    "name": "吵闹鬼",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poltergeist_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1348,
    "apiName": "Flash2",
    "name": "闪闪现现",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/flash2_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1314,
    "apiName": "MightyShield",
    "name": "强力护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/mightyshield_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1315,
    "apiName": "SwiftAndSafe",
    "name": "快中求稳",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/swiftandsafe_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1346,
    "apiName": "Vampirism",
    "name": "吸血习性",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/vampired_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1027,
    "apiName": "ARAM_Earthwake",
    "name": "大地苏醒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/earthwake_small.png",
    "description": "你的冲刺、闪烁或传送类技能会留下一条在1秒后爆炸的轨迹。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1074,
    "apiName": "ARAM_ShrinkRay",
    "name": "缩小射线",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/shrinkray_small.png",
    "description": "你的攻击会将目标的伤害与体型削减10%{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1358,
    "apiName": "PinballSnowball",
    "name": "弹球",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pinballsnowball_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1384,
    "apiName": "Donation",
    "name": "捐赠",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/donation_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1006,
    "apiName": "ARAM_BladeWaltz",
    "name": "利刃华尔兹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/bladewaltz_small.png",
    "description": "获得召唤师技能利刃华尔兹。 利刃华尔兹会让你进入不可被选取状态，在此期间对敌人进行反复突进并造成6次伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1375,
    "apiName": "SoulEater",
    "name": "吞噬灵魂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/souleater_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1401,
    "apiName": "GrowthSpurt",
    "name": "生机迸发",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/growthspurt_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1390,
    "apiName": "ARAM_PhenomenalEvil",
    "name": "超凡邪恶",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/aram_phenomenalevil_small.png",
    "description": "在你用一个技能命中敌人时永久提供1法术强度。 如果在4回合之后拿取，则获得40法术强度。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 1400,
    "apiName": "TrainOfTheDead",
    "name": "最终都市列车",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/nightstalking_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1414,
    "apiName": "Dropybara_Active",
    "name": "卡皮巴拉空投",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/orbitallaser_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1415,
    "apiName": "Twinfire",
    "name": "双生火焰",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/twinfire_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2005,
    "apiName": "ARAM_InfernoTriggered",
    "name": "扳机炼狱",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/madscientist_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2006,
    "apiName": "ARAM_Dropkick",
    "name": "飞身踢",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dropkick_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
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
    "hasPublicDescription": true
  },
  {
    "id": 1356,
    "apiName": "CriticalMissile",
    "name": "暴击飞弹",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/criticalmissile_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack",
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1420,
    "apiName": "Sonata",
    "name": "咏叹奏鸣",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sonata_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1421,
    "apiName": "PromQueen",
    "name": "舞会女王",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/promqueen_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2026,
    "apiName": "KillSecured",
    "name": "杀意翻涌",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/killsecure_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1308,
    "apiName": "ARAM_Firefox",
    "name": "火狐",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/firfox_small.png",
    "description": "自动施放 获得移动速度并召唤3道烈焰环绕于你，瞄准距离内相距最近的那个可见英雄并造成魔法伤害。",
    "tags": [
      "spell",
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 2007,
    "apiName": "ARAM_LittleDevil",
    "name": "你肩上的恶魔",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/littledevil_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2009,
    "apiName": "ARAM_Zealot",
    "name": "狂热者",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/zealot_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2010,
    "apiName": "ARAM_DoubleTap",
    "name": "双发快射",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/doubletap_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2016,
    "apiName": "ARAM_Juiced",
    "name": "注魔",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/juiced_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1220,
    "apiName": "ARAM_FanTheHammer",
    "name": "连拨击锤",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/fanthehammer_small.png",
    "description": "在你攻击时，发射5个箭矢，每个造成物理伤害并施加你的{{ Item_Keyword_OnHit }}。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 2031,
    "apiName": "ARAM_DropBear",
    "name": "空投熊",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/drop_bear_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2032,
    "apiName": "FishBait",
    "name": "鲨鱼诱饵",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/fishbait_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2034,
    "apiName": "SharkTempest",
    "name": "鲨鱼暴风",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/sharktempest_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2042,
    "apiName": "BrushPower",
    "name": "藏身草丛",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/brushpower_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2043,
    "apiName": "NatureIsHealing",
    "name": "自然即是治愈",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/natureishealing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2054,
    "apiName": "SpellVolley",
    "name": "三重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2055,
    "apiName": "ARAM_Multishot",
    "name": "多重射击",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2065,
    "apiName": "ARAM_Terror",
    "name": "惊惧",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/desecrator_large.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2063,
    "apiName": "DimensionShift_Active",
    "name": "位面转移",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/whenthedarknesscomes_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2064,
    "apiName": "ARAM_Quickstep",
    "name": "快步",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2072,
    "apiName": "Missile_Split",
    "name": "咒语裂变",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2073,
    "apiName": "ARAM_SustainingStrike",
    "name": "虹吸",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2076,
    "apiName": "TitansPulse",
    "name": "保持坚定",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2078,
    "apiName": "ChainReaction",
    "name": "连锁反应",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2077,
    "apiName": "DarkWind",
    "name": "贪欲束缚",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgradehubris_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2082,
    "apiName": "Equilibrium",
    "name": "我们的治疗",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/equillibrium_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2083,
    "apiName": "BurstingTeeth",
    "name": "牙仙子",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questburstingteeth_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1001,
    "apiName": "ARAM_ImTheJuggernaut",
    "name": "泰坦的坚决",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/iamthejuggernaut_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2088,
    "apiName": "ARAM_Snowday",
    "name": "下雪天",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowday_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2062,
    "apiName": "Ability_SelfAOE_DoubleCast",
    "name": "回响施放",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2089,
    "apiName": "ARAM_YowchMyCoins",
    "name": "哎哟，我的硬币！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/youchmycoins_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2091,
    "apiName": "EndlessDecimation",
    "name": "无尽大杀四方",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/endlessdecimate_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1005,
    "apiName": "ARAM_WeeWooWeeWoo",
    "name": "喂呜喂呜",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/weewooweewoo_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2087,
    "apiName": "ARAM_Archmage",
    "name": "大法师",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/eureka_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1204,
    "apiName": "ARAM_StackosaurusRex",
    "name": "叠角龙",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/stackosaurusrex_small.png",
    "description": "在你获得一个技能的永久层数时，多获得75%！",
    "tags": [
      "spell"
    ],
    "classicExclusive": false,
    "hasPublicDescription": true
  },
  {
    "id": 2096,
    "apiName": "LittleExtraHelp",
    "name": "小小的额外帮助",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2097,
    "apiName": "VoidDash",
    "name": "虚空冲刺",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2099,
    "apiName": "ARAM_DivineDomain",
    "name": "飞升仪式",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/glasscannon_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2103,
    "apiName": "ARAM_BangBang",
    "name": "狙神飞星",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questbangbang_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2104,
    "apiName": "ARAM_SpiritBomb",
    "name": "灵魄炸弹",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritbomb_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2107,
    "apiName": "ARAM_Hellbent",
    "name": "濒死悟道",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/hellbent_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2098,
    "apiName": "ARAM_EndlessHunt",
    "name": "吃过路兵",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/dashing_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2080,
    "apiName": "Snowbomb",
    "name": "冰雪爆裂",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowbomb_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2102,
    "apiName": "PressureCooker",
    "name": "高压锅",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/questpressurecooker_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2109,
    "apiName": "SnapBack",
    "name": "复位",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_gold.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2128,
    "apiName": "BloodMoneyBurn",
    "name": "炽燃利息",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bloodmoney2_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2116,
    "apiName": "SpecializedEmpowerment",
    "name": "威能之追求",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/marksmage_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2115,
    "apiName": "SquishySlappyGrab",
    "name": "软弹啪叽抓",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/squishyslappygrab_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2111,
    "apiName": "Bonk",
    "name": "邦！",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/bonk_large.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2123,
    "apiName": "Overloaded",
    "name": "超负荷",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_prismatic.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2125,
    "apiName": "ItsGoTime",
    "name": "前进时间到",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2126,
    "apiName": "KeepGoing",
    "name": "装填",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/lightningstrikes_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2131,
    "apiName": "DontChangeTheChannel",
    "name": "别停止引导",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dontchangethechannel_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2136,
    "apiName": "TrustyWeapon",
    "name": "可靠武器",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2132,
    "apiName": "WarlockJuicebox",
    "name": "术士果汁盒",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/warlockjuicebox_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2135,
    "apiName": "Overkill",
    "name": "针插垫",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/cherry/augments/icons/symphonyofwar_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2137,
    "apiName": "PatOnTheBack",
    "name": "轻拍背部",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/patontheback_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2139,
    "apiName": "PinCushion",
    "name": "豪猪",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/pincushion_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2144,
    "apiName": "DoubleDefense",
    "name": "加固护盾",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2138,
    "apiName": "WardingWeapon",
    "name": "自适应防护",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/genericabilityaugmenticon_silver.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 2148,
    "apiName": "DoubleStrike",
    "name": "双重打击",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/adamant_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 1392,
    "apiName": "GoldenSnowball",
    "name": "神圣雪球",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/goldensnowball_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": false,
    "hasPublicDescription": false
  },
  {
    "id": 7002,
    "apiName": "DontStopCleavin",
    "name": "黑切联盟",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dont_stop_cleaving_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7001,
    "apiName": "Upgrade_ZzRotPortal",
    "name": "升级：兹若特传送门",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrade_zzrotportal_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7003,
    "apiName": "DoOrDie",
    "name": "或杀或死",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/do_or_die_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7004,
    "apiName": "DrinkUp",
    "name": "一饮而尽",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/drink_up_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7010,
    "apiName": "FutureSightHeartsteel",
    "name": "时光发条：心之钢",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/fs_heart_steal_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7005,
    "apiName": "HasteMakesWaste",
    "name": "欲速则不达",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/haste_makes_waste_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7006,
    "apiName": "StabbyStabby",
    "name": "又快又狠",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stabby_stabby_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "attack"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7007,
    "apiName": "Upgrade_DeathFireGrasp",
    "name": "升级：冥火之拥",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrade_deathfire_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7009,
    "apiName": "Upgrade_InnervatingLocket",
    "name": "升级：激发之匣",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/upgrade_innervating_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7008,
    "apiName": "DoransBiggestFan",
    "name": "多兰的最铁粉丝",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dorans_fan_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7011,
    "apiName": "TrueEternity",
    "name": "真正的永恒",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/do_or_die_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7012,
    "apiName": "HexCore",
    "name": "海克斯核心",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/dont_stop_cleaving_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "spell"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7013,
    "apiName": "SpiritOfTheJungleMain",
    "name": "主玩打野之精魄",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/spiritualpurification_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7014,
    "apiName": "DipDiveDodge",
    "name": "拱火诱饵",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stabby_stabby_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 2003,
    "apiName": "ARAM_PoroKing",
    "name": "魄罗之王的弹跳",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poroking_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1406,
    "apiName": "GrandmasChiliOil",
    "name": "祖母的辣椒油",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/grandmaschilioil_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1339,
    "apiName": "LaserHeal",
    "name": "激光治疗",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/laseheal_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "tank"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1342,
    "apiName": "SnowballRoulette",
    "name": "雪球扭蛋机",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/snowballupgrade_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1409,
    "apiName": "ARAM_Poro_Blast",
    "name": "魄罗爆破手",
    "rarity": "gold",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/poroblast_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1372,
    "apiName": "BabyKitty",
    "name": "小猫咪找妈妈",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/babykitty_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 1424,
    "apiName": "ARAM_MissingPingAugment",
    "name": "？？？",
    "rarity": "prismatic",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/missingping_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "adaptive"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  },
  {
    "id": 7015,
    "apiName": "SummonersSafari",
    "name": "召唤师的游猎",
    "rarity": "silver",
    "icon": "https://raw.communitydragon.org/16.15/game/assets/ux/kiwi/augments/icons/stabby_stabby_small.png",
    "description": "客户端当前公开快照仅提供名称、稀有度与图标；具体动态数值请以对局内强化符文说明为准。",
    "tags": [
      "utility"
    ],
    "classicExclusive": true,
    "hasPublicDescription": false
  }
];

export const classicExclusiveAugments = classicMayhemAugments.filter((augment) => augment.classicExclusive);
