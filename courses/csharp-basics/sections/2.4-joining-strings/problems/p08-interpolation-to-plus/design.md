# Problem 08, Interpolation to plus (language-independent design)

**Sub-skill:** convert an interpolated output line to the `+` form, same result.
**Difficulty:** 2

## Statement (student-facing)
The starter prints `Hello, <name>` using interpolation. Rewrite that line using `+` to join the pieces, so it
produces exactly the same output.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Hello, <name>` on its own line.

## Why it resists a trivial answer
The output must match the interpolated original exactly, including the comma and the single space. The varying
name confirms the value is really joined in, not copied. Shows `+` and interpolation are interchangeable for
output.
