# Problem 05, Count positives (language-independent design)

**Sub-skill:** the count pattern with a condition inside the loop.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `c`. Then read `c` more whole numbers, one per
line. Print how many of them are greater than 0. If `c` is 0, print `0`.

## I/O contract
- **Input:** the first line is the count `c`; then `c` lines, each a whole number.
- **Output:** the prompt, then the count of positives on one line.

## Why it resists a trivial answer
The answer depends on both `c` and the values. Cases cover all-positive, none-positive, a mix (with a 0 that
does not count), and `c = 0`, so an `if` inside the loop and a correct counter are both required.
