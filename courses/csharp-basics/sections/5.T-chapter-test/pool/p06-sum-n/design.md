# Pool p06, Sum n with for (family C, for)

**Integrates:** 5.3.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers and
print their sum using a `for` loop. If `n` is 0, print `0`.

## I/O contract
- **Input:** the count `n`, then `n` whole numbers.
- **Output:** the prompt, then the sum.

## Why it resists a trivial answer
Reads depend on `n`. Cases vary `n` including `n = 0`, so a fixed count or hardcoded sum fails.
