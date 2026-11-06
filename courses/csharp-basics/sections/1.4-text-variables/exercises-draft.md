# Exercises draft, 1.4 Text variables (`string` and `char`)

> **What this file is (the standard per-section skeleton-pass artifact).**
> Rough design of the problem family, written BEFORE the real `problem.yaml` folders exist
> (the "gray map → add color" skeleton pass, AUTHORING-GUIDE §4). Not parsed; superseded by the real
> `problems/pNN-*/` folders once authored. (Template: 1.1's `exercises-draft.md`.)

---

## Section one-idea
Declare, initialize, and reassign **text** variables, a `string` (a sequence of characters) vs a `char`
(a single character), plus a **light** first look at `bool`. Deliberately **rhymes with 1.3's motion**
(declare / init / choose / reassign) on a new kind of data → wax-on/wax-off reinforcement.

## Size & completion
- **12 problems**, lights at **7** (~60%). Lighter than 1.3 (no arithmetic analog) but a real drill, the
  declare/choose/reassign motion plus the quoting distinction earn more than a minimal section.

## Scope reconciliation (READ FIRST, what's in vs out)
- **IN:** declare / init / reassign `string` and `char`; choose `string` vs `char`; the `"..."` vs `'...'`
  quoting distinction; the `const` **callback** (one problem at most, drilling happened in 1.3); a **light**
  `bool` flag (declare + print, no logic).
- **OUT (later sections / chapters):**
  - **string concatenation / interpolation** → §2.3.
  - **string *methods*** (length, indexing, case, substring…) → Ch.8 "Strings in depth".
  - **`bool` with comparisons / logic / `if`** → Ch.4 "Decisions" (this is why `bool` stays light here).
  - **reading input + parsing** is §2.1/§2.2, but 1.4 may still *read a line of text* from stdin (that's
    just capturing a `string`, which is the native thing `ReadLine` already returns; no parsing needed).

## Grading approach (this section)
- **`stdout-match`**, **input via stdin** (read a name/word/char, store, print) so programs are general and
  resist hardcoding.
- **Anti-hardcoding:** varied inputs per problem, different names, words, single chars, including tricky
  ones (a name with a space? a single-letter name? an uppercase vs lowercase char?). A printed literal fails.
- **`char` cases need care:** a `char` holds exactly ONE character, cases should stay single-character; use
  the quoting-bug problems to make the `'x'` vs `"x"` distinction bite.

## Statement style
- Terse (course-wide rule). State what to read and what to print, minimally.

---

## The family (escalating, rhymes with 1.3)

**Thread A, declare / init (reps):**
**Thread B, choose `string` vs `char`:**
**Thread C, reassign + `const` callback:**
**Thread D, `bool` (light):**
**Thread E, debug the quoting bug:**

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a word, store in a `string`, print it | declare+init `string` | ● |
| p02 | read a single character, store in a `char`, print it | declare+init `char` | ● |
| p03 | read a full line (may contain spaces) into a `string`, print it | `string` holds a sequence | ● |
| p04 | given described values, output the right type name (`string`/`char`) for each | choose string vs char | ● |
| p05 | read a value, reassign the `string` to a new value, print the final | reassignment overwrites | ● |
| p06 | declare the three text fields of a described thing + print them | model text fields | ● |
| p07 | use a `const string` (e.g. a fixed label) with a read value, print both | `const` callback | ●● |
| p08 | declare a `bool` flag set to a fixed value and print it | `bool` (light) | ● |
| p09 | read a letter as a `char` and reprint it on its own line | `char` rep, varied cases | ● |
| p10 | fix a bug: `"A"` used where a `char` `'A'` is needed | debug: quoting (string→char) | ●● |
| p11 | fix a bug: `'ab'` / wrong single-quote usage where a `string` is needed | debug: quoting (char→string) | ●● |
| p12 | model a described scenario: choose text types, declare, print to spec | integrative capstone | ●●● |

**Escalation shape:** p01–p03 pure declare/init reps (string, char, full-line string); p04 the *choice*;
p05–p06 reassign + modelling fields; p07 `const` callback; p08–p09 the light `bool` + a char rep; p10–p11
the signature quoting bugs (both directions); p12 the capstone.

---

## Per-problem intent (the bones)

### p01, declare a string
Read a word, store in a well-named `string`, print it. Pure rep. *Cases:* vary the word incl. a
single-letter word and a longer name.

### p02, declare a char
Read a single character, store in a `char`, print it. The single-character counterpart to p01.
*Cases:* letter, digit-as-char, punctuation, upper vs lower.

### p03, a string holds a whole line
Read a full line that **may contain spaces** (e.g. a full name), store in a `string`, print it. Teaches
that a `string` is a *sequence*, many characters, not one. (Reinforces the text-group "one vs many" beat.)

### p04, choose string vs char
Given described values (a person's initial, a surname, a grade letter, a sentence), output the correct
type name for each. Proves the *choice*. *(No I/O of the value itself, the answer is the type decision;
vary which values are described per case so it can't be hardcoded.)*

### p05, reassign a string
Read a value into a `string`, reassign to a second read value, print the final. "The old text is gone."

### p06, model text fields
Read the described text fields of a thing (e.g. a book: title, author as `string`s) and print them each on
their own line. Modelling with multiple text variables. *Cases:* vary the field values.

### p07, const string callback
Declare a `const string` (a fixed label/prefix), read a value, print the label then the value (each on its
own line, **no concatenation yet**, that's §2.3). Shows `const` works for text too. One problem only.

### p08, a bool flag (light)
Declare a `bool` set to a fixed value (e.g. `bool isActive = true;`) and print it. No comparison, no logic,
just "a type that holds one of two values." Plants the seed for Ch.3.

### p09, a char, reprinted
Read a single letter as a `char`, print it on its own line. A second `char` rep with varied cases
(uppercase, lowercase, symbol) so the single-character idea sticks and no literal passes.

### p10, fix the quoting bug (string → char)
Given a program that uses `"A"` (a one-character *string*) where a `char` `'A'` is required, fix the
quotes so it compiles/behaves correctly and prints the target. Debug: the `"..."` vs `'...'` distinction.

### p11, fix the quoting bug (char → string)
The other direction: a program that tries to put multiple characters in single quotes (`'ab'`, illegal) or
uses `'...'` where a `string` is needed, fix it to a `string` with double quotes. Debug: quoting again.

### p12, model the scenario (capstone)
A short described scenario (a few more words only as needed): choose the right text types (`string`/`char`,
maybe a `const string`, maybe a light `bool`), declare well-named variables, print to spec. Integrative.

---

## Notes / open calls
- **No concatenation/interpolation** (`+`, `$"{...}"`) anywhere, print fields on separate lines instead.
  Combining text with values is §2.3's job.
- **No string methods** (`.Length`, `.ToUpper()`, indexing), that's Ch.8. 1.4 is declare/choose/reassign only.
- **Reading a line vs a word:** p03 deliberately uses a line that may contain spaces to make the "sequence"
  point; most other reads are single tokens. Keep stdin cases consistent with what each problem reads.
- **`char` single-quote reps** are the copy-resistant heart of the quoting bugs, make the varied cases
  genuinely differ (upper/lower/symbol) so the fix can't be memorized.
