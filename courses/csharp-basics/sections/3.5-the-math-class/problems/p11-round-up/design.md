# Problem 11, Round up (language-independent design)

**Sub-skill:** the deduce beat again, use a cheatsheet-only function (`Math.Ceiling`).
**Difficulty:** 2

## Statement (student-facing)
Read a decimal value. Print it rounded UP to the nearest whole number. As in the previous problem, look up the
function on the cheatsheet and use it.

## I/O contract
- **Input:** one line, a decimal number.
- **Output:** the prompt, then the value rounded up on its own line.

## The deduce skill
`Math.Ceiling` rounds up to the nearest whole number. Cheatsheet-listed, not taught in the reading. Same
read-the-library skill as p10, the opposite direction.

## Why it resists a trivial answer
`3.2` rounds up to `4`, `3.7` also to `4`, and a whole value stays put. Only `Math.Ceiling` produces all of
them; `Math.Floor` or `Math.Round` would fail at least one case.
