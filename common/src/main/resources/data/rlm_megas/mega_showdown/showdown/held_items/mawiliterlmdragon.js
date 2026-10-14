({
    name: "Mawilite Rlm Dragon",
    spritenum: 620,
    megaStone: { "Mawile-dragon": "Mawile-MegaRlmDragon" },
    itemUser: ["Mawile-dragon"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -1002,
    gen: 6,
    isNonstandard: "Past"
})
