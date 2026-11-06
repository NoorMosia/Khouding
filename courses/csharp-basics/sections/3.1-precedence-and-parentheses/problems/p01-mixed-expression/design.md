# Problem 01, A mixed expression (language-independent design)

**Sub-skill:** precedence basics, `*` is applied before `+`.
**Difficulty:** 1

## Statement (student-facing)
Print the value of the expression `2 + 3 * 4`.

## I/O contract
- **Input:** none.
- **Output:** the value on its own line.

## Why it resists a trivial answer
The point is predicting the precedence result (`14`, not `20`). The student must apply `*` before `+`. The
oracle generates the expected, so a wrong guess at the order fails.
