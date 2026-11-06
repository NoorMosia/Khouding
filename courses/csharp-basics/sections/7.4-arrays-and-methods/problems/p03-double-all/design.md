# Problem 03, Double every element (language-independent design)

**Sub-skill:** the reference observable (a void method mutates the caller's array).
**Difficulty:** 2

## Statement (student-facing)
Write a method `static void DoubleAll(int[] a)` that doubles every element in place. In `Main`, read a count
`n`, then `n` values, call `DoubleAll`, then print the array (now changed), one element per line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** each doubled element, one per line.

## Why it resists a trivial answer
The output is the doubled input. Cases vary values and length incl. 0 and 1. The point: the method mutates the
shared array and `Main` sees it.

## Note
`DoubleAll` returns nothing; it writes `a[i] = a[i] * 2`. Writing elements needs the indexed `for`.
