# Problem 10, Report parity (language-independent design)

**Sub-skill:** a parameter used in a decision inside the method.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `ReportParity` that takes one `int` and prints `even` if it is even, otherwise
`odd`. In `Main`, prompt `Enter a number:` on its own line, read a whole number, and pass it to
`ReportParity`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `even` or `odd`.

## Why it resists a trivial answer
The method decides from its parameter. Cases include even, odd, zero (even), and a negative odd value, so the
`% 2` test must run on the argument.

## Note
Even is `n % 2 == 0` (true for 0; a negative odd like -3 is odd because `-3 % 2` is not 0).
