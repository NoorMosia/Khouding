# Pool p19, Fix break vs continue (family F, fix the broken program)

**Integrates:** 5.5, debug.
**Difficulty:** 3

## Statement (student-facing)
The program should sum all the positive values among `n` read numbers, skipping the non-positive ones. It
currently stops at the first non-positive value instead of skipping it. Fix it so it skips and keeps going.

## The planted bug
On a non-positive value the loop uses `break`, ending the loop, so values after the first non-positive are
never added. The fix is `continue`, which skips just that value and keeps looping.

## I/O contract
- **Input:** the count `n`, then `n` whole numbers.
- **Output:** the prompt, then the sum of the positives.

## Why it resists a trivial answer
No compiler message; the loop stops too early. Cases place a non-positive before more positives (the buggy
`break` drops them) and a non-positive first value (buggy sum `0`), so only the `continue` fix passes.
