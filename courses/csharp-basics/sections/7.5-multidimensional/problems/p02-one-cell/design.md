# Problem 02, Set one cell (language-independent design)

**Sub-skill:** write and read a single `grid[r, c]`.
**Difficulty:** 2

## Statement (student-facing)
Read `rows`, `cols`, then a row index `r`, a column index `c`, and a value. Build a `rows` by `cols` grid, set
`grid[r, c]` to the value, and print that cell.

## I/O contract
- **Input:** five lines: `rows`, `cols`, `r`, `c`, `value`.
- **Output:** one line, `grid[r, c]`.

## Why it resists a trivial answer
The printed cell depends on the value and (implicitly) the chosen cell. Cases vary dimensions and target cell,
so fixed output fails.

## Note
Stay in bounds: `0 <= r < rows` and `0 <= c < cols` in every case.
