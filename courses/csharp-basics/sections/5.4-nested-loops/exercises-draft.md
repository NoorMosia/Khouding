# Exercises draft, 5.4 Nested loops

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A loop inside a loop: an outer pass that each time runs a full inner loop.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section (distinct skill: reasoning about two dimensions).

## Scope (READ FIRST)
- **IN:** an outer loop whose body contains another loop; the inner loop runs fully on every outer pass (an
  `a` by `b` nest = `a*b` inner iterations); rows and columns as the mental model (outer = rows, inner =
  columns); the inner counter resets each outer pass; `Write` vs `WriteLine` to stay on a row vs end it (a
  callback to 1.2). Fixed-character grids, triangles, multiplication tables, numbered grids. **Kept to 2
  levels.**
- **OUT:** `break`/`continue` (5.5); 3+ levels of nesting (readability lesson, not a drill). No methods,
  no arrays.

## Grading approach
- `stdout-match`, input via stdin. **Cases vary BOTH bounds** incl. a `1`-by-k and k-by-`1` edge (and, where
  the shape allows, a zero that prints nothing). Strict output match makes `Write`/`WriteLine` and row
  structure the lesson. Oracle CLI generates expecteds. Solutions always terminate.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print an n-by-m block of a fixed character (rows of m, n rows) | basic nest | ●● |
| p02 | print n rows, each the numbers 1..m | inner prints a sequence | ●● |
| p03 | right triangle: row i has i stars (inner bound depends on outer) | outer-dependent inner | ●● |
| p04 | inverted triangle: row i has (n - i + 1) stars | outer-dependent inner (down) | ●● |
| p05 | multiplication table n-by-m (products) | grid of computed values | ●●● |
| p06 | numbered grid: print row,col pairs or a running cell number | two counters | ●●● |
| p07 | sum over a grid (total of all i*j, or count cells) | accumulate across a nest | ●●● |
| p08 | rows of increasing length with a separator (aligned-ish) | Write vs WriteLine | ●● |
| p09 | a square border / hollow pattern (edge vs interior with an inner if) | nest + condition | ●●● |
| p10 | read n and m, build the shape to spec | read both bounds | ●● |
| p11 | fix a bug: inner counter not reset, or wrong Write/WriteLine (rows merge) | debug: reset / row end | ●●● |
| p12 | model a scenario: a worded 2D pattern/table | integrative capstone | ●●● |

**Escalation:** p01-p02 the rectangular nest; p03-p04 outer-dependent inner bounds (triangles); p05-p07
tables / numbered grids / accumulate-across; p08-p09 row structure + an inner condition; p10 read both bounds;
p11 the classic nest bug; p12 capstone.

## Per-problem intent (bones)
- **p01** outer 1..n (rows), inner 1..m (`Write` the char), `WriteLine` after each row. Edges: 1-by-k, k-by-1.
- **p02** each row prints `1 2 ... m` then a newline.
- **p03** row i: inner runs 1..i; a staircase of stars.
- **p04** row i: inner runs n..i (or n-i+1 count); the inverted staircase.
- **p05** outer rows a, inner cols b, print `i*j` per cell, aligned with a separator (decide spacing; strict).
- **p06** print each cell's coordinates or a 1..a*b running number across the grid.
- **p07** accumulate a total over all cells (e.g. sum of i*j) and print it once after the nest.
- **p08** row i prints i copies of a token separated by a space; `WriteLine` ends the row.
- **p09** border/hollow: inner `if` chooses edge char vs space/interior; needs Ch.4 condition inside the nest.
- **p10** read n and m, produce the specified block. Vary both; include a 1-row and 1-col case.
- **p11** starter forgets the inner counter reset (so rows shrink/grow wrongly) OR uses `WriteLine` mid-row /
  `Write` at the row end (rows merge or split). Fix to the correct structure.
- **p12** capstone: a worded 2D table or pattern.

## Notes
- **Vary BOTH bounds** across cases incl. 1-by-k and k-by-1 (Ch.5 anti-hardcoding, 2D flavor). Where the shape
  allows zero rows/cols, include a zero case that prints nothing.
- **Exact output is the lesson:** trailing spaces and row ends are significant (strict match). Decide and fix
  the spacing convention per problem (e.g. no trailing space, single space between cells) and state it.
- **Never commit an input that loops forever**; solutions must always terminate.
- 2 levels max. No arrays. Country-neutral. Terse statements. Prompts on their own line.
