# p17, Fix the name (Family D, fix the broken program)

**Integrates:** reading and repairing; the bug is a 1.5 legality one (name starts with a digit).

## Statement (student-facing)
This program does not compile: a variable name starts with a digit. Rename it legally (keep its meaning,
and fix every use) so it prints:

```
65
```

## The planted bug
`int 1stScore = 40;` is illegal because a name cannot start with a digit. Rename it (for example
`firstScore`) in both the declaration and where it is used.

## Why it belongs in the boss
The debug family, illegal-name variant. The student must rename consistently so the program compiles and
the sum prints.
