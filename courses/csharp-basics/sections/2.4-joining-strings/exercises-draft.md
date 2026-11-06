# Exercises draft, 2.4 Joining strings with +

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
The `+` operator joins strings, two uses of one operator: joining pieces for output, and **building a new
string** stored in a variable.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** `+` on strings for output (`"Hello, " + name`); building a stored string (`string full = first + " " + last;`);
  a number `+` a string becomes text in the result (light note, no deep type rules); contrast with
  interpolation (2.3) for output.
- **OUT:** `:F2` number formatting (2.5); `/` `%`. Reading/parsing from 2.1/2.2 as needed.
- **Why its own section (the dual role):** interpolation covers output nicely, but `+` is essential for
  *building* strings from pieces and is everywhere in real code, so it earns its own reps. The distinct
  skill is "join pieces into one string value," not just output.

## Grading approach
- `stdout-match`, input via stdin, varied cases. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | join two fixed words with a space and print | `+` for output | ● |
| p02 | read two words, print them joined with a space | `+` with input | ● |
| p03 | read first + last, BUILD a `string fullName`, then print it | build a stored string | ●● |
| p04 | join a label and a read value for output (`"Name: " + name`) | label + value via `+` | ● |
| p05 | read a value, print `"Age: " + age` (number becomes text) | number `+` string | ●● |
| p06 | build a greeting string variable from pieces, then print it | build then use | ●● |
| p07 | combine three pieces into one string | multi-piece join | ●● |
| p08 | convert a given interpolated line to the `+` form (same output) | interpolation → `+` | ●● |
| p09 | convert a given `+` line to interpolation (same output) | `+` → interpolation | ●● |
| p10 | model a scenario: build a composed string from read values, print | integrative capstone | ●●● |

**Escalation:** p01–p02 join for output; p03 the key "build a stored string"; p04–p05 label+value and
number-becomes-text; p06–p07 build-then-use and multi-piece; p08–p09 the two-way conversion with
interpolation (shows they are interchangeable for output); p10 capstone.

## Per-problem intent (bones)
- **p01** `"Hello" + " " + "there"` printed.
- **p02** read two words, print joined with a space.
- **p03** `string fullName = first + " " + last;` then print `fullName` (the build-a-string skill).
- **p04** `"Name: " + name` for output.
- **p05** `"Age: " + age` (int auto-becomes text in the joined result).
- **p06** build a greeting into a variable, then print the variable.
- **p07** three pieces joined (e.g. first + space + last, or label + value + unit).
- **p08** given `$"Hello {name}"`, produce the same output with `+`.
- **p09** given `"Hello, " + name`, produce the same output with interpolation.
- **p10** capstone: read several values, build a composed string, print it.

## Notes
- **The headline distinction:** `+` both *outputs* and *builds stored strings*; interpolation mainly
  *outputs*. p03/p06 are the "build" reps that make this section more than a concatenation footnote.
- Keep number-`+`-string light: "a number joined to a string becomes text in the result." No deep type talk.
- Country-neutral.
