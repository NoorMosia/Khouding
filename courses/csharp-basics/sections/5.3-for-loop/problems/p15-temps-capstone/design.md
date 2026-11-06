# Problem 15, Temperatures capstone (language-independent design)

**Sub-skill:** integrative, the count pattern with two results (an average and a conditional count).
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter count, threshold, then temps:` on its own line. Read a count `n` (line 1, always 1 or more),
then a threshold (line 2), then `n` temperatures (one per line). Print two lines: first the integer average of
the temperatures, then how many of them are strictly above the threshold.

## I/O contract
- **Input:** `n`, then the threshold, then `n` whole numbers (the temperatures).
- **Output:** the prompt, then the integer average on one line, then the above-threshold count on the next.

## Why it resists a trivial answer
Two results come from the same `n` reads: a sum driving an integer average and a count of values strictly
above the threshold. Cases include a strict-boundary case (values equal to the threshold do not count),
negatives, and varied `n`, so both accumulators and the strict comparison must be right.

## Note
`n` is always at least 1 (no divide by zero). The threshold is read before the temperatures, so the
above-threshold count can be done inside the loop without storing the values. "Above" is strict (`>`), so a
temperature equal to the threshold does not count.
