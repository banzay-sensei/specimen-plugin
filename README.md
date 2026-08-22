# Specimen

Diagnose le générique. Prescris le distinct.

Un seul cœur logique (scanner de patterns + 4 directions artistiques curées + génération de tokens sous contrainte), distribué sous **quatre formes** pour couvrir le plus de monde possible.

| Tu utilises... | Passe par... |
|---|---|
| Cursor, Claude Code, Windsurf, VS Code (agent), Codex CLI, JetBrains, Zed, Gemini CLI, Continue.dev, Roo Code, Amazon Q Developer | Le **serveur MCP local** (stdio) — voir [`setup/`](./setup) |
| Claude.ai, Claude Desktop, ChatGPT (mode développeur), Perplexity, Grok, Mistral Le Chat | Le **serveur MCP distant** (connecteur HTTPS, vrai appel d'outil) — voir [`setup/remote-connector.md`](./setup/remote-connector.md) |
| Un terminal, un script, une CI, un IDE sans mode agent | La **CLI** (`npx specimen-cli`) |
| N'importe quel chat sans possibilité de connecteur | Les **fichiers à copier-coller** dans [`chat-prompts/`](./chat-prompts) — voir [`setup/chat-mode.md`](./setup/chat-mode.md) |

Les quatre puisent dans les mêmes fichiers sources (`src/directions.js`, `src/scanner.js`, `src/brief.js`, `src/create-server.js`) : une direction ou un pattern de détection modifié une fois se propage partout.

## Comment ça marche

1. **Scan** — analyse un extrait de code et détecte 10 signaux de design générique (dégradé violet/bleu, glassmorphism, police par défaut, structure hero+3cards, etc). Sort un score sur 100.
2. **Directions** — 4 directions artistiques curées (Signal Brutaliste, Terminal Heisei, Quiétude Scandinave, Chrome Y2K), chacune avec des règles strictes : palettes candidates (pas une couleur fixe), polices autorisées, plages de rayon/espacement/bordure, style d'ombre.
3. **Prescription sous contrainte** — Specimen ne génère pas les tokens lui-même. Il renvoie le brief de contraintes au modèle déjà connecté à l'outil (l'agent Cursor, Claude Code, ou le chat). C'est ce modèle qui choisit et compose à l'intérieur des règles — pas de clé API à gérer côté Specimen, ça marche avec n'importe quel modèle derrière n'importe quel outil.
4. **Export** — CSS variables, extrait de config Tailwind, ou fichier `SKILL.md` prêt à committer.

## Couverture complète des outils

**IDE / CLI agentiques (serveur MCP local, stdio) :**
Cursor · Claude Code · Windsurf · VS Code (Copilot agent mode et Cline) · Codex CLI · JetBrains (IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider — AI Assistant natif ou via Gemini CLI/ACP) · Zed · Gemini CLI · Continue.dev · Roo Code · Amazon Q Developer

**Chat avec connecteur distant (serveur MCP hébergé, HTTPS) :**
Claude.ai · Claude Desktop · Cowork · apps mobiles Claude · ChatGPT (mode développeur) · Perplexity · Grok · Mistral Le Chat

**Chat sans connecteur (fichiers à copier-coller, zéro installation) :**
N'importe quel modèle de langage conversationnel

**Autonome :**
Terminal, scripts, CI via `npx specimen-cli`

## Installation rapide

### Serveur MCP local

```bash
# Cursor / Windsurf / VS Code / Zed / Gemini CLI / Continue / Roo Code / Amazon Q — dans leur fichier de config respectif
npx -y specimen-cli --mcp

# Claude Code
claude mcp add specimen -- npx -y specimen-cli --mcp

# Codex — dans config.toml
# [mcpServers.specimen]
# command = "npx"
# args = ["-y", "specimen-cli", "--mcp"]
```

Guides détaillés par outil : [`cursor.md`](./setup/cursor.md) · [`claude-code.md`](./setup/claude-code.md) · [`windsurf.md`](./setup/windsurf.md) · [`vscode.md`](./setup/vscode.md) · [`codex.md`](./setup/codex.md) · [`jetbrains.md`](./setup/jetbrains.md) · [`zed.md`](./setup/zed.md) · [`gemini-cli.md`](./setup/gemini-cli.md) · [`continue-roo.md`](./setup/continue-roo.md) · [`amazon-q.md`](./setup/amazon-q.md)

### Serveur MCP distant (connecteur pour chat)

```bash
PORT=3000 HOST=0.0.0.0 node src/http-server.js
```

Déploie ça quelque part avec une URL HTTPS publique, puis suis [`setup/remote-connector.md`](./setup/remote-connector.md) pour l'ajouter comme connecteur dans Claude.ai, ChatGPT, Perplexity, Grok ou Mistral Le Chat.

### CLI autonome

```bash
npx specimen-cli scan src/styles.css
npx specimen-cli directions
npx specimen-cli prescribe brutalist
npx specimen-cli export --direction brutalist --format css --tokens tokens.json
```

### Mode chat sans connecteur

Ouvre [`setup/chat-mode.md`](./setup/chat-mode.md) — deux fichiers à copier-coller, zéro installation. À utiliser seulement si le connecteur distant n'est pas disponible sur la plateforme de chat visée.

## Outils MCP exposés

| Outil | Rôle |
|---|---|
| `specimen_scan_code` | Analyse un extrait de code, retourne score + signaux détectés |
| `specimen_list_directions` | Liste les 4 directions disponibles |
| `specimen_prescribe_direction` | Retourne le brief de contraintes d'une direction — l'agent génère lui-même les tokens |
| `specimen_build_export` | Formate un jeu de tokens en CSS / Tailwind / SKILL.md |

## Développement local

```bash
npm install
npm run mcp          # serveur MCP stdio (local, pour Cursor/Claude Code/etc.)
npm run mcp:http      # serveur MCP HTTP (distant, pour connecteurs de chat)
node bin/cli.js scan mon-fichier.css
```

## Pourquoi la génération n'est pas dans le serveur

Le serveur ne détient aucune clé API. Il ne fait que renvoyer des règles ; c'est le modèle déjà connecté à ton outil qui génère le JSON de tokens en les respectant. Ça marche à l'identique quel que soit le modèle derrière l'outil, sans coût d'API supplémentaire côté produit, et la variation entre deux utilisateurs vient du modèle de chacun — jamais du même appel serveur partagé. C'est aussi ce qui rend le serveur HTTP distant simple et bon marché à héberger : il est sans état, chaque requête est indépendante, pas de base de données ni de gestion de session.
