# Problem 06, Parenthesize to a target (language-independent design)

**Sub-skill:** add parentheses to control the order and reach a required value.
**Difficulty:** 2

## Statement (student-facing)
The numbers `2`, `4`, `3` with `+` then `*` normally give `2 + 4 * 3 = 14`. Print `18` instead by adding
parentheses so the addition happens first. Print the value of your parenthesized expression.

## I/O contract
- **Input:** none.
- **Output:** `18` on its own line.

## Why it resists a trivial answer
The target `18` is only reached by `(2 + 4) * 3`, so the student must place the parentheses correctly rather
than copy the default `14`. The lesson is using parentheses to force the order you need.

## Authoring note
The expected is generated from the solution `(2 + 4) * 3`. A student could print the literal `18`, but the
family's input-driven problems (p03-p05, p07-p10) carry the anti-hardcoding weight; this one isolates the
"where do the parentheses go" skill.
