# Problem 09, Every other element (language-independent design)

**Sub-skill:** step the index by 2.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print the elements at indexes 0, 2, 4, ..., each on its
own line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** the elements at even indexes, each on its own line.

## Why it resists a trivial answer
Which elements print depends on the length (even vs odd length changes the last one printed) and the values.
Cases vary both incl. length 0 and 1.

## Note
`for (int i = 0; i < a.Length; i += 2)`. Length 1 prints index 0 only; length 0 prints nothing.
