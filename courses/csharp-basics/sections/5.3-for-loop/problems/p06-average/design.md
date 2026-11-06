# Problem 06, Average of n values (language-independent design)

**Sub-skill:** the count pattern feeding an integer average.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n` (always 1 or more). Then read `n` more
whole numbers, one per line. Print their average as a whole number (the sum divided by `n`, using integer
division).

## I/O contract
- **Input:** the first line is the count `n` (at least 1); then `n` lines, each a whole number.
- **Output:** the prompt, then the integer average on one line.

## Why it resists a trivial answer
The average depends on both the values and `n`, and integer division truncates. Cases include a non-dividing
sum (so truncation shows) and negatives, so a correct accumulate-then-divide is required.

## Note
`n` is always at least 1, so there is no divide by zero. Integer division truncates toward zero (Chapter 3):
`15 / 2` is `7`.
