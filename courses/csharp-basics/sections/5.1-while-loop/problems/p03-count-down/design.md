# Problem 03, Count down (language-independent design)

**Sub-skill:** a `while` that decrements its counter.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print the numbers from `n` down to 1, one
per line. If `n` is 0 or less, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n`, `n-1`, ..., `1`, each on its own line.

## Why it resists a trivial answer
The counter moves down, not up. Cases include `n = 0` and a negative (both print nothing) and `n = 1`, so the
loop bound and the decrement must both be right.
