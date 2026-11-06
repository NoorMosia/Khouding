# Problem 11, Fix the argument order (language-independent design)

**Sub-skill:** recognise that arguments match parameters by position.
**Difficulty:** 2

## Statement (student-facing)
The program reads two numbers `a` then `b` and should print `a - b` using a method `PrintDiff(int first, int
second)` that prints `first - second`. The call passes the arguments in the wrong order, so the result has the
wrong sign. Fix the call so it prints `a - b`.

## The planted bug
`PrintDiff(b, a)` sends `b` to `first` and `a` to `second`, computing `b - a`. It compiles and runs, just with
the arguments swapped. The fix is `PrintDiff(a, b)`.

## I/O contract
- **Input:** two lines, `a` then `b`.
- **Output:** the prompt, then `a - b`.

## Why it resists a trivial answer
No compiler message; the order is wrong. Cases where `a` and `b` differ make the swapped output (opposite
sign) clearly wrong, so only the correct order passes.
