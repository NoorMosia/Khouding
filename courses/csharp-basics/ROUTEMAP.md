# C# Basics, Route-map

> The first course. Its own personal map. Built from the logic of C# itself (copyright-safe + better), to section-level granularity.
> This document is the **master structure** everything else mirrors (data model, authoring, map regions).

---

## The settled model (how to read this doc)

```
Course  ("C# Basics")            → its own personal map
  Chapter   (a REGION on the map)
    Section (a LANDMARK / a "drill", ONE idea)
      · Reading: concept + worked example (short, Gaddis-style)
      · Checkpoint quiz: a few T/F · MCQ · fill-in-blank (comprehension gate)
      · 5–15 problems: all variations of the ONE idea, escalating difficulty, varied surface
        (size follows the idea's natural depth, floor 5, ceiling ~15)
      · 1 tight cheatsheet file (this section's syntax only, does NOT carry old syntax forward)
    Chapter Test (the region BOSS, integrative)
      · realistic combined scenarios, no new reading
      · 10–15 problems drawn from a LARGE POOL
      · cheatsheets/ folder = this chapter's section sheets gathered
  Course Exam (the final BOSS, whole-course integrative)
      · 10–15 from a pool · course-wide cheatsheet library
```

**Rules of the model**
- Every section is a *practice* section, even trivial ideas get drilled to fluency ("wax on, wax off"). Purely conceptual material rides inside the reading of the nearest practice section.
- A landmark on the map is always a place you actually *did* something.
- Cheatsheets are per-section and tight; scope scales up via folders for tests (chapter) and the exam (course).
- Tests/exams are non-memorizable via a large pool; each attempt draws a fresh set.
- **Section size follows the idea (course-wide rule):** a section has as many problems as its one idea naturally warrants, **floor 5, ceiling ~15**. No forced count. Lighter ideas (recognition/placement, naming) run small; deep ones (numeric variables) run full. Smaller early sections also make the map fill in faster, giving a new student early momentum.
- **Completion = ~60% of a section's own problems** (rounded sensibly: 5→3, 6→4, 15→9). The old fixed "8/15" is now just the shape of a *full* drill section, not a universal constant. Each section declares its own threshold (authored `lights_at`); the count is derived from how many problem folders exist.
- **Chapter test / exam** use the same ~60% idea against their pooled draw. Generous **~24h** attempt window, missing it (or scoring under the threshold) just means "doesn't count, try again with a fresh draw." No hard lockouts, ever.
- Problem variety in basic sections: vary type (int/double/string/bool/char), vary realistic context (age, price, name, temperature), escalate (declare → declare+assign → assign-from-calc → naming → combine).
- **No-analogy principle (standing format rule, course-wide):** readings state concepts **plainly and directly**, with no explanatory analogies. An analogy ("a variable is a jar", "a program is a letter") talks down to the student and implies they are getting a simplified stand-in rather than the real thing, which fights the university-standard, you-are-a-real-developer tone. Say what the thing *is*, in plain language, and anchor on something observable (e.g. output). *(Supersedes the earlier "one clean analogy" rule. The brand motto "wax on, wax off" is house voice, not a teaching analogy, and may still appear as framing.)*

**Scope seam (decided):** C# Basics is everything you can do *before writing your own classes*, variables, types, operators, console I/O, conditionals, loops, methods, arrays, strings, using built-in collections like `List<T>`. Defining your own classes starts the next course (C# OOP).

**Map (decided):** the course map is a **real country's provinces, C# Basics = Austria** (9 Bundesländer = the 9 regions; chapters map to provinces, sections are landmark pins). One real country per course. **The course now has exactly 9 chapters** (after splitting old Ch.1 at 1.5 into Ch.1 "variables" + Ch.2 "input"), a clean **1 chapter : 1 Bundesland** fit, no stretched or leftover provinces. Chapters carry an authored **region title** (Ch.1 = "The Foundations") and sections an authored **map_name**; these are authored map metadata (see `tasks/70-architecture.md` §5 "Map metadata", `UXChanges.md` §7). African geography is reserved for the future *community* map, not course maps.

**Chapter → province mapping (working, provinces beyond Ch.1 are placeholders, confirmed when authored):**
Ch.1 "The Foundations" → **Oberösterreich** (lit, starting province). Ch.2 "Input & Interaction" → a neighbouring province (TBD). Ch.3–9 → the remaining Bundesländer, assigned when those chapters are authored. The *country* itself is a late, authoring-informed confirmation per `70-architecture.md` §5 (Austria is the prototype default).

---

# CHAPTER 1, Getting Started & Variables
*Region theme: the "wax on, wax off" chapter. The absolute fundamentals, drilled to fluency.*
*Map: region title **"The Foundations"** → **Oberösterreich** (Austria), lit as the starting province.*

> Why this chapter exists: before anything else, a student must be able to store values, name them well, read input, and print output without thinking about it. This chapter builds that reflex. The sections are deliberately fine-grained, many small landmarks, so the map fills in satisfyingly and each micro-skill gets its own reps.

> **Chapter scope decisions (banked, read before authoring any Ch.1 section):**
> - **`const`** is taught inside the variable sections (real reps in 1.3, light callback in 1.4), not as its own landmark.
> - **Arithmetic in Ch.1 is scoped to `+ - *` on variables**, enough to make stored numbers *useful*, mirroring how 1.1 *uses* `Console.WriteLine` before 1.2 drills it. **No precedence, no `%`, no integer-division gotcha drilled** (just a one-line warning). The **full** arithmetic treatment is Ch.3 (fed by Ch.2's real input), so Ch.3 is arithmetic *in depth*, not an introduction (same pattern as 1.1→1.2).
> - **"What a type really is" is taught once PER TYPE-GROUP**, tuned to that group's story, numbers: range + precision (and `double` is approximate); text: one vs many (`char` vs `string`); truth: two values (`bool`, light). Not a copy-pasted definition per individual type.
> - **Input honesty:** §2.2 *names* that parsing can fail (throws on bad input) without building the handling, so "university standard" doesn't pretend input is always clean. *(Input moved to Chapter 2, see the Ch.1 split note.)*
> - **Placeholder caveat:** the currently-authored 1.3 (and the old 1.5 sketch) are **format-experiment placeholders**, to be re-authored to the bar, not treated as locked content.

## 1.1, The parts of a C# program
- **One idea:** *where does my code go, and what's all the stuff around it?* Anchored on a complete, runnable **Hello World**.
- **Skeleton decision (course-wide):** teach the **explicit skeleton** (`using System; class Program { static void Main() { ... } }`), NOT top-level statements. It gives "where does code go" a real, visible answer (inside `Main`, inside the class), matches what students see in most courses/textbooks and every file once programs grow, and is the skeleton every authored solution in the course uses.
- **Reading:** show one full Hello World, anchored on the visible **output** (`Console` = the screen); then label its parts *around* that concrete example: `using System;`, the `class` it lives on, the `Main` method where execution starts, braces `{ }` as block delimiters, statements ending in `;`. **No structural analogy** (decided: a forced "program = letter" analogy confused more than it helped; keep it plain, anchor on output). **`static void` is explicitly deferred** to Methods (Ch.6). **Comments are NOT introduced here** (decided): the Hello World is short enough not to need them, and a first-reading student has no reason for them yet. They move to **1.2**, where multi-line output first makes a note worth writing.
  - **`using System;` (LIGHT explanation, decided):** "the line that lets you say `Console.WriteLine` instead of its longer full name." One true sentence; plant the seed, **no namespace lecture**. The real "calling into a class someone else wrote / libraries" lesson is deferred to the Ch.2 `Math` capstone (which already owns that job).
  - **No analogy (decided).** An earlier plan used a "program = letter / braces = box / `;` = full stop" analogy spine; it was dropped because a structural analogy made a first-reading student hunt for a mapping that is not load-bearing. The reading stays plain and concrete, anchored on the visible output (`Console` = the screen). The only light descriptive touch kept is "`;` is like a full stop at the end of a sentence" (a plain description, not a conceit). Authored reading: `1.1-parts-of-a-program/reading.md`.
- **Quiz:** identify each part of a given skeleton; which line is where execution starts; what `using System;` buys you (light); which line(s) a statement may legally go in (inside `Main`); match brace-open to brace-close. *(Comments are NOT covered in 1.1, they move to 1.2. Indentation/formatting moves to 1.5.)*
- **Problems (small, ~5–6, a light early section for fast first unlock):** anchored on a **Hello World** example; every problem ends in a **target output** so it grades by stdout-match (option 1). Family: fix a broken skeleton so it compiles and prints `X` (missing `;`, missing closing brace); place a given line in the right spot (inside `Main`) so it prints; reproduce the skeleton from scratch around a given line. See `1.1-parts-of-a-program/exercises-draft.md`. *(Skill = where does code go + be unafraid of the boilerplate. Indentation is NOT drilled here: a misindented program still compiles, so it can't be stdout-graded; formatting moves to 1.5.)*
- **Cheatsheet:** `using System;`, class + `Main` skeleton, `{ }`, `;`. (No comments yet, they arrive in 1.2; formatting in 1.5.)

## 1.2, Output: shaping what you display
- **One idea:** *how do I control what gets displayed?*, the student already knows they **can** print (1.1); 1.2 is about **shaping** output: `WriteLine` vs `Write`, line structure, blank lines, and escape sequences. From *that* we display → *how* we display, visually.
- **Reading:** `WriteLine` vs `Write` (adds a newline or not); a blank line is itself output; **escape sequences** as more tools for shaping display: `\n` (a newline *inside* a literal; the hinge, same effect as a second `WriteLine`), `\"` (a literal quote), `\\` (the escape character itself), `\t` (tab, for visual alignment). (Students already recognize the skeleton from 1.1.)
  - **Comments land here (moved from 1.1):** now that programs run to several lines, a note explaining a line is finally worth writing. Introduce `//` (line) and `/* */` (block) as "text the compiler ignores, there for the human reader." Light, no drilling (comments produce no output, so they can't be graded by stdout). This is their natural first home.
- **Quiz:** which prints on a new line; T/F `Console.Write` adds a newline; what `\n` does inside a string; why you need `\"`; what `\\` prints; **line vs block comment; T/F a comment changes the output** (comments material moved here from 1.1).
- **Problems (15, lights at 9):** easy reps (one line, several lines, `Write` on one line, blank line between, mix `Write`/`WriteLine`), then one-at-a-time escapes (`\n` via `WriteLine` **and** via `Write` with no trailing newline, `\"`, `\\`, `\t`), then tiny fixed visual composition (aligned table, text box, triangle). See `1.2-output-with-writeline/exercises-draft.md`. *(Skill = produce exact console output; strict byte-match makes precision the lesson.)*
- **Cheatsheet:** `Console.WriteLine(...)`, `Console.Write(...)`, string literals, escapes (`\n`, `\"`, `\\`, `\t`), comments (`//`, `/* */`), the `;`.

> *(Sections renumbered after inserting 1.1 "Parts of a program." 1.2 retitled from "Your first program", 1.1 now owns the first program (Hello World); 1.2 is output *fluency*. Comments, formerly their own end-of-chapter section, now live in 1.1 where they belong conceptually.)*

## 1.3, Number variables (`int` and `double`)
> **Note:** the currently-authored 1.3 was the "one real section" **format experiment**, placeholder-grade. It will be **re-authored to the university bar**, absorbing the additions below (`const`, the numbers-group type beat, basic arithmetic). Treat the existing files as a draft, not canon.
- **One idea:** declare, initialize, and reassign numeric variables, choose `int` vs `double`, and combine them with basic arithmetic.
  *(Wax on, wax off #1: the first type, drilled to fluency. Numbers first because they're the most intuitive thing to store, age, price, count, temperature. This is the chapter's **deep** group → justifiably a full ~15-problem section.)*
- **Reading:** a variable is a named place that holds a value (stated plainly, no analogy); `int` = whole numbers, `double` = numbers with a decimal part, and how to *choose between them*; declare-and-initialize `int n = 5; double price = 4.99;`; reassignment overwrites.
  - **Spotlight:** `=` means "store this value here", it is **not** equality. Classic beginner trap; gets emphasis + targeted problems here.
  - **`const` (folded in here):** a variable whose value cannot change once set, `const double Pi = 3.14159; const int DaysInWeek = 7;`. Introduced with numbers because the natural examples are numeric. Light callback in 1.4 (`const string` works too). Gets a few reps ("turn these magic numbers into named constants").
  - **Type beat (numbers group, the "what a type really is" paragraph):** a type is a set of possible values with a **range** and a **precision**. `int` is exact but bounded; `double` trades exactness for range, so **`double` is approximate** (`0.1 + 0.2` is not exactly `0.3`). One honest paragraph, "file this away", full treatment later. This is the university-standard beat (teach the *concept* of a type, not just the menu).
  - **Basic arithmetic (scoped, mirrors the 1.1→1.2 "use it before you drill it" move):** combine numeric variables with **`+ - *`** to compute a value worth storing (`int total = apples + oranges;`). **No precedence rules, no `%`, no integer-division gotcha drilled**, just the one-line "if the answer can be fractional, use `double`" warning. The full arithmetic treatment (precedence, `%`, `/` gotcha, `Math`) is Ch.3's job. This makes parsed numbers in §2.2 immediately *useful* instead of inert, and fixes the old "numbers you can't compute with yet" seam.
- **Quiz:** pick `int` vs `double` for a described value; what `x = 5` does; T/F `=` tests equality; T/F a `const` can be reassigned; trace the value after two reassignments; (light) which of these is `double` approximate about.
- **Problems (15, lights at 9):** declare+init `int`/`double`; choose the type for described values; reassign; `const` (declare+use, then magic-numbers→named-consts); combine variables with `+`/`-`/`*` (sum, difference, product, total = count*price, rectangle area); swap via temp; fix a wrong-type bug; fix an assignment bug; integrative capstone. **`/` and `%` are OUT (Ch.3).** See `1.3-number-variables/exercises-draft.md`. *(Skill = fluent numeric variables + choosing the type + basic combination.)*
- **Cheatsheet:** `int`, `double`, declare-and-init syntax, `=` assignment, `const`, `+ - *` on variables.

## 1.4, Text variables (`string` and `char`)
- **One idea:** declare, initialize, and reassign text variables, a `string` (a sequence of characters) vs a `char` (a single character).
  *(Wax on, wax off #2: same motion as 1.3, new type. Reinforces the reflex.)*
- **Reading:** `string` for text (names, words, messages), `char` for a single character; declare-and-initialize `string name = "Ada"; char grade = 'A';`; the `"..."` vs `'...'` distinction.
  - **Type beat (text group, one vs many):** this group's story isn't range/precision (that was numbers), it's **one vs many**. A `char` is a *single* character (quoted `'a'`); a `string` is a *sequence* of them (quoted `"a"`). One short beat, tuned to this group.
  - **`const` callback (light):** `const` from 1.3 works for text too, e.g. `const string Greeting = "Welcome";`. One line; no new reps needed (the drilling happened in 1.3). *(Keep drill content country-neutral: do NOT use the map country's name/places in readings or problems, it spoils the exam reveal. Country flavor is reserved for the chapter tests/exam, per the authoring guide.)*
  - **Light intro of `bool`** here as "one more simple type" (`bool done = true;`). **Type beat (truth, two values):** a type can have just *two* possible values. One sentence. Its *real* wax-on/wax-off comes in the Decisions chapter where booleans come alive via comparisons and `if` (which is why bool stays light here).
- **Quiz:** `string` vs `char` for a described value; spot `"A"` vs `'A'` misuse; T/F a `bool` can hold only `true`/`false`; T/F a `char` can hold a whole word.
- **Problems (12, lights at 7):** declare+init `string`/`char`; read a full line (string = a sequence); choose string vs char; reassign a string; model text fields; `const string` callback; a light `bool` flag; the `"A"`/`'A'` quoting bugs (both directions); integrative capstone. **No concatenation/interpolation (§2.3), no string methods (Ch.8), no bool logic (Ch.4).** See `1.4-text-variables/exercises-draft.md`. *(Skill = fluent text variables; bool stays light.)*
- **Cheatsheet:** `string` (`"..."`), `char` (`'...'`), `bool` (light), declare-and-init syntax, `const` (callback).

## 1.5, Naming and formatting
> **Note:** retitled from "Naming variables well" and widened to also cover **formatting/indentation** (which was homeless after being pulled out of 1.1). Both are the same one-idea: writing code a human can read. Still a light-to-moderate section. "Redone" means authored to the bar, not padded. The old sketch was placeholder-grade.
- **One idea:** write code a human can read. The compiler ignores your names and your layout; humans do not. Two levers: **good names** (self-documenting) and **clean formatting** (indentation/layout that shows structure).
- **Reading:**
  - **Naming:** identifier rules (legal characters, can't start with a digit, no keywords); C# convention (camelCase for locals, PascalCase for `const`/types the student has already seen); a good name is self-documenting (naming as modeling).
  - **Formatting (folded in from 1.1):** indentation and line breaks are **reader-facing**, the compiler ignores them. Show the same program well-indented vs mangled-but-valid: both run identically, only one is readable. Convention: one statement per line, indent the body of each block one step. This is the natural home now that programs run several lines.
  - *(Optional comments recap: comments are introduced in 1.2; if useful, a one-line "and notes help too" callback can sit here. Not required.)*
- **Quiz:** legal vs illegal identifier; pick the clearest name for a described value; spot the convention violation; T/F indentation changes what the program does (false, compiler-ignored); which of two layouts a human reads more easily.
- **Problems (~6–8):** rename cryptic variables to meaningful ones; fix illegal names; re-indent a mangled-but-valid program so it reads cleanly (still prints the target, grades by stdout-match); choose names for a described scenario; declare + name values well. *(Skill = readable code: naming as modeling + clean layout. Runs small-to-moderate per the section-size rule.)*
- **Cheatsheet:** identifier rules, camelCase (locals) vs PascalCase (`const`/types), indentation convention (indent each block body one step, one statement per line).

## 1.T, CHAPTER 1 TEST (region boss)
- **Integrative scenarios combining 1.1–1.5** (the program & its variables): reproduce the program skeleton, declare well-named variables of the right types (incl. `const`), combine numbers with `+ - *`, and shape exact output with `WriteLine`/`Write`/escapes. **No input/parsing yet**, that's Chapter 2's region boss.
- Examples of pool scenarios: **"declare the fields"** (given a described thing, a book, a product, declare its typed, well-named fields and print a tidy multi-line block to spec); **"named constants"** (turn a snippet full of magic numbers into well-named `const`s and print the computed result); **"model & format"** (choose types for a small scenario, compute a value with `+ - *`, print an exactly-formatted block using escapes). All values are *authored into the program*, not read, input is Ch.2.
- **A test-sized set drawn from a large pool.** Passing ~60% of the drawn set lights up Chapter 1 on the map. ~24h attempt window; fresh draw on retry.
- **Workspace:** `cheatsheets/` folder = gathered sheets from 1.1–1.5.

---

# CHAPTER 2, Input & Interaction
*Region theme: the program stops being a monologue and starts a conversation, read from the outside world, convert it, format it back out.*
*Map: its own Bundesland (region title + province TBD), a second early landmark, so a new student lights TWO regions in their first stretch.*

> **Why this is its own chapter (decided, Ch.1 split at 1.5):** Chapter 1 is the program *in isolation* (you author the values). Chapter 2 is the program *interacting*, a genuinely different skill (talking to the outside world) that earns its own wax-on/wax-off cycle. Keeping it separate (rather than folding input into arithmetic) is faithful to the method: **drill input to fluency on its own, THEN let the next chapter drill arithmetic to fluency.** The arithmetic skill gets three honest passes across the course: Ch.1 *uses* `+ - *` informally → Ch.2 *feeds it real input* → Ch.3 *drills it in depth*. A focused chapter is one skill done properly, not a thin chapter.

> **Scope:** read input (`ReadLine`), convert it (`Parse`), and build value-filled, well-formatted output (interpolation, joining with `+`, number formatting). Arithmetic stays at Ch.1's scoped `+ - *` here, the FULL arithmetic treatment (precedence, `%`, `/` gotcha, `Math`) is Chapter 3. Ch.2's job is the I/O round-trip, not operators.

> **Input model (decided, course-wide from here):** execution is **one-shot and non-interactive** (VISION §5): input is **supplied upfront and piped to stdin**, the program runs start to finish, output shows in a display-only pane. The student does **not** type live while the program runs. On the coding screen they fill a **stdin input box**, hit Run, and see output (testing); Submit runs the hidden cases (failing case revealed on a failed submit). This fully supports prompting programs; it just isn't a live terminal.
> - **Prompts: ON, on their own line (decided).** University-standard programs prompt the user, so we teach and require prompts: `Console.WriteLine("Enter your age:")` (prompt on its OWN line), then read. Reason: with piped, non-echoing stdin, an *inline* prompt (`Write("Age: ")`) runs together with later output because the typed value never echoes. Prompt-on-its-own-line reads correctly under piped input and is still professional. (Later UI polish: echo supplied stdin inline in the output pane so piped runs *look* interactive, no live terminal; logged in `UXChanges.md`, not needed for content.)
> - **Reading sets the mental model honestly:** your program reads input provided up front (not typed live); a prompt is a label you print so a human knows what to enter.

> **Chapter size note:** Chapter 2 has **5 teaching sections + boss** (Ch.1 also has 5 + boss). This does NOT change the chapter count or the map: chapters map to provinces, and sections are landmark *pins within* a province, so Ch.2's five sections are five pins in its one Bundesland. The "9 chapters = 9 Austrian Bundesländer" mapping still holds; Ch.2 simply has a full set of pins.

## 2.1, Reading input with `Console.ReadLine`
- **One idea:** get a line of text from input into a variable, and prompt for it.
- **Reading:** `Console.ReadLine()` returns a `string`; store it, then use it. **Prompt first** with a `WriteLine` on its own line. Explain the one-shot input model (supplied upfront, not typed live).
- **Quiz:** what type `ReadLine` returns; T/F it returns a number for numeric input; where the prompt goes; T/F you type while the program runs (false, input is supplied upfront).
- **Problems (~8, lighter section):** read a name and greet; read a word and reprint; prompt then read; read two lines and reprint both; read three fields and echo them. *(Skill = capture input as a string. Prompt on its own line. Country-neutral.)*
- **Cheatsheet:** `Console.ReadLine()` returns `string`; prompt-on-its-own-line pattern.

## 2.2, Converting input to numbers
- **One idea:** turn a string of input into a numeric type you can compute with.
- **Reading:** input is always a `string`; `int.Parse` / `double.Parse`. **Assume input is correct** (hidden tests feed only valid input), but **tell the student plainly: if the input is not the right format, parsing throws an error.** The robust way (`TryParse`) is a later chapter; here we name the failure, do not handle it.
  - **Payoff from 1.3's scoped arithmetic:** parsed numbers are immediately *useful*, read two numbers and combine them with `+ - *`.
- **Quiz:** why you can't do math on a `ReadLine` string directly; pick the right parse for a decimal; what parsing `"abc"` as int does (throws); which parse for a whole number vs a price.
- **Problems (~15, full section):** read a number and print it doubled; read two numbers and add; read a price as `double`; read an age as `int` and print next year's age; read a count and a price and print the total (`*`); mixed read-parse-compute. *(Skill = string → number → use. The meaty section where input becomes useful.)*
- **Cheatsheet:** `int.Parse`, `double.Parse`; note: parsing throws if the text is not a valid number.

## 2.3, String interpolation
- **One idea:** build output that mixes text and values cleanly, with `$"...{value}..."`.
- **Reading:** interpolation as **the standard** way to produce value-filled output: `$"Hello {name}, you are {age}"`. The `$` prefix, `{value}` holes. The payoff Ch.1 could not reach: a tidy one-line `$"Total: {total}"` instead of label-then-value on two lines. **Lightly note** that `+` can also join text (full treatment in 2.4).
- **Quiz:** pick the correctly interpolated string; spot the missing `$`; what `{x}` does; interpolation vs the old two-line approach.
- **Problems (~12, moderate):** greet by name; print "X plus Y is Z" with interpolation; a one-line labelled value; a multi-field interpolated summary; rewrite a two-line label/value (Ch.1 style) as one interpolated line; build a described output string. *(Skill = readable, value-filled output. Leans into the one-line payoff.)*
- **Cheatsheet:** `$"{...}"` interpolation, the `$` prefix, `{value}` holes.

## 2.4, Joining strings with `+`
- **One idea:** the `+` operator joins strings, both for output *and* for building a new string from pieces.
- **Reading:** `+` concatenates: `"Hello, " + name` for output, and `string full = first + " " + last;` to build a stored string. Two uses of the same operator. A number `+`'d with a string becomes text in the result (light note, no deep type rules). Interpolation (2.3) is usually cleaner for output; `+` is essential for *building* strings and is everywhere in real code, so you must read and write it.
- **Quiz:** what `"a" + "b"` gives; what `"Age: " + 7` gives (`"Age: 7"`); build a full name from two parts; interpolation vs `+` for the same output.
- **Problems (~10, moderate):** join two words with a space; build a full name into a `string` variable; join label + value for output; combine three pieces; convert an interpolated line to `+` and back. *(Skill = concatenate for output AND build strings. Its own section per the dual role.)*
- **Cheatsheet:** `+` joins strings; `string whole = a + b;` builds one; number `+` string becomes text.

## 2.5, Formatting numbers for output
- **One idea:** control how a number looks when printed: decimal places and currency.
- **Reading:** a raw `double` prints unhelpfully for money (`7.5`, or `0.30000000000000004`). Format it: `$"{price:F2}"` for two decimal places (`7.50`), and a money format for currency. **Culture caveat (authoring):** currency symbol and decimal separator are culture-dependent; the sandbox runs **invariant culture** (the runner forces it), so author/verify against that. Keep it to decimal-places (`F2`) and a plain money format; do not rabbit-hole into every format specifier.
- **Quiz:** what `{x:F2}` does to `7.5` (`7.50`); why raw doubles look bad for money; pick the format for two decimal places.
- **Problems (~10, moderate):** print a price to two decimals; a total to two decimals; display a given fractional value rounded for the eye (value given, no division); a small receipt with `F2` amounts; format a rate-looking value. *(Skill = display numbers cleanly. Currency + general floating point. Values given or computed with `+ - *`, no division.)*
- **Cheatsheet:** `$"{value:F2}"` two decimals; money formatting; note: sandbox is invariant culture.

## 2.T, CHAPTER 2 TEST (region boss)
- **Integrative scenarios combining 2.1–2.5 (and everything from Ch.1):** prompt and read input, convert/parse it, compute with `+ - *`, and print **value-filled, well-formatted** output (interpolation, joined strings, `F2` amounts). The "talking to the outside world" region boss.
- Examples of pool scenarios: a **"greeting card"** (read name + age, print a formatted multi-line message); a **"receipt"** (read item + unit price + count, print an interpolated, `F2`-formatted line using `*`); an **"intake form"** (read several fields, print a tidy interpolated summary); a **"name builder"** (read first + last, build and print a full name with `+`). Input supplied upfront; prompts on their own line.
- **Pool ≈ 20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Value-varied variants per family for anti-hardcoding (inputs supplied via stdin, so cases can also vary the input).
- **Workspace:** `cheatsheets/` folder = gathered sheets from 2.1–2.5 (plus Ch.1 sheets as a library).

---

---

# CHAPTER 3, Operators & Arithmetic (in depth)
*Region theme: the third and final arithmetic pass. Ch.1 used `+ - *` informally, Ch.2 fed them real input, Ch.3 drills the full operator toolkit to fluency.*
*Map: its own Bundesland (region title + province TBD when authored).*

> **Why this chapter exists / scope:** this is arithmetic *in depth*, NOT an introduction (same 1.1→1.2 pattern: use it, then drill it). It owns the operators Ch.1/Ch.2 deliberately deferred: operator precedence, integer vs floating division (the `5/2 = 2` gotcha, drilled properly), the remainder operator `%`, compound assignment, and increment/decrement. The capstone is the `Math` class, taught as the first real "call into a library someone else wrote," which is also the home of the "real" `using System;`/namespace lesson that 1.1 kept light. Input (Ch.2) + arithmetic now combine freely (read a number, root it; round a price).

> **Chapter scope decisions (banked, read before authoring any Ch.3 section):**
> - **5 teaching sections + boss** (like Ch.1/Ch.2). Ordered so nothing is used before it is taught.
> - **Precedence is taught FIRST (3.1)**, because combining operators invokes precedence immediately. 3.1 leans on the known `+ - *` (and a simple whole-number `/`); the integer-division *gotcha* itself is 3.2, so 3.1 must NOT depend on it.
> - **Negatives are IN, overflow is OUT.** Integer division truncates toward zero (`-7 / 2 = -3`) and `%`'s sign follows the dividend (`-7 % 3 = -1`, `7 % -3 = 1`). These are honest, testable facts and are included as cases. `int` overflow / `long` / `checked` are NOT taught here (no overflow lecture).
> - **`++`/`--` and compound assignment are ONE section (3.4), built up:** start with `++`/`--` (the tightest "add one to yourself"), then widen to the compound family `+= -= *= /= %=` as "the same move, by any amount." They are one idea (update a variable from its own value), not two. (3.4 comes after `/` and `%` so `/=` and `%=` are legal to show.)
> - **Prefix/postfix is NAMED, not drilled.** Teach `++`/`--` as statements with one clear observable of the prefix-vs-postfix difference; do NOT drill mid-expression embedding (a puzzle, not a daily skill).
> - **Math (3.5) is one idea: calling into a library you were handed.** Teach a representative few deeply (the `Math.` call pattern, the `double` return, the real `using`/namespace lesson); the **cheatsheet lists more of the toolbox**, and some problems deliberately require a function the reading only *listed*, training the student to deduce usage from the library instead of being hand-held. By Ch.3 this training-wheels-off beat is earned. This keeps the section one idea (the library call), not a function catalog.
> - All expecteds via the oracle under invariant culture, as always; verify every `Math`/`double` and negative-division output with the CLI.

## 3.1, Precedence and parentheses
- **One idea:** operators apply in a set order, and parentheses override it.
- **Reading:** an expression is evaluated by precedence, `*` (and `/`, `%`) before `+` and `-`, so `2 + 3 * 4` is `14`, not `20`; parentheses force the order you want, `(2 + 3) * 4` is `20`; left-to-right among equal precedence. Anchored on `+ - *` from Ch.1/Ch.2 (plus a simple whole-number `/`). **Does NOT depend on the division gotcha (3.2).**
- **Quiz:** evaluate a mixed expression; pick where parentheses change the result; T/F `*` binds tighter than `+`; add parentheses to reach a target value.
- **Problems (~10, moderate):** evaluate/reproduce a given mixed expression's result; parenthesize to hit a target; read inputs and compute a precedence-sensitive formula; fix a wrong-precedence bug. *(Skill = read and control evaluation order.)*
- **Cheatsheet:** precedence of `+ - * / %`, parentheses, left-to-right for equal precedence.

## 3.2, Division and the integer-division gotcha
- **One idea:** `/` truncates when both operands are whole numbers, and does not when one is a `double`.
- **Reading:** `5 / 2` is `2` (integer division discards the fractional part), but `5.0 / 2` is `2.5`; to get a real quotient, make an operand a `double`. Negatives truncate **toward zero** (`-7 / 2 = -3`). The classic trap drilled properly. **Divide-by-zero is named** (integer `/ 0` throws at run time) but hidden cases never feed it.
- **Quiz:** what `5 / 2` gives; what `5.0 / 2` gives; how to make integer division produce a decimal; what `-7 / 2` gives.
- **Problems (~12-15, full):** predict/produce integer-division results; force a `double` result; read two numbers and divide (whole vs decimal); negatives; fix a "why is it 2 not 2.5" bug; realistic computes. *(Skill = division + the type-driven truncation rule. VERIFY every expected via CLI.)*
- **Cheatsheet:** `int / int` truncates; make one a `double` for a real quotient; truncation toward zero; `/ 0` throws (named).

## 3.3, The remainder operator `%`
- **One idea:** `%` gives what is left over after division.
- **Reading:** `7 % 3` is `1`; uses, even/odd (`n % 2`), last digit (`n % 10`), wrap-around. The sign of the result **follows the dividend** (`-7 % 3 = -1`, `7 % -3 = 1`). `% 0` throws (named, never fed).
- **Quiz:** what `7 % 3` gives; which test detects even; what `n % 10` extracts; what `-7 % 3` gives.
- **Problems (~10-12, moderate):** compute a remainder; even/odd report; extract the last digit; wrap a value; negatives; read-and-remainder. *(Skill = remainder + its idioms. VERIFY every expected via CLI.)*
- **Cheatsheet:** `%` is remainder; `n % 2` even/odd; `n % 10` last digit; sign follows the dividend; `% 0` throws.

## 3.4, Updating a variable
- **One idea:** update a variable from its own current value, from `++` up to the full compound family.
- **Reading:** `++`/`--` add or subtract one (`count++;` is `count = count + 1;`); then the compound family `+= -= *= /= %=` as the same move by any amount (`total += price;`). **Prefix vs postfix** named with one observable (`x++` vs `++x` when used in an expression), not drilled deep. Comes after 3.2/3.3 so `/=` and `%=` are available.
- **Quiz:** what `x++` does; rewrite `x = x + 5` with `+=`; what `total *= 2` does; (light) prefix vs postfix difference.
- **Problems (~8-10, moderate):** apply `++`/`--`; convert `x = x OP y` to compound form; running total/accumulator across a few reads; `*=`, `/=`, `%=`; fix a mis-sequenced update. *(Skill = concise self-update. Builds `++` → compound.)*
- **Cheatsheet:** `++ --`; `+= -= *= /= %=`; each expands to `x = x OP value`; prefix/postfix note.

## 3.5, The Math class (capstone)
- **One idea:** call into a library you were handed, reading its shape to use it, not being walked through every function.
- **Reading:** `Math` is a class in `System` full of ready-made functions you *call*: `Math.Sqrt(16)` is `4`, `Math.Pow(2, 10)` is `1024`, `Math.Round(x, 2)`, `Math.Abs`, `Math.Max`/`Math.Min`, `Math.PI`. Teach the **call pattern** deeply (the `Math.` qualifier, arguments, the `double` return) on a representative few; the cheatsheet lists more. **The real `using System;`/namespace lesson lands here** (deferred from 1.1): `Math` lives in `System`, which is why `using System;` lets you write `Math.Sqrt` instead of the full name, the first honest "calling into a class someone else wrote." Some problems require a listed-not-taught function on purpose (deduce from the library).
- **Quiz:** what `Math.Sqrt(16)` returns; what `Math.Pow(2,3)` returns; which call gives the larger of two; what `using System;` buys you (now the full answer); where `Math` lives.
- **Problems (~12-15, full):** read a number and root it; raise to a power; round a price to 2 dp; absolute difference of two inputs; larger/smaller of two; area of a circle with `Math.PI`; a problem using a cheatsheet-only function (deduce). *(Skill = use a library. VERIFY every `double` expected via CLI.)*
- **Cheatsheet:** `Math.Sqrt/Pow/Round/Abs/Max/Min`, `Math.PI`, the `Math.` call pattern, returns `double`; `using System;` + namespace (the real explanation); plus a few extra `Math` functions to deduce from.

## 3.T, CHAPTER 3 TEST (region boss)
- **Integrative scenarios combining 3.1–3.5 (and Ch.1–2):** read input, compute with the full operator set (precedence, `/`, `%`, compound updates) and `Math`, print formatted results. The "arithmetic to fluency" region boss.
- Examples of pool scenarios: evaluate a precedence-sensitive formula from inputs; integer-vs-decimal division report; even/odd or last-digit via `%`; a running total with compound assignment; a `Math` compute (root, power, round, hypotenuse of two inputs); a fix-the-broken (wrong precedence, forgot to force `double`, `%`-sign surprise).
- **Pool ≈ 20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Inputs via stdin, so cases also vary input (anti-hardcoding from both pool and cases).
- **Workspace:** `cheatsheets/` folder = gathered sheets from 3.1–3.5 (plus Ch.1–2 sheets as a library).

---

---

# CHAPTER 4, Decisions
*Region theme: the program stops running straight through and starts choosing. The chapter where `bool` comes alive.*
*Map: its own Bundesland (region title + province TBD when authored).*

> **Why this chapter exists / scope:** until now every program ran one straight path and printed one computed
> answer. Chapter 4 is the first chapter where the program **chooses** between paths. It owns booleans and
> comparisons, the `if` family (`if`, `if`/`else`, `else if`), the logical operators (`&& || !`), nested
> conditionals, and `switch`. **This is where `bool` gets its real wax-on/wax-off** (Ch.1 kept it light in 1.4
> precisely so it could come alive here through comparisons and logic). Resting on everything in Ch.1-3:
> types, input, parsing, interpolation, arithmetic (`+ - * / %`), `Math`.

> **Chapter scope decisions (banked, read before authoring any Ch.4 section):**
> - **6 teaching sections + boss.** Ordered so nothing is used before it is taught (dependency chain below).
> - **Branching is still deterministic, so the oracle is UNCHANGED.** A branching program maps a given stdin
>   to one fixed output, so `gen`/`check` work exactly as before. **Anti-hardcoding gets STRONGER here:** the
>   varied cases MUST straddle each branch boundary (an input on each side of a `>=`, each `case` of a
>   `switch`, both truth outcomes of a condition), so a student who hardcodes one branch's output fails the
>   others. This is the authoring rule for every Ch.4 problem.
> - **`bool` is its own section (4.1)**, not folded into `if`. Comparisons are a drillable skill on their own,
>   and a standalone 4.1 lets 4.2 focus purely on `if` mechanics. **Printing a `bool` prints capital
>   `True`/`False`** (VERIFIED), a real observable taught in 4.1.
> - **Dependency order:** 4.1 bool/comparisons feeds everything; 4.2 `if` before 4.3 `else`; **4.4 combining
>   (`&&`/`||`) BEFORE 4.5 nesting**, deliberately, so 4.5 can teach the flatten-vs-nest contrast ("this nested
>   check is clearer as one `&&`; this one genuinely needs the tree"); 4.6 `switch` last as the specialized
>   multi-way tool.
> - **Nested conditionals earn their own section (4.5).** Not a new construct, but a distinct *skill*
>   (reasoning about a decision tree, keeping branches straight) with its own full family once combined with
>   Ch.3 arithmetic and real output.
> - **`switch` kept classic and simple (4.6):** `case` / `break` / `default`, matching one value against
>   constants. **OUT:** switch expressions (`=>`), pattern matching, deliberate fall-through. Not load-bearing
>   for a basics course.
> - **No loops, no methods** (Ch.5/6). Output stays `WriteLine` of a literal or a computed value; conditions
>   decide which runs. Prompts on their own line, prompt text is graded (Ch.2 model).

## 4.1, Booleans and comparisons
- **One idea:** a `bool` holds `true` or `false`, and the comparison operators produce one.
- **Reading:** `bool` recap from 1.4, now with meaning; the six comparisons `==  !=  <  >  <=  >=`; a comparison
  is an expression that evaluates to a `bool` (`5 > 3` is `True`); store one in a variable
  (`bool isAdult = age >= 18;`). **Printing a `bool` prints `True`/`False` (capitalised)**, the observable.
  **`==` vs `=` spotlight:** `==` compares, `=` assigns (the classic trap, echoes 1.3's `=` beat).
- **Quiz:** what `5 > 3` prints; `==` vs `=`; which operator is "not equal"; what type a comparison produces.
- **Problems (~12, full):** print a fixed comparison; read two numbers and print each comparison; store a
  comparison in a `bool` and print it; equality vs inequality; `>=`/`<=` boundary; read-and-compare realistic
  (age vs 18, score vs pass mark). *(Skill = produce and read booleans. No `if` yet.)*
- **Cheatsheet:** `bool`, `true`/`false`, `== != < > <= >=`, comparison produces a `bool`, prints `True`/`False`.

## 4.2, The if statement
- **One idea:** run a block only when a condition is true (one-way).
- **Reading:** `if (condition) { ... }`; the condition is a `bool` (comparisons from 4.1); the block runs or is
  skipped; nothing prints when the condition is false unless you print it outside the `if`. Braces and block
  structure.
- **Quiz:** when does the block run; what prints when the condition is false; is the condition a `bool`.
- **Problems (~10, moderate):** print a message only if a number is over a threshold; only if equal; only if
  within a bound; read-and-maybe-print. Cases straddle the boundary (one triggers, one does not). *(Skill =
  guard a block with a condition.)*
- **Cheatsheet:** `if (condition) { ... }`, condition is a `bool`, block runs only when true.

## 4.3, if / else and else if
- **One idea:** choose between two paths, and chain `else if` for more than two.
- **Reading:** `if`/`else` (exactly one of two blocks runs); `else if` chains for multi-way (first true wins,
  the rest are skipped); the final `else` as the catch-all. Order matters in a chain.
- **Quiz:** which block runs; does a later `else if` run if an earlier one matched; what the final `else`
  catches.
- **Problems (~12, full):** two-way (adult/minor, pass/fail); three-way with `else if` (sign: positive/
  negative/zero); grade bands (A/B/C/fail); first-match-wins ordering; a fix-the-order bug. Cases hit every
  branch. *(Skill = pick one path among several.)*
- **Cheatsheet:** `if/else`, `else if` chain, first true wins, final `else` catch-all.

## 4.4, Combining conditions
- **One idea:** build a compound condition with `&&` (and), `||` (or), `!` (not).
- **Reading:** `&&` true only if both; `||` true if either; `!` flips; combine with comparisons
  (`age >= 18 && age < 65`); parentheses for clarity. (No short-circuit subtlety drilled; name it at most.)
- **Quiz:** what `&&`/`||`/`!` give for sample truth values; write a range check; which is "either".
- **Problems (~12, full):** in-range check (`lo <= x && x <= hi`); either-or; negate a condition; two-factor
  gate (age and membership); read values and print whether a compound condition holds. *(Skill = express
  multi-part conditions.)*
- **Cheatsheet:** `&&` both, `||` either, `!` not; combine with comparisons; parenthesise for clarity.

## 4.5, Nested conditionals
- **One idea:** a decision inside a decision, a real decision tree.
- **Reading:** an `if` (or `else`) body can contain another `if`; when later questions only matter inside an
  earlier branch, nesting is the natural shape. **The contrast (needs 4.4):** a flat `&&` is clearer when two
  conditions are independent; a nested tree is clearer when the second question only makes sense if the first
  was true. Show both; teach *when* to nest.
- **Quiz:** trace which branch a nested tree reaches; flatten a simple nest to one `&&`; when nesting is the
  right call.
- **Problems (~12, full):** classify with a tree (number sign then magnitude); tiered result (grade then
  distinction); a gate that only asks the second question inside the first branch; flatten-vs-nest a given
  snippet; a tax/shipping-tier compute (Ch.3 arithmetic inside the branches). Cases reach every leaf. *(Skill
  = reason about nested decisions.)*
- **Cheatsheet:** nesting an `if` in a branch; flat `&&` vs nested tree, when each fits.

## 4.6, The switch statement
- **One idea:** match one value against several constant cases.
- **Reading:** `switch (value) { case X: ...; break; ... default: ...; break; }`; each `case` is a constant;
  `break` ends a case; `default` is the catch-all; it is the specialised multi-way form for "one value,
  several known options" (a menu choice, a day number). **OUT:** switch expressions, pattern matching,
  fall-through tricks.
- **Quiz:** which case runs for a value; what `default` does; what `break` is for; `switch` vs an `else if`
  chain.
- **Problems (~10, moderate):** menu choice to a label; day number to a name; map a code to a message; a
  `default` fallback; convert a short `else if` chain to a `switch`. Cases hit several `case`s and `default`.
  *(Skill = multi-way match on one value.)*
- **Cheatsheet:** `switch`/`case`/`break`/`default`, one value vs constants, `default` catch-all.

## 4.T, CHAPTER 4 TEST (region boss)
- **Integrative scenarios combining 4.1-4.6 (and Ch.1-3):** read input, build conditions, choose a path with
  `if`/`else if`/`else`, `&&`/`||`, nesting, or `switch`, and print the chosen result. The "decisions" region
  boss.
- Examples of pool scenarios: classify a number (sign, range band); a grade-band report; an eligibility gate
  (compound condition); a nested tier (shipping cost, tax bracket) with Ch.3 arithmetic; a menu `switch`; a
  fix-the-broken (wrong comparison, `=` for `==`, missing `break`, mis-ordered `else if`).
- **Pool ~20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Inputs via stdin;
  **cases straddle every branch boundary** (anti-hardcoding from both the pool and the per-problem cases).
- **Workspace:** `cheatsheets/` folder = gathered sheets from 4.1-4.6 (plus Ch.1-3 as a library).

---

---

# CHAPTER 5, Loops
*Region theme: the program stops running each step once and starts repeating. The chapter where work that would take a hundred lines takes three.*
*Map: its own Bundesland (region title + province TBD when authored).*

> **Why this chapter exists / scope:** until now every statement ran at most once per path. Chapter 5 is the
> first chapter where a block runs **many** times under the program's own control. It owns the three loop
> forms (`while`, `do-while`, `for`), loops inside loops (nested), and the two loop-control statements
> (`break`, `continue`). Resting on everything in Ch.1-4: types, input, parsing, arithmetic (`+ - * / %`),
> and the full decision toolkit (a loop's condition is a `bool`, and most loop bodies contain an `if`).

> **Chapter scope decisions (banked, read before authoring any Ch.5 section):**
> - **5 teaching sections + boss** (like Ch.4). Ordered so nothing is used before it is taught (dependency
>   chain below). **Each loop type is its own section, per the course slicing rule.**
> - **A loop is still deterministic, so the oracle is UNCHANGED.** A loop maps a given stdin to one fixed
>   output, so `gen`/`check` work exactly as before. **Anti-hardcoding gets its own loop flavor:** the varied
>   cases MUST vary the iteration count (zero iterations, one, several), so a student who unrolls the loop or
>   prints a fixed block fails. A **zero-iteration case is required** wherever the loop can run zero times
>   (every `while` and `for`). This is the authoring rule for every Ch.5 problem.
> - **Input model (decided for this chapter):** the loop bound or the values come from stdin, supplied
>   upfront (the Ch.2 one-shot model). **A count-then-values pattern** (read `n`, then read `n` numbers) is
>   the standard shape; **a sentinel pattern** (read until a terminating value like `0` or `-1`) is the other.
>   Both are taught (sentinel fits `while`, count fits `for`). No live interaction.
> - **`while` is taught FIRST (5.1)** as the simplest condition-driven loop (the loop that most directly
>   mirrors `if`: run the block *while* a condition holds). **`do-while` second (5.2)** as the run-at-least-once
>   variant (the one observable difference, drilled). **`for` third (5.3)** as the counted-loop form, taught
>   as "the same while loop with init/condition/update gathered on one line", so it rests on 5.1.
> - **Nested loops earn their own section (5.4)**, the distinct skill of a loop inside a loop (rows and
>   columns, a multiplication grid, a shape). Kept to **2 levels** (deeper is a readability lesson, not a
>   drill). Rests on `for` (5.3) since nested counted loops are the common case.
> - **Loop control is ONE section (5.5):** `break` (stop the loop early) and `continue` (skip to the next
>   iteration). Taught together as the two ways to alter a loop's normal flow. Comes last so it can apply to
>   any loop form the student now knows.
> - **The infinite loop is NAMED, not drilled:** a `while (true)` with no exit, or a bound that never changes,
>   loops forever. Name it as the classic bug (and how `break` or a correct update avoids it) in 5.1/5.5; do
>   not build a problem that hangs. **Hidden cases never feed an input that loops forever** (the runner would
>   time out), and solutions always terminate.
> - **No methods, no arrays** (Ch.6/7). Accumulate into a single variable (a running total, a count, a max).
>   Output is `WriteLine` inside or after the loop. Prompts on their own line, prompt text graded (Ch.2 model).

## 5.1, The while loop
- **One idea:** repeat a block as long as a condition is true.
- **Reading:** `while (condition) { ... }`; the condition is a `bool` (Ch.4), checked before each pass; the
  body must make progress toward making the condition false or the loop never ends (name the infinite loop
  here, lightly). The count-up pattern (a counter `i` incremented in the body) and the sentinel pattern (read
  until a terminating value). A `while` can run **zero** times if the condition is false at the start.
- **Quiz:** when does the body run; what makes a `while` stop; what happens if the condition starts false
  (zero passes); spot the infinite loop (no progress).
- **Problems (~12, full):** count up to n; sum 1..n; read a count then sum that many numbers; read until a
  sentinel and total/count; count down; find a max across read values; fix an off-by-one or a
  never-updated-counter infinite loop. Cases vary the count incl. **zero iterations**. *(Skill = a
  condition-driven loop.)*
- **Cheatsheet:** `while (condition) { ... }`, condition is a `bool`, make progress, zero-iteration possible,
  the infinite-loop warning.

## 5.2, The do-while loop
- **One idea:** repeat a block, but always run it **at least once** (condition checked at the end).
- **Reading:** `do { ... } while (condition);`; the body runs, then the condition is tested, so it always
  executes once even when the condition is false at the start. Contrast directly with `while` (the one
  observable difference: a false-at-start `while` prints nothing, a `do-while` prints once). The trailing
  semicolon.
- **Quiz:** how many times a `do-while` runs minimum; `while` vs `do-while` when the condition starts false;
  where the condition sits; the semicolon.
- **Problems (~8-10, moderate):** run-once-then-repeat (a prompt-and-read-until-valid-looking shape, input
  supplied); a menu-style repeat until a quit value; count with a guaranteed first pass; convert a `while`
  to a `do-while` and observe the start-false difference. Cases include a condition that is false at the
  start (proves the one guaranteed pass). *(Skill = the run-at-least-once loop.)*
- **Cheatsheet:** `do { ... } while (cond);`, runs at least once, condition at the end, the `;`.

## 5.3, The for loop
- **One idea:** a counted loop with its setup, condition, and update gathered on one line.
- **Reading:** `for (int i = 0; i < n; i++) { ... }`; the three parts (init, condition, update) and when each
  runs; it is exactly a `while` with the pieces collected, show the equivalent `while` side by side. Counting
  up, counting down (`i--`), stepping by more than one (`i += 2`). A `for` can also run zero times.
- **Quiz:** identify init/condition/update; how many times a given `for` runs; the equivalent `while`; what a
  zero-iteration `for` looks like.
- **Problems (~12-15, full):** print 1..n; sum 1..n; read n then process n values (the count pattern); count
  down; step by 2 (evens); multiply into a factorial-style product; running total/average across n reads;
  find max/min across n reads; fix a wrong bound (off-by-one) or wrong update. Cases vary n incl. **zero**.
  *(Skill = the counted loop. The meatiest loop section.)*
- **Cheatsheet:** `for (init; condition; update)`, the three parts, up/down/step, equivalent `while`,
  zero-iteration possible.

## 5.4, Nested loops
- **One idea:** a loop inside a loop, an outer pass that each time runs a full inner loop.
- **Reading:** an outer `for`/`while` whose body contains another loop; the inner loop runs fully on every
  outer pass (so an `a` by `b` nest runs `a*b` inner iterations). Rows and columns as the mental model (outer
  = rows, inner = columns). Build a grid / a multiplication table / a triangle of a fixed character. **Kept to
  2 levels.** `WriteLine` vs `Write` matters here (end a row vs stay on it), a callback to 1.2.
- **Quiz:** how many inner iterations for an `a` by `b` nest; which loop ends a row; trace a small nest's
  output; what the inner loop's counter resets to each outer pass.
- **Problems (~10-12, moderate-full):** print an n-by-m block of a character; a right triangle (inner bound
  depends on the outer counter); a multiplication table; a numbered grid; rows of increasing length; fix a
  nest that forgot to reset the inner counter or used the wrong `Write`/`WriteLine`. Cases vary both bounds
  incl. a 1-by-k and k-by-1 edge. *(Skill = reason about a loop inside a loop.)*
- **Cheatsheet:** nested `for`, inner runs fully per outer pass, `a*b` total, rows/columns, `Write` vs
  `WriteLine` for row ends.

## 5.5, Loop control: break and continue
- **One idea:** alter a loop's normal flow, `break` stops it early, `continue` skips to the next iteration.
- **Reading:** `break` exits the loop immediately (the rest of the body and all remaining iterations are
  skipped); `continue` skips the rest of the current body and goes to the next iteration (the condition/update
  still run). Natural uses: `break` on a found/target value (early exit), `continue` to skip values that do
  not qualify. Note that both can be replaced by a well-structured condition, but they often read more
  clearly. Light callback to the infinite loop: `break` is one way out of a `while (true)`.
- **Quiz:** what `break` does to remaining iterations; what `continue` skips (and what still runs); `break`
  vs `continue`; which fits "stop when found" vs "skip the odd ones".
- **Problems (~10-12, moderate):** stop at the first value meeting a test (`break`); sum only the values that
  qualify, skipping others (`continue`); search for a target and report found/position-style (single var);
  skip a sentinel-marked value; early-exit once a running total crosses a limit; fix a misuse (`break` where
  `continue` was meant, or vice versa). Cases include "never found" / "nothing skipped" and "found on the
  first pass". *(Skill = early exit and skip.)*
- **Cheatsheet:** `break` stops the loop, `continue` skips to the next iteration (condition/update still run),
  when each fits, `break` as an exit from `while (true)`.

## 5.T, CHAPTER 5 TEST (region boss)
- **Integrative scenarios combining 5.1-5.5 (and Ch.1-4):** read a count or read until a sentinel, loop with
  the right form, accumulate (sum/count/max/min/product) or build a shape with a nested loop, and alter flow
  with `break`/`continue`, printing the result. The "repetition to fluency" region boss.
- Examples of pool scenarios: sum/average of n read values; count how many meet a condition; find the max of
  a read series; a sentinel-terminated total; a multiplication table or triangle (nested); a search that
  `break`s on a target; a filter that `continue`s past non-qualifying values; a fix-the-broken (off-by-one
  bound, never-updated counter / infinite loop, inner counter not reset, `break` vs `continue` swap).
- **Pool ~20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Inputs via stdin; **cases
  vary the iteration count (zero / one / several)** so an unrolled or fixed-output answer fails (the Ch.5
  anti-hardcoding rule, from both the pool and the per-problem cases).
- **Workspace:** `cheatsheets/` folder = gathered sheets from 5.1-5.5 (plus Ch.1-4 as a library).

---

---

# CHAPTER 6, Methods
*Region theme: the program stops being one long `Main` and starts being named pieces you call. The chapter where you write your own verbs.*
*Map: its own Bundesland (region title + province TBD when authored).*

> **Why this chapter exists / scope:** until now every program lived inside `Main`. Chapter 6 is where a
> student writes their own methods: named, reusable blocks they define once and call by name. It owns the
> method anatomy (finally explaining the `static void` that 1.1 deferred), parameters (passing values in),
> return values (handing a result back), scope (where a variable lives), and overloading (same name, different
> parameter lists). Resting on everything in Ch.1-5: types, input, arithmetic, decisions, and loops all appear
> inside method bodies and in `Main`.

> **Chapter scope decisions (banked, read before authoring any Ch.6 section):**
> - **5 teaching sections + boss** (like Ch.4/Ch.5). Ordered so nothing is used before it is taught.
> - **All methods are `static`, defined alongside `Main` in the same `Program` class.** C# Basics uses the
>   explicit skeleton and does NOT define its own classes or objects (that is the next course). So every
>   student method is a `static` helper that `Main` (or another static method) calls directly by name, no
>   objects, no instances. **This is the chapter that finally explains `static void`** (deferred from 1.1):
>   `static` = "belongs to the class, callable without an object" (light, honest, not an OOP lecture), `void`
>   = "returns nothing". The full meaning of `static` lands with classes in the OOP course; here it is the
>   keyword every method needs in this skeleton.
> - **The oracle is UNCHANGED (stdout-match), so every method problem is still an I/O program.** A method
>   does not print by itself, so each problem has `Main` read input and/or call the method and print the
>   result. **The method is the unit of structure; `Main` drives the I/O.** This keeps methods gradable by
>   stdout exactly like every prior chapter. Anti-hardcoding is the same varied-input rule (a method called
>   with several inputs via `Main`), plus: problems that define a method are checked by calling it with
>   **multiple arguments across cases**, so a method hardcoding one answer fails.
> - **Parameter passing is by value (the default), named lightly, not drilled.** A method gets copies of the
>   arguments; reassigning a parameter inside the method does not change the caller's variable. Teach this as
>   one honest observable in 6.4 (scope). **`ref`/`out` are OUT** (not load-bearing for basics; a later
>   course). **Arrays as parameters are OUT** (arrays are Ch.7).
> - **Return vs print (decided, taught explicitly in 6.3):** a method that **returns** a value hands it back
>   to the caller, which then decides what to do (often print it); a method that **prints** does the output
>   itself and returns `void`. The course standard is **return a value, let `Main` print it** (more
>   reusable), but both are shown and the distinction is a named teaching beat. Problems state which is wanted.
> - **Scope (6.4) is its own section:** a variable declared inside a method (a local, including parameters)
>   exists only inside that method; two methods can reuse the same local name with no collision; `Main`'s
>   variables are not visible inside a helper. The by-value observable (reassigning a parameter does not
>   affect the caller) lives here. **No `static` fields / globals** (that is state the OOP course owns); keep
>   everything passed in and returned out.
> - **Overloading (6.5) kept simple:** two or more methods with the **same name but different parameter
>   lists** (count or types); C# picks the match by the arguments. Classic, useful, stdout-gradable. **OUT:**
>   optional/default parameters, `params`, return-type-only differences (not allowed anyway), generics.
> - **Recursion is OUT of this chapter** (named at most, not drilled). It is a distinct skill; if taught, it
>   belongs later. Keep Ch.6 to straight-line calls (incl. a method calling another method, which is fine).
> - **Ordering:** 6.1 define & call a `void` no-parameter method; 6.2 add parameters (values in); 6.3 return
>   values (a result out) + the return-vs-print beat; 6.4 scope (locals, parameters, by-value); 6.5
>   overloading (needs parameters + returns, so it comes last).
> - **Teaching style, motivation before mechanism (standing rule for the method readings):** open each
>   core method reading by showing the pain the feature removes, briefly, then introduce the feature as the
>   fix. **6.1:** show a block copied out two or three times, then the method that names it once. **6.2:**
>   show near-duplicate methods (one per value) or a hardcoded single value, then a parameter that handles any
>   input. **6.3:** show a *printing* method whose result is trapped (you cannot reuse it in a further
>   calculation), then `return` which hands the value back. Keep the "before" short and honest (a real, tight
>   repetition, not a padded strawman), one contrast then move on; it must stay within the terse, no-analogy
>   style. This anchors the concept on something the student just felt rather than handing it over abstractly.

## 6.1, Defining and calling a method
- **One idea:** define your own named block and run it by calling its name.
- **Reading:** a method is a named block defined in the `Program` class next to `Main`; call it by writing its
  name followed by `()`. The anatomy, finally explaining `static void`: `static` (callable without an object,
  which is all this course needs), `void` (returns nothing), the name, the `()` for (here empty) parameters,
  the `{ }` body. Calling runs the body; control returns to the caller afterward. A method can be called more
  than once (the reuse payoff) and can call another method. **No parameters, no return yet.**
- **Quiz:** what calling a method does; where a method is defined; what `void` means; what `static` buys you
  (light); does defining a method run it (no, only calling does).
- **Problems (~10, moderate):** define a `void` method that prints a fixed banner and call it; call it several
  times (reuse); `Main` reads a count and calls the method that many times (loop + call); define two methods
  and call them in order; a method that calls another method; fix a bug (defined but never called, or missing
  `()`). *(Skill = define and call a no-arg void method. `Main` still does the I/O.)*
- **Cheatsheet:** `static void Name() { ... }` definition, `Name();` call, defined-in-`Program`-next-to-`Main`,
  `static`/`void` one-liners, calling runs the body and returns.

## 6.2, Parameters
- **One idea:** pass values into a method so it can work on different inputs.
- **Reading:** a parameter is a variable in the method's `()` that receives an argument when you call it;
  `static void PrintTimes(string text, int n)` called as `PrintTimes("hi", 3)`. Multiple parameters are
  comma-separated and matched by position. Arguments are copied in (by value, named lightly, drilled in 6.4).
  The method body uses the parameters like ordinary variables.
- **Quiz:** parameter vs argument; match arguments to parameters by position; what a call with the wrong
  number/type of arguments does (compile error, named); can a method take more than one parameter.
- **Problems (~12, full):** a method that prints its `int` argument squared; print a string argument `n`
  times (string + int params); greet by a name parameter; a method taking two numbers and printing their sum;
  `Main` reads the arguments from input and passes them in; several calls with different arguments; fix a
  wrong-argument-order bug. *(Skill = define and call methods with parameters. `Main` reads, passes, the
  method prints.)*
- **Cheatsheet:** parameters in `()`, matched by position, argument vs parameter, `Name(arg1, arg2);`,
  pass-by-value (one line).

## 6.3, Return values
- **One idea:** a method can compute a value and hand it back to the caller.
- **Reading:** a non-`void` return type (`int`, `double`, `string`, `bool`) plus a `return` statement that
  gives a value back; `static int Square(int n) { return n * n; }`, used as `int r = Square(5);`. `return`
  also ends the method immediately. **The return-vs-print beat (decided):** a returning method hands the value
  back so the caller decides (usually `Main` prints it); a printing method does the output itself and is
  `void`. Course standard: return, let `Main` print, because a returned value is reusable. Show both.
- **Quiz:** what `return` does (value back + ends the method); pick the right return type for a described
  result; return vs print (which is reusable); what a non-void method that forgets to return on some path
  does (compile error, named).
- **Problems (~12-15, full):** `Square`/`Cube` returning `int`; a method returning the larger of two
  arguments; a `bool`-returning `IsEven`; a `double`-returning average of two; a `string`-returning label;
  `Main` reads inputs, calls, prints the returned value; convert a printing method to a returning one; fix a
  missing-`return` bug. *(Skill = return a computed result; `Main` prints it. VERIFY expecteds via CLI.)*
- **Cheatsheet:** return type replaces `void`, `return value;` hands it back and ends the method, call as an
  expression (`int r = F(x);`), return-vs-print note.

## 6.4, Scope
- **One idea:** a variable lives only where it is declared; a method's locals and parameters are private to it.
- **Reading:** a local variable (declared inside a method) and a parameter exist only within that method and
  only while it runs; two methods may use the same local name without colliding; `Main`'s variables are not
  visible inside a helper (you must pass them in). **The by-value observable:** reassigning a parameter inside
  a method does not change the caller's variable (arguments are copied). Show a method that changes its
  parameter and a `Main` that prints the unchanged original. **No globals/fields** (OOP course).
- **Quiz:** where a local variable is visible; can two methods reuse a name; is a `Main` variable visible in a
  helper (no); what prints after a method reassigns its parameter (the caller's value is unchanged); what
  happens if you use a variable outside its method (compile error, named).
- **Problems (~10, moderate):** a helper with its own local, called from `Main`, each printing their own;
  two methods reusing the same local name; pass a value in and show the method cannot see `Main`'s other
  variables; the by-value demo (method reassigns a parameter, `Main` prints the original unchanged); fix a
  bug that uses a variable out of scope. *(Skill = reason about where names live. `Main` drives I/O.)*
- **Cheatsheet:** locals + parameters are private to their method, same name reusable across methods, pass
  values in (no shared globals), by-value (reassigning a parameter does not change the caller).

## 6.5, Overloading
- **One idea:** several methods can share a name if their parameter lists differ; C# picks by the arguments.
- **Reading:** overloading = same method name, different parameter lists (different count or types); the
  compiler chooses the matching overload from the arguments at the call site; `Add(int, int)` and
  `Add(int, int, int)`, or `Describe(int)` and `Describe(string)`. **OUT:** optional/default params, `params`,
  differing only by return type (not allowed). Why it is useful: one clear name for the same idea on different
  inputs.
- **Quiz:** what makes two methods valid overloads (different parameter lists); which overload a given call
  resolves to; is differing only by return type allowed (no); why overload instead of two names.
- **Problems (~10, moderate):** two `Add` overloads (two vs three ints), `Main` calls both; a `Max` overloaded
  for two vs three arguments; `Describe(int)` vs `Describe(string)` printing different things; pick-the-overload
  trace; add an overload to an existing method; fix a call that matches no overload. *(Skill = define and
  resolve overloads. `Main` drives the calls and prints.)*
- **Cheatsheet:** same name + different parameter lists = overloads, resolved by arguments, cannot differ by
  return type only, when to reach for it.

## 6.T, CHAPTER 6 TEST (region boss)
- **Integrative scenarios combining 6.1-6.5 (and Ch.1-5):** `Main` reads input and calls student-defined
  `static` methods (with parameters, returning values, sometimes overloaded) that use arithmetic, decisions,
  and loops inside their bodies, then prints the results. The "write your own verbs" region boss.
- Examples of pool scenarios: define and call a `void` helper a read number of times; a parameterised printer;
  a returning compute (`Square`, larger-of-two, `IsEven`, average) that `Main` prints; a method that loops
  internally (sum 1..n as a method); an overloaded `Add`/`Max`; a fix-the-broken (never called, missing
  `return`, wrong argument order, out-of-scope variable, call matches no overload).
- **Pool ~20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Inputs via stdin; each
  method is exercised with **varied arguments across cases** so a hardcoded single answer fails. All methods
  are `static` helpers; `Main` drives the I/O; expecteds via the oracle.
- **Workspace:** `cheatsheets/` folder = gathered sheets from 6.1-6.5 (plus Ch.1-5 as a library).

---

---

# CHAPTER 7, Arrays
*Region theme: the program stops juggling loose variables and starts holding many values in one named collection it can index and loop over.*
*Map: its own Bundesland (region title + province TBD when authored).*

> **Why this chapter exists / scope:** until now a program held one value per variable, and a loop could only
> accumulate into a single running total (sum, count, max), it could never keep all the values to revisit
> them. Chapter 7 introduces the array: a fixed-size, indexed collection of values of one type. It owns
> declaring and indexing arrays, iterating them (index-based `for` and `foreach`), the common operations
> (sum, max/min, count, search), arrays as method arguments (where the reference-type behaviour finally
> shows), and 2D arrays. Resting on everything in Ch.1-6: types, input, arithmetic, decisions, loops, and
> methods all operate on arrays now.

> **Chapter scope decisions (banked, read before authoring any Ch.7 section):**
> - **5 teaching sections + boss** (like Ch.4-6). Ordered so nothing is used before it is taught.
> - **Fixed-size arrays of one element type only** (`int[]`, `double[]`, `string[]`, `bool[]`). **OUT:**
>   `List<T>` and any resizable collection (that is Chapter 9); jagged arrays (`int[][]`); `Array`/LINQ
>   methods (`.Sort()`, `.Max()`, etc.), the point is to WRITE the loops, not call library shortcuts; arrays
>   of arrays beyond the one 2D section. Keep element types simple.
> - **The oracle is UNCHANGED (stdout-match).** The standard input shape is the **count-then-values pattern**
>   (read `n`, then read `n` values into `int[] a = new int[n]`), which the course already uses for loops;
>   now the values are kept in an array instead of folded into a running total. Anti-hardcoding is the same
>   varied-input rule: vary the array contents and length across cases (incl. **length 0** and **length 1**),
>   so a solution that assumes a fixed size or hardcodes an answer fails.
> - **Index-out-of-range is NAMED, not drilled.** Valid indices are `0` to `Length - 1`; going outside throws
>   `IndexOutOfRangeException` at run time. Name it (and the classic off-by-one, looping `<= Length`) in 7.1
>   and the error beats; **hidden cases never feed an input that forces an out-of-range access**, and every
>   committed solution stays in bounds.
> - **Arrays are REFERENCE TYPES, the key new observable (7.4).** Unlike an `int` passed by value (Ch.6.4),
>   passing an array to a method passes a reference to the same array: if the method changes an element, the
>   caller sees the change. This is the deliberate contrast with 6.4's by-value demo, and it is the reason
>   arrays-as-parameters was deferred from Ch.6 to here. Taught as one honest observable (a method that
>   doubles every element, `Main` prints the changed array). **Reassigning the parameter to a new array does
>   NOT affect the caller** (only element mutation does); name this subtlety lightly, do not rabbit-hole.
> - **`foreach` lands here (7.2), after the index-based `for`.** Teach `for (int i = 0; i < a.Length; i++)`
>   first (you need the index for many operations), then `foreach (int x in a)` as the cleaner read-only walk
>   when you only need each value and not its position. **`foreach` is read-only for this course:** you cannot
>   assign to the loop variable to change the array (name it; to modify elements, use an indexed `for`). The
>   filter/map *patterns* (reminder from the Ch.5 discussion) are named here as loop shapes only (select some,
>   transform each), NOT as LINQ.
> - **No jagged arrays, no resizing, no object element types.** 2D arrays (7.5) are rectangular `int[,]`
>   only, with `GetLength(0)`/`GetLength(1)` for the two dimensions; nested `for` walks rows then columns
>   (builds on Ch.5.4 nested loops). Keep it to 2 dimensions.
> - **Ordering:** 7.1 declare & index (+ `.Length`, bounds); 7.2 iterate (index `for`, then `foreach`); 7.3
>   common operations (sum/max/min/count/search over an array); 7.4 arrays & methods (pass in, the reference
>   observable, return an array); 7.5 multidimensional (`int[,]`, nested iteration).

## 7.1, Declaring and accessing arrays
- **One idea:** create a fixed-size collection of one type and read or write its elements by index.
- **Reading:** motivation first (standing style): show a handful of separate variables (`n1, n2, n3`) and the
  pain of adding a fourth, then the array as the fix, one name holding many values. `int[] a = new int[5];`
  (five slots, default 0); the literal form `int[] a = { 10, 20, 30 };`; indexing `a[0]` (zero-based),
  assigning `a[2] = 7;`; `a.Length`; valid indices are `0..Length-1`. Name `IndexOutOfRangeException` (going
  outside throws) without building a problem that throws.
- **Quiz:** what `new int[5]` makes; the index of the first/last element; what `a.Length` is; what happens if
  you read `a[a.Length]` (throws, named); default value of a fresh `int[]` slot.
- **Problems (~10, moderate):** make an array of a read size and print its length; set and print one element;
  build a 3-element array from reads and print a chosen index; fill via the literal form and print; read an
  index and print that element (in-bounds); fix an off-by-one that reads `a[Length]`. *(Skill = create, index,
  Length. Country-neutral.)*
- **Cheatsheet:** `new int[n]`, literal `{ ... }`, zero-based indexing, assign `a[i] = v`, `a.Length`,
  valid range `0..Length-1`, `IndexOutOfRangeException` (named).

## 7.2, Iterating over an array
- **One idea:** visit every element of an array with a loop.
- **Reading:** the index-based walk `for (int i = 0; i < a.Length; i++)` using `a[i]` (you need `i` when the
  position matters, or to write elements); then `foreach (int x in a)` as the cleaner read-only walk when you
  only need each value. The count-then-values input pattern (read `n`, fill `a`). **`foreach` is read-only**
  (assigning to the loop variable does not change the array; to modify, use the indexed `for`), name this.
  Filter/map named as loop shapes (print only the evens; print each doubled), NOT as library calls.
- **Quiz:** the right bound for the index loop (`< a.Length`, not `<=`); when to prefer `foreach` vs `for`;
  can `foreach` change the array (no); how many times the loop runs for a length-n array.
- **Problems (~12, full):** print each element on its own line (for); same with `foreach`; print with 1-based
  positions (needs the index); print only elements meeting a test (filter shape); print each element
  transformed (map shape); read n then n values and echo them; sum via a loop (bridge to 7.3); a length-0 case
  prints nothing; fix an off-by-one bound. *(Skill = walk an array both ways. Vary length incl. 0 and 1.)*
- **Cheatsheet:** `for (int i = 0; i < a.Length; i++)` with `a[i]`; `foreach (var x in a)` read-only;
  for-vs-foreach (need the index or not); filter/map as loop shapes.

## 7.3, Common array operations
- **One idea:** compute a result by looping over an array, sum, max/min, count, search.
- **Reading:** standard patterns, each a loop over the array: total (`sum += a[i]`), maximum/minimum (seed
  from `a[0]`, compare the rest), count-matching (how many meet a test), contains/search (is a target
  present; at what index), average (sum / length as a `double`). These reuse Ch.5 accumulator habits but now
  over stored values, so you can make more than one pass. **Empty-array care:** max/min/average need at least
  one element (state `n >= 1` or handle empty with a stated output), sum/count are fine at length 0.
- **Quiz:** how to seed a running max over an array; what the average divides by; what `count` starts at; what
  a search returns when the target is absent (a stated sentinel, e.g. -1).
- **Problems (~12-15, full):** sum of an array; average (double); max; min; count elements over a threshold;
  does the array contain a target (bool); index of the first match (or -1); how many are even; second pass
  (count values above the average); fix a max seeded at 0 (wrong for all-negative). *(Skill = the operation
  loops. VERIFY double/average expecteds via CLI. Seed max/min from a[0].)*
- **Cheatsheet:** sum, max/min (seed from `a[0]`), count-matching, contains/index-of (-1 if absent),
  average (`(double)sum / a.Length`), the empty-array caveat.

## 7.4, Arrays and methods
- **One idea:** pass an array to a method; because an array is a reference, the method can change its elements
  and the caller sees it.
- **Reading:** an array parameter `static void Double(int[] a)`; call `Double(nums)`; the method's `a` and the
  caller's `nums` refer to the **same** array, so mutating an element (`a[i] *= 2`) is visible after the call.
  **The deliberate contrast with 6.4:** a plain `int` is copied (caller unchanged), but an array is shared by
  reference (caller changed). Show both side by side. A method can also **return an array** it built
  (`static int[] Range(int n)`). **Light subtlety:** reassigning the parameter to a `new` array does not
  affect the caller (only element changes do); name it, do not drill. Methods that compute over an array
  (sum, max) take the array and return a value (ties to 7.3).
- **Quiz:** does changing an element inside a method affect the caller's array (yes); does it for a plain
  `int` (no); why the difference (reference vs value); what a method returning `int[]` hands back.
- **Problems (~12, full):** a method that doubles every element (caller sees it); a method that sums an array
  and returns the total; a method that returns the max; build-and-return an array (1..n); a method that fills
  an array with a read value; the value-vs-reference contrast (an `int` param unchanged, an array param
  changed); a method that counts matches; fix a method that was expected to change the array but reassigned
  the parameter instead. *(Skill = arrays across method boundaries; the reference observable. Main drives I/O.)*
- **Cheatsheet:** `int[]` parameter, arrays passed by reference (element changes are visible to the caller),
  `int` passed by value (not visible), returning an array, reassigning-the-parameter caveat.

## 7.5, Multidimensional arrays
- **One idea:** a rectangular 2D array, values addressed by row and column.
- **Reading:** `int[,] grid = new int[rows, cols];`; indexing `grid[r, c]`; `GetLength(0)` (rows) and
  `GetLength(1)` (cols); the literal form `{ {1,2}, {3,4} }`; nested `for` to walk rows then columns (builds
  on Ch.5.4). Reading values into a grid (row-major), summing a grid, printing it as a table (Write vs
  WriteLine, the 5.4 row-structure habit). **Kept to 2 dimensions**; rectangular only (no jagged).
- **Quiz:** what `new int[2,3]` makes; what `GetLength(0)` vs `GetLength(1)` gives; how many cells a
  `rows x cols` grid has; which loop (outer/inner) walks columns.
- **Problems (~10-12, moderate-full):** make a grid of a read size and print its dimensions; set and print one
  cell; read values row by row and echo the grid as a table; sum all cells; sum a given row; a multiplication
  grid (`grid[r,c] = (r+1)*(c+1)`); count cells meeting a test; fix a rows/cols (GetLength) mix-up. *(Skill =
  2D indexing + nested iteration. Vary both dimensions incl. a 1xk / kx1 edge. Strict output for tables.)*
- **Cheatsheet:** `new int[rows, cols]`, `grid[r, c]`, `GetLength(0)`/`GetLength(1)`, nested `for`
  (outer rows, inner cols), 2D literal, rectangular only.

## 7.T, CHAPTER 7 TEST (region boss)
- **Integrative scenarios combining 7.1-7.5 (and Ch.1-6):** read a count and values into an array, iterate it
  (`for`/`foreach`), compute operations (sum/max/min/count/search/average), pass arrays to `static` methods
  (the reference observable, returning arrays), and handle a small 2D grid. The "many values in one
  collection" region boss.
- Examples of pool scenarios: sum/average of a read array; max/min; count over a threshold; contains/index-of
  a target; print with 1-based positions or filtered/transformed; a method that doubles an array in place; a
  method that returns a built array; a 2D grid sum or row sum; a fix-the-broken (off-by-one `<= Length`, max
  seeded at 0, `foreach` expected to mutate, rows/cols swapped).
- **Pool ~20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Inputs via stdin; cases
  **vary array contents and length (incl. 0 and 1)** so a fixed-size or hardcoded answer fails. Every solution
  stays in bounds; expecteds via the oracle (verify any `double`/table output under invariant culture).
- **Workspace:** `cheatsheets/` folder = gathered sheets from 7.1-7.5 (plus Ch.1-6 as a library).

---

# CHAPTER 8, Strings in depth
*Region theme: text stops being an opaque blob you print and becomes something you can measure, search, pick apart, reshape, and rebuild.*
*Map: its own Bundesland (region title + province TBD when authored).*

> **Why this chapter exists / scope:** Chapter 2 used strings as whole values: read one, join a few with `+`,
> interpolate them into output, format a number. Chapter 8 goes inside the string. A `string` is a read-only
> sequence of `char`s with a `Length`, indexable like an array (`s[0]`), and carrying a toolbox of methods for
> searching (`Contains`, `IndexOf`, `StartsWith`), reshaping (`ToUpper`, `Trim`, `Replace`, `Substring`), and
> splitting/joining (`Split` to a `string[]`, `string.Join` back). It rests on Ch.7 directly: `Split` hands you
> an array, and walking a string by index is the array walk from 7.2 over `s.Length`. This is where a student
> starts doing real text work: validate, extract, transform, assemble.

> **Chapter scope decisions (banked, read before authoring any Ch.8 section):**
> - **6 teaching sections + boss.** Ordered so nothing is used before it is taught. (One more than the Ch.4-7
>   norm: 8.6 file I/O is the chapter capstone, it reads a real file and splits it into an array, pulling
>   8.1-8.5 and Ch.7 together.)
> - **Does NOT re-teach Ch.2.** Interpolation (`$"..."`), `+` joining for output, and `F2` number formatting
>   are assumed known and used freely. Ch.8 owns the *inside* of a string: indexing, `char`, length, the
>   search/reshape/split/join methods, and char-by-char building.
> - **Strings are IMMUTABLE, the key idea (8.1).** A `string` cannot be changed in place: `s[i] = 'x'` is a
>   **compile error** (CS0200, read-only indexer). Every method that "changes" a string (`ToUpper`, `Trim`,
>   `Replace`, `Substring`) **returns a new string**; the original is untouched. Name this early and lean on
>   it throughout (the recurring bug is calling `s.ToUpper()` and ignoring the return value). This is the
>   deliberate contrast with Ch.7's mutable arrays (`a[i] = v` works; `s[i] = c` does not).
> - **A `char` is its own type.** `s[i]` is a `char` (single quotes, `'a'`), not a one-letter `string`.
>   Printing a `char` prints the letter. Keep `char` work to: read it from `s[i]`, compare it (`== 'a'`),
>   and the simple built-in tests `char.IsDigit` / `char.IsLetter` / `char.ToUpper` as needed. **OUT:** `char`
>   arithmetic / ASCII codes / casting `char` to `int` (not drilled; mention at most once if at all).
> - **The oracle is UNCHANGED (stdout-match).** Input via stdin: read a line with `ReadLine` (it is already a
>   string, no parse), sometimes a count-then-lines shape for several strings, sometimes a string plus a
>   number. Anti-hardcoding is the same varied-input rule: vary the text (content, length, including the
>   **empty string** and single characters, mixed case, leading/trailing spaces) so a hardcoded answer fails.
> - **Index safety mirrors Ch.7.** Valid indices are `0..Length-1`; `s[s.Length]` throws
>   `IndexOutOfRangeException` at run time. `Substring` with a bad range throws `ArgumentOutOfRangeException`.
>   Name both; **hidden cases never force an out-of-range access**, and every committed solution stays in
>   bounds (callers compute lengths from the input).
> - **Culture caveat (authoring).** `ToUpper`/`ToLower` and comparisons are culture-sensitive in general; the
>   sandbox runs **invariant culture** (the runner forces it). Keep examples to plain ASCII letters/digits so
>   there is no culture surprise; author/verify expecteds under the invariant runner as always.
> - **Methods used, not reimplemented.** Use the built-in `string` methods (that is the skill). The ONE place
>   we write the loop by hand is 8.5 (char-by-char building/validation), which ties the chapter back to Ch.7
>   iteration. **OUT:** `StringBuilder`, regex, `Format`/composite format strings, spans, `TryParse`-style
>   robustness (named only), and anything culture-specific.
> - **File I/O (8.6) uses a PROVIDED, read-only file and keeps the oracle unchanged.** The deliberate 2016-era
>   teaching is `StreamReader` / `StreamWriter` wrapped in `using` (open, read/write in some unit, close, the
>   `using` is taught, not optional, because an undisposed stream is the classic locked-file/unflushed bug).
>   The modern one-call forms (`File.ReadAllLines` -> `string[]`, `File.ReadAllText`, `File.WriteAllText`) are
>   **named with an Output: block but NOT drilled**, and introduced with an explicit standing note: **the
>   durable knowledge is the mental model (open, read/write, close), not the exact method names, which are
>   always a lookup away.** Grading model (decided, FLAVOR A, keeps the stdin/stdout oracle one-shaped):
>   - A problem is given **one fixed, known, read-only input file** staged as a workspace asset (shown in the
>     top bar like a cheatsheet; fixed path e.g. `data.txt`, so no path is passed on stdin). The program reads
>     it and prints the answer to **stdout**; the oracle compares stdout exactly as for every other problem.
>     `problem.yaml`/`expected.json` are unchanged except that a problem declares the asset file to stage.
>   - **Writing is taught via write-then-read-back-to-stdout:** a `StreamWriter` problem writes a scratch file,
>     reopens it with `StreamReader`, and prints what it read, so a Run still produces visible stdout and the
>     grade stays stdout-only. **No file-content grading (Flavor B) anywhere**, the oracle never becomes
>     two-shaped, and Chapters 1-7 are untouched (only 8.6 problems opt into a staged asset).
>   - The only runner change is additive: stage the one declared asset file into the working dir before the
>     run. **OUT:** per-case input files, grading on a file's final contents, arbitrary paths, appending,
>     directories, `File.Exists`/deletion, streams over anything but the provided text file.
> - **Ordering:** 8.1 string as text (`Length`, `s[i]`, `char`, immutability); 8.2 searching (`Contains`,
>   `IndexOf`, `StartsWith`/`EndsWith`); 8.3 transforming (`ToUpper`/`ToLower`, `Trim`, `Replace`,
>   `Substring`, all returning new strings); 8.4 splitting & joining (`Split` -> `string[]`, `string.Join`,
>   building from pieces, ties to Ch.7); 8.5 building & parsing char by char (loop over `s.Length`, count /
>   validate / assemble); 8.6 file I/O (`StreamReader`/`StreamWriter` + `using` over a provided file; `File.*`
>   named; read a file and split it into an array, the chapter capstone).

## 8.1, A string is text you can measure and index
- **One idea:** a string is a read-only sequence of characters with a length, reachable by index.
- **Reading:** motivation first (standing style): you can already print and join strings, but you cannot yet
  ask "how long is it?" or "what is the third letter?". `s.Length`; indexing `s[0]` (zero-based, a `char`);
  the first/last char (`s[0]`, `s[s.Length - 1]`); `char` as its own type (`'a'`, single quotes), printing a
  char prints the letter. **Immutability:** `s[i] = 'x'` does not compile (CS0200), a string cannot be
  changed in place; methods that "change" it return a NEW string (preview of 8.3). Name
  `IndexOutOfRangeException` for `s[s.Length]` without building a throwing problem.
- **Quiz:** what `s.Length` gives; index of the first/last char; the type of `s[0]` (char, not string); what
  `s[i] = 'x'` does (compile error, immutable); what `s[s.Length]` does (throws, named).
- **Problems (~10, moderate):** print a string's length; print its first char; print its last char; print a
  char at a read index (in-bounds); print the first and last char on two lines; compare two chars from two
  strings; count is deferred to 8.5; fix an off-by-one that reads `s[Length]`. *(Skill = Length + index + char.
  Vary text incl. empty-adjacent and length 1. Country-neutral.)*
- **Cheatsheet:** `s.Length`; `s[i]` is a `char`; first `s[0]`, last `s[s.Length-1]`; `char` literals `'a'`;
  strings are immutable (`s[i] = c` is a compile error); valid range `0..Length-1`.

## 8.2, Searching inside a string
- **One idea:** ask whether and where a piece of text occurs in a string.
- **Reading:** `Contains("ab")` (is it present, a `bool`); `IndexOf("ab")` (0-based index of the first
  occurrence, or `-1` if absent, the same sentinel as 7.3 search); `StartsWith` / `EndsWith` (bool). All are
  read-only queries, they return an answer and leave the string unchanged. Case matters (plain ASCII; the
  invariant-culture note). `IndexOf` of a `char` also works.
- **Quiz:** what `Contains` returns (bool); what `IndexOf` returns when absent (-1); the difference between
  `Contains` and `IndexOf`; what `StartsWith`/`EndsWith` answer; is search case-sensitive (yes, here).
- **Problems (~12, full):** does a string contain a read substring (True/False); index of a read substring
  (or -1); does it start with a read prefix; does it end with a read suffix; is a char present; print the
  index of the first space; a yes/no on two conditions combined. *(Skill = the query methods + the -1
  sentinel. Vary present/absent/position incl. empty string.)*
- **Cheatsheet:** `Contains` (bool), `IndexOf` (index or -1), `StartsWith`/`EndsWith` (bool); search is
  case-sensitive here; -1 means not found.

## 8.3, Transforming a string
- **One idea:** produce a NEW string from an old one: case, trimming, replacing, slicing.
- **Reading:** the reshape methods, every one **returns a new string** (immutability from 8.1): `ToUpper()`,
  `ToLower()`, `Trim()` (strip leading/trailing whitespace), `Replace("a", "b")`, `Substring(start)` and
  `Substring(start, length)`. **The recurring bug:** calling `s.ToUpper()` and ignoring the result, the
  original is unchanged, you must use the returned value (`s = s.ToUpper();` or print it). `Substring` range
  must stay in bounds (name `ArgumentOutOfRangeException`); problems compute lengths from the input so they
  stay valid.
- **Quiz:** what `ToUpper` returns and whether `s` itself changes (new string; no); what `Trim` removes; what
  `Replace` does; what `Substring(2)` vs `Substring(1, 3)` gives; the bug of ignoring the return value.
- **Problems (~14, full):** upper-case a line; lower-case it; trim a padded line and print it (show the
  effect); replace one substring with another; first N chars (`Substring(0, n)`); from index i to the end
  (`Substring(i)`); chain two transforms (trim then upper); fix an ignored-return-value bug. *(Skill = the
  transform methods; everything returns new. Vary text incl. empty, spaces, mixed case.)*
- **Cheatsheet:** `ToUpper`/`ToLower`, `Trim`, `Replace(old,new)`, `Substring(start[,length])`, ALL return a
  new string (original unchanged); use the return value; `Substring` range must be in bounds.

## 8.4, Splitting and joining
- **One idea:** break a string into an array of pieces, and build one string from many pieces.
- **Reading:** `Split(' ')` (or another separator) returns a **`string[]`** (ties straight to Ch.7: you get an
  array you can `.Length`, index, and loop). `string.Join(", ", parts)` glues an array back into one string
  with a separator. The round trip: split, work on the pieces (count them, pick one, transform each), join
  back. Note each piece is itself a string (so 8.1-8.3 apply to it). Edge: splitting the empty string, and a
  trailing separator producing an empty piece (named, kept simple).
- **Quiz:** what `Split` returns (a `string[]`); how to get the number of pieces (`.Length`); what
  `string.Join` does; how to reach the first piece; split-then-join as a round trip.
- **Problems (~12, full):** split a space-separated line and print the count of words; print each word on its
  own line (split then loop, Ch.7 walk); print the first/last word; join a count-then-words input with commas
  (`string.Join`); split and print the Nth word (in-bounds); rejoin with a different separator. *(Skill =
  `Split` -> array -> loop, and `Join` back. Vary word counts incl. one word and empty.)*
- **Cheatsheet:** `s.Split(sep)` returns `string[]`; `arr.Length`, index, loop (Ch.7); `string.Join(sep, arr)`
  builds one string; each piece is a string.

## 8.5, Building and parsing character by character
- **One idea:** loop over a string's characters to count, validate, or assemble a result.
- **Reading:** the char walk is the Ch.7 array walk over `s.Length`: `for (int i = 0; i < s.Length; i++)` with
  `s[i]`, or `foreach (char c in s)`. Uses: count characters meeting a test (vowels, digits, a target char);
  validate (are all characters digits, using `char.IsDigit`); build a new string by concatenating chosen
  chars (`result = result + c;`, the honest build since strings are immutable, `StringBuilder` is out of
  scope). `char.IsDigit` / `char.IsLetter` / `char.ToUpper(c)` as the simple char tests. This is the one
  section where we write the loop rather than call a library method.
- **Quiz:** how to loop every char (`for` over `Length`, or `foreach`); what `char.IsDigit(c)` returns; how to
  build a string in a loop (concatenate onto a result, since strings are immutable); what `foreach (char c in
  s)` iterates.
- **Problems (~12, full):** count a given char in a string; count the vowels; count the digits
  (`char.IsDigit`); check whether every char is a digit (bool); reverse a string by building it char by char;
  keep only the letters (build a filtered string); upper-case via a built string (or just use `ToUpper`, as a
  compare); a length-0 string counts/builds to empty. *(Skill = char-by-char loop: count / validate / build.
  Vary text incl. empty and single char. Ties Ch.7 iteration to strings.)*
- **Cheatsheet:** loop chars with `for (i<s.Length)` + `s[i]` or `foreach (char c in s)`; `char.IsDigit` /
  `char.IsLetter` / `char.ToUpper`; build a string by `result = result + c;` (immutability); empty string ->
  empty result.

## 8.6, Reading and writing files
- **One idea:** read text from a file and write text to one, then treat the contents as the strings and arrays
  you already know.
- **Reading:** motivation first (standing style): every program so far got its text from `ReadLine` (stdin);
  real programs also read text that already lives in a file. Open a file with a `StreamReader`, read it a line
  at a time (`ReadLine()` until `null`) or all at once (`ReadToEnd()`); write with a `StreamWriter`
  (`WriteLine`). **`using` is taught, not optional:** `using (var reader = new StreamReader(path)) { ... }`
  (or `using var reader = ...;`) so the file is closed and flushed for you, an undisposed stream is the
  classic locked-file / unflushed-write bug. The payoff that pulls the chapter together: read the file, then
  `Split` the contents into a `string[]` and walk it with the Ch.7 array loop, apply 8.1-8.5 to each piece.
  **Then, briefly, the modern one-liners:** `File.ReadAllLines(path)` returns a `string[]` directly,
  `File.ReadAllText`, `File.WriteAllText`, shown with an Output: block, **no exercises**. Standing note made
  explicit to the student: **the lasting knowledge is the model (open, read or write in some unit, close),
  not the specific class or method names, those are always a lookup away; recognising the shape is what
  transfers.**
- **Execution model (decided):** the problem is given **one fixed, read-only input file** as a workspace asset
  (shown in the top bar like a cheatsheet, at a known path such as `data.txt`). The program reads that file
  and prints its answer to **stdout**; grading is the usual stdout match (Flavor A, oracle unchanged). Writing
  is practised with the **write-then-read-back-to-stdout** shape (write a scratch file with `StreamWriter`,
  reopen with `StreamReader`, print what was read) so a Run always shows output and the grade stays
  stdout-only. No grading on a file's final contents.
- **Quiz:** what a `StreamReader` does; why wrap it in `using` (closes/flushes; avoids a locked or unflushed
  file); what `ReadLine()` returns at end of file (`null`); what `File.ReadAllLines` returns (a `string[]`);
  T/F the specific method name matters more than the open/read/close model (false, the model is the point).
- **Problems (~10, moderate):** print the number of lines in the provided file; print the first line; print
  every line (read loop); print the file upper-cased line by line (ties 8.3); split a known line of the file
  into words and print the count (ties 8.4 + Ch.7); count the lines that contain a read word (ties 8.2); total
  the numbers on the file's lines (read + `int.Parse` per line, ties Ch.2/Ch.7); write-then-read-back a
  transformed copy and print it; a `File.ReadAllLines` variant is shown in the reading but NOT drilled; fix a
  bug: a `StreamReader` used without `using` / a read loop that never checks for `null`. *(Skill = open, read,
  close over a provided file; feed the contents into strings + arrays. Provided file staged as an asset;
  answers to stdout. Vary file contents across cases.)*
- **Cheatsheet:** `using (var r = new StreamReader(path)) { string line; while ((line = r.ReadLine()) != null)
  { ... } }`; `StreamWriter` + `WriteLine`; `using` closes/flushes; `File.ReadAllLines` -> `string[]`,
  `File.ReadAllText`, `File.WriteAllText` (one-call forms, named); the model (open/read-write/close) is the
  durable part, method names are a lookup.

## 8.T, CHAPTER 8 TEST (region boss)
- **Integrative scenarios combining 8.1-8.6 (and Ch.1-7):** measure and index a string (8.1), search it
  (8.2), transform it (8.3), split/join around an array (8.4), walk it char by char to count/validate/build
  (8.5), and read a provided file and process its contents (8.6). The "real text work" region boss.
- Examples of pool scenarios: length and first/last char; does it contain / start with a read piece; index of
  a substring (or -1); upper/lower/trim/replace a line (use the return value); first-N or from-index
  substring; split a sentence and count/print the words; join words with a separator; count a char or the
  vowels/digits; validate all-digits; reverse or filter a string by building it char by char; **read the
  provided file and count its lines / print a chosen line / split a line into words / total its numbers
  (8.6)**; a fix-the-broken (ignored return value, `s[i] = c` immutability error, off-by-one `s[Length]`, -1
  search mishandled, a `StreamReader` without `using` or a read loop that never checks `null`).
- **Pool ~20, draw 10, light at 6.** ~24h window; fresh draw on retry; no lockouts. Most problems take input
  via stdin (a line, or count-then-lines, or a string plus a number); the **file-I/O family instead reads one
  provided, read-only asset file** (staged like a cheatsheet, fixed path) and prints to stdout, grading stays
  the usual stdout match (Flavor A; no file-content grading). Cases **vary the text / file contents (content,
  length, empty, single char, mixed case, spaces)** so a hardcoded answer fails. Every solution stays in
  bounds; expecteds via the oracle (invariant culture).
- **Workspace:** `cheatsheets/` folder = gathered sheets from 8.1-8.6 (plus Ch.1-7 as a library).

---

## Notes for the rest of the course (placeholders, to be fleshed after Ch.1 is confirmed)
> *(Chapters renumbered after splitting the old Chapter 1 at 1.5: input/convert/format became **Chapter 2, Input & Interaction** (authored in detail above), so every downstream chapter shifted up by one. 9 chapters now map cleanly to Austria's 9 Bundesländer.)*

- Ch.8, Strings in depth (indexing, common `string` methods, building/parsing). *(Entry authored above.)*
- Ch.9, Built-in collections (`List<T>`: using it, not implementing it).
- **Course Exam**, whole-course integrative scenarios, pool, course-wide cheatsheet library.

*(These are the likely regions, listed so the whole territory is visible. They get the same section-level treatment as Ch.1/Ch.2 once the grain is approved.)*
