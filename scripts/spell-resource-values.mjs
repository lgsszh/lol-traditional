// Client mana arrays start at rank 1, unlike DataValues' rank-0 placeholder.
// Keep zero-cost ranks, and reject absent/invalid source values rather than guess.
export function spellBaseCostValues(spell, maxRank) {
  const values = spell?.manaValues?.values ?? spell?.mana;
  if (!Number.isInteger(maxRank) || maxRank < 1 || !Array.isArray(values) || values.length < maxRank) return null;
  const ranks = values.slice(0, maxRank);
  return ranks.every(value => typeof value === "number" && Number.isFinite(value)) ? ranks : null;
}
