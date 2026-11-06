# Pool p01, Compare two (family A, booleans & comparisons)

**Integrates:** 4.1.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter two numbers:` on its own line and read two whole numbers, one per line. Print `True` if the
first is greater than the second, otherwise `False`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
Cases cover greater, smaller, and equal (where strict `>` is `False`), so a hardcoded literal fails.
