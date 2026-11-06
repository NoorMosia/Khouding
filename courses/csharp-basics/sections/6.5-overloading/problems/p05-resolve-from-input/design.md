# Problem 05, Resolve from input (language-independent design)

**Sub-skill:** choose which overload to call based on input.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Add`: `static int Add(int a, int b)` and `static int Add(int a, int b, int c)`,
returning the sum of their arguments. In `Main`, prompt `Enter mode and three numbers:` on its own line. Read
a mode (line 1, `2` or `3`), then `a`, `b`, `c` (lines 2 to 4). If the mode is `2`, print `Add(a, b)`;
otherwise print `Add(a, b, c)`.

## I/O contract
- **Input:** line 1 the mode, lines 2 to 4 whole numbers.
- **Output:** the prompt, then the sum from the chosen overload.

## Why it resists a trivial answer
The mode decides which overload runs, so both must exist and be selected correctly. Cases use both modes with
varied numbers, so a single overload cannot pass all of them.
