import fs from 'fs';
const url = 'https://raw.githubusercontent.com/ginseng666/GeoJSON-TopoJSON-Austria/master/2021/simplified-95/laender_95_geo.json';
const res = await fetch(url);
if(!res.ok){ console.error('HTTP', res.status); process.exit(1); }
const buf = Buffer.from(await res.arrayBuffer());
fs.writeFileSync('austria-states.json', buf);
const j = JSON.parse(buf.toString('utf8'));
console.log('OK bytes=', buf.length, 'features=', j.features.length, '->', j.features.map(f=>f.properties.name).join(', '));
