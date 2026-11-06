# Problem 01, Grid dimensions (language-independent design)

**Sub-skill:** `new int[rows, cols]` and `GetLength`.
**Difficulty:** 2

## Statement (student-facing)
Read `rows`, then `cols`. Build a `rows` by `cols` grid. Print the number of rows, then the number of columns,
each on its own line.

## I/O contract
- **Input:** two lines, `rows` then `cols`.
- **Output:** two lines, `GetLength(0)` then `GetLength(1)`.

## Why it resists a trivial answer
The two numbers depend on input. Cases vary both dimensions incl. 1xk and kx1, so fixed output fails.

## Note
`GetLength(0)` is rows (the first size), `GetLength(1)` is columns.
