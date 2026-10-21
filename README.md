# Anthea & Arun — wedding invitation

Customized invitations for Dr. Anthea Judy Gilbert and Dr. Arun Joy Thomas. The original design was captured from https://sandra-mary-harison.vercel.app/ on 20 October 2026.

## Two invitations in one deployment

| Path | Invitation | Source |
| --- | --- | --- |
| `/` | Existing bride card, unchanged | `src/index.html`, `src/invitation.js`, `src/styles.css` |
| `/groom` | Arun's bottle-green, ivory and antique-brass card | `src/groom/index.html`, `src/groom/invitation.js`, `src/groom/styles.css` |

Both paths are built together. `vercel.json` routes `/groom` and `/groom/` to the groom document, so a second project or branch is unnecessary. The groom document loads its own page JavaScript and stylesheet; the fonts, angel artwork, music, and common runtime assets are shared. Sharing either invitation uses its current URL.

The groom card lists Arun first and says “our beloved son”; the sign-off is “Aswin George Thomas”. Its contact card contains Mr. Thomas K John and Mrs. Jessy K George with `9497816261` and `9497331582`. Only this card restores “Trinity (Medical College) Mar Thoma Syrian Church”; the bride retains “Trinity Medical College Church”.

The groom theme uses a woven bottle-green curtain, brass monogram, ivory interior, small gold reveal particles, and slow background watermarks. It includes keyboard opening, reduced-motion alternatives, and compact phone-sized music controls. Its theme is code-based and adds no remote visual assets.

To edit groom content, keep both `src/groom/index.html` (initial HTML) and `src/groom/invitation.js` (client rendering) synchronized to avoid hydration mismatches. Edit only `src/groom/styles.css` for groom theme changes. The build appends these overrides to a copy of the base CSS without modifying the bride stylesheet. Run `npm run build` and `npm run verify` after editing. Restart an already-running server once after this routing update.

## Bride customization

- Scripture: “Therefore what God has joined together, let no one separate.” — Mark 10:9.
- Engagement: Saturday, 26 December 2026, 11:00 AM, Holy Family Roman Catholic Church, Mukkad, Kollam. Reception at the same venue, 12pm–9pm.
- Wedding: Wednesday, 30 December 2026, 11:11 AM, Trinity Medical College Church, Thiruvananthapuram.
- Wedding reception: Sooryaprabha Convention Centre, Mannanthala, Thiruvananthapuram. Separate church/reception location cards each have their own map and the supplied directions link.
- Both countdown targets include the `+05:30` timezone offset.
- Updated family details, sharing text, page title, and social metadata. The Contact Us section contains only the bride's parents, with two independent telephone links.
- Both bride and groom details also show two individual tap-to-call phone links with the +91 country code.
- The transparent angel image is also the browser tab icon.
- The old family-meeting photo/caption is commented out in `src/invitation.js` for later replacement. The image remains available in `reference/proposel.jpeg`. The old photograph is also removed from active social metadata.

The two opening-screen Cupids have been replaced with the supplied angel-and-heart design, prepared as a transparent PNG. The existing 48px mobile / 64px desktop containers, mirrored right-hand image, four-second floating/rocking animation, and right-side half-second delay are retained.

The image is at `src/assets/angel-silhouette.png`; the build copies it into `dist/assets/`. Initial HTML and client code both use the new image. The untouched Cupid assets remain in `reference/`. Artwork preparation details are in `src/assets/README.md`.

The angels use their original dark color. Opening the invitation triggers a champagne-gold starburst and soft central glow. The effect clears itself after 4.5 seconds and never intercepts clicks. Reduced-motion visitors receive a short, gentle glow without moving particles. The `RevealSparkles` component in `src/invitation.js` and the `invitation-reveal-*` CSS rules control this effect.

## Run

Requires Node.js 20 or newer. No npm dependencies need installing.

```powershell
cd C:\Users\ASUS\Desktop\AI\wedding-invitation
npm run dev
```

Open http://localhost:3000 for the bride card or http://localhost:3000/groom for the groom card. Stop the server with Ctrl+C.

After editing, stop and rerun `npm run dev`, or run `npm run build` in a second terminal and refresh the browser.

```powershell
npm run build
npm run verify
```

`npm start` serves the existing build. Set `$env:PORT = "3001"` before starting if port 3000 is occupied.

## What is preserved

- Blush-pink curtains with graphite grain and a pearly gloss, with the angel artwork, heart graphics, and animated reveal. Each side uses one continuous image with no tiling joins. The corrected softer pink is preserved in `src/themes/curtain-soft-pink.css`; switch `--curtain-finish` to `var(--curtain-soft-pink)` in `src/styles.css` and rebuild to restore it. See `src/assets/blush-steel-gloss-texture.md` for both finishes and the generation prompt.
- Original fonts, color palette, and overall invitation layout.
- Engagement, wedding, reception, and contact sections with the supplied content.
- Countdown logic and the post-wedding thank-you state, now using the December dates in India time.
- Three map embeds, with pins at the coordinates resolved from the supplied links.
- Original music, playback controls, animated music indicator, sharing panel, and interactive event cards.
- Updated social titles; the sample couple's preview photograph and old public URL have been removed.
- All discovered first-party assets: 29 reference files and 16 optimized image variants. Fonts, images, music, JavaScript, and styles are served locally.

## Editing next

| File | Purpose |
| --- | --- |
| `src/invitation.js` | Readable formatting of the deployed application code: content, components, animations, dates, and controls |
| `src/index.html` | Initial rendered HTML and page metadata |
| `src/styles.css` | Original CSS, formatted for editing |
| `reference/` | Unmodified downloaded baseline and local media |
| `reference/manifest.json` | Source URLs, file sizes, and SHA-256 hashes |
| `reference/images.json` | Locally cached responsive image variants |
| `scripts/build.mjs` | Copies the baseline and overlays editable files into `dist/` |
| `scripts/serve.mjs` | Local HTTP server, image lookup, and audio range requests |
| `output/playwright/` | Browser comparison screenshots, when generated |

The deployment exposes compiled client code, not the original Git repository, JSX/TypeScript files, or build configuration. This project preserves that deployed runtime to avoid approximating its behavior. `src/invitation.js` is recovered compiled code with readable formatting; it is not the author's original source.

For text changes, keep the initial HTML and client code consistent to prevent React hydration mismatches. Preserve the exact HTML whitespace until deliberately rebuilding the initial markup. For a larger redesign, migrate the recovered components into ordinary React source while comparing against `reference/`.

Component guide in `src/invitation.js`:

- `u`: countdown
- `g`: music player
- `P`: sharing controls and modal
- `A`: contact section
- `VenueMap`: location card, embedded map, and directions link
- `z`: engagement section
- `RevealSparkles`: opening sparkle flourish
- `M`: main invitation, opening curtains, wedding section, and decorations
- `S`: interactive event information card

## Notes

- The unused “View Photo Gallery” button is commented out until a real gallery is added.
- The reference's missing favicon returns 404. The local server returns an empty 204 for that browser request.
- Maps require internet access; native sharing, WhatsApp, and email depend on browser/device support. No external message is sent by the verification workflow.
- Original source material remains untouched in `reference/`; it is a historical baseline, not the current invitation content.
- Public deployment inspection cannot recover unpublished files, private server code, or the original repository history.

`scripts/capture-reference.mjs` and `scripts/capture-images.mjs` document the capture process. They make network requests and overwrite the reference baseline; do not rerun them casually after the original site changes.
