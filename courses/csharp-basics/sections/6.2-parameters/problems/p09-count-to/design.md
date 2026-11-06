# Problem 09, Count to the parameter (language-independent design)

**Sub-skill:** a parameter that drives a loop inside the method.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `CountTo` that takes one `int n` and prints 1 to `n`, one per line (nothing if
`n` is 0 or less). In `Main`, prompt `Enter a count:` on its own line, read a whole number, and pass it to
`CountTo`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then 1 to `n`.

## Why it resists a trivial answer
The method's loop bound is its parameter. Cases vary `n` including `n = 0` (zero iterations), so the parameter
must control the loop.
