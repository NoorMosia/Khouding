# Problem 07, Compute, then tier (language-independent design)

**Sub-skill:** compute a value with arithmetic, then tier it with a nested decision.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter quantity and unit price:` on its own line. Read a quantity (line 1) and a unit price (line 2),
both whole numbers. Compute the total as quantity times price. If the total is 100 or more, print `premium`
when it is 500 or more, otherwise `bulk`. If the total is under 100, print `standard`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then one of `premium`, `bulk`, `standard`.

## Why it resists a trivial answer
The branch depends on a computed value, not a raw input, and the premium split sits inside the bulk branch.
Cases hit all three leaves and both the 100 and 500 edges, so the multiplication and the nested bounds must
both be right.
