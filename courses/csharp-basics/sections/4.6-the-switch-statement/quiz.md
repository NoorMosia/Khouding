# Checkpoint quiz, 4.6 The switch statement

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), the catch-all
In a switch, which case runs for a value that matches no case label?
- A) `default`
- B) the first case
- C) the last case
- D) none, the program crashes

## Q2 (MCQ), what break does
What is `break;` for inside a switch?
- A) it ends the case so the next case does not run
- B) it restarts the switch from the top
- C) it skips the default
- D) it is optional decoration

## Q3 (True/False)
In C#, leaving out the `break` on a non-empty case is a compile error.
- True / False

## Q4 (MCQ), no match
A switch on an `int` value runs with input 5 against cases 1, 2, 3 and a `default`. What prints?
- A) the `default` case output
- B) the `case 1` output
- C) nothing
- D) a compile error

## Q5 (True/False)
A switch can match against string constants, for example `case "N":`.
- True / False

## Q6 (MCQ), switch or else if
When is a switch a better fit than an `else if` chain?
- A) when testing one value against several exact constant options
- B) when the conditions are ranges like `score >= 90`
- C) whenever there is more than one condition
- D) never, switch and else if are identical in all cases

## Q7 (Fill in the blank)
Fill the keyword for the catch-all case that runs when nothing else matched:
`____ :`

---

### Answer key (UI hides this)
- Q1: **A**, `default` is the catch-all; it runs when no case label matched.
- Q2: **A**, `break` ends the current case and leaves the switch, so it does not run on into the next case.
- Q3: **True**, C# forbids silent fall-through between non-empty cases; the compiler reports CS0163, so each case needs a `break`.
- Q4: **A**, 5 matches none of 1, 2, 3, so control falls to `default`.
- Q5: **True**, a switch works on strings too; the labels are string constants and the match is case-sensitive.
- Q6: **A**, a `case` matches an exact constant, so switch fits one value against constants. Ranges stay with `else if`.
- Q7: **`default`**
