# Problem 09, Product of two ints (language-independent design)

**Sub-skill:** combine two variables with `*`.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers (one per line), store each in a variable, and print their product.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** `a * b`.

## Why it resists a trivial answer
Varied cases include multiplying by zero (result 0) and a negative (sign flip). Only a program that
actually multiplies passes all of them.
