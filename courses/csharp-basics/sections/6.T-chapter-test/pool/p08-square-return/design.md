# Pool p08, Return a square (family C, return values)

**Integrates:** 6.3.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Square` that returns its argument squared. In `Main`, prompt `Enter a number:`
on its own line, read a whole number, call `Square`, and print the returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the square.

## Why it resists a trivial answer
The method must return the value and `Main` print it. Cases vary the input (including a negative), so a
hardcoded return fails.
