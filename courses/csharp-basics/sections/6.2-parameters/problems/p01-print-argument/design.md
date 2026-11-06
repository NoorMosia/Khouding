# Problem 01, Print the argument (language-independent design)

**Sub-skill:** a method with one parameter.
**Difficulty:** 1

## Statement (student-facing)
Define a `static void` method `Show` that takes one `int` parameter and prints it on its own line. In `Main`,
prompt `Enter a number:` on its own line, read a whole number, and pass it to `Show`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the number.

## Why it resists a trivial answer
The method prints whatever it is given. Cases pass different values (including 0 and a negative), so a
hardcoded print fails.
