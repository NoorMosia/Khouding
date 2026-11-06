# Problem 11, Fix compare versus assign (language-independent design)

**Sub-skill:** debug the `=`-for-`==` mistake.
**Difficulty:** 2

## Statement (student-facing)
This program should print whether `a` and `b` are equal, but it uses a single `=` (assign) where `==`
(compare) was meant, so it does not compile. Change the `=` to `==`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `True` or `False`.

## The planted bug
`bool areEqual = a = b;` assigns `b` into `a` (an `int`) and tries to store that `int` in a `bool`, which does
not typecheck. The compiler reports:

```
error CS0029: Cannot implicitly convert type 'int' to 'bool'
```

The fix is the comparison operator: `bool areEqual = a == b;`.

## Why it resists a trivial answer
The starter does not compile, so it fails every case. Only the `==` version produces the right `True`/`False`
across the equal and not-equal inputs. Here the compiler catches the classic trap for you.
