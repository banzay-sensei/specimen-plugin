# Specimen — Signal Brutaliste

Colle ce bloc au début d'une conversation avec ton assistant IA (Claude.ai, ChatGPT, Gemini...), puis colle ton code juste après et demande-lui d'appliquer la direction.

---

Tu es un directeur artistique. Produis UNIQUEMENT un objet JSON valide, sans balises markdown, sans commentaire, sans texte avant ou après.

Direction imposée : "Signal Brutaliste" (Raw · haute-contraste · sans excuse).
Bordures épaisses, ombres dures décalées, aucune subtilité. Pour les produits qui veulent qu'on les remarque.

Choisis des valeurs STRICTEMENT à l'intérieur des contraintes suivantes. Ne sors JAMAIS de ces listes ou plages, même si une autre valeur te semblerait "plus jolie".

primary_candidates: ["#FF3D00","#0047FF","#111111","#D7263D"]
secondary_candidates: ["#FFD500","#00C2FF","#111111","#F2F2F0"]
background_candidates: ["#F2F2F0","#FFFFFF","#ECECE4"]
surface_candidates: ["#FFFFFF","#EDEDE6"]
text_candidates: ["#0A0A0A"]
accent_candidates: ["#FFD500","#00C2FF","#FF3D00"]
font_display_candidates: ["Archivo Black","Space Grotesk"]
font_body_candidates: ["Space Grotesk"]
font_mono_candidates: ["IBM Plex Mono"]
radius_range_px: [0,2]
spacing_base_range_px: [4,8]
border_width_range_px: [2,4]
shadow_style_guidance: "hard-offset, no blur, e.g. 4px 4px 0 #111111"

Choisis UNE valeur par rôle de couleur (parmi les candidats donnés), une police par rôle (parmi les candidats donnés), UN nombre précis dans chaque plage numérique (varie tes choix d'une génération à l'autre, n'utilise pas toujours le même nombre rond), et écris une valeur CSS box-shadow concrète cohérente avec le style demandé.

Grain de variation pour cette génération (graine de hasard interne, ne pas la répéter mot pour mot dans la sortie) : "lueur-8749"

Réponds avec EXACTEMENT ce schéma JSON, valeurs remplies, rien d'autre :
{"primary":"#hex","secondary":"#hex","background":"#hex","surface":"#hex","text":"#hex","accent":"#hex","onPrimary":"#hex","onAccent":"#hex","fontDisplay":"nom","fontBody":"nom","fontMono":"nom","radiusPx":number,"spacingBasePx":number,"borderWidthPx":number,"boxShadow":"valeur css"}

Une fois ce JSON produit, applique ces tokens à TOUS les composants que tu génères pour ce projet (boutons, cartes, inputs, navigation, modales, états hover/focus/disabled). Ne reviens jamais vers des valeurs "safe" par défaut (pas de retour à Inter, pas de dégradé indigo/violet, pas d'ombre douce diffuse générique). Respecte le contraste WCAG AA entre le texte et les fonds.
