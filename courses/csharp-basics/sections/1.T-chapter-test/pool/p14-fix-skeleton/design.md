# p14, Fix the skeleton (Family D, fix the broken program)

**Integrates:** reading and repairing integrated code; the bug is a 1.1 structural one (missing `;`).

## Statement (student-facing)
This program does not compile. Fix the structural problem so it prints:

```
20
60
```

## The planted bug
The `int quantity = 3` line is missing its semicolon. Add it.

## Why it belongs in the boss
The debug family: the student has to read a working-looking multi-variable program, spot the structural
break, and fix it. A value-varied variant (this one is the missing-semicolon case).
