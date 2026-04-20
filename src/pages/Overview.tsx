import { Link } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Target, Brain, Dumbbell, Apple, Heart, Trophy, Users, Video,
  GraduationCap, MessageCircle, Calendar, ListChecks, TrendingUp, Compass,
  PlayCircle, ArrowRight, Zap, ShieldCheck, LineChart, Award, Flame,
  Eye, Gauge, Bot, Layers, CheckCircle2,
} from "lucide-react";

const domains = [
  { label: "Technical", icon: Dumbbell, desc: "First touch, passing, finishing, 1v1", color: "domain-technical" },
  { label: "Physical", icon: Zap, desc: "Speed, agility, power, endurance", color: "domain-physical" },
  { label: "Cognitive", icon: Eye, desc: "Scanning, decisions, spatial awareness", color: "domain-cognitive" },
  { label: "Mental", icon: Brain, desc: "Confidence, focus, mistake recovery", color: "domain-mental" },
  { label: "Recovery", icon: Heart, desc: "Mobility, sleep, workload balance", color: "domain-recovery" },
];

const pillars = [
  {
    icon: Gauge,
    title: "SPL Index",
    tagline: "The measurable center",
    body: "27 micro-skills, benchmarked by age & position, weighted across domains. One score that explains where you stand and what to fix next.",
    href: "/progress",
  },
  {
    icon: Bot,
    title: "Coach Alex AI",
    tagline: "Connective tissue",
    body: "Recommends, adjusts, explains, and coaches. Knows your index, last sessions, goals and mood. Age-calibrated language.",
    href: "/chat",
  },
  {
    icon: Target,
    title: "Adaptive Training",
    tagline: "Personal engine",
    body: "Sessions built from your lowest micro-skills. Guided drill-by-drill with cues, reps, and logging. Adapts to energy, load & streak.",
    href: "/train",
  },
  {
    icon: Video,
    title: "Real-world Analyze",
    tagline: "Closes the loop",
    body: "Upload clips, get timestamped feedback on decisions, body shape and tempo. Findings flow back into the SPL Index automatically.",
    href: "/analyze",
  },
];

const modules = [
  { icon: ListChecks, name: "Daily Checklist", desc: "5-block daily OS: readiness, training, IQ, wellness, reflection.", href: "/daily" },
  { icon: Calendar, name: "Calendar", desc: "Adaptive weekly plan, streak heatmap, match & camp layer.", href: "/calendar" },
  { icon: Compass, name: "Training Paths", desc: "Multi-week programs: Become a winger, Finishing, Confidence.", href: "/paths" },
  { icon: GraduationCap, name: "Academy", desc: "40+ elite systems, position curricula, Train Like pros.", href: "/academy" },
  { icon: TrendingUp, name: "Progress", desc: "Trajectory, spider, heatmap, parent report, percentile.", href: "/progress" },
  { icon: Apple, name: "Fuel & Mind", desc: "Pre/post fueling, breathing, visualization, sleep prep.", href: "/nutrition" },
  { icon: Users, name: "Network", desc: "Cohorts, compare mode, challenges, compete vs AI.", href: "/network" },
  { icon: MessageCircle, name: "Coach Alex", desc: "24/7 coaching chat with persistent player memory.", href: "/chat" },
];

const flow = [
  { step: "01", title: "Onboard", desc: "Profile, goals, availability, self-assessment → baseline SPL Index." },
  { step: "02", title: "Plan", desc: "Adaptive weekly calendar built around your PDAs and life." },
  { step: "03", title: "Train", desc: "Guided sessions, drill-by-drill, real-time coaching cues." },
  { step: "04", title: "Analyze", desc: "Upload match clips, AI timestamps key decisions & errors." },
  { step: "05", title: "Progress", desc: "Index updates, PDAs refresh, AI re-prescribes. Repeat." },
];

const stats = [
  { k: "5", l: "Connected domains" },
  { k: "27", l: "Benchmarked micro-skills" },
  { k: "250+", l: "Drills, all filtered" },
  { k: "40+", l: "Elite club systems" },
];

const audiences = [
  { icon: Trophy, title: "Players", body: "A personal development OS. Train with purpose, see progress, beat your benchmark." },
  { icon: ShieldCheck, title: "Parents", body: "Monthly simplified report, wellness oversight, milestone timeline. Structure over noise." },
  { icon: GraduationCap, title: "Coaches (B2B)", body: "Session & curriculum builder, team radar, weekly plans. A second product line." },
];

export default function Overview() {
  return (
    <AppLayout>
      <div className="px-4 md:px-8 py-8 md:py-12 max-w-7xl mx-auto space-y-20">
        {/* HERO */}
        <section className="relative animate-fade-up">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="relative text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-primary">SPL Academy · Overview</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance">
              Not a training app. <br />
              <span className="text-gradient">A player development OS.</span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SPL connects training, intelligence, performance analysis, wellness and coaching into
              one personalised pathway — so every player knows what to do, why, and what's next.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild className="bg-gradient-ember shadow-ember">
                <Link to="/onboarding">
                  Build my profile <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">Open dashboard</Link>
              </Button>
            </div>

            {/* Stat strip */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s) => (
                <Card key={s.l} className="bg-gradient-card p-4 border-border/60">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section className="animate-fade-up">
          <div className="eyebrow-accent mb-3">The promise</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">
            Open the app and never guess again.
          </h2>
          <div className="grid md:grid-cols-5 gap-3">
            {[
              "What to train",
              "Why it matters",
              "How it connects to the match",
              "How you're improving",
              "What's next",
            ].map((t, i) => (
              <Card key={t} className="bg-gradient-card p-5 border-border/60">
                <div className="text-xs font-mono text-primary mb-2">0{i + 1}</div>
                <div className="font-medium leading-snug">{t}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* 5 DOMAINS */}
        <section className="animate-fade-up">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="eyebrow-accent mb-3">The model</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">One player. Five connected domains.</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Technical problems often come from mental load. Flat progress often needs recovery, not volume.
                SPL diagnoses across domains — never in silos.
              </p>
            </div>
            <Badge variant="outline" className="text-primary border-primary/40"><Layers className="h-3 w-3 mr-1" /> Cross-domain engine</Badge>
          </div>
          <div className="grid md:grid-cols-5 gap-3">
            {domains.map((d) => (
              <Card key={d.label} className="bg-gradient-card p-5 border-border/60 hover:border-primary/40 transition-colors">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `hsl(var(--${d.color}) / 0.15)`, color: `hsl(var(--${d.color}))` }}
                >
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold">{d.label}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{d.desc}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4 PILLARS */}
        <section className="animate-fade-up">
          <div className="eyebrow-accent mb-3">The backbone</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Four pillars that make it a system.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <Card key={p.title} className="relative overflow-hidden bg-gradient-card p-6 md:p-7 border-border/60 group hover:border-primary/40 transition-colors">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-11 w-11 rounded-xl bg-gradient-ember flex items-center justify-center shadow-ember">
                      <p.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest">{p.tagline}</Badge>
                  </div>
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.body}</p>
                  <Button variant="ghost" size="sm" asChild className="mt-4 -ml-3 text-primary hover:text-primary">
                    <Link to={p.href}>Open <ArrowRight className="h-3.5 w-3.5" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* LOOP */}
        <section className="animate-fade-up">
          <div className="eyebrow-accent mb-3">The loop</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Onboard → Plan → Train → Analyze → Progress.</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Every cycle feeds the SPL Index, which reshapes the next cycle. The longer you train, the sharper it gets.</p>

          <div className="relative grid md:grid-cols-5 gap-3">
            <div className="hidden md:block absolute top-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {flow.map((f) => (
              <Card key={f.step} className="relative bg-gradient-card p-5 border-border/60">
                <div className="h-14 w-14 rounded-full border border-primary/40 bg-background flex items-center justify-center mb-3 font-mono text-primary font-semibold">
                  {f.step}
                </div>
                <div className="font-display font-semibold">{f.title}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* MODULES */}
        <section className="animate-fade-up">
          <div className="eyebrow-accent mb-3">What's inside</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Every module, one pathway.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {modules.map((m) => (
              <Link
                key={m.name}
                to={m.href}
                className="group rounded-xl border border-border/60 bg-gradient-card p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <m.icon className="h-4 w-4" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="font-display font-semibold">{m.name}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="animate-fade-up">
          <div className="eyebrow-accent mb-3">Who it's for</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Built for players. Trusted by parents. Scaled to coaches.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <Card key={a.title} className="bg-gradient-card p-6 border-border/60">
                <a.icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-display text-xl font-semibold">{a.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="animate-fade-up">
          <div className="eyebrow-accent mb-3">Why SPL is different</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 max-w-3xl">
            Not a drill library. Not a chatbot. A connected performance system.
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { t: "System, not features", d: "Every action feeds the Index. Every Index shift rewrites your plan." },
              { t: "Explainable AI", d: "Scores change with reasons. Nudges come with context. No black box." },
              { t: "Cross-domain diagnosis", d: "Passing drop under pressure? We prescribe confidence, not more reps." },
              { t: "Real-world loop", d: "Clip upload → AI timestamps → Index update → next session adapts." },
              { t: "Age-calibrated coaching", d: "U10 gets simple & visual. U17 gets tactical & technical." },
              { t: "Parent-ready reporting", d: "Monthly simplified report with milestones, not raw numbers." },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3 rounded-xl border border-border/60 bg-gradient-card p-5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{x.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{x.d}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="animate-fade-up">
          <Card className="relative overflow-hidden bg-gradient-ember border-primary/30 p-10 md:p-14 text-center">
            <div className="absolute inset-0 opacity-20 bg-grid" />
            <div className="relative max-w-2xl mx-auto">
              <Flame className="h-8 w-8 mx-auto text-primary-foreground mb-4" />
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Train. Think. Perform. Recover. Progress.
              </h2>
              <p className="text-primary-foreground/80 mt-4 text-sm md:text-base max-w-xl mx-auto">
                One personalised pathway. Powered by your SPL Index. Guided by Coach Alex.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/onboarding">Start onboarding <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link to="/session"><PlayCircle className="h-4 w-4" /> Try a live session</Link>
                </Button>
              </div>
            </div>
          </Card>
          <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-6">
            SPL Academy · Player Development Operating System
          </p>
        </section>
      </div>
    </AppLayout>
  );
}
