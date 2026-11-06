# Problem 03, Echo the file (language-independent design)

**Sub-skill:** the standard `StreamReader` read loop.
**Difficulty:** 2

## Statement (student-facing)
The file `data.txt` is provided. Print every line exactly as it appears.

## I/O contract
- **Input:** none.
- **Output:** each line of `data.txt` on its own line.

## Note
`while ((line = reader.ReadLine()) != null) Console.WriteLine(line);`
