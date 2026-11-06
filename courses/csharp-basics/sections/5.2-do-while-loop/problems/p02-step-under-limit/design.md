# Problem 02, Step under a limit (language-independent design)

**Sub-skill:** a `do-while` that always prints the first value, then steps.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter start and limit:` on its own line. Read a start value (line 1) and a limit (line 2), both whole
numbers. Using a `do-while`, print the current value, add 3 to it, and repeat while the value is less than the
limit. Print one value per line.

## I/O contract
- **Input:** two lines, start then limit.
- **Output:** the prompt, then the values, each on its own line.

## Why it resists a trivial answer
The first value always prints, even when the start is already at or past the limit (the guaranteed pass).
Cases include a start equal to the limit and a start beyond it, so a plain `while` (which would print nothing
there) gives different output and fails.
