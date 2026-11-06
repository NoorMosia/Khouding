# Pool p05, Adult or minor (family B, if / else / else if)

**Integrates:** 4.3.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read a whole number. Print `adult` if the age is 18 or over,
otherwise `minor`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `adult` or `minor`.

## Why it resists a trivial answer
Two-way choice: cases hit both branches and the inclusive 18 edge, so a hardcoded label or `>` instead of
`>=` fails.
