# Problem 15, Staircase (language-independent design)

**Sub-skill:** visual composition capstone; exact reproduction of a shape.
**Difficulty:** 3

## Statement (student-facing)
Print this staircase exactly. Each row has one more `#` than the one above:

```
#
##
###
####
```

## I/O contract
- **Input:** none.
- **Output:** four lines: `#`, `##`, `###`, `####`.

## Why it resists a trivial answer
The shape only matches if each line has exactly the right number of `#`. It is the "look what I can draw
with text" payoff at the top of the escalation, and pure precision: one `#` too many or too few fails.

*(When loops arrive in a later chapter, a shape like this can be produced with a loop instead of four fixed
lines. For now it is four lines, and that is fine.)*
