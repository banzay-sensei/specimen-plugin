# Specimen — Diagnostic (mode chat)

Colle ce bloc au début d'une conversation avec ton assistant IA, puis colle ton code (CSS, Tailwind, JSX, HTML) juste après.

---

Tu es un auditeur de design. Analyse le code que je vais coller juste après ce message et cherche STRICTEMENT les 10 signaux suivants. Pour chacun, dis s'il est présent (oui/non) et cite le fragment de code qui le déclenche s'il l'est.

1. **Dégradé violet → bleu** (poids 18) — linear-gradient combiné à des teintes indigo/violet/bleu (ex: #6366f1, #8b5cf6, #a855f7, #7c3aed, #4f46e5, ou classes Tailwind from-indigo/from-purple/to-blue).
2. **Glassmorphism** (poids 12) — backdrop-filter: blur() ou classes backdrop-blur sur fond semi-transparent.
3. **Police système par défaut** (poids 10) — Inter, Poppins, ou system-ui sans personnalisation, ou classe font-sans non surchargée.
4. **Coins arrondis uniformes** (poids 10) — border-radius identique (8-16px) répété sur au moins 3 éléments différents, ou rounded-lg/xl/2xl répétés.
5. **Ombre douce diffuse** (poids 8) — box-shadow avec faible opacité (rgba(0,0,0,0.05 à 0.15)) et flou important, répétée à l'identique, ou shadow-md/lg/xl répétés.
6. **Emoji utilisés comme icônes** (poids 8) — emoji à la place de vraies icônes SVG, au moins 3 occurrences.
7. **Structure hero + 3 cartes + témoignages** (poids 14) — présence conjointe d'une section "hero", d'une grille de "features"/"fonctionnalités", et d'une section "testimonials"/"témoignages".
8. **Accent indigo/violet Tailwind par défaut** (poids 10) — #4f46e5, #7c3aed, #9333ea, ou classes indigo-600/violet-600/purple-600.
9. **Tout centré, espacement générique** (poids 6) — text-align:center répété au moins 3 fois, ou py-20/py-24 répétés.
10. **Micro-interaction hover par défaut** (poids 4) — hover:scale-105, ou transition+transform+:hover combinés sans intention spécifique.

Additionne les poids des signaux présents pour obtenir un score sur 100 (plafonné à 100). Donne un verdict : "Fortement générique" si ≥66, "Partiellement standard" si ≥33, "Déjà assez distinct" sinon.

Termine par une phrase courte et partageable au format : "Mon interface est X% générique selon Specimen 🔬"

---

**Mon code à analyser :**

[colle ton code ici]
