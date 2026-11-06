# Exercises draft, 9.1 Introducing List\<T\>

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A `List<T>` is a growable collection of one type, used like an array but without a fixed size.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate (first list, no iteration patterns yet).

## Scope (READ FIRST)
- **IN:** `using System.Collections.Generic;`; `new List<int>()` (starts empty); `list.Add(x)` (appends);
  `list[i]` (zero-based index, same syntax as arrays); `list.Count` (current element count); valid range
  `0..Count-1`. `ArgumentOutOfRangeException` for out-of-range index, NAMED without building a throwing
  problem. Building a list by count-then-values (read n, add n values) AND by sentinel (read until "stop").
  The motivation: arrays need a size up front; `List<T>` does not.
- **OUT:** iteration patterns over all elements (9.2); modifying (9.3); Contains/IndexOf/aggregates (9.4);
  lists in methods (9.5). No `List<string>` operations beyond Add/index/Count in this section. No sorting,
  no LINQ, no `Dictionary`.

## Grading approach
- `stdout-match`, input via stdin. **Motivation-first reading** (standing style): show the count-up-front
  problem with arrays, then `List<T>` as the fix. **Vary list size (incl. 0 and 1)** across cases; a fixed
  answer fails. Every committed solution stays IN BOUNDS. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read n values, add them, print list.Count | new + Add + Count | ● |
| p02 | add 3 read values, print list[1] | index | ● |
| p03 | add values, print first and last (list[0], list[Count-1]) | first/last | ●● |
| p04 | read n values, read an index, print list[index] | Add + index read | ●● |
| p05 | add n values, print Count then list[0] (two things) | Count + index | ●● |
| p06 | read values until "stop", print the count | sentinel build | ●● |
| p07 | read values until "stop", print the last value added | sentinel + last | ●● |
| p08 | add 3 values, overwrite list[1] with a new value, print list[1] | assign by index | ●● |
| p09 | compare: same output with an array vs a list (structural, one case each) | side-by-side | ●● |
| p10 | fix a bug: reads list[list.Count] (off-by-one) -> list[list.Count-1] | debug: bounds | ●● |

**Escalation:** p01-p02 create + add + Count + first index; p03-p05 first/last, read-index, combined;
p06-p07 the sentinel build; p08 assign-by-index; p09 the array-vs-list comparison; p10 the off-by-one fix.

## Per-problem intent (bones)
- **p01** read n, loop n times adding each; print `list.Count` (equals n).
- **p02** `list.Add` three reads; print `list[1]`.
- **p03** add n values; print `list[0]` then `list[list.Count - 1]`.
- **p04** add n values; read index (0..n-1); print `list[index]`.
- **p05** add n values; print `list.Count` then `list[0]`.
- **p06** read lines; while line != "stop", add to list; print `list.Count`.
- **p07** read until "stop"; print `list[list.Count - 1]` (the last added). Input guarantees at least 1 value.
- **p08** add 3 reads; read a new value; `list[1] = newValue`; print `list[1]`.
- **p09** structural: one-case problem that shows the same output from a list and from an equivalent array.
- **p10** starter prints `list[list.Count]` (throws); fix to `list[list.Count - 1]`. Committed solution in bounds.

## Notes
- **`using System.Collections.Generic;`** is required in every solution. Teaching note in the reading:
  `List<T>` lives in this namespace; the `using` brings it into scope.
- **Same zero-based indexing as arrays.** Vary size incl. 0 (Count = 0 after adding nothing) and 1.
- Country-neutral. Terse statements. Prompts on their own line.
