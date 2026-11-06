# Exercises draft, 9.4 List operations

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Compute a result from a list by looping: the same aggregate patterns as Chapter 7.3, now on a list, plus
Contains and IndexOf.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** `list.Contains(x)` (bool; is x anywhere in the list); `list.IndexOf(x)` (0-based index of the first
  occurrence, or -1 if absent, same sentinel as 7.3/8.2); the 7.3 aggregate loop patterns applied to a list:
  sum, average (`(double)sum / list.Count`), maximum/minimum (seed from `list[0]`, n >= 1),
  count-matching (how many elements pass a test), conditional sum, range (max - min). The reading points
  explicitly back to 7.3: the same loop shapes work on any indexed, Count-bearing sequence; only the
  container changes.
- **OUT:** LINQ (`.Sum()`, `.Max()`, `.Contains()` as extension methods); `List.BinarySearch`; `Sort`;
  multi-pass operations beyond count-above-average (that was 7.3 p09; may revisit). No `Dictionary`.

## Grading approach
- `stdout-match`, input via stdin (count-then-values). **Vary contents and size** (incl. size 0 where defined,
  size 1, all-negative for max/min). Seed max/min from `list[0]`; state empty-list rule per problem. The
  -1 sentinel for IndexOf carries from 7.3/8.2. Oracle CLI generates expecteds. VERIFY double/average
  outputs via CLI.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | sum of all elements | accumulate total | ● |
| p02 | average as a double (n >= 1) | sum / Count | ●● |
| p03 | maximum (seed from list[0]) | running max | ●● |
| p04 | minimum (seed from list[0]) | running min | ●● |
| p05 | Contains a read value (True/False) | Contains | ●● |
| p06 | IndexOf a read value (or -1) | IndexOf + sentinel | ●● |
| p07 | count elements above a read threshold | count-matching | ●● |
| p08 | sum only the positive elements | conditional sum | ●● |
| p09 | the range (max - min) of the list | combine two ops | ●●● |
| p10 | how many times the max value appears | find max, then count | ●●● |
| p11 | fix a bug: max seeded at 0 (wrong for all-negative) | debug: seed | ●● |
| p12 | capstone: print count, sum, average, and max as a four-line report | multi-operation | ●●● |

**Escalation:** p01-p04 core aggregates; p05-p06 Contains/IndexOf; p07-p08 count-matching and conditional sum;
p09-p10 combined ops; p11 the seed bug; p12 capstone.

## Per-problem intent (bones)
- **p01** sum loop; print total. Empty list -> 0.
- **p02** `(double)sum / list.Count`; n >= 1; verify via CLI.
- **p03** seed `max = list[0]`; loop from 1; n >= 1. Include all-negative case.
- **p04** seed `min = list[0]`; loop from 1 with `<`; n >= 1. Include all-positive case.
- **p05** `list.Contains(v)` -> True/False. Vary present/absent.
- **p06** `list.IndexOf(v)` -> index or -1. Vary position/absent/first-of-duplicates.
- **p07** loop count `list[i] > threshold`. Vary none/some/all; incl. size 0.
- **p08** sum only `list[i] > 0`. Include all-negative (sum 0) and size 0.
- **p09** max minus min; n >= 1. Include all-equal (range 0) and negatives.
- **p10** find max (seed from list[0]), then count occurrences; n >= 1.
- **p11** starter `int max = 0`; fails for all-negative. Fix: seed from `list[0]`. All-negative case required.
- **p12** capstone: print `Count: n`, `Sum: s`, `Average: avg`, `Max: m`. n >= 1. Include a fractional average.

## Notes
- **`list.Contains` and `list.IndexOf` are LIBRARY calls** (not loops), in contrast to the 7.3 approach where
  the student wrote the loop. This is intentional: the reading notes that `List<T>` provides these directly,
  unlike plain arrays. Both are still deterministic per the oracle.
- **Seed max/min from `list[0]`**; p11 drills the fix. State empty-list rules per problem.
- **VERIFY double/average outputs via CLI** under invariant culture (same discipline as 7.3 p02).
- Vary size incl. 0 and 1. Country-neutral. Terse statements.
