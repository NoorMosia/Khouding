# Problem 03, City and country (language-independent design)

**Sub-skill:** two holes in one interpolated string, with literal text between them.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the city:` on its own line and read it. Prompt `Enter the country:` on its own line and read it.
Using interpolation, print both on one line as the city, a comma and a space, then the country.

## I/O contract
- **Input:** two lines: a city, then a country.
- **Output:** the two prompts, then `<city>, <country>` on its own line.

## Why it resists a trivial answer
Two varying inputs, placed in order with a literal separator between them. Only an interpolated string that
fills both holes passes.
