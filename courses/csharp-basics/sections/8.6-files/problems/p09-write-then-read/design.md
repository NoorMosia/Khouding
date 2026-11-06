# Problem 09, Write then read back (language-independent design)

**Sub-skill:** `StreamWriter` (write), then `StreamReader` (read back); both wrapped in `using`.
**Difficulty:** 3

## Statement (student-facing)
Read a word from stdin. Write the word upper-cased to a file named `scratch.txt`, then read that file back
and print its contents.

## I/O contract
- **Input:** one line from stdin, a word.
- **Output:** the word upper-cased (as read from `scratch.txt`).

## Why it resists a trivial answer
The output is the upper-cased input word. Cases vary the word, so a fixed answer fails.

## Note
This problem has no `asset_files` (no provided input file). Write `scratch.txt` with the writer, flush it with
`using`, then open it again with a reader. The grade checks stdout.
