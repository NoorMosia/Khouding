# Checkpoint quiz, 4.5 Nested conditionals

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), trace the tree
In this code, what prints for `n = 5`?
```csharp
if (n > 0) { if (n > 100) { Console.WriteLine("big"); } else { Console.WriteLine("small"); } }
else { Console.WriteLine("neg"); }
```
- A) `small`
- B) `big`
- C) `neg`
- D) nothing

## Q2 (MCQ), an unreached branch
For the same code, what prints for `n = -4`?
- A) `neg`, the inner check is never reached
- B) `small`
- C) `big`
- D) `neg` then `small`

## Q3 (True/False)
`if (a) { if (b) { X } }` produces the same output as `if (a && b) { X }`.
- True / False

## Q4 (MCQ), when to nest
When is nesting the better shape rather than a flat `&&`?
- A) when the inner question only makes sense after the outer is true, or the branches lead to different outputs
- B) always, nesting is clearer than `&&`
- C) never, a flat `&&` can always replace a nest
- D) only when there are exactly two conditions

## Q5 (True/False)
Without braces, an `else` binds to the nearest unmatched `if` above it.
- True / False

## Q6 (MCQ), why braces
Why wrap nested branches in braces even when a branch is a single statement?
- A) so an `else` pairs with the `if` you intend and the structure you see is what runs
- B) braces make the program run faster
- C) C# refuses to compile a brace-less `if`
- D) indentation controls which `if` an `else` binds to

## Q7 (Fill in the blank)
Fill the keyword: nesting means putting one `____` statement inside the body of another.

---

### Answer key (UI hides this)
- Q1: **A**, `5 > 0` enters the outer branch, `5 > 100` is false, so the inner `else` prints `small`.
- Q2: **A**, `-4` fails `n > 0` and goes straight to the outer `else`. The inner `if` sits inside the positive branch and never runs.
- Q3: **True**, for a single combined yes the nested form and the flat `&&` are equivalent; prefer `&&`.
- Q4: **A**, nest when the inner question depends on the outer, or when branches need different outputs. A flat `&&` only captures one combined yes.
- Q5: **True**, a brace-less `else` attaches to the closest `if`. Braces make it explicit.
- Q6: **A**, braces state structure; indentation does not affect binding, the compiler ignores layout.
- Q7: **`if`**
