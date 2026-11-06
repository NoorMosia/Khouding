# Problem 02, Reuse the same name (language-independent design)

**Sub-skill:** the same local name in two methods does not collide.
**Difficulty:** 2

## Statement (student-facing)
Define two `static void` methods. `A` declares a local `int n = 10;` and prints it. `B` declares a local
`int n = 20;` and prints it. In `Main`, call `A` then `B`. The program should print:
```
10
20
```

## I/O contract
- **Input:** none.
- **Output:** `10` then `20`.

## Why it resists a trivial answer
Both methods use the name `n`, but they are separate variables, one per method. The reused name causes no
conflict.
