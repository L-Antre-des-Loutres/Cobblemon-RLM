({
    name: "Ampharosite Rlm",
    spritenum: 620,
    megaStone: { "Ampharos-rlm": "Ampharos-MegaRlm" },
    itemUser: ["Ampharos-rlm"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -1001,
    gen: 6,
    isNonstandard: "Past"
})
