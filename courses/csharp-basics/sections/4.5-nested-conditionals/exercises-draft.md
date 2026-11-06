# Exercises draft, 4.5 Nested conditionals

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A decision inside a decision, a real decision tree. When a later question only matters inside an earlier
branch, you nest.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** an `if`/`else` body containing another `if`/`else`; two or three levels deep; **the flatten-vs-nest
  judgment** (uses 4.4): a flat `&&` is clearer when two conditions are independent; a nested tree is clearer
  (or necessary) when the second question only makes sense after the first is true. Combine with Ch.3
  arithmetic inside branches.
- **OUT:** `switch` (4.6). No loops/methods. Keep nesting to 2-3 levels (deeper is a readability lesson, not a
  drill).

## Grading approach
- `stdout-match`, input via stdin. **Cases reach EVERY LEAF of the tree:** each terminal branch needs an input
  that lands there. A tree with an unreachable-in-testing leaf is under-tested. Oracle CLI generates
  expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | two-level classify: sign, then (if positive) small vs large | nest basics | ●● |
| p02 | if in range, then classify within the range; else "out" | nest inside one branch | ●● |
| p03 | flatten: rewrite a given nested `if(a){if(b)}` as one `a && b` | flatten-to-`&&` | ●● |
| p04 | when NOT to flatten: second question only valid inside the first | why nest | ●● |
| p05 | three-level tree (category, then subcategory, then detail) | depth | ●●● |
| p06 | grade then distinction: band first, then "with distinction" inside the top band | tiered | ●●● |
| p07 | nested with arithmetic: tier a computed value (Ch.3 inside branches) | compute + nest | ●●● |
| p08 | guard then compute: only compute/print if the input is valid-looking | guard-then-act | ●● |
| p09 | shipping tier: by weight band, then by zone inside each band | realistic tree | ●●● |
| p10 | fix a bug: an inner `else` binds to the wrong `if` (dangling-else style) | debug: which if | ●●● |
| p11 | choose the shape: given a spec, decide flatten vs nest and implement | judgment | ●●● |
| p12 | model a scenario: a multi-level decision from read values | integrative capstone | ●●● |

**Escalation:** p01-p02 two-level nests; p03-p04 the flatten-vs-nest contrast (both directions); p05-p07 depth
+ tiered + arithmetic; p08-p09 guard-then-act and a realistic tree; p10 the which-`if`-does-`else`-bind debug;
p11-p12 judgment + capstone.

## Per-problem intent (bones)
- **p01** `if (n > 0) { if (n > 100) "big positive" else "small positive" } else ...`.
- **p02** nest only inside the in-range branch; "out" is the outer else.
- **p03** given a nested `if (a) { if (b) print X }`, produce identical output with `if (a && b)`.
- **p04** a case where the inner question is meaningless unless the outer holds (so flattening would ask it
  wrongly), showing nesting is the right shape.
- **p05** three levels, each case reaching a distinct leaf.
- **p06** band (A/B/C) then, inside the A band only, "with distinction" vs plain.
- **p07** compute a value (Ch.3 arithmetic) then tier it with a nested tree.
- **p08** validate-looking guard (e.g. non-negative) then compute/print inside; else a message.
- **p09** weight band, then zone within each band (a realistic 2-factor tree).
- **p10** starter's inner `else` attaches to the wrong `if`; fix with braces so it binds correctly. (Confirm
  the real behavior against the compiler at authoring time; in C# `else` binds to the nearest `if`.)
- **p11** a spec that is cleanest flat for one part and nested for another; student picks per part.
- **p12** capstone: a worded multi-level decision.

## Notes
- **Reach every leaf (Ch.4 rule for trees):** each terminal branch needs a case that lands there, so a
  missing or mis-bound branch fails.
- **Flatten-vs-nest is the distinctive skill** of this section (why it is separate from 4.3): teach *when*,
  not just how. p03 flattens, p04 shows when you must not.
- **p10 dangling-else:** C# binds `else` to the nearest unmatched `if`; verify the exact
  misbehavior-and-fix against the compiler when authoring.
- Country-neutral. Terse statements.
