# Checkpoint quiz, 4.4 Combining conditions

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what && means
When is `a && b` true?
- A) only when both a and b are true
- B) when at least one of a or b is true
- C) only when both a and b are false
- D) always

## Q2 (MCQ), what || means
When is `a || b` false?
- A) only when both a and b are false
- B) only when both a and b are true
- C) whenever a is false
- D) never

## Q3 (True/False)
`!(5 > 3)` evaluates to False.
- True / False

## Q4 (MCQ), a range check
Which condition is true exactly when x is in the range 10 to 20 inclusive?
- A) `x >= 10 && x <= 20`
- B) `x >= 10 || x <= 20`
- C) `x > 10 && x < 20`
- D) `x <= 10 && x >= 20`

## Q5 (MCQ), grouping
Given `a = false`, `b = true`, `c = true`, what is `a && (b || c)`?
- A) false
- B) true

## Q6 (True/False)
In C#, you write the and operator as the word `and`.
- True / False

## Q7 (Fill in the blank)
Fill the operator that makes this true only when BOTH comparisons hold:
`age >= 18 ____ age < 65`

---

### Answer key (UI hides this)
- Q1: **A**, `&&` means and: true only when both sides are true.
- Q2: **A**, `||` means or: true when at least one side is true, so false only when both sides are false.
- Q3: **True**, `5 > 3` is True and `!` flips it, so `!(5 > 3)` is False.
- Q4: **A**, a range needs both bounds (`&&`) with inclusive edges (`>=` and `<=`). Using `||` (B) is true for almost every number.
- Q5: **A**, the group `(b || c)` is true, but `a` is false, and false `&&` anything is false.
- Q6: **False**, C# uses the symbols `&&` and `||`. The words `and` / `or` are not operators and cause a compile error.
- Q7: **`&&`**
