# Problem 09, Compute in one branch (language-independent design)

**Sub-skill:** one branch prints a fixed line, the other computes then prints.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the quantity:` on its own line and read it. If the quantity is 0, print `nothing to pack`.
Otherwise work out how many boxes of 10 are needed (round a partial box up) and print that number.

## I/O contract
- **Input:** one line, a whole number (the quantity).
- **Output:** the prompt, then either `nothing to pack` or the box count.

## Why it resists a trivial answer
The two branches do different kinds of work: one prints a literal line, the other runs arithmetic
(`(quantity + 9) / 10`) first. A student must put the computation inside the `else` block, not before the
`if`, or a quantity of 0 would still run the math. The rounding-up cases (`11` to `2`, `95` to `10`) fail any
plain `quantity / 10`, and the zero case forces the first branch.
