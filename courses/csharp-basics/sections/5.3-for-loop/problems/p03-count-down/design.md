# Problem 03, Count down (language-independent design)

**Sub-skill:** a `for` that decrements.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Using a `for` loop, print `n` down to 1,
one per line. If `n` is 0 or less, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n`, `n-1`, ..., `1`, each on its own line.

## Why it resists a trivial answer
The counter moves down. Cases include `n = 0` and a negative (both nothing) and `n = 1`, so the init, bound,
and `i--` must all be right.
