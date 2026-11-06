# Problem 01, Print 1 to n (language-independent design)

**Sub-skill:** a basic counting `for`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Using a `for` loop, print 1 to `n`, one
per line. If `n` is 0 or less, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then 1 to `n`, each on its own line.

## Why it resists a trivial answer
Cases vary the count including `n = 0` (zero iterations) and `n = 1`, so a fixed-length output fails.
