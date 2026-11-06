# Problem 09, Hollow square (language-independent design)

**Sub-skill:** a nest with an inner condition choosing the cell character.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter a size:` on its own line and read a whole number `n` (1 or more). Print an `n`-by-`n` square
where the border cells are `*` and the interior cells are a space. A cell is on the border when its row or its
column is the first (1) or the last (`n`). Each cell is exactly one character, with no separators.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n` rows of `n` characters each (border `*`, interior space).

## Why it resists a trivial answer
The cell character depends on its position: an `if` inside the nest decides border versus interior. Cases
include `n = 1` and `n = 2` (all cells are border) and larger `n` (a genuine hollow middle), so a solid block
or a wrong edge test fails. Because column `n` is always a border `*`, no row ends in a space.

## Note
Border test: `row == 1 || row == n || col == 1 || col == n`. Print `*` on the border, a space otherwise.
