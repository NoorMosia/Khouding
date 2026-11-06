# Exercises draft, 5.1 The while loop

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Repeat a block as long as a condition is true.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section (first loop, drilled to fluency).

## Scope (READ FIRST)
- **IN:** `while (condition) { ... }`; the condition is a `bool` (Ch.4), tested before each pass; making
  progress toward ending the loop; the count-up pattern (a counter incremented in the body); the sentinel
  pattern (read until a terminating value); a `while` can run **zero** times. Accumulate into a single
  variable (sum, count, max). The infinite loop NAMED (no progress = never ends), lightly.
- **OUT:** `do-while` (5.2); `for` (5.3); nested loops (5.4); `break`/`continue` (5.5). No methods, no arrays.

## Grading approach
- `stdout-match`, input via stdin. **Cases vary the iteration count (zero / one / several)** so an unrolled or
  fixed-output answer fails. **A zero-iteration case is required.** Oracle CLI generates expecteds. Solutions
  always terminate (no input that loops forever).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | count up and print 1..n (read n) | basic while + counter | ● |
| p02 | sum 1..n (read n) | accumulate a total | ● |
| p03 | count down from n to 1 | decrement | ●● |
| p04 | read a count, then read that many numbers and sum them | count pattern | ●● |
| p05 | read a count, then count how many of that many reads are positive | count pattern + condition | ●● |
| p06 | read until a sentinel (e.g. 0), total the values before it | sentinel pattern | ●● |
| p07 | read until a sentinel, count the values | sentinel + count | ●● |
| p08 | find the max across a read count of values | running max | ●● |
| p09 | print multiples of k up to n (step via repeated add) | stepped loop | ●● |
| p10 | running total that reports after each read (multi-line) | per-iteration output | ●● |
| p11 | fix a bug: counter never updated (infinite) or off-by-one bound | debug: progress/bound | ●● |
| p12 | model a scenario: a worded loop over read values | integrative capstone | ●●● |

**Escalation:** p01-p03 the bare counter loop (up, sum, down); p04-p05 the count pattern; p06-p07 the sentinel
pattern; p08-p10 accumulate (max, step, per-iteration); p11 the progress/bound debug; p12 capstone.

## Per-problem intent (bones)
- **p01** read n, `int i = 1; while (i <= n) { print i; i++; }`. Zero case: n = 0 prints nothing.
- **p02** read n, accumulate `sum += i`. Zero case: n = 0 -> 0.
- **p03** read n, count down n..1. Zero/negative n -> nothing.
- **p04** read count c, then read c numbers, print the sum. c = 0 -> 0 (zero iterations).
- **p05** read count c, then c numbers, print how many are > 0. c = 0 -> 0.
- **p06** read ints until 0, print the total of the ones before 0. First value 0 -> 0 (zero iterations).
- **p07** read until sentinel, print the count of values.
- **p08** read count c then c numbers, print the max. (Define behavior for c = 0 in the statement, e.g. only
  tested with c >= 1, OR print a stated placeholder; decide at authoring.)
- **p09** read n and k, print k, 2k, ... up to <= n. Zero case: n < k -> nothing.
- **p10** read count c then c numbers, after each print the running total so far.
- **p11** starter has a counter that is never incremented (would hang) OR a `<=` where `<` was meant. Fix so
  it terminates / counts correctly. (Author the broken form so the FIX is clean; never commit a hanging case.)
- **p12** capstone: a worded accumulate-over-reads scenario.

## Notes
- **Zero-iteration case REQUIRED** (Ch.5 anti-hardcoding): include an input where the loop body never runs.
- **Vary the count** across cases (zero, one, several) so a hardcoded block fails.
- **Never commit an input that loops forever** (runner times out); solutions must always terminate.
- **Infinite loop is NAMED, not drilled** here (p11 is a fix-to-terminate, not a hang).
- Accumulate into ONE variable (no arrays yet). Country-neutral. Terse statements. Prompts on their own line.
