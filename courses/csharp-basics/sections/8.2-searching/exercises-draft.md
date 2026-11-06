# Exercises draft, 8.2 Searching inside a string

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Ask whether and where a piece of text occurs in a string.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** `s.Contains("ab")` (present? a `bool`); `s.IndexOf("ab")` (0-based index of the first occurrence, or
  `-1` if absent, the same sentinel as 7.3 search); `s.StartsWith("pre")` / `s.EndsWith("suf")` (bool);
  `s.IndexOf('a')` (a char also works). All are **read-only queries**: they return an answer, the string is
  unchanged. Case matters (plain ASCII; invariant culture).
- **OUT:** the transform methods (8.3); `Split`/`Join` (8.4); char-by-char counting (8.5); case-insensitive
  search / `StringComparison` overloads; regex. `bool` prints as `True`/`False`.

## Grading approach
- `stdout-match`, input via stdin. Read the string, read the thing to look for (a substring or a char). **Vary
  present/absent and position** (start, middle, end, not-there), include the empty string and a single char.
  Oracle CLI generates expecteds. Solutions do not depend on culture (ASCII only).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a line and a substring, print whether it contains it (True/False) | Contains | ● |
| p02 | read a line and a substring, print IndexOf (or -1) | IndexOf + sentinel | ●● |
| p03 | read a line and a prefix, print StartsWith (True/False) | StartsWith | ●● |
| p04 | read a line and a suffix, print EndsWith (True/False) | EndsWith | ●● |
| p05 | read a line and a single char, print whether it is present | Contains a char | ●● |
| p06 | print the index of the first space (or -1) | IndexOf(' ') | ●● |
| p07 | read a line and a substring, print "yes"/"no" for presence | Contains -> branch | ●● |
| p08 | print IndexOf a read char (or -1) | IndexOf(char) | ●● |
| p09 | does it both start with P and end with S (two reads), print True/False | StartsWith && EndsWith | ●●● |
| p10 | print whether a substring occurs at the very start (IndexOf == 0) | IndexOf compared | ●●● |
| p11 | read a line and a word, print present-and-its-index on two lines | Contains + IndexOf | ●●● |
| p12 | fix a bug: treats IndexOf's -1 as a found position | debug: sentinel | ●●● |

**Escalation:** p01-p05 the single queries (Contains/IndexOf/StartsWith/EndsWith, substring and char); p06-p08
targeted index and a branch; p09-p11 combined queries; p12 the -1 sentinel bug.

## Per-problem intent (bones)
- **p01** `s.Contains(sub)` -> True/False.
- **p02** `s.IndexOf(sub)` -> index or -1.
- **p03** `s.StartsWith(pre)` -> True/False.
- **p04** `s.EndsWith(suf)` -> True/False.
- **p05** `s.Contains(c)` for a read char -> True/False.
- **p06** `s.IndexOf(' ')` -> index or -1 (no space).
- **p07** `if (s.Contains(sub)) print "yes" else "no"`.
- **p08** read a char, `s.IndexOf(c)` -> index or -1.
- **p09** read prefix and suffix; print `s.StartsWith(pre) && s.EndsWith(suf)`.
- **p10** `s.IndexOf(sub) == 0` -> True/False (occurs at the start).
- **p11** print `s.Contains(word)` on line 1, `s.IndexOf(word)` on line 2.
- **p12** starter uses `IndexOf(...)` result as if always valid (e.g. prints it as a position even when -1);
  fix to check for -1 first / report "not found" per a stated contract. Committed solution handles -1.

## Notes
- **-1 is the not-found sentinel** (same as 7.3). p12 drills the classic bug of treating -1 as a real index.
- **Search is case-sensitive here** (name it; ASCII only, invariant culture, no surprises).
- Vary present/absent/position incl. empty string and single char. Country-neutral. Terse statements. Prompts
  on their own line where a problem prompts.
