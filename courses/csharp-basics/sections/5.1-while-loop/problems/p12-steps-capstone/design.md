# Problem 12, Steps capstone (language-independent design)

**Sub-skill:** integrative, a sentinel loop with two accumulators (a sum and a conditional count).
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter daily steps, -1 to stop:` on its own line. Read whole numbers one per line until `-1` is read,
each the step count for a day. The `-1` is not a day. Print two lines: first the total steps across all days,
then how many days reached the goal of 10000 steps (10000 counts as reaching it). If the first value is `-1`,
print `0` then `0`.

## I/O contract
- **Input:** whole numbers, one per line, ending with `-1`.
- **Output:** the prompt, then the total steps on one line, then the count of goal days on the next.

## Why it resists a trivial answer
Two accumulators run together: a sum of all values and a count of those that are at least 10000. Cases include
a `-1`-first (both zero), a single under-goal day, a value exactly at the goal (counts), and mixed days, so
both accumulators and the sentinel handling must all be correct.

## Note
The goal boundary is inclusive: exactly 10000 reaches the goal (`>= 10000`).
