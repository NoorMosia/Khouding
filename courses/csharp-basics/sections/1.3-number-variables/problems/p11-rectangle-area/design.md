# Problem 11, Rectangle area (language-independent design)

**Sub-skill:** `*` in a realistic context.
**Difficulty:** 2

## Statement (student-facing)
Read a rectangle's width and height (whole numbers, one per line). Print its area (width times height).

## I/O contract
- **Input:** two lines: width, then height.
- **Output:** the area, `width * height`.

## Why it resists a trivial answer
Varied cases including a zero side and a unit square mean only a program that multiplies the two inputs
passes.
