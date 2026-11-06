# Problem 03, Two on one line (language-independent design)

**Sub-skill:** `Write` adds no newline, so two `Write` calls join on one line.
**Difficulty:** 1

## Statement (student-facing)
Using `Write` twice (not `WriteLine`), print both parts on the same line:

```
Red and blue.
```

(No trailing newline: `Write` does not add one.)

## I/O contract
- **Input:** none.
- **Output:** `Red and blue.` on one line, with no trailing newline.

## Why it resists a trivial answer
The point is that `Write` does not move to a new line. Using `WriteLine` would add a newline and fail the
byte-exact match. Two separate `Write` calls must land on the same line.
