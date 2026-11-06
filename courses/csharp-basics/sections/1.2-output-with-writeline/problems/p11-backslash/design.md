# Problem 11, Backslash (language-independent design)

**Sub-skill:** the `\\` escape, printing a single backslash.
**Difficulty:** 2

## Statement (student-facing)
Print this file path exactly:

```
C:\Users\Ada
```

## I/O contract
- **Input:** none.
- **Output:** the single line `C:\Users\Ada`

## The idea
A backslash starts an escape (as in `\n` or `\"`), so to print one real backslash you write two: `\\`. The
string is `"C:\\Users\\Ada"`, which prints with single backslashes.

## Why it resists a trivial answer
A single `\` in the source would try to escape the next character (here `U`), which is not a valid escape
and fails to compile. The student must double each backslash.
