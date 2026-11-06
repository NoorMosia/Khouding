# Problem 04, Replace (language-independent design)

**Sub-skill:** `Replace(old, new)` replaces every occurrence.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then the substring to replace, then the replacement. Print the result.

## I/O contract
- **Input:** three lines: the text, the old substring, the new substring.
- **Output:** one line, the text with every occurrence of old replaced by new.

## Why it resists a trivial answer
The output depends on all three inputs. Cases cover a single occurrence, multiple occurrences, and a case where
the old text is absent (returns the original unchanged), so a fixed answer fails.

## Note
`Replace` replaces every occurrence. If the old text is absent, the original is returned unchanged.
