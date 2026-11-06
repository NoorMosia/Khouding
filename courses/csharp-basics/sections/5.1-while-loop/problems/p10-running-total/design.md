# Problem 10, Running total (language-independent design)

**Sub-skill:** output inside the loop, print the accumulator after each pass.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `c`. Then read `c` more whole numbers, one per
line. After reading each one, print the running total so far, one value per line. If `c` is 0, print nothing
after the prompt.

## I/O contract
- **Input:** the first line is the count `c`; then `c` lines, each a whole number.
- **Output:** the prompt, then `c` lines, each the running total after that read.

## Why it resists a trivial answer
The output is one line per read, each the cumulative sum up to that point. Cases vary `c` (including `c = 0`
with no total lines) and include negatives that lower the running total, so the print-inside-the-loop and the
accumulator must both be correct.
