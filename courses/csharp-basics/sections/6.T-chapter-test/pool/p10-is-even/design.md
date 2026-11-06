# Pool p10, Return a bool (family C, return values)

**Integrates:** 6.3.
**Difficulty:** 2

## Statement (student-facing)
Define a `static bool` method `IsEven` that takes one `int` and returns whether it is even. In `Main`, prompt
`Enter a number:` on its own line, read a whole number, call `IsEven`, and print the returned value (prints
`True` or `False`).

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
Cases cover even, odd, zero (even), and a negative odd value, so the comparison must run and the bool be
returned.
