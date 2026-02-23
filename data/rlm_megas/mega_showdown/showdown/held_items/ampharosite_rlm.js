{
  name: "Ampharosite",
      spritenum: 999,
    megaStone: "Ampharos-Mega",
    megaEvolves: ["Ampharos"],
    itemUser: ["Ampharos"],
    onTakeItem(item, source) {
  const name = source.species.name;
  const base = source.baseSpecies.baseSpecies;
  if (name === base) return false;
  if (item.megaEvolves?.includes(name)) return false;
  if (item.megaStone === name) return false;
  return true;
},
  num: -999,
      gen: 1,
    isNonstandard: "Past",
}