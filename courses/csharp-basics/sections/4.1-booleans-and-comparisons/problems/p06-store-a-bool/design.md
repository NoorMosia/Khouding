# Problem 06, Store a bool (language-independent design)

**Sub-skill:** store a comparison result in a `bool` variable, then use it.
**Difficulty:** 2

## Statement (student-facing)
Read a whole number `n`. Store whether it is positive in a `bool` called `isPositive` (`n > 0`), then print
`isPositive`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The comparison is stored, not printed inline, which is the named-condition pattern used in later sections. The
zero case is `False` (`>` is strict), ruling out a student who used `>=`.
