# Exercises draft, 9.T Chapter 9 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T-8.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 9 region boss. Integrative: combines 9.1-9.5 (and Chapters 1-8) into realistic list scenarios.
No new material. Passing it lights the Chapter 9 region on the map.

## Skills it integrates (9.1-9.5 + Ch.1-8)
- 9.1 introducing `List<T>` (`new List<int>()`, `Add`, `list[i]`, `.Count`, sentinel build)
- 9.2 iterating (index `for` and `foreach` over a list; filter/map loop shapes)
- 9.3 modifying (`Add`, `Remove`, `RemoveAt`, `Insert`, `Clear`; the resizable observable)
- 9.4 operations (`Contains`, `IndexOf`; sum / average / max / min / count / conditional sum)
- 9.5 methods (pass a list by reference; element mutations visible; return a `List<T>`)
- Ch.1-8: types, input, arithmetic, decisions, loops, methods, arrays, strings, all operating on lists

## Scope boundary
- **Input IS used** (stdin). Standard shapes: the **count-then-values pattern** (read `n`, then `n` values via
  `Add`); or a **sentinel build** (read until a fixed token). Some problems also read a target value or
  threshold from stdin.
- Full list toolkit from this chapter, plus everything before. **No LINQ, no `Dictionary`, no `List.Sort()`
  as a drilled skill** (mention at most in the reading).
- Element types simple (`List<int>`, sometimes `List<string>`).

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **List anti-hardcoding (the Ch.9 rule, carried into the boss):** each pool problem's cases **vary the list
  contents and size**, including **size 0** (where the operation is defined there) and **size 1**, so a
  solution that assumes a fixed size or hardcodes an answer fails. The oracle is unchanged (stdout per stdin).

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, introduce & build | 3 | create + Add + Count + index (9.1) |
| B, iterate | 4 | for/foreach, filter/map, reverse (9.2) |
| C, modify | 4 | Remove/RemoveAt/Insert/Clear and their effects on Count (9.3) |
| D, operations | 5 | Contains/IndexOf(-1); sum/max/min/average/count-threshold (9.4) |
| E, lists in methods | 2 | pass by reference; return a list (9.5) |
| F, fix the broken program | 2 | a planted list bug |

*(3 + 4 + 4 + 5 + 2 + 2 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, introduce & build:** build a list from count-then-values and print its Count or an element; or read
  until a sentinel and report the count. Variants change the values and the count. Integrates 9.1.
- **B, iterate:** print each element (for or foreach); with 1-based positions; reversed; filtered (only
  those > 0); each doubled. Variants change the list content and which shape. Count-0 case. Integrates 9.2.
- **C, modify:** remove a value (present or absent); remove by index; insert at a position; clear and print
  new Count; remove all elements meeting a condition. Variants change the list and target. Integrates 9.3.
- **D, operations:** sum; average (double); max; min; count above a threshold; contains; indexOf with the -1
  sentinel; conditional sum. Variants change contents and the threshold/target. Seed max/min from `list[0]`;
  state empty-list rule. Verify double output via CLI. Integrates 9.4.
- **E, lists in methods:** a method that sums or doubles a list (value out or in-place mutation); a method
  that builds and returns a list. Variants change contents. Integrates 9.5.
- **F, fix the broken program:** a list program with a planted bug. Variants (pick 2 across attempts): a
  stale-index removal (forward loop calling `RemoveAt`, skips elements); `list[list.Count]` off-by-one;
  max seeded at 0 (wrong for all-negative); a method that reassigns the parameter instead of mutating;
  `<= list.Count` loop bound. The committed solution for every fix problem compiles, runs, and stays in bounds.

## Notes
- **Vary contents and size (incl. 0 and 1); stay in bounds.** 9.4 seed max/min from `list[0]`, state the
  empty-list rule per problem.
- **Oracle unchanged:** a list program is deterministic per stdin, so `gen`/`check` work as before. Verify
  double/average outputs under invariant culture.
- **The reference observable (9.5):** element mutations inside a method are visible to the caller;
  reassigning the parameter is not.
- **Contains and IndexOf are direct method calls** on `List<T>` (not hand-written loops as in 7.3/8.5).
- Prompts on their own line; prompt text is graded output.
- Country-neutral. `cheatsheets/` gathers 9.1-9.5 (+ Ch.1-8 as a library).
