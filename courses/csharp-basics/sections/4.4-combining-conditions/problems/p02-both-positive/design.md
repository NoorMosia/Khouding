# Problem 02, Both positive (language-independent design)

**Sub-skill:** `&&` with two read values.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter two numbers:` on its own line, then read two whole numbers, one per line. Print `True` if both
are greater than 0, otherwise `False`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then `True` or `False` (print the `bool` directly).

## Why it resists a trivial answer
Cases cover all four true/false combinations of the two comparisons plus a zero edge, so only a real
`a > 0 && b > 0` passes. A fixed literal fails on at least one case.
