# Problem 13, First N and last N (language-independent design)

**Sub-skill:** two `Substring` calls on the same string.
**Difficulty:** 3

## Statement (student-facing)
Read a line of text, then a count `n` (between 1 and half the line's length, so the slices do not overlap).
Print the first `n` characters, then the last `n` characters, each on its own line.

## I/O contract
- **Input:** two lines: the text, then `n`.
- **Output:** two lines: the first `n` chars, then the last `n` chars.

## Why it resists a trivial answer
Both lines depend on both inputs. Cases vary `n` and the content, so fixed output fails.

## Note
First N: `Substring(0, n)`. Last N: `Substring(s.Length - n)`. Cases keep `n <= s.Length / 2`.
