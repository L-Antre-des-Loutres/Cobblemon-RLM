({
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Mystic Exchange",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onHit(target, source, move) {
        let positiveBoosts = {};
        let negativeBoosts = {};
        let hasStolen = false;
        let hasTransferred = false;
        for (let i in target.boosts) {
            if (target.boosts[i] > 0) {
                positiveBoosts[i] = target.boosts[i];
                target.boosts[i] = 0;
                hasStolen = true;
            }
        }
        for (let i in source.boosts) {
            if (source.boosts[i] < 0) {
                negativeBoosts[i] = source.boosts[i];
                source.boosts[i] = 0;
                hasTransferred = true;
            }
        }
        if (hasStolen) {
            this.boost(positiveBoosts, source, source, move);
        }
        if (hasTransferred) {
            this.boost(negativeBoosts, target, source, move);
        }
    },
    secondary: null,
    target: "normal",
    type: "Fairy"
})