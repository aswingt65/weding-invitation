# Verification — 20 October 2026

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
