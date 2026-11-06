# Pool p01, Echo a profile (family A, echo & intake)

**Integrates:** 2.1 (prompt + read), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your name:` and `Enter your city:`, each on its own line, reading each. Using interpolation,
print `Name: <name>` then `City: <city>`.

## I/O contract
- **Input:** two lines: a name, then a city.
- **Output:** the two prompts, then the two labelled lines.

## Why it resists a trivial answer
Two varying inputs across varied cases (including a value with a space); only reading both and interpolating
them passes.
