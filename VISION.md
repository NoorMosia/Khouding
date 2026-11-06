# khouding.com, Vision

**Slogan:** *Learn to code like it's 2016.*

A platform where self-teaching programmers learn to a university standard, by working through courses structured like real textbooks, with a built-in coding environment that grades their work the way a professor would.

---

## 1. The core thesis

Every free resource online teaches you syntax. None of them hold you to a standard.
- YouTube can't tell you your solution is wrong.
- A textbook can't run your code.
- A bootcamp costs a fortune and babysits you.

khouding sits in the empty middle: the **rigor and completeness of a university course**, the **hands-on grading of a real IDE**, the **price and pace of self-teaching**.

"Learn to code like it's 2016" is the attitude: no AI writing it for you, no shortcuts, you actually learn the craft. The product must *feel* rigorous and craft-focused, not nostalgic kitsch.

**Guiding principle:** one course, done so well it proves the whole thesis. Depth is the brand. A single shallow course undermines the entire "university standard" promise.

---

## 2. Audience

**Primary:** the individual self-teacher / university student whose actual course is badly taught and who wants something better. Motivated, specific, reachable.

The audience is a **sequence, not three separate targets**:
1. **Win individual students first.** The product is genuinely better than what their course gives them.
2. **Communities form naturally** as students cluster by institution around shared courses.
3. **Institutions (schools, bootcamps) adopt top-down** once a critical mass of their students already use and love it. Institutions follow their students, not the other way around.

Strategic read: **obsess over the individual student.** Let community form around shared courses. Let students drag the institutions in. Don't chase the institutional sale first, it's longer, harder, and pulls the product toward admin features before the core learning experience is proven.

---

## 3. The product spine, a textbook made executable

A **course** is a structured tree:

```
Course → Chapter → Section → (reading, quiz, problems)
```

The **section is the atomic unit**, it's what has a quiz, holds the problems, gets completed, shows on the map, and anchors community.

Each section has:
- **Reading / explanation** (original, see copyright notes).
- **Knowledge check:** true/false, multiple choice, fill-in-the-blank. Auto-graded, trivial.
- **Practice problems, lots of them.** The real meat.

### The signature move: pre-seeded multi-file workspaces
Problems aren't blank-file toys. For a topic like "Classes," the workspace is pre-seeded with multiple real files (e.g. a header, an implementation file, a `main`). The student fills in the implementation, then runs or submits. This mirrors how real code is actually organized and is what makes it feel like real work.

### Grading
- Quizzes: auto-graded.
- Coding problems: **author writes the tests.** Support two shapes from day one:
  - "match this output" (given stdin → expected stdout), and
  - "pass these unit tests" (a real test harness compiled alongside the student's code, needed for "implement this class/method" problems).

### Pedagogical format
Follow the **Tony Gaddis style** as a unifying spine across all language courses: concept → worked example → checkpoint question → lots of practice. Consistency is itself a feature, finishing the C# course tells you exactly how the Java course will feel. Gaddis has books across C#, Java, Python, and C++ (the exact lineup), so the model holds the whole way. Adapt as reasons emerge.

---

## 4. Languages (in order)

1. **C#** (first, huge at university, underserved by online platforms, clear "made for my course" feeling)
2. **Java** (second)
3. **C++** (third, gnarliest toolchain, tackled once the platform is proven)
4. **Python** also clearly in the mix (first-year staple)

Technical luck: C#, Java, and Python are all **easier to sandbox** than C++ (managed runtimes / interpreted). The preference order happens to match the difficulty order. The execution engine is the **same shape** for every language, only the toolchain inside the sandbox changes. Build the engine once, add languages as "recipes."

---

## 5. Code execution

**Model:** one-shot, stateless, sandboxed runs. Student hits "run" → spin up a short-lived sandbox → compile → run → stream output back → tear down. Near-zero cost when idle, scales naturally. For discrete learning problems this is both cheaper *and* the right model.

Programs that read input: the student (or problem author) supplies input upfront → fed to stdin → result shown. Covers virtually all first/second-year coursework.

### Terminal UI
- **Inline output pane:** styled, shows compile errors + program stdout/stderr. Display only.
- **Popup "terminal":** just a bigger, cleaner styled output pane. **No interactive terminal anywhere.** This deliberately dodges the hardest part of the system (live bidirectional sessions).

### Engine: Judge0
- Open-source, free to **self-host** (GPL; pay only for the server it runs on).
- Public **hosted API** is freemium (rate-limited free tier, good for prototyping).
- Supports C#, Java, C++, Python out of the box.

**Migration path:** prototype against the hosted API (free tier) → build own infra in parallel → move to self-hosted. The goal is for it to genuinely be *mine*.

**This is NOT a big rewrite** *if* built right: hosted and self-hosted Judge0 speak the **same HTTP JSON API**. Put a **thin wrapper / adapter** in the middle, the single module in the whole app that knows Judge0 exists. The app says "run this code, here are the files, here's the input" to *my own* execution service. Switching from hosted to self-hosted = changing a URL in config. Caveat: stick to the core "run code → get result" surface; don't lean on vendor-specific extras.

---

## 6. Security

The execution layer and the data layer are **two separate worlds** connected only by the thin API wrapper. Student code lives in World A (the sandbox); users + database live in World B (the backend). Only "code in / output out" text passes between them.

- **Hosted API:** untrusted code runs on *their* servers, nowhere near our data. A security argument *for* starting hosted.
- **Self-hosted:** safe if deployed sanely,
  - Run Judge0 on **separate infrastructure** from the database/app. No credentials, no connection string, no network path to anything sensitive. If code "escapes," it lands in an empty room with no doors.
  - **Disable network access** inside the sandbox.
  - **Keep resource limits** (time, memory, processes) on. Judge0 uses a battle-tested isolation layer (Isolate) and does this by default.

**The real risk in our design is output, not input.** Program output and anything a student typed is **untrusted text**. When displaying shared code/output to other students, render it safely (guard against a student whose "output" is script that runs in another student's browser). This matters specifically because of the community sharing features.

> Security notes are engineering guidance, not a guarantee. Not legal advice.

---

## 7. Copyright (Gaddis format)

Copyright protects **expression**, not **ideas, facts, or methods**.

**Cannot copy (expression):** his words, images/diagrams/figures/tables, his specific exercises and their wording, distinctive creative choices (a memorable running example, invented scenarios, exact mnemonic phrasing).

**Can freely use (ideas / facts / method):** how the language works (facts), the general pedagogical sequence (variables → loops → functions → classes is a near-universal method), the general format (concept → example → checkpoint → practice).

**The danger line:** mirroring his *specific, idiosyncratic* chapter/section breakdown so closely that the table of contents is recognizably a copy.

**Safe path (already the plan):**
- Use the format as *inspiration for style*, not a template to replicate.
- Build the table of contents **from the logic of the language itself**, arrived at independently. Overlap is fine and expected.
- Write every word, problem, and example originally (AI-assisted is fine if original).
- Don't use his name/title in a way implying affiliation/endorsement.
- Consult a real IP lawyer before money's involved, cheap insurance.

> Not legal advice.

---

## 8. Progress tracking

Self-paced, **nothing locked**. But make it easy to see what's done and what's left.

**Two dimensions:**

1. **Rollup**, progress exists at every tree level and aggregates upward:
   - Section: reading read, quiz passed, X of Y problems solved.
   - Chapter: overview summing its sections.
   - Course: one headline state.

2. **Audience / lens**, same underlying data, two readers:
   - **Student** looking at themselves: "where am I, what's left, what's my footprint."
   - **Instructor / organizer** looking at a group: "how's the cohort doing, who's stuck, where do people fall off." This **participation overview is the hook that gets institutions in the door**, not a nice-to-have.

---

## 9. The maps, signature visual identity

**There are TWO distinct maps that share a visual language. Keep them separate.**

| | **Course map** | **Community world** |
|---|---|---|
| About | One student's progress through **one course** | Where **groups** stand among each other |
| Scope | Personal | Collective / social |
| Regions | Chapters | Khommunities / institutions |
| Landmarks | Sections | (groups, territories) |
| You fill it by | **Learning** the material | **Participating** as a group |
| There's one per | Course, per student (their own) | The whole platform (shared) |

### 9a. The course map (personal)
A **Game-of-Thrones-style map** of one course, rendered as a **real country's provinces** (real geodata, not a drawn fantasy map). **One real country per course**, chapters are its provinces/regions, sections are landmarks/pins within them. Completing things fills it in, the fuller/greener/less-grey, the more fulfilling. Turns "47% complete" into a *place you're exploring*. Finishing a course means you explored that country; the next course is a different country, its own world.
- **C# Basics = Austria** (9 Bundesländer; Ch.1 "The Foundations" = Oberösterreich). *(Design + build in UI session; see `tasks/70-architecture.md` §5 "Map metadata" and `UXChanges.md` §7.)*
- Must **earn its keep as navigation** (click a region → jump there), not just decoration. *(Note: a region reading as "fog"/unexplored must still be navigable, nothing is locked, per §8.)*
- Must **honestly reflect progress.**
- Ships as inline SVG (province paths precomputed build-time); dark = night sea, light = parchment.
- The kind of thing people screenshot and share. *(Shareable map image / "celebration, not credential" certificate is a logged later idea, `UXChanges.md` §7b.)*
- Simpler and purely personal. All the group/territory/competition stuff below belongs to the *community world*, NOT here. **African geography is reserved for the community world, not course maps.**

### 9b. The community world (collective)
The social territory where khommunities exist, hold ground, and have standing relative to each other. Everything from here down in this section lives on the community world.

#### Nested territories (fractal map, north star)
Students nest inside progressively larger groups, each able to hold territory and compete:

```
Student → Department/Faculty (CompSci, Eng, BCS, BCom) → University → City → Country
```

Same progress data, viewed at different altitudes. Zoom the lens from "my department vs the rival faculty down the hall" out to "our country globally."

**Why it's powerful:** it solves the hardest community problem, giving everyone a group *small enough to matter to them*. There's always a level where you matter and a level to aspire to. Small-group rivalry (department vs department at the same school, physically near each other) is the most emotionally potent. Big levels (city, country) give occasional epic, seasonal flavor.

**Growth loop:** recruiting tightens to "get more people from my specific department," and stacks all the way up. Every level has a reason to pull more people in.

#### Groups are a general concept
"University" is just one example. The real concept is an **organization / cohort** that students belong to and that can hold territory:
- University (and its departments)
- **Bootcamp**, can nest like an institution **or** stand as its own independent territory-holding entity
- Later: companies training devs, coding clubs, khommunity meetup groups, a country's unaffiliated self-learners

Don't hard-code "university." Model a **group entity**; treat university/department/bootcamp as *types*.

**Our own bootcamp (Khoudcamp) is a special case, NOT a visible group on the map.** An earlier framing had Khoudcamp as a territory-holding group that doubled as a marketing surface. That is **retracted** (see `tasks/60-monetization.md` §4): Khoudcamp is run semi-independently, is **invisible on khouding**, and advertises **externally in its own capacity**, so the platform reads as neutral infrastructure, not a billboard for the house bootcamp. Khoudcamp *students* still get full map/community engagement, but placed into cohorts under **neutral names unassociated with Khoudcamp** (the business stays invisible; its students participate as individuals). The general group-entity model above is unchanged, it's only *our own* bootcamp's on-map visibility that's deliberately suppressed.

**Design note (for later):** fairness across wildly different group sizes is the whole challenge. Compare **within a tier** by *intensity* (progress per active member, participation rate, campaign performance), not raw headcount, so a small dedicated group can out-punch a bigger lazy one.

**Status:** north-star. Needs real density across institutions to mean anything. Early version = personal progress + maybe a single "your university" layer. The full fractal is where it's heading, not where it starts.

#### The world grows as communities emerge
The map is **not a fixed board to fill**, it's a world that **grows as communities form**. A new khommunity springs up → a new region appears. This solves the "empty map is sad" problem: the map is never empty, it's always exactly as full as the real community is. It becomes a living record of the platform's growth, a story of who's here.

Reframe: the territory *is* the community. The map literally is the shape of who shows up. (Design challenge for later: a map that grows arbitrarily must stay coherent/readable rather than sprawling, a solvable layout problem, and a far nicer one than an empty board.)

#### Four independent axes, keep them separate
1. **Headcount badge = belonging/encouragement.** "We're 300 strong" is a flag to rally under. Motivating, makes a group feel alive. **Display it proudly, keep it OUT of the score math.**
2. **Score = intensity, not size.** Participation/progress-based, so a small dedicated group can still win territory.
3. **Tenure = recognition for pioneers.** Early communities get **recognition (prestige, place, a founder's mark), not permanent competitive power**, so loyalty is honored without making the map feel rigged against newcomers.
   - **The refinement: honour that is sticky but earned.** Not permanent-and-free (a trophy you keep while doing nothing, unfair to active newcomers) and not easy-to-lose (punishes the pioneers). The sweet spot: **hard to lose, but requires continued presence to keep.** A founding community that stays active keeps its honour almost indefinitely (sticky, forgiving, you'd have to really go dormant to lose it); one that vanishes entirely eventually yields it. Rewards *loyalty that's still alive*, not *loyalty that once existed*, honors pioneers without creating dead monuments, and quietly keeps veterans engaged.
   - Seeds for what "favourable" could mean: *prestige of place* (founders hold central/iconic regions; later arrivals settle around them); *a founder's mark* (a badge/title/visual flourish about *when*, not *size*); *a head start that decays fairly* (no permanent power lockout for year-three joiners).
4. **Frontline = the individual honor roll within a group.** A community isn't an anonymous blob, it has a *face*: its **frontline warriors**, the standout members ranked by contribution (consistent progress, consistent participation, and *especially* consistent helping). Makes a group feel like a group of *people* and gives individuals a concrete reason to contribute: earn your place on the frontline. See §10 for how badges flow between group and member.

Same principle each time: honor the thing (size, loyalty, individual contribution) without letting it distort the actual competition.

---

## 10. Community (khommunities)

**One capability, exposed many ways.** Every community feature is a variation of a single primitive: **make the solitary act of learning visible and shared**, take something private (progress, location in the course, a stuck problem, the code) and make it visible to others.

Features:
- Students sharing progress.
- Students helping each other.
- Students doing the same section at the same time (presence: "12 people are working on this section right now").
- Students competing.
- **Students sharing the problem they're stuck on, with the code they've already written, shared on the platform.**

### The keystone: the stuck-problem share
Build this **first**. Why it's special:
- **Highest emotional need**, a stuck student is motivated to reach out.
- **On-ramp to the whole business**, "I'm stuck, here's my code" is answerable two ways *on-platform*: another student (community) or a **paid human (1-1 tutoring)**. (No in-platform AI answer, see §10b. External tools are the student's own business.) Same artifact feeds free help *and* the money layer.
- **Uniquely ours**, a one-click snapshot of exactly where you're stuck + the code in your editor, inside the platform, so the helper sees precisely what you see. Only possible because we own the whole environment. A real moat.

### Turning individuals into community
- **Anchor to a shared course + shared place.** "Students at [specific university] working through C# this semester", shared exams, deadlines, pain. **Density beats breadth:** five students in one class > fifty scattered strangers. Seed one course at one school at a time.
- **Presence** as a lightweight "you're not alone" signal.
- **Stuck-problem shares public-by-default within a course** → each solved thread becomes a resource for the next student. The community *compounds*.
- **Helper status**, people help when it's recognized. Reward **quality** ("40 people marked your help useful"), not just quantity. Keeps the helper economy honest.
- **Social map**, see friends'/class's maps; "you're in Loops, three classmates are ahead in Functions."

### Badges & the frontline, group status flows to the individual, and back
A coherent little two-way system binding individual and group identity:

- **Your community's standing is reflected on YOU.** If your khommunity has earned a gold shield, your profile wears it. Your group's collective achievement becomes part of your individual identity, you contribute to the group, the group's status flows back to you.
- **Within a community, the frontline is the honor roll.** **Frontline warriors** = the standout members, ranked by contribution: consistent progress, consistent participation, and *especially* consistent **helping** (helping accrues the most points). This deliberately makes the most-honored people the most *generous* ones, not just the most skilled or fastest, shaping the culture toward mutual aid.
- **Ties the axes together.** Group holds territory (headcount / score / tenure from §9b); the frontline is the *face* of who earned it.

**Design note:** the "help" that earns frontline points must be **quality** help (the "this solved it / this was useful" signal), not volume of posts, otherwise the frontline fills with people spamming low-value replies. Inherits the quality-weighted helper status below.

### Opt-in everything
**Visibility is always the student's choice, never forced**, progress sharing, finisher status, map presence. Default to private. A **"finished this section / open to helping" toggle** both respects privacy *and* creates matchmaking: it connects a stuck student to a pre-qualified helper and is the on-ramp to earning helper status.

### Competition
**Opt-in and time-boxed, not an everyday default.** Ambient permanent leaderboards demoralize the majority, this is a learning tool, default mood is calm progress. But weekend challenges, cohort sprints, and **university-vs-university territory campaigns** are energizing *because* they're events. Territory campaigns are the natural form "set up a competition" takes, collective, occasional, event-shaped.

### Khommunity IRL (side thought)
Real-world meetups (meetups.com) as the physical version of the same principle. Online tool creates local in-person groups; in-person groups drive people back to and evangelize the tool. Very on-brand for "learn like it's 2016." Later-stage growth play, needs a local user base first.

---

## 10b. Philosophy on AI and trust

**The wish:** give trust to everyone. AI should *never* become a point of discussion. No detection, no accusations, no gating.

**The reframe that makes trust not naive:** a student who cheats on khouding isn't stealing from us, there's no grade, no diploma, no employer being deceived. The *only* person harmed is the cheater, who paid (money or time) to learn and chose not to. So we don't police cheating like a university does. We design an environment where cheating feels **pointless**, because the reward we offer is the skill itself, not a checkmark.

**What "like it's 2016" actually means here:** NOT "pretend AI doesn't exist" or "wall the student into a pure environment." It means **learn the way a real developer in 2016 actually worked**, which absolutely included Googling, reading Stack Overflow, and figuring it out from docs and forums. That was *real* self-sufficient problem-solving: you still had to understand what you found, adapt it, and make it work. The student is a real developer at their desk. If they want ChatGPT or Stack Overflow open in another tab, that's their business and it's realistic.

**The strategy: make the genuine path more rewarding than the shortcut, never build an anti-AI panopticon** (which would betray the trust *and* make AI the topic we're trying to avoid). How that cashes out:

- **The real goal lives in the student's head, not on the server.** Through tone and framing, keep reminding them: this isn't a test, there's no one to impress, the code you can write is the only thing you're building. When the map is understood as a map of your *own ability*, filling it in dishonestly is obviously self-defeating. Framing, not enforcement, costs nothing.
- **Volume + real grading is itself the defense.** 25 problems per section, each must actually run against hidden tests, the friction of laundering every one through an AI approaches the friction of just learning it. The main defense is already baked into the design.
- **Make them explain, not just submit (optional, later).** A light "why does this work?" checkpoint, or a variation that's trivial if understood and impossible if copied, catches the gap between "it passed" and "I get it," without accusing anyone.
- **NO in-platform AI tutor / hint-bot.** The platform is a **realistic workbench**, not a hand-holder. We don't build a "patient TA" answer-bot, that contradicts the realism. We give you the problem and the environment, like real work does; the resourcefulness is on you (and on the *human* help in the loop, see below). We never *forbid* external AI; we just don't build a crutch into the product.

**Why this is the cleaner stance:** it fits "give trust to everyone" even better, we don't try to control *how* students get unstuck, we just don't build a crutch. Less to build (no hint system). More honest to the ethos. The thing that keeps it rigorous isn't restriction, it's that **the map only means something if *you* can actually do it.**

**Good consequence:** this makes the **human** stuck-problem share and **1-1 tutoring** *more* valuable, they're the real person in the loop (a 2016 study group / TA), which is on-brand. A built-in answer-bot never was.

**Honest caveat:** none of this makes cheating impossible, a determined person can fool any machine. We're not making it impossible, we're making it **pointless**. For a no-credential, learn-for-yourself platform, pointless is a complete victory. That is how AI stays a non-topic: by never fighting it.

**Brand boundary, no graded/proctored assessment, ever (a deliberate choice, not a missing feature).** khouding will **not** offer or sell credentialed, graded, or proctored testing. No grade, no diploma, no credential is exactly *why cheating is pointless*, the only thing you build is the skill in your own head, so dishonesty only cheats yourself. Refusing assessment-as-a-product is part of the brand, and it closes the door on the one revenue idea that would contradict this (see `tasks/60-monetization.md` §6.9). **One distinction that matters:** the platform *does* have **timing**, but timing is a **map mechanic, not an assessment one**, a time window governs whether an attempt **lights up the map** (keeping the map an honest reflection of your ability), and it **never gates completion**. Miss the window and the attempt simply doesn't light the region; you can always still finish the task and learn it. Timing serves the honesty of the map, never a grade.

**Content quality (the other "AI ruins it" fear):** the defense is our own standard. Author to a university bar; "depth is the brand" means everything gets reviewed. AI is a fine *drafting* tool (problems, tests, MCQs), we are the editor who holds the bar. For community-generated help, helper status rewarding *quality over quantity* is the guard.

---

## 11. Monetization arc

Three offerings selling the **same core content** at three price points:
1. **Self-serve platform**, courses, quizzes, graded problems, progress, map, community. Builds the audience.
2. **Bootcamp**, the structured, paid, cohort version of the same content, with deadlines and accountability. Our own bootcamp (Khoudcamp) is run semi-independently and is **invisible on khouding** (advertises externally; not a visible group/marketing surface on the map, see §9b and `tasks/60-monetization.md` §4). *(Layer to dig into, flagged, not yet designed.)*
3. **1-1 tutoring**, premium human layer on top. Struggling self-teachers and bootcampers are exactly who'll pay for a human when stuck. Fed directly by the stuck-problem share. *(Also includes the idea of assigning 1-1 tutors, to dig into.)*

Platform builds the audience; bootcamp and tutoring monetize those who need more.

---

## 12. Build order

1. **The C# course route-map, first, before any code.** It's the spine everything hangs off: the data model, the map's regions, the authoring tool, the content-effort estimate all depend on it. Building it is the cheapest way to discover whether the whole thing is real (just writing and thinking, no code, no cost). It's the **master document** the whole project references.
   - Go to **section-level granularity** (the atomic unit).
   - Build it from **the logic of C# itself**, independently (copyright-safe + better).
2. Data model mirroring the route-map.
3. Execution wrapper/adapter (against hosted Judge0 to start).
4. Student experience: editor (Monaco), run/submit, output pane, quizzes.
5. Progress rollups + the map (personal first).
6. Community, stuck-problem share first, then presence, helper status, toggles.
7. Later / north-star: nested territories, institutional views, bootcamp, 1-1 tutoring, IRL khommunities.

---

### Open threads to revisit
- Bootcamp layer, structure, cohorts, deadlines, pricing.
- 1-1 tutoring, how tutors are assigned/matched, how it connects to the stuck-problem share.
- Authoring tool, the content format must be deliberate and AI-friendly (structured, text-based). The authoring workflow is a product in itself; if making one chapter is painful, the project stalls.
