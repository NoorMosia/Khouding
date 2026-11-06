# Problem 05, Value versus reference (language-independent design)

**Sub-skill:** the 6.4 contrast, a copied int vs a shared array, in one program.
**Difficulty:** 3

## Statement (student-facing)
Write two methods:
- `static void BumpValue(int x)` that does `x = x + 1`.
- `static void BumpElement(int[] a)` that does `a[0] = a[0] + 1`.

In `Main`, read an integer `n` and a single value into a 1-element array. Call `BumpValue(n)` and
`BumpElement(array)`. Then print `n`, then `array[0]`, each on its own line.

## I/O contract
- **Input:** two lines: the integer `n`, then the array's single value.
- **Output:** two lines: `n` (unchanged), then `array[0]` (increased by 1).

## Why it resists a trivial answer
The two outputs demonstrate the difference: `n` is unchanged (copied), `array[0]` is increased (shared). Cases
vary both inputs, so fixed output fails.

## Note
`BumpValue` changes only its own copy; `BumpElement` changes the shared array. This is the whole point of the
section.
