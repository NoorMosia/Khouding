# Problem 07, Stop when total crosses a limit (language-independent design)

**Sub-skill:** `break` driven by an accumulator crossing a threshold.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter count, limit, then values:` on its own line. Read a count `n`, a limit, then `n` more whole
numbers. Add the values in order to a running total. The moment the running total exceeds the limit (strictly
greater), print the running total and stop (use `break`). If the total never exceeds the limit, print the
final total after all `n` values.

## I/O contract
- **Input:** `n`, then the limit, then `n` whole numbers.
- **Output:** the prompt, then the running total when it first exceeds the limit, or the final total.

## Why it resists a trivial answer
The break depends on a running total, not a single value. Cases include crossing mid-way, never crossing, and
crossing on the first value, so the accumulate-then-test-then-break order and the never-crossed fallback must
both be right.

## Note
"Exceeds" is strict (`>`). Test the running total after adding each value; print and `break` the first time it
is over the limit.
