# Problem 04, Two methods (language-independent design)

**Sub-skill:** define several methods and call them in order.
**Difficulty:** 2

## Statement (student-facing)
Define two `static void` methods: `Header` prints exactly `=== START ===`, and `Footer` prints exactly
`=== END ===`. In `Main`, call `Header`, then print a line `body`, then call `Footer`, so the program prints:
```
=== START ===
body
=== END ===
```

## I/O contract
- **Input:** none.
- **Output:** the three lines above, in order.

## Why it resists a trivial answer
Two distinct methods must be defined and called in the right order around a middle line, so the ordering of
calls is observable.
