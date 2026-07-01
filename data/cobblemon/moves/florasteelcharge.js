({
    num: 17007,
    accuracy: 90,
    basePower: 65,
    category: "Physical",
    name: "Florasteel Charge",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onAfterHit(target, source, move) {
        if (!move.hasSheerForce && source.hp) {
            for (const side of source.side.foeSidesWithConditions()) {
                side.addSideCondition("spikes");
            }
        }
    },
    onAfterSubDamage(damage, target, source, move) {
        if (!move.hasSheerForce && source.hp) {
            for (const side of source.side.foeSidesWithConditions()) {
                side.addSideCondition("spikes");
            }
        }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Tough"
})
