# Publication des releases

Le workflow `workflows/publish.yml` s'exécute lors de la publication d'une release GitHub.
Il compile le mod Java 21 pour Minecraft 1.21.1, puis publie :

- un JAR Fabric et un JAR NeoForge sur Modrinth (`GC58bFHM`) ;
- ces deux JAR sur [CurseForge](https://www.curseforge.com/minecraft/mc-addons/cobblemon-rlm)
  (`1449941`), chacun associé à son chargeur, avec Cobblemon (`687131`) obligatoire et
  Mega Showdown (`1189523`) optionnel. Fabric API (`306612`) est obligatoire pour le JAR Fabric.

Les titres portent les suffixes `(fabric)` et `(neoforge)`. Chaque fichier est compilé
avec Gradle ; aucune archive n'est simplement renommée en JAR. Le ZIP datapack n'est
plus publié, car il ne peut pas déclarer les vrais objets de méga-gemmes.

Avant chaque publication, le workflow exécute le `build` racine avec la version de la
release. Ce contrôle compile les deux chargeurs et vérifie leurs métadonnées, toutes
les ressources communes, les cinq recettes et leurs conditions de présence de Mega
Showdown. Une erreur dans ces contrôles empêche l'étape de publication.

Le projet CurseForge `1449941` est actuellement classé **Addons / Resource Packs**.
Avant de publier cette migration comme mod, faire corriger sa classification auprès
de CurseForge ou utiliser un projet de classe **Mods**, puis mettre à jour son
identifiant dans `publish.yml`. La publication distante n'a pas été testée pendant
la migration.

Le workflow `workflows/build.yml` compile les deux mods à chaque push et pull request,
puis conserve les JAR comme artefacts GitHub Actions.

Configurer les secrets du dépôt dans **Settings > Secrets and variables > Actions** :

- `MODRINTH_TOKEN` : jeton API Modrinth autorisé à publier sur le projet ;
- `CURSEFORGE_TOKEN` : jeton de publication CurseForge du compte autorisé sur le projet,
  à générer dans **API Tokens** de l'[espace auteur CurseForge](https://authors.curseforge.com/).

Le numéro de version, le titre et le changelog proviennent de la release GitHub.

## Annonces Discord

Après la réussite des publications, `publish.yml` appelle le workflow réutilisable
[`workflows/discord-release.yml`](workflows/discord-release.yml). Il envoie un embed avec
la version, le changelog, la compatibilité et les liens utiles regroupés sur une ligne.
L'expéditeur prend le nom du dépôt comme pseudo et utilise son icône en photo de profil.
Le nom et l'icône ne sont pas répétés dans l'embed. Les notes trop longues sont abrégées
avec un lien vers la release complète. Les liens de pull requests et de comparaison du
changelog généré par GitHub reçoivent des libellés courts.

1. Dans Discord, ouvrir **Paramètres du serveur > Intégrations > Webhooks**, créer un webhook
   et choisir le salon de destination ([guide Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)).
2. Copier son URL dans le secret GitHub **`DISCORD_WEBHOOK_URL`**, dans
   **Settings > Secrets and variables > Actions**. Utiliser l'URL telle quelle, sans suffixe `/github`.
3. Publier une release contenant ces workflows pour déclencher les publications puis l'annonce.

Sans ce secret, l'annonce est ignorée. Si Discord refuse l'envoi, le job de notification échoue ;
les publications déjà réalisées restent terminées. Aucune mention de membres ou de rôles n'est envoyée.

### Réutilisation dans un autre dépôt

Copier uniquement `.github/workflows/discord-release.yml` dans l'autre dépôt, créer son secret
`DISCORD_WEBHOOK_URL`, puis ajouter cet appel dans son workflow de release :

```yaml
jobs:
  notify-discord:
    # Ajouter `needs: publish` si le dépôt a un job de publication nommé `publish`.
    uses: ./.github/workflows/discord-release.yml
    with:
      logo-path: assets/icon.png
      release-details: Informations de compatibilité
      download-links: |
        [Télécharger](https://example.com/downloads)
    secrets:
      DISCORD_WEBHOOK_URL: ${{ secrets.DISCORD_WEBHOOK_URL }}
```

L'appel doit provenir d'un workflow déclenché par `release: types: [published]`.
Tous les paramètres `with` sont facultatifs : sans configuration, le nom du dépôt et
le lien GitHub sont utilisés. Le pseudo reste le nom du dépôt (limité à 80 caractères).
`logo-path` pointe vers une icône
PNG, JPEG, GIF ou WebP dans le dépôt appelant, idéalement carrée. La photo de profil
utilise cette image au commit de la release via une URL publique GitHub. Pour un dépôt privé,
fournir `avatar-url` avec une URL d'image accessible à Discord.
`embed-color` permet de changer la couleur (entier RGB,
`16753920` par défaut, soit `#FFA500`).
