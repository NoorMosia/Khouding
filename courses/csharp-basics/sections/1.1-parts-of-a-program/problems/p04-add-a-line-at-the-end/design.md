# Problem 04, Add a line at the end (language-independent design)

**Sub-skill:** append a statement at the end; ordering holds with more surrounding lines.
**Difficulty:** 1

## Statement (student-facing)
Three lines are already printed. Add one more line at the end so the program prints exactly:

```
Step one.
Step two.
Step three.
Done.
```

## I/O contract
- **Input:** none.
- **Output:** four lines ending with `Done.`

## Why it resists a trivial answer
The new statement must be the last one in `Main` so `Done.` prints last. Reinforces ordering with more
surrounding lines. Target text is unique to this problem.
