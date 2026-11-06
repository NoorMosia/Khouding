# Problem 04, Not positive (language-independent design)

**Sub-skill:** `!` negating a comparison.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read one whole number. Print whether it is NOT positive, that is,
print the value of `!(n > 0)`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The zero edge is `True` (zero is not positive), so the cases straddle the boundary at 0. A student who writes
`n < 0` instead of `!(n > 0)` gets the zero case wrong.
