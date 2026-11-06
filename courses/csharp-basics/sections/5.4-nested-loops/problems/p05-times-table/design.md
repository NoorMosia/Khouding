# Problem 05, Times table (language-independent design)

**Sub-skill:** a grid of computed values.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Print a
multiplication table: row `r` (1 to `n`), column `c` (1 to `m`), each cell is `r * c`. Separate the cells in a
row by single spaces, with no space at the end of a row.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows, each the products `r*1 r*2 ... r*m`.

## Why it resists a trivial answer
Each cell is computed from both counters, and a trailing space would fail the exact match. Cases vary both
bounds including a single row and a single column, so the nest and the clean separator are both required.

## Note
Print a single space before each cell except the first in the row; end each row with `WriteLine`.
