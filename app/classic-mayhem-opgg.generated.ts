// Generated from OP.GG ARAM Mayhem Classic-ish 16.15. Do not edit manually.
export const OP_GG_MAYHEM_PATCH = "16.15";
export const OP_GG_MAYHEM_ASSET_PATCH = "16.15.1";
export const OP_GG_MAYHEM_SOURCE_URL = "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic";
export const OP_GG_MAYHEM_SNAPSHOT_HASH = "26791e818110b0677cf826920eca17389a67e21039419662d0338019c8683e38";
export const MAYHEM_STARTING_GOLD = 1400;
export const MAYHEM_HAS_JUNGLE_ROLE = false;

export type OpggMetric = {
  pickRate: number;
  games: number;
  winRate: number;
};

export type OpggItemRecommendation = {
  itemIds: string[];
  totalPrice: number;
  metric: OpggMetric;
};

export type OpggMayhemChampionBuild = {
  classicId: string;
  key: string;
  name: string;
  sourceUrl: string;
  patch: string;
  rank: number;
  tier: number;
  championMetrics: { pickRate: number; winRate: number };
  startingGold: number;
  augments: Array<{
    augmentId: number;
    apiName: string;
    name: string;
    metric: OpggMetric;
  }>;
  summonerSets: Array<{
    spells: Array<{ key: string; name: string; icon: string }>;
    metric: OpggMetric;
  }>;
  runes: { status: "unavailable"; reason: string };
  skillBuilds: Array<{
    priority: Array<"Q" | "W" | "E">;
    levelSequence: Array<"Q" | "W" | "E" | "R">;
    metric: OpggMetric;
  }>;
  items: {
    starting: OpggItemRecommendation[];
    boots: OpggItemRecommendation[];
    core: OpggItemRecommendation[];
  };
};

export const opggMayhemChampionBuilds: OpggMayhemChampionBuild[] = [
  {
    "classicId": "60010",
    "key": "kayle",
    "name": "正义天使",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/kayle/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 1,
    "tier": 1,
    "championMetrics": {
      "pickRate": 18.7394,
      "winRate": 63.8748
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 18.26,
          "games": 2518,
          "winRate": 65.85
        }
      },
      {
        "augmentId": 1129,
        "apiName": "ARAM_Marksmage",
        "name": "神射法师",
        "metric": {
          "pickRate": 17.17,
          "games": 2367,
          "winRate": 67.26
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 20.98,
          "games": 1471,
          "winRate": 63.83
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 10.6,
          "games": 1462,
          "winRate": 64.84
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 14.55,
          "games": 1020,
          "winRate": 65.2
        }
      },
      {
        "augmentId": 1170,
        "apiName": "ARAM_ScopedWeapons",
        "name": "万用瞄准镜",
        "metric": {
          "pickRate": 13.51,
          "games": 947,
          "winRate": 61.35
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 14.23,
          "games": 898,
          "winRate": 68.37
        }
      },
      {
        "augmentId": 1029,
        "apiName": "ARAM_EtherealWeapon",
        "name": "虚幻武器",
        "metric": {
          "pickRate": 6.19,
          "games": 854,
          "winRate": 68.27
        }
      },
      {
        "augmentId": 1054,
        "apiName": "ARAM_MasterofDuality",
        "name": "物法皆修",
        "metric": {
          "pickRate": 13.31,
          "games": 840,
          "winRate": 71.55
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 13.13,
          "games": 829,
          "winRate": 69.48
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 45.78,
          "games": 5311,
          "winRate": 65.62
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 20.72,
          "games": 2403,
          "winRate": 63.13
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.62,
          "games": 5235,
          "winRate": 64.78
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773101"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 14.15,
            "games": 1238,
            "winRate": 67.93
          }
        },
        {
          "itemIds": [
            "771001",
            "771037"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 13.44,
            "games": 1176,
            "winRate": 61.99
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 61.18,
            "games": 4342,
            "winRate": 65.82
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 25.59,
            "games": 1816,
            "winRate": 60.24
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773115",
            "773124",
            "773146"
          ],
          "totalPrice": 8500,
          "metric": {
            "pickRate": 5.4,
            "games": 329,
            "winRate": 68.09
          }
        },
        {
          "itemIds": [
            "773115",
            "773124",
            "773089"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 3.24,
            "games": 197,
            "winRate": 72.59
          }
        },
        {
          "itemIds": [
            "773078",
            "773124",
            "773146"
          ],
          "totalPrice": 9628,
          "metric": {
            "pickRate": 2.92,
            "games": 178,
            "winRate": 67.98
          }
        },
        {
          "itemIds": [
            "773124",
            "773146",
            "773091"
          ],
          "totalPrice": 8150,
          "metric": {
            "pickRate": 2.84,
            "games": 173,
            "winRate": 61.85
          }
        },
        {
          "itemIds": [
            "773124",
            "773115",
            "773146"
          ],
          "totalPrice": 8500,
          "metric": {
            "pickRate": 2.37,
            "games": 144,
            "winRate": 75
          }
        }
      ]
    }
  },
  {
    "classicId": "60096",
    "key": "kogmaw",
    "name": "深渊巨口",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/kogmaw/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 2,
    "tier": 1,
    "championMetrics": {
      "pickRate": 18.1153,
      "winRate": 59.5384
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 16.9,
          "games": 2261,
          "winRate": 60.68
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 12.08,
          "games": 1617,
          "winRate": 60.98
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 16.35,
          "games": 1140,
          "winRate": 59.56
        }
      },
      {
        "augmentId": 2009,
        "apiName": "ARAM_Zealot",
        "name": "狂热者",
        "metric": {
          "pickRate": 14.73,
          "games": 1027,
          "winRate": 59.2
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 7.44,
          "games": 996,
          "winRate": 61.85
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 15.77,
          "games": 971,
          "winRate": 68.18
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 14.5,
          "games": 893,
          "winRate": 64.73
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 12,
          "games": 837,
          "winRate": 59.86
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 5.59,
          "games": 748,
          "winRate": 54.55
        }
      },
      {
        "augmentId": 2096,
        "apiName": "LittleExtraHelp",
        "name": "小小的额外帮助",
        "metric": {
          "pickRate": 5.51,
          "games": 737,
          "winRate": 65.4
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 42.35,
          "games": 4733,
          "winRate": 60.89
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 15.73,
          "games": 1758,
          "winRate": 60.01
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.52,
          "games": 3643,
          "winRate": 60.88
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 26.17,
            "games": 2250,
            "winRate": 62.62
          }
        },
        {
          "itemIds": [
            "771053",
            "771055"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 4.31,
            "games": 371,
            "winRate": 55.8
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 57.73,
            "games": 3901,
            "winRate": 63.19
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 24.43,
            "games": 1651,
            "winRate": 57.48
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773153",
            "773085",
            "773124"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 10.21,
            "games": 720,
            "winRate": 62.36
          }
        },
        {
          "itemIds": [
            "773153",
            "773124",
            "773085"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 8.8,
            "games": 620,
            "winRate": 62.1
          }
        },
        {
          "itemIds": [
            "773153",
            "773085",
            "773109"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 2.71,
            "games": 191,
            "winRate": 65.97
          }
        },
        {
          "itemIds": [
            "773153",
            "773109",
            "773085"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 2.45,
            "games": 173,
            "winRate": 62.43
          }
        },
        {
          "itemIds": [
            "773085",
            "773153",
            "773124"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 2.43,
            "games": 171,
            "winRate": 61.4
          }
        }
      ]
    }
  },
  {
    "classicId": "60067",
    "key": "vayne",
    "name": "暗夜猎手",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/vayne/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 3,
    "tier": 1,
    "championMetrics": {
      "pickRate": 20.337,
      "winRate": 58.2662
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 19.14,
          "games": 2937,
          "winRate": 61.66
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 14.08,
          "games": 2161,
          "winRate": 58.45
        }
      },
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 12.38,
          "games": 1900,
          "winRate": 60.63
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 12.22,
          "games": 1876,
          "winRate": 57.2
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 23.31,
          "games": 1846,
          "winRate": 57.75
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 23.91,
          "games": 1631,
          "winRate": 67.87
        }
      },
      {
        "augmentId": 1077,
        "apiName": "ARAM_SoulSiphon",
        "name": "灵魂虹吸",
        "metric": {
          "pickRate": 10.07,
          "games": 1546,
          "winRate": 57.12
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 15.49,
          "games": 1227,
          "winRate": 56.56
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 6.99,
          "games": 1073,
          "winRate": 59.93
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 15.55,
          "games": 1061,
          "winRate": 54.38
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 50.63,
          "games": 6361,
          "winRate": 59.85
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 14.68,
          "games": 1845,
          "winRate": 56.21
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.6,
          "games": 4316,
          "winRate": 59.41
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 39.25,
            "games": 3765,
            "winRate": 58.8
          }
        },
        {
          "itemIds": [
            "771053",
            "771055"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 6.65,
            "games": 638,
            "winRate": 53.45
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 67.63,
            "games": 5483,
            "winRate": 59.53
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 28.11,
            "games": 2279,
            "winRate": 56.95
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773153",
            "773046",
            "773031"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 8.32,
            "games": 628,
            "winRate": 59.24
          }
        },
        {
          "itemIds": [
            "773153",
            "773124",
            "773085"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 4.3,
            "games": 325,
            "winRate": 56.92
          }
        },
        {
          "itemIds": [
            "773153",
            "773085",
            "773124"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 3.91,
            "games": 295,
            "winRate": 58.31
          }
        },
        {
          "itemIds": [
            "773153",
            "773124",
            "773091"
          ],
          "totalPrice": 7950,
          "metric": {
            "pickRate": 3.39,
            "games": 256,
            "winRate": 60.55
          }
        },
        {
          "itemIds": [
            "773153",
            "773124",
            "773109"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 3.02,
            "games": 228,
            "winRate": 60.53
          }
        }
      ]
    }
  },
  {
    "classicId": "60036",
    "key": "drmundo",
    "name": "祖安狂人",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/drmundo/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 4,
    "tier": 1,
    "championMetrics": {
      "pickRate": 18.1262,
      "winRate": 58.6676
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 20.79,
          "games": 2755,
          "winRate": 59.27
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 35.71,
          "games": 2413,
          "winRate": 60.34
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 17.84,
          "games": 2364,
          "winRate": 64.81
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 25.48,
          "games": 1523,
          "winRate": 60.08
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 11.03,
          "games": 1462,
          "winRate": 59.92
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 24.36,
          "games": 1456,
          "winRate": 62.5
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 10.46,
          "games": 1387,
          "winRate": 56.67
        }
      },
      {
        "augmentId": 2102,
        "apiName": "PressureCooker",
        "name": "高压锅",
        "metric": {
          "pickRate": 6.39,
          "games": 847,
          "winRate": 59.98
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 10.14,
          "games": 685,
          "winRate": 58.25
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 3.79,
          "games": 502,
          "winRate": 46.61
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 60.3,
          "games": 6768,
          "winRate": 59.96
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 14.48,
          "games": 1625,
          "winRate": 56.49
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.72,
          "games": 6451,
          "winRate": 59.67
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771006",
            "771011"
          ],
          "totalPrice": 1180,
          "metric": {
            "pickRate": 14.32,
            "games": 1216,
            "winRate": 59.95
          }
        },
        {
          "itemIds": [
            "771001",
            "771011"
          ],
          "totalPrice": 1325,
          "metric": {
            "pickRate": 8.95,
            "games": 760,
            "winRate": 60.66
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 44.96,
            "games": 2640,
            "winRate": 62.61
          }
        },
        {
          "itemIds": [
            "773005"
          ],
          "totalPrice": 2300,
          "metric": {
            "pickRate": 25.8,
            "games": 1515,
            "winRate": 59.21
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773083",
            "773068",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 16.71,
            "games": 855,
            "winRate": 61.29
          }
        },
        {
          "itemIds": [
            "773083",
            "773065",
            "773068"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 8.29,
            "games": 424,
            "winRate": 59.91
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 8.23,
            "games": 421,
            "winRate": 57.24
          }
        },
        {
          "itemIds": [
            "773083",
            "773065",
            "773143"
          ],
          "totalPrice": 8875,
          "metric": {
            "pickRate": 5.57,
            "games": 285,
            "winRate": 55.09
          }
        },
        {
          "itemIds": [
            "773083",
            "773065",
            "773075"
          ],
          "totalPrice": 7950,
          "metric": {
            "pickRate": 5.12,
            "games": 262,
            "winRate": 63.36
          }
        }
      ]
    }
  },
  {
    "classicId": "60015",
    "key": "sivir",
    "name": "战争女神",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/sivir/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 5,
    "tier": 1,
    "championMetrics": {
      "pickRate": 19.1887,
      "winRate": 57.2404
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 18.91,
          "games": 2696,
          "winRate": 60.16
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 14.11,
          "games": 2012,
          "winRate": 59.49
        }
      },
      {
        "augmentId": 1077,
        "apiName": "ARAM_SoulSiphon",
        "name": "灵魂虹吸",
        "metric": {
          "pickRate": 13.49,
          "games": 1923,
          "winRate": 62.09
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 11.86,
          "games": 1691,
          "winRate": 58.07
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 23.03,
          "games": 1669,
          "winRate": 58.72
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 11.48,
          "games": 1637,
          "winRate": 57.73
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 15.29,
          "games": 1108,
          "winRate": 53.52
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 16.64,
          "games": 1084,
          "winRate": 61.9
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 12.94,
          "games": 843,
          "winRate": 54.69
        }
      },
      {
        "augmentId": 1170,
        "apiName": "ARAM_ScopedWeapons",
        "name": "万用瞄准镜",
        "metric": {
          "pickRate": 11.4,
          "games": 826,
          "winRate": 53.87
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 41.02,
          "games": 4844,
          "winRate": 57.8
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 15.82,
          "games": 1868,
          "winRate": 56.69
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.72,
          "games": 6712,
          "winRate": 57.4
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771051",
            "773093"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 25.65,
            "games": 2296,
            "winRate": 57.62
          }
        },
        {
          "itemIds": [
            "773086"
          ],
          "totalPrice": 1175,
          "metric": {
            "pickRate": 11.75,
            "games": 1052,
            "winRate": 59.22
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 88.49,
            "games": 6372,
            "winRate": 57.88
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 6.14,
            "games": 442,
            "winRate": 59.73
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773087",
            "773031",
            "773072"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 15,
            "games": 1033,
            "winRate": 60.6
          }
        },
        {
          "itemIds": [
            "773087",
            "773031",
            "773046"
          ],
          "totalPrice": 9100,
          "metric": {
            "pickRate": 12.14,
            "games": 836,
            "winRate": 56.94
          }
        },
        {
          "itemIds": [
            "773087",
            "773031",
            "773153"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 5.15,
            "games": 355,
            "winRate": 56.06
          }
        },
        {
          "itemIds": [
            "773087",
            "773072",
            "773031"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 4.59,
            "games": 316,
            "winRate": 57.59
          }
        },
        {
          "itemIds": [
            "773087",
            "773072",
            "773046"
          ],
          "totalPrice": 8500,
          "metric": {
            "pickRate": 2.89,
            "games": 199,
            "winRate": 49.25
          }
        }
      ]
    }
  },
  {
    "classicId": "60022",
    "key": "ashe",
    "name": "寒冰射手",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/ashe/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 6,
    "tier": 2,
    "championMetrics": {
      "pickRate": 22.2451,
      "winRate": 54.8885
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 17.06,
          "games": 2834,
          "winRate": 58.26
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 13.69,
          "games": 2275,
          "winRate": 56.44
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 13.69,
          "games": 2275,
          "winRate": 56
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 13.41,
          "games": 2229,
          "winRate": 56.57
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 20.97,
          "games": 1768,
          "winRate": 54.36
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 16.28,
          "games": 1373,
          "winRate": 50.47
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 17.6,
          "games": 1337,
          "winRate": 56.84
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 7.49,
          "games": 1244,
          "winRate": 57.4
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 14.43,
          "games": 1096,
          "winRate": 56.84
        }
      },
      {
        "augmentId": 1170,
        "apiName": "ARAM_ScopedWeapons",
        "name": "万用瞄准镜",
        "metric": {
          "pickRate": 12.31,
          "games": 1038,
          "winRate": 53.85
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 44.57,
          "games": 6107,
          "winRate": 55.15
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 15.03,
          "games": 2060,
          "winRate": 54.22
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.54,
          "games": 4720,
          "winRate": 56
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 25.26,
            "games": 2615,
            "winRate": 56.52
          }
        },
        {
          "itemIds": [
            "771042",
            "771043"
          ],
          "totalPrice": 1300,
          "metric": {
            "pickRate": 5.89,
            "games": 610,
            "winRate": 59.67
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 67.37,
            "games": 5724,
            "winRate": 57.53
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 22.32,
            "games": 1896,
            "winRate": 51.64
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773153",
            "773085",
            "773031"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 6.39,
            "games": 525,
            "winRate": 54.48
          }
        },
        {
          "itemIds": [
            "773153",
            "773085",
            "773124"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 4.95,
            "games": 407,
            "winRate": 56.02
          }
        },
        {
          "itemIds": [
            "773153",
            "773085",
            "773109"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 3.83,
            "games": 315,
            "winRate": 63.81
          }
        },
        {
          "itemIds": [
            "773153",
            "773046",
            "773031"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 2.69,
            "games": 221,
            "winRate": 56.56
          }
        },
        {
          "itemIds": [
            "773153",
            "773109",
            "773085"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 2.56,
            "games": 210,
            "winRate": 57.14
          }
        }
      ]
    }
  },
  {
    "classicId": "60063",
    "key": "brand",
    "name": "复仇焰魂",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/brand/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 7,
    "tier": 2,
    "championMetrics": {
      "pickRate": 21.6335,
      "winRate": 54.9329
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 15.18,
          "games": 2415,
          "winRate": 51.59
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 28,
          "games": 2045,
          "winRate": 65.53
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 12.73,
          "games": 2025,
          "winRate": 53.98
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 20.86,
          "games": 1718,
          "winRate": 55.18
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 10.6,
          "games": 1686,
          "winRate": 59.02
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 9.35,
          "games": 1488,
          "winRate": 57.12
        }
      },
      {
        "augmentId": 1044,
        "apiName": "ARAM_IceCold",
        "name": "冰寒",
        "metric": {
          "pickRate": 16.3,
          "games": 1342,
          "winRate": 55.89
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 12.42,
          "games": 907,
          "winRate": 52.26
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 5.17,
          "games": 822,
          "winRate": 53.04
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 3.88,
          "games": 618,
          "winRate": 53.07
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 28.48,
          "games": 3783,
          "winRate": 55.35
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 22.54,
          "games": 2994,
          "winRate": 56.28
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "E",
          "Q"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "E",
          "W",
          "E",
          "R",
          "E",
          "E",
          "Q",
          "Q"
        ],
        "metric": {
          "pickRate": 0.57,
          "games": 4923,
          "winRate": 54.19
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 15.13,
            "games": 1531,
            "winRate": 55.39
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 8.48,
            "games": 858,
            "winRate": 51.86
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 74.63,
            "games": 5231,
            "winRate": 56.68
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 10.83,
            "games": 759,
            "winRate": 48.22
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773116",
            "773089"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 4.82,
            "games": 285,
            "winRate": 53.68
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 2.67,
            "games": 158,
            "winRate": 48.73
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773116"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 2.64,
            "games": 156,
            "winRate": 57.69
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 2.64,
            "games": 156,
            "winRate": 49.36
          }
        },
        {
          "itemIds": [
            "773135",
            "773116",
            "773128"
          ],
          "totalPrice": 8295,
          "metric": {
            "pickRate": 2.08,
            "games": 123,
            "winRate": 50.41
          }
        }
      ]
    }
  },
  {
    "classicId": "60045",
    "key": "veigar",
    "name": "邪恶小法师",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/veigar/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 8,
    "tier": 2,
    "championMetrics": {
      "pickRate": 21.504,
      "winRate": 54.8212
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 14.37,
          "games": 2287,
          "winRate": 52.47
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 11.64,
          "games": 1852,
          "winRate": 56.48
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 21.35,
          "games": 1730,
          "winRate": 54.39
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 10.23,
          "games": 1628,
          "winRate": 58.42
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 9.22,
          "games": 1467,
          "winRate": 53.1
        }
      },
      {
        "augmentId": 1180,
        "apiName": "ARAM_BigBrain",
        "name": "超强大脑",
        "metric": {
          "pickRate": 8.5,
          "games": 1353,
          "winRate": 61.49
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 14.82,
          "games": 1073,
          "winRate": 59.65
        }
      },
      {
        "augmentId": 1056,
        "apiName": "ARAM_MindtoMatter",
        "name": "由心及物",
        "metric": {
          "pickRate": 12.46,
          "games": 1010,
          "winRate": 52.38
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 5.18,
          "games": 825,
          "winRate": 51.64
        }
      },
      {
        "augmentId": 2087,
        "apiName": "ARAM_Archmage",
        "name": "大法师",
        "metric": {
          "pickRate": 11.38,
          "games": 824,
          "winRate": 52.67
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 25.44,
          "games": 3387,
          "winRate": 55.21
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 23.97,
          "games": 3191,
          "winRate": 54.34
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.68,
          "games": 6655,
          "winRate": 55.04
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "773070"
          ],
          "totalPrice": 1025,
          "metric": {
            "pickRate": 5.48,
            "games": 549,
            "winRate": 54.46
          }
        },
        {
          "itemIds": [
            "771026",
            "771056"
          ],
          "totalPrice": 1260,
          "metric": {
            "pickRate": 5.29,
            "games": 530,
            "winRate": 52.08
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 68.4,
            "games": 5023,
            "winRate": 55.48
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 15.97,
            "games": 1173,
            "winRate": 51.75
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 8.86,
            "games": 578,
            "winRate": 54.15
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 7.48,
            "games": 488,
            "winRate": 52.25
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 5.59,
            "games": 365,
            "winRate": 53.97
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773128"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 4.61,
            "games": 301,
            "winRate": 49.5
          }
        },
        {
          "itemIds": [
            "773070",
            "773128",
            "773003",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.05,
            "games": 199,
            "winRate": 49.25
          }
        }
      ]
    }
  },
  {
    "classicId": "60027",
    "key": "singed",
    "name": "炼金术士",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/singed/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 9,
    "tier": 2,
    "championMetrics": {
      "pickRate": 14.0573,
      "winRate": 56.3041
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 10.11,
          "games": 1061,
          "winRate": 57.87
        }
      },
      {
        "augmentId": 1044,
        "apiName": "ARAM_IceCold",
        "name": "冰寒",
        "metric": {
          "pickRate": 19.79,
          "games": 1055,
          "winRate": 57.06
        }
      },
      {
        "augmentId": 2137,
        "apiName": "PatOnTheBack",
        "name": "轻拍背部",
        "metric": {
          "pickRate": 8.98,
          "games": 943,
          "winRate": 55.04
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 19.2,
          "games": 942,
          "winRate": 60.72
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 7.67,
          "games": 805,
          "winRate": 54.66
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 7.61,
          "games": 799,
          "winRate": 50.94
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 6.71,
          "games": 704,
          "winRate": 58.81
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 6.28,
          "games": 659,
          "winRate": 48.71
        }
      },
      {
        "augmentId": 7011,
        "apiName": "TrueEternity",
        "name": "真正的永恒",
        "metric": {
          "pickRate": 12.03,
          "games": 590,
          "winRate": 50.68
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 11.6,
          "games": 569,
          "winRate": 55.71
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 40.38,
          "games": 3488,
          "winRate": 55.73
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 29.76,
          "games": 2571,
          "winRate": 57.41
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.74,
          "games": 5382,
          "winRate": 57.06
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 34.99,
            "games": 2304,
            "winRate": 55.6
          }
        },
        {
          "itemIds": [
            "771001",
            "771026"
          ],
          "totalPrice": 1185,
          "metric": {
            "pickRate": 7.08,
            "games": 466,
            "winRate": 58.37
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773009"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 42.31,
            "games": 2642,
            "winRate": 56.55
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 25.5,
            "games": 1592,
            "winRate": 58.35
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773116",
            "773110",
            "773075"
          ],
          "totalPrice": 8000,
          "metric": {
            "pickRate": 6.52,
            "games": 77,
            "winRate": 46.75
          }
        },
        {
          "itemIds": [
            "773116",
            "773128",
            "773089"
          ],
          "totalPrice": 9300,
          "metric": {
            "pickRate": 2.54,
            "games": 30,
            "winRate": 63.33
          }
        },
        {
          "itemIds": [
            "773128",
            "773116",
            "773089"
          ],
          "totalPrice": 9300,
          "metric": {
            "pickRate": 2.46,
            "games": 29,
            "winRate": 55.17
          }
        },
        {
          "itemIds": [
            "773116",
            "773089",
            "773135"
          ],
          "totalPrice": 8495,
          "metric": {
            "pickRate": 2.2,
            "games": 26,
            "winRate": 57.69
          }
        },
        {
          "itemIds": [
            "773116",
            "773135",
            "773089"
          ],
          "totalPrice": 8495,
          "metric": {
            "pickRate": 1.86,
            "games": 22,
            "winRate": 77.27
          }
        }
      ]
    }
  },
  {
    "classicId": "60021",
    "key": "missfortune",
    "name": "赏金猎人",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/missfortune/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 10,
    "tier": 2,
    "championMetrics": {
      "pickRate": 22.1843,
      "winRate": 53.5832
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 13.05,
          "games": 2159,
          "winRate": 55.77
        }
      },
      {
        "augmentId": 1077,
        "apiName": "ARAM_SoulSiphon",
        "name": "灵魂虹吸",
        "metric": {
          "pickRate": 10.42,
          "games": 1723,
          "winRate": 56.65
        }
      },
      {
        "augmentId": 1415,
        "apiName": "Twinfire",
        "name": "双生火焰",
        "metric": {
          "pickRate": 17.12,
          "games": 1430,
          "winRate": 54.55
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 8.31,
          "games": 1375,
          "winRate": 52.15
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 7.83,
          "games": 1296,
          "winRate": 54.32
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 7.47,
          "games": 1236,
          "winRate": 53.24
        }
      },
      {
        "augmentId": 1048,
        "apiName": "ARAM_JeweledGauntlet",
        "name": "珠光护手",
        "metric": {
          "pickRate": 15.24,
          "games": 1131,
          "winRate": 51.19
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 6.36,
          "games": 1052,
          "winRate": 52.66
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 6.26,
          "games": 1035,
          "winRate": 50.82
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 5.76,
          "games": 952,
          "winRate": 49.89
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 31.47,
          "games": 4303,
          "winRate": 54.15
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 17.18,
          "games": 2350,
          "winRate": 51.4
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.62,
          "games": 4476,
          "winRate": 55.36
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "771037"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 6.29,
            "games": 647,
            "winRate": 56.11
          }
        },
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 5.45,
            "games": 561,
            "winRate": 54.37
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 65.4,
            "games": 4626,
            "winRate": 55.1
          }
        },
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 11.47,
            "games": 811,
            "winRate": 52.03
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773142",
            "773031",
            "773071"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 4.88,
            "games": 361,
            "winRate": 57.34
          }
        },
        {
          "itemIds": [
            "773142",
            "773031",
            "773072"
          ],
          "totalPrice": 9700,
          "metric": {
            "pickRate": 4.61,
            "games": 341,
            "winRate": 59.24
          }
        },
        {
          "itemIds": [
            "773072",
            "773046",
            "773031"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 1.88,
            "games": 139,
            "winRate": 47.48
          }
        },
        {
          "itemIds": [
            "773031",
            "773142",
            "773072"
          ],
          "totalPrice": 9700,
          "metric": {
            "pickRate": 1.7,
            "games": 126,
            "winRate": 50.79
          }
        },
        {
          "itemIds": [
            "773031",
            "773046",
            "773072"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 1.61,
            "games": 119,
            "winRate": 53.78
          }
        }
      ]
    }
  },
  {
    "classicId": "60037",
    "key": "sona",
    "name": "琴瑟仙女",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/sona/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 11,
    "tier": 2,
    "championMetrics": {
      "pickRate": 15.1556,
      "winRate": 54.7251
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 18.05,
          "games": 1982,
          "winRate": 55.45
        }
      },
      {
        "augmentId": 1037,
        "apiName": "ARAM_FirstAidKit",
        "name": "急救用具",
        "metric": {
          "pickRate": 27.37,
          "games": 1518,
          "winRate": 56.32
        }
      },
      {
        "augmentId": 1420,
        "apiName": "Sonata",
        "name": "咏叹奏鸣",
        "metric": {
          "pickRate": 12.85,
          "games": 1411,
          "winRate": 57.34
        }
      },
      {
        "augmentId": 1141,
        "apiName": "ARAM_AllForYou",
        "name": "全心为你",
        "metric": {
          "pickRate": 11.61,
          "games": 1275,
          "winRate": 52.86
        }
      },
      {
        "augmentId": 1076,
        "apiName": "ARAM_SonicBoom",
        "name": "天音爆",
        "metric": {
          "pickRate": 21.84,
          "games": 1211,
          "winRate": 55
        }
      },
      {
        "augmentId": 1005,
        "apiName": "ARAM_WeeWooWeeWoo",
        "name": "喂呜喂呜",
        "metric": {
          "pickRate": 9.17,
          "games": 1007,
          "winRate": 57.99
        }
      },
      {
        "augmentId": 2104,
        "apiName": "ARAM_SpiritBomb",
        "name": "灵魄炸弹",
        "metric": {
          "pickRate": 14.59,
          "games": 718,
          "winRate": 59.33
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 5.04,
          "games": 553,
          "winRate": 47.56
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 5,
          "games": 549,
          "winRate": 55.74
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 4.7,
          "games": 516,
          "winRate": 50.19
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 26.33,
          "games": 2456,
          "winRate": 54.32
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerMana",
            "name": "清晰术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerMana.png"
          }
        ],
        "metric": {
          "pickRate": 18.33,
          "games": 1710,
          "winRate": 57.08
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.63,
          "games": 3534,
          "winRate": 55.35
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771004",
            "771004",
            "771004",
            "773098"
          ],
          "totalPrice": 1305,
          "metric": {
            "pickRate": 5.08,
            "games": 349,
            "winRate": 56.73
          }
        },
        {
          "itemIds": [
            "771004",
            "773010"
          ],
          "totalPrice": 1380,
          "metric": {
            "pickRate": 4.77,
            "games": 328,
            "winRate": 51.22
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 36.91,
            "games": 2119,
            "winRate": 58.85
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 23.86,
            "games": 1370,
            "winRate": 51.75
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773084",
            "773504",
            "773107"
          ],
          "totalPrice": 7800,
          "metric": {
            "pickRate": 3.15,
            "games": 103,
            "winRate": 63.11
          }
        },
        {
          "itemIds": [
            "773504",
            "773222",
            "773107"
          ],
          "totalPrice": 7650,
          "metric": {
            "pickRate": 2.42,
            "games": 79,
            "winRate": 60.76
          }
        },
        {
          "itemIds": [
            "773084",
            "773504",
            "773222"
          ],
          "totalPrice": 7350,
          "metric": {
            "pickRate": 1.99,
            "games": 65,
            "winRate": 50.77
          }
        },
        {
          "itemIds": [
            "773504",
            "773222",
            "773084"
          ],
          "totalPrice": 7350,
          "metric": {
            "pickRate": 1.47,
            "games": 48,
            "winRate": 52.08
          }
        },
        {
          "itemIds": [
            "773084",
            "773504",
            "773152"
          ],
          "totalPrice": 7400,
          "metric": {
            "pickRate": 1.44,
            "games": 47,
            "winRate": 68.09
          }
        }
      ]
    }
  },
  {
    "classicId": "60014",
    "key": "sion",
    "name": "亡灵战神",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/sion/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 12,
    "tier": 2,
    "championMetrics": {
      "pickRate": 16.4958,
      "winRate": 54.1284
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 17.72,
          "games": 2156,
          "winRate": 53.85
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 16.35,
          "games": 1989,
          "winRate": 58.22
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 30.93,
          "games": 1941,
          "winRate": 57.03
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 24.58,
          "games": 1362,
          "winRate": 57.05
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 22.9,
          "games": 1269,
          "winRate": 54.93
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 9.83,
          "games": 1196,
          "winRate": 54.18
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 7.06,
          "games": 859,
          "winRate": 55.41
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 6.71,
          "games": 816,
          "winRate": 52.7
        }
      },
      {
        "augmentId": 2102,
        "apiName": "PressureCooker",
        "name": "高压锅",
        "metric": {
          "pickRate": 5.77,
          "games": 702,
          "winRate": 57.41
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 5.41,
          "games": 658,
          "winRate": 48.02
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 67.98,
          "games": 6880,
          "winRate": 53.9
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 9.79,
          "games": 991,
          "winRate": 53.88
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.67,
          "games": 5328,
          "winRate": 54.88
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771006",
            "771011"
          ],
          "totalPrice": 1180,
          "metric": {
            "pickRate": 9.33,
            "games": 704,
            "winRate": 53.55
          }
        },
        {
          "itemIds": [
            "771001",
            "771011"
          ],
          "totalPrice": 1325,
          "metric": {
            "pickRate": 8.42,
            "games": 635,
            "winRate": 56.85
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 44,
            "games": 2273,
            "winRate": 56.97
          }
        },
        {
          "itemIds": [
            "773005"
          ],
          "totalPrice": 2300,
          "metric": {
            "pickRate": 26.64,
            "games": 1376,
            "winRate": 54.58
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773083",
            "773068",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 9.05,
            "games": 378,
            "winRate": 54.5
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 6.78,
            "games": 283,
            "winRate": 60.78
          }
        },
        {
          "itemIds": [
            "773068",
            "773110",
            "773065"
          ],
          "totalPrice": 8300,
          "metric": {
            "pickRate": 3.66,
            "games": 153,
            "winRate": 54.9
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773110"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 3.33,
            "games": 139,
            "winRate": 53.96
          }
        },
        {
          "itemIds": [
            "773083",
            "773068",
            "773110"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 2.47,
            "games": 103,
            "winRate": 45.63
          }
        }
      ]
    }
  },
  {
    "classicId": "60017",
    "key": "teemo",
    "name": "迅捷斥候",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/teemo/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 13,
    "tier": 2,
    "championMetrics": {
      "pickRate": 20.1545,
      "winRate": 52.9958
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 11.06,
          "games": 1648,
          "winRate": 50.49
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 10.71,
          "games": 1595,
          "winRate": 52.41
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 9.93,
          "games": 1480,
          "winRate": 51.76
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 8.2,
          "games": 1221,
          "winRate": 52.66
        }
      },
      {
        "augmentId": 1029,
        "apiName": "ARAM_EtherealWeapon",
        "name": "虚幻武器",
        "metric": {
          "pickRate": 7.86,
          "games": 1171,
          "winRate": 60.97
        }
      },
      {
        "augmentId": 1415,
        "apiName": "Twinfire",
        "name": "双生火焰",
        "metric": {
          "pickRate": 14.27,
          "games": 1088,
          "winRate": 53.77
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 6.93,
          "games": 1032,
          "winRate": 54.65
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 13.11,
          "games": 1000,
          "winRate": 52.1
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 10.57,
          "games": 806,
          "winRate": 52.23
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 9.3,
          "games": 709,
          "winRate": 52.61
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 24.71,
          "games": 3066,
          "winRate": 53.1
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 24.68,
          "games": 3063,
          "winRate": 52.89
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.62,
          "games": 4156,
          "winRate": 51.97
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773101"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 17.58,
            "games": 1645,
            "winRate": 52.46
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 14.57,
            "games": 1363,
            "winRate": 56.57
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 47.8,
            "games": 3265,
            "winRate": 53.94
          }
        },
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 35.25,
            "games": 2408,
            "winRate": 52.49
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773115",
            "773089",
            "773135"
          ],
          "totalPrice": 8095,
          "metric": {
            "pickRate": 5.54,
            "games": 290,
            "winRate": 51.72
          }
        },
        {
          "itemIds": [
            "773115",
            "773089",
            "773091"
          ],
          "totalPrice": 7950,
          "metric": {
            "pickRate": 4.03,
            "games": 211,
            "winRate": 51.66
          }
        },
        {
          "itemIds": [
            "773115",
            "773091",
            "773089"
          ],
          "totalPrice": 7950,
          "metric": {
            "pickRate": 3.73,
            "games": 195,
            "winRate": 49.74
          }
        },
        {
          "itemIds": [
            "773115",
            "773128",
            "773089"
          ],
          "totalPrice": 8900,
          "metric": {
            "pickRate": 3.42,
            "games": 179,
            "winRate": 55.31
          }
        },
        {
          "itemIds": [
            "773115",
            "773089",
            "773157"
          ],
          "totalPrice": 9060,
          "metric": {
            "pickRate": 3.14,
            "games": 164,
            "winRate": 51.22
          }
        }
      ]
    }
  },
  {
    "classicId": "60018",
    "key": "tristana",
    "name": "麦林炮手",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/tristana/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 14,
    "tier": 2,
    "championMetrics": {
      "pickRate": 20.2231,
      "winRate": 52.3916
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 16.49,
          "games": 2462,
          "winRate": 58.57
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 13.28,
          "games": 1983,
          "winRate": 54.77
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 12.54,
          "games": 1872,
          "winRate": 53.26
        }
      },
      {
        "augmentId": 1077,
        "apiName": "ARAM_SoulSiphon",
        "name": "灵魂虹吸",
        "metric": {
          "pickRate": 11.88,
          "games": 1774,
          "winRate": 55.92
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 11.86,
          "games": 1771,
          "winRate": 52.4
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 17.8,
          "games": 1361,
          "winRate": 52.83
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 16.28,
          "games": 1092,
          "winRate": 58.42
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 14.95,
          "games": 1003,
          "winRate": 50.15
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 11.18,
          "games": 855,
          "winRate": 49.24
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 5.69,
          "games": 850,
          "winRate": 53.06
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 30.76,
          "games": 3826,
          "winRate": 52.72
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 20.2,
          "games": 2513,
          "winRate": 52.09
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.66,
          "games": 5923,
          "winRate": 54.16
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773086"
          ],
          "totalPrice": 1175,
          "metric": {
            "pickRate": 13.36,
            "games": 1258,
            "winRate": 52.7
          }
        },
        {
          "itemIds": [
            "771037",
            "771055"
          ],
          "totalPrice": 1350,
          "metric": {
            "pickRate": 8.62,
            "games": 811,
            "winRate": 51.17
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 90.3,
            "games": 6274,
            "winRate": 53.32
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 4.42,
            "games": 307,
            "winRate": 57
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773087",
            "773031",
            "773072"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 5.83,
            "games": 416,
            "winRate": 60.34
          }
        },
        {
          "itemIds": [
            "773031",
            "773087",
            "773072"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 5.8,
            "games": 414,
            "winRate": 60.63
          }
        },
        {
          "itemIds": [
            "773087",
            "773031",
            "773046"
          ],
          "totalPrice": 9100,
          "metric": {
            "pickRate": 5.19,
            "games": 370,
            "winRate": 53.24
          }
        },
        {
          "itemIds": [
            "773031",
            "773087",
            "773046"
          ],
          "totalPrice": 9100,
          "metric": {
            "pickRate": 4.88,
            "games": 348,
            "winRate": 54.89
          }
        },
        {
          "itemIds": [
            "773031",
            "773046",
            "773072"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.91,
            "games": 279,
            "winRate": 54.48
          }
        }
      ]
    }
  },
  {
    "classicId": "60012",
    "key": "alistar",
    "name": "牛头酋长",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/alistar/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 15,
    "tier": 2,
    "championMetrics": {
      "pickRate": 13.4847,
      "winRate": 53.5462
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 14.26,
          "games": 1436,
          "winRate": 56.48
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 13.88,
          "games": 1398,
          "winRate": 55.15
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 11.57,
          "games": 1165,
          "winRate": 54.76
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 19.57,
          "games": 1013,
          "winRate": 56.56
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 9.95,
          "games": 1002,
          "winRate": 55.09
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 16.23,
          "games": 745,
          "winRate": 56.64
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 14.04,
          "games": 727,
          "winRate": 54.2
        }
      },
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 7.12,
          "games": 717,
          "winRate": 49.37
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 15.01,
          "games": 689,
          "winRate": 53.56
        }
      },
      {
        "augmentId": 1018,
        "apiName": "ARAM_CourageoftheColossus",
        "name": "巨像的勇气",
        "metric": {
          "pickRate": 11.59,
          "games": 532,
          "winRate": 59.4
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 73.23,
          "games": 6079,
          "winRate": 54.65
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 8.5,
          "games": 706,
          "winRate": 49.43
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.67,
          "games": 4245,
          "winRate": 54.82
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771054",
            "773132"
          ],
          "totalPrice": 1265,
          "metric": {
            "pickRate": 8.73,
            "games": 545,
            "winRate": 54.31
          }
        },
        {
          "itemIds": [
            "771006",
            "771011"
          ],
          "totalPrice": 1180,
          "metric": {
            "pickRate": 6.41,
            "games": 400,
            "winRate": 58.25
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 49.11,
            "games": 2289,
            "winRate": 58.15
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 13.92,
            "games": 649,
            "winRate": 52.39
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773083",
            "773107",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 4.35,
            "games": 162,
            "winRate": 53.09
          }
        },
        {
          "itemIds": [
            "773107",
            "773083",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 2.82,
            "games": 105,
            "winRate": 64.76
          }
        },
        {
          "itemIds": [
            "773190",
            "773083",
            "773065"
          ],
          "totalPrice": 7975,
          "metric": {
            "pickRate": 2.18,
            "games": 81,
            "winRate": 56.79
          }
        },
        {
          "itemIds": [
            "773083",
            "773190",
            "773065"
          ],
          "totalPrice": 7975,
          "metric": {
            "pickRate": 2.18,
            "games": 81,
            "winRate": 49.38
          }
        },
        {
          "itemIds": [
            "773083",
            "773065",
            "773075"
          ],
          "totalPrice": 7950,
          "metric": {
            "pickRate": 1.77,
            "games": 66,
            "winRate": 43.94
          }
        }
      ]
    }
  },
  {
    "classicId": "60099",
    "key": "lux",
    "name": "光辉女郎",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/lux/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 16,
    "tier": 2,
    "championMetrics": {
      "pickRate": 21.6054,
      "winRate": 51.7548
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 23.22,
          "games": 1880,
          "winRate": 52.39
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 11.39,
          "games": 1804,
          "winRate": 48.56
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 11.15,
          "games": 1766,
          "winRate": 50.57
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 10.81,
          "games": 1712,
          "winRate": 50
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 8.95,
          "games": 1418,
          "winRate": 53.81
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 15.53,
          "games": 1125,
          "winRate": 55.82
        }
      },
      {
        "augmentId": 2103,
        "apiName": "ARAM_BangBang",
        "name": "狙神飞星",
        "metric": {
          "pickRate": 5.96,
          "games": 944,
          "winRate": 52.97
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 10.38,
          "games": 840,
          "winRate": 53.45
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 5.09,
          "games": 806,
          "winRate": 49.13
        }
      },
      {
        "augmentId": 2087,
        "apiName": "ARAM_Archmage",
        "name": "大法师",
        "metric": {
          "pickRate": 10.54,
          "games": 764,
          "winRate": 50.65
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 19.72,
          "games": 2638,
          "winRate": 50.83
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 18.42,
          "games": 2465,
          "winRate": 49.86
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.61,
          "games": 6325,
          "winRate": 50.92
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771056",
            "773028"
          ],
          "totalPrice": 1280,
          "metric": {
            "pickRate": 5.05,
            "games": 501,
            "winRate": 50.7
          }
        },
        {
          "itemIds": [
            "773041"
          ],
          "totalPrice": 1235,
          "metric": {
            "pickRate": 5,
            "games": 496,
            "winRate": 57.26
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 56.68,
            "games": 4670,
            "winRate": 52.55
          }
        },
        {
          "itemIds": [
            "773174"
          ],
          "totalPrice": 2600,
          "metric": {
            "pickRate": 26.87,
            "games": 2214,
            "winRate": 52.21
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 9.35,
            "games": 560,
            "winRate": 47.68
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.77,
            "games": 226,
            "winRate": 48.23
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 3.51,
            "games": 210,
            "winRate": 45.24
          }
        },
        {
          "itemIds": [
            "773089",
            "773135",
            "773165"
          ],
          "totalPrice": 7795,
          "metric": {
            "pickRate": 3.37,
            "games": 202,
            "winRate": 47.03
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.29,
            "games": 197,
            "winRate": 42.64
          }
        }
      ]
    }
  },
  {
    "classicId": "60044",
    "key": "taric",
    "name": "瓦洛兰之盾",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/taric/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 17,
    "tier": 3,
    "championMetrics": {
      "pickRate": 7.77752,
      "winRate": 53.9819
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 12.3,
          "games": 681,
          "winRate": 52.42
        }
      },
      {
        "augmentId": 1037,
        "apiName": "ARAM_FirstAidKit",
        "name": "急救用具",
        "metric": {
          "pickRate": 22.28,
          "games": 638,
          "winRate": 51.88
        }
      },
      {
        "augmentId": 1076,
        "apiName": "ARAM_SonicBoom",
        "name": "天音爆",
        "metric": {
          "pickRate": 18.76,
          "games": 537,
          "winRate": 56.8
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 9.36,
          "games": 518,
          "winRate": 53.28
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 8.93,
          "games": 494,
          "winRate": 52.02
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 7.24,
          "games": 401,
          "winRate": 49.13
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 13.8,
          "games": 395,
          "winRate": 53.92
        }
      },
      {
        "augmentId": 1141,
        "apiName": "ARAM_AllForYou",
        "name": "全心为你",
        "metric": {
          "pickRate": 7.05,
          "games": 390,
          "winRate": 53.33
        }
      },
      {
        "augmentId": 1301,
        "apiName": "ARAM_DivineIntervention",
        "name": "神圣干预",
        "metric": {
          "pickRate": 6.99,
          "games": 387,
          "winRate": 52.2
        }
      },
      {
        "augmentId": 1420,
        "apiName": "Sonata",
        "name": "咏叹奏鸣",
        "metric": {
          "pickRate": 6.43,
          "games": 356,
          "winRate": 51.12
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 57.67,
          "games": 2773,
          "winRate": 54.67
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 11.92,
          "games": 573,
          "winRate": 50.96
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.51,
          "games": 1408,
          "winRate": 56.39
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771054",
            "773132"
          ],
          "totalPrice": 1265,
          "metric": {
            "pickRate": 9.63,
            "games": 346,
            "winRate": 52.31
          }
        },
        {
          "itemIds": [
            "771006",
            "771011"
          ],
          "totalPrice": 1180,
          "metric": {
            "pickRate": 3.67,
            "games": 132,
            "winRate": 53.79
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 51.21,
            "games": 1372,
            "winRate": 56.49
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 15.45,
            "games": 414,
            "winRate": 50.72
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773107",
            "773083",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 3.17,
            "games": 71,
            "winRate": 67.61
          }
        },
        {
          "itemIds": [
            "773107",
            "773190",
            "773065"
          ],
          "totalPrice": 7925,
          "metric": {
            "pickRate": 2.77,
            "games": 62,
            "winRate": 53.23
          }
        },
        {
          "itemIds": [
            "773083",
            "773107",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 2.68,
            "games": 60,
            "winRate": 63.33
          }
        },
        {
          "itemIds": [
            "773190",
            "773107",
            "773065"
          ],
          "totalPrice": 7925,
          "metric": {
            "pickRate": 2.5,
            "games": 56,
            "winRate": 51.79
          }
        },
        {
          "itemIds": [
            "773190",
            "773083",
            "773065"
          ],
          "totalPrice": 7975,
          "metric": {
            "pickRate": 2.28,
            "games": 51,
            "winRate": 45.1
          }
        }
      ]
    }
  },
  {
    "classicId": "60029",
    "key": "twitch",
    "name": "瘟疫之源",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/twitch/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 18,
    "tier": 3,
    "championMetrics": {
      "pickRate": 20.1326,
      "winRate": 51.4414
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 16.96,
          "games": 2468,
          "winRate": 53.16
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 15.36,
          "games": 2235,
          "winRate": 51.72
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 10.6,
          "games": 1542,
          "winRate": 54.73
        }
      },
      {
        "augmentId": 1022,
        "apiName": "ARAM_Deft",
        "name": "灵巧",
        "metric": {
          "pickRate": 18.18,
          "games": 1375,
          "winRate": 51.85
        }
      },
      {
        "augmentId": 1225,
        "apiName": "ARAM_DualWield",
        "name": "双刀流",
        "metric": {
          "pickRate": 17.14,
          "games": 1162,
          "winRate": 60.15
        }
      },
      {
        "augmentId": 2009,
        "apiName": "ARAM_Zealot",
        "name": "狂热者",
        "metric": {
          "pickRate": 12.84,
          "games": 971,
          "winRate": 53.14
        }
      },
      {
        "augmentId": 1322,
        "apiName": "ARAM_GetExcited",
        "name": "罪恶快感",
        "metric": {
          "pickRate": 6.52,
          "games": 949,
          "winRate": 47.73
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 12.31,
          "games": 931,
          "winRate": 51.34
        }
      },
      {
        "augmentId": 1115,
        "apiName": "ARAM_ScopiestWeapons",
        "name": "最万用的瞄准镜",
        "metric": {
          "pickRate": 12.69,
          "games": 860,
          "winRate": 53.02
        }
      },
      {
        "augmentId": 1081,
        "apiName": "ARAM_TapDancer",
        "name": "踢踏舞",
        "metric": {
          "pickRate": 11.58,
          "games": 785,
          "winRate": 56.43
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 44.58,
          "games": 5567,
          "winRate": 52.65
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 15.09,
          "games": 1885,
          "winRate": 51.3
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.65,
          "games": 5928,
          "winRate": 53.17
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 28,
            "games": 2650,
            "winRate": 54.45
          }
        },
        {
          "itemIds": [
            "771042",
            "771043"
          ],
          "totalPrice": 1300,
          "metric": {
            "pickRate": 7.18,
            "games": 679,
            "winRate": 51.84
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 72.84,
            "games": 5306,
            "winRate": 52.47
          }
        },
        {
          "itemIds": [
            "773172"
          ],
          "totalPrice": 2850,
          "metric": {
            "pickRate": 20.74,
            "games": 1511,
            "winRate": 52.55
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773153",
            "773085",
            "773124"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 8.44,
            "games": 656,
            "winRate": 54.73
          }
        },
        {
          "itemIds": [
            "773153",
            "773085",
            "773031"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 7.72,
            "games": 600,
            "winRate": 52.83
          }
        },
        {
          "itemIds": [
            "773153",
            "773085",
            "773109"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 4.37,
            "games": 340,
            "winRate": 61.76
          }
        },
        {
          "itemIds": [
            "773153",
            "773124",
            "773085"
          ],
          "totalPrice": 8200,
          "metric": {
            "pickRate": 2.95,
            "games": 229,
            "winRate": 50.66
          }
        },
        {
          "itemIds": [
            "773153",
            "773109",
            "773085"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 2.75,
            "games": 214,
            "winRate": 57.48
          }
        }
      ]
    }
  },
  {
    "classicId": "60103",
    "key": "ahri",
    "name": "九尾妖狐",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/ahri/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 19,
    "tier": 3,
    "championMetrics": {
      "pickRate": 20.3822,
      "winRate": 51.0716
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 15.39,
          "games": 2300,
          "winRate": 50.52
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 21.46,
          "games": 1659,
          "winRate": 50.93
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 10.7,
          "games": 1599,
          "winRate": 51.53
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 10.12,
          "games": 1512,
          "winRate": 53.37
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 8.57,
          "games": 1281,
          "winRate": 55.04
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 15.37,
          "games": 1058,
          "winRate": 53.5
        }
      },
      {
        "augmentId": 2087,
        "apiName": "ARAM_Archmage",
        "name": "大法师",
        "metric": {
          "pickRate": 12.67,
          "games": 872,
          "winRate": 52.29
        }
      },
      {
        "augmentId": 1180,
        "apiName": "ARAM_BigBrain",
        "name": "超强大脑",
        "metric": {
          "pickRate": 5.05,
          "games": 755,
          "winRate": 55.1
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 4.36,
          "games": 651,
          "winRate": 47.16
        }
      },
      {
        "augmentId": 7011,
        "apiName": "TrueEternity",
        "name": "真正的永恒",
        "metric": {
          "pickRate": 9.43,
          "games": 649,
          "winRate": 49.31
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 38.84,
          "games": 4849,
          "winRate": 51.17
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 17.46,
          "games": 2180,
          "winRate": 52.11
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.68,
          "games": 5883,
          "winRate": 50.98
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "773108"
          ],
          "totalPrice": 1145,
          "metric": {
            "pickRate": 7.68,
            "games": 721,
            "winRate": 52.15
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 6.84,
            "games": 642,
            "winRate": 51.4
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 73.68,
            "games": 5211,
            "winRate": 52.35
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 12.54,
            "games": 887,
            "winRate": 47.13
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 8.51,
            "games": 478,
            "winRate": 52.09
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 4.35,
            "games": 244,
            "winRate": 50.41
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.49,
            "games": 196,
            "winRate": 52.55
          }
        },
        {
          "itemIds": [
            "773128",
            "773003",
            "773089"
          ],
          "totalPrice": 9100,
          "metric": {
            "pickRate": 2.78,
            "games": 156,
            "winRate": 48.72
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773157"
          ],
          "totalPrice": 9660,
          "metric": {
            "pickRate": 2.72,
            "games": 153,
            "winRate": 55.56
          }
        }
      ]
    }
  },
  {
    "classicId": "60089",
    "key": "leona",
    "name": "曙光女神",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/leona/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 20,
    "tier": 3,
    "championMetrics": {
      "pickRate": 14.5565,
      "winRate": 51.4041
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 17.28,
          "games": 1874,
          "winRate": 52.61
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 15.44,
          "games": 1675,
          "winRate": 51.46
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 29.96,
          "games": 1621,
          "winRate": 54.29
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 13.32,
          "games": 1445,
          "winRate": 50.45
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 11.52,
          "games": 1250,
          "winRate": 52.4
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 21.42,
          "games": 1038,
          "winRate": 52.79
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 18.57,
          "games": 900,
          "winRate": 52.11
        }
      },
      {
        "augmentId": 1018,
        "apiName": "ARAM_CourageoftheColossus",
        "name": "巨像的勇气",
        "metric": {
          "pickRate": 16.14,
          "games": 782,
          "winRate": 52.81
        }
      },
      {
        "augmentId": 2102,
        "apiName": "PressureCooker",
        "name": "高压锅",
        "metric": {
          "pickRate": 6.79,
          "games": 736,
          "winRate": 52.85
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 11.79,
          "games": 638,
          "winRate": 48.9
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 68.05,
          "games": 6088,
          "winRate": 51.51
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 10.14,
          "games": 907,
          "winRate": 50.94
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "E",
          "Q"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "E",
          "W",
          "E",
          "R",
          "E",
          "E",
          "Q",
          "Q"
        ],
        "metric": {
          "pickRate": 0.55,
          "games": 2895,
          "winRate": 51.05
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771054",
            "773132"
          ],
          "totalPrice": 1265,
          "metric": {
            "pickRate": 10.96,
            "games": 733,
            "winRate": 51.3
          }
        },
        {
          "itemIds": [
            "771006",
            "771011"
          ],
          "totalPrice": 1180,
          "metric": {
            "pickRate": 7.97,
            "games": 533,
            "winRate": 51.41
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 62.65,
            "games": 2895,
            "winRate": 53.71
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 19.91,
            "games": 920,
            "winRate": 48.91
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773083",
            "773107",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 5.41,
            "games": 241,
            "winRate": 58.09
          }
        },
        {
          "itemIds": [
            "773107",
            "773083",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 3.43,
            "games": 153,
            "winRate": 58.17
          }
        },
        {
          "itemIds": [
            "773190",
            "773083",
            "773065"
          ],
          "totalPrice": 7975,
          "metric": {
            "pickRate": 3.28,
            "games": 146,
            "winRate": 47.95
          }
        },
        {
          "itemIds": [
            "773190",
            "773107",
            "773083"
          ],
          "totalPrice": 8175,
          "metric": {
            "pickRate": 2.83,
            "games": 126,
            "winRate": 50
          }
        },
        {
          "itemIds": [
            "773190",
            "773107",
            "773065"
          ],
          "totalPrice": 7925,
          "metric": {
            "pickRate": 2.45,
            "games": 109,
            "winRate": 64.22
          }
        }
      ]
    }
  },
  {
    "classicId": "60032",
    "key": "amumu",
    "name": "殇之木乃伊",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/amumu/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 21,
    "tier": 3,
    "championMetrics": {
      "pickRate": 14.3787,
      "winRate": 51.3129
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 11.93,
          "games": 1276,
          "winRate": 51.49
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 11.2,
          "games": 1198,
          "winRate": 51.67
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 9.16,
          "games": 980,
          "winRate": 52.55
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 8.62,
          "games": 922,
          "winRate": 49.02
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 15.71,
          "games": 840,
          "winRate": 51.67
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 16.65,
          "games": 787,
          "winRate": 55.53
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 15.06,
          "games": 712,
          "winRate": 52.53
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 6.37,
          "games": 681,
          "winRate": 48.02
        }
      },
      {
        "augmentId": 2102,
        "apiName": "PressureCooker",
        "name": "高压锅",
        "metric": {
          "pickRate": 5.91,
          "games": 632,
          "winRate": 53.48
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 10.36,
          "games": 554,
          "winRate": 51.44
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 68.55,
          "games": 6075,
          "winRate": 51.9
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 11.45,
          "games": 1015,
          "winRate": 48.77
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.65,
          "games": 3416,
          "winRate": 52.58
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771031",
            "771054"
          ],
          "totalPrice": 1160,
          "metric": {
            "pickRate": 8.56,
            "games": 563,
            "winRate": 55.42
          }
        },
        {
          "itemIds": [
            "773138"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 8.18,
            "games": 538,
            "winRate": 48.51
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 49.91,
            "games": 2313,
            "winRate": 53.78
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 15.39,
            "games": 713,
            "winRate": 48.67
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773068",
            "773110",
            "773083"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 7.04,
            "games": 197,
            "winRate": 52.79
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773110"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 3.68,
            "games": 103,
            "winRate": 49.51
          }
        },
        {
          "itemIds": [
            "773110",
            "773068",
            "773083"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 2.82,
            "games": 79,
            "winRate": 44.3
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 1.93,
            "games": 54,
            "winRate": 66.67
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773143"
          ],
          "totalPrice": 8775,
          "metric": {
            "pickRate": 1.54,
            "games": 43,
            "winRate": 32.56
          }
        }
      ]
    }
  },
  {
    "classicId": "60013",
    "key": "ryze",
    "name": "符文法师",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/ryze/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 22,
    "tier": 3,
    "championMetrics": {
      "pickRate": 18.1652,
      "winRate": 50.7
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1311,
        "apiName": "ARAM_Overflow",
        "name": "溢流",
        "metric": {
          "pickRate": 17.7,
          "games": 2408,
          "winRate": 54.32
        }
      },
      {
        "augmentId": 1056,
        "apiName": "ARAM_MindtoMatter",
        "name": "由心及物",
        "metric": {
          "pickRate": 28.67,
          "games": 2023,
          "winRate": 54.92
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 14.33,
          "games": 1949,
          "winRate": 53.41
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 10.56,
          "games": 1437,
          "winRate": 52.05
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 10.44,
          "games": 1420,
          "winRate": 44.79
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 7.97,
          "games": 1084,
          "winRate": 46.96
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 13.65,
          "games": 963,
          "winRate": 51.51
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 15.32,
          "games": 955,
          "winRate": 55.29
        }
      },
      {
        "augmentId": 2087,
        "apiName": "ARAM_Archmage",
        "name": "大法师",
        "metric": {
          "pickRate": 14.71,
          "games": 917,
          "winRate": 51.47
        }
      },
      {
        "augmentId": 7011,
        "apiName": "TrueEternity",
        "name": "真正的永恒",
        "metric": {
          "pickRate": 14.71,
          "games": 917,
          "winRate": 50.16
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 45.82,
          "games": 5172,
          "winRate": 52.2
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 24.08,
          "games": 2718,
          "winRate": 50.33
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.69,
          "games": 6412,
          "winRate": 52.39
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 8.46,
            "games": 731,
            "winRate": 49.79
          }
        },
        {
          "itemIds": [
            "771027",
            "773070"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 8.25,
            "games": 713,
            "winRate": 55.26
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 37.44,
            "games": 2970,
            "winRate": 51.62
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 26.34,
            "games": 2089,
            "winRate": 50.17
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 11.66,
            "games": 484,
            "winRate": 51.65
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 8.69,
            "games": 361,
            "winRate": 52.35
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 6.38,
            "games": 265,
            "winRate": 49.43
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773128"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 4.55,
            "games": 189,
            "winRate": 57.67
          }
        },
        {
          "itemIds": [
            "773070",
            "773128",
            "773003",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 2.99,
            "games": 124,
            "winRate": 48.39
          }
        }
      ]
    }
  },
  {
    "classicId": "60074",
    "key": "heimerdinger",
    "name": "大发明家",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/heimerdinger/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 23,
    "tier": 3,
    "championMetrics": {
      "pickRate": 15.9763,
      "winRate": 50.6836
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 13.29,
          "games": 1530,
          "winRate": 51.24
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 12.26,
          "games": 1411,
          "winRate": 47.91
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 9.84,
          "games": 1132,
          "winRate": 56.45
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 19,
          "games": 1119,
          "winRate": 50.67
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 20.68,
          "games": 1101,
          "winRate": 51.77
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 8.63,
          "games": 993,
          "winRate": 51.26
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 16.66,
          "games": 887,
          "winRate": 52.09
        }
      },
      {
        "augmentId": 1044,
        "apiName": "ARAM_IceCold",
        "name": "冰寒",
        "metric": {
          "pickRate": 13.79,
          "games": 812,
          "winRate": 49.26
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 11.66,
          "games": 687,
          "winRate": 47.02
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 4.92,
          "games": 566,
          "winRate": 46.47
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 22.7,
          "games": 2238,
          "winRate": 51.16
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 19.96,
          "games": 1967,
          "winRate": 48.04
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.64,
          "games": 4639,
          "winRate": 50.1
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 9.48,
            "games": 702,
            "winRate": 50
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 8.41,
            "games": 623,
            "winRate": 49.76
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 71.41,
            "games": 3395,
            "winRate": 50.1
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 12.64,
            "games": 601,
            "winRate": 44.93
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773135",
            "773116",
            "773128"
          ],
          "totalPrice": 8295,
          "metric": {
            "pickRate": 3.96,
            "games": 158,
            "winRate": 47.47
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773116"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 3.26,
            "games": 130,
            "winRate": 46.15
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773116",
            "773089"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 2.84,
            "games": 113,
            "winRate": 55.75
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 2.46,
            "games": 98,
            "winRate": 52.04
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 1.98,
            "games": 79,
            "winRate": 46.84
          }
        }
      ]
    }
  },
  {
    "classicId": "60001",
    "key": "annie",
    "name": "黑暗之女",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/annie/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 24,
    "tier": 3,
    "championMetrics": {
      "pickRate": 16.2587,
      "winRate": 50.5997
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 17.34,
          "games": 2062,
          "winRate": 49.37
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 22.37,
          "games": 1377,
          "winRate": 50.62
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 10.18,
          "games": 1211,
          "winRate": 52.52
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 9.41,
          "games": 1119,
          "winRate": 48.88
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 7.83,
          "games": 931,
          "winRate": 50.59
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 14.63,
          "games": 805,
          "winRate": 54.04
        }
      },
      {
        "augmentId": 7011,
        "apiName": "TrueEternity",
        "name": "真正的永恒",
        "metric": {
          "pickRate": 11.32,
          "games": 623,
          "winRate": 47.67
        }
      },
      {
        "augmentId": 1180,
        "apiName": "ARAM_BigBrain",
        "name": "超强大脑",
        "metric": {
          "pickRate": 5.02,
          "games": 597,
          "winRate": 52.43
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 5.02,
          "games": 597,
          "winRate": 49.08
        }
      },
      {
        "augmentId": 2087,
        "apiName": "ARAM_Archmage",
        "name": "大法师",
        "metric": {
          "pickRate": 10.34,
          "games": 569,
          "winRate": 49.03
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 48.29,
          "games": 4832,
          "winRate": 51.72
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 13.64,
          "games": 1365,
          "winRate": 50.26
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.66,
          "games": 5138,
          "winRate": 51.42
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 6.91,
            "games": 525,
            "winRate": 50.48
          }
        },
        {
          "itemIds": [
            "771001",
            "773108"
          ],
          "totalPrice": 1145,
          "metric": {
            "pickRate": 6.65,
            "games": 505,
            "winRate": 48.51
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 71.2,
            "games": 4089,
            "winRate": 51.72
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 14.54,
            "games": 835,
            "winRate": 48.26
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 8.55,
            "games": 351,
            "winRate": 50.43
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 5.28,
            "games": 217,
            "winRate": 48.39
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 4.6,
            "games": 189,
            "winRate": 41.27
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 2.87,
            "games": 118,
            "winRate": 57.63
          }
        },
        {
          "itemIds": [
            "773070",
            "773128",
            "773003",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 2.58,
            "games": 106,
            "winRate": 54.72
          }
        }
      ]
    }
  },
  {
    "classicId": "60090",
    "key": "malzahar",
    "name": "虚空先知",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/malzahar/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 25,
    "tier": 3,
    "championMetrics": {
      "pickRate": 19.4851,
      "winRate": 50.2923
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 13.77,
          "games": 1972,
          "winRate": 48.33
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 27.72,
          "games": 1824,
          "winRate": 55.21
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 12.02,
          "games": 1721,
          "winRate": 48.81
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 10.36,
          "games": 1484,
          "winRate": 51.68
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 9.63,
          "games": 1379,
          "winRate": 49.82
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 17.88,
          "games": 1335,
          "winRate": 48.01
        }
      },
      {
        "augmentId": 1044,
        "apiName": "ARAM_IceCold",
        "name": "冰寒",
        "metric": {
          "pickRate": 12.78,
          "games": 954,
          "winRate": 49.06
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 14.29,
          "games": 940,
          "winRate": 50.96
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 11.95,
          "games": 892,
          "winRate": 48.99
        }
      },
      {
        "augmentId": 1180,
        "apiName": "ARAM_BigBrain",
        "name": "超强大脑",
        "metric": {
          "pickRate": 4.68,
          "games": 670,
          "winRate": 49.85
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 24.87,
          "games": 2963,
          "winRate": 48.9
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 23.79,
          "games": 2835,
          "winRate": 52.06
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.6,
          "games": 5122,
          "winRate": 51.17
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 10.6,
            "games": 949,
            "winRate": 50.16
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 8.41,
            "games": 753,
            "winRate": 47.94
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 72.68,
            "games": 4551,
            "winRate": 51.68
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 13.7,
            "games": 858,
            "winRate": 46.85
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773116",
            "773089"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 4.67,
            "games": 219,
            "winRate": 40.64
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.86,
            "games": 181,
            "winRate": 45.3
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.82,
            "games": 179,
            "winRate": 52.51
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773116"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 3.39,
            "games": 159,
            "winRate": 46.54
          }
        },
        {
          "itemIds": [
            "773135",
            "773116",
            "773128"
          ],
          "totalPrice": 8295,
          "metric": {
            "pickRate": 2.77,
            "games": 130,
            "winRate": 40
          }
        }
      ]
    }
  },
  {
    "classicId": "60009",
    "key": "fiddlesticks",
    "name": "远古恐惧",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/fiddlesticks/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 26,
    "tier": 3,
    "championMetrics": {
      "pickRate": 17.6472,
      "winRate": 50.1194
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 15.47,
          "games": 1956,
          "winRate": 50.31
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 13.61,
          "games": 1721,
          "winRate": 49.33
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 8.47,
          "games": 1071,
          "winRate": 50.7
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 15.98,
          "games": 1028,
          "winRate": 51.56
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 8.08,
          "games": 1022,
          "winRate": 49.61
        }
      },
      {
        "augmentId": 1112,
        "apiName": "ARAM_UltimateUnstoppable",
        "name": "终极不可阻挡",
        "metric": {
          "pickRate": 12.99,
          "games": 836,
          "winRate": 48.21
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 14.22,
          "games": 825,
          "winRate": 52.48
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 5.99,
          "games": 757,
          "winRate": 52.71
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 13.03,
          "games": 756,
          "winRate": 53.57
        }
      },
      {
        "augmentId": 1194,
        "apiName": "ARAM_FeyMagic",
        "name": "精怪魔法",
        "metric": {
          "pickRate": 9.86,
          "games": 572,
          "winRate": 51.05
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 64.02,
          "games": 6919,
          "winRate": 50.6
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 9.66,
          "games": 1044,
          "winRate": 47.13
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.56,
          "games": 3861,
          "winRate": 49.44
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 10.95,
            "games": 888,
            "winRate": 54.5
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 6.19,
            "games": 502,
            "winRate": 48.8
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 72.24,
            "games": 4241,
            "winRate": 50.93
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 13.47,
            "games": 791,
            "winRate": 44.75
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 9.19,
            "games": 348,
            "winRate": 47.13
          }
        },
        {
          "itemIds": [
            "773128",
            "773135",
            "773089"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 4.78,
            "games": 181,
            "winRate": 43.09
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773157"
          ],
          "totalPrice": 9660,
          "metric": {
            "pickRate": 4.65,
            "games": 176,
            "winRate": 50.57
          }
        },
        {
          "itemIds": [
            "773128",
            "773157",
            "773089"
          ],
          "totalPrice": 9660,
          "metric": {
            "pickRate": 3.96,
            "games": 150,
            "winRate": 52.67
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773116"
          ],
          "totalPrice": 9300,
          "metric": {
            "pickRate": 2.06,
            "games": 78,
            "winRate": 61.54
          }
        }
      ]
    }
  },
  {
    "classicId": "60054",
    "key": "malphite",
    "name": "熔岩巨兽",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/malphite/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 27,
    "tier": 3,
    "championMetrics": {
      "pickRate": 19.3166,
      "winRate": 49.9313
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 10.66,
          "games": 1514,
          "winRate": 48.15
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 9.63,
          "games": 1368,
          "winRate": 51.97
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 9.21,
          "games": 1309,
          "winRate": 53.86
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 16.17,
          "games": 1166,
          "winRate": 53.69
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 14.85,
          "games": 1071,
          "winRate": 51.73
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 15.1,
          "games": 989,
          "winRate": 53.39
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 6.56,
          "games": 932,
          "winRate": 51.61
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 13.89,
          "games": 910,
          "winRate": 51.76
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 5.21,
          "games": 740,
          "winRate": 52.84
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 5.12,
          "games": 727,
          "winRate": 49.24
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 66.46,
          "games": 7900,
          "winRate": 49.97
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 9.86,
          "games": 1172,
          "winRate": 49.83
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.67,
          "games": 5390,
          "winRate": 50.28
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "773108"
          ],
          "totalPrice": 1145,
          "metric": {
            "pickRate": 5.34,
            "games": 463,
            "winRate": 46.44
          }
        },
        {
          "itemIds": [
            "771001",
            "771011"
          ],
          "totalPrice": 1325,
          "metric": {
            "pickRate": 4.27,
            "games": 370,
            "winRate": 52.7
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 30.01,
            "games": 1904,
            "winRate": 47.01
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 29.15,
            "games": 1849,
            "winRate": 52.68
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 4.79,
            "games": 255,
            "winRate": 52.16
          }
        },
        {
          "itemIds": [
            "773068",
            "773110",
            "773065"
          ],
          "totalPrice": 8300,
          "metric": {
            "pickRate": 3.96,
            "games": 211,
            "winRate": 52.13
          }
        },
        {
          "itemIds": [
            "773083",
            "773068",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 3.85,
            "games": 205,
            "winRate": 55.61
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 3.72,
            "games": 198,
            "winRate": 51.52
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773157"
          ],
          "totalPrice": 9660,
          "metric": {
            "pickRate": 2.12,
            "games": 113,
            "winRate": 41.59
          }
        }
      ]
    }
  },
  {
    "classicId": "60062",
    "key": "monkeyking",
    "name": "齐天大圣",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/monkeyking/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 28,
    "tier": 3,
    "championMetrics": {
      "pickRate": 12.6734,
      "winRate": 49.6615
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 14.29,
          "games": 1339,
          "winRate": 53.47
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 20.04,
          "games": 1000,
          "winRate": 50.5
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 8.02,
          "games": 752,
          "winRate": 50
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 14.41,
          "games": 719,
          "winRate": 48.26
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 7.67,
          "games": 719,
          "winRate": 47.57
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 13.38,
          "games": 668,
          "winRate": 47.01
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 6.79,
          "games": 636,
          "winRate": 50.94
        }
      },
      {
        "augmentId": 7006,
        "apiName": "StabbyStabby",
        "name": "又快又狠",
        "metric": {
          "pickRate": 10.94,
          "games": 546,
          "winRate": 49.08
        }
      },
      {
        "augmentId": 2111,
        "apiName": "Bonk",
        "name": "邦！",
        "metric": {
          "pickRate": 5.55,
          "games": 520,
          "winRate": 49.62
        }
      },
      {
        "augmentId": 1058,
        "apiName": "ARAM_MysticPunch",
        "name": "秘术冲拳",
        "metric": {
          "pickRate": 11.94,
          "games": 515,
          "winRate": 48.54
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 71.24,
          "games": 5529,
          "winRate": 49.95
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 8.92,
          "games": 692,
          "winRate": 45.66
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.72,
          "games": 4477,
          "winRate": 50.08
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 10.32,
            "games": 608,
            "winRate": 50.99
          }
        },
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 9.72,
            "games": 573,
            "winRate": 47.64
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 59.53,
            "games": 2234,
            "winRate": 51.92
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 16.73,
            "games": 628,
            "winRate": 47.29
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773074",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 21.57,
            "games": 634,
            "winRate": 46.21
          }
        },
        {
          "itemIds": [
            "773078",
            "773071",
            "773074"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 7.35,
            "games": 216,
            "winRate": 46.76
          }
        },
        {
          "itemIds": [
            "773074",
            "773078",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 7.01,
            "games": 206,
            "winRate": 49.03
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773156"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 2.48,
            "games": 73,
            "winRate": 42.47
          }
        },
        {
          "itemIds": [
            "773134",
            "773071",
            "773078",
            "773074"
          ],
          "totalPrice": 11265,
          "metric": {
            "pickRate": 2.48,
            "games": 73,
            "winRate": 46.58
          }
        }
      ]
    }
  },
  {
    "classicId": "60038",
    "key": "kassadin",
    "name": "虚空行者",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/kassadin/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 29,
    "tier": 3,
    "championMetrics": {
      "pickRate": 16.7611,
      "winRate": 49.5579
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 11.08,
          "games": 1364,
          "winRate": 47.29
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 10.69,
          "games": 1316,
          "winRate": 52.66
        }
      },
      {
        "augmentId": 1056,
        "apiName": "ARAM_MindtoMatter",
        "name": "由心及物",
        "metric": {
          "pickRate": 20.45,
          "games": 1305,
          "winRate": 55.33
        }
      },
      {
        "augmentId": 1129,
        "apiName": "ARAM_Marksmage",
        "name": "神射法师",
        "metric": {
          "pickRate": 9.57,
          "games": 1178,
          "winRate": 50
        }
      },
      {
        "augmentId": 1073,
        "apiName": "ARAM_ShadowRunner",
        "name": "暗影疾奔",
        "metric": {
          "pickRate": 15.28,
          "games": 975,
          "winRate": 51.69
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 7.47,
          "games": 919,
          "winRate": 50.16
        }
      },
      {
        "augmentId": 1344,
        "apiName": "FinalForm",
        "name": "最终形态",
        "metric": {
          "pickRate": 15.88,
          "games": 916,
          "winRate": 56.77
        }
      },
      {
        "augmentId": 1063,
        "apiName": "ARAM_OutlawsGrit",
        "name": "狂徒豪气",
        "metric": {
          "pickRate": 7,
          "games": 862,
          "winRate": 53.48
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 6.75,
          "games": 831,
          "winRate": 52.95
        }
      },
      {
        "augmentId": 1311,
        "apiName": "ARAM_Overflow",
        "name": "溢流",
        "metric": {
          "pickRate": 6.04,
          "games": 744,
          "winRate": 52.55
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 58.59,
          "games": 6066,
          "winRate": 49.92
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 8.88,
          "games": 919,
          "winRate": 49.51
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.62,
          "games": 3816,
          "winRate": 50.34
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 10.93,
            "games": 851,
            "winRate": 51.47
          }
        },
        {
          "itemIds": [
            "771001",
            "773070"
          ],
          "totalPrice": 1025,
          "metric": {
            "pickRate": 5.69,
            "games": 443,
            "winRate": 52.14
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 39.62,
            "games": 2848,
            "winRate": 50.95
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 25.18,
            "games": 1810,
            "winRate": 48.34
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 9.21,
            "games": 374,
            "winRate": 46.52
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 8.59,
            "games": 349,
            "winRate": 51.58
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773128"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 4.38,
            "games": 178,
            "winRate": 51.12
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773100",
            "773089"
          ],
          "totalPrice": 9700,
          "metric": {
            "pickRate": 3.69,
            "games": 150,
            "winRate": 57.33
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.55,
            "games": 144,
            "winRate": 52.08
          }
        }
      ]
    }
  },
  {
    "classicId": "60042",
    "key": "corki",
    "name": "英勇投弹手",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/corki/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 30,
    "tier": 3,
    "championMetrics": {
      "pickRate": 16.6893,
      "winRate": 49.5373
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 17.72,
          "games": 2232,
          "winRate": 52.91
        }
      },
      {
        "augmentId": 1415,
        "apiName": "Twinfire",
        "name": "双生火焰",
        "metric": {
          "pickRate": 23.58,
          "games": 1507,
          "winRate": 53.28
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 11.81,
          "games": 1487,
          "winRate": 50.03
        }
      },
      {
        "augmentId": 1048,
        "apiName": "ARAM_JeweledGauntlet",
        "name": "珠光护手",
        "metric": {
          "pickRate": 19.75,
          "games": 1122,
          "winRate": 55.44
        }
      },
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 8.88,
          "games": 1118,
          "winRate": 49.46
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 8.65,
          "games": 1089,
          "winRate": 50.51
        }
      },
      {
        "augmentId": 2009,
        "apiName": "ARAM_Zealot",
        "name": "狂热者",
        "metric": {
          "pickRate": 12.27,
          "games": 784,
          "winRate": 51.02
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 6.12,
          "games": 771,
          "winRate": 45.27
        }
      },
      {
        "augmentId": 1029,
        "apiName": "ARAM_EtherealWeapon",
        "name": "虚幻武器",
        "metric": {
          "pickRate": 5.43,
          "games": 684,
          "winRate": 49.71
        }
      },
      {
        "augmentId": 1328,
        "apiName": "CriticalRhythm",
        "name": "暴击律动",
        "metric": {
          "pickRate": 5.21,
          "games": 656,
          "winRate": 50
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 26.45,
          "games": 2729,
          "winRate": 50.71
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 26.2,
          "games": 2703,
          "winRate": 47.8
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.71,
          "games": 5424,
          "winRate": 51.24
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773086"
          ],
          "totalPrice": 1175,
          "metric": {
            "pickRate": 16.01,
            "games": 1264,
            "winRate": 48.66
          }
        },
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 11.45,
            "games": 904,
            "winRate": 51.11
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 69.86,
            "games": 4294,
            "winRate": 50.26
          }
        },
        {
          "itemIds": [
            "773009"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 11.53,
            "games": 709,
            "winRate": 49.65
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773142",
            "773031"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 7.94,
            "games": 467,
            "winRate": 49.68
          }
        },
        {
          "itemIds": [
            "773078",
            "773031",
            "773071"
          ],
          "totalPrice": 10428,
          "metric": {
            "pickRate": 6.34,
            "games": 373,
            "winRate": 53.08
          }
        },
        {
          "itemIds": [
            "773078",
            "773031",
            "773072"
          ],
          "totalPrice": 10628,
          "metric": {
            "pickRate": 5.64,
            "games": 332,
            "winRate": 56.93
          }
        },
        {
          "itemIds": [
            "773070",
            "773078",
            "773004",
            "773031"
          ],
          "totalPrice": 10228,
          "metric": {
            "pickRate": 5.3,
            "games": 312,
            "winRate": 53.53
          }
        },
        {
          "itemIds": [
            "773078",
            "773004",
            "773031"
          ],
          "totalPrice": 9528,
          "metric": {
            "pickRate": 3.99,
            "games": 235,
            "winRate": 52.77
          }
        }
      ]
    }
  },
  {
    "classicId": "60002",
    "key": "olaf",
    "name": "狂战士",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/olaf/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 31,
    "tier": 3,
    "championMetrics": {
      "pickRate": 10.5125,
      "winRate": 48.8869
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 23.52,
          "games": 954,
          "winRate": 49.16
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 12.35,
          "games": 948,
          "winRate": 49.89
        }
      },
      {
        "augmentId": 1322,
        "apiName": "ARAM_GetExcited",
        "name": "罪恶快感",
        "metric": {
          "pickRate": 9.64,
          "games": 740,
          "winRate": 50.54
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 17.23,
          "games": 699,
          "winRate": 49.36
        }
      },
      {
        "augmentId": 1344,
        "apiName": "FinalForm",
        "name": "最终形态",
        "metric": {
          "pickRate": 18.36,
          "games": 661,
          "winRate": 56.13
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 7.46,
          "games": 573,
          "winRate": 46.25
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 7,
          "games": 537,
          "winRate": 49.72
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 13.21,
          "games": 536,
          "winRate": 50.56
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 6.88,
          "games": 528,
          "winRate": 49.62
        }
      },
      {
        "augmentId": 1058,
        "apiName": "ARAM_MysticPunch",
        "name": "秘术冲拳",
        "metric": {
          "pickRate": 10.11,
          "games": 364,
          "winRate": 49.18
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 43.33,
          "games": 2803,
          "winRate": 49.95
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 28.26,
          "games": 1828,
          "winRate": 50.38
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.69,
          "games": 2887,
          "winRate": 49.88
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 11.52,
            "games": 574,
            "winRate": 48.61
          }
        },
        {
          "itemIds": [
            "771036",
            "771037"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 9.05,
            "games": 451,
            "winRate": 47.45
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 45,
            "games": 1691,
            "winRate": 50.15
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 26.58,
            "games": 999,
            "winRate": 52.35
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773074",
            "773153",
            "773072"
          ],
          "totalPrice": 9700,
          "metric": {
            "pickRate": 3.48,
            "games": 93,
            "winRate": 46.24
          }
        },
        {
          "itemIds": [
            "773074",
            "773153",
            "773065"
          ],
          "totalPrice": 9250,
          "metric": {
            "pickRate": 3.37,
            "games": 90,
            "winRate": 53.33
          }
        },
        {
          "itemIds": [
            "773153",
            "773074",
            "773072"
          ],
          "totalPrice": 9700,
          "metric": {
            "pickRate": 2.77,
            "games": 74,
            "winRate": 50
          }
        },
        {
          "itemIds": [
            "773074",
            "773065",
            "773153"
          ],
          "totalPrice": 9250,
          "metric": {
            "pickRate": 2.43,
            "games": 65,
            "winRate": 66.15
          }
        },
        {
          "itemIds": [
            "773153",
            "773074",
            "773065"
          ],
          "totalPrice": 9250,
          "metric": {
            "pickRate": 2.28,
            "games": 61,
            "winRate": 54.1
          }
        }
      ]
    }
  },
  {
    "classicId": "60024",
    "key": "jax",
    "name": "武器大师",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/jax/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 32,
    "tier": 4,
    "championMetrics": {
      "pickRate": 16.0028,
      "winRate": 48.9032
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 10.26,
          "games": 1239,
          "winRate": 51.17
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 17.73,
          "games": 1088,
          "winRate": 54.23
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 7.76,
          "games": 937,
          "winRate": 49.2
        }
      },
      {
        "augmentId": 1058,
        "apiName": "ARAM_MysticPunch",
        "name": "秘术冲拳",
        "metric": {
          "pickRate": 14.52,
          "games": 811,
          "winRate": 53.64
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 12.82,
          "games": 787,
          "winRate": 50.57
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 6.2,
          "games": 749,
          "winRate": 54.61
        }
      },
      {
        "augmentId": 1322,
        "apiName": "ARAM_GetExcited",
        "name": "罪恶快感",
        "metric": {
          "pickRate": 6.13,
          "games": 740,
          "winRate": 49.46
        }
      },
      {
        "augmentId": 2111,
        "apiName": "Bonk",
        "name": "邦！",
        "metric": {
          "pickRate": 5.19,
          "games": 626,
          "winRate": 52.24
        }
      },
      {
        "augmentId": 1063,
        "apiName": "ARAM_OutlawsGrit",
        "name": "狂徒豪气",
        "metric": {
          "pickRate": 4.92,
          "games": 594,
          "winRate": 49.49
        }
      },
      {
        "augmentId": 1344,
        "apiName": "FinalForm",
        "name": "最终形态",
        "metric": {
          "pickRate": 9.68,
          "games": 541,
          "winRate": 55.64
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 68.01,
          "games": 6741,
          "winRate": 49.7
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 10.22,
          "games": 1013,
          "winRate": 45.8
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.57,
          "games": 2872,
          "winRate": 50.38
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 26.34,
            "games": 1967,
            "winRate": 50.28
          }
        },
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 15.75,
            "games": 1176,
            "winRate": 50.17
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 52.44,
            "games": 2907,
            "winRate": 51.63
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 24.93,
            "games": 1382,
            "winRate": 46.82
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773153",
            "773124"
          ],
          "totalPrice": 9428,
          "metric": {
            "pickRate": 10.24,
            "games": 468,
            "winRate": 50.64
          }
        },
        {
          "itemIds": [
            "773078",
            "773153",
            "773071"
          ],
          "totalPrice": 9828,
          "metric": {
            "pickRate": 7.13,
            "games": 326,
            "winRate": 46.01
          }
        },
        {
          "itemIds": [
            "773153",
            "773078",
            "773124"
          ],
          "totalPrice": 9428,
          "metric": {
            "pickRate": 5.78,
            "games": 264,
            "winRate": 55.3
          }
        },
        {
          "itemIds": [
            "773153",
            "773078",
            "773071"
          ],
          "totalPrice": 9828,
          "metric": {
            "pickRate": 4.64,
            "games": 212,
            "winRate": 54.25
          }
        },
        {
          "itemIds": [
            "773078",
            "773146",
            "773124"
          ],
          "totalPrice": 9628,
          "metric": {
            "pickRate": 3.26,
            "games": 149,
            "winRate": 53.69
          }
        }
      ]
    }
  },
  {
    "classicId": "60030",
    "key": "karthus",
    "name": "死亡颂唱者",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/karthus/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 33,
    "tier": 4,
    "championMetrics": {
      "pickRate": 18.7284,
      "winRate": 48.7587
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 13.72,
          "games": 1929,
          "winRate": 44.43
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 23.95,
          "games": 1754,
          "winRate": 49.03
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 11.39,
          "games": 1602,
          "winRate": 48.06
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 10.77,
          "games": 1514,
          "winRate": 49.54
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 8.7,
          "games": 1224,
          "winRate": 46.16
        }
      },
      {
        "augmentId": 1088,
        "apiName": "ARAM_UltimateRevolution",
        "name": "终极刷新",
        "metric": {
          "pickRate": 17.23,
          "games": 1134,
          "winRate": 47.8
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 15.73,
          "games": 1035,
          "winRate": 48.99
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 13.86,
          "games": 912,
          "winRate": 53.62
        }
      },
      {
        "augmentId": 2103,
        "apiName": "ARAM_BangBang",
        "name": "狙神飞星",
        "metric": {
          "pickRate": 5.49,
          "games": 772,
          "winRate": 47.8
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 5.32,
          "games": 748,
          "winRate": 47.86
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 55.56,
          "games": 6433,
          "winRate": 49.15
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 9.66,
          "games": 1119,
          "winRate": 47.1
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.73,
          "games": 6900,
          "winRate": 48.54
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 8.27,
            "games": 716,
            "winRate": 51.4
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771056"
          ],
          "totalPrice": 1310,
          "metric": {
            "pickRate": 6.39,
            "games": 553,
            "winRate": 47.2
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 60.34,
            "games": 3203,
            "winRate": 50.61
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 23.19,
            "games": 1231,
            "winRate": 47.44
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 7.13,
            "games": 388,
            "winRate": 52.84
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 5.86,
            "games": 319,
            "winRate": 50.78
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 4.02,
            "games": 219,
            "winRate": 42.92
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.51,
            "games": 191,
            "winRate": 50.79
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773128"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.09,
            "games": 168,
            "winRate": 48.21
          }
        }
      ]
    }
  },
  {
    "classicId": "60040",
    "key": "janna",
    "name": "风暴之怒",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/janna/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 34,
    "tier": 4,
    "championMetrics": {
      "pickRate": 12.2147,
      "winRate": 47.9882
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 16.87,
          "games": 1459,
          "winRate": 47.09
        }
      },
      {
        "augmentId": 1037,
        "apiName": "ARAM_FirstAidKit",
        "name": "急救用具",
        "metric": {
          "pickRate": 21.27,
          "games": 936,
          "winRate": 47.76
        }
      },
      {
        "augmentId": 1420,
        "apiName": "Sonata",
        "name": "咏叹奏鸣",
        "metric": {
          "pickRate": 10.72,
          "games": 927,
          "winRate": 49.19
        }
      },
      {
        "augmentId": 1141,
        "apiName": "ARAM_AllForYou",
        "name": "全心为你",
        "metric": {
          "pickRate": 9.8,
          "games": 847,
          "winRate": 43.92
        }
      },
      {
        "augmentId": 1076,
        "apiName": "ARAM_SonicBoom",
        "name": "天音爆",
        "metric": {
          "pickRate": 15.77,
          "games": 694,
          "winRate": 48.27
        }
      },
      {
        "augmentId": 1005,
        "apiName": "ARAM_WeeWooWeeWoo",
        "name": "喂呜喂呜",
        "metric": {
          "pickRate": 7.93,
          "games": 686,
          "winRate": 50.58
        }
      },
      {
        "augmentId": 2104,
        "apiName": "ARAM_SpiritBomb",
        "name": "灵魄炸弹",
        "metric": {
          "pickRate": 11.66,
          "games": 472,
          "winRate": 47.46
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 4.74,
          "games": 410,
          "winRate": 46.83
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 4.56,
          "games": 394,
          "winRate": 44.16
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 8.91,
          "games": 392,
          "winRate": 47.45
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 27.14,
          "games": 2037,
          "winRate": 50.32
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 20.9,
          "games": 1569,
          "winRate": 48.5
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.55,
          "games": 2118,
          "winRate": 48.39
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771004",
            "771004",
            "771004",
            "773098"
          ],
          "totalPrice": 1305,
          "metric": {
            "pickRate": 5.79,
            "games": 324,
            "winRate": 51.85
          }
        },
        {
          "itemIds": [
            "771004",
            "773010"
          ],
          "totalPrice": 1380,
          "metric": {
            "pickRate": 3.86,
            "games": 216,
            "winRate": 48.61
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 38.61,
            "games": 1711,
            "winRate": 49.44
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 22,
            "games": 975,
            "winRate": 46.15
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773504",
            "773222",
            "773107"
          ],
          "totalPrice": 7650,
          "metric": {
            "pickRate": 4.12,
            "games": 93,
            "winRate": 41.94
          }
        },
        {
          "itemIds": [
            "773084",
            "773504",
            "773107"
          ],
          "totalPrice": 7800,
          "metric": {
            "pickRate": 2.88,
            "games": 65,
            "winRate": 38.46
          }
        },
        {
          "itemIds": [
            "773084",
            "773504",
            "773222"
          ],
          "totalPrice": 7350,
          "metric": {
            "pickRate": 2.75,
            "games": 62,
            "winRate": 45.16
          }
        },
        {
          "itemIds": [
            "773504",
            "773107",
            "773084"
          ],
          "totalPrice": 7800,
          "metric": {
            "pickRate": 2.75,
            "games": 62,
            "winRate": 45.16
          }
        },
        {
          "itemIds": [
            "773504",
            "773222",
            "773084"
          ],
          "totalPrice": 7350,
          "metric": {
            "pickRate": 2.13,
            "games": 48,
            "winRate": 41.67
          }
        }
      ]
    }
  },
  {
    "classicId": "60079",
    "key": "gragas",
    "name": "酒桶",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/gragas/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 35,
    "tier": 4,
    "championMetrics": {
      "pickRate": 15.0589,
      "winRate": 48.2801
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 10.2,
          "games": 1144,
          "winRate": 48.43
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 14.72,
          "games": 824,
          "winRate": 49.88
        }
      },
      {
        "augmentId": 1129,
        "apiName": "ARAM_Marksmage",
        "name": "神射法师",
        "metric": {
          "pickRate": 6.25,
          "games": 701,
          "winRate": 46.36
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 5.86,
          "games": 658,
          "winRate": 48.02
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 5.69,
          "games": 638,
          "winRate": 50.16
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 5.58,
          "games": 626,
          "winRate": 48.56
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 11.35,
          "games": 580,
          "winRate": 52.24
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 10.06,
          "games": 563,
          "winRate": 47.6
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 10.1,
          "games": 516,
          "winRate": 49.22
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 4.41,
          "games": 495,
          "winRate": 47.68
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 68.31,
          "games": 6293,
          "winRate": 49.12
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 9.31,
          "games": 858,
          "winRate": 44.52
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.66,
          "games": 4281,
          "winRate": 48.54
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 7.14,
            "games": 496,
            "winRate": 45.77
          }
        },
        {
          "itemIds": [
            "771001",
            "773108"
          ],
          "totalPrice": 1145,
          "metric": {
            "pickRate": 6.81,
            "games": 473,
            "winRate": 48.2
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 52.2,
            "games": 2839,
            "winRate": 49.1
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 17.26,
            "games": 939,
            "winRate": 44.09
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 9.68,
            "games": 327,
            "winRate": 48.01
          }
        },
        {
          "itemIds": [
            "773128",
            "773100",
            "773089"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 5.8,
            "games": 196,
            "winRate": 50
          }
        },
        {
          "itemIds": [
            "773100",
            "773128",
            "773089"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 5.45,
            "games": 184,
            "winRate": 47.83
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773100"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 4.56,
            "games": 154,
            "winRate": 51.3
          }
        },
        {
          "itemIds": [
            "773128",
            "773135",
            "773089"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 3.61,
            "games": 122,
            "winRate": 48.36
          }
        }
      ]
    }
  },
  {
    "classicId": "60086",
    "key": "garen",
    "name": "德玛西亚之力",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/garen/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 36,
    "tier": 4,
    "championMetrics": {
      "pickRate": 15.9388,
      "winRate": 48.3555
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 14.66,
          "games": 1690,
          "winRate": 51.36
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 11.02,
          "games": 1270,
          "winRate": 48.98
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 10.56,
          "games": 1217,
          "winRate": 48.15
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 21.89,
          "games": 1179,
          "winRate": 51.31
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 17.84,
          "games": 1089,
          "winRate": 49.22
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 15.93,
          "games": 972,
          "winRate": 49.07
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 17.07,
          "games": 919,
          "winRate": 52.67
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 6.24,
          "games": 719,
          "winRate": 49.93
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 11.55,
          "games": 705,
          "winRate": 46.81
        }
      },
      {
        "augmentId": 1238,
        "apiName": "ARAM_TransmutePrismatic",
        "name": "质变：棱彩阶",
        "metric": {
          "pickRate": 5.22,
          "games": 602,
          "winRate": 48.67
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 63.62,
          "games": 6247,
          "winRate": 49.24
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 10.88,
          "games": 1068,
          "winRate": 49.53
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.61,
          "games": 4073,
          "winRate": 50.92
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 13.13,
            "games": 966,
            "winRate": 47.93
          }
        },
        {
          "itemIds": [
            "773086"
          ],
          "totalPrice": 1175,
          "metric": {
            "pickRate": 7.42,
            "games": 546,
            "winRate": 47.62
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 44.53,
            "games": 2555,
            "winRate": 49.32
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 20.77,
            "games": 1192,
            "winRate": 46.14
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773131",
            "773074"
          ],
          "totalPrice": 9078,
          "metric": {
            "pickRate": 6.8,
            "games": 236,
            "winRate": 41.1
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 4.03,
            "games": 140,
            "winRate": 55
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773131"
          ],
          "totalPrice": 9078,
          "metric": {
            "pickRate": 3.94,
            "games": 137,
            "winRate": 44.53
          }
        },
        {
          "itemIds": [
            "773078",
            "773071",
            "773074"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 1.67,
            "games": 58,
            "winRate": 51.72
          }
        },
        {
          "itemIds": [
            "773078",
            "773131",
            "773071"
          ],
          "totalPrice": 8778,
          "metric": {
            "pickRate": 1.61,
            "games": 56,
            "winRate": 46.43
          }
        }
      ]
    }
  },
  {
    "classicId": "60075",
    "key": "nasus",
    "name": "沙漠死神",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/nasus/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 37,
    "tier": 4,
    "championMetrics": {
      "pickRate": 13.2928,
      "winRate": 47.8638
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 10.21,
          "games": 984,
          "winRate": 51.02
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 9,
          "games": 867,
          "winRate": 47.4
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 16.39,
          "games": 841,
          "winRate": 51.01
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 14.48,
          "games": 743,
          "winRate": 48.18
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 14.95,
          "games": 664,
          "winRate": 49.1
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 6.77,
          "games": 652,
          "winRate": 46.78
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 5.93,
          "games": 571,
          "winRate": 51.31
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 10.62,
          "games": 545,
          "winRate": 47.16
        }
      },
      {
        "augmentId": 2111,
        "apiName": "Bonk",
        "name": "邦！",
        "metric": {
          "pickRate": 5.47,
          "games": 527,
          "winRate": 54.65
        }
      },
      {
        "augmentId": 1344,
        "apiName": "FinalForm",
        "name": "最终形态",
        "metric": {
          "pickRate": 10.31,
          "games": 458,
          "winRate": 50.44
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 49.28,
          "games": 4030,
          "winRate": 48.73
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 20.84,
          "games": 1704,
          "winRate": 47.71
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.63,
          "games": 2898,
          "winRate": 49.38
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773057"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 18.89,
            "games": 1160,
            "winRate": 51.29
          }
        },
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 6.56,
            "games": 403,
            "winRate": 48.14
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 29.68,
            "games": 1422,
            "winRate": 52.67
          }
        },
        {
          "itemIds": [
            "773005"
          ],
          "totalPrice": 2300,
          "metric": {
            "pickRate": 25.59,
            "games": 1226,
            "winRate": 50
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773083",
            "773071"
          ],
          "totalPrice": 9628,
          "metric": {
            "pickRate": 4.01,
            "games": 120,
            "winRate": 50
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773083"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 3.74,
            "games": 112,
            "winRate": 55.36
          }
        },
        {
          "itemIds": [
            "773078",
            "773083",
            "773074"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 3.04,
            "games": 91,
            "winRate": 56.04
          }
        },
        {
          "itemIds": [
            "773078",
            "773083",
            "773156"
          ],
          "totalPrice": 9828,
          "metric": {
            "pickRate": 2.81,
            "games": 84,
            "winRate": 34.52
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773156"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 2.31,
            "games": 69,
            "winRate": 47.83
          }
        }
      ]
    }
  },
  {
    "classicId": "60059",
    "key": "jarvaniv",
    "name": "德玛西亚皇子",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/jarvaniv/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 38,
    "tier": 4,
    "championMetrics": {
      "pickRate": 13.0946,
      "winRate": 47.6349
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 12.39,
          "games": 1209,
          "winRate": 51.53
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 9.19,
          "games": 897,
          "winRate": 48.94
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 8.78,
          "games": 857,
          "winRate": 48.07
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 16.66,
          "games": 840,
          "winRate": 47.86
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 16.12,
          "games": 813,
          "winRate": 51.05
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 15.15,
          "games": 688,
          "winRate": 48.69
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 6.36,
          "games": 621,
          "winRate": 47.18
        }
      },
      {
        "augmentId": 7006,
        "apiName": "StabbyStabby",
        "name": "又快又狠",
        "metric": {
          "pickRate": 12.18,
          "games": 614,
          "winRate": 42.51
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 6.13,
          "games": 598,
          "winRate": 47.49
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 11.43,
          "games": 519,
          "winRate": 51.64
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 72.98,
          "games": 5880,
          "winRate": 48.52
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 8.2,
          "games": 661,
          "winRate": 44.48
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.72,
          "games": 4572,
          "winRate": 47.81
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 14.02,
            "games": 852,
            "winRate": 51.17
          }
        },
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 5.99,
            "games": 364,
            "winRate": 44.78
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 56.37,
            "games": 2174,
            "winRate": 50.74
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 19.55,
            "games": 754,
            "winRate": 43.37
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773074",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 12.88,
            "games": 370,
            "winRate": 45.68
          }
        },
        {
          "itemIds": [
            "773074",
            "773078",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 6.37,
            "games": 183,
            "winRate": 42.62
          }
        },
        {
          "itemIds": [
            "773078",
            "773071",
            "773074"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 2.72,
            "games": 78,
            "winRate": 34.62
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773156"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 2.26,
            "games": 65,
            "winRate": 53.85
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773078"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 1.92,
            "games": 55,
            "winRate": 40
          }
        }
      ]
    }
  },
  {
    "classicId": "60004",
    "key": "twistedfate",
    "name": "卡牌大师",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/twistedfate/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 39,
    "tier": 4,
    "championMetrics": {
      "pickRate": 18.2401,
      "winRate": 48.2593
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1071,
        "apiName": "ARAM_ScopierWeapons",
        "name": "更万用的瞄准镜",
        "metric": {
          "pickRate": 11.92,
          "games": 1620,
          "winRate": 49.07
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 10.4,
          "games": 1414,
          "winRate": 45.76
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 9.13,
          "games": 1241,
          "winRate": 51.25
        }
      },
      {
        "augmentId": 2009,
        "apiName": "ARAM_Zealot",
        "name": "狂热者",
        "metric": {
          "pickRate": 18.07,
          "games": 1214,
          "winRate": 47.12
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 7.7,
          "games": 1046,
          "winRate": 52.39
        }
      },
      {
        "augmentId": 1048,
        "apiName": "ARAM_JeweledGauntlet",
        "name": "珠光护手",
        "metric": {
          "pickRate": 16.38,
          "games": 1003,
          "winRate": 52.94
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 6.97,
          "games": 948,
          "winRate": 48.63
        }
      },
      {
        "augmentId": 1415,
        "apiName": "Twinfire",
        "name": "双生火焰",
        "metric": {
          "pickRate": 13.26,
          "games": 891,
          "winRate": 51.52
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 5.55,
          "games": 754,
          "winRate": 51.33
        }
      },
      {
        "augmentId": 1170,
        "apiName": "ARAM_ScopedWeapons",
        "name": "万用瞄准镜",
        "metric": {
          "pickRate": 10.57,
          "games": 710,
          "winRate": 50.7
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 40.24,
          "games": 4518,
          "winRate": 49.03
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 23.21,
          "games": 2606,
          "winRate": 48.81
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.61,
          "games": 4603,
          "winRate": 49.73
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771033",
            "773098"
          ],
          "totalPrice": 1165,
          "metric": {
            "pickRate": 23.66,
            "games": 2010,
            "winRate": 48.51
          }
        },
        {
          "itemIds": [
            "773057"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 10.5,
            "games": 892,
            "winRate": 49.44
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 56.61,
            "games": 3953,
            "winRate": 50.34
          }
        },
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 19.68,
            "games": 1374,
            "winRate": 45.85
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773100",
            "773128",
            "773089"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 7.11,
            "games": 394,
            "winRate": 47.46
          }
        },
        {
          "itemIds": [
            "773100",
            "773116",
            "773128"
          ],
          "totalPrice": 9000,
          "metric": {
            "pickRate": 3.82,
            "games": 212,
            "winRate": 43.4
          }
        },
        {
          "itemIds": [
            "773100",
            "773089",
            "773135"
          ],
          "totalPrice": 8595,
          "metric": {
            "pickRate": 3.72,
            "games": 206,
            "winRate": 60.19
          }
        },
        {
          "itemIds": [
            "773128",
            "773100",
            "773089"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 3.5,
            "games": 194,
            "winRate": 55.67
          }
        },
        {
          "itemIds": [
            "773100",
            "773157",
            "773089"
          ],
          "totalPrice": 9560,
          "metric": {
            "pickRate": 2.38,
            "games": 132,
            "winRate": 49.24
          }
        }
      ]
    }
  },
  {
    "classicId": "60072",
    "key": "skarner",
    "name": "上古领主",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/skarner/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 40,
    "tier": 4,
    "championMetrics": {
      "pickRate": 8.92113,
      "winRate": 46.3274
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 16.31,
          "games": 1112,
          "winRate": 47.66
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 15.43,
          "games": 1052,
          "winRate": 45.72
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 28.55,
          "games": 970,
          "winRate": 45.88
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 10.71,
          "games": 730,
          "winRate": 48.77
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 18.49,
          "games": 558,
          "winRate": 48.39
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 16.77,
          "games": 506,
          "winRate": 52.37
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 6.66,
          "games": 454,
          "winRate": 48.24
        }
      },
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 5.63,
          "games": 384,
          "winRate": 40.63
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 5.19,
          "games": 354,
          "winRate": 39.83
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 5.12,
          "games": 349,
          "winRate": 44.13
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 67.76,
          "games": 3743,
          "winRate": 46.75
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 11.59,
          "games": 640,
          "winRate": 42.19
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.69,
          "games": 2827,
          "winRate": 46.3
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "771011"
          ],
          "totalPrice": 1325,
          "metric": {
            "pickRate": 24.12,
            "games": 1004,
            "winRate": 46.91
          }
        },
        {
          "itemIds": [
            "771001",
            "771006",
            "773132"
          ],
          "totalPrice": 1330,
          "metric": {
            "pickRate": 13.04,
            "games": 543,
            "winRate": 47.33
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 55.78,
            "games": 1786,
            "winRate": 49.16
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 21.46,
            "games": 687,
            "winRate": 43.38
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773068",
            "773083",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 8.48,
            "games": 193,
            "winRate": 47.67
          }
        },
        {
          "itemIds": [
            "773083",
            "773068",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 7.78,
            "games": 177,
            "winRate": 44.63
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773110"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 4.09,
            "games": 93,
            "winRate": 48.39
          }
        },
        {
          "itemIds": [
            "773083",
            "773068",
            "773110"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 3.16,
            "games": 72,
            "winRate": 44.44
          }
        },
        {
          "itemIds": [
            "773083",
            "773078",
            "773065"
          ],
          "totalPrice": 9378,
          "metric": {
            "pickRate": 2.11,
            "games": 48,
            "winRate": 52.08
          }
        }
      ]
    }
  },
  {
    "classicId": "60034",
    "key": "anivia",
    "name": "冰晶凤凰",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/anivia/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 41,
    "tier": 4,
    "championMetrics": {
      "pickRate": 16.0403,
      "winRate": 47.8942
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 11.62,
          "games": 1380,
          "winRate": 47.83
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 11.61,
          "games": 1379,
          "winRate": 46.27
        }
      },
      {
        "augmentId": 1044,
        "apiName": "ARAM_IceCold",
        "name": "冰寒",
        "metric": {
          "pickRate": 21.93,
          "games": 1331,
          "winRate": 48.76
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 9.57,
          "games": 1136,
          "winRate": 49.21
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 8.75,
          "games": 1039,
          "winRate": 46.01
        }
      },
      {
        "augmentId": 1194,
        "apiName": "ARAM_FeyMagic",
        "name": "精怪魔法",
        "metric": {
          "pickRate": 18.13,
          "games": 987,
          "winRate": 53.9
        }
      },
      {
        "augmentId": 1045,
        "apiName": "ARAM_InfernalConduit",
        "name": "炼狱导管",
        "metric": {
          "pickRate": 16.29,
          "games": 887,
          "winRate": 49.83
        }
      },
      {
        "augmentId": 1056,
        "apiName": "ARAM_MindtoMatter",
        "name": "由心及物",
        "metric": {
          "pickRate": 13.51,
          "games": 820,
          "winRate": 49.27
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 13.51,
          "games": 820,
          "winRate": 49.51
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 12.78,
          "games": 696,
          "winRate": 47.13
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 24.38,
          "games": 2421,
          "winRate": 48.37
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 20.95,
          "games": 2081,
          "winRate": 48.2
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "Q",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "Q",
          "E",
          "Q",
          "R",
          "Q",
          "Q",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.61,
          "games": 4163,
          "winRate": 47.13
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 7.22,
            "games": 548,
            "winRate": 46.53
          }
        },
        {
          "itemIds": [
            "771001",
            "773070"
          ],
          "totalPrice": 1025,
          "metric": {
            "pickRate": 6.14,
            "games": 466,
            "winRate": 48.93
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 48.75,
            "games": 3229,
            "winRate": 49.86
          }
        },
        {
          "itemIds": [
            "773174"
          ],
          "totalPrice": 2600,
          "metric": {
            "pickRate": 26.4,
            "games": 1749,
            "winRate": 47.06
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 11.11,
            "games": 402,
            "winRate": 48.01
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 6.96,
            "games": 252,
            "winRate": 42.46
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 4.64,
            "games": 168,
            "winRate": 40.48
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773128"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.09,
            "games": 112,
            "winRate": 41.07
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773165"
          ],
          "totalPrice": 8900,
          "metric": {
            "pickRate": 2.98,
            "games": 108,
            "winRate": 49.07
          }
        }
      ]
    }
  },
  {
    "classicId": "60080",
    "key": "pantheon",
    "name": "不屈之枪",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/pantheon/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 42,
    "tier": 4,
    "championMetrics": {
      "pickRate": 17.8813,
      "winRate": 48.0674
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 14.61,
          "games": 1914,
          "winRate": 54.28
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 22.47,
          "games": 1507,
          "winRate": 50.17
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 11.17,
          "games": 1464,
          "winRate": 47.88
        }
      },
      {
        "augmentId": 7006,
        "apiName": "StabbyStabby",
        "name": "又快又狠",
        "metric": {
          "pickRate": 17.5,
          "games": 1174,
          "winRate": 49.66
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 13.85,
          "games": 929,
          "winRate": 47.26
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 6.79,
          "games": 890,
          "winRate": 48.2
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 6.71,
          "games": 879,
          "winRate": 48.58
        }
      },
      {
        "augmentId": 1326,
        "apiName": "Nightstalking",
        "name": "夜狩",
        "metric": {
          "pickRate": 5.69,
          "games": 746,
          "winRate": 47.32
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 4.83,
          "games": 633,
          "winRate": 49.76
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 9.99,
          "games": 597,
          "winRate": 47.57
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 66.88,
          "games": 7356,
          "winRate": 48.53
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 12.11,
          "games": 1332,
          "winRate": 47
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.66,
          "games": 4223,
          "winRate": 48.52
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 17.87,
            "games": 1467,
            "winRate": 49.08
          }
        },
        {
          "itemIds": [
            "773141"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 5.31,
            "games": 436,
            "winRate": 49.08
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 55.94,
            "games": 2827,
            "winRate": 48.99
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 15.87,
            "games": 802,
            "winRate": 44.51
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773074",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 13.31,
            "games": 528,
            "winRate": 47.92
          }
        },
        {
          "itemIds": [
            "773074",
            "773078",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 7.11,
            "games": 282,
            "winRate": 47.16
          }
        },
        {
          "itemIds": [
            "773078",
            "773071",
            "773074"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 3.23,
            "games": 128,
            "winRate": 43.75
          }
        },
        {
          "itemIds": [
            "773134",
            "773071",
            "773074",
            "773078"
          ],
          "totalPrice": 11265,
          "metric": {
            "pickRate": 2.37,
            "games": 94,
            "winRate": 53.19
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773156"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 2.32,
            "games": 92,
            "winRate": 55.43
          }
        }
      ]
    }
  },
  {
    "classicId": "60041",
    "key": "gangplank",
    "name": "海洋之灾",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/gangplank/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 43,
    "tier": 4,
    "championMetrics": {
      "pickRate": 16.6799,
      "winRate": 47.3482
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 15.31,
          "games": 1907,
          "winRate": 47.56
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 14.14,
          "games": 1762,
          "winRate": 46.42
        }
      },
      {
        "augmentId": 1415,
        "apiName": "Twinfire",
        "name": "双生火焰",
        "metric": {
          "pickRate": 20.98,
          "games": 1331,
          "winRate": 48.38
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 8.03,
          "games": 1001,
          "winRate": 46.45
        }
      },
      {
        "augmentId": 1048,
        "apiName": "ARAM_JeweledGauntlet",
        "name": "珠光护手",
        "metric": {
          "pickRate": 17.21,
          "games": 981,
          "winRate": 49.75
        }
      },
      {
        "augmentId": 7006,
        "apiName": "StabbyStabby",
        "name": "又快又狠",
        "metric": {
          "pickRate": 12.41,
          "games": 787,
          "winRate": 47.65
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 11.6,
          "games": 736,
          "winRate": 47.01
        }
      },
      {
        "augmentId": 1029,
        "apiName": "ARAM_EtherealWeapon",
        "name": "虚幻武器",
        "metric": {
          "pickRate": 5.39,
          "games": 672,
          "winRate": 43.75
        }
      },
      {
        "augmentId": 2009,
        "apiName": "ARAM_Zealot",
        "name": "狂热者",
        "metric": {
          "pickRate": 9.96,
          "games": 632,
          "winRate": 49.37
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 11.09,
          "games": 632,
          "winRate": 48.58
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 55.76,
          "games": 5742,
          "winRate": 47.98
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 13.48,
          "games": 1388,
          "winRate": 47.05
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.71,
          "games": 5753,
          "winRate": 47.66
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773057"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 17.27,
            "games": 1340,
            "winRate": 47.84
          }
        },
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 4.04,
            "games": 313,
            "winRate": 46.65
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 36.27,
            "games": 1574,
            "winRate": 49.62
          }
        },
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 21.22,
            "games": 921,
            "winRate": 45.82
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773078",
            "773031",
            "773142"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 11.15,
            "games": 569,
            "winRate": 44.99
          }
        },
        {
          "itemIds": [
            "773078",
            "773031",
            "773071"
          ],
          "totalPrice": 10428,
          "metric": {
            "pickRate": 5.84,
            "games": 298,
            "winRate": 49.33
          }
        },
        {
          "itemIds": [
            "773078",
            "773142",
            "773031"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 5.39,
            "games": 275,
            "winRate": 52.73
          }
        },
        {
          "itemIds": [
            "773078",
            "773031",
            "773087"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 3.27,
            "games": 167,
            "winRate": 51.5
          }
        },
        {
          "itemIds": [
            "773078",
            "773087",
            "773031"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 3.18,
            "games": 162,
            "winRate": 48.15
          }
        }
      ]
    }
  },
  {
    "classicId": "60031",
    "key": "chogath",
    "name": "虚空恐惧",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/chogath/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 44,
    "tier": 4,
    "championMetrics": {
      "pickRate": 17.7736,
      "winRate": 47.428
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 14.16,
          "games": 1838,
          "winRate": 49.67
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 23.79,
          "games": 1592,
          "winRate": 47.8
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 11.18,
          "games": 1451,
          "winRate": 48.73
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 8.54,
          "games": 1109,
          "winRate": 45.81
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 8.2,
          "games": 1065,
          "winRate": 46.38
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 17.36,
          "games": 1050,
          "winRate": 48.19
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 17.18,
          "games": 1039,
          "winRate": 49.28
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 6.09,
          "games": 790,
          "winRate": 50.13
        }
      },
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 5.59,
          "games": 726,
          "winRate": 45.04
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 8.8,
          "games": 589,
          "winRate": 46.18
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 68.15,
          "games": 7446,
          "winRate": 48.16
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 10.42,
          "games": 1139,
          "winRate": 43.72
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.62,
          "games": 4219,
          "winRate": 47.07
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771006",
            "771011"
          ],
          "totalPrice": 1180,
          "metric": {
            "pickRate": 8.62,
            "games": 700,
            "winRate": 48.57
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 6.21,
            "games": 504,
            "winRate": 48.81
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 44.73,
            "games": 2726,
            "winRate": 50.62
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 18,
            "games": 1097,
            "winRate": 43.94
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773083",
            "773068",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 8.26,
            "games": 402,
            "winRate": 45.27
          }
        },
        {
          "itemIds": [
            "773068",
            "773083",
            "773065"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 5.59,
            "games": 272,
            "winRate": 54.04
          }
        },
        {
          "itemIds": [
            "773083",
            "773110",
            "773065"
          ],
          "totalPrice": 8650,
          "metric": {
            "pickRate": 4.87,
            "games": 237,
            "winRate": 46.84
          }
        },
        {
          "itemIds": [
            "773068",
            "773110",
            "773065"
          ],
          "totalPrice": 8300,
          "metric": {
            "pickRate": 3.88,
            "games": 189,
            "winRate": 49.74
          }
        },
        {
          "itemIds": [
            "773083",
            "773065",
            "773068"
          ],
          "totalPrice": 8400,
          "metric": {
            "pickRate": 2.59,
            "games": 126,
            "winRate": 49.21
          }
        }
      ]
    }
  },
  {
    "classicId": "60011",
    "key": "masteryi",
    "name": "无极剑圣",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/masteryi/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 45,
    "tier": 4,
    "championMetrics": {
      "pickRate": 18.9765,
      "winRate": 47.5787
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1322,
        "apiName": "ARAM_GetExcited",
        "name": "罪恶快感",
        "metric": {
          "pickRate": 12.31,
          "games": 1696,
          "winRate": 46.4
        }
      },
      {
        "augmentId": 1058,
        "apiName": "ARAM_MysticPunch",
        "name": "秘术冲拳",
        "metric": {
          "pickRate": 18.41,
          "games": 1197,
          "winRate": 49.37
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 16.42,
          "games": 1190,
          "winRate": 49.16
        }
      },
      {
        "augmentId": 1326,
        "apiName": "Nightstalking",
        "name": "夜狩",
        "metric": {
          "pickRate": 8.08,
          "games": 1113,
          "winRate": 45.82
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 7.76,
          "games": 1069,
          "winRate": 48.83
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 14.55,
          "games": 1054,
          "winRate": 45.45
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 7.24,
          "games": 997,
          "winRate": 44.23
        }
      },
      {
        "augmentId": 1344,
        "apiName": "FinalForm",
        "name": "最终形态",
        "metric": {
          "pickRate": 9.72,
          "games": 632,
          "winRate": 51.58
        }
      },
      {
        "augmentId": 1081,
        "apiName": "ARAM_TapDancer",
        "name": "踢踏舞",
        "metric": {
          "pickRate": 9.38,
          "games": 610,
          "winRate": 52.95
        }
      },
      {
        "augmentId": 1087,
        "apiName": "ARAM_Typhoon",
        "name": "台风",
        "metric": {
          "pickRate": 8.14,
          "games": 590,
          "winRate": 49.83
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 59.42,
          "games": 6952,
          "winRate": 48.14
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 16.43,
          "games": 1922,
          "winRate": 48.39
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.73,
          "games": 7076,
          "winRate": 49.21
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 28.75,
            "games": 2503,
            "winRate": 50.38
          }
        },
        {
          "itemIds": [
            "771053",
            "771055"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 5.48,
            "games": 477,
            "winRate": 44.23
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 78.7,
            "games": 4989,
            "winRate": 47.85
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 8.05,
            "games": 510,
            "winRate": 49.02
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773153",
            "773078",
            "773091"
          ],
          "totalPrice": 8978,
          "metric": {
            "pickRate": 3.79,
            "games": 206,
            "winRate": 52.91
          }
        },
        {
          "itemIds": [
            "773153",
            "773074",
            "773091"
          ],
          "totalPrice": 8650,
          "metric": {
            "pickRate": 3.02,
            "games": 164,
            "winRate": 46.95
          }
        },
        {
          "itemIds": [
            "773153",
            "773078",
            "773074"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 2.5,
            "games": 136,
            "winRate": 50.74
          }
        },
        {
          "itemIds": [
            "773087",
            "773031",
            "773153"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 2.19,
            "games": 119,
            "winRate": 48.74
          }
        },
        {
          "itemIds": [
            "773153",
            "773078",
            "773031"
          ],
          "totalPrice": 10628,
          "metric": {
            "pickRate": 2.06,
            "games": 112,
            "winRate": 51.79
          }
        }
      ]
    }
  },
  {
    "classicId": "60033",
    "key": "rammus",
    "name": "披甲龙龟",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/rammus/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 46,
    "tier": 4,
    "championMetrics": {
      "pickRate": 10.0507,
      "winRate": 45.3586
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 17.02,
          "games": 1261,
          "winRate": 48.77
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 15.81,
          "games": 1172,
          "winRate": 46.16
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 26.7,
          "games": 1023,
          "winRate": 47.31
        }
      },
      {
        "augmentId": 1013,
        "apiName": "ARAM_CelestialBody",
        "name": "星界躯体",
        "metric": {
          "pickRate": 12.01,
          "games": 890,
          "winRate": 46.63
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 21.12,
          "games": 718,
          "winRate": 47.21
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 20.74,
          "games": 705,
          "winRate": 46.81
        }
      },
      {
        "augmentId": 2102,
        "apiName": "PressureCooker",
        "name": "高压锅",
        "metric": {
          "pickRate": 7.92,
          "games": 587,
          "winRate": 46.68
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 6.61,
          "games": 490,
          "winRate": 41.43
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 11.69,
          "games": 448,
          "winRate": 44.42
        }
      },
      {
        "augmentId": 7014,
        "apiName": "DipDiveDodge",
        "name": "拱火诱饵",
        "metric": {
          "pickRate": 8.64,
          "games": 331,
          "winRate": 45.62
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 56.93,
          "games": 3549,
          "winRate": 46.38
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 14.61,
          "games": 911,
          "winRate": 44.68
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "E",
          "Q"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "E",
          "W",
          "E",
          "R",
          "E",
          "E",
          "Q",
          "Q"
        ],
        "metric": {
          "pickRate": 0.56,
          "games": 2091,
          "winRate": 46.87
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "771029",
            "771031"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 11.65,
            "games": 549,
            "winRate": 47.91
          }
        },
        {
          "itemIds": [
            "773138"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 9.36,
            "games": 441,
            "winRate": 46.71
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 48.11,
            "games": 1555,
            "winRate": 47.07
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 24.2,
            "games": 782,
            "winRate": 46.93
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773075",
            "773068",
            "773083"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 5.56,
            "games": 147,
            "winRate": 50.34
          }
        },
        {
          "itemIds": [
            "773075",
            "773083",
            "773068"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 3.37,
            "games": 89,
            "winRate": 56.18
          }
        },
        {
          "itemIds": [
            "773068",
            "773110",
            "773083"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 2.95,
            "games": 78,
            "winRate": 46.15
          }
        },
        {
          "itemIds": [
            "773075",
            "773068",
            "773110"
          ],
          "totalPrice": 7750,
          "metric": {
            "pickRate": 2.8,
            "games": 74,
            "winRate": 45.95
          }
        },
        {
          "itemIds": [
            "773083",
            "773075",
            "773068"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 2.8,
            "games": 74,
            "winRate": 52.7
          }
        }
      ]
    }
  },
  {
    "classicId": "60019",
    "key": "warwick",
    "name": "祖安怒兽",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/warwick/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 47,
    "tier": 4,
    "championMetrics": {
      "pickRate": 14.0588,
      "winRate": 46.532
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 21.03,
          "games": 1056,
          "winRate": 46.4
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 8.19,
          "games": 809,
          "winRate": 49.2
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 8.11,
          "games": 801,
          "winRate": 47.69
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 7.28,
          "games": 719,
          "winRate": 47.01
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 13.76,
          "games": 691,
          "winRate": 50.8
        }
      },
      {
        "augmentId": 1020,
        "apiName": "ARAM_DawnbringersResolve",
        "name": "黎明使者的坚决",
        "metric": {
          "pickRate": 6.42,
          "games": 634,
          "winRate": 46.85
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 12.76,
          "games": 602,
          "winRate": 49.17
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 5.49,
          "games": 542,
          "winRate": 50
        }
      },
      {
        "augmentId": 1322,
        "apiName": "ARAM_GetExcited",
        "name": "罪恶快感",
        "metric": {
          "pickRate": 5.44,
          "games": 537,
          "winRate": 43.58
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 10.64,
          "games": 534,
          "winRate": 50.94
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 58.27,
          "games": 5072,
          "winRate": 47.38
        }
      },
      {
        "spells": [
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 12.64,
          "games": 1100,
          "winRate": 44.73
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.69,
          "games": 4188,
          "winRate": 48.71
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 9.78,
            "games": 633,
            "winRate": 49.61
          }
        },
        {
          "itemIds": [
            "773044"
          ],
          "totalPrice": 1250,
          "metric": {
            "pickRate": 4.51,
            "games": 292,
            "winRate": 46.23
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 47.88,
            "games": 2148,
            "winRate": 48.56
          }
        },
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 17.94,
            "games": 805,
            "winRate": 45.84
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773074",
            "773078",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 8.66,
            "games": 321,
            "winRate": 47.98
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 6.86,
            "games": 254,
            "winRate": 45.28
          }
        },
        {
          "itemIds": [
            "773074",
            "773078",
            "773153"
          ],
          "totalPrice": 10128,
          "metric": {
            "pickRate": 1.43,
            "games": 53,
            "winRate": 50.94
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773078"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 1.38,
            "games": 51,
            "winRate": 35.29
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773156"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 1.13,
            "games": 42,
            "winRate": 47.62
          }
        }
      ]
    }
  },
  {
    "classicId": "60117",
    "key": "lulu",
    "name": "仙灵女巫",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/lulu/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 48,
    "tier": 4,
    "championMetrics": {
      "pickRate": 12.0415,
      "winRate": 45.517
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 16.85,
          "games": 1483,
          "winRate": 49.83
        }
      },
      {
        "augmentId": 1037,
        "apiName": "ARAM_FirstAidKit",
        "name": "急救用具",
        "metric": {
          "pickRate": 24.68,
          "games": 1108,
          "winRate": 47.92
        }
      },
      {
        "augmentId": 1420,
        "apiName": "Sonata",
        "name": "咏叹奏鸣",
        "metric": {
          "pickRate": 11.96,
          "games": 1053,
          "winRate": 49.19
        }
      },
      {
        "augmentId": 1141,
        "apiName": "ARAM_AllForYou",
        "name": "全心为你",
        "metric": {
          "pickRate": 10.71,
          "games": 943,
          "winRate": 44.64
        }
      },
      {
        "augmentId": 1076,
        "apiName": "ARAM_SonicBoom",
        "name": "天音爆",
        "metric": {
          "pickRate": 17.49,
          "games": 785,
          "winRate": 43.82
        }
      },
      {
        "augmentId": 1005,
        "apiName": "ARAM_WeeWooWeeWoo",
        "name": "喂呜喂呜",
        "metric": {
          "pickRate": 8.87,
          "games": 781,
          "winRate": 48.91
        }
      },
      {
        "augmentId": 1301,
        "apiName": "ARAM_DivineIntervention",
        "name": "神圣干预",
        "metric": {
          "pickRate": 5.94,
          "games": 523,
          "winRate": 47.04
        }
      },
      {
        "augmentId": 2104,
        "apiName": "ARAM_SpiritBomb",
        "name": "灵魄炸弹",
        "metric": {
          "pickRate": 11.56,
          "games": 457,
          "winRate": 44.42
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 4.46,
          "games": 393,
          "winRate": 36.13
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 8.73,
          "games": 392,
          "winRate": 44.64
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 30.43,
          "games": 2267,
          "winRate": 47.15
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 18.78,
          "games": 1399,
          "winRate": 45.96
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "W",
          "Q"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "W",
          "E",
          "W",
          "R",
          "W",
          "W",
          "Q",
          "Q"
        ],
        "metric": {
          "pickRate": 0.55,
          "games": 2158,
          "winRate": 48.1
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771004",
            "771004",
            "771004",
            "773098"
          ],
          "totalPrice": 1305,
          "metric": {
            "pickRate": 9.16,
            "games": 520,
            "winRate": 50.77
          }
        },
        {
          "itemIds": [
            "771004",
            "773010"
          ],
          "totalPrice": 1380,
          "metric": {
            "pickRate": 3.82,
            "games": 217,
            "winRate": 53.92
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 40.92,
            "games": 1833,
            "winRate": 49.05
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 20.89,
            "games": 936,
            "winRate": 44.55
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773504",
            "773222",
            "773107"
          ],
          "totalPrice": 7650,
          "metric": {
            "pickRate": 4.29,
            "games": 113,
            "winRate": 62.83
          }
        },
        {
          "itemIds": [
            "773504",
            "773107",
            "773084"
          ],
          "totalPrice": 7800,
          "metric": {
            "pickRate": 3.22,
            "games": 85,
            "winRate": 52.94
          }
        },
        {
          "itemIds": [
            "773504",
            "773222",
            "773084"
          ],
          "totalPrice": 7350,
          "metric": {
            "pickRate": 3.15,
            "games": 83,
            "winRate": 45.78
          }
        },
        {
          "itemIds": [
            "773084",
            "773504",
            "773107"
          ],
          "totalPrice": 7800,
          "metric": {
            "pickRate": 2.96,
            "games": 78,
            "winRate": 62.82
          }
        },
        {
          "itemIds": [
            "773084",
            "773504",
            "773222"
          ],
          "totalPrice": 7350,
          "metric": {
            "pickRate": 2.54,
            "games": 67,
            "winRate": 44.78
          }
        }
      ]
    }
  },
  {
    "classicId": "60023",
    "key": "tryndamere",
    "name": "蛮族之王",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/tryndamere/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 49,
    "tier": 4,
    "championMetrics": {
      "pickRate": 12.4393,
      "winRate": 45.5287
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1322,
        "apiName": "ARAM_GetExcited",
        "name": "罪恶快感",
        "metric": {
          "pickRate": 10.6,
          "games": 977,
          "winRate": 45.24
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 19.1,
          "games": 921,
          "winRate": 50.92
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 9.83,
          "games": 906,
          "winRate": 44.15
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 14.82,
          "games": 715,
          "winRate": 44.2
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 6.6,
          "games": 608,
          "winRate": 45.89
        }
      },
      {
        "augmentId": 1058,
        "apiName": "ARAM_MysticPunch",
        "name": "秘术冲拳",
        "metric": {
          "pickRate": 13.33,
          "games": 577,
          "winRate": 42.63
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 5.27,
          "games": 486,
          "winRate": 49.38
        }
      },
      {
        "augmentId": 1081,
        "apiName": "ARAM_TapDancer",
        "name": "踢踏舞",
        "metric": {
          "pickRate": 11.16,
          "games": 483,
          "winRate": 50.31
        }
      },
      {
        "augmentId": 1077,
        "apiName": "ARAM_SoulSiphon",
        "name": "灵魂虹吸",
        "metric": {
          "pickRate": 4.57,
          "games": 421,
          "winRate": 50.59
        }
      },
      {
        "augmentId": 1181,
        "apiName": "ARAM_HeavyHitter",
        "name": "重量级打击手",
        "metric": {
          "pickRate": 7.4,
          "games": 357,
          "winRate": 48.74
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 52.86,
          "games": 4036,
          "winRate": 47
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 18.77,
          "games": 1433,
          "winRate": 43.61
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.63,
          "games": 3312,
          "winRate": 46.83
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773086"
          ],
          "totalPrice": 1175,
          "metric": {
            "pickRate": 10.21,
            "games": 594,
            "winRate": 50.34
          }
        },
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 5.97,
            "games": 347,
            "winRate": 45.82
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 74.15,
            "games": 3164,
            "winRate": 46.84
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 9.77,
            "games": 417,
            "winRate": 47.72
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773142",
            "773031",
            "773046"
          ],
          "totalPrice": 9300,
          "metric": {
            "pickRate": 4.12,
            "games": 158,
            "winRate": 48.1
          }
        },
        {
          "itemIds": [
            "773087",
            "773153",
            "773031"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 2.81,
            "games": 108,
            "winRate": 50
          }
        },
        {
          "itemIds": [
            "773046",
            "773031",
            "773153"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 2.11,
            "games": 81,
            "winRate": 54.32
          }
        },
        {
          "itemIds": [
            "773078",
            "773031",
            "773046"
          ],
          "totalPrice": 10228,
          "metric": {
            "pickRate": 1.75,
            "games": 67,
            "winRate": 44.78
          }
        },
        {
          "itemIds": [
            "773153",
            "773046",
            "773031"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 1.75,
            "games": 67,
            "winRate": 52.24
          }
        }
      ]
    }
  },
  {
    "classicId": "60081",
    "key": "ezreal",
    "name": "探险家",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/ezreal/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 50,
    "tier": 4,
    "championMetrics": {
      "pickRate": 22.2872,
      "winRate": 47.4484
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1415,
        "apiName": "Twinfire",
        "name": "双生火焰",
        "metric": {
          "pickRate": 21.71,
          "games": 1869,
          "winRate": 49.81
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 9.76,
          "games": 1606,
          "winRate": 48.82
        }
      },
      {
        "augmentId": 1356,
        "apiName": "CriticalMissile",
        "name": "暴击飞弹",
        "metric": {
          "pickRate": 9.34,
          "games": 1538,
          "winRate": 48.63
        }
      },
      {
        "augmentId": 1048,
        "apiName": "ARAM_JeweledGauntlet",
        "name": "珠光护手",
        "metric": {
          "pickRate": 18.3,
          "games": 1382,
          "winRate": 53.69
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 8.11,
          "games": 1335,
          "winRate": 45.09
        }
      },
      {
        "augmentId": 2009,
        "apiName": "ARAM_Zealot",
        "name": "狂热者",
        "metric": {
          "pickRate": 12.37,
          "games": 1065,
          "winRate": 46.76
        }
      },
      {
        "augmentId": 1129,
        "apiName": "ARAM_Marksmage",
        "name": "神射法师",
        "metric": {
          "pickRate": 6.29,
          "games": 1035,
          "winRate": 43.19
        }
      },
      {
        "augmentId": 1029,
        "apiName": "ARAM_EtherealWeapon",
        "name": "虚幻武器",
        "metric": {
          "pickRate": 6.24,
          "games": 1027,
          "winRate": 45.47
        }
      },
      {
        "augmentId": 2010,
        "apiName": "ARAM_DoubleTap",
        "name": "双发快射",
        "metric": {
          "pickRate": 5.79,
          "games": 953,
          "winRate": 47.11
        }
      },
      {
        "augmentId": 1047,
        "apiName": "ARAM_ItsCritical",
        "name": "关键暴击",
        "metric": {
          "pickRate": 5.28,
          "games": 869,
          "winRate": 46.38
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 23.2,
          "games": 3193,
          "winRate": 48.83
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerBarrier",
            "name": "屏障",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerBarrier.png"
          }
        ],
        "metric": {
          "pickRate": 22.12,
          "games": 3044,
          "winRate": 48.29
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.7,
          "games": 6855,
          "winRate": 48.08
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771036",
            "773070"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 15.48,
            "games": 1615,
            "winRate": 48.17
          }
        },
        {
          "itemIds": [
            "773057"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 10.49,
            "games": 1095,
            "winRate": 48.49
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 49.83,
            "games": 3433,
            "winRate": 50.1
          }
        },
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 28.57,
            "games": 1968,
            "winRate": 46.34
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773004",
            "773078",
            "773031"
          ],
          "totalPrice": 10228,
          "metric": {
            "pickRate": 7.99,
            "games": 567,
            "winRate": 45.5
          }
        },
        {
          "itemIds": [
            "773070",
            "773078",
            "773004",
            "773031"
          ],
          "totalPrice": 10228,
          "metric": {
            "pickRate": 5.28,
            "games": 375,
            "winRate": 49.6
          }
        },
        {
          "itemIds": [
            "773078",
            "773004",
            "773031"
          ],
          "totalPrice": 9528,
          "metric": {
            "pickRate": 3.13,
            "games": 222,
            "winRate": 48.65
          }
        },
        {
          "itemIds": [
            "773070",
            "773004",
            "773078",
            "773142"
          ],
          "totalPrice": 9128,
          "metric": {
            "pickRate": 2.1,
            "games": 149,
            "winRate": 50.34
          }
        },
        {
          "itemIds": [
            "773070",
            "773078",
            "773004",
            "773153"
          ],
          "totalPrice": 9628,
          "metric": {
            "pickRate": 2.07,
            "games": 147,
            "winRate": 49.66
          }
        }
      ]
    }
  },
  {
    "classicId": "60025",
    "key": "morgana",
    "name": "堕落天使",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/morgana/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 51,
    "tier": 4,
    "championMetrics": {
      "pickRate": 21.2794,
      "winRate": 47.0856
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 10.45,
          "games": 1603,
          "winRate": 46.1
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 10,
          "games": 1534,
          "winRate": 48.24
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 9.27,
          "games": 1422,
          "winRate": 47.05
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 15.55,
          "games": 1259,
          "winRate": 47.9
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 14.16,
          "games": 1146,
          "winRate": 45.55
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 7.37,
          "games": 1131,
          "winRate": 50.04
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 11.55,
          "games": 835,
          "winRate": 48.5
        }
      },
      {
        "augmentId": 1044,
        "apiName": "ARAM_IceCold",
        "name": "冰寒",
        "metric": {
          "pickRate": 9.99,
          "games": 809,
          "winRate": 47.1
        }
      },
      {
        "augmentId": 1323,
        "apiName": "ARAM_Cruelty",
        "name": "残忍",
        "metric": {
          "pickRate": 10.46,
          "games": 756,
          "winRate": 47.35
        }
      },
      {
        "augmentId": 1072,
        "apiName": "ARAM_SearingDawn",
        "name": "炽烈黎明",
        "metric": {
          "pickRate": 4.88,
          "games": 749,
          "winRate": 48.73
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 44.64,
          "games": 5862,
          "winRate": 47.61
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 12.92,
          "games": 1697,
          "winRate": 46.91
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.68,
          "games": 5888,
          "winRate": 46.26
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "772041",
            "773070"
          ],
          "totalPrice": 1370,
          "metric": {
            "pickRate": 18.48,
            "games": 1842,
            "winRate": 46.47
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 12.51,
            "games": 1247,
            "winRate": 45.87
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 60.38,
            "games": 5184,
            "winRate": 46.82
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 19.81,
            "games": 1701,
            "winRate": 45.56
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773116"
          ],
          "totalPrice": 9600,
          "metric": {
            "pickRate": 4.9,
            "games": 198,
            "winRate": 48.99
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773157"
          ],
          "totalPrice": 9960,
          "metric": {
            "pickRate": 3.61,
            "games": 146,
            "winRate": 36.3
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773157",
            "773116"
          ],
          "totalPrice": 9560,
          "metric": {
            "pickRate": 3.44,
            "games": 139,
            "winRate": 38.13
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773157",
            "773089"
          ],
          "totalPrice": 9960,
          "metric": {
            "pickRate": 3.41,
            "games": 138,
            "winRate": 46.38
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 2.42,
            "games": 98,
            "winRate": 37.76
          }
        }
      ]
    }
  },
  {
    "classicId": "60026",
    "key": "zilean",
    "name": "时光守护者",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/zilean/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 52,
    "tier": 5,
    "championMetrics": {
      "pickRate": 15.4864,
      "winRate": 45.1138
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 12.38,
          "games": 1403,
          "winRate": 43.41
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 9.88,
          "games": 1120,
          "winRate": 44.64
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 17.78,
          "games": 1011,
          "winRate": 44.51
        }
      },
      {
        "augmentId": 2087,
        "apiName": "ARAM_Archmage",
        "name": "大法师",
        "metric": {
          "pickRate": 18.26,
          "games": 965,
          "winRate": 48.7
        }
      },
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 7.6,
          "games": 861,
          "winRate": 45.88
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 7.51,
          "games": 851,
          "winRate": 44.77
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 13.79,
          "games": 729,
          "winRate": 46.5
        }
      },
      {
        "augmentId": 7005,
        "apiName": "HasteMakesWaste",
        "name": "欲速则不达",
        "metric": {
          "pickRate": 12.92,
          "games": 683,
          "winRate": 44.07
        }
      },
      {
        "augmentId": 1420,
        "apiName": "Sonata",
        "name": "咏叹奏鸣",
        "metric": {
          "pickRate": 5.95,
          "games": 674,
          "winRate": 50.3
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 10.87,
          "games": 618,
          "winRate": 45.47
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 23.7,
          "games": 2257,
          "winRate": 45.19
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 22.02,
          "games": 2097,
          "winRate": 45.97
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "W",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "W",
          "Q",
          "W",
          "R",
          "W",
          "W",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.67,
          "games": 4760,
          "winRate": 44.31
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "773070"
          ],
          "totalPrice": 1025,
          "metric": {
            "pickRate": 5.86,
            "games": 419,
            "winRate": 48.45
          }
        },
        {
          "itemIds": [
            "771056",
            "773070"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 5.45,
            "games": 390,
            "winRate": 45.38
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 51.17,
            "games": 2732,
            "winRate": 45.13
          }
        },
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 20.73,
            "games": 1107,
            "winRate": 45.89
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 7.26,
            "games": 265,
            "winRate": 43.77
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 5.56,
            "games": 203,
            "winRate": 46.8
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773165"
          ],
          "totalPrice": 8900,
          "metric": {
            "pickRate": 3.72,
            "games": 136,
            "winRate": 43.38
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.12,
            "games": 114,
            "winRate": 41.23
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773165",
            "773089"
          ],
          "totalPrice": 8900,
          "metric": {
            "pickRate": 2.71,
            "games": 99,
            "winRate": 44.44
          }
        }
      ]
    }
  },
  {
    "classicId": "60053",
    "key": "blitzcrank",
    "name": "蒸汽机器人",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/blitzcrank/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 53,
    "tier": 5,
    "championMetrics": {
      "pickRate": 19.3556,
      "winRate": 45.9858
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 10.29,
          "games": 1473,
          "winRate": 46.23
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 8.36,
          "games": 1197,
          "winRate": 42.86
        }
      },
      {
        "augmentId": 1375,
        "apiName": "SoulEater",
        "name": "吞噬灵魂",
        "metric": {
          "pickRate": 7.9,
          "games": 1131,
          "winRate": 48.72
        }
      },
      {
        "augmentId": 1136,
        "apiName": "ARAM_SlapAround",
        "name": "扇巴掌",
        "metric": {
          "pickRate": 11.04,
          "games": 813,
          "winRate": 46.37
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 10.54,
          "games": 776,
          "winRate": 44.72
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 10.25,
          "games": 755,
          "winRate": 43.05
        }
      },
      {
        "augmentId": 2137,
        "apiName": "PatOnTheBack",
        "name": "轻拍背部",
        "metric": {
          "pickRate": 5.1,
          "games": 730,
          "winRate": 44.93
        }
      },
      {
        "augmentId": 1056,
        "apiName": "ARAM_MindtoMatter",
        "name": "由心及物",
        "metric": {
          "pickRate": 9.13,
          "games": 672,
          "winRate": 45.98
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 9.68,
          "games": 647,
          "winRate": 44.05
        }
      },
      {
        "augmentId": 1194,
        "apiName": "ARAM_FeyMagic",
        "name": "精怪魔法",
        "metric": {
          "pickRate": 8.59,
          "games": 574,
          "winRate": 47.91
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 57.72,
          "games": 6887,
          "winRate": 47.23
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 11.93,
          "games": 1423,
          "winRate": 46.24
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.71,
          "games": 6607,
          "winRate": 46.59
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771054",
            "773132"
          ],
          "totalPrice": 1265,
          "metric": {
            "pickRate": 7.34,
            "games": 649,
            "winRate": 47.46
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 3.63,
            "games": 321,
            "winRate": 50.16
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 28.94,
            "games": 1877,
            "winRate": 49.01
          }
        },
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 18.5,
            "games": 1200,
            "winRate": 43.5
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773083",
            "773107",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 2.76,
            "games": 134,
            "winRate": 47.01
          }
        },
        {
          "itemIds": [
            "773107",
            "773083",
            "773065"
          ],
          "totalPrice": 8700,
          "metric": {
            "pickRate": 2.04,
            "games": 99,
            "winRate": 50.51
          }
        },
        {
          "itemIds": [
            "773190",
            "773083",
            "773065"
          ],
          "totalPrice": 7975,
          "metric": {
            "pickRate": 1.86,
            "games": 90,
            "winRate": 54.44
          }
        },
        {
          "itemIds": [
            "773190",
            "773107",
            "773065"
          ],
          "totalPrice": 7925,
          "metric": {
            "pickRate": 1.79,
            "games": 87,
            "winRate": 43.68
          }
        },
        {
          "itemIds": [
            "773107",
            "773190",
            "773083"
          ],
          "totalPrice": 8175,
          "metric": {
            "pickRate": 1.75,
            "games": 85,
            "winRate": 48.24
          }
        }
      ]
    }
  },
  {
    "classicId": "60028",
    "key": "evelynn",
    "name": "痛苦之拥",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/evelynn/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 54,
    "tier": 5,
    "championMetrics": {
      "pickRate": 9.63882,
      "winRate": 40.7899
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 15.8,
          "games": 1091,
          "winRate": 40.6
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 10.34,
          "games": 714,
          "winRate": 40.48
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 16.94,
          "games": 599,
          "winRate": 39.23
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 8.39,
          "games": 579,
          "winRate": 44.04
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 15.16,
          "games": 477,
          "winRate": 48.85
        }
      },
      {
        "augmentId": 1073,
        "apiName": "ARAM_ShadowRunner",
        "name": "暗影疾奔",
        "metric": {
          "pickRate": 13.43,
          "games": 475,
          "winRate": 39.16
        }
      },
      {
        "augmentId": 2026,
        "apiName": "KillSecured",
        "name": "杀意翻涌",
        "metric": {
          "pickRate": 11.71,
          "games": 414,
          "winRate": 41.06
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 5.69,
          "games": 393,
          "winRate": 38.93
        }
      },
      {
        "augmentId": 2083,
        "apiName": "BurstingTeeth",
        "name": "牙仙子",
        "metric": {
          "pickRate": 5.4,
          "games": 373,
          "winRate": 42.36
        }
      },
      {
        "augmentId": 1326,
        "apiName": "Nightstalking",
        "name": "夜狩",
        "metric": {
          "pickRate": 4.94,
          "games": 341,
          "winRate": 44.87
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 55.14,
          "games": 3264,
          "winRate": 41.33
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 12,
          "games": 710,
          "winRate": 41.41
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.72,
          "games": 3420,
          "winRate": 43.74
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "773108"
          ],
          "totalPrice": 1145,
          "metric": {
            "pickRate": 11.66,
            "games": 521,
            "winRate": 42.61
          }
        },
        {
          "itemIds": [
            "771056",
            "773108"
          ],
          "totalPrice": 1220,
          "metric": {
            "pickRate": 6.76,
            "games": 302,
            "winRate": 36.42
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 77.89,
            "games": 2494,
            "winRate": 41.86
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 7.78,
            "games": 249,
            "winRate": 34.54
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 10.92,
            "games": 285,
            "winRate": 36.84
          }
        },
        {
          "itemIds": [
            "773128",
            "773100",
            "773089"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 8.93,
            "games": 233,
            "winRate": 40.77
          }
        },
        {
          "itemIds": [
            "773100",
            "773128",
            "773089"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 5.9,
            "games": 154,
            "winRate": 55.84
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773100"
          ],
          "totalPrice": 9400,
          "metric": {
            "pickRate": 5.25,
            "games": 137,
            "winRate": 44.53
          }
        },
        {
          "itemIds": [
            "773128",
            "773146",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 4.1,
            "games": 107,
            "winRate": 39.25
          }
        }
      ]
    }
  },
  {
    "classicId": "60055",
    "key": "katarina",
    "name": "不祥之刃",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/katarina/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 55,
    "tier": 5,
    "championMetrics": {
      "pickRate": 17.5443,
      "winRate": 44.6332
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 12.52,
          "games": 1605,
          "winRate": 45.11
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 11.96,
          "games": 1534,
          "winRate": 44.07
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 19.08,
          "games": 1257,
          "winRate": 44.31
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 9.31,
          "games": 1194,
          "winRate": 44.14
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 8.52,
          "games": 1092,
          "winRate": 45.15
        }
      },
      {
        "augmentId": 1112,
        "apiName": "ARAM_UltimateUnstoppable",
        "name": "终极不可阻挡",
        "metric": {
          "pickRate": 14.4,
          "games": 949,
          "winRate": 47.1
        }
      },
      {
        "augmentId": 1344,
        "apiName": "FinalForm",
        "name": "最终形态",
        "metric": {
          "pickRate": 13.51,
          "games": 809,
          "winRate": 51.05
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 11.84,
          "games": 780,
          "winRate": 46.79
        }
      },
      {
        "augmentId": 1029,
        "apiName": "ARAM_EtherealWeapon",
        "name": "虚幻武器",
        "metric": {
          "pickRate": 5.96,
          "games": 764,
          "winRate": 43.19
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 5.91,
          "games": 758,
          "winRate": 46.17
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 65.26,
          "games": 7049,
          "winRate": 44.84
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 15.67,
          "games": 1693,
          "winRate": 45.95
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.73,
          "games": 6260,
          "winRate": 45.65
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773145"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 33.66,
            "games": 2751,
            "winRate": 44.31
          }
        },
        {
          "itemIds": [
            "773144"
          ],
          "totalPrice": 1400,
          "metric": {
            "pickRate": 9.13,
            "games": 746,
            "winRate": 45.98
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 80.39,
            "games": 4736,
            "winRate": 44.02
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 6.3,
            "games": 371,
            "winRate": 47.71
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773146",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 11.25,
            "games": 514,
            "winRate": 43.97
          }
        },
        {
          "itemIds": [
            "773146",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 4.88,
            "games": 223,
            "winRate": 39.46
          }
        },
        {
          "itemIds": [
            "773146",
            "773135",
            "773089"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 4.07,
            "games": 186,
            "winRate": 47.31
          }
        },
        {
          "itemIds": [
            "773128",
            "773146",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.35,
            "games": 153,
            "winRate": 41.83
          }
        },
        {
          "itemIds": [
            "773146",
            "773089",
            "773157"
          ],
          "totalPrice": 9960,
          "metric": {
            "pickRate": 3.28,
            "games": 150,
            "winRate": 52
          }
        }
      ]
    }
  },
  {
    "classicId": "60016",
    "key": "soraka",
    "name": "众星之子",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/soraka/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 56,
    "tier": 5,
    "championMetrics": {
      "pickRate": 15.9232,
      "winRate": 43.4548
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7009,
        "apiName": "Upgrade_InnervatingLocket",
        "name": "升级：激发之匣",
        "metric": {
          "pickRate": 20.23,
          "games": 2293,
          "winRate": 44.31
        }
      },
      {
        "augmentId": 1037,
        "apiName": "ARAM_FirstAidKit",
        "name": "急救用具",
        "metric": {
          "pickRate": 36.22,
          "games": 2187,
          "winRate": 43.44
        }
      },
      {
        "augmentId": 1141,
        "apiName": "ARAM_AllForYou",
        "name": "全心为你",
        "metric": {
          "pickRate": 14.07,
          "games": 1595,
          "winRate": 43.64
        }
      },
      {
        "augmentId": 1005,
        "apiName": "ARAM_WeeWooWeeWoo",
        "name": "喂呜喂呜",
        "metric": {
          "pickRate": 11.6,
          "games": 1315,
          "winRate": 44.41
        }
      },
      {
        "augmentId": 1076,
        "apiName": "ARAM_SonicBoom",
        "name": "天音爆",
        "metric": {
          "pickRate": 21.46,
          "games": 1296,
          "winRate": 44.75
        }
      },
      {
        "augmentId": 1420,
        "apiName": "Sonata",
        "name": "咏叹奏鸣",
        "metric": {
          "pickRate": 10.51,
          "games": 1191,
          "winRate": 44.42
        }
      },
      {
        "augmentId": 2104,
        "apiName": "ARAM_SpiritBomb",
        "name": "灵魄炸弹",
        "metric": {
          "pickRate": 16.25,
          "games": 862,
          "winRate": 42.34
        }
      },
      {
        "augmentId": 1067,
        "apiName": "ARAM_RabbleRousing",
        "name": "活力焕发",
        "metric": {
          "pickRate": 5.61,
          "games": 636,
          "winRate": 46.86
        }
      },
      {
        "augmentId": 7001,
        "apiName": "Upgrade_ZzRotPortal",
        "name": "升级：兹若特传送门",
        "metric": {
          "pickRate": 8.48,
          "games": 512,
          "winRate": 44.92
        }
      },
      {
        "augmentId": 1301,
        "apiName": "ARAM_DivineIntervention",
        "name": "神圣干预",
        "metric": {
          "pickRate": 4.21,
          "games": 477,
          "winRate": 43.19
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHeal",
            "name": "治疗术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHeal.png"
          }
        ],
        "metric": {
          "pickRate": 33.3,
          "games": 3270,
          "winRate": 45.72
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerMana",
            "name": "清晰术",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerMana.png"
          }
        ],
        "metric": {
          "pickRate": 15.11,
          "games": 1484,
          "winRate": 43.53
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.52,
          "games": 3100,
          "winRate": 43.94
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773173"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 8.23,
            "games": 582,
            "winRate": 41.07
          }
        },
        {
          "itemIds": [
            "771004",
            "773010"
          ],
          "totalPrice": 1380,
          "metric": {
            "pickRate": 6.26,
            "games": 443,
            "winRate": 47.63
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773158"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 30.3,
            "games": 2005,
            "winRate": 45.09
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 24.62,
            "games": 1629,
            "winRate": 40.88
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773084",
            "773504",
            "773083"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 3.26,
            "games": 107,
            "winRate": 46.73
          }
        },
        {
          "itemIds": [
            "773084",
            "773083",
            "773504"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 3.17,
            "games": 104,
            "winRate": 46.15
          }
        },
        {
          "itemIds": [
            "773504",
            "773084",
            "773083"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 2.13,
            "games": 70,
            "winRate": 34.29
          }
        },
        {
          "itemIds": [
            "773504",
            "773083",
            "773084"
          ],
          "totalPrice": 7850,
          "metric": {
            "pickRate": 1.62,
            "games": 53,
            "winRate": 33.96
          }
        },
        {
          "itemIds": [
            "773084",
            "773083",
            "773190"
          ],
          "totalPrice": 7875,
          "metric": {
            "pickRate": 1.59,
            "games": 52,
            "winRate": 34.62
          }
        }
      ]
    }
  },
  {
    "classicId": "60020",
    "key": "nunu",
    "name": "雪原双子",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/nunu/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 57,
    "tier": 5,
    "championMetrics": {
      "pickRate": 13.9106,
      "winRate": 41.8573
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 9.1,
          "games": 899,
          "winRate": 38.15
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 6.85,
          "games": 677,
          "winRate": 43.87
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 12.78,
          "games": 660,
          "winRate": 40.45
        }
      },
      {
        "augmentId": 1112,
        "apiName": "ARAM_UltimateUnstoppable",
        "name": "终极不可阻挡",
        "metric": {
          "pickRate": 12.27,
          "games": 634,
          "winRate": 42.9
        }
      },
      {
        "augmentId": 1353,
        "apiName": "ARAM_TankEngine",
        "name": "坦克引擎",
        "metric": {
          "pickRate": 6.24,
          "games": 616,
          "winRate": 46.27
        }
      },
      {
        "augmentId": 1211,
        "apiName": "ARAM_ItsKillingTime",
        "name": "杀戮时间到了",
        "metric": {
          "pickRate": 5.72,
          "games": 565,
          "winRate": 42.12
        }
      },
      {
        "augmentId": 2132,
        "apiName": "WarlockJuicebox",
        "name": "术士果汁盒",
        "metric": {
          "pickRate": 5.67,
          "games": 560,
          "winRate": 40.89
        }
      },
      {
        "augmentId": 1041,
        "apiName": "ARAM_Goliath",
        "name": "歌利亚巨人",
        "metric": {
          "pickRate": 11.81,
          "games": 555,
          "winRate": 41.98
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 11.72,
          "games": 551,
          "winRate": 43.38
        }
      },
      {
        "augmentId": 2006,
        "apiName": "ARAM_Dropkick",
        "name": "飞身踢",
        "metric": {
          "pickRate": 11,
          "games": 517,
          "winRate": 45.07
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 51.47,
          "games": 4393,
          "winRate": 42.32
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 19.02,
          "games": 1623,
          "winRate": 40.73
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "W",
          "Q",
          "E"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "W",
          "W",
          "R",
          "W",
          "Q",
          "W",
          "Q",
          "R",
          "Q",
          "Q",
          "E",
          "E"
        ],
        "metric": {
          "pickRate": 0.5,
          "games": 2580,
          "winRate": 42.4
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771026",
            "771052"
          ],
          "totalPrice": 1295,
          "metric": {
            "pickRate": 21.43,
            "games": 1353,
            "winRate": 41.17
          }
        },
        {
          "itemIds": [
            "773024"
          ],
          "totalPrice": 1350,
          "metric": {
            "pickRate": 9.49,
            "games": 599,
            "winRate": 39.57
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 25.38,
            "games": 1319,
            "winRate": 40.03
          }
        },
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 23.07,
            "games": 1199,
            "winRate": 44.29
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 5,
            "games": 154,
            "winRate": 42.86
          }
        },
        {
          "itemIds": [
            "773110",
            "773116",
            "773065"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 3.86,
            "games": 119,
            "winRate": 39.5
          }
        },
        {
          "itemIds": [
            "773116",
            "773110",
            "773065"
          ],
          "totalPrice": 8550,
          "metric": {
            "pickRate": 3.44,
            "games": 106,
            "winRate": 41.51
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773157"
          ],
          "totalPrice": 9660,
          "metric": {
            "pickRate": 2.56,
            "games": 79,
            "winRate": 35.44
          }
        },
        {
          "itemIds": [
            "773116",
            "773128",
            "773089"
          ],
          "totalPrice": 9300,
          "metric": {
            "pickRate": 2.3,
            "games": 71,
            "winRate": 45.07
          }
        }
      ]
    }
  },
  {
    "classicId": "60064",
    "key": "leesin",
    "name": "盲僧",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/leesin/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 58,
    "tier": 5,
    "championMetrics": {
      "pickRate": 15.8343,
      "winRate": 40.5065
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 13.03,
          "games": 1564,
          "winRate": 42.97
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 17.07,
          "games": 1051,
          "winRate": 42.91
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 8.71,
          "games": 1045,
          "winRate": 40.48
        }
      },
      {
        "augmentId": 1138,
        "apiName": "ARAM_Goredrink",
        "name": "渴血",
        "metric": {
          "pickRate": 15.29,
          "games": 941,
          "winRate": 41.13
        }
      },
      {
        "augmentId": 1063,
        "apiName": "ARAM_OutlawsGrit",
        "name": "狂徒豪气",
        "metric": {
          "pickRate": 6.62,
          "games": 794,
          "winRate": 41.81
        }
      },
      {
        "augmentId": 7006,
        "apiName": "StabbyStabby",
        "name": "又快又狠",
        "metric": {
          "pickRate": 12.62,
          "games": 777,
          "winRate": 39.25
        }
      },
      {
        "augmentId": 2091,
        "apiName": "EndlessDecimation",
        "name": "无尽大杀四方",
        "metric": {
          "pickRate": 6.34,
          "games": 761,
          "winRate": 41.92
        }
      },
      {
        "augmentId": 7010,
        "apiName": "FutureSightHeartsteel",
        "name": "时光发条：心之钢",
        "metric": {
          "pickRate": 5.96,
          "games": 715,
          "winRate": 41.4
        }
      },
      {
        "augmentId": 1326,
        "apiName": "Nightstalking",
        "name": "夜狩",
        "metric": {
          "pickRate": 5.3,
          "games": 636,
          "winRate": 39.15
        }
      },
      {
        "augmentId": 1073,
        "apiName": "ARAM_ShadowRunner",
        "name": "暗影疾奔",
        "metric": {
          "pickRate": 8.58,
          "games": 528,
          "winRate": 42.23
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 73.8,
          "games": 7238,
          "winRate": 40.48
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 9.04,
          "games": 887,
          "winRate": 40.7
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.65,
          "games": 4223,
          "winRate": 41.35
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 15.19,
            "games": 1129,
            "winRate": 39.24
          }
        },
        {
          "itemIds": [
            "771036",
            "771037"
          ],
          "totalPrice": 1275,
          "metric": {
            "pickRate": 7.98,
            "games": 593,
            "winRate": 43
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773111"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 60.08,
            "games": 2823,
            "winRate": 42.22
          }
        },
        {
          "itemIds": [
            "773047"
          ],
          "totalPrice": 1000,
          "metric": {
            "pickRate": 18.09,
            "games": 850,
            "winRate": 38.35
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773074",
            "773078",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 11.09,
            "games": 403,
            "winRate": 39.45
          }
        },
        {
          "itemIds": [
            "773078",
            "773074",
            "773071"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 10.37,
            "games": 377,
            "winRate": 38.2
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773156"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 5.34,
            "games": 194,
            "winRate": 38.14
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773078"
          ],
          "totalPrice": 9928,
          "metric": {
            "pickRate": 3.8,
            "games": 138,
            "winRate": 42.03
          }
        },
        {
          "itemIds": [
            "773074",
            "773071",
            "773072"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 3.27,
            "games": 119,
            "winRate": 42.02
          }
        }
      ]
    }
  },
  {
    "classicId": "60035",
    "key": "shaco",
    "name": "恶魔小丑",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/shaco/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 59,
    "tier": 5,
    "championMetrics": {
      "pickRate": 18.4897,
      "winRate": 40.0388
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1073,
        "apiName": "ARAM_ShadowRunner",
        "name": "暗影疾奔",
        "metric": {
          "pickRate": 20.76,
          "games": 1445,
          "winRate": 41.94
        }
      },
      {
        "augmentId": 1326,
        "apiName": "Nightstalking",
        "name": "夜狩",
        "metric": {
          "pickRate": 9.32,
          "games": 1261,
          "winRate": 38.78
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 7.68,
          "games": 1039,
          "winRate": 42.16
        }
      },
      {
        "augmentId": 2042,
        "apiName": "BrushPower",
        "name": "藏身草丛",
        "metric": {
          "pickRate": 7.1,
          "games": 961,
          "winRate": 36.73
        }
      },
      {
        "augmentId": 7002,
        "apiName": "DontStopCleavin",
        "name": "黑切联盟",
        "metric": {
          "pickRate": 6.73,
          "games": 910,
          "winRate": 43.74
        }
      },
      {
        "augmentId": 7006,
        "apiName": "StabbyStabby",
        "name": "又快又狠",
        "metric": {
          "pickRate": 12.25,
          "games": 853,
          "winRate": 40.33
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 5.78,
          "games": 782,
          "winRate": 38.75
        }
      },
      {
        "augmentId": 2083,
        "apiName": "BurstingTeeth",
        "name": "牙仙子",
        "metric": {
          "pickRate": 5.64,
          "games": 763,
          "winRate": 39.06
        }
      },
      {
        "augmentId": 7012,
        "apiName": "HexCore",
        "name": "海克斯核心",
        "metric": {
          "pickRate": 10.35,
          "games": 650,
          "winRate": 40.62
        }
      },
      {
        "augmentId": 1007,
        "apiName": "ARAM_BluntForce",
        "name": "大力",
        "metric": {
          "pickRate": 8.79,
          "games": 612,
          "winRate": 42.48
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 47.14,
          "games": 5382,
          "winRate": 39.59
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerDot",
            "name": "引燃",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerDot.png"
          }
        ],
        "metric": {
          "pickRate": 19.77,
          "games": 2257,
          "winRate": 40.36
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "E",
          "W",
          "Q"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "E",
          "E",
          "R",
          "E",
          "W",
          "E",
          "W",
          "R",
          "W",
          "W",
          "Q",
          "Q"
        ],
        "metric": {
          "pickRate": 0.48,
          "games": 1783,
          "winRate": 42.23
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "773134"
          ],
          "totalPrice": 1337,
          "metric": {
            "pickRate": 12.58,
            "games": 1052,
            "winRate": 37.93
          }
        },
        {
          "itemIds": [
            "771028",
            "771052",
            "771052"
          ],
          "totalPrice": 1345,
          "metric": {
            "pickRate": 3.77,
            "games": 315,
            "winRate": 43.81
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773006"
          ],
          "totalPrice": 900,
          "metric": {
            "pickRate": 35.91,
            "games": 1962,
            "winRate": 39.14
          }
        },
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 23.45,
            "games": 1281,
            "winRate": 43.01
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773142",
            "773071",
            "773031"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 3.89,
            "games": 171,
            "winRate": 39.77
          }
        },
        {
          "itemIds": [
            "773142",
            "773031",
            "773071"
          ],
          "totalPrice": 9500,
          "metric": {
            "pickRate": 2.98,
            "games": 131,
            "winRate": 40.46
          }
        },
        {
          "itemIds": [
            "773142",
            "773031",
            "773153"
          ],
          "totalPrice": 9700,
          "metric": {
            "pickRate": 2.89,
            "games": 127,
            "winRate": 35.43
          }
        },
        {
          "itemIds": [
            "773128",
            "773089",
            "773135"
          ],
          "totalPrice": 8695,
          "metric": {
            "pickRate": 2.39,
            "games": 105,
            "winRate": 46.67
          }
        },
        {
          "itemIds": [
            "773142",
            "773031",
            "773046"
          ],
          "totalPrice": 9300,
          "metric": {
            "pickRate": 2.16,
            "games": 95,
            "winRate": 36.84
          }
        }
      ]
    }
  },
  {
    "classicId": "60076",
    "key": "nidalee",
    "name": "狂野女猎手",
    "sourceUrl": "https://op.gg/zh-cn/lol/modes/aram-mayhem-classic/nidalee/build?region=global&tier=all&patch=16.15",
    "patch": "16.15",
    "rank": 60,
    "tier": 5,
    "championMetrics": {
      "pickRate": 18.8533,
      "winRate": 39.8957
    },
    "startingGold": 1400,
    "augments": [
      {
        "augmentId": 1113,
        "apiName": "ARAM_SkilledSniper",
        "name": "老练狙神",
        "metric": {
          "pickRate": 10.08,
          "games": 1410,
          "winRate": 39.36
        }
      },
      {
        "augmentId": 1097,
        "apiName": "ARAM_WitchfulThinking",
        "name": "巫师式思考",
        "metric": {
          "pickRate": 17.39,
          "games": 1226,
          "winRate": 40.13
        }
      },
      {
        "augmentId": 7007,
        "apiName": "Upgrade_DeathFireGrasp",
        "name": "升级：冥火之拥",
        "metric": {
          "pickRate": 8.37,
          "games": 1171,
          "winRate": 40.14
        }
      },
      {
        "augmentId": 1048,
        "apiName": "ARAM_JeweledGauntlet",
        "name": "珠光护手",
        "metric": {
          "pickRate": 18.24,
          "games": 1156,
          "winRate": 39.53
        }
      },
      {
        "augmentId": 1133,
        "apiName": "ARAM_MagicMissile",
        "name": "魔法飞弹",
        "metric": {
          "pickRate": 7.64,
          "games": 1069,
          "winRate": 40.6
        }
      },
      {
        "augmentId": 1084,
        "apiName": "ARAM_ThreadtheNeedle",
        "name": "穿针引线",
        "metric": {
          "pickRate": 7.63,
          "games": 1067,
          "winRate": 38.8
        }
      },
      {
        "augmentId": 1129,
        "apiName": "ARAM_Marksmage",
        "name": "神射法师",
        "metric": {
          "pickRate": 6.19,
          "games": 865,
          "winRate": 41.04
        }
      },
      {
        "augmentId": 1073,
        "apiName": "ARAM_ShadowRunner",
        "name": "暗影疾奔",
        "metric": {
          "pickRate": 10.43,
          "games": 735,
          "winRate": 38.23
        }
      },
      {
        "augmentId": 1390,
        "apiName": "ARAM_PhenomenalEvil",
        "name": "超凡邪恶",
        "metric": {
          "pickRate": 4.79,
          "games": 670,
          "winRate": 41.49
        }
      },
      {
        "augmentId": 2103,
        "apiName": "ARAM_BangBang",
        "name": "狙神飞星",
        "metric": {
          "pickRate": 4.6,
          "games": 643,
          "winRate": 39.35
        }
      }
    ],
    "summonerSets": [
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerSnowball",
            "name": "标记",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerSnowball.png"
          }
        ],
        "metric": {
          "pickRate": 48.98,
          "games": 5716,
          "winRate": 39.98
        }
      },
      {
        "spells": [
          {
            "key": "SummonerFlash",
            "name": "闪现",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerFlash.png"
          },
          {
            "key": "SummonerHaste",
            "name": "幽灵疾步",
            "icon": "https://opgg-static.akamaized.net/meta/images/lol/16.15.1/spell/SummonerHaste.png"
          }
        ],
        "metric": {
          "pickRate": 11.27,
          "games": 1315,
          "winRate": 40.15
        }
      }
    ],
    "runes": {
      "status": "unavailable",
      "reason": "OP.GG 当前显示“数据未找到”；不使用峡谷符文或人工预设替代。"
    },
    "skillBuilds": [
      {
        "priority": [
          "Q",
          "E",
          "W"
        ],
        "levelSequence": [
          "Q",
          "W",
          "E",
          "Q",
          "Q",
          "R",
          "Q",
          "E",
          "Q",
          "E",
          "R",
          "E",
          "E",
          "W",
          "W"
        ],
        "metric": {
          "pickRate": 0.55,
          "games": 5120,
          "winRate": 41.21
        }
      }
    ],
    "items": {
      "starting": [
        {
          "itemIds": [
            "771001",
            "772041",
            "773070"
          ],
          "totalPrice": 1370,
          "metric": {
            "pickRate": 20.48,
            "games": 1801,
            "winRate": 38.53
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 7.68,
            "games": 675,
            "winRate": 40.89
          }
        }
      ],
      "boots": [
        {
          "itemIds": [
            "773020"
          ],
          "totalPrice": 1100,
          "metric": {
            "pickRate": 69.09,
            "games": 5103,
            "winRate": 39.82
          }
        },
        {
          "itemIds": [
            "773010"
          ],
          "totalPrice": 1200,
          "metric": {
            "pickRate": 15.92,
            "games": 1176,
            "winRate": 37.59
          }
        }
      ],
      "core": [
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773128"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 5.92,
            "games": 291,
            "winRate": 39.18
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773128",
            "773089"
          ],
          "totalPrice": 9800,
          "metric": {
            "pickRate": 3.74,
            "games": 184,
            "winRate": 38.04
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773135"
          ],
          "totalPrice": 8995,
          "metric": {
            "pickRate": 3.66,
            "games": 180,
            "winRate": 46.11
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773089",
            "773165"
          ],
          "totalPrice": 8900,
          "metric": {
            "pickRate": 2.26,
            "games": 111,
            "winRate": 40.54
          }
        },
        {
          "itemIds": [
            "773070",
            "773003",
            "773165",
            "773089"
          ],
          "totalPrice": 8900,
          "metric": {
            "pickRate": 2.18,
            "games": 107,
            "winRate": 42.99
          }
        }
      ]
    }
  }
];
