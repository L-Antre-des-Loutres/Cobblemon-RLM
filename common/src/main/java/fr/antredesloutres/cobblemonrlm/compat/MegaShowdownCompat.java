package fr.antredesloutres.cobblemonrlm.compat;

import net.minecraft.core.component.DataComponentType;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;

/** Resolves Mega Showdown's public component IDs without loading any optional classes. */
public final class MegaShowdownCompat {
    public static final String MOD_ID = "mega_showdown";

    private MegaShowdownCompat() {
    }

    // Called by the loaders' default-component events, after all registries are populated.
    public static Components components() {
        return new Components(component("registry_type_component"), component("registry_location_component"));
    }

    @SuppressWarnings("unchecked")
    private static <T> DataComponentType<T> component(String path) {
        ResourceLocation id = ResourceLocation.fromNamespaceAndPath(MOD_ID, path);
        return (DataComponentType<T>) BuiltInRegistries.DATA_COMPONENT_TYPE.getOptional(id)
                .orElseThrow(() -> new IllegalStateException("Missing Mega Showdown component: " + id));
    }

    public record Components(DataComponentType<String> type, DataComponentType<ResourceLocation> location) {
    }
}
