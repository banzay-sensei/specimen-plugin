/**
 * Specimen — generic-AI-design pattern scanner.
 * Deterministic, dependency-free heuristics. No LLM call needed for this part.
 */

export const PATTERNS = [
  {
    id: 'gradient',
    label: 'Dégradé violet → bleu',
    explain: "Le combo indigo/violet/bleu en linear-gradient est la signature la plus reconnaissable des heros générés par IA.",
    weight: 18,
    test: c => /linear-gradient/i.test(c) && /(6366f1|8b5cf6|a855f7|7c3aed|4f46e5|3b82f6|2563eb|from-(indigo|purple|violet)|to-(indigo|purple|violet|blue))/i.test(c)
  },
  {
    id: 'glass',
    label: 'Glassmorphism',
    explain: "backdrop-filter: blur() sur fond semi-transparent — devenu un réflexe par défaut plutôt qu'un choix.",
    weight: 12,
    test: c => /backdrop-filter\s*:\s*blur|backdrop-blur/i.test(c)
  },
  {
    id: 'font',
    label: 'Police système par défaut',
    explain: "Inter / Poppins / system-ui sans personnalisation — le choix typographique le plus sûr et le moins mémorable.",
    weight: 10,
    test: c => /font-family\s*:\s*['"]?(Inter|Poppins)|font-sans\b/i.test(c)
  },
  {
    id: 'radius',
    label: 'Coins arrondis uniformes',
    explain: "border-radius répété à l'identique sur tous les éléments (souvent 8–16px) — pas de hiérarchie visuelle intentionnelle.",
    weight: 10,
    test: c => (c.match(/border-radius\s*:\s*(8|10|12|16)px/gi) || []).length >= 3 || (c.match(/rounded-(lg|xl|2xl)/gi) || []).length >= 3
  },
  {
    id: 'shadow',
    label: 'Ombre douce diffuse',
    explain: "box-shadow avec faible opacité et flou important, appliqué partout de façon identique.",
    weight: 8,
    test: c => (c.match(/rgba\(0,\s*0,\s*0,\s*0\.(0[5-9]|1[0-5])\)/gi) || []).length >= 2 || (c.match(/shadow-(md|lg|xl)/gi) || []).length >= 3
  },
  {
    id: 'emoji',
    label: 'Emoji utilisés comme icônes',
    explain: "Emoji à la place de vraies icônes SVG — rapide à écrire, mais visuellement interchangeable d'un site à l'autre.",
    weight: 8,
    test: c => (c.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu) || []).length >= 3
  },
  {
    id: 'structure',
    label: 'Structure hero + 3 cartes + témoignages',
    explain: "Le squelette narratif le plus commun généré par IA : titre + sous-titre + CTA, puis grille de 3 fonctionnalités, puis témoignages.",
    weight: 14,
    test: c => /hero/i.test(c) && /(feature|fonctionnalit)/i.test(c) && /(testimonial|témoignage|avis)/i.test(c)
  },
  {
    id: 'accent',
    label: 'Accent indigo/violet Tailwind par défaut',
    explain: "indigo-600 / violet-600 / purple-600 — les teintes d'accent les plus utilisées par défaut dans les générations IA.",
    weight: 10,
    test: c => /#(4f46e5|7c3aed|9333ea)\b|(indigo|violet|purple)-600/i.test(c)
  },
  {
    id: 'centered',
    label: 'Tout centré, espacement générique',
    explain: "text-align:center appliqué en masse avec un padding vertical généreux et répétitif (py-20/py-24).",
    weight: 6,
    test: c => (c.match(/text-align\s*:\s*center/gi) || []).length >= 3 || (c.match(/py-(20|24)\b/gi) || []).length >= 3
  },
  {
    id: 'hover',
    label: 'Micro-interaction hover par défaut',
    explain: "hover:scale-105 combiné à une transition — l'animation de survol la plus reproduite, sans intention propre au projet.",
    weight: 4,
    test: c => /hover:scale-105/i.test(c) || (/transition/i.test(c) && /transform/i.test(c) && /:hover/i.test(c))
  }
];

export function scan(code) {
  const hits = PATTERNS.filter(p => {
    try { return p.test(code); } catch (e) { return false; }
  });
  const rawScore = hits.reduce((s, p) => s + p.weight, 0);
  const score = Math.min(100, rawScore);
  let verdict;
  if (score >= 66) verdict = 'Fortement générique';
  else if (score >= 33) verdict = 'Partiellement standard';
  else verdict = 'Déjà assez distinct';
  return {
    score,
    verdict,
    hits: hits.map(h => ({ id: h.id, label: h.label, explain: h.explain, weight: h.weight }))
  };
}
