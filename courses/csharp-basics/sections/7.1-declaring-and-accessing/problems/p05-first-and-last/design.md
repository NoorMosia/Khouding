# Problem 05, First and last (language-independent design)

**Sub-skill:** `a[0]` and `a[a.Length - 1]`.
**Difficulty:** 2

## Statement (student-facing)
Read four whole numbers into a 4-slot array. Print the first element, then the last element, each on its own
line.

## I/O contract
- **Input:** four lines, four values.
- **Output:** two lines, `a[0]` then `a[a.Length - 1]`.

## Why it resists a trivial answer
Both printed values depend on input. Cases vary them, including equal ends, so fixed output fails. Using
`a.Length - 1` (not the literal 3) is the point.

## Note
The last index is `a.Length - 1`, not `a.Length`.
