# Problem 10, Equal and larger (language-independent design)

**Sub-skill:** two boolean results from one pair, on two lines.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print two lines: whether they are equal
(`a == b`), then whether the first is larger (`a > b`).

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a == b`, then `a > b`.

## Why it resists a trivial answer
Two independent comparisons of the same pair. The equal case makes line 1 `True` and line 2 `False`; a larger
first makes line 1 `False` and line 2 `True`, so both must be computed.
