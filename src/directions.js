/**
 * Specimen — curated aesthetic directions.
 * Single source of truth for constraint sets, shared by the MCP server,
 * the CLI, and the static chat-mode prompt files.
 */

export const DIRECTIONS = {
  brutalist: {
    key: 'brutalist',
    name: 'Signal Brutaliste',
    tag: 'Raw · haute-contraste · sans excuse',
    desc: "Bordures épaisses, ombres dures décalées, aucune subtilité. Pour les produits qui veulent qu'on les remarque.",
    constraints: {
      primary: ['#FF3D00', '#0047FF', '#111111', '#D7263D'],
      secondary: ['#FFD500', '#00C2FF', '#111111', '#F2F2F0'],
      background: ['#F2F2F0', '#FFFFFF', '#ECECE4'],
      surface: ['#FFFFFF', '#EDEDE6'],
      text: ['#0A0A0A'],
      accent: ['#FFD500', '#00C2FF', '#FF3D00'],
      fontDisplay: ['Archivo Black', 'Space Grotesk'],
      fontBody: ['Space Grotesk'],
      fontMono: ['IBM Plex Mono'],
      radiusRange: [0, 2],
      spacingRange: [4, 8],
      borderWidthRange: [2, 4],
      shadowStyle: 'hard-offset, no blur, e.g. 4px 4px 0 #111111'
    }
  },
  heisei: {
    key: 'heisei',
    name: 'Terminal Heisei',
    tag: 'Rétro-tech japonais · CRT · pager',
    desc: "Vert phosphore et magenta néon sur fond quasi noir. L'esthétique console des années 90 japonaises.",
    constraints: {
      primary: ['#00FF9C', '#FF2D95', '#39FF14'],
      secondary: ['#7A6FF0', '#00E0FF'],
      background: ['#0D0D12', '#111018', '#0A0A10'],
      surface: ['#191822', '#15141C'],
      text: ['#E8E8F0'],
      accent: ['#FF2D95', '#00FF9C'],
      fontDisplay: ['IBM Plex Mono'],
      fontBody: ['Space Grotesk'],
      fontMono: ['IBM Plex Mono'],
      radiusRange: [0, 4],
      spacingRange: [4, 8],
      borderWidthRange: [1, 2],
      shadowStyle: 'colored neon glow, e.g. 0 0 16px rgba(0,255,156,0.35)'
    }
  },
  scandi: {
    key: 'scandi',
    name: 'Quiétude Scandinave',
    tag: 'Minimalisme · matières naturelles',
    desc: "Palette sourde, espace généreux, quasi pas d'ombre. La retenue comme signature.",
    constraints: {
      primary: ['#2B2B2B', '#4A5A4A'],
      secondary: ['#8A9B8E', '#B5A48A'],
      background: ['#F7F5F1', '#FAFAF7', '#F1EFE9'],
      surface: ['#EFEDE7', '#FFFFFF'],
      text: ['#232323'],
      accent: ['#8A9B8E', '#B5A48A'],
      fontDisplay: ['Space Grotesk'],
      fontBody: ['Space Grotesk'],
      fontMono: ['IBM Plex Mono'],
      radiusRange: [2, 6],
      spacingRange: [8, 16],
      borderWidthRange: [1, 1],
      shadowStyle: 'none, or a single 1px hairline border instead of shadow'
    }
  },
  y2k: {
    key: 'y2k',
    name: 'Chrome Y2K',
    tag: 'Maximalisme · holographique · futurisme rétro',
    desc: "Argent chromé et accents holographiques sur fond quasi noir. Le futurisme optimiste des années 2000, en plus poussé.",
    constraints: {
      primary: ['#C7C9D9', '#8A8FA3'],
      secondary: ['#00E5FF', '#FF00E5', '#FFEA00'],
      background: ['#0B0B14', '#050507'],
      surface: ['#15151F', '#101019'],
      text: ['#F5F5FF'],
      accent: ['#00E5FF', '#FF00E5'],
      fontDisplay: ['Space Grotesk'],
      fontBody: ['Space Grotesk'],
      fontMono: ['IBM Plex Mono'],
      radiusRange: [8, 20],
      spacingRange: [4, 12],
      borderWidthRange: [1, 2],
      shadowStyle: 'glossy holographic gradient border or soft colored glow'
    }
  }
};

export function listDirections() {
  return Object.values(DIRECTIONS).map(d => ({
    key: d.key, name: d.name, tag: d.tag, desc: d.desc
  }));
}

export function getDirection(key) {
  return DIRECTIONS[key] || null;
}
