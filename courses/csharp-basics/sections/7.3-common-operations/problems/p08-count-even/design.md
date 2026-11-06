# Problem 08, Count the evens (language-independent design)

**Sub-skill:** count with a modulus condition.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print how many elements are even.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** one line, the count of even elements.

## Why it resists a trivial answer
The count depends on the values. Cases cover none/some even, zero (even), negatives (even by the `% 2` test),
and length 0.

## Note
Even means `x % 2 == 0`. This holds for 0 and for negative even numbers.
