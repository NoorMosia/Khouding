# Exercises draft, 9.3 Modifying a list

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A list can grow and shrink after creation: add, remove, insert, and clear.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** `list.Add(x)` (appends, raises Count by 1); `list.Remove(x)` (removes the FIRST element equal to x,
  returns bool, Count drops by 1, or stays the same if absent); `list.RemoveAt(i)` (removes by index, Count
  drops by 1, elements above i shift down); `list.Insert(i, x)` (inserts at index i, elements at i and above
  shift up, Count rises by 1); `list.Clear()` (removes all, Count becomes 0). Every modification changes
  Count and may shift indices. The key contrast with Chapter 7 arrays: the list's size changes after creation.
- **OUT:** LINQ; iterating while modifying (a common bug, named but not drilled as a problem); `Sort()`;
  removing all elements matching a condition in one call (just loop + Remove in 9.3). No `Dictionary`.

## Grading approach
- `stdout-match`, input via stdin. **Motivation-first reading**: show the array limitation (size fixed),
  then the list modification operations. **Vary the list contents and the removal target** (target present,
  target absent, multiple copies). Every committed solution stays IN BOUNDS (indices computed from Count;
  never commit a case that would throw). Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | add n values, add one more read value, print new Count | Add | ● |
| p02 | build a list, remove a read value, print Count | Remove + Count | ●● |
| p03 | build a list, try to remove a value not present, print bool result and Count | Remove absent = false | ●● |
| p04 | build a list, RemoveAt a read index, print remaining elements | RemoveAt | ●● |
| p05 | build a list, insert a value at a read index, print all elements | Insert | ●● |
| p06 | build a list, clear it, print Count (0) | Clear | ●● |
| p07 | build a list, remove all elements equal to a read value (loop), print remaining | loop + Remove | ●●● |
| p08 | build a list, add n more values, print final Count | Add more | ●● |
| p09 | build a list, remove by index twice, print remaining | two RemoveAt | ●●● |
| p10 | build a list, insert at the front (index 0) and back (Count), print all | Insert at edges | ●●● |
| p11 | build a list, remove negatives using a backward loop (avoid stale-index) | loop direction | ●●● |
| p12 | fix a bug: removes by index in a forward loop (stale-index, skips elements) | debug: stale index | ●●● |

**Escalation:** p01 Add only; p02-p03 Remove present/absent; p04-p06 RemoveAt/Insert/Clear; p07-p10 combined
and edge cases; p11 the backward-loop trick for safe removal; p12 the stale-index bug.

## Per-problem intent (bones)
- **p01** add n values, add one extra read value; print `list.Count` (n + 1).
- **p02** add n values; `list.Remove(v)`; print `list.Count` (n - 1 if found).
- **p03** add n values; `bool ok = list.Remove(missing)`; print `ok` then `list.Count` (unchanged).
- **p04** add n values; read a valid index; `list.RemoveAt(i)`; print each remaining element.
- **p05** add n values; read index and value; `list.Insert(i, v)`; print each element.
- **p06** add n values; `list.Clear()`; print `list.Count` (0).
- **p07** add n values; read a target; while `list.Remove(target)` returns true, keep removing; print elements.
- **p08** add n values; add m more; print final `list.Count` (n + m).
- **p09** add n values (n >= 2); read two distinct valid indices; remove larger index first to avoid shift; print remaining.
- **p10** add n values; insert a read value at index 0; insert another read value at new `list.Count`; print all.
- **p11** add n values (mix of negative and non-negative); loop BACKWARDS (`i = list.Count-1` down to 0) and
  `RemoveAt(i)` for negative elements; print remaining. Backward loop avoids the stale-index shift.
- **p12** starter removes negatives in a FORWARD loop (index stale after RemoveAt; some negatives survive);
  fix to a backward loop or rebuild approach. Committed solution is correct.

## Notes
- **Every modification changes Count** (and may shift indices). After `RemoveAt(i)`, all elements above i
  slide down: the element that was at `i+1` is now at `i`. After `Insert(i, x)`, elements at `i` and above
  slide up.
- **p03: Remove absent returns false** (no exception, just a bool false and Count unchanged). Include this case
  to set the expectation correctly.
- **p12: the stale-index bug** (removing in a forward loop shifts elements down, causing the loop to skip the
  element now at the removed index). The fix: iterate backward, or collect the survivors into a new list.
- Vary list size incl. 0 (Clear result) and 1. Country-neutral. Terse statements.
