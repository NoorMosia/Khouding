# Exercises draft, 5.3 The for loop

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A counted loop with its setup, condition, and update gathered on one line.

## Size & completion
- **15 problems**, lights at **9** (~60%). Full section (the meatiest loop form, counted loops everywhere).

## Scope (READ FIRST)
- **IN:** `for (int i = 0; i < n; i++) { ... }`; the three parts (init, condition, update) and when each runs;
  a `for` is a `while` with the pieces collected (show the equivalent); counting up, counting down (`i--`),
  stepping (`i += 2`); a `for` can run **zero** times; the count pattern (read n, process n values).
  Accumulate into a single variable (sum, product, count, max, min).
- **OUT:** nested loops (5.4); `break`/`continue` (5.5); `do-while` (5.2, done). No methods, no arrays.

## Grading approach
- `stdout-match`, input via stdin. **Cases vary n (zero / one / several)**; a **zero-iteration case is
  required** wherever the loop can run zero times. Oracle CLI generates expecteds. Solutions always terminate.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print 1..n (read n) | basic for, count up | ● |
| p02 | sum 1..n (read n) | accumulate a total | ● |
| p03 | count down n..1 | `i--` | ● |
| p04 | print even numbers up to n (step by 2) | `i += 2` | ●● |
| p05 | read n, then read n values and sum them | count pattern | ●● |
| p06 | read n values, print the average (integer or with F2, decide) | count + arithmetic | ●● |
| p07 | read n values, print the max | running max | ●● |
| p08 | read n values, print the min | running min | ●● |
| p09 | read n values, count how many meet a condition (e.g. > 0) | count + condition | ●● |
| p10 | factorial-style product 1*2*...*n | running product | ●● |
| p11 | sum only every k-th value, or a stepped accumulate | stepped loop | ●● |
| p12 | print the equivalent `while` and `for` give the same output | for<->while | ●● |
| p13 | fix a bug: off-by-one bound (`<=` vs `<`) | debug: bound | ●● |
| p14 | fix a bug: wrong update (never reaches the bound / overshoots) | debug: update | ●● |
| p15 | model a scenario: a worded counted loop over read values | integrative capstone | ●●● |

**Escalation:** p01-p04 bare counted loops (up, sum, down, step); p05-p06 the count pattern + arithmetic;
p07-p11 accumulate (max, min, count, product, stepped); p12 the for/while equivalence; p13-p14 the two classic
for bugs; p15 capstone.

## Per-problem intent (bones)
- **p01** read n, `for (int i = 1; i <= n; i++) print i`. Zero: n = 0 prints nothing.
- **p02** accumulate `sum += i`. Zero: n = 0 -> 0.
- **p03** `for (int i = n; i >= 1; i--)`. Zero/negative n -> nothing.
- **p04** evens up to n: `for (int i = 2; i <= n; i += 2)`.
- **p05** read count n then n numbers, print the sum. n = 0 -> 0.
- **p06** read n numbers, print the average. **Decide at authoring:** integer average, or `double` with F2
  and n >= 1 only (avoid divide-by-zero); state the n = 0 behavior in the problem.
- **p07/p08** read n numbers, print max / min (n >= 1; state behavior, or seed from the first read).
- **p09** read n numbers, print how many satisfy a stated condition.
- **p10** product 1..n (n = 0 -> 1, the empty product; state it).
- **p11** sum every k-th value or step-accumulate; cases vary the step.
- **p12** show a `for` and its equivalent `while` produce identical output for the same n.
- **p13** starter uses `<=` where `<` was meant (or vice versa), off by one. Fix the bound.
- **p14** starter's update never reaches the bound or skips it. Fix the update.
- **p15** capstone: a worded counted-loop accumulate.

## Notes
- **Zero-iteration case REQUIRED** where the loop can run zero times (Ch.5 anti-hardcoding). Vary n across
  cases (zero, one, several) so a hardcoded block fails.
- **Decide the empty cases explicitly** (average of zero, max of zero, product of zero = 1) in each problem
  statement so the oracle and the student agree; prefer stating n >= 1 for max/min/average to dodge the
  divide-by-zero / undefined-max corner, and keep a zero case for the pure-count/sum problems.
- **Never commit an input that loops forever**; solutions must always terminate.
- Accumulate into ONE variable (no arrays yet). Country-neutral. Terse statements. Prompts on their own line.
