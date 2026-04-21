import { Link } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Target, Brain, Dumbbell, Heart, Trophy, Users, Video,
  GraduationCap, ListChecks, TrendingUp,
  PlayCircle, ArrowRight, ShieldCheck, Bot,
  CheckCircle2, XCircle, AlertTriangle, Home as HomeIcon,
  Repeat, Rocket, Crown, Gauge,
} from "lucide-react";

/* ============================================================
   ATHLETE IQ — luxury navy + gold edition of the Overview deck.
   Styling is scoped via the .aiq-theme wrapper so it does NOT
   affect the rest of the platform's flame-orange branding.
   ============================================================ */

const problems = [
  { icon: XCircle, t: "Fragmented training", d: "Technical, physical, mental, tactical — all disconnected silos." },
  { icon: XCircle, t: "Infrequent feedback", d: "Athletes get subjective notes weeks after it mattered." },
  { icon: XCircle, t: "No clear pathway", d: "Kids don't know what to train, why, or if they're improving." },
  { icon: XCircle, t: "Invisible to parents", d: "No structure, no trust, no visibility into progress." },
  { icon: XCircle, t: "Coaches can't scale", d: "One coach, 20 athletes, zero personalization." },
  { icon: XCircle, t: "Potential missed", d: "Talent wasted to slow, generic, one-size-fits-all dev." },
];

const loop = [
  { icon: PlayCircle, t: "Train", d: "Guided, personalised sessions built from your gaps." },
  { icon: Video, t: "Analyze", d: "Reps decoded, decisions timestamped, patterns found." },
  { icon: Brain, t: "Understand", d: "Coach IQ explains why — in your age's language." },
  { icon: TrendingUp, t: "Improve", d: "IQ Score shifts. Priorities refresh. Plan rewrites itself." },
  { icon: Repeat, t: "Repeat", d: "Every cycle makes the system sharper and more personal." },
];

const sections = [
  {
    id: "today", tag: "01 · Today", icon: HomeIcon, title: "Today",
    tagline: "Your daily command center.",
    body: "Open the app and never guess again. Coach IQ hands you the session that matters, explains why, and shows what's next.",
    href: "/", bullets: [
      "AI-recommended session, pre-selected",
      "Today's focus micro-skills",
      "IQ Score snapshot + weekly delta",
      "Streak, readiness, rank",
      "Pro lookalike + favorite quick drill",
    ],
  },
  {
    id: "daily", tag: "02 · Daily", icon: ListChecks, title: "Daily Checklist",
    tagline: "The 5-block athlete operating system.",
    body: "Morning check-in, training, sport IQ, wellness, reflection. Builds discipline. Feeds the IQ Score. Keeps growth measurable.",
    href: "/daily", bullets: [
      "Readiness, energy, soreness sliders",
      "Session + skill + freestyle tracking",
      "1 tactical clip + 1 AI question / day",
      "Mobility, hydration, sleep prep",
      "Daily score → Strong / Elite day",
    ],
  },
  {
    id: "train", tag: "03 · Train", icon: Dumbbell, title: "Train",
    tagline: "The adaptive engine.",
    body: "Every session is built from your lowest micro-skills and adapts to energy, load, and mood. Guided drill-by-drill, with coaching cues and logging.",
    href: "/train", bullets: [
      "Quick · Standard · Full durations",
      "250+ drills, filtered by everything",
      "Multi-week paths: speed, reaction, confidence",
      "Adapts to energy, fatigue, game day",
      "Warm-up and cooldown included",
    ],
  },
  {
    id: "perform", tag: "04 · Perform", icon: Video, title: "Analyze & Progress",
    tagline: "Real-world performance, measured.",
    body: "Upload clips, get timestamped feedback on decisions, body shape, tempo. Every finding flows back into the IQ Score automatically.",
    href: "/analyze", bullets: [
      "Game & training clip upload",
      "AI moment detection + timestamped feedback",
      "27 micro-skills scored vs age/sport",
      "Spider chart, heatmap, percentile",
      "Monthly IQ & parent reports",
    ],
  },
  {
    id: "learn", tag: "05 · Learn", icon: GraduationCap, title: "Academy",
    tagline: "The intelligence layer.",
    body: "Sport systems, position curricula, Train Like pros. Ask any question, get a precise answer — then train it today.",
    href: "/academy", bullets: [
      "Game intelligence library",
      "Role curricula with clear demands",
      "Train Like mode for elite athletes",
      "Decision triggers & scenario analysis",
      "Pro coach masterclasses",
    ],
  },
  {
    id: "wellness", tag: "06 · Wellness", icon: Heart, title: "Mind & Fuel",
    tagline: "Performance is lifestyle.",
    body: "Mental routines, fuel timing, sleep, recovery, injury prevention. Coaching-led, never medical. Trusted by parents.",
    href: "/mind", bullets: [
      "Breathing, visualization, focus anchors",
      "Pre/post training fueling",
      "Sleep targets & prep routines",
      "Sport-specific mobility",
      "Overload flags & return-to-train",
    ],
  },
  {
    id: "coach", tag: "07 · Coach IQ", icon: Bot, title: "Coach IQ",
    tagline: "The connective tissue.",
    body: "Knows your IQ Score, last sessions, goals, mood. Recommends, adjusts, explains, coaches — in language calibrated to your age.",
    href: "/chat", bullets: [
      "Persistent athlete memory",
      "Pre-game & post-game support",
      "Tactical Q&A at your level",
      "Age-calibrated voice (4–10 → teens)",
      "Embedded across every module",
    ],
  },
  {
    id: "community", tag: "08 · Community", icon: Users, title: "Network",
    tagline: "Train alone. Compete together.",
    body: "Cohorts of similar athletes, monthly challenges, age-group leaderboards, compete vs AI. Structured growth, never noise.",
    href: "/network", bullets: [
      "Age + sport leaderboards",
      "Cohort pods of 8–12 athletes",
      "Monthly IQ challenges",
      "Compete vs AI benchmarks",
      "Live guest events",
    ],
  },
];

const pillars = [
  { icon: Gauge, t: "IQ Score", d: "27 micro-skills, benchmarked by age & sport. One measurable center." },
  { icon: Bot, t: "Coach IQ AI", d: "Recommends, adjusts, explains. Age-calibrated. Always on." },
  { icon: Target, t: "Adaptive Training", d: "Sessions built from your gaps. Adapts to energy, load, streak." },
  { icon: Video, t: "Real-world Loop", d: "Clip → AI feedback → Score update → next session." },
];

const stats = [
  { k: "5", l: "Connected domains" },
  { k: "27", l: "Micro-skills scored" },
  { k: "250+", l: "Guided drills" },
  { k: "Ages 4–10", l: "Foundation focus" },
];

const audiences = [
  { icon: Trophy, t: "Athletes", d: "A personal dev OS. Train with purpose, beat your benchmark, see it prove it." },
  { icon: ShieldCheck, t: "Parents", d: "Simplified monthly report, wellness oversight, milestone timeline." },
  { icon: GraduationCap, t: "Coaches", d: "Session & curriculum builder, team radar, weekly plans. A B2B line." },
];

const diffs = [
  { t: "System, not features", d: "Every action feeds the Score. Every Score shift rewrites your plan." },
  { t: "Explainable AI", d: "Scores move with reasons. No black box. Nudges come with context." },
  { t: "Cross-domain diagnosis", d: "Reaction drops under pressure? We prescribe confidence, not reps." },
  { t: "Real-world loop", d: "Clip upload → AI timestamps → Score update → next session adapts." },
  { t: "Age-calibrated coaching", d: "4–6 gets simple & visual. 8–10 gets technical & tactical." },
  { t: "Parent-ready", d: "Monthly simplified report. Milestones, not raw numbers." },
];

/* ---------- SLIDE SHELL ---------- */

function Slide({
  num, chip, children, className = "",
}: { num: string; chip?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative animate-fade-up ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs aiq-gold tracking-[0.2em]">{num}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-[hsl(42_55%_55%/0.5)] via-[hsl(220_45%_25%)] to-transparent" />
        {chip && (
          <span className="text-[10px] uppercase tracking-[0.22em] aiq-gold border border-[hsl(42_55%_55%/0.45)] rounded-full px-3 py-1">
            {chip}
          </span>
        )}
      </div>
      {children}
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function AthleteIQ() {
  return (
    <AppLayout>
      {/* Scoped luxury navy + gold theme */}
      <style>{`
        .aiq-theme {
          --aiq-navy-deep: 222 55% 7%;
          --aiq-navy: 220 50% 11%;
          --aiq-navy-2: 220 45% 15%;
          --aiq-navy-3: 220 40% 22%;
          --aiq-ink: 40 30% 92%;
          --aiq-ink-soft: 40 18% 75%;
          --aiq-ink-mute: 40 12% 60%;
          --aiq-gold: 42 65% 60%;
          --aiq-gold-bright: 45 80% 68%;
          --aiq-gold-deep: 36 55% 42%;
          background:
            radial-gradient(ellipse 80% 50% at 50% -10%, hsl(42 55% 55% / 0.10), transparent),
            radial-gradient(ellipse 60% 50% at 100% 100%, hsl(220 60% 30% / 0.18), transparent),
            linear-gradient(180deg, hsl(var(--aiq-navy-deep)) 0%, hsl(var(--aiq-navy)) 100%);
          color: hsl(var(--aiq-ink));
        }
        .aiq-theme .aiq-gold { color: hsl(var(--aiq-gold)); }
        .aiq-theme .aiq-gold-bright { color: hsl(var(--aiq-gold-bright)); }
        .aiq-theme .aiq-mute { color: hsl(var(--aiq-ink-mute)); }
        .aiq-theme .aiq-soft { color: hsl(var(--aiq-ink-soft)); }
        .aiq-theme .aiq-card {
          background: linear-gradient(160deg, hsl(220 45% 14%), hsl(222 50% 9%));
          border: 1px solid hsl(220 40% 22% / 0.7);
          box-shadow: 0 10px 40px -12px hsl(222 60% 2% / 0.7);
          color: hsl(var(--aiq-ink));
        }
        .aiq-theme .aiq-card-gold {
          border: 1px solid hsl(42 55% 55% / 0.35);
          box-shadow:
            inset 0 1px 0 hsl(42 65% 70% / 0.18),
            0 0 0 1px hsl(42 55% 55% / 0.18),
            0 10px 40px -12px hsl(222 60% 2% / 0.7);
        }
        .aiq-theme .aiq-divider {
          background: linear-gradient(90deg, transparent, hsl(42 55% 55% / 0.6), transparent);
          height: 1px;
        }
        .aiq-theme .aiq-gradient-text {
          background: linear-gradient(135deg, hsl(45 85% 70%), hsl(36 55% 50%));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .aiq-theme .aiq-gold-bg {
          background: linear-gradient(135deg, hsl(36 55% 42%), hsl(45 80% 62%) 50%, hsl(40 70% 50%));
          color: hsl(222 55% 7%);
        }
        .aiq-theme .aiq-grid {
          background-image:
            linear-gradient(hsl(220 30% 30% / 0.35) 1px, transparent 1px),
            linear-gradient(90deg, hsl(220 30% 30% / 0.35) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent 80%);
        }
        .aiq-theme .aiq-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          color: hsl(var(--aiq-gold)); font-weight: 500;
        }
        .aiq-theme .aiq-eyebrow::before {
          content: ""; width: 18px; height: 2px;
          background: linear-gradient(90deg, hsl(42 55% 55%), hsl(45 85% 70%));
          border-radius: 2px;
        }
        .aiq-theme .aiq-serif {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .aiq-theme .aiq-text-balance { text-wrap: balance; }
        .aiq-theme .aiq-link {
          color: hsl(var(--aiq-gold));
          border: 1px solid hsl(42 55% 55% / 0.4);
          background: hsl(220 50% 11% / 0.6);
          transition: all 0.2s;
        }
        .aiq-theme .aiq-link:hover {
          color: hsl(var(--aiq-gold-bright));
          border-color: hsl(42 55% 55% / 0.8);
          background: hsl(42 55% 55% / 0.08);
        }
        .aiq-theme .aiq-btn-gold {
          background: linear-gradient(135deg, hsl(36 55% 42%), hsl(45 80% 62%));
          color: hsl(222 55% 7%);
          border: none;
        }
        .aiq-theme .aiq-btn-gold:hover {
          background: linear-gradient(135deg, hsl(36 55% 48%), hsl(45 85% 68%));
          color: hsl(222 55% 7%);
        }
        .aiq-theme .aiq-btn-outline {
          background: transparent;
          border: 1px solid hsl(42 55% 55% / 0.5);
          color: hsl(var(--aiq-ink));
        }
        .aiq-theme .aiq-btn-outline:hover {
          background: hsl(42 55% 55% / 0.08);
          border-color: hsl(42 55% 55% / 0.8);
          color: hsl(var(--aiq-gold-bright));
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="aiq-theme">
        <div className="px-4 md:px-8 py-8 md:py-12 max-w-7xl mx-auto space-y-24">
          {/* COVER / VISION */}
          <section className="relative min-h-[80vh] flex items-center animate-fade-up">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-[hsl(42_55%_55%/0.18)] blur-[140px]" />
            <div className="relative w-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-9 w-9 rounded-lg aiq-gold-bg flex items-center justify-center">
                  <Crown className="h-4 w-4" />
                </div>
                <span className="aiq-serif text-xl tracking-wider">ATHLETE IQ</span>
                <span className="aiq-mute text-xs">· Building Smarter Athletes</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(42_55%_55%/0.4)] bg-[hsl(42_55%_55%/0.06)] px-3 py-1 mb-8">
                <Sparkles className="h-3.5 w-3.5 aiq-gold" />
                <span className="text-[11px] uppercase tracking-[0.22em] aiq-gold">Vision · 2026</span>
              </div>

              <div className="aiq-eyebrow mb-5">Building the athletic foundation for ages 4–10</div>

              <h1 className="aiq-serif text-5xl md:text-8xl leading-[0.95] aiq-text-balance max-w-5xl">
                The future of youth development<br />
                <span className="aiq-gradient-text italic">is not sessions.</span>
                <br />It's systems.
              </h1>

              <p className="mt-8 text-lg md:text-2xl aiq-soft max-w-3xl leading-relaxed">
                Athlete IQ is a youth athletic development system designed to give every child a
                complete athletic foundation before specializing in any sport. Through science-backed
                training, advanced reaction technology, and measurable progress.
              </p>

              <p className="mt-6 aiq-serif text-2xl md:text-3xl italic aiq-gold-bright">
                Quicker. · Sharper. · More Confident.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild className="aiq-btn-gold">
                  <Link to="/onboarding">Build my athlete profile <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button size="lg" asChild className="aiq-btn-outline">
                  <Link to="/">Open the platform</Link>
                </Button>
              </div>

              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
                {stats.map((s) => (
                  <Card key={s.l} className="aiq-card aiq-card-gold p-5">
                    <div className="aiq-serif text-3xl md:text-5xl aiq-gradient-text">{s.k}</div>
                    <div className="text-[11px] uppercase tracking-widest aiq-mute mt-2">{s.l}</div>
                  </Card>
                ))}
              </div>

              <p className="aiq-mute mt-10 italic">
                We are not a sports camp. We are the future of youth athletic intelligence.
              </p>
            </div>
          </section>

          {/* CORE PROMISE */}
          <Slide num="00" chip="Core Promise">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="aiq-card aiq-card-gold p-8 md:p-10">
                <div className="aiq-eyebrow mb-4">Core brand promise</div>
                <h3 className="aiq-serif text-3xl md:text-5xl italic aiq-gradient-text leading-tight">
                  Move Faster.<br />Think Quicker.<br />Play Smarter.
                </h3>
                <p className="aiq-soft mt-6 leading-relaxed">
                  Athlete IQ builds the athletic foundation kids need to be quick, sharp,
                  and confident across any sport.
                </p>
              </Card>
              <Card className="aiq-card p-8 md:p-10">
                <div className="aiq-eyebrow mb-4">Brand voice</div>
                <h3 className="aiq-serif text-2xl md:text-3xl">Measured. Engaging. Science-Based.</h3>
                <div className="aiq-divider my-6" />
                <ul className="space-y-3 text-sm">
                  {[
                    "We enhance both physical speed and cognitive power",
                    "Training · Development · Confidence · Progress",
                    "Coaching voice, never medical or judgmental",
                    "Built for parents to trust, kids to love",
                  ].map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-4 w-4 aiq-gold shrink-0 mt-0.5" />
                      <span className="aiq-soft">{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Slide>

          {/* PROBLEM */}
          <Slide num="01" chip="The Problem">
            <div className="max-w-3xl mb-10">
              <h2 className="aiq-serif text-4xl md:text-6xl leading-[1.05] aiq-text-balance">
                Youth development <span className="italic" style={{ color: "hsl(0 70% 60%)" }}>is broken.</span>
              </h2>
              <p className="mt-4 aiq-soft md:text-lg">
                Training is fragmented. Feedback is rare. Progress is invisible. Talent gets wasted.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {problems.map((p) => (
                <div key={p.t} className="aiq-card flex items-start gap-3 rounded-xl p-5">
                  <div className="h-9 w-9 shrink-0 rounded-lg flex items-center justify-center"
                    style={{ background: "hsl(0 70% 50% / 0.15)", color: "hsl(0 75% 65%)" }}>
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{p.t}</div>
                    <div className="text-sm aiq-mute mt-0.5 leading-relaxed">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {["Slow development", "Low engagement", "Missed potential"].map((t) => (
                <Card key={t} className="aiq-card p-5 flex items-center gap-3"
                  style={{ borderColor: "hsl(0 70% 50% / 0.3)" }}>
                  <AlertTriangle className="h-5 w-5" style={{ color: "hsl(0 75% 65%)" }} />
                  <div className="aiq-serif text-lg">{t}</div>
                </Card>
              ))}
            </div>
          </Slide>

          {/* SOLUTION */}
          <Slide num="02" chip="The Solution">
            <div className="max-w-3xl mb-10">
              <div className="aiq-eyebrow mb-3">Introducing Athlete IQ</div>
              <h2 className="aiq-serif text-4xl md:text-6xl leading-[1.05] aiq-text-balance">
                One system. <span className="aiq-gradient-text italic">One pathway.</span>
              </h2>
              <p className="mt-4 aiq-soft md:text-lg">
                Athlete IQ combines training, performance data, AI coaching, sport intelligence and
                wellness into one continuous improvement loop.
              </p>
            </div>

            {/* loop */}
            <div className="relative grid md:grid-cols-5 gap-3 mb-10">
              <div className="hidden md:block absolute top-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[hsl(42_55%_55%/0.5)] to-transparent" />
              {loop.map((f, i) => (
                <Card key={f.t} className="aiq-card relative p-5">
                  <div className="h-14 w-14 rounded-full border border-[hsl(42_55%_55%/0.5)] bg-[hsl(220_50%_8%)] flex items-center justify-center mb-3">
                    <f.icon className="h-5 w-5 aiq-gold" />
                  </div>
                  <div className="font-mono text-[10px] aiq-mute tracking-widest">0{i + 1}</div>
                  <div className="aiq-serif text-lg mt-1">{f.t}</div>
                  <div className="text-xs aiq-mute mt-1 leading-relaxed">{f.d}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {pillars.map((p) => (
                <Card key={p.t} className="aiq-card aiq-card-gold relative overflow-hidden p-5 group">
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[hsl(42_55%_55%/0.15)] blur-2xl" />
                  <div className="relative">
                    <div className="h-10 w-10 rounded-lg aiq-gold-bg flex items-center justify-center mb-3">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="aiq-serif text-lg">{p.t}</div>
                    <div className="text-sm aiq-mute mt-1 leading-relaxed">{p.d}</div>
                  </div>
                </Card>
              ))}
            </div>
          </Slide>

          {/* PLATFORM INTRO */}
          <Slide num="03" chip="The Platform">
            <div className="max-w-3xl">
              <h2 className="aiq-serif text-4xl md:text-6xl leading-[1.05] aiq-text-balance">
                Eight modules. <span className="aiq-gradient-text italic">One pathway.</span>
              </h2>
              <p className="mt-4 aiq-soft md:text-lg">
                Every screen plays a clear role in the loop. No bloat. Every action feeds the IQ Score —
                and the Score rewrites what you do next.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}
                  className="aiq-link group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
                  <s.icon className="h-3.5 w-3.5" />
                  <span className="font-medium">{s.title}</span>
                </a>
              ))}
            </div>
          </Slide>

          {/* MODULE SLIDES */}
          {sections.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <section key={s.id} id={s.id} className="relative animate-fade-up scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs aiq-gold tracking-[0.2em]">{s.tag}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[hsl(42_55%_55%/0.5)] via-[hsl(220_45%_25%)] to-transparent" />
                </div>

                <div className={`grid lg:grid-cols-2 gap-8 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Copy */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 mb-4 text-xs font-medium aiq-gold border border-[hsl(42_55%_55%/0.4)] bg-[hsl(42_55%_55%/0.08)]">
                      <s.icon className="h-3.5 w-3.5" />
                      {s.title}
                    </div>
                    <h3 className="aiq-serif text-3xl md:text-5xl leading-[1.05] aiq-text-balance">
                      {s.tagline}
                    </h3>
                    <p className="mt-4 aiq-soft md:text-lg leading-relaxed max-w-xl">{s.body}</p>
                    <ul className="mt-6 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 aiq-gold shrink-0 mt-0.5" />
                          <span className="aiq-soft">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="aiq-btn-outline mt-6">
                      <Link to={s.href}>Open {s.title} <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                  </div>

                  {/* Visual mock */}
                  <Card className="aiq-card aiq-card-gold relative overflow-hidden p-6 md:p-8 min-h-[360px]">
                    <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-[hsl(42_55%_55%/0.18)] blur-3xl" />
                    <div className="absolute inset-0 aiq-grid opacity-30" />
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-[hsl(42_55%_55%/0.4)] aiq-gold bg-transparent">
                          {s.tag.split(" · ")[1]}
                        </Badge>
                        <span className="font-mono text-xs aiq-mute">aiq://{s.id}</span>
                      </div>
                      <div className="mt-6 h-16 w-16 rounded-2xl flex items-center justify-center aiq-gold-bg">
                        <s.icon className="h-8 w-8" />
                      </div>
                      <div className="mt-auto">
                        <div className="aiq-serif text-2xl">{s.title}</div>
                        <div className="text-sm aiq-mute mt-1">{s.tagline}</div>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {s.bullets.slice(0, 3).map((b, idx) => (
                            <div key={idx}
                              className="rounded-lg border border-[hsl(220_40%_22%/0.7)] bg-[hsl(222_55%_7%/0.5)] p-2 text-[10px] aiq-mute leading-snug">
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            );
          })}

          {/* DIFFERENTIATORS */}
          <Slide num="04" chip="Why Athlete IQ">
            <div className="max-w-3xl mb-10">
              <h2 className="aiq-serif text-4xl md:text-6xl leading-[1.05] aiq-text-balance">
                Not a drill library. <span className="aiq-gradient-text italic">A connected system.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {diffs.map((x) => (
                <div key={x.t} className="aiq-card flex items-start gap-3 rounded-xl p-5">
                  <CheckCircle2 className="h-5 w-5 aiq-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">{x.t}</div>
                    <div className="text-sm aiq-mute mt-0.5 leading-relaxed">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Slide>

          {/* AUDIENCES */}
          <Slide num="05" chip="Who it's for">
            <div className="max-w-3xl mb-10">
              <h2 className="aiq-serif text-4xl md:text-6xl leading-[1.05] aiq-text-balance">
                Built for athletes. <span className="aiq-gradient-text italic">Trusted by parents. Scaled to coaches.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {audiences.map((a) => (
                <Card key={a.t} className="aiq-card p-6">
                  <a.icon className="h-6 w-6 aiq-gold mb-3" />
                  <div className="aiq-serif text-xl">{a.t}</div>
                  <p className="text-sm aiq-mute mt-2 leading-relaxed">{a.d}</p>
                </Card>
              ))}
            </div>
          </Slide>

          {/* CLOSING */}
          <section className="animate-fade-up">
            <Card className="aiq-card aiq-card-gold relative overflow-hidden p-10 md:p-16 text-center">
              <div className="absolute inset-0 opacity-20 aiq-grid" />
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at center, hsl(42 55% 55% / 0.12), transparent 70%)" }} />
              <div className="relative max-w-3xl mx-auto">
                <Rocket className="h-9 w-9 mx-auto aiq-gold mb-5" />
                <h2 className="aiq-serif text-4xl md:text-6xl leading-[1.05]">
                  Train. Think. Perform. <span className="aiq-gradient-text italic">Progress.</span>
                </h2>
                <p className="aiq-soft mt-5 md:text-lg max-w-2xl mx-auto">
                  One personalised pathway. Powered by your IQ Score. Guided by Coach IQ.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button size="lg" asChild className="aiq-btn-gold">
                    <Link to="/onboarding">Start onboarding <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button size="lg" asChild className="aiq-btn-outline">
                    <Link to="/session"><PlayCircle className="h-4 w-4" /> Try a live session</Link>
                  </Button>
                </div>
              </div>
            </Card>
            <p className="text-center text-[11px] uppercase tracking-[0.22em] aiq-mute mt-6">
              Athlete IQ · Building Smarter Athletes · © 2026
            </p>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
