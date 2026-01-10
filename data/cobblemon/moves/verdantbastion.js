({
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Verdant Bastion",
    pp: 10,
    priority: 4,
    flags: { noassist: 1, failcopycat: 1 },
    stallingMove: true,
    volatileStatus: "verdantbastion",
    onPrepareHit(pokemon) {
        return !!this.queue.willAct() && this.runEvent("StallMove", pokemon);
    },
    onHit(pokemon) {
        pokemon.addVolatile("stall");
    },
    condition: {
        duration: 1,
        onStart(target) {
            this.add("-singleturn", target, "move: Protect");
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
                this.add("-activate", target, "move: Verdant Bastion");
                source.side.addSideCondition("spikes");
            }
            return this.NOT_FAIL;
        },
        onHit(target, source, move) {
            if (move.category === "Physical") {
                this.effectState.hitByPhysical = true;
            }
            if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
                this.damage(source.baseMaxhp / 8, source, target);
            }
        },
        onEnd(target) {
            if (!this.effectState.hitByPhysical) {
                this.boost({ def: 1 }, target);
            }
        }
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: { boost: { def: 1 } },
    contestType: "Tough"
})