# Problem 08, Fix the missing break (language-independent design)

**Sub-skill:** recognise and fix a missing `break`, which in C# is a compile error, not a run-time surprise.
**Difficulty:** 2

## Statement (student-facing)
The program maps a size code to a word: `1` is `small`, `2` is `medium`, `3` is `large`, and anything else is
`unknown`. It does not compile, because one case is missing its `break`. Add the missing `break` so it builds
and runs.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `small`, `medium`, `large`, `unknown`.

## Why it resists a trivial answer
In C# control cannot fall from one non-empty case into the next, so the missing `break` is reported as
`CS0163` at compile time. The program cannot even run until the `break` is added; the cases then confirm each
size and the default.
