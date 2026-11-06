# Problem 08, Size bucket (language-independent design)

**Sub-skill:** map a value to one of several labelled buckets with a chain.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the count:` on its own line and read it. Print its size bucket: `small` under 10, `medium` 10 to
99, `large` 100 to 999, `huge` 1000 or more.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `small`, `medium`, `large`, `huge`.

## Why it resists a trivial answer
Four buckets, ordered smallest first so each `<` bound catches only its range. Cases land in every bucket, so
all four branches and their boundaries must be correct.
