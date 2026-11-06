# Problem 10, Literal quotes (language-independent design)

**Sub-skill:** the `\"` escape, printing a double-quote character.
**Difficulty:** 2

## Statement (student-facing)
Print exactly this line, including the quote marks around `hello`:

```
She said "hello".
```

## I/O contract
- **Input:** none.
- **Output:** the single line `She said "hello".`

## The idea
A double quote normally ends a string. To put a real `"` inside the text, escape it as `\"`. So the string
is `"She said \"hello\"."`.

## Why it resists a trivial answer
Without the escape, the quotes would end the string early and the program would not compile. The student
must use `\"` to include the literal quote characters.
