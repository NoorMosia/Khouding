# Problem 08, Two-factor gate (language-independent design)

**Sub-skill:** `&&` across two independent factors, one of them a 0/1 flag.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter age and membership (0 or 1):` on its own line. Read the age (a whole number) on the first line
and the membership flag (`1` for member, `0` for not) on the second line. Print `in` if the person is 18 or
over and a member, otherwise `out`.

## I/O contract
- **Input:** two lines. Line 1 is the age; line 2 is `0` or `1`.
- **Output:** the prompt, then `in` or `out`.

## Why it resists a trivial answer
Both factors must hold. Cases cover all four true/false combinations plus the age edge at 18, so a program
that checks only one factor, or hardcodes an answer, fails.

## Note
There is no bool parsing yet, so the membership flag is read as an `int` and compared with `== 1`.
