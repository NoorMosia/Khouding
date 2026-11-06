# Problem 08, Fix the missing semicolon (language-independent design)

**Sub-skill:** recognise and fix a missing `do-while` trailing semicolon.
**Difficulty:** 2

## Statement (student-facing)
The program prints 1 to `n` with a `do-while`, but it does not compile: the `while (...)` at the end of the
`do` block is missing its semicolon. Add the `;` so it builds and runs.

## The planted bug
A `do-while` is one statement that ends at its condition, so it needs a trailing `;`. Without it, C# reports:

```
Program.cs(15,23): error CS1002: ; expected
```

The fix is `} while (i <= n);`.

## I/O contract
- **Input:** one line, a whole number `n`.
- **Output:** the prompt, then 1 to `n`, each on its own line (and `1` when `n` is 0, the guaranteed pass).

## Why it resists a trivial answer
The program cannot run until the semicolon is added. The cases then confirm the `do-while` behavior, including
the guaranteed first pass on `n = 0`.
