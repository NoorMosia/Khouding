// Two share mockups (for satisfaction):
//  1) milestone share , half-lit Austria, "I unlocked Graz", dark, social format
//  2) completion cert  , full-lit Austria + flag + name, parchment, printable/frameable
import fs from 'fs';
import { geoMercator, geoPath } from 'd3-geo';

const geo = JSON.parse(fs.readFileSync('./austria-states.json', 'utf8'));

// chapter titles per state (same world as the course map)
const TITLE = {
  'Oberösterreich':'The Foundations','Niederösterreich':'The Operator Reaches','Steiermark':'The Crossroads',
  'Tirol':'Loopmoor','Kärnten':'Method Hold','Salzburg':'Array Flats','Burgenland':'String Coast',
  'Vorarlberg':'The Collection','Wien':'The Proving'
};
// half-lit progress state (milestone): first few done/part, rest fog
const HALF = {
  'Oberösterreich':'done','Niederösterreich':'done','Steiermark':'part','Salzburg':'part',
  'Tirol':'fog','Kärnten':'fog','Burgenland':'fog','Vorarlberg':'fog','Wien':'fog'
};

const W=760, H=500;
const proj = geoMercator().fitExtent([[26,26],[W-26,H-26]], geo);
const path = geoPath(proj);
const r1 = d => d.replace(/-?\d+\.?\d*/g, n => (Math.round(parseFloat(n)*10)/10).toString());

// build province paths for a given state-resolver fn
function provinces(stateOf){
  let s='';
  geo.features.forEach(f=>{
    const nm=f.properties.name;
    s += `<path class="prov ${stateOf(nm)}" d="${r1(path(f))}"/>\n`;
  });
  return s;
}
const allLit  = provinces(()=> 'done');                 // completed puzzle
const halfLit = provinces(nm => HALF[nm] || 'fog');     // milestone

// centroid of a named province (for the milestone "unlocked" marker)
function centroidOf(name){ const f=geo.features.find(x=>x.properties.name===name); return path.centroid(f); }
const grazC = centroidOf('Steiermark'); // Graz ~ Styria

// ---------- shared parchment palette (both assets share one look) ----------
const PAPER = `--paper:#f4ece0;--paper2:#efe4d2;--ink:#2a2418;--ink-soft:#6b6150;--gold:#9a7d2e;--accent:#4f4fc4;
  --done:#c4d2a8;--done-edge:#6f8a48;--part:#e6d49a;--part-edge:#bfa052;--fog:#e4dcc8;--fog-edge:#c7bda4;--coast:#b3a584;--frame:#d8c9ad;--pin:#2f9e63;`;

// ---------- 1. MILESTONE, Instagram card (1:1, parchment, cert style) ----------
const milestone = `<!doctype html><html><head><meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=JetBrains+Mono:wght@500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>
  :root{${PAPER}}
  *{margin:0;box-sizing:border-box;}
  body{background:#cfc6b2;display:grid;place-items:center;padding:30px;font-family:Inter,system-ui,sans-serif;}
  /* square Instagram card */
  .card{width:600px;aspect-ratio:1/1;background:radial-gradient(120% 100% at 50% 0%, var(--paper) 0%, var(--paper2) 100%);
    color:var(--ink);position:relative;box-shadow:0 26px 70px rgba(0,0,0,.35);padding:40px 40px;display:flex;flex-direction:column;align-items:center;}
  .card::before{content:'';position:absolute;inset:16px;border:1.5px solid var(--frame);border-radius:3px;pointer-events:none;}
  .logo{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:16px;display:inline-flex;align-items:center;color:var(--ink);z-index:1;}
  .logo .cur{display:inline-block;width:2px;height:14px;margin:0 1px;position:relative;top:2px;background:var(--accent);}
  .logo .cur::before,.logo .cur::after{content:'';position:absolute;left:-3px;width:7px;height:2px;background:var(--accent);}
  .logo .cur::before{top:0;}.logo .cur::after{bottom:0;}
  .ey{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);margin-top:14px;z-index:1;}
  .big{font-family:'Source Serif 4',serif;font-size:30px;font-weight:700;line-height:1.08;letter-spacing:-.01em;margin-top:6px;z-index:1;text-align:center;}
  .big em{font-style:normal;color:var(--done-edge);}
  .mapwrap{width:78%;margin:10px 0 6px;z-index:1;}
  svg{display:block;width:100%;height:auto;}
  .prov{stroke-width:1.4;stroke-linejoin:round;}
  .prov.done{fill:var(--done);stroke:var(--done-edge);stroke-width:1.8;}
  .prov.part{fill:var(--part);stroke:var(--part-edge);}
  .prov.fog{fill:var(--fog);stroke:var(--fog-edge);}
  .mk{fill:none;stroke:var(--pin);stroke-width:2.5;}
  .mkdot{fill:var(--pin);}
  .mklabel{font-family:'JetBrains Mono',monospace;font-size:12px;fill:var(--ink);font-weight:600;paint-order:stroke;stroke:var(--paper);stroke-width:3px;}
  .prog{margin-top:auto;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ink-soft);z-index:1;letter-spacing:.03em;}
</style></head><body>
  <div class="card">
    <div class="logo">khoud<span class="cur"></span>ng</div>
    <div class="ey">C# Basics · milestone</div>
    <div class="big">I unlocked <em>Graz</em>.</div>
    <div class="mapwrap">
      <svg viewBox="0 0 ${W} ${H}">
        ${halfLit}
        <circle class="mk" cx="${grazC[0].toFixed(0)}" cy="${grazC[1].toFixed(0)}" r="16"/>
        <circle class="mkdot" cx="${grazC[0].toFixed(0)}" cy="${grazC[1].toFixed(0)}" r="4"/>
        <text class="mklabel" x="${(grazC[0]+22).toFixed(0)}" y="${(grazC[1]+4).toFixed(0)}">Graz</text>
      </svg>
    </div>
    <div class="prog">4 of 9 regions lit · khouding.com</div>
  </div>
</body></html>`;
fs.writeFileSync('../design/mockups/cert-milestone.html', milestone);

// ---------- 2. COMPLETION CERTIFICATE (map only; no flag/name = no spoiler) ----------
const cert = `<!doctype html><html><head><meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=JetBrains+Mono:wght@500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>
  :root{${PAPER}}
  *{margin:0;box-sizing:border-box;}
  body{background:#cfc6b2;display:grid;place-items:center;padding:30px;font-family:Inter,system-ui,sans-serif;}
  /* A-series-ish portrait sheet, frameable */
  .sheet{width:620px;aspect-ratio:1/1.414;background:
      radial-gradient(120% 80% at 50% 0%, var(--paper) 0%, var(--paper2) 100%);
    color:var(--ink);position:relative;box-shadow:0 30px 80px rgba(0,0,0,.35);padding:52px 46px;display:flex;flex-direction:column;align-items:center;}
  /* inner double frame (the "frame" around the puzzle) */
  .sheet::before{content:'';position:absolute;inset:18px;border:1.5px solid var(--frame);border-radius:3px;pointer-events:none;}
  .sheet::after{content:'';position:absolute;inset:23px;border:1px solid var(--frame);opacity:.6;pointer-events:none;}
  .logo{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:16px;display:inline-flex;align-items:center;color:var(--ink);z-index:1;}
  .logo .cur{display:inline-block;width:2px;height:14px;margin:0 1px;position:relative;top:2px;background:var(--accent);}
  .logo .cur::before,.logo .cur::after{content:'';position:absolute;left:-3px;width:7px;height:2px;background:var(--accent);}
  .logo .cur::before{top:0;}.logo .cur::after{bottom:0;}
  .eyebrow{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);margin-top:30px;z-index:1;}
  h1{font-family:'Source Serif 4',serif;font-size:38px;font-weight:700;letter-spacing:-.01em;margin-top:8px;text-align:center;z-index:1;}
  .rule{width:54px;height:2px;background:var(--gold);margin:16px 0 4px;z-index:1;}
  /* map is the hero, centered */
  .mapwrap{margin:16px 0;width:78%;z-index:1;}
  svg.map{display:block;width:100%;height:auto;}
  .prov{fill:var(--done);stroke:var(--done-edge);stroke-width:1.4;stroke-linejoin:round;}
  .byline{font-family:'Source Serif 4',serif;font-size:17px;z-index:1;margin-top:6px;color:var(--ink);}
  .byline b{font-weight:600;}
  .sig{margin-top:auto;display:flex;align-items:flex-end;justify-content:space-between;width:100%;z-index:1;padding-top:22px;}
  .sig .line{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-soft);}
  .sig .seal{width:58px;height:58px;border-radius:50%;border:2px solid var(--gold);display:grid;place-items:center;color:var(--gold);font-family:'Source Serif 4',serif;font-weight:700;font-size:11px;text-align:center;line-height:1.1;}
  .note{max-width:620px;margin:16px auto 0;font-family:'JetBrains Mono',monospace;font-size:11px;color:#6b6150;text-align:center;}
</style></head><body>
  <div class="sheet">
    <div class="logo">khoud<span class="cur"></span>ng</div>
    <div class="eyebrow">Course complete</div>
    <h1>C# Basics</h1>
    <div class="rule"></div>
    <div class="mapwrap"><svg class="map" viewBox="0 0 ${W} ${H}">${allLit}</svg></div>
    <div class="byline">completed by <b>Noortje</b></div>
    <div class="sig">
      <div class="line">khouding.com</div>
      <div class="seal">C#<br/>BASICS</div>
      <div class="line" style="text-align:right">a milestone,<br/>not a credential</div>
    </div>
  </div>
  <div class="note">no flag / country name, keeps the composition clean AND avoids spoiling the reveal · printable parchment · map = the completed puzzle, sheet = the frame</div>
</body></html>`;
fs.writeFileSync('../design/mockups/cert-complete.html', cert);

console.log('wrote design/mockups/cert-milestone.html + cert-complete.html');
