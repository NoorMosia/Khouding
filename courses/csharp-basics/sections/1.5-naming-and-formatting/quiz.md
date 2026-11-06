# Checkpoint quiz, 1.5 Naming and formatting

> Comprehension gate before the problems. Auto-graded. Need 4 of 6 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), legal names
Which of these is a legal variable name?
- A) `2count`
- B) `total price`
- C) `totalPrice`
- D) `class`

## Q2 (True/False)
You can name a variable `string` (a reserved keyword).
- True / False

## Q3 (MCQ), convention
By convention, what casing does a local variable use in C#?
- A) camelCase (e.g. `totalScore`)
- B) PascalCase (e.g. `TotalScore`)
- C) ALL_CAPS (e.g. `TOTAL_SCORE`)
- D) it does not matter at all

## Q4 (MCQ), a clear name
Which variable name is the clearest for the number of seats in a row?
- A) `s`
- B) `x2`
- C) `seatsPerRow`
- D) `number`

## Q5 (True/False)
Changing a program's indentation changes what it prints.
- True / False

## Q6 (Fill in the blank)
By convention, a `const` uses `______Case` (e.g. `DaysInWeek`).

---

### Answer key (UI hides this)
- Q1: **C**, `totalPrice` is legal; `2count` starts with a digit, `total price` has a space, `class` is a keyword.
- Q2: **False**, reserved keywords cannot be variable names.
- Q3: **A**, locals use camelCase (PascalCase is for constants and types).
- Q4: **C**, `seatsPerRow` says what the value is; a good name is self-documenting.
- Q5: **False**, the compiler ignores indentation; it is for the reader, the output is unchanged.
- Q6: **Pascal** (PascalCase), constants and types capitalise every word.
