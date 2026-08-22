import { getDirection } from './directions.js';

export function buildCss(t) {
  return `:root {
  --color-primary: ${t.primary};
  --color-secondary: ${t.secondary};
  --color-accent: ${t.accent};
  --color-background: ${t.background};
  --color-surface: ${t.surface};
  --color-text: ${t.text};
  --color-on-primary: ${t.onPrimary || '#ffffff'};
  --color-on-accent: ${t.onAccent || '#111111'};

  --font-display: '${t.fontDisplay}', sans-serif;
  --font-body: '${t.fontBody}', sans-serif;
  --font-mono: '${t.fontMono}', monospace;

  --radius: ${Number(t.radiusPx).toFixed(1)}px;
  --spacing-base: ${Number(t.spacingBasePx).toFixed(1)}px;
  --border-width: ${t.borderWidthPx}px;
  --shadow: ${t.boxShadow};
}`;
}

export function buildTailwind(t) {
  return `// tailwind.config.js (extrait)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${t.primary}',
        secondary: '${t.secondary}',
        accent: '${t.accent}',
        background: '${t.background}',
        surface: '${t.surface}',
        ink: '${t.text}',
      },
      fontFamily: {
        display: ['${t.fontDisplay}', 'sans-serif'],
        body: ['${t.fontBody}', 'sans-serif'],
        mono: ['${t.fontMono}', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '${Number(t.radiusPx).toFixed(1)}px',
      },
      spacing: {
        base: '${Number(t.spacingBasePx).toFixed(1)}px',
      },
      boxShadow: {
        signature: '${t.boxShadow}',
      },
    },
  },
};`;
}

export function buildSkill(t, directionKey) {
  const dir = getDirection(directionKey);
  const dirName = dir ? dir.name : directionKey;
  const dirDesc = dir ? dir.desc : '';
  return `# ${dirName} — Design Skill (généré par Specimen)

## Direction
${dirDesc}

## Design tokens

| Rôle | Valeur |
|---|---|
| Primaire | ${t.primary} |
| Secondaire | ${t.secondary} |
| Accent | ${t.accent} |
| Fond | ${t.background} |
| Surface | ${t.surface} |
| Texte | ${t.text} |

## Typographie
- Titre / display: ${t.fontDisplay}
- Corps de texte: ${t.fontBody}
- Monospace / data: ${t.fontMono}

## Règles structurelles
- Rayon des angles: ${Number(t.radiusPx).toFixed(1)}px (fixe — ne pas varier d'un composant à l'autre)
- Base d'espacement: ${Number(t.spacingBasePx).toFixed(1)}px (multiples de cette valeur uniquement)
- Épaisseur de bordure: ${t.borderWidthPx}px
- Ombre signature: ${t.boxShadow}

## Instructions pour l'agent IA
Applique ces tokens à TOUS les composants générés (boutons, cartes, inputs, navigation, modales).
Ne remplace jamais ces valeurs par des équivalents "safe" (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse par défaut).
Respecte le contraste WCAG AA entre le texte et les fonds.
`;
}

export function buildExport(tokens, directionKey, format) {
  if (format === 'css') return buildCss(tokens);
  if (format === 'tailwind') return buildTailwind(tokens);
  if (format === 'skill') return buildSkill(tokens, directionKey);
  throw new Error(`Unknown export format: ${format}`);
}
