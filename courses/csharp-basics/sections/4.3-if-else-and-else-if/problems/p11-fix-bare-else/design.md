# Problem 11, Fix the bare else (language-independent design)

**Sub-skill:** debug a catch-all `else` that should have been a guarded `else if`.
**Difficulty:** 2

## Statement (student-facing)
This program should classify a temperature reading as `cold` (below 10), `warm` (10 to 24), or `hot` (25 or
more). A middle band was written as a bare `else` instead of an `else if`, so it catches every value that is
not cold, including hot ones. Give that middle band its own condition so only `warm` values land there and
`hot` gets its own branch.

## I/O contract
- **Input:** one line, a whole number (the temperature).
- **Output:** the prompt, then one of `cold`, `warm`, `hot`.

## The planted bug
The starter is `if (t < 10) cold; else if (t < 25) warm; else hot;` rewritten as
`if (t < 10) cold; else warm;` with a dangling `hot` branch dropped, so the bare `else` prints `warm` for
everything from 10 upward, hot values included. There is no compiler error. The fix turns the bare `else`
into `else if (t < 25)` and restores the final `else` for `hot`.

## Why it resists a trivial answer
A reading of `30` is not cold, so the buggy bare `else` prints `warm`; the correct chain prints `hot`. The
boundary `25` and a `cold` case confirm all three bands are reachable once the shape is fixed.
