# Exercises draft, 8.3 Transforming a string

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Produce a NEW string from an old one: case, trimming, replacing, slicing.

## Size & completion
- **14 problems**, lights at **8** (~60%). Full section (the workhorse reshape methods).

## Scope (READ FIRST)
- **IN:** every method here **returns a new string** (immutability from 8.1): `s.ToUpper()`, `s.ToLower()`,
  `s.Trim()` (strip leading/trailing whitespace), `s.Replace("a", "b")`, `s.Substring(start)` and
  `s.Substring(start, length)`. The recurring BUG: calling `s.ToUpper()` and ignoring the return (original
  unchanged), you must use the returned value. `Substring` range must stay in bounds (name
  `ArgumentOutOfRangeException`); problems compute lengths from the input so ranges stay valid.
- **OUT:** search (8.2); `Split`/`Join` (8.4); char-by-char building (8.5); `PadLeft`/`PadRight`,
  `Insert`/`Remove`, `Format`, composite format strings, culture-specific case. No `StringBuilder`.

## Grading approach
- `stdout-match`, input via stdin. Read the line(s), apply the transform, print the RESULT (and, where a
  problem shows immutability, the original too). **Vary the text** (mixed case, leading/trailing spaces, empty
  string, single char). Oracle CLI generates expecteds under invariant culture (ASCII letters only).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | upper-case a line | ToUpper | ● |
| p02 | lower-case a line | ToLower | ● |
| p03 | trim a padded line and print it between markers to show the effect | Trim | ●● |
| p04 | replace one read substring with another | Replace | ●● |
| p05 | print the first N chars (read N) | Substring(0, n) | ●● |
| p06 | print from a read index to the end | Substring(i) | ●● |
| p07 | print the last N chars (Substring(Length - n)) | computed start | ●● |
| p08 | upper-case only, then print the original too (show it is unchanged) | immutability observable | ●● |
| p09 | trim then upper-case (chain two transforms) | chaining | ●● |
| p10 | replace all spaces with hyphens | Replace(" ", "-") | ●● |
| p11 | print the middle character's-worth slice (Substring(Length/2 ...)) | computed range | ●●● |
| p12 | capitalise first letter (upper s[0] + Substring(1)) via building | combine slice + case | ●●● |
| p13 | read N, print first N and last N on two lines | two substrings | ●●● |
| p14 | fix a bug: calls s.ToUpper() but prints s (ignored return value) | debug: immutability | ●●● |

**Escalation:** p01-p02 case; p03-p04 trim and replace; p05-p07 substring (prefix, suffix, from-index);
p08 the immutability observable; p09-p10 chaining and replace; p11-p13 computed ranges and combined; p14 the
ignored-return-value bug.

## Per-problem intent (bones)
- **p01** print `s.ToUpper()`.
- **p02** print `s.ToLower()`.
- **p03** read a padded line; print `"[" + s.Trim() + "]"` so the stripped spaces are visible.
- **p04** read s, old, new; print `s.Replace(old, new)`.
- **p05** read s and N (0..Length); print `s.Substring(0, n)`.
- **p06** read s and i (0..Length); print `s.Substring(i)`.
- **p07** read s and N (0..Length); print `s.Substring(s.Length - n)`.
- **p08** print `s.ToUpper()`, then print `s` unchanged (two lines) to show the original is intact.
- **p09** print `s.Trim().ToUpper()`.
- **p10** print `s.Replace(" ", "-")`.
- **p11** a stated middle slice from `s.Length` (define exactly, keep in bounds).
- **p12** print `char.ToUpper(s[0]) + s.Substring(1)` (first letter up, rest unchanged). Input non-empty.
- **p13** read N; print `s.Substring(0, n)` then `s.Substring(s.Length - n)`.
- **p14** starter does `s.ToUpper(); Console.WriteLine(s);` (prints the unchanged original); fix to use the
  returned value (`Console.WriteLine(s.ToUpper());` or `s = s.ToUpper();`).

## Notes
- **Everything returns a new string** (the immutability payoff from 8.1). p08 shows the original survives;
  p14 drills the ignored-return-value bug (the single most common string mistake).
- **Substring ranges stay in bounds** (compute from the input length); `ArgumentOutOfRangeException` named,
  never a committed case.
- **Invariant culture, ASCII letters only**, so case mapping is unambiguous. Vary case/spaces/empty/length 1.
  Country-neutral. Terse statements. Prompts on their own line where a problem prompts.
