# Exercises draft, 6.4 Scope

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A variable lives only where it is declared; a method's locals and parameters are private to it.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate (a reasoning skill, fewer but pointed problems).

## Scope (READ FIRST)
- **IN:** a local variable (declared inside a method) and a parameter exist only within that method, only
  while it runs; two methods may reuse the same local name without colliding; `Main`'s variables are not
  visible inside a helper (you must pass them in); **the by-value observable**, reassigning a parameter inside
  a method does not change the caller's variable (arguments are copied in). Using a name outside its method is
  a compile error (named).
- **OUT:** overloading (6.5); `ref`/`out` (out of chapter); `static` fields / globals / shared state (OOP
  course); arrays (Ch.7). Returns (6.3) and parameters (6.2) are assumed.

## Grading approach
- `stdout-match`, input via stdin. The observable outputs are what distinguishes correct scope reasoning
  (e.g. the caller's value prints unchanged after a method reassigns its parameter). `Main` drives the I/O.
  Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | a helper declares its own local and prints it; Main prints its own | locals are private | ● |
| p02 | two methods reuse the same local name, each printing its value | no name collision | ●● |
| p03 | Main passes a value in; the method uses only what it was given | pass values in | ●● |
| p04 | by-value demo: method reassigns its parameter; Main prints the unchanged original | by-value | ●● |
| p05 | a counter local inside a method resets each call (called twice) | locals reset per call | ●● |
| p06 | Main and a helper each have a variable named the same; both print distinctly | shadow-free reuse | ●● |
| p07 | a method computes with a local and returns it; the local is not visible after | local lifetime | ●● |
| p08 | pass two values in, method combines them, Main prints; Main's other vars untouched | isolation | ●● |
| p09 | fix a bug: a helper tries to use a Main variable it was never passed | debug: out of scope | ●●● |
| p10 | fix a bug: code uses a local after its method returned / outside the block | debug: lifetime | ●●● |

**Escalation:** p01-p03 locals are private and must be passed in; p04 the by-value observable; p05-p08 reset
per call, same-name reuse, local lifetime, isolation; p09-p10 the two scope bugs.

## Per-problem intent (bones)
- **p01** `Helper()` declares `int x = ...; print x;` `Main` has its own `int x` and prints it; two different
  values, no interference.
- **p02** `A()` and `B()` each declare `int n` with different values; `Main` calls both; each prints its own.
- **p03** `Main` reads a value and passes it to a method that uses only its parameter.
- **p04** `static void Tweak(int p) { p = p + 100; print p; }` and `Main` prints the original argument after
  the call -> unchanged (shows copies).
- **p05** a method with a local counter that starts fresh each call; called twice -> same output twice.
- **p06** `Main`'s `total` and a helper's `total` are independent; both printed.
- **p07** method builds a result in a local and returns it; `Main` uses the return (the local itself is gone).
- **p08** `Combine(a, b)` returns/prints a+b; `Main` has other variables the method cannot see.
- **p09** starter's helper references a variable that only exists in `Main` (CS0103); fix by adding a parameter
  and passing it. (Confirm the real message when authoring.)
- **p10** starter uses a variable outside the method/block where it was declared (CS0103); fix the structure.

## Notes
- **By-value is the key observable** (p04): reassigning a parameter does not change the caller. This is the
  one honest demonstration of pass-by-value the chapter makes; keep it crisp.
- **Out-of-scope use is a COMPILE error** (CS0103 "The name '...' does not exist in the current context");
  verify and quote when authoring p09/p10 and the cheatsheet.
- **No shared globals/fields** (OOP course); everything is passed in and returned out.
- `Main` drives the I/O. Country-neutral. Terse statements. Prompts on their own line.
