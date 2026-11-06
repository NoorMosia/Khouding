# Problem 01, Print each with an indexed for (language-independent design)

**Sub-skill:** the basic `for (i=0; i<a.Length; i++)` walk.
**Difficulty:** 1

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print each element on its own line, in order, using an
indexed `for` loop.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the `n` values, each on its own line.

## Why it resists a trivial answer
Both the count and the values vary. Cases include length 0 (print nothing) and length 1, so a fixed number of
prints fails.

## Note
`n = 0` means the loop runs zero times and nothing prints.
