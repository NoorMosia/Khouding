# Pool p07, Grade bands (family B, if / else / else if)

**Integrates:** 4.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a score:` on its own line and read a whole number. Print `A` for 90 or more, `B` for 80 to 89,
`C` for 70 to 79, and `fail` below 70.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `A`, `B`, `C`, `fail`.

## Why it resists a trivial answer
First-true-wins band chain. Cases hit every band and the 90/70 boundaries, so a mis-ordered chain or wrong
bound misclassifies.
