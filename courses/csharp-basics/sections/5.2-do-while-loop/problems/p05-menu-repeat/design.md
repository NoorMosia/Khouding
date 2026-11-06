# Problem 05, Menu repeat (language-independent design)

**Sub-skill:** a `do-while` menu loop that always shows the menu at least once.
**Difficulty:** 2

## Statement (student-facing)
Using a `do-while`, repeat these steps: print the line `Menu: 1=start 2=load 3=save 4=quit`, read a choice (a
whole number), then print the matching label on its own line, `start` for 1, `load` for 2, `save` for 3,
`unknown` for anything else, and `bye` for 4. Keep repeating until the choice is 4. On a choice of 4, print
`bye` and stop.

## I/O contract
- **Input:** whole-number choices, one per line, ending with `4`.
- **Output:** for each pass the menu line then the chosen label; the last label is `bye`.

## Why it resists a trivial answer
The menu prints once per pass and always at least once (even when `4` is the first choice). Cases include an
immediate quit, an unknown choice, and several passes, so the loop must show the menu each time, map every
choice, and stop exactly on `4`.

## Note
Decide the mapping with an `if`/`else if` chain or a `switch` (both known). `4` prints `bye` and ends the
loop; print `bye` once.
