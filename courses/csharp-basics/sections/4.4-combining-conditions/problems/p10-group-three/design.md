# Problem 10, Group three (language-independent design)

**Sub-skill:** mixing `&&` and `||` with parentheses that control the grouping.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter three numbers, one per line:` on its own line, then read three whole numbers, one per line.
Print `True` if the first is greater than 0 and at least one of the other two is greater than 0. Otherwise
print `False`. The condition is `a > 0 && (b > 0 || c > 0)`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The grouping is load-bearing: `a` must hold regardless, and then either `b` or `c`. Cases turn each piece on
and off, including an `a` that is zero (failing the gate even when the group is true), so dropping the
parentheses (which changes the meaning) fails.
