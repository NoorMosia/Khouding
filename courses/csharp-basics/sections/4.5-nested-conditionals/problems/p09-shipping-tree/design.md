# Problem 09, Shipping tree (language-independent design)

**Sub-skill:** a realistic two-factor tree, weight band then zone within each band.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter weight and zone:` on its own line. Read a weight (line 1, a whole number) and a zone (line 2,
`1` for local, anything else for far). If the weight is 5 or less it is light, otherwise heavy. Within each
weight, zone `1` is local and any other zone is far. Print one of `light local`, `light far`, `heavy local`,
`heavy far`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then one of the four labels.

## Why it resists a trivial answer
Two factors, four leaves. Cases reach every leaf plus the weight edge at 5, so a tree that drops a branch or
gets the weight boundary wrong fails.
