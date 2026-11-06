# Pool p02, Intake card (family A, echo & intake)

**Integrates:** 2.1 (prompt + read), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Read a name, a role, and a city, each prompted on its own line. Using interpolation, print `Name: <name>`,
`Role: <role>`, `City: <city>`.

## I/O contract
- **Input:** three lines: a name, a role, then a city.
- **Output:** the three prompts, then the three labelled lines in order.

## Why it resists a trivial answer
Three varying inputs in a fixed layout, including values with spaces. Only reading all three in order and
interpolating them passes.
