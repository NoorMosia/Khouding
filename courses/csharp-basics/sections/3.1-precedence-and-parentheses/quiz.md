# Checkpoint quiz, 3.1 Precedence and parentheses

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), precedence
What is the value of `2 + 3 * 4`?
- A) `14`
- B) `20`
- C) `24`
- D) `9`

## Q2 (MCQ), parentheses
What is the value of `(2 + 3) * 4`?
- A) `20`
- B) `14`
- C) `24`
- D) `9`

## Q3 (True/False)
`*` and `/` are applied before `+` and `-`.
- True / False

## Q4 (MCQ), left to right
What is the value of `10 - 4 + 3`?
- A) `9`
- B) `3`
- C) `11`
- D) `-9`

## Q5 (MCQ), forcing the order
How do you force the addition in `a + b * c` to happen before the multiplication?
- A) put parentheses around it: `(a + b) * c`
- B) you cannot change the order
- C) write the `+` on its own line
- D) swap it to `b * c + a`

## Q6 (True/False)
A program with the operators in the wrong order (missing parentheses) will fail to compile.
- True / False

## Q7 (Fill in the blank)
Fill the blank so the result is `20`, not `14` (use `2` and `3` with `+`):
`____ * 4`

---

### Answer key (UI hides this)
- Q1: **A**, `*` binds tighter than `+`, so `3 * 4` is done first (`12`), then `2 + 12 = 14`.
- Q2: **A**, parentheses first: `2 + 3 = 5`, then `5 * 4 = 20`.
- Q3: **True**, `*`, `/`, `%` have higher precedence than `+` and `-`.
- Q4: **A**, `+` and `-` are equal precedence, so left to right: `(10 - 4) + 3 = 9`, not `10 - (4 + 3)`.
- Q5: **A**, parentheses override the default order; what is inside is evaluated first.
- Q6: **False**, a precedence mistake compiles and runs; it just computes the wrong value. No error message, so you check the order yourself.
- Q7: **`(2 + 3)`**
