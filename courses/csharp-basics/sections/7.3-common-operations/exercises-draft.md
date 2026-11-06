# Exercises draft, 7.3 Common array operations

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Compute a result by looping over an array: sum, max/min, count, search, average.

## Size & completion
- **14 problems**, lights at **8** (~60%). Full section (the workhorse operations).

## Scope (READ FIRST)
- **IN:** the standard operation loops over a filled array, total (`sum += a[i]`), maximum/minimum (seed from
  `a[0]`, compare the rest), count-matching (how many meet a test), contains/search (present? at what
  index?), average (`(double)sum / a.Length`). Reuses Ch.5 accumulator habits but over STORED values (more
  than one pass is possible). The count-then-values input pattern.
- **OUT:** arrays as method params (7.4); 2D (7.5); LINQ / `Array` methods (`.Max()`, `.Contains()`, `.Sort()`)
  , WRITE the loops. No sorting as a drilled skill (out of scope here). No jagged arrays.

## Grading approach
- `stdout-match`, input via stdin. **Vary array contents and length across cases.** For sum/count, include a
  length-0 case (sum 0, count 0). For max/min/average, state `n >= 1` (no empty). **Seed max/min from `a[0]`,
  not 0** (all-negative cases prove it). VERIFY every double/average expected via the CLI (invariant culture).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | sum of all elements | accumulate total | ● |
| p02 | average as a double (n >= 1) | sum / length | ●● |
| p03 | maximum (seed from a[0]) | running max | ●● |
| p04 | minimum (seed from a[0]) | running min | ●● |
| p05 | count elements greater than a read threshold | count-matching | ●● |
| p06 | does the array contain a read target (True/False) | contains | ●● |
| p07 | index of the first occurrence of a target, or -1 | search / index-of | ●● |
| p08 | count how many are even | count + condition | ●● |
| p09 | count how many are above the average (two passes) | multi-pass | ●●● |
| p10 | sum only the positive elements | conditional sum | ●● |
| p11 | the range (max - min) of the array | combine two ops | ●●● |
| p12 | how many times the max value appears | op + recount | ●●● |
| p13 | fix a bug: max seeded at 0 (wrong for all-negative) | debug: seed | ●● |
| p14 | model a scenario: a worded multi-operation report | integrative capstone | ●●● |

**Escalation:** p01-p04 the core aggregates (sum, average, max, min); p05-p08 count/contains/search; p09-p12
multi-pass and combined ops; p13 the seed bug; p14 capstone.

## Per-problem intent (bones)
- **p01** read n then n values; print the sum. n = 0 -> 0.
- **p02** average = `(double)sum / n`; n >= 1; verify exact printed form via CLI.
- **p03/p04** seed `max = a[0]` (resp. min), loop from index 1; n >= 1.
- **p05** read threshold; count `a[i] > threshold`.
- **p06** read target; print whether any element equals it (True/False).
- **p07** print the 1-based... no, 0-based index of the first match, or -1 if absent (state which; pick 0-based
  index of first match, -1 absent).
- **p08** count `a[i] % 2 == 0`.
- **p09** first pass: average; second pass: count elements strictly above it. n >= 1.
- **p10** sum only `a[i] > 0`.
- **p11** max minus min; n >= 1.
- **p12** find max, then count occurrences of that max.
- **p13** starter `int max = 0;` then compares; fails for an all-negative array. Fix: seed from `a[0]`.
- **p14** capstone: e.g. read scores, print count, sum, average, and highest, to a stated format.

## Notes
- **Seed max/min from `a[0]`** (the recurring bug is seeding at 0). p13 drills the fix; include an
  all-negative case elsewhere too.
- **State the empty-array rule per problem:** sum/count allow length 0; max/min/average/range require n >= 1.
- **Decide search return** (0-based index of first match, -1 if absent) and state it.
- **VERIFY double/average outputs via the CLI** under invariant culture (decimal point). Vary contents/length.
- Country-neutral. Terse statements. Prompts on their own line.
