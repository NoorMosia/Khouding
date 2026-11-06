# Problem 11, Fix the loop bound (language-independent design)

**Sub-skill:** `i < a.Length`, not `<=`.
**Difficulty:** 2

## Statement (student-facing)
The program reads a count `n`, then `n` values, and should print each on its own line. It crashes instead. Fix
the loop so it prints every element without going out of bounds.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the `n` values, each on its own line.

## Why it resists a trivial answer
The output depends on the input. Cases vary values and length incl. 1. The bug is `i <= a.Length`; the fix is
`i < a.Length`.

## Note
`i <= a.Length` reads `a[a.Length]` on the last pass, which throws `IndexOutOfRangeException`. The committed
solution stays in bounds.
