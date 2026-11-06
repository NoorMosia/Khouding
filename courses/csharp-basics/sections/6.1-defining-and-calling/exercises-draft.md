# Exercises draft, 6.1 Defining and calling a method

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Define your own named block and run it by calling its name.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate (first methods, no params or returns yet).

## Scope (READ FIRST)
- **IN:** `static void Name() { ... }` defined in the `Program` class next to `Main`; calling with `Name();`;
  the anatomy explained, `static` (callable without an object, all this course needs), `void` (returns
  nothing), name, `()`, `{ }` body; calling runs the body and control returns; a method can be called many
  times (reuse) and can call another method. **This section finally explains `static void`** (deferred from
  1.1), lightly and honestly.
- **OUT:** parameters (6.2); return values (6.3); scope subtleties (6.4); overloading (6.5); recursion (out of
  chapter); objects/instances/fields (OOP course). No arrays.

## Grading approach
- `stdout-match`, input via stdin. The method prints; `Main` calls it (sometimes in a loop over a read count).
  **Oracle unchanged:** the program is still an I/O program. Vary inputs (e.g. the call count) across cases so
  a fixed-output answer fails. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | define a void method that prints a fixed line; call it once | define + call | ● |
| p02 | call the same method three times (reuse) | reuse | ● |
| p03 | Main reads a count n, calls the method n times | loop + call | ●● |
| p04 | define TWO void methods, call them in a given order | multiple methods | ●● |
| p05 | a method that prints a 2-line banner, called twice | multi-line body | ●● |
| p06 | one method calls another method | method calling method | ●● |
| p07 | Main reads n, prints a header, then calls the method n times | compose with I/O | ●● |
| p08 | define a method and call it from inside a loop with a counter line | call in a loop body | ●● |
| p09 | fix a bug: method defined but never called (no output) | debug: call it | ●● |
| p10 | fix a bug: missing () on the call, or missing static | debug: call syntax | ●● |

**Escalation:** p01-p02 define/call/reuse; p03 call in a loop; p04-p06 multiple methods and method-calls-method;
p07-p08 compose with `Main`'s I/O and loops; p09-p10 the two classic beginner bugs.

## Per-problem intent (bones)
- **p01** `static void Greet() { Console.WriteLine("hello"); }` called once from `Main`.
- **p02** call `Greet()` three times; output is the line three times.
- **p03** `Main` reads n, a loop calls the method n times; n = 0 -> no calls (zero-iteration case).
- **p04** two methods (e.g. `PrintTop`, `PrintBottom`); `Main` calls them in order.
- **p05** a method whose body is two `WriteLine`s; called twice -> four lines.
- **p06** `static void Outer()` calls `Inner()`; `Main` calls `Outer()`.
- **p07** `Main` prints a header line, reads n, calls the method n times.
- **p08** method prints a fixed line; `Main` loops i=1..n printing i then calling the method.
- **p09** starter defines the method but `Main` never calls it (empty output); fix by calling it.
- **p10** starter calls `Greet` without `()` (or the method lacks `static`); fix to a valid call/definition.
  (Confirm the exact compiler error at authoring time and quote the real message in the design + cheatsheet.)

## Notes
- **`Main` drives the I/O; the method prints.** Keep methods `static`, defined in `Program` next to `Main`.
- Vary the call count across cases (incl. a zero-call case where a read count drives the calls).
- **Explain `static void` here** (the 1.1 deferral), one honest sentence each, no OOP lecture.
- Country-neutral. Terse statements. Prompts on their own line (when input is read).
