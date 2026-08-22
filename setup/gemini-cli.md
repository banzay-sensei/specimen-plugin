# Specimen dans Gemini CLI

1. Ouvre (ou crée) `~/.gemini/settings.json`, ou `.gemini/settings.json` à la racine du projet.
2. Ajoute :

```json
{
  "mcpServers": {
    "specimen": {
      "command": "npx",
      "args": ["-y", "specimen-cli", "--mcp"]
    }
  }
}
```

3. Lance `gemini` dans ton terminal, à la racine du projet.
4. Vérifie que le serveur est bien chargé :

```
/mcp
```

5. Dans la session :

```
Utilise l'outil specimen pour auditer mon composant et me proposer une direction artistique distincte.
```

## Dans IntelliJ / JetBrains via Gemini CLI + ACP

Si tu pilotes Gemini CLI depuis un IDE JetBrains via l'Agent Client Protocol (`--experimental-acp`), la même configuration `~/.gemini/settings.json` s'applique — Gemini CLI garde accès à Specimen même piloté depuis l'IDE plutôt que depuis un terminal autonome.
