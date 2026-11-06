# Problem 03, Flatten to && (language-independent design)

**Sub-skill:** recognise a nest that is really one combined condition, and flatten it.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter ticket and id (0 or 1):` on its own line. Read a ticket flag (line 1) and an id flag (line 2),
each `1` or `0`. Print `enter` only when both are `1`. Print nothing otherwise. Write it as a single `if` with
`&&`, not a nested `if`.

## I/O contract
- **Input:** two lines, each `0` or `1`.
- **Output:** the prompt, then `enter` on a line, or no further output.

## Why it resists a trivial answer
Only the both-`1` case prints. Cases cover all four combinations, so printing unconditionally or checking one
flag fails. The point is that the nested form collapses to `ticket == 1 && id == 1`.

## Note
Flags are read as `int` and compared with `== 1` (no bool parsing yet).
