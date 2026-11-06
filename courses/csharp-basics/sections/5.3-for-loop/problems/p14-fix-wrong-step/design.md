# Problem 14, Fix the wrong step (language-independent design)

**Sub-skill:** spot and fix a wrong `for` update.
**Difficulty:** 2

## Statement (student-facing)
The program should print the even numbers from 2 up to and including `n`, one per line. It currently prints
every number instead, because the update steps by 1. Fix the update so it steps by 2.

## The planted bug
The update is `i++`, so the counter goes 2, 3, 4, ... printing all numbers, not just evens. It compiles and
runs, just with the wrong step. The fix is `i += 2`.

## I/O contract
- **Input:** one line, a whole number `n`.
- **Output:** the prompt, then 2, 4, 6, ... up to `n`, each on its own line.

## Why it resists a trivial answer
No compiler message; the step is wrong. Cases include values where the buggy output (all numbers) differs
clearly from the correct output (evens only), so only the `i += 2` fix passes.
