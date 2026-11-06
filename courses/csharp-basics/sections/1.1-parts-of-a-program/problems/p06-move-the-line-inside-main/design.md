# Problem 06, Move the line inside Main (language-independent design)

**Sub-skill:** code only runs inside `Main`. The sharpest test of "where does my code go."
**Difficulty:** 2

## Statement (student-facing)
This program is meant to print:

```
Now it runs.
```

The print line is in the wrong place: it sits in the class body, outside `Main`, so it never runs. Move it
inside `Main` so the program prints that line.

## I/O contract
- **Input:** none.
- **Output:** the single line `Now it runs.`

## The planted mistake
The `Console.WriteLine(...)` statement is placed directly in the class body, not inside any method. C# does
not allow a loose statement there, so the program will not compile, and even conceptually the statement is
not part of what runs when the program starts.

## Why it resists a trivial answer
This is the keystone of the section: a statement only executes when it is inside `Main`. The student has to
move it into `Main`'s braces. Leaving it outside keeps the program broken; any other edit that does not put
a correct statement inside `Main` fails the exact-match.
