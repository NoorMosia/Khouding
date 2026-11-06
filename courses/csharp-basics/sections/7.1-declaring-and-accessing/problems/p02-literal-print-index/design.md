# Problem 02, Build from a literal (language-independent design)

**Sub-skill:** the `{ ... }` literal form plus indexing.
**Difficulty:** 1

## Statement (student-facing)
Build the array `{ 10, 20, 30 }` using the literal form. Print the element at index 1.

## I/O contract
- **Input:** none.
- **Output:** one line, the element at index 1 (`20`).

## Why it resists a trivial answer
Structural: the values and index are fixed, so the output is inherently fixed. One case covers it; the skill
is writing the literal and indexing it, not resisting a hardcode.

## Note
`{ 10, 20, 30 }` builds a length-3 array already filled; `a[1]` is the middle element.
