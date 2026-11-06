# Checkpoint quiz, 2.4 Joining strings with +

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what + does
On strings, what does the `+` operator do?
- A) joins them end to end into one string
- B) adds their lengths
- C) compares them
- D) nothing, `+` does not work on strings

## Q2 (MCQ), the missing space
With `string a = "Hello";` and `string b = "there";`, what does `Console.WriteLine(a + b)` print?
- A) `Hellothere`
- B) `Hello there`
- C) `Hello + there`
- D) `a + b`

## Q3 (True/False)
`+` can only be used to print; it cannot build a string you store in a variable.
- True / False

## Q4 (MCQ), a number in the join
With `int age = 36;`, what does `Console.WriteLine("Age: " + age)` print?
- A) `Age: 36`
- B) it does not compile
- C) `Age: age`
- D) `Age36`

## Q5 (True/False)
For producing output, `"Hello, " + name` and `$"Hello, {name}"` print the same thing.
- True / False

## Q6 (MCQ), build and print
What does this print for `first` `"Ada"` and `last` `"Lovelace"`?
```csharp
string fullName = first + " " + last;
Console.WriteLine(fullName);
```
- A) `Ada Lovelace`
- B) `AdaLovelace`
- C) `first last`
- D) `fullName`

## Q7 (Fill in the blank)
Fill the blank (same operator both times) to join a space between `a` and `b`:
`Console.WriteLine(a __ " " __ b);`

---

### Answer key (UI hides this)
- Q1: **A**, on strings `+` concatenates, joining the pieces end to end into one string.
- Q2: **A**, with nothing between them you get `Hellothere`. For a space, join one in: `a + " " + b`.
- Q3: **False**, a key use of `+` is building a stored string, like `string fullName = first + " " + last;`.
- Q4: **A**, joining a number onto a string turns it into text, so it prints `Age: 36`.
- Q5: **True**, for output they are interchangeable. The extra thing `+` can do is build a stored string.
- Q6: **A**, the three pieces are joined into `fullName`, which prints `Ada Lovelace`.
- Q7: **`+`**
