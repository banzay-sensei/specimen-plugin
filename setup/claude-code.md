# Specimen dans Claude Code

Ajoute le serveur en une commande, depuis la racine de ton projet :

```bash
claude mcp add specimen -- npx -y specimen-cli --mcp
```

Ou en local (si tu développes depuis ce repo) :

```bash
claude mcp add specimen -- node /chemin/absolu/vers/specimen-plugin/src/mcp-server.js
```

Vérifie que le serveur est bien détecté :

```bash
claude mcp list
```

Dans une session Claude Code :

```
Scanne mon dossier src/ à la recherche de patterns de design génériques avec specimen, puis propose-moi 2-3 directions adaptées.
```

Claude Code appellera `specimen_scan_code` sur les fichiers pertinents, te présentera le score et les signaux détectés, puis — une fois la direction choisie — appellera `specimen_prescribe_direction` pour recevoir les contraintes et générera lui-même un jeu de tokens unique à cet essai, avant de l'appliquer au code et de l'exporter avec `specimen_build_export`.
