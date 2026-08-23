# Specimen — Éditorial Précis

Colle ce bloc au début d'une conversation avec ton assistant IA (Claude.ai, ChatGPT, Gemini...), puis colle ton code juste après et demande-lui d'appliquer la direction.

---

Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "Éditorial Précis" (Élégance retenue · typographie soignée · neutre raffiné).
Palette presque monochrome, un seul accent choisi avec soin, typographie comme véritable ornement. Pour les produits qui veulent avoir l'air posés, jamais criards.

=== 1. VALEURS CANDIDATES (choisis STRICTEMENT dedans, jamais en dehors) ===

primary_candidates: ["#1C1B19","#24231F"]
secondary_candidates: ["#6B6459","#8C8478"]
background_candidates: ["#FBFAF7","#F5F3EE"]
surface_candidates: ["#FFFFFF","#F0EEE8"]
text_candidates: ["#1C1B19"]
accent_candidates: ["#8C3B2E","#3B5249","#2E4A6B"]
font_display_candidates: ["Space Grotesk"]
font_body_candidates: ["Space Grotesk"]
font_mono_candidates: ["IBM Plex Mono"]
radius_range_px: [1,4]
spacing_base_range_px: [10,20]
border_width_range_px: [1,1]
shadow_style_guidance: "none, or a single very soft 1px hairline border — never a diffuse drop shadow"

=== 2. HARMONIE DES COULEURS (règle de distribution, pas seulement de choix) ===

Répartition 85/10/5 stricte : quasiment monochrome encre-sur-crème. UNE seule couleur d'accent (choisie parmi les candidats, jamais plusieurs) apparaît, et seulement sur des surfaces minuscules et rares (un mot-clé, une puce, un lien) — jamais en fond de bouton plein ni en grande surface. Si l'interface a l'air 'colorée' au premier coup d'œil, il y a trop d'accent : réduis-le à un seul point d'usage par écran.

Cette règle prime sur l'envie de "faire ressortir" plusieurs couleurs à la fois. Une palette qui respecte les bonnes valeurs candidates mais ignore cette répartition produira un résultat criard, pas élégant.

=== 3. PRINCIPES DE MISE EN PAGE (à appliquer à TOUS les composants que tu génères ensuite) ===

- Grille : Grille éditoriale classique façon mise en page de magazine — colonnes de texte larges, marges extérieures généreuses et constantes.
- Espacement : Espacement le plus généreux des cinq directions (base 10-20px) — le silence visuel est la signature principale de cette direction.
- Hiérarchie visuelle : Hiérarchie quasi exclusivement typographique : variations d'échelle et de graisse plutôt que de couleur, de cadre ou d'ombre.
- Alignement : Alignement sobre et constant (une seule marge de référence sur toute la page), jamais de centrage systématique ni de superposition.

Ces principes s'appliquent à la disposition réelle des éléments (boutons, cartes, sections, formulaires) — pas seulement aux valeurs de tokens. Un token correct mal disposé (mauvais espacement, hiérarchie plate, alignement au hasard) donne toujours un résultat qui a l'air générique ou bricolé, même avec la bonne palette.

=== Génère maintenant ===

Choisis UNE valeur par rôle de couleur (en respectant la répartition décrite en section 2), une police par rôle, UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "antenne-8180"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique-le à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled), en respectant à la fois la répartition de couleurs (section 2) et les principes de mise en page (section 3) — pas seulement les valeurs de tokens prises isolément. Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.
