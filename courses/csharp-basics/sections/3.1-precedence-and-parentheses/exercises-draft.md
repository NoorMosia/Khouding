# Exercises draft, 3.1 Precedence and parentheses

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Operators apply in a set order, and parentheses override it. Read and control the evaluation order of an
expression.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** precedence of `+ - * / %` (`*` `/` `%` bind tighter than `+` `-`); left-to-right among equal
  precedence; parentheses to force an order. Uses `+ - *` from Ch.1/2 plus a **simple whole-number `/`**.
- **OUT:** the integer-division **gotcha** itself (that is 3.2, this section must NOT depend on it, so keep
  any `/` here to clean whole-number cases where truncation is not the point); `%` idioms (3.3); compound
  assignment (3.4); `Math` (3.5).
- **First section of the chapter:** precedence is taught before the operators that most need it, because
  combining operators invokes precedence immediately.

## Grading approach
- `stdout-match`, input via stdin (varied) for the compute problems; a few fixed-expression problems have no
  input. Oracle CLI generates every expected.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print the value of a fixed mixed expression (`2 + 3 * 4`) | precedence basics | ● |
| p02 | print a fixed expression where `()` changes the result (`(2 + 3) * 4`) | parentheses override | ● |
| p03 | read two numbers, print an expression with mixed `+` and `*` | precedence with input | ●● |
| p04 | read three numbers, compute `a + b * c` | `*` before `+` | ●● |
| p05 | read three numbers, compute `(a + b) * c` | parentheses with input | ●● |
| p06 | parenthesize a given expression to reach a stated target | control order | ●● |
| p07 | read values, evaluate a two-operator precedence-sensitive formula | realistic compute | ●● |
| p08 | left-to-right among equal precedence (`a - b - c`, `a - b + c`) | associativity | ●● |
| p09 | fix a wrong-precedence bug (missing parentheses gives wrong result) | debug | ●● |
| p10 | model a scenario: read values, compute a formula needing parentheses | integrative capstone | ●●● |

**Escalation:** p01-p02 fixed expressions (precedence, then parentheses); p03-p05 the same with input;
p06 parenthesize-to-target; p07 realistic formula; p08 equal-precedence left-to-right; p09 the missing-parens
debug; p10 capstone.

## Per-problem intent (bones)
- **p01** `2 + 3 * 4` prints `14` (not `20`).
- **p02** `(2 + 3) * 4` prints `20`.
- **p03/p04** read numbers, compute `a + b * c`; `*` binds first.
- **p05** `(a + b) * c`, parentheses change it.
- **p06** given an expression + a target, add parentheses so it evaluates to the target.
- **p07** a worded two-operator formula (e.g. base plus rate times quantity).
- **p08** `a - b - c` vs `a - b + c`; equal precedence goes left to right.
- **p09** starter computes the wrong thing because parentheses are missing; add them.
- **p10** capstone: read several values, compute a formula that genuinely needs parentheses.

## Notes
- Keep `/` usage here to clean whole-number cases ONLY (truncation is 3.2's lesson, not this section's).
- Country-neutral. Terse statements; for fixed-expression problems, let the target output do the talking.
- Verify every expected via the CLI (precedence results are easy to get subtly wrong by hand).
