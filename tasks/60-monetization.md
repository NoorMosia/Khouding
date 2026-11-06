# Monetization

> `(LATER)`. **The core learning experience is free for students, forever.** Revenue comes from
> someone *other than the student paying for the core*: institutions, companies, and people who
> opt into a paid human layer (bootcamp, tutoring). The platform builds the audience; the paid
> layers monetize those who need more. Still largely undesigned, see VISION "open threads".

## Principle, free for students, someone else pays
- [ ] 0.1 Never paywall lessons, quizzes, problems, or the map. Learning is free.
- [ ] 0.2 No ads, no selling student data (breaks the calm/craft brand + the generosity ethos, `quotes.md`).
- [ ] 0.3 The payer is an **institution**, a **company**, or a student **opting into human help**, never a
  student paying to access the core.

---

## 1. Self-serve platform `(CORE, this IS the product)`
- [ ] 1.1 Courses, quizzes, graded problems, progress, personal map. Free. (Covered by frontend/backend/content tasks.)

## 2. The institutional door = content quality `(NEXT, the primary non-student revenue)`
> The reframe: institutions don't buy analytics first, they buy **the thing that solves their actual
> pain, they can't get students to practice enough.** A lecturer has no time to author and grade 25
> problems per section, and can't make students do them. khouding already does both (rigorous reading,
> auto-graded quizzes, problems that actually run and grade, VISION §3). So the *content quality itself*
> is the sales door. This makes "depth is the brand" literally the revenue engine: the better the free
> course, the more institutions want it, and students still never pay.
- [ ] 2.1 Pitch to a department: "assign khouding as your practice layer; we'll show you who's doing it."
- [ ] 2.2 **Content quality is the hook**, reading + quizzes + graded practice solve "students don't practice enough".
- [ ] 2.3 **Participation overview is what they pay to keep** (VISION §8): roster progress, who's stuck,
  where people fall off, section/assignment grouping, export. The instructor/organizer lens, monetized.
- [ ] 2.4 Monetizes the vision's actual endgame, institutions follow their students in (VISION §2).
- [ ] 2.5 **Institutions get their own GROUP/COHORT name, not white-label.** A cohort is labelled as theirs
  ("UCT CompSci, C# Practice", the VISION §9b group entity having a name), but the **platform and content
  stay visibly khouding** (editor, problems, map, grading). This protects the moat: khouding stays the
  recognized platform + content owner, where the volume-of-problems value lives. **No full white-label**
  (khouding made invisible), not now, not even as a reserved enterprise tier. A big institutional name
  *renaming/overshadowing a course* is explicitly rejected (see §6.2), it would pull engagement off the
  content, which is the opposite of the goal.
- [ ] 2.6 **The paywall line is DATA VISIBILITY, not content** (zyBooks' proven hook, §7). The content +
  practice stay free for a class; what the institution pays for is the **instructor's participation
  overview** (who's practicing, who's stuck). Students are never blocked from learning; the instructor just
  can't *see the cohort's activity* until the cohort is paid/active. Values guardrail: **grading and any
  certificate stay free**, those are exactly what for-profit peers (Boot.dev gates grading, Codecademy
  gates certificates) paywall, so naming them off-limits now resists the future pressure to gate them (§7).

### 2a. Pricing shapes `(open, for brainstorm; no decision yet)`
> Lean candidate: **per-cohort, per-term, with a cohort size cap.** Others listed so the tradeoffs are on record.
- [ ] 2a.1 **Per-cohort + size cap (lean default).** Institution buys cohorts; each cohort has a student cap so a
  big class buys more. Pro: predictable price, maps to the group/cohort + registered-sprint entities. Con:
  cap tuning, too low feels nickel-and-dimey, too high underprices. Bill **per term** to match the academic calendar.
- [ ] 2a.2 **Per-enrolled-student, institution-invoiced** (zyBooks "equitable access", §7): billed per active
  student at term end, student free. Pro: scales with real usage, no artificial cap. Con: less budget-predictable; must meter "active".
- [ ] 2a.3 **Per-seat annual bulk license** (LeetCode enterprise shape, §7). Pro: simple, big-ticket, predictable. Con: over/under-buying; ignores term rhythm.
- [ ] 2a.4 **Site / department flat fee, unlimited students.** Pro: dead simple, maximizes adoption (more students = more engagement = the real goal). Con: captures less from the biggest customers.
- [ ] 2a.5 **Per-instructor seat** (students free + unlimited). Pro: tiny thing to meter; aligns with "instructor gets the visibility value". Con: a huge class under one instructor is underpriced.
- [ ] 2a.6 **Tiered by feature not headcount**, base practice cheap/free; deep analytics, Spaces, assessment mode, export are paid tiers. Pro: small groups get in cheap, depth is charged. Con: more surface to maintain/explain.
- [ ] 2a.7 **AVOID usage-based (per code-run) on the student side**, it taxes practice, the exact behavior we want (would price against VISION's free-practice goal). Only sane as an abuse backstop above a generous quota.

## 3. Shared-practice sprints `(NEXT, FREE, student engagement, feeds the institutional door)`
> Group coding = **shared, visible practice**, built on the stuck-problem share keystone (`50-community.md` §1).
> NOT live co-editing (that would reverse the stateless execution model, VISION §5). This is the async /
> turn-based, presence-driven flavor, "one capability exposed many ways" (VISION §10). It is **free** and
> its job is engagement: social pressure that drives practice, which is the exact outcome institutions buy (§2).
- [ ] 3.1 **Sprints**, opt-in, time-boxed cohort pushes through a section/chapter (event-shaped, not ambient, VISION §10).
- [ ] 3.2 Presence ("N people working on this section right now") as the shared-practice signal.
- [ ] 3.3 Built on the existing stuck-problem snapshot artifact, no new expensive infrastructure.
- [ ] 3.4 Strengthens §2: visible/social practice is what makes a cohort actually practice.

## 4. Bootcamp `(LATER)`
- [ ] 4.1 Structured, paid, cohort version of the same (free) content, sells **structure, deadlines,
  accountability, a cohort**, not the content.
- [ ] 4.2 **Khoudcamp (the house bootcamp) is run semi-independently**, also our **test bed / canary**:
  we dogfood our own product and flag problems early, before paying institutions hit them.
- [ ] 4.3 **Khoudcamp is INVISIBLE on khouding.** It does not appear on the map or anywhere on the
  platform; all its advertising happens **externally, in its own capacity**. This keeps khouding
  unambiguously neutral infrastructure (no "house bootcamp billboard" conflict), supersedes the old
  "Khoudcamp as a territory-holding group on the map" framing.
- [ ] 4.4 **But Khoudcamp students still get map/community engagement**, placed into cohorts under
  **neutral names unassociated with Khoudcamp** (not "Khoudcamp Cohort 3"). So camp students are full
  citizens of the map, while an outside observer can't tell which group is the house bootcamp. Khoudcamp
  *the business* stays invisible; its *students as individuals* participate under unassociated group names.
- [ ] 4.5 Open thread: structure, cohorts, deadlines, pricing.

### 4a. Live "Spaces", instructor-led rooms `(LATER, part of the bootcamp/cohort package)`
> The on-brand form of Twitter-style Spaces: **scheduled, moderated, event-shaped, gated to a paying
> cohort** (VISION §10 "opt-in, time-boxed, event not ambient"). This is the paid-layer home for live
> features, NOT a free-core, always-on, open-mic room (which would be off-brand + a live-voice
> moderation risk, and would force the live stateful layer VISION §5 deliberately avoids).
- [ ] 4a.1 **Audio Q&A, not video.** Instructor speaks to N listeners; students listen.
- [ ] 4a.2 **Raise hand** → instructor grants mic; student can speak when called on.
- [ ] 4a.3 **Instructor can view any student's code, read-only**, and choose whose code to show.
- [ ] 4a.4 Student code stays **read-only to the room** (no live co-editing).
- [ ] 4a.5 Instructor is the moderator by design; cohort-gated → neutralizes the open-mic trust problem.

#### Cost note (why this shape is cheap)
- **Audio-only is the big saving**, video is the expensive media stream; dropping it is the single
  biggest cost lever. Audio-only sits at the bottom of every vendor's pricing.
- **Read-only code viewing is nearly free**, it's **text** (the stuck-problem snapshot artifact, §10),
  a few KB over the data channel, NOT a second video/screen-share stream. Reuses infra we're already building.
- **Raise-hand + Q&A are text/state** (a queue, a flag), trivial, no media.
- The only real-time media cost is the **instructor's voice** (+ a student's when called on). Order-of-
  magnitude: a 60-min audio room with ~50 listeners is low single-digit dollars per session on managed
  real-time audio (LiveKit / Daily / Agora / 100ms tier); open-source LiveKit is self-hostable later
  (same hosted→self-host path as Judge0, VISION §5).
- **Honest caveat:** "cheap" is the *media* cost. The architectural cost (the live stateful layer §5
  avoided) and moderation cost are real, but acceptable here *because* the room is instructor-led,
  scheduled, cohort-gated, and moderated-by-design.
- [ ] 4a.6 Open thread: managed vs self-hosted audio; recording-for-review policy; minors in rooms (§90 content-safety).

## 5. 1-1 tutoring `(LATER, marketplace, not a core fee)`
- [ ] 5.1 Premium human layer, fed directly by the stuck-problem share (VISION §10/§11).
- [ ] 5.2 Platform stays free; monetize the **optional human-on-demand help** as a marketplace (take a cut),
  not as a gate to the course. Peer help stays free; paid tutoring is the opt-in upgrade.
- [ ] 5.3 Open thread: how tutors are assigned / matched.

---

## 6. Other free-for-student revenue (candidates, undesigned) `(LATER)`
- [ ] 6.1 **Hiring / talent channel**, opt-in pool of course-finishers / frontline members; companies pay
  to source. Student never pays and *gains* a job pipeline. Opt-in per VISION §10 privacy-default.
- [ ] 6.2 **Sponsorship, the football / shirt-sponsor model (subordinate, never renames the course).**
  The course is the star; a sponsor rides along as a **small, secondary mark** ("supported by X"), NOT
  "X's C# Course". A loud institutional/sponsor name on a course would **pull engagement away from the
  content**, and the content is the moat we want all the attention on, so the course brand is never
  surrendered or overshadowed. Independent, tasteful, secondary. Can attach to a seasonal territory
  campaign too (VISION §10). Revenue from sponsor, not learner.
- [ ] 6.3 **Grants / educational funding**, the African-access framing (`UXChanges.md` #3a) is genuinely
  fundable; non-dilutive, mission-aligned, student stays free.
- [ ] 6.4 **Patron / "support khouding" tier**, voluntary support, cosmetic-only perks (supporter's mark,
  founder's badge, ties to the tenure/founder's-mark honor in VISION §9b). Never a learning gate.
- [ ] 6.5 **Merch**, the `khouding` I-beam wordmark; marginal, harmless, on-brand.
- [ ] 6.6 **Content / engine licensing**, license the graded-problem engine or the problem bank to other
  edtech products or publishers. We own a hard-to-build asset (runs + grades); fits "neutral infrastructure". Undesigned.
- [ ] 6.7 **Employer-sponsored upskilling**, companies paying for *their own junior devs* to go through
  courses/bootcamp (B2B training budget). Distinct from the hiring channel (§6.1). Undesigned.
- [ ] 6.8 **Regional / PPP pricing on the paid layers**, purchasing-power-parity pricing for bootcamp/tutoring,
  given the Africa-first framing (`UXChanges.md` #3a). A pricing *strategy*, not a new stream. Widens reach.
- [x] 6.9 **Assessment / proctored testing, REJECTED on principle (a deliberate brand boundary).** We do
  NOT sell graded/proctored/credentialed assessment. There is no grade, no diploma, no credential, which is
  *why cheating is pointless* (VISION §10b): the only thing you build is the skill in your own head. Refusing
  this feature is itself part of the brand. **Note the distinction:** the existing **timing is a MAP mechanic,
  not an assessment one**, a time window governs whether an attempt **lights up the map** (keeping the map an
  honest reflection of ability), but it **never gates completion**. Go over the window and the attempt just
  doesn't light the region; you can still complete the task and learn it. Timing serves map-integrity, not grading.
- [ ] 6.10 **Certificate revenue**, raised and PARKED. Rubs against "the skill is the reward, not a
  checkmark" (VISION §10b). If ever done, a shareable keepsake, not a credential. Logged so it's a decision, not a gap.

### Avoid (conflicts with vision/ethos)
- Ads or selling student data · paywalling any lesson/problem/map · an in-platform **paid AI tutor**
  (directly forbidden, VISION §10b) · **paywalling grading or certificates** (the for-profit default, §7,
  explicitly refused here) · affiliate/referral spam (off-brand).

---

## 7. How comparable tools monetize (research, 2026), and what it implies
> Reference findings for the brainstorm. Each platform rephrased for licensing compliance; links are sources.

- **zyBooks, the closest commercial twin.** Interactive CS textbooks in ~1,800 institutions. Students in a
  class pay a discounted ~$69–90 (non-students ~$195, by approval); Ch.1 is free but **the instructor can't
  see a student's activity until they subscribe**, data visibility is the hook (→ our §2.6). Also offers
  "equitable/inclusive access": the **institution is invoiced per enrolled student, student accesses free**
  (→ our §2a.2). *Difference:* zyBooks still charges the student (lightly); our "never charge the student" is
  stricter and differentiating. [pricing](https://support.zybooks.com/hc/en-us/articles/360007441274-How-much-do-zyBooks-cost) · [equitable access](https://support.zybooks.com/hc/en-us/articles/360023611133-Using-zyBooks-with-Inclusive-Access-Equitable-Access)
- **LeetCode, freemium + institutional pipeline.** Free problem bank; Premium (~$35/mo, $159/yr) is a
  *convenience* filter, not a learning unlock. An unofficial analysis estimates ~$85M/2025 from bulk
  cohort/enterprise-education licenses across 500+ institutions (directional, not official). Validates the
  institutional path (§2). [premium is convenience](https://www.codeintuition.io/blogs/is-leetcode-premium-worth-it) · [institutional estimate](https://canvasbusinessmodel.com/products/leetcode-business-model-canvas)
- **Boot.dev, closest in spirit (gamified), gates the grading.** All content free to audit; you pay (~$399/yr)
  to **verify answers / use interactive grading**, non-payers go read-only. Note: the thing they paywall is
  exactly our free core. Tells us where paywall pressure will come from. [free to audit](https://www.boot.dev/blog/news/free-coding-courses-audit)
- **Codecademy, freemium + certificates + affiliates.** Free basic; paid tiers unlock projects, quizzes, and
  completion **certificates**; also runs affiliate links. Certificates-behind-paywall is the industry default
  (we refuse it, §6.10, Avoid). [pricing](https://codingphase.com/blog/is-codecademy-worth-it)
- **freeCodeCamp, pure donation/nonprofit.** 501(c)(3), funded by recurring small donations + corporate
  sponsorship/grants; everything free, no paid tier. Proof the donation+grant model *can* sustain a large free
  platform, but it's a nonprofit and leans on massive scale. A *later* lever for us, not early. [about](https://www.freecodecamp.org/news/about)
- **Exercism, the cautionary tale.** Free + open source, 2M users, publicly hit "no money in the bank" (2024),
  restructured onto grant funding. Founder's lesson: **free-for-everyone needs either user-as-product or
  significant donations/grants.** This is the evidence that our "someone else pays" framing isn't just nice,
  it's *necessary* for a free-to-learner platform. [the reckoning](https://exercism.org/blog/september-2024-restructure)

**The pattern:** every sustainable free-to-learner platform has an **external payer**, institutions (LeetCode,
zyBooks), donors+grants (freeCodeCamp, Exercism). The ones that charge the learner (Boot.dev, Codecademy) gate
**grading / projects / certificates**. khouding threads between: learner free like freeCodeCamp, monetized via
institutions/bootcamp/tutoring like the for-profits, without nonprofit status, ads, or selling user data, and
**without gating grading or certificates** (the guardrail in §2.6 / Avoid).
