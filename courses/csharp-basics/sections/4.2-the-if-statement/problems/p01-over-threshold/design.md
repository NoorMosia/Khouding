# Problem 01, Over the threshold (language-independent design)

**Sub-skill:** the one-way `if`, guard a block with `>`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read it. If the number is greater than 100, print `big`. If it
is not, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `big` only when `n > 100`.

## Why it resists a trivial answer
Cases straddle the threshold: over runs, under and exactly-100 skip (so `>` not `>=` is forced), just-over
runs. A program that always prints fails the skip cases; one that never prints fails the run cases.
