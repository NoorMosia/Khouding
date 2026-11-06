# Problem 08, Newline inside WriteLine (language-independent design)

**Sub-skill:** `\n` inside a string creates a newline, so one `WriteLine` can produce two lines.
**Difficulty:** 2

## Statement (student-facing)
Using a single `Console.WriteLine` with a `\n` inside the text, print two lines:

```
Top
Bottom
```

## I/O contract
- **Input:** none.
- **Output:** `Top` then `Bottom`, each on its own line.

## The idea (the hinge)
A newline does not have to come from a second `WriteLine`. The escape `\n` inside a string is a newline
too. So `"Top\nBottom"` prints on two lines. `WriteLine` still adds its own newline at the very end.

## Why it resists a trivial answer
The task constrains the tool: a single `WriteLine`. The student must use `\n` inside the string rather than
two statements. Target text is unique to this problem.
