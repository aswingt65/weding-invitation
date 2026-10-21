# Groom invitation interior background

`groom-letter-blue.jpg` is the user's `C:/Users/ASUS/Downloads/download (3).jpg`, copied unchanged (736 x 1104). No generated or edited image was needed.

`GroomAtmosphere` in `src/groom/invitation.js` displays one fixed, cover-fitted image behind the letter, with a translucent central veil for text readability. No repeating tiles. The background becomes visible only when the opening panels reveal the letter.

Scroll progress shifts the image up by at most 32 pixels; a requestAnimationFrame interpolation smooths changes and stops when settled. A separate 30-second transform animation gives the image a slow drift. Twelve small white sparkles float upward behind the content. All decorative layers ignore pointer input. Reduced-motion preferences disable those movements and hide the floating sparkles, including when the preference changes while the page is open.

The opening panel markup and CSS remain identical to the preceding blue cover version. Bride source files are unchanged.
