# Problem 05, Only the positives (language-independent design)

**Sub-skill:** the filter loop shape (guard the print with an `if`).
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print only the elements greater than 0, each on its own
line, in order.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the elements `> 0`, in order, each on its own line (nothing if none).

## Why it resists a trivial answer
Which elements print depends on the values. Cases cover none, some, and all passing, plus length 0.

## Note
Zero is not greater than 0, so a `0` element does not print. Nothing prints when none pass.
