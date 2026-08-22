# Specimen dans Amazon Q Developer (CLI, VS Code, JetBrains, Visual Studio, Eclipse)

Amazon Q Developer supporte MCP mais la configuration se fait uniquement via un fichier JSON — pas d'interface graphique dédiée dans la plupart des variantes.

1. Ouvre (ou crée) `~/.aws/amazonq/mcp.json`.
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

3. Redémarre la CLI `q` ou recharge le plugin Amazon Q dans ton IDE (VS Code, JetBrains, Visual Studio, Eclipse — la configuration est partagée).
4. Vérifie que le serveur est bien détecté :

```bash
q mcp list
```

5. Dans une session :

```
Utilise specimen pour scanner ce fichier et me proposer une direction artistique.
```
