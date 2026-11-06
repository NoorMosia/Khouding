# Problem 01, A fixed comparison (language-independent design)

**Sub-skill:** a comparison is a value; printing a `bool` prints `True`/`False`.
**Difficulty:** 1

## Statement (student-facing)
Print the value of `5 > 3`.

## I/O contract
- **Input:** none.
- **Output:** `True` on its own line.

## Why it resists a trivial answer
The point is understanding that `5 > 3` is a `bool` that prints as `True` (capital). A student who prints
`true` (lowercase) or `1` fails the exact match.
