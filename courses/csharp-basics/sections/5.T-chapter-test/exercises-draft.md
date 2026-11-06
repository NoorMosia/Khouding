# Exercises draft, 5.T Chapter 5 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T / 2.T / 3.T / 4.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 5 region boss. Integrative: combines 5.1-5.5 (and Chapters 1-4) into realistic repetition
scenarios. No new material. Passing it lights the Chapter 5 region on the map.

## Skills it integrates (5.1-5.5 + Ch.1-4)
- 5.1 `while` (condition-driven loop, count and sentinel patterns)
- 5.2 `do-while` (run at least once)
- 5.3 `for` (counted loop)
- 5.4 nested loops (2D: grids, triangles, tables)
- 5.5 loop control (`break`, `continue`)
- Ch.1-4: types, input, parse, interpolation, arithmetic (`+ - * / %`), the decision toolkit (a loop's
  condition is a `bool`; loop bodies routinely contain an `if`)

## Scope boundary
- **Input IS used** (stdin, prompts on their own line, prompt text graded), like 2.T/3.T/4.T. The count
  pattern (read n, process n values) and the sentinel pattern (read until a terminator) are both in play.
- Full loop toolkit from this chapter, plus everything before. **No methods, no arrays** (Ch.6/7).
- Accumulate into a single variable (sum / count / max / min / product); build shapes with nested loops;
  alter flow with `break`/`continue`. Output is `WriteLine` inside or after the loop.

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **Loop anti-hardcoding (the Ch.5 rule, carried into the boss):** each pool problem's stdin cases **vary the
  iteration count**, zero / one / several, and a **zero-iteration case** wherever the loop can run zero times.
  Nested problems vary BOTH bounds (incl. a 1-by-k edge). Control problems cover first/late/never (break) and
  none/some/all (continue). Combined with the pool being bigger than the draw, an unrolled or fixed-output
  answer fails.
- **Every solution terminates; no committed input loops forever** (the runner would time out). Any
  `while (true)` has a reachable `break`.

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, while | 3 | condition-driven loop, count + sentinel patterns (5.1) |
| B, do-while | 2 | run-at-least-once, the false-at-start case (5.2) |
| C, for | 5 | counted loop, accumulate (sum/avg/max/min/product) (5.3) |
| D, nested | 4 | 2D grids / triangles / tables, row structure (5.4) |
| E, loop control | 3 | `break` search, `continue` filter, `while(true)`+break (5.5) |
| F, fix the broken program | 3 | off-by-one bound; inner counter not reset; `break` vs `continue` swap |

*(3 + 2 + 5 + 4 + 3 + 3 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, while:** read a count or read-until-sentinel, accumulate (sum/count/max). Variants change the pattern
  (count vs sentinel) and the accumulation. Cases include zero iterations. Integrates 5.1.
- **B, do-while:** a repeat-until with a guaranteed first pass; a menu-style loop to a quit value. Variants
  change the terminating condition. The false-at-start case is mandatory. Integrates 5.2.
- **C, for:** counted loops that sum, average, find max/min, or build a product over n read values; one
  stepped loop (evens / every k-th). Variants change n and the accumulation. Zero-iteration case where valid;
  state empty-case behavior (product of zero = 1; require n >= 1 for avg/max/min). Integrates 5.3.
- **D, nested:** a rectangular block, a triangle (outer-dependent inner bound), a multiplication table, a
  numbered grid. One variant has an inner `if` (border/hollow). Variants change both bounds. Strict output
  (Write vs WriteLine, spacing). Integrates 5.4.
- **E, loop control:** a `break` search (first match / found-or-not / position), a `continue` filter
  (sum/count the qualifying), a `while (true)` exited by `break` on a quit value. Variants change the test.
  Control-path coverage required. Integrates 5.5.
- **F, fix the broken program:** a loop program with a planted Ch.5 bug. Variants: an off-by-one bound
  (`<=` vs `<`, wrong count); a nested loop that does not reset the inner counter (or wrong Write/WriteLine so
  rows merge); a `break` where `continue` was meant (stops instead of skipping). Proves reading & repairing
  looping code. **A never-updated-counter / infinite-loop bug may be used ONLY as a fix-to-terminate** (the
  committed solution terminates; the buggy starter is shown but never run by the oracle).

## Notes
- **Vary the iteration count; zero-iteration case required** where the loop can run zero times (Ch.5
  anti-hardcoding). Nested: vary both bounds. Control: cover the control-path edges.
- **Oracle unchanged:** a loop is deterministic per stdin, so `gen`/`check` work as before; design the cases
  to vary counts and cover branches. Decimal/`Math` outputs (if any) verified under invariant culture.
- **Never commit an input that loops forever**; every solution terminates; a `while (true)` has a reachable
  `break`.
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (a chapter test MAY carry light flavor, not used here by default).
- `cheatsheets/` gathers 5.1-5.5 (+ Ch.1-4 as a library).
