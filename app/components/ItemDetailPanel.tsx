"use client";

import { classicItemRecipes } from "../classic-item-recipes.generated";
import { classicItems } from "../classic-items.generated";

type Props = {
  itemId: string;
  activeSlot: number;
  onInspect: (itemId: string) => void;
  onEquip: (itemId: string) => void;
};

const itemById = new Map(classicItems.map((item) => [item.id, item]));

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
        {item.tags.length ? item.tags.map((tag) => <span key={tag}>{tag}</span>) : <span>特殊装备</span>}
      </div>
      <p className="item-description">{item.description || "该特殊装备没有额外文字说明。"}</p>

      <section className="recipe-section">
        <div className="detail-section-heading">
          <h5>合成路径</h5>
          <small>{components.length ? `${components.length} 个组件` : "直接购买／特殊获得"}</small>
        </div>
        {components.length ? (
          <>
            <div className="recipe-flow">
              {components.map((component, index) => component && (
                <div className="recipe-component" key={`${component.id}-${index}`}>
                  {index > 0 && <i>＋</i>}
                  <button onClick={() => onInspect(component.id)} title={`查看${component.name}`}>
                    <img src={component.icon} alt="" />
                    <span>{component.name}<small>{component.price} 金币</small></span>
                  </button>
                </div>
              ))}
            </div>
            <div className="recipe-price">
              <span>组件 {recipe.componentTotal} 金币</span>
              <i>＋</i>
              <span>合成 {recipe.combineCost} 金币</span>
              <b>＝ {item.price} 金币</b>
            </div>
          </>
        ) : (
          <p className="recipe-empty">这件装备没有前置组件，或通过商店直接购买、专属升级及特殊规则获得。</p>
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
        <small>说明与总价：OP.GG Classic 16.15</small>
        <small>配方：{recipe?.source || "OP.GG Classic 16.15"}</small>
        <button onClick={() => onEquip(item.id)}>装备到第 {activeSlot + 1} 格</button>
      </footer>
    </aside>
  );
}
