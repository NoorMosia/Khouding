# Problem 11, Rectangle area (language-independent design)

**Sub-skill:** two parses, multiply, realistic framing.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the width:` on its own line and read it. Prompt `Enter the height:` on its own line and read
it. Print the area, which is the width multiplied by the height.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the area on its own line.

## Why it resists a trivial answer
Both dimensions vary and the zero-height case lands on zero, so a copied literal fails. Same multiply skill as
p07 with a concrete framing.
