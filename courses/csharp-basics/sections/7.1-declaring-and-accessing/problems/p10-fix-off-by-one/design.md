# Problem 10, Fix the off-by-one (language-independent design)

**Sub-skill:** the last index is `Length - 1`, not `Length`.
**Difficulty:** 2

## Statement (student-facing)
The program reads three whole numbers into an array and should print the last element. It crashes instead. Fix
it so it prints the last element.

## I/O contract
- **Input:** three lines, three values.
- **Output:** one line, the last element.

## Why it resists a trivial answer
The last value depends on input. Cases vary it, so fixed output fails. The bug is `a[a.Length]` (out of
range); the fix is `a[a.Length - 1]`.

## Note
`a[a.Length]` throws `IndexOutOfRangeException` at runtime because the last valid index is `a.Length - 1`. The
committed solution stays in bounds.
