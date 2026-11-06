# Problem 11, Fix the reassigned parameter (language-independent design)

**Sub-skill:** mutate elements, do not reassign the parameter.
**Difficulty:** 3

## Statement (student-facing)
`DoubleAll` is meant to double every element so `Main` prints the doubled array. It prints the original values
instead. Fix it.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** each doubled element, one per line.

## Why it resists a trivial answer
The output must be the doubled values. The bug reassigns the parameter to a new array (`a = copy`), which the
caller never sees. The fix mutates elements through the shared reference. Cases vary values and length.

## Note
Reassigning the parameter does not reach the caller. Write `a[i] = a[i] * 2` instead of building and assigning
a new array to `a`.
