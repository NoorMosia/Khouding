# Problem 05, Count evens (language-independent design)

**Sub-skill:** `continue` while counting the values that survive the skip.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line. Count how many are even, using `continue` to skip the odd ones. Print the count.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the count of evens on one line.

## Why it resists a trivial answer
Cases cover none skipped (all even), some, all skipped (all odd, count `0`), and a `0` (which is even), so the
skip condition and the counter must both be right.

## Note
Even means `value % 2 == 0` (true for `0` as well). `continue` past the odds, count the rest.
