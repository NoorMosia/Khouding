# Problem 06, Return a range (language-independent design)

**Sub-skill:** build and return an array.
**Difficulty:** 2

## Statement (student-facing)
Write a method `static int[] Range(int n)` that returns an array holding `1, 2, ..., n`. In `Main`, read `n`,
call `Range`, and print the returned array, one element per line.

## I/O contract
- **Input:** one line, `n` (n >= 0).
- **Output:** the values `1..n`, each on its own line (nothing if n is 0).

## Why it resists a trivial answer
The output length and values depend on `n`. Cases vary `n` incl. 0 (empty) and 1.

## Note
Return type is `int[]`. `Range(0)` returns an empty array, so nothing prints.
