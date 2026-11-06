# Problem 09, Join with a read separator (language-independent design)

**Sub-skill:** `string.Join(sep, array)` with a separator supplied by the user.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` words (one per line), then a separator string. Print the words joined by that
separator.

## I/O contract
- **Input:** `n`, then `n` words, then the separator string.
- **Output:** one line, words joined by the separator.

## Why it resists a trivial answer
The output depends on both the words and the separator. Cases vary the separator and word count.

## Note
Separator is read last and passed first to `string.Join`.
