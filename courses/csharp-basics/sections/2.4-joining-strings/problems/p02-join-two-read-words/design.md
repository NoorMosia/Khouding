# Problem 02, Join two read words (language-independent design)

**Sub-skill:** `+` with read values, joining in an explicit space.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter the first word:` on its own line and read it. Prompt `Enter the second word:` on its own line and
read it. Using `+`, print the two words joined with a single space between them.

## I/O contract
- **Input:** two lines, each a word.
- **Output:** the two prompts, then the two words joined with one space on their own line.

## Why it resists a trivial answer
Both words vary per case, and the space must be joined in as its own piece. Only reading both and joining them
with a space passes.
