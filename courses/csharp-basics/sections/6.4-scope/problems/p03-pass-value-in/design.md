# Problem 03, Pass the value in (language-independent design)

**Sub-skill:** a helper works with its parameter, not the caller's variables.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `PrintPlusTen` that takes one `int value` and prints `value + 10`. In `Main`,
prompt `Enter a score:` on its own line, read a whole number, and pass it to `PrintPlusTen`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the number plus 10.

## Why it resists a trivial answer
The method uses only its parameter (it cannot see `Main`'s variable). Cases vary the input (including 0 and a
negative), so the value must flow in through the parameter.
