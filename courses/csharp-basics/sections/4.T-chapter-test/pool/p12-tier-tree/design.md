# Pool p12, Tier tree (family C, combining & nesting)

**Integrates:** 4.5.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. If it is positive, print `positive even`
when it is even, otherwise `positive odd`. If it is not positive, print `not positive`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `positive even`, `positive odd`, `not positive`.

## Why it resists a trivial answer
The even/odd question only applies inside the positive branch. Cases reach every leaf plus the zero edge, so a
flattened or mis-nested version fails.

## Note
Use `% 2` for even/odd (remainder from Chapter 3).
