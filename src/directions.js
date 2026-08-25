/**
 * Specimen — curated aesthetic directions.
 * Single source of truth for constraint sets, shared by the MCP server,
 * the CLI, and the static chat-mode prompt files.
 *
 * Each direction now carries THREE layers of constraint, not just colors:
 *  - constraints        → candidate values (color roles, fonts, radius/spacing/border ranges)
 *  - colorHarmony        → HOW the candidate colors should be combined (distribution, restraint)
 *  - layout               → HOW elements should be composed spatially (grid, whitespace, hierarchy)
 *
 * Picking valid colors in isolation isn't enough for a result to read as
 * elegant — composition discipline matters as much as the palette itself.
 * These two extra layers are what was missing before: a model could pick
 * "correct" candidate colors and still produce a cluttered or clashing
 * result because nothing constrained the relationship between elements.
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
    },
    colorHarmony:
      "Répartition 70/20/10 : le fond neutre (background) domine très largement l'écran. UNE seule couleur vive (primary OU accent, jamais les deux en pleine surface) porte l'attention à la fois — l'autre couleur candidate reste réservée à de petits détails (bordure, tag, icône). Ne jamais faire cohabiter deux couleurs saturées de même intensité sur une même zone : l'une doit toujours dominer visuellement l'autre.",
    layout: {
      grid: "Grille stricte et visible, colonnes égales, gouttières nettes — la grille elle-même est un élément graphique, pas juste un outil d'alignement caché.",
      whitespace: "Espacement serré et régulier (base 4-8px), peu de marge de respiration — la densité fait partie du style.",
      hierarchy: "Hiérarchie par la taille et l'épaisseur de bordure plutôt que par la couleur : un seul élément à la fois peut être 'le plus gros', jamais deux en concurrence.",
      alignment: "Alignement strict sur la grille, jamais de décalage optique 'doux' — les angles et les arêtes doivent tomber pile sur les lignes de grille.",
      responsive: {
        desktop: "Grille multi-colonnes dense avec sidebar de navigation épaisse, bordée d'un trait plein — pas de sidebar flottante ou translucide.",
        mobile: "Bottom bar à icônes larges et cadrées, cartes empilées avec bordures pleines conservées (jamais 'adoucies' pour le mobile)."
      },
      components: {
        nav: "Liens ou icônes avec état actif marqué par un bloc de couleur plein, pas par un simple soulignement.",
        cards: "Bordure épaisse systématique, jamais de carte 'flottante' sans contour visible.",
        icons: "Icônes géométriques simples, traits épais, jamais de style filaire fin ou décoratif."
      }
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
    },
    colorHarmony:
      "Répartition 85/10/5 : le fond quasi noir occupe l'écrasante majorité de l'écran. UNE seule couleur néon (primary) sert de signal principal ; la seconde teinte candidate (secondary/accent) n'apparaît qu'en accent ponctuel (curseur, statut, petit tag) — jamais en grande surface, sinon l'effet 'terminal' devient un sapin de Noël. Le contraste vient de l'obscurité du fond, pas de l'accumulation de couleurs vives.",
    layout: {
      grid: "Grille monospace implicite — tout s'aligne comme sur une grille de caractères, colonnes régulières façon terminal.",
      whitespace: "Espacement compact et technique, comme une sortie de commande — pas de grand vide décoratif.",
      hierarchy: "Hiérarchie par la luminosité et l'intensité du glow, pas par la taille : l'élément actif/important brille plus, le reste reste sobre et légèrement atténué.",
      alignment: "Alignement gauche systématique façon flux de log, ponctué de séparateurs fins plutôt que de blocs isolés.",
      responsive: {
        desktop: "TopNav fine façon barre de statut système, contenu principal en flux vertical unique plutôt qu'en grille large.",
        mobile: "Menu tiroir (hamburger) façon console, jamais de bottom bar arrondie — préférer une barre fine et rectangulaire."
      },
      components: {
        nav: "État actif signalé par le glow et un curseur/marqueur façon terminal (>, _), pas par un fond coloré plein.",
        cards: "Conteneurs à bordure fine unique, fond légèrement plus clair que le fond général — jamais d'ombre diffuse.",
        icons: "Pictogrammes minimalistes façon glyphes monospace, ou icônes vectorielles très fines."
      }
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
    },
    colorHarmony:
      "Répartition 80/15/5 : palette quasi monochrome sur fond neutre clair. La couleur d'accent (secondary) n'est jamais 'vive' au sens saturé — elle reste sourde, presque terreuse, et n'apparaît que sur de très petites surfaces (un trait, une icône, un état actif). Si une couleur semble 'ressortir' à l'œil en un coup d'œil rapide, elle est trop saturée pour cette direction — désature-la.",
    layout: {
      grid: "Grille asymétrique et respirante, colonnes de largeurs inégales assumées plutôt qu'une symétrie parfaite.",
      whitespace: "Marge et espacement généreux (base 8-16px, souvent le double de l'intuition) — le vide est un matériau de composition à part entière, pas un reste.",
      hierarchy: "Hiérarchie portée presque uniquement par la taille de police et l'espacement — jamais par la couleur ni par des cadres appuyés.",
      alignment: "Alignement sur une seule colonne dominante à la fois, décalages doux assumés plutôt qu'une grille rigide.",
      responsive: {
        desktop: "Sidebar fine et discrète (icônes + labels espacés), large zone de respiration autour du contenu principal.",
        mobile: "Cartes empilées avec marge extérieure généreuse, bottom bar minimale à 3-4 icônes maximum, jamais surchargée."
      },
      components: {
        nav: "État actif signalé par un trait fin ou un changement de poids typographique, jamais par un fond plein saturé.",
        cards: "Fond à peine différencié du fond général (nuance de gris/beige très proche), bordure quasi invisible ou absente.",
        icons: "Icônes fines au trait, style linéaire léger — jamais pleines ni épaisses."
      }
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
    },
    colorHarmony:
      "Répartition 75/20/5 : même dans un style maximaliste, une seule teinte holographique domine à un instant donné (jamais cyan ET magenta en pleine intensité sur le même écran) — l'alternance entre teintes accent se fait d'un composant à l'autre, pas en simultané sur la même surface. Le chromé (primary) sert de neutre 'brillant', pas de couleur d'accent supplémentaire.",
    layout: {
      grid: "Grille avec chevauchements assumés et profondeur (éléments qui se superposent légèrement) plutôt qu'une grille plate.",
      whitespace: "Espacement resserré autour des éléments graphiques marquants, mais avec des respirations franches entre les grands blocs.",
      hierarchy: "Hiérarchie par la brillance et la profondeur (ombres/lueurs) plutôt que par la seule taille — un halo signale l'importance.",
      alignment: "Alignement sur grille avec légers décalages en profondeur (z-index), jamais un aplat totalement plat.",
      responsive: {
        desktop: "Sidebar chromée avec effets de profondeur (légère ombre/glow sur l'élément actif), grille avec superpositions décoratives.",
        mobile: "Bottom bar avec effet chromé/glossy, icône active surélevée visuellement (légère ombre ou halo)."
      },
      components: {
        nav: "État actif marqué par un halo coloré ou un effet de surélévation (ombre portée colorée), pas juste un changement de teinte plate.",
        cards: "Bordure en dégradé holographique fine ou reflet chromé subtil sur un des bords.",
        icons: "Icônes à finition chromée ou légèrement dégradée, jamais plates ni monochromes basiques."
      }
    }
  },
  editorial: {
    key: 'editorial',
    name: 'Éditorial Précis',
    tag: 'Élégance retenue · typographie soignée · neutre raffiné',
    desc: "Palette presque monochrome, un seul accent choisi avec soin, typographie comme véritable ornement. Pour les produits qui veulent avoir l'air posés, jamais criards.",
    constraints: {
      primary: ['#1C1B19', '#24231F'],
      secondary: ['#6B6459', '#8C8478'],
      background: ['#FBFAF7', '#F5F3EE'],
      surface: ['#FFFFFF', '#F0EEE8'],
      text: ['#1C1B19'],
      accent: ['#8C3B2E', '#3B5249', '#2E4A6B'],
      fontDisplay: ['Space Grotesk'],
      fontBody: ['Space Grotesk'],
      fontMono: ['IBM Plex Mono'],
      radiusRange: [1, 4],
      spacingRange: [10, 20],
      borderWidthRange: [1, 1],
      shadowStyle: 'none, or a single very soft 1px hairline border — never a diffuse drop shadow'
    },
    colorHarmony:
      "Répartition 85/10/5 stricte : quasiment monochrome encre-sur-crème. UNE seule couleur d'accent (choisie parmi les candidats, jamais plusieurs) apparaît, et seulement sur des surfaces minuscules et rares (un mot-clé, une puce, un lien) — jamais en fond de bouton plein ni en grande surface. Si l'interface a l'air 'colorée' au premier coup d'œil, il y a trop d'accent : réduis-le à un seul point d'usage par écran.",
    layout: {
      grid: "Grille éditoriale classique façon mise en page de magazine — colonnes de texte larges, marges extérieures généreuses et constantes.",
      whitespace: "Espacement le plus généreux des cinq directions (base 10-20px) — le silence visuel est la signature principale de cette direction.",
      hierarchy: "Hiérarchie quasi exclusivement typographique : variations d'échelle et de graisse plutôt que de couleur, de cadre ou d'ombre.",
      alignment: "Alignement sobre et constant (une seule marge de référence sur toute la page), jamais de centrage systématique ni de superposition.",
      responsive: {
        desktop: "Colonne de contenu large et centrée façon article, navigation réduite à un fil discret en haut de page.",
        mobile: "Une seule colonne stricte, aucune barre de navigation flottante — un menu texte simple en haut suffit."
      },
      components: {
        nav: "Liens texte simples, état actif signalé par un changement de graisse ou un très fin trait sous le mot — jamais de bouton plein.",
        cards: "Séparation par un filet fin ou un espace généreux plutôt qu'un encadré — la 'carte' au sens visuel classique est à éviter.",
        icons: "Usage minimal des icônes, préférer le mot écrit ; si une icône est nécessaire, trait très fin et discret."
      }
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
