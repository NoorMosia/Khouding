# Problem 07, Return a local's value (language-independent design)

**Sub-skill:** a local holds a result; only the returned value survives the method.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Doubled` that takes one `int n`, stores `n * 2` in a local variable, and returns
that local. In `Main`, prompt `Enter a number:` on its own line, read a whole number, call `Doubled`, and
print the returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the doubled value.

## Why it resists a trivial answer
The method's local is gone once it returns; what survives is the value handed back. `Main` prints that
returned value. Cases vary the input (including 0 and a negative), so the local must be computed and returned.
