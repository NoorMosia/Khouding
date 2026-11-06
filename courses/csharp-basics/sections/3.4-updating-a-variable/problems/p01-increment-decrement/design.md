# Problem 01, Increment and decrement (language-independent design)

**Sub-skill:** `++` and `--` change a variable by one.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number `n`. Add one with `++` and print the result, then subtract one with `--` and print the
result.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n + 1`, then `n` again (after the `--`), each on its own line.

## Why it resists a trivial answer
The input varies, so the two lines must be computed from it. The second line returns to the original value,
confirming `++` and `--` are inverse by-one updates.
