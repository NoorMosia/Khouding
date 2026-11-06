# Exercises draft, 7.T Chapter 7 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T-6.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 7 region boss. Integrative: combines 7.1-7.5 (and Chapters 1-6) into realistic array scenarios.
No new material. Passing it lights the Chapter 7 region on the map.

## Skills it integrates (7.1-7.5 + Ch.1-6)
- 7.1 declaring & indexing (`new`, `[]`, `.Length`, bounds)
- 7.2 iterating (index `for`, `foreach`, filter/map loop shapes)
- 7.3 common operations (sum, max/min, count, search, average)
- 7.4 arrays & methods (pass by reference, the mutation observable, return an array)
- 7.5 multidimensional (`int[,]`, `GetLength`, nested iteration)
- Ch.1-6: types, input, arithmetic, decisions, loops, and methods, all operating on arrays

## Scope boundary
- **Input IS used** (stdin, prompts on their own line, prompt text graded). The standard shape is the
  **count-then-values pattern** (read `n`, then `n` values into an array); 2D problems read dimensions then
  the grid row by row.
- Full array toolkit from this chapter, plus everything before. **No `List<T>`/resizing** (Ch.9), **no jagged
  arrays**, **no LINQ / `Array` methods** (write the loops). Methods are `static`; `Main` drives the I/O.
- Element types simple (`int[]`, sometimes `string[]`; `int[,]` for 2D).

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **Array anti-hardcoding (the Ch.7 rule, carried into the boss):** each pool problem's cases **vary the
  array contents and length**, including **length 0** (where the operation is defined there, e.g. sum/count)
  and **length 1**, so a solution that assumes a fixed size or hardcodes an answer fails. 2D problems vary
  both dimensions (incl. a 1xk / kx1 edge). **Every solution stays in bounds**; no committed case forces an
  out-of-range access. The oracle is unchanged (stdout per stdin).

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, declare & access | 2 | build an array, index it, `.Length` (7.1) |
| B, iterate | 4 | `for`/`foreach`, filter/map loop shapes (7.2) |
| C, operations | 6 | sum / average / max / min / count / search (7.3) |
| D, arrays & methods | 4 | pass by reference (mutate), return an array, compute over an array (7.4) |
| E, multidimensional | 2 | 2D grid: sum / row sum / table (7.5) |
| F, fix the broken program | 2 | a planted array bug |

*(2 + 4 + 6 + 4 + 2 + 2 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, declare & access:** build an array from reads and print a chosen index or the length; first/last
  element. Variants change the size and index. Integrates 7.1.
- **B, iterate:** print each element (for or foreach), with 1-based positions, reversed, filtered (only those
  meeting a test), or transformed (each doubled). Variants change the content and which shape. Length-0 case.
  Integrates 7.2.
- **C, operations:** sum; average (double); max; min; count over a threshold; contains/index-of a target.
  Variants change contents and the target/threshold. Seed max/min from `a[0]`; state the empty rule. Integrates
  7.3. Verify double/average outputs via the CLI.
- **D, arrays & methods:** a method that sums/maxes an array (value out); a method that doubles every element
  in place (the reference observable, caller sees it); a build-and-return array; the value-vs-reference
  contrast. Variants change contents. Integrates 7.4.
- **E, multidimensional:** read a grid and sum all cells; sum a given row; or echo it as a table. Variants
  change both dimensions. Integrates 7.5. Strict table output.
- **F, fix the broken program:** an array program with a planted bug. Variants (pick 2 across attempts): an
  off-by-one loop bound (`<= a.Length`, out of range); a max seeded at 0 (wrong for all-negative); a `foreach`
  expected to mutate (reassigning the loop variable changes nothing); a method that reassigns its array
  parameter instead of mutating elements; rows/cols (`GetLength`) swapped. Proves reading & repairing array
  code. The committed solution for every fix problem compiles, runs, and stays in bounds.

## Notes
- **Vary contents and length (incl. 0 and 1); stay in bounds** (Ch.7 anti-hardcoding). 2D: vary both
  dimensions.
- **Oracle unchanged:** an array program is deterministic per stdin, so `gen`/`check` work as before. Verify
  `double`/table outputs under invariant culture.
- **Seed max/min from `a[0]`; state each problem's empty-array rule** (sum/count fine at 0; max/min/average
  need n >= 1). **Decide and state the search return** (0-based index of first match, -1 if absent).
- **`foreach` is read-only; filter/map are loop shapes, not LINQ.** No library array methods, no `List<T>`,
  no jagged arrays.
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (a chapter test MAY carry light flavor, not used here by default).
- `cheatsheets/` gathers 7.1-7.5 (+ Ch.1-6 as a library).
