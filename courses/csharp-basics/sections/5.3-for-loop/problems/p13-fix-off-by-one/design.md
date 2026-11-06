# Problem 13, Fix the off-by-one (language-independent design)

**Sub-skill:** spot and fix an off-by-one `for` bound.
**Difficulty:** 2

## Statement (student-facing)
The program should print 1 to `n`, one per line. It currently stops one early, printing only up to `n - 1`.
Fix the loop condition so `n` is included.

## The planted bug
The condition is `i < n`, so the loop ends before printing `n`. It compiles and runs, it just drops the last
value. The fix is `i <= n`.

## I/O contract
- **Input:** one line, a whole number `n`.
- **Output:** the prompt, then 1 to `n`, each on its own line.

## Why it resists a trivial answer
No compiler message; the bug drops the final value. Cases include `n = 1` (buggy prints nothing, correct
prints `1`), so only the `<=` fix passes all of them.
