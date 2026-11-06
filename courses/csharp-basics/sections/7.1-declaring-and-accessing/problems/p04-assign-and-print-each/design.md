# Problem 04, Assign and print each (language-independent design)

**Sub-skill:** write each slot by index, then read each back.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers into a 3-slot array (index 0, 1, 2 in order). Print the three slots, each on its own
line, in index order.

## I/O contract
- **Input:** three lines, three values.
- **Output:** three lines, `a[0]`, `a[1]`, `a[2]`.

## Why it resists a trivial answer
Each printed line depends on its stored value. Cases vary all three, so fixed output fails.

## Note
Access each slot explicitly (`a[0]`, `a[1]`, `a[2]`); no loop yet.
