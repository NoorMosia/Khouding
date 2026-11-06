# Problem 12, Seating capstone (language-independent design)

**Sub-skill:** integrative, a nested loop building labeled cells with interpolation and clean row structure.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter rows and seats:` on its own line. Read `n` (rows) and `m` (seats per row), both 1 or more. Print
a seating chart: for each row `r` (1 to `n`) print its seats `s` (1 to `m`) as labels of the form `R{r}S{s}`
(for example `R2S3`), separated by single spaces, with no trailing space. One row of seats per line.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of seat labels `R{r}S{s}`.

## Why it resists a trivial answer
Each label is built from both counters, and the row structure plus no-trailing-space must be exact. Cases vary
both bounds including a single row and a single seat per row, so the nest, the interpolation, and the clean
separator are all exercised.

## Note
Build each label with interpolation, for example `$"R{r}S{s}"`. Single space before each seat except the
first in a row; `WriteLine` ends each row.
