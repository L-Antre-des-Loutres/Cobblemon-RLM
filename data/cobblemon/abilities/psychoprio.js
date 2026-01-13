({
    onModifyPriority(priority, pokemon, target, move) {
        if (pokemon.hp === pokemon.maxhp)
            return priority + 1;
    },
    flags: {},
    name: "Psycho-Prio",
        rating: 1.5,
        num: 17002
})