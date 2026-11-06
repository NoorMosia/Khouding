# Pool p20, Fix the infinite loop (family F, fix the broken program)

**Integrates:** 5.1, debug.
**Difficulty:** 2

## Statement (student-facing)
The program should print 1 to `n`, one per line, with a `while` loop. As written it never ends, because the
counter is never increased, so the condition stays true forever. Add the counter update so the loop makes
progress and stops.

## The planted bug
The loop body prints the counter but never changes it, so the condition `i <= n` is always true and the loop
runs forever. The fix is to increment the counter each pass (`i++`).

## I/O contract
- **Input:** one line, a whole number `n`.
- **Output:** the prompt, then 1 to `n`, each on its own line.

## Why it resists a trivial answer
Without progress the program hangs. Once the increment is added, the cases (including `n = 0`, zero
iterations) confirm the loop prints the right range and terminates.

## Note
The buggy starter would loop forever if run; the fix is a one-line counter update. Hidden grading runs the
corrected solution, which always terminates.
