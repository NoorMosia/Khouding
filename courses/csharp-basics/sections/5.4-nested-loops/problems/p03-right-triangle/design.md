# Problem 03, Right triangle (language-independent design)

**Sub-skill:** an inner bound that depends on the outer counter.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a height:` on its own line and read a whole number `n` (1 or more). Print a right triangle of
stars: row `i` has `i` stars, for `i` from 1 to `n`. No spaces between stars.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n` rows, row `i` holding `i` stars.

## Why it resists a trivial answer
The inner loop's bound is the outer counter, so each row is a different length. Cases vary `n` including
`n = 1` (a single star), so a fixed-width block fails.

## Note
Inner loop runs `1` to `row`. Use `Write` for each star, `WriteLine` to end each row.
