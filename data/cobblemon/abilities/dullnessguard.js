({
    onTryHit(target, source, move) {
        if (target === source || move.category === "Status" || move.type === "???" || move.id === "struggle")
            return;
        if (move.id === "skydrop" && !source.volatiles["skydrop"])
            return;
        this.debug("Dullness Guard immunity: " + move.id);
        const effectiveness = target.runEffectiveness(move);
        if (effectiveness >= 0) {
            if (move.smartTarget) {
                move.smartTarget = false;
            } else {
                this.add("-immune", target, "[from] ability: Dullness Guard");
            }
            return null;
        }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, failskillswap: 1, breakable: 1 },
    name: "Dullness Guard",
    rating: 5,
    num: 17003
})