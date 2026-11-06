# Exercises draft, 4.3 if / else and else if

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Choose between two paths with `if`/`else`, and chain `else if` for more than two (first true wins).

## Size & completion
- **13 problems**, lights at **8** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** `if`/`else` (exactly one of two blocks runs); `else if` chains for multi-way; **first true wins**,
  the rest are skipped; the final `else` is the catch-all; order matters in a chain.
- **OUT:** `&&`/`||`/`!` (4.4); nesting (4.5, a separate skill); `switch` (4.6). Conditions here stay single
  comparisons (from 4.1); compound conditions wait for 4.4.

## Grading approach
- `stdout-match`, input via stdin. **Cases hit EVERY branch:** at least one input lands in each block,
  including the final `else`. A program missing a branch fails the case that needs it. Oracle CLI generates
  expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | two-way: adult or minor (`age >= 18`) | `if`/`else` basics | ● |
| p02 | two-way: pass or fail (`score >= 50`) | `if`/`else` realistic | ● |
| p03 | two-way: equal or not equal, print which | `if`/`else` on `==` | ● |
| p04 | three-way sign: positive / negative / zero | `else if` chain | ●● |
| p05 | three-way: below / within / above a range | `else if` ordering | ●● |
| p06 | grade bands A/B/C/fail (`else if` chain with a final else) | multi-way chain | ●● |
| p07 | first-true-wins: show a later matching band is skipped | chain semantics | ●● |
| p08 | read a number, print one of several labelled buckets | bucketing | ●● |
| p09 | two-way with a computed branch (one side does arithmetic) | compute-in-branch | ●● |
| p10 | fix a bug: `else if` chain in the wrong order (catches too early) | debug: ordering | ●● |
| p11 | fix a bug: a bare `else` that should be `else if` (wrong catch-all) | debug: chain shape | ●● |
| p12 | read + classify into 4 bands with a clean chain | multi-way realistic | ●●● |
| p13 | model a scenario: read values, choose one of several outcomes, print | integrative capstone | ●●● |

**Escalation:** p01-p03 two-way on each comparison; p04-p06 the `else if` chain (sign, range, grade bands);
p07-p08 chain semantics (first wins, bucketing); p09 compute-in-branch; p10-p11 the two chain debugs; p12-p13
multi-way realistic + capstone.

## Per-problem intent (bones)
- **p01-p03** `if (cond) print X; else print Y;`; cases hit both sides.
- **p04** sign: `if (n > 0) ... else if (n < 0) ... else ...` (zero is the final else).
- **p05** below/within/above a range via a chain; boundary cases.
- **p06** grade bands (90+/80+/70+/else) with a final `else` fail.
- **p07** a case whose value matches two bands if mis-ordered, proving first-true-wins (and that a lower band
  placed first would wrongly catch it).
- **p08** map a number to one of several labels (a bucket).
- **p09** one branch prints a plain line, the other computes then prints (Ch.3 arithmetic).
- **p10** starter's chain tests the loosest condition first so everything falls into it; reorder.
- **p11** starter uses a bare `else` where an `else if` was needed, so the catch-all grabs cases it should not;
  fix the shape.
- **p12** a clean 4-band classify.
- **p13** capstone: a worded multi-outcome scenario.

## Notes
- **Hit every branch (Ch.4 rule):** cases must reach each block incl. the final `else`. For chains, include a
  case that would be mis-caught by a wrong order (so p10's reorder is actually tested).
- Conditions stay single comparisons here; compound (`&&`/`||`) is 4.4, nesting is 4.5.
- Country-neutral. Terse statements.
