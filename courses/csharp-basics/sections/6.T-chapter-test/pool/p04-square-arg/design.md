# Pool p04, Square the argument (family B, parameters)

**Integrates:** 6.2.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `PrintSquare` that takes one `int` and prints its square. In `Main`, prompt
`Enter a number:` on its own line, read a whole number, and pass it to `PrintSquare`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the square.

## Why it resists a trivial answer
The method computes from its parameter. Cases vary the input (including a negative), so a hardcoded result
fails.
