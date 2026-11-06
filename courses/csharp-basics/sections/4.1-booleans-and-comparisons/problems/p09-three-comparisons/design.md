# Problem 09, Three comparisons (language-independent design)

**Sub-skill:** the operator set together; exactly one of `<`, `==`, `>` holds.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print three lines: `a < b`, then `a == b`,
then `a > b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then three `True`/`False` lines in that order.

## Why it resists a trivial answer
For any pair, exactly one of the three is `True` and the position of that `True` changes with the inputs, so
all three comparisons must be computed correctly.
