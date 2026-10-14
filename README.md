<div align="center">
  <img src="common/src/main/resources/assets/logos/CobblemonRLM-big.png" alt="Cobblemon RLM Logo" width="600">

  <br><br>

  [![Modrinth](https://img.shields.io/modrinth/dt/GC58bFHM?style=for-the-badge&logo=modrinth&label=T%C3%A9l%C3%A9chargements&color=00AF5C)](https://modrinth.com/project/cobblemon-rlm)
  [![Game Version](https://img.shields.io/badge/Minecraft-1.21.1-62B47A?style=for-the-badge&logo=minecraft)](https://minecraft.net)
  [![Wiki](https://img.shields.io/badge/Wiki-Pok%C3%A9dex-3B82F6?style=for-the-badge)](https://antredesloutres.fr/pokemon/wiki/pokedex/)
  [![License](https://img.shields.io/badge/Licence-All%20Rights%20Reserved-EF4444?style=for-the-badge)](LICENSE)

  <br>

</div>

---

## Qu'est-ce que Cobblemon RLM ?

**Cobblemon RLM** est un mod pour **[Cobblemon](https://cobblemon.com)** créé par l'**Antre des Loutres**.
Il enrichit votre aventure avec des **formes régionales inédites**, des **Fakemons originaux**, de **nouveaux talents exclusifs** et des **Méga-Évolutions** issues de l'univers du **Royaume de Loutre Mer** (RLM).

> Minecraft **1.21.1**, Java **21**, Cobblemon **1.8.2**. Deux fichiers `.jar` distincts : **Fabric** et **NeoForge**.

---

## Contenu du Pack

### Formes Régionales RLM

| Pokémon | Typing | Pré-évolution |
|---------|--------|---------------|
| **Meganium** | Plante / Acier | Macronium (Plante) |
| **Tortank** | Eau / Vol | Carabaffe (Eau) |
| **Pingoléon** | Eau / Électrik | Prinplouf (Eau) |
| **Goupelin** | Feu / Fée | Roussil (Feu) |
| **Pharamp** | Électrik / Spectre | Lainergie, Wattouat |
| **Tarinorme** | Roche / Fée | Tarinor |
| **Spiritomb** | Feu / Ténèbres | — |
| **Luxray** | Glace | Luxio, Lixy |
| **Togekiss** | Fée / Dragon | — |
| **Ninjask** | Eau / Vol | Ningale (Insecte / Eau) |
| **Munja** | Eau / Roche | — |
| **Mysdibule** | Poison / Fée *ou* Dragon / Fée | Smowile (Fée) |
| **Héliatronc** | 🌤️ Ciel : Plante / Vol · 🌊 Océan : Plante / Eau · 🌋 Volcan : Plante / Feu | — |

### Fakemons Originaux

| Pokémon | Typing | Notes |
|---------|--------|-------|
| **Flammiko** | Feu / Électrik | — |
| **Apheos** | Fée / Vol | Évolue en Aphelis |
| **Aphelis** | Fée / Vol | — |
| **Rineshell** | Normal | Évolue en Galama |
| **Galama** | Acier / Normal | — |
| **Kotora** | Électrik / Fée | Ne spawn pas naturellement |
| **Tinywone** | Insecte | Évolue en Wamek |
| **Wamek** | Insecte / Combat | — |
| **Smowile** | Fée | Pré-évolution de Mysdibule |

### Talents Exclusifs

| Talent | Effet |
|--------|-------|
| **Dragonate** | Transforme les capacités Normal en type Dragon. |
| **Garde Émoussée** | Protège de toutes les capacités sauf celles « peu efficaces ». |
| **Trombe Marine** | Invoque la pluie à l'entrée. Sous la pluie : Attaque et Att. Spé. ×1.5. |
| **Mystiforce** | L'Attaque Spéciale est doublée. |
| **Psycho-Prio** | Priorité sur les attaques tant que les PV dépassent 50%. |
| **Armure Venimeuse** | Déf. Spé. +50% et 50% de chance d'empoisonner gravement au contact. |

### Méga-Évolutions RLM

> *Nécessite [Cobblemon: Mega Showdown](https://modrinth.com/mod/cobblemon-mega-showdown), version 1.3.0 pour Cobblemon 1.8.2 (hotfix). Le reste du mod fonctionne sans lui.*

| Pokémon | Typing | Talent |
|---------|--------|--------|
| **Méga-Pharamp RLM** | Électrik / Feu | — |
| **Méga-Flammiko** | Feu / Électrik | Simple |
| **Méga-Mysdibule** (Poison) | Poison / Fée | Armure Venimeuse |
| **Méga-Mysdibule** (Dragon) | Dragon / Fée | Mystiforce |
| **Méga-Wamek** | Insecte / Dragon | Dragonate |

---

## Installation

1. Installez Minecraft **1.21.1** avec **Fabric** ou **NeoForge**, puis Cobblemon **1.8.2** et ses dépendances.
2. Téléchargez le fichier **`.jar` correspondant à votre chargeur** depuis [Modrinth](https://modrinth.com/project/cobblemon-rlm) et placez-le dans **`mods/`**, sur le client et le serveur.
3. Sur Fabric, installez aussi **Fabric API**. Les versions de compilation sont Fabric Loader **0.19.5** et NeoForge **21.1.251**.
4. Pour utiliser les Méga-Évolutions et les recettes de gemmes, installez **Mega Showdown** et ses dépendances.

Lors de la migration, retirez l'ancien ZIP de `datapacks/` et l'ancien JAR de `mods/` : toutes leurs données et textures sont intégrées au nouveau mod. Un simple ZIP ne peut pas déclarer les nouveaux objets.

### Prérequis
- [**Cobblemon**](https://modrinth.com/mod/cobblemon) (obligatoire)
- [**Cobblemon: Mega Showdown**](https://modrinth.com/mod/cobblemon-mega-showdown) (optionnel, pour les Méga-Évolutions et les recettes de gemmes)

### Objets et recettes

Les cinq gemmes sont de vrais objets dans l'onglet créatif **Cobblemon RLM**. Leurs textures et les ingrédients de forge d'origine sont conservés.

| Objet | Identifiant | Modèle / premier emplacement | Base | Ajout |
|-------|-------------|--------------------------------|------|-------|
| Pharampite RLM | `rlm_megas:ampharositerlm` | Gemme Électrik | Méga-Pierre | Gemme Spectre |
| Flammikite | `rlm_megas:flammikite` | Gemme Feu | Méga-Pierre | Gemme Électrik |
| Mysdibulite RLM (Dragon) | `rlm_megas:mawiliterlmdragon` | Gemme Dragon | Méga-Pierre | Gemme Fée |
| Mysdibulite RLM (Poison) | `rlm_megas:mawiliterlmpoison` | Gemme Poison | Méga-Pierre | Gemme Fée |
| Guerriekite | `rlm_megas:wamekite` | Gemme Insecte | Méga-Pierre | Gemme Dragon |

Exemple : `/give @s rlm_megas:flammikite`. Lorsque Mega Showdown est installé, les objets reçoivent ses composants par défaut, y compris depuis `/give` et l'onglet créatif. Sans Mega Showdown, les objets restent disponibles mais leurs recettes et leurs effets de méga-évolution sont désactivés.

Pour obtenir Mysdibule RLM Dragon, utilisez `/pokegive mawile rlm dragon`. Pour la variante Poison : `/pokegive mawile rlm poison`.

Les anciennes gemmes en teinture gardent leurs modèles et leurs données existantes ; les nouveaux crafts produisent les vrais objets. Il n'y a pas de conversion automatique des anciens inventaires.

## Développement

Le projet utilise **Java 21** et le wrapper Gradle fourni. Configurez `JAVA_HOME` vers votre JDK 21, puis lancez `./gradlew build` (Linux/macOS) ou `.\gradlew.bat build` (Windows).

Les deux mods installables sont regroupés dans `build/libs/` :

- `cobblemon-rlm-fabric-1.7.0.jar` ;
- `cobblemon-rlm-neoforge-1.7.0.jar`.

La version et les dépendances sont centralisées dans [`gradle.properties`](gradle.properties). La publication peut remplacer la version avec `-Prelease_version=1.7.1`.

| Module | Rôle |
|--------|------|
| `common` | Objets communs, compatibilité par composants, tout le contenu `assets/` et `data/` du datapack |
| `fabric` | Enregistrement Fabric, onglet créatif, métadonnées et conditions des recettes |
| `neoforge` | Enregistrement NeoForge, onglet créatif, métadonnées et conditions des recettes |

Les sources communes sont compilées directement dans chaque mod, sans ajouter de dépendance Architectury à RLM. N'installez pas le JAR du module `common`.

Pour lancer un environnement de développement : `./gradlew :fabric:runClient` ou `./gradlew :neoforge:runClient`. Cobblemon et Mega Showdown sont chargés par défaut. Utilisez `-PwithMegaShowdown=false` pour tester sans Mega Showdown. Les tâches `runServer` sont également disponibles. Ces dépendances de développement ne sont pas incluses dans les JAR distribués.

**JEI 19.27.0.340** est chargé par défaut dans les environnements de développement Fabric et NeoForge pour consulter les objets et leurs recettes. Cette version est compatible avec Loom 1.11.x utilisé par le projet. Sa version est définie par `jei_version` dans `gradle.properties`. Après l'ajout ou une mise à jour de JEI, redémarrez le jeu pour le charger.

Pour ajouter une gemme, complétez l'énumération `MegaGem`, son modèle/texture, ses traductions, sa recette dans `common/src/main/resources/data/rlm_megas/recipe/` et le tag `rlm_megas:mega_gems`. Les conditions de présence de Mega Showdown sont ajoutées automatiquement lors de la construction des deux mods.

### Lancer les clients depuis IntelliJ IDEA

1. Ouvrez la racine du projet dans IntelliJ IDEA et importez le projet **Gradle** si l'IDE le propose.
2. Dans **Settings → Build, Execution, Deployment → Build Tools → Gradle**, utilisez le **wrapper Gradle** du projet et un **JDK 21** comme Gradle JVM.
3. Rechargez les projets dans la fenêtre **Gradle**, puis sélectionnez **RLM - Client Fabric** ou **RLM - Client NeoForge** dans le sélecteur de configurations.
4. Cliquez sur **Run ▶**. IntelliJ exécute directement `:fabric:runClient` ou `:neoforge:runClient` et affiche les journaux dans sa fenêtre **Run**.

Les configurations partagées se trouvent dans [`.run/`](.run). Vous pouvez aussi lancer les tâches `runClient` directement depuis la fenêtre Gradle. Elles chargent Cobblemon, Mega Showdown et JEI et réservent jusqu'à 4 Go au jeu. Les sauvegardes restent dans le dossier `runs/client` de chaque module. Lorsque le monde `RLM-Test` existe, il s'ouvre automatiquement ; sinon, le client affiche le menu principal. Pour afficher le menu même si ce monde existe, ajoutez `-PquickPlayWorld=` aux arguments Gradle de la configuration.

Sur l'environnement préparé, ouvrez le monde **« RLM 1.7.0 - Test creatif »** : il est plat, en créatif, avec les commandes activées, les cinq méga-gemmes et un Méga-Bracelet dans la barre rapide. Pour obtenir Flammiko, utilisez `/pokegive @s flammiko`.

Le pack **`build/client-test/Cobblemon-RLM-Test-1.7.0.mrpack`** peut aussi être importé dans Modrinth App comme un nouveau profil. Il contient le JAR Fabric de RLM 1.7.0, ses dépendances, JEI et le monde de test.

---

## 👥 Crédits

| | |
|---|---|
| **Projet** | [Antre des Loutres](https://antredesloutres.fr) |
| **Design & Développement** | [TheAzertor](https://github.com/Corentin-cott) · [RereBleue](https://github.com/matheo-1712) |
| **Modèles & Textures de base** | [Cobblemon](https://cobblemon.com) |

---

<div align="center">

  [![Télécharger](https://img.shields.io/badge/Télécharger%20sur-Modrinth-00AF5C?style=for-the-badge&logo=modrinth)](https://modrinth.com/project/cobblemon-rlm)
  [![GitHub](https://img.shields.io/badge/Code%20source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/L-Antre-des-Loutres/Cobblemon-RLM)

  <br>

  <sub>Fait avec ❤️ par l'<strong>Antre des Loutres</strong></sub>

</div>
