# Checkpoint quiz, 7.1 Declaring and accessing arrays

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), first index
What is the index of the first element of an array?
- A) 0
- B) 1
- C) -1
- D) it depends on the length

## Q2 (MCQ), last index
For an array `a` of length 5, what is the index of the last element?
- A) `a.Length - 1`, which is 4
- B) `a.Length`, which is 5
- C) 5
- D) there is no way to know

## Q3 (MCQ), default value
After `int[] a = new int[3];`, what is the value of `a[0]`?
- A) 0, the default for int
- B) null
- C) undefined garbage
- D) a compile error to read it

## Q4 (True/False)
The literal `int[] b = { 10, 20, 30 };` creates an array of length 3.
- True / False

## Q5 (MCQ), Length
What does `a.Length` give you?
- A) the number of slots in the array
- B) the largest value stored
- C) the last index
- D) the sum of the elements

## Q6 (True/False)
Reading `a[a.Length]` on an array is caught by the compiler before the program runs.
- True / False

## Q7 (Fill in the blank)
Fill the expression that builds an int array with n slots:
`int[] a = ____;`

---

### Answer key (UI hides this)
- Q1: **A**, arrays are zero-based; the first element is at index 0.
- Q2: **A**, valid indexes are 0 .. Length-1, so the last is `a.Length - 1` (4 for length 5).
- Q3: **A**, `new int[n]` fills every slot with the type default, 0 for int.
- Q4: **True**, the `{ }` form counts the values, so length is 3.
- Q5: **A**, Length is the slot count, fixed when the array is built.
- Q6: **False**, out-of-range access compiles and crashes at runtime with IndexOutOfRangeException.
- Q7: **`new int[n]`**
