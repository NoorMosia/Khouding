# Checkpoint quiz, 6.3 Return values

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what return does
What does a `return` statement do?
- A) hands a value back to the caller and ends the method immediately
- B) prints the value
- C) pauses the method and resumes later
- D) declares a new variable

## Q2 (MCQ), the obligation
A method is declared `static int Square(int n)`. What must its body do?
- A) return an `int` value on every path
- B) print an `int`
- C) return nothing, because it is static
- D) take exactly one argument and print it

## Q3 (MCQ), a call is an expression
What is the value of the expression `Square(4)` if `Square` returns `n * n`?
- A) 16, a call to a returning method is an expression standing for the returned value
- B) nothing, calls are not expressions
- C) 4
- D) it prints 16 but has no value

## Q4 (True/False)
A method that returns a value lets the caller decide what to do with it, while a method that prints does the output itself and returns nothing.
- True / False

## Q5 (MCQ), pick the return type
Which return type fits a method that answers a yes/no question, like whether a number is even?
- A) `bool`
- B) `int`
- C) `string`
- D) `void`

## Q6 (True/False)
A non-void method that can finish without hitting a return statement will not compile.
- True / False

## Q7 (Fill in the blank)
Fill the keyword that hands a value back from a method:
`____ n * n;`

---

### Answer key (UI hides this)
- Q1: **A**, `return` hands the value back and ends the method immediately.
- Q2: **A**, a non-void return type must return a value of that type on every path.
- Q3: **A**, a call to a returning method evaluates to the returned value, so `Square(4)` is `16`.
- Q4: **True**, returning hands the value back (reusable); printing does the output and returns `void`.
- Q5: **A**, a yes/no answer is a `bool`.
- Q6: **True**, every path of a non-void method must return a value.
- Q7: **`return`**
