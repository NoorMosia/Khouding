# Exercises draft, 8.T Chapter 8 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T-7.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 8 region boss. Integrative: combines 8.1-8.5 (and Chapters 1-7) into realistic text scenarios.
No new material. Passing it lights the Chapter 8 region on the map.

## Skills it integrates (8.1-8.5 + Ch.1-7)
- 8.1 measure & index (`Length`, `s[i]` as a `char`, first/last, immutability)
- 8.2 searching (`Contains`, `IndexOf` with the -1 sentinel, `StartsWith`/`EndsWith`)
- 8.3 transforming (`ToUpper`/`ToLower`, `Trim`, `Replace`, `Substring`, all return new strings)
- 8.4 splitting & joining (`Split` -> `string[]`, `string.Join`, the round trip; ties to Ch.7)
- 8.5 char-by-char (loop over `s.Length`: count / validate / build; `char.IsDigit`/`IsLetter`)
- Ch.1-7: types, input, arithmetic, decisions, loops, methods, and arrays, all operating on text

## Scope boundary
- **Input IS used** (stdin). Shapes: a single **line** (`ReadLine`, already a string, no parse); the
  **count-then-lines** shape (read `n`, then `n` strings) for the split/join family; or a **string plus a
  number/char** (e.g. a line and an index, or a line and a target). Prompts on their own line where used;
  prompt text is graded.
- Full string toolkit from this chapter, plus everything before. **Methods are used, not reimplemented**
  (except the deliberate char-walk family). **OUT:** `StringBuilder`, regex, `Format`/composite format
  strings, culture-specific behaviour, `char` arithmetic / ASCII codes, LINQ.
- Invariant culture, **ASCII letters/digits only**, so case and comparison are unambiguous.

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **String anti-hardcoding (the Ch.8 rule, carried into the boss):** each pool problem's cases **vary the
  text**, content, length, the **empty string**, a single character, mixed case, and leading/trailing spaces,
  so a solution that hardcodes an answer or assumes a shape fails. The split/join family varies word counts
  (several / one / empty). **Every solution stays in bounds** (indices and `Substring` ranges are computed
  from the input). The oracle is unchanged (stdout per stdin, invariant culture).

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, string as text | 2 | `Length`, index a char, first/last (8.1) |
| B, searching | 4 | `Contains` / `IndexOf` (-1) / `StartsWith` / `EndsWith` (8.2) |
| C, transforming | 5 | `ToUpper`/`ToLower` / `Trim` / `Replace` / `Substring` (8.3) |
| D, split & join | 4 | `Split` -> array -> loop, `string.Join` (8.4) |
| E, char walk | 3 | count / validate / build char by char (8.5) |
| F, fix the broken program | 2 | a planted string bug |

*(2 + 4 + 5 + 4 + 3 + 2 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, string as text:** read a line; print its length, or the first/last char, or the char at a read index.
  Variants change the text and which fact. Integrates 8.1. Stay in bounds.
- **B, searching:** does it contain / start with / end with a read piece (True/False); the index of a read
  substring or char (or -1). Variants change text and the needle, and present/absent/position. The -1 sentinel
  is handled correctly. Integrates 8.2.
- **C, transforming:** upper/lower a line; trim and show the effect; replace one read substring with another;
  a first-N or from-index `Substring`; a chained transform (trim then upper). Variants change text (case,
  spaces, length). Every result uses the returned value (immutability). Integrates 8.3.
- **D, split & join:** split a line and count the words; print each word (Ch.7 walk); the first/last/Nth word;
  join a count-then-words input with a separator; a split-then-join round trip. Variants change word counts
  incl. one word and empty. Integrates 8.4 (and Ch.7).
- **E, char walk:** count a read char or the vowels/digits; validate all-digits (True/False); build a filtered
  or reversed string char by char. Variants change text incl. empty (zero/empty result) and single char.
  Integrates 8.5 (and Ch.7 iteration).
- **F, fix the broken program:** a string program with a planted bug. Variants (pick 2 across attempts): an
  ignored return value (`s.ToUpper();` then print `s`); `s[i] = c` immutability error (CS0200); an off-by-one
  `s[s.Length]`; treating `IndexOf`'s -1 as a real position; `string.Join` with swapped arguments. Proves
  reading & repairing string code. The committed solution for every fix problem compiles, runs, and stays in
  bounds.

## Notes
- **Vary the text (content, length, empty, single char, mixed case, spaces); stay in bounds** (Ch.8
  anti-hardcoding). Split/join varies word counts.
- **Oracle unchanged:** a string program is deterministic per stdin, so `gen`/`check` work as before. Verify
  output under invariant culture.
- **Immutability is the running theme:** transforms return new strings (use the return value); `s[i] = c` does
  not compile; build by concatenation. **-1 means not found** in searches.
- **Methods used, not reimplemented**, except the char-walk family (the one place the loop is the point).
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (a chapter test MAY carry light flavor, not used here by default).
- `cheatsheets/` gathers 8.1-8.5 (+ Ch.1-7 as a library).
