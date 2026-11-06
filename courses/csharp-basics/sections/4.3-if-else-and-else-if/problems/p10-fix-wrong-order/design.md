# Problem 10, Fix the wrong-order chain (language-independent design)

**Sub-skill:** debug a chain whose conditions are ordered loosest-first.
**Difficulty:** 2

## Statement (student-facing)
This program labels a score as `high` (90 or more), `mid` (50 or more), or `low` (otherwise). It gives the
wrong label for high scores. The `else if` chain tests the loosest condition first, so almost everything falls
into the first band. Reorder the chain so the tightest condition comes first.

## I/O contract
- **Input:** one line, a whole number (the score).
- **Output:** the prompt, then one of `high`, `mid`, `low`.

## The planted bug
The chain reads `if (score >= 50) ... else if (score >= 90) ... else ...`. A score of `95` is already `>= 50`,
so the first band wins and prints `mid`; the `>= 90` test is never reached. There is no compiler error: the
code runs and prints a plausible but wrong label. The fix is to test `>= 90` first, then `>= 50`, then the
final `else`.

## Why it resists a trivial answer
The case `95` separates the two orders: the buggy loosest-first chain prints `mid`, the correct tightest-first
chain prints `high`. Boundary cases `90` and `50` and a `low` case confirm every band is reached once the
order is fixed.
