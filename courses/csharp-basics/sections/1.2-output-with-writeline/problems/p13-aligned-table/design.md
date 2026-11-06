# Problem 13, Aligned table (language-independent design)

**Sub-skill:** compose `\t` (columns) with newlines (rows).
**Difficulty:** 3

## Statement (student-facing)
Print this 3-row table, columns separated by a tab (not spaces):

```
Item	Price
Coffee	3
Muffin	2
```

## I/O contract
- **Input:** none.
- **Output:** three lines, each with two fields separated by a single tab.

## Why it resists a trivial answer
Combines everything so far: a tab between columns on each row, and a newline to end each row. Byte-exact, so
every separator must be a real tab. Expected is generated from the solution.
