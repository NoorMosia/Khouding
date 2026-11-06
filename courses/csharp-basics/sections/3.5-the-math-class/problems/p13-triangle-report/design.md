# Problem 13, Triangle report (language-independent design)

**Sub-skill:** integrative capstone; read inputs, combine `Math` with arithmetic, print two formatted lines.
**Difficulty:** 3

## Statement (student-facing)
A right-angled triangular plot has two perpendicular sides (the legs). Read the two legs (each prompted on its
own line, each a whole number). Print two lines:
1. `Hypotenuse: ` then the hypotenuse to two decimals: `Math.Sqrt(Math.Pow(a,2) + Math.Pow(b,2))`.
2. `Area: ` then the area to two decimals: half of `a * b`.

## I/O contract
- **Input:** two lines, each a whole number: the two legs.
- **Output:** the two prompts, then the two labelled, `:F2`-formatted lines.

## Why it resists a trivial answer
Combines a nested `Math` call (hypotenuse), arithmetic with a forced decimal (area is `a * b / 2`, which must
keep its half), and formatting, from varying inputs. Legs are Pythagorean triples so the hypotenuse is clean,
and the area tests the half. Verified via the CLI under invariant culture.
