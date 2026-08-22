# Specimen dans Codex CLI

Codex utilise un fichier TOML, pas JSON — c'est la principale différence avec Cursor/Claude Code/Windsurf.

1. Ouvre `~/.codex/config.toml` (global) ou `.codex/config.toml` à la racine du projet (nécessite que le dossier soit "trusted").
2. Ajoute :

```toml
[mcpServers.specimen]
command = "npx"
args = ["-y", "specimen-cli", "--mcp"]
```

3. Vérifie que le serveur démarre :

```bash
codex mcp list
```

4. Dans une session Codex :

```
Utilise specimen pour scanner ce fichier et me proposer une direction artistique distincte.
```

> Note : au moment de la rédaction de ce guide, l'extension VS Code de Codex a un bug connu de détection des serveurs MCP configurés (les mêmes serveurs fonctionnent normalement en CLI). Si `specimen` n'apparaît pas dans l'extension, préfère la CLI Codex en attendant un correctif.
