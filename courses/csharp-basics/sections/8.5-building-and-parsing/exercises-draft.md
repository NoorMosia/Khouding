# Exercises draft, 8.5 Building and parsing character by character

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Loop over a string's characters to count, validate, or assemble a result.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section. The one section where we WRITE the loop (ties Ch.7
  iteration to strings).

## Scope (READ FIRST)
- **IN:** the char walk = the Ch.7 array walk over `s.Length`: `for (int i = 0; i < s.Length; i++)` with
  `s[i]`, or `foreach (char c in s)`. Uses: **count** chars meeting a test (a target char, vowels, digits);
  **validate** (are all chars digits, with `char.IsDigit`); **build** a new string by concatenating chosen
  chars (`result = result + c;`, the honest build since strings are immutable). Simple char tests:
  `char.IsDigit(c)`, `char.IsLetter(c)`, `char.ToUpper(c)`. This section deliberately reimplements by loop
  what some library methods could do, that is the skill here.
- **OUT:** `StringBuilder` (the efficient builder, a later concern); regex; `char` arithmetic / ASCII codes;
  `LINQ` (`.Count(...)`). The library one-liners from 8.2-8.4 are not the point here; the loop is.

## Grading approach
- `stdout-match`, input via stdin (a line, sometimes a line plus a target char). **Vary the text** (content,
  length, the **empty string** -> empty/zero result, a single char, mixed letters/digits/spaces). The
  length-0 case runs the loop zero times (count 0, built string empty), mirroring Ch.7. Oracle CLI generates
  expecteds under invariant culture.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | count how many times a read char appears | count + s[i] == c | ● |
| p02 | count the vowels (a e i o u) | count + membership test | ●● |
| p03 | count the digits (char.IsDigit) | count + IsDigit | ●● |
| p04 | count the letters (char.IsLetter) | count + IsLetter | ●● |
| p05 | print whether every char is a digit (True/False) | validate all | ●● |
| p06 | print whether the string is non-empty and all letters | validate + empty guard | ●● |
| p07 | build a new string of only the letters (drop the rest) | filter-build | ●● |
| p08 | build a new string of only the digits | filter-build | ●● |
| p09 | reverse a string by building it char by char | build in reverse | ●●● |
| p10 | upper-case by building (char.ToUpper each), compare to ToUpper | build + char.ToUpper | ●●● |
| p11 | count the words by counting spaces + 1 (char walk, not Split) | count transitions | ●●● |
| p12 | fix a bug: build loop forgets to start result = "" / off-by-one over Length | debug: build/bound | ●●● |

**Escalation:** p01-p04 counting (a char, vowels, digits, letters); p05-p06 validation (all-digits,
non-empty-all-letters); p07-p08 filter-build; p09-p10 reverse-build and upper-build; p11 a word count via the
char walk; p12 the build/bound bug.

## Per-problem intent (bones)
- **p01** read s and a char c; count `s[i] == c`.
- **p02** count chars in `"aeiou"` (lower-case input, or state the set); print the count.
- **p03** count `char.IsDigit(s[i])`.
- **p04** count `char.IsLetter(s[i])`.
- **p05** loop; if any char is not a digit, result false; print True/False. (Empty string: state the rule,
  e.g. empty -> False or a stated convention.)
- **p06** non-empty AND every char a letter -> True/False (empty -> False).
- **p07** build `result` from chars where `char.IsLetter(c)`; print it (empty -> empty line).
- **p08** build `result` from chars where `char.IsDigit(c)`.
- **p09** build `result` by prepending each char (or loop from the end), print the reversed string.
- **p10** build `result` with `char.ToUpper(c)` per char; equals `s.ToUpper()` (the compare is the point).
- **p11** count spaces in the char walk; words = spaces + 1 for a non-empty single-spaced line (state the
  simplifying contract: single spaces, non-empty). Empty -> 0 per the stated rule.
- **p12** starter either never initialises `result` (or starts it wrong) or loops `i <= s.Length`; fix to
  `result = ""` and `i < s.Length`. Committed solution is correct and in bounds.

## Notes
- **This is the hand-written-loop section** (contrast with 8.2-8.4 library calls). The char walk is literally
  the Ch.7 array walk over `s.Length`.
- **Build by concatenation** (`result = result + c;`) because strings are immutable; `StringBuilder` is out of
  scope. **Empty string -> empty/zero result** (loop runs zero times), the required edge, mirrors Ch.7.
- `char.IsDigit` / `char.IsLetter` / `char.ToUpper` are the only char helpers. No char arithmetic.
- State any simplifying contract per problem (e.g. p11's single-spaces). Vary text incl. empty and single
  char. Country-neutral. Terse statements. Prompts on their own line where a problem prompts.
