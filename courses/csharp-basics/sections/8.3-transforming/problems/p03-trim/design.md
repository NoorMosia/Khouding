# Problem 03, Trim between markers (language-independent design)

**Sub-skill:** `Trim()` strips leading/trailing whitespace; the `[...]` markers make the effect visible.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print the trimmed text wrapped in square brackets, exactly `[trimmed]`, so the stripped
whitespace is visible.

## I/O contract
- **Input:** one line (may have leading and/or trailing spaces).
- **Output:** one line, `[` + trimmed text + `]`.

## Why it resists a trivial answer
The trimmed content and the amount stripped both depend on the input. Cases vary leading-only, trailing-only,
both, and already-clean text, so a fixed answer fails.

## Note
`Trim()` removes only leading and trailing whitespace; internal spaces are kept.
