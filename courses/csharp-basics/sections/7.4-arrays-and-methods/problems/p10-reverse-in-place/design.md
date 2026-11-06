# Problem 10, Reverse in place (language-independent design)

**Sub-skill:** in-place mutation via swapping ends inward.
**Difficulty:** 3

## Statement (student-facing)
Write a method `static void Reverse(int[] a)` that reverses the array in place (do not build a new array). In
`Main`, read a count `n`, then `n` values, call `Reverse`, and print the array, one element per line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the values in reverse order, each on its own line.

## Why it resists a trivial answer
Reverse output depends on input order and length. Cases vary both incl. length 0, 1, and even/odd lengths.

## Note
Swap `a[i]` and `a[j]` with `i` from the front and `j` from the back, moving inward while `i < j`. A length-0
or length-1 array is unchanged.
