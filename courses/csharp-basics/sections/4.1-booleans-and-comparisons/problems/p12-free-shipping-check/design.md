# Problem 12, Free shipping check (language-independent design)

**Sub-skill:** integrative capstone; read two values, name and print a boundary comparison.
**Difficulty:** 3

## Statement (student-facing)
A cart qualifies for free shipping when its total reaches the threshold. Read the cart total and the
threshold (each prompted on its own line). Print whether the cart qualifies, `total >= threshold`, where
reaching the threshold exactly qualifies.

## I/O contract
- **Input:** two lines, each a whole number: cart total, then threshold.
- **Output:** the two prompts, then `True` or `False`.

## Why it resists a trivial answer
Two varying inputs and a boundary that counts (`>=`, so exactly on the threshold is `True`). The over, exact,
under, and empty-cart cases pin the comparison, and a student who used `>` fails the exact case.
