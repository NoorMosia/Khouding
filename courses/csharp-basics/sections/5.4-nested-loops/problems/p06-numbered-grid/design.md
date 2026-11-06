# Problem 06, Numbered grid (language-independent design)

**Sub-skill:** a nest with a running counter that spans the whole grid.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Fill an
`n`-by-`m` grid with the numbers `1, 2, 3, ...` increasing left to right, top to bottom. Print each row with
its cells separated by single spaces and no trailing space.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows holding the running numbers `1` to `n*m`.

## Why it resists a trivial answer
A single counter increases across both dimensions, not resetting per row, so the value in a cell depends on
its position in the whole grid. Cases vary both bounds, so a per-row reset or a fixed layout fails.

## Note
Keep one counter outside both loops and increment it for each cell. Single space before each cell except the
first in a row; `WriteLine` ends each row.
