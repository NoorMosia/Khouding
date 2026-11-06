# Problem 01, An array of size n (language-independent design)

**Sub-skill:** build `new int[n]` from a read size, print `a.Length`.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number `n`. Build an `int` array with `n` slots and print its length.

## I/O contract
- **Input:** one line, a whole number `n` (n >= 1).
- **Output:** one line, the array's length (equals `n`).

## Why it resists a trivial answer
The length depends on `n`. Cases vary `n`, so printing a fixed number fails.

## Note
`a.Length` equals the size passed to `new int[n]`.
