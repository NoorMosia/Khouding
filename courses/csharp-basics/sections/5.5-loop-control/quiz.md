# Checkpoint quiz, 5.5 Loop control: break and continue

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what break does
What does `break` do?
- A) ends the loop immediately; remaining passes do not happen
- B) skips the rest of the current pass but keeps looping
- C) restarts the loop from the beginning
- D) pauses the loop for one pass

## Q2 (MCQ), what continue does
What does `continue` do?
- A) skips the rest of the current pass and goes to the next one
- B) ends the loop immediately
- C) skips every remaining pass
- D) repeats the current pass

## Q3 (MCQ), pick the statement (filter)
Summing only positive numbers in a list, skipping the rest, calls for which statement?
- A) `continue`, to skip the non-positive values and keep going
- B) `break`, to stop at the first non-positive value
- C) neither works for this
- D) both do exactly the same thing here

## Q4 (MCQ), pick the statement (search)
Stopping a search as soon as you find the first match calls for which statement?
- A) `break`, to leave the loop once the match is found
- B) `continue`, to skip the match
- C) neither
- D) a second loop

## Q5 (True/False)
A `while (true)` loop must contain a reachable `break` (or another exit), or it runs forever.
- True / False

## Q6 (MCQ), continue in a for
In a `for` loop, after a `continue` runs, what happens next?
- A) the update runs, then the condition is checked for the next pass
- B) the loop ends
- C) the update is skipped and the condition is never checked again
- D) the body runs again from the top without the update

## Q7 (Fill in the blank)
Fill the statement that stops a loop early:
`if (found) { ____; }`

---

### Answer key (UI hides this)
- Q1: **A**, `break` leaves the loop entirely; the rest of the body and all remaining passes are skipped.
- Q2: **A**, `continue` skips the rest of the current body and moves to the next pass; the loop continues.
- Q3: **A**, you want to ignore some values but process the rest, so `continue` skips the non-qualifying ones.
- Q4: **A**, once the match is found there is no need to keep looping, so `break` exits.
- Q5: **True**, `true` never ends the loop, so a reachable `break` is the only way out.
- Q6: **A**, `continue` skips the rest of the body, but the `for` update still runs and the condition is re-checked.
- Q7: **`break`**
