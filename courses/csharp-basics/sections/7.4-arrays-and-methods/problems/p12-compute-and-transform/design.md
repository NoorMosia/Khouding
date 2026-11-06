# Problem 12, Compute and transform (language-independent design)

**Sub-skill:** combine a compute method (value out) and a transform method (in-place) over one array.
**Difficulty:** 3

## Statement (student-facing)
Write `static int Sum(int[] a)` (returns the total) and `static void DoubleAll(int[] a)` (doubles every element
in place). In `Main`, read a count `n`, then `n` values. Print `Sum: <sum>` (the sum of the original values),
then a line `Doubled:`, then the array after doubling, one element per line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** `Sum: <sum>`, then `Doubled:`, then the doubled elements each on a line.

## Why it resists a trivial answer
The sum and the doubled values both depend on the input. Compute the sum before doubling. Cases vary values
and length incl. 0.

## Note
Call `Sum` first (on the original values), then `DoubleAll`, then print. Use the exact labels `Sum: ` and
`Doubled:`.
