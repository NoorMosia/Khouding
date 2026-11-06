# Problem 07, Base plus rate times units (language-independent design)

**Sub-skill:** a realistic two-operator formula where `*` must bind before `+`.
**Difficulty:** 2

## Statement (student-facing)
A charge is a base fee plus a per-unit rate multiplied by the number of units. Read the base fee, the rate,
and the units (each prompted on its own line, each a whole number). Print the total: `base + rate * units`.

## I/O contract
- **Input:** three lines, each a whole number: base fee, rate, units.
- **Output:** the three prompts, then the total charge on its own line.

## Why it resists a trivial answer
The natural wording ("base plus rate times units") maps exactly to the precedence rule: `rate * units` first,
then add the base. A student who parenthesizes as `(base + rate) * units` gets the wrong total on the varied
inputs.
