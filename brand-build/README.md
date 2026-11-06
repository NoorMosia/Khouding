# brand-build

Reproducible generator for the khouding logo assets in `design/brand/`.

## What's here
- `gen.js`, composes the wordmark + `k` mark SVGs from the real JetBrains Mono outlines.
- `JetBrainsMono-Medium.ttf`, the source font (weight 500).

## Regenerate
```powershell
npm install opentype.js      # once, in this folder
node gen.js                  # writes all SVGs into ../design/brand/
```

## The locked design (variant A)
- Wordmark: `khouding`, lowercase, JetBrains Mono Medium.
- The dotted "i" is replaced by a drawn I-beam text cursor.
- Cursor color is the indigo accent, theme-aware:
  - dark theme  `#8a8bf0`
  - light theme `#4f4fc4`
  - on indigo / brand fill: whole wordmark near-white (`wordmark-on-indigo.svg`)
- Cursor geometry (tunable via env vars in `gen.js`): tight cell `0.34`, bar `11`, serif `26x9`, caret top `80` / bottom `6`.
- Mark / favicon: the bare `k`; `tile-indigo.svg` is the `k` on a rounded indigo tile.

## Outputs (in ../design/brand/)
wordmark-dark · wordmark-light · wordmark-current (letters inherit CSS color) ·
wordmark-on-indigo · wordmark-mono-dark · wordmark-mono-light ·
mark-dark · mark-light · mark-current · tile-indigo · favicon
