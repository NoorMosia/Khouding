# Problem 05, Blank line between (language-independent design)

**Sub-skill:** an empty line is itself output (an empty `WriteLine()`).
**Difficulty:** 1

## Statement (student-facing)
Print `Above.`, then a blank line, then `Below.`:

```
Above.

Below.
```

## I/O contract
- **Input:** none.
- **Output:** three lines: `Above.`, an empty line, `Below.`

## Why it resists a trivial answer
The blank line is significant. It is produced by a `WriteLine` with nothing in it. Omitting it, or adding
spaces to it, fails the byte-exact match.
