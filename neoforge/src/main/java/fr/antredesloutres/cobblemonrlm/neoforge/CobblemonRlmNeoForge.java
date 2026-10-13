package fr.antredesloutres.cobblemonrlm.neoforge;

import fr.antredesloutres.cobblemonrlm.CobblemonRlm;
import fr.antredesloutres.cobblemonrlm.compat.MegaShowdownCompat;
import fr.antredesloutres.cobblemonrlm.item.MegaGem;
import fr.antredesloutres.cobblemonrlm.item.MegaGemItem;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.ModList;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.event.ModifyDefaultComponentsEvent;
import net.neoforged.neoforge.registries.DeferredRegister;

import java.util.EnumMap;
import java.util.Map;
import java.util.function.Supplier;

@Mod(CobblemonRlm.MOD_ID)
public final class CobblemonRlmNeoForge {
    private final Map<MegaGem, Supplier<Item>> items = new EnumMap<>(MegaGem.class);

    public CobblemonRlmNeoForge(IEventBus modBus) {
        var itemRegister = DeferredRegister.create(Registries.ITEM, CobblemonRlm.ITEM_NAMESPACE);
        for (MegaGem gem : MegaGem.values()) {
            items.put(gem, itemRegister.register(gem.path(), () -> new MegaGemItem(gem)));
        }
        itemRegister.register(modBus);

        var tabs = DeferredRegister.create(Registries.CREATIVE_MODE_TAB, CobblemonRlm.MOD_ID);
        tabs.register("rlm", () -> CreativeModeTab.builder()
                .title(Component.translatable("itemGroup.adl_cobblemon_rlm.rlm"))
                .icon(() -> new ItemStack(items.get(MegaGem.FLAMMIKITE).get()))
                .displayItems((parameters, output) -> {
                    for (MegaGem gem : MegaGem.values()) {
                        output.accept(items.get(gem).get());
                    }
                }).build());
        tabs.register(modBus);
        modBus.addListener(this::modifyDefaultComponents);
    }

    private void modifyDefaultComponents(ModifyDefaultComponentsEvent event) {
        if (ModList.get().isLoaded(MegaShowdownCompat.MOD_ID)) {
            var components = MegaShowdownCompat.components();
            items.forEach((gem, item) -> event.modify(item.get(), builder -> builder
                    .set(components.type(), "mega")
                    .set(components.location(), gem.id())));
        }
    }
}
