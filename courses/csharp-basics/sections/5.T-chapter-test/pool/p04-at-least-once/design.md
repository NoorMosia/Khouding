# Pool p04, At least once (family B, do-while)

**Integrates:** 5.2.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Using a `do-while`, start a counter at 1,
print it, increment, and repeat while it is at most `n`. Because a `do-while` runs once first, `n = 0` still
prints `1`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the counter values.

## Why it resists a trivial answer
The grading matches the `do-while` behavior: `n = 0` prints `1` (one guaranteed pass), unlike a plain `while`.
Cases include `n = 0`, so a `while` solution fails.
