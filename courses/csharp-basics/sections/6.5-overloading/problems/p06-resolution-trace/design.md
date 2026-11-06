# Problem 06, Which overload runs (language-independent design)

**Sub-skill:** see how a call resolves to a specific overload.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Greet`: `static void Greet()` prints exactly `hi`, and
`static void Greet(string name)` prints `hi, ` followed by the name. In `Main`, call `Greet()`, then
`Greet("Sam")`, then `Greet()` again. The program should print:
```
hi
hi, Sam
hi
```

## I/O contract
- **Input:** none.
- **Output:** the three lines above.

## Why it resists a trivial answer
Each call resolves by its arguments: no argument runs the parameterless overload, one `string` argument runs
the `string` overload. The output shows which version each call selected, so both overloads must behave
differently.
