# Problem 01, Define and call (language-independent design)

**Sub-skill:** define a `static void` method and call it.
**Difficulty:** 1

## Statement (student-facing)
Define a `static void` method named `Hello` that prints exactly `Hello, world!`. Call it once from `Main` so
the program prints:
```
Hello, world!
```

## I/O contract
- **Input:** none.
- **Output:** `Hello, world!` on one line.

## Why it resists a trivial answer
The point is the structure: a method defined and called. Later problems in the family build on this, calling
the method multiple times and from loops, where a single inline print would not suffice.

## Note
`Main` must call the method; a method defined but never called produces no output.
