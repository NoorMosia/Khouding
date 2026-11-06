# Problem 09, Fix the missing call (language-independent design)

**Sub-skill:** recognise that a defined method does nothing until it is called.
**Difficulty:** 2

## Statement (student-facing)
The program should print exactly `ready`. The method `Announce` is defined to print it, but `Main` never
calls it, so the program prints nothing. Add the call so the program prints:
```
ready
```

## The planted bug
`Announce` exists but is never called, and defining a method does not run it. The fix is to call `Announce();`
from `Main`.

## I/O contract
- **Input:** none.
- **Output:** `ready` on one line.

## Why it resists a trivial answer
The buggy program compiles and runs but produces no output. Only calling the method makes it print, so the fix
is the one call.
