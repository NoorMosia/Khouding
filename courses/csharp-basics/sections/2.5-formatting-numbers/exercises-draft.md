# Exercises draft, 2.5 Formatting numbers for output

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Control how a number looks when printed: a fixed number of decimal places, and money. A raw `double` prints
unhelpfully for currency; format it.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate. Closes the chapter's "format output" arc.

## Scope (READ FIRST)
- **IN:** `$"{value:F2}"` for a fixed 2 decimal places; a plain money presentation (two decimals for a
  price). The idea that display formatting is separate from the stored value.
- **OUT:** the full zoo of format specifiers (only `F` / decimal places + simple money); `/` `%`; culture
  switching. Reading/parsing/interpolation from 2.1–2.3 as needed.
- **Why its own section:** number display deserves real reps (round to 2 dp, show a price, show a rate). It
  would overload 2.3's one idea. Currency + general floating-point display is genuinely university-standard
  (nobody prints `7.5` for money).

## Culture caveat (AUTHORING, important)
- Currency symbol and decimal separator are **culture-dependent**. The sandbox (and the oracle runner) run
  **invariant culture**, so `:F2` gives a dot decimal and no thousands grouping, and a currency symbol would
  be the invariant one. **Author and verify every expected against the invariant-culture runner** (already
  forced in `authoring/runners.mjs`). To avoid a culture rabbit hole, prefer **`:F2` (decimal places) and a
  literal currency symbol you print yourself** (e.g. interpolate a `$` or a word) rather than the `:C`
  culture-currency format, so output is deterministic and locale-independent. Decide the exact approach when
  authoring; verify with the CLI.

## Grading approach
- `stdout-match`, input via stdin, varied cases. Values chosen so formatted output is clean and
  deterministic. Oracle CLI generates and confirms every expected.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a price (double), print it to 2 decimals with `:F2` | `F2` basics | ● |
| p02 | read a value, print it to 2 decimals (a value that needs padding, e.g. 7.5 -> 7.50) | `F2` padding | ● |
| p03 | read a price, print a money line (literal symbol + `:F2` value) | money presentation | ●● |
| p04 | read count + unit price, compute total, print total to 2 decimals | compute + `F2` | ●● |
| p05 | print a given fractional value rounded for the eye (2 dp) | display vs stored | ●● |
| p06 | a small receipt: two amounts, each `:F2`, aligned/labelled | multi-line formatted money | ●● |
| p07 | read a rate-looking value, print to 2 decimals | `F2` in another context | ● |
| p08 | contrast: print the raw double AND the `:F2` version (why format) | the motivation | ●● |
| p09 | fix a bug: money printed as a raw double, make it 2 decimals | debug: add the format | ●● |
| p10 | model a scenario: read, compute with `+ - *`, print money to 2 dp | integrative capstone | ●●● |

**Escalation:** p01–p02 `:F2` basics and padding; p03 money presentation; p04 compute-then-format; p05
display-vs-stored; p06 a formatted receipt; p07 another `F2` context; p08 the raw-vs-formatted contrast
(motivation); p09 fix-the-missing-format; p10 capstone.

## Per-problem intent (bones)
- **p01/p02** `$"{price:F2}"`; p02 specifically a value like `7.5` that must show as `7.50`.
- **p03** a money line, e.g. print a literal currency symbol then the `:F2` amount (deterministic, no `:C`).
- **p04** total = count * unitPrice, printed with `:F2`.
- **p05** a given value (no division) shown to 2 dp, making the display-vs-stored point.
- **p06** a two-line receipt with `:F2` amounts.
- **p07** a rate/measure shown to 2 dp.
- **p08** print the same value raw and formatted, so the student sees why formatting matters.
- **p09** debug: starter prints a money value as a raw double; add `:F2`.
- **p10** capstone: read, compute, print a formatted money result.

## Notes
- **Verify EVERY expected with the CLI** given the culture sensitivity. Choose values whose `:F2` output is
  obvious (7.5 -> 7.50, 10 -> 10.00) so the student can predict the target.
- **Avoid `:C` (culture currency)** unless we deliberately pin a culture; prefer a literal symbol + `:F2`.
  Settle this at authoring time with a quick CLI check of what invariant culture actually prints.
- Country-neutral scenarios.
