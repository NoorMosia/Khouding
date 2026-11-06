// Generate khouding brand SVGs from the real JetBrains Mono outlines.
// Wordmark: "khoud" + I-beam cursor (replacing the dotted i) + "ng", lowercase, weight 500.
// Mark: "k" for favicon / app tile.
const fs = require('fs');
const path = require('path');
const opentype = require(path.join('..', 'node_modules', 'opentype.js'));

const fontBuf = fs.readFileSync(path.join(__dirname, 'JetBrainsMono-Medium.ttf'));
const font = opentype.parse(fontBuf.buffer.slice(fontBuf.byteOffset, fontBuf.byteOffset + fontBuf.byteLength));
const outDir = path.join('..', 'design', 'brand');
fs.mkdirSync(outDir, { recursive: true });

const unitsPerEm = font.unitsPerEm;        // JetBrains Mono = 1000
const fontSize = 100;                       // design at 100px cap, scale later
const scale = fontSize / unitsPerEm;

// JetBrains Mono is monospaced: every glyph advances the same width.
const advance = font.charToGlyph('o').advanceWidth * scale;

// ---- helpers ------------------------------------------------------------
function glyphPath(ch, x, baseline) {
  // returns an SVG path 'd' string for a single char placed at x, baseline y
  const glyph = font.charToGlyph(ch);
  const p = glyph.getPath(x, baseline, fontSize);
  return p.toPathData(3);
}

// Build the wordmark.
// Letters around the removed "i": k h o u d [cursor] n g
const preLetters  = ['k', 'h', 'o', 'u', 'd'];
const postLetters = ['n', 'g'];

const baseline = 100;          // baseline y in the 0..~130 design space

// ---- tunable cursor parameters (the signature) --------------------------
// CURSOR_CELL: horizontal space the cursor occupies, as a fraction of a
//   normal monospace cell. 1.0 = full loose cell (old look). Lower = tighter,
//   letters hug the cursor.
// BAR_W: thickness of the vertical bar (weight).
// SERIF_W / SERIF_H: the top/bottom caps of the I-beam.
// TOP/BOTTOM: vertical extent (caret height).
// Variant A (approved): tight gap, medium bar, indigo cursor.
const P = {
  CURSOR_CELL: parseFloat(process.env.CURSOR_CELL || '0.34'),
  BAR_W:   parseFloat(process.env.BAR_W   || '11'),
  SERIF_W: parseFloat(process.env.SERIF_W || '26'),
  SERIF_H: parseFloat(process.env.SERIF_H || '9'),
  TOP:     parseFloat(process.env.TOP     || '80'),   // px above baseline
  BOTTOM:  parseFloat(process.env.BOTTOM  || '6'),    // px below baseline
};
const cursorCellW = advance * P.CURSOR_CELL;

const letterPaths = [];   // ink-colored letters
let x = 0;

for (const ch of preLetters) {
  letterPaths.push(glyphPath(ch, x, baseline));
  x += advance;
}

// --- the I-beam cursor in a NARROW cell so the letters hug it ---
const cellX = x;
const cx = cellX + cursorCellW / 2;
const barW = P.BAR_W;
const serifW = P.SERIF_W;
const serifH = P.SERIF_H;
const cursorTop = baseline - P.TOP;
const cursorBottom = baseline + P.BOTTOM;

const ibeam = [
  `M ${(cx - barW/2).toFixed(2)} ${cursorTop.toFixed(2)}`,
  `h ${barW}`, `V ${cursorBottom.toFixed(2)}`, `h ${-barW}`, `Z`,
  `M ${(cx - serifW/2).toFixed(2)} ${cursorTop.toFixed(2)}`,
  `h ${serifW}`, `v ${serifH}`, `h ${-serifW}`, `Z`,
  `M ${(cx - serifW/2).toFixed(2)} ${(cursorBottom - serifH).toFixed(2)}`,
  `h ${serifW}`, `v ${serifH}`, `h ${-serifW}`, `Z`,
].join(' ');

x += cursorCellW;         // advance only the narrow cursor cell
for (const ch of postLetters) {
  letterPaths.push(glyphPath(ch, x, baseline));
  x += advance;
}

const totalWidth = x;
const combinedLetters = letterPaths.join(' ');
const combined = combinedLetters + ' ' + ibeam;   // (used by single-color exports)

// viewBox with a little vertical breathing room
const vbTop = baseline - 90;
const vbHeight = 130;
const viewBox = `0 ${vbTop} ${totalWidth.toFixed(2)} ${vbHeight}`;

// two-color wordmark: letters in `ink`, cursor in `cursor` (indigo)
function wordmarkSVG(ink, cursor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="khouding">
  <path d="${combinedLetters}" fill="${ink}"/>
  <path d="${ibeam}" fill="${cursor}"/>
</svg>\n`;
}
// single-color wordmark (everything one fill) for monochrome contexts
function wordmarkMonoSVG(fill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="${fill}" role="img" aria-label="khouding">
  <path d="${combined}"/>
</svg>\n`;
}

// ---- the "k" mark (favicon / app tile) ----------------------------------
const kGlyph = font.charToGlyph('k');
const kPathRaw = kGlyph.getPath(0, baseline, fontSize);
const kBB = kPathRaw.getBoundingBox();
const kW = kBB.x2 - kBB.x1;
const kH = kBB.y2 - kBB.y1;
// center the k in a square tile with padding
const pad = Math.max(kW, kH) * 0.42;
const tile = Math.max(kW, kH) + pad * 2;
const offX = (tile - kW) / 2 - kBB.x1;
const offY = (tile - kH) / 2 - kBB.y1;
const kPath = kGlyph.getPath(offX, baseline + offY, fontSize).toPathData(3);

function markSVG(fill, bg, radiusPct) {
  const r = (tile * radiusPct).toFixed(2);
  const bgRect = bg
    ? `<rect width="${tile.toFixed(2)}" height="${tile.toFixed(2)}" rx="${r}" fill="${bg}"/>\n  `
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tile.toFixed(2)} ${tile.toFixed(2)}" role="img" aria-label="khouding">
  ${bgRect}<path d="${kPath}" fill="${fill}"/>
</svg>\n`;
}

// ---- palette ------------------------------------------------------------
const INK_DARK = '#e6e6ea';     // wordmark on dark bg
const INK_LIGHT = '#1d1e26';    // wordmark on light bg
const INDIGO_D = '#8a8bf0';     // dark-mode indigo
const INDIGO_L = '#4f4fc4';     // light-mode indigo
const TILE_FG_ON_INDIGO = '#0f0f26';

// ---- write files --------------------------------------------------------
const files = {
  // wordmarks, letters in ink, cursor in indigo (the signature accent)
  'wordmark-dark.svg':  wordmarkSVG(INK_DARK, INDIGO_D),
  'wordmark-light.svg': wordmarkSVG(INK_LIGHT, INDIGO_L),
  // for React: letters inherit CSS color, cursor stays indigo via currentColor override is awkward,
  // so expose a version where letters=currentColor and cursor is explicit indigo (works in both themes
  // if you set the indigo per-theme; we ship the dark indigo as a sensible default).
  'wordmark-current.svg': wordmarkSVG('currentColor', INDIGO_D),
  // single-ink monochrome (e.g. print, one-color contexts)
  'wordmark-mono-dark.svg':  wordmarkMonoSVG(INK_DARK),
  'wordmark-mono-light.svg': wordmarkMonoSVG(INK_LIGHT),
  // on a saturated indigo / brand fill: whole wordmark near-white (letters + cursor)
  'wordmark-on-indigo.svg':  wordmarkMonoSVG('#f4f4f8'),
  // marks
  'mark-dark.svg':  markSVG(INK_DARK, null, 0),              // bare k, dark ink
  'mark-light.svg': markSVG(INK_LIGHT, null, 0),             // bare k, light ink
  'mark-current.svg': markSVG('currentColor', null, 0),      // bare k, inherits color
  'tile-indigo.svg': markSVG(TILE_FG_ON_INDIGO, INDIGO_D, 0.22), // k on indigo tile (app icon)
  'favicon.svg': markSVG(TILE_FG_ON_INDIGO, INDIGO_D, 0.22),     // same, used as favicon
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, name), content);
}

console.log('advance(px):', advance.toFixed(2));
console.log('wordmark viewBox:', viewBox);
console.log('tile size:', tile.toFixed(2));
console.log('wrote', Object.keys(files).length, 'files to design/brand/');
