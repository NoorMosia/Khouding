# Problem 12, Eligibility capstone (language-independent design)

**Sub-skill:** combine three factors (one of them a range) into one compound condition driving an `if`/`else`.
**Difficulty:** 3

## Statement (student-facing)
A loan is approved only when all of these hold: monthly income is at least 2000, age is 21 to 65 inclusive,
and the applicant is employed. Prompt `Enter income, age, employed (0 or 1):` on its own line. Read income
(line 1), age (line 2), and an employed flag (line 3, `1` or `0`). Print `approved` if every condition holds,
otherwise `declined`.

## I/O contract
- **Input:** three lines. Line 1 income, line 2 age, line 3 the `0`/`1` flag. All whole numbers.
- **Output:** the prompt, then `approved` or `declined`.

## Why it resists a trivial answer
The condition is `income >= 2000 && age >= 21 && age <= 65 && employed == 1`. Cases knock out one factor at a
time, add an all-pass, and hit both age edges, so any dropped factor or wrong edge fails at least one case.

## Note
The employed flag is read as an `int` and compared with `== 1` (no bool parsing yet).
