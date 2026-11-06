# Checkpoint quiz, 2.2 Converting input to numbers

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), the return type
`Console.ReadLine()` hands you a line of input. What type is it?
- A) `string`, always
- B) `int`, if the line looks like a whole number
- C) `double`, if the line has a decimal point
- D) whatever number the line holds

## Q2 (True/False)
You can multiply the result of `Console.ReadLine()` by 2 directly, without converting it first.
- True / False

## Q3 (MCQ), parse to a whole number
Which call turns the line `25` into the whole number 25?
- A) `int.Parse(Console.ReadLine())`
- B) `double.Parse(Console.ReadLine())`
- C) `Console.ReadLine().ToInt()`
- D) `(int)Console.ReadLine()`

## Q4 (MCQ), which parse for a price
You need to read a price like `4.99`. Which one do you use?
- A) `double.Parse`
- B) `int.Parse`
- C) either one works
- D) neither, prices cannot be parsed

## Q5 (MCQ), bad input
What happens when `int.Parse` is given the text `hello`?
- A) it throws a `FormatException` while the program runs
- B) it returns `0`
- C) the program refuses to compile
- D) it returns an empty string

## Q6 (True/False)
A compile error and a runtime error are the same thing.
- True / False

## Q7 (Fill in the blank)
Fill the blank to read a whole number into `n`:
`int n = ____.Parse(Console.ReadLine());`

---

### Answer key (UI hides this)
- Q1: **A**, `ReadLine` always returns a `string`. If you want a number, you convert it yourself.
- Q2: **False**, text cannot be multiplied; `Console.ReadLine() * 2` does not compile (CS0019). Parse first.
- Q3: **A**, `int.Parse` turns the text into a whole number. `double.Parse` would read it as a decimal value.
- Q4: **A**, a price has a decimal part, so parse to a `double`. `int.Parse` would reject `4.99`.
- Q5: **A**, non-numeric text throws a `FormatException` at run time. The problems here only feed valid input, so solutions never hit this.
- Q6: **False**, a compile error stops the build so the program never runs; a runtime error happens while the program is already running.
- Q7: **`int`**
