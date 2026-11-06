# Checkpoint quiz, 8.4 Splitting and joining

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), Split return type
What does `"one two three".Split(' ')` return?
- A) a `string[]` of three elements
- B) an `int` (the word count)
- C) a string with spaces removed
- D) the first word

## Q2 (MCQ), length
For `parts = "hello world".Split(' ')`, what is `parts.Length`?
- A) 2
- B) 11 (the string length)
- C) 1
- D) 5

## Q3 (MCQ), argument order
What is the correct argument order for `string.Join`?
- A) separator first, then the array: `string.Join(sep, arr)`
- B) array first, then the separator: `string.Join(arr, sep)`
- C) the array only; separator is always a comma
- D) it does not matter

## Q4 (MCQ), Join result
What does `string.Join("-", new string[]{"a","b","c"})` produce?
- A) `"a-b-c"`
- B) `"-a-b-c-"`
- C) `"abc"`
- D) three separate lines

## Q5 (True/False)
Splitting `"hello"` (no spaces) on `' '` gives a `string[]` of length 0.
- True / False

## Q6 (True/False)
You can loop over the result of `Split` with a `foreach` loop, just like any other `string[]`.
- True / False

## Q7 (Fill in the blank)
Fill the method that splits s on a comma:
`s.____(',')`

---

### Answer key (UI hides this)
- Q1: **A**, `Split` returns a `string[]`; all Ch.7 array operations apply.
- Q2: **A**, one space splits into two pieces.
- Q3: **A**, separator first: `string.Join(sep, arr)`.
- Q4: **A**, separator goes between elements only, not around them.
- Q5: **False**, no separator gives a one-element array of the whole string (length 1).
- Q6: **True**, `Split` returns a plain `string[]`; `foreach` works exactly as in Ch.7.
- Q7: **`Split`**
