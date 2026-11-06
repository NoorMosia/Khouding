# Problem 12, Swap two values (language-independent design)

**Sub-skill:** the temp-variable pattern.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers (one per line) into variables `a` and `b`. Swap their values using a temporary
variable, then print `a` then `b`, each on its own line. After the swap, `a` holds what `b` had and vice
versa.

## I/O contract
- **Input:** two lines: the first value, then the second.
- **Output:** two lines: the two values in swapped order.

## Why it resists a trivial answer
Just printing the inputs in reverse order would pass the output check, but the stated skill is the swap
itself (using a temp so neither value is lost). Varied cases include equal values and negatives. The honest
solution introduces a temp variable, which is the reasoning rep this problem drills.
