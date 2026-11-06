# Checkpoint quiz, 9.3 Modifying a list

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), Remove absent
What does `list.Remove(x)` return when `x` is not in the list?
- A) `false`; the list is unchanged
- B) `true`; it removes nothing
- C) it throws an exception
- D) -1

## Q2 (MCQ), index shift after RemoveAt
After `list.RemoveAt(0)` on a list `{10, 20, 30}`, what is `list[0]`?
- A) 20 (the former index 1 shifted down)
- B) 10 (unchanged)
- C) 0 (default)
- D) it throws

## Q3 (True/False)
After `list.Clear()`, the variable `list` is null.
- True / False

## Q4 (MCQ), Insert shift
After `list.Insert(1, 99)` on a list `{10, 20, 30}`, what is `list[2]`?
- A) 20 (the former index 1 shifted up)
- B) 30
- C) 99
- D) 10

## Q5 (MCQ), backward loop
Why is a backward loop safer than a forward loop when removing elements?
- A) removing at index i only shifts elements above i, which have already been visited
- B) backward loops are faster
- C) the list must be sorted for backward removal
- D) there is no difference; both work correctly

## Q6 (MCQ), Remove first only
For a list `{5, 5, 5}`, after `list.Remove(5)`, what is `list.Count`?
- A) 2 (only the first 5 is removed)
- B) 0 (all 5s are removed)
- C) 3 (nothing removed)
- D) it depends on position

## Q7 (Fill in the blank)
Fill the method that removes all elements and sets Count to 0:
`list.____()`

---

### Answer key (UI hides this)
- Q1: **A**, `Remove` returns `false` when absent and leaves the list unchanged.
- Q2: **A**, `RemoveAt(0)` shifts the former index 1 down; `list[0]` becomes 20.
- Q3: **False**, `Clear` leaves the list object intact with `Count = 0`.
- Q4: **A**, `Insert(1, 99)` shifts 20 to index 2; list becomes `{10, 99, 20, 30}`.
- Q5: **A**, backward removal only shifts elements already visited; forward removal produces a stale index.
- Q6: **A**, `Remove` removes only the first occurrence.
- Q7: **`Clear`**
