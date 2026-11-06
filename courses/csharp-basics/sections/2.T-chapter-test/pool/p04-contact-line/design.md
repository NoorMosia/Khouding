# Pool p04, Contact line (family A, echo & intake)

**Integrates:** 2.1 (prompt + read), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Read a name and an email, each prompted on its own line. Using interpolation, print one line:
`<name> can be reached at <email>`.

## I/O contract
- **Input:** two lines: a name, then an email.
- **Output:** the two prompts, then the composed line.

## Why it resists a trivial answer
Two varying inputs in a sentence with literal text between them, including a name with a space. Only reading
both and interpolating them passes.
