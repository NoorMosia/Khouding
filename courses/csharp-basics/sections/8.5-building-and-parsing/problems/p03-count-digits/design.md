# Problem 03, Count digits (language-independent design)

**Sub-skill:** `char.IsDigit`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print how many digit characters (0-9) it contains.

## I/O contract
- **Input:** one line.
- **Output:** one line, the digit count.

## Why it resists a trivial answer
Cases vary: mixed, all-digit, no-digit, empty.

## Note
`char.IsDigit(c)` is true for `'0'` through `'9'`. Empty string gives 0.
