"use client";

import { classicItemRecipes } from "../classic-item-recipes.generated";
import { classicItems, type ClassicItem } from "../classic-items.generated";

type Props = {
  itemId: string;
  activeSlot: number;
  onInspect: (itemId: string) => void;
  onEquip: (itemId: string) => void;
};

type TreeNodeProps = {
  item: ClassicItem;
  path: string;
  depth: number;
  onInspect: (itemId: string) => void;
};

const itemById = new Map(classicItems.map((item) => [item.id, item]));
const itemTagLabels: Record<string, string> = {
  damage: "攻击力",
  "critical-strike": "暴击",
  "attack-speed": "攻击速度",
  "on-hit": "攻击特效",
  "armor-penetration": "护甲穿透",
  "spell-damage": "法术强度",
  mana: "法力",
  "magic-penetration": "法术穿透",
  health: "生命值",
  armor: "护甲",
  "magic-resistance": "魔法抗性",
  "cooldown-reduction": "冷却缩减",
  movement: "移动速度",
  "life-steal": "生命偷取",
};

function RecipeTreeNode({ item, path, depth, onInspect }: TreeNodeProps) {
  const recipe = classicItemRecipes[item.id];
  const components = depth < 3
    ? (recipe?.from || []).map((id) => itemById.get(id)).filter((entry): entry is ClassicItem => Boolean(entry))
    : [];

  return (
    <div className={`recipe-tree-node depth-${depth}`}>
      <button
        className={depth === 0 ? "root" : ""}
        onClick={() => onInspect(item.id)}
        aria-label={`查看${item.name}，${item.price}金币`}
      >
        <img src={item.icon} alt="" />
        <span><strong>{item.name}</strong><small>{item.price} 金币</small></span>
      </button>
      {components.length > 0 && (
        <div className="recipe-tree-children">
          {components.map((component, index) => (
            <RecipeTreeNode
              key={`${path}-${component.id}-${index}`}
              item={component}
              path={`${path}-${component.id}-${index}`}
              depth={depth + 1}
              onInspect={onInspect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ItemDetailPanel({ itemId, activeSlot, onInspect, onEquip }: Props) {
  const item = itemById.get(itemId);
  if (!item) return <aside className="item-detail"><p>选择一件装备查看完整信息。</p></aside>;

  const recipe = classicItemRecipes[item.id];
  const components = (recipe?.from || []).map((id) => itemById.get(id)).filter(Boolean);
  const upgrades = (recipe?.into || []).map((id) => itemById.get(id)).filter(Boolean);

  return (
    <aside className="item-detail">
      <header>
        <img src={item.icon} alt="" />
        <div>
          <span>{item.category}</span>
          <h4>{item.name}</h4>
          <b>{item.price} 金币</b>
        </div>
      </header>

      <div className="item-tag-list" aria-label="装备标签">
        {item.tags.length
          ? item.tags.map((tag) => <span key={tag}>{itemTagLabels[tag] || tag}</span>)
          : <span>特殊装备</span>}
      </div>
      <p className="item-description">{item.description || "该特殊装备没有额外文字说明。"}</p>

      <section className="recipe-section">
        <div className="detail-section-heading">
          <h5>游戏式合成路径</h5>
          <small>{components.length ? `${components.length} 个直接组件` : "直接购买／特殊获得"}</small>
        </div>
        {components.length ? (
          <>
            <div className="recipe-tree" aria-label={`${item.name}完整合成树`}>
              <RecipeTreeNode item={item} path={item.id} depth={0} onInspect={onInspect} />
            </div>
            <div className="recipe-price">
              <span>组件 {recipe.componentTotal} 金币</span>
              <i>＋</i>
              <span>合成 {recipe.combineCost} 金币</span>
              <b>＝ {item.price} 金币</b>
            </div>
          </>
        ) : (
          <div className="recipe-purchase">
            <img src={item.icon} alt="" />
            <p><b>商店直接购买</b><span>无需前置组件，花费 {item.price} 金币。</span></p>
          </div>
        )}
        {recipe?.note && <p className="recipe-note">{recipe.note}</p>}
      </section>

      <section className="upgrade-section">
        <div className="detail-section-heading">
          <h5>可继续合成</h5>
          <small>{upgrades.length ? `${upgrades.length} 件` : "最终装备"}</small>
        </div>
        {upgrades.length ? (
          <div className="upgrade-list">
            {upgrades.map((upgrade) => upgrade && (
              <button key={upgrade.id} onClick={() => onInspect(upgrade.id)}>
                <img src={upgrade.icon} alt="" />
                <span>{upgrade.name}<small>{upgrade.price} 金币</small></span>
              </button>
            ))}
          </div>
        ) : <p className="recipe-empty">当前目录中没有以它为组件的更高阶装备。</p>}
      </section>

      <footer>
        <small>说明、分类、图标与总价：OP.GG Classic 16.15</small>
        <small>配方：{recipe?.source || "OP.GG Classic 16.15"}</small>
        <button onClick={() => onEquip(item.id)}>装备到第 {activeSlot + 1} 格</button>
      </footer>
    </aside>
  );
}
