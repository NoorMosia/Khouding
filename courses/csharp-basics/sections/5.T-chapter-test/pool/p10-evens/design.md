# Pool p10, Evens up to n (family C, for)

**Integrates:** 5.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a limit:` on its own line and read a whole number `n`. Using a `for` loop, print the even
numbers from 2 up to and including `n`, one per line. If `n` is less than 2, print nothing.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then 2, 4, 6, ... up to `n`.

## Why it resists a trivial answer
The counter steps by 2 and includes `n` only when even. Cases include an even `n` (included), an odd `n`, and
`n < 2` (nothing), so the step and bound must be right.
