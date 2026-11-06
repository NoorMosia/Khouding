# Problem 03, Even or odd signal (language-independent design)

**Sub-skill:** `n % 2` is the even-or-odd signal.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number `n`. Print `n % 2`, which is `0` when `n` is even and `1` when `n` is odd.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n % 2` on its own line.

## Why it resists a trivial answer
The cases alternate even and odd, so the output varies and a constant fails. This teaches the remainder as a
signal; choosing a path based on it (printing the word "even") needs decisions, which are a later chapter.
