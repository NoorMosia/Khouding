# Problem 10, Fix break vs continue (language-independent design)

**Sub-skill:** recognise a `break` that should be a `continue`.
**Difficulty:** 3

## Statement (student-facing)
The program should sum all the positive values among `n` read numbers, skipping the non-positive ones. It
currently stops at the first non-positive value instead of skipping it. Fix it so it skips and keeps going.

## The planted bug
On a non-positive value the loop uses `break`, which ends the loop, so values after the first non-positive are
never added. The fix is `continue`, which skips just that value and keeps looping.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the sum of the positives on one line.

## Why it resists a trivial answer
No compiler message; the loop simply stops too early. Cases place a non-positive value before more positives
(the buggy `break` drops them) and a non-positive first value (buggy sum `0`), so only the `continue` fix
passes all cases.
