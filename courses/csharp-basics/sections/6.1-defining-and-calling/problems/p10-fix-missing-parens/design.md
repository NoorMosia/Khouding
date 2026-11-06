# Problem 10, Fix the missing parentheses (language-independent design)

**Sub-skill:** recognise that a call needs parentheses.
**Difficulty:** 2

## Statement (student-facing)
The program should print exactly `shown`. The call in `Main` is written without parentheses, so it does not
compile. Add the parentheses to make it a real call.

## The planted bug
Writing `Show;` is not a call; C# reports:

```
Program.cs(12,9): error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement
```

The fix is `Show();`.

## I/O contract
- **Input:** none.
- **Output:** `shown` on one line.

## Why it resists a trivial answer
The program cannot run until the parentheses are added. Once fixed, the single call prints the line.
