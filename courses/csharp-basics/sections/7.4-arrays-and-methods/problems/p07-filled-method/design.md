# Problem 07, Return a filled array (language-independent design)

**Sub-skill:** create, fill, and return an array (array + scalar params).
**Difficulty:** 2

## Statement (student-facing)
Write a method `static int[] Filled(int n, int v)` that returns an `n`-element array with every slot set to
`v`. In `Main`, read `n` then `v`, call `Filled`, and print the returned array, one element per line.

## I/O contract
- **Input:** two lines, `n` (n >= 0) then `v`.
- **Output:** `v` printed `n` times, each on its own line (nothing if n is 0).

## Why it resists a trivial answer
Output length is `n` and the value is `v`. Cases vary both, incl. n = 0 and a negative `v`.

## Note
Return type `int[]`. `Filled(0, v)` returns an empty array.
