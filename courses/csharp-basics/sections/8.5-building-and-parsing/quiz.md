# Checkpoint quiz, 8.5 Building and parsing character by character

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), foreach over a string
What does `foreach (char c in s)` give you on each iteration?
- A) the next character of s as a char
- B) the index of the next character
- C) a one-character string
- D) the remaining substring

## Q2 (MCQ), IsDigit
What does `char.IsDigit('7')` return?
- A) true
- B) false
- C) 7 (the numeric value)
- D) a compile error

## Q3 (True/False)
Forgetting to write `result = result + c;` (writing just `result + c;`) is a compile error.
- True / False

## Q4 (MCQ), counting pattern
You want to count vowels in s. Which is the correct pattern?
- A) `int count = 0; foreach (char c in s) { if ("aeiou".Contains(c)) count++; }`
- B) `int count = s.Length; foreach (char c in s) { if (!"aeiou".Contains(c)) count--; }`
- C) `s.Count('aeiou')`
- D) `foreach (char c in s) count = c;`

## Q5 (True/False)
For an empty string, a `foreach (char c in s)` loop runs zero times.
- True / False

## Q6 (MCQ), starting the build
To build a string of only the letters in s, you start with:
- A) `string result = "";`
- B) `string result = s;`
- C) `string result;` (unassigned)
- D) `char result = ' ';`

## Q7 (Fill in the blank)
Fill the helper that tests whether a char is a letter:
`char.____(c)`

---

### Answer key (UI hides this)
- Q1: **A**, `foreach` over a string gives each character as a `char`.
- Q2: **A**, `char.IsDigit` returns `true` for `'0'..'9'`.
- Q3: **True**, `result + c;` is a standalone expression statement, which CS0201 rejects. The fix is `result = result + c;`.
- Q4: **A**, start at 0, add 1 for each character that passes the test.
- Q5: **True**, empty string = no characters = loop body never runs.
- Q6: **A**, start with `""` and concatenate chosen characters.
- Q7: **`IsLetter`**
