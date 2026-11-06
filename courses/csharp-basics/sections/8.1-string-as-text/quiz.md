# Checkpoint quiz, 8.1 A string is text you can measure and index

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), Length
What does `s.Length` give for `s = "hello"`?
- A) 5, the number of characters
- B) 4, the last index
- C) the first character
- D) the whole string

## Q2 (MCQ), first index
What is the index of the first character of a string?
- A) 0
- B) 1
- C) -1
- D) it depends on the length

## Q3 (MCQ), last character
For `s = "hello"`, which expression gives the last character?
- A) `s[s.Length - 1]`
- B) `s[s.Length]`
- C) `s[5]`
- D) `s.Last`

## Q4 (MCQ), the type of s[0]
What type is `s[0]`?
- A) `char`, a single character
- B) `string`, a one-letter string
- C) `int`
- D) `bool`

## Q5 (True/False)
`s[0] = 'H';` changes the first character of the string.
- True / False

## Q6 (True/False)
Reading `s[s.Length]` is caught by the compiler before the program runs.
- True / False

## Q7 (Fill in the blank)
Fill the expression for the number of characters in a string s:
`s.____`

---

### Answer key (UI hides this)
- Q1: **A**, Length is the character count; the last index is Length - 1.
- Q2: **A**, strings are zero-based, first character is `s[0]`.
- Q3: **A**, the last index is `Length - 1`; `s[s.Length]` throws at runtime.
- Q4: **A**, indexing yields a `char` (single quotes), not a one-letter string.
- Q5: **False**, strings are immutable; `s[i] = c` is a compile error (CS0200).
- Q6: **False**, it compiles and throws `IndexOutOfRangeException` at runtime.
- Q7: **`Length`**
