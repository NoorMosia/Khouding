# Checkpoint quiz, 6.2 Parameters

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what a parameter is
What is a parameter?
- A) a variable in the method's parentheses that receives a value when the method is called
- B) the value you type at the call site
- C) the method's return type
- D) another name for the method

## Q2 (MCQ), what 5 is
In the call `PrintSquare(5)`, what is `5` called?
- A) an argument
- B) a parameter
- C) a return value
- D) a variable declaration

## Q3 (MCQ), positional matching
`Repeat(string text, int times)` is called as `Repeat("hi", 3)`. What goes into `times`?
- A) `3`, because arguments fill parameters by position (left to right)
- B) `"hi"`
- C) nothing, `times` stays 0
- D) both `3` and `"hi"`

## Q4 (True/False)
A method can have more than one parameter.
- True / False

## Q5 (MCQ), wrong count
A method `PrintSum(int a, int b)` is called with one argument: `PrintSum(5)`. What happens?
- A) a compile error: the call must supply an argument for every parameter
- B) it runs with `b` equal to 0
- C) it runs and ignores `b`
- D) it prints 5

## Q6 (True/False)
The argument is copied into the parameter when the call begins, and the method works with that value.
- True / False

## Q7 (Fill in the blank)
Fill the word for the VALUE supplied at a call that fills a parameter (singular):
`the ____ fills the parameter`

---

### Answer key (UI hides this)
- Q1: **A**, a parameter is the variable in the method's parentheses that receives a value per call.
- Q2: **A**, `5` is the argument, the value supplied at the call.
- Q3: **A**, arguments match by position, so `text` gets `"hi"` and `times` gets `3`.
- Q4: **True**, parameters are comma-separated and filled by position.
- Q5: **A**, too few arguments is a compile error; every parameter needs one.
- Q6: **True**, arguments are passed by value, a copy fills the parameter.
- Q7: **`argument`**
