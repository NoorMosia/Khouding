# Problem 10, Share each (language-independent design)

**Sub-skill:** decimal division is the *correct* tool when the answer should keep its fraction.
**Difficulty:** 2

## Statement (student-facing)
A total amount is split evenly among a number of people. Read the total and the number of people (each
prompted on its own line, each a whole number). Print each person's share as a decimal. Force a decimal with
`(double)`.

## I/O contract
- **Input:** two lines, each a whole number: total, then number of people.
- **Output:** the two prompts, then each person's share as a decimal on its own line.

## Why it resists a trivial answer
Here the decimal matters: splitting `10` among `4` is `2.5` each, not `2`. Plain integer division would lose
the fraction, so the student must force a `double`. Values are chosen so each share prints cleanly.
