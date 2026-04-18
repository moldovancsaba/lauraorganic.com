import { AppLayout } from "@/components/AppLayout";
import { DomainBadge } from "@/components/DomainBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import heroPlayer from "@/assets/hero-player.jpg";
import {
  Play, Zap, Brain, HeartPulse, Footprints, Activity,
  Flame, Trophy, MessageSquare, ArrowUpRight, Sparkles, Target, Clock,
} from "lucide-react";

const domains = [
  { key: "technical" as const, label: "Technical", icon: Footprints, score: 78, sub: "First touch • Passing" },
  { key: "physical" as const, label: "Physical", icon: Zap, score: 65, sub: "Sprint • Endurance" },
  { key: "cognitive" as const, label: "Cognitive", icon: Brain, score: 71, sub: "Scanning • Decisions" },
  { key: "mental" as const, label: "Mental", icon: Activity, score: 82, sub: "Focus • Confidence" },
  { key: "recovery" as const, label: "Recovery", icon: HeartPulse, score: 74, sub: "Mobility • Sleep" },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute inset-0 bg-gradient-mesh" />
          <div className="absolute inset-0 bg-gradient-glow" />
          <div className="absolute -top-40 -left-20 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-20 right-0 h-[320px] w-[320px] rounded-full bg-domain-physical/15 blur-[100px]" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-end p-6 md:p-10 lg:p-14">
            <div className="max-w-2xl animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Tuesday • Match-day −2
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Welcome back, <span className="text-gradient">Marco</span>.
                <br />
                Today we sharpen <span className="text-gradient">first touch</span> & <span className="text-gradient">confidence</span>.
              </h1>
              <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                Your AI coach detected slower reactions in your last session and lighter
                fatigue today. The plan is dialed in.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <DomainBadge domain="technical" icon={Footprints} label="First touch" />
                <DomainBadge domain="cognitive" icon={Brain} label="Scanning" />
                <DomainBadge domain="mental" icon={Activity} label="Confidence" />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="bg-gradient-ember text-primary-foreground hover:opacity-90 shadow-ember font-semibold h-12 px-6">
                  <Play className="h-4 w-4 mr-2 fill-current" />
                  Start today's session • 42 min
                </Button>
                <Button size="lg" variant="outline" className="border-border/80 h-12 px-5">
                  <Clock className="h-4 w-4 mr-2" />
                  Quick 15 min
                </Button>
              </div>

              {/* Stat strip */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-border/60 pt-6">
                <div>
                  <div className="font-display text-2xl font-bold text-gradient">74</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">SPL Index</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold flex items-center gap-1.5"><Flame className="h-5 w-5 text-primary" />12</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Day streak</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">4<span className="text-base text-muted-foreground">/5</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">This week</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative w-[440px] aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-elevated animate-fade-up">
              <img
                src={heroPlayer}
                alt="Player training under floodlights"
                width={1600}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur border border-border px-2.5 py-1 text-[10px] uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live profile
              </div>
              <div className="absolute bottom-5 left-5 right-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">SPL Index</span>
                </div>
                <div className="flex items-end gap-3">
                  <div className="font-display text-6xl font-bold text-gradient leading-none">74</div>
                  <div className="text-xs text-muted-foreground pb-2">+3 this week</div>
                </div>
                <Progress value={74} className="h-1 bg-muted" />
              </div>
            </div>
          </div>
        </section>

        {/* Today's session blueprint */}
        <section className="p-6 md:p-10 lg:p-12 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 card-elevated border-border/60 p-6 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="flex items-start justify-between mb-5 relative">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Today's blueprint</div>
                <h2 className="font-display text-2xl font-bold">Adaptive Session • 42 min</h2>
              </div>
              <Button variant="ghost" size="sm" className="text-primary">
                Customize <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>

            <div className="space-y-3 relative">
              {[
                { time: "0–6", name: "Activation & mobility", domain: "recovery" as const, icon: HeartPulse, why: "Joints primed → cleaner first touch" },
                { time: "6–18", name: "Wall touch ladder · 4 sets", domain: "technical" as const, icon: Footprints, why: "Builds the touch you'll need vs Eagles" },
                { time: "18–28", name: "Scan-receive-pass rondo", domain: "cognitive" as const, icon: Brain, why: "Trains the perception → decision loop" },
                { time: "28–36", name: "Confidence finishing · 24 reps", domain: "mental" as const, icon: Activity, why: "Repeats success patterns under pressure" },
                { time: "36–42", name: "Box breathing + reflect", domain: "mental" as const, icon: Brain, why: "Locks the session into long-term memory" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/40 p-3 hover:border-primary/40 hover:bg-background/80 transition-all"
                >
                  <div className="font-mono text-xs text-muted-foreground w-12">{b.time}</div>
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10">
                    <b.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{b.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{b.why}</div>
                  </div>
                  <DomainBadge domain={b.domain} label={b.domain} className="hidden sm:inline-flex" />
                </div>
              ))}
            </div>
          </Card>

          {/* AI Coach message */}
          <div className="space-y-6">
            <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px shimmer" />
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium">Coach AI</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary">Live</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                Your scan rate dropped 14% in the second half of last match.
                Today's rondo block is built to fix exactly that — head up <em>before</em> the ball arrives.
              </p>
              <Button variant="outline" size="sm" className="mt-4 w-full border-primary/30 text-primary hover:bg-primary/10">
                <MessageSquare className="h-3.5 w-3.5 mr-2" />
                Ask your coach
              </Button>
            </Card>

            <Card className="card-elevated border-border/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium">This week</div>
                <Trophy className="h-4 w-4 text-primary" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="font-display text-2xl font-bold">4<span className="text-sm text-muted-foreground">/5</span></div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Sessions</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold flex items-center gap-1"><Flame className="h-5 w-5 text-domain-physical" />12</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Day streak</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-primary">+3</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Index</div>
                </div>
              </div>
              <div className="mt-5 flex gap-1">
                {[1,1,1,1,0.4,1,0.7].map((v, i) => (
                  <div key={i} className="flex-1 h-12 rounded bg-muted overflow-hidden flex items-end">
                    <div
                      className="w-full bg-gradient-primary"
                      style={{ height: `${v * 100}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                {["M","T","W","T","F","S","S"].map((d) => <span key={d}>{d}</span>)}
              </div>
            </Card>
          </div>
        </section>

        {/* 5 Domains */}
        <section className="px-6 md:px-10 lg:px-12 pb-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-1">Your full stack</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">5 domains. One system.</h2>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground">View progress <ArrowUpRight className="h-3.5 w-3.5 ml-1" /></Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {domains.map((d) => (
              <Card
                key={d.key}
                className="card-elevated border-border/60 p-5 group hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden"
              >
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-opacity"
                  style={{ backgroundColor: `hsl(var(--domain-${d.key}))` }}
                />
                <div className="relative">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `hsl(var(--domain-${d.key}) / 0.15)`, color: `hsl(var(--domain-${d.key}))` }}
                  >
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium">{d.label}</div>
                  <div className="text-xs text-muted-foreground mb-3">{d.sub}</div>
                  <div className="flex items-end justify-between">
                    <div className="font-display text-3xl font-bold">{d.score}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">/100</div>
                  </div>
                  <Progress
                    value={d.score}
                    className="h-1 mt-2 bg-muted"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Train Like + Paths */}
        <section className="px-6 md:px-10 lg:px-12 pb-16 grid gap-6 lg:grid-cols-2">
          <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">Train Like</div>
              <h3 className="font-display text-2xl font-bold mb-2">Pick a player. Train their game.</h3>
              <p className="text-sm text-muted-foreground mb-5 max-w-md">
                Mbappé completed 5 dribbles in his last match — proof of his 1v1 dominance.
                Here's why we train explosive 1v1 today.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Mbappé · WG", "Bellingham · CM", "Rodri · DM", "Vini Jr · LW"].map((p) => (
                  <button
                    key={p}
                    className="rounded-full border border-border/80 px-3 py-1 text-xs hover:border-primary hover:text-primary transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          <Card className="card-elevated border-border/60 p-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2">Training Paths</div>
            <h3 className="font-display text-2xl font-bold mb-5">Your journey, mapped.</h3>
            <div className="space-y-3">
              {[
                { name: "Become a winger", weeks: "12 weeks", progress: 42 },
                { name: "Improve finishing", weeks: "6 weeks", progress: 78 },
                { name: "Build confidence", weeks: "4 weeks", progress: 25 },
              ].map((p) => (
                <div key={p.name} className="rounded-lg border border-border/60 p-4 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-sm flex items-center gap-2"><Target className="h-3.5 w-3.5 text-primary" />{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.weeks}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={p.progress} className="h-1 flex-1 bg-muted" />
                    <span className="text-xs font-mono text-primary">{p.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </AppLayout>
  );
};

export default Index;
