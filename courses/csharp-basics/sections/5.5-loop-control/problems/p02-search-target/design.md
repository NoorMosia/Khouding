# Problem 02, Search for a target (language-independent design)

**Sub-skill:** `break` with a found/not-found flag.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter count, target, then values:` on its own line. Read a count `n` (line 1), a target (line 2), then
`n` more whole numbers. Print `found` if any value equals the target, otherwise `not found`. Stop searching
once a match is found.

## I/O contract
- **Input:** `n`, then the target, then `n` whole numbers.
- **Output:** the prompt, then `found` or `not found`.

## Why it resists a trivial answer
Cases put the target first, later, and absent, so a flag set on the match and tested after the loop is
required. `break` ends the search at the first match.

## Note
The target is read before the values so the comparison happens inside the loop without storing anything.
