# Problem 05, Sum n values (language-independent design)

**Sub-skill:** the count pattern with a `for`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line. Print their sum. If `n` is 0, print `0`.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the sum on one line.

## Why it resists a trivial answer
The number of reads depends on `n`. Cases vary `n` including `n = 0` (no reads) and negatives, so a fixed
number of reads or a hardcoded sum fails.
