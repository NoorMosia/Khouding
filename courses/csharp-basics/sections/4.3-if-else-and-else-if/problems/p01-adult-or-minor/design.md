# Problem 01, Adult or minor (language-independent design)

**Sub-skill:** two-way `if`/`else`, exactly one branch runs.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read it. If the age is at least 18, print `adult`; otherwise print
`minor`.

## I/O contract
- **Input:** one line, a whole number (the age).
- **Output:** the prompt, then exactly one of `adult` or `minor`.

## Why it resists a trivial answer
Every input prints one of the two words, so both branches must exist. The boundary (18 is adult) forces `>=`,
and the cases hit both sides.
