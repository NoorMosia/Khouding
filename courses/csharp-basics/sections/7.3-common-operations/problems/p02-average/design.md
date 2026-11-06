# Problem 02, Average (language-independent design)

**Sub-skill:** `(double)sum / a.Length`.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n` (at least 1), then `n` whole numbers into an array. Print the average as a double.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the average as a double.

## Why it resists a trivial answer
The average depends on all values and the count. Cases vary both and include a fractional result, so a fixed
or integer-divided answer fails.

## Note
Cast before dividing: `(double)sum / a.Length`. Plain `sum / a.Length` would be integer division and lose the
fraction. No empty case here (n >= 1).
