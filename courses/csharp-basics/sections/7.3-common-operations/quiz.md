# Checkpoint quiz, 7.3 Common array operations

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), seeding max
Why seed `max` with `a[0]` instead of `0` before the loop?
- A) if every element is negative, a seed of 0 would wrongly win
- B) 0 is slower to compare
- C) `a[0]` is always the largest
- D) it makes no difference

## Q2 (MCQ), average
To get a true average, which expression is correct?
- A) `(double)sum / a.Length`
- B) `sum / a.Length`
- C) `(double)(sum / a.Length)`
- D) `sum / (double)0`

## Q3 (True/False)
Summing an empty array (length 0) is well defined and gives 0.
- True / False

## Q4 (MCQ), search index
A search for a target returns the 0-based index of the first match, or -1 if absent. For `a = {10, 20, 30}`
and target 30, what is returned?
- A) 2
- B) 3
- C) 30
- D) -1

## Q5 (MCQ), the sentinel
A search returns -1. What does that mean?
- A) the target is not in the array
- B) the target is at the last index
- C) the array is empty
- D) an error occurred

## Q6 (True/False)
When finding the maximum, the loop can start at index 1 because index 0 is already the seed.
- True / False

## Q7 (Fill in the blank)
Fill the start value that means "not found yet" for an index-of search:
`int found = ____;`

---

### Answer key (UI hides this)
- Q1: **A**, a 0 seed breaks for all-negative input; `a[0]` is a real element so the result is always a real value.
- Q2: **A**, cast before dividing; the other forms do integer division first and lose the fraction.
- Q3: **True**, the loop runs zero times so the sum stays 0; max/min/average need `n >= 1`.
- Q4: **A**, 30 is at index 2 (0-based); -1 is reserved for not-found.
- Q5: **A**, -1 is the sentinel for "not found" (not a valid index).
- Q6: **True**, `max = a[0]` seeds from the first element, so the loop starts at index 1.
- Q7: **`-1`**
