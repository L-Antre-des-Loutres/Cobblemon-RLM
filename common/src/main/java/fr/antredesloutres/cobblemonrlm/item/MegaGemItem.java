package fr.antredesloutres.cobblemonrlm.item;

import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Rarity;
import net.minecraft.world.item.TooltipFlag;

import java.util.List;

public final class MegaGemItem extends Item {
    private final MegaGem gem;

    public MegaGemItem(MegaGem gem) {
        super(new Properties().stacksTo(64).rarity(Rarity.RARE));
        this.gem = gem;
    }

    public MegaGem gem() {
        return gem;
    }

    @Override
    public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltip, TooltipFlag flag) {
        super.appendHoverText(stack, context, tooltip, flag);
        tooltip.add(Component.translatable("item.rlm_megas." + gem.path() + ".description")
                .withStyle(ChatFormatting.GRAY));
    }
}
