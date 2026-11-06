# Pool p09, In range (family C, combining & nesting)

**Integrates:** 4.4.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. Print `True` if it is in the range 1 to 100
inclusive, otherwise `False`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
A range needs `&&` with both inclusive bounds. Cases hit both edges and one value past each side, so `>`/`<`
or a dropped bound fails.
