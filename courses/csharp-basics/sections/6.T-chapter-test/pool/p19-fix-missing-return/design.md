# Pool p19, Fix the missing return (family F, fix the broken program)

**Integrates:** 6.3, debug.
**Difficulty:** 3

## Statement (student-facing)
The method `Sign` should return `non-negative` when `n` is 0 or more and `negative` otherwise. It only returns
in the `if` branch, so it does not compile. Add the missing return so every path returns a value.

## The planted bug
When `n` is negative the method reaches the end without returning. C# reports:

```
Program.cs(5,19): error CS0161: 'Program.Sign(int)': not all code paths return a value
```

The fix is a `return "negative";` for the negative case.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `non-negative` or `negative`.

## Why it resists a trivial answer
The program does not compile until every path returns. Cases cover both branches.
