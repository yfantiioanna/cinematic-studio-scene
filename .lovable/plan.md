## Add Play Font (Google Fonts)

Replace both Cormorant Garamond and DM Sans across the site with **Play** from Google Fonts.

### Changes

**`src/styles.css`**
- Update Google Fonts `@import` to load `Play:wght@400;700` instead of Cormorant Garamond + DM Sans.
- Set `body` `font-family` to `"Play", sans-serif`.
- Update `.font-serif` and `.font-sans` utility classes to use Play.
- Update all internal `font-family` references (`.opio-input`, `.opio-label`, `.gallery-hint`) to Play.

**`src/routes/index.tsx`**
- Replace every inline `fontFamily: '"Cormorant Garamond", serif'` and `fontFamily: '"DM Sans", sans-serif'` with `fontFamily: '"Play", sans-serif'` (SECTION_LABEL, H2, service number, service title/desc, contact button, footer links).

**`src/components/Nav.tsx`** and **`src/components/IntroOverlay.tsx`**
- Check and replace any inline font-family references with Play.

No layout or color changes — typography swap only.