({
    name: "Verdant Bastion",
    onDamagingHitOrder: 1,
    num: 17010,
    onDamagingHit(damage, target, source, move) {
        if (this.checkMoveMakesContact(move, source, target, true)) {
            this.damage(source.baseMaxhp / 8, source, target);
            source.side.addSideCondition('spikes');
        }
    }
})
