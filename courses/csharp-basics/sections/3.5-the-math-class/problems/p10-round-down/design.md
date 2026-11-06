# Problem 10, Round down (language-independent design)

**Sub-skill:** the deduce-from-the-library beat, use a cheatsheet-only function (`Math.Floor`).
**Difficulty:** 2

## Statement (student-facing)
Read a decimal value. Print it rounded DOWN to the nearest whole number. The reading did not walk through the
function for this; look it up on the cheatsheet and use it.

## I/O contract
- **Input:** one line, a decimal number.
- **Output:** the prompt, then the value rounded down on its own line.

## The deduce skill
`Math.Floor` rounds down to the nearest whole number. It is listed on this section's cheatsheet but not taught
in the reading. The point is reading the reference and calling a function you were not hand-held through, the
"training wheels off" skill this capstone is building.

## Why it resists a trivial answer
`3.7` rounds down to `3`, `3.2` also to `3`, and a whole value stays put. Only `Math.Floor` produces all of
them; ordinary rounding (`Math.Round`) would give `4` for `3.7` and fail.
