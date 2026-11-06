# Exercises draft, 4.6 The switch statement

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Match one value against several constant cases (the specialised multi-way form).

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** `switch (value) { case X: ...; break; ... default: ...; break; }`; each `case` is a constant; `break`
  ends a case; `default` is the catch-all; `switch` as the clean form for "one value, several known options"
  (a menu choice, a day number, a code). Switching on an `int` and on a `string` (both common, both simple).
- **OUT:** switch expressions (`=>`), pattern matching, deliberate multi-label fall-through. Classic
  statement form only. No loops/methods.

## Grading approach
- `stdout-match`, input via stdin. **Cases hit several `case`s AND `default`:** at least one input per tested
  case plus one that falls to `default`. A `switch` missing a case or `default` fails the relevant input.
  Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | day number (1-7) to a day name, `default` "unknown" | `switch` basics | ● |
| p02 | menu choice (1/2/3) to an action label, `default` "invalid" | menu | ● |
| p03 | a letter grade code to a message (switch on a `string`) | switch on string | ●● |
| p04 | map a short code to a full word, with a `default` | code lookup | ●● |
| p05 | switch that computes in a case (e.g. option to a price) | compute-in-case | ●● |
| p06 | a single `default`-heavy switch (few named, rest default) | default catch-all | ●● |
| p07 | read a value, switch to one of several labelled outcomes | realistic | ●● |
| p08 | fix a bug: a missing `break` (confirm real behavior) | debug: break | ●● |
| p09 | convert a short `else if` chain (on equality) to a `switch` | chain -> switch | ●● |
| p10 | model a scenario: a menu-driven result via `switch` | integrative capstone | ●●● |

**Escalation:** p01-p02 the basic int menu/day; p03-p04 switch on a string + code lookup; p05-p07
compute-in-case, default-heavy, realistic; p08 the missing-`break` debug; p09 the chain-to-switch conversion;
p10 capstone.

## Per-problem intent (bones)
- **p01** `1`->`Monday` ... `7`->`Sunday`, else `unknown`; cases hit a few days and an out-of-range default.
- **p02** menu `1/2/3` to labels, else `invalid`.
- **p03** switch on a read `string` (e.g. `"A"`->message); cases include an unmatched string -> default.
- **p04** short code -> full word (e.g. `"N"`->`North`), with default.
- **p05** a case body computes then prints (Ch.3 arithmetic), e.g. option -> a priced result.
- **p06** many inputs fall to `default`, only a couple are named.
- **p07** a realistic one-value dispatch.
- **p08** starter omits a `break` on a case. **Confirm the real behavior at authoring time:** C# does NOT
  allow implicit fall-through between non-empty cases, it is a COMPILE error (CS0163), so the fix is adding
  the `break`. (This makes p08 a compile-error debug, not a silent one, state that in the design.)
- **p09** an `else if` chain that only tests `x == constant` converts cleanly to a `switch`.
- **p10** capstone: a menu-driven scenario.

## Notes
- **Hit cases + default (Ch.4 rule):** cases must reach several `case`s and the `default`.
- **Missing `break` is a COMPILE error in C#** (CS0163 "Control cannot fall through from one case label"),
  unlike C/Java, verify and quote the real message when authoring p08 and the cheatsheet. Empty fall-through
  (stacked labels with no code between) IS allowed, but that is out of scope here.
- **Switch on `int` and on `string`** are both in scope (both simple); `double` is not a typical switch value
  (skip it).
- Country-neutral. Terse statements.
