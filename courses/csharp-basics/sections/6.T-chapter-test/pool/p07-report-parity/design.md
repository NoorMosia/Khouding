# Pool p07, Report parity (family B, parameters)

**Integrates:** 6.2.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `ReportParity` that takes one `int` and prints `even` if it is even, otherwise
`odd`. In `Main`, prompt `Enter a number:` on its own line, read a whole number, and pass it to
`ReportParity`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `even` or `odd`.

## Why it resists a trivial answer
The method decides from its parameter. Cases cover even, odd, zero (even), and a negative odd value, so the
`% 2` test must run on the argument.
