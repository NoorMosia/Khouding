# Problem 04, Reverse order (language-independent design)

**Sub-skill:** index downward from `Length - 1` to 0.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print the elements in reverse order, each on its own
line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the values in reverse, each on its own line.

## Why it resists a trivial answer
Reverse output depends on the input order and length. Cases vary both, incl. length 0 and 1.

## Note
Loop `for (int i = a.Length - 1; i >= 0; i--)`. Length 1 prints one line; length 0 prints nothing.
