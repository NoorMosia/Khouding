# Checkpoint quiz, 4.3 if / else and else if

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), two-way choice
With `if (cond) { A } else { B }`, how many of the two blocks run?
- A) exactly one, A when `cond` is true, otherwise B
- B) both, in order
- C) neither unless `cond` is true
- D) A always, B only when `cond` is false

## Q2 (True/False)
In an `if / else if / else` chain, the first condition that is true runs its block and the rest are skipped.
- True / False

## Q3 (MCQ), first true wins
A spend of 150 runs this chain. What prints?
```csharp
if (spend >= 100) { Console.WriteLine("gold"); }
else if (spend >= 50) { Console.WriteLine("silver"); }
else { Console.WriteLine("none"); }
```
- A) `gold`
- B) `silver`
- C) `gold` then `silver`
- D) `none`

## Q4 (MCQ), order matters
A score of 95 runs this chain. What prints?
```csharp
if (score >= 50) { Console.WriteLine("mid"); }
else if (score >= 90) { Console.WriteLine("high"); }
else { Console.WriteLine("low"); }
```
- A) `mid`, the loosest test is first so it catches 95 before `>= 90` is reached
- B) `high`, because 95 >= 90
- C) `mid` then `high`
- D) `low`

## Q5 (True/False)
The final `else` of a chain runs only when every condition above it was false.
- True / False

## Q6 (MCQ), pick the shape
You need three outcomes: `cold` (< 10), `warm` (10 to 24), `hot` (25+). Which shape is correct?
- A) `if (t < 10) cold; else if (t < 25) warm; else hot;`
- B) `if (t < 10) cold; else warm;` (hot is dropped)
- C) `if (t < 10) cold; if (t < 25) warm; if (t >= 25) hot;`
- D) `if (t < 25) warm; else if (t < 10) cold; else hot;`

## Q7 (Fill in the blank)
Fill the two keywords that add a second guarded band to a chain:
`if (x > 0) { ... } ___ ___ (x < 0) { ... } else { ... }`

---

### Answer key (UI hides this)
- Q1: **A**, `if`/`else` is a two-way choice, so exactly one block runs.
- Q2: **True**, the chain stops at the first true condition and skips the rest.
- Q3: **A**, 150 matches both thresholds but the first true condition wins, so `gold` prints.
- Q4: **A**, 95 is already `>= 50`, so the first branch wins and prints `mid`; the `>= 90` test is never reached. Order the tightest test first.
- Q5: **True**, the final `else` is the catch-all; it runs when no earlier condition matched.
- Q6: **A**, it guards each band and keeps a final `else` for hot; a bare `else` (B) would mislabel hot values as warm, and a wrong order (D) would mislabel.
- Q7: **`else if`**
