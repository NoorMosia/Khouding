# Checkpoint quiz, 5.4 Nested loops

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), total passes
An outer loop runs 3 times and its inner loop runs 4 times per outer pass. How many times does the inner body run in total?
- A) 12 (3 times 4)
- B) 7 (3 plus 4)
- C) 3
- D) 4

## Q2 (True/False)
The inner loop finishes all its passes before the outer loop moves to its next pass.
- True / False

## Q3 (MCQ), where the line ends
In a grid-printing nest, where does `Console.WriteLine()` (ending a line) usually go?
- A) after the inner loop, once per outer pass, to end each row
- B) inside the inner loop, after every character
- C) only once, after both loops finish
- D) before the inner loop

## Q4 (MCQ), wrong place
What happens if you put `WriteLine` (instead of `Write`) inside the inner loop of a grid?
- A) every character lands on its own line instead of forming rows
- B) the grid prints normally
- C) it will not compile
- D) all rows merge onto one line

## Q5 (True/False)
The inner loop's counter starts over from its init value on every outer pass.
- True / False

## Q6 (MCQ), count the triangle
This nest prints how many stars in total?
```csharp
for (int r = 1; r <= 3; r++) { for (int c = 1; c <= r; c++) { Console.Write('*'); } Console.WriteLine(); }
```
- A) 6 (1 + 2 + 3), a triangle
- B) 9 (3 times 3)
- C) 3
- D) it does not compile

## Q7 (Fill in the blank)
Fill the print call used INSIDE the inner loop to stay on the same row (no newline):
`Console.____("*");`

---

### Answer key (UI hides this)
- Q1: **A**, the inner loop runs fully each outer pass, so `a * b = 3 * 4 = 12`.
- Q2: **True**, the inner loop runs start to finish before the outer advances.
- Q3: **A**, `Write` inside the inner loop keeps the row going; one `WriteLine` after it ends the row.
- Q4: **A**, `WriteLine` after each character puts every one on its own line, losing the grid.
- Q5: **True**, the inner `for`'s init runs again each outer pass, resetting the counter.
- Q6: **A**, `c <= r` gives 1 + 2 + 3 = 6 stars, a triangle.
- Q7: **`Write`**
