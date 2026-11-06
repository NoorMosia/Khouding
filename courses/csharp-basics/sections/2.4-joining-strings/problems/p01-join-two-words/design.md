# Problem 01, Join two words (language-independent design)

**Sub-skill:** `+` to join fixed string pieces for output, including an explicit space piece.
**Difficulty:** 1

## Statement (student-facing)
Using `+` to join pieces, print `Hello there` (one space between the two words).

## I/O contract
- **Input:** none.
- **Output:** `Hello there` on its own line.

## Why it resists a trivial answer
The point is the join itself: the space is its own piece between the two words. A student who omits the space
piece gets `Hellothere`, which fails.
