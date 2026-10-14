package fr.antredesloutres.cobblemonrlm.item;

import fr.antredesloutres.cobblemonrlm.CobblemonRlm;
import net.minecraft.resources.ResourceLocation;

/** The single shared list used by both loaders and the creative tab. */
public enum MegaGem {
    AMPHAROSITE_RLM("ampharositerlm"),
    FLAMMIKITE("flammikite"),
    MAWILITE_RLM_DRAGON("mawiliterlmdragon"),
    MAWILITE_RLM_POISON("mawiliterlmpoison"),
    WAMEKITE("wamekite");

    private final String path;

    MegaGem(String path) {
        this.path = path;
    }

    public String path() {
        return path;
    }

    public ResourceLocation id() {
        return ResourceLocation.fromNamespaceAndPath(CobblemonRlm.ITEM_NAMESPACE, path);
    }
}
