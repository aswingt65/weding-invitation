# Pink steel-gloss curtain finish

Asset: `src/assets/blush-steel-gloss-texture.png`, created with the built-in image generation tool by editing `src/assets/blush-paper-texture.png`. The original pink image was not overwritten.

The new finish adds graphite-grey grain recesses and pearly highlights while keeping the blush pink base. CSS adds a subtle broad reflective sheen. Each panel uses a single centered image with `cover` and `no-repeat`, eliminating repeating-image joins. The center division between the two opening panels remains intentional.

## Restore the corrected original pink

In `src/styles.css`, change the single `--curtain-finish` setting to:

```css
--curtain-finish: var(--curtain-soft-pink);
```

Run `npm run build` and refresh the browser. To return to the glossy finish, use `var(--curtain-glossy-pink)` instead. The complete soft-pink curtain CSS, already corrected to avoid joins, is also saved in `src/themes/curtain-soft-pink.css`.

## Exact generation prompt

Edit this pink material texture into a second premium finish for a wedding invitation curtain. Preserve its pale blush-pink base color and delicate irregular diagonal fibrous grain. Make the grain finer and subtly charcoal/graphite grey in recessed lines, giving a slightly brushed-steel character under the pink, with a polished pearlescent glossy finish and fine silver-white glints on raised fibers. Still predominantly light blush pink, elegant and airy, not grey metal, not dark or dirty. The blackish fine recesses should be visible but restrained. Add very broad gentle satin sheen, not bright white streaks. Full-frame flat square texture only, straight-on, uniform continuous material across the entire image, no panel divisions, joins, seams, borders, folds, objects, text, icons, glitter particles, or vignette. Grain density should be about twice as fine as input so it reads delicately when the full image covers a tall curtain panel. Output a high-detail square image.
