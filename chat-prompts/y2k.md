# Specimen — Chrome Y2K

Colle ce bloc au début d'une conversation avec ton assistant IA (Claude.ai, ChatGPT, Gemini...), puis colle ton code juste après et demande-lui d'appliquer la direction.

---

Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "Chrome Y2K" (Maximalisme · holographique · futurisme rétro).
Argent chromé et accents holographiques sur fond quasi noir. Le futurisme optimiste des années 2000, en plus poussé.

=== 1. VALEURS CANDIDATES (choisis STRICTEMENT dedans, jamais en dehors) ===

primary_candidates: ["#C7C9D9","#8A8FA3"]
secondary_candidates: ["#00E5FF","#FF00E5","#FFEA00"]
background_candidates: ["#0B0B14","#050507"]
surface_candidates: ["#15151F","#101019"]
text_candidates: ["#F5F5FF"]
accent_candidates: ["#00E5FF","#FF00E5"]
font_display_candidates: ["Space Grotesk"]
font_body_candidates: ["Space Grotesk"]
font_mono_candidates: ["IBM Plex Mono"]
radius_range_px: [8,20]
spacing_base_range_px: [4,12]
border_width_range_px: [1,2]
shadow_style_guidance: "glossy holographic gradient border or soft colored glow"

=== 2. HARMONIE DES COULEURS (règle de distribution, pas seulement de choix) ===

Répartition 75/20/5 : même dans un style maximaliste, une seule teinte holographique domine à un instant donné (jamais cyan ET magenta en pleine intensité sur le même écran) — l'alternance entre teintes accent se fait d'un composant à l'autre, pas en simultané sur la même surface. Le chromé (primary) sert de neutre 'brillant', pas de couleur d'accent supplémentaire.

Cette règle prime sur l'envie de "faire ressortir" plusieurs couleurs à la fois. Une palette qui respecte les bonnes valeurs candidates mais ignore cette répartition produira un résultat criard, pas élégant.

=== 3. PRINCIPES DE MISE EN PAGE (à appliquer à TOUS les composants que tu génères ensuite) ===

- Grille : Grille avec chevauchements assumés et profondeur (éléments qui se superposent légèrement) plutôt qu'une grille plate.
- Espacement : Espacement resserré autour des éléments graphiques marquants, mais avec des respirations franches entre les grands blocs.
- Hiérarchie visuelle : Hiérarchie par la brillance et la profondeur (ombres/lueurs) plutôt que par la seule taille — un halo signale l'importance.
- Alignement : Alignement sur grille avec légers décalages en profondeur (z-index), jamais un aplat totalement plat.

Ces principes s'appliquent à la disposition réelle des éléments (boutons, cartes, sections, formulaires) — pas seulement aux valeurs de tokens. Un token correct mal disposé (mauvais espacement, hiérarchie plate, alignement au hasard) donne toujours un résultat qui a l'air générique ou bricolé, même avec la bonne palette.

=== 4. DÉCLINAISON RESPONSIVE ===

- Desktop : Sidebar chromée avec effets de profondeur (légère ombre/glow sur l'élément actif), grille avec superpositions décoratives.
- Mobile : Bottom bar avec effet chromé/glossy, icône active surélevée visuellement (légère ombre ou halo).

=== 5. COMPOSANTS CLÉS ===

- Navigation : État actif marqué par un halo coloré ou un effet de surélévation (ombre portée colorée), pas juste un changement de teinte plate.
- Cartes : Bordure en dégradé holographique fine ou reflet chromé subtil sur un des bords.
- Icônes : Icônes à finition chromée ou légèrement dégradée, jamais plates ni monochromes basiques.

=== Génère maintenant ===

Choisis UNE valeur par rôle de couleur (en respectant la répartition décrite en section 2), une police par rôle, UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "antenne-6087"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique-le à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled), en respectant à la fois la répartition de couleurs (section 2), les principes de mise en page (section 3), la déclinaison responsive (section 4) et le traitement des composants clés (section 5) — pas seulement les valeurs de tokens prises isolément. Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.
