# Checkpoint quiz, 7.2 Iterating over an array

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), the index walk
Which loop header visits every valid index of array `a` exactly once?
- A) `for (int i = 0; i < a.Length; i++)`
- B) `for (int i = 0; i <= a.Length; i++)`
- C) `for (int i = 1; i < a.Length; i++)`
- D) `for (int i = 0; i < a.Length - 1; i++)`

## Q2 (True/False)
A `foreach` loop lets you change the array's elements by assigning to the loop variable.
- True / False

## Q3 (MCQ), positions
You need each element's position (1, 2, 3, ...) as you print it. Which walk fits?
- A) the indexed `for`, printing `i + 1`
- B) `foreach`, since it tracks position automatically
- C) neither can know the position
- D) `foreach`, printing `x + 1`

## Q4 (MCQ), filter shape
What does this print for `a = { -1, 2, -3, 4 }`?
`foreach (int x in a) if (x > 0) Console.WriteLine(x);`
- A) 2 then 4
- B) -1, 2, -3, 4
- C) -1 then -3
- D) nothing

## Q5 (True/False)
If an array has length 0, `for (int i = 0; i < a.Length; i++)` runs its body zero times.
- True / False

## Q6 (MCQ), writing elements
To double every element IN the array (not just print doubled copies), which do you use?
- A) an indexed `for`, with `a[i] = a[i] * 2`
- B) `foreach (int x in a) x = x * 2;`
- C) `foreach (int x in a) a = a * 2;`
- D) you cannot change array elements

## Q7 (Fill in the blank)
Fill the comparison so the loop stops at the last valid index:
`for (int i = 0; i ____ a.Length; i++)`

---

### Answer key (UI hides this)
- Q1: **A**, start at 0, stop before Length; `<=` crashes, starting at 1 or stopping early skips an element.
- Q2: **False**, `foreach` is read-only; assigning the loop variable is a compile error.
- Q3: **A**, `foreach` gives values not positions; use the indexed `for` and derive position from `i`.
- Q4: **A**, the `if` guards the print, so only 2 and 4 print (the filter shape).
- Q5: **True**, `0 < 0` is false, so the body never runs.
- Q6: **A**, writing elements needs `a[i] = a[i] * 2`; `foreach` will not compile for this.
- Q7: **`<`**, `i < a.Length` stops at the last valid index; `<=` goes one too far.
