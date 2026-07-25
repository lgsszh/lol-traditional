// Generated from OP.GG Classic 16.15 and Riot Data Dragon 3.15.5. Do not edit manually.
export type ClassicAbilityKey = "P" | "Q" | "W" | "E" | "R";

export type ClassicAbility = {
  key: ClassicAbilityKey;
  name: string;
  description: string;
  icon: string;
  cooldown: string | null;
  cost: string | null;
  range: string | null;
  numericDetail: string | null;
  numericVersion: string | null;
};

export type ClassicChampionSkillSet = {
  championId: string;
  championName: string;
  sourceUrl: string;
  portrait: string;
  classicSplash: string;
  classicSplashName: string;
  abilities: ClassicAbility[];
};

export const classicChampionSkills: ClassicChampionSkillSet[] = [
  {
    "championId": "60103",
    "championName": "阿狸",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ahri",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60103.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_ahri/skins/base/images/jade_ahri_splash_centered_0.project_jade.jpg",
    "classicSplashName": "九尾妖狐",
    "abilities": [
      {
        "key": "P",
        "name": "摄魂夺魄",
        "description": "每当用技能命中敌人时获得一层摄魂夺魄的充能。达到9层充能后，下一个技能会回复阿狸的生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_souleater.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "欺诈宝珠",
        "description": "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_orbofdeception.project_jade.png",
        "cooldown": "7",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "970",
        "numericDetail": "阿狸放出宝珠，造成40/65/90/115/140(+32.5%法术强度)点魔法伤害，随后将其收回，造成40/65/90/115/140(+32.5%法术强度)点真实伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "妖异狐火",
        "description": "阿狸放出三团狐火，锁定附近的敌人进行攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_foxfire.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5 / 4",
        "cost": "50",
        "range": "700",
        "numericDetail": "阿狸放出三团狐火，狐火会锁定附近的三名敌人（英雄优先）进行攻击，造成40/65/90/115/140(+40%法术强度)魔法伤害。\n\n在命中同一目标时，额外的狐火会造成30%的伤害，最多对同一目标造成（数值未在旧版接口公开）伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "魅惑妖术",
        "description": "阿狸献出红唇热吻，对命中的第一个敌人造成伤害和魅惑效果。该敌人所受的来自阿狸技能的伤害也会提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_charm.project_jade.png",
        "cooldown": "12",
        "cost": "50 / 65 / 80 / 95 / 110 / 125",
        "range": "975",
        "numericDetail": "阿狸献出红唇热吻，对命中的第一个敌人造成60/90/120/150/180(+35%法术强度)魔法伤害并将目标魅惑，让目标意乱情迷地走向阿狸。魅惑效果持续1/1.25/1.5/1.75/2秒。\n\n阿狸对被魅惑的敌人所造成的魔法伤害会提高20%，持续6秒。这个效果也会提升欺诈宝珠的真实伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "灵魄突袭",
        "description": "阿狸向前猛冲，并放出元气弹，对周围的3个敌人（英雄优先）造成伤害。灵魄突袭在进入冷却以前最多可被施放三次。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ahri_spiritrush.project_jade.png",
        "cooldown": "110 / 95 / 80 / 65 / 50 / 35",
        "cost": "100",
        "range": "450",
        "numericDetail": "阿狸像妖魅一般向前冲锋，并向周围的3名敌人（英雄优先）发射元气弹，造成70/110/150(+30%法术强度)点魔法伤害。灵魄突袭可以在进入冷却阶段前的10秒内被施放最多3次。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60024",
    "championName": "贾克斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/jax",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60024.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_jax/skins/skin301/images/jade_jax_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 贾克斯",
    "abilities": [
      {
        "key": "P",
        "name": "武器专精",
        "description": "贾克斯会基于装备提供的额外攻击力和法术强度获得额外生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_masterofarms.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "跳斩",
        "description": "贾克斯跃起猛击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_relentlessassault.project_jade.png",
        "cooldown": "17 / 14 / 11 / 8 / 5",
        "cost": "65",
        "range": "700",
        "numericDetail": "贾克斯跳向一个单位，如果目标是敌人则会攻击，造成70/110/150/190/230(+100%额外攻击力)(+60%法术强度)点物理伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "蓄力一击",
        "description": "贾克斯的下一次攻击或跳斩造成额外伤害，并对附近的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_empower.project_jade.png",
        "cooldown": "7 / 6 / 5 / 4 / 3",
        "cost": "35",
        "range": "300",
        "numericDetail": "贾克斯给他的武器充能，使他的下次攻击造成额外40/75/110/145/180(+60%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "反击风暴",
        "description": "贾克斯进入防御姿态，能够躲闪掉一切即将到来的攻击，并减少来自群体技能的伤害。随后他会晕眩周围的敌人并对其造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_disarm.project_jade.png",
        "cooldown": "18 / 16 / 14 / 12 / 10 / 8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "300",
        "numericDetail": "贾克斯进入一个最多持续2秒的防御姿态，能够躲闪掉一切即将到来的普通攻击，并且减少25%来自范围技能的伤害。\n\n2秒之后，或再次激活此技能后，贾克斯会将周围的敌人打晕1秒，并对他们造成50/75/100/125/150(+50%额外攻击力)点物理伤害。\n\n贾克斯每躲掉一次攻击，则反击风暴的伤害值提升20%(最多可提升100%的伤害)。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "宗师之威",
        "description": "贾克斯每次攻击时获得攻击速度。每第三次连续攻击造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jax_coupdegrace.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "400",
        "numericDetail": "被动：贾克斯每连续攻击2次，第三次攻击就会造成100/160/220(+70%法术强度)点额外的魔法伤害。\n\n主动：贾克斯施放他的内力，给予他额外的30点点护甲和20点点魔法抗性，持续8秒。\n\n护甲加成等于25/35/45+你的附加攻击力的30%。\n魔法抗性加成等于25/35/45+20%法术强度。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60064",
    "championName": "李青",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/lee-sin",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60064.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_leesin/skins/skin301/images/jade_leesin_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 李青",
    "abilities": [
      {
        "key": "P",
        "name": "疾风骤雨",
        "description": "李青使用一次技能后，他接下来的两次普通攻击会获得40%攻击速度，且每次攻击回复15能量。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leesinpassive.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "天音波/回音击",
        "description": "天音波：李青发出刺耳的声波定位敌人，对命中的首个敌人造成物理伤害。如果天音波击中敌人，则李青在接下来3秒可施放回音击。 回音击：李青冲向被天音波击中的敌人，造成物理伤害外加目标8%已损失生命值的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkqone.project_jade.png",
        "cooldown": "11 / 10 / 9 / 8 / 7",
        "cost": "50",
        "range": "1100",
        "numericDetail": "天音波：李青发出刺耳的声波定位敌人，对首个敌人造成50/80/110/140/170(+90%额外攻击力)物理伤害。如果天音波击中敌人，李青在接下来3秒可施放回音击。\n\n回音击：李青冲向被天音波击中的敌人，造成50/80/110/140/170(+90%额外攻击力)物理伤害并附加敌人损失生命值8%的伤害。（对野怪最多附加400点伤害）。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "金钟罩/铁布衫",
        "description": "金钟罩：李青冲向目标友军，为目标和自身提供护盾。在使用金钟罩后，李青可以在接下来的3秒内施放铁布衫。 铁布衫：李青艰苦卓绝的训练让他能在战斗中激发潜能。4秒内，李青获得生命偷取、法术吸血和护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkwone.project_jade.png",
        "cooldown": "9",
        "cost": "50",
        "range": "700",
        "numericDetail": "金钟罩：李青冲向友军，提供护盾保护自己免受40/80/120/160/200(+80%法术强度)伤害，持续5秒。如果目标是英雄，那么李青和目标英雄都会获得护盾。施放金钟罩后接下来3秒，李青可施放铁布衫。\n\n铁布衫：李青高强度的训练让他在战斗中激发潜能。李青可以在5秒内获得5/10/15/20/25%生命偷取和法术吸血。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "天雷破/摧筋断骨",
        "description": "天雷破：李青猛击地面，施放冲击波，造成魔法伤害并使命中的敌方单位显形。如果天雷破击中敌人，李青可以在接下来的3秒内施放摧筋断骨。 摧筋断骨：李青致残被天雷破显形的敌人们，降低其的移动速度和攻击速度，持续4秒。持续期间内，受影响单位的移动速度和攻击速度会逐渐恢复正常。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkeone.project_jade.png",
        "cooldown": "10",
        "cost": "50",
        "range": "425",
        "numericDetail": "天雷破：李青撞击地面，施放冲击波，造成60/95/130/165/200(+100%额外攻击力)魔法伤害，并使被击中单位暴露，持续4秒。如果天雷破击中敌人，李青可以在接下来的3秒内施放摧筋断骨。\n\n摧筋断骨：李青致残被天雷破侦查到的敌人，持续4秒，减少敌人的移动速度和攻击速度20/30/40/50/60%。持续期间受影响单位的攻速和移动速度会逐渐恢复正常。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "猛龙摆尾",
        "description": "李青用强力的回旋踢击退敌方英雄，对目标以及被目标撞到的所有敌人造成物理伤害。被目标撞到的敌人会被短暂击飞。这项技艺是春哥教他的，不过李青不能将玩家的英雄踢到地图外面去。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blindmonkr.project_jade.png",
        "cooldown": "90 / 75 / 60",
        "cost": "0",
        "range": "375",
        "numericDetail": "李青用强力的回旋踢击退敌方英雄，对目标以及被目标撞到的任何敌人造成200/400/600(+200%额外攻击力)物理伤害。被目标撞到的敌方英雄会被短暂击飞。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60022",
    "championName": "艾希",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ashe",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60022.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_ashe/skins/base/images/jade_ashe_splash_centered_0.project_jade.jpg",
    "classicSplashName": "寒冰射手",
    "abilities": [
      {
        "key": "P",
        "name": "射手专注",
        "description": "艾希在脱离战斗时会积累 全神贯注 层数。当艾希拥有100层 全神贯注 时，她的下一次攻击必定暴击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_bullseye.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "冰霜射击",
        "description": "技能激活时，艾希的每次普通攻击都会使目标减速。每次攻击都会消耗法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_icearrow.project_jade.png",
        "cooldown": "1",
        "cost": "0",
        "range": "400",
        "numericDetail": "激活：艾希的基础攻击减缓敌人15/20/25/30/35%的移动速度，持续2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "万箭齐发",
        "description": "艾希向前方锥形范围射出7支箭，对敌人造成额外伤害。万箭齐发也会施加艾希当前等级的冰霜射击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_volley.project_jade.png",
        "cooldown": "16 / 13 / 10 / 7 / 4",
        "cost": "60",
        "range": "1200",
        "numericDetail": "向前方的锥形范围射出7支箭，造成40/50/60/70/80(+100%总攻击力)物理伤害。该技能会触发冰霜射击的效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "鹰击长空",
        "description": "艾希每次击杀单位都会获得额外金币。艾希可以激活技能，派遣她的猎鹰之灵去执行侦查任务。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_hawkshot.project_jade.png",
        "cooldown": "60",
        "cost": "0",
        "range": "2500 / 3250 / 4000 / 4750 / 5500",
        "numericDetail": "被动：艾希在杀死一名单位后会获得1/2/3/4/5点额外赏金。\n\n主动：艾希将一个鹰灵进行实体化，并让它进行侦查，将会沿途显示它所经过的区域，并在到达目标区域后，保留5秒该区域的视野。\n\n已获取的额外赏金总额：1/2/3/4/5",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "魔法水晶箭",
        "description": "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，则对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离，最多持续3.5秒。此外，附近的敌方单位会受到伤害并减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_enchantedarrow.project_jade.png",
        "cooldown": "100 / 90 / 80 / 60",
        "cost": "150",
        "range": "25000",
        "numericDetail": "艾希向前方射出魔法水晶箭。击中敌方英雄时造成250/425/600(+100%法术强度)魔法伤害并晕眩此目标，最多3.5秒，晕眩时间取决于飞行距离。同时对该英雄附近的敌人造成一半伤害并减速50%，持续3秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60040",
    "championName": "迦娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/janna",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60040.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_janna/skins/base/images/jade_janna_splash_centered_0.project_jade.jpg",
    "classicSplashName": "风暴之怒",
    "abilities": [
      {
        "key": "P",
        "name": "顺风而行",
        "description": "迦娜和友方英雄的移动速度提升3%。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_tailwind.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "飓风呼啸",
        "description": "迦娜改变气压和温度，在目标区域召唤小型风暴，对沿途的所有单位造成伤害和击飞效果。召唤风暴时，迦娜可以再次使用此技能来立刻施放风暴，造成的伤害取决于蓄力时间的长短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_howlinggale.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "90 / 105 / 120 / 135 / 150",
        "range": "1075",
        "numericDetail": "迦娜聚集一股强力的旋风，在释放后会对其经过路线上的所有敌人造成60/85/110/135/160(+35%法术强度)魔法伤害，并将他们击飞。每充能一秒（最多可充能3秒），旋风就能飘得更远，造成15/20/25/30/35(+10%法术强度)点额外伤害，并将敌人击飞得更高。\n\n再次激活此技能，就能早点将旋风放出去。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "和风守护",
        "description": "迦娜召唤出一个空气元素灵体，被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，对一个敌人造成伤害和减速效果。该技能冷却期间将失去被动效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_zephyr.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8",
        "cost": "40 / 50 / 60 / 70 / 80",
        "range": "-1",
        "numericDetail": "被动：提高迦娜 4/6/8/10/12%(+0%属性加成%) 的移动速度，并使她在移动时无视单位的碰撞体积。\n\n主动：迦娜将她的空气元素灵轰在目标身上，对目标造成 60/115/170/225/280(+50%法术强度)点魔法伤害并使目标减速 24/28/32/36/40%(+0%属性加成%)，持续 3 秒。在技能冷却阶段，迦娜会失去和风守护的被动增益效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "风暴之眼",
        "description": "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_eyeofthestorm.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "800",
        "numericDetail": "迦娜为目标友军英雄或防御塔施放一个护盾，护盾最多可持续 5 秒。护盾最多可以吸收 80/120/160/200/240(+70%法术强度)点伤害，并能为目标提供 14/23/32/41/50(+10%法术强度) 的攻击力加成，直到它被破坏为止。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "复苏季风",
        "description": "迦娜召唤魔法风暴围绕自己，将敌人击退。唤出风暴后会刮起治愈之风，在持续时间内为附近的友军回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/janna_reapthewhirlwind.project_jade.png",
        "cooldown": "150 / 135 / 120 / 100",
        "cost": "100 / 150 / 200",
        "range": "725",
        "numericDetail": "迦娜召唤风之力，将敌人击退，并且每秒为周围的友军回复70/110/150(+35%法术强度)生命值，持续4秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60067",
    "championName": "薇恩",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/vayne",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60067.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_vayne/skins/base/images/jade_vayne_splash_centered_0.project_jade.jpg",
    "classicSplashName": "暗夜猎手",
    "abilities": [
      {
        "key": "P",
        "name": "暗夜猎手",
        "description": "薇恩毫不留情地猎杀世间邪恶。向附近敌方英雄移动时获得30移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_nighthunter.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "闪避突袭",
        "description": "薇恩翻滚到合适位置，为下次攻击做好准备。她的下次攻击造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_tumble.project_jade.png",
        "cooldown": "6 / 5 / 4 / 3 / 2",
        "cost": "30",
        "range": "300",
        "numericDetail": "薇恩翻滚一小段距离，在6秒内的下一次普通攻击会造成30% / 35% / 40% / 45% / 50%总攻击力额外物理伤害。\n\n额外伤害值等同于她总攻击力的30/35/40/45/50%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "圣银弩箭",
        "description": "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对单个目标进行第3次连续攻击或技能施放时，就会造成额外真实伤害，伤害值相当于一定百分比的目标最大生命值。(对野怪最多造成200伤害)",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_silveredbolts.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "750",
        "numericDetail": "对同一目标每攻击或施法2次，第3次攻击或施法就会造成20/30/40/50/60外加目标最大生命值4/5/6/7/8%的真实伤害。（对野怪最多造成200伤害）",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "恶魔审判",
        "description": "薇恩从背后拿出重弩，朝目标发射巨箭，对目标造成伤害并将其击退。如果在击退过程中撞上了地形，则目标被巨箭刺穿，受到额外伤害和晕眩效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_condemn.project_jade.png",
        "cooldown": "20 / 18 / 16 / 14 / 12",
        "cost": "90",
        "range": "550",
        "numericDetail": "薇恩发射巨箭，造成45/80/115/150/185(+50%额外攻击力)物理伤害并将敌人击退。\n\n如果目标被击退至墙上或者地形边缘，则会受到额外的45/80/115/150/185(+50%额外攻击力)物理伤害，并被晕眩1.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "终极时刻",
        "description": "薇恩准备进行史诗般的对决，她的攻击力得到提高，并能在闪避突袭之后进入隐形状态，且暗夜猎手(被动)生效时加速效果提高至3倍。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/vayne_inquisition.project_jade.png",
        "cooldown": "100 / 85 / 70",
        "cost": "80",
        "range": "1",
        "numericDetail": "薇恩获得25/40/55点额外攻击力，持续8/10/12秒。在此技能激活时，薇恩在进行闪避突袭的同时会让自己隐形1秒，并且暗夜猎手的加速效果提高至90。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60044",
    "championName": "塔里克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/taric",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60044.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_taric/skins/base/images/jade_taric_splash_centered_0.project_jade.jpg",
    "classicSplashName": "宝石骑士",
    "abilities": [
      {
        "key": "P",
        "name": "宝石工艺",
        "description": "塔里克喜欢在所有武器上镶嵌魔法宝石，使他的普通攻击根据他的最大法力值造成额外魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_gemcraft.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "神圣洗礼",
        "description": "塔里克召唤大地之力，治疗一名友军和自身。塔里克只为自身进行治疗时，治疗效果会变得更强。此外，塔里克的普通攻击会缩短神圣洗礼‌的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_imbue.project_jade.png",
        "cooldown": "20 / 19 / 18 / 17 / 16 / 15",
        "cost": "80 / 95 / 110 / 125 / 140 / 60",
        "range": "750",
        "numericDetail": "主动效果： 塔里克召唤大地能量同时治疗友军和自己 60/100/140/180/220(+30%法术强度)点生命值。若只有塔里克自己受到治疗，则效果提高 40%，回复 84/140/196/252/308(+42%法术强度)点生命值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "宝石护盾‌",
        "description": "塔里克受到坚韧光环的守护，提高自身及附近友方英雄的护甲。他可以选择粉碎环绕在身边的魔法石块，对附近敌人造成伤害并降低其护甲，同时自身在短时间内失去部分护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_shatter.project_jade.png",
        "cooldown": "10",
        "cost": "50",
        "range": "400",
        "numericDetail": "被动效果：塔里克的宝石会增加自己10/15/20/25/30护甲。此外，周围的友军英雄会获得12%护甲护甲（相当于塔里克12%的护甲）。\n\n主动效果：塔里克震碎他的护甲，对周围敌方造成40/80/120/160/200(+20%护甲)魔法伤害，并减少他们5/10/15/20/25(+0%属性加成)护甲，持续4秒。在该技能的冷却期间，塔里克会损失10/15/20/25/30护甲。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "炫光",
        "description": "塔里克从镶有宝石的护盾中射出一颗灿烂的棱彩光球，晕眩目标，并根据他与目标相隔的距离造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_dazzle.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "75",
        "range": "650",
        "numericDetail": "塔里克向目标敌军放射出一团炫目的光球，对其造成1.2/1.3/1.4/1.5/1.6秒的晕眩效果，以及40/70/100/130/160(+20%法术强度)点到80/140/200/260/320(+40%法术强度)点之间的魔法伤害。塔里克离目标越近，眩光的伤害就会越高。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "辉耀",
        "description": "塔里克挥锤猛砸地面，对附近的敌人造成伤害。在接下来的一段时间里，塔里克的宝石会释放能量，为自己和友军提供额外的攻击力和法术强度",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/taric_radiance.project_jade.png",
        "cooldown": "60",
        "cost": "100",
        "range": "400",
        "numericDetail": "塔里克将他的锤子砸进地面，来对附近的敌人造成150/250/350(+50%法术强度)点的魔法伤害。\n\n在随后的10秒里，他的宝石会散发出能量，为塔里克提供额外的30/50/70点攻击力和法术强度，并且他周围的友军享受此效果的一半。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60034",
    "championName": "艾尼维亚",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/anivia",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60034.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_anivia/skins/base/images/jade_anivia_splash_centered_0.project_jade.jpg",
    "classicSplashName": "冰晶凤凰",
    "abilities": [
      {
        "key": "P",
        "name": "寒霜涅槃",
        "description": "在濒临死亡的时候，艾尼维亚将会变成一枚凤凰蛋。如果凤凰蛋在6秒内没有被击破的话，艾尼维亚就会闪亮重生。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_rebirth.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "寒冰闪耀",
        "description": "艾尼维亚挥动翅膀聚集空气，制造一枚冰晶向目标区域施放，冰冻并伤害路径上的所有敌人。当冰晶爆裂时，它会晕眩并伤害一定范围内的所有敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_frigidorb.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "80 / 100 / 120 / 140 / 160 / 180",
        "range": "1075",
        "numericDetail": "一枚巨大的冰块飞向目标区域，对沿途的敌人们造成60/90/120/150/180(+50%法术强度)点魔法伤害以及冰冻效果，使他们的移动速度减少20%。\n\n在飞到范围的终点时，或艾尼维亚再次施放此技能时，冰块会爆炸，对小范围内的敌人造成60/90/120/150/180(+50%法术强度)点魔法伤害和1秒的晕眩效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "寒冰屏障",
        "description": "艾尼维亚利用空气中的湿气，召唤出一道不可穿越的冰之墙来阻挡所有移动。该墙持续很短一段时间后就会融化。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_crystallize.project_jade.png",
        "cooldown": "25",
        "cost": "70 / 90 / 110 / 130 / 150 / 170",
        "range": "1000",
        "numericDetail": "艾尼维亚召唤出一道宽400/500/600/700/800的无法通过的冰墙，来阻挡所有人的移动。冰墙会在融化前持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "霜寒刺骨",
        "description": "艾尼维亚扇动双翅，朝她的目标喷射出一股刺骨的强风，造成中等伤害。如果目标已被冰冻效果减速，则受到该技能双倍的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_deepfreeze.project_jade.png",
        "cooldown": "5",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "650",
        "numericDetail": "艾尼维亚用刺骨寒风轰击敌人，造成 55/85/115/145/175(+50%法术强度)魔法伤害。如果目标已被寒冰闪耀和冰川风暴所减速，那么该技能会对目标造成双倍伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "冰川风暴",
        "description": "艾尼维亚召唤出一朵夹杂着冰块和冰雹的雨云，对敌人造成伤害和减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/anivia_glacialstorm.project_jade.png",
        "cooldown": "6",
        "cost": "75",
        "range": "625",
        "numericDetail": "激活：艾尼维亚在目标区域召唤出一阵夹杂着冰与雹的强雨，对范围内的敌人造成每秒80/120/160(+25%法术强度)点魔法伤害，并附带冰冻效果，减缓敌人20%的移动速度和攻击速度。\n\n每秒消耗40/50/60点法力。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60055",
    "championName": "卡特琳娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/katarina",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60055.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_katarina/skins/skin301/images/jade_katarina_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 卡特琳娜",
    "abilities": [
      {
        "key": "P",
        "name": "贪婪",
        "description": "击杀英雄或参与助攻可使她的技能冷却时间减少15秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_voracity2.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "弹射之刃",
        "description": "卡特琳娜投掷一把匕首，在敌人之间弹跳，造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_bouncingblade.project_jade.png",
        "cooldown": "10 / 9.5 / 9 / 8.5 / 8 / 7",
        "cost": "0",
        "range": "675",
        "numericDetail": "卡特琳娜投掷一把匕首，造成60/85/110/135/160(+45%法术强度)魔法伤害。匕首会弹射4个最近的敌人，每次弹射会减少10%的伤害。\n\n被击中的敌人会被标记4秒。卡特琳娜的普通攻击或者技能会消耗掉印记，造成15/30/45/60/75(+15%法术强度)点额外魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "不祥之刃",
        "description": "卡特琳娜将她的双刃环绕自身挥舞，从而对区域内的所有敌人造成魔法伤害。如果此技能命中了一个敌方英雄，那么卡特琳娜就会获得短时间内持续的爆发性移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_killerinstincts.project_jade.png",
        "cooldown": "4",
        "cost": "0",
        "range": "400",
        "numericDetail": "卡特琳娜让匕首旋转成圈，造成40/75/110/145/180(+60%额外攻击力)(+25%法术强度)魔法伤害。如果她命中了一名敌方英雄，则会获得15/20/25/30/35%移动速度加成，持续1秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "瞬步",
        "description": "卡特琳娜瞬间移动到目标位置，并在数秒内降低受到的敌方伤害。如果目标是敌人，则会造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_shunpo.project_jade.png",
        "cooldown": "12 / 10.5 / 9 / 7.5 / 6",
        "cost": "0",
        "range": "725",
        "numericDetail": "卡特琳娜移动到目标旁边。如果目标是敌人，则造成60/85/110/135/160(+40%法术强度)魔法伤害。\n\n在使用瞬步后，卡特琳娜所受的伤害会减少15%，持续1.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "死亡莲华",
        "description": "卡特琳娜化身刀刃风暴，以无可匹敌的速度向附近至多三名英雄投掷匕首。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/katarina_deathlotus.project_jade.png",
        "cooldown": "60 / 52.5 / 45",
        "cost": "0",
        "range": "550",
        "numericDetail": "卡特琳娜化身为一道剑刃飓风，以无与伦比的速度向周围最多三个敌方英雄投掷匕首，在2.5秒内持续造成共400/575/750(+375%额外攻击力)(+250%法术强度)魔法伤害。\n\n匕首会附带重伤效果，使目标所受的治疗效果减少50%，持续3秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60074",
    "championName": "黑默丁格",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/heimerdinger",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60074.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_heimerdinger/skins/skin301/images/jade_heimerdinger_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 黑默丁格",
    "abilities": [
      {
        "key": "P",
        "name": "科技魔法修复机器人",
        "description": "黑默丁格为周围的友军炮台、防御塔和英雄提供生命回复加成。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_techmaturgicalrepairbots.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "H-28G进化炮台",
        "description": "黑默丁格部署一座机枪炮台。随着该技能等级提升，炮台会获得新的能力。（炮台对防御塔仅造成一半伤害。）",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_h28gevolutionturret.project_jade.png",
        "cooldown": "1",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "350",
        "numericDetail": "黑默丁格在目标地点放置一座炮台。炮台会优先攻击黑默丁格的目标，以及正在攻击黑默丁格的敌人。炮台的生命值会随着黑默丁格的等级的提高而提高，并且在黑默丁格远离炮台时，炮台会进入休眠模式。黑默丁格每24/23/22/21/20秒生产一套炮台配置，并能同时持有1/1/2/2/3套配置。\n\nH-28G进化炮台属性\n生命值： 150/175/200/225/250/275/300/325/350/375/400/425/450/475/500/525/550/575\n攻击—加农炮：每次攻击造成15/22/29/36/42(+12.5%法术强度)魔法伤害。\n攻击—激光：每过12/12/12/12/12秒，对一条线上的敌人造成50/75/100/125/150(+50%法术强度)魔法伤害。\n炮台的放置数量上限：3",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "海克斯科技微型导弹",
        "description": "黑默丁格发射数枚长程导弹，瞄准离黑默丁格最近的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_hextechmicrorockets.project_jade.png",
        "cooldown": "10",
        "cost": "65 / 85 / 105 / 125 / 145 / 90",
        "range": "1100",
        "numericDetail": "黑默丁格以鼠标悬停处为焦点，呈扇形发射5枚导弹。每枚导弹造成60/90/120/150/180(+45%法术强度)魔法伤害。敌方单位可以被1枚以上的导弹命中，但额外导弹的伤害值会降低：\n\n英雄和野怪：12/18/24/30/36(+12%法术强度)魔法伤害，最多受到108/162/216/270/324(+93%法术强度)魔法伤害。\n小兵：基础伤害值的60%。\n\n焦点越靠近黑默丁格，导弹就会越分散。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "CH-1震荡手雷",
        "description": "黑默丁格朝一个位置掷出一颗手雷，对敌方单位造成伤害，并对直接命中的敌人造成晕眩效果，对附近单位造成致盲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_ch1concussiongrenade.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "920",
        "numericDetail": "黑默丁格向目标区域投掷震荡手雷，对爆炸范围内的所有敌方单位造成60/100/140/180/220 (+60%法术强度)魔法伤害和35%减速效果，减速持续2秒。位于爆炸区域中心的敌人还会被晕眩1.25秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "升级！！！",
        "description": "被动/主动：被动提升冷却缩减。激活后为所有已激活的进化炮台回复生命值，并让它们在短时间内发射能降低目标移动速度的冰霜射击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/heimerdinger_upgrade.project_jade.png",
        "cooldown": "120 / 105 / 90 / 75 / 60 / 45",
        "cost": "90",
        "range": "1",
        "numericDetail": "让下一次基础技能免费施放，并提供强化效果。再次激活就可取消。\n\nH-28Q尖端炮台：放置一座炮台，它的加农炮可以造成90/110/130(+33%法术强度)魔法伤害，并且它的激光枪可以造成225/300/375(+80%法术强度)魔法伤害，持续8秒。它拥有溅射伤害，免疫控制效果，它的攻击可以使目标减速25%，并且它不会算在炮台限制里。\n\n海克斯导弹集群：发射4波导弹，每波导弹造成135/180/225(+45% / 45% / 45%法术强度)魔法伤害。被多发导弹命中的英雄和野怪所受的伤害会降低，所受的最大伤害值为500/690/865(+183%法术强度)。\n\nCH-3X闪电手雷：发射一颗能够弹跳3次的手雷，造成150/200/250(+60%法术强度)魔法伤害。晕眩和减速的范围都得到提升，且减速效果增强至80%。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60059",
    "championName": "嘉文四世",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/jarvan-iv",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60059.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_jarvaniv/skins/base/images/jade_jarvaniv_splash_centered_0.project_jade.jpg",
    "classicSplashName": "德玛西亚皇子",
    "abilities": [
      {
        "key": "P",
        "name": "战争律动",
        "description": "嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_martialcadence.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "巨龙撞击",
        "description": "嘉文四世的长矛穿透敌人，对它途经的所有敌人造成物理伤害和护甲击碎效果。此外，该技能还会将嘉文四世引向德邦军旗，并击飞他途经的所有敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_dragonstrike.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "45 / 50 / 55 / 60 / 65 / 70",
        "range": "770",
        "numericDetail": "用嘉文四世的长矛穿透敌人，造成70/115/160/205/250(+110.0%额外攻击力)物理伤害，减少路径上所有敌人10/14/18/22/26%的护甲，持续3秒。\n\n如果该技能指向德邦军旗，则嘉文四世会被引向军旗，并击飞沿途的所有敌人。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "黄金圣盾",
        "description": "嘉文四世召唤古德玛西亚列王保护自己，提供护盾吸收伤害并减速附近敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_goldenaegis.project_jade.png",
        "cooldown": "20 / 18 / 16 / 14 / 12",
        "cost": "45 / 50 / 55 / 60 / 65",
        "range": "500",
        "numericDetail": "暂时获得一个拥有50/90/130/170/210（+20/30/40/50/60x周围敌方英雄数）点生命值的护盾，持续5秒，同时减缓周围敌人15/20/25/30/35%的速度，持续2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "德邦军旗",
        "description": "嘉文四世携带着德玛西亚的骄傲，能被动地给予他额外的攻击速度和护甲。激活德邦军旗会使嘉文四世放置一面德玛西亚军旗，在军旗的着陆点造成魔法伤害，并强化军旗附近的队友们的攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_demacianstandard.project_jade.png",
        "cooldown": "13",
        "cost": "55",
        "range": "860",
        "numericDetail": "被动：获得10/13/16/19/22%攻击速度加成和10/13/16/19/22护甲。\n\n主动：投掷一柄德邦军旗，对敌人造成60/105/150/195/240(+80%法术强度)魔法伤害，并使附近友军获得被动效果同样数值的攻速，持续8秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "天崩地裂",
        "description": "嘉文四世勇猛地跃向目标敌方英雄，对其造成物理伤害，并在敌人周围形成环形障碍，持续数秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/jarvaniv_cataclysm.project_jade.png",
        "cooldown": "120 / 105 / 90 / 8 / 5",
        "cost": "100 / 125 / 150 / 100",
        "range": "650 / 700",
        "numericDetail": "勇猛地跃向敌人，造成200/325/450(+150%额外攻击力)物理伤害，并在目标周围形成环形障碍，持续3.5秒。\n\n再次激活，将使障碍倒塌。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60086",
    "championName": "盖伦",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/garen",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60086.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_garen/skins/skin301/images/jade_garen_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 盖伦",
    "abilities": [
      {
        "key": "P",
        "name": "坚韧",
        "description": "如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_perseverance.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "致命打击",
        "description": "盖伦的移动速度获得爆发性提升，同时移除身上的所有减速效果。他的下次攻击将打击敌人的要害部位，造成额外伤害并将目标沉默。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_decisivestrike.project_jade.png",
        "cooldown": "8",
        "cost": "0",
        "range": "300",
        "numericDetail": "盖伦移除身上的所有减速效果，并获得35%移动速度加成，持续1.5/2.25/3/3.75/4.5秒。\n\n在接下来的4.5秒内，他的下次普通攻击会造成30/55/80/105/130(+140%总攻击力)物理伤害，并沉默目标1.5/1.75/2/2.25/2.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "勇气",
        "description": "盖伦用他的大剑表演死亡之舞，在持续期间内对周围的敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_commandingpresence.project_jade.png",
        "cooldown": "24 / 23 / 22 / 21 / 20 / 12",
        "cost": "0",
        "range": null,
        "numericDetail": "被动：盖伦的额外护甲和魔法抗性（来自符文、天赋和装备）提高20%。\n\n主动：盖伦获得一个持续2/3/4/5/6秒的防御护盾，减少即将到来的30%的伤害，并获得30%控制效果减免。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "审判",
        "description": "盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_keepingthepeace.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9 / 6",
        "cost": "0",
        "range": "325",
        "numericDetail": "盖伦快速地旋舞大剑，每秒对周围敌方造成 20/45/70/95/120 加上他总攻击力的70/80/90/100/110%(+（数值未在旧版接口公开）)的物理伤害，持续 3 秒。盖伦在旋转时会无视单位的碰撞体积，但在直接越过单位时，移动速度会减慢 20%。\n\n审判可以暴击，并造成额外伤害。\n审判对小兵的伤害会减少25%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "德玛西亚正义",
        "description": "盖伦召唤德玛西亚之力，试图处决一名敌方英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/garen_justice.project_jade.png",
        "cooldown": "160 / 120 / 80 / 120",
        "cost": "0",
        "range": "400",
        "numericDetail": "盖伦召唤德玛西亚之力，试图斩杀一名敌方英雄，目标损失的生命越多，则此技能造成的伤害越高。造成175/350/525魔法伤害，敌人每失去3.5/3/2.5生命值就会多承受1伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60025",
    "championName": "莫甘娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/morgana",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60025.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_morgana/skins/skin301/images/jade_morgana_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 莫甘娜",
    "abilities": [
      {
        "key": "P",
        "name": "灵魂吸取",
        "description": "莫甘娜拥有法术吸血效果，在技能造成伤害时回复自身生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_empathize.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "暗之禁锢",
        "description": "莫甘娜放出一个黑暗魔法球。击中一个敌方目标后，魔法球将造成魔法伤害，并将该目标暂时定在原地。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_darkbinding.project_jade.png",
        "cooldown": "11",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "1175",
        "numericDetail": "向目标区域射出一枚充满暗黑能量的飞弹，将第一个碰到的敌人束缚2/2.25/2.5/2.75/3秒，造成 80/135/190/245/300(+90%法术强度)点魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "痛苦腐蚀",
        "description": "莫甘娜诅咒一大片区域，对区域内的敌人持续造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_tormentedsoil.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 85 / 100 / 115 / 130 / 120",
        "range": "900",
        "numericDetail": "诅咒一块区域，持续5秒。区域内的敌人每秒都将受到24/38/52/66/80(+22%法术强度)到36/57/78/99/120 (+33%法术强度)魔法伤害，这个伤害取决于敌人已损失的生命值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "黑暗之盾",
        "description": "为友方英雄施放保护盾，吸收魔法伤害并阻挡限制效果，直到护盾被击穿或消失。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_blackshield.project_jade.png",
        "cooldown": "23 / 21 / 19 / 17 / 15 / 16",
        "cost": "50",
        "range": "750",
        "numericDetail": "为友军英雄施放保护盾，持续5秒。保护盾会吸收95/160/225/290/355(+70%法术强度)魔法伤害，并在护盾被打破前阻挡限制技能。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "灵魂镣铐",
        "description": "用能量拴住附近的敌方英雄，对其造成初始伤害和减速效果；一段时间后，仍然留在莫甘娜身边的敌人会再次受到伤害和晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/morgana_purgatory.project_jade.png",
        "cooldown": "120 / 110 / 100 / 10",
        "cost": "100",
        "range": "625",
        "numericDetail": "Dark chains latch onto nearby enemy Champions dealing 175/250/325 (+70%法术强度) magic damage and slowing them by 20% for 3 seconds. After 3 seconds, they are dealt an additional 175/250/325 (+70%法术强度) magic damage and are stunned for 1.5 seconds.\n\nEnemy Champions can break the chains by moving away from Morgana.",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60035",
    "championName": "萨科",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/shaco",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60035.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_shaco/skins/base/images/jade_shaco_splash_centered_0.project_jade.jpg",
    "classicSplashName": "恶魔小丑",
    "abilities": [
      {
        "key": "P",
        "name": "背刺",
        "description": "萨科从背后打击一名敌人时造成20%额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_carefulstrikes.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "欺诈魔术",
        "description": "萨科进入隐形状态并传送到目标位置。他的下一次攻击必定暴击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_maniacalcloak2.project_jade.png",
        "cooldown": "11",
        "cost": "90 / 80 / 70 / 60 / 50 / 40",
        "range": "400",
        "numericDetail": "萨科立即进入持续3.5秒的隐形状态，并传送到目标区域。\n\n在接下来的六秒内，他的下一次普通攻击将必定暴击，造成140/160/180/200/220%的伤害（常规的暴击会造成200%的伤害）。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "惊吓魔盒",
        "description": "萨科在目标位置放置一个会动的惊吓魔盒。魔盒以隐形状态埋伏，在有敌人靠近时恐惧附近的敌方单位，并发动攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_deathward.project_jade.png",
        "cooldown": "16",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "425",
        "numericDetail": "萨科在目标区域制造一个惊吓魔盒，它会在2秒后进入隐形状态，并在敌人经过时弹出来，对周围的敌人造成0.5/0.75/1/1.25/1.5秒的恐惧效果并且攻击他们。\n\n它的攻击造成35/50/65/80/95(+20%法术强度)点的魔法伤害，潜行状态下可持续60秒。攻击状态下可持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "双面毒刃",
        "description": "萨科的毒刃会在攻击时被动施加毒药，使目标减速，并降低小兵的命中率。他还可以掷出毒刃，对目标造成伤害并施加毒药效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_incrediblyprecise.project_jade.png",
        "cooldown": "8",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "625",
        "numericDetail": "被动：当双面毒刃准备就绪时，萨科的普通攻击会减慢目标10/15/20/25/30%的移动速度，持续2秒，也会减少小兵20/22.5/25/27.5/30%的命中率，持续2秒。\n\n主动：对目标敌人造成50/90/130/170/210(+100%额外攻击力)(+100%法术强度)点魔法伤害，并减少目标10/15/20/25/30%的移动速度，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "幻像",
        "description": "萨科在身边制造一个分身，攻击附近的敌人。分身会在阵亡时爆炸，对附近敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/shaco_hallucinogenbomb.project_jade.png",
        "cooldown": "100 / 90 / 80 / 10",
        "cost": "100 / 75",
        "range": "200",
        "numericDetail": "萨科制造一个自己的幻像，幻像最多可持续18秒。幻像拥有本体75%的攻击（对防御塔造成一半伤害），承受50%额外伤害。\n\n幻像在死亡时会爆炸，对周围的敌人造成300/450/600(+100%法术强度)魔法伤害。\n\n你可以通过按住ALT键不放，然后点击鼠标右键的方式，或者重新激活此技能的方式来控制镜像。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60063",
    "championName": "布兰德",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/brand",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60063.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_brand/skins/base/images/jade_brand_splash_centered_0.project_jade.jpg",
    "classicSplashName": "复仇焰魂",
    "abilities": [
      {
        "key": "P",
        "name": "炽热之焰",
        "description": "布兰德的技能会对目标施加烈焰焚身效果，在4秒内持续造成共8%目标最大生命值的魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandblaze.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "火焰烙印",
        "description": "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有烈焰焚身效果，则火焰烙印将使目标晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandsear.project_jade.png",
        "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
        "cost": "50",
        "range": "1050",
        "numericDetail": "布兰德向前方扔出火球，造成80/120/160/200/240(+65%法术强度)魔法伤害。\n\n炽热之焰：如果目标已被点燃，火焰烙印会晕眩敌人2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "烈焰之柱",
        "description": "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，对范围内的敌方单位造成魔法伤害。带有烈焰焚身效果的单位会受到额外伤害",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandpillarofflame.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 75 / 80 / 85 / 90",
        "range": "900",
        "numericDetail": "在短暂延迟后，布兰德朝目标区域释放烈焰之柱，对该区域内的敌方单位造成75/120/165/210/255(+60%法术强度)魔法伤害。\n\n炽热之焰：被点燃的单位受到额外25%的伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "烈火燃烧",
        "description": "布兰德在目标身上引发一阵强力爆裂，对其造成魔法伤害。如果目标带有烈焰焚身效果，则烈火燃烧还会扩散至目标附近的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandconflagration.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "625",
        "numericDetail": "布兰德引爆目标，对其造成70/105/140/175/210(+55.0%法术强度)魔法伤害。\n\n炽热之焰：如果目标已被点燃，烈火燃烧将会扩散到附近敌人并造成伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "烈焰风暴",
        "description": "布兰德释放一颗破坏力极强的火焰之种，每次弹跳时造成魔法伤害。如果目标带有烈焰焚身效果，则烈焰风暴的下一次弹跳会优先选择该英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/brandpyroclasm.project_jade.png",
        "cooldown": "105 / 90 / 75",
        "cost": "100",
        "range": "750",
        "numericDetail": "布兰德释放烈焰风暴，在敌方单位间弹射（优先反弹英雄）。每次弹射造成150/250/350(+50%法术强度)魔法伤害。\n\n炽热之焰：如果有目标已被点燃，那么烈焰风暴的下一次弹射将会优先将敌方英雄作为目标。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60028",
    "championName": "伊芙琳",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/evelynn",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60028.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_evelynn/skins/base/images/jade_evelynn_splash_centered_0.project_jade.jpg",
    "classicSplashName": "寡妇制造者",
    "abilities": [
      {
        "key": "P",
        "name": "暗影迷踪",
        "description": "脱离战斗后，伊芙琳会进入伪装状态，只会被附近的敌方英雄或真实视野看见。在潜行状态下，她会快速回复法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_shadowwalk.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "憎恨之刺",
        "description": "伊芙琳发射一列尖刺穿过敌人，对沿途的所有敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_onlyhelltopay.project_jade.png",
        "cooldown": "1.5",
        "cost": "16 / 22 / 28 / 34 / 40 / 46",
        "range": "525",
        "numericDetail": "伊芙琳发射一列憎恨之刺来穿过一名附近的敌人，对沿途的所有敌人造成40/60/80/100/120(+45%法术强度)(+40%额外攻击力)魔法伤害。\n\n憎恨之刺会优先以伊芙琳正在攻击的敌人为目标。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "暗潮汹涌",
        "description": "伊芙琳的技能命中敌方英雄时，被动提升她的移动速度。主动施放后，伊芙琳会解除自身受到的减速效果，并在短时间内大幅提升移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_readytobetray.project_jade.png",
        "cooldown": "15",
        "cost": "0",
        "range": null,
        "numericDetail": "被动效果：伊芙琳的技能在命中敌方英雄时，会为她提供4/8/12/16/20移动速度，持续3秒。（效果最多可叠加4次。）\n\n主动效果：伊芙琳移除身上的所有减速效果，并获得30/40/50/60/70%的移动速度加成，持续3秒。\n\n完成击杀和助攻会刷新暗黑狂暴的冷却时间。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "狂袭",
        "description": "伊芙琳连续她的斩击目标两次，每一次都会造成伤害。随后，她会在短时间内获得额外攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_ravage.project_jade.png",
        "cooldown": "9",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "range": "225",
        "numericDetail": "伊芙琳猛击一个目标2次，每一击都会造成35/55/75/95/115(+50%法术强度)(+40%额外攻击力)魔法伤害。随后，伊芙琳会获得60/75/90/105/120%的攻击速度加成，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "痛苦之拥",
        "description": "伊芙琳从地下召唤尖刺，对区域内的敌人造成伤害并施加减速效果。随后，她会根据命中的敌方英雄数量获得护盾。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/evelynn_agonysembrace.project_jade.png",
        "cooldown": "150 / 120 / 90 / 60 / 30",
        "cost": "100",
        "range": "650",
        "numericDetail": "伊芙琳刺穿目标区域的所有敌人，造成相当于他们当前生命值的15/20/25(+1%法术强度)%的魔法伤害，并减少他们30/50/70%的移动速度，减速效果持续2秒。\n\n伊芙琳会汲取他们的痛苦，每击中一名英雄，就会获得一个150/225/300点生命值的护盾，最多可持续6秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60099",
    "championName": "拉克丝",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/lux",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60099.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lux/skins/base/images/jade_lux_splash_centered_0.project_jade.jpg",
    "classicSplashName": "光辉女郎",
    "abilities": [
      {
        "key": "P",
        "name": "光芒四射",
        "description": "拉克丝的伤害类技能会将能量注入敌人，持续6秒。拉克丝的下一次攻击将会点燃这股能量，对目标造成额外魔法伤害（基于拉克丝的等级）。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxilluminatingfraulein.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "光之束缚",
        "description": "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxcrashingblitz2.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11",
        "cost": "50 / 60 / 70 / 80 / 90",
        "range": "1175",
        "numericDetail": "朝目标地点发射一团光球，束缚并伤害最多2个敌方单位。第一个目标将受到60/110/160/210/260(+70%法术强度)魔法伤害，并被束缚2秒。第二个目标会受到50%的效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "曲光屏障",
        "description": "拉克丝掷出她的魔杖，被触及的友方单位会被光芒缠绕，保护其免受敌方伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxprismawrap.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "60",
        "range": "1150",
        "numericDetail": "朝目标区域掷出拉克丝的魔杖并收回来，来保护她自己以及被魔杖触及的所有友方英雄免受80/105/130/155/180(+35%法术强度)伤害，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "透光奇点",
        "description": "向指定区域释放一道不规则的扭曲之光，减速附近的敌人。拉克丝可随后将其引爆，对范围内敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxlightstrikekugel.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 85 / 100 / 115 / 130",
        "range": "1000",
        "numericDetail": "创建一个区域，使其中的敌方单位减速20/24/28/32/36%。在5秒后，该区域会爆炸，对区域内的敌人造成60/105/150/195/240(+60%法术强度)点魔法伤害。\n\n再次激活此技能可以提前引爆该区域。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "终极闪光",
        "description": "短暂蓄力后，拉克丝发射一束光能射线，对射线内的所有目标造成伤害。此外，该技能会触发拉克丝的被动技能，并刷新光芒四射减益效果的持续时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/luxfinalefunkeln.project_jade.png",
        "cooldown": "80 / 65 / 50",
        "cost": "100",
        "range": "3340",
        "numericDetail": "拉克丝引导一束耀目的光能射线，对一条直线上的所有敌人造成300/400/500(+75%法术强度)魔法伤害。终极闪光还会引燃并刷新目标身上的光芒四射效果。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60041",
    "championName": "普朗克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/gangplank",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60041.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_gangplank/skins/skin301/images/jade_gangplank_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 2009 普朗克",
    "abilities": [
      {
        "key": "P",
        "name": "浸酒之刃",
        "description": "普朗克的攻击会施加中毒效果，每秒造成魔法伤害，伤害会随等级提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_grogsoakedblade.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "枪火谈判",
        "description": "普朗克用手枪瞄准并射击一个敌方单位。如果枪火谈判击杀了目标，则普朗克获得额外金币，并返还一半法力消耗。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_parley.project_jade.png",
        "cooldown": "5",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "range": "625",
        "numericDetail": "用手枪瞄准敌人发出猛烈一击，造成20/45/70/95/120(+100%总攻击力)物理伤害。若杀死目标则获得4/5/6/7/8额外金钱并返还一半的法力消耗。\n\n此技能可以附加暴击或其他攻击特效。\n\n已掠夺的金钱总额：0%属性加成",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "坏血病疗法",
        "description": "普朗克吃掉大量柑橘类水果，解除自身所有控制效果并回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_removescurvy.project_jade.png",
        "cooldown": "22 / 21 / 20 / 19 / 18",
        "cost": "65",
        "range": "20",
        "numericDetail": "吃下大量柑橘水果，清除所有限制技能效果并回复 80/150/220/290/360(+100%法术强度)生命值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "鼓舞士气",
        "description": "普朗克朝空中鸣枪，为附近友方英雄提升攻击力和移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_raisemorale.project_jade.png",
        "cooldown": "20",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "1200",
        "numericDetail": "被动：普朗克的攻击力提升8/10/12/14/16，移动速度提升3/4/5/6/7%。\n\n主动：普朗克朝空中开枪，移除被动效果，但增加自己12/19/26/33/40攻击力和8/11/14/17/20%移动速度。增加周围友军英雄上述值一半的攻击力和移动速度，持续7秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "加农炮幕",
        "description": "普朗克命令战舰对目标区域进行持续7秒的炮击，对敌人造成减速，并在区域内随机位置造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gangplank_cannonbarrage.project_jade.png",
        "cooldown": "120 / 115 / 110 / 120",
        "cost": "100",
        "range": "20000",
        "numericDetail": "召唤海盗船炮击目标区域7秒，在此期间对区域内敌人减速25%。加农炮雨点般散落该区域，每发炮弹造成75/120/165(+20%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60001",
    "championName": "安妮",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/annie",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60001.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/skins/base/images/jade_annie_splash_centered_0.project_jade.jpg",
    "classicSplashName": "黑暗之女",
    "abilities": [
      {
        "key": "P",
        "name": "嗜火",
        "description": "在施放4个技能后，安妮的下一次伤害类技能会对目标造成持续1.75秒的晕眩效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_passive.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "碎裂之火",
        "description": "安妮掷出一颗注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_q.project_jade.png",
        "cooldown": "4",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "range": "625",
        "numericDetail": "造成85/125/165/205/245(+70%法术强度)魔法伤害。如果目标死于碎裂之火，则返还法力值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "焚烧",
        "description": "安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_w.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "600",
        "numericDetail": "向锥形区域施放一道烈焰，对区域内的所有敌人造成80/130/180/230/280(+75%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "熔岩护盾",
        "description": "提升安妮的护甲和魔法抗性，并对使用普通攻击命中安妮的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_e.project_jade.png",
        "cooldown": "10",
        "cost": "20",
        "range": "800",
        "numericDetail": "护甲和魔法抗性提升20/30/40/50/60，持续5秒。对安妮进行普通攻击的敌人会受到20/30/40/50/60(+20%法术强度)点魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "提伯斯之怒",
        "description": "安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_annie/hud/icons2d/jade_annie_r1.project_jade.png",
        "cooldown": "120",
        "cost": "100",
        "range": "600",
        "numericDetail": "提伯斯出现在一道怒焰之中，对目标区域内的敌人造成200/325/450(+70%法术强度)魔法伤害。\n\n在接下来的45秒里，提伯斯会追赶敌人，并且每秒会对身边的敌人造成35(+20%法术强度)魔法伤害。\n\n你可以通过按住ALT键不放，然后点击鼠标右键的方式，或者重新激活此技能的方式来控制提伯斯。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60079",
    "championName": "古拉加斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/gragas",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60079.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_gragas/skins/base/images/jade_gragas_splash_centered_0.project_jade.jpg",
    "classicSplashName": "酒桶",
    "abilities": [
      {
        "key": "P",
        "name": "欢乐时光",
        "description": "古拉加斯每次使用技能后都会喝一小杯，从而回复些许生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragaspassiveheal.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "滚动酒桶",
        "description": "古拉加斯投掷一个酒桶，它会在短暂延迟后爆炸，从而对敌人造成伤害和攻速减缓效果。再次施放可提前引爆该酒桶。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasbarrelroll.project_jade.png",
        "cooldown": "11.5 / 10.5 / 9.5 / 8.5 / 7.5 / 6.5",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1100",
        "numericDetail": "古拉加斯将酒桶滚到目标地点，可以主动引爆或在到达目标地点5秒后自行爆炸，造成85/135/185/235/285(+90%法术强度)魔法伤害，并将他们的攻速减少20/25/30/35/40%，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "醉酒狂暴",
        "description": "古拉加斯畅饮他的佳酿，从而回复法力值。随后他获得持续数秒的攻击力和伤害减免。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasdrunkenrage.project_jade.png",
        "cooldown": "25",
        "cost": "0",
        "range": "20",
        "numericDetail": "古拉加斯痛饮烈酒，需引导1秒。他在引导时会获得30/45/60/75/90法力值，并在完成引导后得到强化。烈酒刺激下的古拉加斯攻击力提升30/40/50/60/70，并减少受到的伤害10/12/14/16/18%，持续20秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "肉弹冲击",
        "description": "古拉加斯向前冲锋，从而撞击碰到的第一个敌人，对附近敌人们造成伤害和减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasbodyslam.project_jade.png",
        "cooldown": "7",
        "cost": "75",
        "range": "600",
        "numericDetail": "古拉加斯向前冲，与他碰到的第一个敌方单位相撞，对该区域内的敌人造成80/120/160/200/240(+66%总攻击力)(+50%法术强度)魔法伤害，并使他们减少35%的速度，持续2.5秒。\n\n当古拉加斯用肉弹冲击撞到敌方单位时，这个技能的冷却时间会减少50%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "爆破酒桶",
        "description": "古拉加斯猛抛他的酒桶，从而造成伤害并将敌人们从爆炸中心击退。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/gragasexplosivecask.project_jade.png",
        "cooldown": "100 / 90 / 80 / 70",
        "cost": "100 / 125 / 150 / 100",
        "range": "1000",
        "numericDetail": "古拉加斯向目标区域投掷他的酒桶。落地后，给所有它撞到的敌人造成200/325/450(+100%法术强度)点魔法伤害，并且击退他们。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60004",
    "championName": "崔斯特",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/twisted-fate",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60004.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_twistedfate/skins/base/images/jade_twistedfate_splash_centered_0.project_jade.jpg",
    "classicSplashName": "卡牌大师",
    "abilities": [
      {
        "key": "P",
        "name": "灌铅骰子",
        "description": "崔斯特与友军每次击杀可额外获得2金币。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_sealfate.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "万能牌",
        "description": "崔斯特扔出三张卡牌，卡牌会对它们途经的每个敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_powercard.project_jade.png",
        "cooldown": "6",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "10000",
        "numericDetail": "扔出三张卡牌，对它们沿途的敌人造成60/110/160/210/260(+65%法术强度)点魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "选牌",
        "description": "崔斯特挑选一张魔法卡牌，并用在他的下次攻击，从而造成额外效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_fatesgambit.project_jade.png",
        "cooldown": "6",
        "cost": "40 / 55 / 70 / 85 / 100 / 75",
        "range": "200",
        "numericDetail": "点击技能开始洗牌，再次点击选择一张牌，选牌后下次攻击附加卡牌特效。\n蓝色卡牌对目标造成40/60/80/100/120(+100%总攻击力)(+40%法术强度)魔法伤害，并回复50/75/100/125/150法力值。\n红色卡牌对目标及目标周围的敌方单位造成30/45/60/75/90(+100%总攻击力)(+40%法术强度)魔法伤害并减速30/35/40/45/50%，持续2.5秒。\n金色卡牌对目标造成15/22.5/30/37.5/45(+100%总攻击力)(+40%法术强度)魔法伤害并晕眩目标，持续1/1.25/1.5/1.75/2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "传送之门",
        "description": "引导结束后，崔斯特传送至任意目标位置。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twistedfate_premonition.project_jade.png",
        "cooldown": "120 / 105 / 90 / 75 / 60",
        "cost": "80",
        "range": "20000",
        "numericDetail": "被动：每4次攻击，崔斯特造成额外的55/80/105/130/155(+40%法术强度)魔法伤害。\n\n此外，他的攻击速度增加10/15/20/25/30%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "命运",
        "description": "崔斯特为敌人算卜命运，短时间内显示所有敌方英雄的位置并使其减速。在此期间，传送之门的引导时间也会缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/destiny_temp.project_jade.png",
        "cooldown": "130 / 110 / 90",
        "cost": "150",
        "range": "20000",
        "numericDetail": "显示地图上所有敌方英雄（包括潜行状态下）的位置，持续6/8/10秒。\n\n当命运技能被激活，再次使用该技能可以在引导1.5秒后将崔斯特传送到5500码以内的任何地方。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60076",
    "championName": "奈德丽",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/nidalee",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60076.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_nidalee/skins/skin301/images/jade_nidalee_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 奈德丽",
    "abilities": [
      {
        "key": "P",
        "name": "寻觅",
        "description": "穿越草丛时，奈德丽的移动速度提升15%，持续2秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_ontheprowl.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "标枪投掷/推倒",
        "description": "人类形态下，奈德丽向她的目标投掷标枪，标枪会随着飞行距离造成额外伤害。美洲狮形态下，她的下一次攻击会试图对目标造成致命伤害，目标的生命值越低，造成的伤害越大。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_javelinthrow.project_jade.png",
        "cooldown": "6",
        "cost": "50 / 60 / 70 / 80 / 90 / 75",
        "range": "1500",
        "numericDetail": "人类形态：奈德丽投掷她的标枪，撞击目标造成 55/95/140/185/230(+65%法术强度)点魔法伤害。如果标枪投掷的行驶距离超过了奈德丽的攻击距离，那么标枪的伤害就会增长，在最远距离处的伤害可达137/237/350/462/575(+162.5%法术强度)魔法伤害（最小伤害值的250%）。\n\n美洲狮形态：奈德丽下次攻击将产生额外伤害，她的敌人生命值越低，造成伤害越大。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "丛林伏击/猛扑",
        "description": "人类形态下，奈德丽为粗心大意的对手布置一个伤害陷阱，敌人触发后会被其显形，并在12秒内降低护甲和魔法抗性。美洲狮形态下，奈德丽向前跃击，在落地时造成少量伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_bushwhack.project_jade.png",
        "cooldown": "18",
        "cost": "60 / 75 / 90 / 105 / 120 / 55",
        "range": "900",
        "numericDetail": "人类形态：奈德丽放置一个陷阱，能够在2秒的持续时间里给不幸踩中陷阱的目标造成总共80/125/170/215/260(+40%法术强度)点魔法伤害，并将目标暴露，减低其20/25/30/35/40%的护甲和魔法抗性，持续8秒。陷阱最多持续4分钟。\n\n美洲狮形态：奈德丽向前突进，落地时对周围的敌人造成魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "野性奔腾/挥击",
        "description": "人类形态下，奈德丽引导美洲狮的灵魂治疗友方单位，并且短暂提升其攻击速度。美洲狮形态下，她对面前的敌人们发动快速爪击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_primalsurge.project_jade.png",
        "cooldown": "10",
        "cost": "60 / 80 / 100 / 120 / 140 / 75",
        "range": "900",
        "numericDetail": "人类形态：奈德丽治疗友方英雄50/85/120/155/190(+70%法术强度)点生命值，并提升他们20/30/40/50/60%攻击速度，持续7秒。\n\n美洲狮形态：奈德丽挥击她面前的敌人。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "美洲狮形态",
        "description": "奈德丽转变成美洲狮形态，获得全新技能并提高移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nidalee_aspectofthecougar.project_jade.png",
        "cooldown": "4",
        "cost": "0",
        "range": "20",
        "numericDetail": "人类形态：奈德丽变身为一只狂野的美洲狮，增加20点移动速度，并且她的基础技能将会变为推倒，猛扑和挥击。\n\n美洲狮形态：奈德丽变回人类形态。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60002",
    "championName": "奥拉夫",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/olaf",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60002.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_olaf/skins/base/images/jade_olaf_splash_centered_0.project_jade.jpg",
    "classicSplashName": "狂战士",
    "abilities": [
      {
        "key": "P",
        "name": "狂战之怒",
        "description": "奥拉夫的攻击速度会随着他的生命值减少而提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olaf_passive.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "逆流",
        "description": "奥拉夫将一柄战斧投至目标区域，对它途经的单位们造成伤害，并降低其移动速度。如果奥拉夫捡起该战斧，则该技能冷却时间会缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafaxethrow.project_jade.png",
        "cooldown": "8",
        "cost": "55 / 60 / 65 / 70 / 75",
        "range": "1000",
        "numericDetail": "奥拉夫朝目标区域扔出一柄战斧，对战斧穿过的敌人造成70/115/160/205/250(+100%额外攻击力)物理伤害，并减少他们35/40/45/50/55%的速度，最多持续2.5秒。斧子飞行的距离越远，减速效果的持续时间越长，但持续时间不会短于1.5秒。\n\n如果奥拉夫将斧头捡起，那么该技能的冷却将减少4.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "残暴打击",
        "description": "奥拉夫基于自身的生命值提升攻击力，且生命偷取和法术吸血提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafviciousstrikes.project_jade.png",
        "cooldown": "16",
        "cost": "40 / 45 / 50 / 55 / 60",
        "range": "700",
        "numericDetail": "在6秒的持续时间内，奥拉夫获得9/12/15/18/21%生命偷取，并且攻击速度会提升40/50/60/70/80%。\n\n在技能持续期间，奥拉夫每损失2.5%生命值，就会获得1%的治疗效果加成。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "鲁莽挥击",
        "description": "奥拉夫以破釜沉舟之势发动进攻，对目标和自身造成真实伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafrecklessswing.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "0",
        "range": "325",
        "numericDetail": "奥拉夫狂野地挥舞他的双斧，对他的目标造成70/115/160/205/250(+40%总攻击力)真实伤害。这个技能的消耗相当于此技能所造成伤害的30%，但如果此技能将目标击杀，则会返还一半的施法消耗。\n\n普通攻击会减少鲁莽挥击1秒冷却时间。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "诸神黄昏",
        "description": "奥拉夫暂时免疫控制技能，且获得额外护甲、魔法抗性和穿甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/olafragnarok.project_jade.png",
        "cooldown": "100",
        "cost": "100 / 75 / 50",
        "range": "400",
        "numericDetail": "被动：奥拉夫获得10/20/30护甲和10/20/30魔法抗性。\n\n主动：奥拉夫移除身上的所有控制效果，并在6秒的持续时间里免疫任何限制技能。在技能持续期间里，奥拉夫会损失此技能被动部分的抗性加成，并获得40/60/80攻击力。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60027",
    "championName": "辛吉德",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/singed",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60027.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_singed/skins/base/images/jade_singed_splash_centered_0.project_jade.jpg",
    "classicSplashName": "炼金术士",
    "abilities": [
      {
        "key": "P",
        "name": "强化壁垒",
        "description": "辛吉德每拥有100法力值， 生命值 提升25。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_empoweredbulwark.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "剧毒踪迹",
        "description": "辛吉德在身后留下剧毒踪迹，对经过踪迹的敌人造成持续伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_acidspray.project_jade.png",
        "cooldown": null,
        "cost": "13",
        "range": "20",
        "numericDetail": "激活：辛吉德在身后留下剧毒踪迹，对经过上面的敌人造成每秒22/34/46/58/70(+30%法术强度)的魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "强力粘胶",
        "description": "将一瓶强力粘合剂扔到地上，对走过的敌人造成减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chemman_megaadhesive.project_jade.png",
        "cooldown": "14",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "1000",
        "numericDetail": "在地上留下一个黏着的区域，持续5秒，减速区域中的敌人35/45/55/65/75%（离开后持续1秒）。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "过肩摔",
        "description": "对目标敌方单位造成伤害，并将其投掷到辛吉德身后的空中。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_fling.project_jade.png",
        "cooldown": "10",
        "cost": "100 / 110 / 120 / 130 / 140 / 150",
        "range": "125",
        "numericDetail": "辛吉德将一名敌人投掷到自己身后，造成80/125/170/215/260(+75%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "疯狂药剂",
        "description": "辛吉德喝下精心炮制的化学药剂，大幅提高战斗属性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/singed_chemicalrage.project_jade.png",
        "cooldown": "100",
        "cost": "150",
        "range": "20",
        "numericDetail": "辛吉德喝下化学药剂，增加35/50/65法术强度、护甲、魔法抗性、移动速度、生命回复和法力回复，持续25秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60013",
    "championName": "瑞兹",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ryze",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60013.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_ryze/skins/skin301/images/jade_ryze_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 瑞兹",
    "abilities": [
      {
        "key": "P",
        "name": "奥术专精",
        "description": "瑞兹的技能会减少其他所有技能的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_spellstrike.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "超负荷",
        "description": "被动 ：瑞兹永久获得冷却缩减。 主动 ：瑞兹释放一个能量法球，对目标造成 魔法伤害 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_overload.project_jade.png",
        "cooldown": "3.5",
        "cost": "60",
        "range": "600",
        "numericDetail": "主动：造成60/85/110/135/160(+40%法术强度)加上瑞兹6.5%的最大法力值(+6.5%法力值)的魔法伤害。\n\n被动：获得2/4/6/8/10%冷却缩减。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "符文禁锢",
        "description": "瑞兹用魔法控制一名敌人，将其 禁锢 并造成 魔法伤害 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_poweroverwhelming.project_jade.png",
        "cooldown": "14",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "615",
        "numericDetail": "将敌人禁锢0.75/1/1.25/1.5/1.75秒，并造成60/95/130/165/200(+60%法术强度)加上瑞兹4.5%的最大法力值(+4.5%法力值)的魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "法术涌动",
        "description": "瑞兹发射一道混乱魔法能量，可在敌人之间弹跳，造成 魔法伤害 并降低其 魔法抗性 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_lightningflux.project_jade.png",
        "cooldown": "14",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "615",
        "numericDetail": "释放一个法球，在敌人或自己之间弹跳，最多弹跳5次。\n\n每次弹跳造成50/70/90/110/130(+35%法术强度)加上瑞兹1%(+1%法力值)的最大法力值的魔法伤害，并减少目标12/15/18/21/24魔法抗性，减抗效果持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "绝望之力",
        "description": "瑞兹暂时释放全部力量，短时间内使所有技能获得 范围伤害 、 法术吸血 和 移动速度 提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ryze_desperatepower.project_jade.png",
        "cooldown": "70 / 60 / 50 / 40 / 30 / 20",
        "cost": "0",
        "range": "3000",
        "numericDetail": "瑞兹引导无边的奥术能量，增加15/20/25%法术吸血，80的移动速度，并使他的法术产生50%的范围伤害，持续5/6/7秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60018",
    "championName": "崔丝塔娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/tristana",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60018.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_tristana/skins/skin301/images/jade_tristana_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 崔丝塔娜",
    "abilities": [
      {
        "key": "P",
        "name": "瞄准",
        "description": "崔丝塔娜的攻击距离随等级提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_drawabead.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "急速射击",
        "description": "崔丝塔娜迅速开火，短时间内提升攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_headshot.project_jade.png",
        "cooldown": "20",
        "cost": "50",
        "range": "20",
        "numericDetail": "提升崔丝塔娜攻击速度 30/45/60/75/90% 持续7秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "火箭跳跃",
        "description": "崔丝塔娜朝地面开火，将自己弹射至目标区位置，落地时造成伤害并减速周围敌人，持续3秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_rendingshot.project_jade.png",
        "cooldown": "22 / 20 / 18 / 16 / 14",
        "cost": "80",
        "range": "900",
        "numericDetail": "崔丝塔娜朝地面开火，跳跃至目标区域，落地造成70/115/160/205/250(+80%法术强度)魔法伤害并减速附近敌人60%，持续2.5秒。\n击杀或助攻后刷新火箭跳跃。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "爆炸射击",
        "description": "崔丝塔娜击杀一个单位时，她的炮弹会爆炸成弹片，对周围敌人造成伤害。可主动施放，对目标单位造成持续伤害，并减少其受到的治疗效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_explosiveshot.project_jade.png",
        "cooldown": "16",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "550",
        "numericDetail": "被动：当敌人被崔丝塔娜击杀时会爆炸，对附近敌人造成50/75/100/125/150(+25%法术强度)魔法伤害。\n\n主动：爆炸射击撕裂目标，在5秒内减少目标50%治疗和生命回复，并持续造成一共110/150/190/230/270(+100%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "毁灭射击",
        "description": "崔丝塔娜装填一颗巨型炮弹，朝敌方单位发射。造成魔法伤害并将目标击退。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tristana_bustershot.project_jade.png",
        "cooldown": "60",
        "cost": "100",
        "range": "550",
        "numericDetail": "崔丝塔娜装填巨型加农炮弹攻击目标单位，造成 300/400/500(+150%法术强度)魔法伤害并将目标及目标周围的单位击退 600/800/1000 距离。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60023",
    "championName": "泰达米尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/tryndamere",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60023.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_tryndamere/skins/base/images/jade_tryndamere_splash_centered_0.project_jade.jpg",
    "classicSplashName": "蛮族之王",
    "abilities": [
      {
        "key": "P",
        "name": "战斗狂怒",
        "description": "泰达米尔获得额外的暴击几率，这个加成基于他的已损失生命值而提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_fury.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "嗜血杀戮",
        "description": "泰达米尔对战斗极度饥渴，在击杀敌人和造成暴击时可获得怒气，怒气可提高其攻击力和暴击伤害。他可施放“嗜血杀戮”来消耗怒气并治疗自己。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_bloodlust.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "0",
        "range": "400",
        "numericDetail": "被动：泰达米尔嗜血成性，获得5/10/15/20/25攻击力，每损失1%生命值额外增加0.15/0.2/0.25/0.3/0.35攻击力。\n\n主动：泰达米尔消耗怒气，回复30/40/50/60/70(+30%法术强度)生命值，每1点怒气额外回复0.5/0.95/1.4/1.85/2.3(+120%法术强度)生命值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "蔑视",
        "description": "泰达米尔嘲讽附近的英雄，讥笑他们的懦弱，从而降低他们的攻击力。那些转身逃离泰达米尔的的敌人还会被减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/48thslave_pacify.project_jade.png",
        "cooldown": "14",
        "cost": "0",
        "range": "800",
        "numericDetail": "减少身边敌方英雄20/35/50/65/80的攻击力，持续4秒，转身逃跑的敌人会被减速30/37.5/45/52.5/60%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "旋风斩",
        "description": "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_slash.project_jade.png",
        "cooldown": "8",
        "cost": "0",
        "range": "650",
        "numericDetail": "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成70/100/130/160/190(+120%额外攻击力)(+100%法术强度)物理伤害。\n\n每当泰达米尔打出暴击时，旋风斩的冷却时间就会减少1秒。这个效果在攻击英雄时翻倍。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "不灭怒火",
        "description": "泰达米尔对战斗的渴望极其强盛，承受再多的伤害也不会阵亡。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/tryndamere_endlessrage.project_jade.png",
        "cooldown": "110 / 100 / 90 / 80 / 70 / 60",
        "cost": "0",
        "range": "400",
        "numericDetail": "泰达米尔在5秒内对死亡免疫，生命值最低为1，并瞬间获得50/75/100怒气。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60009",
    "championName": "费德提克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/fiddlesticks",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60009.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_fiddlesticks/skins/base/images/jade_fiddlesticks_splash_centered_0.project_jade.jpg",
    "classicSplashName": "末日使者",
    "abilities": [
      {
        "key": "P",
        "name": "恐惧降临",
        "description": "附近敌人的魔法抗性降低。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_paranoia.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "恐惧",
        "description": "恐惧目标，让目标陷入惊慌，在一定时间内逃离费德提克。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_terrify.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11 / 10",
        "cost": "65 / 75 / 85 / 95 / 105 / 115",
        "range": "575",
        "numericDetail": "恐惧目标1.25/1.5/1.75/2/2.25秒，使其只能在恐惧中漫无目的逃命。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "吸取",
        "description": "费德提克偷取敌人的生命能量，造成持续伤害同时治疗自己。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_conjurescarecrow.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "650",
        "numericDetail": "每秒对目标单位造成60/90/120/150/180(+45%法术强度)魔法伤害，并且该技能所造成的伤害值的60/65/70/75/80%会转化为费德提克的生命值。\n最多持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "黑暗之风",
        "description": "一阵黑暗之风袭向目标敌人，并在附近敌人之间弹射，对命中的敌人造成伤害并施加沉默效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_darkwind.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11 / 10",
        "cost": "50 / 70 / 90 / 110 / 130 / 150",
        "range": "750",
        "numericDetail": "召唤乌鸦袭击目标，然后弹射附近敌人，每次弹射造成65/85/105/125/145(+45%法术强度)魔法伤害和1.2秒沉默效果。\n\n最多弹射5次，可以多次弹射同一个目标。对小兵和野怪会造成50%额外伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "群鸦风暴",
        "description": "群鸦盘旋于费德提克身边，每秒对范围内的所有敌方单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/fiddlesticks_crowstorm.project_jade.png",
        "cooldown": "150 / 140 / 130",
        "cost": "150 / 200 / 250",
        "range": "800",
        "numericDetail": "吟唱1.5秒后将费德提克传送到目标位置，并召唤一群乌鸦聚集到费德提克身边5秒，对范围内敌人每秒造成125/225/325(+45%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60012",
    "championName": "阿利斯塔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/alistar",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60012.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_alistar/skins/base/images/jade_alistar_splash_centered_0.project_jade.jpg",
    "classicSplashName": "牛头酋长",
    "abilities": [
      {
        "key": "P",
        "name": "践踏",
        "description": "每当阿利斯塔施放技能时，都会践踏周围单位和防御塔数秒，对他经过的单位造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_colossalstrength.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "大地粉碎",
        "description": "阿利斯塔锤击地面，对附近所有敌人造成魔法伤害并将其击飞。落地时，敌人会被晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_pulverize.project_jade.png",
        "cooldown": "17 / 16 / 15 / 14 / 13 / 12",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "365",
        "numericDetail": "阿利斯塔锤击地面，造成60/105/150/195/240(+50%法术强度)魔法伤害并将目标抛向空中，晕眩目标1.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "野蛮冲撞",
        "description": "阿利斯塔冲撞目标，对其造成伤害和击退效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_headbutt.project_jade.png",
        "cooldown": "14 / 13 / 12 / 11 / 10",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "650",
        "numericDetail": "阿利斯塔向一名敌人发出冲锋，用角将其撞退，造成55/110/165/220/275(+70%法术强度)魔法伤害，并在击退目标时晕眩他们。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "凯旋怒吼",
        "description": "阿利斯塔发出战吼，为自己和附近友军回复生命值。附近有敌方单位阵亡时可减少冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_triumphantroar.project_jade.png",
        "cooldown": "12",
        "cost": "40 / 50 / 60 / 70 / 80 / 90",
        "range": "575",
        "numericDetail": "回复自己60/90/120/150/180(+20%法术强度)生命值，并回复附近友军的生命值，但回复效果减半。附近每个敌方单位死亡都会减少2秒冷却时间。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "坚定意志",
        "description": "阿利斯塔发出野性的咆哮，获得额外的攻击力，并移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/alistar_ferocioushowl.project_jade.png",
        "cooldown": "120 / 100 / 80 / 120",
        "cost": "100",
        "range": "1",
        "numericDetail": "阿利斯塔增加60/75/90物理攻击，移除身上所有的控制效果，受到的物理和魔法伤害减少50/60/70%，持续7秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60033",
    "championName": "拉莫斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/rammus",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60033.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_rammus/skins/base/images/jade_rammus_splash_centered_0.project_jade.jpg",
    "classicSplashName": "披甲龙龟",
    "abilities": [
      {
        "key": "P",
        "name": "锥刺甲壳",
        "description": "拉莫斯外壳强化后获得额外伤害，将自身25%护甲转化为攻击力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_scavengearmor.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "动力冲刺",
        "description": "拉莫斯缩成球状，加速冲向敌人，对冲击的目标造成伤害和减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_powerball.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "300",
        "numericDetail": "拉莫斯在 7 秒内缩成球状冲击目标，对附近敌人造成 100/150/200/250/300(+100%法术强度)点魔法伤害，并减少他们 20/25/30/35/40% 的移动速度，持续 3 秒。\n\n激活尖刺防御将会移除该效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "尖刺防御",
        "description": "拉莫斯进入防御状态，大幅提升护甲和魔法抗性，并反弹攻击者造成的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_shellbash.project_jade.png",
        "cooldown": "14",
        "cost": "40",
        "range": "300",
        "numericDetail": "拉莫斯进入防御状态，持续 6 秒，提高 40/60/80/100/120 护甲和魔法抗性并向攻击者反弹 15/25/35/45/55(+10%护甲)点的魔法伤害。\n\n这个技能会获得相当于 10% 护甲值的伤害。\n\n激活动力冲刺将会移除该效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "破甲嘲讽",
        "description": "拉莫斯嘲讽一名敌方英雄或野怪，强制目标鲁莽地攻击自己，并暂时降低其护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_scaledplating.project_jade.png",
        "cooldown": "12",
        "cost": "50 / 60 / 70 / 80 / 90",
        "range": "325",
        "numericDetail": "拉莫斯嘲讽一个敌方单位使其鲁莽的攻击。减低其护甲 10/15/20/25/30 并强制目标攻击自己，持续 1.25/1.5/1.75/2/2.25 秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "地动山摇",
        "description": "拉莫斯施放毁灭性的脉冲震荡波，对附近单位和建筑造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/rammus_recklesscharge.project_jade.png",
        "cooldown": "60",
        "cost": "120",
        "range": "25000",
        "numericDetail": "拉莫斯施放毁灭震荡波，每秒对附近的单位和建筑物造成 65/130/195(+30%法术强度)魔法伤害，持续 8 秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60062",
    "championName": "悟空",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/wukong",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60062.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_wukong/skins/base/images/jade_wukong_splash_centered_0.project_jade.jpg",
    "classicSplashName": "齐天大圣",
    "abilities": [
      {
        "key": "P",
        "name": "金刚不坏",
        "description": "孙悟空的护甲和魔法抗性会根据周围的敌方英雄数量而增加。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongstoneskin.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "粉碎打击",
        "description": "孙悟空的下次攻击提升距离，造成额外伤害，并降低敌人的护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongcrushingblow.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "40",
        "range": "250 / 275 / 300 / 325 / 350",
        "numericDetail": "孙悟空的下次攻击提升125距离，造成30/60/90/120/150(+110.0%总攻击力)物理伤害，并减少敌人30%护甲，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "真假猴王",
        "description": "孙悟空进入1.5秒的隐身状态。留下一具无法控制的分身，1.5秒后对其附近的敌人造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongdecoy.project_jade.png",
        "cooldown": "18 / 16 / 14 / 12 / 10 / 8",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "275",
        "numericDetail": "孙悟空进入隐形状态，持续1.5秒，留下一个无法控制的替身。1.5秒后替身会对敌人造成70/115/160/205/250(+60%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "腾云突击",
        "description": "孙悟空突进至一名目标敌人处，并变出最多2个分身，攻击附近目标。对每个击中的目标造成物理伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongnimbusstrike.project_jade.png",
        "cooldown": "8",
        "cost": "45 / 50 / 55 / 60 / 65",
        "range": "650",
        "numericDetail": "孙悟空冲向目标敌人，变出最多2个分身，攻击附近目标。对每个击中的目标造成60/105/150/195/240(+80%额外攻击力)物理伤害。击中目标后，孙悟空增加30/35/40/45/50%攻击速度，持续4秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "大闹天宫",
        "description": "孙悟空展开金箍棒，不停地旋转，对敌人造成伤害并将其击飞。在此期间，孙悟空的移动速度持续增加。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/wukongcyclone.project_jade.png",
        "cooldown": "120 / 105 / 90",
        "cost": "100",
        "range": "315",
        "numericDetail": "孙悟空伸展金箍棒，不断旋转，每秒对敌人造成20/110/200(+120%总攻击力)物理伤害并将其击飞。在此期间，孙悟空的速度不断增加，持续4秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60037",
    "championName": "娑娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/sona",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60037.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_sona/skins/base/images/jade_sona_splash_centered_0.project_jade.jpg",
    "classicSplashName": "琴瑟仙女",
    "abilities": [
      {
        "key": "P",
        "name": "能量和弦",
        "description": "施放3次技能后，娑娜的下一次攻击造成额外魔法伤害并降低她的目标在若干秒内造成的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_powerchordcharged.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "英勇赞美诗",
        "description": "娑娜演奏英勇赞美诗，为附近的友方英雄提供额外伤害和法术强度。此外，施放该技能会射出音波，对相距最近的两名敌方英雄或野怪造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_hymnofvalor.project_jade.png",
        "cooldown": "7",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "range": "825",
        "numericDetail": "持续光环：增加附近友方英雄4/8/12/16/20攻击力和法术强度。\n\n激活：对最近的两个敌人（英雄优先）造成50/100/150/200/250(+50%法术强度)魔法伤害。\n\n能量和弦 - 断奏：造成双倍伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "坚毅咏叹调",
        "description": "娑娜演奏坚毅咏叹调，为附近的友方英雄提供额外护甲和额外魔法抗性。此外，施放该技能会弹奏疗愈旋律，为娑娜和附近一位受伤的友军提供治疗。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_ariaofperseverance.project_jade.png",
        "cooldown": "7",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "range": "1000",
        "numericDetail": "持续光环：增加附近友军英雄6/7/8/9/10护甲和魔法抗性。\n\n激活：治疗自己和附近伤得最重的友方英雄40/55/70/85/100(+25%法术强度)点生命值，并提供额外的6/7/8/9/10护甲与魔法抗性加成，持续3秒。\n\n能量和弦 - 渐弱：减少目标20%的总伤害输出，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "迅捷奏鸣曲",
        "description": "娑娜弹奏迅捷奏鸣曲，为附近的友方英雄提供额外移动速度。此外，施放该技能可为附近的友军提供一次速度爆发。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_songofdiscord.project_jade.png",
        "cooldown": "7",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "range": "1000",
        "numericDetail": "持续光环：提升附近友方英雄4/8/12/16/20的移动速度。\n\n激活：提升附近友方英雄4/6/8/10/12%(+4%法术强度%)的移动速度，持续1.5秒。\n\n能量和弦 - 节奏：减缓目标40%(+4%法术强度%)的移动速度，持续2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "狂舞终乐章",
        "description": "娑娜弹奏终极和弦，迫使敌方英雄开始跳舞并对其造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sona_crescendo.project_jade.png",
        "cooldown": "170 / 150 / 130 / 110 / 90 / 70",
        "cost": "100",
        "range": "900",
        "numericDetail": "用不可抵抗的音符迫使敌方英雄跳舞1.5秒，并造成150/250/350(+50%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60054",
    "championName": "墨菲特",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/malphite",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60054.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_malphite/skins/base/images/jade_malphite_splash_centered_0.project_jade.jpg",
    "classicSplashName": "熔岩巨兽",
    "abilities": [
      {
        "key": "P",
        "name": "花岗岩护盾",
        "description": "墨菲特被岩石护盾保护，最多吸收10%最大生命值的伤害。若10秒内未受到攻击，这个护盾将重置。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_graniteshield.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "地震碎片",
        "description": "墨菲特使用原初元素魔法，发出一块大地碎片穿过敌人处的地面，在碰撞时造成伤害并且偷取移动速度4秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_seismicshard.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "625",
        "numericDetail": "墨菲特将一块岩石碎片从地下射向目标，造成70/120/170/220/270(+60%法术强度)魔法伤害，并偷取目标14/17/20/23/26%移动速度，持续4秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "野蛮打击",
        "description": "墨菲特开始以巨大力量进行挥击，攻击对前方的所有敌人造成伤害。激活【野蛮打击】会使墨菲特的护甲和攻击力会在短时间内大幅提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_brutalstrikes.project_jade.png",
        "cooldown": "14",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "400",
        "numericDetail": "被动：墨菲特的普通攻击对他目标附近的单位造成攻击力30/38/46/54/62%的伤害。\n\n主动：墨菲特的护甲和攻击力增加20/25/30/35/40%，持续6秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "大地震颤",
        "description": "墨菲特锤击地面，放射出冲击波对目标造成基础伤害，并根据墨菲特的护甲值附加额外伤害，同时暂时减低目标攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_groundslam.project_jade.png",
        "cooldown": "7",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "400",
        "numericDetail": "墨菲特锤击地面，对周围敌人造成 60/100/140/180/220(+30%护甲)(+20%法术强度)魔法伤害，同时减少目标 30/35/40/45/50% 的攻击速度，持续 3 秒。\n\n提高护甲可增加该技能的伤害，加成伤害为墨菲特护甲值的 30%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "势不可挡",
        "description": "墨菲特冲击目标区域，对所有敌人造成伤害和击飞。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malphite_unstoppableforce.project_jade.png",
        "cooldown": "130 / 115 / 100 / 80",
        "cost": "100",
        "range": "1000",
        "numericDetail": "墨菲特冲击目标区域，造成200/300/400(+100%法术强度)魔法伤害，并将所有敌人抛向空中1.5秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60075",
    "championName": "内瑟斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/nasus",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60075.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_nasus/skins/skin301/images/jade_nasus_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 内瑟斯",
    "abilities": [
      {
        "key": "P",
        "name": "吞噬灵魂",
        "description": "内瑟会从敌人身上吸取灵魂能量，从而获得额外生命偷取。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_souleater.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "汲魂痛击",
        "description": "内瑟斯打击他的敌人以造成伤害，并且如果敌人死于【汲魂痛击】，则永久增加下次【汲魂痛击】的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_siphoningstrike.project_jade.png",
        "cooldown": "8 / 7 / 6 / 5 / 4",
        "cost": "20",
        "range": "255",
        "numericDetail": "主动： 内瑟斯的下次攻击会造成30/50/70/90/110(+100%总攻击力)(+3)物理伤害。\n\n被动：如果敌方单位死于汲魂痛击，则永久增加汲魂痛击的伤害3点。这个加成会在对付英雄，大型小兵和大型野怪时翻倍。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "枯萎",
        "description": "内瑟斯使目标陷入衰老，持续减少其移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_wither.project_jade.png",
        "cooldown": "15 / 14 / 13 / 12 / 11",
        "cost": "80",
        "range": "700",
        "numericDetail": "内瑟斯使目标英雄衰老，持续5秒，立即减少其35%移动速度，在持续期间减速效果逐渐提升至47/59/71/83/95%。该目标被减少的攻击速度为该数值的一半。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "灵魂烈焰",
        "description": "内瑟斯在目标区域施放灵魂烈焰，对范围内敌人造成伤害并削弱其护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_spiritfire.project_jade.png",
        "cooldown": "12",
        "cost": "70 / 85 / 100 / 115 / 130 / 100",
        "range": "650",
        "numericDetail": "内瑟斯在目标区域施放灵魂烈焰，造成初始55/95/135/175/215(+60%法术强度)魔法伤害。\n\n接下来的5秒，削弱区域内敌人20/25/30/35/40护甲并每秒造成11/19/27/35/43(+12%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "死神降临",
        "description": "内瑟斯释放出强力的沙尘暴，席卷附近的敌人。风暴肆虐时，他会获得更高的生命值、攻击距离、施法距离，并汲取附近敌人的最大生命值，转化为持续时间内的额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/nasus_avatarofdeath.project_jade.png",
        "cooldown": "120",
        "cost": "100",
        "range": "400",
        "numericDetail": "沙漠风暴赐予内瑟斯力量，使他在15秒的持续时间内获得300/450/600生命值加成，并且攻击距离增加50，施法距离增加100。\n\n在风暴肆虐时，他每秒对周围目标造成3/4/5(+1%法术强度)%目标最大生命值的魔法伤害（每秒能造成的伤害上限为240）并将伤害转化为额外攻击力。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60032",
    "championName": "阿木木",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/amumu",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60032.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_amumu/skins/base/images/jade_amumu_splash_centered_0.project_jade.jpg",
    "classicSplashName": "殇之木乃伊",
    "abilities": [
      {
        "key": "P",
        "name": "诅咒之触",
        "description": "阿木木的攻击会削弱目标的魔法抗性，持续3秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_corpseexplosion.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "绷带牵引",
        "description": "阿木木向目标投掷粘稠的绷带，将自己拉向目标，并对目标造成伤害和眩晕效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_bandageflinger.project_jade.png",
        "cooldown": "16 / 14 / 12 / 10 / 8",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1100",
        "numericDetail": "向目标区域投掷粘稠的绷带，若击中敌人会将阿木木自己拉向目标，晕眩他们，造成80/130/180/230/280(+70%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "绝望光环",
        "description": "附近的敌人陷入绝望，每秒损失一定百分比的最大生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_auraofdespair.project_jade.png",
        "cooldown": "1",
        "cost": "8",
        "range": "300",
        "numericDetail": "激活：附近的敌人每秒将受到8/12/16/20/24点魔法伤害，并且每秒损失他们最大生命值的1.5/1.8/2.1/2.4/2.7(+1%法术强度)%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "阿木木的愤怒",
        "description": "永久减少阿木木所受的物理伤害。主动施放时，阿木木可以发泄他的怒火，对周围的敌人造成伤害。阿木木每被攻击一次，该技能的冷却时间就会缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_tantrum.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "35",
        "range": "350",
        "numericDetail": "被动：减少阿木木受到的物理伤害2/4/6/8/10。\n\n主动：阿木木对周围的单位造成75/100/125/150/175(+50%法术强度)魔法伤害。每次阿木木被攻击，该技能的冷却时间减少0.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "木乃伊之咒",
        "description": "阿木木用绷带将附近敌方单位通通缠住，对他们施加 诅咒 效果，并造成伤害和晕眩效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/dds/sadmummy_bandaidthingy.project_jade.png",
        "cooldown": "150 / 130 / 110",
        "cost": "100 / 150 / 200 / 80",
        "range": "550",
        "numericDetail": "阿木木用绷带将周围敌方单位通通缠住，造成 150/250/350(+80%法术强度)魔法伤害，并导致他们无法攻击或移动2秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60021",
    "championName": "厄运小姐",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/miss-fortune",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60021.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_missfortune/skins/base/images/jade_missfortune_splash_centered_0.project_jade.jpg",
    "classicSplashName": "赏金猎人",
    "abilities": [
      {
        "key": "P",
        "name": "大步流星",
        "description": "未受到攻击5秒后，厄运小姐额外获得 25移动速度 。该加成每秒提升9，最高可达70。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_strut.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "一箭双雕",
        "description": "厄运小姐向一名敌人发射一颗子弹，对该敌人及其身后的一个目标造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_doubleup.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "70 / 75 / 80 / 85 / 90 / 40",
        "range": "650",
        "numericDetail": "厄运小姐向敌方目标开枪，对目标造成25/60/95/130/165 (+75%总攻击力) 物理伤害，并对目标后面的另一名敌人造成120%的伤害，可触发攻击附带效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "黑枪射击",
        "description": "厄运小姐攻击同一目标时，每次命中造成的伤害会被动提升。该技能可激活，提升厄运小姐的攻击速度，并使她的攻击降低目标受到的治疗效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_impureshots.project_jade.png",
        "cooldown": "16",
        "cost": "50",
        "range": "600",
        "numericDetail": "被动：厄运小姐每次攻击对目标造成4/6/8/10/12(+5%法术强度)魔法伤害，对同一目标最多叠加5次。\n最大额外伤害：20/30/40/50/60(+25%法术强度)\n\n主动：厄运小姐的攻击速度增加30/35/40/45/50%，持续6秒，她的攻击会降低目标所受治疗及生命回复的50%，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "枪林弹雨",
        "description": "厄运小姐向目标区域释放一阵弹雨，对敌人造成数波伤害并减缓其移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_makeitrain.project_jade.png",
        "cooldown": "15",
        "cost": "80",
        "range": "800",
        "numericDetail": "厄运小姐朝空中发射出成百上千颗子弹，0.5秒后子弹如骤雨般击打到目的地，造成90/145/200/255/310(+80%法术强度)魔法伤害，持续2秒，减速击中敌人20/28/36/44/52%，持续1秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "弹幕时间",
        "description": "厄运小姐向面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/missfortune_bullettime.project_jade.png",
        "cooldown": "120 / 110 / 100 / 90 / 80 / 70",
        "cost": "100",
        "range": "25000",
        "numericDetail": "厄运小姐向前方锥形地带扫射出持续2秒的强力弹幕，每颗子弹造成65/95/125(+35%额外攻击力)(+20%法术强度)点物理伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60096",
    "championName": "克格莫",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/kog-maw",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60096.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_kogmaw/skins/base/images/jade_kogmaw_splash_centered_0.project_jade.jpg",
    "classicSplashName": "深渊巨口",
    "abilities": [
      {
        "key": "P",
        "name": "来自艾卡西亚的惊喜",
        "description": "阵亡后，克格莫的身体将启动连锁反应，并于4秒之后爆炸，对周围的敌人们造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_icathiansurprise.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "腐蚀唾液",
        "description": "被动：克格莫的攻击速度提升。 主动：克格莫发射一团腐蚀性物质，对目标造成魔法伤害，并腐蚀目标的护甲和魔法抗性，持续4秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_causticspittle.project_jade.png",
        "cooldown": "8",
        "cost": "60",
        "range": "625",
        "numericDetail": "被动：提高 10/15/20/25/30% 的攻击速度。\n\n主动：克格'莫抛射出一团腐蚀性的唾沫，造成60/110/160/210/260(+70%法术强度)魔法伤害，并减少目标 5/10/15/20/25 护甲和魔法抗性，持续 4 秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "生化弹幕",
        "description": "克格莫的攻击距离得到提升，并且能够对目标造成基于目标最大生命值的额外魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_bioarcanebarrage.project_jade.png",
        "cooldown": "17",
        "cost": "50",
        "range": "530",
        "numericDetail": "克格'莫的普通攻击增加 130/150/170/190/210 点射程，并附加相当于目标最大生命值 2/3/4/5/6%(+1%法术强度)%的额外魔法伤害（对野怪最多增加100点伤害），持续 8 秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "虚空淤泥",
        "description": "克格莫抛射出一团特殊的分泌物，对经过或停留在分泌物上的敌人造成伤害和减速效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_voidooze.project_jade.png",
        "cooldown": "12",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "1200",
        "numericDetail": "克格'莫喷射虚空淤泥，对穿过的敌人造成 60/110/160/210/260(+70%法术强度)魔法伤害。\n\n此外，淤泥上的敌人减速 20/28/36/44/52%，持续4秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "活体大炮",
        "description": "克格莫向远处发射一枚活体炮弹，对命中的目标造成伤害并将其显形。此外，在一段时间内连续施放活体大炮技能会消耗更多的法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kogmaw_livingartillery.project_jade.png",
        "cooldown": "2 / 1.5 / 1 / 2",
        "cost": "40",
        "range": "1400 / 1700 / 2000",
        "numericDetail": "克格'莫发射一枚射程极远的活体炮弹。在短暂的延迟后，炮弹将着陆，对命中的所有敌人造成 80/120/160(+50%额外攻击力)(+30%法术强度)魔法伤害，并将他们暴露4秒（对英雄造成 125% 的额外伤害）。\n\n在6秒内连续使用活体大炮的话，会消耗额外的 （数值未在旧版接口公开） 点法力值（最多额外消耗 400 点）。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60010",
    "championName": "凯尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/kayle",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60010.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_kayle/skins/skin302/images/jade_kayle_splash_centered_302.project_jade.jpg",
    "classicSplashName": "经典 2012 凯尔",
    "abilities": [
      {
        "key": "P",
        "name": "神圣狂热",
        "description": "凯尔获得相当于自身一定百分比法术强度的攻击力，并获得相当于自身一定百分比攻击力的法术强度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_eyeforaneye.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "清算",
        "description": "凯尔轰击目标，造成伤害，降低其移动速度，并施加一层圣焰。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_reckoning.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "range": "625",
        "numericDetail": "引爆一个目标，造成60/110/160/210/260(+100%额外攻击力)(+100%法术强度)魔法伤害，减少目标35/40/45/50/55%的移动速度，持续4秒，并施加一层圣焰效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "神圣祝福",
        "description": "凯尔祝福一名友军英雄，提升其移动速度并为其回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_angelicembrace.project_jade.png",
        "cooldown": "10",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "range": "700",
        "numericDetail": "祝福一名友军英雄，为目标恢复60/105/150/195/240(+35%法术强度)生命值，并让目标的移动速度提高18/21/24/27/30%，加速效果持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "正义之怒",
        "description": "凯尔的攻击距离提升，普通攻击会对目标及其附近的敌人造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_righteousfury.project_jade.png",
        "cooldown": "22 / 21 / 20 / 19 / 18 / 17",
        "cost": "65",
        "range": "400",
        "numericDetail": "凯尔将射程提高400，持续10秒，并且每次普通攻击会造成额外的20/30/40/50/60(+40%法术强度)魔法伤害。属于攻击特效。\n\n目标周围的敌人会受到20/30/40/50/60(+0%属性加成)(+40%法术强度) 魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "神圣庇护",
        "description": "让凯尔的目标沐浴在一道圣光之中，在短时间内免疫所有类型的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kayle_intervention.project_jade.png",
        "cooldown": "90 / 75 / 60",
        "cost": "100 / 75 / 50",
        "range": "1200",
        "numericDetail": "凯尔的目标沐浴在一道圣光之中，2/2.5/3秒内免疫所有类型的伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60026",
    "championName": "基兰",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/zilean",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60026.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_zilean/skins/base/images/jade_zilean_splash_centered_0.project_jade.jpg",
    "classicSplashName": "时光守护者",
    "abilities": [
      {
        "key": "P",
        "name": "强化学习",
        "description": "基兰和友军获得额外经验。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_slow.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "定时炸弹",
        "description": "基兰在目标身上放置一枚炸弹，它在到期后对附近的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_chronoblast.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 85 / 100 / 115 / 130 / 145",
        "range": "650",
        "numericDetail": "基兰在目标单位上安置一个时间炸弹，4秒后爆炸，对附近敌人造成90/145/200/260/320(+90%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "穿梭未来",
        "description": "基兰缩短自己其他技能的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_recall.project_jade.png",
        "cooldown": "18 / 15 / 12 / 9 / 6",
        "cost": "50",
        "range": "600",
        "numericDetail": "减少基兰其它的技能冷却时间10秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "时光发条",
        "description": "基兰提升友方英雄的移动速度或减速敌方英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_haste.project_jade.png",
        "cooldown": "20",
        "cost": "80",
        "range": "550",
        "numericDetail": "基兰提升友方英雄或减少敌方英雄的移动速度 55%，持续 2.5/3.25/4/4.75/5.5 秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "时光倒流",
        "description": "基兰对自己或友方英雄施放一个可提供保护的时间符文。若目标受到致命伤害，则将目标时光倒流并进行治疗。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/zilean_timetwister.project_jade.png",
        "cooldown": "180",
        "cost": "125 / 150 / 175",
        "range": "900",
        "numericDetail": "基兰对自己或友方英雄施放用于保护的时间符文，持续7秒。若目标受到致命伤害，则将目标时光倒流，并回复其600/850/1100(+200%法术强度)生命值。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60019",
    "championName": "沃里克",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/warwick",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60019.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_warwick/skins/base/images/jade_warwick_splash_centered_0.project_jade.jpg",
    "classicSplashName": "嗜血猎手",
    "abilities": [
      {
        "key": "P",
        "name": "血之饥渴",
        "description": "沃里克的每次攻击都会为他恢复生命值。每次对同一目标连续发起攻击都会提高生命偷取的数值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_innerhunger.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "嗜血攻击",
        "description": "沃里克撕咬一名敌方单位并恢复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_severarmor.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6 / 5",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "400",
        "numericDetail": "猛击敌人，造成75/125/175/225/275(+100%法术强度)和目标8/10/12/14/16%(+100%法术强度)最大生命值之间更大的魔法伤害（对怪物只能造成固定伤害），并治疗自己，治疗效果为他造成的伤害的80%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "猎手怒吼",
        "description": "沃里克发出一阵咆哮，使所有友方英雄的攻击速度在短时间内提高。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_frenziedstrikes.project_jade.png",
        "cooldown": "24 / 22 / 20 / 18 / 16",
        "cost": "35",
        "range": "1250",
        "numericDetail": "沃里克发出刺耳怒吼，增加自己40/50/60/70/80%的攻击速度，同时对附近友方英雄带来一半的加速效果，持续10秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "血迹追踪",
        "description": "沃里克能够被动感知周围虚弱的敌方英雄。鲜血的气味会使他陷入狂怒，获得惊人的移动速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_bloodscent.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "1500 / 2300 / 3100 / 3900 / 4700",
        "numericDetail": "激活：沃里克能够感知到附近1500/2300/3100/3900/4700范围内生命值低于50%的敌方英雄的行踪。发现虚弱英雄后，沃里克增加20/25/30/35/40%的移动速度。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "无尽束缚",
        "description": "沃里克扑向一名敌方英雄，在数秒内将其压制并造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/warwick_infiniteduress.project_jade.png",
        "cooldown": "90 / 80 / 70",
        "cost": "100 / 125 / 150 / 100",
        "range": "650",
        "numericDetail": "沃里克扑向敌方英雄，并将目标压制1.8秒。在此期间，沃里克会向目标发起5次攻击，并造成总共250/335/420(+200%额外攻击力)点魔法伤害（触发5次攻击特效）。\n\n沃里克在持续时间内获得30%额外的生命偷取。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60089",
    "championName": "蕾欧娜",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/leona",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60089.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_leona/skins/base/images/jade_leona_splash_centered_0.project_jade.jpg",
    "classicSplashName": "曙光女神",
    "abilities": [
      {
        "key": "P",
        "name": "日光",
        "description": "伤害类技能会在敌人身上施加持续3.5秒的日光效果。在此期间，当友方英雄对被标记的敌人造成伤害时，会消耗日光减益来使目标受到额外的魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonasunlight.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "破晓之盾",
        "description": "蕾欧娜用盾进行下次普通攻击，造成额外魔法伤害并晕眩目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonashieldofdaybreak.project_jade.png",
        "cooldown": "11 / 10 / 9 / 8 / 7",
        "cost": "45 / 50 / 55 / 60 / 65",
        "range": "100",
        "numericDetail": "下次普通攻击会造成额外40/70/100/130/160(+30%法术强度)魔法伤害，并晕眩目标1.25秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "日蚀",
        "description": "蕾欧娜举起盾牌，获得护甲和魔法抗性。第一段持续时间结束时，如果附近有敌人，则蕾欧娜对其造成魔法伤害，并延长此效果的持续时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonasolarbarrier.project_jade.png",
        "cooldown": "14",
        "cost": "60",
        "range": "450",
        "numericDetail": "获得额外的25/35/45/55/65(+（数值未在旧版接口公开）)护甲和25/35/45/55/65(+（数值未在旧版接口公开）)魔法抗性，持续3秒。当此效果结束时，周围被击中的敌人会受到60/110/160/210/260(+40%法术强度)魔法伤害，并且蕾欧娜会使她的额外护甲与魔法抗性延长3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "天顶之刃",
        "description": "蕾欧娜投掷一束日光，对直线上的所有敌人造成魔法伤害。当效果消失时，最后一个被命中的敌方英雄将被短暂定身，同时蕾欧娜会冲向该英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonazenithblade.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "60",
        "range": "875",
        "numericDetail": "对一条直线上的所有敌人造成60/100/140/180/220(+40%法术强度)魔法伤害。最后一个被命中的敌方英雄将会暂时被束缚，并且蕾欧娜将会冲向该英雄。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "日炎耀斑",
        "description": "蕾欧娜召唤一道太阳光束，对区域内的敌人造成伤害。区域中心的敌人会被晕眩，外围的敌人会被减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/leonasolarflare.project_jade.png",
        "cooldown": "90 / 75 / 60 / 90 / 150",
        "cost": "100 / 150 / 200",
        "range": "1200",
        "numericDetail": "召唤一道太阳光束，造成150/250/350(+80%法术强度)魔法伤害并减少敌人80%移动速度，持续1.5秒。处于区域正中的敌人会受到晕眩效果。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60072",
    "championName": "斯卡纳",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/skarner",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60072.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_skarner/skins/base/images/jade_skarner_rework_splash_centered_0.project_jade.jpg",
    "classicSplashName": "经典 斯卡纳",
    "abilities": [
      {
        "key": "P",
        "name": "水晶能量",
        "description": "普通攻击使所有技能的冷却时间缩短0.5秒。攻击英雄时将此效果翻倍。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerenergize.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "水晶横扫",
        "description": "斯卡纳用爪子猛击周围敌军，对附近所有敌人造成物理伤害。如果斯卡纳击中了一个目标，身上就会暂时充盈水晶能量。充盈水晶能量期间，斯卡纳的【水晶横扫】将造成额外魔法伤害，并减速所有命中的目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnervirulentslash.project_jade.png",
        "cooldown": "3.5",
        "cost": "20 / 22 / 24 / 26 / 28 / 30",
        "range": "325",
        "numericDetail": "斯卡纳对附近所有敌人造成25/40/55/70/85(+80%额外攻击力)物理伤害，若击中一个目标，则斯卡纳可自我充能5秒，持续5秒。\n\n当斯卡纳充能时，下次水晶横扫将造成额外24/36/48/60/72(+40%法术强度)魔法伤害，并使敌人减速20/25/30/35/40%，持续2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "水晶蝎甲",
        "description": "斯卡纳获得护盾，在护盾存在期间，他的移动速度和攻击速度提高。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerexoskeleton.project_jade.png",
        "cooldown": "18",
        "cost": "60",
        "range": "700",
        "numericDetail": "斯卡纳的护盾使其免受70/115/160/205/250(+60%法术强度)伤害，持续6秒。护盾存在时，斯卡纳会在3秒里持续获得30/35/40/45/50%攻击速度加成和15/17/19/21/23%移动速度加成。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "晶体破碎",
        "description": "斯卡纳召唤一股水晶能量，对命中的敌人造成伤害并将其标记。攻击敌人会消耗标记，为斯卡纳治疗生命值。直接击杀目标同样可触发该治疗效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerfracture.project_jade.png",
        "cooldown": "10",
        "cost": "50 / 55 / 60 / 65 / 70",
        "range": "800",
        "numericDetail": "斯卡纳召唤一道晶状能量的爆裂波，对命中的所有敌人造成80/120/160/200/240(+70%法术强度)魔法伤害，并将他们标记6秒。\n\n对敌人进行后续打击，会消耗掉这层印记来给斯卡纳回复30/45/60/75/90(+30%法术强度)生命值。将目标彻底击杀也会触发治疗效果。(每次后续的治疗效果将减少50%。)",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "晶状毒刺",
        "description": "斯卡纳压制一名敌方英雄并对其造成魔法伤害。在此期间，斯卡纳可以自由移动并拖拽目标。效果结束时，斯卡纳会对目标造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/skarnerimpale.project_jade.png",
        "cooldown": "130 / 120 / 110 / 100",
        "cost": "100 / 125 / 150",
        "range": "350",
        "numericDetail": "斯卡纳压制敌人1.75秒，并造成100/150/200(+50%法术强度)魔法伤害。在此期间，斯卡纳能自由移动并拖拽敌人。此效果结束后，斯卡纳的目标将会受到额外100/150/200(+50%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60030",
    "championName": "卡尔萨斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/karthus",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60030.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_karthus/skins/skin301/images/jade_karthus_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 卡尔萨斯",
    "abilities": [
      {
        "key": "P",
        "name": "死亡契约",
        "description": "在死亡时，卡尔萨斯会化为一个灵体，能够继续施放技能。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_defied.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "荒芜",
        "description": "卡尔萨斯在目标区域释放一次有延迟的爆炸魔法，对区域内的所有敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_laywaste.project_jade.png",
        "cooldown": "1",
        "cost": "20 / 26 / 32 / 38 / 44 / 50",
        "range": "875",
        "numericDetail": "卡尔萨斯在指定地点施放一个印记，0.5秒后对该区域敌人造成40/60/80/100/120(+30%法术强度)魔法伤害，若只有一个敌人受伤害则造成双倍伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "痛苦之墙",
        "description": "卡尔萨斯创造一道可通过的魔能之墙。所有穿过墙体的敌方单位都会被暂时降低移动速度和魔法抗性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_wallofpain.project_jade.png",
        "cooldown": "18",
        "cost": "100",
        "range": "1000",
        "numericDetail": "在目标地点制造一堵持续5秒的痛苦之墙。经过墙体的敌方英雄的魔法抗性会被减少15%，移动速度减少40/50/60/70/80%（在此期间他们的移动速度慢慢回复正常），持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "亵渎",
        "description": "卡尔萨斯被动地从他的猎物那里窃取法力，每杀死一个敌人就会获得法力。卡尔萨斯也可以转化这种力量，用猎物的灵魂环绕自身，对附近的敌人造成伤害，但会急速消耗他自己的法力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_defile.project_jade.png",
        "cooldown": "0.5",
        "cost": "30 / 42 / 54 / 66 / 78 / 90",
        "range": "550",
        "numericDetail": "关闭：卡尔萨斯杀死单位可以使他回复20/27/34/41/48法力值。\n\n开启：每秒消耗（数值未在旧版接口公开）法力值对周围敌人造成30/50/70/90/110(+20%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "挽歌",
        "description": "在引导3秒后，卡尔萨斯就会对所有敌方英雄造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/karthus_deathray.project_jade.png",
        "cooldown": "200 / 180 / 160 / 180 / 200",
        "cost": "150 / 175 / 200 / 100",
        "range": "10000",
        "numericDetail": "3秒吟唱之后，卡尔萨斯对所有敌方英雄造成250/400/550(+60%法术强度)魔法伤害(无视距离)。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60081",
    "championName": "伊泽瑞尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/ezreal",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60081.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_ezreal/skins/base/images/jade_ezreal_splash_centered_0.project_jade.jpg",
    "classicSplashName": "探险家",
    "abilities": [
      {
        "key": "P",
        "name": "咒能高涨",
        "description": "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_risingspellforce.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "秘术射击",
        "description": "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_mysticshot.project_jade.png",
        "cooldown": "6 / 5.5 / 5 / 4.5 / 4 / 3.5",
        "cost": "30 / 35 / 40 / 45 / 50 / 55",
        "range": "1150",
        "numericDetail": "伊泽瑞尔发射一枚能量弹，造成35/55/75/95/115(+100%总攻击力)(+20%法术强度)物理伤害（触发攻击附带效果）。\n\n如果它击中一个敌方单位，那么它将减少伊泽瑞尔所有技能1秒的冷却时间。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "精华跃动",
        "description": "伊泽瑞尔发射一道起伏的能量波，降低途经敌方英雄的攻击速度并对其造成魔法伤害，同时为途经友方英雄回复生命值并提升其攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_essenceflux.project_jade.png",
        "cooldown": "10",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1050",
        "numericDetail": "伊泽瑞尔发射一道能量波，对敌方英雄造成70/115/160/205/250(+80%法术强度)魔法伤害。这道能量波也能增加友方英雄20/25/30/35/40%的攻击速度，持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "奥术跃迁",
        "description": "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_arcaneshift.project_jade.png",
        "cooldown": "17 / 15 / 13 / 11 / 9 / 7",
        "cost": "90",
        "range": "475",
        "numericDetail": "伊泽瑞尔传送到临近的目标区域，并向最近的敌方单位发射自动追踪的魔法箭，造成75/125/175/225/275 (+75%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "精准弹幕",
        "description": "伊泽瑞尔引导1秒，发射一个强力的能量弹幕，弹幕将对它途经的每一个敌人造成魔法伤害。（每穿过一个单位，弹幕造成的伤害就会降低10%）。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ezreal_trueshotbarrage.project_jade.png",
        "cooldown": "100",
        "cost": "150",
        "range": "25000",
        "numericDetail": "伊泽瑞尔引导1秒后向目标区域释放能量波，对穿过的敌人造成350/500/650(+100%额外攻击力)(+90%法术强度)魔法伤害。然而，每穿透一个单位后递减10%。（最低造成30%伤害）。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60014",
    "championName": "赛恩",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/sion",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60014.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_sion/skins/skin301/images/jade_sion_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 赛恩",
    "abilities": [
      {
        "key": "P",
        "name": "硬化皮肤",
        "description": "赛恩每次受到攻击时，有40%几率无视最多30/40/50伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_feelnopain.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "秘密凝视",
        "description": "赛恩以恐怖目光震慑一名敌人，对其造成伤害和晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_crypticgaze.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "100",
        "range": "550",
        "numericDetail": "赛恩恐吓一个敌方单位，造成70/125/180/240/300(+90%法术强度)魔法伤害并晕眩1.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "死亡拥抱",
        "description": "赛恩生成一道可吸收伤害的护盾，保护自己。如果护盾在10秒内未被摧毁，则触发爆炸，对附近的敌人造成伤害。4秒后再次施放可手动引爆护盾。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_deathscaress.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "100",
        "numericDetail": "赛恩在自己身边唤出一层能够吸收100/150/200/250/300(+90%法术强度)点伤害的护罩。如果护罩没有被摧毁，那么10秒后它将会爆炸，并对周围的敌人造成100/150/200/250/300(+90%法术强度)点魔法伤害。\n\n施放技能4秒后再次施放可手动引爆护罩。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "暴怒",
        "description": "激活后，赛恩的攻击力提升，但每次普通攻击都会消耗生命值。此外，每当他击杀一名敌方单位时，还会永久提升最大生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_spiritrage.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": null,
        "numericDetail": "激活：赛恩的攻击力提高了25/35/45/55/65点，并且每杀死一个单位将会永久增加1/1.5/2/2.5/3点最大生命值。这个加成会在对付英雄，大型小兵和大型野怪时翻倍。\n\n已增加的生命值：+1/1.5/2/2.5/3",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "死灵狂暴",
        "description": "赛恩每次攻击都会吸取敌人的部分生命力，为自己和附近友军回复生命值。鲜肉的气息也会激发赛恩的狂热，提升他的攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sion_cannibalism.project_jade.png",
        "cooldown": "90",
        "cost": "100",
        "range": "100",
        "numericDetail": "赛恩增加50/75/100%的生命偷取和50%的攻击速度，持续20秒。此外，赛恩的基础攻击所造成伤害的25/37.5/50%将转化为对周围友军的治疗效果。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60029",
    "championName": "图奇",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/twitch",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60029.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_twitch/skins/base/images/jade_twitch_splash_centered_0.project_jade.jpg",
    "classicSplashName": "瘟疫之源",
    "abilities": [
      {
        "key": "P",
        "name": "致命印记",
        "description": "图奇的普通攻击会使目标感染，每秒造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_deadlyvenom_temp.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "隐秘伏击",
        "description": "图奇在短时间内隐身，隐身期间获得移动速度。脱离隐身状态时，图奇获得短时间内持续的攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_alterego.project_jade.png",
        "cooldown": "16",
        "cost": "60",
        "range": "20",
        "numericDetail": "在1.25秒后（如果正在受到伤害，那么进入隐形的时间最多会后延3秒），图奇会进入长达4/5/6/7/8秒的隐形状态。\n\n图奇在隐身时会获得20%的移动速度加成，并且在打破隐形状态后，图奇会获得30/40/50/60/70%的攻击速度加成，持续5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "剧毒之桶",
        "description": "图奇扔出一个会爆炸的毒性之桶，从而对区域内的敌人施加死亡毒液并造成减速效果。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_venomcask.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "50",
        "range": "950",
        "numericDetail": "图奇扔出一个毒性之桶来引爆一个区域，对范围内的敌人施加2层死亡毒液效果，并减少他们25/30/35/40/45%的移动速度，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "毁灭印记",
        "description": "附近所有敌人会将图奇的毒液从他们的身体中排出，每层可造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_expunge_old.project_jade.png",
        "cooldown": "12 / 11 / 10 / 9 / 8 / 7",
        "cost": "50 / 60 / 70 / 80 / 90 / 100",
        "range": "1200",
        "numericDetail": "对周围感染了死亡毒液的敌人造成20/35/50/65/80物理伤害，每层死亡毒液会增加15/20/25/30/35(+20%法术强度)(+25%额外攻击力)伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "火力全开",
        "description": "图奇闭上双眼扣下扳机，快速向前方射出强力贯穿弩箭。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/twitch_clone.project_jade.png",
        "cooldown": "120 / 110 / 100 / 90 / 80 / 70",
        "cost": "100 / 125 / 150 / 175 / 200 / 225",
        "range": "1200",
        "numericDetail": "在7秒的持续时间里，图奇会获得300点额外的攻击距离，20/28/36的攻击力，并且他的普通攻击附带穿刺效果，对后续的目标所造成的伤害减少20%，伤害下限为40%。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60011",
    "championName": "易",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/master-yi",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60011.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_masteryi/skins/skin301/images/jade_masteryi_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 易",
    "abilities": [
      {
        "key": "P",
        "name": "双重打击",
        "description": "易有时会连续攻击两次。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_doublestrike.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "阿尔法突袭",
        "description": "易以肉眼难以发觉的速度穿梭于战场，对沿途多个敌人造成物理伤害。【阿尔法突袭】可触发暴击，对小兵和野怪造成额外物理伤害。普通攻击可缩短阿尔法突袭的冷却时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_leapstrike.project_jade.png",
        "cooldown": "18 / 16 / 14 / 12 / 10 / 8",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "range": "600",
        "numericDetail": "易飞速穿越战场，对最多4个敌人各造成25/60/95/130/165(+100%总攻击力)物理伤害，并对小兵和野怪造成75/100/125/150/175额外伤害。\n\n阿尔法突袭能够暴击，暴击时造成额外的0%属性加成物理伤害。每次普通攻击会减少此技能1秒冷却时间。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "冥想",
        "description": "易集中念力、活化身体，短时间内回复生命值并减少所受的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_innerfocus.project_jade.png",
        "cooldown": "35",
        "cost": "50 / 65 / 80 / 95 / 110 / 125",
        "range": "20",
        "numericDetail": "易大师开始念咒，在4秒的持续时间里每秒回复30/50/70/90/110(+30%法术强度)生命值。易大师每失去1%生命值，这个治疗效果就会提升1%。\n\n念咒时，易大师所受的伤害会降低50/55/60/65/70%。这个伤害减免在对抗防御塔时会减半。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "无极剑道",
        "description": "易的无极技艺变得更加熟练，被动提升攻击力。激活【无极剑道】会让易的普通攻击附带真实伤害，但技能冷却期间会失去被动效果的加成。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_sunderingstrikes.project_jade.png",
        "cooldown": "25 / 23 / 21 / 19 / 17 / 15",
        "cost": "40",
        "range": "20",
        "numericDetail": "被动：增加10%(0%属性加成)攻击力。\n\n主动：普通攻击造成额外的10/15/20/25/30(+0%属性加成)真实伤害，持续5秒。在主动效果结束后，直到该技能重新冷却期间，无极剑道的被动效果无效。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "高原血统",
        "description": "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。技能持续期间，对英雄的击杀或助攻会延长该技能持续时间。完成对英雄的击杀或助攻时，被动效果会使其他技能的冷却时间缩短。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/masteryi_innerfocus2.project_jade.png",
        "cooldown": "75",
        "cost": "100",
        "range": "1",
        "numericDetail": "被动：在获得击杀或者助攻的同时，会使易大师的普通技能的冷却时间减少70%。\n\n主动：移动速度提高25/35/45%，攻击速度提高30/55/80%，并且免疫减速效果，持续10秒。在激活时，击杀或者助攻都会使高原血统的持续时间延长4秒。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60117",
    "championName": "璐璐",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/lulu",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60117.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/skins/base/images/jade_lulu_splash_centered_0.project_jade.jpg",
    "classicSplashName": "仙灵女巫",
    "abilities": [
      {
        "key": "P",
        "name": "皮克斯，仙灵伙伴",
        "description": "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_pixfaeriecompanion.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "闪耀长枪",
        "description": "璐璐和皮克斯各自发射一束穿刺飞弹，对命中的敌人造成重度减速效果。一个敌人只会受到一个飞弹的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_glitterbolt.project_jade.png",
        "cooldown": "7",
        "cost": "60 / 65 / 70 / 75 / 80",
        "range": "925",
        "numericDetail": "璐璐和皮克斯各自发射一个穿刺飞弹，对命中的敌人造成 80/125/170/215/260(+50%法术强度)点魔法伤害，并将他们减速 80%，持续 1/1.25/1.5/1.75/2 秒。这个减速效果会逐渐衰减，最低衰减至（（数值未在旧版接口公开）%）。\n\n一个敌人只会受到一个飞弹的伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "奇思妙想",
        "description": "如果对友军施放，会在短时间内增加目标友军的移动速度和法术强度。如果对敌人施放，则会将一名敌方英雄变成可爱的动物，使其无法攻击或施放技能。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_whimsy.project_jade.png",
        "cooldown": "18 / 16.5 / 15 / 13.5 / 12",
        "cost": "65 / 70 / 75 / 80 / 85",
        "range": "650",
        "numericDetail": "对友军施放：目标友军会增加 30(+10%法术强度)% 的移动速度，持续 5秒。\n\n对敌人施放：将一名敌方英雄变形 1.5/1.75/2/2.25/2.5 秒，让他无法攻击或施法，并将他的基础移动速度减少 60。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "帮忙，皮克斯！",
        "description": "如果对友军施放，会命令皮克斯跳到一名友军身上进行保护，之后会跟随并协助目标（而不是璐璐）进行攻击。如果对敌人施放，皮克斯会跳到敌人身上造成伤害，之后会跟随并提供目标的视野。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_commandpix.project_jade.png",
        "cooldown": "10",
        "cost": "60 / 70 / 80 / 90 / 100",
        "range": "650",
        "numericDetail": "对友军施放：命令皮克斯跳到一名友军身上，之后会跟随并协助目标（而不是璐璐）进行攻击，持续6秒。在到达目标身上后，皮克斯会为目标抵挡 80/120/160/200/240(+60%法术强度)点伤害，持续 6 秒。\n\n对敌人施放：皮克斯对目标敌人造成 80/130/180/230/280(+40%法术强度)点魔法伤害，之后会跟随并提供目标的视野，持续 6 秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "狂野生长",
        "description": "璐璐让她的友军变大，击飞目标附近的敌人，同时为目标友军提供大量生命值加成。接下来的几秒内，该友军会获得一个光环，减速附近的敌人。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_lulu/hud/icons2d/jade_lulu_giantgrowth.project_jade.png",
        "cooldown": "110 / 95 / 80",
        "cost": "150",
        "range": "900",
        "numericDetail": "璐璐让她的友军变大，击飞目标附近的敌人。在7秒的持续时间里，她的友军会获得300/450/600(+50%法术强度)点生命值加成，并使附近的敌军减速30/45/60%。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60045",
    "championName": "维迦",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/veigar",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60045.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/skins/base/images/jade_veigar_splash_centered_0.project_jade.jpg",
    "classicSplashName": "邪恶小法师",
    "abilities": [
      {
        "key": "P",
        "name": "均衡",
        "description": "维迦每损失1%法力值，法力回复便提升1%。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigar_entropy.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "黑暗祭祀",
        "description": "向目标敌人释放黑暗能量，造成魔法伤害。如果敌人被击败，维迦会永久获得一定的法术强度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigarbalefulstrike.project_jade.png",
        "cooldown": "8 / 7 / 6 / 5 / 4",
        "cost": "60 / 65 / 70 / 75 / 80",
        "range": "650",
        "numericDetail": "主动效果：向目标释放黑暗能量，对其造成 80/125/170/215/260 (+60%法术强度)点的魔法伤害。 如果目标单位死于黑暗祭祀，维嘉获得1点法术强度。这个加成会在对付英雄，大型小兵和大型野怪时翻倍。\n\n被动效果：维迦现在每击杀一个英雄（无论是以哪种方式）就会获得 1/2/3/4/5 点法术强度。\n\n法术强度加成： +1",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "黑暗物质",
        "description": "维迦召唤一大团黑暗物质轰击目标区域，落地造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigardarkmatter.project_jade.png",
        "cooldown": "10",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "950",
        "numericDetail": "1.2 秒后，黑暗物质将从天而降，对目标区域的单位造成 120/170/220/270/320 (+100%法术强度)点魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "扭曲空间",
        "description": "维迦在目标区域创造一个能够维持3秒的扭曲空间，穿过此区域边界的敌人将会被短暂晕眩。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigareventhorizon.project_jade.png",
        "cooldown": "20 / 19 / 18 / 17 / 16",
        "cost": "80 / 90 / 100 / 110 / 120",
        "range": "725",
        "numericDetail": "维迦在目标区域创造一个能够维持 3 秒的扭曲空间，穿过此区域边界的敌人将会受到 1.5/1.75/2/2.25/2.5 秒的晕眩效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "能量爆裂",
        "description": "引爆目标敌方英雄，造成大量基础魔法伤害，并额外造成目标80%法术强度的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_veigar/hud/icons2d/jade_veigarprimordialburst.project_jade.png",
        "cooldown": "130 / 110 / 90",
        "cost": "125 / 175 / 225 / 500",
        "range": "650",
        "numericDetail": "引爆目标英雄，造成 250/375/500 (+120%法术强度)外加其目标法术强度 80% 的魔法伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60031",
    "championName": "科加斯",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/chogath",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60031.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_chogath/skins/base/images/jade_chogath_splash_centered_0.project_jade.jpg",
    "classicSplashName": "虚空恐惧",
    "abilities": [
      {
        "key": "P",
        "name": "肉食者",
        "description": "当科加斯击杀一个单位时，他会回复生命值和法力值。回复的数值会随科加斯的等级提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_tailspike.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "碎裂",
        "description": "使目标地面破裂，将敌人抛向空中，造成伤害并减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_spikeslam.project_jade.png",
        "cooldown": "9",
        "cost": "90",
        "range": "950",
        "numericDetail": "使目标区域地面破裂，短时间后将敌人抛向空中1秒，对他们造成80/135/190/245/305(+100%法术强度)魔法伤害，并减少他们60%的移动速度，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "野性尖叫",
        "description": "科加斯向面前锥形区域施放恐怖声波，造成魔法伤害并沉默敌人数秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_feralscream.project_jade.png",
        "cooldown": "13",
        "cost": "70 / 80 / 90 / 100 / 110",
        "range": "300",
        "numericDetail": "科'加斯向面前锥形区域施放恐怖声波，使范围内的敌人沉默1.5/1.75/2/2.25/2.5秒并造成75/125/175/225/275(+70%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "恐惧之刺",
        "description": "科加斯的攻击会释放致命的尖刺，对面前所有的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_chitinousexoplates.project_jade.png",
        "cooldown": "0.5",
        "cost": "0",
        "range": "40",
        "numericDetail": "激活：普通攻击会发射尖刺，对面前一条线的敌人造成20/35/50/65/80(+30%法术强度)魔法伤害。这些尖刺会随着科'加斯体型的成长而变宽。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "盛宴",
        "description": "吞噬一个敌方单位，造成高额真实伤害。若目标被吞噬致死，科加斯就会变大，提高最大生命值（最多叠加6层）。科加斯死亡时会失去一半层数。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/chogath_feast.project_jade.png",
        "cooldown": "60",
        "cost": "100 / 60",
        "range": "175",
        "numericDetail": "饥饿地吞噬目标敌人，对英雄造成300/475/650(+70%法术强度)真实伤害，或对小兵和野怪造成1000(+70%法术强度)真实伤害。\n\n若目标被吞噬致死，科'加斯会长大，提高90/120/150最大生命值(最多叠加6层)。科'加斯死亡时减少一半的层数。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60090",
    "championName": "玛尔扎哈",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/malzahar",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60090.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_malzahar/skins/base/images/jade_malzahar_splash_centered_0.project_jade.jpg",
    "classicSplashName": "虚空先知",
    "abilities": [
      {
        "key": "P",
        "name": "召唤虚灵",
        "description": "每隔几次施法，玛尔扎哈会召唤一只无法控制的虚灵主动攻击敌人。虚灵会随时间成长，获得护甲、伤害和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_summonvoidling.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "虚空召唤",
        "description": "玛尔扎哈开启两扇通向虚空的传送门。短暂延迟后，两扇门之间出现虚空能量对流，造成魔法伤害并沉默敌方英雄。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_callofthevoid.project_jade.png",
        "cooldown": "9",
        "cost": "80 / 85 / 90 / 95 / 100 / 105",
        "range": "900",
        "numericDetail": "玛尔扎哈开启两扇通往虚空的传送门，在短暂的延迟后，能量就会从虚空之中喷发，并且在两道传送门之间对流，对击中的敌人造成 80/135/190/245/300(+80%法术强度)点魔法伤害和 1.4/1.8/2.2/2.6/3 秒的沉默效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "虚无领域",
        "description": "玛尔扎哈制造一片负能量区域，每秒对附近的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_nullzone.project_jade.png",
        "cooldown": "14",
        "cost": "90 / 95 / 100 / 105 / 110 / 115",
        "range": "800",
        "numericDetail": "玛尔扎哈创造一个持续5秒的地带，每秒都将对目标造成相当于目标最大生命值4/5/6/7/8%(+1%法术强度%)的伤害（对野怪的每秒伤害封顶值为120）。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "煞星幻象",
        "description": "玛尔扎哈侵蚀目标的心智，从而造成持续伤害。如果目标在此期间阵亡，则幻象转移到附近的敌人身上，且玛尔扎哈恢复法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_maleficvisions.project_jade.png",
        "cooldown": "15 / 13 / 11 / 9 / 7",
        "cost": "60 / 75 / 90 / 105 / 120 / 135",
        "range": "650",
        "numericDetail": "玛尔扎哈感染目标的思想，在4秒的持续时间内造成 80/140/200/260/320(+80%法术强度)魔法伤害。\n\n如果目标死于幻象，那么幻象将传给附近的一个敌方单位，同时玛尔扎哈将获得 10/14/18/22/26 点法力值。\n\n玛尔扎哈的虚灵被吸引到受感染的单位。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "冥府之握",
        "description": "玛尔扎哈引导虚空之力，以压制目标英雄并持续造成魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/malzahar_nethergrasp.project_jade.png",
        "cooldown": "120 / 100 / 80",
        "cost": "150",
        "range": "700",
        "numericDetail": "玛尔扎哈引导虚空原质，来压制目标英雄2.5秒，并在此期间造成共250/400/550(+130%法术强度)的魔法伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60038",
    "championName": "卡萨丁",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/kassadin",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60038.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_kassadin/skins/skin301/images/jade_kassadin_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 卡萨丁",
    "abilities": [
      {
        "key": "P",
        "name": "虚空之石",
        "description": "卡萨丁受到的 魔法伤害 减少15%，并将该伤害转化为额外 攻击速度 。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_netherburn.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "虚无法球",
        "description": "卡萨丁发射一道缥缈的虚空能量弹，对目标造成伤害并使其暂时沉默。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/averdrian_astralbeam.project_jade.png",
        "cooldown": "9",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "650",
        "numericDetail": "卡萨丁向目标发射虚空能量法球，造成80/115/150/185/220(+70%法术强度)魔法伤害沉默目标1.5/1.75/2/2.25/2.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "虚空之刃",
        "description": "被动：卡萨丁的普通攻击回复法力值。攻击敌方英雄时，法力值回复量提升至三倍。主动：卡萨丁的普通攻击造成额外魔法伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_nullblade.project_jade.png",
        "cooldown": "12",
        "cost": "25",
        "range": "1",
        "numericDetail": "被动：卡萨丁的普通攻击从虚空吸取法力，每次攻击回复8/11/14/17/20法力。如果攻击敌方英雄，回复效果则为3倍。\n\n主动：卡萨丁给他的虚空之刃充能，持续5秒，攻击造成额外30/45/60/75/90(+30%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "能量脉冲",
        "description": "附近有单位施放法术技能时，卡萨丁将吸收能量。当充能完毕后，吸收的能量可转化为脉冲，对面前锥形区域内敌人造成伤害并减速。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_forcepulse.project_jade.png",
        "cooldown": "6",
        "cost": "80",
        "range": "400",
        "numericDetail": "附近有单位施放法术技能时，卡萨丁将吸收能量，当附近累计有6次技能施放后，吸收的能力可施放能量脉冲，造成80/130/180/230/280(+70%法术强度)魔法伤害并减速30/35/40/45/50%持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "虚空行走",
        "description": "卡萨丁传送到附近区域，对区域内的敌方单位造成魔法伤害。此外，在一段时间内连续施放虚空行走技能会消耗更多的法力值，并造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/kassadin_riftwalk.project_jade.png",
        "cooldown": "7 / 6 / 5 / 2",
        "cost": "100",
        "range": "700",
        "numericDetail": "卡萨丁传送到附近的目标区域，着陆时对身边的所有敌方单位造成80/100/120(+80%法术强度)魔法伤害。此外，每在8内连续施放一次虚空行走，就会多消耗（数值未在旧版接口公开）法力，并造成50/55/60(+10%法术强度)额外伤害，最多可叠加10次。\n\n如果卡萨丁用虚空行走命中了一名敌方英雄，就会返还此技能50%的法力消耗",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60020",
    "championName": "努努",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/nunu",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60020.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_nunu/skins/skin301/images/jade_nunu_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 努努和威朗普",
    "abilities": [
      {
        "key": "P",
        "name": "法术幻想",
        "description": "进行5次攻击后，努努可以免费施放一个技能。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_frostnova.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "吞噬",
        "description": "努努命令威朗普撕咬小兵或野怪，造成巨量伤害，并回复自己的生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_consume.project_jade.png",
        "cooldown": "17 / 15 / 13 / 11 / 9 / 7",
        "cost": "60",
        "range": "125",
        "numericDetail": "雪人吞噬一个小兵或野怪，造成 400/550/700/850/1000真实伤害，并回复自己 70/115/160/205/250(+75%法术强度)生命值。\n\n努努会获得持续 120/150/180/210/240 秒的吞噬奖励，奖励的类型基于吞噬野怪的种类。\n\n蜥蜴：你的攻击和技能会造成相当于你最大生命值的1%的魔法伤害。\n魔像：提升 10% 的体型和最大生命值。\n狼或者幽灵： 击杀一个单位的同时会获得 15% 移动速度加成，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "血之沸腾",
        "description": "努努使自己和一个友方单位热血沸腾，提升自身和目标的移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_yetismash.project_jade.png",
        "cooldown": "15",
        "cost": "50",
        "range": "700",
        "numericDetail": "努努和目标友军热血沸腾，提升移动速度8/9/10/11/12%和攻击速度25/30/35/40/45%，持续12秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "冰雹",
        "description": "努努向敌人掷出一个冰球，造成伤害并短暂降低其移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_iceblast.project_jade.png",
        "cooldown": "6",
        "cost": "75 / 85 / 95 / 105 / 115 / 125",
        "range": "550",
        "numericDetail": "努努向一名敌方单位投掷冰球，造成85/130/175/225/275(+100%法术强度)点魔法伤害，并且减少其20/30/40/50/60%的移动速度，25%的攻击速度，持续3秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "绝对零度",
        "description": "努努开始吸收周围区域的热量，并使附近的敌人减速。该技能结束时，对范围内所有敌人造成巨量伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/yeti_shatter.project_jade.png",
        "cooldown": "110 / 100 / 90",
        "cost": "100",
        "range": "650",
        "numericDetail": "努努召唤一阵持续3秒的北极风暴，减缓周围敌人50%的移动速度，25%的攻击速度。\n\n风暴结束时最多对范围内所有敌人造成625/875/1125(+250%法术强度)魔法伤害，这取决于技能引导的时间。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60017",
    "championName": "提莫",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/teemo",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60017.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_teemo/skins/skin301/images/jade_teemo_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 提莫",
    "abilities": [
      {
        "key": "P",
        "name": "伪装",
        "description": "如果提莫保持静止，并在短时间内未执行任何操作，他将进入无限期的隐形状态。如果提莫在草丛中，他可以在移动时保持隐形。提莫脱离隐形后获得【出奇制胜】效果，提升攻击速度，持续数秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_camouflage.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "致盲吹箭",
        "description": "用强效毒液来侵蚀一名敌人的视力，对目标单位造成伤害，并使其致盲一段时间。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_tranquilizingshot.project_jade.png",
        "cooldown": "8",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "range": "680",
        "numericDetail": "对目标造成80/125/170/215/260(+80%法术强度)魔法伤害并使目标致盲1.5/1.75/2/2.25/2.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "小莫快跑",
        "description": "提莫动如脱兔，移动速度增加，直到被敌方英雄或防御塔击中为止。提莫可在短时间内疾跑，获得额外移动速度，且不会因被击中而中断。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_movequick.project_jade.png",
        "cooldown": "17",
        "cost": "40",
        "range": null,
        "numericDetail": "被动：提莫的移动速度提升10/14/18/22/26%。若在最近5秒内受到敌方英雄或防御塔伤害，则此效果移除。\n\n主动：提莫疾跑，在3秒内获得2倍被动效果，期间即使受到攻击也不会移除效果。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "毒性射击",
        "description": "提莫每次攻击附带毒液伤害，造成持续性伤害，持续4秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/teemo_poisoneddart.project_jade.png",
        "cooldown": null,
        "cost": "0",
        "range": "680",
        "numericDetail": "提莫的普通攻击会使目标中毒，立即造成10/20/30/40/50(+30%法术强度)魔法伤害，并在随后的4秒里每秒造成6/12/18/24/30(+10%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "种蘑菇",
        "description": "提莫用背包里的蘑菇布置一个可爆炸的毒性陷阱。陷阱会在被敌方踩中时爆炸，释放出一团毒云，对附近的敌人造成减速效果和持续伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/ashe_archersmark.project_jade.png",
        "cooldown": "1",
        "cost": "75 / 100 / 125 / 150 / 175 / 200",
        "range": "230",
        "numericDetail": "使用一个储存的蘑菇来设置陷阱，如果被敌人踩到，陷阱会引爆，将毒散发到附近的敌人身上，减缓他们30/40/50%的移动速度，并造成200/325/450(+80%法术强度)魔法伤害，持续4秒。陷阱持续10分钟。\n\n提莫每35/31/27秒找到一个蘑菇，但他一次只能携带3个。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60042",
    "championName": "库奇",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/corki",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60042.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_corki/skins/base/images/jade_corki_splash_centered_0.project_jade.jpg",
    "classicSplashName": "英勇投弹手",
    "abilities": [
      {
        "key": "P",
        "name": "海克斯科技榴弹",
        "description": "库奇的普攻对小兵、野怪和英雄造成额外真实伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_rapidreload.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "磷光炸弹",
        "description": "库奇向目标区域发射一枚闪光弹。这次攻击会显形爆炸周围非潜行状态的单位和英雄，持续6秒。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_phosphorusbomb.project_jade.png",
        "cooldown": "8",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "600",
        "numericDetail": "库奇轰出一枚炸弹，对目标范围内敌人造成80/130/180/230/280(+50%法术强度)魔法伤害，并显示该区域，持续6秒（不显示隐身单位）。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "瓦尔基里俯冲",
        "description": "库奇冲向目标位置，沿途投下炸弹，留下一道火焰路径，对停留其中的敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_valkyrie.project_jade.png",
        "cooldown": "26 / 23 / 20 / 17 / 14 / 11",
        "cost": "50",
        "range": "600",
        "numericDetail": "库奇俯冲突袭目标区域，留下一条毁灭与死亡之路，对其上目标造成每秒 60/90/120/150/180(+40%法术强度)伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "格林机枪",
        "description": "库奇使用格林机枪扫射他面前锥形范围内的敌人，造成伤害并削减敌人护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_gatlinggun.project_jade.png",
        "cooldown": "16",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "range": "600",
        "numericDetail": "库奇使用格林机枪扫射前方敌人，持续4秒，每秒造成20/32/44/56/68(+40%额外攻击力)点物理伤害，并减少2/4/6/8/10点护甲。处于持续攻击下的敌人护甲值持续减少，持续时间2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "火箭轰击",
        "description": "库奇朝着他的目标位置发射一枚导弹。导弹会在命中第一个敌人后爆炸，并对目标周围单位造成伤害。库奇每12秒就会挂载一枚导弹，最多挂载7枚。每发射3枚导弹后，下一次就会发射超级导弹，造成额外伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/corki_missilebarrage.project_jade.png",
        "cooldown": "1.2",
        "cost": "20",
        "range": "1225",
        "numericDetail": "库奇朝目标地点发射一枚导弹，命中第一个敌人后会爆炸。每枚导弹造成100/180/26020% / 30% / 40%总攻击力(+30%法术强度)范围魔法伤害。\n\n库奇每10秒加载一枚导弹，最多可挂载7枚。\n\n发射2枚导弹后的第3枚将是超级导弹，造成额外50%的伤害。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60015",
    "championName": "希维尔",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/sivir",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60015.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_sivir/skins/base/images/jade_sivir_splash_centered_0.project_jade.jpg",
    "classicSplashName": "战争女神",
    "abilities": [
      {
        "key": "P",
        "name": "敏锐疾行",
        "description": "希维尔攻击敌方英雄时，会短暂获得移动速度提升。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_sprint.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "回旋之刃",
        "description": "希维尔将十字刃当作回力标挥出，利刃在往返时造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_spiralblade.project_jade.png",
        "cooldown": "9",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "range": "1200",
        "numericDetail": "希维尔像挥舞回力标一样挥出她的十字刃，对命中的第一个敌人造成25/45/65/85/105(+70% / 80% / 90% / 100% / 110.0%总攻击力)(+50%法术强度)物理伤害，且对每个后续目标的伤害减少10%，减到40%为止。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "弹射",
        "description": "希维尔的下一次普通攻击将在目标之间弹射，每次后续命中时，造成的伤害衰减。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_ricochet.project_jade.png",
        "cooldown": "0.5",
        "cost": "0",
        "range": "20",
        "numericDetail": "希维尔的下3次普通攻击会弹射到周围目标上，对首要目标造成100% / 100% / 100% / 100% / 100%总攻击力物理伤害，并对每个后续目标造成50% / 55.0% / 60% / 65% / 70%总攻击力 （总攻击力的50/55/60/65/70%）物理伤害。\n\n只对首要目标造成攻击特效。每个目标仅会被弹射一次。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "法术护盾",
        "description": "希维尔制造一层法术屏障，从而格挡一次对她施放的敌方单体技能。如果成功格挡技能，则希维尔回复法力值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_spellblock.project_jade.png",
        "cooldown": "22 / 19 / 16 / 13 / 10 / 7",
        "cost": "75",
        "range": "20",
        "numericDetail": "希维尔制造一层持续1.5秒的法术屏障，来格挡一次即将到来的敌方技能。\n\n如果希维尔成功格挡了一次技能，那么就会回复60/75/90/105/120法力值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "狩猎",
        "description": "希维尔在战斗中引领友军，在一段时间内提高其移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/sivir_deadeye.project_jade.png",
        "cooldown": "100 / 90 / 80 / 70 / 60 / 50",
        "cost": "100",
        "range": "1000",
        "numericDetail": "被动：希维尔在弹射激活时，会获得40/60/80%攻击速度加成。\n\n主动：希维尔使友军振奋，持续8秒，为所有附近的友军提供60%的初始移动速度加成，该加成会在2/3/4秒后降低至20%。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60080",
    "championName": "潘森",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/pantheon",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60080.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_pantheon/skins/skin301/images/jade_pantheon_splash_centered_301.project_jade.jpg",
    "classicSplashName": "经典 潘森",
    "abilities": [
      {
        "key": "P",
        "name": "圣盾庇护",
        "description": "每攻击或施法4次后，潘森可格挡下一次普通攻击或防御塔攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_aoz.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "长矛飞掷",
        "description": "潘森向一个敌人猛掷长矛，从而造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_spearshot.project_jade.png",
        "cooldown": "4",
        "cost": "45",
        "range": "600",
        "numericDetail": "潘森投矛攻击敌人，造成65/105/145/185/225(+140%额外攻击力)物理伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "圣盾打击",
        "description": "潘森跳向一名敌人并对该敌人进行盾击，从而使其晕眩。盾击结束后刷新圣盾庇护，以格挡下一次攻击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_leapbash.project_jade.png",
        "cooldown": "13 / 12 / 11 / 10 / 9",
        "cost": "55",
        "range": "600",
        "numericDetail": "潘森跳向目标英雄发动盾击，造成50/75/100/125/150(+100%法术强度)魔法伤害，并晕眩目标1秒，同时刷新圣盾庇护。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "穿心长矛",
        "description": "潘森使用长矛向前方范围发动三连击，对英雄造成的伤害翻倍。同时，潘森也变得更了解敌人的弱点，必定对生命值低于15%的敌人触发暴击。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_hss.project_jade.png",
        "cooldown": "10 / 9 / 8 / 7 / 6",
        "cost": "45 / 50 / 55 / 60 / 65 / 70",
        "range": "400",
        "numericDetail": "被动效果：潘森的普通攻击和长矛飞掷，对生命值低于15%的敌人将100%暴击。普攻暴击伤害为200%，长矛飞掷的暴击伤害为150%。\n\n主动效果：潘森使用长矛向前方锥形范围发动3连击，每击造成13/23/33/43/53(+60%额外攻击力)物理伤害。对英雄造成双倍伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "堕天一击",
        "description": "潘森积蓄力量腾空而起，然后轰击目标区域，落地时对目标区域内的所有敌人造成伤害。离落点越近的敌人，受到的伤害越高。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/pantheon_grandskyfall.project_jade.png",
        "cooldown": "150 / 135 / 120",
        "cost": "100",
        "range": "5500",
        "numericDetail": "潘森蓄积力量腾空而起，数秒后轰击目标区域，落地时对目标区域中心的敌人造成400/700/1000(+100%法术强度)魔法伤害（边缘造成50%），并减速35%，持续1秒。离落点越近伤害越高。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60053",
    "championName": "布里茨",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/blitzcrank",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60053.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_blitzcrank/skins/base/images/jade_blitzcrank_splash_centered_0.project_jade.jpg",
    "classicSplashName": "蒸汽机器人",
    "abilities": [
      {
        "key": "P",
        "name": "法力屏障",
        "description": "布里茨的生命值降到20%以下时，法力屏障就会激活，生成一道相当于其50%法力值的护盾，持续10秒。法力屏障每90秒内只能触发一次。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_manabarrier.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "机械飞爪",
        "description": "布里茨发射右手，对命中的第一个敌人造成伤害，并将其拉到自己面前。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_rocketgrab.project_jade.png",
        "cooldown": "20 / 19 / 18 / 17 / 16",
        "cost": "120",
        "range": "1079",
        "numericDetail": "布里茨对目标使用机械飞爪，若击中会眩晕目标并将其抓到面前，同时造成 80/135/190/245/300(+100%法术强度)魔法伤害。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "过载运转",
        "description": "布里茨为自己进行超级充能，以大幅提升移动速度和攻击速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_overdrive.project_jade.png",
        "cooldown": "15",
        "cost": "75",
        "range": "1",
        "numericDetail": "布里茨使用超级电池充电，提升移动速度16/20/24/28/32%和攻击速度30/38/46/54/62%持续8秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "能量铁拳",
        "description": "布里茨为机械手臂充能，下次攻击造成双倍伤害并击飞目标。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_powerfist.project_jade.png",
        "cooldown": "9 / 8 / 7 / 6 / 5",
        "cost": "25",
        "range": "300",
        "numericDetail": "布里茨为机械手臂充能，下一次攻击造成双倍伤害并将目标抛向空中。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "静电力场",
        "description": "被动生成电弧，对附近的一名敌人造成伤害。此外，主动施放时对周围的敌人造成伤害和0.5秒沉默，但在施放后会暂时禁用被动电弧效果，直到技能冷却完毕。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/blitzcrank_staticfield.project_jade.png",
        "cooldown": "30",
        "cost": "150",
        "range": "600",
        "numericDetail": "被动效果：布里茨每2.5秒会释放一道电弧，对附近的随机一个单位造成100/200/300(+20%法术强度)魔法伤害。\n\n主动效果：造成250/375/500(+100%法术强度)魔法伤害且沉默周围敌方单位，持续0.5秒。移除被动魔法攻击直到技能冷却时间结束",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60016",
    "championName": "索拉卡",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/soraka",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60016.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_soraka/skins/base/images/jade_soraka_splash_centered_0.project_jade.jpg",
    "classicSplashName": "众星之子",
    "abilities": [
      {
        "key": "P",
        "name": "奉献",
        "description": "使周围友军提高16魔法抗性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_consecration.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "流星坠落",
        "description": "一阵流星雨从天而降，打击附近所有敌人，造成魔法伤害并暂时降低其魔法抗性。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_starcall.project_jade.png",
        "cooldown": "2.5",
        "cost": "20 / 35 / 50 / 65 / 80 / 95",
        "range": "625",
        "numericDetail": "索拉卡召唤流星雨，对周围敌人造成60/95/130/165/200(+40%法术强度)点魔法伤害并减少他们6(+1%法术强度)点魔法抗性，持续5秒（最多可叠加10层）。\n\n如果群星坠落有命中一名敌方英雄，那么星之祝福的冷却时间会减少5/6.25/7.5/8.75/10%。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "星界恩典",
        "description": "索拉卡为一名友方单位赐福，为其回复生命值并暂时提升护甲。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_bless.project_jade.png",
        "cooldown": "20",
        "cost": "80 / 110 / 140 / 170 / 200 / 230",
        "range": "750",
        "numericDetail": "为一名友军单位恢复70/120/170/220/270 (+35%法术强度)生命值，并暂时为目标增加50/65/80/95/110(+15%法术强度)护甲，护甲效果持续2秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "灌注",
        "description": "为一名友军回复法力值，或对一名敌人造成伤害并使其短暂沉默。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_wish.project_jade.png",
        "cooldown": "10",
        "cost": "0",
        "range": "725",
        "numericDetail": "对友方施放：为友军英雄恢复法力值，数额为20/40/60/80/100加上索拉卡最大法力值的5%(+（数值未在旧版接口公开）)（不能以自己为目标）。\n\n对敌方施放：对单个敌人造成魔法伤害，数额为40/70/100/130/160(+40%法术强度)加上索拉卡最大法力值的5%(+（数值未在旧版接口公开）)，并使目标沉默1.5/1.75/2/2.25/2.5秒。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "祈愿",
        "description": "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/soraka_purify.project_jade.png",
        "cooldown": "160 / 145 / 130 / 115 / 100 / 85",
        "cost": "100 / 175 / 250 / 325 / 400 / 475",
        "range": "25000",
        "numericDetail": "索拉卡召唤圣洁的能量，瞬间恢复自己和所有友军150/250/350(+55.0%法术强度)生命值。",
        "numericVersion": "3.15.5"
      }
    ]
  },
  {
    "championId": "60036",
    "championName": "蒙多医生",
    "sourceUrl": "https://op.gg/zh-cn/lol/classic/champions/dr-mundo",
    "portrait": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/v1/champion-icons/60036.png",
    "classicSplash": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/characters/jade_drmundo/skins/base/images/jade_drmundo_splash_centered_0.project_jade.jpg",
    "classicSplashName": "祖安狂人",
    "abilities": [
      {
        "key": "P",
        "name": "肾上腺激素",
        "description": "蒙多医生每秒回复0.3%的最大生命值。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_adrenalinerush.project_jade.png",
        "cooldown": null,
        "cost": null,
        "range": null,
        "numericDetail": null,
        "numericVersion": null
      },
      {
        "key": "Q",
        "name": "病毒屠刀",
        "description": "蒙多医生掷出他的屠刀，对目标造成基于其最大生命值的伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_infectedcleaver.project_jade.png",
        "cooldown": "4",
        "cost": "0",
        "range": "975",
        "numericDetail": "蒙多医生投掷病毒屠刀，对目标造成相当于他当前生命值的15/18/21/23/25%的魔法伤害（最少80/130/180/230/280伤害），并减速40%，持续2秒。\n\n如果屠刀击中目标，则回复一半的生命消耗值。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "W",
        "name": "痛苦燃烧",
        "description": "通过消耗生命值，蒙多医生减少自身受到的控制效果持续时间，并持续对附近敌人造成伤害。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_burningagony.project_jade.png",
        "cooldown": "1",
        "cost": "0",
        "range": "325",
        "numericDetail": "激活：蒙多医生对周围敌人造成每秒35/50/65/80/95(+20%法术强度)魔法伤害，并减少所受控制技能效果10/15/20/25/30%的持续时间。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "E",
        "name": "潜能激发",
        "description": "潜能激发会在5秒内提升蒙多医生的攻击力。此外，蒙多医生每损失一定百分比的生命值，还会获得额外攻击力。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_masochism.project_jade.png",
        "cooldown": "7",
        "cost": "0",
        "range": null,
        "numericDetail": "增加物理攻击40/55/70/85/100，持续5秒。此外每损失1%生命值会额外增加0.4/0.55/0.7/0.85/1物理攻击。",
        "numericVersion": "3.15.5"
      },
      {
        "key": "R",
        "name": "背水一战",
        "description": "蒙多医生消耗部分生命值来提升移动速度，并巨幅提升生命回复速度。",
        "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/drmundo_sadism.project_jade.png",
        "cooldown": "75",
        "cost": "0",
        "range": "20",
        "numericDetail": "蒙多医生在12秒内回复40/50/60%最大生命值。此外，他还获得15/25/35%移动速度。",
        "numericVersion": "3.15.5"
      }
    ]
  }
];

export const classicSkillsByChampion = new Map(
  classicChampionSkills.map((entry) => [entry.championId, entry]),
);
