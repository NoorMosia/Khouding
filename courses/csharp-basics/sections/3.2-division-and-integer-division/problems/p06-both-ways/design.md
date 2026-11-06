# Problem 06, Both ways (language-independent design)

**Sub-skill:** the contrast, the same pair divided as `int` and as `double` on two lines.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print two lines: first the integer
division `a / b`, then the decimal division `(double)a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the integer result, then the decimal result, each on its own line.

## Why it resists a trivial answer
Each pair shows both results side by side, so the student must produce both the truncated and the decimal
value. The exact case (`8 / 2`) gives `4` then `4` (both the same), ruling out a guess that the two lines
always differ.
