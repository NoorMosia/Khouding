# Problem 09, Pass either way (language-independent design)

**Sub-skill:** an `||` gate where either route is enough.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter score and bonus (0 or 1):` on its own line. Read the score (a whole number) on the first line
and a bonus flag (`1` or `0`) on the second line. Print `pass` if the score is 90 or more or the bonus flag is
`1`, otherwise `fail`.

## I/O contract
- **Input:** two lines. Line 1 is the score; line 2 is `0` or `1`.
- **Output:** the prompt, then `pass` or `fail`.

## Why it resists a trivial answer
`||` fails only when both routes fail. Cases include the both-false fail, each single-true path, and the score
edge at 90, so checking only one route misclassifies.

## Note
The bonus flag is read as an `int` and compared with `== 1` (no bool parsing yet).
