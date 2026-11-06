# Problem 06, Mix Write and WriteLine (language-independent design)

**Sub-skill:** combine `Write` (stay on the line) and `WriteLine` (end the line).
**Difficulty:** 1

## Statement (student-facing)
Print exactly this:

```
Score: 100
Lives: 3
```

Build each line by printing the label with `Write` (stays on the line), then the number with `WriteLine`
(ends the line).

## I/O contract
- **Input:** none.
- **Output:** two lines, `Score: 100` then `Lives: 3`.

## Why it resists a trivial answer
Consolidates p03 and p05: you need `Write` to keep the label and number on one line, and `WriteLine` to end
each line. Getting the spaces after the colons right is part of the exact match.
