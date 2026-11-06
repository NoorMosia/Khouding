# Problem 04, Reproduce a 3-line block (language-independent design)

**Sub-skill:** reproduce an exact multi-line block.
**Difficulty:** 1

## Statement (student-facing)
Print exactly this:

```
Menu:
1. Start
2. Quit
```

## I/O contract
- **Input:** none.
- **Output:** the three lines above, in order.

## Why it resists a trivial answer
The block mixes punctuation and numbers; it must be reproduced character for character, including the
period after each number.
