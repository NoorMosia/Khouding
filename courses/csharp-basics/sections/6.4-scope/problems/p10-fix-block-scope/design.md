# Problem 10, Fix the block scope (language-independent design)

**Sub-skill:** fix a local used outside the block where it was declared.
**Difficulty:** 3

## Statement (student-facing)
The program should read a number and print twice its value. It declares `doubled` inside an inner block, then
tries to print it outside that block, so it does not compile. Fix the scope so `doubled` is visible where it
is printed (declare it in the method, not inside the inner block).

## The planted bug
`doubled` is declared inside `{ ... }` and used after the block closes, where the name no longer exists:

```
Program.cs(12,27): error CS0103: The name 'doubled' does not exist in the current context
```

The fix is to declare `doubled` at the method level (before or without the inner block) so it is in scope at
the print.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n * 2`.

## Why it resists a trivial answer
The program does not compile until the variable is in scope at its use. Cases vary `n` (including 0 and a
negative), so the fix must compute and print `n * 2` for all of them.
