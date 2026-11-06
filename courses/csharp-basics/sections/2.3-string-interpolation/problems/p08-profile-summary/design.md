# Problem 08, Profile summary (language-independent design)

**Sub-skill:** several interpolated lines, one hole each, from multiple read fields.
**Difficulty:** 2

## Statement (student-facing)
Read a name, a city, and an age (each prompted on its own line; the age is a whole number). Using
interpolation, print three lines: `Name: <name>`, then `City: <city>`, then `Age: <age>`.

## I/O contract
- **Input:** three lines: a name, a city, then a whole number (the age).
- **Output:** the three prompts, then the three labelled lines in order.

## Why it resists a trivial answer
Three varying inputs placed across three interpolated lines in a fixed order. Only reading all three and
filling each line passes.
