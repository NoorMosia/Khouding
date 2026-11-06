# Pool p20, Fix the missing break (family E, fix the broken program)

**Integrates:** 4.6, debug.
**Difficulty:** 2

## Statement (student-facing)
The program maps a medal rank to a name: `1` is `gold`, `2` is `silver`, `3` is `bronze`, and anything else is
`none`. It does not compile, because the first case is missing its `break`. Add the missing `break` so it
builds and runs.

## The planted bug
In C#, control cannot fall from one non-empty `case` into the next, so the missing `break` after `case 1` is a
compile error:

```
Program.cs(11,13): error CS0163: Control cannot fall through from one case label ('case 1:') to another
```

The fix is a `break;` at the end of the `case 1` body.

## Why it resists a trivial answer
The program cannot even run until the `break` is added. The cases then confirm each rank and the `default`.
