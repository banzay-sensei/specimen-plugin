# Specimen dans Continue.dev et Roo Code

Ces deux extensions couvrent à la fois VS Code et JetBrains avec la même configuration MCP — utile si tu changes d'IDE selon le projet.

## Continue.dev

1. Ouvre `~/.continue/config.yaml` (ou le config.yaml du workspace).
2. Ajoute sous `mcpServers` :

```yaml
mcpServers:
  - name: specimen
    command: npx
    args: ["-y", "specimen-cli", "--mcp"]
```

3. Redémarre l'extension Continue (ou recharge la fenêtre).
4. Dans le chat Continue, en mode Agent :

```
Utilise specimen pour scanner ce fichier.
```

## Roo Code (fork de Cline)

1. Panneau Roo Code → icône **MCP Servers** → **Edit Global MCP Config** (ou config au niveau du projet).
2. Ajoute le même bloc que pour Cline :

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

3. Roo Code redémarre automatiquement ses serveurs MCP et affiche `specimen` dans la liste des outils actifs.
