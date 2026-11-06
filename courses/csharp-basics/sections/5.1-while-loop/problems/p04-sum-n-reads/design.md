# Problem 04, Sum n reads (language-independent design)

**Sub-skill:** the count pattern, read a count then read that many values.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `c`. Then read `c` more whole numbers, one per
line. Print their sum. If `c` is 0, print `0` (no values are read).

## I/O contract
- **Input:** the first line is the count `c`; then `c` lines, each a whole number.
- **Output:** the prompt, then the sum on one line.

## Why it resists a trivial answer
The number of reads depends on `c`. Cases vary `c` including `c = 0` (zero iterations) and a mix of negatives,
so a program that reads a fixed number of values or hardcodes a sum fails.
