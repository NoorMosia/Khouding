# Pool p02, Parenthesized formula (family A, precedence & parentheses)

**Integrates:** 3.1 (parentheses override), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers `a`, `b`, `c` (each prompted on its own line). Print `(a + b) * c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the value of `(a + b) * c`.

## Why it resists a trivial answer
Same inputs as a bare `a + b * c` but the parentheses change the result: `a + b` first, then `* c`. Omitting
the parentheses fails on the varied inputs.
