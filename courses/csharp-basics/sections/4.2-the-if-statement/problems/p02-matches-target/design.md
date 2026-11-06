# Problem 02, Matches the target (language-independent design)

**Sub-skill:** one-way `if` with `==`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter the code:` on its own line and read it. If the code equals `1234`, print `match`. Otherwise print
nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `match` only when `code == 1234`.

## Why it resists a trivial answer
Only the exact match runs; near-misses (`1235`) and other values skip. The `==` comparison is required, and the
run/skip split defeats an always-print or never-print program.
