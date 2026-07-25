// Generated from OP.GG Classic 16.15 champion pages. Do not edit manually.
export type ClassicAbilityKey = "P" | "Q" | "W" | "E" | "R";

export type ClassicAbility = {
  key: ClassicAbilityKey;
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
};

export type ClassicChampionSkillSet = {
  championId: string;
  championName: string;
  sourceUrl: string;
  abilities: ClassicAbility[];
};

export const classicChampionSkills: ClassicChampionSkillSet[] = [
  {
    "championId": "60103",
    "championName": "阿狸",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ahri",
    "abilities": [
      {
        "key": "P",
        "name": "摄魂夺魄",
        "description": "每当用技能命中敌人时获得一层摄魂夺魄的充能。达到9层充能后，下一个技能会回复阿狸的生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_souleater.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "欺诈宝珠",
        "description": "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_orbofdeception.project_jade.png",
        "cooldown": "7",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "970"
      },
      {
        "key": "W",
        "name": "妖异狐火",
        "description": "阿狸放出三团狐火，锁定附近的敌人进行攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_foxfire.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5 / 4",
        "cost": "50",
        "range": "700"
      },
      {
        "key": "E",
        "name": "魅惑妖术",
        "description": "阿狸献出红唇热吻，对命中的第一个敌人造成伤害和魅惑效果。该敌人所受的来自阿狸技能的伤害也会提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_charm.project_jade.png",
        "cooldown": "12",
        "cost": "50 / 65 / 80 / 95 / 110 / 125",
        "range": "975"
      },
      {
        "key": "R",
        "name": "灵魄突袭",
        "description": "阿狸向前猛冲，并放出元气弹，对周围的3个敌人（英雄优先）造成伤害。灵魄突袭在进入冷却以前最多可被施放三次。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_spiritrush.project_jade.png",
        "cooldown": "110 / 95 / 80 / 65 / 50 / 35",
        "cost": "100",
        "range": "450"
      }
    ]
  },
  {
    "championId": "60024",
    "championName": "贾克斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/jax",
    "abilities": [
      {
        "key": "P",
        "name": "武器专精",
        "description": "贾克斯会基于装备提供的额外攻击力和法术强度获得额外生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_masterofarms.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "跳斩",
        "description": "贾克斯跃起猛击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_relentlessassault.project_jade.png",
        "cooldown": "17 / 14 / 11 / 8 / 5",
        "cost": "65",
        "range": "700"
      },
      {
        "key": "W",
        "name": "蓄力一击",
        "description": "贾克斯的下一次攻击或跳斩造成额外伤害，并对附近的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_empower.project_jade.png",
        "cooldown": "7 / 6 / 5 / 4 / 3",
        "cost": "35",
        "range": "300"
      },
      {
        "key": "E",
        "name": "反击风暴",
        "description": "贾克斯进入防御姿态，能够躲闪掉一切即将到来的攻击，并减少来自群体技能的伤害。随后他会晕眩周围的敌人并对其造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_disarm.project_jade.png",
        "cooldown": "18 / 16 / 14 / 12 / 10 / 8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "300"
      },
      {
        "key": "R",
        "name": "宗师之威",
        "description": "贾克斯每次攻击时获得攻击速度。每第三次连续攻击造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_coupdegrace.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "400"
      }
    ]
  },
  {
    "championId": "60064",
    "championName": "李青",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/lee-sin",
    "abilities": [
      {
        "key": "P",
        "name": "疾风骤雨",
        "description": "李青使用一次技能后，他接下来的两次普通攻击会获得40%攻击速度，且每次攻击回复15能量。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leesinpassive.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "天音波/回音击",
        "description": "天音波：李青发出刺耳的声波定位敌人，对命中的首个敌人造成物理伤害。如果天音波击中敌人，则李青在接下来3秒可施放回音击。 回音击：李青冲向被天音波击中的敌人，造成物理伤害外加目标8%已损失生命值的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkqone.project_jade.png",
        "cooldown": "11 / 10 / 9 / 8 / 7",
        "cost": "50",
        "range": "1100"
      },
      {
        "key": "W",
        "name": "金钟罩/铁布衫",
        "description": "金钟罩：李青冲向目标友军，为目标和自身提供护盾。在使用金钟罩后，李青可以在接下来的3秒内施放铁布衫。 铁布衫：李青艰苦卓绝的训练让他能在战斗中激发潜能。4秒内，李青获得生命偷取、法术吸血和护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkwone.project_jade.png",
        "cooldown": "9",
        "cost": "50",
        "range": "700"
      },
      {
        "key": "E",
        "name": "天雷破/摧筋断骨",
        "description": "天雷破：李青猛击地面，施放冲击波，造成魔法伤害并使命中的敌方单位显形。如果天雷破击中敌人，李青可以在接下来的3秒内施放摧筋断骨。 摧筋断骨：李青致残被天雷破显形的敌人们，降低其的移动速度和攻击速度，持续4秒。持续期间内，受影响单位的移动速度和攻击速度会逐渐恢复正常。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkeone.project_jade.png",
        "cooldown": "10",
        "cost": "50",
        "range": "425"
      },
      {
        "key": "R",
        "name": "猛龙摆尾",
        "description": "李青用强力的回旋踢击退敌方英雄，对目标以及被目标撞到的所有敌人造成物理伤害。被目标撞到的敌人会被短暂击飞。这项技艺是春哥教他的，不过李青不能将玩家的英雄踢到地图外面去。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkr.project_jade.png",
        "cooldown": "90 / 75 / 60",
        "cost": "0",
        "range": "375"
      }
    ]
  },
  {
    "championId": "60022",
    "championName": "艾希",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ashe",
    "abilities": [
      {
        "key": "P",
        "name": "射手专注",
        "description": "艾希在脱离战斗时会积累 全神贯注 层数。当艾希拥有100层 全神贯注 时，她的下一次攻击必定暴击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_bullseye.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "冰霜射击",
        "description": "技能激活时，艾希的每次普通攻击都会使目标减速。每次攻击都会消耗法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_icearrow.project_jade.png",
        "cooldown": "1",
        "cost": "0",
        "range": "400"
      },
      {
        "key": "W",
        "name": "万箭齐发",
        "description": "艾希向前方锥形范围射出7支箭，对敌人造成额外伤害。万箭齐发也会施加艾希当前等级的冰霜射击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_volley.project_jade.png",
        "cooldown": "16 / 13 / 10 / 7 / 4",
        "cost": "60",
        "range": "1200"
      },
      {
        "key": "E",
        "name": "鹰击长空",
        "description": "艾希每次击杀单位都会获得额外金币。艾希可以激活技能，派遣她的猎鹰之灵去执行侦查任务。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_hawkshot.project_jade.png",
        "cooldown": "60",
        "cost": "0",
        "range": "2500 / 3250 / 4000 / 4750 / 5500"
      },
      {
        "key": "R",
        "name": "魔法水晶箭",
        "description": "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，则对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离，最多持续3.5秒。此外，附近的敌方单位会受到伤害并减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_enchantedarrow.project_jade.png",
        "cooldown": "100 / 90 / 80 / 60",
        "cost": "150",
        "range": "25000"
      }
    ]
  },
  {
    "championId": "60040",
    "championName": "迦娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/janna",
    "abilities": [
      {
        "key": "P",
        "name": "顺风而行",
        "description": "迦娜和友方英雄的移动速度提升3%。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_tailwind.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "飓风呼啸",
        "description": "迦娜改变气压和温度，在目标区域召唤小型风暴，对沿途的所有单位造成伤害和击飞效果。召唤风暴时，迦娜可以再次使用此技能来立刻施放风暴，造成的伤害取决于蓄力时间的长短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_howlinggale.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "90 / 105 / 120 / 135 / 150",
        "range": "1075"
      },
      {
        "key": "W",
        "name": "和风守护",
        "description": "迦娜召唤出一个空气元素灵体，被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，对一个敌人造成伤害和减速效果。该技能冷却期间将失去被动效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_zephyr.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8",
        "cost": "40 / 50 / 60 / 70 / 80",
        "range": "-1"
      },
      {
        "key": "E",
        "name": "风暴之眼",
        "description": "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_eyeofthestorm.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "800"
      },
      {
        "key": "R",
        "name": "复苏季风",
        "description": "迦娜召唤魔法风暴围绕自己，将敌人击退。唤出风暴后会刮起治愈之风，在持续时间内为附近的友军回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_reapthewhirlwind.project_jade.png",
        "cooldown": "150 / 135 / 120 / 100",
        "cost": "100 / 150 / 200",
        "range": "725"
      }
    ]
  },
  {
    "championId": "60067",
    "championName": "薇恩",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/vayne",
    "abilities": [
      {
        "key": "P",
        "name": "暗夜猎手",
        "description": "薇恩毫不留情地猎杀世间邪恶。向附近敌方英雄移动时获得30移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_nighthunter.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "闪避突袭",
        "description": "薇恩翻滚到合适位置，为下次攻击做好准备。她的下次攻击造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_tumble.project_jade.png",
        "cooldown": "6 / 5 / 4 / 3 / 2",
        "cost": "30",
        "range": "300"
      },
      {
        "key": "W",
        "name": "圣银弩箭",
        "description": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对单个目标进行第3次连续攻击或技能施放时，就会造成额外真实伤害，伤害值相当于一定百分比的目标最大生命值。(对野怪最多造成200伤害)",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_silveredbolts.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "750"
      },
      {
        "key": "E",
        "name": "恶魔审判",
        "description": "薇恩从背后拿出重弩，朝目标发射巨箭，对目标造成伤害并将其击退。如果在击退过程中撞上了地形，则目标被巨箭刺穿，受到额外伤害和晕眩效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_condemn.project_jade.png",
        "cooldown": "20 / 18 / 16 / 14 / 12",
        "cost": "90",
        "range": "550"
      },
      {
        "key": "R",
        "name": "终极时刻",
        "description": "薇恩准备进行史诗般的对决，她的攻击力得到提高，并能在闪避突袭之后进入隐形状态，且暗夜猎手(被动)生效时加速效果提高至3倍。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_inquisition.project_jade.png",
        "cooldown": "100 / 85 / 70",
        "cost": "80",
        "range": "1"
      }
    ]
  },
  {
    "championId": "60044",
    "championName": "塔里克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/taric",
    "abilities": [
      {
        "key": "P",
        "name": "宝石工艺",
        "description": "塔里克喜欢在所有武器上镶嵌魔法宝石，使他的普通攻击根据他的最大法力值造成额外魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_gemcraft.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "神圣洗礼",
        "description": "塔里克召唤大地之力，治疗一名友军和自身。塔里克只为自身进行治疗时，治疗效果会变得更强。此外，塔里克的普通攻击会缩短神圣洗礼‌的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_imbue.project_jade.png",
        "cooldown": "20 / 19 / 18 / 17 / 16 / 15",
        "cost": "80 / 95 / 110 / 125 / 140 / 60",
        "range": "750"
      },
      {
        "key": "W",
        "name": "宝石护盾‌",
        "description": "塔里克受到坚韧光环的守护，提高自身及附近友方英雄的护甲。他可以选择粉碎环绕在身边的魔法石块，对附近敌人造成伤害并降低其护甲，同时自身在短时间内失去部分护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_shatter.project_jade.png",
        "cooldown": "10",
        "cost": "50",
        "range": "400"
      },
      {
        "key": "E",
        "name": "炫光",
        "description": "塔里克从镶有宝石的护盾中射出一颗灿烂的棱彩光球，晕眩目标，并根据他与目标相隔的距离造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_dazzle.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "75",
        "range": "650"
      },
      {
        "key": "R",
        "name": "辉耀",
        "description": "塔里克挥锤猛砸地面，对附近的敌人造成伤害。在接下来的一段时间里，塔里克的宝石会释放能量，为自己和友军提供额外的攻击力和法术强度",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_radiance.project_jade.png",
        "cooldown": "60",
        "cost": "100",
        "range": "400"
      }
    ]
  },
  {
    "championId": "60034",
    "championName": "艾尼维亚",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/anivia",
    "abilities": [
      {
        "key": "P",
        "name": "寒霜涅槃",
        "description": "在濒临死亡的时候，艾尼维亚将会变成一枚凤凰蛋。如果凤凰蛋在6秒内没有被击破的话，艾尼维亚就会闪亮重生。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_rebirth.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "寒冰闪耀",
        "description": "艾尼维亚挥动翅膀聚集空气，制造一枚冰晶向目标区域施放，冰冻并伤害路径上的所有敌人。当冰晶爆裂时，它会晕眩并伤害一定范围内的所有敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_frigidorb.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "80 / 100 / 120 / 140 / 160 / 180",
        "range": "1075"
      },
      {
        "key": "W",
        "name": "寒冰屏障",
        "description": "艾尼维亚利用空气中的湿气，召唤出一道不可穿越的冰之墙来阻挡所有移动。该墙持续很短一段时间后就会融化。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_crystallize.project_jade.png",
        "cooldown": "25",
        "cost": "70 / 90 / 110 / 130 / 150 / 170",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "霜寒刺骨",
        "description": "艾尼维亚扇动双翅，朝她的目标喷射出一股刺骨的强风，造成中等伤害。如果目标已被冰冻效果减速，则受到该技能双倍的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_deepfreeze.project_jade.png",
        "cooldown": "5",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "650"
      },
      {
        "key": "R",
        "name": "冰川风暴",
        "description": "艾尼维亚召唤出一朵夹杂着冰块和冰雹的雨云，对敌人造成伤害和减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_glacialstorm.project_jade.png",
        "cooldown": "6",
        "cost": "75",
        "range": "625"
      }
    ]
  },
  {
    "championId": "60055",
    "championName": "卡特琳娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/katarina",
    "abilities": [
      {
        "key": "P",
        "name": "贪婪",
        "description": "击杀英雄或参与助攻可使她的技能冷却时间减少15秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_voracity2.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "弹射之刃",
        "description": "卡特琳娜投掷一把匕首，在敌人之间弹跳，造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_bouncingblade.project_jade.png",
        "cooldown": "10 / 9.5 / 9 / 8.5 / 8 / 7",
        "cost": "0",
        "range": "675"
      },
      {
        "key": "W",
        "name": "不祥之刃",
        "description": "卡特琳娜将她的双刃环绕自身挥舞，从而对区域内的所有敌人造成魔法伤害。如果此技能命中了一个敌方英雄，那么卡特琳娜就会获得短时间内持续的爆发性移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_killerinstincts.project_jade.png",
        "cooldown": "4",
        "cost": "0",
        "range": "400"
      },
      {
        "key": "E",
        "name": "瞬步",
        "description": "卡特琳娜瞬间移动到目标位置，并在数秒内降低受到的敌方伤害。如果目标是敌人，则会造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_shunpo.project_jade.png",
        "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
        "cost": "0",
        "range": "725"
      },
      {
        "key": "R",
        "name": "死亡莲华",
        "description": "卡特琳娜化身刀刃风暴，以无可匹敌的速度向附近至多三名英雄投掷匕首。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_deathlotus.project_jade.png",
        "cooldown": "60 / 52.5 / 45",
        "cost": "0",
        "range": "550"
      }
    ]
  },
  {
    "championId": "60074",
    "championName": "黑默丁格",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/heimerdinger",
    "abilities": [
      {
        "key": "P",
        "name": "科技魔法修复机器人",
        "description": "黑默丁格为周围的友军炮台、防御塔和英雄提供生命回复加成。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_techmaturgicalrepairbots.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "H-28G进化炮台",
        "description": "黑默丁格部署一座机枪炮台。随着该技能等级提升，炮台会获得新的能力。（炮台对防御塔仅造成一半伤害。）",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_h28gevolutionturret.project_jade.png",
        "cooldown": "1",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "350"
      },
      {
        "key": "W",
        "name": "海克斯科技微型导弹",
        "description": "黑默丁格发射数枚长程导弹，瞄准离黑默丁格最近的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_hextechmicrorockets.project_jade.png",
        "cooldown": "10",
        "cost": "65 / 85 / 105 / 125 / 145 / 90",
        "range": "1100"
      },
      {
        "key": "E",
        "name": "CH-1震荡手雷",
        "description": "黑默丁格朝一个位置掷出一颗手雷，对敌方单位造成伤害，并对直接命中的敌人造成晕眩效果，对附近单位造成致盲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_ch1concussiongrenade.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "920"
      },
      {
        "key": "R",
        "name": "升级！！！",
        "description": "被动/主动：被动提升冷却缩减。激活后为所有已激活的进化炮台回复生命值，并让它们在短时间内发射能降低目标移动速度的冰霜射击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_upgrade.project_jade.png",
        "cooldown": "120 / 105 / 90 / 75 / 60 / 45",
        "cost": "90",
        "range": "1"
      }
    ]
  },
  {
    "championId": "60059",
    "championName": "嘉文四世",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/jarvan-iv",
    "abilities": [
      {
        "key": "P",
        "name": "战争律动",
        "description": "嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_martialcadence.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "巨龙撞击",
        "description": "嘉文四世的长矛穿透敌人，对它途经的所有敌人造成物理伤害和护甲击碎效果。此外，该技能还会将嘉文四世引向德邦军旗，并击飞他途经的所有敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_dragonstrike.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "45 / 50 / 55 / 60 / 65 / 70",
        "range": "770"
      },
      {
        "key": "W",
        "name": "黄金圣盾",
        "description": "嘉文四世召唤古德玛西亚列王保护自己，提供护盾吸收伤害并减速附近敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_goldenaegis.project_jade.png",
        "cooldown": "20 / 18 / 16 / 14 / 12",
        "cost": "45 / 50 / 55 / 60 / 65",
        "range": "500"
      },
      {
        "key": "E",
        "name": "德邦军旗",
        "description": "嘉文四世携带着德玛西亚的骄傲，能被动地给予他额外的攻击速度和护甲。激活德邦军旗会使嘉文四世放置一面德玛西亚军旗，在军旗的着陆点造成魔法伤害，并强化军旗附近的队友们的攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_demacianstandard.project_jade.png",
        "cooldown": "13",
        "cost": "55",
        "range": "860"
      },
      {
        "key": "R",
        "name": "天崩地裂",
        "description": "嘉文四世勇猛地跃向目标敌方英雄，对其造成物理伤害，并在敌人周围形成环形障碍，持续数秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_cataclysm.project_jade.png",
        "cooldown": "120 / 105 / 90 / 8 / 5",
        "cost": "100 / 125 / 150 / 100",
        "range": "650 / 700"
      }
    ]
  },
  {
    "championId": "60086",
    "championName": "盖伦",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/garen",
    "abilities": [
      {
        "key": "P",
        "name": "坚韧",
        "description": "如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_perseverance.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "致命打击",
        "description": "盖伦的移动速度获得爆发性提升，同时移除身上的所有减速效果。他的下次攻击将打击敌人的要害部位，造成额外伤害并将目标沉默。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_decisivestrike.project_jade.png",
        "cooldown": "8",
        "cost": "0",
        "range": "300"
      },
      {
        "key": "W",
        "name": "勇气",
        "description": "盖伦用他的大剑表演死亡之舞，在持续期间内对周围的敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_commandingpresence.project_jade.png",
        "cooldown": "24 / 23 / 22 / 21 / 20 / 12",
        "cost": "0",
        "range": null
      },
      {
        "key": "E",
        "name": "审判",
        "description": "盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_keepingthepeace.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9 / 6",
        "cost": "0",
        "range": "325"
      },
      {
        "key": "R",
        "name": "德玛西亚正义",
        "description": "盖伦召唤德玛西亚之力，试图处决一名敌方英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_justice.project_jade.png",
        "cooldown": "160 / 120 / 80 / 120",
        "cost": "0",
        "range": "400"
      }
    ]
  },
  {
    "championId": "60025",
    "championName": "莫甘娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/morgana",
    "abilities": [
      {
        "key": "P",
        "name": "灵魂吸取",
        "description": "莫甘娜拥有法术吸血效果，在技能造成伤害时回复自身生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_empathize.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "暗之禁锢",
        "description": "莫甘娜放出一个黑暗魔法球。击中一个敌方目标后，魔法球将造成魔法伤害，并将该目标暂时定在原地。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_darkbinding.project_jade.png",
        "cooldown": "11",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "1175"
      },
      {
        "key": "W",
        "name": "痛苦腐蚀",
        "description": "莫甘娜诅咒一大片区域，对区域内的敌人持续造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_tormentedsoil.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 85 / 100 / 115 / 130 / 120",
        "range": "900"
      },
      {
        "key": "E",
        "name": "黑暗之盾",
        "description": "为友方英雄施放保护盾，吸收魔法伤害并阻挡限制效果，直到护盾被击穿或消失。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_blackshield.project_jade.png",
        "cooldown": "23 / 21 / 19 / 17 / 15 / 16",
        "cost": "50",
        "range": "750"
      },
      {
        "key": "R",
        "name": "灵魂镣铐",
        "description": "用能量拴住附近的敌方英雄，对其造成初始伤害和减速效果；一段时间后，仍然留在莫甘娜身边的敌人会再次受到伤害和晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_purgatory.project_jade.png",
        "cooldown": "120 / 110 / 100 / 10",
        "cost": "100",
        "range": "625"
      }
    ]
  },
  {
    "championId": "60035",
    "championName": "萨科",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/shaco",
    "abilities": [
      {
        "key": "P",
        "name": "背刺",
        "description": "萨科从背后打击一名敌人时造成20%额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_carefulstrikes.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "欺诈魔术",
        "description": "萨科进入隐形状态并传送到目标位置。他的下一次攻击必定暴击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_maniacalcloak2.project_jade.png",
        "cooldown": "11",
        "cost": "90 / 80 / 70 / 60 / 50 / 40",
        "range": "400"
      },
      {
        "key": "W",
        "name": "惊吓魔盒",
        "description": "萨科在目标位置放置一个会动的惊吓魔盒。魔盒以隐形状态埋伏，在有敌人靠近时恐惧附近的敌方单位，并发动攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_deathward.project_jade.png",
        "cooldown": "16",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "425"
      },
      {
        "key": "E",
        "name": "双面毒刃",
        "description": "萨科的毒刃会在攻击时被动施加毒药，使目标减速，并降低小兵的命中率。他还可以掷出毒刃，对目标造成伤害并施加毒药效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_incrediblyprecise.project_jade.png",
        "cooldown": "8",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "625"
      },
      {
        "key": "R",
        "name": "幻像",
        "description": "萨科在身边制造一个分身，攻击附近的敌人。分身会在阵亡时爆炸，对附近敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_hallucinogenbomb.project_jade.png",
        "cooldown": "100 / 90 / 80 / 10",
        "cost": "100 / 75",
        "range": "200"
      }
    ]
  },
  {
    "championId": "60063",
    "championName": "布兰德",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/brand",
    "abilities": [
      {
        "key": "P",
        "name": "炽热之焰",
        "description": "布兰德的技能会对目标施加烈焰焚身效果，在4秒内持续造成共8%目标最大生命值的魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandblaze.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "火焰烙印",
        "description": "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有烈焰焚身效果，则火焰烙印将使目标晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandsear.project_jade.png",
        "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
        "cost": "50",
        "range": "1050"
      },
      {
        "key": "W",
        "name": "烈焰之柱",
        "description": "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，对范围内的敌方单位造成魔法伤害。带有烈焰焚身效果的单位会受到额外伤害",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandpillarofflame.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 75 / 80 / 85 / 90",
        "range": "900"
      },
      {
        "key": "E",
        "name": "烈火燃烧",
        "description": "布兰德在目标身上引发一阵强力爆裂，对其造成魔法伤害。如果目标带有烈焰焚身效果，则烈火燃烧还会扩散至目标附近的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandconflagration.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "625"
      },
      {
        "key": "R",
        "name": "烈焰风暴",
        "description": "布兰德释放一颗破坏力极强的火焰之种，每次弹跳时造成魔法伤害。如果目标带有烈焰焚身效果，则烈焰风暴的下一次弹跳会优先选择该英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandpyroclasm.project_jade.png",
        "cooldown": "105 / 90 / 75",
        "cost": "100",
        "range": "750"
      }
    ]
  },
  {
    "championId": "60028",
    "championName": "伊芙琳",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/evelynn",
    "abilities": [
      {
        "key": "P",
        "name": "暗影迷踪",
        "description": "脱离战斗后，伊芙琳会进入伪装状态，只会被附近的敌方英雄或真实视野看见。在潜行状态下，她会快速回复法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_shadowwalk.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "憎恨之刺",
        "description": "伊芙琳发射一列尖刺穿过敌人，对沿途的所有敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_onlyhelltopay.project_jade.png",
        "cooldown": "1.5",
        "cost": "16 / 22 / 28 / 34 / 40 / 46",
        "range": "525"
      },
      {
        "key": "W",
        "name": "暗潮汹涌",
        "description": "伊芙琳的技能命中敌方英雄时，被动提升她的移动速度。主动施放后，伊芙琳会解除自身受到的减速效果，并在短时间内大幅提升移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_readytobetray.project_jade.png",
        "cooldown": "15",
        "cost": "0",
        "range": null
      },
      {
        "key": "E",
        "name": "狂袭",
        "description": "伊芙琳连续她的斩击目标两次，每一次都会造成伤害。随后，她会在短时间内获得额外攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_ravage.project_jade.png",
        "cooldown": "9",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "range": "225"
      },
      {
        "key": "R",
        "name": "痛苦之拥",
        "description": "伊芙琳从地下召唤尖刺，对区域内的敌人造成伤害并施加减速效果。随后，她会根据命中的敌方英雄数量获得护盾。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_agonysembrace.project_jade.png",
        "cooldown": "150 / 120 / 90 / 60 / 30",
        "cost": "100",
        "range": "650"
      }
    ]
  },
  {
    "championId": "60099",
    "championName": "拉克丝",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/lux",
    "abilities": [
      {
        "key": "P",
        "name": "光芒四射",
        "description": "拉克丝的伤害类技能会将能量注入敌人，持续6秒。拉克丝的下一次攻击将会点燃这股能量，对目标造成额外魔法伤害（基于拉克丝的等级）。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxilluminatingfraulein.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "光之束缚",
        "description": "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxcrashingblitz2.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11",
        "cost": "50 / 60 / 70 / 80 / 90",
        "range": "1175"
      },
      {
        "key": "W",
        "name": "曲光屏障",
        "description": "拉克丝掷出她的魔杖，被触及的友方单位会被光芒缠绕，保护其免受敌方伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxprismawrap.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "60",
        "range": "1150"
      },
      {
        "key": "E",
        "name": "透光奇点",
        "description": "向指定区域释放一道不规则的扭曲之光，减速附近的敌人。拉克丝可随后将其引爆，对范围内敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxlightstrikekugel.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 85 / 100 / 115 / 130",
        "range": "1000"
      },
      {
        "key": "R",
        "name": "终极闪光",
        "description": "短暂蓄力后，拉克丝发射一束光能射线，对射线内的所有目标造成伤害。此外，该技能会触发拉克丝的被动技能，并刷新光芒四射减益效果的持续时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxfinalefunkeln.project_jade.png",
        "cooldown": "80 / 65 / 50",
        "cost": "100",
        "range": "3340"
      }
    ]
  },
  {
    "championId": "60041",
    "championName": "普朗克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/gangplank",
    "abilities": [
      {
        "key": "P",
        "name": "浸酒之刃",
        "description": "普朗克的攻击会施加中毒效果，每秒造成魔法伤害，伤害会随等级提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_grogsoakedblade.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "枪火谈判",
        "description": "普朗克用手枪瞄准并射击一个敌方单位。如果枪火谈判击杀了目标，则普朗克获得额外金币，并返还一半法力消耗。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_parley.project_jade.png",
        "cooldown": "5",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "range": "625"
      },
      {
        "key": "W",
        "name": "坏血病疗法",
        "description": "普朗克吃掉大量柑橘类水果，解除自身所有控制效果并回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_removescurvy.project_jade.png",
        "cooldown": "22 / 21 / 20 / 19 / 18",
        "cost": "65",
        "range": "20"
      },
      {
        "key": "E",
        "name": "鼓舞士气",
        "description": "普朗克朝空中鸣枪，为附近友方英雄提升攻击力和移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_raisemorale.project_jade.png",
        "cooldown": "20",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "1200"
      },
      {
        "key": "R",
        "name": "加农炮幕",
        "description": "普朗克命令战舰对目标区域进行持续7秒的炮击，对敌人造成减速，并在区域内随机位置造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_cannonbarrage.project_jade.png",
        "cooldown": "120 / 115 / 110 / 120",
        "cost": "100",
        "range": "20000"
      }
    ]
  },
  {
    "championId": "60001",
    "championName": "安妮",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/annie",
    "abilities": [
      {
        "key": "P",
        "name": "嗜火",
        "description": "在施放4个技能后，安妮的下一次伤害类技能会对目标造成持续1.75秒的晕眩效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_passive.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "碎裂之火",
        "description": "安妮掷出一颗注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_q.project_jade.png",
        "cooldown": "4",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "range": "625"
      },
      {
        "key": "W",
        "name": "焚烧",
        "description": "安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_w.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "600"
      },
      {
        "key": "E",
        "name": "熔岩护盾",
        "description": "提升安妮的护甲和魔法抗性，并对使用普通攻击命中安妮的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_e.project_jade.png",
        "cooldown": "10",
        "cost": "20",
        "range": "800"
      },
      {
        "key": "R",
        "name": "提伯斯之怒",
        "description": "安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_r1.project_jade.png",
        "cooldown": "120",
        "cost": "100",
        "range": "600"
      }
    ]
  },
  {
    "championId": "60079",
    "championName": "古拉加斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/gragas",
    "abilities": [
      {
        "key": "P",
        "name": "欢乐时光",
        "description": "古拉加斯每次使用技能后都会喝一小杯，从而回复些许生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragaspassiveheal.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "滚动酒桶",
        "description": "古拉加斯投掷一个酒桶，它会在短暂延迟后爆炸，从而对敌人造成伤害和攻速减缓效果。再次施放可提前引爆该酒桶。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasbarrelroll.project_jade.png",
        "cooldown": "11.5 / 10.5 / 9.5 / 8.5 / 7.5 / 6.5",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1100"
      },
      {
        "key": "W",
        "name": "醉酒狂暴",
        "description": "古拉加斯畅饮他的佳酿，从而回复法力值。随后他获得持续数秒的攻击力和伤害减免。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasdrunkenrage.project_jade.png",
        "cooldown": "25",
        "cost": "0",
        "range": "20"
      },
      {
        "key": "E",
        "name": "肉弹冲击",
        "description": "古拉加斯向前冲锋，从而撞击碰到的第一个敌人，对附近敌人们造成伤害和减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasbodyslam.project_jade.png",
        "cooldown": "7",
        "cost": "75",
        "range": "600"
      },
      {
        "key": "R",
        "name": "爆破酒桶",
        "description": "古拉加斯猛抛他的酒桶，从而造成伤害并将敌人们从爆炸中心击退。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasexplosivecask.project_jade.png",
        "cooldown": "100 / 90 / 80 / 70",
        "cost": "100 / 125 / 150 / 100",
        "range": "1000"
      }
    ]
  },
  {
    "championId": "60004",
    "championName": "崔斯特",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/twisted-fate",
    "abilities": [
      {
        "key": "P",
        "name": "灌铅骰子",
        "description": "崔斯特与友军每次击杀可额外获得2金币。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_sealfate.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "万能牌",
        "description": "崔斯特扔出三张卡牌，卡牌会对它们途经的每个敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_powercard.project_jade.png",
        "cooldown": "6",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "10000"
      },
      {
        "key": "W",
        "name": "选牌",
        "description": "崔斯特挑选一张魔法卡牌，并用在他的下次攻击，从而造成额外效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_fatesgambit.project_jade.png",
        "cooldown": "6",
        "cost": "40 / 55 / 70 / 85 / 100 / 75",
        "range": "200"
      },
      {
        "key": "E",
        "name": "传送之门",
        "description": "引导结束后，崔斯特传送至任意目标位置。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_premonition.project_jade.png",
        "cooldown": "120 / 105 / 90 / 75 / 60",
        "cost": "80",
        "range": "20000"
      },
      {
        "key": "R",
        "name": "命运",
        "description": "崔斯特为敌人算卜命运，短时间内显示所有敌方英雄的位置并使其减速。在此期间，传送之门的引导时间也会缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/destiny_temp.project_jade.png",
        "cooldown": "130 / 110 / 90",
        "cost": "150",
        "range": "20000"
      }
    ]
  },
  {
    "championId": "60076",
    "championName": "奈德丽",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/nidalee",
    "abilities": [
      {
        "key": "P",
        "name": "寻觅",
        "description": "穿越草丛时，奈德丽的移动速度提升15%，持续2秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_ontheprowl.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "标枪投掷/推倒",
        "description": "人类形态下，奈德丽向她的目标投掷标枪，标枪会随着飞行距离造成额外伤害。美洲狮形态下，她的下一次攻击会试图对目标造成致命伤害，目标的生命值越低，造成的伤害越大。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_javelinthrow.project_jade.png",
        "cooldown": "6",
        "cost": "50 / 60 / 70 / 80 / 90 / 75",
        "range": "1500"
      },
      {
        "key": "W",
        "name": "丛林伏击/猛扑",
        "description": "人类形态下，奈德丽为粗心大意的对手布置一个伤害陷阱，敌人触发后会被其显形，并在12秒内降低护甲和魔法抗性。美洲狮形态下，奈德丽向前跃击，在落地时造成少量伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_bushwhack.project_jade.png",
        "cooldown": "18",
        "cost": "60 / 75 / 90 / 105 / 120 / 55",
        "range": "900"
      },
      {
        "key": "E",
        "name": "野性奔腾/挥击",
        "description": "人类形态下，奈德丽引导美洲狮的灵魂治疗友方单位，并且短暂提升其攻击速度。美洲狮形态下，她对面前的敌人们发动快速爪击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_primalsurge.project_jade.png",
        "cooldown": "10",
        "cost": "60 / 80 / 100 / 120 / 140 / 75",
        "range": "900"
      },
      {
        "key": "R",
        "name": "美洲狮形态",
        "description": "奈德丽转变成美洲狮形态，获得全新技能并提高移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_aspectofthecougar.project_jade.png",
        "cooldown": "4",
        "cost": "0",
        "range": "20"
      }
    ]
  },
  {
    "championId": "60002",
    "championName": "奥拉夫",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/olaf",
    "abilities": [
      {
        "key": "P",
        "name": "狂战之怒",
        "description": "奥拉夫的攻击速度会随着他的生命值减少而提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olaf_passive.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "逆流",
        "description": "奥拉夫将一柄战斧投至目标区域，对它途经的单位们造成伤害，并降低其移动速度。如果奥拉夫捡起该战斧，则该技能冷却时间会缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafaxethrow.project_jade.png",
        "cooldown": "8",
        "cost": "55 / 60 / 65 / 70 / 75",
        "range": "1000"
      },
      {
        "key": "W",
        "name": "残暴打击",
        "description": "奥拉夫基于自身的生命值提升攻击力，且生命偷取和法术吸血提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafviciousstrikes.project_jade.png",
        "cooldown": "16",
        "cost": "40 / 45 / 50 / 55 / 60",
        "range": "700"
      },
      {
        "key": "E",
        "name": "鲁莽挥击",
        "description": "奥拉夫以破釜沉舟之势发动进攻，对目标和自身造成真实伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafrecklessswing.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "0",
        "range": "325"
      },
      {
        "key": "R",
        "name": "诸神黄昏",
        "description": "奥拉夫暂时免疫控制技能，且获得额外护甲、魔法抗性和穿甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafragnarok.project_jade.png",
        "cooldown": "100",
        "cost": "100 / 75 / 50",
        "range": "400"
      }
    ]
  },
  {
    "championId": "60027",
    "championName": "辛吉德",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/singed",
    "abilities": [
      {
        "key": "P",
        "name": "强化壁垒",
        "description": "辛吉德每拥有100法力值， 生命值 提升25。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_empoweredbulwark.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "剧毒踪迹",
        "description": "辛吉德在身后留下剧毒踪迹，对经过踪迹的敌人造成持续伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_acidspray.project_jade.png",
        "cooldown": null,
        "cost": "13",
        "range": "20"
      },
      {
        "key": "W",
        "name": "强力粘胶",
        "description": "将一瓶强力粘合剂扔到地上，对走过的敌人造成减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chemman_megaadhesive.project_jade.png",
        "cooldown": "14",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "过肩摔",
        "description": "对目标敌方单位造成伤害，并将其投掷到辛吉德身后的空中。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_fling.project_jade.png",
        "cooldown": "10",
        "cost": "100 / 110 / 120 / 130 / 140 / 150",
        "range": "125"
      },
      {
        "key": "R",
        "name": "疯狂药剂",
        "description": "辛吉德喝下精心炮制的化学药剂，大幅提高战斗属性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_chemicalrage.project_jade.png",
        "cooldown": "100",
        "cost": "150",
        "range": "20"
      }
    ]
  },
  {
    "championId": "60013",
    "championName": "瑞兹",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ryze",
    "abilities": [
      {
        "key": "P",
        "name": "奥术专精",
        "description": "瑞兹的技能会减少其他所有技能的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_spellstrike.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "超负荷",
        "description": "被动 ：瑞兹永久获得冷却缩减。 主动 ：瑞兹释放一个能量法球，对目标造成 魔法伤害 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_overload.project_jade.png",
        "cooldown": "3.5",
        "cost": "60",
        "range": "600"
      },
      {
        "key": "W",
        "name": "符文禁锢",
        "description": "瑞兹用魔法控制一名敌人，将其 禁锢 并造成 魔法伤害 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_poweroverwhelming.project_jade.png",
        "cooldown": "14",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "615"
      },
      {
        "key": "E",
        "name": "法术涌动",
        "description": "瑞兹发射一道混乱魔法能量，可在敌人之间弹跳，造成 魔法伤害 并降低其 魔法抗性 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_lightningflux.project_jade.png",
        "cooldown": "14",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "615"
      },
      {
        "key": "R",
        "name": "绝望之力",
        "description": "瑞兹暂时释放全部力量，短时间内使所有技能获得 范围伤害 、 法术吸血 和 移动速度 提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_desperatepower.project_jade.png",
        "cooldown": "70 / 60 / 50 / 40 / 30 / 20",
        "cost": "0",
        "range": "3000"
      }
    ]
  },
  {
    "championId": "60018",
    "championName": "崔丝塔娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/tristana",
    "abilities": [
      {
        "key": "P",
        "name": "瞄准",
        "description": "崔丝塔娜的攻击距离随等级提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_drawabead.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "急速射击",
        "description": "崔丝塔娜迅速开火，短时间内提升攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_headshot.project_jade.png",
        "cooldown": "20",
        "cost": "50",
        "range": "20"
      },
      {
        "key": "W",
        "name": "火箭跳跃",
        "description": "崔丝塔娜朝地面开火，将自己弹射至目标区位置，落地时造成伤害并减速周围敌人，持续3秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_rendingshot.project_jade.png",
        "cooldown": "22 / 20 / 18 / 16 / 14",
        "cost": "80",
        "range": "900"
      },
      {
        "key": "E",
        "name": "爆炸射击",
        "description": "崔丝塔娜击杀一个单位时，她的炮弹会爆炸成弹片，对周围敌人造成伤害。可主动施放，对目标单位造成持续伤害，并减少其受到的治疗效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_explosiveshot.project_jade.png",
        "cooldown": "16",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "550"
      },
      {
        "key": "R",
        "name": "毁灭射击",
        "description": "崔丝塔娜装填一颗巨型炮弹，朝敌方单位发射。造成魔法伤害并将目标击退。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_bustershot.project_jade.png",
        "cooldown": "60",
        "cost": "100",
        "range": "550"
      }
    ]
  },
  {
    "championId": "60023",
    "championName": "泰达米尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/tryndamere",
    "abilities": [
      {
        "key": "P",
        "name": "战斗狂怒",
        "description": "泰达米尔获得额外的暴击几率，这个加成基于他的已损失生命值而提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_fury.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "嗜血杀戮",
        "description": "泰达米尔对战斗极度饥渴，在击杀敌人和造成暴击时可获得怒气，怒气可提高其攻击力和暴击伤害。他可施放“嗜血杀戮”来消耗怒气并治疗自己。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_bloodlust.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "0",
        "range": "400"
      },
      {
        "key": "W",
        "name": "蔑视",
        "description": "泰达米尔嘲讽附近的英雄，讥笑他们的懦弱，从而降低他们的攻击力。那些转身逃离泰达米尔的的敌人还会被减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/48thslave_pacify.project_jade.png",
        "cooldown": "14",
        "cost": "0",
        "range": "800"
      },
      {
        "key": "E",
        "name": "旋风斩",
        "description": "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_slash.project_jade.png",
        "cooldown": "8",
        "cost": "0",
        "range": "650"
      },
      {
        "key": "R",
        "name": "不灭怒火",
        "description": "泰达米尔对战斗的渴望极其强盛，承受再多的伤害也不会阵亡。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_endlessrage.project_jade.png",
        "cooldown": "110 / 100 / 90 / 80 / 70 / 60",
        "cost": "0",
        "range": "400"
      }
    ]
  },
  {
    "championId": "60009",
    "championName": "费德提克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/fiddlesticks",
    "abilities": [
      {
        "key": "P",
        "name": "恐惧降临",
        "description": "附近敌人的魔法抗性降低。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_paranoia.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "恐惧",
        "description": "恐惧目标，让目标陷入惊慌，在一定时间内逃离费德提克。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_terrify.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11 / 10",
        "cost": "65 / 75 / 85 / 95 / 105 / 115",
        "range": "575"
      },
      {
        "key": "W",
        "name": "吸取",
        "description": "费德提克偷取敌人的生命能量，造成持续伤害同时治疗自己。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_conjurescarecrow.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "650"
      },
      {
        "key": "E",
        "name": "黑暗之风",
        "description": "一阵黑暗之风袭向目标敌人，并在附近敌人之间弹射，对命中的敌人造成伤害并施加沉默效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_darkwind.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11 / 10",
        "cost": "50 / 70 / 90 / 110 / 130 / 150",
        "range": "750"
      },
      {
        "key": "R",
        "name": "群鸦风暴",
        "description": "群鸦盘旋于费德提克身边，每秒对范围内的所有敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_crowstorm.project_jade.png",
        "cooldown": "150 / 140 / 130",
        "cost": "150 / 200 / 250",
        "range": "800"
      }
    ]
  },
  {
    "championId": "60012",
    "championName": "阿利斯塔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/alistar",
    "abilities": [
      {
        "key": "P",
        "name": "践踏",
        "description": "每当阿利斯塔施放技能时，都会践踏周围单位和防御塔数秒，对他经过的单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_colossalstrength.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "大地粉碎",
        "description": "阿利斯塔锤击地面，对附近所有敌人造成魔法伤害并将其击飞。落地时，敌人会被晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_pulverize.project_jade.png",
        "cooldown": "17 / 16 / 15 / 14 / 13 / 12",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "365"
      },
      {
        "key": "W",
        "name": "野蛮冲撞",
        "description": "阿利斯塔冲撞目标，对其造成伤害和击退效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_headbutt.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "650"
      },
      {
        "key": "E",
        "name": "凯旋怒吼",
        "description": "阿利斯塔发出战吼，为自己和附近友军回复生命值。附近有敌方单位阵亡时可减少冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_triumphantroar.project_jade.png",
        "cooldown": "12",
        "cost": "40 / 50 / 60 / 70 / 80 / 90",
        "range": "575"
      },
      {
        "key": "R",
        "name": "坚定意志",
        "description": "阿利斯塔发出野性的咆哮，获得额外的攻击力，并移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_ferocioushowl.project_jade.png",
        "cooldown": "120 / 100 / 80 / 120",
        "cost": "100",
        "range": "1"
      }
    ]
  },
  {
    "championId": "60033",
    "championName": "拉莫斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/rammus",
    "abilities": [
      {
        "key": "P",
        "name": "锥刺甲壳",
        "description": "拉莫斯外壳强化后获得额外伤害，将自身25%护甲转化为攻击力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_scavengearmor.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "动力冲刺",
        "description": "拉莫斯缩成球状，加速冲向敌人，对冲击的目标造成伤害和减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_powerball.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "300"
      },
      {
        "key": "W",
        "name": "尖刺防御",
        "description": "拉莫斯进入防御状态，大幅提升护甲和魔法抗性，并反弹攻击者造成的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_shellbash.project_jade.png",
        "cooldown": "14",
        "cost": "40",
        "range": "300"
      },
      {
        "key": "E",
        "name": "破甲嘲讽",
        "description": "拉莫斯嘲讽一名敌方英雄或野怪，强制目标鲁莽地攻击自己，并暂时降低其护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_scaledplating.project_jade.png",
        "cooldown": "12",
        "cost": "50 / 60 / 70 / 80 / 90",
        "range": "325"
      },
      {
        "key": "R",
        "name": "地动山摇",
        "description": "拉莫斯施放毁灭性的脉冲震荡波，对附近单位和建筑造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_recklesscharge.project_jade.png",
        "cooldown": "60",
        "cost": "120",
        "range": "25000"
      }
    ]
  },
  {
    "championId": "60062",
    "championName": "悟空",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/wukong",
    "abilities": [
      {
        "key": "P",
        "name": "金刚不坏",
        "description": "孙悟空的护甲和魔法抗性会根据周围的敌方英雄数量而增加。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongstoneskin.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "粉碎打击",
        "description": "孙悟空的下次攻击提升距离，造成额外伤害，并降低敌人的护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongcrushingblow.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "40",
        "range": "250 / 275 / 300 / 325 / 350"
      },
      {
        "key": "W",
        "name": "真假猴王",
        "description": "孙悟空进入1.5秒的隐身状态。留下一具无法控制的分身，1.5秒后对其附近的敌人造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongdecoy.project_jade.png",
        "cooldown": "18 / 16 / 14 / 12 / 10 / 8",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "275"
      },
      {
        "key": "E",
        "name": "腾云突击",
        "description": "孙悟空突进至一名目标敌人处，并变出最多2个分身，攻击附近目标。对每个击中的目标造成物理伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongnimbusstrike.project_jade.png",
        "cooldown": "8",
        "cost": "45 / 50 / 55 / 60 / 65",
        "range": "650"
      },
      {
        "key": "R",
        "name": "大闹天宫",
        "description": "孙悟空展开金箍棒，不停地旋转，对敌人造成伤害并将其击飞。在此期间，孙悟空的移动速度持续增加。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongcyclone.project_jade.png",
        "cooldown": "120 / 105 / 90",
        "cost": "100",
        "range": "315"
      }
    ]
  },
  {
    "championId": "60037",
    "championName": "娑娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/sona",
    "abilities": [
      {
        "key": "P",
        "name": "能量和弦",
        "description": "施放3次技能后，娑娜的下一次攻击造成额外魔法伤害并降低她的目标在若干秒内造成的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_powerchordcharged.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "英勇赞美诗",
        "description": "娑娜演奏英勇赞美诗，为附近的友方英雄提供额外伤害和法术强度。此外，施放该技能会射出音波，对相距最近的两名敌方英雄或野怪造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_hymnofvalor.project_jade.png",
        "cooldown": "7",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "range": "825"
      },
      {
        "key": "W",
        "name": "坚毅咏叹调",
        "description": "娑娜演奏坚毅咏叹调，为附近的友方英雄提供额外护甲和额外魔法抗性。此外，施放该技能会弹奏疗愈旋律，为娑娜和附近一位受伤的友军提供治疗。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_ariaofperseverance.project_jade.png",
        "cooldown": "7",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "迅捷奏鸣曲",
        "description": "娑娜弹奏迅捷奏鸣曲，为附近的友方英雄提供额外移动速度。此外，施放该技能可为附近的友军提供一次速度爆发。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_songofdiscord.project_jade.png",
        "cooldown": "7",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "range": "1000"
      },
      {
        "key": "R",
        "name": "狂舞终乐章",
        "description": "娑娜弹奏终极和弦，迫使敌方英雄开始跳舞并对其造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_crescendo.project_jade.png",
        "cooldown": "170 / 150 / 130 / 110 / 90 / 70",
        "cost": "100",
        "range": "900"
      }
    ]
  },
  {
    "championId": "60054",
    "championName": "墨菲特",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/malphite",
    "abilities": [
      {
        "key": "P",
        "name": "花岗岩护盾",
        "description": "墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害。若10秒内未受到攻击，这个护盾将重置。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_graniteshield.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "地震碎片",
        "description": "墨菲特使用原初元素魔法，发出一块大地碎片穿过敌人处的地面，在碰撞时造成伤害并且偷取移动速度4秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_seismicshard.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "625"
      },
      {
        "key": "W",
        "name": "野蛮打击",
        "description": "墨菲特开始以巨大力量进行挥击，攻击对前方的所有敌人造成伤害。激活【野蛮打击】会使墨菲特的护甲和攻击力会在短时间内大幅提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_brutalstrikes.project_jade.png",
        "cooldown": "14",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "400"
      },
      {
        "key": "E",
        "name": "大地震颤",
        "description": "墨菲特锤击地面，放射出冲击波对目标造成基础伤害，并根据墨菲特的护甲值附加额外伤害，同时暂时减低目标攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_groundslam.project_jade.png",
        "cooldown": "7",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "400"
      },
      {
        "key": "R",
        "name": "势不可挡",
        "description": "墨菲特冲击目标区域，对所有敌人造成伤害和击飞。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_unstoppableforce.project_jade.png",
        "cooldown": "130 / 115 / 100 / 80",
        "cost": "100",
        "range": "1000"
      }
    ]
  },
  {
    "championId": "60075",
    "championName": "内瑟斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/nasus",
    "abilities": [
      {
        "key": "P",
        "name": "吞噬灵魂",
        "description": "内瑟会从敌人身上吸取灵魂能量，从而获得额外生命偷取。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_souleater.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "汲魂痛击",
        "description": "内瑟斯打击他的敌人以造成伤害，并且如果敌人死于【汲魂痛击】，则永久增加下次【汲魂痛击】的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_siphoningstrike.project_jade.png",
        "cooldown": "8 / 7 / 6 / 5 / 4",
        "cost": "20",
        "range": "255"
      },
      {
        "key": "W",
        "name": "枯萎",
        "description": "内瑟斯使目标陷入衰老，持续减少其移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_wither.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11",
        "cost": "80",
        "range": "700"
      },
      {
        "key": "E",
        "name": "灵魂烈焰",
        "description": "内瑟斯在目标区域施放灵魂烈焰，对范围内敌人造成伤害并削弱其护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_spiritfire.project_jade.png",
        "cooldown": "12",
        "cost": "70 / 85 / 100 / 115 / 130 / 100",
        "range": "650"
      },
      {
        "key": "R",
        "name": "死神降临",
        "description": "内瑟斯释放出强力的沙尘暴，席卷附近的敌人。风暴肆虐时，他会获得更高的生命值、攻击距离、施法距离，并汲取附近敌人的最大生命值，转化为持续时间内的额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_avatarofdeath.project_jade.png",
        "cooldown": "120",
        "cost": "100",
        "range": "400"
      }
    ]
  },
  {
    "championId": "60032",
    "championName": "阿木木",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/amumu",
    "abilities": [
      {
        "key": "P",
        "name": "诅咒之触",
        "description": "阿木木的攻击会削弱目标的魔法抗性，持续3秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_corpseexplosion.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "绷带牵引",
        "description": "阿木木向目标投掷粘稠的绷带，将自己拉向目标，并对目标造成伤害和眩晕效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_bandageflinger.project_jade.png",
        "cooldown": "16 / 14 / 12 / 10 / 8",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1100"
      },
      {
        "key": "W",
        "name": "绝望光环",
        "description": "附近的敌人陷入绝望，每秒损失一定百分比的最大生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_auraofdespair.project_jade.png",
        "cooldown": "1",
        "cost": "8",
        "range": "300"
      },
      {
        "key": "E",
        "name": "阿木木的愤怒",
        "description": "永久减少阿木木所受的物理伤害。主动施放时，阿木木可以发泄他的怒火，对周围的敌人造成伤害。阿木木每被攻击一次，该技能的冷却时间就会缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_tantrum.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "35",
        "range": "350"
      },
      {
        "key": "R",
        "name": "木乃伊之咒",
        "description": "阿木木用绷带将附近敌方单位通通缠住，对他们施加 诅咒 效果，并造成伤害和晕眩效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_bandaidthingy.project_jade.png",
        "cooldown": "150 / 130 / 110",
        "cost": "100 / 150 / 200 / 80",
        "range": "550"
      }
    ]
  },
  {
    "championId": "60021",
    "championName": "厄运小姐",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/miss-fortune",
    "abilities": [
      {
        "key": "P",
        "name": "大步流星",
        "description": "未受到攻击5秒后，厄运小姐额外获得 25移动速度 。该加成每秒提升9，最高可达70。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_strut.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "一箭双雕",
        "description": "厄运小姐向一名敌人发射一颗子弹，对该敌人及其身后的一个目标造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_doubleup.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "70 / 75 / 80 / 85 / 90 / 40",
        "range": "650"
      },
      {
        "key": "W",
        "name": "黑枪射击",
        "description": "厄运小姐攻击同一目标时，每次命中造成的伤害会被动提升。该技能可激活，提升厄运小姐的攻击速度，并使她的攻击降低目标受到的治疗效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_impureshots.project_jade.png",
        "cooldown": "16",
        "cost": "50",
        "range": "600"
      },
      {
        "key": "E",
        "name": "枪林弹雨",
        "description": "厄运小姐向目标区域释放一阵弹雨，对敌人造成数波伤害并减缓其移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_makeitrain.project_jade.png",
        "cooldown": "15",
        "cost": "80",
        "range": "800"
      },
      {
        "key": "R",
        "name": "弹幕时间",
        "description": "厄运小姐向面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_bullettime.project_jade.png",
        "cooldown": "120 / 110 / 100 / 90 / 80 / 70",
        "cost": "100",
        "range": "25000"
      }
    ]
  },
  {
    "championId": "60096",
    "championName": "克格莫",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/kog-maw",
    "abilities": [
      {
        "key": "P",
        "name": "来自艾卡西亚的惊喜",
        "description": "阵亡后，克格莫的身体将启动连锁反应，并于4秒之后爆炸，对周围的敌人们造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_icathiansurprise.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "腐蚀唾液",
        "description": "被动：克格莫的攻击速度提升。 主动：克格莫发射一团腐蚀性物质，对目标造成魔法伤害，并腐蚀目标的护甲和魔法抗性，持续4秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_causticspittle.project_jade.png",
        "cooldown": "8",
        "cost": "60",
        "range": "625"
      },
      {
        "key": "W",
        "name": "生化弹幕",
        "description": "克格莫的攻击距离得到提升，并且能够对目标造成基于目标最大生命值的额外魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_bioarcanebarrage.project_jade.png",
        "cooldown": "17",
        "cost": "50",
        "range": "530"
      },
      {
        "key": "E",
        "name": "虚空淤泥",
        "description": "克格莫抛射出一团特殊的分泌物，对经过或停留在分泌物上的敌人造成伤害和减速效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_voidooze.project_jade.png",
        "cooldown": "12",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "1200"
      },
      {
        "key": "R",
        "name": "活体大炮",
        "description": "克格莫向远处发射一枚活体炮弹，对命中的目标造成伤害并将其显形。此外，在一段时间内连续施放活体大炮技能会消耗更多的法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_livingartillery.project_jade.png",
        "cooldown": "2 / 1.5 / 1 / 2",
        "cost": "40",
        "range": "1400 / 1700 / 2000"
      }
    ]
  },
  {
    "championId": "60010",
    "championName": "凯尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/kayle",
    "abilities": [
      {
        "key": "P",
        "name": "神圣狂热",
        "description": "凯尔获得相当于自身一定百分比法术强度的攻击力，并获得相当于自身一定百分比攻击力的法术强度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_eyeforaneye.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "清算",
        "description": "凯尔轰击目标，造成伤害，降低其移动速度，并施加一层圣焰。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_reckoning.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "625"
      },
      {
        "key": "W",
        "name": "神圣祝福",
        "description": "凯尔祝福一名友军英雄，提升其移动速度并为其回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_angelicembrace.project_jade.png",
        "cooldown": "10",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "range": "700"
      },
      {
        "key": "E",
        "name": "正义之怒",
        "description": "凯尔的攻击距离提升，普通攻击会对目标及其附近的敌人造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_righteousfury.project_jade.png",
        "cooldown": "22 / 21 / 20 / 19 / 18 / 17",
        "cost": "65",
        "range": "400"
      },
      {
        "key": "R",
        "name": "神圣庇护",
        "description": "让凯尔的目标沐浴在一道圣光之中，在短时间内免疫所有类型的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_intervention.project_jade.png",
        "cooldown": "90 / 75 / 60",
        "cost": "100 / 75 / 50",
        "range": "1200"
      }
    ]
  },
  {
    "championId": "60026",
    "championName": "基兰",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/zilean",
    "abilities": [
      {
        "key": "P",
        "name": "强化学习",
        "description": "基兰和友军获得额外经验。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_slow.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "定时炸弹",
        "description": "基兰在目标身上放置一枚炸弹，它在到期后对附近的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_chronoblast.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 85 / 100 / 115 / 130 / 145",
        "range": "650"
      },
      {
        "key": "W",
        "name": "穿梭未来",
        "description": "基兰缩短自己其他技能的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_recall.project_jade.png",
        "cooldown": "18 / 15 / 12 / 9 / 6",
        "cost": "50",
        "range": "600"
      },
      {
        "key": "E",
        "name": "时光发条",
        "description": "基兰提升友方英雄的移动速度或减速敌方英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_haste.project_jade.png",
        "cooldown": "20",
        "cost": "80",
        "range": "550"
      },
      {
        "key": "R",
        "name": "时光倒流",
        "description": "基兰对自己或友方英雄施放一个可提供保护的时间符文。若目标受到致命伤害，则将目标时光倒流并进行治疗。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_timetwister.project_jade.png",
        "cooldown": "180",
        "cost": "125 / 150 / 175",
        "range": "900"
      }
    ]
  },
  {
    "championId": "60019",
    "championName": "沃里克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/warwick",
    "abilities": [
      {
        "key": "P",
        "name": "血之饥渴",
        "description": "沃里克的每次攻击都会为他恢复生命值。每次对同一目标连续发起攻击都会提高生命偷取的数值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_innerhunger.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "嗜血攻击",
        "description": "沃里克撕咬一名敌方单位并恢复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_severarmor.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6 / 5",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "400"
      },
      {
        "key": "W",
        "name": "猎手怒吼",
        "description": "沃里克发出一阵咆哮，使所有友方英雄的攻击速度在短时间内提高。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_frenziedstrikes.project_jade.png",
        "cooldown": "24 / 22 / 20 / 18 / 16",
        "cost": "35",
        "range": "1250"
      },
      {
        "key": "E",
        "name": "血迹追踪",
        "description": "沃里克能够被动感知周围虚弱的敌方英雄。鲜血的气味会使他陷入狂怒，获得惊人的移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_bloodscent.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "1500 / 2300 / 3100 / 3900 / 4700"
      },
      {
        "key": "R",
        "name": "无尽束缚",
        "description": "沃里克扑向一名敌方英雄，在数秒内将其压制并造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_infiniteduress.project_jade.png",
        "cooldown": "90 / 80 / 70",
        "cost": "100 / 125 / 150 / 100",
        "range": "650"
      }
    ]
  },
  {
    "championId": "60089",
    "championName": "蕾欧娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/leona",
    "abilities": [
      {
        "key": "P",
        "name": "日光",
        "description": "伤害类技能会在敌人身上施加持续3.5秒的日光效果。在此期间，当友方英雄对被标记的敌人造成伤害时，会消耗日光减益来使目标受到额外的魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonasunlight.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "破晓之盾",
        "description": "蕾欧娜用盾进行下次普通攻击，造成额外魔法伤害并晕眩目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonashieldofdaybreak.project_jade.png",
        "cooldown": "11 / 10 / 9 / 8 / 7",
        "cost": "45 / 50 / 55 / 60 / 65",
        "range": "100"
      },
      {
        "key": "W",
        "name": "日蚀",
        "description": "蕾欧娜举起盾牌，获得护甲和魔法抗性。第一段持续时间结束时，如果附近有敌人，则蕾欧娜对其造成魔法伤害，并延长此效果的持续时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonasolarbarrier.project_jade.png",
        "cooldown": "14",
        "cost": "60",
        "range": "450"
      },
      {
        "key": "E",
        "name": "天顶之刃",
        "description": "蕾欧娜投掷一束日光，对直线上的所有敌人造成魔法伤害。当效果消失时，最后一个被命中的敌方英雄将被短暂定身，同时蕾欧娜会冲向该英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonazenithblade.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "60",
        "range": "875"
      },
      {
        "key": "R",
        "name": "日炎耀斑",
        "description": "蕾欧娜召唤一道太阳光束，对区域内的敌人造成伤害。区域中心的敌人会被晕眩，外围的敌人会被减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonasolarflare.project_jade.png",
        "cooldown": "90 / 75 / 60 / 90 / 150",
        "cost": "100 / 150 / 200",
        "range": "1200"
      }
    ]
  },
  {
    "championId": "60072",
    "championName": "斯卡纳",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/skarner",
    "abilities": [
      {
        "key": "P",
        "name": "水晶能量",
        "description": "普通攻击使所有技能的冷却时间缩短0.5秒。攻击英雄时将此效果翻倍。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerenergize.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "水晶横扫",
        "description": "斯卡纳用爪子猛击周围敌军，对附近所有敌人造成物理伤害。如果斯卡纳击中了一个目标，身上就会暂时充盈水晶能量。充盈水晶能量期间，斯卡纳的【水晶横扫】将造成额外魔法伤害，并减速所有命中的目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnervirulentslash.project_jade.png",
        "cooldown": "3.5",
        "cost": "20 / 22 / 24 / 26 / 28 / 30",
        "range": "325"
      },
      {
        "key": "W",
        "name": "水晶蝎甲",
        "description": "斯卡纳获得护盾，在护盾存在期间，他的移动速度和攻击速度提高。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerexoskeleton.project_jade.png",
        "cooldown": "18",
        "cost": "60",
        "range": "700"
      },
      {
        "key": "E",
        "name": "晶体破碎",
        "description": "斯卡纳召唤一股水晶能量，对命中的敌人造成伤害并将其标记。攻击敌人会消耗标记，为斯卡纳治疗生命值。直接击杀目标同样可触发该治疗效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerfracture.project_jade.png",
        "cooldown": "10",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "800"
      },
      {
        "key": "R",
        "name": "晶状毒刺",
        "description": "斯卡纳压制一名敌方英雄并对其造成魔法伤害。在此期间，斯卡纳可以自由移动并拖拽目标。效果结束时，斯卡纳会对目标造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerimpale.project_jade.png",
        "cooldown": "130 / 120 / 110 / 100",
        "cost": "100 / 125 / 150",
        "range": "350"
      }
    ]
  },
  {
    "championId": "60030",
    "championName": "卡尔萨斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/karthus",
    "abilities": [
      {
        "key": "P",
        "name": "死亡契约",
        "description": "在死亡时，卡尔萨斯会化为一个灵体，能够继续施放技能。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_defied.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "荒芜",
        "description": "卡尔萨斯在目标区域释放一次有延迟的爆炸魔法，对区域内的所有敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_laywaste.project_jade.png",
        "cooldown": "1",
        "cost": "20 / 26 / 32 / 38 / 44 / 50",
        "range": "875"
      },
      {
        "key": "W",
        "name": "痛苦之墙",
        "description": "卡尔萨斯创造一道可通过的魔能之墙。所有穿过墙体的敌方单位都会被暂时降低移动速度和魔法抗性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_wallofpain.project_jade.png",
        "cooldown": "18",
        "cost": "100",
        "range": "1000"
      },
      {
        "key": "E",
        "name": "亵渎",
        "description": "卡尔萨斯被动地从他的猎物那里窃取法力，每杀死一个敌人就会获得法力。卡尔萨斯也可以转化这种力量，用猎物的灵魂环绕自身，对附近的敌人造成伤害，但会急速消耗他自己的法力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_defile.project_jade.png",
        "cooldown": "0.5",
        "cost": "30 / 42 / 54 / 66 / 78 / 90",
        "range": "550"
      },
      {
        "key": "R",
        "name": "挽歌",
        "description": "在引导3秒后，卡尔萨斯就会对所有敌方英雄造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_deathray.project_jade.png",
        "cooldown": "200 / 180 / 160 / 180 / 200",
        "cost": "150 / 175 / 200 / 100",
        "range": "10000"
      }
    ]
  },
  {
    "championId": "60081",
    "championName": "伊泽瑞尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ezreal",
    "abilities": [
      {
        "key": "P",
        "name": "咒能高涨",
        "description": "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_risingspellforce.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "秘术射击",
        "description": "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_mysticshot.project_jade.png",
        "cooldown": "6 / 5.5 / 5 / 4.5 / 4 / 3.5",
        "cost": "30 / 35 / 40 / 45 / 50 / 55",
        "range": "1150"
      },
      {
        "key": "W",
        "name": "精华跃动",
        "description": "伊泽瑞尔发射一道起伏的能量波，降低途经敌方英雄的攻击速度并对其造成魔法伤害，同时为途经友方英雄回复生命值并提升其攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_essenceflux.project_jade.png",
        "cooldown": "10",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1050"
      },
      {
        "key": "E",
        "name": "奥术跃迁",
        "description": "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_arcaneshift.project_jade.png",
        "cooldown": "17 / 15 / 13 / 11 / 9 / 7",
        "cost": "90",
        "range": "475"
      },
      {
        "key": "R",
        "name": "精准弹幕",
        "description": "伊泽瑞尔引导1秒，发射一个强力的能量弹幕，弹幕将对它途经的每一个敌人造成魔法伤害。（每穿过一个单位，弹幕造成的伤害就会降低10%）。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_trueshotbarrage.project_jade.png",
        "cooldown": "100",
        "cost": "150",
        "range": "25000"
      }
    ]
  },
  {
    "championId": "60014",
    "championName": "赛恩",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/sion",
    "abilities": [
      {
        "key": "P",
        "name": "硬化皮肤",
        "description": "赛恩每次受到攻击时，有40%几率无视最多30/40/50伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_feelnopain.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "秘密凝视",
        "description": "赛恩以恐怖目光震慑一名敌人，对其造成伤害和晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_crypticgaze.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "100",
        "range": "550"
      },
      {
        "key": "W",
        "name": "死亡拥抱",
        "description": "赛恩生成一道可吸收伤害的护盾，保护自己。如果护盾在10秒内未被摧毁，则触发爆炸，对附近的敌人造成伤害。4秒后再次施放可手动引爆护盾。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_deathscaress.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "100"
      },
      {
        "key": "E",
        "name": "暴怒",
        "description": "激活后，赛恩的攻击力提升，但每次普通攻击都会消耗生命值。此外，每当他击杀一名敌方单位时，还会永久提升最大生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_spiritrage.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": null
      },
      {
        "key": "R",
        "name": "死灵狂暴",
        "description": "赛恩每次攻击都会吸取敌人的部分生命力，为自己和附近友军回复生命值。鲜肉的气息也会激发赛恩的狂热，提升他的攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_cannibalism.project_jade.png",
        "cooldown": "90",
        "cost": "100",
        "range": "100"
      }
    ]
  },
  {
    "championId": "60029",
    "championName": "图奇",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/twitch",
    "abilities": [
      {
        "key": "P",
        "name": "致命印记",
        "description": "图奇的普通攻击会使目标感染，每秒造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_deadlyvenom_temp.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "隐秘伏击",
        "description": "图奇在短时间内隐身，隐身期间获得移动速度。脱离隐身状态时，图奇获得短时间内持续的攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_alterego.project_jade.png",
        "cooldown": "16",
        "cost": "60",
        "range": "20"
      },
      {
        "key": "W",
        "name": "剧毒之桶",
        "description": "图奇扔出一个会爆炸的毒性之桶，从而对区域内的敌人施加死亡毒液并造成减速效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_venomcask.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "50",
        "range": "950"
      },
      {
        "key": "E",
        "name": "毁灭印记",
        "description": "附近所有敌人会将图奇的毒液从他们的身体中排出，每层可造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_expunge_old.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "1200"
      },
      {
        "key": "R",
        "name": "火力全开",
        "description": "图奇闭上双眼扣下扳机，快速向前方射出强力贯穿弩箭。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_clone.project_jade.png",
        "cooldown": "120 / 110 / 100 / 90 / 80 / 70",
        "cost": "100 / 125 / 150 / 175 / 200 / 225",
        "range": "1200"
      }
    ]
  },
  {
    "championId": "60011",
    "championName": "易",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/master-yi",
    "abilities": [
      {
        "key": "P",
        "name": "双重打击",
        "description": "易有时会连续攻击两次。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_doublestrike.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "阿尔法突袭",
        "description": "易以肉眼难以发觉的速度穿梭于战场，对沿途多个敌人造成物理伤害。【阿尔法突袭】可触发暴击，对小兵和野怪造成额外物理伤害。普通攻击可缩短阿尔法突袭的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_leapstrike.project_jade.png",
        "cooldown": "18 / 16 / 14 / 12 / 10 / 8",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "600"
      },
      {
        "key": "W",
        "name": "冥想",
        "description": "易集中念力、活化身体，短时间内回复生命值并减少所受的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_innerfocus.project_jade.png",
        "cooldown": "35",
        "cost": "50 / 65 / 80 / 95 / 110 / 125",
        "range": "20"
      },
      {
        "key": "E",
        "name": "无极剑道",
        "description": "易的无极技艺变得更加熟练，被动提升攻击力。激活【无极剑道】会让易的普通攻击附带真实伤害，但技能冷却期间会失去被动效果的加成。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_sunderingstrikes.project_jade.png",
        "cooldown": "25 / 23 / 21 / 19 / 17 / 15",
        "cost": "40",
        "range": "20"
      },
      {
        "key": "R",
        "name": "高原血统",
        "description": "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。技能持续期间，对英雄的击杀或助攻会延长该技能持续时间。完成对英雄的击杀或助攻时，被动效果会使其他技能的冷却时间缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_innerfocus2.project_jade.png",
        "cooldown": "75",
        "cost": "100",
        "range": "1"
      }
    ]
  },
  {
    "championId": "60117",
    "championName": "璐璐",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/lulu",
    "abilities": [
      {
        "key": "P",
        "name": "皮克斯，仙灵伙伴",
        "description": "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_pixfaeriecompanion.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "闪耀长枪",
        "description": "璐璐和皮克斯各自发射一束穿刺飞弹，对命中的敌人造成重度减速效果。一个敌人只会受到一个飞弹的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_glitterbolt.project_jade.png",
        "cooldown": "7",
        "cost": "60 / 65 / 70 / 75 / 80",
        "range": "925"
      },
      {
        "key": "W",
        "name": "奇思妙想",
        "description": "如果对友军施放，会在短时间内增加目标友军的移动速度和法术强度。如果对敌人施放，则会将一名敌方英雄变成可爱的动物，使其无法攻击或施放技能。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_whimsy.project_jade.png",
        "cooldown": "18 / 16.5 / 15 / 13.5 / 12",
        "cost": "65 / 70 / 75 / 80 / 85",
        "range": "650"
      },
      {
        "key": "E",
        "name": "帮忙，皮克斯！",
        "description": "如果对友军施放，会命令皮克斯跳到一名友军身上进行保护，之后会跟随并协助目标（而不是璐璐）进行攻击。如果对敌人施放，皮克斯会跳到敌人身上造成伤害，之后会跟随并提供目标的视野。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_commandpix.project_jade.png",
        "cooldown": "10",
        "cost": "60 / 70 / 80 / 90 / 100",
        "range": "650"
      },
      {
        "key": "R",
        "name": "狂野生长",
        "description": "璐璐让她的友军变大，击飞目标附近的敌人，同时为目标友军提供大量生命值加成。接下来的几秒内，该友军会获得一个光环，减速附近的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_giantgrowth.project_jade.png",
        "cooldown": "110 / 95 / 80",
        "cost": "150",
        "range": "900"
      }
    ]
  },
  {
    "championId": "60045",
    "championName": "维迦",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/veigar",
    "abilities": [
      {
        "key": "P",
        "name": "均衡",
        "description": "维迦每损失1%法力值，法力回复便提升1%。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigar_entropy.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "黑暗祭祀",
        "description": "向目标敌人释放黑暗能量，造成魔法伤害。如果敌人被击败，维迦会永久获得一定的法术强度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigarbalefulstrike.project_jade.png",
        "cooldown": "8 / 7 / 6 / 5 / 4",
        "cost": "60 / 65 / 70 / 75 / 80",
        "range": "650"
      },
      {
        "key": "W",
        "name": "黑暗物质",
        "description": "维迦召唤一大团黑暗物质轰击目标区域，落地造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigardarkmatter.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "950"
      },
      {
        "key": "E",
        "name": "扭曲空间",
        "description": "维迦在目标区域创造一个能够维持3秒的扭曲空间，穿过此区域边界的敌人将会被短暂晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigareventhorizon.project_jade.png",
        "cooldown": "20 / 19 / 18 / 17 / 16",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "725"
      },
      {
        "key": "R",
        "name": "能量爆裂",
        "description": "引爆目标敌方英雄，造成大量基础魔法伤害，并额外造成目标80%法术强度的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigarprimordialburst.project_jade.png",
        "cooldown": "130 / 110 / 90",
        "cost": "125 / 175 / 225 / 500",
        "range": "650"
      }
    ]
  },
  {
    "championId": "60031",
    "championName": "科加斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/chogath",
    "abilities": [
      {
        "key": "P",
        "name": "肉食者",
        "description": "当科加斯击杀一个单位时，他会回复生命值和法力值。回复的数值会随科加斯的等级提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_tailspike.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "碎裂",
        "description": "使目标地面破裂，将敌人抛向空中，造成伤害并减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_spikeslam.project_jade.png",
        "cooldown": "9",
        "cost": "90",
        "range": "950"
      },
      {
        "key": "W",
        "name": "野性尖叫",
        "description": "科加斯向面前锥形区域施放恐怖声波，造成魔法伤害并沉默敌人数秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_feralscream.project_jade.png",
        "cooldown": "13",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "300"
      },
      {
        "key": "E",
        "name": "恐惧之刺",
        "description": "科加斯的攻击会释放致命的尖刺，对面前所有的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_chitinousexoplates.project_jade.png",
        "cooldown": "0.5",
        "cost": "0",
        "range": "40"
      },
      {
        "key": "R",
        "name": "盛宴",
        "description": "吞噬一个敌方单位，造成高额真实伤害。若目标被吞噬致死，科加斯就会变大，提高最大生命值（最多叠加6层）。科加斯死亡时会失去一半层数。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_feast.project_jade.png",
        "cooldown": "60",
        "cost": "100 / 60",
        "range": "175"
      }
    ]
  },
  {
    "championId": "60090",
    "championName": "玛尔扎哈",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/malzahar",
    "abilities": [
      {
        "key": "P",
        "name": "召唤虚灵",
        "description": "每隔几次施法，玛尔扎哈会召唤一只无法控制的虚灵主动攻击敌人。虚灵会随时间成长，获得护甲、伤害和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_summonvoidling.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "虚空召唤",
        "description": "玛尔扎哈开启两扇通向虚空的传送门。短暂延迟后，两扇门之间出现虚空能量对流，造成魔法伤害并沉默敌方英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_callofthevoid.project_jade.png",
        "cooldown": "9",
        "cost": "80 / 85 / 90 / 95 / 100 / 105",
        "range": "900"
      },
      {
        "key": "W",
        "name": "虚无领域",
        "description": "玛尔扎哈制造一片负能量区域，每秒对附近的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_nullzone.project_jade.png",
        "cooldown": "14",
        "cost": "90 / 95 / 100 / 105 / 110 / 115",
        "range": "800"
      },
      {
        "key": "E",
        "name": "煞星幻象",
        "description": "玛尔扎哈侵蚀目标的心智，从而造成持续伤害。如果目标在此期间阵亡，则幻象转移到附近的敌人身上，且玛尔扎哈恢复法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_maleficvisions.project_jade.png",
        "cooldown": "15 / 13 / 11 / 9 / 7",
        "cost": "60 / 75 / 90 / 105 / 120 / 135",
        "range": "650"
      },
      {
        "key": "R",
        "name": "冥府之握",
        "description": "玛尔扎哈引导虚空之力，以压制目标英雄并持续造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_nethergrasp.project_jade.png",
        "cooldown": "120 / 100 / 80",
        "cost": "150",
        "range": "700"
      }
    ]
  },
  {
    "championId": "60038",
    "championName": "卡萨丁",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/kassadin",
    "abilities": [
      {
        "key": "P",
        "name": "虚空之石",
        "description": "卡萨丁受到的 魔法伤害 减少15%，并将该伤害转化为额外 攻击速度 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_netherburn.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "虚无法球",
        "description": "卡萨丁发射一道缥缈的虚空能量弹，对目标造成伤害并使其暂时沉默。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/averdrian_astralbeam.project_jade.png",
        "cooldown": "9",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "650"
      },
      {
        "key": "W",
        "name": "虚空之刃",
        "description": "被动：卡萨丁的普通攻击回复法力值。攻击敌方英雄时，法力值回复量提升至三倍。主动：卡萨丁的普通攻击造成额外魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_nullblade.project_jade.png",
        "cooldown": "12",
        "cost": "25",
        "range": "1"
      },
      {
        "key": "E",
        "name": "能量脉冲",
        "description": "附近有单位施放法术技能时，卡萨丁将吸收能量。当充能完毕后，吸收的能量可转化为脉冲，对面前锥形区域内敌人造成伤害并减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_forcepulse.project_jade.png",
        "cooldown": "6",
        "cost": "80",
        "range": "400"
      },
      {
        "key": "R",
        "name": "虚空行走",
        "description": "卡萨丁传送到附近区域，对区域内的敌方单位造成魔法伤害。此外，在一段时间内连续施放虚空行走技能会消耗更多的法力值，并造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_riftwalk.project_jade.png",
        "cooldown": "7 / 6 / 5 / 2",
        "cost": "100",
        "range": "700"
      }
    ]
  },
  {
    "championId": "60020",
    "championName": "努努",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/nunu",
    "abilities": [
      {
        "key": "P",
        "name": "法术幻想",
        "description": "进行5次攻击后，努努可以免费施放一个技能。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_frostnova.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "吞噬",
        "description": "努努命令威朗普撕咬小兵或野怪，造成巨量伤害，并回复自己的生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_consume.project_jade.png",
        "cooldown": "17 / 15 / 13 / 11 / 9 / 7",
        "cost": "60",
        "range": "125"
      },
      {
        "key": "W",
        "name": "血之沸腾",
        "description": "努努使自己和一个友方单位热血沸腾，提升自身和目标的移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_yetismash.project_jade.png",
        "cooldown": "15",
        "cost": "50",
        "range": "700"
      },
      {
        "key": "E",
        "name": "冰雹",
        "description": "努努向敌人掷出一个冰球，造成伤害并短暂降低其移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_iceblast.project_jade.png",
        "cooldown": "6",
        "cost": "75 / 85 / 95 / 105 / 115 / 125",
        "range": "550"
      },
      {
        "key": "R",
        "name": "绝对零度",
        "description": "努努开始吸收周围区域的热量，并使附近的敌人减速。该技能结束时，对范围内所有敌人造成巨量伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_shatter.project_jade.png",
        "cooldown": "110 / 100 / 90",
        "cost": "100",
        "range": "650"
      }
    ]
  },
  {
    "championId": "60017",
    "championName": "提莫",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/teemo",
    "abilities": [
      {
        "key": "P",
        "name": "伪装",
        "description": "如果提莫保持静止，并在短时间内未执行任何操作，他将进入无限期的隐形状态。如果提莫在草丛中，他可以在移动时保持隐形。提莫脱离隐形后获得【出奇制胜】效果，提升攻击速度，持续数秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_camouflage.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "致盲吹箭",
        "description": "用强效毒液来侵蚀一名敌人的视力，对目标单位造成伤害，并使其致盲一段时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_tranquilizingshot.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "680"
      },
      {
        "key": "W",
        "name": "小莫快跑",
        "description": "提莫动如脱兔，移动速度增加，直到被敌方英雄或防御塔击中为止。提莫可在短时间内疾跑，获得额外移动速度，且不会因被击中而中断。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_movequick.project_jade.png",
        "cooldown": "17",
        "cost": "40",
        "range": null
      },
      {
        "key": "E",
        "name": "毒性射击",
        "description": "提莫每次攻击附带毒液伤害，造成持续性伤害，持续4秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_poisoneddart.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "680"
      },
      {
        "key": "R",
        "name": "种蘑菇",
        "description": "提莫用背包里的蘑菇布置一个可爆炸的毒性陷阱。陷阱会在被敌方踩中时爆炸，释放出一团毒云，对附近的敌人造成减速效果和持续伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_archersmark.project_jade.png",
        "cooldown": "1",
        "cost": "75 / 100 / 125 / 150 / 175 / 200",
        "range": "230"
      }
    ]
  },
  {
    "championId": "60042",
    "championName": "库奇",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/corki",
    "abilities": [
      {
        "key": "P",
        "name": "海克斯科技榴弹",
        "description": "库奇的普攻对小兵、野怪和英雄造成额外真实伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_rapidreload.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "磷光炸弹",
        "description": "库奇向目标区域发射一枚闪光弹。这次攻击会显形爆炸周围非潜行状态的单位和英雄，持续6秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_phosphorusbomb.project_jade.png",
        "cooldown": "8",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "600"
      },
      {
        "key": "W",
        "name": "瓦尔基里俯冲",
        "description": "库奇冲向目标位置，沿途投下炸弹，留下一道火焰路径，对停留其中的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_valkyrie.project_jade.png",
        "cooldown": "26 / 23 / 20 / 17 / 14 / 11",
        "cost": "50",
        "range": "600"
      },
      {
        "key": "E",
        "name": "格林机枪",
        "description": "库奇使用格林机枪扫射他面前锥形范围内的敌人，造成伤害并削减敌人护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_gatlinggun.project_jade.png",
        "cooldown": "16",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "range": "600"
      },
      {
        "key": "R",
        "name": "火箭轰击",
        "description": "库奇朝着他的目标位置发射一枚导弹。导弹会在命中第一个敌人后爆炸，并对目标周围单位造成伤害。库奇每12秒就会挂载一枚导弹，最多挂载7枚。每发射3枚导弹后，下一次就会发射超级导弹，造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_missilebarrage.project_jade.png",
        "cooldown": "1.2",
        "cost": "20",
        "range": "1225"
      }
    ]
  },
  {
    "championId": "60015",
    "championName": "希维尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/sivir",
    "abilities": [
      {
        "key": "P",
        "name": "敏锐疾行",
        "description": "希维尔攻击敌方英雄时，会短暂获得移动速度提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_sprint.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "回旋之刃",
        "description": "希维尔将十字刃当作回力标挥出，利刃在往返时造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_spiralblade.project_jade.png",
        "cooldown": "9",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1200"
      },
      {
        "key": "W",
        "name": "弹射",
        "description": "希维尔的下一次普通攻击将在目标之间弹射，每次后续命中时，造成的伤害衰减。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_ricochet.project_jade.png",
        "cooldown": "0.5",
        "cost": "0",
        "range": "20"
      },
      {
        "key": "E",
        "name": "法术护盾",
        "description": "希维尔制造一层法术屏障，从而格挡一次对她施放的敌方单体技能。如果成功格挡技能，则希维尔回复法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_spellblock.project_jade.png",
        "cooldown": "22 / 19 / 16 / 13 / 10 / 7",
        "cost": "75",
        "range": "20"
      },
      {
        "key": "R",
        "name": "狩猎",
        "description": "希维尔在战斗中引领友军，在一段时间内提高其移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_deadeye.project_jade.png",
        "cooldown": "100 / 90 / 80 / 70 / 60 / 50",
        "cost": "100",
        "range": "1000"
      }
    ]
  },
  {
    "championId": "60080",
    "championName": "潘森",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/pantheon",
    "abilities": [
      {
        "key": "P",
        "name": "圣盾庇护",
        "description": "每攻击或施法4次后，潘森可格挡下一次普通攻击或防御塔攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_aoz.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "长矛飞掷",
        "description": "潘森向一个敌人猛掷长矛，从而造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_spearshot.project_jade.png",
        "cooldown": "4",
        "cost": "45",
        "range": "600"
      },
      {
        "key": "W",
        "name": "圣盾打击",
        "description": "潘森跳向一名敌人并对该敌人进行盾击，从而使其晕眩。盾击结束后刷新圣盾庇护，以格挡下一次攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_leapbash.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "55",
        "range": "600"
      },
      {
        "key": "E",
        "name": "穿心长矛",
        "description": "潘森使用长矛向前方范围发动三连击，对英雄造成的伤害翻倍。同时，潘森也变得更了解敌人的弱点，必定对生命值低于15%的敌人触发暴击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_hss.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "45 / 50 / 55 / 60 / 65 / 70",
        "range": "400"
      },
      {
        "key": "R",
        "name": "堕天一击",
        "description": "潘森积蓄力量腾空而起，然后轰击目标区域，落地时对目标区域内的所有敌人造成伤害。离落点越近的敌人，受到的伤害越高。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_grandskyfall.project_jade.png",
        "cooldown": "150 / 135 / 120",
        "cost": "100",
        "range": "5500"
      }
    ]
  },
  {
    "championId": "60053",
    "championName": "布里茨",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/blitzcrank",
    "abilities": [
      {
        "key": "P",
        "name": "法力屏障",
        "description": "布里茨的生命值降到20%以下时，法力屏障就会激活，生成一道相当于其50%法力值的护盾，持续10秒。法力屏障每90秒内只能触发一次。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_manabarrier.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "机械飞爪",
        "description": "布里茨发射右手，对命中的第一个敌人造成伤害，并将其拉到自己面前。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_rocketgrab.project_jade.png",
        "cooldown": "20 / 19 / 18 / 17 / 16",
        "cost": "120",
        "range": "1079"
      },
      {
        "key": "W",
        "name": "过载运转",
        "description": "布里茨为自己进行超级充能，以大幅提升移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_overdrive.project_jade.png",
        "cooldown": "15",
        "cost": "75",
        "range": "1"
      },
      {
        "key": "E",
        "name": "能量铁拳",
        "description": "布里茨为机械手臂充能，下次攻击造成双倍伤害并击飞目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_powerfist.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "25",
        "range": "300"
      },
      {
        "key": "R",
        "name": "静电力场",
        "description": "被动生成电弧，对附近的一名敌人造成伤害。此外，主动施放时对周围的敌人造成伤害和0.5秒沉默，但在施放后会暂时禁用被动电弧效果，直到技能冷却完毕。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_staticfield.project_jade.png",
        "cooldown": "30",
        "cost": "150",
        "range": "600"
      }
    ]
  },
  {
    "championId": "60016",
    "championName": "索拉卡",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/soraka",
    "abilities": [
      {
        "key": "P",
        "name": "奉献",
        "description": "使周围友军提高16魔法抗性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_consecration.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "流星坠落",
        "description": "一阵流星雨从天而降，打击附近所有敌人，造成魔法伤害并暂时降低其魔法抗性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_starcall.project_jade.png",
        "cooldown": "2.5",
        "cost": "20 / 35 / 50 / 65 / 80 / 95",
        "range": "625"
      },
      {
        "key": "W",
        "name": "星界恩典",
        "description": "索拉卡为一名友方单位赐福，为其回复生命值并暂时提升护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_bless.project_jade.png",
        "cooldown": "20",
        "cost": "80 / 110 / 140 / 170 / 200 / 230",
        "range": "750"
      },
      {
        "key": "E",
        "name": "灌注",
        "description": "为一名友军回复法力值，或对一名敌人造成伤害并使其短暂沉默。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_wish.project_jade.png",
        "cooldown": "10",
        "cost": "0",
        "range": "725"
      },
      {
        "key": "R",
        "name": "祈愿",
        "description": "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_purify.project_jade.png",
        "cooldown": "160 / 145 / 130 / 115 / 100 / 85",
        "cost": "100 / 175 / 250 / 325 / 400 / 475",
        "range": "25000"
      }
    ]
  },
  {
    "championId": "60036",
    "championName": "蒙多医生",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/dr-mundo",
    "abilities": [
      {
        "key": "P",
        "name": "肾上腺激素",
        "description": "蒙多医生每秒回复0.3%的最大生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_adrenalinerush.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null
      },
      {
        "key": "Q",
        "name": "病毒屠刀",
        "description": "蒙多医生掷出他的屠刀，对目标造成基于其最大生命值的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_infectedcleaver.project_jade.png",
        "cooldown": "4",
        "cost": "0",
        "range": "975"
      },
      {
        "key": "W",
        "name": "痛苦燃烧",
        "description": "通过消耗生命值，蒙多医生减少自身受到的控制效果持续时间，并持续对附近敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_burningagony.project_jade.png",
        "cooldown": "1",
        "cost": "0",
        "range": "325"
      },
      {
        "key": "E",
        "name": "潜能激发",
        "description": "潜能激发会在5秒内提升蒙多医生的攻击力。此外，蒙多医生每损失一定百分比的生命值，还会获得额外攻击力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_masochism.project_jade.png",
        "cooldown": "7",
        "cost": "0",
        "range": null
      },
      {
        "key": "R",
        "name": "背水一战",
        "description": "蒙多医生消耗部分生命值来提升移动速度，并巨幅提升生命回复速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_sadism.project_jade.png",
        "cooldown": "75",
        "cost": "0",
        "range": "20"
      }
    ]
  }
];

export const classicSkillsByChampion = new Map(
  classicChampionSkills.map((entry) => [entry.championId, entry]),
);
