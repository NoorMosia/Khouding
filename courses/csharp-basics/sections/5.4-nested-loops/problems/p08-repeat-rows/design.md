# Problem 08, Repeat rows (language-independent design)

**Sub-skill:** `Write` versus `WriteLine` with a separator and a growing row.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a height:` on its own line and read a whole number `n` (1 or more). For each row `i` from 1 to
`n`, print the number `i` repeated `i` times, separated by single spaces, with no trailing space. End each row
with a newline.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n` rows; row `i` has `i` copies of `i`.

## Why it resists a trivial answer
Row length grows with the row and a trailing space would fail the match. Cases include `n = 1` (a single
value, no trailing space), so the inner bound (`i`) and the separator-before-each-but-the-first are both
required.

## Note
Inner loop runs `1` to `row`, printing the row number each time. Single space before each value except the
first; `WriteLine` ends the row.
