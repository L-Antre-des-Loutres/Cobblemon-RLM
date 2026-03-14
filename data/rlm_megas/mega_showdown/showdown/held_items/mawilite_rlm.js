{
  name: "Mawilite",
      spritenum: 999,
    megaStone: "Mawile-Mega",
    megaEvolves: ["Mawile"],
    itemUser: ["Mawile"],
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