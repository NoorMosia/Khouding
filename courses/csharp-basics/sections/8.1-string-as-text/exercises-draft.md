# Exercises draft, 8.1 A string is text you can measure and index

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A string is a read-only sequence of characters with a length, reachable by index.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate (first look inside a string, no methods yet).

## Scope (READ FIRST)
- **IN:** `s.Length`; indexing `s[0]` (zero-based), each element a `char`; first `s[0]` and last
  `s[s.Length - 1]`; `char` as its own type (`'a'`, single quotes; printing a char prints the letter);
  comparing chars (`s[i] == 'a'`); **immutability**: `s[i] = 'x'` is a compile error (CS0200), a string cannot
  be changed in place. `IndexOutOfRangeException` for `s[s.Length]` NAMED (not drilled).
- **OUT:** the search methods (8.2); the transform methods (8.3); `Split`/`Join` (8.4); char-by-char
  counting/building (8.5, so NO counting here); `char` arithmetic / ASCII codes / casting char to int.
  No `StringBuilder`, regex, culture-specific behaviour.

## Grading approach
- `stdout-match`, input via stdin. A line is read with `ReadLine` (already a string, no parse). **Motivation
  first** (standing style): you can print and join strings, but cannot yet ask length or reach a letter.
  **Vary the text** (content, length, including length 1; avoid the empty string where an index is read).
  Every committed solution stays IN BOUNDS. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a line, print its length | s.Length | ● |
| p02 | print the first character | s[0] | ● |
| p03 | print the last character | s[s.Length-1] | ●● |
| p04 | read a line and an index, print that char (in-bounds) | s[i] read | ●● |
| p05 | print the first and last char on two lines | first + last | ●● |
| p06 | print the length, then the char at the middle index (Length/2) | computed index | ●● |
| p07 | read two lines, print whether their first chars are equal (True/False) | char compare | ●● |
| p08 | read two lines, print whether their last chars are equal | char compare + last | ●● |
| p09 | print the char at a read index, then the length (two uses of one string) | index + length | ●● |
| p10 | fix a bug: reads s[s.Length] (off-by-one) -> use s[s.Length-1] | debug: bounds | ●● |

**Escalation:** p01-p03 Length and the first/last char; p04-p06 a read/computed index; p07-p08 char comparison
across two strings; p09 combined; p10 the off-by-one bounds fix.

## Per-problem intent (bones)
- **p01** `ReadLine()`, print `s.Length`.
- **p02** print `s[0]` (a char).
- **p03** print `s[s.Length - 1]`.
- **p04** read a line, read an index (0..Length-1), print `s[index]`.
- **p05** print `s[0]` then `s[s.Length - 1]`.
- **p06** print `s.Length`, then `s[s.Length / 2]` (integer division gives a valid middle index).
- **p07** read two lines, print `a[0] == b[0]` (True/False). Inputs non-empty.
- **p08** read two lines, print `a[a.Length-1] == b[b.Length-1]`.
- **p09** read a line and an index; print `s[index]`, then `s.Length`.
- **p10** starter prints `s[s.Length]` (throws / off-by-one); fix to `s[s.Length - 1]`. Author so the FIX is a
  clean in-bounds access; never commit a throwing solution.

## Notes
- **Immutability is NAMED in the reading** (`s[i] = c` is a compile error, CS0200); drilled as a fix only in
  8.3 (ignored-return-value) and the boss, not here.
- **Stay IN BOUNDS in every solution.** `IndexOutOfRangeException` is named, never a committed case; p10 is a
  fix-to-correct-bounds, not a throwing demo.
- **A char is not a one-letter string** (single quotes `'a'`). Printing a char prints the letter.
- **No counting/looping here** (that is 8.5). Keep to single accesses. Country-neutral. Prompts on their own
  line where a problem prompts; terse statements.
