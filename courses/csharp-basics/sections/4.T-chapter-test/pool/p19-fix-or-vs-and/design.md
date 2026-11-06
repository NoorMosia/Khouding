# Pool p19, Fix or vs and (family E, fix the broken program)

**Integrates:** 4.4, debug.
**Difficulty:** 2

## Statement (student-facing)
The program should print `True` only when the number is in the range 10 to 20 inclusive, and `False`
otherwise. It uses `||`, so it prints `True` for everything. Fix the operator.

## The planted bug
`x >= 10 || x <= 20` is true for every integer (every number is either at least 10 or at most 20). It compiles
and runs, printing `True` always. The fix is `x >= 10 && x <= 20`.

## Why it resists a trivial answer
No compiler message. The bug only shows outside the band: cases include 5 and 25, which must be `False`. Only
the `&&` fix passes all cases.
