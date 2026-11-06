# Problem 06, Join with a comma (language-independent design)

**Sub-skill:** `string.Join(", ", array)` with the count-then-lines input shape.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` words (one per line). Print them joined with `", "` between each pair.

## I/O contract
- **Input:** first line `n`, then `n` words, one per line.
- **Output:** one line, the words joined by `", "`.

## Why it resists a trivial answer
The output depends on the words and count. Cases vary both including a single word (no comma), so a fixed
answer fails.

## Note
`string.Join(", ", array)` places the separator between elements, not at the start or end.
