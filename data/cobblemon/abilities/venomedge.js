({
    name: "Venom Edge",
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
        if (move.flags['slicing']) {
            return this.chainModify(1.5);
        }
    },
    onSourceDamagingHit(damage, target, source, move) {
        if (target.hasAbility('shielddust') || target.hasItem('covertcloak')) return;
        if (move.flags['slicing']) {
            if (this.randomChance(2, 10)) {
                target.trySetStatus('psn', source);
            }
        }
    }
})
