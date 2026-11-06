# Pool p03, Boundary check (family A, booleans & comparisons)

**Integrates:** 4.1.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read a whole number. Print `True` if the age is 18 or over,
otherwise `False`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The inclusive boundary matters: 18 is `True`, 17 is `False`. Cases sit on each side of 18, so `>` instead of
`>=` fails the edge.
