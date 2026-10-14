({
    onModifyPriority(priority, pokemon, target, move) {
        if (pokemon.hp > pokemon.maxhp / 2)
            return priority + 1;
    },
    flags: {},
    name: "Psycho-Prio",
        rating: 1.5,
        num: 17002
})