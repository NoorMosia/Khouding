# Infra

> Minimal at first. Just enough to run the core; detail deferred to the architecture discussion.

## 1. Hosting `(NEXT, DEFERRED to deploy time; lean noted below)`

> **Status:** intentionally deferred. **Nothing in Phase-1 development depends on this**, dev is local (Compose Postgres, `dotnet run`, `npm run dev`, hosted Judge0). The choice only bites at deploy, is low-stakes and reversible (all options host standard containers + standard Postgres). The one input that actually decides it, **current pricing & free-tier limits, changes often, so verify it live when researching.** **Azure is ruled out** (not keen).

### The lean (a default to beat, not a commitment)
- **Consolidate on ONE solo-dev PaaS that hosts all three units + managed Postgres** → one dashboard, one bill, one mental model, git-push deploys, near-zero ops. Worth more than squeezing the last dollar across best-in-class vendors.
- **Candidates to research:** **Render** and **Railway** (both: static site + containers + managed Postgres in one place, built for exactly this solo-dev situation). *(Azure excluded by choice.)*
- **Managed Postgres, always, never self-run the DB.** It's the one stateful unit; losing it = losing student progress. If the chosen PaaS's own Postgres isn't ideal, dedicated managed options to look at: **Neon**, **Supabase** (both real Postgres, free tiers).

### Per-unit notes (all easy except the DB)
- [ ] 1.1 **Frontend** = static files after build → any static/CDN host (Render/Railway static, Cloudflare Pages, Netlify). Near-zero cost/ops, essentially unlosable.
- [ ] 1.2 **Backend/API + execution adapter** = ASP.NET Core containers, stateless → managed container host (Render/Railway). Scale later by adding instances.
- [ ] 1.3 **Database** = managed Postgres (see above). The only unit that needs real care (persistence + backups).

### Research checklist (do when there's time)
- [ ] Current free-tier limits & paid pricing for Render vs Railway (compute, Postgres size, bandwidth, sleep/idle behavior on free tiers).
- [ ] Does the free/cheap tier keep a container warm enough (cold starts hurt the already-latency-sensitive submit→poll flow)?
- [ ] Managed Postgres backup/restore story on the chosen platform.
- [ ] Custom domain (khouding.com) + TLS setup on the chosen platform.

## 2. Execution infra `(NEXT / LATER)`
- [ ] 2.1 Phase 1: none of our own, use hosted Judge0.
- [ ] 2.2 Phase 2: self-hosted Judge0 on **separate infrastructure** from the DB/app (see `20-backend.md` §6).

## 3. Later `(LATER)`
- [ ] 3.1 Scaling execution for classroom-sized bursts.
- [ ] 3.2 Backups, monitoring, cost tracking.
