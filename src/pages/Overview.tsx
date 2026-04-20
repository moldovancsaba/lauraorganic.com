import { Link } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Target, Brain, Dumbbell, Apple, Heart, Trophy, Users, Video,
  GraduationCap, MessageCircle, Calendar, ListChecks, TrendingUp, Compass,
  PlayCircle, ArrowRight, Zap, ShieldCheck, Award, Flame, Eye, Gauge, Bot,
  Layers, CheckCircle2, XCircle, AlertTriangle, Home as HomeIcon, Activity,
  Repeat, LineChart, Rocket, BookOpen, Quote,
} from "lucide-react";

/* ---------- DATA ---------- */

const problems = [
  { icon: XCircle, t: "Fragmented training", d: "Technical, physical, mental, tactical — all disconnected silos." },
  { icon: XCircle, t: "Infrequent feedback", d: "Players get subjective notes weeks after it mattered." },
  { icon: XCircle, t: "No clear pathway", d: "Players don't know what to train, why, or if they're improving." },
  { icon: XCircle, t: "Invisible to parents", d: "No structure, no trust, no visibility into progress." },
  { icon: XCircle, t: "Coaches can't scale", d: "One coach, 20 players, zero personalization." },
  { icon: XCircle, t: "Potential missed", d: "Talent wasted to slow, generic, one-size-fits-all dev." },
];

const loop = [
  { icon: PlayCircle, t: "Train", d: "Guided, personalised sessions built from your gaps." },
  { icon: Video, t: "Analyze", d: "Clips decoded, decisions timestamped, patterns found." },
  { icon: Brain, t: "Understand", d: "Coach Alex explains why — in your age's language." },
  { icon: TrendingUp, t: "Improve", d: "SPL Index shifts. PDAs refresh. Plan rewrites itself." },
  { icon: Repeat, t: "Repeat", d: "Every cycle makes the system sharper and more personal." },
];

const sections = [
  {
    id: "today",
    tag: "01 · Today",
    icon: HomeIcon,
    title: "Today",
    tagline: "Your daily command center.",
    body: "Open the app and never guess again. Coach Alex hands you the session that matters, explains why, and shows what's next.",
    href: "/",
    bullets: [
      "AI-recommended session, pre-selected",
      "Today's focus micro-skills",
      "SPL Index snapshot + weekly delta",
      "Streak, readiness, rank",
      "Pro lookalike + favorite quick drill",
    ],
    accent: "domain-technical",
  },
  {
    id: "daily",
    tag: "02 · Daily",
    icon: ListChecks,
    title: "Daily Checklist",
    tagline: "The 5-block player operating system.",
    body: "Morning check-in, training, football IQ, wellness, reflection. Builds discipline. Feeds the SPL Index. Keeps growth measurable.",
    href: "/daily",
    bullets: [
      "Readiness, energy, soreness sliders",
      "Session + weak-foot + freestyle tracking",
      "1 tactical clip + 1 AI question / day",
      "Mobility, hydration, sleep prep",
      "Daily score → Strong / Elite day",
    ],
    accent: "domain-recovery",
  },
  {
    id: "train",
    tag: "03 · Train",
    icon: Dumbbell,
    title: "Train",
    tagline: "The adaptive engine.",
    body: "Every session is built from your lowest micro-skills and adapts to energy, load, and mood. Guided drill-by-drill, with coaching cues and logging.",
    href: "/train",
    bullets: [
      "Quick · Standard · Full durations",
      "250+ drills, filtered by everything",
      "Multi-week paths: winger, finishing, confidence",
      "Adapts to energy, fatigue, match day",
      "Warm-up and cooldown included",
    ],
    accent: "domain-physical",
  },
  {
    id: "perform",
    tag: "04 · Perform",
    icon: Video,
    title: "Analyze & Progress",
    tagline: "Real-world performance, measured.",
    body: "Upload clips, get timestamped feedback on decisions, body shape, tempo. Every finding flows back into the SPL Index automatically.",
    href: "/analyze",
    bullets: [
      "Match & training clip upload",
      "AI moment detection + timestamped feedback",
      "27 micro-skills scored vs age/position",
      "Spider chart, heatmap, percentile",
      "Monthly SPL & parent reports",
    ],
    accent: "domain-cognitive",
  },
  {
    id: "learn",
    tag: "05 · Learn",
    icon: GraduationCap,
    title: "Academy",
    tagline: "The intelligence layer.",
    body: "40+ elite systems, position curricula, Train Like pros. Ask any tactical question, get a precise answer — then train it today.",
    href: "/academy",
    bullets: [
      "Tactics engine: BVB press, Barça, City, Ajax",
      "Position curricula with clear role demands",
      "Train Like mode: Mbappé, De Bruyne, Yamal",
      "Pressing triggers & scenario analysis",
      "Bundesliga masterclasses",
    ],
    accent: "domain-mental",
  },
  {
    id: "wellness",
    tag: "06 · Wellness",
    icon: Heart,
    title: "Mind & Fuel",
    tagline: "Performance is lifestyle.",
    body: "Mental routines, fuel timing, sleep, recovery, injury prevention. Coaching-led, never medical. Trusted by parents.",
    href: "/mind",
    bullets: [
      "Breathing, visualization, focus anchors",
      "Pre/post training fueling",
      "Sleep targets & prep routines",
      "Position-specific mobility",
      "Overload flags & return-to-train",
    ],
    accent: "domain-recovery",
  },
  {
    id: "coach",
    tag: "07 · Coach Alex",
    icon: Bot,
    title: "Coach Alex AI",
    tagline: "The connective tissue.",
    body: "Knows your Index, last sessions, goals, mood. Recommends, adjusts, explains, coaches — in language calibrated to your age.",
    href: "/chat",
    bullets: [
      "Persistent player memory",
      "Pre-match & post-game support",
      "Tactical Q&A at your level",
      "Age-calibrated voice (U10 → U17)",
      "Embedded across every module",
    ],
    accent: "domain-technical",
  },
  {
    id: "community",
    tag: "08 · Community",
    icon: Users,
    title: "Network",
    tagline: "Train alone. Compete together.",
    body: "Cohorts of similar players, monthly challenges, positional leaderboards, compete vs AI. Structured growth, never noise.",
    href: "/network",
    bullets: [
      "Age + position leaderboards",
      "Cohort pods of 8–12 players",
      "Monthly SPL challenges",
      "Compete vs AI benchmarks",
      "Live guest events",
    ],
    accent: "domain-cognitive",
  },
];

const pillars = [
  { icon: Gauge, t: "SPL Index", d: "27 micro-skills, benchmarked by age & position. One measurable center." },
  { icon: Bot, t: "Coach Alex AI", d: "Recommends, adjusts, explains. Age-calibrated. Always on." },
  { icon: Target, t: "Adaptive Training", d: "Sessions built from your gaps. Adapts to energy, load, streak." },
  { icon: Video, t: "Real-world Loop", d: "Clip → AI feedback → Index update → next session." },
];

const stats = [
  { k: "5", l: "Connected domains" },
  { k: "27", l: "Micro-skills scored" },
  { k: "250+", l: "Guided drills" },
  { k: "40+", l: "Elite club systems" },
];

const audiences = [
  { icon: Trophy, t: "Players", d: "A personal dev OS. Train with purpose, beat your benchmark, see it prove it." },
  { icon: ShieldCheck, t: "Parents", d: "Simplified monthly report, wellness oversight, milestone timeline." },
  { icon: GraduationCap, t: "Coaches", d: "Session & curriculum builder, team radar, weekly plans. A B2B line." },
];

const diffs = [
  { t: "System, not features", d: "Every action feeds the Index. Every Index shift rewrites your plan." },
  { t: "Explainable AI", d: "Scores move with reasons. No black box. Nudges come with context." },
  { t: "Cross-domain diagnosis", d: "Passing drops under pressure? We prescribe confidence, not reps." },
  { t: "Real-world loop", d: "Clip upload → AI timestamps → Index update → next session adapts." },
  { t: "Age-calibrated coaching", d: "U10 gets simple & visual. U17 gets tactical & technical." },
  { t: "Parent-ready", d: "Monthly simplified report. Milestones, not raw numbers." },
];

/* ---------- SLIDE SHELL ---------- */

function Slide({
  num,
  chip,
  children,
  className = "",
}: {
  num: string;
  chip?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative animate-fade-up ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-primary tracking-[0.2em]">{num}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
        {chip && (
          <Badge variant="outline" className="text-[10px] uppercase tracking-[0.18em] text-primary border-primary/40">
            {chip}
          </Badge>
        )}
      </div>
      {children}
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function Overview() {
  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-8 md:py-12 max-w-7xl mx-auto space-y-24">
        {/* COVER / VISION */}
        <section className="relative min-h-[80vh] flex items-center animate-fade-up">
          <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-60" />
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-primary/25 blur-[130px]" />
          <div className="relative w-full">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 rounded-lg bg-gradient-ember shadow-ember flex items-center justify-center">
                <Flame className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold tracking-tight">SPL OS</span>
              <span className="text-muted-foreground text-xs">· Player Development Operating System</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-primary">Vision · 2026</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight leading-[0.92] text-balance max-w-5xl">
              The future of player development <span className="text-gradient">is not sessions.</span><br />
              It's systems.
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              A fully integrated, AI-powered OS that helps players
              train, think, perform, and develop like modern footballers.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild className="bg-gradient-ember shadow-ember">
                <Link to="/onboarding">Build my player profile <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">Open the platform</Link>
              </Button>
            </div>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {stats.map((s) => (
                <Card key={s.l} className="bg-gradient-card p-5 border-border/60">
                  <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <Slide num="01" chip="The Problem">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] text-balance">
              Player development <span className="text-destructive">is broken.</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Training is fragmented. Feedback is rare. Progress is invisible. Talent gets wasted.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {problems.map((p) => (
              <div key={p.t} className="flex items-start gap-3 rounded-xl border border-border/60 bg-gradient-card p-5">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center">
                  <p.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">{p.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{p.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {[
              { i: AlertTriangle, t: "Slow development" },
              { i: AlertTriangle, t: "Low engagement" },
              { i: AlertTriangle, t: "Missed potential" },
            ].map((x) => (
              <Card key={x.t} className="bg-destructive/5 border-destructive/20 p-5 flex items-center gap-3">
                <x.i className="h-5 w-5 text-destructive" />
                <div className="font-display font-semibold">{x.t}</div>
              </Card>
            ))}
          </div>
        </Slide>

        {/* SOLUTION */}
        <Slide num="02" chip="The Solution">
          <div className="max-w-3xl mb-10">
            <div className="eyebrow-accent mb-3">Introducing SPL OS</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] text-balance">
              One system. <span className="text-gradient">One pathway.</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              SPL OS combines training, performance data, AI coaching, tactical intelligence and wellness
              into one continuous improvement loop.
            </p>
          </div>

          {/* loop */}
          <div className="relative grid md:grid-cols-5 gap-3 mb-10">
            <div className="hidden md:block absolute top-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {loop.map((f, i) => (
              <Card key={f.t} className="relative bg-gradient-card p-5 border-border/60">
                <div className="h-14 w-14 rounded-full border border-primary/40 bg-background flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest">0{i + 1}</div>
                <div className="font-display font-semibold mt-1">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.d}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {pillars.map((p) => (
              <Card key={p.t} className="relative overflow-hidden bg-gradient-card p-5 border-border/60 group hover:border-primary/40 transition-colors">
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative">
                  <div className="h-10 w-10 rounded-lg bg-gradient-ember flex items-center justify-center shadow-ember mb-3">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="font-display font-semibold">{p.t}</div>
                  <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.d}</div>
                </div>
              </Card>
            ))}
          </div>
        </Slide>

        {/* SECTION INTRO */}
        <Slide num="03" chip="The Platform">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] text-balance">
              Eight modules. <span className="text-gradient">One pathway.</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Every screen plays a clear role in the loop. No bloat. Every action feeds the SPL Index —
              and the Index rewrites what you do next.
            </p>
          </div>

          {/* nav strip */}
          <div className="mt-10 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-gradient-card px-3 py-1.5 text-xs hover:border-primary/50 hover:text-primary transition-colors"
              >
                <s.icon className="h-3.5 w-3.5" />
                <span className="font-medium">{s.title}</span>
              </a>
            ))}
          </div>
        </Slide>

        {/* MODULE SLIDES — alternating layout */}
        {sections.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              className="relative animate-fade-up scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-primary tracking-[0.2em]">{s.tag}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
              </div>

              <div className={`grid lg:grid-cols-2 gap-8 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Copy */}
                <div>
                  <div
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 mb-4 text-xs font-medium"
                    style={{
                      background: `hsl(var(--${s.accent}) / 0.12)`,
                      color: `hsl(var(--${s.accent}))`,
                    }}
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.title}
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] text-balance">
                    {s.tagline}
                  </h3>
                  <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed max-w-xl">
                    {s.body}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-6">
                    <Link to={s.href}>
                      Open {s.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual mock card */}
                <Card className="relative overflow-hidden bg-gradient-card border-border/60 p-6 md:p-8 min-h-[360px]">
                  <div
                    className="absolute -top-16 -right-16 h-52 w-52 rounded-full blur-3xl"
                    style={{ background: `hsl(var(--${s.accent}) / 0.25)` }}
                  />
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[10px] uppercase tracking-widest">
                        {s.tag.split(" · ")[1]}
                      </Badge>
                      <span className="font-mono text-xs text-muted-foreground">spl://{s.id}</span>
                    </div>
                    <div
                      className="mt-6 h-16 w-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `hsl(var(--${s.accent}) / 0.15)`,
                        color: `hsl(var(--${s.accent}))`,
                      }}
                    >
                      <s.icon className="h-8 w-8" />
                    </div>
                    <div className="mt-auto">
                      <div className="font-display text-2xl font-bold">{s.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{s.tagline}</div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {s.bullets.slice(0, 3).map((b, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-border/60 bg-background/40 p-2 text-[10px] text-muted-foreground leading-snug"
                          >
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
        <Slide num="04" chip="Why SPL">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] text-balance">
              Not a drill library. <span className="text-gradient">A connected system.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {diffs.map((x) => (
              <div key={x.t} className="flex items-start gap-3 rounded-xl border border-border/60 bg-gradient-card p-5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{x.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </Slide>

        {/* WHO IT'S FOR */}
        <Slide num="05" chip="Who it's for">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] text-balance">
              Built for players. <span className="text-gradient">Trusted by parents. Scaled to coaches.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <Card key={a.t} className="bg-gradient-card p-6 border-border/60">
                <a.icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-display text-xl font-semibold">{a.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.d}</p>
              </Card>
            ))}
          </div>
        </Slide>

        {/* CLOSING */}
        <section className="animate-fade-up">
          <Card className="relative overflow-hidden bg-gradient-ember border-primary/30 p-10 md:p-16 text-center">
            <div className="absolute inset-0 opacity-20 bg-grid" />
            <div className="relative max-w-3xl mx-auto">
              <Rocket className="h-9 w-9 mx-auto text-primary-foreground mb-5" />
              <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.02]">
                Train. Think. Perform. Recover. Progress.
              </h2>
              <p className="text-primary-foreground/85 mt-5 md:text-lg max-w-2xl mx-auto">
                One personalised pathway. Powered by your SPL Index. Guided by Coach Alex.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/onboarding">Start onboarding <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to="/session"><PlayCircle className="h-4 w-4" /> Try a live session</Link>
                </Button>
              </div>
            </div>
          </Card>
          <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-6">
            SPL OS · Player Development Operating System · © 2026
          </p>
        </section>
      </div>
    </AppLayout>
  );
}
