# Problem 01, Declare a string (language-independent design)

**Sub-skill:** declare and initialise a `string` from input, then print it.
**Difficulty:** 1

## Statement (student-facing)
Read a word, store it in a well-named `string`, and print it on its own line.

## I/O contract
- **Input:** one line, a word.
- **Output:** that word.

## Why it resists a trivial answer
Varied inputs (including a single-letter word and a longer one) mean a printed literal cannot pass. The
program must read the input into a `string` and print the variable.
