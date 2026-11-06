# Problem 09, Count positives (language-independent design)

**Sub-skill:** the count pattern with a condition inside the loop.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line. Print how many of them are greater than 0. If `n` is 0, print `0`.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the count of positives on one line.

## Why it resists a trivial answer
The answer depends on both `n` and the values. Cases cover all-positive, none, a mix with a 0 (not counted),
and `n = 0`, so an `if` inside the loop and a correct counter are both required.
