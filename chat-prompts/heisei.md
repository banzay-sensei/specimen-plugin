# Specimen — Terminal Heisei

Colle ce bloc au début d'une conversation avec ton assistant IA (Claude.ai, ChatGPT, Gemini...), puis colle ton code juste après et demande-lui d'appliquer la direction.

---

Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "Terminal Heisei" (Rétro-tech japonais · CRT · pager).
Vert phosphore et magenta néon sur fond quasi noir. L'esthétique console des années 90 japonaises.

Choisis des valeurs STRICTEMENT à l'intérieur des contraintes suivantes. Ne sors JAMAIS de ces listes ou plages, même si une autre valeur te semblerait "plus jolie".

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

Choisis UNE valeur par rôle de couleur (parmi les candidats donnés), une police par rôle (parmi les candidats donnés), UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "tramway-5159"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique ces tokens à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled). Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.
