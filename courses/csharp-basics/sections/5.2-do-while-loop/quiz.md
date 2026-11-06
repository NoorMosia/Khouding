# Checkpoint quiz, 5.2 The do-while loop

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), minimum passes
What is the minimum number of times a do-while body runs?
- A) once, the body runs before the condition is ever checked
- B) zero, like a while
- C) exactly as many times as the condition is true
- D) it depends on the condition only

## Q2 (MCQ), the one difference
A while and a do-while have the same body and condition. The condition is FALSE at the start. How do they differ?
- A) the while runs the body zero times; the do-while runs it once
- B) they behave identically
- C) the do-while runs zero times; the while runs once
- D) both run the body once

## Q3 (True/False)
A do-while statement ends with a semicolon after its while condition.
- True / False

## Q4 (MCQ), trace it
How many lines does this print?
```csharp
int i = 10;
do { Console.WriteLine(i); i++; } while (i < 5);
```
- A) one, it prints 10 then stops
- B) zero
- C) five
- D) it loops forever

## Q5 (True/False)
When you want to read and process input at least once and then maybe repeat, a do-while fits well because the read happens before the condition is tested.
- True / False

## Q6 (MCQ), where the condition is
Where is the condition tested in a do-while?
- A) at the end, after the body runs
- B) at the start, before the body
- C) both before and after each pass
- D) it has no condition

## Q7 (Fill in the blank)
Fill the keyword that starts the run-at-least-once loop:
`____ { ... } while (cond);`

---

### Answer key (UI hides this)
- Q1: **A**, the condition is checked at the end, so the body always runs at least once.
- Q2: **A**, with a false-at-start condition the while skips the body, but the do-while runs it once first.
- Q3: **True**, `do { ... } while (cond);` is one statement and needs the trailing semicolon; a plain while does not.
- Q4: **A**, the body runs once (prints 10), then `11 < 5` is false, so it stops after one line.
- Q5: **True**, the guaranteed first pass means the first read always happens.
- Q6: **A**, the condition sits at the end, which is why the body runs once before it is tested.
- Q7: **`do`**
