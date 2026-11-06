# Problem 10, Spaces to hyphens (language-independent design)

**Sub-skill:** `Replace` with a specific char target.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Replace every space with a hyphen and print the result.

## I/O contract
- **Input:** one line.
- **Output:** one line, with all spaces replaced by `-`.

## Why it resists a trivial answer
The output depends on how many spaces and where. Cases vary multiple, one, and none (unchanged), so a fixed
answer fails.

## Note
`s.Replace(" ", "-")` replaces every occurrence.
