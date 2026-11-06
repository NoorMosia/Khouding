# Pool p20, Fix the no-match call (family F, fix the broken program)

**Integrates:** 6.5, debug.
**Difficulty:** 3

## Statement (student-facing)
`Add` has a two-parameter and a three-parameter overload, but `Main` calls `Add(a)` with a single argument,
which matches neither. Fix the call so it adds the two numbers `a` and `b` that `Main` read.

## The planted bug
`Add(a)` supplies one argument, and no overload takes one. C# reports:

```
Program.cs(21,27): error CS1501: No overload for method 'Add' takes 1 arguments
```

The fix is to call `Add(a, b)`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then their sum.

## Why it resists a trivial answer
The program does not compile until the call matches an overload. Cases vary the two numbers.
