# Problem 03, Equal (language-independent design)

**Sub-skill:** `==` (compare, not assign).
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print whether `a == b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `True` or `False`.

## Why it resists a trivial answer
Equal and not-equal (both directions) cases force a real comparison. This is the first problem that invites
the `=`-for-`==` mistake; the correct `==` is required.
