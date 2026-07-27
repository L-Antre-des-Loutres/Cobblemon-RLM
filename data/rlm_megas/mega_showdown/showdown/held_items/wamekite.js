({
    name: "Wamekite",
    spritenum: 620,
    megaStone: { "Wamek": "Wamek-Mega", "wamek": "wamekmega" },
    megaEvolves: "Wamek",
    itemUser: ["Wamek", "wamek"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -998,
    gen: 6,
    isNonstandard: "Past"
})