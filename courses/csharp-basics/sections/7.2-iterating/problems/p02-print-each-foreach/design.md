# Problem 02, Print each with foreach (language-independent design)

**Sub-skill:** the `foreach` read-only walk.
**Difficulty:** 1

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print each element on its own line, in order, using a
`foreach` loop.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the `n` values, each on its own line.

## Why it resists a trivial answer
Count and values vary, including length 0 and 1, so fixed output fails.

## Note
Same output as the indexed walk; `foreach` fits because the position is not needed.
