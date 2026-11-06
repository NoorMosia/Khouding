# Checkpoint quiz, 6.4 Scope

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), where a local lives
Where can a variable declared inside a method be used?
- A) only inside that method, while it runs
- B) anywhere in the program
- C) inside any method in the same class
- D) only inside Main

## Q2 (True/False)
Two different methods can each have a local variable named `count` without conflicting.
- True / False

## Q3 (MCQ), getting a value from Main
A helper method needs a value that `Main` has. How does it get it?
- A) `Main` passes the value in as an argument
- B) the helper reads `Main`'s variable directly
- C) it cannot be done
- D) the variable becomes global automatically

## Q4 (MCQ), by value
A method does `p = p + 100;` on its `int` parameter `p`. After the call, what is the caller's original variable?
- A) unchanged, because the argument was copied into `p`
- B) increased by 100
- C) set to 0
- D) deleted

## Q5 (True/False)
A local variable keeps its value from one call of the method to the next.
- True / False

## Q6 (MCQ), out of scope
What happens if a helper uses the name of a variable that only exists in `Main`?
- A) a compile error: the name does not exist in the helper's context
- B) it reads `Main`'s value
- C) it reads 0
- D) it creates the variable automatically

## Q7 (Fill in the blank)
Fill the word for a variable declared inside a method, private to that method (singular):
`a ____ variable`

---

### Answer key (UI hides this)
- Q1: **A**, a local is private to its method and exists only while that method runs.
- Q2: **True**, the same name in different methods refers to separate variables.
- Q3: **A**, a helper cannot see `Main`'s variables; pass the value in as an argument.
- Q4: **A**, arguments are copied, so the method changed its own `p`, not the caller's variable.
- Q5: **False**, locals are created fresh each call; nothing carries over.
- Q6: **A**, the name is out of scope in the helper, so it does not compile.
- Q7: **`local`**
