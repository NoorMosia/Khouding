# Pool p17, Fix assign vs equal (family E, fix the broken program)

**Integrates:** 4.1 / 4.2, debug.
**Difficulty:** 2

## Statement (student-facing)
The program should print `zero` when the number is 0 and `nonzero` otherwise. It does not compile, because the
condition uses a single `=` (assignment) where it needs `==` (comparison). Fix the operator.

## The planted bug
`if (n = 0)` tries to assign 0 to `n` and use the result as a condition. An `int` is not a `bool`, so C#
rejects it:

```
Program.cs(9,13): error CS0029: Cannot implicitly convert type 'int' to 'bool'
```

The fix is `if (n == 0)`.

## Why it resists a trivial answer
The program cannot run until `==` replaces `=`. The cases then confirm both outcomes across the 0 boundary.
