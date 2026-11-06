# Checkpoint quiz, 5.3 The for loop

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), which part runs once
In `for (int i = 0; i < n; i++)`, which part runs exactly once, before any pass?
- A) the init, `int i = 0`
- B) the condition, `i < n`
- C) the update, `i++`
- D) the body

## Q2 (MCQ), count the passes
How many times does this body run?
```csharp
for (int i = 0; i < 4; i++) { ... }
```
- A) four, for `i = 0, 1, 2, 3`
- B) five
- C) three
- D) forever

## Q3 (True/False)
Every for loop can be rewritten as a while loop with the same behavior.
- True / False

## Q4 (MCQ), the step
What does the update `i += 2` do in a for header?
- A) adds 2 to `i` after each pass, so the loop steps by 2
- B) multiplies `i` by 2 each pass
- C) runs the body twice per pass
- D) sets `i` to 2

## Q5 (True/False)
A for loop whose condition is false at the start runs its body zero times.
- True / False

## Q6 (MCQ), counting down
How many numbers does this print?
```csharp
for (int i = 5; i >= 1; i--) { Console.WriteLine(i); }
```
- A) five: 5 4 3 2 1
- B) four
- C) six
- D) none, `i--` is invalid

## Q7 (Fill in the blank)
A for header has three parts separated by this punctuation mark (give the character):
`for (init ___ condition ___ update)`

---

### Answer key (UI hides this)
- Q1: **A**, the init runs once before the loop; the condition is checked before each pass and the update runs after each pass.
- Q2: **A**, `i` takes 0, 1, 2, 3 and stops at 4, so four passes.
- Q3: **True**, a for just gathers a while's init, condition, and update into one header.
- Q4: **A**, `i += 2` adds 2 after each pass, stepping the counter by 2.
- Q5: **True**, the condition is checked before the first pass, so a false start means zero passes.
- Q6: **A**, counting down 5 to 1 inclusive prints five numbers.
- Q7: **`;`** (semicolon)
