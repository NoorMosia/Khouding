# Exercises draft, 4.T Chapter 4 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T / 2.T / 3.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 4 region boss. Integrative: combines 4.1-4.6 (and Chapters 1-3) into realistic decision scenarios.
No new material. Passing it lights the Chapter 4 region on the map.

## Skills it integrates (4.1-4.6 + Ch.1-3)
- 4.1 booleans and comparisons (`== != < > <= >=`, prints `True`/`False`)
- 4.2 the `if` statement (one-way guard)
- 4.3 `if`/`else` and `else if` chains (multi-way, first true wins)
- 4.4 combining conditions (`&& || !`)
- 4.5 nested conditionals (decision tree, flatten-vs-nest)
- 4.6 `switch` (`case`/`break`/`default`, int and string)
- Ch.1-3: types, input, parse, interpolation, arithmetic (`+ - * / %`), `Math`

## Scope boundary
- **Input IS used** (stdin, prompts on their own line, prompt text graded), like 2.T/3.T.
- Full decision toolkit from this chapter, plus everything before. **No loops, no methods** (Ch.5/6).
- Output stays `WriteLine` of a literal, a computed value, or a `bool`; conditions decide which runs.

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **Branching anti-hardcoding (the Ch.4 rule, carried into the boss):** each pool problem's stdin cases
  **straddle every branch boundary**, an input into each block, each `case`, both truth outcomes, every leaf
  of a tree. Combined with the pool being bigger than the draw, a memorised or single-branch answer fails.

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, booleans & comparisons | 3 | produce/print a `bool` from a comparison (4.1) |
| B, if / else / else if | 5 | one-way guard + two-way + multi-way chain (4.2, 4.3) |
| C, combining & nesting | 5 | `&& || !` compound conditions + nested trees (4.4, 4.5) |
| D, switch | 3 | match one value against cases, int and string (4.6) |
| E, fix the broken program | 4 | `=` for `==`; mis-ordered `else if`; `||` for `&&`; missing `break` |

*(3 + 5 + 5 + 3 + 4 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, booleans & comparisons:** read values, print a comparison result or a stored `bool` (prints
  `True`/`False`). Variants change the operator and the boundary. Integrates 4.1.
- **B, if / else / else if:** classify or guard, one-way (print only if), two-way (adult/minor, pass/fail),
  multi-way (sign, grade bands). Variants change the thresholds and the number of branches. Integrates
  4.2-4.3. Cases hit every branch.
- **C, combining & nesting:** compound conditions (in-range `&&`, either `||`, two-factor gate) and nested
  trees (tier by one factor then another; a computed value tiered with Ch.3 arithmetic). Variants change the
  factors and the shape. Integrates 4.4-4.5.
- **D, switch:** a menu/day/code dispatch to a label or a computed result; one variant switches on a
  `string`. Variants change the cases and which hits `default`. Integrates 4.6.
- **E, fix the broken program:** a multi-skill decision program with a planted Ch.4 bug. Variants: `=` where
  `==` was meant; an `else if` chain in the wrong order (catches too early); `||` where `&&` was meant (range
  always true); a `switch` missing a `break` (a compile error in C#, CS0163). Proves reading & repairing
  branching code.

## Notes
- **Straddle every boundary (Ch.4 anti-hardcoding):** cases per problem must reach each block/case/leaf and
  both sides of each condition. This is stronger than the earlier chapters' varied-input rule and is the
  point of a decisions boss.
- **Oracle unchanged:** a branching program is deterministic per stdin, so `gen`/`check` work as before; just
  design the cases to cover the branches.
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (a chapter test MAY carry light flavor, not used here by default).
- `cheatsheets/` gathers 4.1-4.6 (+ Ch.1-3 as a library).
- The E family's `switch` missing-`break` variant is a COMPILE error in C# (CS0163); verify and quote the real
  message when authoring.
