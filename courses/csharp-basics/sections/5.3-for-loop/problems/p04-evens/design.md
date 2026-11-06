# Problem 04, Evens up to n (language-independent design)

**Sub-skill:** a stepped `for` (`i += 2`).
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a limit:` on its own line and read a whole number `n`. Using a `for` loop, print the even
numbers from 2 up to and including `n`, one per line. If `n` is less than 2, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then 2, 4, 6, ... up to `n`, each on its own line.

## Why it resists a trivial answer
The counter steps by 2 and must include `n` only when `n` is even. Cases include an even `n` (included), an
odd `n` (stops below it), and `n < 2` (nothing), so the step and bound must both be right.
