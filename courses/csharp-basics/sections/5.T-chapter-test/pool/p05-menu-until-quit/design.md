# Pool p05, Menu until quit (family B, do-while)

**Integrates:** 5.2.
**Difficulty:** 2

## Statement (student-facing)
Using a `do-while`, repeat these steps: print the line `Pick (1-3, 0 quit):`, read a choice, then print the
label, `one` for 1, `two` for 2, `three` for 3, `bye` for 0, `unknown` otherwise. Repeat while the choice is
not 0. On a choice of 0, print `bye` and stop.

## I/O contract
- **Input:** whole-number choices, one per line, ending with `0`.
- **Output:** for each pass the menu line then the chosen label; the last label is `bye`.

## Why it resists a trivial answer
The menu prints once per pass and always at least once (even when `0` is first). Cases include immediate quit,
an unknown choice, and several passes, so the loop must show the menu each time, map every choice, and stop
exactly on `0`.
