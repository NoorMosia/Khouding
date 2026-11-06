# Problem 11, Login state (language-independent design)

**Sub-skill:** judge the shape, the inner question only matters after the outer, so nest.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter logged-in and verified (0 or 1):` on its own line. Read a logged-in flag (line 1) and a verified
flag (line 2), each `1` or `0`. If not logged in, print `login`. If logged in, print `go` when verified,
otherwise `verify`.

## I/O contract
- **Input:** two lines, each `0` or `1`.
- **Output:** the prompt, then one of `login`, `go`, `verify`.

## Why it resists a trivial answer
The verified check only matters once logged in, so the natural shape is a nest, not a flat `&&` (which cannot
give three outcomes). Cases reach all three leaves, including not-logged-in with the verified flag set, which
must still print `login`.

## Note
Flags are read as `int` and compared with `== 1` (no bool parsing yet).
