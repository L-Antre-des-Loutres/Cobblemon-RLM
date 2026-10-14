({
    onDamagingHit(damage, target, source, move) {
        if (this.checkMoveMakesContact(move, source, target)) {
            if (this.randomChance(1, 2)) {
                source.trySetStatus("psn", target);
            }
        }
    },
    onModifyAtkPriority: 5,
        onModifySpD(spa) {
        return this.chainModify(1.5);
    },
    flags: {},
    name: "Venom Armor",
    rating: 5,
    num: 17006
})