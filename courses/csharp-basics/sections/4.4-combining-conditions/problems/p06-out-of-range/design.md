# Problem 06, Out of range (language-independent design)

**Sub-skill:** an out-of-band check with `||`, the complement of a range check.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read one whole number. Print `True` if it is outside the range 10
to 20 inclusive (below 10 or above 20), otherwise `False`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
This is the logical complement of p05, so the edges 10 and 20 are inside and print `False`. Cases straddle
both boundaries. Swapping `||` for `&&` makes the condition always false and fails.
