# Checkpoint quiz, 8.3 Transforming a string

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (True/False)
After `s.ToUpper();`, the variable `s` holds the upper-cased text.
- True / False

## Q2 (MCQ), Trim
What does `s.Trim()` do?
- A) returns a new string with leading and trailing whitespace removed
- B) removes all spaces from the string
- C) trims s to a maximum length
- D) removes the first and last character

## Q3 (MCQ), Substring with length
What does `"hello".Substring(1, 3)` return?
- A) `"ell"` (3 chars from index 1)
- B) `"ello"` (from index 1 to end)
- C) `"hel"` (first 3 chars)
- D) `"lo"` (last 2 chars)

## Q4 (MCQ), Substring one-arg
What does `"hello".Substring(2)` return?
- A) `"llo"` (from index 2 to the end)
- B) `"he"` (first 2 chars)
- C) `"ell"` (3 chars)
- D) nothing

## Q5 (MCQ), using the return value
Which correctly upper-cases `s` and stores the result?
- A) `s = s.ToUpper();`
- B) `s.ToUpper();`
- C) `ToUpper(s);`
- D) `s.upper = true;`

## Q6 (True/False)
`"hello".Replace("l", "r")` replaces only the first occurrence of `'l'`.
- True / False

## Q7 (Fill in the blank)
Fill the method that removes leading and trailing whitespace:
`s.____()`

---

### Answer key (UI hides this)
- Q1: **False**, `ToUpper` returns a new string; `s` is unchanged.
- Q2: **A**, `Trim` removes leading and trailing whitespace, not internal spaces.
- Q3: **A**, `Substring(1, 3)` is 3 chars starting at index 1: `"ell"`.
- Q4: **A**, `Substring(2)` goes from index 2 to the end: `"llo"`.
- Q5: **A**, assign back: `s = s.ToUpper();`.
- Q6: **False**, `Replace` replaces every occurrence.
- Q7: **`Trim`**
