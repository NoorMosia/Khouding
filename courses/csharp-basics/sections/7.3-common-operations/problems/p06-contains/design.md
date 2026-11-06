# Problem 06, Contains (language-independent design)

**Sub-skill:** does any element equal the target.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array, then a target. Print `True` if any element equals the
target, otherwise `False`.

## I/O contract
- **Input:** first line `n`, then `n` lines of values, then one line, the target.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on the values and the target. Cases cover present, absent, and length 0 (always absent).

## Note
A `bool` prints as `True` or `False` (capitalized). Start `found = false` and set it true on a match.
