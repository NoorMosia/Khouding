# Problem 01, Line count (language-independent design)

**Sub-skill:** open a `StreamReader` with `using`; count lines with `ReadLine` until `null`.
**Difficulty:** 2

## Statement (student-facing)
The file `data.txt` is provided. Print the number of lines it contains.

## I/O contract
- **Input:** none (stdin empty).
- **Output:** one line, the line count.
- **Asset:** `data.txt` is staged alongside your program.

## Why it resists a trivial answer
The line count equals the number of lines in `data.txt`. The single case is structural (the file is fixed); the
skill is writing the `using`/`ReadLine` loop correctly.

## Note
Loop `while (reader.ReadLine() != null)` incrementing a counter. Empty line: `ReadLine()` returns `""`, not
`null`, so empty lines still count. `null` means end of file.
