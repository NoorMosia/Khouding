# Problem 01, Private locals (language-independent design)

**Sub-skill:** a method's local is private to it.
**Difficulty:** 1

## Statement (student-facing)
Define a `static void` method `Helper` that declares a local `int x = 99;` and prints it. In `Main`, declare a
local `int x = 1;`, print it, then call `Helper`. The program should print:
```
1
99
```

## I/O contract
- **Input:** none.
- **Output:** `1` then `99`.

## Why it resists a trivial answer
The two `x` variables are separate, one per method. `Main` prints its own, then `Helper` prints its own. Each
local is private to its method.
