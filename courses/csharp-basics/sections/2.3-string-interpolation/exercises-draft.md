# Exercises draft, 2.3 String interpolation

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Build output that mixes text and values cleanly with `$"...{value}..."`. Interpolation is the standard way
to produce value-filled output.

## Size & completion
- **12 problems**, lights at **7** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** `$"..."` interpolation, the `$` prefix, `{value}` holes; mixing literal text and variables;
  multiple holes in one string. Reads input (2.1) and parses (2.2) as needed to have values to interpolate.
- **OUT:** `+` string joining as a taught skill (2.4, lightly noted here only); number format specifiers
  like `:F2` (2.5, plain `{value}` only here); `/` `%`.
- **Payoff:** the one-line `$"Total: {total}"` that Ch.1 could not do (it used label-then-value on two
  lines). Lean into converting that two-line pattern into one interpolated line.

## Grading approach
- `stdout-match`, input via stdin, varied cases. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a name, print `Hello, {name}` with interpolation | one hole | ● |
| p02 | read a value, print `You entered {x}` | one hole, literal text around it | ● |
| p03 | read two values, print a line with both interpolated | two holes | ●● |
| p04 | read a number, print `{n} doubled is {n*2}` | expression in a hole | ●● |
| p05 | read name + age, print `{name} is {age}` | two holes, mixed types | ●● |
| p06 | one-line labelled value: `Total: {total}` (contrast Ch.1 two-line) | the payoff | ● |
| p07 | rewrite a given two-line label/value program as one interpolated line | convert to interpolation | ●● |
| p08 | read several fields, print a multi-line interpolated summary | multi-line, many holes | ●● |
| p09 | read two numbers, print `{a} + {b} = {a+b}` | holes with arithmetic | ●● |
| p10 | spot/fix a missing `$` (interpolation that printed literally) | debug: the `$` prefix | ●● |
| p11 | build a described output string with several interpolated values | compose | ●● |
| p12 | model a scenario: read, compute, print an interpolated report | integrative capstone | ●●● |

**Escalation:** p01–p02 single hole; p03–p05 multiple holes + mixed types; p06–p07 the one-line payoff and
converting the old two-line pattern; p08–p09 multi-line and arithmetic-in-holes; p10 the missing-`$` debug;
p11–p12 compose + capstone.

## Per-problem intent (bones)
- **p01/p02** one `{hole}` with surrounding literal text.
- **p03** two holes on one line.
- **p04** an expression inside a hole (`{n * 2}`).
- **p05** name (string) and age (int) in one interpolated line.
- **p06** `$"Total: {total}"` on one line (the thing Ch.1 could not do).
- **p07** given a two-line (Write label / WriteLine value) program, produce the same output as one
  interpolated `WriteLine`.
- **p08** a multi-line interpolated summary of several read fields.
- **p09** `{a} + {b} = {a+b}` (holes containing arithmetic).
- **p10** debug: a string written without the `$` prints `{name}` literally; add the `$`. (Capture the
  real behavior/output when authoring.)
- **p11** compose a described sentence from several values.
- **p12** capstone: read, parse, compute, print an interpolated report.

## Notes
- **Interpolation is the standard; `+` is only lightly mentioned** (its own section is 2.4).
- **Plain `{value}` only**, no `:F2` or format specifiers (that is 2.5).
- Country-neutral.
