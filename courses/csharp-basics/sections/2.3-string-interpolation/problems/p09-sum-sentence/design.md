# Problem 09, Sum sentence (language-independent design)

**Sub-skill:** holes mixed with literal symbols; an expression in the final hole.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers (each prompted on its own line). Using interpolation, print the equation on one line:
the first number, a space, a literal `+`, a space, the second number, a space, a literal `=`, a space, then
their sum. For input `2` and `3` this reads `2 + 3 = 5`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `<a> + <b> = <a+b>` on its own line.

## Why it resists a trivial answer
The `+` and `=` are literal text between holes, while the final hole is a computed sum. Varied inputs, including
a negative operand, confirm the sum is really calculated.
