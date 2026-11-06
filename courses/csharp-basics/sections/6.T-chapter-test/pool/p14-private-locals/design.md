# Pool p14, Private locals (family D, scope)

**Integrates:** 6.4.
**Difficulty:** 1

## Statement (student-facing)
Define a `static void` method `Helper` that declares a local `int x = 99;` and prints it. In `Main`, declare a
local `int x = 1;`, print it, then call `Helper`. The program prints:
```
1
99
```

## I/O contract
- **Input:** none.
- **Output:** `1` then `99`.

## Why it resists a trivial answer
The two `x` variables are separate, one per method. Each local is private to its method.
