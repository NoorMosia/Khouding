# Problem 03, Either zero (language-independent design)

**Sub-skill:** `||` with two read values.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter two numbers:` on its own line, then read two whole numbers, one per line. Print `True` if either
one is 0, otherwise `False`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
`||` is false only when both sides are false, so the cases include both-nonzero (the single False case) plus
each single-zero and both-zero. A hardcoded answer fails at least one.
