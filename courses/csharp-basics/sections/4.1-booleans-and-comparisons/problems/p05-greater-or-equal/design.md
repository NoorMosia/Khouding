# Problem 05, Greater or equal (language-independent design)

**Sub-skill:** `>=` includes the boundary.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print whether `a >= b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `True` or `False`.

## Why it resists a trivial answer
The equal case is `True` for `>=` (unlike `>`), so a student who used `>` fails it. Cases include greater,
equal, and less, pinning down the boundary behaviour.
