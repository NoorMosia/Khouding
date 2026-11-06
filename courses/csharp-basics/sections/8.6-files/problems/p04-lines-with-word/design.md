# Problem 04, Lines containing a word (language-independent design)

**Sub-skill:** read loop + `Contains` per line (ties 8.2).
**Difficulty:** 2

## Statement (student-facing)
Read a word from stdin. Print every line of `data.txt` that contains that word. Print nothing if no line
matches.

## I/O contract
- **Input:** one line from stdin, the word to look for.
- **Output:** matching lines from `data.txt`, each on its own line.

## Why it resists a trivial answer
Which lines print depends on the word. Cases vary the word including one with no matches.

## Note
`line.Contains(word)` is case-sensitive here.
