# Checkpoint quiz, 9.2 Iterating a list

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), the index walk
Which loop header visits every valid index of a list exactly once?
- A) `for (int i = 0; i < list.Count; i++)`
- B) `for (int i = 0; i <= list.Count; i++)`
- C) `for (int i = 1; i < list.Count; i++)`
- D) `for (int i = 0; i < list.Count - 1; i++)`

## Q2 (True/False)
A `foreach` loop on a list lets you change elements by assigning to the loop variable.
- True / False

## Q3 (MCQ), empty list
If a list has 0 elements, how many times does `foreach (int x in list)` run its body?
- A) 0
- B) 1
- C) it throws
- D) it runs once with x = 0 (the default)

## Q4 (MCQ), filter shape
To print only the positive elements of a list, which loop shape fits?
- A) `foreach` with an `if` guard: `if (x > 0) Console.WriteLine(x)`
- B) `for` with an `if` guard and also set `list[i] = 0` for negatives
- C) a `while` loop over `list.Count`
- D) `foreach` does not support filtering

## Q5 (MCQ), difference from array
What is the key difference between iterating a list and iterating an array?
- A) `list.Count` replaces `a.Length`; everything else is the same
- B) lists cannot be iterated with `foreach`
- C) lists use 1-based indexes
- D) you must use an iterator object for lists

## Q6 (True/False)
Using `i <= list.Count` as the loop condition is a compile error.
- True / False

## Q7 (Fill in the blank)
Fill the comparison to stop the loop at the last valid index:
`for (int i = 0; i ____ list.Count; i++)`

---

### Answer key (UI hides this)
- Q1: **A**, start at 0, stop before Count; `<=` crashes, starting at 1 or stopping early misses elements.
- Q2: **False**, `foreach` is read-only; assignment to the loop variable does not change the list.
- Q3: **A**, 0; an empty list has no elements.
- Q4: **A**, the filter shape: `foreach` with an `if` guard.
- Q5: **A**, only `list.Count` vs `a.Length` changes.
- Q6: **False**, it compiles and crashes at runtime.
- Q7: **`<`**
