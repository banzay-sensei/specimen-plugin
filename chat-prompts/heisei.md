# Specimen — Terminal Heisei

Colle ce bloc au début d'une conversation avec ton assistant IA (Claude.ai, ChatGPT, Gemini...), puis colle ton code juste après et demande-lui d'appliquer la direction.

---

Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "Terminal Heisei" (Rétro-tech japonais · CRT · pager).
Vert phosphore et magenta néon sur fond quasi noir. L'esthétique console des années 90 japonaises.

=== 1. VALEURS CANDIDATES (choisis STRICTEMENT dedans, jamais en dehors) ===

primary_candidates: ["#00FF9C","#FF2D95","#39FF14"]
secondary_candidates: ["#7A6FF0","#00E0FF"]
background_candidates: ["#0D0D12","#111018","#0A0A10"]
surface_candidates: ["#191822","#15141C"]
text_candidates: ["#E8E8F0"]
accent_candidates: ["#FF2D95","#00FF9C"]
font_display_candidates: ["IBM Plex Mono"]
font_body_candidates: ["Space Grotesk"]
font_mono_candidates: ["IBM Plex Mono"]
radius_range_px: [0,4]
spacing_base_range_px: [4,8]
border_width_range_px: [1,2]
shadow_style_guidance: "colored neon glow, e.g. 0 0 16px rgba(0,255,156,0.35)"

=== 2. HARMONIE DES COULEURS (règle de distribution, pas seulement de choix) ===

Répartition 85/10/5 : le fond quasi noir occupe l'écrasante majorité de l'écran. UNE seule couleur néon (primary) sert de signal principal ; la seconde teinte candidate (secondary/accent) n'apparaît qu'en accent ponctuel (curseur, statut, petit tag) — jamais en grande surface, sinon l'effet 'terminal' devient un sapin de Noël. Le contraste vient de l'obscurité du fond, pas de l'accumulation de couleurs vives.

Cette règle prime sur l'envie de "faire ressortir" plusieurs couleurs à la fois. Une palette qui respecte les bonnes valeurs candidates mais ignore cette répartition produira un résultat criard, pas élégant.

=== 3. PRINCIPES DE MISE EN PAGE (à appliquer à TOUS les composants que tu génères ensuite) ===

- Grille : Grille monospace implicite — tout s'aligne comme sur une grille de caractères, colonnes régulières façon terminal.
- Espacement : Espacement compact et technique, comme une sortie de commande — pas de grand vide décoratif.
- Hiérarchie visuelle : Hiérarchie par la luminosité et l'intensité du glow, pas par la taille : l'élément actif/important brille plus, le reste reste sobre et légèrement atténué.
- Alignement : Alignement gauche systématique façon flux de log, ponctué de séparateurs fins plutôt que de blocs isolés.

Ces principes s'appliquent à la disposition réelle des éléments (boutons, cartes, sections, formulaires) — pas seulement aux valeurs de tokens. Un token correct mal disposé (mauvais espacement, hiérarchie plate, alignement au hasard) donne toujours un résultat qui a l'air générique ou bricolé, même avec la bonne palette.

=== 4. DÉCLINAISON RESPONSIVE ===

- Desktop : TopNav fine façon barre de statut système, contenu principal en flux vertical unique plutôt qu'en grille large.
- Mobile : Menu tiroir (hamburger) façon console, jamais de bottom bar arrondie — préférer une barre fine et rectangulaire.

=== 5. COMPOSANTS CLÉS ===

- Navigation : État actif signalé par le glow et un curseur/marqueur façon terminal (>, _), pas par un fond coloré plein.
- Cartes : Conteneurs à bordure fine unique, fond légèrement plus clair que le fond général — jamais d'ombre diffuse.
- Icônes : Pictogrammes minimalistes façon glyphes monospace, ou icônes vectorielles très fines.

=== Génère maintenant ===

Choisis UNE valeur par rôle de couleur (en respectant la répartition décrite en section 2), une police par rôle, UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "estuaire-8106"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique-le à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled), en respectant à la fois la répartition de couleurs (section 2), les principes de mise en page (section 3), la déclinaison responsive (section 4) et le traitement des composants clés (section 5) — pas seulement les valeurs de tokens prises isolément. Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.
