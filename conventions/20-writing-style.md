# Writing style, standing rules for all prose

Applies to **everything with words**: course content (readings, quizzes, cheatsheets, problem
statements), UI copy, docs, specs, and commit messages.

## Punctuation

### No em dashes. Ever. (non-negotiable)
- The em dash character (U+2014) is **banned** everywhere in the repo.
- Rewrite instead: use a comma, a colon, parentheses, or split into two sentences.
- **En dashes (`–`, U+2013) are allowed only for numeric ranges** (e.g. `5–15`, `1.1–1.5`). Nowhere else.
- **Catch before commit:** grep the repo for the em dash character and fix any strays. A byte-accurate
  check is `E2 80 94` in UTF-8. (One-time purge of 829 occurrences was done; keep it at zero.)

## Course-content style (see `courses/AUTHORING-GUIDE.md` for the full set)
- **Readings:** plain and concrete; one idea; anchor on something the student can see (e.g. output).
  No forced analogies.
- **Problem statements:** terse. Minimum words to state the task unambiguously. For output problems,
  prefer *"Print exactly this:"* + the literal block. The only extra words allowed are precision the
  strict grader needs ("no trailing newline", "a tab, not spaces").

## For Kiro specs / development
When writing a spec (requirements / design / tasks) or any generated doc, the rules above apply to the
spec text itself. **No em dashes in spec documents.** If you are an agent generating a spec, self-check
for the em dash character before finishing.
