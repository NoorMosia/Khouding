# Problem 02, Pass or fail (language-independent design)

**Sub-skill:** two-way `if`/`else`, realistic.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter the score:` on its own line and read it. If the score is at least 50, print `pass`; otherwise
print `fail`.

## I/O contract
- **Input:** one line, a whole number (the score).
- **Output:** the prompt, then `pass` or `fail`.

## Why it resists a trivial answer
Both outcomes appear, and the exact-50 pass pins the `>=` boundary. A one-branch program fails the other side.
