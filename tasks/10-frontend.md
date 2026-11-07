# Frontend

> Prototype the **shapes and flows** first (placeholder content). Focus the three risk-carrying screens: coding platform, section flow, personal course map.

## 1. Coding platform (the heart) `(CORE)`
> Everyone's seen a course page; far fewer have nailed "mini VS Code that grades you." If this doesn't feel right, nothing else matters.
- [ ] 1.1 Code editor (Monaco, the editor that powers VS Code). No extensions.
- [ ] 1.2 Multi-file tabs for the **pre-seeded workspace** (e.g. header / impl / main).
- [ ] 1.3 Problem statement placement relative to the editor.
- [ ] 1.4 Run / Submit buttons.
- [ ] 1.5 **Inline output pane**, styled, shows compile errors + stdout/stderr. Display only.
- [ ] 1.6 **Popup "terminal"** = just a bigger, cleaner styled output pane. NO interactive terminal anywhere.
- [ ] 1.7 Pass/fail result display after submit.

## 2. Section flow (the pedagogical loop) `(CORE)`
- [ ] 2.1 Reading / explanation view.
- [ ] 2.2 Quiz view: true/false, multiple choice, fill-in-the-blank (auto-graded).
- [ ] 2.3 Problem list for the section (lots of problems).
- [ ] 2.4 How "section complete" is shown; moving reading → quiz → problems.

## 3. Personal course map `(CORE / NEXT)`
> Signature visual identity. See it real to know if the GoT-map idea sings.
- [ ] 3.1 GoT-style map of ONE course: chapters = regions, sections = landmarks.
- [ ] 3.2 Fills in / greens up with progress; unexplored areas faded.
- [ ] 3.3 **Earns its keep as navigation**, click a region → jump there.
- [ ] 3.4 Honestly reflects progress.
- [ ] 3.5 (This is the PERSONAL map only, the community world map is LATER, see `50-community.md`.)

## 4. General pages `(NEXT)`
- [ ] 4.1 Landing / marketing page carrying the "Learn to code like it's 2016" attitude.
- [ ] 4.2 **Course catalog / "My courses"** — shows ALL courses, published and planned. Published = full card with progress; planned = placeholder card (fog-style map, title, "coming soon", optional "notify me"). Requires `status` field in `course.yaml`. Signals a real curriculum path, not a one-off.
- [ ] 4.3 Login / signup screens.
- [ ] 4.4 User profile.

## 5. Shared-content rendering (safety) `(NEXT)`
> Flagged in the vision's security section, NOT automatic.
- [ ] 5.1 Treat program output + anything a student typed as **untrusted text**.
- [ ] 5.2 Render shared code/output safely (guard against output that runs as script in another student's browser).

## 6. Stack decisions `(NEXT)`
- [ ] 6.1 Start lightweight: static or lightly-clickable mockups to iterate on *feel* in minutes.
- [ ] 6.2 Graduate a layout to the real framework only once it feels right.
- [ ] 6.3 Pick the framework (deferred to the architecture discussion).
