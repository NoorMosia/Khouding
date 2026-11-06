# Exercises draft, 8.6 Reading and writing files

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Read text from a file and write text to one, then treat the contents as the strings and arrays you already
know.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate. Chapter capstone: pulls 8.1-8.5 and Ch.7 together over
  real file contents.

## Scope (READ FIRST)
- **IN:** `StreamReader` to read (`ReadLine()` until `null`, or `ReadToEnd()`); `StreamWriter` to write
  (`WriteLine`); **`using` is taught, not optional** (`using (var r = new StreamReader(path)) { ... }` or
  `using var r = ...;`), it closes and flushes the file. The payoff: read the file, then `Split` the contents
  into a `string[]` and walk it with the Ch.7 loop; apply 8.1-8.5 per line/piece. The modern one-call forms
  `File.ReadAllLines` (-> `string[]`), `File.ReadAllText`, `File.WriteAllText` are **named in the reading with
  an Output: block, NOT drilled**. Standing note to the student: the durable knowledge is the model
  (open, read/write in some unit, close); the exact method names are always a lookup.
- **OUT:** per-case input files (there is exactly ONE provided file); grading on a file's final contents
  (Flavor B); arbitrary/!computed paths; appending; directories; `File.Exists`/delete; anything beyond the
  provided text file. `StringBuilder`, regex, async I/O.

## Grading approach (decided, FLAVOR A, oracle unchanged)
- `stdout-match`. Each problem is given **one fixed, read-only input file** staged as a workspace asset
  (shown in the top bar like a cheatsheet; known path, e.g. `data.txt`, so NO path is read from stdin). The
  program reads that file and prints its answer to **stdout**; the oracle compares stdout exactly as always.
  `problem.yaml` gains only a declaration of the asset file to stage; `expected.json` is unchanged in shape.
- **Writing is practised via write-then-read-back-to-stdout:** write a scratch file with `StreamWriter`,
  reopen it with `StreamReader`, print what was read, so a Run always shows output and the grade stays
  stdout-only. The anti-hardcoding variation comes from **varying the provided file's contents** across cases
  (the asset differs per case), so a hardcoded answer fails. Every read stays in bounds (loop until `null`;
  never index a line that may be absent). Oracle CLI generates expecteds (invariant culture).
  *(Note for the flesh pass: confirm how a per-case provided-file asset is declared + staged by the runner
  before authoring the cases; this is the one new mechanism in the chapter.)*

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print the number of lines in the provided file | read loop + count | ●● |
| p02 | print the first line of the file | read one line | ●● |
| p03 | print every line of the file (echo it) | read loop | ●● |
| p04 | print the file with every line upper-cased | read loop + 8.3 | ●● |
| p05 | print the number of lines that contain a read word | read loop + 8.2 | ●● |
| p06 | split a stated line into words and print the word count | read + 8.4 Split + Ch.7 | ●●● |
| p07 | total the numbers, one per line, and print the sum | read + int.Parse + Ch.7 accumulate | ●●● |
| p08 | print the longest line (by Length) | read loop + 8.1 + max-seed | ●●● |
| p09 | write-then-read-back: write each line trimmed+upper to a scratch file, read it back, print | StreamWriter + StreamReader | ●●● |
| p10 | fix a bug: StreamReader used without `using` (or read loop never checks null) | debug: dispose / null | ●●● |

**Escalation:** p01-p03 open and read (count, first line, echo); p04-p05 read + a string method per line
(transform, search); p06-p08 read + array/number work (split, sum, longest); p09 the write path
(write-then-read-back); p10 the `using`/null bug.

## Per-problem intent (bones)
- **p01** `using` a `StreamReader`; `while ((line = r.ReadLine()) != null) count++;` print count.
- **p02** read the first line (one `ReadLine()`); print it. (File guaranteed non-empty for this one.)
- **p03** read loop; print each line as read (echo the file).
- **p04** read loop; print `line.ToUpper()` per line.
- **p05** read a word from stdin, then read the file; count lines where `line.Contains(word)`; print the count.
- **p06** read the whole file (or a stated line), `Split(' ')` it, print `.Length` (the Ch.7 array tie).
- **p07** read loop; `int.Parse(line)` each; accumulate; print the sum. (File lines are integers.)
- **p08** read loop; track the longest line by `Length` (seed from the first line); print it.
- **p09** `using` a `StreamWriter` to write each line transformed (e.g. `Trim().ToUpper()`) to a scratch path;
  then `using` a `StreamReader` to read it back and print. Demonstrates the write path, grade stays stdout.
- **p10** starter opens a `StreamReader` without `using` (never closed) or loops without the `!= null` guard;
  fix to the `using` + null-checked read loop. Committed solution is correct.

## Notes
- **ONE provided file per problem** (Flavor A), staged like a cheatsheet at a fixed path; the program reads it
  and answers on **stdout**. No file-content grading; Chapters 1-7 untouched.
- **`using` is drilled, not optional** (p10 is the dispose/flush bug). Read loops check for `null` (end of
  file); never index a line that might not exist (stay in bounds).
- **The Ch.7/strings tie is the point:** file -> `Split` -> `string[]` -> loop, with 8.1-8.5 applied per
  piece.
- **Modern `File.*` is shown in the reading, NOT a problem** (mental-model-over-syntax note stated to the
  student). Vary the provided file's contents across cases. Country-neutral. Terse statements. Prompts on
  their own line where a problem also reads stdin.
