# p16, Fix the quotes (Family D, fix the broken program)

**Integrates:** reading and repairing; the bug is a 1.4 quoting one (`char` with double quotes).

## Statement (student-facing)
This program does not compile: a `char` is given a value in double quotes. Fix the quotes so it prints:

```
Omar
O
```

## The planted bug
`char initial = "O";` does not compile. Double quotes make a `string`; a `char` uses single quotes: `'O'`.

## Why it belongs in the boss
The debug family, quoting variant. The student must spot that the `char` needs single quotes.
