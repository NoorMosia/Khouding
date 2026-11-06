# Exercises draft, 2.2 Converting input to numbers

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Turn a string of input into a number you can compute with: `int.Parse` / `double.Parse`, then use it. The
section where input becomes *useful*.

## Size & completion
- **15 problems**, lights at **9** (~60%). The full, meaty section of the chapter.

## Scope (READ FIRST)
- **IN:** `int.Parse(Console.ReadLine())`, `double.Parse(...)`; compute with Ch.1's `+ - *`; prompt first.
- **OUT:** `/` and `%` (Ch.3); interpolation (2.3); `+` string joining (2.4). Output stays plain `WriteLine`
  of the number/result here (interpolation comes next section).
- **Failure mode (name, do not handle):** parsing throws if the text is not a valid number. **Assume input
  is correct** (hidden cases feed only valid input, so solutions never actually throw), but the reading
  tells the student plainly that bad input throws. `TryParse` is a later chapter.

## Grading approach
- `stdout-match`, input via stdin, multiple varied + edge cases (zero, negative, large). A printed literal
  fails. Oracle CLI generates expecteds. `double` outputs: pick values that print cleanly (invariant
  culture in the runner).

## Statement style
- Terse. State what to prompt/read, and what to print.

---

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a whole number, print it (parsed int echo) | `int.Parse` | ● |
| p02 | read a decimal, print it (parsed double echo) | `double.Parse` | ● |
| p03 | read a number, print it doubled (n * 2) | parse + `*` | ● |
| p04 | read a number, print it plus 10 | parse + `+` | ● |
| p05 | read two whole numbers, print their sum | two parses + `+` | ●● |
| p06 | read two whole numbers, print their difference | two parses + `-` | ●● |
| p07 | read two whole numbers, print their product | two parses + `*` | ●● |
| p08 | read an age (int), print next year's age (age + 1) | realistic + `+` | ● |
| p09 | read a price (double), print it (preserves the decimal) | double round-trip | ● |
| p10 | read a count (int) and a price (double), print total = count * price | mixed int/double `*` | ●● |
| p11 | read width and height (ints), print area | `*`, realistic | ●● |
| p12 | read three numbers, print their sum | three parses + `+` | ●● |
| p13 | read a quantity and unit price, print subtotal (given a scenario) | realistic compute | ●● |
| p14 | fix a bug: math attempted on the ReadLine string without parsing | debug: must parse first | ●● |
| p15 | model a scenario: read + parse several, compute with `+ - *`, print | integrative capstone | ●●● |

**Escalation:** p01–p02 parse-and-echo; p03–p04 parse + one operation; p05–p08 two-value arithmetic +
realistic age; p09–p13 doubles and mixed-type realistic computes; p14 the signature "you forgot to parse"
debug; p15 capstone.

## Per-problem intent (bones)
- **p01/p02** prompt, read, parse to int/double, print it back (echo proves the parse).
- **p03/p04** parse then one operation (`*2`, `+10`).
- **p05–p07** read two ints, print sum/difference/product (varied incl. zero/negative).
- **p08** age + 1 (realistic).
- **p09** price as double, printed (shows decimals survive).
- **p10** int count * double price (mixed type), total.
- **p11** area = w * h.
- **p12** three numbers summed.
- **p13** quantity * unit price in a worded scenario.
- **p14** debug: starter does `Console.ReadLine() * 2` or tries to add two ReadLine strings; the fix is to
  parse first. (Captures the real compiler error for the reading/cheatsheet when authored.)
- **p15** capstone: read and parse several values, compute, print to spec.

## Notes
- **Name-don't-handle the parse failure:** no hidden case feeds bad input, so no solution throws. The
  reading names it; the problems assume valid input.
- **No interpolation yet:** print the raw number/result with `WriteLine`. Value-filled formatted output is
  2.3/2.5.
- Country-neutral scenarios.
