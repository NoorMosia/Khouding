# Checkpoint quiz, 8.6 Reading and writing files

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), ReadLine at end of file
What does `reader.ReadLine()` return when it reaches the end of the file?
- A) `null`
- B) an empty string
- C) 0
- D) it throws an exception

## Q2 (True/False)
You can safely omit the `using` block for a `StreamWriter` as long as you call `Close()` yourself.
- True / False

## Q3 (MCQ), why using matters for writing
Why is `using` important for a `StreamWriter`?
- A) it flushes the final buffer and closes the file, so the written content is not lost
- B) it makes the writer write faster
- C) it is only needed for `StreamReader`, not `StreamWriter`
- D) it is optional; the file is always complete

## Q4 (MCQ), File.ReadAllLines
What is the purpose of `File.ReadAllLines("data.txt")`?
- A) it reads all lines and returns a `string[]`
- B) it reads the file one character at a time
- C) it opens the file for writing
- D) it prints the file to the console

## Q5 (True/False)
When you open a `StreamReader` without a `using` block, the file is always closed as soon as the `ReadLine` loop finishes.
- True / False

## Q6 (MCQ), the lasting knowledge
The exact `StreamReader` class name changes in different languages and frameworks. The lasting knowledge from this section is:
- A) the model: open, read or write in some unit, close
- B) the exact spelling of `StreamReader`
- C) that files only work in C#
- D) that `ReadLine` is the only way to read a file

## Q7 (Fill in the blank)
Fill the class used to read a file line by line:
`using (var reader = new ____("data.txt"))`

---

### Answer key (UI hides this)
- Q1: **A**, `ReadLine()` returns `null` at end of file; the standard loop checks for it.
- Q2: **False**, `using` is recommended because it guarantees flush and close even if an exception occurs.
- Q3: **A**, without `using` the buffer may not flush and the file ends up empty or truncated.
- Q4: **A**, `File.ReadAllLines` reads every line into a `string[]` and closes the file.
- Q5: **False**, the handle is held until the garbage collector runs; `using` releases it immediately.
- Q6: **A**, the model (open, read/write, close) is the durable knowledge; method names are a lookup.
- Q7: **`StreamReader`**
