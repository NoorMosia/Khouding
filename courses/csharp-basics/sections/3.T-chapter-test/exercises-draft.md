# Exercises draft, 3.T Chapter 3 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T / 2.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 3 region boss. Integrative: combines 3.1-3.5 (and Chapters 1-2) into realistic compute scenarios.
No new material. Passing it lights the Chapter 3 region on the map.

## Skills it integrates (3.1-3.5 + Ch.1-2)
- 3.1 precedence and parentheses
- 3.2 division and the integer-division gotcha (force a `double`; negatives truncate toward zero)
- 3.3 remainder `%` (even/odd signal, last digit, wrap; sign follows the dividend)
- 3.4 updating a variable (`++`/`--`, compound `+= -= *= /= %=`)
- 3.5 `Math` (call into a library; `Sqrt`/`Pow`/`Round`/`Abs`/`Max`/`Min`/`PI`; the `using System;` lesson)
- Ch.1-2: types, `const`, naming, read input, parse, interpolation, `:F2`

## Scope boundary
- **Input IS used** (stdin, prompts on their own line, prompt text is graded output), like 2.T.
- Full operator set from this chapter, plus `+ - *` from before. **No conditionals/loops** (Ch.4/5).
- Negatives IN, overflow OUT. Divide-by-zero / `% 0` never fed (named-not-handled upstream).
- Money/`double` output via `:F2`; VERIFY every such expected via the CLI (invariant culture).

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **Anti-hardcoding from both sides:** pool bigger than the draw, AND each pool problem carries several
  varied stdin cases (incl. negatives / edges).

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, precedence & parentheses | 4 | evaluate/control a mixed expression from inputs (3.1) |
| B, division | 4 | int vs double division, force a double, negatives (3.2) |
| C, remainder | 4 | remainder, last digit, wrap, quotient+remainder (3.3) |
| D, updating & Math | 5 | compound updates / accumulator (3.4) + `Math` calls (3.5) |
| E, fix the broken program | 3 | wrong precedence; forgot to force `double`; `%`/`/` mixed up |

*(4 + 4 + 4 + 5 + 3 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, precedence & parentheses:** read values, compute a precedence-sensitive formula; variants change the
  operators / where parentheses matter. Integrates 3.1 (+ Ch.2 read/parse).
- **B, division:** read two numbers, produce an integer quotient or a forced-double decimal to spec; variants
  change whole vs decimal and include a negative. Integrates 3.2.
- **C, remainder:** read a number, print a remainder-based result (last digit, wrap into a range, leftover
  past a unit, the `n % 2` signal); variants change the modulus and include a negative. Integrates 3.3.
- **D, updating & Math:** two sub-shapes pooled together, an accumulator built with `+=` across a few reads,
  and a `Math` compute (root, power, round a price, hypotenuse of two inputs, larger/smaller). Variants change
  the values and which function. Integrates 3.4 + 3.5. **Some variants use a cheatsheet-only `Math` function
  (deduce).**
- **E, fix the broken program:** a multi-skill program with a planted Ch.3 bug. Variants: missing parentheses
  gives the wrong precedence result; both operands `int` so the decimal is lost (forgot to force `double`);
  used `/` where `%` was meant (or vice versa). Proves reading & repairing integrated arithmetic code.

## Notes
- **Pool problems take stdin**, so each carries several varied input cases (negatives/edges), on top of the
  value-varied pool, strong anti-hardcoding.
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (a chapter test MAY carry light flavor, not used here by default).
- `cheatsheets/` gathers 3.1-3.5 (+ Ch.1-2 as library).
- VERIFY every division/`%`/`Math`/`double` expected via the CLI under invariant culture.
