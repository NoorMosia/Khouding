# Pool p08, Count total (family B, read + compute)

**Integrates:** 2.2 (parse + arithmetic), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Read a number of boxes and the items per box (each prompted on its own line, each a whole number). Using
interpolation, print `Total items: <boxes * items per box>`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `Total items: <total>` on its own line.

## Why it resists a trivial answer
Two varying whole numbers multiplied; the zero-boxes case gives zero. Whole-number arithmetic only, no
formatting, so this stays distinct from the money family.
