# Problem 04, Inverted triangle (language-independent design)

**Sub-skill:** an outer-dependent inner bound that shrinks each row.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a height:` on its own line and read a whole number `n` (1 or more). Print an inverted triangle
of stars: the first row has `n` stars, the next `n - 1`, and so on down to 1 star on the last row. No spaces
between stars.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n` rows, the first with `n` stars shrinking to 1.

## Why it resists a trivial answer
Each row is shorter than the last, so the inner count depends on the row. Cases vary `n` including `n = 1`, so
a fixed or increasing shape fails.

## Note
One clean way: let the outer counter run from `n` down to 1, and the inner loop print that many stars.
