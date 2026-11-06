# Problem 09, Fix the out-of-scope use (language-independent design)

**Sub-skill:** fix a helper that reaches for a variable it was never passed.
**Difficulty:** 3

## Statement (student-facing)
The method `PrintPlusTen` should print a score plus 10, but it refers to `score`, a variable that exists only
in `Main`. The program does not compile. Fix it by giving the method an `int` parameter and passing `Main`'s
score in.

## The planted bug
`PrintPlusTen` uses `score`, which is out of scope there (it belongs to `Main`). C# reports:

```
Program.cs(7,27): error CS0103: The name 'score' does not exist in the current context
```

The fix is `static void PrintPlusTen(int value)` using `value + 10`, called as `PrintPlusTen(score)`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the number plus 10.

## Why it resists a trivial answer
The program does not compile until the value is passed in as a parameter. Cases vary the input, so the method
must use its parameter rather than any outside variable.
