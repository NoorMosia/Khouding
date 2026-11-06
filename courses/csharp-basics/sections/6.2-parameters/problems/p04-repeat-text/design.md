# Problem 04, Repeat text (language-independent design)

**Sub-skill:** two parameters (a `string` and an `int`), with a loop in the body.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Repeat` that takes a `string text` and an `int times`, and prints `text` on its
own line `times` times. In `Main`, prompt `Enter text and count:` on its own line, read the text (line 1) and
the count (line 2), and call `Repeat`. If the count is 0 or less, the method prints nothing.

## I/O contract
- **Input:** line 1 the text, line 2 a whole number count.
- **Output:** the prompt, then the text printed `times` times.

## Why it resists a trivial answer
The body loops over the `int` parameter and prints the `string` parameter. Cases vary both the text and the
count (including 0, zero iterations), so the two parameters must be used correctly.
