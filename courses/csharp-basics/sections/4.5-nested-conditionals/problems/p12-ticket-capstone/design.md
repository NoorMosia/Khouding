# Problem 12, Ticket capstone (language-independent design)

**Sub-skill:** a full multi-level decision from read values, the integrative close of the section.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter age and weekend flag (0 or 1):` on its own line. Read an age (line 1) and a weekend flag (line
2, `1` for weekend, `0` for weekday). If the age is under 5, print `free` (the weekend flag does not matter).
Otherwise the visitor is a `child` when the age is 5 to 17 and an `adult` at 18 or over. Print the category
followed by the day: `child weekday`, `child weekend`, `adult weekday`, or `adult weekend`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then one of `free`, `child weekday`, `child weekend`, `adult weekday`, `adult weekend`.

## Why it resists a trivial answer
The free case short-circuits before the day question, and the day split sits inside both the child and adult
branches. Cases reach all five leaves and both age edges (5 and 18), so a dropped branch or wrong boundary
fails.

## Note
The weekend flag is read as an `int` and compared with `== 1` (no bool parsing yet).
