import { getDirection } from './directions.js';

const SEED_WORDS = ['orbite', 'friche', 'estuaire', 'lisière', 'tramway', 'granit', 'méridien', 'soufre', 'falaise', 'lueur', 'poutre', 'marée', 'silex', 'clairière', 'antenne'];

function randomSeed() {
  const w = SEED_WORDS[Math.floor(Math.random() * SEED_WORDS.length)];
  return `${w}-${Math.floor(Math.random() * 9999)}`;
}

/**
 * Builds the constrained-generation brief for a direction. Returned as
 * text/data so ANY calling model (Cursor's agent, Claude Code, Codex, or a
 * person pasting into chat) can do the generation itself.
 *
 * Three layers are always included, in order:
 *  1. Candidate values (WHAT to pick from) — colors, fonts, numeric ranges
 *  2. Color harmony (HOW MUCH of each — distribution discipline)
 *  3. Layout principles (HOW elements should be arranged spatially)
 * Layers 2 and 3 exist specifically because a result can use only
 * "correct" candidate colors and still look cluttered or clumsy — the
 * relationship between elements matters as much as each element on its own.
 */
export function buildBrief(directionKey) {
  const dir = getDirection(directionKey);
  if (!dir) throw new Error(`Unknown direction: ${directionKey}`);
  const c = dir.constraints;
  const seed = randomSeed();

  return `Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "${dir.name}" (${dir.tag}).
${dir.desc}

=== 1. VALEURS CANDIDATES (choisis STRICTEMENT dedans, jamais en dehors) ===

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

=== 2. HARMONIE DES COULEURS (règle de distribution, pas seulement de choix) ===

${dir.colorHarmony}

Cette règle prime sur l'envie de "faire ressortir" plusieurs couleurs à la fois. Une palette qui respecte les bonnes valeurs candidates mais ignore cette répartition produira un résultat criard, pas élégant.

=== 3. PRINCIPES DE MISE EN PAGE (à appliquer à TOUS les composants que tu génères ensuite) ===

- Grille : ${dir.layout.grid}
- Espacement : ${dir.layout.whitespace}
- Hiérarchie visuelle : ${dir.layout.hierarchy}
- Alignement : ${dir.layout.alignment}

Ces principes s'appliquent à la disposition réelle des éléments (boutons, cartes, sections, formulaires) — pas seulement aux valeurs de tokens. Un token correct mal disposé (mauvais espacement, hiérarchie plate, alignement au hasard) donne toujours un résultat qui a l'air générique ou bricolé, même avec la bonne palette.

=== 4. DÉCLINAISON RESPONSIVE ===

- Desktop : ${dir.layout.responsive.desktop}
- Mobile : ${dir.layout.responsive.mobile}

=== 5. COMPOSANTS CLÉS ===

- Navigation : ${dir.layout.components.nav}
- Cartes : ${dir.layout.components.cards}
- Icônes : ${dir.layout.components.icons}

=== Génère maintenant ===

Choisis UNE valeur par rôle de couleur (en respectant la répartition décrite en section 2), une police par rôle, UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "${seed}"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique-le à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled), en respectant à la fois la répartition de couleurs (section 2), les principes de mise en page (section 3), la déclinaison responsive (section 4) et le traitement des composants clés (section 5) — pas seulement les valeurs de tokens prises isolément. Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.`;
}
