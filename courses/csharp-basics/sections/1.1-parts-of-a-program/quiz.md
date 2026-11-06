# Checkpoint quiz, 1.1 The parts of a C# program

> Comprehension gate before the problems. Auto-graded. Need 4 of 6 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), where it starts
When you run a C# program, where does it start?
- A) at the very first line of the file (`using System;`)
- B) inside `Main`
- C) inside the class, before `Main`
- D) at the last line and works upward

## Q2 (MCQ), what prints
What appears on the screen when this runs?
```csharp
Console.WriteLine("Hi there");
```
- A) `Hi there`
- B) `"Hi there"`
- C) `Console.WriteLine`
- D) nothing

## Q3 (Fill in the blank)
Every statement ends with a single character that marks its end. Type that character:
`______`

## Q4 (True/False)
A line of code placed **outside** `Main` still runs when the program starts.
- True / False

## Q5 (MCQ), order of statements
What does this print?
```csharp
static void Main()
{
    Console.WriteLine("First");
    Console.WriteLine("Second");
}
```
- A) First then Second
- B) Second then First
- C) only First
- D) both on the same line: FirstSecond

## Q6 (MCQ), where your code goes
You want to add a line that prints a message when the program runs. Where do you put it?
- A) inside `Main`'s braces, with the other statements
- B) between the class and `Main`
- C) above `using System;`
- D) anywhere in the file; location does not matter

---

### Answer key (UI hides this)
- Q1: **B**, execution begins inside `Main`; C# looks for it and starts there wherever it sits.
- Q2: **A**, `WriteLine` prints what is inside the quotes; the quotes do not appear.
- Q3: **`;`** (accept "semicolon"), a missing one is the most common beginner error.
- Q4: **False**, only code inside `Main` runs; a loose statement outside it does not execute.
- Q5: **A**, statements run top to bottom, and `WriteLine` ends each with a new line.
- Q6: **A**, your statements go inside `Main`'s braces, in the order you want them to run.
