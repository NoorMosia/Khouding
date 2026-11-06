# Problem 09, Two RemoveAt calls (language-independent design)

**Sub-skill:** `RemoveAt` twice; remove the larger index first to avoid shift.
**Difficulty:** 3

## Statement (student-facing)
Read a count `n` (at least 2), then `n` integers into a list. Remove the last element, then the first element. Print the remaining elements.

## Note
Remove the last index first (`list.Count - 1`), then index 0. Removing the larger index first avoids the downward shift affecting index 0.
