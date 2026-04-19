import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { DomainBadge } from "@/components/DomainBadge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import {
  Footprints, Zap, Brain, Activity, HeartPulse, Play, Clock, Flame, Filter,
  Sparkles, Target, ArrowUpRight, Compass, ChevronRight,
} from "lucide-react";

const sessions = [
  { title: "Improve passing", desc: "Sharpen short, long & one-touch", domain: "technical" as const, icon: Footprints, mins: 35, intensity: "Medium", level: "Intermediate" },
  { title: "Speed & agility", desc: "Acceleration ladders + COD", domain: "physical" as const, icon: Zap, mins: 28, intensity: "High", level: "Advanced" },
  { title: "Game intelligence", desc: "Scanning & decision rondos", domain: "cognitive" as const, icon: Brain, mins: 25, intensity: "Low", level: "All levels" },
  { title: "Confidence training", desc: "Repeat success patterns", domain: "mental" as const, icon: Activity, mins: 18, intensity: "Low", level: "All levels" },
  { title: "Recovery day", desc: "Mobility + breathing reset", domain: "recovery" as const, icon: HeartPulse, mins: 22, intensity: "Easy", level: "All levels" },
  { title: "First touch lab", desc: "Wall work, control, weight", domain: "technical" as const, icon: Footprints, mins: 30, intensity: "Medium", level: "Intermediate" },
  { title: "Endurance build", desc: "Interval base capacity", domain: "physical" as const, icon: Zap, mins: 45, intensity: "High", level: "Advanced" },
  { title: "Pre-game routine", desc: "Activate body + mind", domain: "mental" as const, icon: Activity, mins: 12, intensity: "Easy", level: "All levels" },
];

const Train = () => {
  return (
    <AppLayout>
      <div className="p-6 md:p-10 lg:p-12">
        <PageHeader
          eyebrow="Train · Adaptive Engine"
          title="What should I train today?"
          description="Pick a goal — your AI coach will adapt the session to your fatigue, mood and last performance."
        >
          <Button variant="outline" size="sm"><Filter className="h-3.5 w-3.5 mr-2" />Filter</Button>
          <Button size="sm" className="bg-gradient-ember text-primary-foreground shadow-ember"><Flame className="h-3.5 w-3.5 mr-2" />Quick 15</Button>
        </PageHeader>

        {/* AI-recommended hero session */}
        <Card className="card-elevated border-primary/30 ring-ember p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="eyebrow-accent mb-3">AI Recommended · For you · Right now</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3">
                Adaptive Session — built around your <span className="text-gradient">3 lowest</span> micro-skills.
              </h2>
              <p className="text-muted-foreground mb-5 max-w-xl">
                Targets scanning, weak foot and mistake recovery. 5 blocks · 42 minutes · medium intensity, scaled to your energy log.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <DomainBadge domain="cognitive" icon={Brain} label="Scanning · 35%" />
                <DomainBadge domain="technical" icon={Footprints} label="Weak foot · 30%" />
                <DomainBadge domain="mental" icon={Activity} label="Recovery · 20%" />
                <DomainBadge domain="recovery" icon={HeartPulse} label="Warm-up · 15%" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/session">
                  <Button size="lg" className="bg-gradient-ember text-primary-foreground shadow-ember h-12 px-6">
                    <Play className="h-4 w-4 mr-2 fill-current" />Start session · 42 min
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-border/80 h-12">
                  Preview blueprint
                </Button>
              </div>
            </div>
            <div className="surface-glass rounded-2xl p-5 space-y-3">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Skill DNA · this session</div>
              {[
                { l: "Scanning", v: 35, c: "domain-cognitive" },
                { l: "Weak foot", v: 30, c: "domain-technical" },
                { l: "Mistake recovery", v: 20, c: "domain-mental" },
                { l: "Warm-up / mobility", v: 15, c: "domain-recovery" },
              ].map((d) => (
                <div key={d.l}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span>{d.l}</span>
                    <span className="font-mono text-muted-foreground">{d.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full" style={{ width: `${d.v * 2}%`, backgroundColor: `hsl(var(--${d.c}))` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Duration switcher */}
        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {[
            { l: "Quick", t: "15–20 min", d: "Lunch break, low equipment", icon: Clock },
            { l: "Standard", t: "45 min", d: "Focused, balanced load", icon: Target, primary: true },
            { l: "Full", t: "60–90 min", d: "Match-week heavy work", icon: Flame },
          ].map((o) => (
            <Card key={o.l} className={`p-5 cursor-pointer transition-all card-elevated border-border/60 hover:border-primary/40 ${o.primary ? "border-primary/40 ring-ember" : ""}`}>
              <div className="flex items-center justify-between mb-2">
                <o.icon className={`h-4 w-4 ${o.primary ? "text-primary" : "text-muted-foreground"}`} />
                {o.primary && <span className="text-[10px] uppercase tracking-widest text-primary">Recommended</span>}
              </div>
              <div className="font-display text-lg font-bold">{o.l} · <span className="text-muted-foreground font-normal">{o.t}</span></div>
              <div className="text-xs text-muted-foreground">{o.d}</div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex items-end justify-between mb-4">
            <h3 className="font-display text-xl font-bold">Browse by goal</h3>
            <Link to="/drills" className="text-xs text-primary inline-flex items-center hover:underline">
              Full drill library <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
          <TabsList className="bg-muted/40 border border-border/60">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="physical">Physical</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
            <TabsTrigger value="mental">Mental</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sessions.map((s) => (
                <Card key={s.title} className="card-elevated border-border/60 p-5 group hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer relative overflow-hidden">
                  <div
                    className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-15 group-hover:opacity-30 blur-2xl transition-opacity"
                    style={{ backgroundColor: `hsl(var(--domain-${s.domain}))` }}
                  />
                  <div className="relative">
                    <div
                      className="h-11 w-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `hsl(var(--domain-${s.domain}) / 0.15)`, color: `hsl(var(--domain-${s.domain}))` }}
                    >
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                    <div className="flex items-center justify-between text-xs mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{s.mins}m</span>
                        <span className="text-border">·</span>
                        <span>{s.intensity}</span>
                      </div>
                      <DomainBadge domain={s.domain} label={s.level} />
                    </div>
                    <Button size="sm" variant="outline" className="w-full border-border/80 group-hover:bg-gradient-ember group-hover:text-primary-foreground group-hover:border-transparent transition-all">
                      <Play className="h-3.5 w-3.5 mr-2 fill-current" /> Start
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          {(["technical","physical","cognitive","mental","recovery"] as const).map((t) => (
            <TabsContent key={t} value={t} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sessions.filter(s => s.domain === t).map((s) => (
                  <Card key={s.title} className="card-elevated border-border/60 p-5 hover:border-primary/40 transition-all cursor-pointer">
                    <div
                      className="h-10 w-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `hsl(var(--domain-${s.domain}) / 0.15)`, color: `hsl(var(--domain-${s.domain}))` }}
                    >
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{s.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground"><Clock className="h-3 w-3 inline mr-1" />{s.mins}m</span>
                      <DomainBadge domain={s.domain} label={s.level} />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Adaptive logic strip */}
        <Card className="card-elevated border-border/60 p-6 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-display font-semibold">Adaptive logic · always on</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
              {[
                { t: "Low motivation", d: "→ shorter, confidence-building drills" },
                { t: "High energy", d: "→ volume + intensity step-up" },
                { t: "Missed sessions", d: "→ AI check-in + plan adjusted" },
                { t: "Repeated PDA", d: "→ targeted drill block prescribed" },
                { t: "Post-game day", d: "→ recovery session suggested" },
              ].map((a) => (
                <div key={a.t} className="rounded-lg border border-border/60 bg-background/40 p-4">
                  <div className="text-xs font-semibold text-primary mb-1">{a.t}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{a.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Training paths cross-link */}
        <Card className="card-elevated border-border/60 p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <div className="eyebrow-accent mb-3">Training Paths</div>
              <h3 className="font-display text-2xl font-bold mb-2">Bigger goals? Pick a multi-week path.</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-md">
                "Become a winger", "Improve finishing", "Build confidence" — paths sequence your sessions and adapt as your SPL Index changes.
              </p>
              <Link to="/paths">
                <Button className="bg-gradient-ember text-primary-foreground shadow-ember">
                  Explore paths <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { l: "Become a winger", p: 42 },
                { l: "Improve finishing", p: 78 },
                { l: "Build confidence", p: 25 },
                { l: "Speed & agility", p: 60 },
              ].map((p) => (
                <div key={p.l} className="rounded-lg border border-border/60 bg-background/40 p-3">
                  <div className="text-xs font-medium mb-2 truncate flex items-center gap-1.5">
                    <Compass className="h-3 w-3 text-primary shrink-0" /> {p.l}
                  </div>
                  <Progress value={p.p} className="h-1" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Train;
