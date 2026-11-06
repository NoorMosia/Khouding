# Pool p16, Sum positives (family E, loop control)

**Integrates:** 5.5.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers. Print
the sum of only the positive ones (greater than 0), using `continue` to skip the rest.

## I/O contract
- **Input:** the count `n`, then `n` whole numbers.
- **Output:** the prompt, then the sum of the positives.

## Why it resists a trivial answer
Cases cover none skipped, some, all skipped (sum `0`), and zeros (skipped), so the skip condition and the
accumulator must both be right.
