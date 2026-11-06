# Problem 12, Fix the sentinel (language-independent design)

**Sub-skill:** handle the `-1` not-found sentinel before using an `IndexOf` result.
**Difficulty:** 3

## Statement (student-facing)
The program reads a line and a substring and should print `found at <index>` if the substring is present, or
`not found` if it is absent. The starter crashes when the substring is absent. Fix it.

## I/O contract
- **Input:** two lines: the text, then the substring.
- **Output:** one line: `found at <index>` or `not found`.

## Why it resists a trivial answer
Cases cover both present and absent. The fix must check `IndexOf` for `-1` before printing the position.

## Note
The bug is using the `IndexOf` result as an index without checking for `-1`; on absent input it reads `s[-1]`
and throws. The committed solution checks `!= -1`.
