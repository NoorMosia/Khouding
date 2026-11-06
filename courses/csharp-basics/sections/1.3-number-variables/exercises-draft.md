# Exercises draft, 1.3 Number variables (`int` and `double`)

> **What this file is (the standard per-section skeleton-pass artifact).**
> Rough design of the problem family, written BEFORE the real `problem.yaml` folders are finalized
> (the "gray map → add color" skeleton pass, AUTHORING-GUIDE §4). Not parsed; superseded by the real
> `problems/pNN-*/` folders once authored. (Template: 1.1's `exercises-draft.md`.)
>
> **This REPLACES the old placeholder family.** The currently-committed p01/p05/p12 folders were the
> format experiment; p12 (`seconds-breakdown`) in particular uses `/` and `%`, which are now **Ch.2**
> scope, it does not survive the re-author. See "Scope reconciliation" below.

---

## Section one-idea
Declare, initialize, and reassign numeric variables, **choose `int` vs `double`**, seal values with
`const`, and **combine variables with basic arithmetic (`+ - *`)**. The chapter's **deep** group.

## Size & completion
- **15 problems**, lights at **9** (~60%). A full drill section, numbers is the deepest Ch.1 group and
  carries the most sub-skills, so it earns the ceiling.

## Scope reconciliation (READ FIRST, what's in vs out)
Per the banked Ch.1 scope decisions:
- **IN:** declare / init / reassign; choose `int` vs `double`; `const`; combining variables with **`+`, `-`, `*`**.
- **OUT (deferred to Ch.2, do NOT use in 1.3):** division `/`, modulus `%`, operator precedence, the
  integer-division gotcha *as a drilled skill*. (The gotcha is only a one-line "file it away" warning in
  the reading; never a graded problem here.)
- **Consequence:** old placeholder problems that relied on `/` or `%` are **dropped/replaced**,
  `average-of-three` (needs `/`), `seconds-breakdown` (needs `/` and `%`), and the division parts of
  `temperature-convert` / `total-with-tax`. Multiplication-only versions survive.

## Grading approach (this section)
- **`stdout-match`**, **input via stdin** (unlike 1.1/1.2, here values come in so the program is general).
- **Anti-hardcoding is real here** (there IS computation): every problem gets **multiple varied cases incl.
  edge inputs** (zero, negative, large). A literal `WriteLine(...)` must fail. Oracle CLI generates expecteds.
- A few **pure-declaration** problems (p01, p02) still read a value from stdin and echo it, so even those
  resist hardcoding (proven by the old p01: varied inputs kill a printed literal).

## Statement style
- Terse (course-wide rule). State the input contract + what to print, minimally. No padding.

## Anti-hardcoding note
- Varied + edge inputs per problem (the standard defense, this is an input-driven section).
- Vary the *context* (count, price, age, height, points) across the family so surface differs while the
  skill repeats, wax-on/wax-off.

---

## The family (escalating)

**Thread A, declare / init / choose (pure reps):**
**Thread B, reassign & `const`:**
**Thread C, combine with `+ - *`:**
**Thread D, debug (fix a wrong-type / wrong-assignment bug):**

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a whole number, store in an `int`, print it | declare+init `int` | ● |
| p02 | read a decimal, store in a `double`, print it | declare+init `double` | ● |
| p03 | given several described values, output the right type name for each | choose `int` vs `double` | ● |
| p04 | read a value, reassign it to a new value, print the final | reassignment overwrites | ● |
| p05 | print a `const` (e.g. days-in-week) alongside a read value | `const` declare + use | ● |
| p06 | replace magic numbers in a snippet with named `const`s (print result) | `const` as naming | ●● |
| p07 | read two ints, print their **sum** | `+` on variables | ●● |
| p08 | read two ints, print their **difference** | `-` on variables | ●● |
| p09 | read two ints, print their **product** | `*` on variables | ●● |
| p10 | read a count + unit price (double), print total = count * price | `*`, mixed int/double | ●● |
| p11 | rectangle area from two read ints | `*`, realistic | ●● |
| p12 | swap two read values using a temp variable, print both | temp-variable pattern | ●● |
| p13 | fix a bug: `int` used where decimals are needed (change to `double`) | debug: wrong type | ●● |
| p14 | fix a bug: variable used before assigned / reassigned wrong | debug: assignment | ●● |
| p15 | model a described scenario: choose types, declare, combine, print | integrative capstone | ●●● |

**Escalation shape:** p01–p04 pure wax-on (declare/init/choose/reassign); p05–p06 `const`; p07–p11 the
arithmetic ramp (`+`, `-`, `*`, then `*` in realistic mixed-type contexts); p12 the temp-swap classic;
p13–p14 debug the two signature beginner bugs; p15 the "put it all together" capstone.

---

## Per-problem intent (the bones)

### p01, declare an int
Read one whole number, store in a well-named `int`, print it. Pure rep.
*(Survives from the old family, already proven un-hardcodable via varied inputs: 3 / 0 / 150 / 1.)*

### p02, declare a double
Read one decimal, store in a `double`, print it. Same motion, new type.
*Cases:* include a whole-looking decimal, a negative, zero, a many-dp value.

### p03, choose the type
Given several described values (a count of students, a bank balance, a person's height, a year), output
the correct type name (`int`/`double`) for each. Proves the *choice*, not syntax.
*(No arithmetic; the "answer" is the type decision.)*

### p04, reassign
Read a value into a variable, then reassign it to a second read value; print the final value. Teaches
"the old value is gone." *Cases:* vary both values incl. negatives.

### p05, a const alongside a value
Declare a `const` (e.g. `const int DaysInWeek = 7;`), read a number of weeks, print days = weeks * DaysInWeek.
Introduces `const` *and* its natural use. *(Uses `*`, fine, in scope.)*

### p06, magic numbers → named consts
Given a snippet riddled with bare literals, replace them with named `const`s and print the computed result.
`const` as *naming / self-documentation*, not just immutability.

### p07–p09, sum / difference / product
Read two ints; print `a+b`, `a-b`, `a*b` respectively. The core "combine variables" reps.
*Cases (each):* normal, zeros, a negative, larger, varied so no literal passes.
*(p07 survives from the old family as `sum-two-ints`.)*

### p10, total from count * price
Read an `int` count and a `double` unit price; print `count * price`. Realistic, and quietly shows
int*double works. *Cases:* zero count, price with cents, large count.

### p11, rectangle area
Read width + height as ints; print area = `w * h`. Classic realistic `*`. *Cases:* 1×1, a zero side, large.

### p12, swap with a temp
Read two values; swap them using a temp variable; print both in swapped order. The temp-variable pattern
(a real reasoning rep, not just syntax). *Cases:* equal values, negatives.

### p13, fix the int bug
Given a program that declares an `int` where a fractional result is needed, fix it to `double` so the
output is correct. Debug: *wrong type*. *(Multiplication/addition context only, no division.)*

### p14, fix the assignment bug
Given a program with an assignment mistake (used before assigned, or reassigned in the wrong order), fix
it so output is correct. Debug: *assignment order / the `=` direction*.

### p15, model the scenario (capstone)
A short described scenario (may use a few more words, only as needed): choose the right types, declare
well-named variables (maybe a `const`), combine with `+ - *`, print the result to spec. Integrative.

---

## Notes / open calls
- **No `/` or `%` anywhere**, enforced by the scope reconciliation above. If a problem seems to want
  division, it belongs in Ch.2; rephrase it to multiplication or drop it.
- **p03 grading shape:** it outputs *type names* ("int"/"double") rather than computing, still clean
  stdout-match, and still un-hardcodable by varying which values are described per case.
- **`double` approximate note** lives in the reading, not a problem (grading exact floats is the future
  `compare: numeric-epsilon` territory, keep 1.3 targets as clean values that print deterministically).
- Keep contexts varied across the family (count, price, age, height, points, weeks) for surface variety.
