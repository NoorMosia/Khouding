# Problem 01, Count up (language-independent design)

**Sub-skill:** a basic `while` driven by a counter.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print the numbers from 1 to `n`, one per
line. If `n` is 0 or less, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the numbers 1 to `n`, each on its own line.

## Why it resists a trivial answer
Cases vary the count, including `n = 0` (zero iterations, nothing printed) and `n = 1` (one pass), so an
unrolled or fixed-length output fails at least one.
