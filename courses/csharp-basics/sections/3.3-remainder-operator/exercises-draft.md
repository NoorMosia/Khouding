# Exercises draft, 3.3 The remainder operator %

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
`%` gives what is left over after division. The operator and its everyday idioms (even/odd, last digit,
wrap-around).

## Size & completion
- **11 problems**, lights at **7** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** `%` as remainder (`7 % 3 = 1`, VERIFIED); even/odd via `n % 2`; last digit via
  `n % 10`; wrap-around (keep a value in a range); negatives, the result's sign **follows the dividend**
  (`-7 % 3 = -1`, `7 % -3 = 1`, VERIFIED). `% 0` **named** (throws at run time) but never fed.
- **OUT:** using `%` inside an `if` / boolean logic (that is Ch.4, here we just *print* the remainder or a
  computed value, no conditionals); compound `%=` (3.4); `Math` (3.5).
- **Note on even/odd without `if`:** since conditionals are Ch.4, "even/odd" problems print the remainder
  itself (`n % 2` is `0` or `1`), not the words "even"/"odd". The idiom is taught as "the remainder tells
  you", the *decision* on it waits for Ch.4.

## Grading approach
- `stdout-match`, input via stdin (varied, incl. negatives). Oracle CLI generates every expected.
  **VERIFY every expected via the CLI** (negative `%` is easy to mis-predict by hand).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print `a % b` for fixed values (`7 % 3` -> `1`) | remainder basics | ● |
| p02 | read two whole numbers, print the remainder | remainder with input | ● |
| p03 | read a number, print `n % 2` (the even/odd signal, 0 or 1) | even/odd via % | ● |
| p04 | read a number, print its last digit (`n % 10`) | last-digit idiom | ●● |
| p05 | read a number, print the last two digits (`n % 100`) | idiom generalizes | ●● |
| p06 | wrap-around: read a value and a size, print `value % size` | wrap into range | ●● |
| p07 | negatives: read, print the remainder (sign follows dividend) | negative remainder | ●● |
| p08 | split into whole groups AND leftover (use `/` and `%` together) | quotient + remainder | ●● |
| p09 | read seconds, print leftover seconds past the minute (`s % 60`) | realistic wrap | ●● |
| p10 | fix a bug: used `/` where `%` was meant (or vice versa) | debug | ●● |
| p11 | model a scenario: read values, print a remainder-based result | integrative capstone | ●●● |

**Escalation:** p01-p02 basics (fixed then input); p03-p05 the digit/parity idioms; p06-p07 wrap-around and
negatives; p08-p09 quotient-plus-remainder and a realistic wrap; p10 the `/`-vs-`%` debug; p11 capstone.

## Per-problem intent (bones)
- **p01/p02** `a % b`.
- **p03** `n % 2` prints `0` (even) or `1` (odd); no `if` yet, just the signal.
- **p04/p05** `n % 10`, `n % 100` extract trailing digits.
- **p06** `value % size` keeps a value within `0..size-1`.
- **p07** negatives: `-7 % 3 = -1`; the sign follows the left operand.
- **p08** print both `a / b` (whole groups) and `a % b` (leftover), the two halves of division.
- **p09** `seconds % 60` is the leftover seconds (realistic framing, no `/` required unless paired).
- **p10** starter uses the wrong one of `/` and `%`; swap it.
- **p11** capstone: a worded scenario whose answer is a remainder.

## Notes
- **No conditionals:** even/odd is the *remainder value*, not a printed word; the decision is Ch.4.
- `% 0` named in the reading, never fed (name-don't-handle).
- Country-neutral. Terse statements. Verify every expected via the CLI, especially negatives.
