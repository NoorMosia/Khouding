# Problem 02, Call it three times (language-independent design)

**Sub-skill:** reuse, call one method multiple times.
**Difficulty:** 1

## Statement (student-facing)
Define a `static void` method named `Beep` that prints exactly `beep`. Call it three times from `Main` so the
program prints:
```
beep
beep
beep
```

## I/O contract
- **Input:** none.
- **Output:** `beep` three times, each on its own line.

## Why it resists a trivial answer
The method is defined once and called three times, the reuse point. Three separate inline prints would miss
the structure the problem is drilling.
