# Problem 06, Pass or fail label (language-independent design)

**Sub-skill:** return a `string`.
**Difficulty:** 2

## Statement (student-facing)
Define a `static string` method `Label` that takes an `int score` and returns `pass` if the score is 50 or
more, otherwise `fail`. In `Main`, prompt `Enter a score:` on its own line, read a whole number, call `Label`,
and print the returned string.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `pass` or `fail`.

## Why it resists a trivial answer
The method returns one of two strings based on the boundary at 50. Cases hit both sides and the inclusive
boundary, so the comparison and both return paths must be right.
