# Problem 01, Day name (language-independent design)

**Sub-skill:** a basic numeric `switch` with a `default`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a day number (1-7):` on its own line and read a whole number. Print the weekday name: `1` is
`Monday`, `2` `Tuesday`, `3` `Wednesday`, `4` `Thursday`, `5` `Friday`, `6` `Saturday`, `7` `Sunday`. For any
other number print `unknown`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then a day name or `unknown`.

## Why it resists a trivial answer
Cases hit several distinct days and both out-of-range values (0 and 9) that must reach `default`, so a switch
missing a case or the default fails.
