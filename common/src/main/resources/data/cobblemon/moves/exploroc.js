({
    num: 17002,
    accuracy: 100,
    basePower: 250,
    category: "Physical",
    name: "Explo-roc",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, noparentalbond: 1, reflectable: 1, mustpressure: 1 },
    onAfterHit(target, source, move) {
        if (!move.hasSheerForce && source.hp) {
            for (const side of source.side.foeSidesWithConditions()) {
                side.addSideCondition("stealthrock");
            }
        }
    },
    onAfterSubDamage(damage, target, source, move) {
        if (!move.hasSheerForce && source.hp) {
            for (const side of source.side.foeSidesWithConditions()) {
                side.addSideCondition("stealthrock");
            }
        }
    },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Rock",
    contestType: "Beautiful"
})