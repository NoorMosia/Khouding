# Problem 09, Newline inside Write (language-independent design)

**Sub-skill:** `\n` inside a single `Write`, and `Write` adds no trailing newline.
**Difficulty:** 2

## Statement (student-facing)
Using a single `Console.Write` (not `WriteLine`) with a `\n` inside, print these two lines, with no
trailing newline after `Second`:

```
First
Second
```

## I/O contract
- **Input:** none.
- **Output:** `First`, a newline, `Second`, and nothing after. No trailing newline.

## The idea (the trailing-newline teacher)
`Write` puts out exactly the characters you give it and nothing more. `"First\nSecond"` has a newline in the
middle (so you see two lines) but none at the end, because you did not add one and `Write` does not either.

## Why it resists a trivial answer
This is the one problem where the absence of a final newline is the whole point. `WriteLine` would add a
trailing newline and fail the byte-exact match. The student must use `Write` and put the `\n` only in the
middle.
