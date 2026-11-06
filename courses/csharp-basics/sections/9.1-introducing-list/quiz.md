# Checkpoint quiz, 9.1 Introducing List\<T\>

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), create
How do you create an empty list of integers?
- A) `new List<int>()`
- B) `new int[]()`
- C) `new List(int)`
- D) `List.Create<int>()`

## Q2 (MCQ), Count
After `list.Add(10); list.Add(20); list.Add(30);`, what is `list.Count`?
- A) 3
- B) 30
- C) 0
- D) 2 (the last index)

## Q3 (MCQ), last element
For a list with 4 elements, which expression gives the last element?
- A) `list[list.Count - 1]`
- B) `list[list.Count]`
- C) `list.Last`
- D) `list[4]`

## Q4 (True/False)
You can use `List<int>` without any `using` directive as long as you type the full name.
- True / False

## Q5 (MCQ), Add
What does `list.Add(x)` do?
- A) appends x to the end of the list
- B) inserts x at index 0
- C) replaces the last element with x
- D) adds x to every element

## Q6 (True/False)
Reading `list[list.Count]` on a non-empty list is caught by the compiler.
- True / False

## Q7 (Fill in the blank)
Fill the using directive needed to use `List<T>`:
`using System.Collections.____;`

---

### Answer key (UI hides this)
- Q1: **A**, `new List<int>()` creates an empty growable list.
- Q2: **A**, Count equals the number of elements; three Adds give 3.
- Q3: **A**, last index is `Count - 1`; `list[Count]` throws at runtime.
- Q4: **False**, without the `using` you get CS0246.
- Q5: **A**, `Add` appends to the end.
- Q6: **False**, it compiles and throws `ArgumentOutOfRangeException` at runtime.
- Q7: **`Generic`**
