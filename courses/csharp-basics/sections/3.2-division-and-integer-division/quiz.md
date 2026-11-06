# Checkpoint quiz, 3.2 Division and the integer-division gotcha

> Comprehension gate before the problems. Auto-graded. Need 5 of 8 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), integer division
What does `7 / 2` print when both are whole numbers?
- A) `3`
- B) `3.5`
- C) `4`
- D) `3.0`

## Q2 (MCQ), double division
What does `7.0 / 2` print?
- A) `3.5`
- B) `3`
- C) `4`
- D) it does not compile

## Q3 (True/False)
Integer division rounds to the nearest whole number.
- True / False

## Q4 (MCQ), forcing a decimal
`a` and `b` are both `int`. How do you print their quotient as a decimal?
- A) `(double)a / b`
- B) `a / b`, then it is decimal automatically
- C) `double result = a / b;`
- D) `a / (b)`

## Q5 (True/False)
`double result = a / b;` with both `a` and `b` as `int` gives a decimal result.
- True / False

## Q6 (MCQ), negatives
What does `-7 / 2` print (integer division)?
- A) `-3`
- B) `-4`
- C) `-3.5`
- D) `3`

## Q7 (MCQ), divide by zero
What happens when you compute `5 / 0` with whole numbers?
- A) it throws a `DivideByZeroException` at run time
- B) it prints `0`
- C) it prints infinity
- D) it does not compile

## Q8 (Fill in the blank)
Fill the blank so `int` `a`, `b` print a decimal quotient:
`Console.WriteLine(______a / b);`

---

### Answer key (UI hides this)
- Q1: **A**, both operands are `int`, so integer division discards the `.5`, giving `3`.
- Q2: **A**, one operand is a `double` (`7.0`), so the decimal is kept: `3.5`.
- Q3: **False**, it truncates (cuts the fraction), it does not round. `5 / 3` is `1`, not `2`.
- Q4: **A**, convert an operand before dividing: `(double)a / b`. Option C converts too late.
- Q5: **False**, `a / b` truncates in whole numbers first, then the `3` is widened. Convert before: `(double)a / b`.
- Q6: **A**, integer division truncates toward zero, so `-7 / 2` is `-3`, not `-4`.
- Q7: **A**, dividing a whole number by zero throws a `DivideByZeroException` at run time.
- Q8: **`(double)`**
