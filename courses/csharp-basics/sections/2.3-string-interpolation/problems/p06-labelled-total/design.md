# Problem 06, Labelled total (language-independent design)

**Sub-skill:** the one-line payoff; a labelled value in a single interpolated `WriteLine`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter the first number:` and `Enter the second number:`, each on its own line, reading each as a whole
number. On one line, using interpolation, print `Total: ` followed by their sum.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `Total: <sum>` on its own line.

## Why it resists a trivial answer
The sum varies per case, so the hole must be filled from the computed total. This is the labelled value that
Chapter 1 could only do across two prints, now on one interpolated line.
