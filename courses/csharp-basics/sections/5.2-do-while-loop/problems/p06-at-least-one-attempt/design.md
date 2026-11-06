# Problem 06, At least one attempt (language-independent design)

**Sub-skill:** the at-least-once guarantee expressed as a count.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter attempts:` on its own line and read a whole number `n`, the number of attempts requested. Using
a `do-while`, make at least one attempt: count the attempts, repeating while the count is still less than `n`.
Print the number of attempts actually made.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the attempt count on one line.

## Why it resists a trivial answer
The count is `n` when `n >= 1`, but always at least `1` even when `n` is `0` or negative, because the body
runs once before the condition is tested. Cases include `n = 0` and a negative (both give `1`), so a plain
`while` (which would give `0`) produces different output and fails.
