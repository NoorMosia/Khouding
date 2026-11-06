# Exercises draft, 2.1 Reading input with Console.ReadLine

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Rough family design before real `problem.yaml` folders.
> Not parsed; superseded by the real `problems/pNN-*/` folders once authored.

---

## Section one-idea
Get a line of text from input into a variable, after prompting for it. The whole chapter flips from Ch.1's
baked-in values to `Console.ReadLine()`.

## Size & completion
- **8 problems**, lights at **5** (~60%). A lighter section: reading a string is not deep, but it is the
  foundation the rest of the chapter stands on.

## Scope (READ FIRST)
- **IN:** `Console.ReadLine()` returns a `string`; store it; use it; **prompt on its own line** first.
- **OUT:** parsing to numbers (2.2), interpolation (2.3), `+` joining (2.4). Keep output to plain
  `WriteLine` of strings here.

## Input model (applies to the whole chapter)
- Input is **supplied upfront and piped to stdin**; the program is not typed into live.
- **Prompt on its own line:** `Console.WriteLine("Enter your name:");` then `Console.ReadLine();`. The prompt
  text IS part of stdout and is graded, so it must match exactly.
- Hidden cases vary the input; a hardcoded literal fails (this is the anti-hardcoding defense, same as 1.3).

## Grading approach
- `stdout-match`, **input via stdin** (the cases carry the input). The prompt lines are part of the
  expected output. Oracle CLI generates expecteds from the solution.

## Statement style
- Terse. State what to prompt for, what to read, and what to print.

---

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | prompt for a name, read it, print it | read + prompt | ● |
| p02 | prompt for a word, read it, print a fixed greeting then the word | read + a surrounding line | ● |
| p03 | prompt and read, print the value on its own line (echo) | the basic round-trip | ● |
| p04 | read two lines (two prompts), print both back in order | two reads | ●● |
| p05 | read two lines, print them in REVERSE order | two reads, ordering | ●● |
| p06 | read three fields (name, city, role), print each on its own line | several reads | ●● |
| p07 | prompt + read, then print a fixed closing line after it | read between fixed lines | ● |
| p08 | model a tiny intake: prompt + read a few fields, print a tidy block | integrative (light) | ●● |

**Escalation:** p01–p03 the single read with a prompt; p04–p06 multiple reads and ordering; p07–p08 reads
embedded in surrounding fixed output, closing with a small intake.

## Per-problem intent (bones)
- **p01** prompt `Enter your name:` (own line), read, print the name.
- **p02** prompt for a word, print a fixed line (e.g. `You entered:`) then the word on the next line.
- **p03** the plain echo: prompt, read, print exactly what was read.
- **p04** two prompts, two reads, print line1 then line2.
- **p05** two reads, print second then first (ordering matters).
- **p06** three reads, three prints, each field on its own line.
- **p07** prompt, read, print the value, then a fixed trailing line (e.g. `Thanks!`).
- **p08** a light intake form: a couple of prompts and reads, printed as a small block.

## Notes
- **No parsing, no interpolation, no `+`** here. Just read strings and `WriteLine` them. Keeps 2.1 the clean
  "capture input" rep before the chapter builds on it.
- Country-neutral inputs (names/words/cities that are not the map country).
- Expected output includes the prompt lines; the oracle captures them from the solution.
