# Problem 06, Grade, then distinction (language-independent design)

**Sub-skill:** an `else if` band chain with a nested decision inside the top band only.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter a score:` on its own line and read a whole number. Assign a band: `A` for 90 or more, `B` for 80
to 89, `C` for 70 to 79, `fail` below 70. For the A band only, print `A with distinction` when the score is 95
or more, otherwise `A`. The other bands print `B`, `C`, or `fail`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `A with distinction`, `A`, `B`, `C`, `fail`.

## Why it resists a trivial answer
The distinction split lives inside the A band. Cases hit both A sub-leaves (with the 95 edge), each other
band, and the band boundaries, so a chain missing the nested split or with wrong bounds fails.
