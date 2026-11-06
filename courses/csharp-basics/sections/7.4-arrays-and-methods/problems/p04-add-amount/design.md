# Problem 04, Add an amount to every element (language-independent design)

**Sub-skill:** mutate via reference, with an extra scalar parameter.
**Difficulty:** 2

## Statement (student-facing)
Write a method `static void AddAll(int[] a, int amount)` that adds `amount` to every element in place. In
`Main`, read a count `n`, then `n` values, then an amount, call `AddAll`, then print the changed array, one
element per line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values, then one line, the amount.
- **Output:** each element plus the amount, one per line.

## Why it resists a trivial answer
Output depends on values and amount. Cases vary both, incl. a negative amount and length 0.

## Note
The array is shared (mutation visible); the amount is a copied `int`. Writing elements needs the indexed `for`.
