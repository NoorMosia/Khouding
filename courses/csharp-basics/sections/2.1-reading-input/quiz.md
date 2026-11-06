# Checkpoint quiz, 2.1 Reading input

> Comprehension gate before the problems. Auto-graded. Need 4 of 6 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), the return type
What type does `Console.ReadLine()` give you?
- A) `string`
- B) `int`
- C) `double`
- D) it depends on what the user typed

## Q2 (True/False)
If the input line is `25`, `Console.ReadLine()` gives you the number `25`.
- True / False

## Q3 (MCQ), the prompt
Where should the prompt go?
- A) printed on its own line, before reading
- B) after reading the input
- C) a prompt is not needed
- D) inside the `ReadLine` call

## Q4 (True/False)
On this platform you type your input live while the program is running.
- True / False

## Q5 (MCQ), reading order
Given input lines `one` then `two`, what does this print?
```csharp
string a = Console.ReadLine();
string b = Console.ReadLine();
Console.WriteLine(b);
Console.WriteLine(a);
```
- A) one then two
- B) two then one
- C) one then one
- D) nothing

## Q6 (Fill in the blank)
To read a line of input into a variable called `line`, write:
`string line = Console.________();`

---

### Answer key (UI hides this)
- Q1: **A**, `ReadLine` always returns a `string`.
- Q2: **False**, it gives the text `"25"`, not the number; converting is the next section.
- Q3: **A**, print the prompt first, on its own line, then read.
- Q4: **False**, input is supplied up front and read line by line; you do not type live during the run.
- Q5: **B**, first read goes to `a` (`one`), second to `b` (`two`); printing `b` then `a` gives two then one.
- Q6: **`ReadLine`**
