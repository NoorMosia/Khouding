# Problem 01, Print inside Main (language-independent design)

**Sub-skill:** a statement goes inside `Main` to run.
**Difficulty:** 1

## Statement (student-facing)
Add one line inside `Main` so the program prints exactly:

```
Hello from C#!
```

## I/O contract
- **Input:** none.
- **Output:** the single line `Hello from C#!`

## Why it resists a trivial answer
The surrounding frame is given, but the student must place a `Console.WriteLine` inside `Main`. A line
placed outside `Main` will not run (and will not compile as a loose statement), so the program must be
completed in the one correct place. The target text is unique to this problem, so a solution cannot be
carried over from another.
