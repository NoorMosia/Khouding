# Problem 01, Positive, small or large (language-independent design)

**Sub-skill:** a two-level nest, the inner question only inside the positive branch.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. If it is positive, print `large positive`
when it is over 100, otherwise `small positive`. If it is not positive, print `not positive`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `large positive`, `small positive`, `not positive`.

## Why it resists a trivial answer
Three leaves, and the inner big/small question only applies to positives. Cases reach every leaf plus the
`> 100` edge at 100 and the zero edge, so a flattened or mis-ordered version misclassifies.
