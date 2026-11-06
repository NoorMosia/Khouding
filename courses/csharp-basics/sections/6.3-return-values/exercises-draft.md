# Exercises draft, 6.3 Return values

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A method can compute a value and hand it back to the caller.

## Size & completion
- **14 problems**, lights at **8** (~60%). Full section (the core method skill).

## Scope (READ FIRST)
- **IN:** a non-`void` return type (`int`, `double`, `string`, `bool`) and a `return value;` statement that
  hands the value back and ends the method; calling a returning method as an expression
  (`int r = Square(5);`); **the return-vs-print beat**, a returning method hands the value to the caller
  (usually `Main` prints it), a printing method does the output itself and is `void`; course standard is
  **return, let `Main` print** (reusable). A non-void method that does not return on every path is a compile
  error (named).
- **OUT:** scope/by-value drills (6.4); overloading (6.5); `ref`/`out` and multiple return values (out of
  chapter); arrays (Ch.7). Parameters (6.2) are assumed.

## Grading approach
- `stdout-match`, input via stdin. `Main` reads inputs, calls the returning method, and prints the returned
  value. **Varied arguments across cases** so a hardcoded return fails. Oracle CLI generates expecteds (verify
  any `double` outputs under invariant culture).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | int Square(int n) returns n*n; Main prints it | return an int | ● |
| p02 | int Cube(int n) returns n*n*n | return + arithmetic | ● |
| p03 | int Larger(int a, int b) returns the bigger | return with a decision | ●● |
| p04 | bool IsEven(int n) returns n % 2 == 0; Main prints True/False | return a bool | ●● |
| p05 | double AverageOfTwo(int a, int b) returns the average | return a double | ●● |
| p06 | string Label(int score) returns "pass"/"fail" | return a string | ●● |
| p07 | int SumTo(int n) returns 1+..+n (loop inside, returns the total) | loop then return | ●● |
| p08 | Main reads inputs, calls, prints the returned value | compose with I/O | ●● |
| p09 | use a returned value in a further expression (e.g. Square(a)+Square(b)) | return as an expression | ●● |
| p10 | a method returns early on a condition (guard then return) | early return | ●● |
| p11 | return-vs-print: convert a printing method to a returning one | the beat | ●● |
| p12 | one method's return feeds another method's argument | compose returns | ●●● |
| p13 | fix a bug: a non-void method missing a return on some path | debug: missing return | ●● |
| p14 | model a scenario: a returning compute Main reads for and prints | integrative capstone | ●●● |

**Escalation:** p01-p02 return an int; p03-p06 return across types (bool/double/string, with a decision);
p07 loop-then-return; p08-p09 compose with I/O and use the return in an expression; p10 early return;
p11 the return-vs-print conversion; p12 feed a return into another call; p13 the missing-return bug; p14 capstone.

## Per-problem intent (bones)
- **p01** `static int Square(int n) { return n * n; }`; `Main` reads n, prints `Square(n)`.
- **p02** `Cube` returns `n*n*n`.
- **p03** `Larger(a,b)` returns the bigger (if/else or ternary-free if); Main prints it.
- **p04** `IsEven` returns a bool; Main prints it (prints True/False).
- **p05** `AverageOfTwo` returns a `double` (force double division); verify F-free exact output via CLI.
- **p06** `Label(score)` returns "pass" if >= 50 else "fail".
- **p07** `SumTo(n)` loops to build a total, returns it; n = 0 -> 0.
- **p08** `Main` reads the argument(s), calls, prints the result.
- **p09** `Square(a) + Square(b)` printed; shows a return is just a value.
- **p10** a method returns a stated value early when a guard holds, else computes.
- **p11** given a `void` method that prints, rewrite it to return the value and have `Main` print it (same
  output).
- **p12** `Main` prints `Larger(Square(a), Square(b))` or similar (one return feeds another call).
- **p13** starter's non-void method lacks a return on one branch (CS0161); add the return. (Confirm the real
  message at authoring and quote it.)
- **p14** capstone: a worded compute returned and printed.

## Notes
- **Return, let `Main` print** is the course standard; p11 teaches the contrast explicitly.
- **Missing return on a path is a COMPILE error** (CS0161 "not all code paths return a value"); verify and
  quote when authoring p13 and the cheatsheet.
- **Verify every `double` expected via the CLI** under invariant culture.
- `Main` drives the I/O; the method returns. Country-neutral. Terse statements. Prompts on their own line.
