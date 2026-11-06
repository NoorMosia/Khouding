# Problem 01, A sum method (language-independent design)

**Sub-skill:** array parameter, value returned.
**Difficulty:** 1

## Statement (student-facing)
Write a method `static int Sum(int[] a)` that returns the total of the array's elements. In `Main`, read a
count `n`, then `n` values into an array, and print `Sum(array)`.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** one line, the sum.

## Why it resists a trivial answer
The sum depends on the values. Cases vary them incl. length 0 (sum 0) and negatives.

## Note
The method takes `int[]` and returns `int`. Empty array sums to 0.
