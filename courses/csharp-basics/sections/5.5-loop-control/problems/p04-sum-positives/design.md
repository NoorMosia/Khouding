# Problem 04, Sum positives only (language-independent design)

**Sub-skill:** `continue` to skip values that do not qualify.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line. Print the sum of only the positive ones (greater than 0), using `continue` to skip the rest.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the sum of the positives on one line.

## Why it resists a trivial answer
Cases cover none skipped (all positive), some skipped, all skipped (sum `0`), and zeros (skipped, since 0 is
not positive), so the skip condition and the accumulator must both be right.
