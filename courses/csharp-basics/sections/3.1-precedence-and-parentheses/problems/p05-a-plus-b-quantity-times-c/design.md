# Problem 05, a plus b, times c (language-independent design)

**Sub-skill:** parentheses with input, force `a + b` before the multiply.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers `a`, `b`, `c` (each prompted on its own line). Print the value of `(a + b) * c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the value of `(a + b) * c` on its own line.

## Why it resists a trivial answer
Same input shape as p04 but the parentheses change the result: `a + b` first, then `* c`. A student who
omits the parentheses computes `a + b * c` and fails. Directly reinforces that parentheses override the
default order.
