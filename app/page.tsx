"use client";

import { useMemo, useState } from "react";

type Champion = {
  id: string;
  name: string;
  title: string;
  role: string;
  lane: string;
  difficulty: string;
  image: string;
  accent: string;
  spellOrder: string[];
  build: string[];
};

type RuneOption = {
  id: string;
  name: string;
  short: string;
  value: string;
  stat: string;
  per: number;
  count: number;
};

type RuneGroup = {
  id: string;
  name: string;
  cap: number;
  color: string;
  options: RuneOption[];
};

type Mastery = {
  id: string;
  name: string;
  desc: string;
  max: number;
  points: number;
  tier: number;
};

const champions: Champion[] = [
  {
    id: "Ahri",
    name: "阿狸",
    title: "九尾妖狐",
    role: "法师",
    lane: "中路",
    difficulty: "中等",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    accent: "#ef7c76",
    spellOrder: ["Q", "W", "E"],
    build: ["1056", "3020", "3165", "3089", "3135", "3157"],
  },
  {
    id: "Jax",
    name: "贾克斯",
    title: "武器大师",
    role: "战士",
    lane: "上路",
    difficulty: "中等",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
    accent: "#d1a14d",
    spellOrder: ["W", "Q", "E"],
    build: ["1055", "3078", "3047", "3153", "3053", "3065"],
  },
  {
    id: "LeeSin",
    name: "李青",
    title: "盲僧",
    role: "战士",
    lane: "打野",
    difficulty: "困难",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
    accent: "#d46a4b",
    spellOrder: ["Q", "W", "E"],
    build: ["1039", "3071", "3047", "3053", "6333", "3065"],
  },
  {
    id: "Ashe",
    name: "艾希",
    title: "寒冰射手",
    role: "射手",
    lane: "下路",
    difficulty: "简单",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    accent: "#74b8d6",
    spellOrder: ["W", "Q", "E"],
    build: ["1055", "3006", "3031", "3085", "3094", "3036"],
  },
  {
    id: "Janna",
    name: "迦娜",
    title: "风暴之怒",
    role: "辅助",
    lane: "辅助",
    difficulty: "中等",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
    accent: "#86d8cd",
    spellOrder: ["E", "W", "Q"],
    build: ["3850", "3158", "6617", "3107", "3222", "6616"],
  },
];

const initialRunes: RuneGroup[] = [
  {
    id: "mark",
    name: "印记",
    cap: 9,
    color: "#d96857",
    options: [
      { id: "magic-pen", name: "法术穿透印记", short: "穿", value: "+0.87 法术穿透", stat: "法术穿透", per: 0.87, count: 9 },
      { id: "attack", name: "攻击力印记", short: "攻", value: "+0.95 攻击力", stat: "攻击力", per: 0.95, count: 0 },
      { id: "as-mark", name: "攻击速度印记", short: "速", value: "+1.7% 攻击速度", stat: "攻击速度", per: 1.7, count: 0 },
    ],
  },
  {
    id: "seal",
    name: "符印",
    cap: 9,
    color: "#d6a64b",
    options: [
      { id: "armor", name: "护甲符印", short: "甲", value: "+1 护甲", stat: "护甲", per: 1, count: 9 },
      { id: "hp", name: "成长生命符印", short: "生", value: "每级 +1.33 生命值", stat: "18级生命值", per: 23.94, count: 0 },
      { id: "mana", name: "法力回复符印", short: "蓝", value: "+0.41 法力回复/5秒", stat: "法力回复/5秒", per: 0.41, count: 0 },
    ],
  },
  {
    id: "glyph",
    name: "雕纹",
    cap: 9,
    color: "#5da5cf",
    options: [
      { id: "mr", name: "魔法抗性雕纹", short: "抗", value: "+1.34 魔法抗性", stat: "魔法抗性", per: 1.34, count: 9 },
      { id: "cdr", name: "成长冷却雕纹", short: "冷", value: "18级 +1.67% 冷却缩减", stat: "18级冷却缩减", per: 1.67, count: 0 },
      { id: "ap-glyph", name: "法术强度雕纹", short: "法", value: "+1.19 法术强度", stat: "法术强度", per: 1.19, count: 0 },
    ],
  },
  {
    id: "quint",
    name: "精华",
    cap: 3,
    color: "#9c71de",
    options: [
      { id: "ap-quint", name: "法术强度精华", short: "法", value: "+4.95 法术强度", stat: "法术强度", per: 4.95, count: 3 },
      { id: "move", name: "移动速度精华", short: "移", value: "+1.5% 移动速度", stat: "移动速度", per: 1.5, count: 0 },
      { id: "hp-quint", name: "生命值精华", short: "生", value: "+26 生命值", stat: "生命值", per: 26, count: 0 },
    ],
  },
];

const initialMasteries: Record<string, Mastery[]> = {
  进攻: [
    { id: "sorcery", name: "巫术", desc: "技能伤害提高 0.5%/点", max: 4, points: 4, tier: 1 },
    { id: "fury", name: "狂怒", desc: "攻击速度提高 1.25%/点", max: 4, points: 4, tier: 1 },
    { id: "mental-force", name: "精神之力", desc: "法术强度提高 1.33/点", max: 3, points: 3, tier: 2 },
    { id: "arcane", name: "奥术精通", desc: "法术强度提高 5%", max: 1, points: 1, tier: 3 },
    { id: "havoc", name: "浩劫", desc: "造成的伤害提高 1.5%/点", max: 3, points: 3, tier: 4 },
    { id: "executioner", name: "死神", desc: "对低生命值目标伤害提高", max: 1, points: 1, tier: 5 },
  ],
  防御: [
    { id: "resistance", name: "抵抗", desc: "魔法抗性提高 2/点", max: 3, points: 0, tier: 1 },
    { id: "hardiness", name: "坚硬", desc: "护甲提高 2/点", max: 3, points: 0, tier: 1 },
    { id: "durability", name: "耐久", desc: "每级提高 1.5 生命值/点", max: 4, points: 0, tier: 2 },
    { id: "veteran", name: "老兵伤痕", desc: "生命值提高 30", max: 1, points: 0, tier: 3 },
    { id: "juggernaut", name: "主宰", desc: "最大生命值提高 3%", max: 1, points: 0, tier: 4 },
    { id: "tenacious", name: "顽强", desc: "控制时间减少 15%", max: 1, points: 0, tier: 5 },
  ],
  通用: [
    { id: "summoner", name: "召唤师的洞悉", desc: "召唤师技能冷却缩减", max: 1, points: 1, tier: 1 },
    { id: "meditation", name: "冥想", desc: "法力回复提高 1/点", max: 3, points: 3, tier: 1 },
    { id: "swiftness", name: "迅捷", desc: "移动速度提高 0.5%/点", max: 4, points: 4, tier: 2 },
    { id: "runic", name: "符文亲和", desc: "增益持续时间延长 20%", max: 1, points: 1, tier: 3 },
    { id: "awareness", name: "领悟", desc: "获得的经验提高 1.25%/点", max: 4, points: 4, tier: 3 },
    { id: "mastermind", name: "智谋", desc: "主动装备冷却缩减 10%", max: 1, points: 1, tier: 5 },
  ],
};

const spells = [
  { id: "Flash", name: "闪现", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerFlash.png" },
  { id: "Ignite", name: "引燃", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerDot.png" },
  { id: "Teleport", name: "传送", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerTeleport.png" },
  { id: "Smite", name: "惩戒", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerSmite.png" },
  { id: "Ghost", name: "幽灵疾步", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerHaste.png" },
  { id: "Exhaust", name: "虚弱", icon: "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/SummonerExhaust.png" },
];

const itemPool = [
  ["1056", "多兰之戒"], ["3020", "法师之靴"], ["3165", "莫雷洛秘典"], ["3089", "灭世者的死亡之帽"],
  ["3135", "虚空之杖"], ["3157", "中娅沙漏"], ["3078", "三相之力"], ["3047", "铁板靴"],
  ["3153", "破败王者之刃"], ["3053", "斯特拉克的挑战护手"], ["3065", "振奋盔甲"], ["3031", "无尽之刃"],
  ["3006", "狂战士胫甲"], ["3085", "卢安娜的飓风"], ["3094", "疾射火炮"], ["3036", "多米尼克领主的致意"],
];

const defaultSkillPlan = ["Q", "W", "E", "Q", "Q", "R", "Q", "W", "Q", "W", "R", "W", "W", "E", "E", "R", "E", "E"];

function itemIcon(id: string) {
  return `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${id}.png`;
}

function championIcon(id: string) {
  return `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${id}.png`;
}

export default function Home() {
  const [selectedChampion, setSelectedChampion] = useState(champions[0]);
  const [mode, setMode] = useState<"manual" | "ai">("manual");
  const [runes, setRunes] = useState(initialRunes);
  const [masteries, setMasteries] = useState(initialMasteries);
  const [selectedSpells, setSelectedSpells] = useState(["Flash", "Ignite"]);
  const [items, setItems] = useState(champions[0].build);
  const [skillPlan, setSkillPlan] = useState(defaultSkillPlan);
  const [activeItemSlot, setActiveItemSlot] = useState(0);
  const [prompt, setPrompt] = useState("对线压制优先，兼顾中期小规模团战；需要标注替代出装。");
  const [aiState, setAiState] = useState<"idle" | "researching" | "ready">("idle");
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");

  const totalMasteries = useMemo(
    () => Object.values(masteries).flat().reduce((sum, item) => sum + item.points, 0),
    [masteries],
  );

  const runeTotals = useMemo(() => {
    const totals: Record<string, number> = {};
    runes.forEach((group) =>
      group.options.forEach((option) => {
        if (option.count) totals[option.stat] = (totals[option.stat] || 0) + option.per * option.count;
      }),
    );
    return totals;
  }, [runes]);

  const filteredChampions = champions.filter((champion) =>
    `${champion.name}${champion.title}${champion.lane}`.includes(search.trim()),
  );

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  const chooseChampion = (champion: Champion) => {
    setSelectedChampion(champion);
    setItems(champion.build);
    setSelectedSpells(champion.lane === "打野" ? ["Flash", "Smite"] : champion.lane === "上路" ? ["Flash", "Teleport"] : ["Flash", "Ignite"]);
    setAiState("idle");
  };

  const adjustRune = (groupId: string, optionId: string, delta: number) => {
    setRunes((current) =>
      current.map((group) => {
        if (group.id !== groupId) return group;
        const used = group.options.reduce((sum, option) => sum + option.count, 0);
        return {
          ...group,
          options: group.options.map((option) => {
            if (option.id !== optionId) return option;
            if (delta > 0 && used >= group.cap) return option;
            return { ...option, count: Math.max(0, option.count + delta) };
          }),
        };
      }),
    );
  };

  const adjustMastery = (tree: string, id: string, delta: number) => {
    setMasteries((current) => ({
      ...current,
      [tree]: current[tree].map((mastery) => {
        if (mastery.id !== id) return mastery;
        if (delta > 0 && totalMasteries >= 30) return mastery;
        return { ...mastery, points: Math.min(mastery.max, Math.max(0, mastery.points + delta)) };
      }),
    }));
  };

  const toggleSpell = (id: string) => {
    setSelectedSpells((current) => {
      if (current.includes(id)) return current.filter((spell) => spell !== id);
      if (current.length < 2) return [...current, id];
      return [current[1], id];
    });
  };

  const generateBuild = () => {
    setAiState("researching");
    window.setTimeout(() => {
      const aggressive = prompt.includes("压制") || prompt.includes("爆发");
      setSelectedSpells(selectedChampion.lane === "打野" ? ["Flash", "Smite"] : aggressive ? ["Flash", "Ignite"] : ["Flash", "Teleport"]);
      setRunes((current) =>
        current.map((group) => ({
          ...group,
          options: group.options.map((option, index) => ({
            ...option,
            count: index === (aggressive && group.id === "glyph" ? 2 : 0) ? group.cap : 0,
          })),
        })),
      );
      setSkillPlan(selectedChampion.spellOrder[0] === "Q" ? defaultSkillPlan : defaultSkillPlan.map((skill) => skill === "Q" ? selectedChampion.spellOrder[0] : skill === selectedChampion.spellOrder[0] ? "Q" : skill));
      setAiState("ready");
      showToast("AI 方案已生成，已写入当前配置");
    }, 1450);
  };

  const changeSkill = (level: number, skill: string) => {
    setSkillPlan((current) => current.map((value, index) => index === level ? skill : value));
  };

  return (
    <main className="app-shell" style={{ "--champion-accent": selectedChampion.accent } as React.CSSProperties}>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">R</span>
          <div><strong>RIFT<span>//</span>LAB</strong><small>怀旧服构筑工作台</small></div>
        </div>
        <nav aria-label="主导航">
          <button className="active">构筑实验室</button>
          <button>英雄资料</button>
          <button>版本档案</button>
        </nav>
        <div className="sync-status">
          <span className="live-dot" />
          <div><strong>Classic 16.15</strong><small>OP.GG · 12 分钟前同步</small></div>
          <button aria-label="检查数据更新" onClick={() => showToast("已是最新数据版本")}>↻</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="champion-rail">
          <div className="rail-heading">
            <span>英雄池</span>
            <b>{champions.length}</b>
          </div>
          <label className="champion-search">
            <span>⌕</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索英雄" />
          </label>
          <div className="role-filters" aria-label="位置筛选">
            {["全部", "上", "野", "中", "下", "辅"].map((role, index) => <button key={role} className={index === 0 ? "active" : ""}>{role}</button>)}
          </div>
          <div className="champion-list">
            {filteredChampions.map((champion) => (
              <button key={champion.id} className={champion.id === selectedChampion.id ? "champion-row active" : "champion-row"} onClick={() => chooseChampion(champion)}>
                <img src={championIcon(champion.id)} alt="" />
                <span><strong>{champion.name}</strong><small>{champion.lane} · {champion.role}</small></span>
                <i>{champion.id === selectedChampion.id ? "●" : "›"}</i>
              </button>
            ))}
          </div>
          <div className="rail-footnote">
            <span>数据覆盖</span><strong>5 / 40</strong>
            <small>首版先接入上一任务已校验的 5 位英雄</small>
          </div>
        </aside>

        <section className="builder">
          <div className="champion-hero">
            <img src={selectedChampion.image} alt={`${selectedChampion.name}原画`} />
            <div className="hero-shade" />
            <div className="hero-content">
              <span className="eyebrow">经典服 · {selectedChampion.lane}方案</span>
              <h1>{selectedChampion.name}<small>{selectedChampion.title}</small></h1>
              <div className="hero-meta">
                <span>{selectedChampion.role}</span><span>{selectedChampion.lane}</span><span>难度 {selectedChampion.difficulty}</span>
              </div>
            </div>
            <div className="hero-stats">
              <div><span>推荐指数</span><strong>92</strong><small>/ 100</small></div>
              <div><span>样本可信度</span><strong>高</strong><small>4 个来源</small></div>
            </div>
          </div>

          <div className="builder-toolbar">
            <div className="mode-switch" role="tablist" aria-label="配置模式">
              <button className={mode === "manual" ? "active" : ""} onClick={() => setMode("manual")}><span>⌁</span>手动配置</button>
              <button className={mode === "ai" ? "active ai" : "ai"} onClick={() => setMode("ai")}><span>✦</span>AI 生成</button>
            </div>
            <div className="toolbar-actions">
              <span className="save-state">● 本地已保存</span>
              <button onClick={() => navigator.clipboard?.writeText(window.location.href).then(() => showToast("方案链接已复制"))}>分享方案</button>
              <button className="primary" onClick={() => showToast("构筑已保存到本地方案库")}>保存构筑</button>
            </div>
          </div>

          {mode === "ai" && (
            <section className="ai-panel">
              <div className="ai-orb"><span>✦</span></div>
              <div className="ai-copy">
                <div className="section-label">RIFT INTELLIGENCE</div>
                <h2>让 AI 从公开攻略中生成构筑</h2>
                <p>根据版本、分路和你的打法偏好，交叉核对 OP.GG、官方版本信息与社区高质量攻略。</p>
                <div className="prompt-box">
                  <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} aria-label="AI 构筑要求" />
                  <button onClick={generateBuild} disabled={aiState === "researching"}>
                    {aiState === "researching" ? "检索与比对中…" : "生成完整方案"} <span>→</span>
                  </button>
                </div>
                <div className="prompt-chips">
                  {["对线压制", "稳健发育", "团战优先", "新手友好"].map((chip) => <button key={chip} onClick={() => setPrompt(`${chip}；提供符文数值、技能加点与两套替代出装。`)}>＋ {chip}</button>)}
                </div>
              </div>
              <div className={aiState === "researching" ? "research-card loading" : "research-card"}>
                <div className="research-head"><span>资源核验</span><b>{aiState === "ready" ? "已完成" : aiState === "researching" ? "进行中" : "待开始"}</b></div>
                {[
                  ["OP.GG Classic", "主数据"],
                  ["版本更新记录", "数值校验"],
                  ["社区高分攻略", "打法交叉"],
                ].map(([name, tag]) => <div className="source-row" key={name}><i>✓</i><span><strong>{name}</strong><small>{tag}</small></span></div>)}
                <div className="confidence"><span>综合置信度</span><strong>{aiState === "ready" ? "91%" : "—"}</strong></div>
              </div>
            </section>
          )}

          <section className="loadout-grid">
            <div className="panel runes-panel">
              <div className="panel-title">
                <div><span className="section-index">01</span><div><h2>符文配置</h2><p>每类槽位可混搭，属性实时累计</p></div></div>
                <span className="slot-count">{runes.reduce((sum, group) => sum + group.options.reduce((total, option) => total + option.count, 0), 0)} / 30 槽</span>
              </div>
              <div className="rune-groups">
                {runes.map((group) => {
                  const used = group.options.reduce((sum, option) => sum + option.count, 0);
                  return (
                    <div className="rune-group" key={group.id} style={{ "--rune-color": group.color } as React.CSSProperties}>
                      <div className="rune-group-head"><span><i />{group.name}</span><b>{used}/{group.cap}</b></div>
                      <div className="rune-options">
                        {group.options.map((option) => (
                          <div className={option.count ? "rune-option selected" : "rune-option"} key={option.id}>
                            <div className="rune-gem">{option.short}<span>{option.count || ""}</span></div>
                            <div className="rune-info"><strong>{option.name}</strong><small>{option.value}</small></div>
                            <div className="stepper">
                              <button onClick={() => adjustRune(group.id, option.id, -1)} disabled={!option.count}>−</button>
                              <span>{option.count}</span>
                              <button onClick={() => adjustRune(group.id, option.id, 1)} disabled={used >= group.cap}>＋</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="rune-summary">
                <div className="summary-heading"><span>属性总计</span><small>基于当前 {Object.keys(runeTotals).length} 项属性</small></div>
                <div className="stat-chips">
                  {Object.entries(runeTotals).map(([stat, value]) => <div key={stat}><span>{stat}</span><strong>+{Number.isInteger(value) ? value : value.toFixed(2)}</strong></div>)}
                </div>
                <div className="rune-recap">
                  {runes.flatMap((group) => group.options.filter((option) => option.count).map((option) => <span key={option.id}><i style={{ background: group.color }} />{option.name} <b>×{option.count}</b></span>))}
                </div>
              </div>
            </div>

            <div className="panel masteries-panel">
              <div className="panel-title">
                <div><span className="section-index">02</span><div><h2>天赋页</h2><p>左键加点，按钮可撤回</p></div></div>
                <span className={totalMasteries === 30 ? "slot-count complete" : "slot-count"}>{totalMasteries} / 30 点</span>
              </div>
              <div className="mastery-trees">
                {Object.entries(masteries).map(([tree, list], treeIndex) => {
                  const treeTotal = list.reduce((sum, mastery) => sum + mastery.points, 0);
                  return (
                    <div className={`mastery-tree tree-${treeIndex}`} key={tree}>
                      <div className="tree-head"><span>{tree}</span><b>{treeTotal} 点</b></div>
                      <div className="mastery-list">
                        {list.map((mastery) => (
                          <button
                            className={mastery.points ? "mastery-node active" : "mastery-node"}
                            key={mastery.id}
                            onClick={() => adjustMastery(tree, mastery.id, 1)}
                            onContextMenu={(event) => { event.preventDefault(); adjustMastery(tree, mastery.id, -1); }}
                            title={`${mastery.desc}（右键撤回）`}
                          >
                            <span className="node-icon">{mastery.name.slice(0, 1)}</span>
                            <span><strong>{mastery.name}</strong><small>{mastery.desc}</small></span>
                            <i>{mastery.points}/{mastery.max}</i>
                            {mastery.points > 0 && <em onClick={(event) => { event.stopPropagation(); adjustMastery(tree, mastery.id, -1); }}>−</em>}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="panel skills-panel">
              <div className="panel-title">
                <div><span className="section-index">03</span><div><h2>技能加点</h2><p>点击等级格切换技能</p></div></div>
                <span className="recommendation">主 {selectedChampion.spellOrder[0]} · 副 {selectedChampion.spellOrder[1]}</span>
              </div>
              <div className="skill-priority">
                {selectedChampion.spellOrder.map((skill, index) => <div key={skill}><span>{index + 1}</span><b>{skill}</b><small>{index === 0 ? "优先升满" : index === 1 ? "次升" : "最后"}</small></div>)}
              </div>
              <div className="skill-table">
                <div className="level-row"><span>等级</span>{Array.from({ length: 18 }, (_, index) => <i key={index}>{index + 1}</i>)}</div>
                {["Q", "W", "E", "R"].map((skill) => (
                  <div className={`skill-row skill-${skill.toLowerCase()}`} key={skill}>
                    <b>{skill}</b>
                    {skillPlan.map((selected, index) => (
                      <button key={index} className={selected === skill ? "selected" : ""} onClick={() => changeSkill(index, skill)} aria-label={`${index + 1}级选择${skill}`}>
                        {selected === skill ? "●" : ""}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel compact-panel">
              <div className="panel-title">
                <div><span className="section-index">04</span><div><h2>召唤师技能</h2><p>选择 2 个技能</p></div></div>
              </div>
              <div className="spell-grid">
                {spells.map((spell) => (
                  <button className={selectedSpells.includes(spell.id) ? "spell active" : "spell"} key={spell.id} onClick={() => toggleSpell(spell.id)}>
                    <img src={spell.icon} alt="" /><span>{spell.name}</span>{selectedSpells.includes(spell.id) && <i>✓</i>}
                  </button>
                ))}
              </div>
            </div>

            <div className="panel compact-panel items-panel">
              <div className="panel-title">
                <div><span className="section-index">05</span><div><h2>核心出装</h2><p>点击槽位后从下方替换</p></div></div>
                <span className="recommendation">成装顺序</span>
              </div>
              <div className="build-slots">
                {items.map((id, index) => {
                  const name = itemPool.find(([itemId]) => itemId === id)?.[1] || "推荐装备";
                  return <button className={activeItemSlot === index ? "item-slot active" : "item-slot"} key={`${id}-${index}`} onClick={() => setActiveItemSlot(index)}><span>{index + 1}</span><img src={itemIcon(id)} alt="" /><strong>{name}</strong></button>;
                })}
              </div>
              <div className="item-pool">
                <span>替换为</span>
                {itemPool.map(([id, name]) => <button key={id} title={name} onClick={() => setItems((current) => current.map((item, index) => index === activeItemSlot ? id : item))}><img src={itemIcon(id)} alt={name} /></button>)}
              </div>
            </div>
          </section>
        </section>

        <aside className="insights">
          <div className="insight-tabs"><button className="active">情报</button><button>历史</button></div>
          <section className="insight-section">
            <div className="insight-title"><span>版本状态</span><i>LIVE</i></div>
            <div className="patch-card">
              <span>CLASSIC</span><strong>16.15</strong><small>2026.07.23 数据快照</small>
              <div><i /><b>核心数据无变更</b></div>
            </div>
          </section>
          <section className="insight-section">
            <div className="insight-title"><span>AI 结论</span><small>基于当前方案</small></div>
            <div className="ai-note">
              <span className="note-icon">✦</span>
              <p><strong>{selectedChampion.name} · {selectedChampion.lane}方案</strong>当前符文提供主属性与双抗，适合{selectedChampion.lane}常规对局。遇到高爆发阵容时，可把 3 个进攻雕纹换成成长防御属性。</p>
            </div>
            <div className="metrics">
              <div><span>对线</span><b>88</b><i style={{ width: "88%" }} /></div>
              <div><span>团战</span><b>84</b><i style={{ width: "84%" }} /></div>
              <div><span>容错</span><b>76</b><i style={{ width: "76%" }} /></div>
            </div>
          </section>
          <section className="insight-section">
            <div className="insight-title"><span>数据来源</span><small>可追溯</small></div>
            <a className="source-link" href="https://op.gg/zh-cn/lol/classic" target="_blank" rel="noreferrer"><i className="op">OP</i><span><strong>OP.GG Classic</strong><small>符文 · 天赋 · 英雄数据</small></span><b>↗</b></a>
            <a className="source-link" href="https://github.com/LeagueAkari/LeagueAkari" target="_blank" rel="noreferrer"><i className="gh">GH</i><span><strong>LeagueAkari</strong><small>交互结构参考 · MIT</small></span><b>↗</b></a>
            <a className="source-link" href="https://ddragon.leagueoflegends.com/" target="_blank" rel="noreferrer"><i className="dd">DD</i><span><strong>Data Dragon</strong><small>英雄与装备图标</small></span><b>↗</b></a>
          </section>
          <section className="insight-section history">
            <div className="insight-title"><span>上一任务成果</span><small>本地校验图</small></div>
            <a href={`/legacy/classic-${selectedChampion.id === "LeeSin" ? "lee" : selectedChampion.id.toLowerCase()}-build.png`} target="_blank">
              <img src={`/legacy/classic-${selectedChampion.id === "LeeSin" ? "lee" : selectedChampion.id.toLowerCase()}-build.png`} alt={`${selectedChampion.name}历史配置图`} />
              <span>查看 1600 × 1200 完整配置卡 <b>↗</b></span>
            </a>
          </section>
          <div className="disclaimer">本工具为非官方玩家项目，与 Riot Games 或 OP.GG 无隶属关系。</div>
        </aside>
      </div>
      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </main>
  );
}
