# Pool p12, Right triangle (family D, nested)

**Integrates:** 5.4.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a height:` on its own line and read a whole number `n` (1 or more). Print a right triangle of
`#`: row `i` has `i` hashes, for `i` from 1 to `n`. No spaces between hashes.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n` rows, row `i` with `i` hashes.

## Why it resists a trivial answer
The inner bound is the outer counter, so each row differs. Cases vary `n` including `n = 1`, so a fixed-width
block fails.
