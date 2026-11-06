# Pool p18, Fix the else-if order (family E, fix the broken program)

**Integrates:** 4.3, debug.
**Difficulty:** 2

## Statement (student-facing)
The program should print `A` for a score of 90 or more, `B` for 80 to 89, `C` for 70 to 79, and `fail` below
70. The `else if` chain is in the wrong order, so high scores are labelled `C`. Reorder the bands so each
score lands in the right one.

## The planted bug
The chain tests `score >= 70` before `score >= 90`. Because the first true condition wins, a 95 matches the
`>= 70` band first and prints `C`, never reaching the A band. It compiles and runs, just classifies wrongly.
The fix is to test the tightest condition first (`>= 90`, then `>= 80`, then `>= 70`).

## Why it resists a trivial answer
No compiler message. Cases include 95, 90, and 85, which the buggy order mislabels as `C`, so only the
correctly ordered chain passes all of them.
