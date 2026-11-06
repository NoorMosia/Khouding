// Austria province course-map (restored). 9 Bundesländer = chapters.
// Oberösterreich = Chapter 1 ("The Foundations"), lit. Standalone mockup output.
import fs from 'fs';
import { geoMercator, geoPath } from 'd3-geo';

const geo = JSON.parse(fs.readFileSync('./austria-states.json', 'utf8'));

const CH = {
  'Oberösterreich':   { ch:'CHAPTER 1', title:'The Foundations',      state:'done' },
  'Niederösterreich': { ch:'CHAPTER 2', title:'The Operator Reaches', state:'next' },
  'Steiermark':       { ch:'CHAPTER 3', title:'The Crossroads',       state:'fog'  },
  'Tirol':            { ch:'CHAPTER 4', title:'Loopmoor',             state:'fog'  },
  'Kärnten':          { ch:'CHAPTER 5', title:'Method Hold',          state:'fog'  },
  'Salzburg':         { ch:'CHAPTER 6', title:'Array Flats',          state:'fog'  },
  'Burgenland':       { ch:'CHAPTER 7', title:'String Coast',         state:'fog'  },
  'Vorarlberg':       { ch:'CHAPTER 8', title:'The Collection',       state:'fog'  },
  'Wien':             { ch:'EXAM',      title:'The Proving',          state:'fog'  },
};

const W=720, H=480;
const proj = geoMercator().fitExtent([[24,24],[W-24,H-24]], geo);
const path = geoPath(proj);
const roundD = d => d.replace(/-?\d+\.?\d*/g, n => (Math.round(parseFloat(n)*10)/10).toString());

let paths='', labels='', pins='';
geo.features.forEach(f=>{
  const nm=f.properties.name; const info=CH[nm]; if(!info) return;
  const d=roundD(path(f));
  paths += `<path class="prov ${info.state}" data-nm="${nm}" data-title="${info.title}" data-ch="${info.ch}" d="${d}"/>\n`;
  const c=path.centroid(f);
  labels += `<text class="pl ${info.state}" x="${c[0].toFixed(0)}" y="${c[1].toFixed(0)}">${info.title}</text>\n`;
  if(info.state==='done'){
    pins += `<circle class="pin done" cx="${(c[0]-16).toFixed(0)}" cy="${(c[1]-6).toFixed(0)}" r="4"/>`+
            `<circle class="pin done" cx="${(c[0]+10).toFixed(0)}" cy="${(c[1]+2).toFixed(0)}" r="4"/>`+
            `<circle class="pin part" cx="${(c[0]-2).toFixed(0)}" cy="${(c[1]+14).toFixed(0)}" r="4"/>\n`;
  }
});
const pathBytes = Buffer.byteLength(paths+pins, 'utf8');
const mapSVG = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Austria course map">\n${paths}${pins}${labels}</svg>`;

const css = `
  [data-theme=dark]{--bg:#16171d;--panel:#191b22;--border:#2c2f3b;--text:#e6e6ea;--muted:#9a9cab;--faint:#595c6b;--accent:#8a8bf0;--accent-fg:#0f0f26;
    --sea:#0e0f16;--sea2:#070810;--coast:#5a627a;--done:#2c4a5e;--done-edge:#7fb0d0;--next:#30333f;--next-edge:#7f88a6;--fog:#262935;--pin-done:#5bc08a;--pin-part:#d9b45f;}
  [data-theme=light]{--bg:#efe9db;--panel:#f7f2e6;--border:#e0d8c8;--text:#2a2720;--muted:#6f6a5c;--faint:#a8a295;--accent:#4f4fc4;--accent-fg:#fff;
    --sea:#d8cdb2;--sea2:#cec2a4;--coast:#a89a72;--done:#bcd0a2;--done-edge:#5f7d40;--next:#e3dbc7;--next-edge:#9aa06e;--fog:#ddd4c0;--pin-done:#2f9e63;--pin-part:#b08828;}
  *{margin:0;box-sizing:border-box;} body{background:var(--bg);color:var(--text);font-family:Inter,system-ui,sans-serif;padding:22px;transition:.3s;}
  .prov{stroke-width:1.6;stroke-linejoin:round;transition:fill .3s;}
  .prov.done{fill:var(--done);stroke:var(--done-edge);stroke-width:2.2;}
  .prov.next{fill:var(--next);stroke:var(--next-edge);}
  .prov.fog{fill:var(--fog);stroke:var(--coast);}
  .pl{font-family:'Source Serif 4',Georgia,serif;font-size:12px;font-weight:600;text-anchor:middle;paint-order:stroke;stroke:var(--sea);stroke-width:2.5px;pointer-events:none;}
  .pl.done,.pl.next{fill:var(--text);} .pl.fog{fill:var(--faint);font-style:italic;font-size:11px;}
  .pin{stroke:var(--panel);stroke-width:1.2;} .pin.done{fill:var(--pin-done);} .pin.part{fill:var(--pin-part);}
  .frame{max-width:760px;margin:0 auto;background:var(--panel);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 12px 50px rgba(0,0,0,.35);}
  .bar{display:flex;align-items:center;gap:14px;padding:14px 20px;border-bottom:1px solid var(--border);}
  .bar h2{font-family:'Source Serif 4',serif;font-size:18px;font-weight:600;}
  .bar .tag{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:.05em;}
  .tgl{margin-left:auto;display:flex;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:18px;padding:3px;}
  .tgl button{border:none;background:transparent;color:var(--muted);font-size:11px;padding:4px 11px;border-radius:14px;cursor:pointer;}
  .tgl button.sel{background:var(--accent);color:var(--accent-fg);font-weight:600;}
  .mapwrap{background:radial-gradient(130% 100% at 50% 0%, var(--sea) 0%, var(--sea2) 100%);padding:14px;}
  svg{display:block;width:100%;height:auto;max-height:480px;margin:0 auto;}
  .cap{max-width:760px;margin:14px auto 0;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--faint);text-align:center;line-height:1.6;}
`;

const html = `<!doctype html><html data-theme="dark"><head><meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600&family=JetBrains+Mono:wght@500&family=Inter:wght@500;600&display=swap" rel="stylesheet"/>
<style>${css}</style></head><body>
<div class="frame">
  <div class="bar"><span class="tag">real provinces · austria</span><h2>C# Basics, Austria (restored)</h2>
    <div class="tgl"><button class="sel" onclick="document.documentElement.dataset.theme='dark';s(this)">Dark</button><button onclick="document.documentElement.dataset.theme='light';s(this)">Light</button></div>
  </div>
  <div class="mapwrap">${mapSVG}</div>
</div>
<div class="cap">the original Austria stand-in · Oberösterreich (The Foundations) lit · ~${(pathBytes/1024).toFixed(1)} KB inline SVG, zero JS</div>
<script>function s(b){b.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');}</script>
</body></html>`;

fs.writeFileSync('../design/mockups/course-map.html', html);
console.log('C# Basics course map (Austria) ->', (pathBytes/1024).toFixed(1), 'KB -> design/mockups/course-map.html');
