# Problem 07, Write then read a slot (language-independent design)

**Sub-skill:** overwrite one slot and observe the before/after.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers into a 3-slot array (index 0, 1, 2). Then read an index `i` (0-2) and a new value.
Print the current value at `a[i]`, assign the new value to `a[i]`, then print `a[i]` again.

## I/O contract
- **Input:** five lines: three values, an index (0-2), a new value.
- **Output:** two lines: the old value at `a[i]`, then the new value.

## Why it resists a trivial answer
Both lines depend on input and the chosen index. Cases vary values, index, and the new value, so fixed output
fails.

## Note
Stay in bounds: index cases are 0, 1, or 2.
