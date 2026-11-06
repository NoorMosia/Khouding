# Problem 09, A string array record (language-independent design)

**Sub-skill:** a `string[]` holding fields by index.
**Difficulty:** 2

## Statement (student-facing)
Build a 2-slot `string` array. Read a name into index 0 and a role into index 1. Print the name, then the role,
each on its own line.

## I/O contract
- **Input:** two lines, a name then a role.
- **Output:** two lines, the name then the role.

## Why it resists a trivial answer
Both lines are the input values. Cases vary the text, so fixed output fails. Shows an array of a non-int type.

## Note
`string[]` works exactly like `int[]`: indexed slots, same bounds rules. Read lines directly (no parse).
