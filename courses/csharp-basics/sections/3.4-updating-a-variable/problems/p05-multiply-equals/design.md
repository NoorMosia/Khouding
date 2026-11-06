# Problem 05, Multiply-equals (language-independent design)

**Sub-skill:** `*=` multiplies in place.
**Difficulty:** 2

## Statement (student-facing)
Read a value and a factor (each prompted on its own line). Multiply with `*=` and print the result.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the result on its own line.

## Why it resists a trivial answer
The times-zero and times-one cases rule out a copied literal, and both inputs vary, so `*=` must use the read
factor.
