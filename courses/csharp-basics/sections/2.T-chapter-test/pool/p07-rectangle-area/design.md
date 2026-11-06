# Pool p07, Rectangle area (family B, read + compute)

**Integrates:** 2.2 (parse + arithmetic), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Read a width and a height (each prompted on its own line, each a whole number). Using interpolation, print
`Area: <width * height>`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `Area: <area>` on its own line.

## Why it resists a trivial answer
Both dimensions vary and the zero-height case gives zero, so a copied literal fails. The area is computed in
the hole.
