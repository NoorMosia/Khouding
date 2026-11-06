# Checkpoint quiz, 6.1 Defining and calling a method

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), what a call does
What does calling a method do?
- A) runs the method's body, then returns to where it was called from
- B) defines the method for later
- C) deletes the method
- D) nothing until the program ends

## Q2 (True/False)
Defining a method also runs it.
- True / False

## Q3 (MCQ), void
In `static void Greet()`, what does `void` mean?
- A) the method returns nothing
- B) the method takes no parameters
- C) the method is empty
- D) the method cannot be called

## Q4 (MCQ), static
Why is every method in this course marked `static`?
- A) so it can be called without creating an object, which is how this course is structured
- B) so it runs faster
- C) so it returns a value
- D) static is optional and means nothing here

## Q5 (MCQ), the call
How do you call a method named `PrintStar` that takes no parameters?
- A) `PrintStar();`
- B) `PrintStar;`
- C) `call PrintStar`
- D) `void PrintStar();`

## Q6 (True/False)
A method's body can call another method.
- True / False

## Q7 (Fill in the blank)
Fill the keyword that, as a return type, means a method returns no value:
`static ____ Greet() { ... }`

---

### Answer key (UI hides this)
- Q1: **A**, a call runs the body, then control returns to the caller.
- Q2: **False**, defining only describes the method; it runs only when called.
- Q3: **A**, `void` is the return type meaning no value is returned. (Empty parentheses mean no parameters.)
- Q4: **A**, `static` lets you call it without an object, which is how this course is structured.
- Q5: **A**, `PrintStar();`, the name plus parentheses (required even with no arguments).
- Q6: **True**, a method body can call other methods, like `Main` does.
- Q7: **`void`**
