# Pool p03, Count until stop (family A, while)

**Integrates:** 5.1.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter numbers, 0 to stop:` on its own line. Read whole numbers one per line until a `0` is read. Print
how many values came before the `0`. The `0` is not counted. If the first value is `0`, print `0`.

## I/O contract
- **Input:** whole numbers ending with `0`.
- **Output:** the prompt, then the count.

## Why it resists a trivial answer
The count is not known in advance; the sentinel ends the loop. Cases include a `0`-first input (zero
iterations) and varied lengths, so the read-one-before plus read-next-at-end pattern is required.
