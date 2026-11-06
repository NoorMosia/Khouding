# Pool p02, Countdown with while (family A, while)

**Integrates:** 5.1.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Using a `while` loop, print `n` down to
1, one per line. If `n` is 0 or less, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n`, `n-1`, ..., `1`.

## Why it resists a trivial answer
The counter decrements. Cases include `n = 0` and a negative (both nothing) and `n = 1`, so the bound and the
decrement must be right.
