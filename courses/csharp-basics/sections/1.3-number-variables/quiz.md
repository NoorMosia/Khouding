# Checkpoint quiz, 1.3 Number variables

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), choosing a type
Which type best fits the price of a coffee?
- A) `int`
- B) `double`
- C) either works equally well
- D) neither can hold a price

## Q2 (MCQ), choosing a type
Which type best fits the number of students in a class?
- A) `int`
- B) `double`
- C) a text type
- D) either, it does not matter

## Q3 (True/False)
In `int x = 5;` the `=` tests whether `x` equals `5`.
- True / False

## Q4 (MCQ), what it does
After these two lines, what does `score` hold?
```csharp
int score = 10;
score = 25;
```
- A) 10
- B) 25
- C) 35
- D) an error: you cannot change a variable

## Q5 (True/False)
A `const` can be reassigned a new value later in the program.
- True / False

## Q6 (Fill in the blank)
To create a whole-number variable called `count` starting at `0`, write:
`______ count = 0;`

## Q7 (MCQ), what a type really is
Why might `0.1 + 0.2` print as `0.30000000000000004`?
- A) it is a bug in C#
- B) `double` is approximate: it trades exactness for a huge range
- C) you must use `int` for addition
- D) the numbers are too large

---

### Answer key (UI hides this)
- Q1: **B**, a price can be fractional, so `double`.
- Q2: **A**, a count is always whole, so `int`.
- Q3: **False**, `=` stores a value ("x gets 5"), it does not test equality.
- Q4: **B**, reassignment overwrites; the 10 is gone.
- Q5: **False**, a `const` is fixed once set; reassigning it does not compile.
- Q6: **`int`**
- Q7: **B**, `double` trades exactness for range, so most decimals are stored a hair off. Normal, not a bug.
