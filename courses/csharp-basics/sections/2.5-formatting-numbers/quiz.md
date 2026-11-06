# Checkpoint quiz, 2.5 Formatting numbers for output

> Comprehension gate before the problems. Auto-graded. Need 5 of 8 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what F2 does
What does `$"{price:F2}"` do when `price` is 7.5?
- A) shows it as `7.50` (two decimal places)
- B) shows it as `7.5`
- C) shows it as `8`
- D) it does not compile

## Q2 (MCQ), a whole value
What does `$"{value:F2}"` print when `value` is 10?
- A) `10.00`
- B) `10`
- C) `10.0`
- D) `1000`

## Q3 (True/False)
Formatting with `:F2` changes the value stored in the variable.
- True / False

## Q4 (MCQ), rounding
What does `$"{value:F2}"` print when `value` is 2.345?
- A) `2.35` (rounded for display)
- B) `2.345`
- C) `2.34`
- D) `2.00`

## Q5 (True/False)
A `double` can store any decimal value exactly.
- True / False

## Q6 (MCQ), choosing a type
For everyday numbers, prices, and measurements, which type should you reach for by default?
- A) `double`
- B) `float`
- C) `int`
- D) it does not matter

## Q7 (MCQ), why format money
Why format money with `:F2` instead of printing the raw double?
- A) a raw double can show too few or too many digits, like `7.5` or `19.950001`, which is wrong for money
- B) a raw double will not compile
- C) money cannot be stored in a double at all
- D) there is no difference

## Q8 (Fill in the blank)
Fill the blank to print `price` to two decimal places:
`Console.WriteLine($"{price:____}");`

---

### Answer key (UI hides this)
- Q1: **A**, `F2` means fixed, two decimal places, so `7.5` pads to `7.50`.
- Q2: **A**, `F2` always shows two decimals, so a whole value prints as `10.00`.
- Q3: **False**, formatting changes only the display; the stored value is unchanged.
- Q4: **A**, `F2` rounds the display to `2.35`; the stored value keeps its full precision.
- Q5: **False**, floating-point values live in fixed space, so some are stored as the closest approximation (for example `0.1 + 0.2` prints as `0.30000000000000004` raw).
- Q6: **A**, `double` is the standard choice; `float` is smaller and less precise. Use `double` unless you have a specific reason not to.
- Q7: **A**, money needs exactly two decimals, so you format the raw double into a clean two-decimal shape.
- Q8: **`F2`**
