# Problem 07, Circle area (language-independent design)

**Sub-skill:** combine `Math.PI` and `Math.Pow`, format the result.
**Difficulty:** 2

## Statement (student-facing)
Read a radius. Print the circle area, `Math.PI * Math.Pow(radius, 2)`, to two decimal places.

## I/O contract
- **Input:** one line, a decimal number (the radius).
- **Output:** the prompt, then the area to two decimals on its own line.

## Why it resists a trivial answer
The area combines a constant, a function call, and formatting. Each radius gives a different area
(`5` to `78.54`, `10` to `314.16`), and the value only comes out right with `Math.PI` (not a rounded `3.14`
typed by hand). Expecteds verified via the CLI under invariant culture.
