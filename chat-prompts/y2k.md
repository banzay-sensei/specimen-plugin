# Specimen — Chrome Y2K

Colle ce bloc au début d'une conversation avec ton assistant IA (Claude.ai, ChatGPT, Gemini...), puis colle ton code juste après et demande-lui d'appliquer la direction.

---

Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "Chrome Y2K" (Maximalisme · holographique · futurisme rétro).
Argent chromé et accents holographiques sur fond quasi noir. Le futurisme optimiste des années 2000, en plus poussé.

Choisis des valeurs STRICTEMENT à l'intérieur des contraintes suivantes. Ne sors JAMAIS de ces listes ou plages, même si une autre valeur te semblerait "plus jolie".

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

Choisis UNE valeur par rôle de couleur (parmi les candidats donnés), une police par rôle (parmi les candidats donnés), UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "orbite-4047"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique ces tokens à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled). Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.
