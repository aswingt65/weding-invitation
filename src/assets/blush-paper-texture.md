# Blush paper curtain texture

Asset: `src/assets/blush-paper-texture.png` (1254 × 1254 PNG), copied to `/assets/blush-paper-texture.png` by the build.

Created with the built-in image generation tool using the user's stationery photograph as a material reference. The original image is preserved unchanged. Its edges did not tile cleanly, so the corrected CSS now uses one centered image with `cover` and `no-repeat` on each panel. This removes joins within each curtain at any viewport size. The opening-screen ink is muted plum `#593e4b`; panel fallback is blush `#ead3da`.

The complete corrected soft-pink curtain styles are backed up in `src/themes/curtain-soft-pink.css`. The live stylesheet also retains this finish as `--curtain-soft-pink`. To restore it, set `--curtain-finish: var(--curtain-soft-pink);` in `src/styles.css` and run `npm run build`. The no-repeat fix applies to both finishes. See `blush-steel-gloss-texture.md` for the active glossy variant.

The image is used by `.curtain-panel` in `src/styles.css`. Panel shading, center seam, text contrast, heart medallion, and divider are controlled by the adjacent `curtain-*` rules. Both the initial HTML and client code use the same panel classes.

## Generation prompt

Create a seamless, tileable, flat material texture for a wedding invitation website, based ONLY on the pale blush-pink embossed paper visible on the smartphone screen in the user's reference photo. Output one square texture tile viewed straight on, filling the entire frame edge to edge. Material: expensive fine-grained rose stationery / lightly pressed cotton paper, minute slightly elongated fibers and shallow irregular embossed grain, soft pearly blush highlights, dusty pink recessed fibers. Color family: very pale warm blush pink (#eed9de, #e4c9d1, highlights #f8ecee); it should read distinctly pink rather than beige or grey. Low to moderate microcontrast, delicate natural directional fibers predominantly vertical with a slight diagonal drift, not repetitive digital stripes, not coarse crumpled paper, not glitter. Uniform diffuse lighting across the tile, no vignette or large shadows. Texture must tile seamlessly on all four edges and remain subtle behind text. Absolutely no phone, hands, people, photo, envelope, folds, edges, text, letters, icons, frames, watermark, or other objects: just an unbroken full-frame flat pink paper material. The grain should remain perceptible when the tile is displayed around 400 to 500 CSS pixels wide.
