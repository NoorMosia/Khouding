# Checkpoint quiz, 1.4 Text variables

> Comprehension gate before the problems. Auto-graded. Need 4 of 6 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), choosing a type
Which type best fits storing a person's full name?
- A) `char`
- B) `string`
- C) `bool`
- D) `int`

## Q2 (MCQ), choosing a type
Which type best fits storing a single letter grade like A?
- A) `char`
- B) `string`
- C) either works, it does not matter
- D) `bool`

## Q3 (True/False)
`'A'` and `"A"` are the same thing in C#.
- True / False

## Q4 (MCQ), the quoting bug
What is wrong with this line?
```csharp
char c = "x";
```
- A) nothing, it is fine
- B) double quotes make a string, but a char needs single quotes: `'x'`
- C) a char cannot hold a letter
- D) you must write `Char` with a capital C

## Q5 (True/False)
A `bool` variable can hold any of several values.
- True / False

## Q6 (Fill in the blank)
To store the word `hello`, the type you declare is:
`______ word = "hello";`

---

### Answer key (UI hides this)
- Q1: **B**, a name is many characters, so `string`.
- Q2: **A**, one character is a `char` (a `string` could hold it too, but `char` is the exact fit).
- Q3: **False**, `'A'` is a `char`, `"A"` is a `string`; different types.
- Q4: **B**, `"x"` is a `string`; a `char` uses single quotes: `char c = 'x';`.
- Q5: **False**, a `bool` holds exactly one of two values: `true` or `false`.
- Q6: **`string`**, a word is a sequence of characters.
