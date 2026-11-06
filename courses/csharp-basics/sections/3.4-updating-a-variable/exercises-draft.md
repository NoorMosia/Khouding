# Exercises draft, 3.4 Updating a variable

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Update a variable from its own current value, from `++` (add one to yourself) up to the full compound family
(`+= -= *= /= %=`, the same move by any amount).

## Size & completion
- **9 problems**, lights at **6** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** `++` / `--` (increment/decrement by one); the compound-assignment family `+= -= *= /= %=`; the fact
  that `count++` is `count = count + 1` and `total += x` is `total = total + x`. Comes AFTER 3.2/3.3 so `/=`
  and `%=` are legal to show.
- **Prefix vs postfix:** NAMED with one clear observable (`x++` returns the old value, `++x` the new, when
  used in an expression), NOT drilled deep. No mid-expression embedding puzzles.
- **OUT:** loops (Ch.5, where `++` becomes a daily reflex); conditionals; `Math` (3.5). No precedence puzzles.

## Grading approach
- `stdout-match`, input via stdin (varied). Oracle CLI generates every expected. A "running total across a
  few reads" shape gives the accumulator its natural reps without loops.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a number, print it after `++` then after `--` | increment/decrement | ● |
| p02 | read a value, apply `+=` by a read amount, print | `+=` basics | ● |
| p03 | convert a given `x = x + y` line to `+=` (same output) | recognize the shorthand | ● |
| p04 | read a start and apply `-=`, print | `-=` | ●● |
| p05 | read a value, apply `*=`, print | `*=` | ●● |
| p06 | read a value, apply `/=` (whole-number division rule from 3.2 applies) | `/=` | ●● |
| p07 | read a value, apply `%=`, print | `%=` | ●● |
| p08 | running total: read three amounts, accumulate with `+=`, print the total | accumulator | ●● |
| p09 | model a scenario: read values, update a variable across steps, print | integrative capstone | ●●● |

**Escalation:** p01 `++`/`--`; p02-p03 `+=` and recognizing it as shorthand; p04-p07 the rest of the family
one at a time; p08 the accumulator (the real-world why); p09 capstone.

## Per-problem intent (bones)
- **p01** `n++;` then `n--;`, print after each (two lines), shows the by-one update.
- **p02** `total += amount;`.
- **p03** given `x = x + y`, rewrite as `x += y`; identical output proves they are the same.
- **p04-p07** `-=`, `*=`, `/=`, `%=` one each. `/=` inherits 3.2's truncation rule (int `/=` truncates);
  `%=` inherits 3.3.
- **p08** read three amounts into a `total` via repeated `+=`; the accumulator pattern (no loop).
- **p09** capstone: a worded scenario (e.g. a score adjusted up and down across steps) built from updates.

## Notes
- **Prefix/postfix:** one observable in the reading (and maybe one quiz item); NOT a problem family. Keep it
  honest but light, it only bites inside larger expressions, which is a Ch.5+ concern.
- `/=` with whole numbers truncates (callback to 3.2); choose values so the result is obvious. Verify via CLI.
- Country-neutral. Terse statements.
