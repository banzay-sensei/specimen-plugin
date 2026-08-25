import { DIRECTIONS, listDirections } from './directions.js';

/**
 * Maps a described niche/sector to a recommended direction — WITHOUT
 * reproducing the generic sector-color conventions that create AI sameness
 * in the first place (green for wellness/food, blue/indigo for
 * fintech/SaaS, black/gold for luxury, etc).
 *
 * Each entry keeps a `convention` note (what everyone else does) separate
 * from the `recommended` direction (what Specimen suggests instead, and
 * why). The goal is differentiation with intent, not randomness — a niche
 * can still justify a convention-aligned pick when trust/familiarity truly
 * outweighs distinctiveness, and that trade-off is stated explicitly
 * rather than silently defaulting to the expected palette.
 */
const NICHE_RULES = [
  {
    keywords: ['fintech', 'finance', 'banque', 'bancaire', 'paiement', 'trading', 'crypto', 'assurance', 'saas b2b', 'saas'],
    convention: 'Bleu/indigo, glassmorphism, aspect "sérieux et rassurant" — c\'est devenu tellement systématique que ça ne rassure plus personne, ça se fond juste dans la masse.',
    recommended: 'editorial',
    rationale: "Éditorial Précis inspire la rigueur et la confiance par la sobriété typographique plutôt que par le bleu conventionnel — ça se démarque tout en restant crédible pour un contexte financier.",
    alternative: 'scandi',
    alternativeRationale: "Si le produit vise un public plus grand public que B2B pur, Quiétude Scandinave garde le sérieux tout en étant plus chaleureuse."
  },
  {
    keywords: ['santé', 'bien-être', 'wellness', 'méditation', 'yoga', 'nutrition', 'cuisine saine', 'fitness', 'sport'],
    convention: 'Vert/terre, formes organiques, photos de nature — un réflexe tellement automatique que le secteur entier se ressemble.',
    recommended: 'editorial',
    rationale: "Éditorial Précis évoque le calme et le soin sans passer par le vert attendu — la retenue chromatique communique la sérénité autrement.",
    alternative: 'scandi',
    alternativeRationale: "Quiétude Scandinave reste l'option la plus proche du 'naturel' attendu si s'en éloigner totalement semble trop risqué pour la marque."
  },
  {
    keywords: ['luxe', 'luxury', 'haute couture', 'joaillerie', 'horlogerie', 'premium'],
    convention: 'Noir/or, serif élégant — un code si répandu qu\'il a cessé de signaler quoi que ce soit de distinctif.',
    recommended: 'editorial',
    rationale: "Éditorial Précis obtient le même effet 'posé et cher' par la typographie et l'espace plutôt que par l'association noir/or automatique.",
    alternative: 'brutalist',
    alternativeRationale: "Pour une marque de luxe qui veut au contraire choquer/marquer (mode avant-gardiste, joaillerie disruptive), Signal Brutaliste est un pari plus audacieux mais cohérent avec ce positionnement."
  },
  {
    keywords: ['gaming', 'jeu vidéo', 'esport', 'streaming', 'divertissement', 'entertainment'],
    convention: 'Dégradés violets/roses saturés, glassmorphism agressif — le style "gaming générique" est presque une caricature de lui-même désormais.',
    recommended: 'heisei',
    rationale: "Terminal Heisei donne une identité rétro-tech affirmée et immédiatement reconnaissable, sans tomber dans le violet-sur-noir devenu un cliché du secteur.",
    alternative: 'y2k',
    alternativeRationale: "Chrome Y2K convient si le produit veut un maximalisme assumé plutôt que l'ambiance terminal plus sobre de Heisei."
  },
  {
    keywords: ['dev tool', 'développeur', 'developer', 'api', 'cli', 'infrastructure', 'devops', 'open source'],
    convention: 'Fond noir, accent vert terminal, police monospace — cohérent avec la cible mais tellement uniforme d\'un outil dev à l\'autre que plus rien ne se distingue.',
    recommended: 'brutalist',
    rationale: "Signal Brutaliste parle à la même sensibilité technique et directe, mais sur un fond clair à haute lisibilité — rare dans ce secteur, donc immédiatement reconnaissable.",
    alternative: 'heisei',
    alternativeRationale: "Si l'identité 'terminal sombre' est un vrai choix de marque assumé (pas un réflexe), Terminal Heisei l'exécute avec plus de personnalité que le noir/vert par défaut."
  },
  {
    keywords: ['mode', 'fashion', 'e-commerce', 'boutique', 'retail'],
    convention: 'Minimalisme blanc/noir avec grandes photos produit — fonctionne, mais rend les boutiques interchangeables entre elles.',
    recommended: 'editorial',
    rationale: "Éditorial Précis garde la mise en avant du produit (grandes marges, typographie soignée) tout en ayant une teinte de fond légèrement chaude qui évite le blanc clinique générique.",
    alternative: 'y2k',
    alternativeRationale: "Pour une marque mode plus jeune/streetwear, Chrome Y2K capte une esthétique actuelle sans le minimalisme attendu du secteur premium."
  }
];

const DEFAULT_RATIONALE = "Aucune convention sectorielle forte identifiée pour cette niche — choix ouvert. Signal Brutaliste et Éditorial Précis sont les deux extrêmes du spectre (impact brut vs retenue élégante) ; pars de l'un des deux selon si le produit doit d'abord surprendre ou d'abord rassurer.";

export function recommendDirection(nicheText) {
  const text = (nicheText || '').toLowerCase();
  const match = NICHE_RULES.find(rule => rule.keywords.some(kw => text.includes(kw)));

  if (!match) {
    return {
      niche: nicheText,
      matched: false,
      recommended: null,
      rationale: DEFAULT_RATIONALE,
      availableDirections: listDirections()
    };
  }

  return {
    niche: nicheText,
    matched: true,
    convention: match.convention,
    recommended: {
      key: match.recommended,
      name: DIRECTIONS[match.recommended].name,
      rationale: match.rationale
    },
    alternative: {
      key: match.alternative,
      name: DIRECTIONS[match.alternative].name,
      rationale: match.alternativeRationale
    },
    note: "Ces recommandations partent du principe qu'une marque qui ressemble à tout son secteur ne se différencie plus. Si la familiarité immédiate est un objectif prioritaire assumé (pas un réflexe par défaut), suivre la convention reste un choix valide — mais un choix, pas un pilote automatique."
  };
}
