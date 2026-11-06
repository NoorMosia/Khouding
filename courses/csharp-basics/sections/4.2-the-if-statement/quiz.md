# Checkpoint quiz, 4.2 The if statement

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), when it runs
When does the block inside `if (condition) { ... }` run?
- A) only when the condition is true
- B) always
- C) only when the condition is false
- D) never

## Q2 (MCQ), the condition
What goes inside the parentheses of an `if`?
- A) a `bool` (for example a comparison)
- B) any `int`
- C) a `string`
- D) a statement ending in `;`

## Q3 (True/False)
Code placed after the `if` block (outside its braces) only runs when the condition was true.
- True / False

## Q4 (MCQ), inside vs outside
With input 7, what does this print?
```csharp
Console.WriteLine("A");
if (7 > 100) { Console.WriteLine("B"); }
```
- A) `A`
- B) `A` then `B`
- C) `B`
- D) nothing

## Q5 (True/False)
Writing `if (n > 100);` with a semicolon right after the condition is the same as `if (n > 100)` with no semicolon.
- True / False

## Q6 (MCQ), guard the block
You want `big` to print only when `n` is over 100. Which is correct?
- A) `if (n > 100) { Console.WriteLine("big"); }`
- B) `if (n > 100); { Console.WriteLine("big"); }`
- C) `if (n > 100) Console.WriteLine("big") { }`
- D) `Console.WriteLine("big"); if (n > 100);`

## Q7 (Fill in the blank)
Fill the keyword that runs a block only when a condition is true:
`___ (score >= 50) { Console.WriteLine("pass"); }`

---

### Answer key (UI hides this)
- Q1: **A**, a one-way `if` runs its block only when the condition is true.
- Q2: **A**, the condition must be a `bool`, like a comparison.
- Q3: **False**, only code inside the braces is conditional; code outside runs regardless.
- Q4: **A**, `A` is outside the `if` so it always prints; `7 > 100` is false so `B` is skipped.
- Q5: **False**, the stray semicolon becomes the empty body, so the block always runs (compiler warns CS0642).
- Q6: **A**, option B has the stray-semicolon bug so `big` always prints.
- Q7: **`if`**
