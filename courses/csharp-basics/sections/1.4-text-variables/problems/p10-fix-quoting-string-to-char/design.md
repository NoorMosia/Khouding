# Problem 10, Fix the quotes (string to char) (language-independent design)

**Sub-skill:** debug a quoting mistake, double quotes where a `char` needs single.
**Difficulty:** 2

## Statement (student-facing)
This program should print a letter grade. It does not compile: the `char` is given a value in double
quotes, which makes a `string`. Fix the quotes so it compiles and prints:

```
A
```

## The planted bug
`char grade = "A";` does not compile. Double quotes make a `string`, and a `char` cannot hold a `string`.
A `char` value uses single quotes: `'A'`.

## Why it resists a trivial answer
The starter does not compile, so it produces no output and fails. Only switching the double quotes to
single quotes makes a valid `char` that prints `A`.
