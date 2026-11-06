# Problem 05, Fix the frame (language-independent design)

**Sub-skill:** the semicolon and braces are part of the program's structure, not decoration.
**Difficulty:** 2

## Statement (student-facing)
This program is meant to print:

```
It compiles now.
```

It does not compile yet. Fix the frame (do not change the text) so it runs and prints that line.

## I/O contract
- **Input:** none.
- **Output:** the single line `It compiles now.`

## The planted break
The `Console.WriteLine(...)` statement is missing its closing semicolon, so the program will not compile.
The print text itself is already correct; only the structure is wrong.

## Why it resists a trivial answer
A program that does not compile produces no output and fails every case. The student must repair the
actual structural error (the missing `;`). Changing the text instead would print the wrong line and still
fail the exact-match.
