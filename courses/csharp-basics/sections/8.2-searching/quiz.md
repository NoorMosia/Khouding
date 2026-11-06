# Checkpoint quiz, 8.2 Searching inside a string

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), Contains
What does `s.Contains("ab")` return?
- A) a bool: whether "ab" occurs in s
- B) the index of "ab"
- C) the number of times "ab" occurs
- D) a new string

## Q2 (MCQ), not found
What does `s.IndexOf(part)` return when `part` is not in `s`?
- A) -1
- B) 0
- C) `s.Length`
- D) it throws

## Q3 (MCQ), first occurrence
For `s = "hello world"`, what is `s.IndexOf("o")`?
- A) 4, the first occurrence
- B) 7, the second occurrence
- C) both 4 and 7
- D) -1

## Q4 (MCQ), suffix check
Which checks whether a filename ends with ".txt"?
- A) `file.EndsWith(".txt")`
- B) `file.StartsWith(".txt")`
- C) `file.Contains(".txt")` only
- D) `file.IndexOf(".txt") == 0`

## Q5 (True/False)
For `s = "Hello"`, `s.Contains("hello")` is true.
- True / False

## Q6 (True/False)
Using an `IndexOf` result of -1 as an index into the string is safe.
- True / False

## Q7 (Fill in the blank)
Fill the value `IndexOf` returns when the target is absent:
`s.IndexOf(x) == ____`

---

### Answer key (UI hides this)
- Q1: **A**, Contains is a yes/no bool; IndexOf gives the position.
- Q2: **A**, -1 for not found (same sentinel as 7.3).
- Q3: **A**, IndexOf returns the first occurrence (index 4).
- Q4: **A**, EndsWith tests the suffix; Contains would also match ".txt" mid-string.
- Q5: **False**, search is case-sensitive; `H` does not match `h`.
- Q6: **False**, -1 is not a valid index; using it throws. Check for -1 first.
- Q7: **`-1`**
