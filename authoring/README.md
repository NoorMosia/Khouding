# authoring, the oracle CLI

The little tool the Authoring Guide (§6) and architecture (`tasks/70-architecture.md` §4, the
**Authoring** row) say to build *before* heavy authoring. It enforces the project's hardest content
rule by construction:

> **A human never types an expected output.** You write the problem and the reference solution; the
> CLI *runs* the solution to produce the expecteds.

This is the **Authoring** concern of the "B+C blend" (architecture §4). It needs a local toolchain
(`dotnet` now; `javac`/`python`/`g++` later). The build/ingest step does **not**, it just trusts the
committed, generated files this tool writes.

## Windows: turn OFF Smart App Control (required for local authoring)

If you see `gen`/`check` fail intermittently with

```
System.IO.FileLoadException: ... An Application Control policy has blocked this file. (0x800711C7)
```

that is **Windows Smart App Control (SAC)** blocking the freshly built, unsigned solution binary. It is a
machine policy, not a content problem (the affected problem passes fine when run alone; the failure lands
on a different, random problem each full run). SAC has **no per-app allowlist**, so the only reliable fix
is to turn it off:

> Settings > Privacy & Security > Windows Security > App & Browser control > Smart App Control > **Off**

(SAC cannot be re-enabled without resetting Windows, by design. It is off by default on most upgraded
Windows 11 installs; this only bites on some fresh installs.) The CLI runs solutions via `dotnet run`,
which trips SAC less often, but does not fully avoid it. CI or any machine without SAC is unaffected.

## What it does

Given a problem folder (a `problem.yaml` + `solution.<lang>`):

1. compiles the solution once with the native toolchain,
2. runs it against every case's `stdin`,
3. writes the generated expecteds to two committed files next to the content:
   - **`expected.json`**, the machine artifact the ingester trusts (inputs + oracle expecteds).
   - **`tests.md`**, the regenerated human mirror (a readable table; not parsed).

`problem.yaml` stays **inputs only**, it must not contain an `expected` value, and the tool refuses to
run if it does. That is the oracle rule, enforced mechanically.

### Grading semantics
Matches the platform contract (architecture §5): expecteds are compared **byte-exact** except that line
endings are normalized (`\r\n` → `\n`), an OS artifact rather than a student skill. The generated
expecteds are stored LF-normalized so a Windows authoring machine and a Linux sandbox agree.

## Commands

```powershell
npm install            # once (one dependency: yaml)

# generate / refresh expecteds (expected.json + tests.md)
node kh.mjs gen   ../courses/csharp-basics/sections/1.3-number-variables
node kh.mjs gen   ../courses/csharp-basics/sections/1.3-number-variables/problems/p01-declare-an-int
node kh.mjs gen                      # defaults to ../courses (everything)

# drift guard (the CI pattern): re-run solutions, FAIL (exit 1) if committed
# expecteds have drifted or are missing
node kh.mjs check
```

`gen` and `check` accept a path to a single problem, a section, a course, or nothing (all courses).

## Why committed, generated expecteds
They show up in **git diffs**, if editing a solution silently changes its outputs, the diff screams.
`check` is the automated version of that safety net: run it in CI to catch "edited a solution, forgot to
regenerate." (architecture §4, "Verifying" row.)

## Adding a language later
Languages are **recipes** in `runners.mjs` (mirroring the execution adapter's shape). Add a runner with
`prepare` / `run` / `cleanup`, register it, and the same `problem.yaml` `cases` (authored once) run
through the new language's oracle to produce that language's expecteds.

## Files
- `kh.mjs`, the CLI (discovery, oracle generation, writers, `gen` / `check`).
- `runners.mjs`, language runners (C# now; Java/Python/C++ slot in here).
- `package.json`, one dependency (`yaml`).
