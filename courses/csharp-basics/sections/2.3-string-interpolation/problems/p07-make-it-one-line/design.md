# Problem 07, Make it one line (language-independent design)

**Sub-skill:** convert the Chapter 1 two-line label/value pattern into one interpolated line.
**Difficulty:** 2

## Statement (student-facing)
The starter reads a temperature and prints `Temperature: <temp>` using a `Write` for the label and a
`WriteLine` for the value, across two prints. Rewrite those two prints as a single interpolated `WriteLine`
that produces exactly the same output.

## I/O contract
- **Input:** one line holding a whole number (the temperature).
- **Output:** the prompt, then `Temperature: <temp>` on its own line.

## Why it resists a trivial answer
The output must match the original two-print version exactly, including the single space after the colon. The
varying input confirms the value is really interpolated, not copied.
