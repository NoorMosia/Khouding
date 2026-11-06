# Exercises draft, 9.2 Iterating a list

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Visit every element of a list with a loop, using the same patterns as Chapter 7.2.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** `for (int i = 0; i < list.Count; i++)` with `list[i]`; `foreach (int x in list)` read-only;
  zero-count = loop runs zero times; filter/map loop shapes (same as 7.2 over arrays); the count-then-values
  input pattern builds the list, then the loop processes it. `foreach` is read-only (cannot assign to the
  loop variable to change the list; use indexed `for` to write elements).
- **OUT:** modifying (add/remove) while iterating (9.3); Contains/IndexOf/aggregates (9.4); methods (9.5);
  LINQ. The ONLY new thing vs 7.2 is `list.Count` replacing `a.Length`.

## Grading approach
- `stdout-match`, input via stdin. Reading motivates with "everything from 7.2 carries over." **Vary list
  count (incl. 0 and 1).** Every committed solution stays IN BOUNDS. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print each element (indexed for) | basic for walk | ● |
| p02 | same, using foreach | foreach walk | ● |
| p03 | print each with 1-based position | why you need i | ●● |
| p04 | print in reverse order | downward index | ●● |
| p05 | print only elements > 0 (filter shape) | filter as a loop | ●● |
| p06 | print each doubled (map shape) | map as a loop | ●● |
| p07 | sum all elements | accumulate | ●● |
| p08 | count elements greater than a read threshold | count-matching | ●● |
| p09 | print every other element (step += 2) | stepped index | ●● |
| p10 | count elements equal to a read target (foreach + count) | foreach + count | ●● |
| p11 | fix a bug: loop bound uses `<= list.Count` (off-by-one) | debug: bound | ●● |
| p12 | integrative capstone: filter + label (same as 7.2 p12, on a list) | combined | ●●● |

**Escalation:** p01-p02 the two walks; p03-p04 index-dependent; p05-p10 filter/map/sum/count/stepped/foreach-
count; p11 the off-by-one bound; p12 capstone.

## Per-problem intent (bones)
- **p01** read n values into a list; `for (i=0; i<list.Count; i++) print list[i]`. Count 0 -> nothing.
- **p02** same output via `foreach (int x in list) print x`.
- **p03** print `"<pos>: <value>"` with pos = i+1.
- **p04** loop from `list.Count-1` down to 0.
- **p05** `foreach`, print only `x > 0`; none/some/all-pass cases.
- **p06** `foreach`, print `x * 2`.
- **p07** sum with a loop; print total.
- **p08** read threshold; count `list[i] > threshold`.
- **p09** `for (i=0; i<list.Count; i+=2)` print `list[i]`.
- **p10** read target; `foreach`, count `x == target`.
- **p11** starter loops `i <= list.Count`; fix to `< list.Count`. Committed solution stays in bounds.
- **p12** capstone: filter (only positives) + running 1-based label over printed items.

## Notes
- **`list.Count` replaces `a.Length`** (the only structural difference from 7.2). All patterns carry over.
- **Zero-count case required** where a loop can run zero times. Also test count 1.
- **`foreach` is read-only** (same rule as 7.2); modifying elements needs the indexed `for`.
- Country-neutral. Terse statements. Prompts on their own line.
