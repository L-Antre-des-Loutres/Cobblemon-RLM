({
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["slicing"]) {
        this.debug("Venom Edge boost");
        return this.chainModify(1.5);
      }
    },
    onSourceDamagingHit(damage, target, source, move) {
      if (move.flags["slicing"]) {
        if (this.randomChance(1, 5)) {
          target.trySetStatus("psn", source);
        }
      }
    },
    flags: {},
    name: "Venom Edge",
    rating: 3.5,
})
