package fr.antredesloutres.cobblemonrlm.fabric;

import fr.antredesloutres.cobblemonrlm.CobblemonRlm;
import fr.antredesloutres.cobblemonrlm.compat.MegaShowdownCompat;
import fr.antredesloutres.cobblemonrlm.item.MegaGem;
import fr.antredesloutres.cobblemonrlm.item.MegaGemItem;
import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.item.v1.DefaultItemComponentEvents;
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroup;
import net.fabricmc.loader.api.FabricLoader;
import net.minecraft.core.Registry;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;

import java.util.EnumMap;
import java.util.Map;

public final class CobblemonRlmFabric implements ModInitializer {
    private final Map<MegaGem, Item> items = new EnumMap<>(MegaGem.class);

    @Override
    public void onInitialize() {
        for (MegaGem gem : MegaGem.values()) {
            items.put(gem, Registry.register(BuiltInRegistries.ITEM, gem.id(), new MegaGemItem(gem)));
        }

        Registry.register(BuiltInRegistries.CREATIVE_MODE_TAB, CobblemonRlm.id("rlm"), FabricItemGroup.builder()
                .title(Component.translatable("itemGroup.adl_cobblemon_rlm.rlm"))
                .icon(() -> new ItemStack(items.get(MegaGem.FLAMMIKITE)))
                .displayItems((parameters, output) -> {
                    for (MegaGem gem : MegaGem.values()) {
                        output.accept(items.get(gem));
                    }
                }).build());

        if (FabricLoader.getInstance().isModLoaded(MegaShowdownCompat.MOD_ID)) {
            DefaultItemComponentEvents.MODIFY.register(context -> {
                var components = MegaShowdownCompat.components();
                items.forEach((gem, item) -> context.modify(item, builder -> builder
                        .set(components.type(), "mega")
                        .set(components.location(), gem.id())));
            });
        }
    }
}
