# Problem 02, Count vowels (language-independent design)

**Sub-skill:** count with a membership test (contains in a small set).
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print how many vowels (a, e, i, o, u, both cases) it contains.

## I/O contract
- **Input:** one line.
- **Output:** one line, the vowel count.

## Why it resists a trivial answer
The count depends on the input. Cases vary: mixed vowels/consonants, all vowels, no vowels, empty.

## Note
Use `"aeiouAEIOU".Contains(c)` or compare against each vowel. Empty string gives 0.
