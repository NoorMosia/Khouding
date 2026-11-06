# Problem 02, Print it squared (language-independent design)

**Sub-skill:** use a parameter in a computation.
**Difficulty:** 1

## Statement (student-facing)
Define a `static void` method `PrintSquare` that takes one `int` parameter and prints its square. In `Main`,
prompt `Enter a number:` on its own line, read a whole number, and pass it to `PrintSquare`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the square of the number.

## Why it resists a trivial answer
The method computes from its parameter. Cases pass different values (including 0 and a negative, whose square
is positive), so a hardcoded result fails.
