<div align="center">
  <img src="common/src/main/resources/assets/logos/CobblemonRLM-big.png" alt="Cobblemon RLM Logo" width="600">

  <br><br>

  [![Modrinth](https://img.shields.io/modrinth/dt/GC58bFHM?style=for-the-badge&logo=modrinth&label=Downloads&color=00AF5C)](https://modrinth.com/project/cobblemon-rlm)
  [![Game Version](https://img.shields.io/badge/Minecraft-1.21.1-62B47A?style=for-the-badge&logo=minecraft)](https://minecraft.net)
  [![Wiki](https://img.shields.io/badge/Wiki-Pok%C3%A9dex-3B82F6?style=for-the-badge)](https://antredesloutres.fr/pokemon/wiki/pokedex/)
  [![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-EF4444?style=for-the-badge)](LICENSE)

  <br>

  <a href="README.md"><strong>🇫🇷 Passer à la Version Française</strong></a>

</div>

---

## 🦦 What is Cobblemon RLM?

**Cobblemon RLM** is a mod for **[Cobblemon](https://cobblemon.com)** created by the **Antre des Loutres** team.
It enriches your adventure with **original regional forms**, **unique Fakemons**, **new exclusive abilities** and **Mega Evolutions** from the **Royaume de Loutre Mer** (RLM) universe.

> Minecraft **1.21.1**, Java **21**, Cobblemon **1.8.2**. Separate **Fabric** and **NeoForge** `.jar` files.

---

## 📋 Pack Contents

### 🔄 RLM Regional Forms

| Pokémon | Typing | Pre-evolution |
|---------|--------|---------------|
| **Meganium** | Grass / Steel | Bayleef (Grass) |
| **Blastoise** | Water / Flying | Wartortle (Water) |
| **Empoleon** | Water / Electric | Prinplup (Water) |
| **Delphox** | Fire / Fairy | Braixen (Fire) |
| **Ampharos** | Electric / Ghost | Flaaffy, Mareep |
| **Probopass** | Rock / Fairy | Nosepass |
| **Spiritomb** | Fire / Dark | — |
| **Luxray** | Ice | Luxio, Shinx |
| **Togekiss** | Fairy / Dragon | — |
| **Ninjask** | Water / Flying | Nincada (Bug / Water) |
| **Shedinja** | Water / Rock | — |
| **Mawile** | Poison / Fairy *or* Dragon / Fairy | Smowile (Fairy) |
| **Sunflora** | ☀️ Sky: Grass / Flying · 🌊 Ocean: Grass / Water · 🌋 Volcano: Grass / Fire | — |

### ✨ Original Fakemons

| Pokémon | Typing | Notes |
|---------|--------|-------|
| **Flammiko** | Fire / Electric | — |
| **Apheos** | Fairy / Flying | Evolves into Aphelis |
| **Aphelis** | Fairy / Flying | — |
| **Rineshell** | Normal | Evolves into Galama |
| **Galama** | Steel / Normal | — |
| **Kotora** | Electric / Fairy | Does not spawn |
| **Tinywone** | Bug | Evolves into Wamek |
| **Wamek** | Bug / Fighting | — |
| **Smowile** | Fairy | Mawile's Pre-evolution |

### 🧬 Exclusive Abilities

| Ability | Effect |
|---------|--------|
| **Dragonate** | Transforms Normal-type moves into Dragon-type. |
| **Dullness Guard** | Protects from all moves except those that are "not very effective". |
| **Marine Vortex** | Summons rain upon entry. Under rain: Attack and Sp. Atk ×1.5. |
| **Mystiforce** | Special Attack is doubled. |
| **Psycho-Prio** | Priority on attacks as long as HP is above 50%. |
| **Venom Armor** | Sp. Def +50% and 50% chance to badly poison on contact. |

### 💎 RLM Mega Evolutions

> *Requires [Cobblemon: Mega Showdown](https://modrinth.com/mod/cobblemon-mega-showdown), version 1.3.0 for Cobblemon 1.8.2 (hotfix). The rest of the mod works without it.*

| Pokémon | Typing | Ability |
|---------|--------|---------|
| **Mega Ampharos RLM** | Electric / Fire | — |
| **Mega Flammiko** | Fire / Electric | Simple |
| **Mega Mawile** (Poison) | Poison / Fairy | Venom Armor |
| **Mega Mawile** (Dragon) | Dragon / Fairy | Mystiforce |
| **Mega Wamek** | Bug / Dragon | Dragonate |

---

## 📥 Installation

1. Install Minecraft **1.21.1**, **Fabric** or **NeoForge**, **Cobblemon 1.8.2** and its dependencies.
2. Download the **`.jar` for your loader** from [Modrinth](https://modrinth.com/project/cobblemon-rlm), then place it in **`mods/`** on both client and server.
3. On Fabric, also install **Fabric API**. The build targets Fabric Loader **0.19.5** and NeoForge **21.1.251**.
4. Install **Mega Showdown** and its dependencies to use Mega Evolutions and Mega Gem recipes.

Remove the old datapack ZIP and old wrapper JAR when migrating: their resources are included in the compiled mod. A standalone datapack cannot register these new items.

### Requirements
- [**Cobblemon**](https://modrinth.com/mod/cobblemon) (required)
- [**Cobblemon: Mega Showdown**](https://modrinth.com/mod/cobblemon-mega-showdown) (optional, for Mega Evolutions and gem recipes)

### Registered items

The **Cobblemon RLM** creative tab contains `rlm_megas:ampharositerlm`, `rlm_megas:flammikite`, `rlm_megas:mawiliterlmdragon`, `rlm_megas:mawiliterlmpoison` and `rlm_megas:wamekite`. Original textures and smithing ingredients are retained. For example: `/give @s rlm_megas:flammikite`.

When Mega Showdown is installed, its components are applied by default to every new stack, including creative inventory and `/give` items. Without it, the items remain available but their recipes and Mega Evolution effects are disabled. Legacy dye-based gems retain their existing models and data; inventories are not automatically converted.

## Development

Set `JAVA_HOME` to a **JDK 21**, then run `./gradlew build` (Linux/macOS) or `.\gradlew.bat build` (Windows). The two installable mods are collected in `build/libs/`. Versions are configured in [`gradle.properties`](gradle.properties).

`common` contains shared Java code and all datapack resources. `fabric` and `neoforge` register the items and creative tab using their respective loader APIs. Common sources are compiled into each loader's JAR; RLM does not require Architectury. Do not install the common module JAR.

Run `./gradlew :fabric:runClient` or `./gradlew :neoforge:runClient` for development. Cobblemon and Mega Showdown are loaded by default; use `-PwithMegaShowdown=false` to test without Mega Showdown. Both modules also provide `runServer`. Development dependencies are not embedded in the distributed mods.

**JEI 19.27.0.340** is loaded by default in both Fabric and NeoForge development environments to browse items and recipes. This version supports the project's Loom 1.11.x toolchain. Its version is configured through `jei_version` in `gradle.properties`. Restart the game after adding or updating JEI.

### Launch clients in IntelliJ IDEA

Open the project root as a Gradle project, select the Gradle wrapper and JDK 21, then reload the Gradle project. Select **RLM - Client Fabric** or **RLM - Client NeoForge** and click **Run ▶**. These shared configurations in [`.run/`](.run) execute the corresponding Gradle `runClient` task with output in IntelliJ's Run window. You can also launch `runClient` directly from the Gradle tool window.

Both clients use up to 4 GB of memory and automatically open `RLM-Test` when that save exists. Otherwise, they open the main menu. Add `-PquickPlayWorld=` to the Gradle arguments to open the main menu explicitly.

See the [French development documentation](README.md#développement) for resource locations and instructions for adding gems.

Use `/pokegive mawile rlm dragon` for RLM Dragon Mawile and `/pokegive mawile rlm poison` for its Poison variant.

Use `/pokegive delphox rlm` (or `/pokegive delphox rlm=true`) for RLM Delphox. Its RLM aspect remains available with Mega Showdown installed; `/pokegive delphox` still gives the normal form.

---

## 👥 Credits

| | |
|---|---|
| **Project** | [Antre des Loutres](https://antredesloutres.fr) |
| **Design & Development** | [TheAzertor](https://github.com/Corentin-cott) · [RereBleue](https://github.com/matheo-1712) |
| **Base Models & Textures** | [Cobblemon](https://cobblemon.com) |

---

<div align="center">

  [![Download](https://img.shields.io/badge/Download%20on-Modrinth-00AF5C?style=for-the-badge&logo=modrinth)](https://modrinth.com/project/cobblemon-rlm)
  [![GitHub](https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/L-Antre-des-Loutres/Cobblemon-RLM)

  <br>

  <sub>Made with ❤️ by <strong>Antre des Loutres</strong></sub>

</div>
