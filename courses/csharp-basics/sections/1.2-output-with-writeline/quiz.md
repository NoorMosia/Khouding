# Checkpoint quiz, 1.2 Output: shaping what you display

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), Write vs WriteLine
Which one moves to a new line after printing?
- A) `Console.Write`
- B) `Console.WriteLine`
- C) both do
- D) neither does

## Q2 (True/False)
`Console.Write("Hi");` adds a newline after the text.
- True / False

## Q3 (MCQ), the `\n` escape
How many lines does this print?
```csharp
Console.WriteLine("a\nb");
```
- A) one line: `a\nb`
- B) two lines: `a` then `b`
- C) three lines
- D) it does not compile

## Q4 (Fill in the blank)
To print a double-quote character inside a string, you write the two characters: `______`

## Q5 (MCQ), the `\\` escape
What does this print?
```csharp
Console.WriteLine("C:\\Temp");
```
- A) `C:\\Temp`
- B) `C:\Temp`
- C) `C:Temp`
- D) it does not compile

## Q6 (MCQ), comments
Which is a line comment (ignored to the end of the line)?
- A) `// note`
- B) `/* note */`
- C) `# note`
- D) `<!-- note -->`

## Q7 (True/False)
Adding a comment to a program changes what it prints.
- True / False

---

### Answer key (UI hides this)
- Q1: **B**, `WriteLine` prints then moves to a new line; `Write` stays on the line.
- Q2: **False**, `Write` adds no newline; only `WriteLine` does.
- Q3: **B**, `\n` inside the string is a newline, so two lines (and `WriteLine` adds one more at the end).
- Q4: **`\"`**, the escape for a literal double quote.
- Q5: **B**, `\\` is the escape for one backslash, so it prints `C:\Temp`.
- Q6: **A**, `//` is a line comment; `/* */` is a block comment; the others are not C#.
- Q7: **False**, comments are ignored by the compiler and do not affect output.
