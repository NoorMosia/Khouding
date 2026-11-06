# Problem 06, Method calls method (language-independent design)

**Sub-skill:** a method body that calls another method.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Line` that prints exactly `----`. Define a `static void` method `Box` that
calls `Line`, then prints `| hi |`, then calls `Line` again. In `Main`, call `Box` once, so the program
prints:
```
----
| hi |
----
```

## I/O contract
- **Input:** none.
- **Output:** the three lines above.

## Why it resists a trivial answer
`Box` reuses `Line` by calling it twice, and `Main` calls only `Box`. The nesting of calls (Main to Box to
Line) is the skill, not three inline prints.
