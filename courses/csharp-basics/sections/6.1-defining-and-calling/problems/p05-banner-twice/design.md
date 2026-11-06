# Problem 05, Banner twice (language-independent design)

**Sub-skill:** a method with a multi-line body, called more than once.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method named `Banner` whose body prints two lines: `****` then `WELCOME`. Call `Banner`
twice from `Main`, so the program prints:
```
****
WELCOME
****
WELCOME
```

## I/O contract
- **Input:** none.
- **Output:** the two-line banner, printed twice (four lines total).

## Why it resists a trivial answer
The method body is two lines, and calling it twice produces four lines in the right order. The whole banner is
reused by one call each time.
