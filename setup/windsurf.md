# Specimen dans Windsurf

1. Ouvre les paramètres Windsurf → **MCP Servers** → **Add server** (ou édite directement `~/.codeium/windsurf/mcp_config.json`).
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

3. Recharge les serveurs MCP depuis le panneau Windsurf.
4. Dans Cascade (le chat de l'agent), demande :

```
Utilise l'outil specimen pour auditer mon composant Hero.jsx et me proposer une direction artistique.
```

Même comportement que dans Cursor : l'agent scanne, propose des directions, puis génère lui-même les tokens en respectant les contraintes reçues via `specimen_prescribe_direction`.
