# Publication des releases

Le workflow `workflows/publish.yml` s'exécute lors de la publication d'une release GitHub.
Il construit les archives pour Minecraft 1.21.1, puis publie :

- le JAR et le ZIP sur Modrinth (`GC58bFHM`) ;
- le JAR et le ZIP sur [CurseForge](https://www.curseforge.com/minecraft/mc-addons/cobblemon-rlm)
  (`1449941`), avec Fabric et NeoForge et la dépendance obligatoire Cobblemon (`687131`).

Les titres CurseForge portent les suffixes `(JAR)` et `(ZIP)` pour distinguer les deux fichiers.

Configurer les secrets du dépôt dans **Settings > Secrets and variables > Actions** :

- `MODRINTH_TOKEN` : jeton API Modrinth autorisé à publier sur le projet ;
- `CURSEFORGE_TOKEN` : jeton de publication CurseForge du compte autorisé sur le projet,
  à générer dans **API Tokens** de l'[espace auteur CurseForge](https://authors.curseforge.com/).

Le numéro de version, le titre et le changelog proviennent de la release GitHub.
