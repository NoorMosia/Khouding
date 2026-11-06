# Problem 02, Cube (language-independent design)

**Sub-skill:** return a computed `int`.
**Difficulty:** 1

## Statement (student-facing)
Define a `static int` method `Cube` that takes one `int` and returns its cube (`n * n * n`). In `Main`, prompt
`Enter a number:` on its own line, read a whole number, call `Cube`, and print the returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the cube.

## Why it resists a trivial answer
Cases vary the input including a negative (whose cube stays negative). A hardcoded return fails.

## Note
Inputs are kept small so the cube fits in an `int`.
