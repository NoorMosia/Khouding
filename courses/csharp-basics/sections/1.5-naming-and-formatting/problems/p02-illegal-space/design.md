# Problem 02, Fix an illegal name (has a space) (language-independent design)

**Sub-skill:** legality rule, a name cannot contain a space.
**Difficulty:** 1

## Statement (student-facing)
This program does not compile: the variable name has a space in it. Join the words into one legal name
(camelCase) so it compiles and prints:

```
42
```

## The planted bug
`int total price = 42;` is illegal because a name cannot contain a space. The compiler reads `total` as the
whole name and then does not expect `price`. Join them: `totalPrice`.

## Why it resists a trivial answer
The starter does not compile, so it fails. Only making the name one legal identifier (and using it in both
the declaration and the print) makes it compile and print the target.
