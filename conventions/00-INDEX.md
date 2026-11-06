# Conventions, standing rules to follow throughout

These are **operating rules**, not plans. Unlike `tasks/` (what to do) or `VISION.md` (why) or `tasks/70-architecture.md` (how it runs), these are disciplines to hold in mind on *every* commit and across the whole life of the project. Re-read before touching anything sensitive.

## Files
- `10-secrets-and-config.md`, **CRITICAL.** How secrets and per-environment config are handled. The monorepo makes committing a secret easy; a secret in git history is painful to remove. Get this right from commit #1.
- `20-writing-style.md`, standing prose rules for all words in the repo. **Headline: no em dashes, ever.** Applies to course content, UI copy, docs, and Kiro specs.

## The one-line creed
> The only thing a secret shares with the repo is its **name**. Its **value** lives outside git, swapped per environment, read through config so the code is environment-agnostic.
