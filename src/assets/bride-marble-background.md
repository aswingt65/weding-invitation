# Bride invitation interior background

The opening curtains and wax seal are unchanged. `BrideMarbleBackdrop` appears only after the bride invitation opens, replacing the former animated rings and floating star icons. All images are bundled locally.

- `src/assets/bride-marble-portrait.jpg`: unchanged copy of the user-supplied `C:/Users/ASUS/Downloads/بطاقة دعوة_كارت دعوة.jpg`.
- `src/assets/bride-marble-landscape.png`: a wide adaptation created using the built-in image generation tool with that file as its reference.

A responsive `<picture>` selects the wide adaptation for landscape viewports and the original for portrait viewports. A single full-viewport image prevents repeating texture seams. A light translucent wash keeps central text readable. The 32-second drift uses CSS transforms; six small edge glints fade slowly on staggered nine-second cycles. Both animations stop for reduced-motion preferences. Styles are scoped to `.bride-marble-*` and do not affect the groom card.

## Exact landscape generation prompt

Adapt this exact wedding stationery background to a wide landscape 16:9 desktop website background. Preserve its photographic luxurious ivory-white marble with delicate champagne-gold veins, pearl beads, a few clear faceted crystals, tiny white baby's-breath florals and cream/champagne silk ribbon. Match its pale airy palette and refined photographic realism. Composition: sprigs of baby's breath and a few pearls confined to the far upper-left and lower-right corners; graceful satin ribbon curling across the upper-right corner and a small ribbon fold at the far lower-left. Keep all decorations near the OUTER 12 to 16 percent edges; the central 70 percent of the width must remain very light ivory marble, spacious and calm for long invitation text overlay. Do not put a central card, frame, text, initials, symbols, logos, or watermark. No deep shadows, no vignette, no yellow cast, no large dark veins behind the central text area. Gentle natural daylight, silk sheen, softly reflective pearls. One continuous full-frame wide landscape image, no tile divisions. Output a wide landscape image, not a portrait.
