# Fix `.tamil-run-1` class not working

## Problem
The `.tamil-run-1` class in `css/custom.css:138` sets `font-family: "Ka Dhanusu", sans-serif;`, but there is no corresponding `@font-face` declaration for this font. All other Tamil fonts in the file have `@font-face` blocks that load their `.woff2`/`.ttf` files from the `fonts/` directory. The `Ka Dhanusu` font files (`fonts/Ka Dhanusu.ttf` and `fonts/Ka Dhanusu.woff2`) already exist but are never declared, so the browser falls back to `sans-serif`.

## Fix
Add an `@font-face` declaration for `Ka Dhanusu` in `css/custom.css`, before the `.tamil-run` class definition, following the exact same pattern as the other fonts.

### Step 1
Add the following block to `css/custom.css` before `.tamil-run { ... }`:

```css
@font-face {
  font-family: "Ka Dhanusu";
  src:
    url("../fonts/Ka Dhanusu.woff2") format("woff2"),
    url("../fonts/Ka Dhanusu.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

## Validation
Open `index.html` in a browser and confirm the paragraph with `class="... tamil-run-1"` renders using the Ka Dhanusu font (inspect the element and check the computed `font-family`).
