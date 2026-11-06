# Problem 10, Fix the read loop (language-independent design)

**Sub-skill:** store `ReadLine()` in a variable and use it; never call it twice per iteration.
**Difficulty:** 3

## Statement (student-facing)
The program should print every line of `data.txt`. It prints only half of them. Fix it.

## I/O contract
- **Input:** none.
- **Output:** every line of `data.txt`, one per line.

## Why it resists a trivial answer
The fixed solution must print all lines. Cases for different line counts would show the skipping, but the
structural single case is sufficient here because the bug is in the loop logic.

## Note
The bug is calling `reader.ReadLine()` twice per iteration (once in the `while` condition, once in the body).
Each call advances the position. Fix: store the result: `string line; while ((line = reader.ReadLine()) != null)`.
