package fr.antredesloutres.cobblemonrlm;

import net.minecraft.resources.ResourceLocation;

public final class CobblemonRlm {
    public static final String MOD_ID = "adl_cobblemon_rlm";
    public static final String ITEM_NAMESPACE = "rlm_megas";

    private CobblemonRlm() {
    }

    public static ResourceLocation id(String path) {
        return ResourceLocation.fromNamespaceAndPath(MOD_ID, path);
    }
}
