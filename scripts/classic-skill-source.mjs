// OP.GG Classic preserves pre-rework kits; late-S3 Data Dragon is not
// interchangeable with every champion's historical form.
const historicalForms = {
  Karma: {
    version: "0.154.3",
    spellIds: ["KarmaHeavenlyWave", "KarmaSpiritBond", "KarmaSoulShield", "KarmaChakra"],
    maxRanks: [6, 6, 6, 1],
    iconStem: "karmaheavenlywave_jade34",
  },
};

export function classicNumericVersion(key) {
  return historicalForms[key]?.version || "3.15.5";
}

export function validateHistoricalForm(key, detail, historicalChampion) {
  const form = historicalForms[key];
  if (!form) return;
  if (!detail.abilities?.find(ability => ability.key === "Q")?.imageUrl?.includes(form.iconStem)
    || historicalChampion.spells?.some((spell, index) => spell.id !== form.spellIds[index] || spell.maxrank !== form.maxRanks[index])
    || historicalChampion.spells?.length !== form.spellIds.length) {
    throw new Error(`${key}: Classic historical form differs from Riot ${form.version}; review source before publishing`);
  }
}
