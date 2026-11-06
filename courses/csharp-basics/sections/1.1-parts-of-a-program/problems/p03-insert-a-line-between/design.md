# Problem 03, Insert a line between (language-independent design)

**Sub-skill:** a statement's position sets its place in the output; insert in the middle.
**Difficulty:** 1

## Statement (student-facing)
Two lines are already printed. Add one line between them so the program prints exactly:

```
First.
Second.
Third.
```

## I/O contract
- **Input:** none.
- **Output:** three lines in the order `First.`, `Second.`, `Third.`

## Why it resists a trivial answer
The new line must be placed between the two existing statements, not before or after, to land in the
middle of the output. Target text is unique to this problem.
