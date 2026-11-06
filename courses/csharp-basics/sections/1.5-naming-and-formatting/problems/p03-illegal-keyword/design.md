# Problem 03, Fix an illegal name (a keyword) (language-independent design)

**Sub-skill:** legality rule, a reserved keyword cannot be a variable name.
**Difficulty:** 2

## Statement (student-facing)
This program does not compile: the variable is named `class`, which is a reserved keyword. Rename it to
something legal (keep its meaning) so it compiles and prints:

```
5
```

## The planted bug
`int class = 5;` is illegal because `class` is a C# keyword and already means something to the compiler. A
legal, meaningful name is something like `classSize`.

## Why it resists a trivial answer
The starter does not compile, so it fails. Only renaming the variable (in both the declaration and the
print) to a non-keyword identifier makes it compile and print the target.
