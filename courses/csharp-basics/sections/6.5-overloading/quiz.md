# Checkpoint quiz, 6.5 Overloading

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what overloading is
What is method overloading?
- A) several methods with the same name but different parameter lists
- B) one method that calls itself
- C) a method with no parameters
- D) renaming a method

## Q2 (MCQ), resolution
How does the compiler decide which overload a call runs?
- A) by matching the arguments to a version's parameter list
- B) by the return type
- C) it always runs the first one defined
- D) at random

## Q3 (MCQ), pick the overload
`Add(int, int)` and `Add(int, int, int)` both exist. Which runs for `Add(2, 3, 4)`?
- A) the three-parameter version
- B) the two-parameter version
- C) both
- D) neither, it is an error

## Q4 (MCQ), valid overloads
What makes two methods valid overloads?
- A) different parameter lists (different count or types)
- B) different return types with the same parameters
- C) different names
- D) different bodies

## Q5 (True/False)
Two methods with the same name and the same parameters but different return types are valid overloads.
- True / False

## Q6 (MCQ), no match
You call an overloaded method with a number of arguments that no version accepts. What happens?
- A) a compile error: no overload takes that many arguments
- B) the closest version runs
- C) it runs with missing values set to 0
- D) the first version runs

## Q7 (Fill in the blank)
Fill the word for giving several methods the same name with different parameter lists:
`method ____`

---

### Answer key (UI hides this)
- Q1: **A**, overloading is several methods with one name, distinguished by their parameter lists.
- Q2: **A**, the compiler matches the arguments to a version's parameters.
- Q3: **A**, three arguments match the three-parameter overload.
- Q4: **A**, overloads must differ in their parameter lists (count or types).
- Q5: **False**, overloads cannot differ by return type alone; the parameters must differ.
- Q6: **A**, if no overload matches the argument count, the call does not compile.
- Q7: **`overloading`**
