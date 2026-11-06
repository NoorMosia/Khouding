# Checkpoint quiz, 7.4 Arrays and methods

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), element mutation
A method does `a[0] = a[0] + 1` on its `int[]` parameter. After the call, what does the caller's array show at
index 0?
- A) the increased value: the method changed the shared array
- B) the original value: the array was copied
- C) 0, the default
- D) a compile error

## Q2 (True/False)
Passing a plain `int` to a method and changing the parameter also changes the caller's int.
- True / False

## Q3 (MCQ), reassigning the parameter
Inside a method, `a = new int[] { 9, 9 };` is run on the `int[]` parameter `a`. What does the caller see?
- A) no change: reassigning the parameter does not affect the caller
- B) the caller's array becomes `{ 9, 9 }`
- C) a compile error
- D) the caller's array becomes empty

## Q4 (MCQ), return type
What is the return type of a method that builds and returns an int array?
- A) `int[]`
- B) `int`
- C) `void`
- D) `array`

## Q5 (MCQ), change the caller's array
You want a method to double every element so the CALLER'S array changes. Which works?
- A) a `void` method that does `a[i] = a[i] * 2` in a `for` loop
- B) a `void` method that does `a = new int[...]` with doubled values
- C) a `foreach` that assigns `x = x * 2`
- D) it is impossible to change the caller's array

## Q6 (True/False)
A method can take both an array and a plain int as parameters, e.g. `CountOver(int[] a, int threshold)`.
- True / False

## Q7 (Fill in the blank)
Fill the parameter type for a method that receives an int array:
`static int Sum(____ a) { ... }`

---

### Answer key (UI hides this)
- Q1: **A**, an array is shared by reference, so an element change is visible to the caller.
- Q2: **False**, an `int` is copied; the method changes its own copy only (the contrast with arrays).
- Q3: **A**, the parameter is a copy of the reference; reassigning it repoints only the method's copy.
- Q4: **A**, `int[]` is the return type for a method returning an int array.
- Q5: **A**, writing elements through the shared reference reaches the caller; reassigning or `foreach` does not.
- Q6: **True**, parameters can mix types; the array is shared, the int copied.
- Q7: **`int[]`**
