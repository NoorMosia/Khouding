# Exercises draft, 5.5 Loop control: break and continue

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Alter a loop's normal flow: `break` stops it early, `continue` skips to the next iteration.

## Size & completion
- **11 problems**, lights at **7** (~60%). Moderate-full (two related control statements, drilled).

## Scope (READ FIRST)
- **IN:** `break` exits the loop immediately (rest of the body and all remaining iterations skipped);
  `continue` skips the rest of the current body and goes to the next iteration (the condition/update still
  run); applies to `while` and `for` (both known); natural uses, `break` on a found/target (early exit),
  `continue` to skip non-qualifying values; `break` as a way out of `while (true)` (light callback to the
  infinite-loop note). Accumulate into a single variable.
- **OUT:** labeled break/continue (not taught, out of scope); nested-loop control subtleties beyond a simple
  inner `break` (keep it to one loop mostly). No methods, no arrays.

## Grading approach
- `stdout-match`, input via stdin. **Cases include the control-path edges:** for `break`, a "found on the
  first pass", a "found late", and a "never found" (loop runs to the end); for `continue`, a "nothing
  skipped", a "some skipped", and an "all skipped". Oracle CLI generates expecteds. Solutions always
  terminate (a `while (true)` must have a reachable `break`).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | stop at the first value meeting a test, print it (break) | break basics | ●● |
| p02 | search read values for a target, report found or not (break) | break + flag | ●● |
| p03 | report the position (1-based index) of the first match (break) | break + counter | ●● |
| p04 | sum only the values that qualify, skipping others (continue) | continue basics | ●● |
| p05 | count values that are NOT skipped (continue) | continue + count | ●● |
| p06 | skip a sentinel-marked value but keep looping to the end | continue on sentinel | ●● |
| p07 | early-exit once a running total crosses a limit (break) | break on accumulator | ●● |
| p08 | process until the first invalid-looking value, then stop (break) | guard + break | ●● |
| p09 | a `while (true)` with a break as the only exit | break out of true | ●● |
| p10 | fix a bug: `break` where `continue` was meant (or vice versa) | debug: which control | ●●● |
| p11 | model a scenario: a worded search/filter with break and/or continue | integrative capstone | ●●● |

**Escalation:** p01-p03 the `break` search family (first match, found/not, position); p04-p06 the `continue`
filter family (sum/count/skip); p07-p09 accumulator-exit, guard-exit, `while(true)`+break; p10 the
break-vs-continue debug; p11 capstone.

## Per-problem intent (bones)
- **p01** read n values, print the first that satisfies a test (e.g. first negative), then `break`. Cases:
  match on first pass, match late, no match (print a stated "none").
- **p02** search n values for a read target; print `found` / `not found`. `break` on match.
- **p03** print the 1-based position of the first match, or `0`/stated if none.
- **p04** read n values, add only those that qualify (e.g. positives), `continue` past the rest; print the sum.
- **p05** count the values that are NOT skipped; cases: none skipped, some, all skipped.
- **p06** sum/echo values, `continue` on a marker value, loop to the end anyway.
- **p07** read values, keep a running total, `break` once it exceeds a read limit; print where it stopped.
- **p08** process values, `break` at the first that fails a guard (e.g. first non-positive); print what was
  processed.
- **p09** `while (true)` reading values, `break` on a quit value; proves a reachable exit.
- **p10** starter uses `break` where `continue` was intended (stops instead of skipping) or the reverse. Fix
  to the right control; cases distinguish stop-vs-skip behavior.
- **p11** capstone: a worded search-and/or-filter.

## Notes
- **Control-path coverage** (5.5's anti-hardcoding flavor): cases must hit first-pass / late / never for
  `break`, and none / some / all for `continue`, so a mis-chosen control statement fails.
- **A `while (true)` MUST have a reachable `break`** in every solution; never commit an input that loops
  forever (runner times out).
- **State the "none"/"not found" output** in each search problem so the oracle and student agree.
- Accumulate into ONE variable (no arrays yet). Country-neutral. Terse statements. Prompts on their own line.
