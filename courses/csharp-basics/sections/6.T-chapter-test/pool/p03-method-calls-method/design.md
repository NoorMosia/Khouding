# Pool p03, Method calls method (family A, define & call)

**Integrates:** 6.1.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Rule` that prints exactly `====`. Define a `static void` method `Frame` that
calls `Rule`, prints `| mid |`, then calls `Rule` again. In `Main`, call `Frame` once. The program prints:
```
====
| mid |
====
```

## I/O contract
- **Input:** none.
- **Output:** the three lines above.

## Why it resists a trivial answer
`Frame` reuses `Rule` twice and `Main` calls only `Frame`, so the nested calls (Main to Frame to Rule) must be
wired correctly.
