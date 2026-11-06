# Problem 08, Zero numerator (language-independent design)

**Sub-skill:** the zero-numerator edge, `0 / n` is `0`.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number `n` (not zero). Print two lines: `0 / n`, then `n / n`.

## I/O contract
- **Input:** one line, a non-zero whole number.
- **Output:** the prompt, then `0 / n` (which is `0`), then `n / n` (which is `1`).

## Why it resists a trivial answer
`0 / n` is always `0` regardless of `n`, which is the edge being shown. The second line `n / n` is always `1`
for a non-zero `n`. The divisor is never zero, so this never triggers the divide-by-zero error named in the
reading.

## Authoring note
`n` is never zero in any case (name-don't-handle the divide-by-zero). The two lines together confirm the
student divided rather than printed a constant.
