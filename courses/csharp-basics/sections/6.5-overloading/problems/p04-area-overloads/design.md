# Problem 04, Area overloads (language-independent design)

**Sub-skill:** overload by count, applied to a geometry helper.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Area`: `static int Area(int side)` returns the area of a square (`side * side`), and
`static int Area(int width, int height)` returns the area of a rectangle (`width * height`). In `Main`, prompt
`Enter side, width, height:` on its own line, read `side`, `width`, `height`, then print `Area(side)` and
`Area(width, height)`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the square area, then the rectangle area.

## Why it resists a trivial answer
The one-argument call runs the square overload and the two-argument call runs the rectangle overload. Cases
vary all three, so both overloads must compute correctly.
