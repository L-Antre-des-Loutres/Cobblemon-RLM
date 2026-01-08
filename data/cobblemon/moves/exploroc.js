({
    num: 153,
    accuracy: 100,
    basePower: 250,
    category: "Physical",
    name: "Explo-roc",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, noparentalbond: 1, reflectable: 1, mustpressure: 1 },
    sideCondition: "stealthrock",
    condition: {
        // this is a side condition
        onSideStart(side) {
            this.add("-sidestart", side, "move: Stealth Rock");
        },
        onEntryHazard(pokemon) {
            if (pokemon.hasItem("heavydutyboots"))
                return;
            const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove("stealthrock")), -6, 6);
            this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
        }
    },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Rock",
    contestType: "Beautiful"
})