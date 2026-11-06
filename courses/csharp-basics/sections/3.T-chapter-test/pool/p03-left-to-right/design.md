# Pool p03, Left to right (family A, precedence & parentheses)

**Integrates:** 3.1 (equal-precedence, left to right), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers `a`, `b`, `c` (each prompted on its own line). Print `a - b + c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the value of `a - b + c`.

## Why it resists a trivial answer
`+` and `-` are equal precedence, so this is `(a - b) + c`, left to right. One case goes negative, and reading
it as `a - (b + c)` gives a different answer, so correct associativity is required.
