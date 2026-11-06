# Problem 09, Return a new doubled array (language-independent design)

**Sub-skill:** return a NEW array; the caller's original is unchanged (contrast with p03 in-place).
**Difficulty:** 3

## Statement (student-facing)
Write a method `static int[] Doubled(int[] a)` that returns a new array where each element is twice the
corresponding element of `a`, without changing `a`. In `Main`, read a count `n`, then `n` values. Print the
returned (doubled) array, then a line with exactly `---`, then the original array (which must be unchanged).

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the doubled values each on a line, then `---`, then the original values each on a line.

## Why it resists a trivial answer
The two blocks must differ: doubled, then original. Cases vary values and length. If the method mutated in
place instead of building a new array, the second block would be wrong.

## Note
Build a separate `new int[a.Length]`; do not write into `a`. This is the counterpoint to the in-place
`DoubleAll`.
