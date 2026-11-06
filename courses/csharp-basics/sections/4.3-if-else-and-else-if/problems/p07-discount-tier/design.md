# Problem 07, Discount tier (language-independent design)

**Sub-skill:** first-true-wins; a value that matches two bands takes the first.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the spend:` on its own line and read it. Print the discount tier: `gold` for 100 or more,
`silver` for 50 or more, `none` otherwise.

## I/O contract
- **Input:** one line, a whole number (the spend).
- **Output:** the prompt, then one of `gold`, `silver`, `none`.

## Why it resists a trivial answer
A spend of `150` satisfies both `>= 100` and `>= 50`. Because the first true condition wins, it must print
`gold`, not `silver`. A student who orders the chain `silver` first (or checks `>= 50` before `>= 100`) would
wrongly print `silver` for `150`. The overlap case is what tests the rule.
