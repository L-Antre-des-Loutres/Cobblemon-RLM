({
    name: "Flammikite",
    spritenum: 620,
    megaStone: { "Flammiko": "Flammiko-Mega", "flammiko": "flammikomega" },
    itemUser: ["Flammiko", "flammiko"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 6,
    isNonstandard: "Past"
})