// Generated from OP.GG Classic catalogs. Do not edit manually.
// Run: node scripts/check-classic-catalog-parity.mjs

export type OpggClassicCatalogFact = {
  readonly kind: string;
  readonly value: string;
};

export type OpggClassicCatalogGroup = {
  readonly key: string;
  readonly label: string | null;
};

export type OpggClassicCatalogEntry = {
  readonly identifier: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly group: OpggClassicCatalogGroup | null;
  readonly facts: readonly OpggClassicCatalogFact[];
  readonly cooldown: number | null;
};

export type OpggClassicRuneCatalogEntry = OpggClassicCatalogEntry & {
  readonly runeId: string;
};

export const classicOpggCatalogSources = {
  "runes": "https://op.gg/zh-cn/lol/classic/runes/catalog",
  "masteries": "https://op.gg/zh-cn/lol/classic/masteries/catalog",
  "spells": "https://op.gg/zh-cn/lol/classic/summoner-spells"
} as const;

export const classicOpggRuneIdMap = {
  "mark-crit": "775251",
  "mark-crit-damage": "775249",
  "mark-ad-scaling": "775246",
  "mark-armor-pen": "775253",
  "mark-armor-lesser": "775257",
  "mark-cdr-lesser": "775265",
  "mark-health-lesser": "775255",
  "mark-magic-pen": "775273",
  "mark-attack": "775245",
  "mark-as": "775247",
  "mark-blank": "776247",
  "seal-armor-scaling": "775318",
  "seal-health-scaling": "775316",
  "seal-crit-lesser": "775311",
  "seal-crit-damage-lesser": "775309",
  "seal-as-lesser": "775307",
  "seal-mr-lesser": "775319",
  "seal-mana-regen": "775331",
  "seal-armor": "775317",
  "seal-gold": "775403",
  "seal-blank": "776317",
  "seal-health-regen": "775321",
  "seal-health": "775315",
  "glyph-ap-scaling": "775298",
  "glyph-cdr-scaling": "775296",
  "glyph-mr-scaling": "775290",
  "glyph-crit-damage-lesser": "775279",
  "glyph-as-lesser": "775277",
  "glyph-armor-lesser": "775287",
  "glyph-health-lesser": "775285",
  "glyph-mana": "775299",
  "glyph-ap": "775297",
  "glyph-blank": "776295",
  "glyph-cdr": "775295",
  "glyph-mr": "775289",
  "quint-health-percent": "775406",
  "quint-crit-damage": "775339",
  "quint-ap": "775357",
  "quint-spell-vamp": "775409",
  "quint-attack": "775335",
  "quint-as": "775337",
  "quint-armor": "775347",
  "quint-gold": "775367",
  "quint-xp": "775368",
  "quint-blank-as": "776337",
  "quint-blank-armor": "776347",
  "quint-blank-cdr": "776355",
  "quint-life-steal": "775412",
  "quint-health": "775345",
  "quint-move": "775365"
} as const;

export const classicOpggRunes = [
  {
    "runeId": "mark-crit",
    "identifier": "775251",
    "title": "暴击几率印记",
    "description": "+1%暴击几率",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_3_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-crit-damage",
    "identifier": "775249",
    "title": "暴击伤害印记",
    "description": "+2%暴击伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_1_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-ad-scaling",
    "identifier": "775246",
    "title": "成长攻击力印记",
    "description": "每级+0.15攻击力(18级+2.7)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_2_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-armor-pen",
    "identifier": "775253",
    "title": "穿甲印记",
    "description": "+1.25穿甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_1_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-armor-lesser",
    "identifier": "775257",
    "title": "次级护甲印记",
    "description": "+0.8护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_1_2.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-cdr-lesser",
    "identifier": "775265",
    "title": "次级冷却缩减印记",
    "description": "0.3%冷却缩减",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_1_2.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-health-lesser",
    "identifier": "775255",
    "title": "次级生命值印记",
    "description": "+3生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_3_2.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-magic-pen",
    "identifier": "775273",
    "title": "法术穿透印记",
    "description": "+1法术穿透",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_1_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-attack",
    "identifier": "775245",
    "title": "攻击力印记",
    "description": "+1攻击力",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_1_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-as",
    "identifier": "775247",
    "title": "攻击速度印记",
    "description": "+1.7%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_3_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "mark-blank",
    "identifier": "776247",
    "title": "空白符文",
    "description": "+1.1%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/r_3_3.project_jade.png",
    "group": {
      "key": "runes-marks",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-armor-scaling",
    "identifier": "775318",
    "title": "成长护甲符印",
    "description": "每级+0.15护甲(18级+2.7)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_2_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-health-scaling",
    "identifier": "775316",
    "title": "成长生命值符印",
    "description": "每级+1.3生命值(18级+23.4)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_2_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-crit-lesser",
    "identifier": "775311",
    "title": "次级暴击几率符印",
    "description": "+0.45%暴击几率",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_3_2.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-crit-damage-lesser",
    "identifier": "775309",
    "title": "次级暴击伤害符印",
    "description": "+0.7%暴击伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_2_2.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-as-lesser",
    "identifier": "775307",
    "title": "次级攻击速度符印",
    "description": "+0.8%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_3_2.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-mr-lesser",
    "identifier": "775319",
    "title": "次级魔法抗性符印",
    "description": "+0.75魔法抗性",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_3_2.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-mana-regen",
    "identifier": "775331",
    "title": "法力回复符印",
    "description": "+0.4法力回复/5秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_3_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-armor",
    "identifier": "775317",
    "title": "护甲符印",
    "description": "+1护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_1_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-gold",
    "identifier": "775403",
    "title": "金币符印",
    "description": "+0.25金币/10秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_3_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-blank",
    "identifier": "776317",
    "title": "空白符文",
    "description": "+0.65护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_1_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-health-regen",
    "identifier": "775321",
    "title": "生命回复符印",
    "description": "+0.5生命回复/5秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_1_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "seal-health",
    "identifier": "775315",
    "title": "生命值符印",
    "description": "+8生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/y_3_3.project_jade.png",
    "group": {
      "key": "runes-seals",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-ap-scaling",
    "identifier": "775298",
    "title": "成长法术强度雕纹",
    "description": "每级+0.2法术强度(18级+3.6)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_4_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-cdr-scaling",
    "identifier": "775296",
    "title": "成长冷却缩减雕纹",
    "description": "每级0.1%冷却缩减(18级1.8%)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_1_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-mr-scaling",
    "identifier": "775290",
    "title": "成长魔法抗性雕纹",
    "description": "每级+0.2魔法抗性(18级+3.6)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_4_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-crit-damage-lesser",
    "identifier": "775279",
    "title": "次级暴击伤害雕纹",
    "description": "+0.7%暴击伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_2_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-as-lesser",
    "identifier": "775277",
    "title": "次级攻击速度雕纹",
    "description": "+0.8%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_3_2.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-armor-lesser",
    "identifier": "775287",
    "title": "次级护甲雕纹",
    "description": "+0.8护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_1_2.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-health-lesser",
    "identifier": "775285",
    "title": "次级生命值雕纹",
    "description": "+3生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_4_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-mana",
    "identifier": "775299",
    "title": "法力值雕纹",
    "description": "+12法力值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_1_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-ap",
    "identifier": "775297",
    "title": "法术强度雕纹",
    "description": "+1.2法术强度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_3_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-blank",
    "identifier": "776295",
    "title": "空白符文",
    "description": "0.5%冷却缩减",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_1_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-cdr",
    "identifier": "775295",
    "title": "冷却缩减雕纹",
    "description": "0.8%冷却缩减",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_1_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "glyph-mr",
    "identifier": "775289",
    "title": "魔法抗性雕纹",
    "description": "+1.4魔法抗性",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/b_3_3.project_jade.png",
    "group": {
      "key": "runes-glyphs",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-health-percent",
    "identifier": "775406",
    "title": "百分比生命值精华",
    "description": "+1.5%百分比生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-crit-damage",
    "identifier": "775339",
    "title": "暴击伤害精华",
    "description": "+4.5%暴击伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_1_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-ap",
    "identifier": "775357",
    "title": "法术强度精华",
    "description": "+5法术强度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-spell-vamp",
    "identifier": "775409",
    "title": "法术吸血精华",
    "description": "+2%法术吸血",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_4_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-attack",
    "identifier": "775335",
    "title": "攻击力精华",
    "description": "+2.25攻击力",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_1_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-as",
    "identifier": "775337",
    "title": "攻击速度精华",
    "description": "+4.5%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-armor",
    "identifier": "775347",
    "title": "护甲精华",
    "description": "+4.3护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_1_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-gold",
    "identifier": "775367",
    "title": "金币精华",
    "description": "+1金币/10秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_4_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-xp",
    "identifier": "775368",
    "title": "经验值精华",
    "description": "+2%经验获取",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_2_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-blank-as",
    "identifier": "776337",
    "title": "空白符文",
    "description": "+3%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-blank-armor",
    "identifier": "776347",
    "title": "空白符文",
    "description": "+2.8护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_1_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-blank-cdr",
    "identifier": "776355",
    "title": "空白符文",
    "description": "1.7%冷却缩减",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-life-steal",
    "identifier": "775412",
    "title": "生命偷取精华",
    "description": "+1.5%生命偷取",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_1_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-health",
    "identifier": "775345",
    "title": "生命值精华",
    "description": "+26生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  },
  {
    "runeId": "quint-move",
    "identifier": "775365",
    "title": "移动速度精华",
    "description": "+1.5%移动速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jaderunes/bl_3_3.project_jade.png",
    "group": {
      "key": "runes-quintessences",
      "label": null
    },
    "facts": [],
    "cooldown": null
  }
] as const satisfies readonly OpggClassicRuneCatalogEntry[];

export const classicOpggMasteries = [
  {
    "identifier": "511",
    "title": "召唤师的愤怒",
    "description": "强化召唤师技能：【虚弱】、【引燃】、【幽灵疾步】、【战意激增】、【战争图腾】和【晋升】",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/511_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "512",
    "title": "狂怒",
    "description": "每级获得+1%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/512_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "513",
    "title": "巫术",
    "description": "每级获得+1%冷却缩减",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/513_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "514",
    "title": "屠夫",
    "description": "普通攻击对小兵和野怪造成2/4额外伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/514_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "522",
    "title": "致命",
    "description": "每级获得+0.166/0.333/0.498/0.664攻击力",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/522_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "523",
    "title": "爆裂",
    "description": "每级获得+0.25/0.5/0.75/1法术强度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/523_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "524",
    "title": "摧毁",
    "description": "对防御塔造成的伤害提高5%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/524_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "531",
    "title": "浩劫",
    "description": "造成的伤害提高0.67%/1.33%/2%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/531_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "532",
    "title": "武器专家",
    "description": "+8%护甲穿透",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/532_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "533",
    "title": "奥术知识",
    "description": "+8%法术穿透",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/533_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "541",
    "title": "致命",
    "description": "+2.5%/5%暴击伤害(近战为5%/10%)",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/541_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "542",
    "title": "蛮横之力",
    "description": "+1.5/3攻击力",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/542_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "543",
    "title": "思想之力",
    "description": "+2/4/6法术强度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/543_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "544",
    "title": "咒剑",
    "description": "普通攻击会造成相当于5%法术强度的魔法伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/544_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "551",
    "title": "狂暴",
    "description": "在一次暴击命中后获得持续2秒的10%攻击速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/551_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "552",
    "title": "切割",
    "description": "+2/4/6穿甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/552_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "553",
    "title": "高阶法师",
    "description": "法术强度提升1.25%/2.5%/3.75%/5%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/553_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "562",
    "title": "死神",
    "description": "对生命值低于50%的目标造成伤害提高5%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/562_on.png",
    "group": {
      "key": "masteries-offense",
      "label": "进攻"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "611",
    "title": "召唤师的决断",
    "description": "强化召唤师技能：【净化】、【治疗术】、【惩戒】、【屏障】和【强化要塞】",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/611_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "612",
    "title": "坚韧",
    "description": "根据已损失生命值，获得最多+2/4/6生命回复/5秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/612_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "613",
    "title": "耐久",
    "description": "每级获得+1.5/3/4.5/6生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/613_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "614",
    "title": "韧化皮肤",
    "description": "受到的野怪伤害减少一半",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/614_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "621",
    "title": "坚硬",
    "description": "+2/4/6护甲",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/621_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "622",
    "title": "抵抗",
    "description": "+2/4/6魔法抗性",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/622_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "624",
    "title": "刃甲",
    "description": "对攻击你的敌方野怪造成6伤害",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/624_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "631",
    "title": "不屈",
    "description": "受到敌方英雄的伤害减少一半",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/631_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "632",
    "title": "无情",
    "description": "受到的减速效果降低7.5%/15%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/632_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "633",
    "title": "老兵伤痕",
    "description": "+30生命值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/633_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "634",
    "title": "护卫",
    "description": "受到防御塔的伤害降低5%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/634_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "641",
    "title": "格挡",
    "description": "受到英雄普通攻击的伤害减少3",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/641_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "642",
    "title": "顽强",
    "description": "受到控制效果的持续时间减少5%/10%/15%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/642_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "643",
    "title": "主宰",
    "description": "最大生命值提升1.5%/2.75%/4%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/643_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "651",
    "title": "卫士",
    "description": "附近每有一名敌方英雄，获得+1护甲和魔法抗性",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/651_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "652",
    "title": "传奇装甲",
    "description": "使额外护甲和魔法抗性提升+2%/4%/6%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/652_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "653",
    "title": "精心照料",
    "description": "阵亡时间缩短10%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/653_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "654",
    "title": "坚固装甲",
    "description": "受到的暴击伤害降低10%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/654_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "662",
    "title": "荣誉守卫",
    "description": "受到所有来源的伤害降低3%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/662_on.png",
    "group": {
      "key": "masteries-defense",
      "label": "防御"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "711",
    "title": "召唤师的感悟",
    "description": "强化召唤师技能：【传送】、【闪现】、【清晰术】、【重生】和【洞察】。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/711_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "712",
    "title": "漫游",
    "description": "非战斗状态获得+0.66%/1.33%/2%移动速度",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/712_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "713",
    "title": "冥想",
    "description": "+1/2/3法力回复/5秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/713_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "714",
    "title": "改良回城",
    "description": "回城的施放时间缩短1秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/714_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "721",
    "title": "斥候",
    "description": "守卫在放置后的3秒内获得25%额外视野距离",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/721_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "722",
    "title": "智囊",
    "description": "召唤师技能冷却时间缩短4%/7%/10%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/722_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "723",
    "title": "精神扩张",
    "description": "每级获得+4/7/10法力值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/723_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "724",
    "title": "巧匠",
    "description": "主动装备的冷却时间缩短7.5%/15%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/724_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "731",
    "title": "贪婪",
    "description": "每10秒额外获得+0.5/1/1.5/2金币",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/731_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "732",
    "title": "符能亲和",
    "description": "中立野怪增益的持续时间延长20%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/732_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "733",
    "title": "吸血习性",
    "description": "+1%/2%/3%生命偷取和法术吸血",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/733_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "734",
    "title": "饼干师傅",
    "description": "开局获得一块回复饼干，在10秒内持续回复80生命值和50法力值",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/734_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "741",
    "title": "财富",
    "description": "初始金币提升35/75",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/741_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "742",
    "title": "觉悟",
    "description": "获得的经验值提升1.25%/2.5%/3.75%/5%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/742_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "743",
    "title": "精魄之力",
    "description": "每拥有400法力值，则获得最多+1/2/3生命回复/5秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/743_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "744",
    "title": "探索者",
    "description": "开局获得一个探索者守卫。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/744_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "751",
    "title": "探云手",
    "description": "每次用普通攻击命中敌方英雄可获得5金币(近战)或3金币(远程)，冷却时间5秒",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/751_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "752",
    "title": "智谋",
    "description": "+2%/4%/6%冷却缩减",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/752_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  },
  {
    "identifier": "762",
    "title": "灵敏",
    "description": "移动速度提升3%",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/loadouts/jademasteries/762_on.png",
    "group": {
      "key": "masteries-utility",
      "label": "通用"
    },
    "facts": [],
    "cooldown": null
  }
] as const satisfies readonly OpggClassicCatalogEntry[];

export const classicOpggSpells = [
  {
    "identifier": "74",
    "title": "闪现",
    "description": "使你朝着你的指针位置瞬间传送一小段距离。召唤师的感悟：【闪现】的冷却时间缩短15秒。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_flash.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "300"
      }
    ],
    "cooldown": 300
  },
  {
    "identifier": "714",
    "title": "引燃",
    "description": "对目标敌方英雄造成持续真实伤害并在持续期间降低目标受到的治疗效果。召唤师的愤怒：当【引燃】处于冷却阶段时，获得5法术强度和攻击力。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summonerignite.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "210"
      }
    ],
    "cooldown": 210
  },
  {
    "identifier": "712",
    "title": "传送",
    "description": "短暂引导后，将英雄传送到友方小兵、防御塔或守卫旁边。召唤师的感悟：【传送】的引导时间缩短。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_teleport.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "300"
      }
    ],
    "cooldown": 300
  },
  {
    "identifier": "711",
    "title": "惩戒",
    "description": "对目标敌方小兵或宠物造成真实伤害。召唤师的决断：每次施放【惩戒】可获得10金币。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_smite.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "70"
      }
    ],
    "cooldown": 70
  },
  {
    "identifier": "76",
    "title": "幽灵疾步",
    "description": "期间获得移动速度并无视单位的碰撞体积。召唤师的愤怒：【幽灵疾步】提供的额外移动速度得到提升。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_haste.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "240"
      }
    ],
    "cooldown": 240
  },
  {
    "identifier": "73",
    "title": "虚弱",
    "description": "使目标英雄减速，并降低其攻击速度和造成的伤害。召唤师的愤怒：【虚弱】还会使目标的护甲和魔法抗性降低10。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_exhaust.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "210"
      }
    ],
    "cooldown": 210
  },
  {
    "identifier": "71",
    "title": "净化",
    "description": "移除身上的所有限制效果和召唤师技能的减益效果，并在短时间内缩短新受到限制效果的持续时间。召唤师的决断：延长韧性增益的持续时间。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_boost.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "210"
      }
    ],
    "cooldown": 210
  },
  {
    "identifier": "75",
    "title": "洞察",
    "description": "在短时间内将地图上任意一块区域显形给你的队伍。召唤师的感悟：被【洞察】显形的单位将持续可见5秒。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_clairvoyance.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "60"
      }
    ],
    "cooldown": 60
  },
  {
    "identifier": "77",
    "title": "治疗术",
    "description": "为你的英雄及附近的友军回复生命值。召唤师的决断：每级获得5生命值。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_heal.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "300"
      }
    ],
    "cooldown": 300
  },
  {
    "identifier": "721",
    "title": "屏障",
    "description": "获得一个短时长的护盾。召唤师的决断：【屏障】的护盾效果提升。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summonerbarrier.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "210"
      }
    ],
    "cooldown": 210
  },
  {
    "identifier": "713",
    "title": "清晰术",
    "description": "为附近所有的友方英雄回复法力值。召唤师的感悟：多回复25%法力值。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summonermana.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "135"
      }
    ],
    "cooldown": 135
  },
  {
    "identifier": "705",
    "title": "强化要塞",
    "description": "使所有友方防御塔免疫伤害，并使防御塔的攻击速度加快100%，持续6秒。召唤师的决断：防御塔会对目标周围造成溅射伤害。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_fortify.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "180"
      }
    ],
    "cooldown": 180
  },
  {
    "identifier": "709",
    "title": "战争图腾",
    "description": "召唤一个临时信标，提升范围内友军的攻击力。召唤师的愤怒：【战争图腾】额外提供法术强度。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_rally.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "270"
      }
    ],
    "cooldown": 270
  },
  {
    "identifier": "716",
    "title": "战意激增",
    "description": "暂时强化你的英雄，在持续时间内提升攻击速度和法术强度。召唤师的愤怒：将该攻击速度加成提升5%，该法术强度加成提升10%。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_battlecry.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "180"
      }
    ],
    "cooldown": 180
  },
  {
    "identifier": "720",
    "title": "晋升",
    "description": "晋升一名小兵，使其获得额外属性和强化光环，并且它在击杀单位后获取的金币将共享给为其施放晋升的召唤师。召唤师的愤怒：攻城骑士的额外攻击力光环也会影响英雄。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/38.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "270"
      }
    ],
    "cooldown": 270
  },
  {
    "identifier": "777",
    "title": "重生",
    "description": "立刻在本队的召唤师平台上复活你的英雄，并暂时提升英雄的移动速度。召唤师的感悟：【重生】会为使用者临时提供220-560生命值。",
    "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.15/classic/assets/ux/jade/s3icons/samesized/s3_summoner_revive.project_jade.png",
    "group": null,
    "facts": [
      {
        "kind": "cooldown",
        "value": "510"
      }
    ],
    "cooldown": 510
  }
] as const satisfies readonly OpggClassicCatalogEntry[];

export const classicOpggCatalogSnapshot = {
  runes: classicOpggRunes,
  masteries: classicOpggMasteries,
  spells: classicOpggSpells,
} as const;
