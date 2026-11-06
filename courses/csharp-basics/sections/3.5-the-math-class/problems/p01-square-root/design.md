# Problem 01, Square root (language-independent design)

**Sub-skill:** the `Math.` call pattern, `Math.Sqrt`.
**Difficulty:** 1

## Statement (student-facing)
Read a number. Print its square root using `Math.Sqrt`.

## I/O contract
- **Input:** one line, a number.
- **Output:** the prompt, then the square root on its own line.

## Why it resists a trivial answer
The input varies and the result must come from the function call. Inputs are perfect squares so the result
prints as a clean whole number (`16` to `4`, `9` to `3`), ruling out a copied literal.
