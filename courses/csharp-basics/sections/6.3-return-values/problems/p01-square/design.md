# Problem 01, Square (language-independent design)

**Sub-skill:** return an `int`.
**Difficulty:** 1

## Statement (student-facing)
Define a `static int` method `Square` that takes one `int` and returns its square. In `Main`, prompt
`Enter a number:` on its own line, read a whole number, call `Square`, and print the returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the square.

## Why it resists a trivial answer
`Square` must return the computed value (not print it), and `Main` prints what it returns. Cases vary the
input (including a negative), so a hardcoded return fails.
