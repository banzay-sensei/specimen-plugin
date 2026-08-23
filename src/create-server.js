import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from '@modelcontextprotocol/sdk/types.js';

import { scan } from './scanner.js';
import { listDirections, getDirection } from './directions.js';
import { buildBrief } from './brief.js';
import { buildExport } from './export.js';

export const TOOLS = [
  {
    name: 'specimen_scan_code',
    description:
      "Analyse un extrait de code (CSS, Tailwind, JSX, HTML) et détecte les patterns visuels génériques d'IA (dégradés violet/bleu, glassmorphism, police Inter/Poppins par défaut, structure hero+3cards+témoignages, etc). Retourne un score de généricité sur 100 et la liste des signaux détectés. Utilise cet outil avant de styliser une interface, ou quand l'utilisateur demande un audit de son design.",
    inputSchema: {
      type: 'object',
      properties: {
        code: { type: 'string', description: 'Extrait de code à analyser (CSS, Tailwind, JSX, HTML...)' }
      },
      required: ['code']
    }
  },
  {
    name: 'specimen_list_directions',
    description:
      "Liste les directions artistiques curées disponibles (ex: brutalisme, rétro-tech japonais, minimalisme scandinave, maximalisme Y2K), chacune avec son nom, sa description et sa clé technique. Utilise cet outil pour proposer des choix de direction à l'utilisateur.",
    inputSchema: { type: 'object', properties: {} }
  },
  {
    name: 'specimen_prescribe_direction',
    description:
      "Retourne les règles strictes (palette candidate, polices, plages de rayon/espacement/bordure, style d'ombre) d'une direction artistique choisie, sous forme d'instructions. IMPORTANT: cet outil ne génère PAS les tokens lui-même — c'est TON rôle en tant qu'agent, immédiatement après avoir reçu ces instructions, de produire toi-même un objet JSON de tokens en respectant STRICTEMENT ces contraintes, puis de l'appliquer aux composants que tu génères pour l'utilisateur. Ne sors jamais des valeurs candidates fournies.",
    inputSchema: {
      type: 'object',
      properties: {
        directionKey: {
          type: 'string',
          description: 'Clé de la direction (voir specimen_list_directions): brutalist | heisei | scandi | y2k | editorial'
        }
      },
      required: ['directionKey']
    }
  },
  {
    name: 'specimen_build_export',
    description:
      "Formate un jeu de tokens déjà généré (par toi, l'agent, en suivant specimen_prescribe_direction) en fichier prêt à écrire dans le projet : variables CSS, extrait de config Tailwind, ou fichier SKILL.md. Appelle cet outil une fois que tu as produit et validé un jeu de tokens JSON.",
    inputSchema: {
      type: 'object',
      properties: {
        tokens: {
          type: 'object',
          description: 'Objet de tokens généré selon le schéma fourni par specimen_prescribe_direction'
        },
        directionKey: { type: 'string', description: 'Clé de la direction utilisée' },
        format: { type: 'string', enum: ['css', 'tailwind', 'skill'], description: 'Format de sortie souhaité' }
      },
      required: ['tokens', 'directionKey', 'format']
    }
  }
];

/**
 * Builds a fresh, fully-configured MCP Server instance.
 * Called once per stdio process (local), or once per request when served
 * statelessly over HTTP (remote connector for Claude.ai, ChatGPT, etc).
 */
export function createSpecimenServer() {
  const server = new Server(
    { name: 'specimen', version: '0.1.0' },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
      if (name === 'specimen_scan_code') {
        const { code } = args;
        if (typeof code !== 'string' || !code.trim()) {
          throw new Error('Le paramètre "code" est requis et doit être une chaîne non vide.');
        }
        const result = scan(code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
      }

      if (name === 'specimen_list_directions') {
        const dirs = listDirections();
        return { content: [{ type: 'text', text: JSON.stringify(dirs, null, 2) }] };
      }

      if (name === 'specimen_prescribe_direction') {
        const { directionKey } = args;
        const dir = getDirection(directionKey);
        if (!dir) {
          const available = listDirections().map(d => d.key).join(', ');
          throw new Error(`Direction inconnue: "${directionKey}". Directions disponibles: ${available}`);
        }
        const brief = buildBrief(directionKey);
        return { content: [{ type: 'text', text: brief }] };
      }

      if (name === 'specimen_build_export') {
        const { tokens, directionKey, format } = args;
        if (!tokens || typeof tokens !== 'object') {
          throw new Error('Le paramètre "tokens" est requis et doit être un objet.');
        }
        const text = buildExport(tokens, directionKey, format);
        return { content: [{ type: 'text', text }] };
      }

      throw new Error(`Outil inconnu: ${name}`);
    } catch (err) {
      return {
        content: [{ type: 'text', text: `Erreur Specimen: ${err.message}` }],
        isError: true
      };
    }
  });

  return server;
}
