# Problem 06, Read and pass (language-independent design)

**Sub-skill:** `Main` reads multiple values and passes them to a method.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Describe` that takes a `string name` and an `int age`, and prints the line
`<name> is <age>` (for example `Ada is 36`). In `Main`, prompt `Enter name and age:` on its own line, read the
name (line 1) and the age (line 2), and pass both to `Describe`.

## I/O contract
- **Input:** line 1 the name, line 2 a whole number age.
- **Output:** the prompt, then `<name> is <age>`.

## Why it resists a trivial answer
The method formats a line from two parameters read by `Main`. Cases vary both the name and the age, so the
values must flow through the parameters.

## Note
Build the line with interpolation, for example `$"{name} is {age}"`.
