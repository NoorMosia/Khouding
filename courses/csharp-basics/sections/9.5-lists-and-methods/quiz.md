# Checkpoint quiz, 9.5 Lists and methods

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), element mutation
A method does `list[0] = list[0] + 1` on its `List<int>` parameter. What does the caller see?
- A) the increased value: the method changed the shared list
- B) the original value: the list was copied
- C) a compile error
- D) the default 0

## Q2 (True/False)
Passing a plain `int` to a method and changing the parameter also changes the caller's int.
- True / False

## Q3 (MCQ), reassigning the parameter
Inside a method, `list = new List<int>();` is run. What does the caller see?
- A) no change: reassigning the parameter does not affect the caller
- B) the caller's list becomes empty
- C) a compile error
- D) the caller's list gains a new element

## Q4 (MCQ), return type
What is the return type of a method that builds and returns a `List<int>`?
- A) `List<int>`
- B) `int`
- C) `void`
- D) `int[]`

## Q5 (MCQ), Add inside method
A method calls `list.Add(99)` on its `List<int>` parameter. After the call, what is `list.Count` in the caller?
- A) one more than before (the `Add` is visible)
- B) unchanged (`Add` does not reach the caller)
- C) 0 (the list is cleared)
- D) it throws

## Q6 (True/False)
A `List<T>` parameter behaves the same as an array parameter: element mutations are visible to the caller.
- True / False

## Q7 (Fill in the blank)
Fill the parameter type for a method that receives a `List<int>`:
`static int Sum(____ list)`

---

### Answer key (UI hides this)
- Q1: **A**, `List<T>` is a reference type; element mutations are visible.
- Q2: **False**, `int` is a value type and is copied.
- Q3: **A**, reassigning the parameter repoints only the method's copy.
- Q4: **A**, `List<int>` is the return type.
- Q5: **A**, `Add` mutates the shared list; Count increases.
- Q6: **True**, both arrays and lists are reference types.
- Q7: **`List<int>`**
