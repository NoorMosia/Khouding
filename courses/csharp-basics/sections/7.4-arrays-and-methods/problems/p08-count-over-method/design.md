# Problem 08, Count over a threshold, as a method (language-independent design)

**Sub-skill:** array parameter plus a scalar parameter, value returned.
**Difficulty:** 2

## Statement (student-facing)
Write a method `static int CountOver(int[] a, int threshold)` that returns how many elements are strictly
greater than `threshold`. In `Main`, read a count `n`, then `n` values, then a threshold, and print
`CountOver(array, threshold)`.

## I/O contract
- **Input:** first line `n`, then `n` lines of values, then one line, the threshold.
- **Output:** one line, the count.

## Why it resists a trivial answer
The count depends on the values and the threshold. Cases cover none/some/all and length 0.

## Note
The array is shared by reference; the threshold is a copied `int`. Strictly greater (`>`).
