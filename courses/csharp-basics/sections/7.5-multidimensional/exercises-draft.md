# Exercises draft, 7.5 Multidimensional arrays

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A rectangular 2D array: values addressed by row and column.

## Size & completion
- **11 problems**, lights at **7** (~60%). Moderate-full (2D indexing + nested iteration).

## Scope (READ FIRST)
- **IN:** `int[,] grid = new int[rows, cols];`; indexing `grid[r, c]`; `GetLength(0)` (rows) and
  `GetLength(1)` (cols); the 2D literal `{ {1,2}, {3,4} }`; nested `for` to walk rows then columns (builds on
  Ch.5.4 nested loops); reading values into a grid row by row; summing a grid / a row; printing a grid as a
  table (the 5.4 Write-vs-WriteLine row-structure habit).
- **OUT:** 3+ dimensions; jagged arrays (`int[][]`); `List<T>`; LINQ. **Rectangular only.** Element types
  simple (`int[,]`).

## Grading approach
- `stdout-match`, input via stdin. **Vary BOTH dimensions across cases incl. a 1xk and kx1 edge.** Strict
  output for table-printing problems (separator convention stated per problem, e.g. single space between
  cells, no trailing space, as in 5.4). Oracle CLI generates expecteds. Solutions stay in bounds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | make a rows x cols grid, print its two dimensions | new int[r,c] + GetLength | ●● |
| p02 | set and print one cell grid[r,c] | 2D index | ●● |
| p03 | read values row by row into a grid, echo it as a table | fill + print table | ●● |
| p04 | sum all cells of a grid | nested accumulate | ●● |
| p05 | sum a given row | row walk | ●● |
| p06 | sum a given column | column walk | ●● |
| p07 | build a multiplication grid grid[r,c] = (r+1)*(c+1), print it | computed fill | ●●● |
| p08 | count cells meeting a test (e.g. > a threshold) | nested count | ●●● |
| p09 | find the max cell in the grid | nested max (seed from [0,0]) | ●●● |
| p10 | print the grid with row and column totals (or just row totals) | combine walks | ●●● |
| p11 | fix a bug: GetLength(0)/GetLength(1) swapped (rows/cols mixed up) | debug: dimensions | ●●● |

**Escalation:** p01-p02 create and index; p03 fill+print table; p04-p06 sum whole/row/column; p07-p09
computed fill, count, max; p10 totals; p11 the rows/cols mix-up.

## Per-problem intent (bones)
- **p01** read rows, cols; `new int[rows,cols]`; print `GetLength(0)` and `GetLength(1)`.
- **p02** read rows, cols, r, c, value; set `grid[r,c] = value`; print it back.
- **p03** read rows, cols, then rows*cols values row-major; echo as a table (state spacing).
- **p04** nested loop summing every cell; print the total.
- **p05** read a row index; sum that row; print it.
- **p06** read a column index; sum that column; print it.
- **p07** fill `grid[r,c] = (r+1)*(c+1)`; print the table.
- **p08** read a threshold; count cells `> threshold`.
- **p09** seed max from `grid[0,0]`; nested compare; print the max. (rows,cols >= 1.)
- **p10** print each row followed by its total (decide exact format; strict).
- **p11** starter uses `GetLength(0)` where cols was meant (or indexes `grid[c,r]`); fix the dimension use.

## Notes
- **GetLength(0) = rows, GetLength(1) = cols** (the recurring confusion); p11 drills the fix.
- **Vary both dimensions** incl. 1xk and kx1; where a shape allows a 0 dimension and still has defined
  output, include it (otherwise state rows,cols >= 1).
- **Strict table output** (state the separator convention per problem, reuse the 5.4 no-trailing-space trick).
- 2 dimensions, rectangular only. Stay in bounds. Country-neutral. Terse statements. Prompts on their own line.
