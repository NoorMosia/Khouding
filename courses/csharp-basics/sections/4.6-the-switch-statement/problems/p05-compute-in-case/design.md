# Problem 05, Compute in a case (language-independent design)

**Sub-skill:** a case body that computes, then prints (arithmetic inside a switch).
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter option and quantity:` on its own line. Read an option (line 1, `1`, `2`, or `3`) and a quantity
(line 2, a whole number). Each option has a unit price: option 1 costs 2, option 2 costs 5, option 3 costs 10.
Print the total, which is the unit price times the quantity. For any other option print `invalid option`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the computed total or `invalid option`.

## Why it resists a trivial answer
Each case uses a different price, so the printed total depends on both the option and the quantity. Cases hit
each option with a different quantity, a bad option reaching `default`, and a zero quantity, so a switch that
hardcodes one total or drops the default fails.
