# Problem 04, Not equal (language-independent design)

**Sub-skill:** `!=` (not equal).
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print whether `a != b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `True` or `False`.

## Why it resists a trivial answer
`!=` is the complement of `==`: `True` when they differ, `False` when equal. Both outcomes appear in the
cases, so only the correct operator passes.
