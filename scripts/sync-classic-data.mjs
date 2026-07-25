const suffix = process.argv.includes("--check") ? "?check=1" : "?update=1";

await import(`./generate-classic-items.mjs${suffix}`);
await import(`./generate-classic-skills.mjs${suffix}`);
await import(`./generate-classic-item-recipes.mjs${suffix}`);

console.log(process.argv.includes("--check")
  ? "OP.GG Classic data is up to date."
  : "OP.GG Classic data sync complete.");
