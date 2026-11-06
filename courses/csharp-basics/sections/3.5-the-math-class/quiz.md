# Checkpoint quiz, 3.5 The Math class

> Comprehension gate before the problems. Auto-graded. Need 5 of 8 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), square root
What does `Math.Sqrt(16)` return?
- A) `4`
- B) `8`
- C) `16`
- D) `256`

## Q2 (MCQ), power
What does `Math.Pow(2, 3)` return?
- A) `8`
- B) `6`
- C) `9`
- D) `23`

## Q3 (MCQ), larger of two
Which call gives the larger of two numbers `a` and `b`?
- A) `Math.Max(a, b)`
- B) `Math.Min(a, b)`
- C) `Math.Abs(a, b)`
- D) `Math.Larger(a, b)`

## Q4 (MCQ), return type
What type do most `Math` functions like `Math.Sqrt` return?
- A) `double`
- B) `int`
- C) `string`
- D) it depends on the input

## Q5 (True/False)
`using System;` adds the Math functions to your program; without it they would not exist.
- True / False

## Q6 (MCQ), the full name
With `using System;` at the top, `Math.Sqrt(9)` is short for which full name?
- A) `System.Math.Sqrt(9)`
- B) `Console.Math.Sqrt(9)`
- C) `Sqrt.Math.System(9)`
- D) `Math.System.Sqrt(9)`

## Q7 (True/False)
If a function you need is on the cheatsheet but was not walked through in the reading, you are expected to read the reference and use it.
- True / False

## Q8 (Fill in the blank)
Fill the class name used to call a square root:
`____.Sqrt(25)`

---

### Answer key (UI hides this)
- Q1: **A**, `Math.Sqrt` returns the square root; of `16` that is `4`.
- Q2: **A**, `Math.Pow(2, 3)` is `2` to the power of `3`, which is `8`.
- Q3: **A**, `Math.Max` returns the larger of the two arguments.
- Q4: **A**, most `Math` functions return a `double`, even when the value is whole.
- Q5: **False**, `Math` always exists in `System`; `using System;` only shortens the name, it does not add the function.
- Q6: **A**, `Math` lives in `System`, so the full name is `System.Math.Sqrt`.
- Q7: **True**, reading the library and using a function you were not shown is the skill this section builds.
- Q8: **`Math`**
