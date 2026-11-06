# p15, Fix the type (Family D, fix the broken program)

**Integrates:** reading and repairing; the bug is a 1.3 wrong-type one (`int` where `double` is needed).

## Statement (student-facing)
This program does not compile: a fractional price is stored in an `int`. Fix the type so it prints:

```
Tea
1.75
```

## The planted bug
`int price = 1.75;` does not compile. A price can be fractional, so make it a `double`.

## Why it belongs in the boss
The debug family, wrong-type variant. The student must recognise that the value demands a `double`.
