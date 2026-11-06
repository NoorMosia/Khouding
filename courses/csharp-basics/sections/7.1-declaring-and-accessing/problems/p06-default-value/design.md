# Problem 06, The default value (language-independent design)

**Sub-skill:** slots start at the type default (`0` for int).
**Difficulty:** 2

## Statement (student-facing)
Read a size `n` and an index `i` (with `0 <= i < n`). Build a fresh `int` array of size `n` and print the value
at index `i` without assigning anything first.

## I/O contract
- **Input:** two lines, `n` then `i`.
- **Output:** one line, the value at `a[i]` (always `0`, the default).

## Why it resists a trivial answer
The output is always `0` here, but the point is building `new int[n]` and reading a valid slot. Cases vary `n`
and `i` to confirm the access is in bounds and the default holds for any slot.

## Note
`new int[n]` fills every slot with `0`; reading before writing is legal and gives the default.
