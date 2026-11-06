# Problem 05, Range band (language-independent design)

**Sub-skill:** an `else if` chain with boundaries, ordered low to high.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read it. For the range 10 to 20 inclusive, print `below` if it is
under 10, `within` if it is 10 to 20, and `above` if it is over 20.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `below`, `within`, `above`.

## Why it resists a trivial answer
Both range edges (10 and 20) are `within`, so the boundaries must be included correctly. Cases hit all three
bands plus both edges, so a wrong comparison or a missing branch fails.
