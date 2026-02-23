({
        onStart(source) {
            this.field.setWeather("raindance");
        },
        onModifyAtkPriority: 5,
        onModifyAtk(atk, attacker, defender, move) {
            if (["raindance", "primordialsea"].includes(attacker.effectiveWeather())) {
                this.debug("Marine Vortex boost");
                return this.chainModify(1.5);
            }
        },
        onModifySpAPriority: 5,
        onModifySpA(spa, attacker, defender, move) {
            if (["raindance", "primordialsea"].includes(attacker.effectiveWeather())) {
                this.debug("Marine Vortex boost");
                return this.chainModify(1.5);
            }
        },
        flags: {},
        name: "Marine Vortex",
        rating: 3,
        num: 17004
})