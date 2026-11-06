# Pool p11, Two-factor gate (family C, combining & nesting)

**Integrates:** 4.4.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter age and license (0 or 1):` on its own line. Read an age (line 1) and a license flag (line 2,
`1` or `0`). Print `may drive` if the age is 16 or over and the license flag is `1`, otherwise `no`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then `may drive` or `no`.

## Why it resists a trivial answer
Both factors must hold. Cases cover all four true/false combinations plus the age edge at 16, so a program
checking only one factor fails.

## Note
The license flag is read as an `int` and compared with `== 1` (no bool parsing yet).
