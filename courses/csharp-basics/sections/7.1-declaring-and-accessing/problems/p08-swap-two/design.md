# Problem 08, Swap two elements (language-independent design)

**Sub-skill:** swap two slots using a temporary.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers into a 2-slot array (index 0, then 1). Swap the two elements using a temporary
variable. Print `a[0]` then `a[1]`.

## I/O contract
- **Input:** two lines, two values.
- **Output:** two lines, the swapped `a[0]` then `a[1]`.

## Why it resists a trivial answer
The output is the input in reverse order. Cases vary the values, including equal values (swap is a no-op), so
fixed output fails.

## Note
A direct `a[0] = a[1]` without a temp loses the first value; use `temp`.
