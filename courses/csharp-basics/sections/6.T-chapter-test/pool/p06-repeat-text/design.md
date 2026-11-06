# Pool p06, Repeat text (family B, parameters)

**Integrates:** 6.2.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Repeat` that takes a `string text` and an `int times`, and prints `text` on its
own line `times` times. In `Main`, prompt `Enter text and count:` on its own line, read the text (line 1) and
the count (line 2), and call `Repeat`. If the count is 0 or less, the method prints nothing.

## I/O contract
- **Input:** line 1 the text, line 2 a whole number count.
- **Output:** the prompt, then the text printed `times` times.

## Why it resists a trivial answer
The body loops over the `int` parameter and prints the `string` parameter. Cases vary both (including a count
of 0), so the two parameters must be used correctly.
