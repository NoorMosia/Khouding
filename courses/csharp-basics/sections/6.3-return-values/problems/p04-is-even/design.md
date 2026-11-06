# Problem 04, Is even (language-independent design)

**Sub-skill:** return a `bool`.
**Difficulty:** 2

## Statement (student-facing)
Define a `static bool` method `IsEven` that takes one `int` and returns whether it is even. In `Main`, prompt
`Enter a number:` on its own line, read a whole number, call `IsEven`, and print the returned value (which
prints as `True` or `False`).

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The method returns the comparison result. Cases cover even, odd, zero (even), and a negative odd value, so the
`% 2` test must run and the bool be returned.
