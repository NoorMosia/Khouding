# Problem 06, Status code (language-independent design)

**Sub-skill:** a default-heavy `switch`, only a couple of cases named, the rest caught by `default`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a status code:` on its own line and read a whole number. Print `ok` for `200`, `not found` for
`404`. For every other code print `other`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `ok`, `not found`, `other`.

## Why it resists a trivial answer
Only two codes are named; everything else must land on `default`. Cases include both named codes and several
unnamed ones, so a switch without a working default fails most inputs.
