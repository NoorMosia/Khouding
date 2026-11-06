# Problem 01, Integer division (language-independent design)

**Sub-skill:** `int / int` truncates the fractional part.
**Difficulty:** 1

## Statement (student-facing)
Print the value of `7 / 2`.

## I/O contract
- **Input:** none.
- **Output:** the value on its own line.

## Why it resists a trivial answer
The point is predicting the truncation: `7 / 2` is `3`, not `3.5`, because both operands are whole numbers.
The oracle generates the expected, so a student who assumes `3.5` fails.
