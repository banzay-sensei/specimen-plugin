# Specimen comme connecteur distant (Claude.ai, ChatGPT, Perplexity, Grok, Mistral Le Chat)

C'est le canal à plus fort potentiel de portée : depuis 2026, Claude (tous les plans), ChatGPT (Plus/Pro/Business/Enterprise, mode développeur), Perplexity (Pro/Max/Enterprise), Grok (comptes payants) et Mistral Le Chat supportent tous l'ajout d'un serveur MCP **distant** via une simple URL HTTPS. Contrairement au mode chat "copie-colle" ([`chat-mode.md`](./chat-mode.md)), ici l'utilisateur obtient un vrai appel d'outil — le scan et la prescription tournent réellement, pas juste simulés par le modèle.

Aucune installation locale requise côté utilisateur final : toi (ou n'importe qui) héberges le serveur une fois, l'URL est publique, tout le monde s'y connecte.

## 1. Déployer `src/http-server.js`

Le fichier est déjà prêt (Express + transport Streamable HTTP, sans état). Il suffit de le déployer sur une plateforme qui expose une URL HTTPS publique — par exemple Render, Railway, Fly.io, ou un VPS classique avec un reverse proxy TLS. Variables d'environnement utiles :

- `PORT` — port d'écoute (beaucoup de plateformes l'injectent automatiquement)
- `HOST` — `0.0.0.0` pour accepter le trafic derrière un reverse proxy
- `ALLOWED_HOSTS` — liste blanche de hosts séparés par des virgules, recommandé en production

```bash
npm install
PORT=3000 HOST=0.0.0.0 node src/http-server.js
```

Vérifie ensuite que l'URL répond :

```bash
curl https://ton-domaine.com/
# → "Specimen MCP server is running. POST to /mcp with an MCP client."
```

L'endpoint MCP est `https://ton-domaine.com/mcp`.

## 2. Ajouter le connecteur côté utilisateur

### Claude (claude.ai, Claude Desktop, Cowork, mobile)
Réglages → **Connecteurs** → **Ajouter** → **Personnalisé** → type **Web** → coller `https://ton-domaine.com/mcp`.

### ChatGPT
Nécessite le **mode développeur** activé (Réglages → Sécurité et connexion). Une fois activé : menu **+** du chat → connecteurs → ajouter l'URL MCP.

### Perplexity / Grok / Mistral Le Chat
Même principe côté réglages de connecteurs/outils — coller l'URL `https://ton-domaine.com/mcp`. Ces plateformes évoluent vite ; si le libellé exact a changé, cherche "MCP" ou "connecteur personnalisé" dans les réglages.

## 3. Utilisation

Une fois connecté, l'utilisateur écrit simplement dans son chat habituel :

```
Utilise le connecteur Specimen pour scanner ce code et me proposer une direction artistique.
```

Le modèle appelle réellement `specimen_scan_code`, puis `specimen_prescribe_direction`, génère les tokens en respectant les contraintes reçues, et peut appeler `specimen_build_export` pour livrer un fichier prêt à coller.

## Sécurité et limites à connaître

- Le serveur ne détient aucune donnée personnelle ni clé API — il est sans état, chaque requête est indépendante.
- N'importe qui connaissant l'URL peut l'ajouter comme connecteur. Pour un usage public, ce n'est pas un problème (c'est justement l'objectif de portée). Pour un usage interne, restreins `ALLOWED_HOSTS` et mets l'URL derrière une authentification si besoin.
- Reste attentif à l'usage/consommation si l'hébergement est payant à la requête — le trafic peut monter vite si l'outil devient populaire.
