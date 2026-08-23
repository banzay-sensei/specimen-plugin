# Specimen en mode chat (ChatGPT, Claude.ai, Gemini — sans agent ni terminal)

Pas d'IDE agentique, pas de MCP, juste une fenêtre de chat ? Specimen fonctionne quand même, en deux étapes, avec des fichiers à copier-coller. Aucune installation requise.

> Si tu utilises Claude.ai, Claude Desktop, ChatGPT (mode développeur), Perplexity, Grok ou Mistral Le Chat, il existe une meilleure option : un **connecteur distant** qui exécute réellement le scan et la génération au lieu de laisser le modèle les simuler. Voir [`remote-connector.md`](./remote-connector.md). Le guide ci-dessous reste utile pour toute autre plateforme de chat, ou si aucun connecteur n'est disponible.

## 1. Diagnostic

Ouvre [`chat-prompts/scan.md`](../chat-prompts/scan.md), copie tout le contenu dans un nouveau chat, colle ton code à la fin, envoie. Le modèle applique lui-même la grille de 10 signaux et te donne un score sur 100.

## 2. Direction artistique

Choisis une direction et ouvre le fichier correspondant :

| Direction | Fichier |
|---|---|
| Signal Brutaliste | [`chat-prompts/brutalist.md`](../chat-prompts/brutalist.md) |
| Terminal Heisei | [`chat-prompts/heisei.md`](../chat-prompts/heisei.md) |
| Quiétude Scandinave | [`chat-prompts/scandi.md`](../chat-prompts/scandi.md) |
| Chrome Y2K | [`chat-prompts/y2k.md`](../chat-prompts/y2k.md) |
| Éditorial Précis | [`chat-prompts/editorial.md`](../chat-prompts/editorial.md) |

Copie tout le contenu du fichier dans le même chat (à la suite du diagnostic, pour garder le contexte), colle ton code juste après, et demande au modèle d'appliquer la direction. Il va générer un jeu de tokens JSON en respectant les contraintes du fichier, puis styliser ton code avec.

## Pourquoi ça reste "unique à toi"

Le fichier ne donne pas une couleur ou une police fixe — il donne une liste de candidats et des plages de valeurs. Le modèle choisit et compose à l'intérieur de ces règles à chaque conversation, avec une grille de variation aléatoire intégrée au prompt. Deux personnes qui collent le même fichier obtiennent des résultats cohérents avec la direction, mais rarement identiques.

## Astuce

Garde le résultat JSON que le modèle te donne (la partie `{"primary": ...}`) — tu peux le recoller plus tard dans une nouvelle conversation pour rester cohérent sur plusieurs pages, au lieu de laisser le modèle regénérer à chaque fois.
