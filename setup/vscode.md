# Specimen dans VS Code

Deux chemins possibles selon ton extension.

## Avec GitHub Copilot Chat (agent mode)

1. Palette de commandes → **MCP: Add Server** (ou édite `.vscode/mcp.json` dans ton workspace).
2. Ajoute :

```json
{
  "servers": {
    "specimen": {
      "command": "npx",
      "args": ["-y", "specimen-cli", "--mcp"]
    }
  }
}
```

3. Dans le chat, passe en mode Agent et active l'outil `specimen` s'il te le demande.

## Avec Cline

1. Ouvre le panneau Cline → **MCP Servers** → **Configure**.
2. Ajoute le même bloc `specimen` que ci-dessus dans `cline_mcp_settings.json`.
3. Cline redémarre automatiquement ses serveurs MCP.

## Sans agent (juste l'éditeur)

Si tu n'utilises pas de mode agent, passe par la CLI directement dans le terminal intégré de VS Code :

```bash
npx specimen-cli scan src/styles.css
npx specimen-cli directions
npx specimen-cli prescribe brutalist
```

Copie le brief affiché par `prescribe` dans Copilot Chat classique (mode non-agent) ou dans une conversation Claude/ChatGPT.
