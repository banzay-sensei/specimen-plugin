import { getDirection } from './directions.js';

const SEED_WORDS = ['orbite', 'friche', 'estuaire', 'lisière', 'tramway', 'granit', 'méridien', 'soufre', 'falaise', 'lueur', 'poutre', 'marée', 'silex', 'clairière', 'antenne'];

function randomSeed() {
  const w = SEED_WORDS[Math.floor(Math.random() * SEED_WORDS.length)];
  return `${w}-${Math.floor(Math.random() * 9999)}`;
}

/**
 * Builds the constrained-generation brief for a direction. This is the
 * exact same rule set used by the web MVP's Anthropic API call — but here
 * it is returned as data/text so ANY calling model (Cursor's agent,
 * Claude Code, Codex, or a person pasting into chat) can do the generation
 * itself, without Specimen needing to hold an API key.
 */
export function buildBrief(directionKey) {
  const dir = getDirection(directionKey);
  if (!dir) throw new Error(`Unknown direction: ${directionKey}`);
  const c = dir.constraints;
  const seed = randomSeed();

  return `Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "${dir.name}" (${dir.tag}).
${dir.desc}

Choisis des valeurs STRICTEMENT à l'intérieur des contraintes suivantes. Ne sors JAMAIS de ces listes ou plages, même si une autre valeur te semblerait "plus jolie".

primary_candidates: ${JSON.stringify(c.primary)}
secondary_candidates: ${JSON.stringify(c.secondary)}
background_candidates: ${JSON.stringify(c.background)}
surface_candidates: ${JSON.stringify(c.surface)}
text_candidates: ${JSON.stringify(c.text)}
accent_candidates: ${JSON.stringify(c.accent)}
font_display_candidates: ${JSON.stringify(c.fontDisplay)}
font_body_candidates: ${JSON.stringify(c.fontBody)}
font_mono_candidates: ${JSON.stringify(c.fontMono)}
radius_range_px: ${JSON.stringify(c.radiusRange)}
spacing_base_range_px: ${JSON.stringify(c.spacingRange)}
border_width_range_px: ${JSON.stringify(c.borderWidthRange)}
shadow_style_guidance: "${c.shadowStyle}"

Choisis UNE valeur par rôle de couleur (parmi les candidats donnés), une police par rôle (parmi les candidats donnés), UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "${seed}"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique ces tokens à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled). Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.`;
}
