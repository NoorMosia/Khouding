# Exercises draft, 2.T Chapter 2 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 2 region boss. Integrative: combines 2.1–2.5 (and Chapter 1) into realistic I/O round-trip
scenarios. No new material. Passing it lights the Chapter 2 region on the map.

## Skills it integrates (2.1–2.5 + Ch.1)
- 2.1 prompt + read input
- 2.2 parse to numbers, compute with `+ - *`
- 2.3 interpolation for value-filled output
- 2.4 joining strings with `+` (building a composed string)
- 2.5 formatting numbers (`:F2`, money)
- Ch.1: types, `const`, naming, output/escapes

## Scope boundary
- **Input IS used** (unlike 1.T): values come in via stdin, prompts on their own line.
- **`+ - *` only**, no `/`, no `%` (Ch.3).
- Input supplied upfront; prompts on their own line; prompt text is part of graded output.

## Size (decided)
- **Pool ≈ 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **Anti-hardcoding here is stronger than 1.T**: these problems take stdin, so each pool problem can carry
  **multiple varied input cases** (the classic defense) AND the pool has value-varied variants. Best of both.

## The pool (≈20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, echo & intake | 4 | prompt + read + print (2.1), interpolation (2.3) |
| B, read + compute | 5 | parse (2.2) + `+ - *` + interpolated result |
| C, money / formatting | 4 | parse + compute + `:F2` money output (2.5) |
| D, build a string | 3 | join pieces with `+` into a composed output (2.4) |
| E, fix the broken program | 4 | debug: forgot to parse, missing `$`, wrong type, raw-double-money |

*(4 + 5 + 4 + 3 + 4 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, echo & intake:** prompt for and read fields (name, city, role, ...), print a tidy interpolated
  block. Variants change the fields + values. Integrates 2.1 + 2.3.
- **B, read + compute:** read numbers, compute with `+ - *`, print an interpolated result
  (`$"{a} + {b} = {sum}"`, next year's age, rectangle area, total = count*price). Variants change the
  numbers + operation. Integrates 2.2 + 2.3.
- **C, money / formatting:** read a price/quantity, compute a total, print it with `:F2` (and a literal
  money symbol). Variants change the amounts. Integrates 2.2 + 2.5. **Verify every expected via the CLI
  (invariant culture).**
- **D, build a string:** read pieces (first/last, parts of a code), build a composed `string` with `+`,
  print it. Variants change the pieces. Integrates 2.4.
- **E, fix the broken program:** a multi-skill program with a planted bug. Variants: math attempted on a
  ReadLine string without parsing; a missing `$` so interpolation prints literally; an `int` where a
  `double` is needed for a price; money printed as a raw double (needs `:F2`). Proves reading & repairing
  integrated I/O code.

## Notes
- **Pool problems take stdin**, so (unlike 1.T) each can have several varied input cases, strengthens
  anti-hardcoding on top of the value-varied pool.
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (country flavor is reserved for the exam reveal; a chapter test MAY carry
  light flavor but it is optional and not used here by default).
- `cheatsheets/` gathers 2.1–2.5 (+ Ch.1 as library).
