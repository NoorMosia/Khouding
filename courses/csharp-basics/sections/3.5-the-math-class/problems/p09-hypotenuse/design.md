# Problem 09, Hypotenuse (language-independent design)

**Sub-skill:** nested `Math` calls, a call as an argument to another call.
**Difficulty:** 3

## Statement (student-facing)
Read the two legs of a right triangle (each prompted on its own line). Print the hypotenuse, the square root
of the sum of the squares: `Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2))`.

## I/O contract
- **Input:** two lines, each a number: the two legs.
- **Output:** the two prompts, then the hypotenuse on its own line.

## Why it resists a trivial answer
This nests `Math.Pow` inside `Math.Sqrt` with arithmetic between. The inputs are Pythagorean triples
(`3,4`, `6,8`, `5,12`, `8,15`) so the result is a clean whole number (`5`, `10`, `13`, `17`), but it only
comes out right if the nesting and arithmetic are correct. Verified via the CLI.
