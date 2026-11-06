# Pool p16, Hypotenuse (family D, updating & Math)

**Integrates:** 3.5 (nested `Math.Sqrt`/`Math.Pow`), 2.1/2.2.
**Difficulty:** 3

## Statement (student-facing)
Read the two legs of a right triangle (each prompted on its own line). Print the hypotenuse,
`Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2))`.

## I/O contract
- **Input:** two lines, each a number.
- **Output:** the two prompts, then the hypotenuse.

## Why it resists a trivial answer
Nests `Math.Pow` inside `Math.Sqrt` with arithmetic between. Pythagorean-triple inputs give clean whole
results (`5`, `10`, `13`, `17`) only if the nesting is correct. Verified via the CLI.
