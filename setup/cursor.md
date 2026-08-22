# Specimen dans Cursor

1. Ouvre (ou crée) `.cursor/mcp.json` à la racine de ton projet, ou `~/.cursor/mcp.json` pour l'activer sur tous tes projets.
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

Si tu travailles depuis ce repo en local plutôt que via npm, remplace par le chemin direct :

```json
{
  "mcpServers": {
    "specimen": {
      "command": "node",
      "args": ["/chemin/absolu/vers/specimen-plugin/src/mcp-server.js"]
    }
  }
}
```

3. Redémarre Cursor (ou recharge la fenêtre). L'agent voit alors 4 outils : `specimen_scan_code`, `specimen_list_directions`, `specimen_prescribe_direction`, `specimen_build_export`.

4. Dans le chat de l'agent :

```
Utilise specimen pour scanner mon fichier src/App.css, puis propose-moi une direction artistique.
```

L'agent va appeler le scan, te montrer le score, te proposer les directions disponibles, puis — une fois que tu en choisis une — appeler `specimen_prescribe_direction` et générer lui-même le jeu de tokens en respectant les contraintes reçues, avant de l'appliquer à ton code.
