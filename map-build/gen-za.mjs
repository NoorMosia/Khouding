// Generate the real South Africa province map (Western Cape lit) as a small inline SVG.
// Pipeline: full-res GeoJSON -> topology -> simplify -> projected d3 paths -> rounded.
// Outputs: (1) standalone SA course-map mockup, (2) the auth page with the real map inline.
import fs from 'fs';
import { geoMercator, geoPath } from 'd3-geo';

const raw = JSON.parse(fs.readFileSync('./za-provinces.json', 'utf8'));

// --- simplify on plain GeoJSON (avoid topojson's frame-arc artifact) ---
// Decimate each ring by keeping ~every Nth point (always keep first/last),
// drop tiny rings (islands) that would shatter into noise. Fast + robust.
function decimateRing(ring, step){
  if(ring.length <= 8) return ring;
  const out=[];
  for(let i=0;i<ring.length;i+=step) out.push(ring[i]);
  if(out[out.length-1] !== ring[ring.length-1]) out.push(ring[ring.length-1]);
  return out;
}
function ringArea(ring){ // rough lon/lat area to filter specks
  let a=0; for(let i=0,n=ring.length,j=n-1;i<n;j=i++){ a+=(ring[j][0]*ring[i][1]-ring[i][0]*ring[j][1]); }
  return Math.abs(a/2);
}
function simplifyGeom(g, step){
  const doPoly = poly => poly
    .map(ring => decimateRing(ring, step))
    .filter((ring,idx) => idx===0 || ringArea(ring) > 0.02); // keep outer ring; drop tiny islands
  if(g.type==='Polygon') return { type:'Polygon', coordinates: doPoly(g.coordinates) };
  if(g.type==='MultiPolygon'){
    const polys = g.coordinates
      .filter(poly => ringArea(poly[0]) > 0.02)   // drop tiny island-polygons entirely
      .map(doPoly);
    return { type:'MultiPolygon', coordinates: polys };
  }
  return g;
}
const simplified = {
  type:'FeatureCollection',
  features: raw.features.map(f => ({ type:'Feature', properties:f.properties, geometry: simplifyGeom(f.geometry, 45) }))
};

// --- chapter mapping (province -> chapter). Western Cape = Ch.1, lit. ---
const CH = {
  'Western Cape':  { ch:'CHAPTER 1', title:'The Foundations',     state:'done'  },
  'Eastern Cape':  { ch:'CHAPTER 2', title:'The Operator Reaches', state:'next'  },
  'Northern Cape': { ch:'CHAPTER 3', title:'The Crossroads',       state:'fog'   },
  'Nothern Cape':  { ch:'CHAPTER 3', title:'The Crossroads',       state:'fog'   }, // source spelling
  'Free State':    { ch:'CHAPTER 4', title:'Loopmoor',             state:'fog'   },
  'KwaZulu-Natal': { ch:'CHAPTER 5', title:'Method Hold',          state:'fog'   },
  'North West':    { ch:'CHAPTER 6', title:'Array Flats',          state:'fog'   },
  'Gauteng':       { ch:'CHAPTER 7', title:'String Coast',         state:'fog'   },
  'Mpumalanga':    { ch:'CHAPTER 8', title:'The Collection',       state:'fog'   },
  'Limpopo':       { ch:'EXAM',      title:'The Proving',          state:'fog'   },
};

const W=560, H=600;
// compute the true lon/lat bounds ourselves (the source winding breaks d3 fitExtent/geoBounds)
let MNX=1e9,MXX=-1e9,MNY=1e9,MXY=-1e9;
(function scan(c){ if(typeof c[0]==='number'){ if(c[0]<MNX)MNX=c[0]; if(c[0]>MXX)MXX=c[0]; if(c[1]<MNY)MNY=c[1]; if(c[1]>MXY)MXY=c[1]; } else c.forEach(scan); })(
  simplified.features.map(f=>f.geometry.coordinates)
);
const cLon=(MNX+MXX)/2, cLat=(MNY+MXY)/2;
const pad=24;
// scale so the lon/lat span fits the canvas (mercator ~linear over this small extent)
const base = geoMercator().scale(1).translate([0,0]).center([cLon,cLat]);
const p0=base([MNX,MXY]), p1=base([MXX,MNY]);        // top-left, bottom-right in unit space
const s = Math.min((W-2*pad)/Math.abs(p1[0]-p0[0]), (H-2*pad)/Math.abs(p1[1]-p0[1]));
const proj = geoMercator().scale(s).center([cLon,cLat]).translate([W/2,H/2]);
const path = geoPath(proj);

// round all numbers in a path 'd' to 1 decimal to shrink output
function roundD(d){ return d.replace(/-?\d+\.?\d*/g, n => (Math.round(parseFloat(n)*10)/10).toString()); }

// d3-geo adds an outer sphere/frame rectangle subpath to every feature; strip any
// subpath whose points are all on the viewbox frame (the big repeated rectangle).
function stripFrame(d){
  const subs = d.split('M').filter(Boolean).map(s=>'M'+s);
  const kept = subs.filter(sub=>{
    const nums = sub.match(/-?\d+\.?\d*/g)?.map(Number) || [];
    // a frame subpath: all x in {18,542}-ish and y in {38,562}-ish (the fitExtent frame)
    let onFrame=0, total=0;
    for(let i=0;i<nums.length;i+=2){
      const x=nums[i], y=nums[i+1]; total++;
      if((Math.abs(x-18)<1||Math.abs(x-542)<1) || (Math.abs(y-38)<1||Math.abs(y-562)<1)) onFrame++;
    }
    return !(total>0 && onFrame/total>0.9); // drop if almost all points sit on the frame
  });
  return kept.join('');
}

let paths='', labels='', pins='';
simplified.features.forEach(f=>{
  const nm=f.properties.ADM1_EN;
  const info=CH[nm]; if(!info) return;
  const d=stripFrame(roundD(path(f)));
  paths += `<path class="prov ${info.state}" data-nm="${nm}" data-title="${info.title}" data-ch="${info.ch}" d="${d}"/>\n`;
  // label position = average of the path's own drawn coordinates (bulletproof)
  const nums=(d.match(/-?\d+\.?\d*/g)||[]).map(Number);
  let sx=0,sy=0,cnt=0; for(let i=0;i+1<nums.length;i+=2){ sx+=nums[i]; sy+=nums[i+1]; cnt++; }
  const cx=cnt?sx/cnt:280, cy=cnt?sy/cnt:300;
  labels += `<text class="pl ${info.state}" x="${cx.toFixed(0)}" y="${cy.toFixed(0)}">${info.title}</text>\n`;
  if(info.state==='done'){
    pins += `<circle class="pin done" cx="${(cx-16).toFixed(0)}" cy="${(cy-8).toFixed(0)}" r="4"/>`+
            `<circle class="pin done" cx="${(cx+12).toFixed(0)}" cy="${(cy+2).toFixed(0)}" r="4"/>`+
            `<circle class="pin part" cx="${(cx-2).toFixed(0)}" cy="${(cy+16).toFixed(0)}" r="4"/>\n`;
  }
});

const mapSVG = (vb=`0 0 ${W} ${H}`) => `<svg viewBox="${vb}" role="img" aria-label="South Africa, course map">
${paths}${pins}${labels}</svg>`;

// report output size of just the path data
const pathBytes = Buffer.byteLength(paths+pins, 'utf8');

// ---------- (1) standalone SA map mockup ----------
const shared = `
  [data-theme=dark]{--bg:#16171d;--panel:#191b22;--border:#2c2f3b;--text:#e6e6ea;--muted:#9a9cab;--faint:#595c6b;--accent:#8a8bf0;--accent-fg:#0f0f26;
    --sea:#0e0f16;--sea2:#070810;--coast:#4a5a74;--done:#2c4a5e;--done-edge:#6aa0c2;--next:#242734;--fog:#1e2028;--pin-done:#5bc08a;--pin-part:#d9b45f;}
  [data-theme=light]{--bg:#efe9db;--panel:#f7f2e6;--border:#e0d8c8;--text:#2a2720;--muted:#6f6a5c;--faint:#a8a295;--accent:#4f4fc4;--accent-fg:#fff;
    --sea:#d8cdb2;--sea2:#cec2a4;--coast:#9aa06e;--done:#bcd0a2;--done-edge:#7f9a5a;--next:#e3dbc7;--fog:#ddd4c0;--pin-done:#2f9e63;--pin-part:#b08828;}
  .prov{stroke-width:1.6;stroke-linejoin:round;transition:fill .3s;}
  .prov.done{fill:var(--done);stroke:var(--done-edge);stroke-width:2;}
  .prov.next{fill:var(--next);stroke:var(--coast);}
  .prov.fog{fill:var(--fog);stroke:var(--coast);opacity:1;}
  .pl{font-family:'Source Serif 4',Georgia,serif;font-size:11px;font-weight:600;text-anchor:middle;paint-order:stroke;stroke:var(--sea);stroke-width:2.5px;pointer-events:none;}
  .pl.done{fill:var(--text);} .pl.next{fill:var(--text);} .pl.fog{fill:var(--faint);font-style:italic;font-size:10px;}
  .pin{stroke:var(--panel);stroke-width:1.2;} .pin.done{fill:var(--pin-done);} .pin.part{fill:var(--pin-part);}
`;

fs.writeFileSync('../design/mockups/course-map-za-reference.html', `<!doctype html><html data-theme="dark"><head><meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600&family=JetBrains+Mono:wght@500&family=Inter:wght@500;600&display=swap" rel="stylesheet"/>
<style>
  *{margin:0;box-sizing:border-box;} body{background:var(--bg);color:var(--text);font-family:Inter,system-ui,sans-serif;padding:22px;transition:.3s;}
  ${shared}
  .frame{max-width:720px;margin:0 auto;background:var(--panel);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 12px 50px rgba(0,0,0,.35);}
  .bar{display:flex;align-items:center;gap:14px;padding:14px 20px;border-bottom:1px solid var(--border);}
  .bar h2{font-family:'Source Serif 4',serif;font-size:18px;font-weight:600;}
  .bar .tag{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:.05em;}
  .tgl{margin-left:auto;display:flex;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:18px;padding:3px;}
  .tgl button{border:none;background:transparent;color:var(--muted);font-size:11px;padding:4px 11px;border-radius:14px;cursor:pointer;}
  .tgl button.sel{background:var(--accent);color:var(--accent-fg);font-weight:600;}
  .mapwrap{background:radial-gradient(130% 100% at 50% 0%, var(--sea) 0%, var(--sea2) 100%);padding:10px;}
  svg{display:block;width:100%;height:auto;max-height:600px;margin:0 auto;}
  .cap{max-width:720px;margin:14px auto 0;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--faint);text-align:center;line-height:1.6;}
</style></head><body>
<div class="frame">
  <div class="bar"><span class="tag">real provinces</span><h2>C# Basics, South Africa</h2>
    <div class="tgl"><button class="sel" onclick="document.documentElement.dataset.theme='dark';s(this)">Dark</button><button onclick="document.documentElement.dataset.theme='light';s(this)">Light</button></div>
  </div>
  <div class="mapwrap">${mapSVG()}</div>
</div>
<div class="cap">real South African provinces · Western Cape (The Foundations) is lit · the journey heads north to Limpopo<br>shipped as inline SVG, ~${(pathBytes/1024).toFixed(1)} KB of path data, zero JS</div>
<script>function s(b){b.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');}</script>
</body></html>`);

console.log('SA reference map; path+pin bytes =', pathBytes, '(~'+(pathBytes/1024).toFixed(1)+' KB) -> design/mockups/course-map-za-reference.html');
