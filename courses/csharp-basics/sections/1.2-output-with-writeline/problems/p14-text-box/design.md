# Problem 14, Text box (language-independent design)

**Sub-skill:** visual composition; interior spacing is significant.
**Difficulty:** 3

## Statement (student-facing)
Print this box exactly. The spaces inside the middle line matter:

```
+------+
| Hi   |
+------+
```

## I/O contract
- **Input:** none.
- **Output:** the three lines above. The middle line is `|`, space, `Hi`, three spaces, `|`.

## Why it resists a trivial answer
The top and bottom borders are the same width, and the middle line must be padded with exactly the right
number of spaces so the closing `|` lines up. Byte-exact grading means one wrong space fails. Precision is
the skill.
