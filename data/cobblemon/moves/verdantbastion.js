({
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Verdant Bastion",
    pp: 10,
    priority: 4,
    flags: { noassist: 1, failcopycat: 1, failinstruct: 1 },
    stallingMove: true,
    volatileStatus: "kingsshield",
    onPrepareHit(pokemon) {
        return !!this.queue.willAct() && this.runEvent("StallMove", pokemon);
    },
    onHit(pokemon) {
        pokemon.addVolatile("stall");
    },
    condition: {
        duration: 1,
        onStart(target) {
            this.add("-singleturn", target, "Protect");
        },
        onTryHitPriority: 3,
        onTryHit(target, source, move) {
            if (!move.flags["protect"]) {
                if (["gmaxoneblow", "gmaxrapidflow"].includes(move.id))
                    return;
                if (move.isZ || move.isMax)
                    target.getMoveHitData(move).zBrokeProtect = true;
                return;
            }
            if (move.smartTarget) {
                move.smartTarget = false;
            } else {
                this.add("-activate", target, "move: Protect");
            }
            const lockedmove = source.getVolatile("lockedmove");
            if (lockedmove) {
                if (source.volatiles["lockedmove"].duration === 2) {
                    delete source.volatiles["lockedmove"];
                }
            }
            if (this.checkMoveMakesContact(move, source, target)) {
                source.side.addSideCondition("spikes");
            } else {
                this.boost({ def: 1 }, target, target, this.dex.getActiveMove("King's Shield"));
            }
            return this.NOT_FAIL;
        },
        onHit(target, source, move) {
            if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
                source.side.addSideCondition("spikes");
            } else if (move.isZOrMaxPowered) {
                this.boost({ def: 1 }, target, target, this.dex.getActiveMove("King's Shield"));
            }
        }
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cool"
})