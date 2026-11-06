# Exercises draft, 6.2 Parameters

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Pass values into a method so it can work on different inputs.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** parameters in the `()` of a method; an argument fills a parameter when you call; multiple parameters
  are comma-separated and matched **by position**; the body uses parameters like ordinary variables; a call
  with the wrong number or type of arguments is a compile error (named). Arguments are copied in (by value,
  stated lightly; the observable is drilled in 6.4).
- **OUT:** return values (6.3); scope/by-value drills (6.4); overloading (6.5); `ref`/`out` (out of chapter);
  arrays as parameters (Ch.7). Methods here are still `void` and print; `Main` supplies the arguments.

## Grading approach
- `stdout-match`, input via stdin. **Methods are called with multiple, varied arguments across cases** (often
  read by `Main` from stdin), so a method that hardcodes one answer fails. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | method prints its single int argument | one parameter | ● |
| p02 | method prints its int argument squared | use the parameter | ● |
| p03 | print a string argument (greet by name) | string parameter | ●● |
| p04 | print a string argument n times (string + int params) | two parameters | ●● |
| p05 | method prints the sum of two int parameters | two numeric params | ●● |
| p06 | Main reads the arguments, passes them in | read-then-pass | ●● |
| p07 | call the same method several times with different arguments | reuse with varied args | ●● |
| p08 | method with three parameters (e.g. print a formatted line) | three params | ●● |
| p09 | a parameter used in a loop inside the method (print 1..n) | param drives a loop | ●● |
| p10 | method prints whether its argument is even (condition inside) | param + decision | ●● |
| p11 | fix a bug: arguments passed in the wrong order | debug: positional match | ●● |
| p12 | model a scenario: Main reads fields, a method prints them formatted | integrative capstone | ●●● |

**Escalation:** p01-p02 one parameter; p03-p05 string + multi params; p06-p08 read-and-pass, reuse, three
params; p09-p10 a parameter driving a loop / a decision; p11 the positional-order bug; p12 capstone.

## Per-problem intent (bones)
- **p01** `static void Show(int x)` prints `x`; `Main` calls with a read value.
- **p02** `Show(int x)` prints `x * x`.
- **p03** `Greet(string name)` prints a greeting using the name.
- **p04** `Repeat(string text, int n)` prints `text` on n lines (loop inside).
- **p05** `PrintSum(int a, int b)` prints `a + b`.
- **p06** `Main` reads two numbers and passes them to a method.
- **p07** one method, called 3 times with different read arguments.
- **p08** `PrintLine(string label, int value, ...)` three params, a formatted line.
- **p09** `CountTo(int n)` prints 1..n with a loop; n from input.
- **p10** `ReportParity(int n)` prints `even`/`odd`.
- **p11** starter calls a 2-param method with the arguments swapped so output is wrong; fix the order.
  (Pick a method where order is observable, e.g. subtraction or a labelled pair.)
- **p12** capstone: read several fields, pass to a printer method that formats them.

## Notes
- **Positional matching:** arguments fill parameters left to right; make p11's bug observable (order matters).
- **Wrong count/type of arguments is a COMPILE error** (name it; confirm the real message when authoring the
  design if a fix problem uses it).
- `Main` reads input and supplies arguments; the method prints. Methods stay `void` here (returns are 6.3).
- Country-neutral. Terse statements. Prompts on their own line.
