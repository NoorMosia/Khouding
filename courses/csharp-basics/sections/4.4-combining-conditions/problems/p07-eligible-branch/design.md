# Problem 07, Eligible branch (language-independent design)

**Sub-skill:** a compound `&&` condition driving an `if`/`else`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read a whole number. If the age is 18 or over and under 65, print
`eligible`. Otherwise print `no`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `eligible` or `no`.

## Why it resists a trivial answer
The band is `age >= 18 && age < 65`, so 18 is in and 65 is out. Cases hit both edges and both sides, so a
wrong comparison or a swapped operator misclassifies at least one.
