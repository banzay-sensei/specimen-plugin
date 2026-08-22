# Specimen dans JetBrains (IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider...)

Nécessite JetBrains AI Assistant, IDE version 2025.1 ou plus récente (support MCP natif, aucun plugin supplémentaire requis).

1. Va dans **Settings → Tools → AI Assistant → MCP Servers** (ou **Settings → AI Assistant → MCP** selon la version).
2. Ajoute un nouveau serveur :

```json
{
  "command": "npx",
  "args": ["-y", "specimen-cli", "--mcp"]
}
```

3. Active le serveur (toggle **Enabled**) puis **OK**.

> Important : les outils MCP ne sont disponibles qu'en **mode Agent** de l'AI Assistant, pas en mode Chat classique. Bascule en mode Agent avant de demander à l'assistant d'utiliser Specimen.

4. Dans le chat de l'AI Assistant (mode Agent) :

```
Utilise specimen pour scanner ce fichier et me proposer une direction artistique.
```

## Alternative : Gemini CLI via ACP dans JetBrains

Si tu préfères piloter Gemini CLI depuis l'IDE JetBrains (au lieu de l'AI Assistant natif), JetBrains supporte aussi l'Agent Client Protocol (ACP) depuis fin janvier 2026. Gemini CLI, une fois connecté en agent externe via ACP, peut lui-même charger le serveur MCP Specimen — voir le guide [`gemini-cli.md`](./gemini-cli.md) pour la configuration MCP côté Gemini, qui s'applique alors aussi dans ce contexte.
