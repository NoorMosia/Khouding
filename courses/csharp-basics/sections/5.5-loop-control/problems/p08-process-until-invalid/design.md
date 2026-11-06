# Problem 08, Process until invalid (language-independent design)

**Sub-skill:** a guard that `break`s at the first bad value.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read up to `n` more whole numbers,
one per line. Print each value while it is positive (greater than 0). At the first value that is zero or
negative, print `stopped` and stop (use `break`). If every value is positive, print no `stopped` line.

## I/O contract
- **Input:** the first line is the count `n`; then up to `n` lines, each a whole number.
- **Output:** the prompt, then the positive values echoed in order, then `stopped` if a bad value was hit.

## Why it resists a trivial answer
The loop processes valid values and stops at the first invalid one. Cases put the bad value first (nothing
echoed, then `stopped`), in the middle, and nowhere (no `stopped` line), so the guard-then-break and the
all-valid fallback must both be right.
