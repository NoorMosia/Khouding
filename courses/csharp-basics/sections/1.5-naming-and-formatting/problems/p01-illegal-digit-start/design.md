# Problem 01, Fix an illegal name (starts with a digit) (language-independent design)

**Sub-skill:** legality rule, a name cannot start with a digit.
**Difficulty:** 1

## Statement (student-facing)
This program does not compile: the variable name starts with a digit. Rename it to something legal (keep
its meaning) so it compiles and prints:

```
10
```

## The planted bug
`int 2count = 10;` is illegal because an identifier cannot start with a digit. A legal name starts with a
letter or underscore, for example `count` or `count2`.

## Why it resists a trivial answer
The starter does not compile, so it produces no output and fails. Only renaming the variable to a legal
identifier makes it compile and print the target.
