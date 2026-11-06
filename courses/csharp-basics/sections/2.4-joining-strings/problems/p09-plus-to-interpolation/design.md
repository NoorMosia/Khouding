# Problem 09, Plus to interpolation (language-independent design)

**Sub-skill:** convert a `+` output line to interpolation, same result.
**Difficulty:** 2

## Statement (student-facing)
The starter prints `Welcome to <city>` using `+`. Rewrite that line using interpolation, so it produces
exactly the same output.

## I/O contract
- **Input:** one line holding a city.
- **Output:** the prompt, then `Welcome to <city>` on its own line.

## Why it resists a trivial answer
The output must match the `+` original exactly, including the single space before the city. The varying input
confirms the value is really interpolated. The reverse of p08, closing the loop that the two forms are
interchangeable for output.
