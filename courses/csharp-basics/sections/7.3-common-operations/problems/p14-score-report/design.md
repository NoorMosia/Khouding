# Problem 14, Score report (language-independent design)

**Sub-skill:** combine count, sum, average, and max into one report (integrative capstone).
**Difficulty:** 3

## Statement (student-facing)
Read a count `n` (at least 1), then `n` scores into an array. Print exactly four lines:

```
Count: <n>
Sum: <sum>
Average: <average as a double>
Highest: <max>
```

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of scores.
- **Output:** the four labelled lines above, in order.

## Why it resists a trivial answer
Every line depends on the input. Cases vary the scores and count, including a fractional average, so fixed
output fails.

## Note
Use the exact labels and a single space after each colon. Average is `(double)sum / a.Length`. The max is
seeded from `a[0]`.
