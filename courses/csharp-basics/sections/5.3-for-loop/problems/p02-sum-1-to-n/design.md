# Problem 02, Sum 1 to n (language-independent design)

**Sub-skill:** accumulate a total in a `for`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print the sum of 1 to `n`. If `n` is 0 or
less, print `0`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the sum on one line.

## Why it resists a trivial answer
The sum depends on `n`. Cases include `n = 0` (sum `0`) and larger counts, so a hardcoded value fails.
