# Specimen dans Zed

1. Ouvre `~/.config/zed/settings.json`.
2. Ajoute (ou complète la section existante) :

```json
{
  "context_servers": {
    "specimen": {
      "command": {
        "path": "npx",
        "args": ["-y", "specimen-cli", "--mcp"]
      }
    }
  }
}
```

3. Recharge la fenêtre Zed (`cmd+shift+p` → "Reload Window" ou équivalent).
4. Dans le panneau Assistant IA de Zed, l'outil `specimen` doit apparaître dans la liste des serveurs de contexte disponibles — active-le pour la conversation en cours.

```
Scanne mon fichier actif avec specimen et propose-moi une direction artistique.
```
