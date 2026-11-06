# Pool p17, Round down (family D, updating & Math)

**Integrates:** 3.5 (the deduce-from-the-library beat, `Math.Floor`), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read a decimal value. Print it rounded DOWN to the nearest whole number. The function is on the cheatsheet,
not in the reading, look it up and use it.

## The deduce skill
`Math.Floor` rounds down. Cheatsheet-listed, not walked through in the reading, the read-the-library skill the
capstone section builds.

## Why it resists a trivial answer
`3.7` rounds down to `3`, not `4`. Only `Math.Floor` produces all cases; ordinary rounding would give `4` for
`3.7` and fail.
