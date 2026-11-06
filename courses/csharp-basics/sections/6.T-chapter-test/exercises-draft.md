# Exercises draft, 6.T Chapter 6 Test (region boss)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real pool folders.
> Test shape is the same as 1.T / 2.T / 3.T / 4.T / 5.T: `test.yaml` + `pool/` + `cheatsheets/` + `README.md`.

---

## What this boss is
The Chapter 6 region boss. Integrative: combines 6.1-6.5 (and Chapters 1-5) into realistic method scenarios.
No new material. Passing it lights the Chapter 6 region on the map.

## Skills it integrates (6.1-6.5 + Ch.1-5)
- 6.1 defining & calling a `static void` method
- 6.2 parameters (values in, matched by position)
- 6.3 return values (a result out; return-vs-print)
- 6.4 scope (locals/parameters private; by-value)
- 6.5 overloading (same name, different parameter lists)
- Ch.1-5: types, input, parse, arithmetic (`+ - * / %`), decisions, and loops, now used inside method bodies
  and in `Main`

## Scope boundary
- **Input IS used** (stdin, prompts on their own line, prompt text graded), like 2.T-5.T. **`Main` drives the
  I/O and calls student-defined `static` methods; the methods compute (and sometimes print).**
- Full method toolkit from this chapter, plus everything before. **No objects/instances/fields** (OOP course)
  and **no arrays** (Ch.7). All methods are `static` helpers in the `Program` class.
- Methods may use arithmetic, decisions, and loops in their bodies; `Main` reads inputs, calls, and prints.

## Size (decided)
- **Pool = 20. Draw 10. Light at 6.** ~24h window, fresh draw on retry, no lockouts.
- **Method anti-hardcoding (the Ch.6 rule, carried into the boss):** each pool problem calls its method with
  **varied arguments across cases** (read by `Main` from stdin), so a method that hardcodes one answer fails.
  Combined with the pool being bigger than the draw, a memorised answer does not survive. Branch/loop-bearing
  method bodies also follow the earlier chapters' edge rules (both sides of a condition, zero-iteration where
  a loop can run zero times). The oracle is unchanged (stdout per stdin).

## The pool (20), by family

| Family | Variants | What it integrates |
|--------|----------|--------------------|
| A, define & call | 3 | a `static void` method called by `Main` (incl. called n times) (6.1) |
| B, parameters | 4 | values passed in, used in the body (6.2) |
| C, return values | 5 | a result returned, `Main` prints it (6.3) |
| D, scope | 3 | locals/parameters private; the by-value observable (6.4) |
| E, overloading | 3 | same name, different parameter lists (6.5) |
| F, fix the broken program | 2 | a planted method bug |

*(3 + 4 + 5 + 3 + 3 + 2 = 20. Draw of 10 pulls a mix across families + difficulties.)*

## Per-family intent (bones)
- **A, define & call:** a `void` helper that prints, called once or a read number of times by `Main`; a
  method that calls another method. Variants change what is printed and how many calls. Integrates 6.1.
- **B, parameters:** a method that does something with its argument(s) (print squared, repeat a string n
  times, sum two); `Main` reads and passes. Variants change the parameter list and the body. Integrates 6.2.
- **C, return values:** a returning compute (`Square`, larger-of-two, `IsEven`, average, a label) that `Main`
  prints; one that loops internally then returns (sum 1..n). Variants change the return type and the compute.
  Integrates 6.3. Verify any `double` outputs via the CLI.
- **D, scope:** a helper with its own local; the by-value demo (method reassigns its parameter, `Main` prints
  the unchanged original); two methods reusing a local name. Variants change the values. Integrates 6.4.
- **E, overloading:** overloaded `Add`/`Max` (two vs three args) or `Describe(int)` vs `Describe(string)`;
  `Main` calls the overloads. Variants change which overload each call resolves to. Integrates 6.5.
- **F, fix the broken program:** a method program with a planted bug. Variants (pick 2 across attempts): a
  method defined but never called (no output); a non-void method missing a `return` on a path (CS0161); a
  call with arguments in the wrong order (silent wrong); a call matching no overload (CS1501/CS1503); a
  helper using a `Main` variable it was never passed (CS0103, out of scope). Proves reading & repairing method
  code.

## Notes
- **`Main` drives the I/O; methods are `static` helpers.** Vary the arguments across cases (Ch.6
  anti-hardcoding). Keep branch/loop edge coverage inside method bodies.
- **Oracle unchanged:** a method program is deterministic per stdin, so `gen`/`check` work as before. Verify
  `double`/formatted outputs under invariant culture.
- **Compile-error fix variants must quote the REAL message** (verify against the compiler at authoring):
  CS0161 (not all paths return), CS1501/CS1503 (no matching overload / argument mismatch), CS0103 (name not in
  scope). The committed solution for every fix problem compiles and runs.
- Prompts on their own line; prompt text is graded output.
- Country-neutral drill content (a chapter test MAY carry light flavor, not used here by default).
- `cheatsheets/` gathers 6.1-6.5 (+ Ch.1-5 as a library).
