# Pool p18, Fix the precedence (family E, fix the broken program)

**Integrates:** 3.1 (parentheses), debug.
**Difficulty:** 2

## Statement (student-facing)
Each person pays the base price plus an extra, and there are several people, so the total is
`(base price + extra) * people`. The starter is missing the parentheses and computes
`base price + extra * people`. Add the parentheses.

## The planted bug
Without parentheses, `*` binds first, so only `extra` is multiplied by `people`. It compiles and runs, printing
the wrong total. The fix is `(basePrice + extra) * people`.

## Why it resists a trivial answer
No compiler message; the starter silently computes the wrong value, which differs from the correct one on
every varied case.
