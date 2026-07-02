({
    name: "Soul Release",
    onDamagingHit(damage, target, source, move) {
        if (target.m.maskBroken) return;
        target.m.maskBroken = true;
        
        this.add('-activate', target, 'ability: Soul Release');
        
        let faintedCount = 0;
        for (const ally of target.side.pokemon) {
            if (ally.fainted) faintedCount++;
        }
        
        if (faintedCount > 0) {
            this.damage(source.baseMaxhp * (faintedCount / 10), source, target);
        }
    }
})
