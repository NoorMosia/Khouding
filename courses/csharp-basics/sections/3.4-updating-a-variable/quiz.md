# Checkpoint quiz, 3.4 Updating a variable

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), increment
After `int count = 5; count++;`, what is `count`?
- A) `6`
- B) `5`
- C) `7`
- D) `4`

## Q2 (MCQ), shorthand
What is `total += 7` shorthand for?
- A) `total = total + 7`
- B) `total = 7`
- C) `total + 7` (without storing it)
- D) `total = 7 + 7`

## Q3 (True/False)
`x += y` and `x = x + y` produce the same result.
- True / False

## Q4 (MCQ), divide-equals
After `int z = 17; z /= 5;` (both whole numbers), what is `z`?
- A) `3`
- B) `3.4`
- C) `4`
- D) `2`

## Q5 (MCQ), multiply-equals
What does `rate *= 2` do to `rate`?
- A) doubles it (`rate = rate * 2`)
- B) adds 2 to it
- C) sets it to 2
- D) it does not compile

## Q6 (True/False)
On its own line, `x++` and `++x` have the same effect on `x`.
- True / False

## Q7 (Fill in the blank)
Fill the compound operator that adds `amount` to `total`:
`total ___ amount;`

---

### Answer key (UI hides this)
- Q1: **A**, `count++` adds one (same as `count = count + 1`), so `count` is `6`.
- Q2: **A**, compound assignment updates from the variable's own value: `total = total + 7`.
- Q3: **True**, the compound form is shorthand for the long form.
- Q4: **A**, `/=` uses whole-number division, which truncates: `17 / 5` is `3`.
- Q5: **A**, `*=` multiplies the variable by the value: `rate = rate * 2`.
- Q6: **True**, as a standalone statement both add one; the prefix/postfix difference only shows inside a larger expression.
- Q7: **`+=`**
