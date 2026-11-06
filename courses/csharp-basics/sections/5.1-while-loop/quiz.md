# Checkpoint quiz, 5.1 The while loop

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), when the condition is checked
When does a while loop check its condition?
- A) before each pass; if it is false the body is skipped
- B) after each pass; so the body always runs at least once
- C) only once, at the start of the program
- D) halfway through the body

## Q2 (MCQ), zero passes
How many times does this body run?
```csharp
int i = 5;
while (i < 3) { Console.WriteLine(i); i++; }
```
- A) zero, `5 < 3` is false at the start
- B) once
- C) three times
- D) forever

## Q3 (True/False)
If the loop body never changes anything the condition depends on, the loop can run forever.
- True / False

## Q4 (MCQ), what stops the loop
In the loop below, what makes it eventually stop?
```csharp
int i = 1;
while (i <= 4) { sum += i; i++; }
```
- A) `i++` raises `i` until `i <= 4` becomes false
- B) `sum += i` eventually overflows
- C) while loops always stop after 4 passes
- D) nothing, it is an infinite loop

## Q5 (True/False)
A sentinel loop stops when a special stop value is read, and that stop value is not counted as data.
- True / False

## Q6 (MCQ), accumulator
What is an accumulator in a loop?
- A) a variable declared outside the loop that builds up a result (a sum, count, or max) across passes
- B) the loop's condition
- C) a variable that resets to zero every pass
- D) another name for the loop counter

## Q7 (Fill in the blank)
Fill the keyword that repeats a block as long as a condition is true:
`____ (i <= n) { ... }`

---

### Answer key (UI hides this)
- Q1: **A**, a while tests the condition before every pass; a false condition at the start means zero passes.
- Q2: **A**, `5 < 3` is false immediately, so the body never runs.
- Q3: **True**, without progress toward making the condition false, the loop never ends.
- Q4: **A**, `i++` is the progress; once `i` reaches 5 the condition is false and the loop stops.
- Q5: **True**, the sentinel marks the end of input; it stops the loop and is not processed as data.
- Q6: **A**, an accumulator lives outside the loop and is updated each pass, holding the running result at the end.
- Q7: **`while`**
