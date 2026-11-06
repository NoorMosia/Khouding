# Problem 07, Same value (language-independent design)

**Sub-skill:** an equality guard over two read values.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). If they are equal, print `same`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `same` only when `a == b`.

## Why it resists a trivial answer
Equal cases run, not-equal (both directions) skip. The `==` comparison and the run/skip split are both tested.
