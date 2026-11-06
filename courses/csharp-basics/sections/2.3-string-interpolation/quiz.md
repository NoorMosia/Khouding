# Checkpoint quiz, 2.3 String interpolation

> Comprehension gate before the problems. Auto-graded. Need 5 of 8 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), the prefix
What marks a string as interpolated?
- A) a `$` in front of the opening quote
- B) a `+` between the text and the value
- C) curly braces anywhere in the string
- D) nothing, every string is interpolated

## Q2 (MCQ), filling a hole
Given `string name = "Ada";`, what does `Console.WriteLine($"Hello, {name}")` print?
- A) `Hello, Ada`
- B) `Hello, {name}`
- C) `Hello, {Ada}`
- D) it does not compile

## Q3 (True/False)
An interpolated string can contain more than one hole.
- True / False

## Q4 (MCQ), an expression in a hole
What does `Console.WriteLine($"{n} doubled is {n * 2}")` print when `n` is 5?
- A) `5 doubled is 10`
- B) `n doubled is n * 2`
- C) `5 doubled is 5 * 2`
- D) `10 doubled is 10`

## Q5 (True/False)
Forgetting the `$` (writing `"Hello, {name}"`) causes a compile error.
- True / False

## Q6 (MCQ), the one-line payoff
Which single line prints a label and a value like `Total: 30` (with `total` holding 30)?
- A) `Console.WriteLine($"Total: {total}");`
- B) `Console.WriteLine("Total: {total}");`
- C) `Console.WriteLine($"Total: total");`
- D) `Console.WriteLine("Total: " total);`

## Q7 (Fill in the blank)
Fill the blank so this prints `Hello, Ada` when `name` is `"Ada"`:
`Console.WriteLine(__"Hello, {name}");`

## Q8 (MCQ), the older `{0}` style
This is the older composite-formatting style. What does it print when `name` is `"Ada"` and `age` is `36`?
```csharp
Console.WriteLine("{0} is {1}", name, age);
```
- A) `Ada is 36`
- B) `{0} is {1}`
- C) `name is age`
- D) `0 is 1`

---

### Answer key (UI hides this)
- Q1: **A**, the `$` prefix makes a string interpolated. Without it, the braces are ordinary text.
- Q2: **A**, `{name}` is replaced by the value of `name`, so it prints `Hello, Ada`.
- Q3: **True**, you can place as many holes as you need; each is filled with its own value.
- Q4: **A**, a hole can hold an expression; `{n * 2}` is computed first (10), giving `5 doubled is 10`.
- Q5: **False**, it compiles and runs with no error; it just prints the braces literally. That is a silent wrong-output bug, and the fix is the `$`.
- Q6: **A**, the `$` makes it interpolated and `{total}` fills in the value. This is the one-line form of Chapter 1's two-print label/value.
- Q7: **`$`**
- Q8: **A**, in composite formatting `{0}` is the first argument (`name`) and `{1}` the second (`age`), so it prints `Ada is 36`, the same as `$"{name} is {age}"`. The older style you will meet in existing code and slides; this course uses interpolation.
