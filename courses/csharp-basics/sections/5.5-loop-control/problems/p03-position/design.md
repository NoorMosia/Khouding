# Problem 03, Position of first match (language-independent design)

**Sub-skill:** `break` while tracking a position counter.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter count, target, then values:` on its own line. Read a count `n`, a target, then `n` more whole
numbers. Print the 1-based position of the first value that equals the target (the first value is position 1).
If no value equals the target, print `0`. Stop at the first match.

## I/O contract
- **Input:** `n`, then the target, then `n` whole numbers.
- **Output:** the prompt, then the position, or `0`.

## Why it resists a trivial answer
The answer is a position, so the loop counter must be tracked and reported. Cases place the match first, in
the middle, last, and absent (`0`), so only a true first-match position passes.
