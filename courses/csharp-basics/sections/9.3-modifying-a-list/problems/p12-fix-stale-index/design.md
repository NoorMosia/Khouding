# Problem 12, Fix the stale index (language-independent design)

**Sub-skill:** forward-loop stale index after `RemoveAt`; fix with backward loop.
**Difficulty:** 3

## Statement (student-facing)
The program should remove all negative elements from a list and print the remaining ones. With consecutive
negatives it skips some. Fix it.

## Note
The bug: a forward loop calls `RemoveAt(i)`, then `i++` skips the element that slid into position `i`.
Fix: loop backward from `list.Count - 1` down to 0.
