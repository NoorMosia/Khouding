# Pool p01, Sum with while (family A, while)

**Integrates:** 5.1.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line, and print their sum using a `while` loop. If `n` is 0, print `0`.

## I/O contract
- **Input:** the count `n`, then `n` whole numbers.
- **Output:** the prompt, then the sum.

## Why it resists a trivial answer
The number of reads depends on `n`. Cases vary `n` including `n = 0` (zero iterations), so a fixed count of
reads or a hardcoded sum fails.
