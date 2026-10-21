# Verification — 20 October 2026

## Bride marble background — 21 October 2026

- Used the supplied portrait JPG unchanged and generated a matching wide landscape adaptation. A responsive picture chooses between them by viewport aspect ratio; the assets are locally bundled and documented in `src/assets/bride-marble-background.md`.
- Replaced the old rings and floating star icons with a continuous marble/ribbon/pearl/floral backdrop, a slow 32-second transform animation, and six subtle staggered edge glints. No repeated-image seams or moving content layout.
- Confirmed the entire opening-curtain HTML is byte-for-byte identical to its pre-change snapshot, and all existing CSS was preserved before appending scoped interior rules. The new backdrop is hidden until opening. Groom source files remain unchanged.
- Chromium at 320, 390, 768, 1440, and 1920px confirmed the correct responsive asset loads, no horizontal overflow, each full name fits on one line, opening/sparkle cleanup works, and no page exceptions occur. Inspected phone/desktop introduction and contact screenshots. Reduced-motion emulation disables image drift and glints.
- Build, JavaScript syntax, content and reference-integrity checks pass. Screenshots: `output/playwright/bride-marble-*.png` and `marble-unchanged-cover-390.png`.

## Bride name layout correction — 21 October 2026

- Removed the desktop three-column couple grid. Bride name/details, ampersand, and groom name/details now remain in separate centered rows at every width.
- Each full name uses a single line with type sized to its own available container; details wrap normally underneath. Initial HTML and client classes are synchronized.
- Chromium checked widths 320, 360, 390, 430, 600, 759, 760, 768, 820, 1024, 1280, 1440, 1920, and 2560. Both name text ranges fit their parent on exactly one line; the family rows do not overlap; no detail text is clipped and there is no page-wide horizontal overflow. Mobile and desktop screenshots were inspected.
- Made bride music controls compact below 600px to reduce obstruction of the family details, and added an accessible play/pause label. Build and both content checks pass; no browser page errors occurred. Groom source is unchanged.
- Screenshots: `output/playwright/bride-names-*.png` and `bride-names-final-*.png`.

## Bride wax-seal initials — 21 October 2026

- Replaced the font-dependent monogram with a locally bundled transparent A & A wax-seal image inspired by the supplied reference. Confirmed actual PNG alpha transparency; the final asset is documented in `src/assets/bride-aa-wax-seal.md`.
- Retained a subtle six-second breathing animation, with the existing reduced-motion override. Updated initial HTML and client rendering together, including the user's existing name-layout classes, to prevent hydration differences.
- Chromium checks at 320, 390, 768, and 1440px confirmed image loading and successful opening/sparkle cleanup without page JavaScript errors. Mobile and desktop cover screenshots were visually inspected.
- Build, syntax, and bride/groom content verification pass. Groom source files were not changed.

## Separate groom invitation — 21 October 2026

- Added `/groom` and `/groom/` in the local server and Vercel configuration. All three local paths (`/`, `/groom`, `/groom/`) return HTTP 200. Live Vercel deployment has not been performed as part of this change.
- Bride HTML, client JavaScript, and stylesheet SHA-256 hashes match their pre-task versions exactly. The build copies them unchanged; groom content, page bundle, and theme are separate.
- Confirmed groom-first name order, “our beloved son”, Aswin George Thomas sign-off, full Trinity church name, groom-parent contact card, all six groom-page telephone links, and the three supplied venue links. Bride retains the shortened church name.
- Chromium checks covered widths 320, 360, 390, 430, 599, 600, 767, 768, 899, 900, 1024, 1280, 1440, 1920, and 2560, plus 844×390 landscape. No page-wide overflow or clipped invitation text was detected. Cover, interior, venues, and contact screenshots were visually inspected across phone, tablet, laptop, and desktop sizes.
- At 320px with text enlarged to 200%, the opening cover fits and invitation text wraps without clipping or horizontal overflow. This is text enlargement emulation, not a physical-device or native browser-zoom test.
- Keyboard opening, closed-content inertness, curtain removal, reveal cleanup, music pause, reduced-motion opening/backgrounds, and the fallback sharing dialog passed. Sharing focus stays in the dialog, Escape closes it, and focus returns to the trigger.
- Captured native-share data and copy-link output through test stubs; both contain `/groom` and groom-first names. No invitations were sent. The mobile sharing backdrop covers the full viewport.
- Final checks report no page JavaScript exceptions or failed first-party asset requests. External Google maps can load asynchronously; their directions links remain available. Build, syntax, bride integrity, and both content validation scripts pass.
- Screenshots and temporary browser checks are in ignored `output/playwright/groom-*` files.

## Blush paper curtains — 21 October 2026

### Continuous surfaces and glossy variation

- Replaced the repeating 480px texture with a single centered `cover` image per panel and `no-repeat`, fixing the visible horizontal/vertical tile joins.
- Preserved the original pink PNG unchanged and saved the complete corrected curtain CSS in `src/themes/curtain-soft-pink.css`. The live stylesheet retains both finishes with a single `--curtain-finish` selection.
- Added a separate generated blush texture with darker graphite grain and pearly highlights, plus a gentle CSS sheen.
- Checked both finishes in Chromium at 390×844, 430×932, 1440×900, and 1920×1080. All texture layers use no-repeat and the image layer uses cover; no horizontal overflow or page exceptions. Inspected mobile and desktop screenshots for the absence of texture joins.
- Opening the invitation and sparkle cleanup passed. Build and reference/content checks pass.
- Screenshots: `output/playwright/curtain-{glossy-pink,soft-pink}-{390,430,1440,1920}.png`.

- Replaced the opening curtains' green fill and heavy dark shading with a locally bundled blush-pink paper texture, a fine grain, soft rose seam, and muted-plum opening text.
- Kept the animated dark angels and existing opening sparkle effect.
- Inspected opening screenshots at 390, 768, and 1440px; no horizontal overflow. Both angel images and the new texture load successfully.
- Synchronized the initial reception text with the existing client-side edit to “Holy Family Parish Hall” to resolve a hydration mismatch.
- Build, JavaScript syntax, reference integrity, and customized-content checks pass.
- Final Chromium runs at all three widths reported no console or page errors; tapping opens the invitation and the sparkle overlay cleans up successfully.
- Texture provenance and generation prompt: `src/assets/blush-paper-texture.md`. Screenshots: `output/playwright/blush-curtains-390.png`, `blush-curtains-768.png`, and `blush-curtains-1440.png`.

## Bride-side contact card and browser identity

- Removed the groom's contact card from both initial HTML and client rendering. The bride's parents card remains centered, with two separate call links.
- The groom's biographical information in the introduction remains part of the invitation.
- Added the angel PNG as the favicon in both HTML and framework metadata.
- Expanded build verification to reject active references to the old couple, parents, phone numbers, addresses, venues, dates, photograph, Cupid asset, and original Vercel URL.
- Historical material in `reference/` and commented code is retained for development; it is not rendered in the invitation.
- The reused visual design, fonts, and background melody remain. They are generic presentation assets, not the old couple's personalized content.
- Browser audit found no old personalized details in rendered text, headings, links, map frames, metadata, or captured sharing text.
- Browser title: `Dr. Anthea Judy Gilbert & Dr. Arun Joy Thomas Wedding`. Social title: `Anthea & Arun Wedding Invitation`. Address: `http://localhost:3000/`.
- The favicon URL returned HTTP 200 with `image/png`. The single contact card was inspected at 390px and 1440px with no horizontal overflow or browser errors.

## Anthea & Arun content customization

- Checked the supplied names, family details, addresses, scripture, phone numbers, December event dates, and all three supplied map links in the initial HTML and active client code.
- Old names, April dates, old scripture attribution, and the sample photo are absent from active content. The photo/caption component and unused gallery button remain commented out in source.
- Both countdowns agree with their India-time targets to within one second: 26 December 2026 at 11:00 AM and 30 December 2026 at 11:11 AM.
- The four telephone links each contain one number with the +91 prefix.
- Separate church and reception cards stack on smaller screens and become two columns at 900px.
- Chromium layout checks at 320, 390, 768, 899, 900, 1440, and 1920px found no document-wide horizontal overflow or overflowing text. Mobile, tablet, and desktop screenshots were inspected.
- All three external Google map frames loaded; individual venue screenshots were inspected.
- The longer sparkle overlay was measured at approximately 4.58 seconds including browser automation overhead.
- Both heading DOM values contain the exact supplied names; the existing styling displays them in uppercase.
- Build, syntax, reference integrity, and personalized-content checks passed.

## Sparkle reveal and restored angel color

Chromium checks at 390px and 1440px confirmed the original unfiltered dark angels, 54 animated sparkle particles on opening, non-interactive overlay, successful invitation reveal, and automatic effect cleanup. Reduced-motion emulation hides moving particles and uses the short glow instead. Both reveal screenshots were visually inspected. No page JavaScript errors occurred; the build and JavaScript syntax check passed.

## Angel customization

After replacing the opening-screen Cupids, Chromium checks at 390px and 1440px confirmed that both transparent angel images load, retain 48 × 48 / 64 × 64 CSS-pixel containers, float and rock continuously, and mirror the right image. Screenshots were visually inspected. Tapping opens the curtains successfully; no page JavaScript errors were observed. The build and reference integrity checks pass. Screenshots: `output/playwright/angel-390.png` and `output/playwright/angel-1440.png`.

## Original clone comparison

Compared the local copy against the live public deployment in Chromium through Playwright.

## Passed

- SHA-256 integrity checks for 29 captured reference files and 16 responsive image variants.
- Build completed; application and server JavaScript syntax checks passed.
- All captured files are present in the local build.
- No failed first-party HTTP requests and no page JavaScript exceptions during the comparison.
- Rendered invitation text, links, image loading state, and iframe URLs match the reference.
- Page height and every section's width/height match the reference at viewport widths 320, 390, 768, 1440, and 1920 pixels.
- No document-wide horizontal overflow at those widths.
- Opening curtains reveal the invitation.
- Original audio loads (25.813 seconds); pause and resume controls work.
- Sharing fallback opens with WhatsApp, Email, and Link controls, and closes successfully. No invitations were sent.
- Scroll-triggered sections, family photo, reception details, and contact details were inspected in screenshots.
- Both Google embed documents load locally; the wedding map tiles were visually confirmed after bringing the browser tab to the foreground. Earlier full-page captures show blank maps while the external lazy-loaded content was pending.

## Scope

This is a comparison of the deployed client experience, not a claim to have recovered its private source repository. External Google map tiles are not bundled. Native device share sheets, real phones, Safari, external messaging apps, and telephone dialing were not tested.

Screenshots are in `output/playwright/`. Background decorations animate continuously, and Google Maps content is external, so screenshots are not expected to be pixel-identical across capture times.

The reference's existing gallery target, map links, telephone link, expired event dates, and narrow-screen layout choices are documented in `README.md`.
