# Problem 11, Fix the quotes (char to string) (language-independent design)

**Sub-skill:** debug a quoting mistake, single quotes where a `string` needs double.
**Difficulty:** 2

## Statement (student-facing)
This program should print a name. It does not compile: the text is in single quotes, which make a `char`
(one character only). Fix the quotes so it compiles and prints:

```
Sam
```

## The planted bug
`string name = 'Sam';` does not compile. Single quotes make a `char`, which holds exactly one character,
and `Sam` is three. Text longer than one character is a `string`, in double quotes: `"Sam"`.

## Why it resists a trivial answer
The starter does not compile, so it fails. Only switching the single quotes to double quotes makes a valid
`string` that prints `Sam`.
