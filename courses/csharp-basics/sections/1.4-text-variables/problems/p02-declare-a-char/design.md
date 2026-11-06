# Problem 02, Declare a char (language-independent design)

**Sub-skill:** declare and initialise a `char` from input, then print it.
**Difficulty:** 1

## Statement (student-facing)
Read a single character, store it in a well-named `char`, and print it on its own line.

## I/O contract
- **Input:** one line, exactly one character.
- **Output:** that character.

## Why it resists a trivial answer
Varied single characters (letter, digit, punctuation) mean a printed literal cannot pass. The value must be
read into a `char` and printed.
