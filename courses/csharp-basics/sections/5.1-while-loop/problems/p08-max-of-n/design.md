# Problem 08, Max of n (language-independent design)

**Sub-skill:** a running maximum across a counted series.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `c` (always 1 or more). Then read `c` more
whole numbers, one per line. Print the largest of them.

## I/O contract
- **Input:** the first line is the count `c` (at least 1); then `c` lines, each a whole number.
- **Output:** the prompt, then the maximum on one line.

## Why it resists a trivial answer
Seed the maximum from the first value and compare each later value against it. Cases place the max in the
middle, use all-negative values (so a `max = 0` seed would be wrong), and repeat the max, so only a true
running comparison passes.

## Note
`c` is always at least 1, so there is always a first value to seed from. Seeding `max` from the first read
(not from 0) is what makes the all-negative case correct.
