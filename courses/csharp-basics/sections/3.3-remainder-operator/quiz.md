# Checkpoint quiz, 3.3 The remainder operator %

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), remainder
What does `7 % 3` give?
- A) `1`
- B) `2`
- C) `3`
- D) `0`

## Q2 (MCQ), even or odd
What does `n % 2` tell you?
- A) `0` if `n` is even, `1` if `n` is odd
- B) half of `n`
- C) whether `n` is positive
- D) the last digit of `n`

## Q3 (MCQ), last digit
What does `342 % 10` give?
- A) `2`
- B) `34`
- C) `342`
- D) `0`

## Q4 (MCQ), negatives
What does `-7 % 3` give?
- A) `-1`
- B) `1`
- C) `2`
- D) `-2`

## Q5 (True/False)
`5 % 100` gives `0` because 5 is smaller than 100.
- True / False

## Q6 (MCQ), leftover
You have `total` items and group them in sizes of `groupSize`. Which gives the number LEFT OVER?
- A) `total % groupSize`
- B) `total / groupSize`
- C) `total - groupSize`
- D) `groupSize % total`

## Q7 (Fill in the blank)
Fill the operator that gives the last digit of `n`:
`n __ 10`

---

### Answer key (UI hides this)
- Q1: **A**, 3 goes into 7 twice with `1` left over.
- Q2: **A**, dividing by 2 leaves `0` for even, `1` for odd.
- Q3: **A**, `% 10` leaves the last digit, `2`.
- Q4: **A**, the result's sign follows the dividend, so `-7 % 3` is `-1`.
- Q5: **False**, when the number is smaller than the divisor the whole number is the remainder, so `5 % 100` is `5`.
- Q6: **A**, `/` gives the number of full groups, `%` gives the leftover.
- Q7: **`%`**
