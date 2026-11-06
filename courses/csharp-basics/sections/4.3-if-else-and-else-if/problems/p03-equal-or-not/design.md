# Problem 03, Equal or not (language-independent design)

**Sub-skill:** two-way `if`/`else` on `==`.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). If they are equal, print `equal`;
otherwise print `different`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `equal` or `different`.

## Why it resists a trivial answer
Equal and not-equal (both directions) cases hit both branches, so the `==` comparison and both outcomes are
required.
