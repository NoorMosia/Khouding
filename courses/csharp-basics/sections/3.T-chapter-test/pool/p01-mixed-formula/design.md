# Pool p01, Mixed formula (family A, precedence & parentheses)

**Integrates:** 3.1 (precedence), 2.1/2.2 (read + parse).
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers `a`, `b`, `c` (each prompted on its own line). Print `a + b * c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the value of `a + b * c`.

## Why it resists a trivial answer
`b * c` must be evaluated before adding `a`. Left-to-right evaluation gives a different answer on the varied
inputs, so correct precedence is required.
