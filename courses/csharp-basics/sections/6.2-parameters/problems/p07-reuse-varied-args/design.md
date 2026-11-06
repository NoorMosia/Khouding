# Problem 07, Reuse with varied arguments (language-independent design)

**Sub-skill:** call one parameterised method several times with different arguments.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `PrintDouble` that takes one `int` and prints twice its value. In `Main`, prompt
`Enter three numbers:` on its own line, read three whole numbers (one per line), and call `PrintDouble` on
each in turn.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then each number doubled, one per line, in order.

## Why it resists a trivial answer
The same method runs three times with different arguments. Cases vary all three values (including 0 and a
negative), so the method must use its parameter each call.
