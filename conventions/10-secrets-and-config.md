# Secrets & config, CRITICAL standing rule

> **Why this is its own doc:** this is an ongoing *discipline*, not a one-time decision. The monorepo makes the classic mistake (committing a secret) easy, and a secret committed to git history means rotating **every** credential. Establish the habit from commit #1.

## The creed
**The only thing a secret shares with the repo is its NAME. Its VALUE lives outside git, swapped per environment, read through config so the code is environment-agnostic.**

A setting read as a `.NET` User Secret locally and as an environment variable in prod is read by the *same code*, the code never knows or cares where the value came from.

---

## The secrets inventory (never commit the values)
| Secret | Used by | Notes |
|---|---|---|
| Postgres connection string | backend, execution service | contains the DB password |
| Judge0 URL + API key | execution adapter | the key is secret (hosted phase) |
| Google OAuth client ID + secret | backend (auth) | **separate app for local vs prod** |
| GitHub OAuth client ID + secret | backend (auth) | **separate app for local vs prod** |
| *(later)* email sender, storage, etc. | backend | add here as they appear |

---

## Where values live

### Local development
- **Backend + execution service (.NET): use .NET User Secrets.**
  - Built-in ASP.NET Core feature. Stores dev secrets in a file **outside the project folder** (in your user profile) → physically impossible to commit because it isn't in the repo tree.
  - Referenced in code exactly like normal config.
- **Frontend (Vite): a `.gitignore`'d `.env.local`.**
  - Holds only **non-secret** config (e.g. API base URL). **Anything the frontend can see, the whole world can see**, real secrets never reach the browser.

### Production
- **Environment variables**, injected by the host (see `tasks/40-infra.md` / architecture §8.3 when hosting is chosen).
- ASP.NET Core reads env vars as config automatically, **same code** as local, no change.

---

## What you DO commit (structure, not secrets)
- `appsettings.json`, structure + **non-sensitive** defaults (ports, feature flags, setting *names*).
- An `appsettings.Example.json` (or documented key list), shows *which* secrets exist, **by key name only**, so a new environment / future-you knows what to provide. Reference secrets by name, never value.
- A strong **`.gitignore` from commit #1**: `.env*`, `appsettings.*.local.json`, any local secret files.

---

## OAuth: separate apps per environment
Register **two** Google apps and **two** GitHub apps (local + prod). This is just how OAuth works, localhost callback URLs won't work in prod and vice versa. Different client IDs/secrets, different callback URLs. Flag it so it's never a surprise.

---

## Guards (cheap insurance)
- **`.gitignore` first**, before any secret exists on disk.
- **Optional CI check**: fail the build if a file matching known-secret patterns is staged. Belt-and-suspenders against the monorepo footgun.

---

## Checklist before committing anything sensitive
- [ ] Is this value a secret? → it goes in User Secrets (local) / env var (prod), **never** a committed file.
- [ ] Is a new secret being introduced? → add its **name** to the inventory above and to `appsettings.Example.json`.
- [ ] Did I accidentally stage a `.env*` / local settings file? → `.gitignore` should stop it; double-check.
- [ ] Frontend change: am I about to expose a secret to the browser? → if the browser can read it, it's public. Don't.
