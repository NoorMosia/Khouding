# map-build

Reproducible generators for the **course map**. Model: **one real country per course**
(see `../UXChanges.md` #7). African countries are reserved for the community map (later), NOT courses.

## Courses -> country
- **C# Basics = AUSTRIA.** 9 Bundesländer = chapters; Oberösterreich = Chapter 1 ("The Foundations"), lit.
  - Generator: `gen-austria.mjs` · data: `austria-states.json` · output: `../design/mockups/course-map.html`
- **South Africa** is kept as an alternate-country reference (not the C# Basics map).
  - Generator: `gen-za.mjs` · data: `za-provinces.json` · output: `../design/mockups/course-map-za-reference.html`

Each future course gets its own country + a province->chapter mapping (and optionally a short real
**story per province**, see UXChanges #7a).

## How it works
Takes real province GeoJSON, projects with `d3-geo`, simplifies + rounds coordinates, and writes a
self-contained styled HTML with the map as **inline SVG** (zero JS at runtime). Provinces are colored by
progress (done / next / fog), the lit chapter shows landmark pins. Dark = night sea, light = parchment.

## Regenerate
```powershell
npm install            # once
node gen-austria.mjs   # C# Basics map (Austria) -> course-map.html
node gen-za.mjs        # SA reference map -> course-map-za-reference.html
```

## Notes
- **Austria** projects cleanly with d3 `fitExtent`.
- **South Africa**: the source GeoJSON has a winding quirk that breaks `fitExtent`/`geoBounds`, so
  `gen-za.mjs` fits the projection manually from the real coordinate bounds, and simplifies via plain
  coordinate decimation (NOT topojson-simplify, which injected a frame-rectangle artifact). Don't "fix"
  that back to fitExtent without re-checking.
- **For production** (UXChanges #2/#3/#7): compute province paths at build/ingest time into the content
  manifest and ship precomputed SVG; d3-geo + the per-course country/province->chapter mapping move there.
