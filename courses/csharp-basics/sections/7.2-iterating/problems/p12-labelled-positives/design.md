# Problem 12, Labelled positives (language-independent design)

**Sub-skill:** combine a filter with a running label (integrative capstone).
**Difficulty:** 3

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print only the elements greater than 0, each labelled
with its 1-based position among the printed elements, in the form `label: value`. The label counts only the
elements that are printed (first printed is 1, second is 2, and so on).

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** one line per positive element, `label: value`, labels counting 1, 2, 3, ... (nothing if none).

## Why it resists a trivial answer
Both which elements print and their labels depend on the values. Cases cover none, some, and all positive,
plus length 0. The label is the count of printed items, not the array index.

## Note
Keep a separate counter that only advances when an element is printed. Zero does not count as positive.
