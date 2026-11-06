# Problem 06, Skip a marker value (language-independent design)

**Sub-skill:** `continue` on a marker value without stopping the loop.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line. Sum them, but skip any value equal to `-1` (a marker) using `continue`. The `-1` does not stop the loop:
keep reading all `n` values. Print the sum.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the sum (markers excluded) on one line.

## Why it resists a trivial answer
Unlike a sentinel, the `-1` marker does not end the loop; the loop must run all `n` passes and only skip the
markers. Cases include markers in the middle (more values follow), all markers (`0`), and a `0` that is kept,
so `continue` (not `break`) and the right skip test are required.
