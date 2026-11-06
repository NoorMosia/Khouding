# Problem 02, Number rows (language-independent design)

**Sub-skill:** an inner loop that prints a separated sequence.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Print `n` rows,
each containing the numbers `1` to `m` separated by single spaces, with no space at the end of a row.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of `1 2 ... m`.

## Why it resists a trivial answer
The row content depends on `m` and the row count on `n`, and a trailing space would fail the exact match.
Cases include `m = 1` (a lone number, no trailing space), so the separator-before-each-value-but-the-first
approach is required.

## Note
Print a single space before each number except the first in the row. End each row with `WriteLine`.
