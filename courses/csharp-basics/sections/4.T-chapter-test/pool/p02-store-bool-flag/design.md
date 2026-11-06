# Pool p02, Store a bool flag (family A, booleans & comparisons)

**Integrates:** 4.1.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. Store whether it is zero or positive in a
`bool`, then print that `bool`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The boundary is at 0 (`>= 0` includes zero). Cases hit the zero edge and negatives, so a wrong comparison or a
hardcoded value fails.
