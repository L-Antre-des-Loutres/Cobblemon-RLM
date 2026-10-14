({
    name: "Mawilite Rlm Poison",
    spritenum: 620,
    megaStone: { "Mawile-poison": "Mawile-RlmPoison-Mega" },
    itemUser: ["Mawile-poison"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -1003,
    gen: 6,
    isNonstandard: "Past"
})
