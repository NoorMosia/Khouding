# Problem 08, Left to right (language-independent design)

**Sub-skill:** equal-precedence operators evaluate left to right.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers `a`, `b`, `c` (each prompted on its own line). Print the value of `a - b + c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the value of `a - b + c` on its own line.

## Why it resists a trivial answer
`+` and `-` have equal precedence, so this is `(a - b) + c`, left to right. A student who reads it as
`a - (b + c)` gets a different answer. The varied inputs, including a case where the two readings diverge,
force the correct left-to-right evaluation.
