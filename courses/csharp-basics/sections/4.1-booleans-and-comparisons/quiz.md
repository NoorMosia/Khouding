# Checkpoint quiz, 4.1 Booleans and comparisons

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), printing a bool
What does `Console.WriteLine(5 > 3)` print?
- A) `True`
- B) `true`
- C) `1`
- D) `5 > 3`

## Q2 (MCQ), the operators
Which operator means "not equal"?
- A) `!=`
- B) `=!`
- C) `<>`
- D) `==`

## Q3 (MCQ), the result type
What type does a comparison like `a >= b` produce?
- A) `bool`
- B) `int`
- C) `string`
- D) it depends on `a` and `b`

## Q4 (MCQ), the boundary
What does `18 >= 18` give?
- A) `True`
- B) `False`
- C) `0`
- D) it does not compile

## Q5 (True/False)
`==` and `=` do the same thing.
- True / False

## Q6 (MCQ), compare vs assign
You want to check if `x` equals 10. Which is correct?
- A) `x == 10`
- B) `x = 10`
- C) `x => 10`
- D) `x := 10`

## Q7 (Fill in the blank)
Fill the operator that checks whether `a` is greater than or equal to `b`:
`a ___ b`

---

### Answer key (UI hides this)
- Q1: **A**, a comparison is a `bool`, printed as `True`/`False` with a capital.
- Q2: **A**, `!=` is not-equal; `==` is equal.
- Q3: **A**, every comparison evaluates to a `bool`.
- Q4: **A**, `>=` includes the boundary, so equal gives `True` (`18 > 18` would be `False`).
- Q5: **False**, `==` compares, `=` assigns. Different operators.
- Q6: **A**, `x == 10` compares; `x = 10` would assign.
- Q7: **`>=`**
