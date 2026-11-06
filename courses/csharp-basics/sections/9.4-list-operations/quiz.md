# Checkpoint quiz, 9.4 List operations

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), IndexOf not found
What does `list.IndexOf(x)` return when `x` is not in the list?
- A) -1
- B) `list.Count`
- C) 0
- D) it throws

## Q2 (MCQ), seeding max
Why seed `max` with `list[0]` instead of 0?
- A) if every element is negative, a seed of 0 would wrongly win
- B) `list[0]` is always the maximum
- C) 0 is too small to compare
- D) it makes no difference

## Q3 (MCQ), average
Which expression gives the average of a list as a double?
- A) `(double)sum / list.Count`
- B) `sum / list.Count`
- C) `(double)(sum / list.Count)`
- D) `sum / (double)list.Count`

## Q4 (True/False)
Summing an empty list (Count = 0) is well defined and gives 0.
- True / False

## Q5 (MCQ), Contains
What does `list.Contains(x)` return?
- A) a bool: true if x is anywhere in the list
- B) the index of x
- C) the count of x's occurrences
- D) a new list without x

## Q6 (True/False)
When iterating to find the max, the loop should start at index 1 (because index 0 is the seed).
- True / False

## Q7 (Fill in the blank)
Fill the start value for a not-found search:
`int found = ____;`

---

### Answer key (UI hides this)
- Q1: **A**, -1 is the not-found sentinel.
- Q2: **A**, a 0 seed breaks for all-negative input.
- Q3: **A**, cast before dividing; B and C do integer division first.
- Q4: **True**, the loop runs zero times so sum stays 0.
- Q5: **A**, Contains is a yes/no bool.
- Q6: **True**, index 0 is already the seed.
- Q7: **`-1`**
