# Problem 08, Pass mark (language-independent design)

**Sub-skill:** `>=` boundary in another realistic setting.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the score:` on its own line and read it. Print whether the score is a pass (`score >= 50`), where
50 is a pass.

## I/O contract
- **Input:** one line, a whole number (the score).
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The exact-50 pass and the 49 just-under case pin the boundary, so `>` versus `>=` is tested directly.
